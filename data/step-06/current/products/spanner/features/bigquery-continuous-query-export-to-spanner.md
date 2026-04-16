---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.175Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "BigQuery continuous query export to Spanner"
feature_slug: "bigquery-continuous-query-export-to-spanner"
latest_feature_date: "2025-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/query-operators-scalar-subqueries"
  - "https://docs.cloud.google.com/spanner/docs/query-operators-array-subqueries"
  - "https://docs.cloud.google.com/spanner/docs/query-execution-operators"
keywords:
  - "continuous"
  - "export"
  - "queries"
  - "into"
  - "query"
  - "adds"
---

# BigQuery continuous query export to Spanner

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Adds support for using continuous queries to export data from BigQuery into Cloud Spanner in real time.

## Extended Definition

Adds support for using continuous queries to export data from BigQuery into Cloud Spanner in real time.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/query-operators-scalar-subqueries](https://docs.cloud.google.com/spanner/docs/query-operators-scalar-subqueries)
- [https://docs.cloud.google.com/spanner/docs/query-operators-array-subqueries](https://docs.cloud.google.com/spanner/docs/query-operators-array-subqueries)
- [https://docs.cloud.google.com/spanner/docs/query-execution-operators](https://docs.cloud.google.com/spanner/docs/query-execution-operators)

## Supporting Pages

### Scalar subqueries \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/query-operators-scalar-subqueries](https://docs.cloud.google.com/spanner/docs/query-operators-scalar-subqueries)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Database schema The queries and execution plans on this page are based on the following database schema: CREATE TABLE Singers ( SingerId INT64 NOT NULL , FirstName STRING ( 1024 ), LastName STRING ( 1024 ), SingerInfo BYTES ( MAX ), BirthDate DATE ) PRIMARY KEY ( SingerId ); CREATE INDEX SingersByFirstLastName ON Singers ( FirstName , LastName ); CREATE TABLE Albums ( SingerId INT64 NOT NULL , AlbumId INT64 NOT NULL , AlbumTitle STRING ( MAX ), MarketingBudget INT64 ) PRIMARY KEY ( SingerId , AlbumId ), INTERLEAVE IN PARENT Singers ON DELETE CASCADE ; CREATE INDEX AlbumsByAlbumTitle ON Albums ( AlbumTitle ); CREATE INDEX AlbumsByAlbumTitle2 ON Albums ( AlbumTitle ) STORING ( MarketingBudget ); CREATE TABLE Songs ( SingerId INT64 NOT NULL , AlbumId INT64 NOT NULL , TrackId INT64 NOT NULL , SongName STRING ( MAX ), Duration INT64 , SongGenre STRING ( 25 ) ) PRIMARY KEY ( SingerId , AlbumId , TrackId ), INTERLEAVE IN PARENT Albums ON DELETE CASCADE ; CREATE INDEX SongsBySingerAlbumSongNameDesc ON Songs ( SingerId , AlbumId , SongName DESC ), INTERLEAVE IN Albums ; CREATE INDEX SongsBySongName ON Songs ( SongName ); CREATE TABLE Concerts ( VenueId INT64 NOT NULL , SingerId INT64 NOT NULL , ConcertDate DATE NOT NULL , BeginTime TIMESTAMP , EndTime TIMESTAMP , TicketPrices ARRAY<INT64> ) PRIMARY KEY ( VenueId , SingerId , ConcertDate ); You can use the following Data Manipulation Language (DML) statements to add data to these tables: INSERT INTO Singers ( SingerId , FirstName , LastName , BirthDate ) VALUES ( 1 , "Marc" , "Richards" , "1970-09-03" ), ( 2 , "Catalina" , "Smith" , "1990-08-17" ), ( 3 , "Alice" , "Trentor" , "1991-10-02" ), ( 4 , "Lea" , "Martin" , "1991-11-09" ), ( 5 , "David" , "Lomond" , "1977-01-29" ); INSERT INTO Albums ( SingerId , AlbumId , AlbumTitle ) VALUES ( 1 , 1 , "Total Junk" ), ( 1 , 2 , "Go, Go, Go" ), ( 2 , 1 , "Green" ), ( 2 , 2 , "Forever Hold Your Peace" ), ( 2 , 3 , "Terrified" ), ( 3 , 1 , "Nothing To Do With Me" ), ( 4 , 1 , "Play" ); INSERT INTO Songs ( SingerId , AlbumId , TrackId , SongName , Duration , SongGenre ) VALUES ( 2 , 1 , 1 , "Let's Get Back Together" , 182 , "COUNTRY" ), ( 2 , 1 , 2 , "Starting Again" , 156 , "ROCK" ), ( 2 , 1 , 3 , "I Knew You Were Magic" , 294 , "BLUES" ), ( 2 , 1 , 4 , "42" , 185 , "CLASSICAL" ), ( 2 , 1 , 5 , "Blue" , 238 , "BLUES" ), ( 2 , 1 , 6 , "Nothing Is The Same" , 303 , "BLUES" ), ( 2 , 1 , 7 , "The Second Time" , 255 , "ROCK" ), ( 2 , 3 , 1 , "Fight Story" , 194 , "ROCK" ), ( 3 , 1 , 1 , "Not About The Guitar" , 278 , "BLUES" ); Note: You can run queries and retrieve execution plans even if the tables have no data.
- Spanner sometimes converts scalar subqueries into another operator such as a join or cross apply, to possibly improve performance.
- The following query demonstrates this operator: SELECT FROM songs WHERE duration = ( SELECT Max ( duration ) FROM songs ); / ----------+---------+---------+---------------------+----------+-----------+ SingerId AlbumId TrackId SongName Duration SongGenre +----------+---------+---------+---------------------+----------+-----------+ 2 1 6 Nothing Is The Same 303 BLUES +----------+---------+---------+---------------------+----------+----------- / The execution plan appears as follows: The execution plan excludes a scalar subquery because Spanner converted the scalar subquery to a cross apply.
- The following query demonstrates a scalar expression operator: SELECT firstname , IF ( firstname = 'Alice' , ( SELECT Count ( ) FROM songs WHERE duration > 300 ), 0 ) FROM singers ; / -----------+----+ FirstName +-----------+----+ Alice 1 Catalina 0 David 0 Lea 0 Marc 0 +-----------+---- / The execution plan appears as follows: The execution plan displays a scalar subquery as Scalar Subquery above an aggregate operator.

### Array subqueries \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/query-operators-array-subqueries](https://docs.cloud.google.com/spanner/docs/query-operators-array-subqueries)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Database schema The queries and execution plans on this page are based on the following database schema: CREATE TABLE Singers ( SingerId INT64 NOT NULL , FirstName STRING ( 1024 ), LastName STRING ( 1024 ), SingerInfo BYTES ( MAX ), BirthDate DATE ) PRIMARY KEY ( SingerId ); CREATE INDEX SingersByFirstLastName ON Singers ( FirstName , LastName ); CREATE TABLE Albums ( SingerId INT64 NOT NULL , AlbumId INT64 NOT NULL , AlbumTitle STRING ( MAX ), MarketingBudget INT64 ) PRIMARY KEY ( SingerId , AlbumId ), INTERLEAVE IN PARENT Singers ON DELETE CASCADE ; CREATE INDEX AlbumsByAlbumTitle ON Albums ( AlbumTitle ); CREATE INDEX AlbumsByAlbumTitle2 ON Albums ( AlbumTitle ) STORING ( MarketingBudget ); CREATE TABLE Songs ( SingerId INT64 NOT NULL , AlbumId INT64 NOT NULL , TrackId INT64 NOT NULL , SongName STRING ( MAX ), Duration INT64 , SongGenre STRING ( 25 ) ) PRIMARY KEY ( SingerId , AlbumId , TrackId ), INTERLEAVE IN PARENT Albums ON DELETE CASCADE ; CREATE INDEX SongsBySingerAlbumSongNameDesc ON Songs ( SingerId , AlbumId , SongName DESC ), INTERLEAVE IN Albums ; CREATE INDEX SongsBySongName ON Songs ( SongName ); CREATE TABLE Concerts ( VenueId INT64 NOT NULL , SingerId INT64 NOT NULL , ConcertDate DATE NOT NULL , BeginTime TIMESTAMP , EndTime TIMESTAMP , TicketPrices ARRAY<INT64> ) PRIMARY KEY ( VenueId , SingerId , ConcertDate ); You can use the following Data Manipulation Language (DML) statements to add data to these tables: INSERT INTO Singers ( SingerId , FirstName , LastName , BirthDate ) VALUES ( 1 , "Marc" , "Richards" , "1970-09-03" ), ( 2 , "Catalina" , "Smith" , "1990-08-17" ), ( 3 , "Alice" , "Trentor" , "1991-10-02" ), ( 4 , "Lea" , "Martin" , "1991-11-09" ), ( 5 , "David" , "Lomond" , "1977-01-29" ); INSERT INTO Albums ( SingerId , AlbumId , AlbumTitle ) VALUES ( 1 , 1 , "Total Junk" ), ( 1 , 2 , "Go, Go, Go" ), ( 2 , 1 , "Green" ), ( 2 , 2 , "Forever Hold Your Peace" ), ( 2 , 3 , "Terrified" ), ( 3 , 1 , "Nothing To Do With Me" ), ( 4 , 1 , "Play" ); INSERT INTO Songs ( SingerId , AlbumId , TrackId , SongName , Duration , SongGenre ) VALUES ( 2 , 1 , 1 , "Let's Get Back Together" , 182 , "COUNTRY" ), ( 2 , 1 , 2 , "Starting Again" , 156 , "ROCK" ), ( 2 , 1 , 3 , "I Knew You Were Magic" , 294 , "BLUES" ), ( 2 , 1 , 4 , "42" , 185 , "CLASSICAL" ), ( 2 , 1 , 5 , "Blue" , 238 , "BLUES" ), ( 2 , 1 , 6 , "Nothing Is The Same" , 303 , "BLUES" ), ( 2 , 1 , 7 , "The Second Time" , 255 , "ROCK" ), ( 2 , 3 , 1 , "Fight Story" , 194 , "ROCK" ), ( 3 , 1 , 1 , "Not About The Guitar" , 278 , "BLUES" ); Note: You can run queries and retrieve execution plans even if the tables have no data.
- The following query demonstrates the array subquery operator: SELECT a . albumid , array ( select concertdate FROM concerts WHERE concerts . singerid = a . singerid ) FROM albums AS a ; The subquery is: SELECT concertdate FROM concerts WHERE concerts . singerid = a . singerid ; Spanner converts the results of the subquery for each AlbumId into an array of ConcertDate rows against that AlbumId .
- The execution plan displays an array subquery, labeled Array Subquery , above a distributed union operator: Properties and execution statistics A property of an operator describes a trait that is used when the operator is executed.
- Home Documentation Databases Spanner Reference Send feedback Array subqueries Stay organized with collections Save and categorize content based on your preferences.

### Query execution operators \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/query-execution-operators](https://docs.cloud.google.com/spanner/docs/query-execution-operators)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Name Summary Distributed union Conceptually divides one or more tables into multiple splits, remotely evaluates a subquery independently on each split, and then unions all results.
- For information about how to retrieve an execution plan for a specific query using the Google Cloud console, see Understanding how Spanner executes queries .
- The following table shows some common mappings: SQL Query execution operator Table reference Table Scan, Index Scan WHERE Filter Scan , Filter GROUP BY Aggregate Scalar function (such as ISNULL ) Compute Aggregate function (such as SUM ) Aggregate JOIN Any join operator; see Joins Subquery Scalar or Array subquery LIMIT Limit , Sort Limit ORDER BY Sort, Sort Limit Query execution operators This section lists all query execution operators that can make up a query execution plan in Spanner.
- Home Documentation Databases Spanner Reference Send feedback Query execution operators Stay organized with collections Save and categorize content based on your preferences.

