---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.786Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Data Access audit logs"
feature_slug: "data-access-audit-logs"
latest_feature_date: "2021-11-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/audit-logging"
  - "https://docs.cloud.google.com/datastore/docs/export-import-entities"
  - "https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore"
  - "https://docs.cloud.google.com/datastore/docs/access/iam"
keywords:
  - "access"
  - "audit"
  - "logs"
  - "record"
  - "read"
  - "and"
  - "write"
  - "operations"
---

# Data Access audit logs

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

Data Access audit logs record DATA_READ and DATA_WRITE operations for Datastore; Data Access audit logs record DATA_READ and DATA_WRITE operations for Datastore.

## Extended Definition

Data Access audit logs record DATA_READ and DATA_WRITE operations for Datastore; Data Access audit logs record DATA_READ and DATA_WRITE operations for Datastore.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/audit-logging](https://docs.cloud.google.com/datastore/docs/audit-logging)
- [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- [https://docs.cloud.google.com/datastore/docs/access/iam](https://docs.cloud.google.com/datastore/docs/access/iam)

## Supporting Pages

### Datastore audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/audit-logging](https://docs.cloud.google.com/datastore/docs/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ google.datastore.admin.v1.DatastoreAdmin.GetIndex google.datastore.admin.v1.DatastoreAdmin.ListIndexes google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations ADMIN WRITE google.datastore.admin.v1.DatastoreAdmin.CreateIndex (LRO) google.datastore.admin.v1.DatastoreAdmin.DeleteIndex google.datastore.admin.v1.DatastoreAdmin.ExportEntities (LRO) google.datastore.admin.v1.DatastoreAdmin.ImportEntities (LRO) google.datastore.admin.v1beta1.DatastoreAdmin.ExportEntities (LRO) google.datastore.admin.v1beta1.DatastoreAdmin.ImportEntities (LRO) google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation DATA READ google.datastore.v1.Datastore.BeginTransaction google.datastore.v1.Datastore.Lookup google.datastore.v1.Datastore.Rollback google.datastore.v1.Datastore.RunAggregationQuery google.datastore.v1.Datastore.RunQuery google.datastore.v1beta3.Datastore.BeginTransaction google.datastore.v1beta3.Datastore.Lookup google.datastore.v1beta3.Datastore.Rollback google.datastore.v1beta3.Datastore.RunAggregationQuery google.datastore.v1beta3.Datastore.RunQuery DATA WRITE google.datastore.v1.Datastore.AllocateIds google.datastore.v1.Datastore.Commit google.datastore.v1.Datastore.ReserveIds google.datastore.v1beta3.Datastore.AllocateIds google.datastore.v1beta3.Datastore.Commit google.datastore.v1beta3.Datastore.ReserveIds API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Datastore. google.datastore.admin.v1.DatastoreAdmin The following audit logs are associated with methods belonging to google.datastore.admin.v1.DatastoreAdmin .
- Methods that require an IAM permission with the type property value of DATA READ , DATA WRITE , or ADMIN READ generate Data Access audit logs.
- Google Cloud services generate audit logs that record administrative and access activities within your Google Cloud resources.
- ExportEntities Method : google.datastore.admin.v1beta1.DatastoreAdmin.ExportEntities Audit log type : Admin activity Permissions : datastore.databases.export - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.datastore.admin.v1beta1.DatastoreAdmin.ExportEntities" ImportEntities Method : google.datastore.admin.v1beta1.DatastoreAdmin.ImportEntities Audit log type : Admin activity Permissions : datastore.databases.import - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.datastore.admin.v1beta1.DatastoreAdmin.ImportEntities" google.datastore.v1.Datastore The following audit logs are associated with methods belonging to google.datastore.v1.Datastore .

### Exporting and Importing Entities \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- Source ID: `site-docs-root`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- Export operations For export operations involving a bucket in another project, modify the permissions of the bucket to assign one of the following Identity and Access Management roles to the Datastore mode service agent of the project that contains your Datastore mode database: Storage Admin Owner (basic role) You can also create an IAM custom role with slightly different permissions than the ones contained in the roles listed earlier: storage.buckets.get storage.objects.create storage.objects.delete storage.objects.list Import operations For import operations involving a Cloud Storage bucket in another project, modify the permissions of the bucket to assign one of the following Cloud Storage roles to the Datastore mode service agent of the project that contains your Datastore mode database: Storage Admin Both Storage Object Viewer and Storage Legacy Bucket Reader You can also create an IAM custom role with the following permissions: storage.buckets.get storage.objects.get Starting managed export and import operations This section describes how to start a managed export or import operation.
- Export and import operations contribute to your Google Cloud costs in the following ways: Entity reads and writes performed by export and import operations count towards your Firestore in Datastore mode costs .
- This list includes buckets which were recently used in import and export operations, but do not currently give read and write permissions to the Datastore mode service agent.
- In the navigation menu, click Import/Export . gcloud To list long-running operations, use the gcloud datastore operations list command. gcloud datastore operations list For example, a recently completed export operation shows the following information: { "operations": [ { "name": "projects/ project-id /operations/ASAyMDAwOTEzBxp0bHVhZmVkBxJsYXJ0bmVjc3Utc2Jvai1uaW1kYRQKKhI", "metadata": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesMetadata", "common": { "startTime": "2017-12-05T23:01:39.583780Z", "endTime": "2017-12-05T23:54:58.474750Z", "operationType": "EXPORT ENTITIES" }, "progressEntities": { "workCompleted": "21933027", "workEstimated": "21898182" }, "progressBytes": { "workCompleted": "12421451292", "workEstimated": "9759724245" }, "entityFilter": { "namespaceIds": [ "" ] }, "outputUrlPrefix": "gs:// bucket-name " }, "done": true, "response": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesResponse", "outputUrl": "gs:// bucket-name /2017-05-25T23:54:39 76544/2017-05-25T23:54:39 76544.overall export metadata" } } ] } rest Before using any of the request data, make the following replacements: project-id : your project ID HTTP method and URL: GET https://datastore.googleapis.com/v1/projects/ project-id /operations To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Balancing Strong and Eventual Consistency with Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- Source ID: `site-iam-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- If you are currently using the older DB Client Library, read the DB to NDB Migration Guide Contents NoSQL and Eventual Consistency Eventual Consistency in Datastore Ancestor Query and Entity Group Limitations of Entity Group and Ancestor Query Alternatives to Ancestor Queries Minimizing Time to Achieve Full Consistency Conclusion Additional Resources NoSQL and Eventual Consistency Non-relational databases, also known as NoSQL databases, have emerged in recent years as an alternative to relational databases.
- Datastore API Read of entity value Read of index Global Query Eventual consistency Eventual consistency Keys-only Global Query N/A Eventual consistency Ancestor Query Strong consistency Strong consistency Lookup by key (get()) Strong consistency N/A Table 1: Datastore queries/get calls and possible consistency behaviors Datastore queries without an ancestor are known as global queries and are designed to work with an eventual consistency model.
- To understand uneven distribution of access over the keyspace, consider an example where entities are created with the sequential key names as shown in the following code: p1 = Person(key name='0001') p2 = Person(key name='0002') p3 = Person(key name='0003') ...
- Strong Consistency on Reading Entity Values and Indexes In Datastore, there are only two APIs that provide a strongly consistent view for reading entity values and indexes: (1) the lookup by key method and (2) the ancestor query.

### "Identity and Access Management (IAM) \_|\_ Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/access/iam](https://docs.cloud.google.com/datastore/docs/access/iam)
- Source ID: `site-iam-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Intended for application developers and service accounts. roles/datastore.viewer appengine.applications.get datastore.databases.get datastore.databases.getMetadata datastore.databases.list datastore.entities.get datastore.entities.list datastore.schemas.get datastore.schemas.list datastore.namespaces.get datastore.namespaces.list datastore.statistics.get datastore.statistics.list resourcemanager.projects.get resourcemanager.projects.list datastore.insights.get Read access to all Datastore mode database resources. roles/datastore.importExportAdmin appengine.applications.get datastore.databases.export datastore.databases.getMetadata datastore.databases.import datastore.operations.cancel datastore.operations.get datastore.operations.list resourcemanager.projects.get resourcemanager.projects.list Full access to manage imports and exports. roles/datastore.bulkAdmin resourcemanager.projects.get resourcemanager.projects.list datastore.databases.getMetadata datastore.databases.bulkDelete datastore.operations.cancel datastore.operations.get datastore.operations.list Full access to manage bulk operations. roles/datastore.indexAdmin appengine.applications.get datastore.databases.getMetadata datastore.schemas. datastore.operations.get datastore.operations.list resourcemanager.projects.get resourcemanager.projects.list Full access to manage index definitions. roles/datastore.keyVisualizerViewer datastore.databases.getMetadata datastore.keyVisualizerScans.get datastore.keyVisualizerScans.list resourcemanager.projects.get resourcemanager.projects.list Full access to Key Visualizer scans. roles/datastore.backupSchedulesViewer datastore.backupSchedules.get datastore.backupSchedules.list Read access to backup schedules in a Datastore mode database. roles/datastore.backupSchedulesAdmin datastore.backupSchedules.get datastore.backupSchedules.list datastore.backupSchedules.create datastore.backupSchedules.update datastore.backupSchedules.delete datastore.databases.list datastore.databases.getMetadata Full access to backup schedules in a Datastore mode database. roles/datastore.backupsViewer datastore.backups.get datastore.backups.list Read access to backup information in a Datastore mode location. roles/datastore.backupsAdmin datastore.backups.get datastore.backups.list datastore.backups.delete Full access to backups in a Datastore mode location. roles/datastore.restoreAdmin datastore.backups.get datastore.backups.list datastore.backups.restoreDatabase datastore.databases.list datastore.databases.create datastore.databases.getMetadata datastore.operations.list datastore.operations.get Ability to restore a Datastore mode backup into a new database.
- For Datastore Admin access, grant the appengine.appAdmin role to the principal. roles/datastore.user appengine.applications.get datastore.databases.get datastore.databases.getMetadata datastore.databases.list datastore.entities. datastore.schemas.list datastore.namespaces.get datastore.namespaces.list datastore.statistics.get datastore.statistics.list resourcemanager.projects.get resourcemanager.projects.list Read/write access to data in a Datastore mode database.
- This role also gives the ability to create new databases, not necessarily by cloning. roles/datastore.statisticsViewer resourcemanager.projects.get resourcemanager.projects.list datastore.databases.getMetadata datastore.insights.get datastore.keyVisualizerScans.get datastore.keyVisualizerScans.list datastore.statistics.list datastore.statistics.get Read access to Insights, Stats, and Key Visualizer scans.
- Statistics permission name Description datastore.statistics.get Retrieve statistics entities. datastore.statistics.list List the keys of statistics entities. ( datastore.statistics.get is required to access the statistics entity data.) App Engine permission name Description appengine.applications.get Read-only access to all App Engine application configuration and settings.

