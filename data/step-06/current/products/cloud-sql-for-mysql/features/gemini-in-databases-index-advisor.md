---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.918Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Gemini in Databases index advisor"
feature_slug: "gemini-in-databases-index-advisor"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances"
  - "https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics"
keywords:
  - "gemini"
  - "databases"
  - "index"
  - "advisor"
  - "includes"
  - "managed"
  - "tracks"
  - "recurring"
---

# Gemini in Databases index advisor

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Gemini in Databases includes a managed index advisor that tracks recurring database queries.

## Extended Definition

Gemini in Databases includes a managed index advisor that tracks recurring database queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics](https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics)

## Supporting Pages

### REST Resource: instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- Source ID: `site-docs-reference-3`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "entitled" : boolean , "googleVacuumMgmtEnabled" : boolean , "oomSessionCancelEnabled" : boolean , "activeQueryEnabled" : boolean , "indexAdvisorEnabled" : boolean , "flagRecommenderEnabled" : boolean } Fields entitled boolean Output only.
- Whether the index advisor is enabled. flagRecommenderEnabled boolean Output only.
- Whether the active query is enabled. indexAdvisorEnabled boolean Output only.
- RotateServerCertificate Rotates the server certificate version to one previously added with the addServerCertificate method. addServerCa Adds a new trusted Certificate Authority (CA) version for the specified instance. addServerCertificate Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA. clone Creates a Cloud SQL instance as a clone of the source instance. delete Deletes a Cloud SQL instance. demote Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server. demoteMaster Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server. export Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file. failover Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. get Retrieves a resource containing information about a Cloud SQL instance. import Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage. insert Creates a new Cloud SQL instance. list Lists instances under a given project. listServerCas Lists all of the trusted Certificate Authorities (CAs) for the specified instance. patch Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. pointInTimeRestore Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery. promoteReplica Promotes the read replica instance to be an independent Cloud SQL primary instance. reencrypt Reencrypt CMEK instance with latest key version. resetSslConfig Deletes all client certificates and generates a new server SSL certificate for the instance. restart Restarts a Cloud SQL instance. restoreBackup Restores a backup of a Cloud SQL instance. rotateServerCa Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. startReplica Starts the replication in the read replica instance. stopReplica Stops the replication in the read replica instance. switchover Switches over from the primary instance to the DR replica instance. truncateLog Truncate MySQL general and slow query log tables MySQL only. update Updates settings of a Cloud SQL instance.

### "Build context sets using Gemini CLI \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli)
- Source ID: `site-docs-reference-required-5`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Build context sets using Gemini CLI Stay organized with collections Save and categorize content based on your preferences.
- Enable ngram token size flag. gcloud sql instances patch INSTANCE NAME --database-flags=ngram token size=3 Create a FULLTEXT index for trigram matching on the airport name CREATE FULLTEXT INDEX idx ngram airports name ON airports ( name ) WITH PARSER ngram ; Prepare your environment You can build context set files from any local development environment or IDE.
- To update the DB Context Enrichment extension, run the following command: gemini extensions update mcp-db-context-enrichment To update the DB Context Enrichment extension or to replace the GEMINI API KEY , run the following command: gemini extensions config mcp-db-context-enrichment GEMINI API KEY Replace GEMINI API KEY with your Gemini API key.
- To install the DB Context Enrichment extension, follow these steps: Install the DB Context Enrichment Gemini CLI extension: gemini extensions install https://github.com/GoogleCloudPlatform/db-context-enrichment Note: The extension requires a Gemini API key at installation to authenticate with the Gemini API and enable context generation.

### Cloud SQL metrics \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics](https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics)
- Source ID: `site-api-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- CUMULATIVE , INT64 , 1 cloudsql instance database Shared blocks (regular tables & indexed) accessed by statement execution. user : The user of the database. client addr : The IP address of the database client. access type : The block access type (hit/miss). database/postgresql/insights/perquery/execution time GA (project) Per query execution times CUMULATIVE , INT64 , us{CPU} cloudsql instance database Accumulated execution times per user per database per query.This is the sum of cpu time, io wait time, lock wait time, process context switch, and scheduling for all the processes involved in the query execution. querystring : The normalized query. user : The user of the database. client addr : The IP address of the database client. query hash : A unique hash of the query string. database/postgresql/insights/perquery/io time GA (project) Per query IO time CUMULATIVE , INT64 , us cloudsql instance database Accumulated IO time per user per database per query. querystring : The normalized query. user : The user of the database. client addr : The IP address of the database client. io type : The IO type (read/write). query hash : A unique hash of the query string. database/postgresql/insights/perquery/latencies GA (project) Per query latency CUMULATIVE , DISTRIBUTION , us cloudsql instance database Query latency distribution per user per database per query. querystring : The normalized query. user : The user of the database. client addr : The IP address of the database client. query hash : A unique hash of the query string. database/postgresql/insights/perquery/lock time GA (project) Per query lock time CUMULATIVE , INT64 , us cloudsql instance database Accumulated lock wait time per user per database per query. querystring : The normalized query. user : The user of the database. client addr : The IP address of the database client. lock type : The lock type (lw/hw/buffer pin). query hash : A unique hash of the query string. database/postgresql/insights/perquery/row count GA (project) Per query affected rows CUMULATIVE , INT64 , 1 cloudsql instance database Total number of rows affected during query execution. querystring : The normalized query. user : The user of the database. client addr : The IP address of the database client. query hash : A unique hash of the query string. database/postgresql/insights/perquery/shared blk access count GA (project) Per query Shared blocks cache access CUMULATIVE , INT64 , 1 cloudsql instance database Shared blocks (regular tables & indexed) accesssed by statement execution. querystring : The normalized query. user : The user of the database. client addr : The IP address of the database client. access type : The block access type (hit/miss). query hash : A unique hash of the query string. database/postgresql/insights/pertag/execution time GA (project) Per tag execution time CUMULATIVE , INT64 , us{CPU} cloudsql instance database Accumulated execution times per user per database per tag.This is the sum of cpu time, io wait time, lock wait time, process context switch, and scheduling for all the processes involved in the query execution. user : The user of the database. client addr : The IP address of the database client. action : The name of the action. application : The name of the application. controller : The name of the controller. db driver : The name of the db driver. framework : The name of the framework. route : The name of the route. tag hash : A unique hash of the tag string. database/postgresql/insights/pertag/io time GA (project) Per tag IO time CUMULATIVE , INT64 , us cloudsql instance database Accumulated IO write time per user per database per tag. user : The user of the database. client addr : The IP address of the database client. action : The name of the action. application : The name of the application. controller : The name of the controller. db driver : The name of the db driver. framework : The name of the framework. route : The name of the route. io type : The IO type (read/write). tag hash : A unique hash of the tag string. database/postgresql/insights/pertag/latencies GA (project) Per tag latency CUMULATIVE , DISTRIBUTION , us cloudsql instance database Query latency distribution per user per database per tag. user : The user of the database. client addr : The IP address of the database client. action : The name of the action. application : The name of the application. controller : The name of the controller. db driver : The name of the db driver. framework : The name of the framework. route : The name of the route. tag hash : A unique hash of the tag string. database/postgresql/insights/pertag/lock time GA (project) Per tag lock time CUMULATIVE , INT64 , us cloudsql instance database Accumulated lock wait time per user per database per tag. user : The user of the database. client addr : The IP address of the database client. action : The name of the action. application : The name of the application. controller : The name of the controller. db driver : The name of the db driver. framework : The name of the framework. route : The name of the route. lock type : The lock type (lw/hw/buffer pin). tag hash : A unique hash of the tag string. database/postgresql/insights/pertag/row count GA (project) Per tag affected rows CUMULATIVE , INT64 , 1 cloudsql instance database Total number of rows affected during query execution. user : The user of the database. client addr : The IP address of the database client. action : The name of the action. application : The name of the application. controller : The name of the controller. db driver : The name of the db driver. framework : The name of the framework. route : The name of the route. tag hash : A unique hash of the tag string. database/postgresql/insights/pertag/shared blk access count GA (project) Per tag shared blocks cache accessed CUMULATIVE , INT64 , 1 cloudsql instance database Shared blocks (regular tables & indexed) accessed by statement execution. user : The user of the database. client addr : The IP address of the database client. action : The name of the action. application : The name of the application. controller : The name of the controller. db driver : The name of the db driver. framework : The name of the framework. route : The name of the route. access type : The block access type (hit/miss). tag hash : A unique hash of the tag string. database/postgresql/new connection count GA (project) PostgreSQL new connections count DELTA , INT64 , 1 cloudsql database Count of new connections added to the postgres instance.
- After sampling, data is not visible for up to 165 seconds. login status : Login status, one of [succeeded, failed]. anomaly detected : Connection related anomaly, for example, "no anomaly detected", "brute-force login". anomalous connection throttled : (BOOL) Whether the connection is throttled if it's anomalous. database/network/connections GA (project) Cloud SQL Connections GAUGE , INT64 , 1 cloudsql database Number of connections to databases on the Cloud SQL instance.
- After sampling, data is not visible for up to 165 seconds. backend type : Type of backend. object : Target object of the write operation. context : The context of the write operation. database/postgresql/external sync/initial sync complete ALPHA (project) Initial sync complete GAUGE , BOOL , cloudsql database Whether all databases on the Postgres External Server (ES) replica have completed the initial sync and are replicating changes from the source.
- Metric type Launch stage (Resource hierarchy levels) Display name Kind, Type, Unit Monitored resources Description Labels database/active directory/domain reachable ALPHA (project) Active Directory domain reachable GAUGE , BOOL , cloudsql database Indicates whether the instance is able to ping a domain controller from the connected Managed Active Directory domain.

