---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:03.703Z"
product_name: "Firestore with MongoDB compatibility"
product_slug: "firestore-with-mongodb-compatibility"
feature_name: "Point-in-time recovery"
feature_slug: "point-in-time-recovery"
latest_feature_date: "2025-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/disaster-recovery"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-databases"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/backups"
keywords:
  - "point"
  - "in"
  - "time"
  - "recovery"
  - "firestore"
  - "with"
  - "mongodb"
  - "compatibility"
---

# Point-in-time recovery

Product: Firestore with MongoDB compatibility
Coverage: MEDIUM

## Step 02 Summary

Firestore with MongoDB compatibility supports point-in-time recovery, including reading data at a specific snapshot through the MongoDB APIs.

## Extended Definition

Firestore with MongoDB compatibility supports point-in-time recovery, including reading data at a specific snapshot through the MongoDB APIs.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/disaster-recovery](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/disaster-recovery)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-databases](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-databases)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/backups](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/backups)

## Supporting Pages

### "Plan disaster recovery \_|\_ Firestore with MongoDB compatibility \_|\_\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/disaster-recovery](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/disaster-recovery)
- Source ID: `site-iam-reference`
- Final score: 368
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Disaster recovery planning for cloud infrastructure outages To protect against potential cloud infrastructure disruptions in Google Cloud such as a zone or region experiencing an outage, Firestore with MongoDB compatibility replicates data across multiple replica databases.
- Plan disaster recovery This page describes Firestore with MongoDB compatibility features that can help you create and implement disaster recovery plans.
- Firestore with MongoDB compatibility automatically handles replication for you and doesn't require additional configuration or provisioning.
- You can restore your database from a backup to a new Firestore with MongoDB compatibility database in the same project.

### "Manage Firestore with MongoDB compatibility resources using custom constraints\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints)
- Source ID: `site-iam-reference`
- Final score: 350
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note that the format of a database name in custom organization policies is projects/ project-id /databases/ database-id while only database-id is specified in database management operations. name : organizations/ ORGANIZATION ID /customConstraints/custom.nameSuffixMobile resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE condition : "resource.name.endsWith('-mobile')" actionType : ALLOW displayName : Firestore database names end with "-mobile" description : Only allow the creation of database names ending with suffix "-mobile" Databases can only be created in specified locations . name : organizations/ ORGANIZATION ID /customConstraints/custom.locationUsCentral1 resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE condition : "resource.locationId == 'us-central1'" actionType : ALLOW displayName : Firestore database location id us-central1 description : Only allow the creation of databases in region us-central1 Databases must enable point-in-time-recovery . name : organizations/ ORGANIZATION ID /customConstraints/custom.pitrEnforce resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE - UPDATE condition : "resource.pointInTimeRecoveryEnablement == " POINT IN TIME RECOVERY ENABLED"" actionType : ALLOW displayName : Firestore database enables PiTR description : Only allow the creation and updating of a databases if PiTR is enabled.
- Test the custom organization policy Before you begin, you must know the following: Your organization ID Create the deleteProtectionRequired.yaml file as follows: name : organizations/ ORGANIZATION ID /customConstraints/custom.deleteProtectionRequired resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE - UPDATE condition : "resource.deleteProtectionState == \"DELETE PROTECTION ENABLED\"" actionType : ALLOW displayName : Firestore with MongoDB compatibility Delete Protection Required description : To ensure the data security, Delete Protection is required to be enabled for Firestore databases.
- Don't allow creation of databases unless delete protection is enabled. name : organizations/ ORGANIZATION ID /customConstraints/custom.deleteProtectionRequired resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE - UPDATE condition : "resource.deleteProtectionState == " DELETE PROTECTION ENABLED"" actionType : ALLOW displayName : Firestore with MongoDB compatibility Delete Protection Required description : To ensure the data security, Delete Protection is required to be enabled for Firestore databases.
- Manage Firestore with MongoDB compatibility resources using custom constraints This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: firestore.googleapis.com/Database To learn more about Organization Policy, see Custom organization policies .

### "Create and manage databases \_|\_ Firestore with MongoDB compatibility \_\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-databases](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-databases)
- Source ID: `site-docs-root`
- Final score: 314
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required permissions To manage databases, you need the following permissions: Create a database: datastore.databases.create Read database configuration: datastore.databases.getMetadata Configure a database: datastore.databases.update Delete a database: datastore.databases.delete Clone a database: datastore.databases.clone Create a database To create a Firestore with MongoDB compatibility database, use one of the following methods: Google Cloud console In the Google Cloud console, go to the Databases page.
- To make a clone, Firestore uses point-in-time recovery (PITR) data of the source database.
- Learn about Cloud Monitoring metrics for Firestore with MongoDB compatibility .
- Example: gcloud firestore databases clone \ --source-database = 'projects/example-project/databases/example-source-db' \ --snapshot-time = '2025-06-01T10:20:00.00Z' \ --destination-database = 'example-dest-db' If you want to bind to some tags while cloning a database, use the previous command with the --tags flag, which is an optional list of tags KEY=VALUE pairs to bind.

### "Back up and restore data \_|\_ Firestore with MongoDB compatibility \_|\_\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/backups](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/backups)
- Source ID: `site-iam-reference`
- Final score: 290
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To list only the backups from a specific location, use the --location flag: gcloud firestore backups list \ --location= LOCATION \ --format="table(name, database, state)" Replace LOCATION with the name of a Firestore with MongoDB compatibility location.
- Home Documentation Databases Firestore with MongoDB compatibility Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Restore data from a database backup A restore operation writes the data from a backup to a new Firestore with MongoDB compatibility database.
- Back up and restore data This page describes how to use the Firestore with MongoDB compatibility scheduled backups feature.

