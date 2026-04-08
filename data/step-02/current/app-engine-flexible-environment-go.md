# App Engine flexible environment Go

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 80
Unique features: 57

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-12 | App Engine flexible environment Go 1.26 runtime support |  | The Go 1.26 runtime is generally available for App Engine flexible environments; The Go 1.26 runtime entered preview for App Engine flexible environments. |
| 2025-10-20 | App Engine flexible environment TLS 1.2+ with secure cipher suites |  | TLS version 1.2 and later with the corresponding secure cipher suites is generally available for App Engine flexible environments; App Engine flexible environments offer TLS 1.2 and later with a corresponding secure set of cipher suites in Preview. |
| 2025-08-21 | App Engine flexible environment Go 1.25 runtime support |  | The Go 1.25 runtime is generally available for App Engine flexible environments; The Go 1.25 runtime is available in preview for App Engine flexible environments. |
| 2025-08-07 | App Engine flexible environment legacy TLS 1.1 and earlier support | March 2025 | Support for TLS versions 1.1 and earlier is deprecated in App Engine flexible environments; deprecated on March 2025. |
| 2025-07-30 | App Engine flexible environment Go 1.24 runtime support |  | The Go 1.24 runtime is generally available for App Engine flexible environments; The Go 1.24 runtime entered preview for App Engine flexible environments. |
| 2025-03-03 | App Engine flexible environment Go 1.23 runtime support |  | Go 1.23 is generally available for App Engine flexible environments; Go 1.23 is available in preview for App Engine flexible environments. |
| 2024-07-30 | App Engine console runtime lifecycle stage filtering |  | The App Engine console now lets users filter versions by runtime lifecycle stage and display warning icons for end-of-support or deprecated states. |
| 2024-03-26 | App Engine flexible environment Go 1.22 runtime support |  | The Go 1.22 runtime is generally available for App Engine flexible environments. |
| 2024-03-26 | Legacy GOPATH mode (GO111MODULE=off) for Go on App Engine flexible | 2024-03-26 | For Go 1.22 and later on App Engine flexible environments, using `go get` outside a module in legacy GOPATH mode is no longer supported; deprecated on 2024-03-26. |
| 2024-02-26 | Go 1.22 runtime support in App Engine flexible |  | Adds preview support for the Go 1.22 runtime in App Engine flexible environment. |
| 2023-09-08 | Go 1.21 runtime support in App Engine flexible |  | Marks the Go 1.21 runtime as generally available in App Engine flexible environment; Introduces Go 1.21 runtime support in App Engine flexible environment in preview. |
| 2023-04-28 | app.yaml runtime_version support for Go 1.20 |  | Adds support for specifying version 1.20 in the app.yaml runtime_version setting. |
| 2023-03-24 | SSH access for internal-IP-only App Engine flexible instances |  | Enables SSH login to App Engine flexible instances that use only internal IP addresses. |
| 2023-03-23 | Go 1.18 and 1.19 runtime support in App Engine flexible |  | Adds general availability for Go 1.18 and 1.19 runtimes in App Engine flexible; Introduces Go 1.18 and 1.19 runtime preview support built on Ubuntu 22 and Cloud buildpacks. |
| 2022-12-13 | App-level default service account configurability |  | Allows any configured service account in the project to be used as the App Engine app-level default service account. |
| 2022-11-09 | Internal IP mode for App Engine flexible instances |  | Introduces the generally available option to set App Engine flexible instances to internal IP mode. |
| 2022-05-23 | Disable external ephemeral IP addresses for App Engine Flex services |  | Adds preview support for disabling external ephemeral IP addresses on App Engine Flex services. |
| 2022-05-18 | Per-version user-managed service account deployment |  | Makes it generally available to specify a user-managed service account per App Engine version during deployment; Introduces preview support for specifying a user-managed service account for each App Engine version during deployment. |
| 2021-06-14 | App Engine regional expansion |  | App Engine expanded to the us-west1 (Oregon), asia-southeast1 (Singapore), and asia-east1 (Taiwan) regions; App Engine became available in the europe-central2 (Warsaw) region. |
| 2020-09-25 | App Engine network ingress control |  | App Engine added support for ingress controls so applications can accept traffic only from a project VPC or via Cloud Load Balancing. |
| 2020-07-08 | External HTTP(S) Load Balancing support via serverless NEGs |  | App Engine added support for External HTTP(S) Load Balancing through serverless network endpoint groups, enabling Cloud CDN usage. |
| 2020-05-14 | App Engine resource-level billing visibility |  | App Engine introduced per-resource billing labels for services with BigQuery export and query capabilities for detailed billing analysis. |
| 2020-02-11 | App Engine region-based app URLs |  | App Engine changed app request URLs to include a region ID, with the new format optional for existing apps and standard for new apps. |
| 2019-04-09 | Cloud Tasks integration for App Engine flexible environment Go |  | Cloud Tasks is generally available, enabling Go applications on App Engine flexible environment to run asynchronous background work outside user requests. |
| 2019-03-04 | Cloud Scheduler integration for App Engine flexible environment Go |  | Cloud Scheduler is generally available for setting up scheduled tasks and cron-style work in App Engine flexible environment Go applications. |
| 2018-10-22 | App Engine flexible environment Go regional expansion to asia-east2 |  | The App Engine flexible environment Go product became available in the asia-east2 (Hong Kong) region. |
| 2018-10-11 | Default App Engine flexible environment Go runtime version 1.11 |  | The default Go runtime for App Engine flexible environment deployments was updated to Go 1.11. |
| 2018-08-01 | Deprecation of new Go 1.6 and Go 1.8 App Engine deployments | 2018-11-01 | Deploying new applications using Go 1.6 or Go 1.8 on App Engine flexible environment is deprecated; deprecated on 2018-11-01. |
| 2018-08-01 | Go 1.8 support deprecation on App Engine | 2018-08-01 | Support for Go 1.8 on App Engine flexible environment was deprecated; deprecated on 2018-08-01. |
| 2018-07-10 | App Engine flexible environment Go regional expansion to us-west2 |  | The App Engine flexible environment Go product became available in the us-west2 (Los Angeles) region. |
| 2018-03-28 | Community feedback channel for App Engine Go |  | App Engine Go users can submit feedback through the google-appengine-go Google Group. |
| 2018-03-28 | Default Go runtime behavior for `runtime: go` deployments |  | For App Engine flexible environment deployments using `runtime: go`, the runtime now defaults to the latest Go release (1.10). |
| 2018-03-28 | Go 1.10 runtime update |  | The Go 1.10 runtime introduced faster builds and standard-library behavior changes, including updates to `bytes` and `net/url`. |
| 2018-02-14 | App Engine Go distroless base image |  | App Engine Go builds application images using `gcr.io/distroless/base` as the base image, producing smaller Debian-free container images. |
| 2018-02-14 | Build pipeline generally available |  | The App Engine flexible environment Go build pipeline reached general availability. |
| 2018-02-14 | Go runtime version specification in app.yaml |  | Developers can specify `runtime: go` in `app.yaml` to select the latest supported Go runtime version for App Engine; Developers can build with a specific Go runtime version by configuring `runtime: go` in `app.yaml`. |
| 2018-01-10 | App Engine region expansion to northamerica-northeast1 |  | App Engine became available in the northamerica-northeast1 (Montréal) region. |
| 2017-12-14 | IAM-based deployment access guidance for App Engine |  | Access control guidance for deploying App Engine applications with IAM roles and service accounts was improved. |
| 2017-10-31 | App Engine region expansion to asia-south1 |  | App Engine became available in the asia-south1 (Mumbai) region. |
| 2017-10-11 | App Engine firewall availability |  | App Engine firewall was announced as generally available. |
| 2017-10-02 | Default gzip response compression in App Engine flexible environment |  | All responses in the App Engine flexible environment are compressed with gzip by default after redeploying the app. |
| 2017-09-27 | App Engine Go beta build pipeline updates |  | The App Engine Go beta build pipeline was updated. |
| 2017-09-27 | Distroless base image in App Engine Go beta builds |  | The beta build pipeline now produces Go application images from `gcr.io/distroless/base`, reducing image size and removing bundled Go SDK/debian runtime utilities. |
| 2017-09-26 | Per-second billing for App Engine flexible environment instances |  | App Engine flexible environment instance billing moved to per-second metering with a reduced minimum charge duration of one minute. |
| 2017-09-18 | Legacy health checks | 2018-09-30 | Legacy health checks for App Engine were scheduled for removal; deprecated on 2018-09-30. |
| 2017-09-13 | App Engine custom domain mapping with gcloud and Admin API |  | The App Engine custom domain mapping APIs and CLI commands (including `gcloud domains verify` and `apps.authorizedDomains.list`) reached general availability. |
| 2017-09-13 | Managed SSL certificates for custom domains |  | Managed certificates became available for custom domains, with App Engine automatically provisioning, renewing, and revoking certificates based on domain mapping state. |
| 2017-09-13 | Managed SSL upgrade for existing custom domain mappings |  | Existing domain mappings with SSL can be maintained and upgraded to use managed SSL certificates. |
| 2017-09-05 | App Engine regional expansion to southamerica-east1 |  | App Engine became available in the southamerica-east1 (São Paulo, Brazil) region. |
| 2017-08-23 | App Engine Firewall |  | App Engine Firewall was released in beta. |
| 2017-08-01 | App Engine regional expansion to europe-west3 |  | App Engine became available in the europe-west3 (Frankfurt, Germany) region. |
| 2017-07-18 | Updated health checks |  | App Engine introduced updated health checks, enabling separate run and readiness checks and requiring readiness before successful deployment in beta. |
| 2017-06-06 | App Engine regional expansion to europe-west2 |  | App Engine became available in the europe-west2 (London) region. |
| 2017-06-06 | Beta custom domain and SSL management APIs in Admin API and gcloud |  | Beta-level App Engine Admin API and gcloud commands became available to create and manage custom domains and SSL certificates. |
| 2017-05-09 | App Engine regional expansion to us-east4 |  | App Engine became available in the us-east4 (North Virginia) region. |
| 2017-03-28 | App Engine flexible environment availability in europe-west |  | The App Engine flexible environment became available in the europe-west region. |
| 2016-11-15 | Go App Engine package support in App Engine flexible environment | 2016-11-15 | The legacy Go App Engine package stopped working on App Engine flexible environment, and users were directed to migrate to the cloud.google.com/go package; deprecated on 2016-11-15. |

Source file slug: `app-engine-flexible-environment-go.md`

