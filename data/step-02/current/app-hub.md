# App Hub

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 22
Unique features: 45

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2025-12-22 | App Hub extended metadata schemas |  | App Hub now displays extended metadata schemas so users can view rich, structured, schema-driven information about resources. |
| 2025-12-19 | Single-project application management setup model |  | App Hub introduces a preview setup model that lets a standalone project be configured as the management project and attached as an application management boundary. |
| 2025-12-18 | Bulk registration of services and workloads |  | App Hub enables registering multiple services and workloads at once, supporting up to 10 resources in a single operation. |
| 2025-12-18 | Combined application creation and resource registration |  | App Hub merges application creation and resource registration into a single workflow in the Google Cloud console. |
| 2025-12-18 | Copy attributes and owner information during registration |  | App Hub allows attribute and owner details from an application to be copied to all resources being registered. |
| 2025-12-16 | App Hub availability in europe-north2 |  | App Hub is available in the europe-north2 (Stockholm) region, expanding the list of supported locations for applications and resource registration. |
| 2025-11-17 | ExtendedMetadata property for services and workloads |  | Services and workloads now include an output-only ExtendedMetadata property for structured, schema-based resource details. |
| 2025-11-17 | FunctionalType metadata property |  | Services and workloads now include an output-only FunctionalType property that identifies each resource’s known function, initially supporting AGENT. |
| 2025-11-17 | Identity metadata property for services and workloads |  | Services and workloads now include an output-only Identity field containing the service account or managed workload identity name. |
| 2025-11-17 | RegistrationType metadata property |  | Services now include an output-only RegistrationType field that indicates whether they are exclusive or shared across applications. |
| 2025-11-14 | App-enabled folders for App Hub |  | App Hub now allows standard Google Cloud folders to be enabled as app-enabled folders that serve as application management boundaries. |
| 2025-11-14 | Automatic API enablement on management projects |  | Core and recommended APIs required for App Hub functionality are automatically enabled on the management project. |
| 2025-11-14 | Automatic management project creation |  | When a folder is app-enabled, App Hub creates a dedicated management project to store metadata and centralize operations. |
| 2025-11-14 | Expanded App Hub supported resources |  | App Hub adds support for additional Google Cloud products and services as registerable resources, including preview-capable integrations. |
| 2025-11-14 | Optional billing for core App Hub management |  | Core App Hub application management can be used without a billing account, with billing required only for additional application-centric features. |
| 2025-08-25 | Preview support for additional App Hub resources |  | App Hub adds Preview support for new resource types, including multiple Vertex AI, Compute Engine, Dataflow, and networking resources; App Hub adds Preview support for Dataproc Metastore Service and additional Vertex AI resources, including Dataset, Featurestore, MetadataStore, and Model. |
| 2025-07-30 | Vertex AI resources generally available in App Hub |  | The following Vertex AI resources are now generally available in App Hub: Dataset items, Featurestore containers, MetadataStore instances, and Model resources. |
| 2025-07-08 | Dataproc Metastore services generally available in App Hub |  | Dataproc Metastore services are now generally available as supported resources in App Hub. |
| 2025-05-01 | All App Hub supported resources generally available |  | App Hub’s supported resources are now generally available. |
| 2025-04-09 | App Hub application management in app-enabled folders |  | App Hub now supports creating and managing App Hub applications from app-enabled folders in Preview. |
| 2025-04-09 | Gemini Cloud Assist in App Hub |  | App Hub now supports Gemini Cloud Assist in Preview, allowing users to retrieve application information through a chat panel in app-enabled folders. |
| 2025-03-14 | App Hub support for AlloyDB for PostgreSQL resources |  | App Hub now includes AlloyDB for PostgreSQL as a supported resource type in Preview. |
| 2025-03-14 | App Hub support for Cloud Data Fusion resources |  | App Hub now includes Cloud Data Fusion as a supported resource type in Preview. |
| 2025-03-14 | App Hub support for Cloud Deploy resources |  | App Hub now includes Cloud Deploy as a supported resource type in Preview. |
| 2025-03-14 | App Hub support for Cloud Logging resources |  | App Hub now includes Cloud Logging as a supported resource type in Preview. |
| 2025-03-14 | App Hub support for Cloud Run jobs |  | App Hub now includes Cloud Run jobs as a supported resource type in Preview. |
| 2025-03-14 | App Hub support for Firestore resources |  | App Hub now includes Firestore as a supported resource type in Preview. |
| 2025-03-14 | App Hub support for GKE single-cluster Gateway resources |  | App Hub now includes GKE single-cluster Gateway as a supported resource type in Preview. |
| 2025-03-14 | App Hub support for GKE workload resources |  | App Hub now includes Google Kubernetes Engine (GKE) workloads as supported resources in Preview. |
| 2025-03-14 | App Hub support for Managed Service for Microsoft Active Directory resources |  | App Hub now includes Managed Service for Microsoft Active Directory as a supported resource type in Preview. |
| 2025-03-14 | App Hub support for Secret Manager resources |  | App Hub now includes Secret Manager as a supported resource type in Preview. |
| 2025-03-14 | App Hub support for Vertex AI resources |  | App Hub now includes Vertex AI as a supported resource type in Preview. |
| 2025-02-24 | App Hub support for Bigtable resources |  | App Hub now includes Bigtable as a supported resource type in Preview. |
| 2025-02-24 | App Hub support for Cloud SQL resources |  | App Hub now includes Cloud SQL as a supported resource type in Preview. |
| 2025-02-24 | App Hub support for Cloud Storage resources |  | App Hub now includes Cloud Storage as a supported resource type in Preview. |
| 2025-02-24 | App Hub support for Memorystore for Redis resources |  | App Hub now includes Memorystore for Redis as a supported resource type in Preview. |
| 2025-02-24 | App Hub support for Pub/Sub resources |  | App Hub now includes Pub/Sub as a supported resource type in Preview. |
| 2025-02-24 | App Hub support for Spanner resources |  | App Hub now includes Spanner as a supported resource type in Preview. |
| 2025-01-23 | App Hub support for GKE services and workloads |  | App Hub now supports Google Kubernetes Engine (GKE) services and workloads in Preview. |
| 2024-12-16 | App Hub support for Cloud Run services |  | App Hub now supports Cloud Run services as a resource type in Preview. |
| 2024-11-18 | App Hub regional infrastructure resource support for global applications |  | App Hub now supports regional infrastructure resources for global applications in Preview. |
| 2024-10-17 | App Hub global infrastructure resource support for global applications |  | App Hub now supports global infrastructure resources for global applications in Preview. |
| 2024-10-09 | App Hub metric charts from metadata labels |  | App Hub now allows users to create charts for specific metrics based on App Hub metadata labels. |
| 2024-10-09 | App Hub system metrics visibility |  | App Hub now allows users to view system metrics for applications in the App Hub interface and Metrics Explorer. |
| 2023-12-14 | App Hub Cloud Console setup |  | App Hub setup is now available in the Google Cloud console in Preview. |

Source file slug: `app-hub.md`

