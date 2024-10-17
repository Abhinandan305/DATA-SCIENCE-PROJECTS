-----NAME-ABHINANDAN DAS(11349153)-----
---VIEW



CREATE VIEW gameView AS

SELECT DISTINCT

    p.Name AS PlayerName,

    p.CurrentLoc AS Position,

    p.Bank_Balance AS BankBalance,

    p.PropertiesOwned AS PropertiesOwned,

	    (

        CASE

            WHEN (

                SELECT MAX(GameRound)

                FROM AuditTrail g 

                WHERE g.PlayerID = p.PlayerID

            ) IS NOT NULL

            THEN (

                SELECT MAX(GameRound)

                FROM AuditTrail g 

                WHERE g.PlayerID = p.PlayerID

            )

            ELSE (

                SELECT min(RoundNo)

                FROM Gameplay m 

                WHERE m.PlayerName = p.Name

            )

        END

    ) AS RoundNumber

	FROM Players p

;
