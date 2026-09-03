# Firestore

- Product slug: `firestore`
- Product status: `PASS` in Step 07
- Release-note features discovered: `89`
- Corpus-backed feature definitions: `89`
- Step 07 warnings: `30`
- Step 07 failures: `0`

## Product summary

Firestore is Google Cloud's managed document database service. The current corpus covers regional and multi-regional deployments, multi-database administration, backup and restore workflows, point-in-time recovery, customer-managed encryption keys, query observability, and indexing features such as vector search.

## Evidence-backed capability summary

- Database administration: create, clone, list, and delete Firestore databases, including non-default databases.
- Resilience and recovery: scheduled backups, point-in-time recovery, backup restore, and disaster-recovery workflows.
- Security and governance: CMEK support, VPC Service Controls support, audit logging, and custom Organization Policy constraints for Firestore resources.
- Query and index tooling: vector indexes, Query Explain, Query Insights, Key Visualizer, and collection-level index controls.
- Data operations: managed import/export, monitoring dashboards, and regional API endpoint controls.

## IAM model

Firestore exposes a more granular IAM model than Batch. The first feature page in [features-1.md](features-1.md) therefore stays close to the predefined Firestore and Datastore role families that Google documents directly.

Core roles repeatedly referenced by the official docs:

- `roles/datastore.owner`: broad Firestore database administration, including database creation and deletion.
- `roles/datastore.user`: read and write document data and run operational queries.
- `roles/datastore.viewer`: inspect database metadata without write access.
- `roles/datastore.indexAdmin`: create, update, and delete composite, single-field, and vector indexes.
- `roles/datastore.importExportAdmin`: run managed Firestore import and export operations.
- `roles/datastore.cloneAdmin`: create database clones.
- `roles/datastore.backupSchedulesAdmin`: create and manage backup schedules.
- `roles/datastore.restoreAdmin`: restore a database from backups or point-in-time recovery data.
- `roles/datastore.keyVisualizerViewer`: view Key Visualizer heatmaps.
- `roles/orgpolicy.policyAdmin`: manage custom Organization Policy constraints that target Firestore resources.

## Report scope

This product card focuses on Firestore features where the current Google documentation provides the clearest IAM hooks: database lifecycle administration, backup and restore, CMEK, Key Visualizer, import/export, index management for vector search, and Firestore-specific Organization Policy constraints.

## Primary sources

- [Firestore roles and permissions](https://docs.cloud.google.com/iam/docs/roles-permissions/firestore)
- [Manage databases](https://docs.cloud.google.com/firestore/docs/manage-databases)
- [Back up and restore data](https://docs.cloud.google.com/firestore/docs/backups)
- [Use customer-managed encryption keys](https://docs.cloud.google.com/firestore/native/docs/cmek)
- [Key Visualizer](https://docs.cloud.google.com/firestore/docs/key-visualizer)
- [Custom constraints for Firestore](https://docs.cloud.google.com/firestore/docs/custom-constraints)
