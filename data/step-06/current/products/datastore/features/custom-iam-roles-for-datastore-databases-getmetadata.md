---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.785Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Custom IAM roles for datastore.databases.getMetadata"
feature_slug: "custom-iam-roles-for-datastore-databases-getmetadata"
latest_feature_date: "2022-04-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/access/iam"
  - "https://docs.cloud.google.com/datastore/docs/app-engine-requirement"
  - "https://docs.cloud.google.com/datastore/docs/export-import-entities"
  - "https://docs.cloud.google.com/datastore/docs/cmek"
keywords:
  - "custom"
  - "iam"
  - "roles"
  - "for"
  - "datastore"
  - "databases"
  - "getmetadata"
  - "the"
---

# Custom IAM roles for datastore.databases.getMetadata

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

The datastore.databases.getMetadata permission can be used in custom IAM roles to support operations such as unlinking a database from App Engine.

## Extended Definition

The datastore.databases.getMetadata permission can be used in custom IAM roles to support operations such as unlinking a database from App Engine.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/access/iam](https://docs.cloud.google.com/datastore/docs/access/iam)
- [https://docs.cloud.google.com/datastore/docs/app-engine-requirement](https://docs.cloud.google.com/datastore/docs/app-engine-requirement)
- [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- [https://docs.cloud.google.com/datastore/docs/cmek](https://docs.cloud.google.com/datastore/docs/cmek)

## Supporting Pages

### "Identity and Access Management (IAM) \_|\_ Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/access/iam](https://docs.cloud.google.com/datastore/docs/access/iam)
- Source ID: `site-iam-reference`
- Final score: 279
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For Datastore Admin access, grant the appengine.appAdmin role to the principal. roles/datastore.user appengine.applications.get datastore.databases.get datastore.databases.getMetadata datastore.databases.list datastore.entities. datastore.schemas.list datastore.namespaces.get datastore.namespaces.list datastore.statistics.get datastore.statistics.list resourcemanager.projects.get resourcemanager.projects.list Read/write access to data in a Datastore mode database.
- Intended for application developers and service accounts. roles/datastore.viewer appengine.applications.get datastore.databases.get datastore.databases.getMetadata datastore.databases.list datastore.entities.get datastore.entities.list datastore.schemas.get datastore.schemas.list datastore.namespaces.get datastore.namespaces.list datastore.statistics.get datastore.statistics.list resourcemanager.projects.get resourcemanager.projects.list datastore.insights.get Read access to all Datastore mode database resources. roles/datastore.importExportAdmin appengine.applications.get datastore.databases.export datastore.databases.getMetadata datastore.databases.import datastore.operations.cancel datastore.operations.get datastore.operations.list resourcemanager.projects.get resourcemanager.projects.list Full access to manage imports and exports. roles/datastore.bulkAdmin resourcemanager.projects.get resourcemanager.projects.list datastore.databases.getMetadata datastore.databases.bulkDelete datastore.operations.cancel datastore.operations.get datastore.operations.list Full access to manage bulk operations. roles/datastore.indexAdmin appengine.applications.get datastore.databases.getMetadata datastore.schemas. datastore.operations.get datastore.operations.list resourcemanager.projects.get resourcemanager.projects.list Full access to manage index definitions. roles/datastore.keyVisualizerViewer datastore.databases.getMetadata datastore.keyVisualizerScans.get datastore.keyVisualizerScans.list resourcemanager.projects.get resourcemanager.projects.list Full access to Key Visualizer scans. roles/datastore.backupSchedulesViewer datastore.backupSchedules.get datastore.backupSchedules.list Read access to backup schedules in a Datastore mode database. roles/datastore.backupSchedulesAdmin datastore.backupSchedules.get datastore.backupSchedules.list datastore.backupSchedules.create datastore.backupSchedules.update datastore.backupSchedules.delete datastore.databases.list datastore.databases.getMetadata Full access to backup schedules in a Datastore mode database. roles/datastore.backupsViewer datastore.backups.get datastore.backups.list Read access to backup information in a Datastore mode location. roles/datastore.backupsAdmin datastore.backups.get datastore.backups.list datastore.backups.delete Full access to backups in a Datastore mode location. roles/datastore.restoreAdmin datastore.backups.get datastore.backups.list datastore.backups.restoreDatabase datastore.databases.list datastore.databases.create datastore.databases.getMetadata datastore.operations.list datastore.operations.get Ability to restore a Datastore mode backup into a new database.
- For example, the following condition assigns a principal the datastore.user role up until a specified date: { "role" : "roles/datastore.user" , "members" : [ "user:travis@example.com" ], "condition" : { "title" : "Expires December 1 2023" , "description" : "Expires on December 1, 2023" , "expression" : "request.time < timestamp('2023-12-01T00:00:00.000Z')" } } To learn how to define IAM Conditions for temporary access, see Configure temporary access .
- This role also gives the ability to create new databases, not necessarily by cloning. roles/datastore.statisticsViewer resourcemanager.projects.get resourcemanager.projects.list datastore.databases.getMetadata datastore.insights.get datastore.keyVisualizerScans.get datastore.keyVisualizerScans.list datastore.statistics.list datastore.statistics.get Read access to Insights, Stats, and Key Visualizer scans.

### App Engine Requirement \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/app-engine-requirement](https://docs.cloud.google.com/datastore/docs/app-engine-requirement)
- Source ID: `site-iam-reference`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you previously defined a custom role for Datastore, it might lack the datastore.databases.getMetadata permission.
- When executed from the Google Cloud console or the gcloud CLI, the administrative operations below will require the following IAM permissions: Create database: datastore.databases.create View database metadata: datastore.databases.getMetadata Edit database metadata: datastore.databases.update If you have not enabled the Firestore API, you will see an error in the Datastore pages of the Google Cloud console that includes the following notice: The Firestore API is required to administer your database.
- Ensure continued access by updating your custom roles with datastore.databases.getMetadata or by using a predefined role .
- Go to Datastore Admin Migrating Terraform App Engine Resources If you previously managed Datastore mode databases via the google app engine application Terraform resource, you can use the google firestore database Terraform resource instead.

### Exporting and Importing Entities \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- Export operations For export operations involving a bucket in another project, modify the permissions of the bucket to assign one of the following Identity and Access Management roles to the Datastore mode service agent of the project that contains your Datastore mode database: Storage Admin Owner (basic role) You can also create an IAM custom role with slightly different permissions than the ones contained in the roles listed earlier: storage.buckets.get storage.objects.create storage.objects.delete storage.objects.list Import operations For import operations involving a Cloud Storage bucket in another project, modify the permissions of the bucket to assign one of the following Cloud Storage roles to the Datastore mode service agent of the project that contains your Datastore mode database: Storage Admin Both Storage Object Viewer and Storage Legacy Bucket Reader You can also create an IAM custom role with the following permissions: storage.buckets.get storage.objects.get Starting managed export and import operations This section describes how to start a managed export or import operation.
- Otherwise, the following IAM roles grant the necessary permissions: Datastore Owner Datastore Import Export Admin You can also assign these permissions with a custom role .
- For example, to assign the Storage Admin role to the Firestore service agent, run the following: gsutil iam ch serviceAccount:service- PROJECT NUMBER @gcp-sa-firestore.iam.gserviceaccount.com:roles/storage.admin \ gs:// [ BUCKET NAME ] Replace PROJECT NUMBER with your project number, which is used to name your Firestore service agent.
- Assign an IAM role to your user account that grants the datastore.databases.export permission, if you are exporting data, or the datastore.databases.import permission, if you are importing data.

### "Customer-managed encryption keys (CMEK) \_|\_ Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/cmek](https://docs.cloud.google.com/datastore/docs/cmek)
- Source ID: `site-iam-reference`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about CMEK in general, including when and why to enable it, see the following Cloud KMS documentation: Customer-managed encryption keys (CMEK) Best practices for using CMEKs For instructions on performing CMEK-related tasks with Datastore mode, see Use CMEK .
- If you have specific compliance or regulatory requirements related to the keys that protect your data, you can use customer-managed encryption keys (CMEK) for Datastore mode.
- CMEK and key availability When keys are unavailable or disabled, be aware of the following behaviors that can occur in CMEK-enabled databases: You can change Datastore mode point-in-time recovery (PITR) settings on a CMEK-enabled database even if the key is unavailable because PITR settings are database metadata, which isn't encrypted by CMEK.
- In the event of a key being unavailable, to preserve data beyond the seven days limit, we recommend that you enable backups for your Datastore mode CMEK database with the required retention period.

