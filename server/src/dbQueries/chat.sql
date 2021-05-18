
CREATE TABLE "Conversations" (
    id serial PRIMARY KEY,
    "userId" integer REFERENCES "Users"(id) ON DELETE NO ACTION ON UPDATE CASCADE NOT NULL,
    "interlocutorId" integer REFERENCES "Users"(id) ON DELETE NO ACTION ON UPDATE CASCADE NOT NULL,
    "createdAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    "blackList" boolean DEFAULT false,
    "favoriteList" boolean DEFAULT false
);

CREATE TABLE "Messages" (
    id serial PRIMARY KEY,
    "sender" integer REFERENCES "Users"(id) ON DELETE NO ACTION ON UPDATE CASCADE NOT NULL,
    "body" text NOT NULL,
    "conversation" integer REFERENCES "Conversations"(id) ON DELETE CASCADE ON UPDATE CASCADE NOT NULL,
    "createdAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP  
);

CREATE TABLE "Catalogs" (
    id serial PRIMARY KEY,
    "userId" integer REFERENCES "Users"(id) ON DELETE NO ACTION ON UPDATE CASCADE NOT NULL,
    "catalogName" varchar NOT NULL
);

CREATE TABLE "Catalogs_Conversations" (
    "catalogId" integer REFERENCES "Catalogs"(id) ON DELETE CASCADE ON UPDATE CASCADE NOT NULL,
    "conversationId" integer REFERENCES "Conversations"(id) ON DELETE CASCADE ON UPDATE CASCADE NOT NULL,
    PRIMARY KEY("catalogId", "conversationId")
);
