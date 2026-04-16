# App Engine flexible environment Python

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 76
Unique features: 50

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2025-12-19 | Python 3.14 runtime |  | App Engine flexible environment provides a Python 3.14 runtime for deploying Python applications; App Engine flexible environment provides a Python 3.14 runtime for deploying Python applications. |
| 2025-10-20 | TLS 1.2 and later support |  | App Engine flexible environment supports TLS 1.2 and later with secure cipher suites; App Engine flexible environment supports TLS 1.2 and later with secure cipher suites. |
| 2025-08-07 | TLS 1.1 and earlier support | March 2025 | App Engine flexible environment previously supported TLS 1.1 and earlier for application traffic; deprecated on March 2025. |
| 2025-05-05 | Python 3.13 runtime |  | App Engine flexible environment provides a Python 3.13 runtime for deploying Python applications; App Engine flexible environment provides a Python 3.13 runtime for deploying Python applications. |
| 2024-07-30 | Runtime lifecycle stage filtering |  | The App Engine console can filter deployed versions by runtime lifecycle stage and show lifecycle warning indicators. |
| 2023-11-06 | Python 3.12 runtime |  | App Engine flexible environment provides a Python 3.12 runtime for deploying Python applications; App Engine flexible environment provides a Python 3.12 runtime for deploying Python applications. |
| 2023-03-24 | SSH access to internal-only instances |  | App Engine flexible environment lets you use SSH to connect to instances that use only internal IP addresses. |
| 2023-03-15 | Python 3.10 runtime |  | App Engine flexible environment provides a Python 3.10 runtime for deploying Python applications; App Engine flexible environment provides a Python 3.10 runtime for deploying Python applications. |
| 2023-03-15 | Python 3.11 runtime |  | App Engine flexible environment provides a Python 3.11 runtime for deploying Python applications; App Engine flexible environment provides a Python 3.11 runtime for deploying Python applications. |
| 2023-03-15 | Python 3.8 runtime |  | App Engine flexible environment provides a Python 3.8 runtime for deploying Python applications; App Engine flexible environment provides a Python 3.8 runtime for deploying Python applications. |
| 2023-03-15 | Python 3.9 runtime |  | App Engine flexible environment provides a Python 3.9 runtime for deploying Python applications; App Engine flexible environment provides a Python 3.9 runtime for deploying Python applications. |
| 2022-12-13 | App-level default service account selection |  | App Engine applications can use any configured project service account as the app-level default service account. |
| 2022-11-09 | Internal-only instance IP mode |  | App Engine flexible environment instances can be configured to use only internal IP addresses without external ephemeral IPs; App Engine flexible environment instances can be configured to use only internal IP addresses without external ephemeral IPs. |
| 2022-05-18 | Per-version user-managed service account |  | Each App Engine version can be deployed with its own user-managed service account; Each App Engine version can be deployed with its own user-managed service account. |
| 2020-09-25 | Network ingress controls |  | App Engine can restrict app ingress to traffic from the project's VPC or from Cloud Load Balancing. |
| 2020-07-08 | Cloud CDN support |  | App Engine can be integrated with Cloud CDN for content delivery and caching. |
| 2020-07-08 | External HTTP(S) Load Balancing via serverless NEG |  | App Engine supports External HTTP(S) Load Balancing through serverless network endpoint groups. |
| 2020-05-14 | Resource labels for billing attribution |  | App Engine services can be labeled so exported billing data can be analyzed per resource in BigQuery. |
| 2020-02-11 | Region ID in app URLs |  | App Engine app URLs can include a region ID in the r.appspot.com hostname. |
| 2019-04-09 | Cloud Tasks integration |  | App Engine applications can use Cloud Tasks to run asynchronous work outside user requests. |
| 2019-03-04 | Cloud Scheduler integration |  | App Engine applications can use Cloud Scheduler to run scheduled jobs. |
| 2019-01-07 | Session affinity |  | App Engine flexible environment supports session affinity to keep related requests on the same instance. |
| 2019-01-07 | WebSockets support |  | App Engine flexible environment supports WebSockets for persistent bidirectional connections. |
| 2018-05-04 | Debian 8 Jessie operating system | June 2018 | App Engine flexible environment used the Debian 8 Jessie operating system for application instances; deprecated on June 2018. |
| 2018-03-21 | Python 3.4 runtime | March 29, 2019 | App Engine flexible environment provides a Python 3.4 runtime for deploying Python applications; App Engine flexible environment provides a Python 3.4 runtime for deploying Python applications; deprecated on March 29, 2019. |
| 2018-02-14 | Python 3.5 runtime |  | App Engine flexible environment provides a Python 3.5 runtime for deploying Python applications; The Python 3.5 runtime runs Python applications in the App Engine flexible environment. |
| 2018-02-14 | Python 3.6 runtime |  | App Engine flexible environment provides a Python 3.6 runtime for deploying Python applications; The Python 3.6 runtime runs Python applications in the App Engine flexible environment. |
| 2017-10-11 | App Engine firewall |  | App Engine provides firewall rules to control incoming traffic to applications; App Engine firewall lets you control network access to App Engine services. |
| 2017-10-04 | Default Python 3.6 runtime |  | When Python 3 is requested, App Engine flexible environment defaults to the Python 3.6 runtime. |
| 2017-10-02 | Gzip response compression |  | App Engine flexible environment compresses application responses with gzip by default after redeployment. |
| 2017-09-26 | Per-second instance billing |  | App Engine flexible environment bills instance usage in per-second increments with a one-minute minimum. |
| 2017-09-18 | Legacy health checks | September 30th, 2018 | App Engine flexible environment supported legacy health checks for instance monitoring; deprecated on September 30th, 2018. |
| 2017-09-18 | Updated health checks |  | App Engine flexible environment provides updated health checks for monitoring and traffic management; Updated health checks use separate liveness and readiness checks to verify that an instance is running and ready to serve traffic. |
| 2017-09-13 | Custom domain mapping |  | Custom domain mapping lets you verify and map custom domains by using gcloud commands and Admin API methods. |
| 2017-09-13 | Managed SSL certificates |  | App Engine can automatically provision, renew, and revoke SSL certificates for mapped custom domains; App Engine can automatically provision, renew, and revoke SSL certificates for mapped custom domains. |
| 2017-09-05 | southamerica-east1 region availability |  | App Engine flexible environment is available in the southamerica-east1 region. |
| 2017-08-01 | europe-west3 region availability |  | App Engine flexible environment is available in the europe-west3 region. |
| 2017-07-18 | australia-southeast1 region availability |  | App Engine flexible environment is available in the australia-southeast1 region. |
| 2017-06-06 | Custom domain management |  | Custom domain management lets you create and manage custom domains by using the Admin API and gcloud. |
| 2017-06-06 | europe-west2 region availability |  | App Engine flexible environment is available in the europe-west2 region. |
| 2017-06-06 | Managed SSL certificates for custom domains |  | Managed SSL certificates automatically provision certificates for App Engine custom domains. |
| 2017-05-09 | us-east4 region availability |  | App Engine flexible environment is available in the us-east4 region. |
| 2017-03-28 | europe-west region availability |  | App Engine flexible environment is available in the europe-west region. |
| 2016-11-15 | asia-northeast1 region availability |  | App Engine flexible environment is available in the asia-northeast1 region. |
| 2016-11-15 | Custom machine types |  | Custom machine types let you choose tailored compute resources for flexible environment instances. |
| 2016-11-15 | Modern networking stack |  | The modern networking stack provides increased network throughput for flexible environment applications. |
| 2016-11-15 | Multi-zonal deployment |  | Multi-zonal deployment places flexible environment instances across multiple zones for higher availability. |
| 2016-11-15 | python-compat runtime | 2016-11-15 | The python-compat runtime provides Python compatibility support in the App Engine flexible environment; deprecated on 2016-11-15. |
| 2016-11-15 | python27 runtime | 2016-11-15 | The python27 runtime runs Python 2.7 applications in the App Engine flexible environment; deprecated on 2016-11-15. |
| 2016-02-03 | Cloud Build-based deployment builds |  | Cloud Build-based deployment builds let App Engine flexible environment deployments build container images remotely with Cloud Build. |

Source file slug: `app-engine-flexible-environment-python.md`

