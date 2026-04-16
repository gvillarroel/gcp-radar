# App Engine flexible environment PHP

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 66
Unique features: 53

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-02-27 | PHP 8.5 runtime |  | The PHP 8.5 runtime lets App Engine flexible environment applications run on PHP 8.5; The PHP 8.5 runtime lets App Engine flexible environment applications run on PHP 8.5. |
| 2025-10-20 | TLS 1.2+ support with secure cipher suites |  | This capability lets App Engine flexible environment applications use TLS 1.2 and later with a secure set of cipher suites; This capability lets App Engine flexible environment applications use TLS 1.2 and later with a secure set of cipher suites. |
| 2025-08-07 | TLS 1.1 and earlier support | March 2025 | This capability allows App Engine flexible environment applications to use TLS 1.1 and earlier protocol versions; deprecated on March 2025. |
| 2025-06-17 | PHP 8.4 runtime |  | The PHP 8.4 runtime lets App Engine flexible environment applications run on PHP 8.4; The PHP 8.4 runtime lets App Engine flexible environment applications run on PHP 8.4. |
| 2024-07-30 | Runtime lifecycle stage filtering |  | This console feature lets you filter App Engine versions by runtime lifecycle stage and view warning indicators for support status. |
| 2024-02-26 | PHP 8.3 runtime |  | The PHP 8.3 runtime lets App Engine flexible environment applications run on PHP 8.3; The PHP 8.3 runtime lets App Engine flexible environment applications run on PHP 8.3. |
| 2023-07-10 | PHP 7.4 runtime |  | The PHP 7.4 runtime lets App Engine flexible environment applications run on PHP 7.4 and requires an operating system version in app.yaml; The PHP 7.4 runtime lets App Engine flexible environment applications run on PHP 7.4 and requires an operating system version in app.yaml. |
| 2023-07-10 | PHP 8.1 runtime |  | The PHP 8.1 runtime lets App Engine flexible environment applications run on PHP 8.1 and requires an operating system version in app.yaml; The PHP 8.1 runtime lets App Engine flexible environment applications run on PHP 8.1 and requires an operating system version in app.yaml. |
| 2023-07-10 | PHP 8.2 runtime |  | The PHP 8.2 runtime lets App Engine flexible environment applications run on PHP 8.2 and requires an operating system version in app.yaml; The PHP 8.2 runtime lets App Engine flexible environment applications run on PHP 8.2 and requires an operating system version in app.yaml. |
| 2023-03-24 | SSH access for internal IP-only instances |  | This capability lets you use SSH to log in to App Engine flexible environment instances that have only internal IP addresses. |
| 2022-12-13 | App-level default service account selection |  | This capability lets you choose any configured project service account as the app-level default service account when creating or updating an App Engine application. |
| 2022-11-09 | Internal IP mode for instances |  | This capability lets App Engine flexible environment instances run with internal-only IP mode instead of external ephemeral IP addresses; This capability lets App Engine flexible environment instances run with internal-only IP mode instead of external ephemeral IP addresses. |
| 2022-05-18 | Per-version user-managed service accounts |  | This capability lets you specify a user-managed service account for each App Engine version during deployment; This capability lets you specify a user-managed service account for each App Engine version during deployment. |
| 2020-09-25 | Network ingress controls |  | Network ingress controls let an app accept requests only from the project's VPC or through Cloud Load Balancing. |
| 2020-07-08 | Cloud CDN with App Engine |  | This capability lets App Engine applications use Cloud CDN. |
| 2020-07-08 | External HTTP(S) Load Balancing via serverless NEGs |  | This capability lets App Engine use External HTTP(S) Load Balancing through serverless network endpoint groups. |
| 2020-05-14 | Resource labels for billing analysis |  | This capability lets you label App Engine services and analyze fine-grained billing data in BigQuery. |
| 2020-02-11 | Region ID in appspot URLs |  | This capability adds a region identifier to appspot.com URLs to improve request routing for App Engine applications. |
| 2019-04-09 | Cloud Tasks integration |  | This capability lets App Engine applications use Cloud Tasks to run asynchronous work outside user requests. |
| 2019-03-04 | Cloud Scheduler integration |  | This capability lets App Engine applications use Cloud Scheduler to run scheduled units of work. |
| 2018-05-04 | Debian 8 Jessie operating system support | June 2018 | This operating system option lets App Engine flexible environment applications run on the Debian 8 Jessie base image; deprecated on June 2018. |
| 2017-10-11 | App Engine firewall |  | The App Engine firewall lets you control network access to your App Engine applications; The App Engine firewall lets you control network access to your App Engine applications. |
| 2017-10-02 | Automatic gzip response compression |  | This capability compresses App Engine flexible environment responses with gzip by default after redeployment. |
| 2017-09-26 | Per-second instance billing |  | This billing model charges App Engine flexible environment instances in per-second increments with a one-minute minimum. |
| 2017-09-18 | Legacy health checks | September 30th, 2018 | Legacy health checks monitor App Engine flexible environment instances using the older health check system; deprecated on September 30th, 2018. |
| 2017-09-18 | Updated health checks |  | Updated health checks use separate liveness and readiness-style checks to verify that an instance is running and ready to serve traffic; Updated health checks use separate liveness and readiness-style checks to verify that an instance is running and ready to serve traffic. |
| 2017-09-13 | Custom domain mapping commands and Admin API |  | This capability provides gcloud commands and Admin API methods for verifying domains and managing custom domain mappings. |
| 2017-09-13 | Managed SSL certificates for custom domains |  | Managed SSL certificates automatically provision, renew, and revoke certificates for App Engine custom domains. |
| 2017-07-12 | Updated health checks readiness enforcement |  | Updated health checks require an application to reach a ready state for deployments to succeed. |
| 2017-06-06 | Custom domain management in Admin API and gcloud |  | Beta Admin API and gcloud capabilities let you create and manage custom domains for App Engine. |
| 2017-06-06 | europe-west2 region availability |  | App Engine flexible environment is available in the europe-west2 region in London. |
| 2017-06-06 | SSL certificate management in Admin API and gcloud |  | Beta Admin API and gcloud capabilities let you create and manage SSL certificates for App Engine. |
| 2017-05-09 | us-east4 region availability |  | App Engine flexible environment is available in the us-east4 region in North Virginia. |
| 2017-04-11 | Task Queue request verification |  | Documentation was added explaining how to verify requests from the App Engine Task Queue API. |
| 2017-03-28 | europe-west region availability |  | App Engine flexible environment is available in the europe-west region. |
| 2017-03-09 | .NET Core runtime |  | The .NET Core runtime is available in Beta for App Engine flexible environment. |
| 2017-03-09 | General availability |  | App Engine flexible environment is generally available with a 99.95% SLA. |
| 2017-03-09 | PHP 7 runtime |  | The PHP 7 runtime is available in Beta for App Engine flexible environment. |
| 2016-12-06 | env: true app.yaml configuration |  | New applications must specify env: true in app.yaml instead of vm:true for the flexible environment. |
| 2016-11-15 | asia-northeast1 region availability |  | App Engine flexible environment is available in the asia-northeast1 region. |
| 2016-11-15 | Custom machine types |  | App Engine flexible environment supports custom machine types. |
| 2016-11-15 | env:flex app.yaml configuration |  | The new App Engine flexible environment is selected by using env:flex instead of vm:true in app.yaml. |
| 2016-11-15 | Go App Engine package support | 2016-11-15 | The Go App Engine package no longer works on App Engine flexible environment and is replaced by the cloud.google.com/go package; deprecated on 2016-11-15. |
| 2016-11-15 | java-compat runtime | 2016-11-15 | The java-compat runtime for App Engine flexible environment is deprecated; deprecated on 2016-11-15. |
| 2016-11-15 | jetty9-compat runtime | 2016-11-15 | The jetty9-compat runtime for App Engine flexible environment is deprecated; deprecated on 2016-11-15. |
| 2016-11-15 | Modern networking stack |  | App Engine flexible environment includes a modern networking stack with increased throughput. |
| 2016-11-15 | Multi-zonal deployment support |  | App Engine flexible environment supports multi-zonal deployments. |
| 2016-11-15 | python-compat runtime | 2016-11-15 | The python-compat runtime for App Engine flexible environment is deprecated; deprecated on 2016-11-15. |
| 2016-11-15 | python27 runtime | 2016-11-15 | The python27 runtime for App Engine flexible environment is deprecated; deprecated on 2016-11-15. |
| 2016-05-02 | Ruby runtime |  | The Ruby runtime is available for App Engine flexible environment. |
| 2016-03-24 | App Engine flexible environment naming |  | App Engine Managed VMs was renamed to App Engine flexible environment. |
| 2016-02-03 | Cloud Build for container construction |  | App deployment can use the Beta Cloud Build service to build the container image remotely. |
| 2016-02-03 | Remote container build on transient Compute Engine VM |  | App deployment can build the container image remotely on a transient Compute Engine VM with Docker installed. |

Source file slug: `app-engine-flexible-environment-php.md`

