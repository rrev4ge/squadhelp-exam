UPDATE "Users"
SET "balance" = "balance" + 10
WHERE "role" = 'creator' and "rating" IN (
	SELECT "rating"
	FROM "Users"
	ORDER BY "rating" DESC 
	LIMIT 3 )