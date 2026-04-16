# App Engine flexible environment custom runtimes

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 47
Unique features: 51

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2025-10-20 | TLS 1.2+ support |  | App Engine flexible environment supports TLS 1.2 and later with a secure set of cipher suites; App Engine flexible environment supports TLS 1.2 and later with a secure set of cipher suites. |
| 2025-08-07 | TLS 1.1 and earlier support | 2025-08-07 | App Engine flexible environment supports older TLS versions up to TLS 1.1 for application traffic; deprecated on 2025-08-07. |
| 2024-07-30 | Runtime lifecycle stage filtering |  | The App Engine console can filter versions by runtime lifecycle stage and show warning icons for support status. |
| 2023-03-24 | SSH access to internal-IP flexible instances |  | App Engine flexible environment instances that use only internal IP addresses can be accessed over SSH. |
| 2022-12-13 | App-level default service account selection |  | App Engine lets you choose any configured project service account as the app-level default service account during app creation and updates. |
| 2022-11-09 | Internal IP mode |  | App Engine flexible environment instances can be configured to use internal IP mode. |
| 2022-05-18 | Per-version user-managed service account |  | App Engine lets you specify a user-managed service account for each deployed version; App Engine lets you specify a user-managed service account for each deployed version. |
| 2021-06-14 | Regional availability in asia-east1 |  | App Engine flexible environment is available in the asia-east1 region. |
| 2021-06-14 | Regional availability in asia-southeast1 |  | App Engine flexible environment is available in the asia-southeast1 region. |
| 2021-06-14 | Regional availability in us-west1 |  | App Engine flexible environment is available in the us-west1 region. |
| 2021-04-13 | Regional availability in europe-central2 |  | App Engine flexible environment is available in the europe-central2 region. |
| 2020-07-08 | Cloud CDN with App Engine |  | App Engine can use Cloud CDN when fronted by External HTTP(S) Load Balancing through serverless NEGs. |
| 2020-07-08 | External HTTP(S) Load Balancing via serverless NEGs |  | App Engine can be integrated with External HTTP(S) Load Balancing by using serverless network endpoint groups. |
| 2020-04-20 | Regional availability in us-west4 |  | App Engine flexible environment is available in the us-west4 region. |
| 2020-03-13 | Regional availability in asia-northeast3 |  | App Engine flexible environment is available in the asia-northeast3 region. |
| 2020-02-11 | Region ID app URLs |  | App Engine app URLs can include a region ID in the r.appspot.com hostname for routing efficiency and reliability. |
| 2019-04-18 | Regional availability in asia-northeast2 |  | App Engine flexible environment is available in the asia-northeast2 region. |
| 2019-04-15 | Regional availability in europe-west6 |  | App Engine flexible environment is available in the europe-west6 region. |
| 2019-04-09 | Cloud Tasks integration |  | App Engine applications can use Cloud Tasks to run asynchronous work outside user requests. |
| 2019-03-04 | Cloud Scheduler integration |  | App Engine applications can use Cloud Scheduler to run scheduled units of work such as cron jobs. |
| 2018-10-22 | Regional availability in asia-east2 |  | App Engine flexible environment is available in the asia-east2 region. |
| 2018-07-10 | Regional availability in us-west2 |  | App Engine flexible environment is available in the us-west2 region. |
| 2018-01-10 | Regional availability in northamerica-northeast1 |  | App Engine flexible environment is available in the northamerica-northeast1 region. |
| 2017-10-11 | App Engine firewall |  | App Engine firewall lets you control inbound traffic to App Engine services; App Engine firewall lets you control inbound traffic to App Engine services. |
| 2017-10-02 | Default gzip response compression |  | App Engine flexible environment compresses responses with gzip by default after redeployment. |
| 2017-09-26 | Per-second instance billing |  | App Engine flexible environment bills instances in per-second increments with a one-minute minimum usage cost. |
| 2017-09-18 | Legacy health checks | 2018-09-30 | App Engine flexible environment supports legacy health checks for instance monitoring; deprecated on 2018-09-30. |
| 2017-09-18 | Updated health checks |  | App Engine flexible environment uses updated health checks with split liveness and readiness checks for new projects; App Engine flexible environment provides separate liveness and readiness checks through updated health checks. |
| 2017-09-13 | Custom domain mapping API and gcloud support |  | App Engine provides generally available Admin API methods and gcloud commands for custom domain mapping. |
| 2017-09-13 | Managed SSL certificates for custom domains |  | App Engine can automatically provision, renew, and revoke managed SSL certificates for mapped custom domains. |
| 2017-09-05 | Regional availability in southamerica-east1 |  | App Engine flexible environment is available in the southamerica-east1 region. |
| 2017-08-01 | Regional availability in europe-west3 |  | App Engine flexible environment is available in the europe-west3 region. |
| 2017-07-18 | Regional availability in australia-southeast1 |  | App Engine flexible environment is available in the australia-southeast1 region. |
| 2017-06-06 | Custom domain and SSL management API |  | App Engine Admin API and gcloud provide beta features to create and manage custom domains and SSL certificates. |
| 2017-06-06 | Regional availability in europe-west2 |  | App Engine flexible environment is available in the europe-west2 region. |
| 2017-05-09 | Regional availability in us-east4 |  | App Engine flexible environment is available in the us-east4 region. |
| 2017-03-28 | Regional availability in europe-west |  | App Engine flexible environment is available in the europe-west region. |
| 2017-03-09 | .NET Core runtime |  | App Engine flexible environment provides a .NET Core runtime. |
| 2017-03-09 | App Engine flexible environment |  | App Engine flexible environment provides a generally available managed runtime environment for Node.js, Ruby, Python, Java, and Go applications. |
| 2017-03-09 | PHP 7 runtime |  | App Engine flexible environment provides a PHP 7 runtime. |
| 2016-11-15 | Custom machine types |  | App Engine flexible environment supports custom machine types for deployed workloads. |
| 2016-11-15 | env:flex configuration |  | App Engine flexible environment can be selected in app.yaml by using env:flex instead of vm:true. |
| 2016-11-15 | Go App Engine package support | 2016-11-15 | App Engine flexible environment supports the legacy Go App Engine package for Go applications; deprecated on 2016-11-15. |
| 2016-11-15 | java-compat runtime | 2016-11-15 | App Engine flexible environment provides the legacy java-compat runtime; deprecated on 2016-11-15. |
| 2016-11-15 | jetty9-compat runtime | 2016-11-15 | App Engine flexible environment provides the legacy jetty9-compat runtime; deprecated on 2016-11-15. |
| 2016-11-15 | Multi-zonal deployment support |  | App Engine flexible environment can deploy applications across multiple zones. |
| 2016-11-15 | python-compat runtime | 2016-11-15 | App Engine flexible environment provides the legacy python-compat runtime; deprecated on 2016-11-15. |
| 2016-11-15 | python27 runtime | 2016-11-15 | App Engine flexible environment provides the python27 runtime; deprecated on 2016-11-15. |
| 2016-11-15 | Regional availability in asia-northeast1 |  | App Engine flexible environment is available in the asia-northeast1 region. |
| 2016-05-02 | Ruby runtime |  | App Engine flexible environment provides a Ruby runtime. |
| 2016-02-03 | Cloud Build-based remote container builds |  | App Engine flexible environment can use Cloud Build to remotely build deployment container images. |

Source file slug: `app-engine-flexible-environment-custom-runtimes.md`

