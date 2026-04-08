# App Engine flexible environment custom runtimes

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 47
Unique features: 48

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2025-10-20 | TLS 1.2+ protocol and cipher suite support for App Engine flexible environment |  | App Engine flexible environment now supports TLS version 1.2 and later with a secure set of cipher suites in General Availability. |
| 2025-08-07 | TLS 1.1 and earlier support deprecation for App Engine flexible environment | 2025-03-01 | Support for TLS 1.1 and earlier is deprecated in App Engine flexible environment, with guidance to use TLS 1.2 and later; deprecated on 2025-03-01. |
| 2024-07-30 | Runtime lifecycle-stage filtering for App Engine versions |  | The App Engine console now allows filtering versions by runtime lifecycle stage and shows warning icons for versions nearing or past end-of-support status. |
| 2023-03-24 | SSH access for internally addressed App Engine flexible instances |  | You can now SSH into App Engine flexible environment instances that use only internal IP addresses. |
| 2022-12-13 | Configurable app-level default service account for App Engine applications |  | Any configured project service account can now be used as the App Engine app-level default service account during creation and updates. |
| 2022-11-09 | Internal IP mode for App Engine flexible instances |  | App Engine flexible environment instances can now be configured with internal IP mode as a generally available option. |
| 2022-05-18 | Per-version user-managed service account selection during App Engine deployment |  | You can now specify a user-managed service account for each App Engine version at deployment time in general availability; App Engine now supports specifying a user-managed service account per version during deployment, initially introduced in preview. |
| 2021-06-14 | App Engine regional expansion to additional locations |  | App Engine became available in the us-west1 (Oregon), asia-southeast1 (Singapore), and asia-east1 (Taiwan) regions. |
| 2021-04-13 | App Engine regional expansion to europe-central2 |  | App Engine became available in the europe-central2 (Warsaw) region. |
| 2020-07-08 | External HTTPS load balancing via App Engine Serverless NEGs |  | App Engine gained support for External HTTPS Load Balancing through Serverless network endpoint groups, enabling Cloud CDN integration. |
| 2020-04-20 | App Engine regional expansion to us-west4 |  | App Engine became available in the us-west4 (Las Vegas, NV) region. |
| 2020-03-13 | App Engine regional availability (us-west2) |  | App Engine became available in the asia-northeast3 (Seoul) region; App Engine became available in the asia-northeast2 (Osaka, Japan) region. |
| 2020-02-11 | App Engine regional request URL format |  | App Engine introduced optional region-ID based application URLs to improve request routing, with a gradual rollout to existing projects. |
| 2019-04-09 | Cloud Tasks general availability |  | Cloud Tasks reached general availability, enabling asynchronous task execution outside user requests. |
| 2019-03-04 | Cloud Scheduler general availability |  | Cloud Scheduler reached general availability for running scheduled units of work (cron jobs). |
| 2017-12-14 | App Engine deployment IAM role documentation |  | App Engine documentation was updated with improved deployment access-control guidance for IAM roles and service accounts. |
| 2017-10-11 | App Engine firewall general availability |  | App Engine firewall was announced generally available. |
| 2017-10-02 | Default gzip response compression for App Engine Flexible Environment |  | App Engine Flexible Environment now enables gzip compression for all responses by default after you redeploy your app. |
| 2017-09-26 | Per-second instance billing in App Engine Flexible Environment |  | Instance billing granularity was changed to per-second increments, with the minimum charge for instance resources reduced from 10 minutes to 1 minute. |
| 2017-09-18 | Legacy health checks | 2018-09-30 | Legacy health checks are being retired and are no longer available after the deprecation date; deprecated on 2018-09-30. |
| 2017-09-18 | Updated health checks default for new App Engine projects |  | Updated health checks became the default setting for new App Engine projects, with project upgrades possible via gcloud app update --split-health-checks. |
| 2017-09-13 | General availability of App Engine custom domain mapping APIs |  | The App Engine gcloud and Admin API custom domain mapping capabilities, including domains verify and apps.authorizedDomains.list, moved to general availability. |
| 2017-09-13 | Managed SSL certificates for App Engine custom domains |  | Managed certificates became available for App Engine custom domains, with automatic provisioning, renewal, and revocation when a domain is removed. |
| 2017-09-05 | App Engine regional availability in southamerica-east1 |  | App Engine became available in the southamerica-east1 (São Paulo, Brazil) region. |
| 2017-08-23 | App Engine Firewall |  | The App Engine Firewall feature entered beta release. |
| 2017-08-01 | App Engine regional availability in europe-west3 |  | App Engine became available in the europe-west3 (Frankfurt, Germany) region. |
| 2017-07-18 | App Engine regional availability in australia-southeast1 |  | App Engine became available in the australia-southeast1 (Sydney, Australia) region. |
| 2017-07-12 | Updated health checks for App Engine |  | Updated health checks were introduced for App Engine, allowing separate running and readiness checks while initially available in beta. |
| 2017-06-06 | App Engine region availability in europe-west2 |  | App Engine became available in the europe-west2 (London) region. |
| 2017-06-06 | Beta Admin API and gcloud custom domain and SSL certificate management |  | Beta-level Admin API and gcloud commands became available for creating and managing App Engine custom domains and SSL certificates. |
| 2017-05-09 | App Engine region availability in us-east4 |  | App Engine became available in the us-east4 (North Virginia) region. |
| 2017-03-28 | App Engine flexible environment availability in europe-west |  | The App Engine flexible environment became available in the europe-west region. |
| 2017-03-09 | App Engine flexible environment .NET Core runtime |  | The .NET Core runtime entered beta for the App Engine flexible environment. |
| 2017-03-09 | App Engine flexible environment general availability |  | The App Engine flexible environment reached general availability and supports Node.js, Ruby, Python, Java, and Go with 99.95% SLA. |
| 2017-03-09 | App Engine flexible environment PHP 7 runtime |  | The PHP 7 runtime entered beta for the App Engine flexible environment. |
| 2016-11-15 | App Engine flexible environment configuration with env:flex |  | The App Engine flexible environment is selected in app.yaml using env:flex instead of vm:true. |
| 2016-11-15 | App Engine flexible environment custom machine types |  | The App Engine flexible environment added support for custom machine types. |
| 2016-11-15 | App Engine flexible environment modern networking stack |  | The App Engine flexible environment adopted a modern networking stack with increased throughput. |
| 2016-11-15 | App Engine flexible environment multi-zonal deployment |  | The App Engine flexible environment gained multi-zonal deployment support. |
| 2016-11-15 | App Engine flexible environment region availability in asia-northeast1 |  | The Asia-Northeast1 region became available for the App Engine flexible environment. |
| 2016-11-15 | Go App Engine package compatibility | 2016-11-15 | The legacy Go App Engine package was deprecated for use with App Engine flexible environments in favor of cloud.google.com/go packages; deprecated on 2016-11-15. |
| 2016-11-15 | java-compat runtime | 2016-11-15 | The java-compat runtime was deprecated for App Engine flexible environments; deprecated on 2016-11-15. |
| 2016-11-15 | jetty9-compat runtime | 2016-11-15 | The jetty9-compat runtime was deprecated for App Engine flexible environments; deprecated on 2016-11-15. |
| 2016-11-15 | python-compat runtime | 2016-11-15 | The python-compat runtime was deprecated for App Engine flexible environments; deprecated on 2016-11-15. |
| 2016-11-15 | python27 runtime | 2016-11-15 | The python27 runtime was deprecated for App Engine flexible environments; deprecated on 2016-11-15. |
| 2016-05-02 | App Engine flexible environment Ruby runtime |  | The Ruby runtime became available for the App Engine flexible environment. |
| 2016-02-03 | App Engine flexible/Managed VM container build integration with Cloud Build |  | App Engine flexible/Managed VM deployments can use the Cloud Build service (in beta) as an alternative container build path via gcloud deploy configuration. |
| 2016-02-03 | App Engine flexible/Managed VM default container build on transient Compute Engine VM |  | Managed VM and App Engine flexible deployments can build container images remotely on a transient Compute Engine VM with Docker when using gcloud preview app deploy. |

Source file slug: `app-engine-flexible-environment-custom-runtimes.md`

