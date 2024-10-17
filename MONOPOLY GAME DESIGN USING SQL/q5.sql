-----NAME-ABHINANDAN DAS(11349153)-----
---G5

--JANE ROLLS 5


UPDATE Players
SET CurrentLoc = (SELECT NewLocation FROM Gameplay WHERE PlayerName = 'Jane' AND DiceResult = 5),Bank_Balance = Bank_Balance - (select cost from Properties where Name ='Victoria')
WHERE Name = 'Jane';  --jane lands in victoria so she pays rent to bill

Update Players
SET Bank_Balance = Bank_Balance + (select cost from Properties where Name ='Victoria')
where Name = 'Bill'; --Adding to Bill's bank balance



INSERT INTO AuditTrail (PlayerID, LocationLandedOn, CurrentBalance, GameRound)
SELECT Players.PlayerID, Gameplay.NewLocation, Players.Bank_Balance, Gameplay.RoundNo
FROM Players
JOIN Gameplay ON Players.Name = 'Jane' AND Gameplay.MoveID ='5';