-----NAME-ABHINANDAN DAS(11349153)-----

--G1
-- Update Jane's current location

UPDATE Players
SET CurrentLoc = (SELECT NewLocation FROM Gameplay WHERE PlayerName = 'Jane' AND DiceResult = 3),Bank_Balance = Bank_Balance+ (select Bonus.amnt from BONUS where BONUS.descr ='GO') 
WHERE Name = 'Jane';  --Jane lands in Go,so she will collect 200 pounds*/

INSERT INTO AuditTrail (PlayerID, LocationLandedOn, CurrentBalance, GameRound)
SELECT Players.PlayerID, Gameplay.NewLocation, Players.Bank_Balance, Gameplay.RoundNo
FROM Players
JOIN Gameplay ON Players.Name = 'Jane' AND Gameplay.MoveID ='1'; --audit entry for each move


