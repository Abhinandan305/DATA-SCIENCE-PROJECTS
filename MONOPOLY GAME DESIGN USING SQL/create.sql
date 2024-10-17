-----NAME-ABHINANDAN DAS(11349153)-----

CREATE TABLE Properties (

    PropertyID INT PRIMARY KEY,

    Name VARCHAR(255) NOT NULL Unique, --property name

    Cost INT NOT NULL, --cost of each property

    Colour VARCHAR(255) NOT NULL--colour group of the property

);

CREATE TABLE BONUS(

  Bonus_ID INT PRIMARY KEY,

  descr varchar(255),---type of bonus

  activity varchar(255), --actions to be performed based on bonus

  amnt INT NOT NULL --amount based on bonus conditions

);  



CREATE TABLE Players (

    PlayerID INT PRIMARY KEY,

    Name VARCHAR(255) NOT NULL Unique,

    TokenID VARCHAR(255), ----token used by each player

    CurrentLoc VARCHAR(255), ---current location of each player

    Bank_Balance INT, ---bank balance of players

    PropertiesOwned VARCHAR(255), --properties owned by each player

	FOREIGN KEY (TokenID) REFERENCES TOKEN (token_id)

);



Create Table TOKEN(

token_id INT PRIMARY KEY,

Name varchar(255) NOT NULL Unique--Stores Token used in the game by each player

);



CREATE TABLE Gameplay (

    MoveID INT PRIMARY KEY,  -- Unique move ID

    PlayerName VARCHAR(255) NOT NULL,  -- player making the move

    DiceResult INT,  -- dice roll result

    NewLocation VARCHAR(255),	-- Player's new location post roll
	
	RoundNo INT NOT NULL

);


CREATE TABLE AuditTrail (

    AuditID INTEGER PRIMARY KEY AUTOINCREMENT,  -- Unique audit entry ID

    PlayerID INT NOT NULL,  -- Foreign key for the Players table (PlayerID)

    LocationLandedOn VARCHAR(255) NOT NULL,  -- latest location

    CurrentBalance INT,  -- Current bank balance of each player

    GameRound INT NOT NULL,  -- current game round
    FOREIGN KEY (PlayerID) REFERENCES Players (PlayerID)
    --FOREIGN KEY (LocationLandedOn) REFERENCES Players (CurrentLoc)---this we cant do since audittrail table is updated real time with players table

);


CREATE TRIGGER jail_entry
AFTER INSERT ON AuditTrail
FOR EACH ROW
WHEN NEW.LocationLandedOn = 'Go to jail'
BEGIN
    -- Update the player's current location to 'Jail'
    UPDATE Players
    SET CurrentLoc = 'Jail'
    WHERE PlayerID = NEW.PlayerID;
END;

CREATE TRIGGER BonusesAndPenalties
AFTER INSERT ON Gameplay
FOR EACH ROW
BEGIN
    UPDATE Players
    SET Bank_Balance = Bank_Balance + (
        SELECT amnt
        FROM BONUS
        WHERE descr = NEW.NewLocation
    )
    WHERE Name = NEW.PlayerName;
END;


-----TRIED ALTERNATIVE APPROACH WITH TRIGGERS(COMPLEX)
/*CREATE TRIGGER PropertyCost
AFTER INSERT ON Move
FOR EACH ROW
WHEN NEW.NewLocation NOT IN (
    SELECT DISTINCT PropertiesOwned FROM Players
    UNION
    SELECT DISTINCT descr FROM BONUS
)
AND NEW.NewLocation != 'Jail'
BEGIN
    UPDATE Players
    SET Bank_Balance = Bank_Balance - NEW.Cost,
    PropertiesOwned = PropertiesOwned || ', ' || NEW.Name
    WHERE Name = NEW.PlayerName;
END;
 
Drop trigger PropertyCost;
 
Drop trigger DeductRent;*/
 
/*CREATE TRIGGER DeductRent
AFTER INSERT ON Move
FOR EACH ROW
WHEN NEW.NewLocation IN (SELECT PropertiesOwned FROM Players)
BEGIN
    UPDATE Players
    SET Bank_Balance = Bank_Balance - (SELECT Cost FROM Properties WHERE Name = NEW.NewLocation)
    WHERE Name = NEW.PlayerName;
END;*/
 
 
--ALTERNATIVE APPROACH TO THE PROBLEM
 
/*
---CREATE TRIGGER Purchase
AFTER INSERT ON Move
WHEN NEW.NewLocation NOT IN (SELECT PropertiesOwned FROM Players)
BEGIN
    -- Deduct property cost from player's bank balance
    UPDATE Players
    SET Bank_Balance = Bank_Balance - (SELECT Cost FROM Properties WHERE Name = NEW.NewLocation)
    WHERE Name = NEW.PlayerName;
    -- Add the property to the player's list of owned properties
    UPDATE Players
    SET PropertiesOwned = PropertiesOwned || ', ' || NEW.NewLocation
    WHERE Name = NEW.PlayerName;
END;
CREATE TRIGGER Rent
AFTER INSERT ON Move
FOR EACH ROW
WHEN NEW.NewLocation IN (SELECT PropertiesOwned FROM Players)
BEGIN
    -- Deduct rent cost from player's bank balance (assuming double rent)
    UPDATE Players
    SET Bank_Balance = Bank_Balance - (SELECT Cost FROM Properties WHERE Name = NEW.NewLocation)
    WHERE Name = NEW.PlayerName;
END;
*/
