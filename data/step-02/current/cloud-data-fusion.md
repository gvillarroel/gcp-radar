# Cloud Data Fusion

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 17
Unique features: 19

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-02-09 | InstanceV3 monitored resource for Cloud Data Fusion |  | The default monitored resource for instance-level metrics and system service logs was introduced as datafusion.googleapis.com/InstanceV3, replacing InstanceV2 labels by default. |
| 2026-01-29 | SAP Table Reader plugin snapshot mode cleanup handling |  | SAP Table Reader plugin version 0.11.5 fixes the Snapshot mode cleanup process to avoid an unnecessary Job abort failed log error. |
| 2025-08-27 | Bitbucket Server Bearer authentication for source control |  | Cloud Data Fusion added support for HTTP access token (Bearer) authentication when connecting Cloud Data Fusion to Bitbucket Server for source control. |
| 2025-08-27 | Dataproc 2.0 support in Cloud Data Fusion | 2025-08-27 | Support for Dataproc 2.0 in Cloud Data Fusion was removed starting with version 6.11.1; deprecated on 2025-08-27. |
| 2025-08-27 | Namespace application count API |  | A new API was introduced to retrieve application count per namespace in Cloud Data Fusion. |
| 2025-07-25 | Cloud Data Fusion instance creation tags |  | Cloud Data Fusion now allows attaching tags to instances during instance creation for immediate metadata, organization, and policy automation. |
| 2025-03-31 | Cloud Data Fusion 6.9 support | 2025-03-31 | Cloud Data Fusion version 6.9 support was deprecated and is no longer supported; deprecated on 2025-03-31. |
| 2025-03-17 | Cloud Data Fusion 6.11.0 high availability upgrades |  | Cloud Data Fusion version 6.11.0 introduces high availability with reduced downtime during upgrades. |
| 2025-03-17 | Cloud Data Fusion failed pipeline error diagnostics |  | The Cloud Data Fusion web interface now provides detailed error information for failed pipeline runs with classification by category, reason, and message. |
| 2025-03-17 | Cloud Data Fusion logs observability in Cloud Logging |  | Cloud Data Fusion added support for viewing instance and pipeline logs in Cloud Logging and the Cloud Data Fusion dashboard. |
| 2025-03-17 | Cloud Data Fusion metrics observability in Cloud Monitoring |  | Cloud Data Fusion added support for viewing instance and pipeline metrics in Cloud Monitoring and the Cloud Data Fusion dashboard. |
| 2025-03-17 | GET /v3/namespaces/.../apps/.../logs API | 2025-03-17 | The namespace/application logs download API was deprecated for system service and pipeline run log retrieval; deprecated on 2025-03-17. |
| 2025-03-17 | GET /v3/namespaces/{namespace}/apps endpoint pagination behavior | 2025-03-17 | The ability to retrieve all applications without pagination via GET /v3/namespaces/{namespace}/apps was deprecated; deprecated on 2025-03-17. |
| 2025-03-17 | GET /v3/system/services/.../logs API | 2025-03-17 | The system service logs download API was deprecated for retrieving system service log data; deprecated on 2025-03-17. |
| 2025-03-17 | POST /v3/metrics/query API | 2025-03-17 | The POST v3/metrics/query API for searching or querying metrics was deprecated; deprecated on 2025-03-17. |
| 2025-03-17 | POST /v3/metrics/search API | 2025-03-17 | The POST v3/metrics/search API for searching or querying metrics was deprecated; deprecated on 2025-03-17. |
| 2025-01-21 | Cloud Data Fusion custom organization policy constraints |  | Cloud Data Fusion now supports custom Organization Policy constraints for finer control over specific resource fields. |
| 2024-12-17 | Cloud Data Fusion CMEK organization policy support |  | Cloud Data Fusion now supports the Customer-Managed Encryption Keys (CMEK) organization policy. |
| 2024-09-01 | Cloud Data Fusion version 6.8 support deprecation | 2024-09-01 | Support for Cloud Data Fusion version 6.8 has been discontinued, and users are advised to upgrade to supported versions; deprecated on 2024-09-01. |

Source file slug: `cloud-data-fusion.md`

