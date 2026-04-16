---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:03.665Z"
product_name: "Firestore with MongoDB compatibility"
product_slug: "firestore-with-mongodb-compatibility"
feature_name: "Firestore databases page status column"
feature_slug: "firestore-databases-page-status-column"
latest_feature_date: "2026-02-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/backups"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-databases"
keywords:
  - "firestore"
  - "databases"
  - "page"
  - "status"
  - "column"
  - "adds"
  - "to"
  - "the"
---

# Firestore databases page status column

Product: Firestore with MongoDB compatibility
Coverage: MEDIUM

## Step 02 Summary

Adds a status column to the Firestore databases page in the Google Cloud console.

## Extended Definition

Adds a status column to the Firestore databases page in the Google Cloud console.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/backups](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/backups)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-databases](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-databases)

## Supporting Pages

### "Exporting and importing data \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import)
- Source ID: `site-docs-root-2`
- Final score: 271
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the navigation menu, click Import/Export . gcloud Use the operations list command to see all running and recently completed export and import operations: gcloud firestore operations list Check operation status Google Cloud Console You can view the status of a recent export or import operation in the Import/Export page of the Google Cloud console.
- Note: You must export specific collection groups if you plan to: Import only specific collection groups Load Firestore data into BigQuery Export all documents Google Cloud Console In the Google Cloud console, go to the Databases page.
- View migration status To verify your project's migration status: In the Google Cloud console, go to the Databases page.
- In the navigation menu, click Import/Export . gcloud Use the operations describe command to show the status of an export or import operation. gcloud firestore operations describe [OPERATION NAME] Estimate the completion time A request for the status of a long-running operation returns the metrics workEstimated and workCompleted .

### "Import and export data \_|\_ Firestore with MongoDB compatibility \_|\_\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import)
- Source ID: `site-iam-reference`
- Final score: 269
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the navigation menu, click Import/Export . gcloud Use the operations list command to see all running and recently completed export and import operations: gcloud firestore operations list Check operation status Google Cloud Console You can view the status of a recent export or import operation in the Import/Export page of the Google Cloud console.
- Note: You must export specific collections if you plan to: Import only specific collections Load Firestore with MongoDB compatibility data into BigQuery Export all documents Google Cloud Console In the Google Cloud console, go to the Databases page.
- In the navigation menu, click Import/Export . gcloud Use the operations describe command to show the status of an export or import operation. gcloud firestore operations describe [OPERATION NAME] Estimate the completion time A request for the status of a long-running operation returns the metrics workEstimated and workCompleted .
- On failure, the page displays an error message. gcloud Use the firestore import command to import documents from a previous export operation. gcloud firestore import gs:// [BUCKET NAME] / [EXPORT PREFIX] / --database= [DATABASE] Replace the following: BUCKET NAME/EXPORT PREFIX : location of your export files.

### "Back up and restore data \_|\_ Firestore with MongoDB compatibility \_|\_\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/backups](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/backups)
- Source ID: `site-iam-reference`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The output will include metadata , name , and response components: metadata: '@type': type.googleapis.com/google.firestore.admin.v1.RestoreDatabaseMetadata backup: projects/ PROJECT ID /locations/ LOCATION /backups/ BACKUP ID database: projects/ PROJECT ID /databases/ DATABASE ID operationState: PROCESSING progressPercentage: completedWork: '20' estimatedWork: '100' startTime: '2023-12-06T14:20:17.398325Z' name: projects/ PROJECT ID /databases/ DATABASE ID /operations/operation uuid response: '@type': type.googleapis.com/google.firestore.admin.v1.Database createTime: '2023-12-06T14:20:17.398325Z' name: projects/ PROJECT ID /databases/ DATABASE ID ...
- The restore operation will take some time and must complete before the database is accessible. gcloud Use the gcloud firestore databases restore command: gcloud firestore databases restore \ --source-backup=projects/ PROJECT ID /locations/ LOCATION /backups/ BACKUP ID \ --destination-database=' DATABASE ID \ --tags=[ KEY = VALUE ]' Replace the following: PROJECT ID : Your project ID.
- Set to one of the following: SUNDAY for Sunday MONDAY for Monday TUESDAY for Tuesday WEDNESDAY for Wednesday THURSDAY for Thursday FRIDAY for Friday SATURDAY for Saturday List backup schedules To list all backup schedules for a database, use one of the following methods: Google Cloud console In the Google Cloud console, go to the Databases page.
- This page describes backup schedules and lists available backups. gcloud Use the gcloud firestore backups schedules describe command: gcloud firestore backups schedules describe \ --database=' DATABASE ID ' \ --backup-schedule= BACKUP SCHEDULE ID Replace the following: DATABASE ID : The ID of the database to back up.

### "Create and manage databases \_|\_ Firestore with MongoDB compatibility \_\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-databases](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-databases)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required permissions To manage databases, you need the following permissions: Create a database: datastore.databases.create Read database configuration: datastore.databases.getMetadata Configure a database: datastore.databases.update Delete a database: datastore.databases.delete Clone a database: datastore.databases.clone Create a database To create a Firestore with MongoDB compatibility database, use one of the following methods: Google Cloud console In the Google Cloud console, go to the Databases page.
- Go to Databases gcloud CLI Use the gcloud firestore databases list command to list all the databases in your project. gcloud firestore databases list View database details To view details about a single database, use one of the following methods: Google Cloud console In the Google Cloud console, go to the Databases page.
- The following example shows how to configure CMEK encryption for the cloned database: gcloud firestore databases clone \ --source-database = 'projects/example-project/databases/example-source-db' \ --snapshot-time = '2025-06-01T10:20:00.00Z' \ --destination-database = 'example-dest-db' \ --encryption-type = 'customer-managed-encryption' \ --kms-key-name = 'projects/example-project/locations/us-central1/keyRings/example-key-ring/cryptoKeys/example-key' Configure per-database access permissions You can use Identity and Access Management Conditions to configure access permissions on a per-database level.
- If you want to specify a different encryption configuration for the cloned database, you can use Google Cloud CLI commands. gcloud Use the gcloud firestore databases clone command to clone a database: gcloud firestore databases clone \ --source-database = ' SOURCE DATABASE ' \ --snapshot-time = ' PITR TIMESTAMP ' \ --destination-database = ' DESTINATION DATABASE ID ' Replace the following: SOURCE DATABASE : the database name of an existing database that you want to clone.

