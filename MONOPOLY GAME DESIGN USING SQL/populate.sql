
-----NAME-ABHINANDAN DAS(11349153)-----

INSERT INTO TOKEN (token_id,Name) VALUES
    ('1','dog'),
    ('2','car'),
    ('3','battleship'),
    ('4','top hat'),
    ('5','thimble'),
    ('6','boot');
	
	
INSERT INTO Gameplay (MoveID,PlayerName, DiceResult, NewLocation,RoundNo) VALUES
    ('1','Jane', '3', 'GO','1'),
    ('2','Norman', '1', 'Chance 1','1'),
    ('3','Mary', '4', 'Go to jail','1'),
    ('4','Bill', '2', 'AMBS','1'),
	('5','Jane', '5', 'Victoria','2'),
    ('6','Norman', '4', 'Community chest 1','2'),
    ('7','Mary', '6', 'Jail','2'),
    ('8','Mary','5','Oak House','2'),
	('9','Bill','6','Uni Place','2'),
	('10','Bill','3','Community chest 1','2');
	
	
INSERT INTO Players (PlayerID,Name,TokenID,CurrentLoc, Bank_Balance, PropertiesOwned) VALUES 
   ('1','Mary', '3', 'Free Parking','190', 'Uni Place'),
   ('2','Bill', '1', 'Owens Park','500', 'Victoria'),
   ('3','Jane', '2', 'AMBS','150', 'Co-Op'),
   ('4','Norman', '5', 'Killburn','250', 'Oak House,Owens Park');
   
INSERT INTO BONUS (Bonus_ID,descr,activity,amnt) VALUES 
    ('1','Chance 1','Pay each of the other players 50','-150'),
    ('2','Chance 2','Move forward 3 spaces','0'),
    ('3','Community chest 1','For winning a Beauty Contest, you win 100','100'),
	('4','Community chest 2','Your library books are overdue. Play a fine of 30','-30'),
    ('5','Free Parking','No Action','0'),
    ('6','Go to Jail','Go to Jail, do not pass GO, do not collect 200','0'),
	('7','GO','Collect 200','200');
	
INSERT INTO Properties (PropertyID,Name,Cost,Colour) VALUES
     ('1','Oak House', 100, 'Orange'),
     ('2','Owens Park', 30, 'Orange'),
     ('3','AMBS', 400, 'Blue'),
     ('4','Co-Op', 30, 'Blue'),
     ('5','Kilburn', 120, 'Yellow'),
     ('6','Uni Place', 100, 'Yellow'),
     ('7','Victoria', 75, 'Green'),
     ('8','Piccadilly', 35, 'Green');	
	 
	 

	