-----NAME-ABHINANDAN DAS(11349153)-----

-- Update Norman's current location
--G2
UPDATE Players
SET CurrentLoc = (SELECT Newlocation FROM Gameplay WHERE PlayerName = 'Norman' AND DiceResult = 1),Bank_Balance = Bank_Balance + (select Bonus.amnt from Bonus where descr = 'Chance 1')
WHERE Name = 'Norman';--Norman lands in chance 1 so he pays 50 pounds to his other 3 competitors

UPDATE Players
Set Bank_Balance = Bank_Balance+ 50 where Name in ('Bill','Mary','Jane');  --adding 50 to the balance ofother 3 players

INSERT INTO AuditTrail (PlayerID, LocationLandedOn, CurrentBalance, GameRound)
SELECT Players.PlayerID, Gameplay.NewLocation, Players.Bank_Balance, Gameplay.RoundNo
FROM Players 
JOIN Gameplay ON Players.Name = 'Norman' AND Gameplay.MoveID ='2';
