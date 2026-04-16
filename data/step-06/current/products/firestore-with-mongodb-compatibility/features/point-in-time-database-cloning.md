---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:03.703Z"
product_name: "Firestore with MongoDB compatibility"
product_slug: "firestore-with-mongodb-compatibility"
feature_name: "Point-in-time database cloning"
feature_slug: "point-in-time-database-cloning"
latest_feature_date: "2025-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-databases"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints"
  - "https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/disaster-recovery"
keywords:
  - "point"
  - "in"
  - "time"
  - "database"
  - "cloning"
  - "you"
  - "can"
  - "clone"
---

# Point-in-time database cloning

Product: Firestore with MongoDB compatibility
Coverage: MEDIUM

## Step 02 Summary

You can clone an existing database into a new database at a selected timestamp; You can clone an existing database into a new database at a selected timestamp.

## Extended Definition

You can clone an existing database into a new database at a selected timestamp; You can clone an existing database into a new database at a selected timestamp.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-databases](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-databases)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints)
- [https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/disaster-recovery](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/disaster-recovery)

## Supporting Pages

### "Create and manage databases \_|\_ Firestore with MongoDB compatibility \_\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-databases](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-databases)
- Source ID: `site-docs-root`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example shows how to configure CMEK encryption for the cloned database: gcloud firestore databases clone \ --source-database = 'projects/example-project/databases/example-source-db' \ --snapshot-time = '2025-06-01T10:20:00.00Z' \ --destination-database = 'example-dest-db' \ --encryption-type = 'customer-managed-encryption' \ --kms-key-name = 'projects/example-project/locations/us-central1/keyRings/example-key-ring/cryptoKeys/example-key' Configure per-database access permissions You can use Identity and Access Management Conditions to configure access permissions on a per-database level.
- If you want to specify a different encryption configuration for the cloned database, you can use Google Cloud CLI commands. gcloud Use the gcloud firestore databases clone command to clone a database: gcloud firestore databases clone \ --source-database = ' SOURCE DATABASE ' \ --snapshot-time = ' PITR TIMESTAMP ' \ --destination-database = ' DESTINATION DATABASE ID ' Replace the following: SOURCE DATABASE : the database name of an existing database that you want to clone.
- Example: gcloud firestore databases clone \ --source-database = 'projects/example-project/databases/example-source-db' \ --snapshot-time = '2025-06-01T10:20:00.00Z' \ --destination-database = 'example-dest-db' If you want to bind to some tags while cloning a database, use the previous command with the --tags flag, which is an optional list of tags KEY=VALUE pairs to bind.
- Clone a database You can clone an existing database at a selected timestamp into a new database: The cloned database is a new database that will be created in the same location as the source database.

### "Manage Firestore with MongoDB compatibility resources using custom constraints\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints)
- Source ID: `site-iam-reference`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Benefits Security, compliance, and governance : you can use custom organization policies as follows: To enforce disaster recovery requirements, you can require specific disaster recovery settings on databases like delete protection, and point in time recovery.
- Note that the format of a database name in custom organization policies is projects/ project-id /databases/ database-id while only database-id is specified in database management operations. name : organizations/ ORGANIZATION ID /customConstraints/custom.nameSuffixMobile resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE condition : "resource.name.endsWith('-mobile')" actionType : ALLOW displayName : Firestore database names end with "-mobile" description : Only allow the creation of database names ending with suffix "-mobile" Databases can only be created in specified locations . name : organizations/ ORGANIZATION ID /customConstraints/custom.locationUsCentral1 resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE condition : "resource.locationId == 'us-central1'" actionType : ALLOW displayName : Firestore database location id us-central1 description : Only allow the creation of databases in region us-central1 Databases must enable point-in-time-recovery . name : organizations/ ORGANIZATION ID /customConstraints/custom.pitrEnforce resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE - UPDATE condition : "resource.pointInTimeRecoveryEnablement == " POINT IN TIME RECOVERY ENABLED"" actionType : ALLOW displayName : Firestore database enables PiTR description : Only allow the creation and updating of a databases if PiTR is enabled.
- Resource Field firestore.googleapis.com/Database resource.appEngineIntegrationMode resource.cmekConfig.kmsKeyName resource.concurrencyMode resource.deleteProtectionState resource.locationId resource.name resource.pointInTimeRecoveryEnablement resource.type What's next Learn more about Organization Policy Service .
- You can restrict database creation to only certain locations.

### "Exporting and importing data \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import)
- Source ID: `site-docs-root-2`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Choose the state of your database to export section, select Export from an earlier point in time .
- Note: Exporting a collection group won't automatically export subcollections of the collections within the group. gcloud firestore export gs:// [BUCKET NAME] \ --collection-ids= [COLLECTION GROUP ID 1] , [COLLECTION GROUP ID 2] \ --database= [DATABASE] For example, you can design a restaurants collection in the foo database to include multiple subcollections, such as ratings , reviews , or outlets .
- For example: gcloud firestore import gs://my-bucket/2017-05-25T23:54:39 76544/ --database='cymbal' You can confirm the location of your export files in the Cloud Storage browser in the Google Cloud console: Open Cloud Storage browser Once you start an import operation, closing the terminal does not cancel the operation, see cancel an operation .
- Operation names are prefixed with projects/[PROJECT ID]/databases/(default)/operations/ , for example: projects/my-project/databases/(default)/operations/ASA1MTAwNDQxNAgadGx1YWZlZAcSeWx0aGdpbi1zYm9qLW5pbWRhEgopEg However, you can leave out the prefix when specifying an operation name for the describe , cancel , and delete commands.

### "Plan disaster recovery \_|\_ Firestore with MongoDB compatibility \_|\_\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/disaster-recovery](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/disaster-recovery)
- Source ID: `site-iam-reference`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Database clone You can recover data by cloning your database from a point in time in the past.
- You can read data at a granularity level of 1 minute and surgically write back into the your database with a recovery time objective (maximum time for recovery) of 0.
- Data exports For data retention needs beyond 14 weeks, you can use PITR to create an export of your entire database and save this data in Cloud Storage indefinitely.
- You can restore your database from a backup to a new Firestore with MongoDB compatibility database in the same project.

