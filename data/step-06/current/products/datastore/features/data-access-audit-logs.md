---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T08:14:41.866Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Data Access audit logs"
feature_slug: "data-access-audit-logs"
latest_feature_date: "2021-11-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/audit-logging"
  - "https://docs.cloud.google.com/datastore/docs/release-notes"
  - "https://docs.cloud.google.com/datastore/docs/export-import-entities"
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
Coverage: LOW

## Step 02 Summary

Data Access audit logs record DATA_READ and DATA_WRITE operations for Datastore; Data Access audit logs record DATA_READ and DATA_WRITE operations for Datastore.

## Extended Definition

Data Access audit logs record DATA_READ and DATA_WRITE operations for Datastore; Data Access audit logs record DATA_READ and DATA_WRITE operations for Datastore.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/audit-logging](https://docs.cloud.google.com/datastore/docs/audit-logging)
- [https://docs.cloud.google.com/datastore/docs/release-notes](https://docs.cloud.google.com/datastore/docs/release-notes)
- [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)

## Supporting Pages

### Datastore audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/audit-logging](https://docs.cloud.google.com/datastore/docs/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Permission type Methods ADMIN READ google.datastore.admin.v1.DatastoreAdmin.GetIndex google.datastore.admin.v1.DatastoreAdmin.ListIndexes google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations ADMIN WRITE google.datastore.admin.v1.DatastoreAdmin.CreateIndex (LRO) google.datastore.admin.v1.DatastoreAdmin.DeleteIndex google.datastore.admin.v1.DatastoreAdmin.ExportEntities (LRO) google.datastore.admin.v1.DatastoreAdmin.ImportEntities (LRO) google.datastore.admin.v1beta1.DatastoreAdmin.ExportEntities (LRO) google.datastore.admin.v1beta1.DatastoreAdmin.ImportEntities (LRO) google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation DATA READ google.datastore.v1.Datastore.BeginTransaction google.datastore.v1.Datastore.Lookup google.datastore.v1.Datastore.Rollback google.datastore.v1.Datastore.RunAggregationQuery google.datastore.v1.Datastore.RunQuery google.datastore.v1beta3.Datastore.BeginTransaction google.datastore.v1beta3.Datastore.Lookup google.datastore.v1beta3.Datastore.Rollback google.datastore.v1beta3.Datastore.RunAggregationQuery google.datastore.v1beta3.Datastore.RunQuery DATA WRITE google.datastore.v1.Datastore.AllocateIds google.datastore.v1.Datastore.Commit google.datastore.v1.Datastore.ReserveIds google.datastore.v1beta3.Datastore.AllocateIds google.datastore.v1beta3.Datastore.Commit google.datastore.v1beta3.Datastore.ReserveIds API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Datastore. google.datastore.admin.v1.DatastoreAdmin The following audit logs are associated with methods belonging to google.datastore.admin.v1.DatastoreAdmin .
- Methods that require an IAM permission with the type property value of DATA READ , DATA WRITE , or ADMIN READ generate Data Access audit logs.
- Google Cloud services generate audit logs that record administrative and access activities within your Google Cloud resources.
- ExportEntities Method : google.datastore.admin.v1beta1.DatastoreAdmin.ExportEntities Audit log type : Admin activity Permissions : datastore.databases.export - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.datastore.admin.v1beta1.DatastoreAdmin.ExportEntities" ImportEntities Method : google.datastore.admin.v1beta1.DatastoreAdmin.ImportEntities Audit log type : Admin activity Permissions : datastore.databases.import - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.datastore.admin.v1beta1.DatastoreAdmin.ImportEntities" google.datastore.v1.Datastore The following audit logs are associated with methods belonging to google.datastore.v1.Datastore .

### Datastore release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/release-notes](https://docs.cloud.google.com/datastore/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- November 04, 2021 Feature DATA READ and DATA WRITE Data Access audit logs are now supported at the General Availability release level .
- The DATA READ and DATA WRITE Data Access audit logs feature has been moved to a future release.
- September 02, 2021 Feature Added DATA READ and DATA WRITE Data Access audit logs.
- Added DATA READ and DATA WRITE Data Access audit logs.

### Exporting and Importing Entities \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Export operations For export operations involving a bucket in another project, modify the permissions of the bucket to assign one of the following Identity and Access Management roles to the Datastore mode service agent of the project that contains your Datastore mode database: Storage Admin Owner (basic role) You can also create an IAM custom role with slightly different permissions than the ones contained in the roles listed earlier: storage.buckets.get storage.objects.create storage.objects.delete storage.objects.list Import operations For import operations involving a Cloud Storage bucket in another project, modify the permissions of the bucket to assign one of the following Cloud Storage roles to the Datastore mode service agent of the project that contains your Datastore mode database: Storage Admin Both Storage Object Viewer and Storage Legacy Bucket Reader You can also create an IAM custom role with the following permissions: storage.buckets.get storage.objects.get Starting managed export and import operations This section describes how to start a managed export or import operation.
- Export and import operations contribute to your Google Cloud costs in the following ways: Entity reads and writes performed by export and import operations count towards your Firestore in Datastore mode costs .
- This list includes buckets which were recently used in import and export operations, but do not currently give read and write permissions to the Datastore mode service agent.
- In the navigation menu, click Import/Export . gcloud To list long-running operations, use the gcloud datastore operations list command. gcloud datastore operations list For example, a recently completed export operation shows the following information: { "operations": [ { "name": "projects/ project-id /operations/ASAyMDAwOTEzBxp0bHVhZmVkBxJsYXJ0bmVjc3Utc2Jvai1uaW1kYRQKKhI", "metadata": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesMetadata", "common": { "startTime": "2017-12-05T23:01:39.583780Z", "endTime": "2017-12-05T23:54:58.474750Z", "operationType": "EXPORT ENTITIES" }, "progressEntities": { "workCompleted": "21933027", "workEstimated": "21898182" }, "progressBytes": { "workCompleted": "12421451292", "workEstimated": "9759724245" }, "entityFilter": { "namespaceIds": [ "" ] }, "outputUrlPrefix": "gs:// bucket-name " }, "done": true, "response": { "@type": "type.googleapis.com/google.datastore.admin.v1.ExportEntitiesResponse", "outputUrl": "gs:// bucket-name /2017-05-25T23:54:39 76544/2017-05-25T23:54:39 76544.overall export metadata" } } ] } rest Before using any of the request data, make the following replacements: project-id : your project ID HTTP method and URL: GET https://datastore.googleapis.com/v1/projects/ project-id /operations To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

