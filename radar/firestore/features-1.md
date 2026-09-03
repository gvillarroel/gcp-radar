# Firestore features 1

This page prioritizes Firestore features whose current Google documentation gives the clearest operational and IAM guidance.

IAM note: the table below favors roles and permissions that Google names explicitly in the linked documentation. When a feature spans Firestore plus another Google Cloud service such as Cloud Storage, Cloud KMS, or Organization Policy Service, the mapping stays limited to the narrowest roles that the official pages identify as part of the Firestore workflow.

## Role legend

- `DO`: `roles/datastore.owner`
- `DU`: `roles/datastore.user`
- `DV`: `roles/datastore.viewer`
- `DIA`: `roles/datastore.indexAdmin`
- `DIE`: `roles/datastore.importExportAdmin`
- `DCA`: `roles/datastore.cloneAdmin`
- `DBA`: `roles/datastore.backupSchedulesAdmin`
- `DRA`: `roles/datastore.restoreAdmin`
- `DKV`: `roles/datastore.keyVisualizerViewer`
- `OPA`: `roles/orgpolicy.policyAdmin`
- `KMS`: `roles/cloudkms.cryptoKeyEncrypterDecrypter`
- `SA`: Firestore service agent access to the CMEK key

## Features

| Feature | Latest date | Feature status | Recommended IAM roles | Why these roles | Evidence |
| --- | --- | --- | --- | --- | --- |
| Database clone | 2025-10-27 | Step 07 `PASS` | `DCA`, `DV` | Cloning is a specialized database-administration workflow. Google exposes a dedicated clone administrator role, while read access to source database metadata is the narrowest complementary visibility role. | [Manage databases](https://docs.cloud.google.com/firestore/docs/manage-databases), [Firestore roles and permissions](https://docs.cloud.google.com/iam/docs/roles-permissions/firestore) |
| Firestore scheduled backups | 2024-06-28 | Step 07 `WARN` | `DBA`, `DV` | Backup scheduling is separated into its own predefined admin role; viewer access is enough for operators who only need to inspect backup configuration and status. | [Back up and restore data](https://docs.cloud.google.com/firestore/docs/backups), [Firestore roles and permissions](https://docs.cloud.google.com/iam/docs/roles-permissions/firestore) |
| Firestore point-in-time recovery (PITR) | 2023-11-10 | Step 07 `PASS` | `DRA`, `DV` | PITR is a restore-path capability. Google exposes restore administration separately from general database ownership, so the narrowest direct fit is the restore admin role plus read access to inspect recovery state. | [Point-in-time recovery](https://docs.cloud.google.com/firestore/docs/pitr), [Firestore roles and permissions](https://docs.cloud.google.com/iam/docs/roles-permissions/firestore) |
| Document import and export | 2018-08-08 | Step 07 `WARN` | `DIE`, `DV` | Managed export and import operations use a dedicated import-export administrator role; viewer access is sufficient for reviewing operation metadata without modifying databases. | [Export and import data](https://docs.cloud.google.com/firestore/docs/manage-data/export-import), [Firestore roles and permissions](https://docs.cloud.google.com/iam/docs/roles-permissions/firestore) |
| Customer-managed encryption keys (CMEK) | 2024-10-01 | Step 07 `WARN` | `DO`, `KMS`, `SA` | Firestore database administrators configure CMEK on the database, but the key must also grant encrypt/decrypt rights to the Firestore service agent. | [Use customer-managed encryption keys](https://docs.cloud.google.com/firestore/native/docs/cmek), [Firestore roles and permissions](https://docs.cloud.google.com/iam/docs/roles-permissions/firestore) |
| Key Visualizer for Firestore | 2021-12-15 | Step 07 `PASS` | `DKV`, `DV` | Google exposes a viewer role specifically for Key Visualizer heatmaps; read-only database visibility remains useful for correlating the visualized workload with database metadata. | [Key Visualizer](https://docs.cloud.google.com/firestore/docs/key-visualizer), [Firestore roles and permissions](https://docs.cloud.google.com/iam/docs/roles-permissions/firestore) |
| Firestore K-nearest neighbor vector search | 2024-04-03 | Step 07 `WARN` | `DIA`, `DU` | Vector search depends on creating and maintaining vector indexes, which maps directly to index administration, while executing vector queries follows the normal document-query path. | [Create and manage indexes](https://docs.cloud.google.com/firestore/docs/query-data/indexing), [Vector search](https://docs.cloud.google.com/firestore/native/docs/vector-search), [Firestore roles and permissions](https://docs.cloud.google.com/iam/docs/roles-permissions/firestore) |
| Firestore Query Explain | 2024-03-27 | Step 07 `PASS` | `DU`, `DV` | Query Explain is an operational query-analysis feature. Running explains follows the same query path as ordinary data access, while viewer access is the narrowest extra role for metadata-only inspection. | [Query Explain](https://docs.cloud.google.com/firestore/native/docs/enterprise-query-explain), [Firestore roles and permissions](https://docs.cloud.google.com/iam/docs/roles-permissions/firestore) |
| Organization Policy Service custom constraints for Firestore | 2024-12-06 | Step 07 `PASS` | `OPA`, `DV` | Firestore custom constraints are authored through Organization Policy Service rather than Firestore IAM itself, so policy administration is the decisive role and Firestore viewer access covers resource inspection. | [Custom constraints for Firestore](https://docs.cloud.google.com/firestore/docs/custom-constraints), [Organization Policy Service roles and permissions](https://docs.cloud.google.com/iam/docs/roles-permissions/orgpolicy), [Firestore roles and permissions](https://docs.cloud.google.com/iam/docs/roles-permissions/firestore) |
| Firestore non-default database management | 2023-12-15 | Step 07 `PASS` | `DO`, `DV` | Creating and deleting non-default databases is part of the broad Firestore control plane; Google documents owner-level administration for database lifecycle operations. | [Manage databases](https://docs.cloud.google.com/firestore/docs/manage-databases), [Firestore roles and permissions](https://docs.cloud.google.com/iam/docs/roles-permissions/firestore) |

## Source basis for the IAM mappings

- Google documents several Firestore-specific predefined roles directly, including clone administration, backup schedule administration, restore administration, import/export administration, Key Visualizer viewing, and index administration.
- Firestore database lifecycle guides repeatedly route administrative tasks through the Firestore or Datastore owner role when no narrower product-specific role is named.
- Cross-product workflows such as CMEK and custom Organization Policy constraints require roles from Cloud KMS or Organization Policy Service in addition to Firestore access, and those cross-service roles are documented on the linked official pages.
