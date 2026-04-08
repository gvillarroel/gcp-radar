# App Engine flexible environment Ruby

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 69
Unique features: 66

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-17 | Ruby 4.0 runtime support in App Engine flexible environment |  | App Engine flexible environment adds support for the Ruby 4.0 runtime in General Availability; App Engine flexible environment adds support for the Ruby 4.0 runtime in Preview. |
| 2025-10-20 | TLS 1.2+ transport security support in App Engine flexible environment |  | App Engine flexible environment supports TLS 1.2 and later with an updated secure cipher suite set. |
| 2025-08-07 | TLS 1.1 and earlier protocol support in App Engine flexible environment | 2025-03 | Support for TLS 1.1 and earlier is deprecated in App Engine flexible environment, with guidance to move to TLS 1.2 and later; deprecated on 2025-03. |
| 2025-06-17 | Ruby 3.4 runtime support in App Engine flexible environment |  | App Engine flexible environment adds General Availability support for the Ruby 3.4 runtime; App Engine flexible environment adds Preview support for the Ruby 3.4 runtime. |
| 2024-07-31 | Ruby 3.3 runtime support in App Engine flexible environment |  | App Engine flexible environment adds General Availability support for the Ruby 3.3 runtime; App Engine flexible environment adds Preview support for the Ruby 3.3 runtime. |
| 2024-07-30 | Runtime lifecycle-stage filtering in App Engine console |  | The App Engine page in Google Cloud Console now allows filtering versions by runtime lifecycle stage and shows warning icons for support/deprecation status. |
| 2023-05-11 | Ruby 3.2 runtime support in App Engine flexible environment |  | App Engine flexible environment makes the Ruby 3.2 runtime generally available, requiring an operating system version in app.yaml; App Engine flexible environment adds Preview support for the Ruby 3.2 runtime, with a required operating system version in app.yaml. |
| 2023-03-24 | SSH access for internal-only flexible environment instances |  | App Engine flexible environment now supports SSH login to instances that use only internal IP addresses. |
| 2022-12-13 | App Engine flexible app-level default service account |  | App Engine now supports using any configured Cloud project service account as the app-level default service account when creating or updating applications. |
| 2022-11-09 | Internal IP mode for App Engine flexible instances |  | App Engine flexible environments now allow setting IP mode to internal for instances. |
| 2022-05-23 | Disable external ephemeral IP addresses for App Engine Flex |  | App Engine Flex services can now disable external ephemeral IP addresses. |
| 2022-05-18 | User-managed service accounts per App Engine version |  | You can now specify a user-managed service account for each App Engine version during deployment; You can specify a user-managed service account for each App Engine version during deployment. |
| 2021-06-14 | App Engine regional expansion |  | App Engine became available in the us-west1, asia-southeast1, and asia-east1 regions; App Engine became available in the europe-central2 region. |
| 2020-09-25 | App Engine network ingress controls |  | App Engine now supports network ingress controls to restrict app traffic to requests from the project VPC or Cloud Load Balancing. |
| 2020-07-08 | External HTTP(S) Load Balancing for App Engine via serverless NEGs |  | App Engine now supports external HTTP(S) Load Balancing through Serverless Network Endpoint Groups. |
| 2020-05-14 | App Engine resource labeling for billing and BigQuery export |  | App Engine now supports labeling resources and exporting billing data to BigQuery for per-resource billing analysis. |
| 2020-03-13 | App Engine availability in asia-northeast3 |  | App Engine launched in the asia-northeast3 (Seoul) region. |
| 2020-03-06 | App Engine availability in us-west3 |  | App Engine launched in the us-west3 (Salt Lake City, Utah) region. |
| 2020-02-11 | App Engine region-ID request URLs |  | App Engine introduced region-ID based app URLs (for example, PROJECT_ID.REGION_ID.r.appspot.com) to improve request routing efficiency and reliability. |
| 2019-04-18 | App Engine availability in asia-northeast2 |  | App Engine launched in the asia-northeast2 (Osaka, Japan) region. |
| 2019-04-15 | App Engine availability in europe-west6 |  | App Engine launched in the europe-west6 (Zurich, Switzerland) region. |
| 2019-04-09 | Cloud Tasks general availability |  | Cloud Tasks became generally available for scheduling asynchronous background work outside user request/response cycles. |
| 2019-03-04 | Cloud Scheduler general availability |  | Cloud Scheduler became generally available for setting up scheduled jobs, including cron-like workflows. |
| 2018-10-22 | App Engine availability in asia-east2 |  | App Engine launched in the asia-east2 (Hong Kong) region. |
| 2018-07-10 | App Engine availability in us-west2 |  | App Engine launched in the us-west2 (Los Angeles) region. |
| 2018-05-04 | App Engine flexible environment Debian 8 Jessie deprecation | 2018-05-30 | Google announced migration away from Debian 8 Jessie to Ubuntu 16.04 for App Engine flexible environment applications, with redeploy required by the migration date; deprecated on 2018-05-30. |
| 2018-01-10 | App Engine availability in northamerica-northeast1 |  | App Engine launched in the northamerica-northeast1 (Montreal, Canada) region. |
| 2017-12-14 | App Engine deployment IAM role documentation |  | App Engine updated its access-control documentation to clarify deployment using IAM roles and required permissions. |
| 2017-10-31 | App Engine region availability (asia-south1) |  | App Engine added support for the asia-south1 (Mumbai, India) region; App Engine added a deployment region in southamerica-east1 (São Paulo, Brazil). |
| 2017-10-11 | App Engine Firewall |  | The App Engine Firewall feature reached general availability; App Engine Firewall entered beta availability. |
| 2017-10-02 | App Engine flexible environment default gzip response compression |  | App Engine flexible environment apps now use gzip compression for all responses by default after redeployment without requiring app.yaml changes. |
| 2017-09-26 | App Engine flexible environment per-second instance billing |  | Instance billing for App Engine flexible environments was changed to per-second increments with a 1-minute minimum usage threshold. |
| 2017-09-18 | Legacy App Engine health checks | 2018-09-30 | Legacy health checks were scheduled for removal and are no longer available after the deprecation date; deprecated on 2018-09-30. |
| 2017-09-18 | Updated App Engine health checks |  | Updated health checks became the default for new App Engine projects, with migration performed via `gcloud app update --split-health-checks`. |
| 2017-09-13 | App Engine custom domain mapping commands and APIs |  | Commands and Admin API methods for custom domain mapping, including domain verification and `apps.authorizedDomains.list`, reached general availability. |
| 2017-09-13 | App Engine managed SSL certificates |  | Existing domain mappings and SSL certificates remain functional, and existing setups can be upgraded to managed SSL certificates. |
| 2017-09-13 | App Engine managed SSL certificates for custom domains |  | Managed SSL certificates became available for custom domains, automating certificate provisioning, renewal, and revocation after domain mapping. |
| 2017-08-30 | App Engine Ruby runtime build pipeline |  | The Ruby runtime build pipeline was upgraded to provide improvements such as environment-variable and Cloud SQL access for build tasks like Rails asset precompilation. |
| 2017-08-01 | App Engine flexible environment region availability: europe-west3 |  | The App Engine flexible environment became available in the Europe West 3 (Frankfurt, Germany) region. |
| 2017-07-18 | App Engine flexible environment region availability: australia-southeast1 |  | The App Engine flexible environment became available in the australia-southeast1 (Sydney, Australia) region. |
| 2017-07-12 | Updated health checks for App Engine flexible environment |  | App Engine flexible environment added beta updated health checks that can separately verify that an instance is running and ready to serve content. |
| 2017-06-30 | Ruby default interpreter version update |  | The default Ruby interpreter version for App Engine flexible environment was updated to Ruby 2.3.4. |
| 2017-06-06 | App Engine flexible environment region availability: europe-west2 |  | The App Engine flexible environment became available in the Europe West 2 (London) region. |
| 2017-06-06 | Beta App Engine Admin API and gcloud custom domain/SSL certificate management |  | Beta-level App Engine Admin API and gcloud features were added to create and manage custom domains and SSL certificates. |
| 2017-05-09 | App Engine flexible environment region availability: us-east4 |  | The App Engine flexible environment became available in the us-east4 (North Virginia) region. |
| 2017-04-11 | Task Queue migration guidance to Cloud Tasks for App Engine flexible environment |  | Documentation was added to help migrate from the App Engine Task Queue API in compat runtimes to Cloud Tasks and to verify Task Queue API requests in the flexible environment. |
| 2017-03-28 | App Engine flexible environment region availability: europe-west |  | The App Engine flexible environment became available in the Europe West region. |
| 2017-03-09 | App Engine flexible environment .NET Core runtime beta |  | The .NET Core runtime entered beta status in the App Engine flexible environment. |
| 2017-03-09 | App Engine flexible environment general availability |  | App Engine flexible environment reached general availability with a 99.95% SLA and support for Node.js, Ruby, Python, Java, and Go runtimes. |
| 2017-03-09 | PHP 7 runtime for App Engine flexible environment |  | The App Engine flexible environment added support for a PHP 7 runtime and marked it as Beta. |
| 2016-12-06 | App Engine flexible environment app.yaml env setting |  | New flexible-environment applications were required to use the env configuration in app.yaml instead of vm:true. |
| 2016-12-06 | Ruby runtime default version in App Engine flexible environment |  | The Ruby runtime began defaulting to Ruby 2.3.3, with other versions selectable via a root .ruby-version file. |
| 2016-11-15 | App Engine flexible environment selection via env:flex |  | The deployment configuration to use the flexible environment was standardized on env:flex instead of vm:true. |
| 2016-11-15 | Asia-Northeast1 region availability for App Engine flexible environment |  | App Engine flexible environment was made available in the asia-northeast1 region. |
| 2016-11-15 | Custom machine types for App Engine flexible environment |  | Custom machine types became available for App Engine flexible environment instances. |
| 2016-11-15 | java-compat runtime | 2016-11-15 | The java-compat runtime was deprecated; deprecated on 2016-11-15. |
| 2016-11-15 | jetty9-compat runtime | 2016-11-15 | The jetty9-compat runtime was deprecated; deprecated on 2016-11-15. |
| 2016-11-15 | Legacy Go App Engine package for flexible environment | 2016-11-15 | The legacy Go App Engine package was deprecated for App Engine flexible environments in favor of cloud.google.com/go packages; deprecated on 2016-11-15. |
| 2016-11-15 | Modern networking stack with increased throughput |  | App Engine flexible environment introduced a modernized networking stack that improved throughput. |
| 2016-11-15 | Multi-zonal deployment for App Engine flexible environment |  | App Engine flexible environment added support for multi-zonal deployments. |
| 2016-11-15 | python-compat runtime | 2016-11-15 | The python-compat runtime was deprecated; deprecated on 2016-11-15. |
| 2016-11-15 | python27 runtime | 2016-11-15 | The python27 runtime was deprecated; deprecated on 2016-11-15. |
| 2016-05-02 | Ruby runtime for App Engine flexible environment |  | Ruby support was introduced for the App Engine flexible environment. |
| 2016-03-24 | App Engine flexible environment branding |  | App Engine Managed VMs was renamed to App Engine flexible environment. |
| 2016-02-03 | Cloud Build-based container construction for App Engine deploys |  | App Engine deploy flows gained an optional Cloud Build-based remote container-building path controlled by app/use_cloud_build configuration. |
| 2016-02-03 | Container build on transient Compute Engine VM for App Engine deploys |  | App Engine preview deploy commands were updated to build container images remotely on temporary Compute Engine VMs with Docker by default. |

Source file slug: `app-engine-flexible-environment-ruby.md`

