# App Engine flexible environment Java

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 62
Unique features: 46

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2025-12-22 | Java 25 runtime |  | The App Engine flexible environment Java runtime supports Java 25; The App Engine flexible environment Java runtime supports Java 25. |
| 2025-10-20 | TLS 1.2 and later support |  | App Engine flexible environment supports TLS 1.2 and later with a secure set of cipher suites; App Engine flexible environment supports TLS 1.2 and later with a secure set of cipher suites. |
| 2025-08-07 | TLS 1.1 and earlier support | 2025-03 | App Engine flexible environment supports Transport Layer Security versions 1.1 and earlier; deprecated on 2025-03. |
| 2024-07-30 | Runtime lifecycle stage filtering |  | The Google Cloud console can filter App Engine versions by runtime lifecycle stage and show warning icons for lifecycle status. |
| 2024-02-26 | Java 21 runtime |  | The App Engine flexible environment Java runtime supports Java 21; The App Engine flexible environment Java runtime supports Java 21. |
| 2023-06-22 | Maven wrapper support |  | The Java runtime supports using Maven wrappers to manage a project's Maven dependency. |
| 2023-04-18 | Java 11 runtime |  | The App Engine flexible environment Java runtime supports Java 11; The App Engine flexible environment Java runtime supports Java 11. |
| 2023-04-18 | Java 17 runtime |  | The App Engine flexible environment Java runtime supports Java 17; The App Engine flexible environment Java runtime supports Java 17. |
| 2023-03-24 | SSH access for internal-IP-only instances |  | App Engine flexible environment instances that use only internal IP addresses can be accessed with SSH. |
| 2022-12-13 | App-level default service account selection |  | App Engine applications can use any configured service account in the project as the app-level default service account during creation and updates. |
| 2022-11-09 | Internal IP mode |  | App Engine flexible environment instances can be configured to use internal IP mode. |
| 2022-05-23 | Disable external ephemeral IP addresses |  | App Engine flexible environment services can disable external ephemeral IP addresses. |
| 2022-05-18 | Version-specific user-managed service accounts |  | Each App Engine version can be deployed with a specified user-managed service account; Each App Engine version can be deployed with a specified user-managed service account. |
| 2020-09-25 | Network ingress controls |  | App Engine applications can restrict ingress to requests from the project's VPC or through Cloud Load Balancing. |
| 2020-07-08 | Cloud CDN integration |  | App Engine can be used with Cloud CDN through External HTTP(S) Load Balancing and Serverless network endpoint groups. |
| 2020-07-08 | External HTTP(S) Load Balancing via serverless NEGs |  | App Engine supports External HTTP(S) Load Balancing through Serverless network endpoint groups. |
| 2020-05-14 | Resource labeling for billing analysis |  | App Engine services can be labeled to enable fine-grained billing analysis after exporting billing data to BigQuery. |
| 2020-02-11 | Region ID app URLs |  | App Engine application URLs can include a region ID in the r.appspot.com hostname for improved request routing. |
| 2019-01-07 | Session affinity |  | App Engine supports session affinity to keep persistent connections routed to an instance; Compat runtimes support session affinity configuration in appengine-web.xml. |
| 2019-01-07 | WebSockets support |  | App Engine supports WebSockets for persistent connections to instances. |
| 2017-10-11 | App Engine firewall |  | App Engine provides firewall controls for managing inbound traffic to applications; App Engine provides firewall controls for managing inbound traffic to applications. |
| 2017-10-02 | Default gzip response compression |  | App Engine flexible environment compresses responses with gzip by default after redeployment. |
| 2017-09-26 | Per-second instance billing |  | App Engine flexible environment bills instances in per-second increments with a reduced minimum usage cost. |
| 2017-09-18 | Legacy health checks | 2018-09-30 | App Engine flexible environment supports legacy health checks for instance monitoring; deprecated on 2018-09-30. |
| 2017-09-18 | Updated health checks |  | App Engine flexible environment supports updated health checks with separate liveness and readiness behavior; Compat runtimes support updated liveness and readiness health checks in appengine-web.xml. |
| 2017-09-13 | Custom domain mapping commands and Admin API |  | App Engine provides generally available gcloud commands and Admin API methods for mapping custom domains. |
| 2017-09-13 | Managed SSL certificates |  | App Engine can use managed SSL certificates for custom domains; App Engine can automatically provision, renew, and revoke SSL certificates for mapped custom domains. |
| 2017-09-11 | Subnetwork configuration support |  | Compat runtimes support specifying subnetwork_name in appengine-web.xml. |
| 2017-06-06 | App Engine flexible environment in europe-west2 |  | App Engine flexible environment is available in the europe-west2 (London) region. |
| 2017-06-06 | Custom domain and SSL certificate management |  | Beta Admin API and gcloud support lets users create and manage custom domains and SSL certificates for App Engine. |
| 2017-05-09 | App Engine flexible environment in us-east4 |  | App Engine flexible environment is available in the us-east4 (North Virginia) region. |
| 2017-03-28 | App Engine flexible environment in europe-west |  | App Engine flexible environment is available in the europe-west region. |
| 2017-03-09 | .NET Core runtime |  | The App Engine flexible environment supports a .NET Core runtime in Beta. |
| 2017-03-09 | PHP 7 runtime |  | The App Engine flexible environment supports a PHP 7 runtime in Beta. |
| 2016-11-15 | App Engine flexible environment in asia-northeast1 |  | App Engine flexible environment is available in the asia-northeast1 region. |
| 2016-11-15 | Custom machine types |  | App Engine flexible environment supports custom machine types. |
| 2016-11-15 | env:flex app.yaml configuration |  | App Engine flexible environment can be selected in app.yaml using env:flex instead of vm:true. |
| 2016-11-15 | Go App Engine package support on flexible environment | 2016-11-15 | Support for the legacy Go App Engine package on App Engine flexible environment is deprecated in favor of the cloud.google.com/go package; deprecated on 2016-11-15. |
| 2016-11-15 | java-compat runtime | 2016-11-15 | The java-compat runtime for App Engine flexible environment is deprecated; deprecated on 2016-11-15. |
| 2016-11-15 | jetty9-compat runtime | 2016-11-15 | The jetty9-compat runtime for App Engine flexible environment is deprecated; deprecated on 2016-11-15. |
| 2016-11-15 | Modern networking stack |  | App Engine flexible environment includes a modern networking stack with increased throughput. |
| 2016-11-15 | Multi-zonal deployment |  | App Engine flexible environment supports multi-zonal deployment. |
| 2016-11-15 | python-compat runtime | 2016-11-15 | The python-compat runtime for App Engine flexible environment is deprecated; deprecated on 2016-11-15. |
| 2016-11-15 | python27 runtime | 2016-11-15 | The python27 runtime for App Engine flexible environment is deprecated; deprecated on 2016-11-15. |
| 2016-05-02 | Ruby runtime |  | The Ruby runtime is available for the App Engine flexible environment. |
| 2016-02-03 | Cloud Build-based container builds |  | Managed VMs can use Cloud Build in Beta to remotely build container images for deployment instead of the default transient Compute Engine VM builder. |

Source file slug: `app-engine-flexible-environment-java.md`

