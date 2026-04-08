# App Engine flexible environment Java

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 62
Unique features: 62

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2025-12-22 | App Engine flexible environment Java 25 runtime |  | The Java 25 runtime is now generally available in App Engine flexible environment; The Java 25 runtime is now available in Preview in App Engine flexible environment. |
| 2025-10-20 | App Engine flexible environment TLS 1.2+ support |  | App Engine flexible environment now supports TLS version 1.2 and later with a corresponding secure set of cipher suites. |
| 2025-08-07 | App Engine flexible environment TLS legacy version support deprecation | March 2025 | Support for TLS version 1.1 and earlier is deprecated in App Engine flexible environment in favor of TLS 1.2 and later; deprecated on March 2025. |
| 2024-07-30 | App Engine runtime lifecycle stage filtering in Cloud Console |  | The Cloud Console for App Engine now supports filtering flexible environment versions by runtime lifecycle stages and shows warning icons for lifecycle states. |
| 2024-02-26 | App Engine flexible environment Java 21 runtime |  | The Java 21 runtime is now generally available in App Engine flexible environment; The Java 21 runtime is now available in Preview in App Engine flexible environment. |
| 2023-06-22 | App Engine Java runtime Maven wrapper support |  | The App Engine Java runtime now supports using Maven wrappers to manage project Maven dependencies. |
| 2023-04-18 | App Engine flexible environment Java 11 runtime |  | The Java 11 runtime is now generally available in App Engine flexible environment and requires specifying an operating system version in app.yaml. |
| 2023-04-18 | App Engine flexible environment Java 17 runtime |  | The Java 17 runtime is now generally available in App Engine flexible environment and requires specifying an operating system version in app.yaml. |
| 2023-03-24 | SSH access to internal-only App Engine flexible instances |  | SSH access is now supported for App Engine flexible environment instances that use only internal IP addresses. |
| 2023-03-02 | App Engine flexible environment Java 11 preview runtime |  | The Java 11 runtime is now available in Preview on secure modern operating systems, with Google Cloud buildpacks and updated app.yaml requirements. |
| 2023-03-02 | App Engine flexible environment Java 17 preview runtime |  | The Java 17 runtime is now available in Preview on secure modern operating systems, with Google Cloud buildpacks and updated app.yaml requirements. |
| 2022-12-13 | App Engine app-level default service account selection |  | You can use any configured service account in the project as the app-level default service account when creating or updating App Engine applications. |
| 2022-11-09 | Internal IP mode for App Engine flexible instances |  | App Engine flexible environment instances now support setting IP mode to Internal. |
| 2022-05-23 | Disable external ephemeral IP addresses for App Engine Flex services |  | App Engine Flexible services can be configured to disable external ephemeral IP addresses. |
| 2022-05-18 | User-managed service accounts per App Engine version deployment |  | You can specify a user-managed service account when deploying each App Engine version; App Engine introduced preview support for specifying a user-managed service account per version during deployment. |
| 2021-06-14 | App Engine regional availability expansion |  | App Engine became available in new regions: us-west1 (Oregon), asia-southeast1 (Singapore), and asia-east1 (Taiwan); App Engine became available in the europe-central2 (Warsaw) region. |
| 2020-09-25 | App Engine network ingress control for VPC and Cloud Load Balancing |  | App Engine added ingress controls that can restrict incoming traffic to requests from a project's VPC or Cloud Load Balancing. |
| 2020-07-08 | External HTTP(S) load balancing for App Engine via serverless NEGs |  | App Engine gained support for External HTTP(S) Load Balancing through serverless network endpoint groups, enabling Cloud CDN integration. |
| 2020-05-14 | Fine-grained billing for App Engine services |  | App Engine added support for labeling services and exporting billing data to BigQuery for detailed per-resource billing analysis. |
| 2020-03-06 | App Engine regional availability in us-west3 |  | App Engine became available in the us-west3 (Salt Lake City) region. |
| 2020-02-11 | App Engine region-ID app hostnames |  | App Engine app request URLs now can include a region ID to route traffic more efficiently and reliably. |
| 2019-04-18 | App Engine regional availability in asia-northeast2 |  | App Engine became available in the asia-northeast2 (Osaka) region. |
| 2019-04-15 | App Engine regional availability in europe-west6 |  | App Engine became available in the europe-west6 (Zurich) region. |
| 2019-04-09 | Cloud Tasks general availability |  | Cloud Tasks became generally available for running asynchronous background tasks. |
| 2019-03-04 | Cloud Scheduler general availability |  | Cloud Scheduler became generally available for scheduled unit-of-work execution (cron jobs). |
| 2019-01-07 | App Engine WebSockets and session affinity support |  | App Engine added support for using WebSockets and session affinity to maintain persistent connections. |
| 2018-10-22 | App Engine regional availability in asia-east2 |  | App Engine became available in the asia-east2 (Hong Kong) region. |
| 2018-07-10 | App Engine regional availability in us-west2 |  | App Engine became available in the us-west2 (Los Angeles) region. |
| 2018-01-10 | App Engine regional availability in northamerica-northeast1 |  | App Engine became available in the northamerica-northeast1 (Montreal) region. |
| 2017-12-14 | App Engine IAM-based deployment permissions |  | App Engine access control documentation was improved for deploying apps using IAM roles, service accounts, and required permissions. |
| 2017-10-31 | App Engine regional availability in asia-south1 |  | App Engine became available in the asia-south1 (Mumbai) region. |
| 2017-10-11 | App Engine Firewall |  | App Engine Firewall was announced as generally available; App Engine Firewall entered beta release. |
| 2017-10-02 | Default gzip response compression on App Engine flexible environment |  | App Engine flexible environment apps now serve all responses with gzip compression by default after redeploy. |
| 2017-09-26 | Per-second instance billing for App Engine flexible environment |  | Instance billing for App Engine flexible environment changed to per-second increments with a one-minute minimum usage threshold. |
| 2017-09-18 | Legacy App Engine health checks | 2018-09-30 | Legacy health checks were deprecated and set to be unavailable after the stated removal date; deprecated on 2018-09-30. |
| 2017-09-18 | Updated split health checks for App Engine projects |  | Updated (split) health checks became the default for new App Engine projects, with migration via gcloud app update --split-health-checks. |
| 2017-09-13 | App Engine custom domain mapping APIs and commands |  | App Engine custom domain mapping commands and Admin API methods became generally available, including domain verification and authorizedDomains listing. |
| 2017-09-13 | Managed SSL certificates for App Engine custom domains |  | Existing custom domain SSL deployments continue to work, and custom domains can be upgraded to managed SSL certificates; Managed certificates can be used to add SSL to custom domains, with automatic provisioning, renewal, and revocation lifecycle handling. |
| 2017-09-11 | App Engine Java compat runtime appengine-web.xml configuration updates |  | App Engine standard API-compatible Java SDK 1.9.56 added appengine-web.xml options for subnetwork_name, session_affinity, and updated liveness/readiness health checks. |
| 2017-09-05 | App Engine regional availability in southamerica-east1 |  | App Engine became available in the southamerica-east1 (São Paulo, Brazil) region. |
| 2017-08-01 | App Engine regional availability in europe-west3 |  | App Engine became available in the europe-west3 (Frankfurt, Germany) region. |
| 2017-07-18 | App Engine region availability: australia-southeast1 |  | App Engine became available in the australia-southeast1 (Sydney) region. |
| 2017-07-12 | App Engine updated health checks |  | Updated App Engine health checks allow separate checks for instance running state and readiness to serve traffic, and this option is available in Beta. |
| 2017-06-06 | App Engine Admin API and gcloud support for custom domains and SSL certificates |  | App Engine added beta-level Admin API and gcloud capabilities to create and manage custom domains and SSL certificates. |
| 2017-06-06 | App Engine region availability: europe-west2 |  | App Engine became available in the europe-west2 (London) region. |
| 2017-05-09 | App Engine region availability: us-east4 |  | App Engine became available in the us-east4 (North Virginia) region. |
| 2017-03-28 | App Engine flexible environment region availability in europe-west |  | The App Engine flexible environment became available in the europe-west region. |
| 2017-03-09 | .NET Core runtime (App Engine Flexible Environment) Beta |  | The .NET Core runtime for the App Engine flexible environment entered Beta. |
| 2017-03-09 | App Engine flexible environment general availability |  | The App Engine flexible environment reached general availability with support for Node.js, Ruby, Python, Java, and Go, and a 99.95% SLA. |
| 2017-03-09 | App Engine PHP 7 runtime (Flexible Environment) Beta |  | The PHP 7 runtime for the App Engine flexible environment entered Beta. |
| 2016-11-15 | App Engine flexible environment modern networking stack |  | A modern networking stack with higher throughput was introduced for the App Engine flexible environment. |
| 2016-11-15 | App Engine flexible environment selector migration |  | Flexible environment applications are now selected using env:flex instead of vm:true in app.yaml. |
| 2016-11-15 | App Engine multi-zonal deployment support |  | The App Engine flexible environment added multi-zonal deployment capability. |
| 2016-11-15 | App Engine region availability: asia-northeast1 |  | The App Engine flexible environment became available in the asia-northeast1 region. |
| 2016-11-15 | Custom machine types for App Engine flexible environment |  | The App Engine flexible environment gained support for custom machine types. |
| 2016-11-15 | Go App Engine package deprecation for flexible environment | 2016-11-15 | The older Go App Engine package was deprecated for use on App Engine flexible environment in favor of cloud.google.com/go/ packages; deprecated on 2016-11-15. |
| 2016-11-15 | java-compat runtime deprecation | 2016-11-15 | The java-compat runtime was deprecated in App Engine flexible environment; deprecated on 2016-11-15. |
| 2016-11-15 | jetty9-compat runtime deprecation | 2016-11-15 | The jetty9-compat runtime was deprecated in App Engine flexible environment; deprecated on 2016-11-15. |
| 2016-11-15 | python-compat runtime deprecation | 2016-11-15 | The python-compat runtime was deprecated in App Engine flexible environment; deprecated on 2016-11-15. |
| 2016-11-15 | python27 runtime deprecation | 2016-11-15 | The python27 runtime was deprecated in App Engine flexible environment; deprecated on 2016-11-15. |
| 2016-05-02 | Ruby runtime for App Engine flexible environment |  | The Ruby runtime became available for App Engine flexible environment deployments. |
| 2016-02-03 | App Engine Managed VM container build method configuration |  | Remote container image construction for App Engine Managed VM deployments was introduced with selectable options: default transient Compute Engine VM builds or beta Cloud Build, controlled by the app/use_cloud_build gcloud setting. |

Source file slug: `app-engine-flexible-environment-java.md`

