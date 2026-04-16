---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:03.664Z"
product_name: "Firestore with MongoDB compatibility"
product_slug: "firestore-with-mongodb-compatibility"
feature_name: "TTL indexes"
feature_slug: "ttl-indexes"
latest_feature_date: "2026-03-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/index-overview"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/audit-logging"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints"
keywords:
  - "ttl"
  - "indexes"
  - "supports"
  - "managing"
  - "in"
  - "the"
  - "mongodb"
  - "api"
---

# TTL indexes

Product: Firestore with MongoDB compatibility
Coverage: MEDIUM

## Step 02 Summary

Supports managing TTL indexes in the MongoDB API.

## Extended Definition

Supports managing TTL indexes in the MongoDB API.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/index-overview](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/index-overview)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/audit-logging](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/audit-logging)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints)

## Supporting Pages

### "Indexes overview \_|\_ Firestore with MongoDB compatibility \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/index-overview](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/index-overview)
- Source ID: `site-iam-reference`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Learn how to create and manage indexes or TTL indexes Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For example, the following indexes are two distinct indexes and not interchangeable: Collection Fields cities country (ascending), population (descending) cities population (descending), country (ascending), When creating an index to support a query, include the fields in the same order as your query.
- The following situations lead to errors when working with array values and multikey indexes: An operation attempts to add an array value to a field indexed by a regular index.
- Sparse indexes A sparse index indexes only the documents in the collection that contain a value (including null) for at least one of the indexed fields.

### "Manage indexes \_|\_ Firestore with MongoDB compatibility \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing)
- Source ID: `site-iam-reference`
- Final score: 213
- Re-rank relevance: N/A

Evidence snippets:
- If you have defined custom roles, assign all of the following permissions to create indexes: datastore.indexes.create datastore.indexes.delete datastore.indexes.get datastore.indexes.list datastore.indexes.update Create an index To create an index, complete the following steps: MongoDB API Use the createIndex() method to create an index.
- Set api-scope to mongodb-compatible-api . gcloud firestore indexes composite create \ --database=' DATABASE ID ' \ --collection-group= COLLECTION \ --field-config= FIELD CONFIGURATION \ --query-scope=collection-group \ --density=dense \ --api-scope=mongodb-compatible-api Replace the following: DATABASE ID : a database ID.
- Terraform Use the google firestore index resource and set api scope to MONGODB COMPATIBLE API and query scope to COLLECTION GROUP . resource "google firestore index" "index" { database = " DATABASE ID " collection = " COLLECTION " api scope = "MONGODB COMPATIBLE API" query scope = "COLLECTION GROUP" // You can include multiple field blocks fields { field path = " FIELD PATH " order = " ORDER " } // Optional multikey = true density = " DENSITY " } Replace the following: DATABASE ID : The database ID for your chosen database COLLECTION : The name of the collection to index FIELD PATH : The name of the field to index ORDER : One of ASCENDING or DESCENDING DENSITY : One of SPARSE ANY or DENSE Delete an index To delete an index, complete the following steps: MongoDB API Use the dropIndex() method to delete an index.
- To delete the index, use the gcloud firestore indexes composite delete command. gcloud firestore indexes composite delete INDEX NAME \ --database=' DATABASE ID ' Replace the following: INDEX NAME : the name of an index DATABASE ID : a database ID Index build time To build an index, Firestore with MongoDB compatibility must create the index and then backfill the index entries with existing data.

### "Audit logging information \_|\_ Firestore with MongoDB compatibility \_\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/audit-logging](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.location.Locations.GetLocation google.cloud.location.Locations.ListLocations google.firestore.admin.v1.FirestoreAdmin.GetBackup google.firestore.admin.v1.FirestoreAdmin.GetBackupSchedule google.firestore.admin.v1.FirestoreAdmin.GetDatabase google.firestore.admin.v1.FirestoreAdmin.GetField google.firestore.admin.v1.FirestoreAdmin.GetIndex google.firestore.admin.v1.FirestoreAdmin.ListBackupSchedules google.firestore.admin.v1.FirestoreAdmin.ListBackups google.firestore.admin.v1.FirestoreAdmin.ListDatabases google.firestore.admin.v1.FirestoreAdmin.ListFields google.firestore.admin.v1.FirestoreAdmin.ListIndexes google.firestore.admin.v1beta1.FirestoreAdmin.GetIndex google.firestore.admin.v1.MongoDBCompatible.ListIndexes google.firestore.admin.v1.MongoDBCompatible.ListDatabases ADMIN WRITE google.firestore.admin.v1.FirestoreAdmin.CreateBackupSchedule google.firestore.admin.v1.FirestoreAdmin.CreateDatabase google.firestore.admin.v1.FirestoreAdmin.CreateIndex google.firestore.admin.v1.FirestoreAdmin.DeleteBackup google.firestore.admin.v1.FirestoreAdmin.DeleteBackupSchedule google.firestore.admin.v1.FirestoreAdmin.DeleteDatabase google.firestore.admin.v1.FirestoreAdmin.DeleteIndex google.firestore.admin.v1.FirestoreAdmin.RestoreDatabase google.firestore.admin.v1.FirestoreAdmin.UpdateBackupSchedule google.firestore.admin.v1.FirestoreAdmin.UpdateDatabase google.firestore.admin.v1.FirestoreAdmin.UpdateField google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation DATA READ google.firestore.v1.MongoDBCompatible.Find google.firestore.v1.MongoDBCompatible.Aggregate google.firestore.v1.MongoDBCompatible.GetMore google.firestore.v1.MongoDBCompatible.ListCollections google.firestore.v1.MongoDBCompatible.Count google.firestore.v1.MongoDBCompatible.Distinct google.firestore.v1.MongoDBCompatible.CommitTransaction google.firestore.v1.MongoDBCompatible.AbortTransaction google.firestore.v1.MongoDBCompatible.EndSessions google.firestore.v1.MongoDBCompatible.KillCursors DATA WRITE google.firestore.v1.MongoDBCompatible.Insert google.firestore.v1.MongoDBCompatible.Update google.firestore.v1.MongoDBCompatible.Delete google.firestore.v1.MongoDBCompatible.FindAndModify google.firestore.v1.MongoDBCompatible.CreateCollection Identify request callers Audit Log entries include information about the identity that performed the logged operation.
- Once configured, logs for the Firestore with MongoDB compatibility API include the service name firestore.googleapis.com`.
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Notes When configuring audit logging, use the service name datastore.googleapis.com to configure both datastore.googleapis.com and firestore.googleapis.com.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

### "Manage Firestore with MongoDB compatibility resources using custom constraints\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints)
- Source ID: `site-iam-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Test the custom organization policy Before you begin, you must know the following: Your organization ID Create the deleteProtectionRequired.yaml file as follows: name : organizations/ ORGANIZATION ID /customConstraints/custom.deleteProtectionRequired resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE - UPDATE condition : "resource.deleteProtectionState == \"DELETE PROTECTION ENABLED\"" actionType : ALLOW displayName : Firestore with MongoDB compatibility Delete Protection Required description : To ensure the data security, Delete Protection is required to be enabled for Firestore databases.
- Don't allow creation of databases unless delete protection is enabled. name : organizations/ ORGANIZATION ID /customConstraints/custom.deleteProtectionRequired resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE - UPDATE condition : "resource.deleteProtectionState == " DELETE PROTECTION ENABLED"" actionType : ALLOW displayName : Firestore with MongoDB compatibility Delete Protection Required description : To ensure the data security, Delete Protection is required to be enabled for Firestore databases.
- Manage Firestore with MongoDB compatibility resources using custom constraints This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: firestore.googleapis.com/Database To learn more about Organization Policy, see Custom organization policies .
- Note that the format of a database name in custom organization policies is projects/ project-id /databases/ database-id while only database-id is specified in database management operations. name : organizations/ ORGANIZATION ID /customConstraints/custom.nameSuffixMobile resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE condition : "resource.name.endsWith('-mobile')" actionType : ALLOW displayName : Firestore database names end with "-mobile" description : Only allow the creation of database names ending with suffix "-mobile" Databases can only be created in specified locations . name : organizations/ ORGANIZATION ID /customConstraints/custom.locationUsCentral1 resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE condition : "resource.locationId == 'us-central1'" actionType : ALLOW displayName : Firestore database location id us-central1 description : Only allow the creation of databases in region us-central1 Databases must enable point-in-time-recovery . name : organizations/ ORGANIZATION ID /customConstraints/custom.pitrEnforce resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE - UPDATE condition : "resource.pointInTimeRecoveryEnablement == " POINT IN TIME RECOVERY ENABLED"" actionType : ALLOW displayName : Firestore database enables PiTR description : Only allow the creation and updating of a databases if PiTR is enabled.

