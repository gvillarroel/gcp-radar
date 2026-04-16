# App Engine flexible environment Go

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 80
Unique features: 55

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-12 | Go 1.26 runtime |  | The App Engine flexible environment Go runtime supports deploying applications with Go 1.26; The App Engine flexible environment Go runtime supports deploying applications with Go 1.26. |
| 2025-10-20 | TLS 1.2+ support |  | App Engine flexible environment supports TLS 1.2 and later with a secure set of cipher suites; App Engine flexible environment supports TLS 1.2 and later with a secure set of cipher suites. |
| 2025-08-21 | Go 1.25 runtime |  | The App Engine flexible environment Go runtime supports deploying applications with Go 1.25; The App Engine flexible environment Go runtime supports deploying applications with Go 1.25. |
| 2025-08-07 | TLS 1.1 and earlier support | 2025-03 | App Engine flexible environment previously supported TLS 1.1 and earlier for application traffic; deprecated on 2025-03. |
| 2025-07-30 | Go 1.24 runtime |  | The App Engine flexible environment Go runtime supports deploying applications with Go 1.24; The App Engine flexible environment Go runtime supports deploying applications with Go 1.24. |
| 2025-03-03 | Go 1.23 runtime |  | The App Engine flexible environment Go runtime supports deploying applications with Go 1.23; The App Engine flexible environment Go runtime supports deploying applications with Go 1.23. |
| 2024-07-30 | Runtime lifecycle stage filtering |  | The App Engine console can filter existing versions by runtime lifecycle stage and highlight versions nearing or past support milestones. |
| 2024-03-26 | Go 1.22 runtime |  | The App Engine flexible environment Go runtime supports deploying applications with Go 1.22; The App Engine flexible environment Go runtime supports deploying applications with Go 1.22. |
| 2023-09-08 | Go 1.21 runtime |  | The App Engine flexible environment Go runtime supports deploying applications with Go 1.21; The App Engine flexible environment Go runtime supports deploying applications with Go 1.21. |
| 2023-04-28 | Go 1.20 runtime |  | App Engine flexible environment lets applications specify Go 1.20 through the runtime_version setting in app.yaml. |
| 2023-03-24 | SSH access to internal-IP instances |  | App Engine flexible environment supports SSH login to instances that use only internal IP addresses. |
| 2023-03-23 | Go 1.18 runtime |  | The App Engine flexible environment Go runtime supports deploying applications with Go 1.18; The App Engine flexible environment Go runtime supports deploying applications with Go 1.18 on Ubuntu 22 using Google Cloud buildpacks. |
| 2023-03-23 | Go 1.19 runtime |  | The App Engine flexible environment Go runtime supports deploying applications with Go 1.19; The App Engine flexible environment Go runtime supports deploying applications with Go 1.19 on Ubuntu 22 using Google Cloud buildpacks. |
| 2022-12-13 | App-level default service account selection |  | App Engine applications can use any configured service account in the project as the app-level default service account during create and update operations. |
| 2022-11-09 | Internal IP mode |  | App Engine flexible environment instances can be configured to use internal IP mode. |
| 2022-05-23 | Disable external ephemeral IP addresses |  | App Engine flexible environment services can disable external ephemeral IP addresses. |
| 2022-05-18 | Per-version user-managed service account |  | Each App Engine version can be deployed with a user-managed service account; Each App Engine version can be deployed with a user-managed service account. |
| 2020-09-25 | Network ingress controls |  | App Engine applications can restrict ingress to requests from the project's VPC or through Cloud Load Balancing. |
| 2020-07-08 | External HTTP(S) Load Balancing via serverless NEGs |  | App Engine supports External HTTP(S) Load Balancing through Serverless Network Endpoint Groups, enabling integrations such as Cloud CDN. |
| 2020-05-14 | Billing labels for App Engine services |  | App Engine services can use labels to support fine-grained billing analysis through exported BigQuery billing data. |
| 2020-02-11 | Region ID in app URLs |  | App Engine app URLs can include a region ID in the r.appspot.com hostname for improved request routing. |
| 2019-04-09 | Cloud Tasks integration |  | App Engine can use Cloud Tasks to run asynchronous work outside of user requests. |
| 2019-03-04 | Cloud Scheduler integration |  | App Engine can use Cloud Scheduler to run scheduled units of work such as cron jobs. |
| 2018-10-11 | Default Go runtime version |  | The default App Engine flexible environment Go runtime version is Go 1.11. |
| 2018-08-01 | Go 1.6 runtime deployment | 2018-11-01 | App Engine flexible environment supported deploying new applications with the Go 1.6 runtime; deprecated on 2018-11-01. |
| 2018-08-01 | Go 1.8 runtime | 2018-08-01 | The App Engine flexible environment Go runtime supports deploying applications with Go 1.8; deprecated on 2018-08-01. |
| 2018-08-01 | Go 1.8 runtime deployment | 2018-11-01 | App Engine flexible environment supported deploying new applications with the Go 1.8 runtime; deprecated on 2018-11-01. |
| 2018-03-28 | Automatic latest Go runtime selection |  | Deployments that specify runtime: go in app.yaml automatically use the latest supported Go release. |
| 2018-03-28 | Go 1.10 runtime |  | The App Engine flexible environment Go runtime supports deploying applications with Go 1.10. |
| 2018-02-14 | Distroless base image for Go application images |  | The Go build pipeline produces application images based on gcr.io/distroless/base to reduce image size and minimize the runtime base system. |
| 2018-02-14 | Go build pipeline |  | App Engine flexible environment includes a build pipeline for Go applications. |
| 2018-02-14 | Specific Go runtime version selection |  | App Engine flexible environment lets applications be built with a specific Go runtime version. |
| 2018-01-10 | Regional availability (asia-northeast1) |  | App Engine is available in the northamerica-northeast1 region in Montréal, Canada; App Engine is available in the asia-south1 region in Mumbai, India. |
| 2017-12-14 | IAM-based app deployment |  | App Engine supports deploying applications by using IAM roles and service accounts. |
| 2017-10-11 | App Engine firewall |  | App Engine firewall lets you control inbound access to applications with firewall rules; App Engine firewall lets you control inbound access to applications with firewall rules. |
| 2017-10-02 | Default gzip response compression |  | App Engine flexible environment compresses application responses with gzip by default after redeployment. |
| 2017-09-27 | Distroless base image for beta build pipeline |  | The beta build pipeline produces application images based on gcr.io/distroless/base to reduce image size. |
| 2017-09-27 | Selectable Go runtime version |  | Developers can build applications with a specific Go runtime version in the beta build pipeline. |
| 2017-09-26 | Per-second instance billing |  | App Engine flexible environment bills instances in per-second increments with a reduced one-minute minimum usage cost. |
| 2017-09-18 | Legacy health checks | 2018-09-30 | Legacy health checks are being retired in favor of newer health check mechanisms; deprecated on 2018-09-30. |
| 2017-09-13 | Custom domain mapping management |  | App Engine provides generally available gcloud commands and Admin API methods for mapping custom domains. |
| 2017-09-13 | Managed SSL certificates |  | App Engine supports upgrading existing custom domain mappings to managed SSL certificates; App Engine can automatically provision, renew, and revoke SSL certificates for custom domains. |
| 2017-07-12 | Updated health checks |  | Updated health checks provide separate liveness and readiness checks for application instances. |
| 2017-06-06 | Custom domain and SSL certificate management |  | Beta Admin API and gcloud features let you create and manage custom domains and SSL certificates. |
| 2017-03-09 | General availability of App Engine flexible environment |  | App Engine flexible environment is generally available with support for multiple language runtimes and a 99.95% SLA. |
| 2016-11-15 | Custom machine types |  | App Engine flexible environment supports custom machine types for application instances. |
| 2016-11-15 | env:flex configuration |  | App Engine flexible environment can be selected with env:flex in app.yaml instead of vm:true. |
| 2016-11-15 | Go App Engine package support | 2016-11-15 | The legacy Go App Engine package no longer works on App Engine flexible environment and is deprecated in favor of cloud.google.com/go packages; deprecated on 2016-11-15. |
| 2016-11-15 | java-compat runtime | 2016-11-15 | The java-compat runtime is deprecated for App Engine flexible environment; deprecated on 2016-11-15. |
| 2016-11-15 | jetty9-compat runtime | 2016-11-15 | The jetty9-compat runtime is deprecated for App Engine flexible environment; deprecated on 2016-11-15. |
| 2016-11-15 | Modern networking stack |  | App Engine flexible environment includes a modern networking stack with increased throughput. |
| 2016-11-15 | Multi-zonal deployment support |  | App Engine flexible environment supports deploying applications across multiple zones. |
| 2016-11-15 | python-compat runtime | 2016-11-15 | The python-compat runtime is deprecated for App Engine flexible environment; deprecated on 2016-11-15. |
| 2016-11-15 | python27 runtime | 2016-11-15 | The python27 runtime is deprecated for App Engine flexible environment; deprecated on 2016-11-15. |
| 2016-02-03 | Cloud Build-based container construction |  | Managed VMs supports using the Cloud Build service in beta to build deployment container images remotely. |

Source file slug: `app-engine-flexible-environment-go.md`

