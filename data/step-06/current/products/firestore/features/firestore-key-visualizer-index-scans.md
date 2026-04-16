---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.877Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Firestore Key Visualizer index scans"
feature_slug: "firestore-key-visualizer-index-scans"
latest_feature_date: "2023-12-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/docs/key-visualizer"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam"
  - "https://docs.cloud.google.com/firestore/docs/keyvis-patterns-index"
keywords:
  - "firestore"
  - "key"
  - "visualizer"
  - "index"
  - "scans"
  - "supports"
---

# Firestore Key Visualizer index scans

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

Key Visualizer supports index scans for Firestore.

## Extended Definition

Key Visualizer supports index scans for Firestore.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/docs/key-visualizer](https://docs.cloud.google.com/firestore/docs/key-visualizer)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam)
- [https://docs.cloud.google.com/firestore/docs/keyvis-patterns-index](https://docs.cloud.google.com/firestore/docs/keyvis-patterns-index)

## Supporting Pages

### "Overview of Key Visualizer \_|\_ Firestore in Native mode \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/firestore/docs/key-visualizer](https://docs.cloud.google.com/firestore/docs/key-visualizer)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following metric is available for index keys in Key Visualizer scans: Metrics Description Index Write Ops/s Average number of index writes per second.
- These can be single-field indexes or composite indexes.For example, the following indexes are some examples of index keys as seen on the Key Visualizer tool: COLLECTION: projects/PROJECT ID/databases/default/documents/Users PROPERTIES: (timestamp: ASC) VALUES: (1686162996397845) DOCUMENT: projects/PROJECT ID/databases/default/documents/Users/QstCrsaGuq9ybj81dNse COLLECTION: projects/PROJECT ID/databases/default/documents/Users PROPERTIES: (Timestamp: ASC, Name: ASC,Country: ARRAY) VALUES: (16500000000000001L, 'Alice', 'USA') DOCUMENT: (projects/PROJECT ID/databases/default/documents/Users/5000000000000001) Scan eligibility Each Key Visualizer scan covers a two hour period.
- For example, the following document names are also document keys: projects/PROJECT ID/databases/(default)/documents/cities/SF projects/PROJECT ID/databases/(default)/documents/companies/my company/employees/007RGlCzsx59bakkuTGz Key Term: Index key In Key Visualizer, the term Index Key refers to a index's unique identifier.
- Metrics The following metrics are available for document keys in Key Visualizer scans: Metrics Description Activity metrics Ops/s Average number of document operations per second.

### "Identity and Access Management (IAM) \_|\_ Firestore with MongoDB compatibility\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam)
- Source ID: `site-iam-reference`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This role also gives the ability to create new databases, not necessarily by cloning. roles/datastore.statisticsViewer resourcemanager.projects.get resourcemanager.projects.list datastore.databases.getMetadata datastore.insights.get datastore.keyVisualizerScans.get datastore.keyVisualizerScans.list datastore.statistics.list datastore.statistics.get Read access to Insights, Stats, and Key Visualizer scans. roles/datastore.userCredsViewer datastore.userCreds.get datastore.userCreds.list Read access to user credentials in a Firestore database. roles/datastore.userCredsAdmin datastore.userCreds.get datastore.userCreds.list datastore.userCreds.create datastore.userCreds.update datastore.userCreds.delete datastore.databases.list datastore.databases.getMetadata Full access to user credentials in a Firestore database.
- Intended for application developers and service accounts. roles/datastore.viewer appengine.applications.get datastore.databases.get datastore.databases.getMetadata datastore.databases.list datastore.entities.get datastore.entities.list datastore.schemas.get datastore.schemas.list datastore.namespaces.get datastore.namespaces.list datastore.statistics.get datastore.statistics.list resourcemanager.projects.get resourcemanager.projects.list Read access to all Firestore resources. roles/datastore.indexAdmin appengine.applications.get datastore.databases.getMetadata datastore.schemas. datastore.operations.list datastore.operations.get resourcemanager.projects.get resourcemanager.projects.list Full access to manage index definitions. roles/datastore.backupSchedulesViewer datastore.backupSchedules.get datastore.backupSchedules.list Read access to backup schedules in a Firestore database. roles/datastore.backupSchedulesAdmin datastore.backupSchedules.get datastore.backupSchedules.list datastore.backupSchedules.create datastore.backupSchedules.update datastore.backupSchedules.delete datastore.databases.list datastore.databases.getMetadata Full access to backup schedules in a Firestore database. roles/datastore.backupsViewer datastore.backups.get datastore.backups.list Read access to backup information in a Firestore location. roles/datastore.backupsAdmin datastore.backups.get datastore.backups.list datastore.backups.delete Full access to backups in a Firestore location. roles/datastore.restoreAdmin datastore.backups.get datastore.backups.list datastore.backups.restoreDatabase datastore.databases.list datastore.databases.create datastore.databases.getMetadata datastore.operations.list datastore.operations.get Ability to restore a Firestore backup into a new database.
- View tags datastore.databases.listTagBindings datastore.databases.listEffectiveTags Manage tags on resources The following permission is required for the database resource you're attaching the tag value. datastore.databases.createTagBinding Permissions The following table lists the permissions that Firestore supports.
- Key Visualizer permission name Description datastore.keyVisualizerScans.get Get details about Key Visualizer scans. datastore.keyVisualizerScans.list List available Key Visualizer scans.

### "Heatmap patterns for index keys \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/docs/keyvis-patterns-index](https://docs.cloud.google.com/firestore/docs/keyvis-patterns-index)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Understand the index key structure Before you understand the structure of index keys that you see in Key Visualizer tool, learn about indexes in Firestore.
- COLLECTION: projects/ PROJECT ID /databases/(default)/documents/Users PROPERTIES: (Timestamp: DESC) VALUES: (16500000000000001) DOCUMENT: projects/ PROJECT ID /databases/(default)/documents/Users/5000000000000001 Collection scope single-field Indexes for array fields For each array field in a document, Firestore creates and maintains a collection scope array-contains index.
- Some examples of common hotspots on index are as follows: Note: In the following heatmap example, for Firestore, the x-axis of the heatmap represents time, and the y-axis represents index keys.
- To identify the hotspotting issue, use the Key Visualizer tool and understand the index key structure to determine which index causes the issue and exempt those indexes with best practices .

