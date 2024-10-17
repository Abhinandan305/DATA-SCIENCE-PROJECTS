-----NAME-ABHINANDAN DAS(11349153)-----
----G6
----Norman rolls 4


UPDATE Players
SET CurrentLoc = (SELECT NewLocation FROM Gameplay WHERE PlayerName = 'Norman' AND DiceResult = 4),Bank_Balance = Bank_Balance + (select amnt from BONUS where descr ='Community chest 1')
WHERE Name = 'Norman';  --Norman gets Bonus so he wins 100 pounds


INSERT INTO AuditTrail (PlayerID, LocationLandedOn, CurrentBalance, GameRound)
SELECT Players.PlayerID, Gameplay.NewLocation, Players.Bank_Balance, Gameplay.RoundNo
FROM Players
JOIN Gameplay ON Players.Name = 'Norman' AND Gameplay.MoveID ='6';