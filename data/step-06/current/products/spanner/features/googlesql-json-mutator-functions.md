---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.188Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "GoogleSQL JSON mutator functions"
feature_slug: "googlesql-json-mutator-functions"
latest_feature_date: "2025-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/details"
  - "https://docs.cloud.google.com/spanner/docs/cloud-run-remote-function"
keywords:
  - "mutator"
  - "functions"
  - "including"
  - "googlesql"
  - "supports"
  - "json"
---

# GoogleSQL JSON mutator functions

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now supports GoogleSQL JSON mutator functions, including JSON_ARRAY_APPEND, JSON_ARRAY_INSERT, JSON_REMOVE, JSON_SET, and JSON_STRIP_NULLS.

## Extended Definition

Spanner now supports GoogleSQL JSON mutator functions, including JSON_ARRAY_APPEND, JSON_ARRAY_INSERT, JSON_REMOVE, JSON_SET, and JSON_STRIP_NULLS.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- [https://docs.cloud.google.com/spanner/docs/change-streams/details](https://docs.cloud.google.com/spanner/docs/change-streams/details)
- [https://docs.cloud.google.com/spanner/docs/cloud-run-remote-function](https://docs.cloud.google.com/spanner/docs/cloud-run-remote-function)

## Supporting Pages

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- All other principals can see only privileges granted on change stream read functions to the current database role and to roles of which the current database role is a member, not including public .
- ROUTINE PRIVILEGES This row-filtered table lists all fine-grained access control privileges granted on all change stream read functions to any database role, including public .
- ROLE ROUTINE GRANTS This row-filtered table lists the EXECUTE privileges granted on all change stream read functions to any database role, including public .
- Returns empty if the default leader is not set: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . option name = 'default leader' Return information about each index in the user's schema: SELECT t . table schema , t . table name , t . index name , t . parent table name FROM information schema . indexes AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) AND t . index type != 'PRIMARY KEY' ORDER BY t . table catalog , t . table schema , t . table name , t . index name Returns all the columns that use options other than the default: SELECT t . table schema , t . table name , t . column name , t . option type , t . option value , t . option name FROM information schema . column options AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) Returns the current optimizer related database options: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . schema name = '' AND s . option name IN ( 'optimizer version' , 'optimizer statistics package' ) Returns all available statistics packages: SELECT FROM information schema . spanner statistics ; Return all sequences: SELECT FROM information schema . sequences ; Return all sequence options for the sequence named "MySequence" SELECT FROM information schema . sequence options WHERE name = "MySequence" ; Return the names of all property graphs and their definitions: SELECT property graph name , property graph metadata json FROM information schema . property graphs Return the names of all property graphs together with their labels and properties: SELECT property graph name , property graph metadata json . labels , property graph metadata json . propertyDeclarations FROM information schema . property graphs What's next Learn about available Introspection tools to help you investigate database issues.

### "Change stream partitions, records, and queries \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/details](https://docs.cloud.google.com/spanner/docs/change-streams/details)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- GoogleSQL SELECT ChangeRecord FROM READ SingersNameStream ( start timestamp = > "2022-05-01T09:00:01Z" , end timestamp = > NULL , partition token = > "child token 1" , heartbeat milliseconds = > 10000 ); SELECT ChangeRecord FROM READ SingersNameStream ( start timestamp = > "2022-05-01T09:00:01Z" , end timestamp = > NULL , partition token = > "child token 2" , heartbeat milliseconds = > 10000 ); SELECT ChangeRecord FROM READ SingersNameStream ( start timestamp = > "2022-05-01T09:00:01Z" , end timestamp = > NULL , partition token = > "child token 3" , heartbeat milliseconds = > 10000 ); PostgreSQL SELECT FROM "spanner" . "read json SingersNameStream" ( '2022-05-01T09:00:01Z' , NULL , 'child token 1' , 10000 , NULL ); SELECT FROM "spanner" . "read json SingersNameStream" ( '2022-05-01T09:00:01Z' , NULL , 'child token 2' , 10000 , NULL ); SELECT FROM "spanner" . "read json SingersNameStream" ( '2022-05-01T09:00:01Z' , NULL , 'child token 3' , 10000 , NULL ); The query on child token 2 finishes after returning another child partition record.
- The query workflow design should appoint one parent to wait and schedule the query on child token 4 . child par t i t io ns record : { "record type" : "child partitions" , "start timestamp" : "2022-05-01T09:30:15Z" , "record sequence" : "1000012389" , "child partitions" : [ { "token" : "child token 4" , "parent partition tokens" : [ "child token 2" , "child token 3" ], } ], } GoogleSQL SELECT ChangeRecord FROM READ SingersNameStream ( start timestamp = > "2022-05-01T09:30:15Z" , end timestamp = > NULL , partition token = > "child token 4" , heartbeat milliseconds = > 10000 ); PostgreSQL SELECT FROM "spanner" . "read json SingersNameStream" ( '2022-05-01T09:30:15Z' , NULL , 'child token 4' , 10000 , NULL ); Find examples of handling and parsing change stream records in the Apache Beam SpannerIO Dataflow connector on GitHub .
- Java private static final String SINGERS NAME STREAM QUERY TEMPLATE = "SELECT FROM \"spanner\".\"read json SingersNameStream\"" + "($1, $2, $3, $4, null)" ; // Helper method to conveniently create change stream query texts and // bind parameters. public static Statement getChangeStreamQuery ( String partitionToken , Timestamp startTimestamp , Timestamp endTimestamp , long heartbeatMillis ) { return Statement . newBuilder ( SINGERS NAME STREAM QUERY TEMPLATE ) . bind ( "p1" ) . to ( startTimestamp ) . bind ( "p2" ) . to ( endTimestamp ) . bind ( "p3" ) . to ( partitionToken ) . bind ( "p4" ) . to ( heartbeatMillis ) . build (); } Change streams record format GoogleSQL The change streams read function returns a single ChangeRecord column of type ARRAY<STRUCT<...>> .
- GoogleSQL SELECT ChangeRecord FROM READ SingersNameStream ( start timestamp = > "2022-05-01T09:00:00Z" , end timestamp = > NULL , partition token = > NULL , heartbeat milliseconds = > 10000 ); PostgreSQL SELECT FROM "spanner" . "read json SingersNameStream" ( '2022-05-01T09:00:00Z' , NULL , NULL , 10000 , NULL ) ; Process data records from this query until all child partition records are returned.

### Spanner remote functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/cloud-run-remote-function](https://docs.cloud.google.com/spanner/docs/cloud-run-remote-function)
- Source ID: `site-docs-root`
- Final score: 85
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- MAX LOSSLESS = 9007199254740992 @functions framework . http def batch add ( request ): try : return value = [] request json = request . get json () calls = request json [ 'calls' ] for call in calls : return value . append ( sum ([ int ( x ) if isinstance ( x , str ) else x for x in call if x is not None ])) replies = [ str ( x ) if x > MAX LOSSLESS or x < - MAX LOSSLESS else x for x in return value ] return json = jsonify ( { "replies" : replies } ) return return json except Exception as e : return jsonify ( { "errorMessage" : str ( e ) } ), 400 Assuming that the function is deployed in the project PROJECT ID in region us-east1 as the function name remote add , it can be accessed using the endpoint https://us-east1- PROJECT ID .cloudfunctions.net/remote add .
- Supported types Remote functions support the following data types as argument or return types: ARRAY (of any of the following supported types) BOOLEAN BYTES DATE JSON INTEGER NUMERIC STRING TIMESTAMP Limitations You cannot create table-valued remote functions.
- In case of overflow, it returns the error as part of the response. """ import functions framework from flask import jsonify Max INT64 value encoded as a number in JSON by TO JSON STRING.
- MAX LOSSLESS = 9007199254740992 app = Flask ( name ) @app . route ( "/" , methods = [ 'POST' ]) def batch add (): try : return value = [] request json = request . get json () calls = request json [ 'calls' ] for call in calls : return value . append ( sum ([ int ( x ) if isinstance ( x , str ) else x for x in call if x is not None ])) replies = [ str ( x ) if x > MAX LOSSLESS or x < - MAX LOSSLESS else x for x in return value ] return jsonify ( { "replies" : replies } ) except Exception as e : return jsonify ( { "errorMessage" : str ( e ) } ), 400 if name == " main " : app . run ( debug = True , host = "0.0.0.0" , port = int ( os . environ . get ( "PORT" , 8080 ))) To build and deploy the code, see Quickstart: Build and deploy a Python (Flask) web app to Cloud Run .

