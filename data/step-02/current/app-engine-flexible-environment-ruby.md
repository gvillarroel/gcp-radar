# App Engine flexible environment Ruby

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 69
Unique features: 64

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-17 | Ruby 4.0 runtime |  | Ruby 4.0 is supported as a runtime for App Engine flexible environment; Ruby 4.0 is supported as a runtime for App Engine flexible environment. |
| 2025-10-20 | TLS 1.2 and later support |  | App Engine flexible environment supports TLS 1.2 and later with a secure set of cipher suites; App Engine flexible environment supports TLS 1.2 and later with a secure set of cipher suites. |
| 2025-08-07 | TLS 1.1 and earlier support | March 2025 | App Engine flexible environment previously supported TLS 1.1 and earlier for application settings; deprecated on March 2025. |
| 2025-06-17 | Ruby 3.4 runtime |  | Ruby 3.4 is supported as a runtime for App Engine flexible environment; Ruby 3.4 is supported as a runtime for App Engine flexible environment. |
| 2024-07-31 | Ruby 3.3 runtime |  | Ruby 3.3 is supported as a runtime for App Engine flexible environment; Ruby 3.3 is supported as a runtime for App Engine flexible environment. |
| 2024-07-30 | Runtime lifecycle stage filtering |  | The App Engine console can filter existing versions by runtime lifecycle stage and show warning icons for support status. |
| 2023-05-11 | Ruby 3.2 runtime |  | Ruby 3.2 is supported as a runtime for App Engine flexible environment and requires an operating system version in app.yaml; Ruby 3.2 is supported as a runtime for App Engine flexible environment and requires an operating system version in app.yaml. |
| 2023-03-24 | SSH access to internal-IP-only instances |  | App Engine flexible environment instances that use only internal IP addresses can be accessed with SSH. |
| 2022-12-13 | App-level default service account selection |  | App Engine applications can use any configured project service account as the app-level default service account during creation and updates. |
| 2022-11-09 | Internal IP mode |  | Internal IP mode lets App Engine flexible environment instances run without external ephemeral IP addresses; Internal IP mode lets App Engine flexible environment instances run without external ephemeral IP addresses. |
| 2022-05-18 | Per-version user-managed service account |  | Each App Engine version can be deployed with a user-managed service account; Each App Engine version can be deployed with a user-managed service account. |
| 2021-06-14 | Region availability: asia-east1 |  | App Engine flexible environment Ruby is available in the asia-east1 region. |
| 2021-06-14 | Region availability: asia-southeast1 |  | App Engine flexible environment Ruby is available in the asia-southeast1 region. |
| 2021-06-14 | Region availability: us-west1 |  | App Engine flexible environment Ruby is available in the us-west1 region. |
| 2021-04-13 | Region availability: europe-central2 |  | App Engine flexible environment Ruby is available in the europe-central2 region. |
| 2020-09-25 | Network ingress controls |  | Network ingress controls restrict App Engine traffic to requests from a project's VPC or through Cloud Load Balancing. |
| 2020-07-08 | Cloud CDN integration |  | App Engine can be used with Cloud CDN through External HTTP(S) Load Balancing and serverless network endpoint groups. |
| 2020-07-08 | External HTTP(S) Load Balancing via serverless NEGs |  | App Engine supports External HTTP(S) Load Balancing through serverless network endpoint groups. |
| 2020-06-08 | Region availability: asia-southeast2 |  | App Engine flexible environment Ruby is available in the asia-southeast2 region. |
| 2020-05-14 | Resource labeling for billing analysis |  | App Engine services can be labeled so billing exports to BigQuery can be analyzed at a finer resource level. |
| 2020-04-20 | Region availability: us-west4 |  | App Engine flexible environment Ruby is available in the us-west4 region. |
| 2020-03-13 | Region availability: asia-northeast3 |  | App Engine flexible environment Ruby is available in the asia-northeast3 region. |
| 2020-03-06 | Region availability: us-west3 |  | App Engine flexible environment Ruby is available in the us-west3 region. |
| 2020-02-11 | Region ID in app URLs |  | App Engine app URLs can include a region ID to improve request routing and reliability. |
| 2019-04-18 | Region availability: asia-northeast2 |  | App Engine flexible environment Ruby is available in the asia-northeast2 region. |
| 2019-04-15 | Region availability: europe-west6 |  | App Engine flexible environment Ruby is available in the europe-west6 region. |
| 2019-04-09 | Cloud Tasks integration |  | App Engine can use Cloud Tasks to run asynchronous tasks outside of user requests; App Engine flexible environment supports migrating Task Queue API workloads in compat runtimes to Cloud Tasks. |
| 2019-03-04 | Cloud Scheduler integration |  | App Engine can use Cloud Scheduler to run scheduled units of work such as cron jobs. |
| 2018-10-22 | Region availability: asia-east2 |  | App Engine flexible environment Ruby is available in the asia-east2 region. |
| 2018-07-10 | Region availability: us-west2 |  | App Engine flexible environment Ruby is available in the us-west2 region. |
| 2018-05-04 | Debian 8 Jessie OS support | 2018-05-30 | App Engine flexible environment applications could run on the Debian 8 Jessie operating system; deprecated on 2018-05-30. |
| 2018-01-10 | Region availability: northamerica-northeast1 |  | App Engine flexible environment Ruby is available in the northamerica-northeast1 region. |
| 2017-10-31 | Region availability: asia-south1 |  | App Engine flexible environment Ruby is available in the asia-south1 region. |
| 2017-10-11 | App Engine firewall |  | App Engine firewall provides network-level access controls for App Engine applications; App Engine firewall provides network-level access controls for App Engine applications. |
| 2017-10-02 | Gzip response compression by default |  | App Engine flexible environment compresses all responses with gzip by default after redeployment. |
| 2017-09-26 | Per-second instance billing |  | App Engine flexible environment bills instances in per-second increments with a one-minute minimum usage cost. |
| 2017-09-18 | Legacy health checks | 2018-09-30 | Legacy health checks were the older health check mechanism for App Engine flexible environment; deprecated on 2018-09-30. |
| 2017-09-18 | Updated health checks |  | Updated health checks are the newer default health check system for new App Engine projects; Updated health checks provide separate liveness and readiness checks to confirm an instance is running and ready to serve content. |
| 2017-09-13 | Custom domain mapping commands and API |  | The gcloud commands and Admin API methods for mapping custom domains to App Engine are generally available. |
| 2017-09-13 | Managed SSL certificates |  | Managed SSL certificates automatically provision, renew, and revoke certificates for App Engine custom domains; Managed SSL certificates can be used with existing App Engine domain mappings by upgrading from existing SSL certificates. |
| 2017-09-05 | Region availability: southamerica-east1 |  | App Engine flexible environment Ruby is available in the southamerica-east1 region. |
| 2017-08-30 | Ruby build pipeline |  | The Ruby runtime uses an improved build pipeline that gives build tasks access to application environment variables and Cloud SQL databases. |
| 2017-08-01 | Region availability: europe-west3 |  | App Engine flexible environment Ruby is available in the europe-west3 region. |
| 2017-07-18 | Region availability: australia-southeast1 |  | App Engine flexible environment Ruby is available in the australia-southeast1 region. |
| 2017-06-30 | Ruby 2.3.4 default runtime |  | The Ruby runtime uses Ruby 2.3.4 as the default interpreter version. |
| 2017-06-06 | Custom domains and SSL certificate management |  | The Admin API and gcloud CLI can be used to create and manage custom domains and SSL certificates. |
| 2017-06-06 | europe-west2 region availability |  | App Engine flexible environment is available in the europe-west2 region in London. |
| 2017-05-09 | us-east4 region availability |  | App Engine flexible environment is available in the us-east4 region in North Virginia. |
| 2017-03-28 | europe-west region availability |  | App Engine flexible environment is available in the europe-west region. |
| 2017-03-09 | .NET Core runtime |  | The .NET Core runtime is available for App Engine flexible environment in Beta. |
| 2017-03-09 | PHP 7 runtime |  | The PHP 7 runtime is available for App Engine flexible environment in Beta. |
| 2016-12-06 | app.yaml env setting |  | New flexible environment applications must use the env setting in app.yaml instead of vm:true; App Engine flexible environment can be selected in app.yaml with the env setting instead of vm:true. |
| 2016-12-06 | Ruby 2.3.3 default runtime |  | The Ruby runtime uses Ruby 2.3.3 by default and supports version override with a .ruby-version file. |
| 2016-11-15 | asia-northeast1 region availability |  | App Engine flexible environment is available in the asia-northeast1 region. |
| 2016-11-15 | Custom machine types |  | App Engine flexible environment supports custom machine types for application instances. |
| 2016-11-15 | Go App Engine package | 2016-11-15 | The Go App Engine package is the legacy Go package for App Engine flexible environment applications; deprecated on 2016-11-15. |
| 2016-11-15 | java-compat runtime | 2016-11-15 | The java-compat runtime is a compatibility runtime for App Engine flexible environment; deprecated on 2016-11-15. |
| 2016-11-15 | jetty9-compat runtime | 2016-11-15 | The jetty9-compat runtime provides Jetty 9 compatibility in App Engine flexible environment; deprecated on 2016-11-15. |
| 2016-11-15 | Modern networking stack |  | A modern networking stack increases networking throughput in App Engine flexible environment. |
| 2016-11-15 | Multi-zonal deployment support |  | App Engine flexible environment supports deploying applications across multiple zones. |
| 2016-11-15 | python-compat runtime | 2016-11-15 | The python-compat runtime is a compatibility runtime for App Engine flexible environment; deprecated on 2016-11-15. |
| 2016-11-15 | python27 runtime | 2016-11-15 | The python27 runtime provides Python 2.7 support in App Engine flexible environment; deprecated on 2016-11-15. |
| 2016-05-02 | Ruby runtime |  | The Ruby runtime is available for App Engine flexible environment applications. |
| 2016-02-03 | Cloud Build deployment builds |  | Managed VMs deployments can use the Cloud Build service to build container images remotely. |

Source file slug: `app-engine-flexible-environment-ruby.md`

