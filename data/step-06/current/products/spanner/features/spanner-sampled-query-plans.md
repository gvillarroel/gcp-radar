---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.265Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner sampled query plans"
feature_slug: "spanner-sampled-query-plans"
latest_feature_date: "2023-10-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/create-query-database-console"
  - "https://docs.cloud.google.com/spanner/docs/query-execution-operators"
  - "https://docs.cloud.google.com/spanner/docs/query-operators-binary"
keywords:
  - "sampled"
  - "enabling"
  - "plans"
  - "offers"
  - "query"
---

# Spanner sampled query plans

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now offers sampled query plans in GA, enabling users to view historical query plans and compare query performance over time.

## Extended Definition

Spanner now offers sampled query plans in GA, enabling users to view historical query plans and compare query performance over time.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- [https://docs.cloud.google.com/spanner/docs/query-execution-operators](https://docs.cloud.google.com/spanner/docs/query-execution-operators)
- [https://docs.cloud.google.com/spanner/docs/query-operators-binary](https://docs.cloud.google.com/spanner/docs/query-operators-binary)

## Supporting Pages

### Query execution operators \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/query-execution-operators](https://docs.cloud.google.com/spanner/docs/query-execution-operators)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- This page describes the operators used in Spanner query execution plans .
- The following table shows some common mappings: SQL Query execution operator Table reference Table Scan, Index Scan WHERE Filter Scan , Filter GROUP BY Aggregate Scalar function (such as ISNULL ) Compute Aggregate function (such as SUM ) Aggregate JOIN Any join operator; see Joins Subquery Scalar or Array subquery LIMIT Limit , Sort Limit ORDER BY Sort, Sort Limit Query execution operators This section lists all query execution operators that can make up a query execution plan in Spanner.
- Name Summary Distributed union Conceptually divides one or more tables into multiple splits, remotely evaluates a subquery independently on each split, and then unions all results.
- Home Documentation Databases Spanner Reference Send feedback Query execution operators Stay organized with collections Save and categorize content based on your preferences.

### "Create and query a database in the Google Cloud console \_|\_ Spanner \_\

- URL: [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Learn more about Query Execution Plans .
- The Google Cloud console displays the Singers table's Spanner Studio page with a new query tab that contains the INSERT statement that you edit to insert a row in the Singers table and view the result of that insertion: GoogleSQL -- Add new values in the VALUES clause in order of the column list. -- Each value must be type compatible with its associated column.
- Home Documentation Databases Spanner Guides Send feedback Create and query a database in the Google Cloud console Stay organized with collections Save and categorize content based on your preferences.
- The Singers table now has two rows: GoogleSQL PostgreSQL Run a query in the Google Cloud console On the database Overview page, click Spanner Studio in the navigation menu.

### Binary operators \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/query-operators-binary](https://docs.cloud.google.com/spanner/docs/query-operators-binary)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Database schema The queries and execution plans on this page are based on the following database schema: CREATE TABLE Singers ( SingerId INT64 NOT NULL , FirstName STRING ( 1024 ), LastName STRING ( 1024 ), SingerInfo BYTES ( MAX ), BirthDate DATE ) PRIMARY KEY ( SingerId ); CREATE INDEX SingersByFirstLastName ON Singers ( FirstName , LastName ); CREATE TABLE Albums ( SingerId INT64 NOT NULL , AlbumId INT64 NOT NULL , AlbumTitle STRING ( MAX ), MarketingBudget INT64 ) PRIMARY KEY ( SingerId , AlbumId ), INTERLEAVE IN PARENT Singers ON DELETE CASCADE ; CREATE INDEX AlbumsByAlbumTitle ON Albums ( AlbumTitle ); CREATE INDEX AlbumsByAlbumTitle2 ON Albums ( AlbumTitle ) STORING ( MarketingBudget ); CREATE TABLE Songs ( SingerId INT64 NOT NULL , AlbumId INT64 NOT NULL , TrackId INT64 NOT NULL , SongName STRING ( MAX ), Duration INT64 , SongGenre STRING ( 25 ) ) PRIMARY KEY ( SingerId , AlbumId , TrackId ), INTERLEAVE IN PARENT Albums ON DELETE CASCADE ; CREATE INDEX SongsBySingerAlbumSongNameDesc ON Songs ( SingerId , AlbumId , SongName DESC ), INTERLEAVE IN Albums ; CREATE INDEX SongsBySongName ON Songs ( SongName ); CREATE TABLE Concerts ( VenueId INT64 NOT NULL , SingerId INT64 NOT NULL , ConcertDate DATE NOT NULL , BeginTime TIMESTAMP , EndTime TIMESTAMP , TicketPrices ARRAY<INT64> ) PRIMARY KEY ( VenueId , SingerId , ConcertDate ); You can use the following Data Manipulation Language (DML) statements to add data to these tables: INSERT INTO Singers ( SingerId , FirstName , LastName , BirthDate ) VALUES ( 1 , "Marc" , "Richards" , "1970-09-03" ), ( 2 , "Catalina" , "Smith" , "1990-08-17" ), ( 3 , "Alice" , "Trentor" , "1991-10-02" ), ( 4 , "Lea" , "Martin" , "1991-11-09" ), ( 5 , "David" , "Lomond" , "1977-01-29" ); INSERT INTO Albums ( SingerId , AlbumId , AlbumTitle ) VALUES ( 1 , 1 , "Total Junk" ), ( 1 , 2 , "Go, Go, Go" ), ( 2 , 1 , "Green" ), ( 2 , 2 , "Forever Hold Your Peace" ), ( 2 , 3 , "Terrified" ), ( 3 , 1 , "Nothing To Do With Me" ), ( 4 , 1 , "Play" ); INSERT INTO Songs ( SingerId , AlbumId , TrackId , SongName , Duration , SongGenre ) VALUES ( 2 , 1 , 1 , "Let's Get Back Together" , 182 , "COUNTRY" ), ( 2 , 1 , 2 , "Starting Again" , 156 , "ROCK" ), ( 2 , 1 , 3 , "I Knew You Were Magic" , 294 , "BLUES" ), ( 2 , 1 , 4 , "42" , 185 , "CLASSICAL" ), ( 2 , 1 , 5 , "Blue" , 238 , "BLUES" ), ( 2 , 1 , 6 , "Nothing Is The Same" , 303 , "BLUES" ), ( 2 , 1 , 7 , "The Second Time" , 255 , "ROCK" ), ( 2 , 3 , 1 , "Fight Story" , 194 , "ROCK" ), ( 3 , 1 , 1 , "Not About The Guitar" , 278 , "BLUES" ); Note: You can run queries and retrieve execution plans even if the tables have no data.
- Consider another merge join example using the following query: SELECT a . albumtitle , s . songname FROM albums AS a join @{ join method = merge join } songs AS s ON a . albumid = s . albumid ; / -----------------------+--------------------------+ AlbumTitle SongName +-----------------------+--------------------------+ Total Junk The Second Time Total Junk Starting Again Total Junk Nothing Is The Same Total Junk Let's Get Back Together Total Junk I Knew You Were Magic Total Junk Blue Total Junk 42 Total Junk Not About The Guitar Green The Second Time Green Starting Again Green Nothing Is The Same Green Let's Get Back Together Green I Knew You Were Magic Green Blue Green 42 Green Not About The Guitar Nothing To Do With Me The Second Time Nothing To Do With Me Starting Again Nothing To Do With Me Nothing Is The Same Nothing To Do With Me Let's Get Back Together Nothing To Do With Me I Knew You Were Magic Nothing To Do With Me Blue Nothing To Do With Me 42 Nothing To Do With Me Not About The Guitar Play The Second Time Play Starting Again Play Nothing Is The Same Play Let's Get Back Together Play I Knew You Were Magic Play Blue Play 42 Play Not About The Guitar Terrified Fight Story +-----------------------+-------------------------- / The execution plan appears as follows: In the preceding execution plan, the query optimizer introduced additional sort operators to execute the merge join.
- To use this operator, set the join method to MERGE JOIN on the query hint, as shown in the following example: SELECT a . albumtitle , s . songname FROM albums AS a join @{ join method = merge join } songs AS s ON a . singerid = s . singerid AND a . albumid = s . albumid ; / -----------------------+--------------------------+ AlbumTitle SongName +-----------------------+--------------------------+ Green The Second Time Green Starting Again Green Nothing Is The Same Green Let's Get Back Together Green I Knew You Were Magic Green Blue Green 42 Terrified Fight Story Nothing To Do With Me Not About The Guitar +-----------------------+-------------------------- / The execution plan appears as follows: In this execution plan, the merge join is distributed so that the join executes where the data resides.
- CREATE TABLE Collaborations ( SingerId INT64 NOT NULL , FeaturingSingerId INT64 NOT NULL , AlbumTitle STRING ( MAX ) NOT NULL , ) PRIMARY KEY ( SingerId , FeaturingSingerId , AlbumTitle ); CREATE OR REPLACE PROPERTY GRAPH MusicGraph NODE TABLES ( Singers KEY ( SingerId ) LABEL Singers PROPERTIES ( BirthDate , FirstName , LastName , SingerId , SingerInfo ) ) EDGE TABLES ( Collaborations AS CollabWith KEY ( SingerId , FeaturingSingerId , AlbumTitle ) SOURCE KEY ( SingerId ) REFERENCES Singers ( SingerId ) DESTINATION KEY ( FeaturingSingerId ) REFERENCES Singers ( SingerId ) LABEL CollabWith PROPERTIES ( AlbumTitle , FeaturingSingerId , SingerId ), ); The following graph query finds singers who have collaborated with a given singer or collaborated with those collaborators.

