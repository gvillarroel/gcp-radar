---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.165Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Graph ANY CHEAPEST path search prefix"
feature_slug: "spanner-graph-any-cheapest-path-search-prefix"
latest_feature_date: "2025-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/configure-fgac"
  - "https://docs.cloud.google.com/spanner/docs/query-operators-binary"
  - "https://docs.cloud.google.com/spanner/docs/graph/iso-standards"
keywords:
  - "cheapest"
  - "prefix"
  - "path"
  - "supports"
  - "queries"
  - "search"
  - "graph"
---

# Spanner Graph ANY CHEAPEST path search prefix

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner Graph supports the ANY CHEAPEST path search prefix in queries to return a path with the lowest total compute cost.

## Extended Definition

Spanner Graph supports the ANY CHEAPEST path search prefix in queries to return a path with the lowest total compute cost.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)
- [https://docs.cloud.google.com/spanner/docs/query-operators-binary](https://docs.cloud.google.com/spanner/docs/query-operators-binary)
- [https://docs.cloud.google.com/spanner/docs/graph/iso-standards](https://docs.cloud.google.com/spanner/docs/graph/iso-standards)

## Supporting Pages

### Configure fine-grained access control \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Ruby require "google/cloud/spanner" def spanner list database roles project id :, instance id :, database id : project id = "Your Google Cloud project ID" instance id = "Your Spanner instance ID" database id = "Your Spanner database ID" admin client = Google :: Cloud :: Spanner :: Admin :: Database :: V1 :: DatabaseAdmin :: Client . new db path = admin client . database path project : project id , instance : instance id , database : database id result = admin client . list database roles parent : db path puts "List of Database roles:" result . each do role puts role . name end end View the privileges granted to a database role To view the privileges granted to a role, run the following queries: GoogleSQL SELECT FROM INFORMATION SCHEMA .
- Node.js / TODO(developer): Uncomment these variables before running the sample. / // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // const projectId = 'my-project-id'; // Imports the Google Cloud client library const { Spanner } = require ( ' @google-cloud/spanner ' ); // creates a client const spanner = new Spanner ({ projectId : projectId , }); const databaseAdminClient = spanner . getDatabaseAdminClient (); async function addAndDropNewDatabaseRole () { // Creates a new user defined role and grant permissions try { const request = [ 'CREATE ROLE parent' , 'GRANT SELECT ON TABLE Singers TO ROLE parent' , 'CREATE ROLE child' , 'GRANT ROLE parent TO ROLE child' , ]; const [ operation ] = await databaseAdminClient . updateDatabaseDdl ({ database : databaseAdminClient . databasePath ( projectId , instanceId , databaseId , ), statements : request , }); console . log ( 'Waiting for operation to complete...' ); await operation . promise (); console . log ( 'Created roles child and parent and granted privileges' ); } catch ( err ) { console . error ( 'ERROR:' , err ); } // Revoke permissions and drop child role. // A role can't be dropped until all its permissions are revoked. try { const request = [ 'REVOKE ROLE parent FROM ROLE child' , 'DROP ROLE child' ]; const [ operation ] = await databaseAdminClient . updateDatabaseDdl ({ database : databaseAdminClient . databasePath ( projectId , instanceId , databaseId , ), statements : request , }); console . log ( 'Waiting for operation to complete...' ); await operation . promise (); console . log ( 'Revoked privileges and dropped role child' ); } catch ( err ) { console . error ( 'ERROR:' , err ); } finally { // Close the spanner client when finished. // The databaseAdminClient does not require explicit closure.
- Node.js / TODO(developer): Uncomment these variables before running the sample. / // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // const projectId = 'my-project-id'; // Imports the Google Cloud client library const { Spanner } = require ( ' @google-cloud/spanner ' ); // creates a client const spanner = new Spanner ({ projectId : projectId , }); const databaseAdminClient = spanner . getDatabaseAdminClient (); async function addAndDropNewDatabaseRole () { // Creates a new user defined role and grant permissions try { const request = [ 'CREATE ROLE parent' , 'GRANT SELECT ON TABLE Singers TO ROLE parent' , 'CREATE ROLE child' , 'GRANT ROLE parent TO ROLE child' , ]; const [ operation ] = await databaseAdminClient . updateDatabaseDdl ({ database : databaseAdminClient . databasePath ( projectId , instanceId , databaseId , ), statements : request , }); console . log ( 'Waiting for operation to complete...' ); await operation . promise (); console . log ( 'Created roles child and parent and granted privileges' ); } catch ( err ) { console . error ( 'ERROR:' , err ); } // Revoke permissions and drop child role. // A role can't be dropped until all its permissions are revoked. try { const request = [ 'REVOKE ROLE parent FROM ROLE child' , 'DROP ROLE child' ]; const [ operation ] = await databaseAdminClient . updateDatabaseDdl ({ database : databaseAdminClient . databasePath ( projectId , instanceId , databaseId , ), statements : request , }); console . log ( 'Waiting for operation to complete...' ); await operation . promise (); console . log ( 'Revoked privileges and dropped role child' ); } catch ( err ) { console . error ( 'ERROR:' , err ); } finally { // Close the spanner client when finished. // The databaseAdminClient does not require explicit closure.
- Ruby require "google/cloud/spanner" def spanner add and drop database role project id :, instance id :, database id : project id = "Your Google Cloud project ID" instance id = "Your Spanner instance ID" database id = "Your Spanner database ID" admin client = Google :: Cloud :: Spanner :: Admin :: Database :: V1 :: DatabaseAdmin :: Client . new role parent = "new parent" role child = "new child" db path = admin client . database path project : project id , instance : instance id , database : database id job = admin client . update database ddl database : db path , statements : [ "CREATE ROLE #{ role parent } " , "GRANT SELECT ON TABLE Singers TO ROLE #{ role parent } " , "CREATE ROLE #{ role child } " , "GRANT ROLE #{ role parent } TO ROLE #{ role child } " ] job . wait until done! puts "Created roles #{ role parent } and #{ role child } and granted privileges" job = admin client . update database ddl database : db path , statements : [ "REVOKE ROLE #{ role parent } FROM ROLE #{ role child } " , "DROP ROLE #{ role child } " ] job . wait until done! puts "Revoked privileges and dropped role #{ role child } " end More information About fine-grained access control Fine-grained access control for change streams Fine-grained access control privileges GoogleSQL DDL reference Make schema updates Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Binary operators \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/query-operators-binary](https://docs.cloud.google.com/spanner/docs/query-operators-binary)
- Source ID: `site-docs-reference`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- It's used in graph queries with quantified path traversals.
- Database schema The queries and execution plans on this page are based on the following database schema: CREATE TABLE Singers ( SingerId INT64 NOT NULL , FirstName STRING ( 1024 ), LastName STRING ( 1024 ), SingerInfo BYTES ( MAX ), BirthDate DATE ) PRIMARY KEY ( SingerId ); CREATE INDEX SingersByFirstLastName ON Singers ( FirstName , LastName ); CREATE TABLE Albums ( SingerId INT64 NOT NULL , AlbumId INT64 NOT NULL , AlbumTitle STRING ( MAX ), MarketingBudget INT64 ) PRIMARY KEY ( SingerId , AlbumId ), INTERLEAVE IN PARENT Singers ON DELETE CASCADE ; CREATE INDEX AlbumsByAlbumTitle ON Albums ( AlbumTitle ); CREATE INDEX AlbumsByAlbumTitle2 ON Albums ( AlbumTitle ) STORING ( MarketingBudget ); CREATE TABLE Songs ( SingerId INT64 NOT NULL , AlbumId INT64 NOT NULL , TrackId INT64 NOT NULL , SongName STRING ( MAX ), Duration INT64 , SongGenre STRING ( 25 ) ) PRIMARY KEY ( SingerId , AlbumId , TrackId ), INTERLEAVE IN PARENT Albums ON DELETE CASCADE ; CREATE INDEX SongsBySingerAlbumSongNameDesc ON Songs ( SingerId , AlbumId , SongName DESC ), INTERLEAVE IN Albums ; CREATE INDEX SongsBySongName ON Songs ( SongName ); CREATE TABLE Concerts ( VenueId INT64 NOT NULL , SingerId INT64 NOT NULL , ConcertDate DATE NOT NULL , BeginTime TIMESTAMP , EndTime TIMESTAMP , TicketPrices ARRAY<INT64> ) PRIMARY KEY ( VenueId , SingerId , ConcertDate ); You can use the following Data Manipulation Language (DML) statements to add data to these tables: INSERT INTO Singers ( SingerId , FirstName , LastName , BirthDate ) VALUES ( 1 , "Marc" , "Richards" , "1970-09-03" ), ( 2 , "Catalina" , "Smith" , "1990-08-17" ), ( 3 , "Alice" , "Trentor" , "1991-10-02" ), ( 4 , "Lea" , "Martin" , "1991-11-09" ), ( 5 , "David" , "Lomond" , "1977-01-29" ); INSERT INTO Albums ( SingerId , AlbumId , AlbumTitle ) VALUES ( 1 , 1 , "Total Junk" ), ( 1 , 2 , "Go, Go, Go" ), ( 2 , 1 , "Green" ), ( 2 , 2 , "Forever Hold Your Peace" ), ( 2 , 3 , "Terrified" ), ( 3 , 1 , "Nothing To Do With Me" ), ( 4 , 1 , "Play" ); INSERT INTO Songs ( SingerId , AlbumId , TrackId , SongName , Duration , SongGenre ) VALUES ( 2 , 1 , 1 , "Let's Get Back Together" , 182 , "COUNTRY" ), ( 2 , 1 , 2 , "Starting Again" , 156 , "ROCK" ), ( 2 , 1 , 3 , "I Knew You Were Magic" , 294 , "BLUES" ), ( 2 , 1 , 4 , "42" , 185 , "CLASSICAL" ), ( 2 , 1 , 5 , "Blue" , 238 , "BLUES" ), ( 2 , 1 , 6 , "Nothing Is The Same" , 303 , "BLUES" ), ( 2 , 1 , 7 , "The Second Time" , 255 , "ROCK" ), ( 2 , 3 , 1 , "Fight Story" , 194 , "ROCK" ), ( 3 , 1 , 1 , "Not About The Guitar" , 278 , "BLUES" ); Note: You can run queries and retrieve execution plans even if the tables have no data.
- CREATE TABLE Collaborations ( SingerId INT64 NOT NULL , FeaturingSingerId INT64 NOT NULL , AlbumTitle STRING ( MAX ) NOT NULL , ) PRIMARY KEY ( SingerId , FeaturingSingerId , AlbumTitle ); CREATE OR REPLACE PROPERTY GRAPH MusicGraph NODE TABLES ( Singers KEY ( SingerId ) LABEL Singers PROPERTIES ( BirthDate , FirstName , LastName , SingerId , SingerInfo ) ) EDGE TABLES ( Collaborations AS CollabWith KEY ( SingerId , FeaturingSingerId , AlbumTitle ) SOURCE KEY ( SingerId ) REFERENCES Singers ( SingerId ) DESTINATION KEY ( FeaturingSingerId ) REFERENCES Singers ( SingerId ) LABEL CollabWith PROPERTIES ( AlbumTitle , FeaturingSingerId , SingerId ), ); The following graph query finds singers who have collaborated with a given singer or collaborated with those collaborators.
- The recursive input to the recursive union comprises a distributed cross apply or other join operator for other queries that repeatedly joins the Collaborations table with the results of the previous iteration of the join.

### Spanner Graph and ISO standards \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/graph/iso-standards](https://docs.cloud.google.com/spanner/docs/graph/iso-standards)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Spanner Graph is based on two ISO standards: ISO/IEC 9075-16:2023 - Information technology — Database languages SQL Property Graph Queries (SQL/PGQ) , Edition 1, 2023 ISO/IEC 39075:2024 - Information technology — Database languages — GQL , Edition 1, 2024 The following tables describe the high-level relationship between SQL/PGQ, GQL, and how Spanner Graph supports these standards.
- The page describes how Spanner Graph supports the ISO international standard query language for graph databases.
- Supports using CREATE PROPERTY GRAPH with open types and closed types.
- Spanner Graph supports additional features in the ISO standards.

