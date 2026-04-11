---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T08:14:41.833Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Database clone"
feature_slug: "database-clone"
latest_feature_date: "2025-10-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/access/iam"
  - "https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore"
  - "https://docs.cloud.google.com/datastore/docs/cmek"
keywords:
  - "database"
  - "clone"
  - "lets"
  - "you"
  - "create"
  - "new"
  - "from"
  - "an"
---

# Database clone

Product: Datastore
Coverage: LOW

## Step 02 Summary

Database clone lets you create a new database from an existing database state; Database clone lets you create a new database from an existing database at a selected timestamp.

## Extended Definition

Database clone lets you create a new database from an existing database state; Database clone lets you create a new database from an existing database at a selected timestamp.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/access/iam](https://docs.cloud.google.com/datastore/docs/access/iam)
- [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- [https://docs.cloud.google.com/datastore/docs/cmek](https://docs.cloud.google.com/datastore/docs/cmek)

## Supporting Pages

### "Identity and Access Management (IAM) \_|\_ Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/access/iam](https://docs.cloud.google.com/datastore/docs/access/iam)
- Source ID: `site-iam-reference`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Method Required Permission(s) lookup of entities with kind names matching Stat datastore.statistics.get runQuery using kinds with names matching Stat datastore.statistics.get datastore.statistics.list runQuery using the kind namespace datastore.namespaces.get datastore.namespaces.list Required roles to create a Datastore mode database instance To create a new Datastore mode database instance, you require either the Owner role or the Datastore Owner role .
- This role also gives the ability to create new databases, not necessarily by restoring from a backup. roles/datastore.cloneAdmin datastore.databases.clone datastore.databases.list datastore.databases.create datastore.databases.getMetadata datastore.operations.list datastore.operations.get Ability to clone a Datastore mode database into a new database.
- Intended for application developers and service accounts. roles/datastore.viewer appengine.applications.get datastore.databases.get datastore.databases.getMetadata datastore.databases.list datastore.entities.get datastore.entities.list datastore.schemas.get datastore.schemas.list datastore.namespaces.get datastore.namespaces.list datastore.statistics.get datastore.statistics.list resourcemanager.projects.get resourcemanager.projects.list datastore.insights.get Read access to all Datastore mode database resources. roles/datastore.importExportAdmin appengine.applications.get datastore.databases.export datastore.databases.getMetadata datastore.databases.import datastore.operations.cancel datastore.operations.get datastore.operations.list resourcemanager.projects.get resourcemanager.projects.list Full access to manage imports and exports. roles/datastore.bulkAdmin resourcemanager.projects.get resourcemanager.projects.list datastore.databases.getMetadata datastore.databases.bulkDelete datastore.operations.cancel datastore.operations.get datastore.operations.list Full access to manage bulk operations. roles/datastore.indexAdmin appengine.applications.get datastore.databases.getMetadata datastore.schemas. datastore.operations.get datastore.operations.list resourcemanager.projects.get resourcemanager.projects.list Full access to manage index definitions. roles/datastore.keyVisualizerViewer datastore.databases.getMetadata datastore.keyVisualizerScans.get datastore.keyVisualizerScans.list resourcemanager.projects.get resourcemanager.projects.list Full access to Key Visualizer scans. roles/datastore.backupSchedulesViewer datastore.backupSchedules.get datastore.backupSchedules.list Read access to backup schedules in a Datastore mode database. roles/datastore.backupSchedulesAdmin datastore.backupSchedules.get datastore.backupSchedules.list datastore.backupSchedules.create datastore.backupSchedules.update datastore.backupSchedules.delete datastore.databases.list datastore.databases.getMetadata Full access to backup schedules in a Datastore mode database. roles/datastore.backupsViewer datastore.backups.get datastore.backups.list Read access to backup information in a Datastore mode location. roles/datastore.backupsAdmin datastore.backups.get datastore.backups.list datastore.backups.delete Full access to backups in a Datastore mode location. roles/datastore.restoreAdmin datastore.backups.get datastore.backups.list datastore.backups.restoreDatabase datastore.databases.list datastore.databases.create datastore.databases.getMetadata datastore.operations.list datastore.operations.get Ability to restore a Datastore mode backup into a new database.
- View tags datastore.databases.listTagBindings datastore.databases.listEffectiveTags Manage tags on resources The following permission is required for the database resource you're attaching the tag value. datastore.databases.createTagBinding Required Permissions for API methods The following table lists the permissions that the caller must have to call each method: Method Required Permission(s) allocateIds datastore.entities.allocateIds beginTransaction datastore.databases.get commit with empty mutations datastore.databases.get commit for an insert datastore.entities.create commit for an upsert datastore.entities.create datastore.entities.update commit for an update datastore.entities.update commit for a delete datastore.entities.delete commit for a lookup datastore.entities.get For a lookup related to metadata or statistics, see Required Permissions for Metadata and Statistics . commit for a query datastore.entities.list datastore.entities.get (if the query is not a keys-only query ) For a query related to metadata or statistics, see Required Permissions for Metadata and Statistics . lookup datastore.entities.get For a lookup related to metadata or statistics, see Required Permissions for Metadata and Statistics . rollback datastore.databases.get runQuery datastore.entities.list datastore.entities.get (if the query is not a keys-only query ) For a query related to metadata or statistics, see Required Permissions for Metadata and Statistics . runQuery with a kindless query datastore.entities.get datastore.entities.list datastore.statistics.get datastore.statistics.list Required Permissions for Metadata and Statistics The following table lists permissions that the caller must have to call methods on Metadata and Statistics .

### "Balancing Strong and Eventual Consistency with Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- Source ID: `site-iam-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- If you are currently using the older DB Client Library, read the DB to NDB Migration Guide Contents NoSQL and Eventual Consistency Eventual Consistency in Datastore Ancestor Query and Entity Group Limitations of Entity Group and Ancestor Query Alternatives to Ancestor Queries Minimizing Time to Achieve Full Consistency Conclusion Additional Resources NoSQL and Eventual Consistency Non-relational databases, also known as NoSQL databases, have emerged in recent years as an alternative to relational databases.
- Using this method you can detect a change in any of the entities in the entire entity group by reading from one set of metadata, instead of scanning all the individual entities in the group.
- This strategy allows for a gradual migration from an existing data model to a new data model based on entity groups that minimizes the risk of issues caused by eventual consistency.
- For example, suppose you update an existing entity, Player, with a new Score property value of 0, and executed the same query immediately afterwards.

### "Customer-managed encryption keys (CMEK) \_|\_ Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/cmek](https://docs.cloud.google.com/datastore/docs/cmek)
- Source ID: `site-iam-reference`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When you clone a database, you can specify a different encryption type in one of the following ways: Clone to a CMEK database with a newly specified key.
- Backup and restore A backup uses the same encryption mechanism as the database from which you created it.
- You can enable CMEK only on new databases, and you must enable it when you create the database.
- You can also restore or clone data from a non-CMEK database to a CMEK database.

