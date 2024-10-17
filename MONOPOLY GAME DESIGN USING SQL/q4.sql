-----NAME-ABHINANDAN DAS(11349153)-----
-- Update Bill's current location
---G4

UPDATE Players
SET CurrentLoc = (SELECT NewLocation FROM Gameplay WHERE PlayerName = 'Bill' AND DiceResult = 2)
WHERE Name = 'Bill';--Bill lands in AMBS(unowned) so he buys it

UPDATE Players
SET PropertiesOwned = PropertiesOwned || ', AMBS',Bank_Balance = Bank_Balance -(select cost from Properties where Name ='AMBS') 
WHERE Name = 'Bill';--adding to his list of owned properties


INSERT INTO AuditTrail (PlayerID, LocationLandedOn, CurrentBalance, GameRound)
SELECT Players.PlayerID, Gameplay.NewLocation, Players.Bank_Balance, Gameplay.RoundNo
FROM Players
JOIN Gameplay ON Players.Name = 'Bill' AND Gameplay.MoveID='4';
