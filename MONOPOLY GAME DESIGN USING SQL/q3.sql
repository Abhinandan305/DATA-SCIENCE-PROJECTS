-----NAME-ABHINANDAN DAS(11349153)-----
-- Update Mary's current location
--G3
	 
UPDATE Players
SET CurrentLoc = (SELECT Newlocation FROM Gameplay WHERE PlayerName = 'Mary' AND DiceResult = 4)
WHERE Name = 'Mary';  --Mary lands in go to jail so no modifications in her balance

--trigger will come into play here because she landed in 'go to jail'


INSERT INTO AuditTrail (PlayerID, LocationLandedOn, CurrentBalance, GameRound)
SELECT Players.PlayerID, Gameplay.NewLocation, Players.Bank_Balance, Gameplay.RoundNo
FROM Players 
JOIN Gameplay ON Players.Name = 'Mary' AND Gameplay.MoveID ='3';

