---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.795Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Datastore Admin backup"
feature_slug: "datastore-admin-backup"
latest_feature_date: "2018-02-28"
deprecation_date: "2019-02-28"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console"
  - "https://docs.cloud.google.com/datastore/docs/export-import-entities"
  - "https://docs.cloud.google.com/datastore/docs/backups"
  - "https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore"
keywords:
  - "datastore"
  - "admin"
  - "backup"
  - "is"
  - "the"
  - "legacy"
  - "capability"
  - "being"
---

# Datastore Admin backup

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

Datastore Admin backup is the legacy backup capability being replaced by managed export and import; deprecated on 2019-02-28.

## Extended Definition

Datastore Admin backup is the legacy backup capability being replaced by managed export and import; deprecated on 2019-02-28.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console](https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console)
- [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- [https://docs.cloud.google.com/datastore/docs/backups](https://docs.cloud.google.com/datastore/docs/backups)
- [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)

## Supporting Pages

### Datastore Admin \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console](https://docs.cloud.google.com/datastore/docs/console/datastore-admin-console)
- Source ID: `site-docs-root`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To stop these running backups: Open Datastore Admin In the Pending Backups section, select the backup in the list and click Abort .
- Aborting a backup If backup jobs are currently running, they appear in a Pending Backups list in the Cloud Datastore Admin screen.
- To display this backup information: Open Datastore Admin Select one or more backups in the Backups or Pending Backups list.
- Open Datastore Admin In the list of available backups, select the backup that you want to restore from.

### Exporting and Importing Entities \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- Source ID: `site-docs-root`
- Final score: 227
- Re-rank relevance: N/A

Evidence snippets:
- Export operations For export operations involving a bucket in another project, modify the permissions of the bucket to assign one of the following Identity and Access Management roles to the Datastore mode service agent of the project that contains your Datastore mode database: Storage Admin Owner (basic role) You can also create an IAM custom role with slightly different permissions than the ones contained in the roles listed earlier: storage.buckets.get storage.objects.create storage.objects.delete storage.objects.list Import operations For import operations involving a Cloud Storage bucket in another project, modify the permissions of the bucket to assign one of the following Cloud Storage roles to the Datastore mode service agent of the project that contains your Datastore mode database: Storage Admin Both Storage Object Viewer and Storage Legacy Bucket Reader You can also create an IAM custom role with the following permissions: storage.buckets.get storage.objects.get Starting managed export and import operations This section describes how to start a managed export or import operation.
- The managed import service is backward compatible with Datastore Admin backup files.
- In the navigation menu, click Import/Export . gcloud To list long-running operations, use the gcloud datastore operations list command. gcloud datastore operations list For example, a recently completed export operation shows the following information: { "operations": [ { "name": "projects/ project-id /operations/ASAyMDAwOTEzBxp0bHVhZmVkBxJsYXJ0bmVjc3Utc2Jvai1uaW1kYRQKKhI", "metadata": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesMetadata", "common": { "startTime": "2017-12-05T23:01:39.583780Z", "endTime": "2017-12-05T23:54:58.474750Z", "operationType": "EXPORT ENTITIES" }, "progressEntities": { "workCompleted": "21933027", "workEstimated": "21898182" }, "progressBytes": { "workCompleted": "12421451292", "workEstimated": "9759724245" }, "entityFilter": { "namespaceIds": [ "" ] }, "outputUrlPrefix": "gs:// bucket-name " }, "done": true, "response": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesResponse", "outputUrl": "gs:// bucket-name /2017-05-25T23:54:39 76544/2017-05-25T23:54:39 76544.overall export metadata" } } ] } rest Before using any of the request data, make the following replacements: project-id : your project ID HTTP method and URL: GET https://datastore.googleapis.com/v1/projects/ project-id /operations To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://datastore.googleapis.com/v1/projects/ project-id /operations/ operation-name " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ project-id /operations/ASA3ODAwMzQxNjIyChp0bHVhZmVkBxJsYXJ0bmVjc3Utc2Jvai1uaW1kYRQKLRI", "metadata": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesMetadata", "common": { "startTime": "2019-10-08T20:07:28.105236Z", "endTime": "2019-10-08T20:07:36.310653Z", "operationType": "EXPORT ENTITIES", "state": "SUCCESSFUL" }, "progressEntities": { "workCompleted": "21", "workEstimated": "21" }, "progressBytes": { "workCompleted": "2272", "workEstimated": "2065" }, "entityFilter": {}, "outputUrlPrefix": "gs:// bucket-name /2019-10-08T20:07:28 28481" }, "done": true, "response": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesResponse", "outputUrl": "gs:// bucket-name /2019-10-08T20:07:28 28481/2019-10-08T20:07:28 28481.overall export metadata" } } Estimating the completion time As your operation runs, see the value of the state field for the overall status of the operation.

### Back up and restore data \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/backups](https://docs.cloud.google.com/datastore/docs/backups)
- Source ID: `site-iam-reference`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to manage backups and backup schedules, ask your administrator to grant you one or more of the following Identity and Access Management roles: roles/datastore.owner : Full access to the Firestore database roles/datastore.backupsAdmin : Read and write access to backups roles/datastore.backupsViewer : Read access to backups roles/datastore.backupSchedulesAdmin : Read and write access to backup schedules roles/datastore.backupSchedulesViewer : Read access to backup schedules roles/datastore.restoreAdmin : Permissions to initiate restore operations Create and manage backup schedules The following examples demonstrate how to set up a backup schedule.
- The output will include metadata , name , and response components: metadata: '@type': type.googleapis.com/google.firestore.admin.v1.RestoreDatabaseMetadata backup: projects/ PROJECT ID /locations/ LOCATION /backups/ BACKUP ID database: projects/ PROJECT ID /databases/ DATABASE ID operationState: PROCESSING progressPercentage: completedWork: '20' estimatedWork: '100' startTime: '2023-12-06T14:20:17.398325Z' name: projects/ PROJECT ID /databases/ DATABASE ID /operations/operation uuid response: '@type': type.googleapis.com/google.firestore.admin.v1.Database createTime: '2023-12-06T14:20:17.398325Z' name: projects/ PROJECT ID /databases/ DATABASE ID ...
- To list only the backups from a specific location, use the --location flag: gcloud firestore backups list \ --location= LOCATION \ --format="table(name, database, state)" Replace LOCATION with the name of a Datastore mode location.
- This page describes how to use the Datastore mode scheduled backups feature.

### "Balancing Strong and Eventual Consistency with Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- Source ID: `site-iam-reference`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- Additional Resources The following resources provide more information about the topics discussed in this document: Google App Engine: Storing Data Datastore Overview Google Cloud Platform Blog Cloud SQL Using Python App Engine with Cloud SQL Bigtable: A Distributed Storage System for Structured Data App Engine 1.5.2 SDK Released Megastore: Providing Scalable, Highly Available Storage for Interactive Services [1] An entity group can even be formed by specifying only one key of the root or parent entity, without storing the actual entities for the root or parent, because the entity group functions are all implemented based on relationships between keys. [2] The supported limit is one update per second per entity group outside transactions, or one transaction per second per entity group.
- If you are currently using the older DB Client Library, read the DB to NDB Migration Guide Contents NoSQL and Eventual Consistency Eventual Consistency in Datastore Ancestor Query and Entity Group Limitations of Entity Group and Ancestor Query Alternatives to Ancestor Queries Minimizing Time to Achieve Full Consistency Conclusion Additional Resources NoSQL and Eventual Consistency Non-relational databases, also known as NoSQL databases, have emerged in recent years as an alternative to relational databases.
- Providing a Consistent User Experience and Leveraging the Eventual Consistency Model to Scale to Large Datasets This document discusses achieving strong consistency for a positive user experience, while embracing Datastore’s eventual consistency model for handling large quantities of data and users.
- Strong Consistency on Reading Entity Values and Indexes In Datastore, there are only two APIs that provide a strongly consistent view for reading entity values and indexes: (1) the lookup by key method and (2) the ancestor query.

