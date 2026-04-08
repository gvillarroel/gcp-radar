# Secret Manager

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 59
Unique features: 38

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-02-06 | Parameter version comparison |  | You can compare two parameter versions to inspect payload changes over time. |
| 2026-01-20 | Secret Manager regional availability |  | Secret Manager is available in the Bangkok region (asia-southeast3); Secret Manager is available in the Stockholm region (europe-north2). |
| 2025-10-13 | Secret synchronization to Kubernetes Secrets |  | Secret Manager secrets can be synchronized into Kubernetes Secret objects in GKE clusters. |
| 2025-09-01 | Automatic secret rotation with the Secret Manager add-on for GKE |  | The GKE Secret Manager add-on can automatically and periodically push updated secrets to pods; The GKE Secret Manager add-on can automatically and periodically push updated secrets to pods. |
| 2025-07-09 | Enhanced tagging capabilities for Secret Manager |  | You can add tags when creating secrets, including regional secrets. |
| 2025-07-09 | Soft-enforced rate limits for secret modification operations |  | Secret Manager uses soft-enforced rate limits for selected secret and secret-version modification operations. |
| 2025-07-09 | Tagging for regional secrets |  | Regional secrets support tags during creation and for existing secrets. |
| 2025-03-27 | Parameter Manager |  | Parameter Manager stores, accesses, and manages the lifecycle of workload parameters; Parameter Manager stores, accesses, and manages the lifecycle of workload parameters. |
| 2025-02-28 | Parameter Manager console |  | Parameter Manager provides a console for managing workload parameters. |
| 2024-11-19 | Custom organization policies for Secret Manager resources |  | Custom organization policies can enforce secret rotation, annotations, expirations, and secret-type restrictions for Secret Manager resources. |
| 2024-10-14 | Regional secrets |  | Regional secrets keep Secret Manager data within a chosen geographic location at rest, in use, and in transit; Regional secrets keep Secret Manager data within a chosen geographic location at rest, in use, and in transit. |
| 2024-09-10 | Cloud KMS Autokey support for Secret Manager |  | Secret Manager can use Cloud KMS Autokey to manage customer-managed encryption keys. |
| 2024-08-21 | Secret tags for conditional access |  | Tags can be attached to secrets to conditionally grant or deny access based on tag presence. |
| 2024-08-20 | Secret Manager add-on for Google Kubernetes Engine |  | The Secret Manager add-on lets you mount secrets from Secret Manager as volumes in GKE Pods; The Secret Manager add-on lets you mount secrets from Secret Manager as volumes in GKE Pods. |
| 2024-06-12 | Delayed destruction of secret versions |  | Secret versions can be scheduled for destruction after a configurable delay instead of being destroyed immediately; Secret versions can be scheduled for destruction after a configurable delay instead of being destroyed immediately. |
| 2023-12-18 | Key Access Justifications |  | Key Access Justifications adds a reason field to Cloud External Key Manager requests so access can be approved or denied based on justification; Key Access Justifications adds a reason field to Cloud External Key Manager requests so access can be approved or denied based on justification. |
| 2023-08-22 | Secret Manager regional availability in europe-west10 |  | Secret Manager became available in the europe-west10 region. |
| 2023-03-30 | Secret Manager regional availability in me-central1 |  | Secret Manager became available in the me-central1 region. |
| 2023-03-23 | Secret Manager regional availability in europe-west12 |  | Secret Manager became available in the europe-west12 region. |
| 2023-03-13 | Secret Manager secret version aliases |  | Secret Manager added support for aliases to access a secret version by resource path name; Secret Manager added support for accessing secret versions using aliases. |
| 2023-03-08 | Secret Manager annotations |  | Secret Manager added support for annotations as custom metadata on secrets; Secret Manager added support for annotations as custom metadata on secrets. |
| 2022-09-12 | Secret Manager regional availability in me-west1 |  | Cloud Secret Manager became available in the me-west1 region. |
| 2022-02-03 | Secret Manager secret version data checksums |  | Secret Manager added support for data checksums when adding or accessing a secret version. |
| 2021-12-14 | Access Transparency for Secret Manager |  | Access Transparency entered Preview for Secret Manager. |
| 2021-08-27 | Secret Manager UI audit and platform logs |  | Cloud Audit Logs and Platform Logs became available directly in the Secret Manager UI. |
| 2021-08-24 | Analyze Policy API support for Secret Manager resources |  | The Analyze Policy API added support for Secret Manager secret and secret version resource types. |
| 2021-07-20 | Secret Manager ETags |  | Secret Manager added ETags for optimistic concurrency control; Secret Manager added ETags for optimistic concurrency control in Preview. |
| 2021-07-01 | Secret Manager free tier |  | Secret Manager added a limited number of free resources under the Google Cloud Free program. |
| 2021-05-12 | Secret Manager integration with Cloud Run |  | Cloud Run added UI, command line, and YAML support for using Secret Manager secrets in Preview. |
| 2021-03-31 | Secret Manager event notifications |  | Secret Manager Event Notifications lets secrets send Pub/Sub messages when a secret or secret version changes; Secret Manager can publish secret and secret version changes to Pub/Sub. |
| 2021-03-30 | Secret Manager expiration |  | Secret Manager Expiration supports expiring secrets; Secret Manager supports configuring secrets to expire. |
| 2021-03-30 | Secret Manager Rotation |  | Secret Manager Rotation sends Pub/Sub messages based on a configured rotation frequency and time. |
| 2021-03-24 | Secret Manager locations |  | Secret Manager is available in the europe-central2 region; Secret Manager is available in all regions. |
| 2021-03-09 | Secret Manager customer-managed encryption keys |  | Secret Manager supports customer-managed encryption keys; Secret Manager supports customer-managed encryption keys. |
| 2020-10-29 | Secret Manager Cloud Asset Inventory integration |  | Secret Manager metadata can be queried in Cloud Asset Inventory. |
| 2020-07-20 | Secret Manager Secret Version Adder IAM role |  | This IAM role allows adding new secret versions. |
| 2020-07-20 | Secret Manager Secret Version Manager IAM role |  | This IAM role allows managing secret versions. |
| 2020-03-11 | Secret Manager |  | Secret Manager became generally available; Secret Manager launched in beta as a secure service for storing credentials. |

Source file slug: `secret-manager.md`

