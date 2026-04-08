# App Engine standard environment Go

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 173
Unique features: 158

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-12 | Go 1.26 runtime |  | Go 1.26 runtime support is generally available for App Engine standard environment; Go 1.26 runtime support is available in Preview for App Engine standard environment. |
| 2026-02-12 | App Engine standard app migration to Cloud Run via gcloud beta app migrate-to-run |  | Existing App Engine standard environment apps can be deployed to Cloud Run using the gcloud beta app migrate-to-run command in Preview. |
| 2026-01-31 | Go 1.11 runtime | 2026-01-31 | Deployment of Go 1.11 runtime applications is deprecated in App Engine standard environment; deprecated on 2026-01-31. |
| 2025-10-20 | TLS 1.2+ support with secure cipher suites |  | Support for TLS version 1.2 and later with a corresponding secure set of cipher suites is generally available in App Engine standard environment; TLS 1.2 and later with a secure set of cipher suites is available in Preview for App Engine standard environment. |
| 2025-08-21 | Go 1.25 runtime |  | Go 1.25 runtime support is generally available for App Engine standard environment; Go 1.25 runtime support is available in Preview for App Engine standard environment. |
| 2025-08-07 | TLS 1.1 and earlier support | March 2025 | Support for TLS version 1.1 and earlier is deprecated for App Engine standard environment; deprecated on March 2025. |
| 2025-07-30 | Go 1.24 runtime |  | Go 1.24 runtime support is generally available for App Engine standard environment; Go 1.24 runtime support is available in Preview for App Engine standard environment. |
| 2025-03-03 | Automatic scaling default max_instances for new App Engine standard projects |  | New App Engine standard projects now default to a maximum of 20 instances for automatic scaling unless overridden in app.yaml. |
| 2025-03-03 | Go 1.23 runtime |  | Go 1.23 runtime support is generally available for App Engine standard environment. |
| 2024-12-09 | Custom organization policies for Serverless VPC Access connectors |  | Serverless VPC Access connectors now support custom organization policies that can be applied at project, folder, or organization scope. |
| 2024-11-19 | Go 1.23 runtime preview for App Engine standard environment |  | Go 1.23 is now available in preview in the App Engine standard environment. |
| 2024-07-30 | Runtime lifecycle stage filtering in App Engine version list |  | The App Engine console now allows filtering App Engine versions by runtime lifecycle stage and shows warning icons for versions nearing or past support milestones. |
| 2024-03-26 | Go 1.22 runtime generally available for App Engine standard environment |  | The Go 1.22 runtime is now generally available for App Engine standard environment, with dependency handling aligned to module-based workflows. |
| 2024-02-26 | Go 1.22 runtime preview for App Engine standard environment |  | Go 1.22 is now available in preview for the App Engine standard environment. |
| 2024-01-23 | Editable Serverless VPC Access connector configuration in App Engine |  | Updating Serverless VPC Access connectors at GA is now supported, including changing machine type and minimum/maximum instance counts. |
| 2023-09-14 | Go 1.21 runtime generally available for App Engine standard environment |  | Go 1.21 is now generally available in the App Engine standard environment. |
| 2023-08-14 | Go 1.21 runtime preview for App Engine standard environment |  | Go 1.21 is now available in preview for the App Engine standard environment. |
| 2023-04-27 | Search API in App Engine legacy bundled services for second-generation runtimes |  | The Search API is now available in App Engine legacy bundled services for second-generation runtimes, accessible via the App Engine services SDK for Go 1.12+. |
| 2023-03-24 | Go 1.20 runtime generally available for App Engine standard environment |  | The Go 1.20 runtime for App Engine standard environment is now generally available. |
| 2023-02-13 | Go 1.20 runtime preview for App Engine standard environment |  | The Go 1.20 runtime for App Engine standard environment is now available in preview. |
| 2023-01-17 | Go 1.18 runtime generally available for App Engine standard environment |  | The Go 1.18 runtime is now generally available for App Engine standard environment. |
| 2023-01-17 | Go 1.19 runtime generally available for App Engine standard environment |  | The Go 1.19 runtime is now generally available for App Engine standard environment. |
| 2022-12-21 | Serverless VPC Access connector editing (App Engine standard) |  | App Engine standard now allows updating Serverless VPC Access connectors in preview, including machine type and minimum/maximum instance settings. |
| 2022-12-13 | App-level default service account for App Engine applications |  | App Engine now allows any configured service account in the Cloud project to be used as the app-level default service account when creating or updating applications. |
| 2022-12-07 | Go 1.18 and Go 1.19 runtimes for App Engine standard environment |  | Go 1.18 and Go 1.19 runtimes are now available for App Engine standard environment in preview. |
| 2022-11-01 | Build environment variables support for App Engine |  | Build environment variables support is now generally available for App Engine standard. |
| 2022-05-18 | User-managed service account per App Engine version |  | App Engine now generally supports specifying a user-managed service account for each version during deployment. |
| 2022-04-13 | Legacy bundled services for Go 1.12+ in App Engine standard |  | App Engine legacy bundled services are now available at GA for Go 1.12+ runtimes in the standard environment via language-idiomatic libraries. |
| 2022-03-24 | Serverless VPC Access connectors in Shared VPC host projects |  | Support for Serverless VPC Access connectors in Shared VPC host projects reached general availability, allowing connector configuration in host projects. |
| 2021-11-29 | Go 1.16 runtime for App Engine standard environment |  | The Go 1.16 runtime is now generally available for App Engine standard environment; The Go 1.16 runtime for App Engine standard environment entered public preview. |
| 2021-11-03 | Egress settings for Serverless VPC Access |  | Egress settings for Serverless VPC Access are now generally available, enabling control of traffic to external destinations and supporting static outbound IP configurations; Serverless VPC Access gained egress settings, allowing control over routing traffic to external destinations through the connector. |
| 2021-09-27 | Legacy App Engine APIs for second-generation runtimes |  | Legacy App Engine APIs became available for select second-generation runtimes in preview for Go 1.12+, via language-idiomatic libraries and standard billing. |
| 2021-06-30 | Per-version user-managed service accounts for App Engine standard deployments |  | This preview feature allows each App Engine version to be deployed with its own user-managed service account so privileges can be scoped to the work each version performs. |
| 2021-06-14 | and asia-east1 |  | This feature adds App Engine standard environment availability in the us-west1 (Oregon), asia-southeast1 (Singapore), and asia-east1 (Taiwan) regions. |
| 2021-06-14 | App Engine regional availability in us-west1 |  | This feature adds App Engine standard environment availability in the us-west1 (Oregon), asia-southeast1 (Singapore), and asia-east1 (Taiwan) regions. |
| 2021-06-14 | asia-southeast1 |  | This feature adds App Engine standard environment availability in the us-west1 (Oregon), asia-southeast1 (Singapore), and asia-east1 (Taiwan) regions. |
| 2021-04-20 | Build environment variables support for App Engine standard |  | Build environment variable support is introduced for App Engine standard environments in preview. |
| 2021-04-14 | Serverless VPC Access support for Shared VPC in App Engine standard |  | Serverless VPC Access now supports Shared VPC for App Engine standard environments with general availability; Serverless VPC Access support for Shared VPC in App Engine standard entered beta availability. |
| 2021-04-13 | App Engine regional availability in europe-central2 |  | App Engine standard environment is added as available in the europe-central2 (Warsaw) region. |
| 2021-03-26 | CPU Utilization metric for App Engine standard |  | App Engine standard environments gain a CPU Utilization metric that reports CPU usage averaged across active instances. |
| 2021-03-11 | Go 1.15 runtime for App Engine standard |  | The Go 1.15 runtime for the App Engine standard environment reached general availability. |
| 2020-09-25 | Cloud Load Balancing network ingress controls for App Engine |  | App Engine can apply network ingress controls when used behind Cloud Load Balancing so only load-balancer-routed requests are accepted. |
| 2020-08-25 | Go 1.14 runtime for App Engine standard |  | The Go 1.14 runtime for the App Engine standard environment reached general availability; The Go 1.14 runtime for the App Engine standard environment became available in beta. |
| 2020-07-08 | External HTTP(S) Load Balancing for App Engine via Serverless network endpoint groups |  | App Engine now supports External HTTP(S) Load Balancing through Serverless network endpoint groups, enabling Cloud CDN usage with App Engine. |
| 2020-06-11 | App Engine standard environment Go 1.13 runtime |  | The App Engine standard environment made the Go 1.13 runtime generally available; The App Engine standard environment released the Go 1.13 runtime in beta. |
| 2020-06-08 | App Engine region availability in asia-southeast2 |  | App Engine became available in the asia-southeast2 (Jakarta) region. |
| 2020-05-14 | App Engine fine-grained billing labels with BigQuery export |  | App Engine services can be labeled and their billing data exported to BigQuery for detailed per-resource cost queries. |
| 2020-04-20 | App Engine region availability in us-west4 |  | App Engine became available in the us-west4 (Las Vegas) region. |
| 2020-03-13 | App Engine region availability in asia-northeast3 |  | App Engine became available in the asia-northeast3 (Seoul) region. |
| 2020-03-06 | App Engine region availability in us-west3 |  | App Engine became available in the us-west3 (Salt Lake City) region. |
| 2020-02-11 | App Engine regionalized application URLs |  | App Engine introduced optional region-ID-based application URLs to improve routing reliability and efficiency. |
| 2019-12-11 | Serverless VPC Access |  | Serverless VPC Access reached general availability. |
| 2019-09-27 | Go 1.9 GOROOT directory in App Engine Go SDK | 2019-09-27 | The Go 1.9 GOROOT directory was removed from the App Engine Go SDK distribution; deprecated on 2019-09-27. |
| 2019-09-27 | Go SDK support for Go 1.9 and older | 2019-09-27 | Support for Go 1.9 and earlier runtimes in the App Engine Go SDK was removed; deprecated on 2019-09-27. |
| 2019-09-27 | goapp tool | 2019-09-27 | The goapp command-line tool was removed from App Engine Go tooling; deprecated on 2019-09-27. |
| 2019-07-30 | AppCfg tooling | 2020-07-30 | The AppCfg deployment tooling was deprecated for App Engine; deprecated on 2020-07-30. |
| 2019-07-30 | Legacy standalone App Engine SDK | 2020-07-30 | The legacy standalone App Engine SDK distributions (including legacy launcher/installer packages) were deprecated; deprecated on 2020-07-30. |
| 2019-06-27 | App Engine standard environment Go 1.9 runtime | 2019-10-01 | New deployments for the Go 1.9 runtime on App Engine standard environment are no longer permitted after the deprecation date; deprecated on 2019-10-01. |
| 2019-05-16 | App Engine standard environment Go 1.12 runtime |  | The Go 1.12 runtime on App Engine standard environment became generally available. |
| 2019-04-18 | App Engine standard environment in asia-northeast2 (Osaka |  | App Engine standard environment support was added in the asia-northeast2 region. |
| 2019-04-18 | Japan) |  | App Engine standard environment support was added in the asia-northeast2 region. |
| 2019-04-15 | App Engine standard environment in europe-west6 (Zurich |  | App Engine standard environment support was added in the europe-west6 region. |
| 2019-04-15 | Switzerland) |  | App Engine standard environment support was added in the europe-west6 region. |
| 2019-03-25 | App Engine standard environment Go 1.12 runtime beta |  | The Go 1.12 runtime for App Engine standard environment entered beta. |
| 2019-03-25 | Go 1.9 to Go 1.12 migration guide for App Engine standard environment |  | A migration guide for moving App Engine standard environment Go applications from version 1.9 to 1.12 was published. |
| 2019-03-20 | App Engine standard environment Go 1.11 runtime |  | The Go 1.11 runtime on App Engine standard environment reached general availability. |
| 2018-11-06 | App Engine Go SDK 1.9.70 |  | The App Engine Go SDK was updated to version 1.9.70. |
| 2018-10-22 | App Engine standard environment in asia-east2 (Hong Kong) |  | App Engine standard environment support was added in the asia-east2 region. |
| 2018-10-10 | App Engine standard environment Go 1.11 runtime beta |  | The Go 1.11 runtime for App Engine standard environment entered beta. |
| 2018-10-10 | Go 1.9 to Go 1.11 migration guide for App Engine standard environment |  | A migration guide for moving App Engine standard environment Go applications from version 1.9 to 1.11 was published. |
| 2018-09-12 | App Engine Go SDK 1.9.68 |  | The App Engine Go SDK was updated to version 1.9.68. |
| 2018-08-01 | App Engine Go 1.6 and Go 1.8 runtime support | 2018-08-01 | Support for Go runtime versions 1.6 and 1.8 on App Engine is deprecated; deprecated on 2018-08-01. |
| 2018-08-01 | Go 1.6 and Go 1.8 app deployment support on App Engine | 2018-11-01 | Deploying new apps with Go 1.6 and Go 1.8 on App Engine is no longer possible from the deprecation cutoff date; deprecated on 2018-11-01. |
| 2018-07-13 | App Engine Go SDK version 1.9.67 |  | The App Engine Go SDK was updated to version 1.9.67. |
| 2018-07-10 | App Engine availability in us-west2 (Los Angeles) |  | App Engine became available in the us-west2 (Los Angeles) region. |
| 2018-07-03 | App Engine Go SDK version 1.9.66 |  | The App Engine Go SDK was updated to version 1.9.66. |
| 2018-07-03 | Local development server startup process ID logging |  | The local development server now prints the process ID at startup for easier debugging. |
| 2018-06-26 | App Engine Go SDK version 1.9.65 |  | The App Engine Go SDK was updated to version 1.9.65. |
| 2018-06-26 | Go 1.9 standard runtime as default for App Engine |  | Go 1.9 is generally available and set as the default Go runtime for App Engine standard, with older versions requiring explicit api_version settings. |
| 2018-05-15 | App Engine automatic scaling instance residency labeling |  | Resident instances in auto scaling were removed and the new scheduler now labels all instances as dynamic. |
| 2018-05-15 | App Engine automatic scaling max instances setting |  | A max instances setting was introduced to cap how many instances can be scheduled for an App Engine application. |
| 2018-05-15 | App Engine automatic scaling min instances setting |  | A min instances setting was introduced to specify the minimum number of App Engine instances that should remain running. |
| 2018-05-15 | App Engine automatic scaling scheduler upgrade |  | Automatic scaling was upgraded with more efficient scheduling and improved instance cost and latency/cold-start behavior. |
| 2018-05-15 | App Engine target CPU utilization automatic scaling setting |  | A target CPU utilization setting was added to tune App Engine scaling behavior between latency and cost. |
| 2018-05-15 | App Engine target throughput utilization automatic scaling setting |  | A target throughput utilization setting was added to scale App Engine instances based on concurrent request load. |
| 2018-03-28 | App Engine flexible Go 1.10 runtime deployment |  | App Engine flexible applications using runtime: go now deploy using the Go 1.10 runtime. |
| 2018-03-28 | App Engine Go SDK version 1.9.64 |  | The App Engine Go SDK was updated to version 1.9.64. |
| 2018-03-19 | App Engine Go 1.9 runtime | 2019-06-27 | Support for the Go 1.9 runtime on App Engine was deprecated; Added beta support for the Go 1.9 runtime in App Engine standard, enabling `api_version: go1.9` after upgrading to Go SDK 1.9.63 or later; deprecated on 2019-06-27. |
| 2018-03-19 | App Engine Go SDK version 1.9.63 |  | The App Engine Go SDK was updated to version 1.9.63. |
| 2018-01-08 | App Engine Go SDK |  | Updated the App Engine Go SDK to version 1.9.62; Updated the App Engine Go SDK to version 1.9.61. |
| 2017-12-14 | App Engine deployment IAM permissions |  | Improved documentation for deploying App Engine apps with IAM roles and service accounts, clarifying required predefined roles and permissions. |
| 2017-11-15 | Delve debugging in App Engine local dev server |  | Added the `--go_debugging` flag to `dev_appserver.py` to enable Delve-based debugging for Go apps. |
| 2017-11-15 | Delve debugging in Go local runtime |  | Added the `-debug` flag to `goapp serve` to enable Delve debugging. |
| 2017-10-31 | App Engine standard region availability |  | Expanded App Engine standard environment availability to the `asia-south1` (Mumbai, India) region. |
| 2017-10-25 | App Engine Go 1.8 runtime |  | Promoted Go 1.8 to general availability in App Engine standard and made it the default runtime for `api_version: go1`, while retaining `api_version: go1.6` for older apps. |
| 2017-10-11 | App Engine firewall |  | Announced general availability of App Engine Firewall; The App Engine firewall feature was introduced in beta. |
| 2017-09-13 | App Engine custom domain mapping via gcloud and Admin API |  | Custom domain mapping commands in gcloud and the Admin API methods for domain mapping were promoted to general availability. |
| 2017-09-13 | Managed SSL certificates for App Engine custom domains |  | Managed certificates automatically provision, renew, and revoke SSL certificates for App Engine custom domains. |
| 2017-09-11 | App Engine Go SDK 1.9.58 |  | App Engine Go SDK version 1.9.58 was released. |
| 2017-09-05 | App Engine region availability in southamerica-east1 |  | App Engine became available in the southamerica-east1 (São Paulo) region for Go applications. |
| 2017-08-09 | App Engine Go SDK 1.9.57 |  | App Engine Go SDK version 1.9.57 was released. |
| 2017-08-09 | Go runtime standard context usage in appengine.NewContext |  | Go 1.8 in App Engine now uses the Go standard library context package when calling appengine.NewContext(). |
| 2017-08-01 | App Engine region availability in europe-west3 |  | App Engine became available in the europe-west3 (Frankfurt) region for Go applications. |
| 2017-07-18 | App Engine region availability in australia-southeast1 |  | App Engine became available in the australia-southeast1 (Sydney) region for Go applications. |
| 2017-07-01 | App Engine Go SDK 1.9.56 |  | App Engine Go SDK version 1.9.56 was released. |
| 2017-06-27 | App Engine Go 1.8 runtime beta support |  | Go 1.8 support for App Engine Go entered beta, requiring api_version: go1.8 and use of the App Engine SDK. |
| 2017-06-27 | App Engine Go SDK 1.9.55 |  | App Engine Go SDK version 1.9.55 was released. |
| 2017-06-27 | Go 1.8 beta runtime |  | App Engine Standard Environment enabled support for the Go 1.8 beta runtime. |
| 2017-06-06 | App Engine region availability: europe-west2 (London) |  | App Engine Standard Environment became available in the europe-west2 (London) region. |
| 2017-06-06 | Beta-level Admin API and gcloud domain/SSL management |  | The Admin API and gcloud command-line tool added beta-level features for creating and managing custom domains and SSL certificates. |
| 2017-05-22 | App Engine Go SDK upgrade |  | The App Engine Go SDK was updated to version 1.9.54; The App Engine Go SDK was updated to version 1.9.53. |
| 2017-05-22 | Go api_version to GOROOT mapping |  | Go api_version values go1 and go1.6 were mapped to use the new goroot-1.6 directory; In preparation for the Go 1.8 beta, Go api_version values were mapped to specific GOROOT directories. |
| 2017-05-22 | Go runtime version upgrade |  | The App Engine Go runtime was upgraded to version 1.6.4. |
| 2017-05-09 | App Engine region availability: us-east4 (North Virginia) |  | App Engine Standard Environment became available in the us-east4 (North Virginia) region. |
| 2016-10-27 | Channel and XMPP services deprecation | 2017-10-31 | The Channel and XMPP services were deprecated, with shutdown scheduled for October 31, 2017; deprecated on 2017-10-31. |
| 2016-08-01 | App Engine Admin API v1 general availability |  | Version 1 of the App Engine Admin API was announced as generally available. |
| 2016-08-01 | App Engine Go SDK 1.9.42 release |  | The App Engine Go SDK version 1.9.42 release was made available. |
| 2016-08-01 | Go 1.12+ runtime guidance |  | Release notes for the Go 1.12+ runtime clarified that no new SDK was included and existing users should keep using the 1.9.40 SDK. |
| 2016-07-18 | App Engine dashboard URL-level error metrics |  | The dashboard’s Server Errors and Client Errors metrics were updated to show more accurate per-URL status errors. |
| 2016-07-18 | App Engine Go SDK 1.9.40 release |  | The App Engine Go SDK version 1.9.40 release was made available. |
| 2016-07-18 | Cloud Console guided App Engine walkthrough |  | A guided walkthrough was added in Google Cloud Console for onboarding to App Engine. |
| 2016-07-18 | Cron task limit increase |  | The maximum number of cron tasks was increased to 250. |
| 2016-07-01 | Cloud Datastore pricing change |  | The new Cloud Datastore pricing model was put into effect. |
| 2016-05-25 | App Engine Go SDK 1.9.38 release |  | The App Engine Go SDK version 1.9.38 release was made available. |
| 2016-05-25 | Cloud Datastore cross-group transaction version consistency |  | Cross-group transactions were changed so new and updated entities now receive identical version numbers regardless of entity group. |
| 2016-05-25 | Cloud Datastore Go runtime update to Go 1.6.2 |  | The App Engine Go runtime for Cloud Datastore was updated to use Go 1.6.2. |
| 2016-05-25 | Go SDK 1.9.37 release tag and gopath upload behavior |  | App Engine Go SDK 1.9.37 began using broader Go release tags during dev compilation and uploads all required gopath files required by those tags to prevent mismatch build errors. |
| 2016-05-25 | URL Fetch invalid destination port handling |  | App Engine URL Fetch now always returns INVALID_URL for requests targeting disallowed destination ports. |
| 2016-04-18 | App Engine Mail API quota increase requests | 2016-04-18 | Google no longer accepts quota increase requests for the App Engine Mail service; deprecated on 2016-04-18. |
| 2016-04-18 | App Engine Users API IAM role and group admin recognition |  | The App Engine Users API now treats users with Owner, Editor, Viewer, or App Engine Admin privileges and group membership as admins. |
| 2016-04-18 | OverQuota error detail population |  | OverQuota exception messages now include error details when such details are available. |
| 2016-03-24 | App Engine SDK dependency vendoring support |  | The App Engine SDK now supports vendoring external dependencies. |
| 2016-03-04 | URL Fetch default quota increase for billed applications |  | The default URL Fetch quota for billed applications has been increased. |
| 2016-02-17 | URL path passthrough for /form |  | The URL path "/form" is now allowed and is forwarded to applications. |
| 2016-02-03 | App Engine Go runtime response compression |  | Response compression was enabled for the Go runtime in App Engine, helping reduce outbound bandwidth for some applications. |
| 2016-02-03 | Configurable Managed VM container build backend |  | Managed VM deployments gained configurable container construction options, allowing builds to use either the default transient Compute Engine VM path or Cloud Build via gcloud configuration. |
| 2016-01-14 | Google Group-based project access for App Engine |  | App Engine added support for adding Google Groups as project members, where group roles such as Editor grant the same access to all group members on the application. |
| 2015-11-30 | Endpoints API discoverable flag |  | A discoverable boolean parameter was added to the Endpoints API @Api annotation to allow disabling API discovery for selected services. |
| 2015-11-30 | Queue depth suppression for inactive or unavailable queues |  | App Engine stopped calculating and storing queue depth for non-existent queues, queues marked for deletion, and during queue table outages. |
| 2015-11-30 | Task Queue push request Content-Length for empty payloads |  | Push queue requests for tasks without payloads now include a Content-Length header set to 0. |
| 2015-10-29 | Search API geo filtering accuracy improvement |  | Search query geo filtering accuracy was improved. |
| 2015-09-25 | App Engine Go runtime version 1.9.27 |  | App Engine standard environment for Go was updated to runtime/version 1.9.27. |
| 2015-09-25 | Datastore Faceted Search General Availability |  | Datastore Faceted Search reached GA status in App Engine. |
| 2015-09-25 | Default daily budget behavior for newly enabled billing applications |  | Newly enabled billing applications now default to an unlimited daily budget instead of a $0 limit, while still allowing optional budget caps to be configured. |
| 2015-09-25 | Repeated numeric facets in Datastore |  | Datastore Faceted Search added support for repeated numeric facets. |
| 2015-08-27 | App Engine Go runtime version 1.9.26 |  | App Engine standard environment for Go was updated to runtime/version 1.9.26. |
| 2015-08-27 | Elastic provisioning based on VM and application metrics |  | Applications can be provisioned for current load and elastically scaled using both VM-level and application-level metrics. |
| 2015-08-27 | In-context log menu sorting by thread or request ID |  | App logs in MVM can now show in-context menus for thread_id/request_id and be sorted by either field. |
| 2015-08-27 | oauth2client dependency upgrade to version 1.4.2 |  | The oauth2client library used by the runtime was upgraded to version 1.4.2. |
| 2015-08-27 | Remote API OAuth2 credential support |  | Remote API access was enabled through OAuth2 credentials via Application Default Credentials. |
| 2015-08-27 | URLFetch oversized payload exception handling |  | URLFetch now raises RequestPayloadTooLargeException when request payloads exceed size limits. |
| 2015-08-14 | Admin Console menu redirection to Cloud Console |  | Admin Console menus now redirect to Cloud Console while selected services such as Admin Logs remain accessible in the Admin Console. |
| 2015-08-14 | App Engine Go runtime version 1.9.25 |  | App Engine standard environment for Go was updated to runtime/version 1.9.25. |
| 2015-08-14 | App Engine Search API offsets and cursors support |  | The App Engine Search API now supports offsets and cursors in search requests and responses. |
| 2015-08-14 | App Engine User API ClientID field |  | The App Engine User API adds a new User.ClientID field. |
| 2015-08-14 | Datastore support for empty list properties |  | Datastore now allows properties to represent empty lists. |
| 2015-08-14 | PyAMF version 0.7.2 Beta addition |  | Support for PyAMF version 0.7.2 was added in Beta. |
| 2015-08-14 | Task Queue handling of zero retry limit failures |  | Failed tasks in queues with a retry_limit of zero are no longer retried. |

Source file slug: `app-engine-standard-environment-go.md`

