---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.202Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "SELECT FOR UPDATE query support"
feature_slug: "select-for-update-query-support"
latest_feature_date: "2025-01-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/create-query-database-console"
  - "https://docs.cloud.google.com/spanner/docs/configure-fgac"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/details"
keywords:
  - "select"
  - "syntax"
  - "update"
  - "googlesql"
  - "supports"
  - "query"
---

# SELECT FOR UPDATE query support

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now supports SELECT ... FOR UPDATE syntax in GoogleSQL and PostgreSQL dialects to enable exclusive locks during scans and reduce concurrent-write aborts.

## Extended Definition

Spanner now supports SELECT ... FOR UPDATE syntax in GoogleSQL and PostgreSQL dialects to enable exclusive locks during scans and reduce concurrent-write aborts.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)
- [https://docs.cloud.google.com/spanner/docs/change-streams/details](https://docs.cloud.google.com/spanner/docs/change-streams/details)

## Supporting Pages

### "Create and query a database in the Google Cloud console \_|\_ Spanner \_\

- URL: [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- UPDATE singers SET birthdate = NULL , firstname = 'Kena' , lastname = '' , singerinfo = NULL WHERE singerid = '3' ; SELECT FROM singers WHERE singerid = '3' ; Edit the UPDATE statement's SET clause to update only the birth date: GoogleSQL -- Change values in the SET clause to update the row where the WHERE condition is true.
- Then, enter the following query in the query editor: GoogleSQL SELECT FROM Singers ; PostgreSQL SELECT FROM singers ; Click play circle Run .
- The Google Cloud console displays the Singers table's Spanner Studio page with a new query tab that contains the INSERT statement that you edit to insert a row in the Singers table and view the result of that insertion: GoogleSQL -- Add new values in the VALUES clause in order of the column list. -- Each value must be type compatible with its associated column.
- The Singers table now has three rows, and the row with the primary key value of 3 has an empty string in the LastName column: GoogleSQL PostgreSQL Edit data On the Singers table's Data page, select the checkbox on the row with the primary key value of 3 , and then click Edit .

### Configure fine-grained access control \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Ruby require "google/cloud/spanner" def spanner add and drop database role project id :, instance id :, database id : project id = "Your Google Cloud project ID" instance id = "Your Spanner instance ID" database id = "Your Spanner database ID" admin client = Google :: Cloud :: Spanner :: Admin :: Database :: V1 :: DatabaseAdmin :: Client . new role parent = "new parent" role child = "new child" db path = admin client . database path project : project id , instance : instance id , database : database id job = admin client . update database ddl database : db path , statements : [ "CREATE ROLE #{ role parent } " , "GRANT SELECT ON TABLE Singers TO ROLE #{ role parent } " , "CREATE ROLE #{ role child } " , "GRANT ROLE #{ role parent } TO ROLE #{ role child } " ] job . wait until done! puts "Created roles #{ role parent } and #{ role child } and granted privileges" job = admin client . update database ddl database : db path , statements : [ "REVOKE ROLE #{ role parent } FROM ROLE #{ role child } " , "DROP ROLE #{ role child } " ] job . wait until done! puts "Revoked privileges and dropped role #{ role child } " end More information About fine-grained access control Fine-grained access control for change streams Fine-grained access control privileges GoogleSQL DDL reference Make schema updates Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To drop the role, go to the Spanner Studio page and enter the following statement: DROP ROLE ROLE NAME ; Click Submit . gcloud To revoke all privileges for a role and then drop the role, use the gcloud spanner databases ddl update command as follows: GoogleSQL gcloud spanner databases ddl update DATABASE NAME \ --instance = INSTANCE NAME \ --ddl = 'REVOKE PERMISSIONS ON TABLE TABLE NAME FROM ROLE ROLE NAME ; DROP ROLE ROLE NAME ;' PostgreSQL gcloud spanner databases ddl update DATABASE NAME \ --instance = INSTANCE NAME \ --ddl = 'REVOKE PERMISSIONS ON TABLE TABLE NAME FROM ROLE NAME ; DROP ROLE ROLE NAME ;' Valid values for PERMISSIONS are SELECT , INSERT , UPDATE , and DELETE .
- For example, to grant SELECT , INSERT , and UPDATE on the employees and contractors tables to the database role hr analyst in the database hrdb1 in the instance hr , enter the following statement: GoogleSQL gcloud spanner databases ddl update hrdb1 --instance = hr \ --ddl = 'CREATE ROLE hr analyst; GRANT SELECT, INSERT, UPDATE ON TABLE employees, contractors TO ROLE hr analyst;' PostgreSQL gcloud spanner databases ddl update hrdb1 --instance = hr \ --ddl = 'CREATE ROLE hr analyst; GRANT SELECT, INSERT, UPDATE ON TABLE employees, contractors TO hr analyst;' Note: Use the same case for schema object names that you used when you created the objects.
- For example, to grant SELECT , INSERT , and UPDATE on tables employees and contractors to the database role hr manager , enter the following statement: GoogleSQL GRANT SELECT , INSERT , UPDATE ON TABLE employees , contractors TO ROLE hr manager ; PostgreSQL GRANT SELECT , INSERT , UPDATE ON TABLE employees , contractors TO hr manager ; Note: Use the same case for schema object names that you used when you created the objects.

### "Change stream partitions, records, and queries \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/details](https://docs.cloud.google.com/spanner/docs/change-streams/details)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Assuming a change stream SingersNameStream exists in the database, the query syntax for GoogleSQL is the following: SELECT ChangeRecord FROM READ SingersNameStream ( start timestamp , end timestamp , partition token , heartbeat milliseconds , read options ) The read function accepts the following arguments: Argument name Type Required?
- GoogleSQL SELECT ChangeRecord FROM READ SingersNameStream ( start timestamp = > "2022-05-01T09:00:01Z" , end timestamp = > NULL , partition token = > "child token 1" , heartbeat milliseconds = > 10000 ); SELECT ChangeRecord FROM READ SingersNameStream ( start timestamp = > "2022-05-01T09:00:01Z" , end timestamp = > NULL , partition token = > "child token 2" , heartbeat milliseconds = > 10000 ); SELECT ChangeRecord FROM READ SingersNameStream ( start timestamp = > "2022-05-01T09:00:01Z" , end timestamp = > NULL , partition token = > "child token 3" , heartbeat milliseconds = > 10000 ); PostgreSQL SELECT FROM "spanner" . "read json SingersNameStream" ( '2022-05-01T09:00:01Z' , NULL , 'child token 1' , 10000 , NULL ); SELECT FROM "spanner" . "read json SingersNameStream" ( '2022-05-01T09:00:01Z' , NULL , 'child token 2' , 10000 , NULL ); SELECT FROM "spanner" . "read json SingersNameStream" ( '2022-05-01T09:00:01Z' , NULL , 'child token 3' , 10000 , NULL ); The query on child token 2 finishes after returning another child partition record.
- The query workflow design should appoint one parent to wait and schedule the query on child token 4 . child par t i t io ns record : { "record type" : "child partitions" , "start timestamp" : "2022-05-01T09:30:15Z" , "record sequence" : "1000012389" , "child partitions" : [ { "token" : "child token 4" , "parent partition tokens" : [ "child token 2" , "child token 3" ], } ], } GoogleSQL SELECT ChangeRecord FROM READ SingersNameStream ( start timestamp = > "2022-05-01T09:30:15Z" , end timestamp = > NULL , partition token = > "child token 4" , heartbeat milliseconds = > 10000 ); PostgreSQL SELECT FROM "spanner" . "read json SingersNameStream" ( '2022-05-01T09:30:15Z' , NULL , 'child token 4' , 10000 , NULL ); Find examples of handling and parsing change stream records in the Apache Beam SpannerIO Dataflow connector on GitHub .
- Java private static final String SINGERS NAME STREAM QUERY TEMPLATE = "SELECT FROM \"spanner\".\"read json SingersNameStream\"" + "($1, $2, $3, $4, null)" ; // Helper method to conveniently create change stream query texts and // bind parameters. public static Statement getChangeStreamQuery ( String partitionToken , Timestamp startTimestamp , Timestamp endTimestamp , long heartbeatMillis ) { return Statement . newBuilder ( SINGERS NAME STREAM QUERY TEMPLATE ) . bind ( "p1" ) . to ( startTimestamp ) . bind ( "p2" ) . to ( endTimestamp ) . bind ( "p3" ) . to ( partitionToken ) . bind ( "p4" ) . to ( heartbeatMillis ) . build (); } Change streams record format GoogleSQL The change streams read function returns a single ChangeRecord column of type ARRAY<STRUCT<...>> .

