# App Engine standard environment Go

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 173
Unique features: 105

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-12 | Go 1.26 runtime |  | The App Engine standard environment supports deploying applications with the Go 1.26 runtime; The App Engine standard environment supports deploying applications with the Go 1.26 runtime. |
| 2026-02-12 | App Engine to Cloud Run migration |  | App Engine standard environment apps can be migrated to Cloud Run with the gcloud beta app migrate-to-run command. |
| 2025-10-20 | TLS 1.2+ support |  | App Engine standard environment supports TLS 1.2 and later with a secure set of cipher suites; App Engine standard environment supports TLS 1.2 and later with a secure set of cipher suites. |
| 2025-08-21 | Go 1.25 runtime |  | The App Engine standard environment supports deploying applications with the Go 1.25 runtime; The App Engine standard environment supports deploying applications with the Go 1.25 runtime. |
| 2025-08-07 | TLS 1.1 and earlier support | March 2025 | Older TLS protocol support allows App Engine standard environment applications to accept TLS 1.1 and earlier connections; deprecated on March 2025. |
| 2025-07-30 | Go 1.24 runtime |  | The App Engine standard environment supports deploying applications with the Go 1.24 runtime; The App Engine standard environment supports deploying applications with the Go 1.24 runtime. |
| 2025-03-03 | Automatic scaling max_instances default |  | New App Engine standard environment projects default automatic scaling max_instances to 20 for deployments unless overridden in app.yaml. |
| 2025-03-03 | Go 1.23 runtime |  | The App Engine standard environment supports deploying applications with the Go 1.23 runtime; The App Engine standard environment supports deploying applications with the Go 1.23 runtime. |
| 2024-12-09 | Custom organization policies for Serverless VPC Access connectors |  | Custom organization policies can govern Serverless VPC Access connectors at the project, folder, or organization level. |
| 2024-07-30 | Runtime lifecycle stage filtering |  | The Google Cloud console can filter App Engine versions by runtime lifecycle stage and show warnings for versions nearing or past support milestones. |
| 2024-03-26 | Go 1.22 runtime |  | The App Engine standard environment supports deploying applications with the Go 1.22 runtime; The App Engine standard environment supports deploying applications with the Go 1.22 runtime. |
| 2024-01-23 | Serverless VPC Access connector update |  | Serverless VPC Access connectors can be updated to change machine type and minimum or maximum instance counts; Serverless VPC Access connectors can be updated to change machine type and minimum or maximum instance counts. |
| 2023-09-14 | Go 1.21 runtime |  | The App Engine standard environment supports deploying applications with the Go 1.21 runtime; The App Engine standard environment supports deploying applications with the Go 1.21 runtime. |
| 2023-04-27 | Search API for second-generation runtimes |  | The App Engine Search API is available as a legacy bundled service for second-generation runtimes through the Go services SDK. |
| 2023-03-24 | Go 1.20 runtime |  | The App Engine standard environment supports deploying applications with the Go 1.20 runtime; The App Engine standard environment supports deploying applications with the Go 1.20 runtime. |
| 2023-01-17 | Go 1.18 runtime |  | The App Engine standard environment supports deploying applications with the Go 1.18 runtime; The App Engine standard environment supports deploying applications with the Go 1.18 runtime. |
| 2023-01-17 | Go 1.19 runtime |  | The App Engine standard environment supports deploying applications with the Go 1.19 runtime; The App Engine standard environment supports deploying applications with the Go 1.19 runtime. |
| 2022-12-13 | App-level default service account selection |  | App Engine applications can use any configured project service account as the app-level default service account during creation and updates. |
| 2022-11-01 | Build environment variables |  | App Engine standard environment supports setting build environment variables for application builds; App Engine standard environment supports setting build environment variables for application builds. |
| 2022-05-18 | Per-version user-managed service account |  | Each App Engine version can be deployed with a specified user-managed service account; Each App Engine version can be deployed with a specified user-managed service account. |
| 2022-04-13 | Legacy bundled services for Go 1.12+ |  | Legacy bundled App Engine services are available for Go 1.12+ through language-idiomatic libraries. |
| 2022-03-24 | Shared VPC host project support for Serverless VPC Access connectors |  | Serverless VPC Access connectors can be configured in Shared VPC host projects for App Engine workloads; Serverless VPC Access connectors can be configured in Shared VPC host projects for App Engine workloads. |
| 2021-11-29 | Go 1.16 runtime |  | The App Engine standard environment supports deploying applications with the Go 1.16 runtime; The App Engine standard environment supports deploying applications with the Go 1.16 runtime. |
| 2021-11-03 | Serverless VPC Access egress settings |  | Serverless VPC Access egress settings control whether traffic to external destinations is routed through the connector; Serverless VPC Access egress settings control whether traffic to external destinations is routed through the connector. |
| 2021-09-27 | Legacy App Engine APIs for second-generation runtimes |  | Many legacy App Engine APIs are available to select second-generation runtimes for Go 1.12+ through language-idiomatic libraries. |
| 2021-06-14 | Regional availability |  | App Engine standard environment is available in additional Google Cloud regions; App Engine standard environment is available in additional Google Cloud regions. |
| 2021-03-26 | CPU Utilization metric |  | App Engine standard environment provides a CPU Utilization metric showing average CPU usage across active instances. |
| 2021-03-11 | Go 1.15 runtime |  | The App Engine standard environment supports deploying applications with the Go 1.15 runtime. |
| 2020-09-25 | Network ingress controls |  | Network ingress controls can restrict App Engine applications to receive only requests routed through Cloud Load Balancing. |
| 2020-08-25 | Go 1.14 runtime |  | The App Engine standard environment supports deploying applications with the Go 1.14 runtime; The App Engine standard environment supports deploying applications with the Go 1.14 runtime. |
| 2020-07-08 | External HTTP(S) Load Balancing via serverless NEG |  | App Engine can use External HTTP(S) Load Balancing through serverless network endpoint groups, including Cloud CDN support. |
| 2020-06-11 | Go 1.13 runtime |  | The App Engine standard environment supports deploying applications with the Go 1.13 runtime; App Engine standard environment supports the Go 1.13 runtime. |
| 2020-05-14 | App Engine resource labels for billing analysis |  | App Engine services can be labeled so billing exports to BigQuery can be analyzed at a finer resource level. |
| 2020-04-20 | Regional availability: us-west4 |  | App Engine standard environment is available in the us-west4 region (Las Vegas, NV). |
| 2020-03-13 | Regional availability: asia-northeast3 |  | App Engine standard environment is available in the asia-northeast3 region (Seoul). |
| 2020-03-06 | Regional availability: us-west3 |  | App Engine standard environment is available in the us-west3 region (Salt Lake City, Utah). |
| 2020-02-11 | Region ID in appspot URLs |  | App Engine app URLs can include a region ID in the r.appspot.com hostname for more efficient request routing. |
| 2019-12-11 | Serverless VPC Access |  | Serverless VPC Access enables App Engine services to connect to resources in a VPC network. |
| 2019-07-30 | AppCfg tooling | 2020-07-30 | AppCfg tooling is the legacy App Engine deployment and administration toolset; deprecated on 2020-07-30. |
| 2019-07-30 | Legacy standalone App Engine SDK | 2020-07-30 | The legacy standalone App Engine SDK is the older downloadable SDK distribution for App Engine development tools; deprecated on 2020-07-30. |
| 2019-06-27 | Go 1.9 runtime deployments | 2019-10-01 | App Engine standard environment allows deployment of applications that use the Go 1.9 runtime; deprecated on 2019-10-01. |
| 2019-06-27 | Go 1.9 runtime support | 2019-06-27 | App Engine standard environment supports running applications on the Go 1.9 runtime; deprecated on 2019-06-27. |
| 2019-05-16 | Go 1.12 runtime |  | App Engine standard environment supports the Go 1.12 runtime; App Engine standard environment supports the Go 1.12 runtime. |
| 2019-04-18 | Regional availability: asia-northeast2 |  | App Engine standard environment is available in the asia-northeast2 region (Osaka, Japan). |
| 2019-04-15 | Regional availability: europe-west6 |  | App Engine standard environment is available in the europe-west6 region (Zurich, Switzerland). |
| 2019-03-20 | Go 1.11 runtime | 2026-01-31 | The Go 1.11 runtime allows existing App Engine standard environment applications to continue running even though new deployments are no longer supported; App Engine standard environment supports the Go 1.11 runtime; deprecated on 2026-01-31. |
| 2018-10-22 | Regional availability: asia-east2 |  | App Engine standard environment is available in the asia-east2 region (Hong Kong). |
| 2018-08-01 | Go 1.6 runtime deployments | 2018-11-01 | App Engine standard environment allows deployment of applications that use the Go 1.6 runtime; deprecated on 2018-11-01. |
| 2018-08-01 | Go 1.6 runtime support | 2018-08-01 | App Engine standard environment supports running applications on the Go 1.6 runtime; deprecated on 2018-08-01. |
| 2018-08-01 | Go 1.8 runtime deployments | 2018-11-01 | App Engine standard environment allows deployment of applications that use the Go 1.8 runtime; deprecated on 2018-11-01. |
| 2018-07-10 | Regional availability: us-west2 |  | App Engine standard environment is available in the us-west2 region (Los Angeles). |
| 2018-07-03 | Local development server process ID output |  | The local development server prints the process ID of the running process on startup to aid debugging. |
| 2018-06-26 | Go 1.9 runtime |  | App Engine standard environment supports the Go 1.9 runtime and uses it as the default Go runtime; App Engine standard environment supports the Go 1.9 runtime. |
| 2018-05-15 | Automatic scaling max instances setting |  | Automatic scaling supports a max instances setting to cap the total number of scheduled instances. |
| 2018-05-15 | Automatic scaling min instances setting |  | Automatic scaling supports a min instances setting to keep a minimum number of instances running. |
| 2018-05-15 | Automatic scaling resident instances removal |  | Automatic scaling no longer uses the resident instances label and instead labels all auto-scaled instances as dynamic. |
| 2018-05-15 | Automatic scaling scheduler upgrade |  | App Engine automatic scaling was upgraded to improve scheduling efficiency and reduce instance costs and loading requests. |
| 2018-05-15 | Automatic scaling target CPU utilization setting |  | Automatic scaling supports a target CPU utilization setting to tune the balance between latency and cost. |
| 2018-05-15 | Automatic scaling target throughput utilization setting |  | Automatic scaling supports a target throughput utilization setting to tune when new instances are started for concurrent requests. |
| 2017-11-15 | dev_appserver.py Delve debugging flag |  | Dev_appserver.py supports the --go_debugging flag to enable Delve debugging for Go apps. |
| 2017-11-15 | goapp serve Delve debugging flag |  | Goapp serve supports the -debug flag to enable Delve debugging. |
| 2017-10-31 | Regional availability: asia-south1 |  | App Engine standard environment is available in the asia-south1 region (Mumbai, India). |
| 2017-10-25 | Go 1.8 runtime |  | App Engine standard environment supports the Go 1.8 runtime and uses it as the default Go runtime. |
| 2017-10-11 | App Engine firewall |  | App Engine firewall provides traffic filtering controls for App Engine applications; App Engine firewall lets you control access to applications with firewall rules. |
| 2017-09-13 | Custom domain mapping commands and Admin API |  | App Engine provides generally available gcloud commands and Admin API methods for verifying and mapping custom domains. |
| 2017-09-13 | Managed certificates for custom domains |  | App Engine can automatically provision, renew, and revoke SSL certificates for mapped custom domains. |
| 2017-09-05 | Regional availability: southamerica-east1 |  | App Engine standard environment is available in the southamerica-east1 region (São Paulo, Brazil). |
| 2017-08-09 | App Engine Go SDK |  | The App Engine Go SDK provides local development and deployment tooling for App Engine Go applications; The App Engine Go SDK provides local development and deployment tooling for App Engine Go applications. |
| 2017-08-09 | Go 1.8 context package support |  | The Go 1.8 runtime uses the standard library context package when creating App Engine contexts. |
| 2017-08-01 | App Engine region availability |  | App Engine standard environment became available in the europe-west3 region; App Engine standard environment became available in the australia-southeast1 region. |
| 2017-06-27 | Go 1.8 runtime support | 2018-08-01 | App Engine standard environment supports running applications on the Go 1.8 runtime; App Engine standard environment added beta support for deploying applications with the Go 1.8 runtime; deprecated on 2018-08-01. |
| 2017-06-06 | Custom domain and SSL certificate management |  | The Admin API and gcloud tool added beta support for creating and managing custom domains and SSL certificates. |
| 2017-05-22 | Go runtime |  | The App Engine standard Go runtime provides managed execution for Go applications; The App Engine standard Go runtime provides managed execution for Go applications. |
| 2017-05-22 | Go runtime GOROOT mapping |  | App Engine maps Go api_version values to a specific GOROOT directory for runtime selection; App Engine maps Go api_version values to a specific GOROOT directory for runtime selection. |
| 2016-10-27 | Channel service | 2017-10-31 | The Channel service provides real-time server-to-client messaging for App Engine applications; deprecated on 2017-10-31. |
| 2016-10-27 | XMPP service | 2017-10-31 | The XMPP service enables App Engine applications to send and receive XMPP messages; deprecated on 2017-10-31. |
| 2016-08-01 | App Engine Admin API |  | The App Engine Admin API provides programmatic management of App Engine applications and resources. |
| 2016-08-01 | Go 1.12+ runtime support |  | The Go 1.12+ runtime lets App Engine standard environment run applications on supported Go 1.12 and later runtimes. |
| 2016-07-18 | App Engine dashboard error metrics |  | The App Engine dashboard provides more accurate per-URL server and client error reporting. |
| 2016-07-18 | Cron task limit |  | App Engine cron supports up to 250 scheduled tasks per application. |
| 2016-05-25 | Go SDK release tag support |  | The App Engine Go SDK uploads all required Go files and aligns development release tags with typical Go 1.6 builds. |
| 2016-05-25 | URL Fetch error handling |  | URL Fetch now consistently returns INVALID_URL for requests to ports outside the permitted ranges. |
| 2016-04-18 | Mail service quota increase requests | 2016-04-18 | The App Engine mail service previously allowed customers to request quota increases for sending mail; deprecated on 2016-04-18. |
| 2016-04-18 | OverQuota error details |  | OverQuota exceptions now include available error details in their messages. |
| 2016-04-18 | Users API IAM role support |  | The App Engine Users API recognizes IAM roles and Google Group membership when determining admin access. |
| 2016-03-24 | Dependency vendoring support |  | The App Engine Go SDK supports vendoring external dependencies for Go applications. |
| 2016-03-04 | URL Fetch quota |  | Billed App Engine applications received a higher default quota for URL Fetch. |
| 2016-02-17 | Reserved path forwarding |  | App Engine now allows the /form URL path to be forwarded to applications. |
| 2016-02-03 | Go runtime response compression |  | The Go runtime compresses responses to reduce bandwidth usage for some applications. |
| 2016-01-14 | Google Groups access support |  | App Engine supports granting application access through Google Groups added to a project. |
| 2015-11-30 | Endpoints API discovery toggle |  | Endpoints API supports a discoverable boolean on the @Api annotation to disable API discovery. |
| 2015-11-30 | Task Queue depth calculation |  | Task Queue depth calculation now skips non-existent queues, queues marked for deletion, and queue table outage scenarios. |
| 2015-11-30 | Task Queue push request Content-Length header |  | Push queue requests for Task Queue tasks without payload now include a Content-Length header set to 0. |
| 2015-10-29 | Search geo filtering |  | Search queries have improved geo filtering accuracy. |
| 2015-09-25 | Datastore Faceted Search |  | Datastore Faceted Search became generally available. |
| 2015-09-25 | Datastore repeated numeric facets |  | Datastore faceted search now allows repeated numeric facets. |
| 2015-09-25 | Default unlimited daily budget |  | Apps newly enabled for billing now default to an unlimited daily budget instead of a $0 daily budget. |
| 2015-08-27 | MVM log context view |  | MVM application logs now include a show-in-context menu for entries with thread_id or request_id fields. |
| 2015-08-27 | Remote API OAuth2 authentication |  | Remote API can now be accessed with OAuth2 credentials, including Application Default Credentials. |
| 2015-08-27 | URLFetch oversized payload exception |  | URLFetch now uses RequestPayloadTooLargeException when request payloads exceed the allowed size. |
| 2015-08-14 | Admin Console to Cloud Console redirection |  | Admin Console menus began redirecting to Cloud Console while some services remained in the Admin Console. |
| 2015-08-14 | Datastore empty-list properties |  | Datastore properties can now represent the empty list. |
| 2015-08-14 | Search API offsets and cursors |  | The Search API now supports offsets and cursors in search requests and responses. |
| 2015-08-14 | Task Queue zero retry limit enforcement |  | Failed tasks in queues with a retry_limit of zero are no longer retried. |
| 2015-08-14 | User.ClientID field |  | The appengine/user package now includes a ClientID field on User. |

Source file slug: `app-engine-standard-environment-go.md`

