# Firestore

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 102
Unique features: 89

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-23 | Firestore regional and multi-regional API endpoints |  | Firestore API requests can be routed to regional or multi-regional endpoints so traffic, storage, and processing stay in the database's location. |
| 2026-03-23 | Private Service Connect support for Firestore API endpoints |  | Firestore supports using Private Service Connect regional endpoints and backends to connect to its regional and multi-regional API endpoints. |
| 2026-03-05 | Firestore Enterprise edition Native mode |  | Firestore Enterprise edition Native mode is supported in all supported regions; Firestore Enterprise edition Native mode is available alongside the Pipeline operations interface in preview. |
| 2026-02-17 | MCP use control with organization policies | 2026-03-17 | The gcp.managed.allowedMCPServices organization policy constraint for controlling MCP use is deprecated in favor of IAM deny policies; deprecated on 2026-03-17. |
| 2026-02-10 | Firestore remote MCP server |  | The Firestore remote MCP server lets AI applications interact with documents stored in a Firestore database. |
| 2026-02-02 | Firestore databases page status column |  | The Firestore databases page in the Google Cloud console now shows database status values such as Ready, Cloning, Restoring from backup, Deleted, and Failed. |
| 2026-01-15 | Pipeline operations query interface |  | Pipeline operations is a Firestore query interface that supports complex expressions and functions such as min, max, substring, regex_match, and array_contains_all. |
| 2025-10-27 | Database clone |  | Firestore database cloning is available at the General Availability level; Firestore databases can be cloned into a new database from a selected timestamp. |
| 2025-09-23 | Gemini CLI extension for Firestore |  | The dedicated Gemini CLI extension for Firestore can query databases and update data from the command line. |
| 2025-09-02 | Query insights |  | Query insights shows query performance metrics for a Firestore database; Query insights shows query performance metrics for a Firestore database. |
| 2025-04-22 | Committed use discounts |  | Committed use discounts provide discounted pricing for Firestore read, write, and delete operations in exchange for a one-year or three-year commitment. |
| 2025-04-09 | Firestore support in Database Center |  | Firestore resources can be tracked in Database Center fleet inventory and resource tables, with health monitoring for backup and point-in-time recovery issues; Firestore is supported by Database Center, which can surface the No automated backup policy health issue. |
| 2025-03-24 | nam7 multi-region support |  | Cloud Firestore supports the nam7 United States (Central and East) multi-region, composed of us-central1 and us-east4. |
| 2025-03-04 | europe-north2 region support |  | Firestore supports the europe-north2 Stockholm region. |
| 2024-12-06 | Organization Policy Service custom constraints for Firestore |  | Firestore resources can be managed using Organization Policy Service custom constraints. |
| 2024-12-05 | Client-side traces |  | Firestore can use client-side traces in Java and Node.js to monitor performance. |
| 2024-11-22 | Reliability recommender |  | Active Assist provides recommendations and insights to improve database reliability. |
| 2024-11-18 | northamerica-south1 region support |  | Firestore supports the northamerica-south1 Queretaro region. |
| 2024-10-31 | Cloud Monitoring dashboard |  | The Google Cloud console includes a monitoring dashboard for each Firestore database. |
| 2024-10-01 | Customer-managed encryption keys (CMEK) |  | Firestore supports customer-managed encryption keys for protecting data. |
| 2024-09-05 | Vector search |  | Firestore supports K-nearest neighbor vector searches, including inequality filters, returned vector distance, and distance thresholds. |
| 2024-07-29 | Firestore range and inequality filters on multiple fields |  | Firestore queries can apply range and inequality filters across multiple fields; Firestore queries can use range and inequality filters on multiple fields in a single query. |
| 2024-06-28 | Firestore scheduled backups |  | Firestore supports scheduled backups; Scheduled backups are now available in Preview. |
| 2024-04-29 | Firestore location support |  | Firestore supports the us-south1 Dallas region; Firestore supports additional regions across Africa, Europe, South America, and the United States. |
| 2024-04-05 | Firestore customer-managed encryption keys |  | Firestore supports customer-managed encryption keys (CMEK). |
| 2024-04-03 | Firestore K-nearest neighbor vector search |  | Firestore supports K-nearest neighbor (KNN) vector search. |
| 2024-03-27 | Firestore Query Explain |  | Firestore Query Explain returns query plans, billing statistics, and performance statistics for queries. |
| 2024-01-29 | Firestore events for Cloud Functions (2nd gen) |  | Firestore and Eventarc events are supported for Cloud Functions (2nd gen); Firestore can emit Firestore events for Cloud Functions (2nd gen). |
| 2024-01-10 | Firestore multiple databases per project |  | Firestore supports multiple databases per project. |
| 2023-12-20 | Firestore Key Visualizer index scans |  | Key Visualizer supports index scans for Firestore. |
| 2023-12-15 | Firestore aggregation functions |  | You can assemble and run sum() and avg() aggregation queries in the Google Cloud console; The sum() and average() aggregation functions are now available. |
| 2023-12-15 | Firestore non-default database management |  | You can create and delete non-default databases in the Google Cloud console. |
| 2023-11-10 | Firestore point-in-time recovery (PITR) |  | Firestore point-in-time recovery protects against accidental deletion or writes and is generally available; Firestore point-in-time recovery protects against accidental deletion or writes and is available in Preview. |
| 2023-10-18 | Firestore collection-level index exemptions |  | You can add collection-level exemptions for all fields in a collection group that do not require indexing. |
| 2023-09-25 | Firestore regional availability |  | Firestore is now available in europe-west9 (Paris), me-central1 (Doha), and me-west1 (Tel Aviv); Firestore is now available in the northamerica-northeast2 (Toronto) region. |
| 2023-09-11 | Firestore database usage dashboard |  | The Google Cloud console now provides a usage dashboard for each Firestore database. |
| 2023-08-25 | Firestore multi-database console support |  | You can view and list multiple databases in the Google Cloud console, and the feature is in Preview. |
| 2023-08-07 | Firestore Key Visualizer heatmaps |  | You can visualize heatmap patterns for index keys to help predict workload patterns, and the feature is in Preview. |
| 2023-07-07 | Firestore multiple databases |  | Firestore supports multiple databases within a project. |
| 2023-05-23 | Firestore support for asia-south2 region |  | Firestore is available in the asia-south2 (Delhi) region. |
| 2023-04-24 | count() queries |  | Firestore supports aggregation count() queries; Firestore supports aggregation count() queries. |
| 2023-04-17 | Eventarc events for Cloud Functions (2nd gen) |  | Firestore can emit Eventarc events for Cloud Functions (2nd gen). |
| 2023-04-14 | Firestore regional endpoints |  | Firestore provides regional endpoints for connecting to regional instances. |
| 2023-03-24 | Firestore OR queries |  | Firestore supports OR queries. |
| 2023-03-13 | Firestore support for europe-west4 region |  | Firestore is available in the europe-west4 (Netherlands) region. |
| 2022-12-19 | Firestore support for australia-southeast2 region |  | Firestore is available in the australia-southeast2 (Melbourne) region. |
| 2022-10-11 | Firestore TTL policies |  | Firestore supports time-to-live (TTL) policies for automatic document expiration; Firestore supports time-to-live (TTL) policies for automatic document expiration. |
| 2022-08-22 | Firestore query builder |  | Firestore includes a query builder in the console for filtering and comparing documents. |
| 2022-08-22 | Firestore table view |  | Firestore includes a table view in the console data section. |
| 2022-06-01 | Firestore VPC Service Controls |  | Firestore can be protected with VPC Service Controls; Firestore can be protected with VPC Service Controls. |
| 2022-04-28 | datastore.databases.getMetadata IAM permission |  | The datastore.databases.getMetadata permission can be included in custom IAM roles for Firestore. |
| 2021-12-15 | Key Visualizer for Firestore |  | Key Visualizer provides workload and key access visualization for Firestore. |
| 2021-11-12 | Firebase App Check for Firestore |  | Firebase App Check is supported for the Firestore iOS and Android SDKs. |
| 2021-11-04 | Firestore Data Access audit logs |  | Firestore supports DATA_READ and DATA_WRITE Data Access audit logs; Firestore supports DATA_READ and DATA_WRITE Data Access audit logs in Preview. |
| 2021-09-09 | Firestore triggers for Cloud Functions |  | Firestore triggers are supported for Cloud Functions. |
| 2021-06-15 | Firestore custom IAM roles |  | Firestore supports custom Identity and Access Management roles. |
| 2021-06-14 | Firestore locations |  | Firestore added support for the asia-southeast1, us-west1, and asia-east1 locations. |
| 2021-04-13 | Firestore europe-central2 region |  | Firestore added support for the europe-central2 region. |
| 2021-02-25 | Firestore connector for Workflows |  | A connector lets Workflows call Firestore operations directly. |
| 2021-02-09 | Firestore C++ support |  | Firestore provides beta support for C++ through the Firebase C++ SDK. |
| 2020-10-28 | Firestore import and export operations in Cloud Console |  | You can start Firestore import and export operations from Google Cloud Console. |
| 2020-09-30 | not-equals (!=) query operator |  | Firestore supports the not-equals (!=) query operator. |
| 2020-09-30 | not-in query operator |  | Firestore supports the not-in query operator. |
| 2020-09-16 | Firestore managed billing report label |  | The `goog-firestoremanaged` billing report label lets you view costs for Firestore import and export operations. |
| 2020-09-11 | Firestore Security Rules viewer in Cloud Console |  | You can view Firestore Security Rules in the Cloud Console. |
| 2020-06-22 | Firestore usage dashboard |  | The Google Cloud console includes a Firestore usage dashboard. |
| 2020-06-08 | Firestore region support in asia-southeast2 (Jakarta) |  | Firestore is available in the asia-southeast2 region in Jakarta. |
| 2020-04-20 | Firestore region support in us-west4 (Las Vegas) |  | Firestore is available in the us-west4 region in Las Vegas. |
| 2020-03-11 | Firestore region support in asia-northeast3 (Seoul) |  | Firestore is available in the asia-northeast3 region in Seoul. |
| 2020-03-11 | Firestore region support in us-west3 (Salt Lake City) |  | Firestore is available in the us-west3 region in Salt Lake City. |
| 2019-11-07 | array-contains-any query operator |  | Firestore supports the array-contains-any query operator. |
| 2019-11-07 | in query operator |  | Firestore supports the in query operator. |
| 2019-07-08 | Active Connections metric |  | Cloud Firestore added the Active Connections metric to Stackdriver Monitoring. |
| 2019-07-08 | Snapshot Listeners metric |  | Cloud Firestore added the Snapshot Listeners metric to Stackdriver Monitoring. |
| 2019-05-07 | Collection group queries |  | Cloud Firestore supports queries across all collections that share the same collection ID. |
| 2019-04-18 | Cloud Firestore locations |  | Cloud Firestore added support for the asia-northeast2 regional location in Osaka; Cloud Firestore added support for the europe-west6 regional location in Zürich. |
| 2019-03-28 | Increment operation |  | Cloud Firestore supports incrementing or decrementing a numeric field by a specified amount. |
| 2019-01-31 | Cloud Firestore SLA |  | Cloud Firestore's SLA became available for regional and multi-region instances. |
| 2018-10-29 | Cloud Firestore emulator |  | Cloud Firestore added a local emulator for development and testing. |
| 2018-08-09 | Array transforms |  | Cloud Firestore supports arrayUnion() and arrayRemove() for directly modifying array field values. |
| 2018-08-09 | Array-contains queries |  | Cloud Firestore supports queries that match documents containing a specific array value. |
| 2018-08-08 | Cloud Firestore in Datastore mode |  | Cloud Firestore can be created in Datastore mode to use Datastore client libraries on Cloud Firestore's storage layer with improved consistency. |
| 2018-08-08 | Cloud Firestore management in Google Cloud console |  | Cloud Firestore instances can be managed from the Google Cloud console. |
| 2018-08-08 | Document import and export |  | Cloud Firestore supports importing and exporting documents. |
| 2018-08-08 | Single-field index exemptions |  | Cloud Firestore supports exempting specific fields from automatic indexing. |
| 2018-03-29 | Cloud Firestore Security Rules getAfter() function |  | Cloud Firestore Security Rules support getAfter() to validate data during atomic operations. |
| 2018-02-23 | Cloud Firestore Security Rules query-based access control |  | Cloud Firestore Security Rules can evaluate query requests and enforce access based on query properties such as limit and orderBy; Cloud Firestore Security Rules can restrict reads and writes based on query parameters. |
| 2018-02-08 | Cloud Firestore server client libraries |  | Cloud Firestore provides server client libraries for C#, PHP, and Ruby. |
| 2017-10-03 | Cloud Firestore |  | Cloud Firestore entered beta release. |

Source file slug: `firestore.md`

