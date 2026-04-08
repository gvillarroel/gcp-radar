# Cloud Storage

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 165
Unique features: 170

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-04-02 | Bucket encryption type enforcement |  | Cloud Storage lets you allow or prohibit specific encryption types for new objects created in a bucket. |
| 2026-03-31 | Storage Insights public object identification |  | Storage Insights datasets can identify publicly accessible objects to support data security and compliance management; Storage Insights datasets can identify publicly accessible objects using object metadata schema fields that expose public access status. |
| 2026-03-31 | Storage Insights security and retention metadata fields |  | Storage Insights bucket and object metadata schemas include fields for encryption and retention auditing. |
| 2026-03-10 | Rapid Bucket |  | Rapid Bucket provides zonal buckets using the Rapid storage class to optimize data access and I/O performance near compute resources. |
| 2026-03-05 | BigQuery ObjectRef support for Storage Insights datasets |  | Storage Insights datasets can be analyzed with BigQuery ObjectRef functions to query object data and metadata together. |
| 2026-01-28 | Bucket listing partial success |  | Cloud Storage bucket listing supports partial success so available buckets can be returned even when some locations are temporarily unreachable. |
| 2026-01-21 | Bucket relocation multipart upload support |  | Bucket relocation with write downtime supports completed multipart uploads that finish before final synchronization. |
| 2026-01-20 | Thailand Bangkok region support |  | Cloud Storage buckets are supported in the Thailand, Bangkok region (asia-southeast3). |
| 2026-01-16 | Storage batch operations dry run mode |  | Storage batch operations can be run in dry run mode to validate job configuration without changing or deleting data. |
| 2026-01-15 | Bulk restore filters for soft-deleted objects |  | Bulk restore of soft-deleted objects supports restoring objects based on a specific live point in time or object creation time. |
| 2025-12-16 | Rapid Cache for BigQuery reads |  | Rapid Cache can accelerate Cloud Storage object read requests issued by BigQuery. |
| 2025-12-16 | Storage Insights activity datasets |  | Storage Insights datasets can be generated for activity data to analyze object mutations, errors, and activity trends. |
| 2025-11-14 | Bucket relocation console support |  | The Google Cloud console supports relocating Cloud Storage buckets between locations without changing bucket names. |
| 2025-11-11 | Autoclass support for hierarchical namespace buckets |  | Autoclass can be enabled for Cloud Storage buckets that use hierarchical namespace. |
| 2025-10-23 | Bulk object retention configuration with storage batch operations |  | Storage batch operations can create and manage object retention configurations in bulk using the PutMetadata transformation. |
| 2025-09-30 | Object contexts |  | Object contexts let you attach contextual information to Cloud Storage objects to improve data management and discovery. |
| 2025-09-17 | Storage Insights bucket size and object count fields |  | Storage Insights bucket attribute views include objectCount and totalSize fields for bucket inventory reporting. |
| 2025-09-10 | Cloud Storage FUSE buffered reads |  | Cloud Storage FUSE supports buffered reads that asynchronously prefetch file data to improve sequential read performance for large files. |
| 2025-08-12 | Anywhere Cache asia-south1-b and asia-south1-c support |  | Anywhere Cache is supported in the asia-south1-b and asia-south1-c zones. |
| 2025-08-11 | Anywhere Cache asia-south1-a support |  | Anywhere Cache is supported in the asia-south1-a zone. |
| 2025-07-14 | Storage Insights dataset refresh tracking fields |  | Storage Insights events_view includes snapshotTime and eventCode fields to track dataset refresh timing. |
| 2025-07-14 | Storage Insights latest snapshot views |  | Storage Insights datasets provide latest snapshot views for bucket and object metadata. |
| 2025-07-08 | Anywhere Cache us-west3 support |  | Anywhere Cache is supported in the us-west3-a, us-west3-b, and us-west3-c zones. |
| 2025-07-02 | Bucket IP filtering |  | Bucket IP filtering restricts requests to Cloud Storage buckets based on source IP addresses or VPC origin. |
| 2025-06-23 | Cloud Audit Logs enhanced error coverage for Cloud Storage |  | Cloud Storage Cloud Audit Logs include broader error scenario coverage and more detailed error messages. |
| 2025-06-16 | Cloud Storage FUSE 3.0 |  | Cloud Storage FUSE 3.0 adds performance improvements, automated high-performance configurations, tuning guidance, and a global-max-blocks option for streaming writes. |
| 2025-03-31 | Cloud Storage FUSE metrics |  | Cloud Storage FUSE exposes metrics for monitoring FUSE performance. |
| 2025-03-31 | Storage batch operations |  | Storage batch operations provide a serverless way to perform operations on billions of Cloud Storage objects. |
| 2025-03-21 | Cross-bucket replication |  | Cross-bucket replication asynchronously copies new and updated objects from a source bucket to a destination bucket; Cross-bucket replication asynchronously copies new and updated objects from a source bucket to a destination bucket. |
| 2025-03-21 | Storage Insights datasets |  | Storage Insights datasets provide BigQuery-exportable insights for Cloud Storage resources. |
| 2025-03-21 | Storage Intelligence |  | Storage Intelligence provides a unified platform for Cloud Storage data exploration, cost optimization, security enforcement, and governance. |
| 2025-03-17 | DE configurable dual-region |  | Cloud Storage offers the DE configurable dual-region for buckets spanning europe-west3 and europe-west10. |
| 2025-03-13 | Anywhere Cache |  | Anywhere Cache provides SSD-backed caches in the same zones as workloads to speed data access and reduce transfer fees. |
| 2025-03-05 | Configurable dual-region Turin support |  | Configurable dual-regions include the Turin, Italy region (europe-west12). |
| 2025-03-04 | Stockholm Sweden region support |  | Cloud Storage buckets are supported in the Stockholm, Sweden region (europe-north2). |
| 2025-02-26 | Bucket relocation |  | Bucket relocation lets you move Cloud Storage buckets between geographic locations. |
| 2025-02-24 | Objects move method for flat and hierarchical namespace buckets |  | The Objects: move method supports moving objects in both flat namespace and hierarchical namespace buckets. |
| 2025-01-31 | Client-side tracing with OpenTelemetry |  | Cloud Storage client libraries support client-side traces with OpenTelemetry. |
| 2024-11-07 | Soft-deleted bucket restore |  | Cloud Storage can restore buckets deleted under an active soft delete policy during the retention period. |
| 2024-10-28 | Soft delete recommendations |  | The Google Cloud console provides soft delete recommendations for buckets based on cost and security impact. |
| 2024-10-22 | Cloud Storage gRPC support |  | Cloud Storage supports interaction over gRPC. |
| 2024-10-22 | gRPC client-side metrics |  | Cloud Storage supports emitting client-side metrics for gRPC connections. |
| 2024-10-15 | Hierarchical namespace |  | Hierarchical namespace lets Cloud Storage buckets organize data in a logical file system structure; Hierarchical namespace lets Cloud Storage buckets organize data in a logical file system structure. |
| 2024-09-24 | Cloud KMS Autokey support for Cloud Storage |  | Cloud Storage supports Cloud KMS Autokey for customer-managed encryption key provisioning. |
| 2024-09-23 | Hierarchical namespace support in Cloud Storage FUSE |  | Cloud Storage FUSE supports mounting buckets with hierarchical namespace enabled. |
| 2024-09-11 | United States regional endpoint selection |  | Regional endpoints support specifying United States regions for Cloud Storage access. |
| 2024-09-09 | Google Cloud console support for hierarchical namespace |  | The Google Cloud console supports creating hierarchical namespace buckets and managing, renaming, and moving folders within them. |
| 2024-08-05 | Cloud Storage FUSE parallel downloads |  | Cloud Storage FUSE supports parallel downloads to improve read performance for large files. |
| 2024-07-31 | Cloud Storage FUSE list caching |  | Cloud Storage FUSE supports list caching to speed directory and file listing operations. |
| 2024-07-31 | Default soft delete retention duration in console |  | The Google Cloud console can set a default soft delete retention duration for new buckets. |
| 2024-07-23 | Default soft delete retention via bucket tags |  | Bucket tags can define a default soft delete retention duration for newly created buckets in an organization. |
| 2024-07-11 | Predefined dual-region pairing: Frankfurt and Zurich |  | Cloud Storage supports Frankfurt and Zurich as a predefined dual-region bucket pairing. |
| 2024-07-08 | Predefined dual-region pairing: London and Frankfurt |  | Cloud Storage supports London and Frankfurt as a predefined dual-region bucket pairing. |
| 2024-07-02 | Bulk disable soft delete |  | Soft delete can be disabled for multiple buckets at once or for all buckets in a project. |
| 2024-06-28 | Regional endpoints region support: Frankfurt and Paris |  | Regional endpoints support the Frankfurt and Paris regions for Cloud Storage requests. |
| 2024-06-06 | Predefined dual-region pairing: London and Belgium |  | Cloud Storage supports London and Belgium as a predefined dual-region bucket pairing. |
| 2024-05-27 | Cloud Storage FUSE anonymous access for custom endpoints |  | Cloud Storage FUSE can disable authentication on custom endpoints by using the --anonymous-access flag. |
| 2024-05-27 | Cloud Storage FUSE Rocky Linux support |  | Cloud Storage FUSE supports Rocky Linux 8.9 and later. |
| 2024-05-27 | Cloud Storage FUSE unlimited default max connections per host |  | Cloud Storage FUSE sets max-conns-per-host to an unlimited default value subject to machine limits. |
| 2024-04-05 | Custom constraints |  | Custom constraints let organizations enforce policy rules on Cloud Storage resources such as requiring Object Versioning on buckets. |
| 2024-04-03 | Managed folders in Cloud Console |  | Managed folders can be created, listed, moved, deleted, and assigned IAM policies in the Google Cloud Console. |
| 2024-04-01 | Dual-region Google Egress Bandwidth quotas |  | Cloud Storage provides Google Egress Bandwidth quotas for each dual-region location. |
| 2024-03-29 | Storage Control API |  | The Storage Control API supports metadata-specific, control plane, and long-running Cloud Storage operations. |
| 2024-03-18 | Cloud Storage FUSE file cache |  | The Cloud Storage FUSE file cache serves repeated file reads from faster client-side cache storage. |
| 2024-03-12 | Bucket-level cost data in Cloud Billing export |  | Cloud Billing Detailed data export includes granular cost data for individual Cloud Storage buckets. |
| 2024-01-31 | Regional availability: Johannesburg |  | Cloud Storage is available in the Johannesburg region (africa-south1). |
| 2023-12-07 | Cloud Storage FUSE log rotation |  | Cloud Storage FUSE supports configurable log rotation. |
| 2023-12-04 | Restrict unencrypted HTTP requests organization policy constraint |  | This organization policy constraint blocks unencrypted HTTP access to Cloud Storage resources. |
| 2023-11-21 | Object Retention Lock |  | Object Retention Lock applies and optionally locks retention settings on individual objects to prevent early deletion or overwrite. |
| 2023-11-20 | Regional endpoints |  | Regional endpoints route Cloud Storage request traffic directly to a specified region to support data residency and sovereignty requirements. |
| 2023-10-26 | Managed folders |  | Managed folders organize objects within a bucket and allow more granular IAM policies on data segments. |
| 2023-10-12 | Parallelized uploads and downloads in Node.js and Python client libraries |  | The Node.js and Python Cloud Storage client libraries support parallelized uploads and downloads for improved transfer performance. |
| 2023-09-26 | Cloud Storage FUSE configuration file support |  | Cloud Storage FUSE mounting behavior can be controlled with a configuration file instead of global options. |
| 2023-09-19 | Regional availability: Dammam |  | Cloud Storage is available in the Dammam region (me-central2). |
| 2023-09-15 | Storage Insights manifest files |  | Storage Insights generates manifest files to locate sharded inventory report outputs for download. |
| 2023-08-23 | Storage Object User IAM role |  | The Storage Object User role grants object and metadata access without granting access to object ACLs. |
| 2023-08-22 | Regional availability: Berlin |  | Cloud Storage is available in the Berlin region (europe-west10). |
| 2023-08-01 | Locational endpoints for ITAR compliance |  | Locational endpoints let Cloud Storage operations comply with International Traffic in Arms Regulations requirements. |
| 2023-07-07 | Custom audit logging |  | Custom audit logging lets Cloud Storage requests attach user-defined information that appears in Cloud Audit Logs; Custom audit logging lets Cloud Storage JSON API requests send user-defined audit headers that appear in Cloud Audit Logs. |
| 2023-06-26 | Cloud Storage FUSE |  | Cloud Storage FUSE mounts Cloud Storage buckets and accesses them as local file systems; Cloud Storage FUSE mounts Cloud Storage buckets and accesses them as local file systems. |
| 2023-04-17 | Storage Insights inventory reports |  | Storage Insights inventory reports provide metadata overviews for all objects in a bucket. |
| 2023-03-30 | Regional availability: Doha |  | Cloud Storage is available in the Doha region (me-central1). |
| 2023-03-23 | Regional availability: Turin |  | Cloud Storage is available in the Turin region (europe-west12). |
| 2023-03-20 | and Paris |  | Dual-region storage supports Warsaw, Madrid, Frankfurt, Milan, and Paris as available EU regions. |
| 2023-03-20 | Dual-region storage region support: Los Angeles and Salt Lake City |  | Dual-region storage supports Los Angeles and Salt Lake City as available US regions. |
| 2023-03-20 | Dual-region storage region support: Warsaw |  | Dual-region storage supports Warsaw, Madrid, Frankfurt, Milan, and Paris as available EU regions. |
| 2023-03-20 | Frankfurt |  | Dual-region storage supports Warsaw, Madrid, Frankfurt, Milan, and Paris as available EU regions. |
| 2023-03-20 | Madrid |  | Dual-region storage supports Warsaw, Madrid, Frankfurt, Milan, and Paris as available EU regions. |
| 2023-03-20 | Milan |  | Dual-region storage supports Warsaw, Madrid, Frankfurt, Milan, and Paris as available EU regions. |
| 2023-03-17 | Expanded Cloud Storage monitoring dashboards |  | Expanded monitoring dashboards provide additional metrics, bucket-location filtering, customization, and alerting for Cloud Storage; Expanded monitoring dashboards provide additional metrics, bucket-location filtering, customization, and alerting for Cloud Storage. |
| 2022-11-10 | Bucket policy insights |  | The Google Cloud console provides policy insights to help understand and manage bucket permission usage. |
| 2022-11-10 | Bucket role recommendations |  | The Google Cloud console provides role recommendations for Cloud Storage buckets based on permission usage. |
| 2022-11-09 | Per-bucket observability dashboards |  | Per-bucket dashboards are available in an Observability tab within each bucket's details page. |
| 2022-11-08 | Autoclass |  | Autoclass automatically transitions object storage classes based on access patterns. |
| 2022-10-27 | Bucket tags |  | Bucket tags provide tag-based classification and access control for Cloud Storage buckets; Bucket tags can be applied to Cloud Storage buckets for fine-grained access control. |
| 2022-09-13 | Regional availability: Tel Aviv |  | Cloud Storage is available in the Tel Aviv region (me-west1). |
| 2022-08-24 | Restrict authentication types organization policy constraint |  | This organization policy constraint limits which authentication types can be used in requests to Cloud Storage resources. |
| 2022-08-02 | CMEK organization policy constraint: restrictCmekCryptoKeyProjects |  | This organization policy constraint controls which projects can provide Cloud KMS keys for Cloud Storage requests. |
| 2022-08-02 | CMEK organization policy constraint: restrictNonCmekServices |  | This organization policy constraint controls which Cloud Storage resources must use customer-managed encryption keys. |
| 2022-08-02 | gcloud alpha storage commands |  | The gcloud alpha storage command group supports creating buckets and viewing or editing bucket and object metadata; The gcloud alpha storage commands provide faster uploading and downloading performance than gsutil. |
| 2022-07-28 | Configurable dual-region storage |  | Configurable dual-region storage lets buckets use user-selected regional pairings. |
| 2022-06-27 | Abort incomplete multipart upload lifecycle action |  | Object Lifecycle Management can remove abandoned XML API multipart uploads with the AbortIncompleteMultipartUpload action. |
| 2022-06-27 | Object Lifecycle Management prefix and suffix match conditions |  | Object Lifecycle Management supports MatchesPrefix and MatchesSuffix conditions to target objects by name patterns. |
| 2022-06-06 | Regional availability: Dallas |  | Cloud Storage is available in the Dallas region (us-south1). |
| 2022-05-24 | Cloud Storage region us-east5 |  | Cloud Storage is available in the Columbus, Ohio region (us-east5) for storing data. |
| 2022-05-10 | Cloud Storage region europe-southwest1 |  | Cloud Storage is available in the Madrid, Spain region (europe-southwest1) for storing data. |
| 2022-05-02 | Cloud Storage region europe-west9 |  | Cloud Storage is available in the Paris, France region (europe-west9) for storing data. |
| 2022-04-20 | Cloud Storage region europe-west8 |  | Cloud Storage is available in the Milan, Italy region (europe-west8) for storing data. |
| 2022-04-05 | Custom dual-region storage |  | Custom dual-region storage lets users choose two regions within the same continent for a dual-region configuration. |
| 2022-03-25 | Organization policy constraint gcp.restrictCmekCryptoKeyProjects |  | This organization policy constraint restricts which projects can supply Cloud KMS keys for Cloud Storage requests. |
| 2022-03-25 | Organization policy constraint gcp.restrictNonCmekServices |  | This organization policy constraint requires selected resources to use customer-managed encryption keys. |
| 2022-02-24 | Restrict authentication types organizational constraint |  | This organizational constraint restricts which authentication types can be used in requests for Cloud Storage resources. |
| 2021-11-16 | Cloud Storage region southamerica-west1 |  | Cloud Storage is available in the Santiago region (southamerica-west1) for storing data. |
| 2021-11-01 | List Objects V2 |  | List Objects V2 provides an updated object listing capability for Cloud Storage. |
| 2021-10-13 | Cloud EKM encryption for Cloud Storage |  | Cloud Storage can use Cloud EKM keys as customer-managed encryption keys for data encryption. |
| 2021-10-05 | Turbo replication |  | Turbo replication provides inter-region replication for newly written objects within 15 minutes. |
| 2021-09-20 | Object Versioning in Cloud Console |  | The Cloud Console can manage Object Versioning and perform actions on versioned objects. |
| 2021-08-03 | Cloud Storage region northamerica-northeast2 |  | Cloud Storage is available in the Toronto region (northamerica-northeast2) for storing data. |
| 2021-07-12 | List Objects V2 for XML API |  | List Objects V2 for the XML API improves interoperability with Amazon S3 tools and libraries. |
| 2021-07-01 | Public access prevention |  | Public access prevention blocks Cloud Storage data from being accidentally exposed to the public. |
| 2021-06-29 | Cloud Storage region asia-south2 |  | Cloud Storage is available in the Delhi region (asia-south2) for storing data. |
| 2021-06-21 | Cloud Storage region australia-southeast2 |  | Cloud Storage is available in the Melbourne region (australia-southeast2) for storing data. |
| 2021-05-14 | XML API multipart uploads |  | XML API multipart uploads let clients upload objects in multiple parts. |
| 2021-03-24 | Cloud Storage region europe-central2 |  | Cloud Storage is available in the Warsaw region (europe-central2) for storing data. |
| 2020-09-28 | Cloud Storage dual-region asia1 |  | Cloud Storage offers the Tokyo and Osaka dual-region location asia1 for storing data across two regions. |
| 2020-09-08 | Custom time metadata |  | Custom time metadata lets users assign an arbitrary date and time to Cloud Storage objects. |
| 2020-09-08 | Object Lifecycle Management custom time conditions |  | Custom time conditions let lifecycle rules act based on a custom time set on objects. |
| 2020-09-08 | Object Lifecycle Management noncurrent time conditions |  | Noncurrent time conditions let lifecycle rules act based on when an object became noncurrent. |
| 2020-07-20 | Detailed audit logging mode |  | Detailed audit logging mode provides more granular audit logging for Cloud Storage activity. |
| 2020-06-08 | Cloud Storage region asia-southeast2 |  | Cloud Storage is available in the Jakarta region (asia-southeast2) for storing data. |
| 2020-04-20 | Cloud Storage region us-west4 |  | Cloud Storage is available in the Las Vegas region (us-west4) for storing data. |
| 2020-02-24 | Cloud Storage region us-west3 |  | Cloud Storage is available in the Salt Lake City region (us-west3) for storing data. |
| 2020-01-24 | Cloud Storage region asia-northeast3 |  | Cloud Storage is available in the Seoul region (asia-northeast3) for storing data. |
| 2020-01-08 | Archive Storage |  | Archive Storage is a storage class for long-term, rarely accessed data. |
| 2019-12-13 | IAM Conditions for Cloud Storage |  | IAM Conditions for Cloud Storage let permissions be granted for limited times or subsets of objects in buckets. |
| 2019-08-09 | HMAC keys for service accounts |  | HMAC keys for service accounts let clients create signed XML API requests without using user account HMAC keys. |
| 2019-06-28 | Dual-region storage |  | Dual-region storage keeps copies of data in two specific locations within a dual-region; Dual-region storage keeps copies of data in two specific locations within a dual-region. |
| 2019-06-20 | Cloud DLP inspection for Cloud Storage buckets |  | Cloud DLP can inspect Cloud Storage buckets for sensitive information from the Google Cloud Console. |
| 2019-04-18 | Cloud Storage region asia-northeast2 |  | Cloud Storage is available in the Osaka region (asia-northeast2) for storing data. |
| 2019-04-05 | V4 signing process |  | The V4 signing process is an improved method for creating signed requests with RSA or HMAC signatures, including signed URLs. |
| 2019-03-11 | Cloud Storage region europe-west6 |  | Cloud Storage is available in the Zurich region (europe-west6) for storing data. |
| 2019-02-15 | Bucket Policy Only |  | Bucket Policy Only unifies access control by disabling object-level ACLs and relying on bucket-level IAM policies. |
| 2018-10-22 | Cloud Storage region asia-east2 |  | Cloud Storage is available in the Hong Kong region (asia-east2) for storing data. |
| 2018-10-19 | Retention policies and object holds |  | Retention policies and object holds help prevent object deletion or overwrite until defined retention or hold conditions are met. |
| 2018-10-09 | C++ Cloud Storage Client Library |  | The C++ Cloud Storage Client Library provides a client library for interacting with Cloud Storage. |
| 2018-07-10 | Cloud Storage region us-west2 |  | Cloud Storage is available in the Los Angeles region (us-west2) for storing data. |
| 2018-06-11 | Cloud Storage region europe-north1 |  | Cloud Storage is available in the Finland region (europe-north1) for storing data. |
| 2018-05-07 | Customer-managed encryption keys |  | Customer-managed encryption keys let Cloud Storage use Cloud KMS keys to encrypt objects. |
| 2018-01-10 | Cloud Storage region europe-west4 |  | Cloud Storage is available in the Netherlands region (europe-west4) for storing data. |
| 2018-01-10 | Cloud Storage region northamerica-northeast1 |  | Cloud Storage is available in the Montreal region (northamerica-northeast1) for storing data. |
| 2017-11-14 | Cloud Pub/Sub Notifications resource attribute | 2018-06-01 | The resource attribute in Cloud Pub/Sub Notifications for Cloud Storage identifies the notified resource in subscription data; deprecated on 2018-06-01. |
| 2017-11-14 | Requester Pays |  | Requester Pays requires requests to a bucket to specify a billing project for charges generated by access. |
| 2017-10-31 | Cloud Storage region asia-south1 |  | Cloud Storage is available in the Mumbai region (asia-south1) for storing data. |
| 2017-09-05 | Cloud Storage region southamerica-east1 |  | Cloud Storage is available in the Sao Paulo region (southamerica-east1) for storing data. |
| 2017-08-01 | Regional bucket location: Frankfurt (europe-west3) |  | Cloud Storage added the Frankfurt region as a location for storing data. |
| 2017-06-20 | Regional bucket location: Sydney (australia-southeast1) |  | Cloud Storage added the Sydney region as a location for storing data. |
| 2017-06-06 | Public dataset hosting: NEXRAD |  | Cloud Storage hosts the NEXRAD dataset as a public dataset. |
| 2017-06-06 | Regional bucket location: London (europe-west2) |  | Cloud Storage added the London region as a location for storing data. |
| 2017-05-09 | Regional bucket location: Northern Virginia (us-east4) |  | Cloud Storage added the Northern Virginia region as a location for storing data. |
| 2017-04-11 | Regional bucket location: Singapore (asia-southeast1) |  | Cloud Storage added the Singapore region as a location for storing data. |
| 2017-04-06 | Bucket labels |  | Cloud Storage buckets can be labeled to organize Google Cloud resources. |
| 2017-03-27 | Cloud Pub/Sub notifications for Cloud Storage |  | Cloud Storage can send object change notifications to Cloud Pub/Sub with configurable event types and payload information. |
| 2016-11-07 | Regional bucket location: Tokyo (asia-northeast1) |  | Cloud Storage added the asia-northeast1 region as a location for storing data. |
| 2016-10-20 | Coldline Storage |  | Coldline Storage is an archival storage class for low-cost, immediately accessible data used for backup, archival, and disaster recovery. |
| 2016-10-20 | Per-object storage classes |  | Cloud Storage allows storage class assignment at the object level and lifecycle-based automatic class changes. |
| 2016-10-04 | Public dataset hosting: Landsat |  | Cloud Storage hosts the Landsat mission dataset as a public dataset. |
| 2016-10-04 | Public dataset hosting: Sentinel-2 |  | Cloud Storage hosts the Sentinel-2 mission dataset as a public dataset. |
| 2016-09-26 | Bucket-level IAM |  | Bucket-level IAM allows IAM permissions to be applied directly to individual Cloud Storage buckets. |
| 2016-07-20 | Regional bucket location: us-west1 |  | Cloud Storage added the us-west1 region as a location for storing data. |
| 2016-06-24 | X-Goog-Content-Length-Range header |  | Cloud Storage supports the X-Goog-Content-Length-Range custom header for XML and JSON requests to validate uploaded content size. |

Source file slug: `cloud-storage.md`

