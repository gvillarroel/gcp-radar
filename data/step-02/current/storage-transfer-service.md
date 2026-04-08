# Storage Transfer Service

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 89
Unique features: 87

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-02-02 | Storage Transfer Service organization policy custom constraints |  | Storage Transfer Service now supports Organization Policy custom constraints to control and restrict how transfers are configured and allowed within an organization. |
| 2026-01-14 | Storage Transfer Service Azure event-driven transfers |  | Storage Transfer Service now enables event-driven transfers from Azure Blob Storage and Azure Data Lake Storage Gen2 sources by consuming Azure Event Grid notifications via Azure Storage Queues. |
| 2025-12-02 | Private-network transfer from AWS S3/Azure Blob to Cloud Storage |  | Storage Transfer Service now enables transfers from AWS S3 or Azure Blob Storage to Cloud Storage over private connectivity using Cross-Cloud Interconnect or Partner Interconnect. |
| 2025-07-28 | Regional endpoints for Storage Transfer Service agents |  | Storage Transfer Service agent-based transfers now support Cloud Storage regional endpoints, keeping transfer traffic to or from a bucket within a specified Google Cloud region. |
| 2025-05-22 | Agentless transfer user-managed service account delegation |  | Storage Transfer Service now supports agentless transfers using user-managed service accounts in place of the default Google-managed service agent for finer-grained bucket permission and user usage control. |
| 2025-05-02 | Skipped file logging for agent-based transfers |  | Cloud Logging for Storage Transfer Service now emits logs for files skipped during agent-based transfer jobs when a file already exists and the job is configured to ignore existing files. |
| 2024-12-19 | Cloud Storage-hosted transfer URL lists |  | Storage Transfer Service now allows transfer URL lists to be stored in an access-controlled Cloud Storage bucket for file transfer jobs. |
| 2024-05-17 | Amazon S3 transfers over Google-managed private network |  | Storage Transfer Service now supports transferring data from Amazon S3 using a Google-managed private network with flat per-GiB egress pricing. |
| 2024-05-17 | Cloud Logging for Storage Transfer Service POSIX file system transfer support |  | Cloud Logging for Storage Transfer Service now supports logging for transfers involving POSIX file systems. |
| 2024-04-17 | Storage Transfer Service Azure Shared Key authentication |  | Storage Transfer Service added support for using Microsoft Azure Storage Shared Keys as an authentication method. |
| 2024-03-13 | Storage Transfer Service HDFS source support |  | Storage Transfer Service supports transferring data from cloud and on-premises HDFS sources to Cloud Storage as a generally available feature; Storage Transfer Service supports transferring data from cloud and on-premises Hadoop Distributed File System (HDFS) sources through a limited-release access process. |
| 2024-02-22 | Storage Transfer Service managed folders transfer |  | Storage Transfer Service supports preview transfers of managed Cloud Storage folders between buckets and copies folder permissions during transfer. |
| 2023-10-12 | Storage Transfer Service Amazon S3 CloudFront domain transfer support |  | Storage Transfer Service added support for transferring data from Amazon S3 via CloudFront domain endpoints. |
| 2023-07-25 | Event-driven transfers |  | Event-driven transfers enable serverless, real-time replication from AWS S3 to Cloud Storage and between Cloud Storage buckets. |
| 2023-06-12 | Cloud Monitoring integration for Storage Transfer Service |  | Storage Transfer Service adds GA support for Cloud Monitoring, enabling metrics on object and data transfer counts, transfer speeds, errors, and error codes. |
| 2023-06-12 | Secret Manager integration for transfer job source credentials |  | Storage Transfer Service adds Preview support for using Secret Manager secrets when creating transfer jobs from AWS S3 or Azure Storage. |
| 2023-04-25 | Storage Transfer Service source IP range publishing for AWS and Azure |  | Storage Transfer Service publishes the source IP ranges used for AWS and Azure transfers so source storage resources can be restricted to allowlist only those addresses. |
| 2023-04-14 | Metadata preservation for file system directory transfers |  | Storage Transfer Service now supports optional preservation of UID, GID, and mode metadata for folders and can recreate empty folders when transferring between file systems. |
| 2023-04-11 | Transfer from S3-compatible sources to Cloud Storage |  | Transfers from S3-compatible storage to Cloud Storage became generally available, including support for copying from AWS S3 and optionally controlling network routes to reduce egress charges. |
| 2023-04-06 | Storage Transfer Service Manifest support |  | Storage Transfer Service now supports Manifest files in general availability to transfer a specified list of objects, object versions, and files from cloud and on-premises sources; Storage Transfer Service provides preview support for Manifest-based transfers that allow moving specific lists of objects, object versions, and files from cloud or on-premises sources. |
| 2022-12-19 | Storage Transfer Service Transfer Job progress monitoring |  | Storage Transfer Service now offers preview support for monitoring Transfer Job progress with Cloud Monitoring, including near-real-time counts of objects and data copied. |
| 2022-12-15 | Storage Transfer Service file system transfer support |  | Storage Transfer Service now supports general availability for transferring data between file systems, including on-premises file systems and Filestore, via API, gcloud, or the Cloud console; Storage Transfer Service added transfer support between file systems. |
| 2022-12-09 | Storage Transfer Service event-driven transfers |  | Storage Transfer Service now offers preview support for event-driven, serverless, real-time replication transfers between AWS S3 and Cloud Storage and between Cloud Storage buckets. |
| 2022-10-07 | File system transfer multipart upload |  | Multipart upload support for transfers originating from file systems became generally available and is enabled by default, improving large-file transfer performance. |
| 2022-10-03 | Cloud Storage to file system export |  | Exporting data from Cloud Storage to file systems became generally available, enabling bidirectional movement of data between Cloud Storage and on-premises or edge file-system environments. |
| 2022-10-03 | Storage Transfer Service transferJobs.delete API method |  | The Storage Transfer Service REST API added the transferJobs.delete method, which deletes a transfer job and stops all current and future operations associated with that job. |
| 2022-09-07 | Storage Transfer Service S3-compatible source transfer to Cloud Storage (Preview) |  | Storage Transfer Service introduced preview support for transferring data from S3-compatible storage (including AWS S3) to Cloud Storage, including transfer routing controls to reduce egress charges. |
| 2022-08-30 | Multipart upload support for file system transfers |  | Storage Transfer Service now supports multipart uploads from file-system sources (preview) when the destination or intermediate bucket uses the Standard storage class. |
| 2022-07-18 | Object-level detailed logging for Storage Transfer Service transfers |  | Storage Transfer Service now provides GA detailed per-object logging in Cloud Logging for transfers involving AWS S3, Azure Blob Storage, ADLS Gen 2, and Cloud Storage. |
| 2022-06-29 | Storage Transfer Service metadata preservation |  | Metadata preservation is now generally available, enabling transfers to retain POSIX attributes and symlinks across POSIX filesystems and object ACLs, CMEK, temporary holds, and object creation time when moving objects between Cloud Storage buckets; Storage Transfer Service now supports preserving metadata during data transfers. |
| 2022-06-29 | Storage Transfer Service overwrite options |  | Storage Transfer Service now supports GA overwrite behavior controls via the overwriteWhen field, allowing destination files to be overwritten always, never, or only when ETags and checksums indicate a change. |
| 2022-04-19 | Storage Transfer Service overwriteWhen option |  | Storage Transfer Service now supports an overwriteWhen field that defines how existing destination files are handled during transfers, including NEVER, DIFFERENT, and ALWAYS overwrite modes. |
| 2022-04-12 | Storage Transfer Service transferAgent IAM role |  | Storage Transfer Service introduced the predefined roles/storagetransfer.transferAgent role to provide minimum required permissions for transfer agent communication and simplify permission assignment. |
| 2022-03-30 | Storage Transfer Service gcloud CLI management |  | Storage Transfer Service is generally available via the gcloud command-line tool for creating and managing transfer jobs, installing agents, and managing agent pools. |
| 2022-03-30 | Storage Transfer Service transfer authorize command |  | Storage Transfer Service added a gcloud transfer authorize command to inspect and grant required transfer permissions. |
| 2022-03-30 | Storage Transfer Service transfer manifests |  | Storage Transfer Service now supports transfer manifests. |
| 2022-03-23 | Storage Transfer Service Resource Location Restriction enforcement |  | Storage Transfer Service now enforces the Resource Location Restriction from Organization Policy Service to limit regions where transfer jobs can be created. |
| 2022-03-08 | Metadata preservation controls for Cloud Storage transfers |  | Storage Transfer Service now lets you choose whether to retain or discard object metadata, including ACLs, CMEK settings, temporary holds, and creation time, during Cloud Storage bucket transfers. |
| 2022-03-08 | Transfer-time storage class selection |  | Storage Transfer Service now supports setting the storage class to any supported value during transfer operations, enabling storage class changes at scale. |
| 2022-03-03 | Cloud Client Library support |  | Storage Transfer Service now supports Google Cloud Client Libraries as the recommended programmatic method for calling its APIs. |
| 2022-02-08 | Storage Transfer Service agent pools |  | Adds GA support for agent pools, allowing isolated groups of agents to act as source or sink endpoints in transfer jobs for concurrent multi-file-system and multi-data-center transfers; Storage Transfer Service now offers agent pool support, allowing isolated groups of agents to act as source or sink entities for concurrent transfers across multiple data centers and filesystems. |
| 2022-01-27 | POSIX metadata preservation for Storage Transfer Service |  | Storage Transfer Service adds preview support for preserving POSIX attributes and symlinks when transferring data to, from, and between POSIX filesystems. |
| 2022-01-27 | Storage Transfer Service filesystem transfer jobs with periodic sync |  | Adds preview support for API- and gcloud-managed transfer jobs that move and sync data between two filesystems on a scheduled basis, including migration from on-premises filesystems to Filestore. |
| 2021-12-13 | AWS Security Token Service integration for Amazon S3 transfers |  | Storage Transfer Service introduces general availability for AWS Security Token Service (STS) integration, enabling Amazon S3 transfers using temporary credentials instead of long-term AWS credentials. |
| 2021-12-13 | Storage Transfer Service gcloud command-line interface support |  | Support in Preview for creating and managing transfer jobs, including agent installation and agent pool lifecycle operations, using the gcloud command-line tool. |
| 2021-12-06 | Storage Transfer Service detailed object transfer logging |  | Preview support for detailed per-object logging of transfers between AWS S3, Azure Blob, ADLS Gen 2, and Cloud Storage, with logs emitted to Cloud Logging for verification and troubleshooting. |
| 2021-12-03 | Storage Transfer Service Azure ADLS Gen2 to Cloud Storage transfer support |  | Storage Transfer Service supports transferring data from Azure ADLS Gen 2 to Cloud Storage in general availability. |
| 2021-12-02 | Storage Transfer Service on-premises transfers API |  | The Storage Transfer Service API for managing on-premises transfer jobs is now generally available and supports RESTful automation of on-prem to Cloud transfer workflows. |
| 2021-11-01 | Cloud Storage to POSIX file system transfer |  | Storage Transfer Service preview support enables bidirectional transfer of data between Cloud Storage and POSIX file systems, including on-premises and edge environments. |
| 2021-07-26 | On-premises transfer management API |  | Storage Transfer Service added Public Preview support for managing on-premises transfer jobs through REST APIs to automate on-prem to Cloud data transfer workflows. |
| 2021-07-01 | AWS Security Token Service integration for AWS S3 transfers |  | Storage Transfer Service now offers preview support for AWS Security Token Service, enabling AWS S3 transfers using federated identity credentials without sharing long-term AWS credentials. |
| 2021-07-01 | On-premises transfer delete-from-source support |  | Storage Transfer Service now supports deleting source objects for on-premises data transfers (Generally Available). |
| 2021-06-18 | Storage Transfer Service Azure ADLS Gen 2 source support |  | Storage Transfer Service added Preview support for transferring data from Azure ADLS Gen 2 to Cloud Storage. |
| 2021-04-09 | Latest transfer operation status retrieval |  | Storage Transfer Service now provides generally available access to the status of the latest transfer operation. |
| 2021-03-31 | Event-driven transfer workflows |  | Storage Transfer Service supports event-driven transfer workflows, allowing transfers to be created without schedules and started on demand through transferJobs.run from an existing TransferJob configuration. |
| 2021-03-31 | Storage Transfer Service hourly schedules |  | Storage Transfer Service supports transfer job schedules with hourly frequency. |
| 2021-03-31 | Storage Transfer Service job schedule modification |  | Storage Transfer Service allows users to modify an existing transfer job's schedule; Storage Transfer Service adds preview support for modifying the schedule of an existing transfer job. |
| 2021-03-31 | Storage Transfer Service source and destination path specification |  | Storage Transfer Service supports specifying source and destination paths when creating a transfer. |
| 2021-01-20 | Transfer source and destination path specification |  | Storage Transfer Service added Preview support for specifying source and destination paths when creating a transfer. |
| 2020-11-09 | Storage Transfer Service hourly job scheduling |  | Storage Transfer Service offers preview support for scheduling transfer jobs on an hourly basis. |
| 2020-10-13 | Storage Transfer Service latest transfer operation status |  | Storage Transfer Service provides preview support for obtaining the status of the most recent transfer operation. |
| 2020-09-01 | Storage Transfer Service VPC Service Controls integration |  | Storage Transfer Service adds integration with VPC Service Controls for transfer operations; Storage Transfer Service added beta support for integration with VPC Service Controls. |
| 2020-07-31 | Storage Transfer Service Azure Blob Storage transfer source support |  | Storage Transfer Service supports transfers from Microsoft Azure Blob Storage. |
| 2020-03-31 | Storage Transfer Service on-premises transfer VPC Service Controls integration |  | Storage Transfer Service introduced a beta on-premises transfer integration with VPC Service Controls. |
| 2020-03-23 | Storage Transfer Service Azure Blob Storage support |  | Storage Transfer Service introduced Beta support for transfers from Microsoft Azure Blob Storage. |
| 2020-03-23 | Storage Transfer Service on-premises data transfer |  | Storage Transfer Service added generally available support for transferring data from on-premises sources. |
| 2020-03-20 | Pub/Sub notifications for external-to-Cloud Storage transfer jobs |  | The service now supports Pub/Sub notifications for transfer jobs that move data from external cloud providers to Cloud Storage. |
| 2020-03-16 | File selection by last modification time in transfer jobs |  | Transfer jobs can now filter and select files based on their last modification times. |
| 2020-03-09 | Custom job IDs in Storage Transfer Service |  | Storage Transfer Service jobs can now be created with custom job identifiers. |
| 2019-12-04 | On-premises transfer support in Storage Transfer Service |  | Storage Transfer Service added support for on-premises transfers, with this capability entering beta. |
| 2019-09-05 | Storage Transfer Service transferJobs scheduling fields |  | Clarified the API documentation for transferJobs scheduling parameters, specifically scheduleStartDate, scheduleEndDate, and startTimeOfDay. |
| 2019-03-20 | Storage Transfer Service IAM roles |  | New IAM roles were added to control permissions for Storage Transfer Service operations. |
| 2018-08-06 | Data sink access configuration |  | Configuration of access to Storage Transfer Service data sinks was updated in the documentation. |
| 2017-12-07 | Storage Transfer Service IAM permissions |  | Managing IAM permissions for controlling identities and their allowed actions in Storage Transfer Service. |
| 2017-09-18 | Storage Transfer Service access control |  | Configuring access control policies to determine who can use and manage Storage Transfer Service resources. |
| 2017-09-07 | Storage Transfer Service API documentation |  | The Storage Transfer Service API documentation was updated. |
| 2016-08-31 | Cloud Storage data source configuration |  | Storage Transfer Service documentation added clearer instructions for configuring a Cloud Storage data source. |
| 2016-08-25 | Storage Transfer Service data sink access configuration |  | Storage Transfer Service added documentation for configuring access credentials and permissions for a transfer job's data sink. |
| 2016-08-25 | Storage Transfer Service supported AWS regions |  | Storage Transfer Service documentation was updated to enumerate supported AWS regions. |
| 2016-04-04 | Storage Transfer Service job scheduling |  | Storage Transfer Service job scheduling documentation was updated to clarify API usage for scheduling transfer jobs. |
| 2016-02-23 | Storage Transfer Service recurring transfer scheduling |  | Storage Transfer Service supports configuring recurring transfer jobs from the Google Cloud Console. |
| 2015-12-12 | Storage Transfer Service transfer creation workflow |  | The transfer creation workflow in Storage Transfer Service was updated to reflect changes in creating transfer jobs. |
| 2015-09-23 | Storage Transfer Service API documentation updates |  | The Storage Transfer Service API documentation was updated with additional documentation content. |
| 2015-08-06 | Storage Transfer Service API enablement for non-UI users |  | Documentation now includes guidance for enabling the Storage Transfer Service API for users who do not rely on the Google Cloud Console interface. |
| 2015-08-05 | API Try It sections |  | API documentation now includes interactive "Try It" sections for testing API calls. |
| 2015-07-28 | Storage Transfer Service UI prefix support |  | The Storage Transfer Service user interface now documents support for using object prefixes during transfer configuration. |
| 2015-07-22 | Storage Transfer Service |  | Storage Transfer Service is a managed cloud-to-cloud data transfer service for moving data between storage locations. |

Source file slug: `storage-transfer-service.md`

