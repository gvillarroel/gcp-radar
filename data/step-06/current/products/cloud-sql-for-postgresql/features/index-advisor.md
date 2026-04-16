---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.770Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Index advisor"
feature_slug: "index-advisor"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances"
  - "https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex"
keywords:
  - "recommendation"
  - "recurring"
  - "analyzes"
  - "advisor"
  - "feature"
  - "index"
  - "managed"
  - "queries"
---

# Index advisor

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Index advisor is a managed recommendation feature that analyzes recurring queries and suggests indexes.

## Extended Definition

Index advisor is a managed recommendation feature that analyzes recurring queries and suggests indexes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex](https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex)

## Supporting Pages

### "REST Resource: instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- Source ID: `site-api-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "entitled" : boolean , "googleVacuumMgmtEnabled" : boolean , "oomSessionCancelEnabled" : boolean , "activeQueryEnabled" : boolean , "indexAdvisorEnabled" : boolean , "flagRecommenderEnabled" : boolean } Fields entitled boolean Output only.
- Whether the index advisor is enabled. flagRecommenderEnabled boolean Output only.
- Whether the active query is enabled. indexAdvisorEnabled boolean Output only.
- RotateServerCertificate Rotates the server certificate version to one previously added with the addServerCertificate method. addServerCa Adds a new trusted Certificate Authority (CA) version for the specified instance. addServerCertificate Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA. clone Creates a Cloud SQL instance as a clone of the source instance. delete Deletes a Cloud SQL instance. demote Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server. demoteMaster Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server. export Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file. failover Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. get Retrieves a resource containing information about a Cloud SQL instance. import Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage. insert Creates a new Cloud SQL instance. list Lists instances under a given project. listServerCas Lists all of the trusted Certificate Authorities (CAs) for the specified instance. patch Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. pointInTimeRestore Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery. preCheckMajorVersionUpgrade Execute MVU Pre-checks promoteReplica Promotes the read replica instance to be an independent Cloud SQL primary instance. reencrypt Reencrypt CMEK instance with latest key version. resetSslConfig Deletes all client certificates and generates a new server SSL certificate for the instance. restart Restarts a Cloud SQL instance. restoreBackup Restores a backup of a Cloud SQL instance. rotateServerCa Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. startReplica Starts the replication in the read replica instance. stopReplica Stops the replication in the read replica instance. switchover Switches over from the primary instance to the DR replica instance. truncateLog Truncate MySQL general and slow query log tables MySQL only. update Updates settings of a Cloud SQL instance.

### REST Resource: instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances)
- Source ID: `site-iam-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "entitled" : boolean , "googleVacuumMgmtEnabled" : boolean , "oomSessionCancelEnabled" : boolean , "activeQueryEnabled" : boolean , "indexAdvisorEnabled" : boolean , "flagRecommenderEnabled" : boolean } Fields entitled boolean Output only.
- Whether the index advisor is enabled. flagRecommenderEnabled boolean Output only.
- Whether the active query is enabled. indexAdvisorEnabled boolean Output only.
- RotateServerCertificate Rotates the server certificate version to one previously added with the addServerCertificate method. addServerCa Add a new trusted Certificate Authority (CA) version for the specified instance. addServerCertificate Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA. clone Creates a Cloud SQL instance as a clone of the source instance. delete Deletes a Cloud SQL instance. demote Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server. demoteMaster Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server. executeSql Execute SQL statements. export Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file. failover Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. get Retrieves a resource containing information about a Cloud SQL instance. import Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage. insert Creates a new Cloud SQL instance. list Lists instances under a given project. listServerCas Lists all of the trusted Certificate Authorities (CAs) for the specified instance. patch Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. pointInTimeRestore Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery. promoteReplica Promotes the read replica instance to be an independent Cloud SQL primary instance. reencrypt Reencrypt CMEK instance with latest key version. resetSslConfig Deletes all client certificates and generates a new server SSL certificate for the instance. restart Restarts a Cloud SQL instance. restoreBackup Restores a backup of a Cloud SQL instance. rotateServerCa Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. startReplica Starts the replication in the read replica instance. stopReplica Stops the replication in the read replica instance. switchover Switches over from the primary instance to the DR replica instance. truncateLog Truncate MySQL general and slow query log tables MySQL only. update Updates settings of a Cloud SQL instance.

### "Build LLM-powered applications using LlamaIndex \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex](https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex)
- Source ID: `site-iam-reference`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use LlamaIndex to build applications that access and query information from private or domain-specific data using natural language queries.
- Store vector embeddings with the PostgresVectorStore class The Cloud SQL for PostgreSQL for vector store shows you how to do the following: Initialize a table to store vector embeddings Create an embedding class instance using any Llama Index embeddings model .
- LlamaIndex components Cloud SQL for PostgreSQL offers the following LlamaIndex interfaces: Vector Store Document Store Index Stores Chat Stores Document Reader Learn how to use LlamaIndex with the Quickstart for Cloud SQL for PostgreSQL .
- Store documents and indexes The Cloud SQL for PostgreSQL notebook for Document Stores shows you how to use Cloud SQL for PostgreSQL to store documents and indexes using the PostgresDocumentStore and PostgresIndexStore classes.

