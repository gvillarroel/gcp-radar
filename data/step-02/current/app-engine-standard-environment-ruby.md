# App Engine standard environment Ruby

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 110
Unique features: 99

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-17 | Ruby 4.0 runtime support |  | Ruby 4.0 runtime support is now generally available for App Engine standard; Ruby 4.0 runtime support is now available in preview for App Engine standard. |
| 2026-02-12 | App Engine standard to Cloud Run migration |  | Existing App Engine standard apps can be migrated to Cloud Run in preview using the `gcloud beta app migrate-to-run` command. |
| 2025-10-20 | TLS 1.2+ support in App Engine standard |  | App Engine standard now supports TLS version 1.2 and later with a corresponding secure cipher suite set in GA. |
| 2025-08-07 | TLS 1.1 and earlier support deprecation | March 2025 | Support for TLS 1.1 and earlier is deprecated in App Engine standard, with apps expected to use TLS 1.2+ and secure cipher suites; deprecated on March 2025. |
| 2025-06-17 | Ruby 3.4 runtime support |  | Ruby 3.4 runtime support is now generally available for App Engine standard; Ruby 3.4 runtime support is now available in preview for App Engine standard. |
| 2025-03-03 | Automatic scaling default max instances for new App Engine standard projects |  | For new projects created after March 2025, App Engine standard sets the automatic scaling default maximum instances to 20. |
| 2024-12-09 | Custom organization policies for Serverless VPC Access connectors |  | Custom organization policies for Serverless VPC Access connectors are now generally available and can be applied at project, folder, or organization scope. |
| 2024-07-31 | Ruby 3.3 runtime support |  | Ruby 3.3 is now generally available for App Engine standard; Ruby 3.3 runtime support is now available in preview for App Engine standard. |
| 2024-07-30 | Runtime lifecycle filtering in App Engine Console |  | The App Engine page in Google Cloud Console now supports filtering versions by runtime lifecycle stage and shows warning icons for lifecycle end-of-support states. |
| 2024-01-23 | App Engine Serverless VPC Access connector update settings |  | App Engine standard environments now support updating Serverless VPC Access connectors in general availability, including changes to machine type and minimum and maximum instance counts; App Engine standard environments now support updating Serverless VPC Access connectors in preview, including configuration of machine type and minimum and maximum instance counts. |
| 2023-04-14 | App Engine Ruby 3.2 runtime |  | The Ruby 3.2 runtime for App Engine standard environment is generally available; The Ruby 3.2 runtime for App Engine standard environment is available in preview. |
| 2022-12-13 | App Engine app-level default service account selection |  | App Engine now supports using any configured service account in the Cloud project as the app-level default service account when creating or updating applications. |
| 2022-11-01 | Build environment variables support |  | Build environment variables support is now generally available for App Engine standard environments; Adds support for build environment variables in App Engine standard environment deployments. |
| 2022-05-18 | Per-version user-managed service account for App Engine deployments |  | App Engine now supports specifying a user-managed service account for each app version during deployment. |
| 2022-05-04 | App Engine Ruby 3.0 runtime |  | The Ruby 3.0 runtime for App Engine standard environment is generally available; The Ruby 3.0 runtime for App Engine standard environment is available in preview. |
| 2022-03-24 | Serverless VPC Access connectors in Shared VPC host projects |  | Support for Serverless VPC Access connectors in Shared VPC host projects is generally available in App Engine standard environments. |
| 2021-11-03 | Serverless VPC Access egress settings |  | Egress settings for Serverless VPC Access are generally available, allowing control over routing external traffic through the connector; Egress settings for Serverless VPC Access are now available, enabling control of traffic to external destinations through the connector. |
| 2021-06-30 | Per-version user-managed service accounts for App Engine |  | Allows each App Engine version to be deployed with a user-managed service account so privileges can be assigned per version. |
| 2021-06-14 | and Taiwan |  | Adds App Engine availability in the us-west1, asia-southeast1, and asia-east1 regions. |
| 2021-06-14 | App Engine region expansion to Oregon |  | Adds App Engine availability in the us-west1, asia-southeast1, and asia-east1 regions. |
| 2021-06-14 | Singapore |  | Adds App Engine availability in the us-west1, asia-southeast1, and asia-east1 regions. |
| 2021-04-14 | Serverless VPC Access for Shared VPC |  | Enables Serverless VPC Access integration with Shared VPC for App Engine applications; Introduces beta support for using Serverless VPC Access with Shared VPC in App Engine. |
| 2021-04-13 | App Engine region expansion to Warsaw |  | Adds App Engine availability in the europe-central2 (Warsaw) region. |
| 2021-03-26 | CPU Utilization metric for App Engine standard environment |  | Introduces the CPU Utilization metric that reports average CPU usage across active App Engine instances. |
| 2020-11-18 | Ruby 2.6 and 2.7 runtimes generally available |  | Makes the Ruby 2.6 and Ruby 2.7 runtimes generally available for App Engine standard environment. |
| 2020-09-25 | Cloud Load Balancing ingress controls for App Engine |  | Adds support for network ingress controls so App Engine can receive requests only through Cloud Load Balancing. |
| 2020-07-08 | External HTTP(S) Load Balancing via Serverless network endpoint groups |  | Adds support for External HTTP(S) Load Balancing for App Engine through Serverless network endpoint groups. |
| 2020-07-06 | Ruby 2.6 and 2.7 runtime beta availability |  | Introduces beta availability of the Ruby 2.6 and Ruby 2.7 runtimes for App Engine standard environment. |
| 2020-06-08 | App Engine region expansion to Jakarta |  | Adds App Engine availability in the asia-southeast2 (Jakarta) region. |
| 2020-05-14 | App Engine resource labeling and BigQuery billing analysis |  | App Engine services can be labeled and their billing data exported to BigQuery so users can query detailed per-resource cost usage. |
| 2020-04-20 | App Engine regional availability in us-west4 |  | App Engine became available in the us-west4 (Las Vegas, NV) region. |
| 2020-03-13 | App Engine regional availability in asia-northeast3 |  | App Engine became available in the asia-northeast3 (Seoul) region. |
| 2020-03-06 | App Engine regional availability in us-west3 |  | App Engine became available in the us-west3 (Salt Lake City, Utah) region. |
| 2020-02-11 | App Engine region-based app URLs |  | App Engine app request URLs can now include a region ID to improve request routing and reliability. |
| 2020-02-11 | App Engine region-ID URL rollout for existing apps |  | Existing App Engine apps are migrated gradually to the region-ID URL format, with no required action when IDs are introduced. |
| 2020-02-06 | Project spending limits creation | 2020-02-06 | Creating new spending limits for projects is no longer supported; deprecated on 2020-02-06. |
| 2019-12-11 | Serverless VPC Access general availability |  | Serverless VPC Access reached general availability. |
| 2019-07-30 | AppCfg tooling and legacy standalone App Engine SDK | 2020-07-30 | The AppCfg tooling and legacy standalone App Engine SDK distributions (GoogleAppEngineLauncher.dmg, GoogleAppEngine.msi, google_appengine.zip) were deprecated with planned support removal; deprecated on 2020-07-30. |
| 2019-07-30 | Cloud SDK-based App Engine SDK functionality |  | App Engine SDK functionality is now delivered exclusively through the Cloud SDK. |
| 2019-06-12 | App Engine standard environment Ruby runtime |  | The Ruby runtime for App Engine standard environment entered Beta status. |
| 2019-04-18 | App Engine regional availability in asia-northeast2 |  | App Engine became available in the asia-northeast2 (Osaka, Japan) region. |
| 2019-04-15 | App Engine regional availability in europe-west6 |  | App Engine became available in the europe-west6 (Zurich) region. |
| 2018-10-22 | App Engine regional availability in asia-east2 |  | App Engine became available in the asia-east2 (Hong Kong) region. |
| 2018-07-10 | App Engine regional availability in us-west2 |  | App Engine became available in the us-west2 (Los Angeles) region. |
| 2018-05-15 | App Engine automatic scaling instance classification behavior |  | App Engine automatic scaling no longer exposes Resident vs Dynamic instances, labeling all scheduled instances as Dynamic. |
| 2018-05-15 | App Engine automatic scaling max instances setting |  | App Engine automatic scaling introduced a max instances setting to cap the total number of instances that can be scheduled. |
| 2018-05-15 | App Engine automatic scaling min instances setting |  | App Engine automatic scaling introduced a min instances setting to keep a minimum number of instances running. |
| 2018-05-15 | App Engine automatic scaling target CPU utilization setting |  | App Engine automatic scaling introduced a target CPU utilization setting to balance latency and cost. |
| 2018-05-15 | App Engine automatic scaling target throughput utilization setting |  | App Engine automatic scaling introduced a target throughput utilization setting to optimize instance startup based on concurrent requests. |
| 2017-12-14 | App Engine IAM-based deployment roles |  | App Engine improved deployment access control by clarifying IAM role usage for deploying apps with service accounts and predefined deployment roles. |
| 2017-10-31 | App Engine regional availability in asia-south1 |  | App Engine became available in the asia-south1 (Mumbai) region. |
| 2017-10-11 | App Engine firewall |  | App Engine firewall was announced as generally available. |
| 2017-09-13 | App Engine Admin API apps.authorizedDomains.list |  | The Admin API method `apps.authorizedDomains.list` for custom domain mapping became generally available. |
| 2017-09-13 | App Engine custom domain verification with gcloud domains verify |  | The `gcloud domains verify` command for mapping custom domains to App Engine apps became generally available. |
| 2017-09-13 | App Engine managed certificates for custom domains |  | App Engine added managed certificates for custom domains, automatically provisioning, renewing, and revoking SSL certificates when the domain is mapped. |
| 2017-09-05 | App Engine regional availability in southamerica-east1 |  | App Engine became available in the southamerica-east1 (São Paulo) region. |
| 2017-08-01 | App Engine regional availability in europe-west3 |  | App Engine became available in the europe-west3 (Frankfurt) region. |
| 2017-07-18 | App Engine regional availability in australia-southeast1 |  | App Engine became available in the australia-southeast1 (Sydney) region. |
| 2017-06-06 | App Engine regional expansion: australia-southeast1 |  | App Engine became available in the Australia-southeast1 (Sydney) region. |
| 2017-06-06 | App Engine regional expansion: europe-west2 |  | App Engine became available in the europe-west2 (London) region. |
| 2017-06-06 | Custom domains and SSL certificate management via Admin API and gcloud |  | The Admin API and gcloud CLI now support beta-level creation and management of custom domains and SSL certificates for App Engine. |
| 2017-05-09 | App Engine regional expansion: us-east4 |  | App Engine became available in the us-east4 (Northern Virginia) region. |
| 2016-10-27 | App Engine Channel service | 2017-10-31 | The Channel service was deprecated and marked for shutdown; deprecated on 2017-10-31. |
| 2016-10-27 | App Engine XMPP service | 2017-10-31 | The XMPP service was deprecated and marked for shutdown; deprecated on 2017-10-31. |
| 2016-08-01 | App Engine Admin API v1 general availability |  | Version 1 of the App Engine Admin API became generally available. |
| 2016-08-01 | App Engine platform version 1.9.42 |  | App Engine version 1.9.42 was released. |
| 2016-07-18 | App Engine cron task limit |  | The maximum cron tasks limit was increased to 250. |
| 2016-07-18 | App Engine dashboard per-URL error reporting |  | Server Error and Client Error metrics in the App Engine dashboard were updated to reflect status errors more accurately by URL. |
| 2016-07-18 | App Engine guided walkthrough in Cloud Console |  | A guided App Engine walkthrough was added in the Cloud Console with language selection and interactive tutorial launch. |
| 2016-07-18 | App Engine platform version 1.9.40 |  | App Engine version 1.9.40 was released. |
| 2016-07-18 | LeaseTasksByTag rate limit |  | LeaseTasksByTag requests were throttled to a maximum of 25 requests per second. |
| 2016-07-01 | Cloud Datastore pricing update |  | Cloud Datastore introduced a new pricing model that is now in effect. |
| 2016-05-25 | Cloud Datastore cross-group transaction version consistency |  | Cross-group transactions now return identical version numbers for all new or updated entities, regardless of entity group. |
| 2016-05-25 | URL Fetch invalid port error standardization |  | URL Fetch requests to disallowed ports now consistently return an INVALID_URL error. |
| 2016-05-02 | Ruby runtime availability in App Engine flexible environment |  | The Ruby runtime was added as an option in the App Engine flexible environment. |
| 2016-04-18 | OverQuota error detail enrichment |  | OverQuota exception messages now include error details when such details are available. |
| 2016-04-18 | Users API IAM role-based admin recognition |  | The Users API now treats project Owner, Editor, Viewer, and App Engine Admin roles, including group-derived membership, as admin privileges. |
| 2016-03-04 | Increased URL Fetch default quota for billed applications |  | The default URL Fetch quota was increased for billed applications. |
| 2016-02-17 | Allowed URL path forwarding for /form |  | The /form URL path is now allowed and forwarded to applications. |
| 2016-02-03 | Managed VM container build backend selection |  | App Engine Managed VMs now let developers choose between building deployment containers on a transient Compute Engine VM or using Cloud Build via gcloud app/use_cloud_build configuration. |
| 2016-01-14 | Google Group project membership for App Engine |  | App Engine now supports adding a Google Group as a project member so group members inherit the group’s App Engine access level. |
| 2015-11-30 | Endpoints API discoverable flag |  | Endpoints API users can set the discoverable boolean parameter on the @Api annotation to disable API discovery metadata for an API. |
| 2015-11-30 | Task Queue depth calculation suppression |  | Queue depth is no longer calculated or stored for non-existent queues, queues marked for deletion, or when queue table outages occur. |
| 2015-11-30 | Task Queue push requests Content-Length header for empty payloads |  | Push Queue requests without a payload now include a Content-Length header set to 0. |
| 2015-09-25 | App Engine Ruby runtime/library version 1.9.27 |  | The App Engine Ruby environment was updated to version 1.9.27. |
| 2015-09-25 | Datastore support |  | Datastore support is available for App Engine Standard Environment Ruby. |
| 2015-09-25 | Default unlimited daily budget for newly billed applications |  | Newly enabled billing applications now default to an unlimited daily budget with optional budget ceilings configured in app settings. |
| 2015-09-25 | Faceted Search |  | Faceted Search has reached general availability for App Engine. |
| 2015-08-27 | App Engine Ruby runtime/library version 1.9.26 |  | The App Engine Ruby environment was updated to version 1.9.26. |
| 2015-08-27 | Elastic provisioning based on VM and application metrics |  | Applications can now provision for current load and configure elastic provisioning using both VM-level and application-level metrics. |
| 2015-08-27 | MVM log context view |  | A new show-in-context menu enables sorting MVM application logs by thread_id or request_id fields. |
| 2015-08-27 | OAuth2 authentication for Remote API |  | Remote API access now supports OAuth2 credentials. |
| 2015-08-27 | oauth2client library version 1.4.2 |  | The oauth2client library was upgraded to version 1.4.2. |
| 2015-08-27 | URLFetch payload size error handling |  | URLFetch now raises RequestPayloadTooLargeException when request payloads exceed allowed limits. |
| 2015-08-14 | Admin Console redirection to Cloud Console |  | Admin Console menus now redirect to Cloud Console while selected services, such as Admin Logs, remain available. |
| 2015-08-14 | Datastore empty list property support |  | Datastore now supports properties that can represent an empty list. |
| 2015-08-14 | PyAMF version 0.7.2 Beta |  | PyAMF 0.7.2 Beta was added to the App Engine Ruby environment. |
| 2015-08-14 | Ruby runtime version 1.9.25 |  | The App Engine standard environment Ruby runtime was updated to version 1.9.25. |
| 2015-08-14 | Task queue retry behavior for retry_limit 0 |  | Tasks in queues configured with a retry limit of zero are no longer retried after failure. |

Source file slug: `app-engine-standard-environment-ruby.md`

