# App Engine flexible environment Node.js

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 69
Unique features: 71

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2025-11-20 | Node.js 24 runtime support |  | App Engine flexible environment added General Availability support for the Node.js 24 runtime; Node.js 24 support entered Preview for App Engine flexible environment. |
| 2025-10-20 | TLS 1.2+ with secure cipher suites support |  | App Engine flexible environment made TLS 1.2 and later support generally available, including the corresponding secure cipher suites. |
| 2025-08-07 | TLS 1.1 and earlier support | March 2025 | Support for TLS versions 1.1 and earlier was deprecated for App Engine flexible environment; deprecated on March 2025. |
| 2024-11-19 | Node.js 22 runtime support |  | App Engine flexible environment made Node.js 22 generally available. |
| 2024-07-30 | App Engine Console runtime lifecycle stage filtering |  | The App Engine Console now supports filtering versions by runtime lifecycle stage and displays warning icons for support and deprecation status. |
| 2024-05-17 | Node.js 22 runtime preview support |  | Node.js 22 became available in Preview for App Engine flexible environment. |
| 2023-06-26 | Node.js 20 runtime support |  | App Engine flexible environment made Node.js 20 generally available. |
| 2023-06-01 | Pnpm package manager support for Node.js runtimes |  | App Engine flexible environment added support for using Pnpm to manage dependencies for Node.js 18 and Node.js 20 preview runtimes. |
| 2023-05-22 | Node.js 20 runtime preview support |  | Node.js 20 support entered Preview for App Engine flexible environment. |
| 2023-04-11 | Node.js 18 runtime support |  | Node.js 18 became generally available in App Engine flexible environment. |
| 2023-03-24 | SSH access to internal-IP-only flexible instances |  | App Engine flexible environment now allows SSH login to instances that use only internal IP addresses. |
| 2023-02-28 | App Engine flexible environment Node.js 18 runtime |  | The Node.js 18 runtime became available in preview for App Engine flexible environment on Ubuntu 22, using Google Cloud buildpacks and requiring app.yaml updates. |
| 2022-12-13 | App Engine app-level default service account configuration |  | App Engine now allows any configured service account in a project to be used as the app-level default service account when creating or updating an application. |
| 2022-11-09 | App Engine flexible environment internal IP mode |  | App Engine flexible environment instances gained a configurable option to set IP mode to internal. |
| 2022-05-23 | App Engine flexible environment external ephemeral IP disabling |  | App Engine Flex services gained the ability to disable external ephemeral IP addresses for instances. |
| 2022-05-18 | App Engine version-specific user-managed service accounts |  | Deployment now supports specifying a user-managed service account per App Engine version; App Engine added preview support for specifying a user-managed service account for each version during deployment to grant version-level privileges. |
| 2021-06-14 | App Engine regional availability expansion |  | App Engine became available in us-west1 (Oregon), asia-southeast1 (Singapore), and asia-east1 (Taiwan); App Engine became available in region europe-central2 (Warsaw). |
| 2020-09-25 | App Engine network ingress controls |  | App Engine added ingress controls to restrict application traffic to requests from the project VPC or from Cloud Load Balancing. |
| 2020-07-08 | App Engine support for external HTTP(S) load balancing via Serverless NEGs |  | External HTTP(S) Load Balancing is now supported for App Engine through Serverless Network Endpoint Groups. |
| 2020-05-14 | App Engine resource billing labels and BigQuery export |  | App Engine added support for labeling services and exporting billing data to BigQuery to provide fine-grained resource-level billing analysis. |
| 2020-04-20 | App Engine regional availability in us-west4 |  | App Engine is available in the us-west4 (Las Vegas, NV) region. |
| 2020-03-13 | App Engine regional availability in asia-northeast3 |  | App Engine is available in the asia-northeast3 (Seoul) region. |
| 2020-03-06 | App Engine regional availability in us-west3 |  | App Engine is available in the us-west3 (Salt Lake City, Utah) region. |
| 2020-02-11 | App Engine region-based URL format |  | App Engine now supports request URLs that include a region ID (for example, PROJECT_ID.REGION_ID.r.appspot.com). |
| 2019-04-18 | App Engine regional availability in asia-northeast2 |  | App Engine is available in the asia-northeast2 (Osaka, Japan) region. |
| 2019-04-15 | App Engine regional availability in europe-west6 |  | App Engine is available in the europe-west6 (Zurich, Switzerland) region. |
| 2019-04-09 | Cloud Tasks GA for App Engine |  | Cloud Tasks is generally available on App Engine, enabling asynchronous background task execution. |
| 2019-03-04 | Cloud Scheduler GA for App Engine |  | Cloud Scheduler is generally available on App Engine, providing scheduled (cron-style) unit-of-work execution. |
| 2019-01-07 | App Engine WebSockets and session affinity |  | App Engine now supports WebSockets with session affinity to enable persistent instance connections. |
| 2018-10-22 | App Engine regional availability in asia-east2 |  | App Engine is available in the asia-east2 (Hong Kong) region. |
| 2018-07-10 | App Engine regional availability in us-west2 |  | App Engine is available in the us-west2 (Los Angeles) region. |
| 2018-05-04 | App Engine flexible environment Debian 8 Jessie support | 2018-05-30 | The App Engine flexible environment is migrating from Debian 8 Jessie to Ubuntu 16.04, with optional pinning to continue using Debian 8; deprecated on 2018-05-30. |
| 2018-01-10 | App Engine regional availability in northamerica-northeast1 |  | App Engine became available in the northamerica-northeast1 (Montreal, Canada) region. |
| 2017-12-14 | App Engine predefined IAM roles for deployment |  | App Engine clarified deploy-time access control by documenting predefined IAM roles and required permissions for deploying apps with IAM roles and service accounts. |
| 2017-10-31 | App Engine regional availability in asia-south1 |  | App Engine became available in the asia-south1 (Mumbai, India) region. |
| 2017-10-31 | Default Node.js runtime version in App Engine flexible environment |  | For unpinned applications, the App Engine Node.js runtime now defaults to the latest Node.js v8 LTS release. |
| 2017-10-11 | App Engine Firewall general availability |  | App Engine Firewall was announced as generally available. |
| 2017-10-02 | Automatic gzip response compression for App Engine flexible environment |  | App Engine flexible environment began compressing all responses with gzip by default after redeploying an app, with no app.yaml changes required. |
| 2017-09-26 | Per-second instance billing for App Engine flexible environment |  | Flexible environment instance billing changed from per-minute to per-second increments, and minimum usage was reduced from 10 minutes to 1 minute. |
| 2017-09-18 | Legacy health checks | 2018-09-30 | Legacy health checks were deprecated and discontinued for App Engine after September 30, 2018; deprecated on 2018-09-30. |
| 2017-09-18 | Updated App Engine health checks as default for new projects |  | Updated health checks became the default setting for new App Engine projects, with migration from legacy checks via gcloud app update --split-health-checks. |
| 2017-09-13 | General availability of App Engine custom domain mapping APIs and CLI |  | Gcloud and Admin API methods for custom domain mapping, including domains verify and apps.authorizedDomains.list, became generally available. |
| 2017-09-13 | Managed SSL certificate upgrade for existing custom domains |  | Existing domain mappings and SSL certificates in App Engine can continue functioning, and users can upgrade to managed SSL certificates. |
| 2017-09-13 | Managed SSL certificates for App Engine custom domains |  | App Engine added managed certificates for custom domains, automatically provisioning, renewing, and revoking certificates during domain mapping lifecycle. |
| 2017-09-05 | App Engine region expansion: southamerica-east1 |  | App Engine was made available in the southamerica-east1 region (Sao Paulo, Brazil). |
| 2017-08-23 | App Engine firewall (beta) |  | App Engine introduced a beta release of the App Engine Firewall. |
| 2017-08-01 | App Engine region expansion: europe-west3 |  | App Engine was made available in the europe-west3 region (Frankfurt, Germany). |
| 2017-07-18 | App Engine region expansion: australia-southeast1 |  | App Engine was made available in the australia-southeast1 region (Sydney, Australia). |
| 2017-07-12 | Updated health checks |  | Updated health checks enforce deployment readiness by failing deployments when an app instance does not reach a ready state; App Engine added support for updated health checks that separately validate running and readiness states, currently available in Beta. |
| 2017-06-06 | Admin API and gcloud support for custom domains and SSL certificates (beta) |  | Beta-level App Engine Admin API and gcloud capabilities were added to create and manage custom domains and SSL certificates. |
| 2017-06-06 | App Engine region expansion: europe-west2 |  | App Engine was made available in the europe-west2 region (London). |
| 2017-05-09 | App Engine region expansion: us-east4 |  | App Engine was made available in the us-east4 region (North Virginia). |
| 2017-04-11 | Task Queue API migration guidance to Cloud Tasks in flexible environment |  | App Engine updated task queue guidance to direct flexible environment users from Task Queue API to Cloud Tasks and added instructions for verifying Task Queue API requests. |
| 2017-03-28 | App Engine flexible environment availability: europe-west |  | The App Engine flexible environment became available in the europe-west region. |
| 2017-03-09 | App Engine flexible environment .NET Core runtime |  | A .NET Core runtime was introduced for App Engine flexible environment in beta. |
| 2017-03-09 | App Engine flexible environment general availability |  | App Engine flexible environment became generally available, allowing Node.js, Ruby, Python, Java, and Go applications to run on the platform with a 99.95% SLA. |
| 2017-03-09 | PHP 7 runtime for App Engine flexible environment |  | The PHP 7 runtime for App Engine flexible environment entered Beta. |
| 2016-12-06 | App Engine flexible environment `env: true` app.yaml configuration |  | New flexible environment applications are required to use `env: true` in app.yaml instead of `vm: true`, with existing deployments temporarily allowed to keep `vm: true`. |
| 2016-11-15 | App Engine flexible environment `env:flex` selection |  | The App Engine flexible environment selection in app.yaml uses `env:flex` rather than `vm:true`. |
| 2016-11-15 | App Engine flexible environment availability in asia-northeast1 |  | The App Engine flexible environment became available in the Asia-Northeast1 region. |
| 2016-11-15 | App Engine flexible environment custom machine types |  | Custom machine types became available for App Engine flexible environment instances. |
| 2016-11-15 | App Engine flexible environment modern networking stack |  | The App Engine flexible environment introduced a modern networking stack with increased throughput. |
| 2016-11-15 | App Engine flexible environment multi-zonal deployment |  | Flexible environment deployments added support for multi-zonal deployment. |
| 2016-11-15 | java-compat runtime | 2016-11-15 | The java-compat runtime was deprecated for App Engine flexible environment; deprecated on 2016-11-15. |
| 2016-11-15 | jetty9-compat runtime | 2016-11-15 | The jetty9-compat runtime was deprecated for App Engine flexible environment; deprecated on 2016-11-15. |
| 2016-11-15 | legacy Go App Engine package on App Engine flexible environment | 2016-11-15 | The legacy Go App Engine package was deprecated for use in App Engine flexible environment, with migration recommended to the `cloud.google.com/go/...` packages; deprecated on 2016-11-15. |
| 2016-11-15 | python-compat runtime | 2016-11-15 | The python-compat runtime was deprecated for App Engine flexible environment; deprecated on 2016-11-15. |
| 2016-11-15 | python27 runtime | 2016-11-15 | The python27 runtime was deprecated for App Engine flexible environment; deprecated on 2016-11-15. |
| 2016-05-02 | App Engine flexible environment Ruby runtime |  | The Ruby runtime became available for App Engine flexible environment. |
| 2016-03-24 | App Engine managed VMs rebranded to App Engine flexible environment |  | The product name App Engine Managed VMs was changed to App Engine flexible environment. |
| 2016-02-03 | Cloud Build-based container image construction for Managed VMs deployments |  | Managed VM deployments gained remote container image build options, including an alternative beta path using Cloud Build configurable via gcloud app deployment settings. |

Source file slug: `app-engine-flexible-environment-node-js.md`

