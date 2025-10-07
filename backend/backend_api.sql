--A)  A hét törpe fogadó:
Select szobak.sznev as "Szoba neve", szobak.agy as "Ágyak száma" from szobak

-- B)  A szobák kihasználtsága:
SELECT foglalasok.szoba, SUM(foglalasok.fo) as "vendégek", DATEDIFF(foglalasok.tav, foglalasok.erk) AS "vendégéjszakák" from foglalasok GROUP BY DATEDIFF(foglalasok.tav,foglalasok.erk) ASC

-- C)  A választott szoba foglaltsága:
SELECT vendegek.vnev AS "név", foglalasok.erk as "érkezés", foglalasok.tav as "távozás" FROM foglalasok INNER JOIN vendegek ON foglalasok.vendeg = vendegek.vsorsz GROUP BY vendegek.vnev ASC