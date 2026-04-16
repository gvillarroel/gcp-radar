---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.201Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner index advisor"
feature_slug: "spanner-index-advisor"
latest_feature_date: "2025-01-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/query-operators-scalar-subqueries"
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
keywords:
  - "recommends"
  - "analyzes"
  - "adjusted"
  - "advisor"
  - "indexes"
  - "index"
  - "queries"
---

# Spanner index advisor

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

The Spanner index advisor analyzes queries and recommends new or adjusted indexes to improve query performance in GoogleSQL and PostgreSQL-dialect databases.

## Extended Definition

The Spanner index advisor analyzes queries and recommends new or adjusted indexes to improve query performance in GoogleSQL and PostgreSQL-dialect databases.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/query-operators-scalar-subqueries](https://docs.cloud.google.com/spanner/docs/query-operators-scalar-subqueries)
- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)

## Supporting Pages

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- Design indexing to avoid hotspots Many game developers implement indexes on many of the inventory fields to optimize certain queries.
- In order to speed up queries that filter for the game mode, consider the following index: CREATE INDEX idx score ranking ON Ranking ( GameMode , Score DESC ) If everyone plays the same game mode called 1 , this index creates a hotspot where GameMode=1 .
- You can improve Spanner performance by eliminating indexes that aren't used frequently, or by implementing these indexes in other ways that don't impact database performance .
- See What DBAs need to know about Spanner, part 1: Keys and indexes for more application-level sharding strategies.

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- In accordance with the SQL standard, the string is either YES or NO , rather than a Boolean value. spanner type character varying A string holding the DDL-compatible type of the column. indexes This view lists the indexes in a schema.
- The values include PRIMARY KEY , LOCAL , or GLOBAL . parent table name character varying Secondary indexes can be interleaved in a parent table, as discussed in Creating a secondary index .
- Some tables that are available with Spanner but not open source PostgreSQL, such as database options , index columns , indexes , and spanner statistics are available.
- Once the indexes are ready, Spanner begins enforcing the constraint for new transactions while it validates the existing data.

### Scalar subqueries \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/query-operators-scalar-subqueries](https://docs.cloud.google.com/spanner/docs/query-operators-scalar-subqueries)
- Source ID: `site-docs-reference`
- Final score: 77
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Database schema The queries and execution plans on this page are based on the following database schema: CREATE TABLE Singers ( SingerId INT64 NOT NULL , FirstName STRING ( 1024 ), LastName STRING ( 1024 ), SingerInfo BYTES ( MAX ), BirthDate DATE ) PRIMARY KEY ( SingerId ); CREATE INDEX SingersByFirstLastName ON Singers ( FirstName , LastName ); CREATE TABLE Albums ( SingerId INT64 NOT NULL , AlbumId INT64 NOT NULL , AlbumTitle STRING ( MAX ), MarketingBudget INT64 ) PRIMARY KEY ( SingerId , AlbumId ), INTERLEAVE IN PARENT Singers ON DELETE CASCADE ; CREATE INDEX AlbumsByAlbumTitle ON Albums ( AlbumTitle ); CREATE INDEX AlbumsByAlbumTitle2 ON Albums ( AlbumTitle ) STORING ( MarketingBudget ); CREATE TABLE Songs ( SingerId INT64 NOT NULL , AlbumId INT64 NOT NULL , TrackId INT64 NOT NULL , SongName STRING ( MAX ), Duration INT64 , SongGenre STRING ( 25 ) ) PRIMARY KEY ( SingerId , AlbumId , TrackId ), INTERLEAVE IN PARENT Albums ON DELETE CASCADE ; CREATE INDEX SongsBySingerAlbumSongNameDesc ON Songs ( SingerId , AlbumId , SongName DESC ), INTERLEAVE IN Albums ; CREATE INDEX SongsBySongName ON Songs ( SongName ); CREATE TABLE Concerts ( VenueId INT64 NOT NULL , SingerId INT64 NOT NULL , ConcertDate DATE NOT NULL , BeginTime TIMESTAMP , EndTime TIMESTAMP , TicketPrices ARRAY<INT64> ) PRIMARY KEY ( VenueId , SingerId , ConcertDate ); You can use the following Data Manipulation Language (DML) statements to add data to these tables: INSERT INTO Singers ( SingerId , FirstName , LastName , BirthDate ) VALUES ( 1 , "Marc" , "Richards" , "1970-09-03" ), ( 2 , "Catalina" , "Smith" , "1990-08-17" ), ( 3 , "Alice" , "Trentor" , "1991-10-02" ), ( 4 , "Lea" , "Martin" , "1991-11-09" ), ( 5 , "David" , "Lomond" , "1977-01-29" ); INSERT INTO Albums ( SingerId , AlbumId , AlbumTitle ) VALUES ( 1 , 1 , "Total Junk" ), ( 1 , 2 , "Go, Go, Go" ), ( 2 , 1 , "Green" ), ( 2 , 2 , "Forever Hold Your Peace" ), ( 2 , 3 , "Terrified" ), ( 3 , 1 , "Nothing To Do With Me" ), ( 4 , 1 , "Play" ); INSERT INTO Songs ( SingerId , AlbumId , TrackId , SongName , Duration , SongGenre ) VALUES ( 2 , 1 , 1 , "Let's Get Back Together" , 182 , "COUNTRY" ), ( 2 , 1 , 2 , "Starting Again" , 156 , "ROCK" ), ( 2 , 1 , 3 , "I Knew You Were Magic" , 294 , "BLUES" ), ( 2 , 1 , 4 , "42" , 185 , "CLASSICAL" ), ( 2 , 1 , 5 , "Blue" , 238 , "BLUES" ), ( 2 , 1 , 6 , "Nothing Is The Same" , 303 , "BLUES" ), ( 2 , 1 , 7 , "The Second Time" , 255 , "ROCK" ), ( 2 , 3 , 1 , "Fight Story" , 194 , "ROCK" ), ( 3 , 1 , 1 , "Not About The Guitar" , 278 , "BLUES" ); Note: You can run queries and retrieve execution plans even if the tables have no data.
- Home Documentation Databases Spanner Reference Send feedback Scalar subqueries Stay organized with collections Save and categorize content based on your preferences.
- Spanner sometimes converts scalar subqueries into another operator such as a join or cross apply, to possibly improve performance.
- However, in certain scenarios, plans explicitly contain scalar subqueries.

