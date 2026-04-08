# Anthos Attached Clusters

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 10
Unique features: 14

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2023-12-14 | Simplified IAM requirements for attached cluster system components |  | Anthos Attached Clusters no longer requires manual Google IAM bindings for key system components such as gke-telemetry-agent, Google Managed Service for Prometheus collectors, and the Binary Authorization agent. |
| 2023-10-30 | Generic CNCF Kubernetes cluster attachment |  | Added support for attaching CNCF-conformant Kubernetes clusters by setting the distribution type to "generic.". |
| 2023-09-06 | Binary Authorization support for Anthos attached clusters |  | Introduced Binary Authorization as a deploy-time security control to enforce image signing and signature validation for attached clusters. |
| 2023-09-06 | Compressed Fluent Bit log ingestion |  | Enabled gzip compression for Fluent Bit log ingestion into Cloud Logging for both control plane and workload logs. |
| 2023-09-06 | Google group-based cluster-admin configuration |  | Added the authorization.admin_groups field so administrators can assign cluster-admin access to Google groups through the management plane. |
| 2023-09-06 | Proxy support for attaching AKS and EKS clusters |  | Added support for using a proxy when attaching AKS and EKS clusters to Anthos Attached Clusters. |
| 2023-07-12 | Cloud Console management for attached clusters |  | Enabled managing attached EKS and AKS clusters from Google Cloud Console, including status viewing, component updates, and detaching clusters. |
| 2023-05-04 | Console-based attached cluster lifecycle operations |  | Added console actions to view, update, and delete attached clusters through Google Cloud Console for EKS and AKS. |
| 2023-05-04 | Google-group access assignment for attached clusters |  | Enabled attached cluster access control using Google groups instead of per-user access starting with version 1.26. |
| 2023-05-04 | Kubernetes resource metadata export for attached clusters |  | Enabled sending Kubernetes resource metadata to Google Cloud to improve console visibility and cluster metrics when Config Monitoring for Ops API is enabled. |
| 2022-12-15 | AKS and EKS version support expansion |  | Expanded supported attached cluster Kubernetes versions for AKS and EKS to include versions 1.21 through 1.25. |
| 2022-12-15 | Cluster status logging and monitoring via Cloud Logging UI |  | Added logging and monitoring for attached cluster status with full log inspection in the Google Cloud Logging interface. |
| 2022-12-15 | Improved cluster attachment workflow |  | Simplified the process for attaching clusters to Google Cloud infrastructure in the current Anthos Attached Clusters generation. |
| 2022-12-15 | Migration from previous-generation Anthos Attached Clusters |  | Added support for migrating existing EKS and AKS clusters from the previous-generation Anthos Attached Clusters product. |

Source file slug: `anthos-attached-clusters.md`

