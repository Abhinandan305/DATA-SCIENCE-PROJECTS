-----NAME-ABHINANDAN DAS(11349153)-----
---G7
---Mary comes out of jail with 6 and then rolls a 5

UPDATE Players
SET CurrentLoc = (SELECT NewLocation FROM Gameplay WHERE PlayerName = 'Mary' 
and MoveID in (SELECT max(MoveID) from Gameplay where PlayerName = 'Mary' and RoundNo = 2)),Bank_Balance = Bank_Balance - (select cost*2 from Properties where Name ='Oak House')
where name='Mary';

---Mary lands in Oak House owned by Norman but,since Norman also owns another building from the same colour group so Mary pays double rent

Update Players
SET Bank_Balance = Bank_Balance + (select cost*2 from Properties where Name ='Oak House')
where Name = 'Norman';--Add rent to Norman's balance

INSERT INTO AuditTrail (PlayerID, LocationLandedOn, CurrentBalance, GameRound)
SELECT Players.PlayerID, Gameplay.NewLocation, Players.Bank_Balance, Gameplay.RoundNo
FROM Players
JOIN Gameplay ON Players.Name = 'Mary' and Gameplay.RoundNo = 2 and 
MoveID in (SELECT max(MoveID) from Gameplay where PlayerName = 'Mary' and RoundNo = 2);

