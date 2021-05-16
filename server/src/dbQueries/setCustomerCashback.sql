CREATE TEMP VIEW cb AS
SELECT sum(c."prize"), u."id"
FROM "Users" AS u
JOIN "Contests" AS c ON c."userId" = u."id"
WHERE 
	"role" = 'customer' AND
	c."createdAt" BETWEEN '%-12-25T00:00:00' AND '%-01-14T23:59:59'
GROUP BY u."id";

UPDATE "Users" AS u
SET "balance" = "balance" + 0.1*(
	SELECT "sum"
 	FROM cb
	WHERE cb."id" = u."id"
)
WHERE u."id" IN (SELECT "id" FROM cb);