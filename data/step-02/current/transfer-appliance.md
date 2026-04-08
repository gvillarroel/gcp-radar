# Transfer Appliance

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 34
Unique features: 34

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2023-12-18 | Transfer Appliance data export appliance support |  | Transfer Appliance introduced GA support for its data export appliance in the US, enabling customers to place orders to export data from Cloud Storage buckets to a shipped appliance. |
| 2023-10-31 | Transfer Appliance gcloud CLI alpha support |  | Transfer Appliance added alpha-level support in the gcloud CLI via `gcloud alpha transfer appliances`, allowing users to view in-progress transfers, work with draft orders, and clone existing orders. |
| 2023-10-09 | Transfer Appliance ta mount/ta unmount CLI commands |  | Transfer Appliance introduced the `ta mount` and `ta unmount` CLI commands so users can mount and unmount their own NFS or CIFS shares on the appliance. |
| 2023-09-27 | Transfer Appliance console setup experience |  | A new Google Cloud Console-based setup flow was released to let users fully configure appliance permissions and obtain appliance credentials. |
| 2023-03-08 | ta check command-line tool |  | Introduces the `ta check` command-line tool for detecting and fixing configuration issues in Transfer Appliance and Edge Appliance deployments. |
| 2022-11-10 | SMB file share transfer support |  | Adds SMB file share support so users can transfer data using SMB with Transfer Appliance. |
| 2022-09-14 | Data verification log files |  | Transfer Appliance generates log files after each transfer that list successfully transferred and failed data for review. |
| 2022-09-09 | Remote Wipe |  | Transfer Appliance includes an optional Remote Wipe step in the return process to erase data on the appliance before it is returned to Google. |
| 2022-09-02 | Transfer Appliance lock/unlock |  | The lock/unlock feature secures a Transfer Appliance during transport by keeping data encrypted and inaccessible to third parties outside the organization. |
| 2022-08-12 | Transfer Appliance suspend mode |  | Suspend mode allows a Transfer Appliance to be paused before relocation, removing access to on-device data and suspending active transfers. |
| 2022-07-12 | Transfer Appliance TA7 appliance |  | A new Transfer Appliance size was introduced with the TA7 model, providing up to 7 TB storage in a smaller form factor and supporting both online and offline transfer modes. |
| 2022-06-29 | Transfer Appliance Cloud Monitoring integration |  | Transfer Appliance now exposes monitoring for appliance data usage and online transfer-enabled state via Google Cloud Monitoring. |
| 2022-06-16 | Transfer Appliance Cloud console order and management |  | Transfer Appliance can be ordered, viewed, tracked, and managed directly from the Google Cloud console, including order and appliance management. |
| 2021-06-02 | Transfer Appliance Cloud Setup Application |  | The Transfer Appliance Cloud Setup Application is a setup tool that collects user-provided configuration details and automatically configures Cloud permissions, a target Cloud Storage bucket, and a Cloud KMS key. |
| 2021-03-30 | Transfer Appliance version 2.2 | 2021-03-30 | Transfer Appliance version 2.2 was deprecated and replaced by Transfer Appliance version 4.0; deprecated on 2021-03-30. |
| 2019-04-11 | NFS-based HDFS data capture |  | Transfer Appliance now documents how to capture data from HDFS using NFS. |
| 2019-04-11 | Transfer Appliance HDFS capture via NFS |  | Transfer Appliance documentation added instructions for capturing data from HDFS using NFS. |
| 2018-06-26 | Multi-Appliance Serial Data Capture |  | Transfer Appliance now supports serial data capture across multiple appliances so captures can continue when data exceeds a single appliance's capacity. |
| 2018-06-26 | NFS share export for data capture |  | Transfer Appliance now supports using an NFS share as a supported method for data capture. |
| 2018-06-26 | Rehydration job completion time display in pending jobs |  | Transfer Appliance now displays the rehydration job time-to-completion in the Pending Jobs list. |
| 2018-06-26 | Rehydrator job status timestamps |  | Rehydrator job status now includes both start and end times for rehydration jobs. |
| 2018-06-26 | Rehydrator SMTP optional password |  | Transfer Appliance rehydrator SMTP configuration now permits an optional password. |
| 2018-06-26 | Transfer Appliance Capture Utility metadata preservation |  | Transfer Appliance Capture Utility now preserves file metadata by default during capture. |
| 2018-06-26 | Transfer Appliance Capture Utility metadata preservation by default |  | The Transfer Appliance Capture Utility now preserves file metadata by default during capture operations. |
| 2018-06-26 | Transfer Appliance data capture job cancellation |  | Transfer Appliance now supports cancelling data capture jobs. |
| 2018-06-26 | Transfer Appliance Data Integrity Check |  | Transfer Appliance software now performs data integrity checks at every stage of the data migration process. |
| 2018-06-26 | Transfer Appliance network usage monitoring in web UI |  | Transfer Appliance now supports monitoring network usage through its web-based user interface. |
| 2018-06-26 | Transfer Appliance NFS capture folder selection |  | Transfer Appliance now supports navigating to and selecting specific folders during an NFS capture. |
| 2018-06-26 | Transfer Appliance pre-shipment factory reset |  | Transfer Appliance supports performing a factory reset after an appliance is prepared for shipment to the Google upload facility. |
| 2018-06-26 | Transfer Appliance rehydration target path configuration |  | Transfer Appliance allows the target path to be configured while rehydrating uploaded data. |
| 2018-06-26 | Transfer Appliance Rehydrator storage class optimization |  | The Rehydrator now uses regional or multi-regional storage locations when building component objects for rehydrating files larger than 100 GB to avoid early deletion charges. |
| 2018-06-26 | Transfer Appliance staging bucket auto-creation |  | Preparing to ship a Transfer Appliance no longer requires users to manually create a staging bucket; staging is now handled automatically. |
| 2018-06-26 | Transfer Appliance symbolic link skipping |  | Transfer Appliance Capture Utility now supports skipping symbolic links when capturing files. |
| 2018-06-26 | Transfer Appliance Web UI disk status indicators |  | Disk status indicators are now available in the Settings menu of the Transfer Appliance Web User Interface. |

Source file slug: `transfer-appliance.md`

