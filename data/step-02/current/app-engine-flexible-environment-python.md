# App Engine flexible environment Python

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 76
Unique features: 79

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2025-12-19 | Python 3.14 runtime for App Engine flexible environment |  | Python 3.14 runtime is supported in Google App Engine flexible environment in General Availability; Python 3.14 runtime is available in preview for Google App Engine flexible environment. |
| 2025-10-20 | TLS 1.2+ transport security with secure cipher suites for App Engine flexible environment |  | App Engine flexible environment supports TLS version 1.2 and later with a corresponding secure set of cipher suites in General Availability. |
| 2025-08-07 | TLS 1.1 and earlier support for App Engine flexible environment | 2025-03 | Support for TLS versions 1.1 and earlier is deprecated for App Engine flexible environment, with guidance to move to TLS 1.2 and later with secure cipher suites; deprecated on 2025-03. |
| 2025-05-05 | Python 3.13 runtime for App Engine flexible environment |  | Python 3.13 runtime is supported in Google App Engine flexible environment in General Availability; Python 3.13 runtime is available in preview for Google App Engine flexible environment. |
| 2024-07-30 | Runtime lifecycle stage filtering in App Engine console |  | The Google Cloud Console App Engine page now supports filtering App Engine versions by runtime lifecycle stage and displays warning icons for support and deprecation states. |
| 2023-11-06 | Python 3.12 runtime for App Engine flexible environment |  | Python 3.12 runtime is now generally available in Google App Engine flexible environment; Python 3.12 runtime is available in preview for Google App Engine flexible environment. |
| 2023-03-24 | SSH access for internal-IP-only App Engine flexible instances |  | App Engine flexible environment now supports SSH login to instances that use only internal IP addresses. |
| 2023-03-15 | Python 3.10 runtime for App Engine flexible environment |  | Python 3.10 runtime is generally available in App Engine flexible environment and requires an operating system version to be specified in app.yaml; Python 3.10 runtime is available in preview for App Engine flexible environment, built on Ubuntu 18/22 with buildpacks and requiring app.yaml updates. |
| 2023-03-15 | Python 3.11 runtime for App Engine flexible environment |  | Python 3.11 runtime is generally available in App Engine flexible environment and requires an operating system version to be specified in app.yaml; Python 3.11 runtime is available in preview for App Engine flexible environment, built on Ubuntu 18/22 with buildpacks and requiring app.yaml updates. |
| 2023-03-15 | Python 3.8 runtime for App Engine flexible environment |  | Python 3.8 runtime is generally available in App Engine flexible environment and requires an operating system version to be specified in app.yaml; Python 3.8 runtime is available in preview for App Engine flexible environment, built on Ubuntu 18/22 with buildpacks and requiring app.yaml updates. |
| 2023-03-15 | Python 3.9 runtime for App Engine flexible environment |  | Python 3.9 runtime is generally available in App Engine flexible environment and requires an operating system version to be specified in app.yaml; Python 3.9 runtime is available in preview for App Engine flexible environment, built on Ubuntu 18/22 with buildpacks and requiring app.yaml updates. |
| 2022-12-13 | Configurable App Engine app-level default service account |  | App Engine now allows selecting any configured service account in the project as the application-level default during app creation and updates. |
| 2022-11-09 | Internal IP mode for App Engine flexible environment |  | App Engine flexible environment instances now support setting IP mode to internal. |
| 2022-05-23 | Disabling external ephemeral IP addresses for App Engine Flex |  | App Engine Flex now supports disabling external ephemeral IP addresses for services. |
| 2022-05-18 | User-managed service account per App Engine version |  | Specifying a user-managed service account per App Engine version during deployment is now generally available; You can now specify a user-managed service account for each App Engine version during deployment in Preview. |
| 2021-06-14 | App Engine regional expansion to additional locations |  | App Engine became available in the us-west1 (Oregon), asia-southeast1 (Singapore), and asia-east1 (Taiwan) regions. |
| 2021-04-13 | App Engine regional expansion to europe-central2 |  | App Engine became available in the europe-central2 region (Warsaw). |
| 2020-09-25 | App Engine network ingress controls |  | App Engine can now use network ingress controls to allow traffic only from the project VPC or via Cloud Load Balancing. |
| 2020-07-08 | External HTTPS Load Balancing via Serverless Network Endpoint Groups |  | App Engine now supports external HTTPS load balancing through Serverless NEGs, enabling Cloud CDN integration. |
| 2020-06-08 | App Engine regional expansion to asia-southeast2 |  | App Engine became available in the asia-southeast2 region (Jakarta). |
| 2020-05-14 | App Engine resource billing labels and BigQuery export |  | App Engine now supports applying labels to services and exporting resource-level billing data to BigQuery for detailed billing queries. |
| 2020-04-20 | App Engine regional expansion to us-west4 |  | App Engine became available in the us-west4 region (Las Vegas, NV). |
| 2020-03-13 | App Engine regional availability in asia-northeast3 |  | App Engine became available in the asia-northeast3 (Seoul) region. |
| 2020-03-06 | App Engine regional availability in us-west3 |  | App Engine became available in the us-west3 (Salt Lake City) region. |
| 2020-02-11 | App Engine regional app URL format |  | App Engine app URLs now include a region ID (for example, PROJECT_ID.REGION_ID.r.appspot.com) to improve request routing. |
| 2019-04-18 | App Engine regional availability in asia-northeast2 |  | App Engine became available in the asia-northeast2 (Osaka) region. |
| 2019-04-15 | App Engine regional availability in europe-west6 |  | App Engine became available in the europe-west6 (Zurich) region. |
| 2019-04-09 | Cloud Tasks general availability |  | Cloud Tasks reached general availability for asynchronous task execution. |
| 2019-03-04 | Cloud Scheduler general availability |  | Cloud Scheduler reached general availability to run scheduled units of work (cron jobs). |
| 2019-01-07 | App Engine WebSockets and session affinity |  | App Engine added support for WebSockets and session affinity to enable persistent connections to instances. |
| 2018-10-22 | App Engine regional availability in asia-east2 |  | App Engine became available in the asia-east2 (Hong Kong) region. |
| 2018-07-10 | App Engine regional availability in us-west2 |  | App Engine became available in the us-west2 (Los Angeles) region. |
| 2018-05-04 | App Engine flexible environment Debian 8 Jessie OS deprecation | 2018-05-30 | App Engine flexible environment customers were moved from Debian 8 Jessie to an Ubuntu-based OS, with the Jessie migration starting on May 30, 2018; deprecated on 2018-05-30. |
| 2018-03-21 | App Engine Python 3.4 runtime | 2019-03-29 | The Python 3.4 runtime was deprecated, with shutdown scheduled for March 29, 2019; The App Engine flexible environment Python 3.4 runtime was updated to version 3.4.8; deprecated on 2019-03-29. |
| 2018-02-14 | App Engine Python 3.5 runtime |  | The App Engine Python 3.5 runtime was updated to version 3.5.5. |
| 2018-02-14 | App Engine Python 3.6 runtime |  | The App Engine Python 3.6 runtime was updated to version 3.6.4. |
| 2018-01-10 | App Engine regional availability in northamerica-northeast1 |  | App Engine became available in the northamerica-northeast1 (Montreal, Canada) region. |
| 2017-12-14 | App Engine deployment IAM role requirements |  | Documentation for deploying App Engine with IAM roles and service accounts was updated to clarify required permissions. |
| 2017-10-31 | App Engine regional availability in asia-south1 |  | App Engine became available in the asia-south1 (Mumbai, India) region. |
| 2017-10-11 | App Engine firewall |  | App Engine firewall was announced as generally available; The App Engine firewall was introduced as a beta feature. |
| 2017-10-04 | App Engine flexible environment default Python version |  | The App Engine flexible environment now defaults to Python 3.6 when Python 3 is requested, with Python 3.5 still configurable via app.yaml. |
| 2017-10-02 | Gzip response compression in App Engine flexible environment |  | App Engine flexible environment applications now use gzip compression for all responses by default after redeploy. |
| 2017-09-26 | App Engine flexible environment billing granularity |  | App Engine flexible environment instance billing moved from per-minute to per-second increments and reduced the minimum usage cost to one minute. |
| 2017-09-18 | Legacy health checks | 2018-09-30 | Legacy health checks were discontinued for App Engine; deprecated on 2018-09-30. |
| 2017-09-18 | Updated health checks for App Engine projects |  | Updated health checks became the default for new App Engine projects, and migration from legacy checks was supported via gcloud app update --split-health-checks. |
| 2017-09-13 | Custom domain management via gcloud and Admin API |  | Gcloud commands and Admin API methods for custom domain mapping, including domain verification and authorized domain listing, became generally available. |
| 2017-09-13 | Managed SSL certificates for custom domains |  | Managed SSL certificates allow App Engine to automatically provision, renew, and revoke certificates for mapped custom domains; Existing domain mappings and certificates continue to work while enabling an upgrade path to managed SSL certificates. |
| 2017-09-05 | App Engine regional expansion to southamerica-east1 |  | App Engine became available in the southamerica-east1 (São Paulo) region. |
| 2017-08-25 | Python 3.5 runtime patch update |  | The Python 3.5 runtime was updated to version 3.5.4 with security and bug fixes. |
| 2017-08-01 | App Engine regional expansion to europe-west3 |  | App Engine became available in the europe-west3 (Frankfurt) region. |
| 2017-07-25 | Python 3.6 runtime patch update |  | The Python 3.6 runtime was updated to version 3.6.2 with security and bug fixes. |
| 2017-07-18 | App Engine regional expansion to australia-southeast1 |  | App Engine became available in the australia-southeast1 (Sydney) region. |
| 2017-07-12 | Updated health checks |  | Updated health checks were introduced, enabling separate liveness and readiness checks for instances in beta. |
| 2017-07-12 | Updated health checks deployment behavior |  | When updated health checks are enabled, deployments fail if the application does not reach a ready state. |
| 2017-06-06 | App Engine flexible environment availability in europe-west2 |  | The App Engine flexible environment became available in the europe-west2 (London) region. |
| 2017-06-06 | Custom domain and SSL certificate management via Admin API and gcloud |  | Beta-level Admin API methods and gcloud commands were enabled for creating and managing custom domains and SSL certificates. |
| 2017-05-24 | Python 3.6 runtime support for App Engine flexible environment |  | App Engine flexible environments added Beta support for Python 3.6 via app.yaml runtime_config python_version: 3.6. |
| 2017-05-09 | App Engine flexible environment availability in us-east4 |  | The App Engine flexible environment became available in the us-east4 (North Virginia) region. |
| 2017-04-11 | Task Queue API request verification guidance in App Engine flexible environment |  | App Engine flexible environment documentation was updated with instructions for verifying requests from the Task Queue API. |
| 2017-04-11 | Task Queue API to Cloud Tasks migration guidance for App Engine flexible environment |  | Guidance was added for upgrading from the App Engine Task Queue API in compat runtimes to Cloud Tasks in the flexible environment. |
| 2017-03-28 | App Engine flexible environment availability in europe-west |  | The App Engine flexible environment became available in the europe-west region. |
| 2017-03-09 | .NET Core runtime for App Engine flexible environment (Beta) |  | The .NET Core runtime was introduced for the App Engine flexible environment in Beta. |
| 2017-03-09 | App Engine flexible environment general availability |  | The App Engine flexible environment reached general availability with 99.95% SLA and support for Node.js, Ruby, Python, Java, and Go workloads. |
| 2017-03-09 | PHP 7 runtime for App Engine flexible environment (Beta) |  | The PHP 7 runtime was introduced for the App Engine flexible environment in Beta. |
| 2016-12-06 | App Engine flexible environment app.yaml configuration migration to env:true |  | New App Engine flexible environment applications now use env: true in app.yaml instead of vm: true, with existing applications supported temporarily. |
| 2016-12-05 | Python 3.5 runtime support for App Engine flexible environment |  | Python support in the App Engine flexible environment was updated from 3.4 to 3.5 for the latest Python runtime version, and apps can target Python 3.5 explicitly. |
| 2016-11-15 | App Engine flexible environment availability in asia-northeast1 |  | The App Engine flexible environment became available in the asia-northeast1 region. |
| 2016-11-15 | App Engine flexible environment opt-in via app.yaml env:flex |  | Developers can enable the App Engine flexible environment by setting env:flex (instead of vm:true) in app.yaml. |
| 2016-11-15 | Custom machine types for App Engine flexible environment |  | App Engine flexible environments added support for custom machine types. |
| 2016-11-15 | java-compat runtime (App Engine flexible environment) | 2016-11-15 | The java-compat runtime in App Engine flexible environment was marked as deprecated; deprecated on 2016-11-15. |
| 2016-11-15 | jetty9-compat runtime (App Engine flexible environment) | 2016-11-15 | The jetty9-compat runtime in App Engine flexible environment was marked as deprecated; deprecated on 2016-11-15. |
| 2016-11-15 | Legacy Go App Engine package support in App Engine flexible environment | 2016-11-15 | The legacy Go App Engine package was deprecated for use in App Engine flexible environment, with the cloud.google.com/go package as the replacement; deprecated on 2016-11-15. |
| 2016-11-15 | Modern networking stack with improved throughput in App Engine flexible environment |  | App Engine flexible environment introduced a modern networking stack with increased throughput. |
| 2016-11-15 | Multi-zonal deployment for App Engine flexible environment |  | App Engine flexible environment gained support for deploying applications across multiple zones. |
| 2016-11-15 | python-compat runtime (App Engine flexible environment) | 2016-11-15 | The python-compat runtime in App Engine flexible environment was marked as deprecated; deprecated on 2016-11-15. |
| 2016-11-15 | python27 runtime (App Engine flexible environment) | 2016-11-15 | The python27 runtime in App Engine flexible environment was marked as deprecated; deprecated on 2016-11-15. |
| 2016-05-02 | Ruby runtime support in App Engine flexible environment |  | App Engine flexible environment added support for the Ruby runtime. |
| 2016-03-24 | Managed VMs rebranding to App Engine flexible environment |  | The App Engine offering previously named Managed VMs was renamed to App Engine flexible environment. |
| 2016-02-03 | Container build backend option for App Engine flexible deployments |  | App Engine flexible (Managed VMs) added a beta option to build deployment containers using Cloud Build via app/use_cloud_build, in addition to the default Compute Engine VM Docker build path. |

Source file slug: `app-engine-flexible-environment-python.md`

