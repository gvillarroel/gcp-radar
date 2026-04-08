# App Engine flexible environment .NET

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 63
Unique features: 72

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-02-18 | App Engine flexible environment .NET 10 runtime support |  | App Engine flexible environment added General Availability support for the .NET 10 runtime; App Engine flexible environment added preview support for the .NET 10 runtime. |
| 2025-10-20 | App Engine flexible environment TLS 1.2+ and secure cipher suites |  | App Engine flexible environment made TLS version 1.2 and later, with a secure cipher-suite set, generally available. |
| 2025-08-07 | App Engine flexible environment TLS 1.1-and-earlier support | March 2025 | Support for TLS versions 1.1 and earlier in App Engine flexible environment is deprecated, with a recommendation to migrate to TLS 1.2 and later; deprecated on March 2025. |
| 2024-07-30 | App Engine console filtering by runtime lifecycle stages |  | The App Engine page in Google Cloud Console can filter versions by runtime lifecycle stage and display warnings for versions approaching or past end of support. |
| 2024-01-10 | App Engine flexible environment .NET 8 runtime support |  | App Engine flexible environment announced General Availability of the .NET 8 runtime; App Engine flexible environment added preview support for the .NET 8 runtime. |
| 2023-05-12 | App Engine flexible environment .NET 6 runtime support |  | App Engine flexible environment added General Availability support for the .NET 6 runtime, requiring an operating system version to be specified in app.yaml; App Engine flexible environment added preview support for the .NET 6 runtime, requiring an operating system version to be specified in app.yaml. |
| 2023-03-24 | Internal-only SSH access for App Engine flexible instances |  | App Engine flexible environment now supports SSH login to instances that use only internal IP addresses. |
| 2022-12-13 | App-level default service account configuration |  | App Engine now allows any configured service account in the Cloud project to be used as the app-level default service account when creating or updating applications. |
| 2022-11-09 | Internal IP mode for App Engine flexible instances |  | App Engine flexible environment added General Availability of setting IP mode to internal for instances. |
| 2022-05-23 | Disable external ephemeral IP addresses for App Engine Flexible Environment services |  | App Engine Flexible Environment now supports disabling external ephemeral IP addresses for its services. |
| 2022-05-18 | Specify a user-managed service account per App Engine version |  | You can now specify a user-managed service account for each App Engine version during deployment; Deployments can specify a user-managed service account for each App Engine version, enabling per-version privilege separation. |
| 2021-06-14 | App Engine regional expansion (us-west1 |  | App Engine added availability in the us-west1 (Oregon), asia-southeast1 (Singapore), and asia-east1 (Taiwan) regions. |
| 2021-06-14 | asia-east1) |  | App Engine added availability in the us-west1 (Oregon), asia-southeast1 (Singapore), and asia-east1 (Taiwan) regions. |
| 2021-06-14 | asia-southeast1 |  | App Engine added availability in the us-west1 (Oregon), asia-southeast1 (Singapore), and asia-east1 (Taiwan) regions. |
| 2021-04-13 | App Engine regional expansion to europe-central2 |  | App Engine became available in the europe-central2 region (Warsaw). |
| 2020-09-25 | Network ingress controls for App Engine |  | App Engine now supports network ingress controls to restrict incoming traffic to VPC-originated requests or traffic through Cloud Load Balancing. |
| 2020-07-08 | External HTTP(S) Load Balancing support via Serverless NEGs |  | App Engine now supports external HTTP(S) Load Balancing through Serverless Network Endpoint Groups. |
| 2020-06-08 | App Engine regional expansion to asia-southeast2 |  | App Engine became available in the asia-southeast2 region (Jakarta). |
| 2020-05-14 | Fine-grained App Engine billing analysis with labels and BigQuery |  | App Engine now supports labeling services and exporting billing data to BigQuery to analyze resource-level billing usage. |
| 2020-04-20 | App Engine regional expansion to us-west4 |  | App Engine became available in the us-west4 region (Las Vegas, NV). |
| 2020-03-13 | App Engine regional expansion to asia-northeast3 |  | App Engine became available in the asia-northeast3 region (Seoul). |
| 2020-03-06 | App Engine regional expansion to us-west3 |  | App Engine became available in the us-west3 region (Salt Lake City, Utah). |
| 2020-02-11 | App Engine region-aware app URLs |  | App Engine now supports app hostnames that include a region identifier (PROJECT_ID.REGION_ID.r.appspot.com) to improve request routing and reliability. |
| 2019-04-18 | App Engine availability in asia-northeast2 |  | App Engine became available in the asia-northeast2 (Osaka, Japan) region. |
| 2019-04-15 | App Engine availability in europe-west6 |  | App Engine became available in the europe-west6 (Zurich, Switzerland) region. |
| 2019-04-09 | Cloud Tasks general availability |  | Cloud Tasks is now generally available for scheduling asynchronous background work outside user requests. |
| 2019-03-04 | Cloud Scheduler general availability |  | Cloud Scheduler is now generally available for configuring scheduled execution of work (cron jobs). |
| 2018-10-22 | App Engine availability in asia-east2 |  | App Engine became available in the asia-east2 (Hong Kong) region. |
| 2018-07-10 | App Engine availability in us-west2 |  | App Engine became available in the us-west2 (Los Angeles) region. |
| 2018-05-04 | Debian 8 Jessie base image deprecation for App Engine flexible environment | 2018-05-30 | The App Engine flexible environment is being migrated from Debian 8 Jessie to an Ubuntu 16.04 base OS, with opt-out possible by pinning to Debian 8; deprecated on 2018-05-30. |
| 2018-01-10 | App Engine availability in northamerica-northeast1 |  | App Engine became available in the northamerica-northeast1 (Montreal, Canada) region. |
| 2017-12-14 | App Engine deployment with IAM roles and service accounts |  | Access control documentation was updated for deploying App Engine apps using predefined IAM roles and service accounts. |
| 2017-10-31 | App Engine availability in asia-south1 |  | App Engine became available in the asia-south1 (Mumbai, India) region. |
| 2017-10-11 | App Engine firewall |  | App Engine Firewall was announced as generally available; The App Engine firewall entered beta release. |
| 2017-10-05 | App Engine flexible environment .NET Core support |  | App Engine flexible environment added general availability for .NET Core, including Docker images for .NET Core 1.0, 1.1, and 2.0. |
| 2017-10-02 | Default gzip compression for App Engine flexible responses |  | App Engine flexible environment now serves responses with gzip compression by default after redeploying an app. |
| 2017-09-26 | App Engine flexible instance billing granularity |  | Instance billing for App Engine flexible environment was changed from per-minute to per-second increments, with minimum billed resource usage reduced from 10 minutes to 1 minute. |
| 2017-09-18 | Legacy health checks | 2018-09-30 | Legacy health checks are no longer available after the stated deprecation date; deprecated on 2018-09-30. |
| 2017-09-18 | Updated health checks as default |  | Updated health checks became the default for new App Engine projects, with upgrade supported via gcloud app update --split-health-checks. |
| 2017-09-13 | Custom domain mapping APIs and gcloud commands |  | Custom domain mapping became generally available via gcloud commands and Admin API methods such as apps.authorizedDomains.list. |
| 2017-09-13 | Custom domain mappings with existing SSL certificates |  | Existing custom domain mappings and SSL certificates continue to function as expected, with an option to upgrade to managed SSL certificates. |
| 2017-09-13 | Managed SSL certificates for custom domains |  | Managed SSL certificates can be used for custom domains, with automatic provisioning, renewal, and revocation when the domain is removed. |
| 2017-09-05 | App Engine availability in southamerica-east1 |  | App Engine became available in the southamerica-east1 (São Paulo, Brazil) region. |
| 2017-08-01 | App Engine availability in europe-west3 |  | App Engine became available in the europe-west3 (Frankfurt, Germany) region. |
| 2017-07-18 | App Engine availability in australia-southeast1 |  | App Engine became available in the australia-southeast1 (Sydney, Australia) region. |
| 2017-07-12 | Updated App Engine health checks |  | The App Engine flexible environment now supports separate checks for instance liveliness and readiness through updated beta health checks. |
| 2017-06-06 | App Engine flexible environment in europe-west2 |  | App Engine is now available in the europe-west2 (London) region. |
| 2017-06-06 | Custom domains and SSL certificate management via Admin API and gcloud |  | Beta support was added in the Admin API and gcloud CLI for creating and managing custom domains and SSL certificates. |
| 2017-05-09 | App Engine flexible environment in us-east4 |  | App Engine is now available in the us-east4 (North Virginia) region. |
| 2017-03-28 | App Engine flexible environment in europe-west |  | The App Engine flexible environment became available in the europe-west region. |
| 2017-03-09 | .NET Core runtime for App Engine flexible environment |  | The .NET Core runtime entered beta for the App Engine flexible environment. |
| 2017-03-09 | App Engine flexible environment generally available |  | The App Engine flexible environment reached general availability with a 99.95% SLA. |
| 2017-03-09 | Go runtime on App Engine flexible environment |  | Go applications can run on the App Engine flexible environment. |
| 2017-03-09 | Java runtime on App Engine flexible environment |  | Java applications can run on the App Engine flexible environment. |
| 2017-03-09 | Node.js runtime on App Engine flexible environment |  | Node.js applications can run on the App Engine flexible environment. |
| 2017-03-09 | PHP 7 runtime for App Engine flexible environment |  | The PHP 7 runtime entered beta in the App Engine flexible environment. |
| 2017-03-09 | Python runtime on App Engine flexible environment |  | Python applications can run on the App Engine flexible environment. |
| 2017-03-09 | Ruby runtime on App Engine flexible environment |  | Ruby applications can run on the App Engine flexible environment. |
| 2016-12-06 | Use env:true for new App Engine flexible applications |  | New App Engine flexible applications are required to use env:true in app.yaml instead of vm:true, with existing applications expected to migrate later. |
| 2016-11-15 | App Engine in Asia-Northeast1 region |  | App Engine is now available in the Asia-Northeast1 region. |
| 2016-11-15 | Custom machine types for App Engine flexible environment |  | App Engine flexible environments gained support for custom machine types. |
| 2016-11-15 | Go App Engine package replacement | 2016-11-15 | The legacy Go App Engine package is deprecated for flexible environment users in favor of cloud.google.com/go packages; deprecated on 2016-11-15. |
| 2016-11-15 | java-compat runtime deprecation | 2016-11-15 | The java-compat runtime was deprecated in the App Engine flexible environment; deprecated on 2016-11-15. |
| 2016-11-15 | jetty9-compat runtime deprecation | 2016-11-15 | The jetty9-compat runtime was deprecated in the App Engine flexible environment; deprecated on 2016-11-15. |
| 2016-11-15 | Modern networking stack with higher throughput |  | The App Engine flexible environment adopted a modernized networking stack that improves throughput. |
| 2016-11-15 | Multi-zonal deployments for App Engine flexible environment |  | App Engine flexible environments gained support for multi-zonal deployment. |
| 2016-11-15 | python-compat runtime deprecation | 2016-11-15 | The python-compat runtime was deprecated in the App Engine flexible environment; deprecated on 2016-11-15. |
| 2016-11-15 | python27 runtime deprecation | 2016-11-15 | The python27 runtime was deprecated in the App Engine flexible environment; deprecated on 2016-11-15. |
| 2016-11-15 | Select flexible environment with env:flex in app.yaml |  | The App Engine flexible environment can be selected in app.yaml using env:flex instead of vm:true. |
| 2016-05-02 | App Engine Flexible Environment Ruby Runtime |  | Added support for the Ruby runtime in App Engine Flexible Environment. |
| 2016-03-24 | App Engine Flexible Environment |  | Renamed App Engine Managed VMs to App Engine Flexible Environment. |
| 2016-02-03 | App Engine Container Build Options |  | Introduced selectable remote container construction methods for App Engine flexible deployments, including default transient Compute Engine VM builds and Cloud Build-based builds. |

Source file slug: `app-engine-flexible-environment-net.md`

