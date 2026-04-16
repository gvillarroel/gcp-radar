---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.892Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Key Visualizer for Firestore"
feature_slug: "key-visualizer-for-firestore"
latest_feature_date: "2021-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/docs/key-visualizer"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam"
  - "https://docs.cloud.google.com/firestore/docs/audit-logging"
keywords:
  - "key"
  - "visualizer"
  - "firestore"
  - "provides"
  - "workload"
  - "access"
  - "visualization"
---

# Key Visualizer for Firestore

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

Key Visualizer provides workload and key access visualization for Firestore.

## Extended Definition

Key Visualizer provides workload and key access visualization for Firestore.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/docs/key-visualizer](https://docs.cloud.google.com/firestore/docs/key-visualizer)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam)
- [https://docs.cloud.google.com/firestore/docs/audit-logging](https://docs.cloud.google.com/firestore/docs/audit-logging)

## Supporting Pages

### "Overview of Key Visualizer \_|\_ Firestore in Native mode \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/firestore/docs/key-visualizer](https://docs.cloud.google.com/firestore/docs/key-visualizer)
- Source ID: `site-docs-reference`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Overview of Key Visualizer This page provides an overview of the Key Visualizer diagnostic tool for Firestore.
- Limits Although Key Visualizer shows a variety of metrics, it doesn't display every single metric that can affect the performance of Firestore.
- Each Key Visualizer scan for Firestore covers two hours of activity divided into 10-second segments.
- Data duration Data collected by Key Visualizer for Firestore is deleted after 14 days.

### "Identity and Access Management (IAM) \_|\_ Firestore with MongoDB compatibility\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam)
- Source ID: `site-iam-reference`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This role also gives the ability to create new databases, not necessarily by cloning. roles/datastore.statisticsViewer resourcemanager.projects.get resourcemanager.projects.list datastore.databases.getMetadata datastore.insights.get datastore.keyVisualizerScans.get datastore.keyVisualizerScans.list datastore.statistics.list datastore.statistics.get Read access to Insights, Stats, and Key Visualizer scans. roles/datastore.userCredsViewer datastore.userCreds.get datastore.userCreds.list Read access to user credentials in a Firestore database. roles/datastore.userCredsAdmin datastore.userCreds.get datastore.userCreds.list datastore.userCreds.create datastore.userCreds.update datastore.userCreds.delete datastore.databases.list datastore.databases.getMetadata Full access to user credentials in a Firestore database.
- Intended for application developers and service accounts. roles/datastore.viewer appengine.applications.get datastore.databases.get datastore.databases.getMetadata datastore.databases.list datastore.entities.get datastore.entities.list datastore.schemas.get datastore.schemas.list datastore.namespaces.get datastore.namespaces.list datastore.statistics.get datastore.statistics.list resourcemanager.projects.get resourcemanager.projects.list Read access to all Firestore resources. roles/datastore.indexAdmin appengine.applications.get datastore.databases.getMetadata datastore.schemas. datastore.operations.list datastore.operations.get resourcemanager.projects.get resourcemanager.projects.list Full access to manage index definitions. roles/datastore.backupSchedulesViewer datastore.backupSchedules.get datastore.backupSchedules.list Read access to backup schedules in a Firestore database. roles/datastore.backupSchedulesAdmin datastore.backupSchedules.get datastore.backupSchedules.list datastore.backupSchedules.create datastore.backupSchedules.update datastore.backupSchedules.delete datastore.databases.list datastore.databases.getMetadata Full access to backup schedules in a Firestore database. roles/datastore.backupsViewer datastore.backups.get datastore.backups.list Read access to backup information in a Firestore location. roles/datastore.backupsAdmin datastore.backups.get datastore.backups.list datastore.backups.delete Full access to backups in a Firestore location. roles/datastore.restoreAdmin datastore.backups.get datastore.backups.list datastore.backups.restoreDatabase datastore.databases.list datastore.databases.create datastore.databases.getMetadata datastore.operations.list datastore.operations.get Ability to restore a Firestore backup into a new database.
- Role Permissions Description roles/datastore.owner appengine.applications.get datastore. resourcemanager.projects.get resourcemanager.projects.list Full access to Firestore. roles/datastore.user appengine.applications.get datastore.databases.get datastore.databases.getMetadata datastore.databases.list datastore.entities. datastore.schemas.list datastore.namespaces.get datastore.namespaces.list datastore.statistics.get datastore.statistics.list resourcemanager.projects.get resourcemanager.projects.list Read/write access to data in a Firestore database.
- If your clone request contains a tags value, then the following additional permissions are required: datastore.databases.createTagBinding If you would like to verify whether the tag bindings are set successfully by listing the bindings, then the following additional permissions are required: datastore.databases.listTagBindings datastore.databases.listEffectiveTags projects.locations get datastore.locations.get list datastore.locations.list projects.databases.backupschedules get datastore.backupSchedules.get list datastore.backupSchedules.list create datastore.backupSchedules.create update datastore.backupSchedules.update delete datastore.backupSchedules.delete projects.locations.backups get datastore.backups.get list datastore.backups.list delete datastore.backups.delete projects.databases.usercreds get datastore.userCreds.get list datastore.userCreds.list create datastore.userCreds.create enable datastore.userCreds.update disable datastore.userCreds.update resetPassword datastore.userCreds.update delete datastore.userCreds.delete Predefined roles With IAM, every API method in Firestore requires that the account making the API request has the appropriate permissions to use the resource.

### "Firestore audit logging information \_|\_ Firestore in Native mode \_|\_\

- URL: [https://docs.cloud.google.com/firestore/docs/audit-logging](https://docs.cloud.google.com/firestore/docs/audit-logging)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These are Data Access audit logs and have the service name firestorekeyvisualizer.googleapis.com .
- Permission type Methods ADMIN READ google.cloud.location.Locations.GetLocation google.cloud.location.Locations.ListLocations google.firestore.admin.v1.FirestoreAdmin.GetBackup google.firestore.admin.v1.FirestoreAdmin.GetBackupSchedule google.firestore.admin.v1.FirestoreAdmin.GetDatabase google.firestore.admin.v1.FirestoreAdmin.GetField google.firestore.admin.v1.FirestoreAdmin.GetIndex google.firestore.admin.v1.FirestoreAdmin.GetUserCreds google.firestore.admin.v1.FirestoreAdmin.ListBackupSchedules google.firestore.admin.v1.FirestoreAdmin.ListBackups google.firestore.admin.v1.FirestoreAdmin.ListDatabases google.firestore.admin.v1.FirestoreAdmin.ListFields google.firestore.admin.v1.FirestoreAdmin.ListIndexes google.firestore.admin.v1.FirestoreAdmin.ListUserCreds google.firestore.admin.v1beta1.FirestoreAdmin.GetIndex google.firestore.admin.v1beta1.FirestoreAdmin.ListIndexes google.firestore.admin.v1beta2.FirestoreAdmin.GetField google.firestore.admin.v1beta2.FirestoreAdmin.GetIndex google.firestore.admin.v1beta2.FirestoreAdmin.ListFields google.firestore.admin.v1beta2.FirestoreAdmin.ListIndexes google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations ADMIN WRITE google.firestore.admin.v1.FirestoreAdmin.BulkDeleteDocuments (LRO) google.firestore.admin.v1.FirestoreAdmin.CloneDatabase google.firestore.admin.v1.FirestoreAdmin.CreateBackupSchedule google.firestore.admin.v1.FirestoreAdmin.CreateDatabase google.firestore.admin.v1.FirestoreAdmin.CreateIndex (LRO) google.firestore.admin.v1.FirestoreAdmin.CreateUserCreds google.firestore.admin.v1.FirestoreAdmin.DeleteBackup google.firestore.admin.v1.FirestoreAdmin.DeleteBackupSchedule google.firestore.admin.v1.FirestoreAdmin.DeleteDatabase google.firestore.admin.v1.FirestoreAdmin.DeleteIndex google.firestore.admin.v1.FirestoreAdmin.DeleteUserCreds google.firestore.admin.v1.FirestoreAdmin.DisableUserCreds google.firestore.admin.v1.FirestoreAdmin.EnableUserCreds google.firestore.admin.v1.FirestoreAdmin.ExportDocuments (LRO) google.firestore.admin.v1.FirestoreAdmin.ImportDocuments (LRO) google.firestore.admin.v1.FirestoreAdmin.ResetUserPassword google.firestore.admin.v1.FirestoreAdmin.RestoreDatabase google.firestore.admin.v1.FirestoreAdmin.UpdateBackupSchedule google.firestore.admin.v1.FirestoreAdmin.UpdateDatabase google.firestore.admin.v1.FirestoreAdmin.UpdateField (LRO) google.firestore.admin.v1beta1.FirestoreAdmin.CreateIndex (LRO) google.firestore.admin.v1beta1.FirestoreAdmin.DeleteIndex google.firestore.admin.v1beta1.FirestoreAdmin.ExportDocuments (LRO) google.firestore.admin.v1beta1.FirestoreAdmin.ImportDocuments (LRO) google.firestore.admin.v1beta2.FirestoreAdmin.CreateIndex (LRO) google.firestore.admin.v1beta2.FirestoreAdmin.DeleteIndex google.firestore.admin.v1beta2.FirestoreAdmin.ExportDocuments (LRO) google.firestore.admin.v1beta2.FirestoreAdmin.ImportDocuments (LRO) google.firestore.admin.v1beta2.FirestoreAdmin.UpdateField (LRO) google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation DATA READ google.firestore.v1.Firestore.BatchGetDocuments google.firestore.v1.Firestore.BeginTransaction google.firestore.v1.Firestore.ExecutePipeline google.firestore.v1.Firestore.GetDocument google.firestore.v1.Firestore.ListCollectionIds google.firestore.v1.Firestore.ListDocuments google.firestore.v1.Firestore.Listen google.firestore.v1.Firestore.PartitionQuery google.firestore.v1.Firestore.Rollback google.firestore.v1.Firestore.RunAggregationQuery google.firestore.v1.Firestore.RunQuery google.firestore.v1beta1.Firestore.BatchGetDocuments google.firestore.v1beta1.Firestore.BatchWrite google.firestore.v1beta1.Firestore.BeginTransaction google.firestore.v1beta1.Firestore.GetDocument google.firestore.v1beta1.Firestore.ListCollectionIds google.firestore.v1beta1.Firestore.ListDocuments google.firestore.v1beta1.Firestore.Listen google.firestore.v1beta1.Firestore.PartitionQuery google.firestore.v1beta1.Firestore.Rollback google.firestore.v1beta1.Firestore.RunAggregationQuery google.firestore.v1beta1.Firestore.RunQuery DATA WRITE google.firestore.v1.Firestore.BatchWrite google.firestore.v1.Firestore.Commit google.firestore.v1.Firestore.CreateDocument google.firestore.v1.Firestore.DeleteDocument google.firestore.v1.Firestore.UpdateDocument google.firestore.v1.Firestore.Write google.firestore.v1beta1.Firestore.Commit google.firestore.v1beta1.Firestore.CreateDocument google.firestore.v1beta1.Firestore.DeleteDocument google.firestore.v1beta1.Firestore.UpdateDocument google.firestore.v1beta1.Firestore.Write API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Firestore. google.cloud.location.Locations The following audit logs are associated with methods belonging to google.cloud.location.Locations .
- Filter for this method : protoPayload.methodName="google.firestore.admin.v1.FirestoreAdmin.GetUserCreds" ImportDocuments Method : google.firestore.admin.v1.FirestoreAdmin.ImportDocuments Audit log type : Admin activity Permissions : datastore.databases.import - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.firestore.admin.v1.FirestoreAdmin.ImportDocuments" ListBackupSchedules Method : google.firestore.admin.v1.FirestoreAdmin.ListBackupSchedules Audit log type : Data access Permissions : datastore.backupSchedules.list - ADMIN READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.firestore.admin.v1beta1.FirestoreAdmin.GetIndex" ImportDocuments Method : google.firestore.admin.v1beta1.FirestoreAdmin.ImportDocuments Audit log type : Admin activity Permissions : datastore.databases.import - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.firestore.admin.v1beta1.FirestoreAdmin.ImportDocuments" ListIndexes Method : google.firestore.admin.v1beta1.FirestoreAdmin.ListIndexes Audit log type : Data access Permissions : datastore.indexes.list - ADMIN READ Method is a long-running or streaming operation : No.

