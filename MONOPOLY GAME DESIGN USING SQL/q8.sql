-----NAME-ABHINANDAN DAS(11349153)-----
---G8
----Bill roles a 6 to reach Uni Place and then rolls 3 to go to community chest 1

	
UPDATE Players
SET CurrentLoc = (SELECT NewLocation FROM Gameplay WHERE PlayerName = 'Bill' and MoveID ='10'),Bank_Balance = Bank_Balance +( select BONUS.amnt from BONUS where descr ='Community chest 1')+(select BONUS.amnt from BONUS where descr='GO')
WHERE Name = 'Bill'; ---Bill recieves 300 because he gets chance 1 bonus so 100 and also he crossed go so more 200

INSERT INTO AuditTrail (PlayerID, LocationLandedOn, CurrentBalance, GameRound)
SELECT Players.PlayerID, Gameplay.NewLocation, Players.Bank_Balance, Gameplay.RoundNo
FROM Players
JOIN Gameplay ON Players.Name = 'Bill' AND Gameplay.MoveID ='10';
