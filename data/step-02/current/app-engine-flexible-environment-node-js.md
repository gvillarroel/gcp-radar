# App Engine flexible environment Node.js

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 69
Unique features: 50

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2025-11-20 | Node.js 24 runtime |  | The App Engine flexible environment supports the Node.js 24 runtime; The App Engine flexible environment supports the Node.js 24 runtime. |
| 2025-10-20 | TLS 1.2 and later support |  | The App Engine flexible environment supports TLS 1.2 and later with secure cipher suites; The App Engine flexible environment supports TLS 1.2 and later with secure cipher suites. |
| 2025-08-07 | TLS 1.1 and earlier support | 2025-03 | The App Engine flexible environment previously supported TLS 1.1 and earlier for application settings; deprecated on 2025-03. |
| 2024-11-19 | Node.js 22 runtime |  | The App Engine flexible environment supports the Node.js 22 runtime; The App Engine flexible environment supports the Node.js 22 runtime. |
| 2024-07-30 | Runtime lifecycle stage filtering |  | The App Engine console can filter deployed versions by runtime lifecycle stage and show warning icons for support status. |
| 2023-06-26 | Node.js 20 runtime |  | The App Engine flexible environment supports the Node.js 20 runtime; The App Engine flexible environment supports the Node.js 20 runtime. |
| 2023-06-01 | Pnpm package manager support |  | Node.js 18 and Node.js 20 runtimes can use the pnpm package manager for dependency configuration. |
| 2023-04-11 | Node.js 18 runtime |  | The App Engine flexible environment supports the Node.js 18 runtime and requires an operating system version in app.yaml; The App Engine flexible environment supports the Node.js 18 runtime built on Ubuntu 22 and Google Cloud buildpacks. |
| 2023-03-24 | SSH access to internal-IP-only instances |  | You can use SSH to log in to App Engine flexible environment instances that use only internal IP addresses. |
| 2022-12-13 | App-level default service account selection |  | App Engine applications can use any configured project service account as the app-level default service account during creation and updates. |
| 2022-11-09 | Internal IP mode |  | App Engine flexible environment instances can be configured to use internal IP mode. |
| 2022-05-23 | Disable external ephemeral IP addresses |  | App Engine flexible environment services can disable external ephemeral IP addresses. |
| 2022-05-18 | Per-version user-managed service accounts |  | Each App Engine version can be deployed with a specified user-managed service account; Each App Engine version can be deployed with a specified user-managed service account. |
| 2020-09-25 | Network ingress controls |  | Network ingress controls can restrict App Engine traffic to requests from a project's VPC or through Cloud Load Balancing. |
| 2020-07-08 | Cloud CDN support |  | App Engine can be used with Cloud CDN through External HTTP(S) Load Balancing and serverless network endpoint groups. |
| 2020-07-08 | External HTTP(S) Load Balancing via serverless NEGs |  | App Engine supports External HTTP(S) Load Balancing through serverless network endpoint groups. |
| 2020-05-14 | Resource labeling for billing analysis |  | App Engine services can use labels so billing exports to BigQuery can provide fine-grained resource cost analysis. |
| 2020-02-11 | Region ID appspot URLs |  | App Engine apps can use region ID–based appspot URLs to improve request routing efficiency and reliability. |
| 2019-01-07 | Session affinity |  | App Engine supports session affinity to keep persistent connections routed to the same instance. |
| 2019-01-07 | WebSockets support |  | App Engine supports WebSockets for persistent connections to instances. |
| 2018-05-04 | Debian 8 Jessie base OS support | 2018-06 | App Engine flexible environment applications were able to run on the Debian 8 Jessie base operating system; deprecated on 2018-06. |
| 2017-10-31 | Default Node.js LTS runtime selection |  | The Node.js runtime defaults to the latest Node.js v8 LTS release unless a version is pinned in package.json. |
| 2017-10-11 | App Engine firewall |  | App Engine provides a firewall for controlling application traffic; App Engine provides a firewall for controlling application traffic. |
| 2017-10-02 | Default gzip response compression |  | App Engine flexible environment compresses responses with gzip by default after redeployment. |
| 2017-09-26 | Per-second instance billing |  | App Engine flexible environment bills instances in per-second increments and reduces the minimum usage cost to one minute. |
| 2017-09-18 | Legacy health checks | 2018-09-30 | App Engine flexible environment supported legacy health checks for instance monitoring; deprecated on 2018-09-30. |
| 2017-09-18 | updated health checks |  | App Engine flexible environment uses updated health checks as the default for new projects; Updated health checks require applications to reach a ready state for deployments to succeed. |
| 2017-09-13 | Custom domain mapping commands and Admin API |  | App Engine provides generally available gcloud commands and Admin API methods for custom domain mapping. |
| 2017-09-13 | Managed SSL certificates |  | App Engine can automatically provision, renew, and revoke SSL certificates for mapped custom domains. |
| 2017-08-01 | europe-west3 regional availability |  | App Engine flexible environment is available in the europe-west3 region in Frankfurt, Germany. |
| 2017-07-18 | australia-southeast1 regional availability |  | App Engine flexible environment is available in the australia-southeast1 region in Sydney, Australia. |
| 2017-06-06 | custom domain and SSL certificate management |  | The Admin API and gcloud CLI can create and manage custom domains and SSL certificates for App Engine. |
| 2017-06-06 | europe-west2 regional availability |  | App Engine flexible environment is available in the europe-west2 region in London. |
| 2017-05-09 | us-east4 regional availability |  | App Engine flexible environment is available in the us-east4 region in North Virginia. |
| 2017-03-28 | europe-west regional availability |  | App Engine flexible environment is available in the europe-west region. |
| 2017-03-09 | .NET Core runtime |  | The App Engine flexible environment supports the .NET Core runtime in Beta. |
| 2017-03-09 | App Engine flexible environment general availability |  | App Engine flexible environment is generally available with a 99.95% SLA for supported runtimes including Node.js. |
| 2017-03-09 | PHP 7 runtime |  | The App Engine flexible environment supports the PHP 7 runtime in Beta. |
| 2016-12-06 | app.yaml flexible environment declaration |  | New applications must declare the flexible environment in app.yaml with env: true instead of vm:true; The flexible environment can be selected in app.yaml with env:flex instead of vm:true. |
| 2016-11-15 | asia-northeast1 regional availability |  | App Engine flexible environment is available in the asia-northeast1 region. |
| 2016-11-15 | custom machine types |  | App Engine flexible environment supports custom machine types. |
| 2016-11-15 | Go App Engine package support | 2016-11-15 | Support for the legacy Go App Engine package in App Engine flexible environment is being removed in favor of cloud.google.com/go packages; deprecated on 2016-11-15. |
| 2016-11-15 | java-compat runtime | 2016-11-15 | The java-compat runtime is a legacy App Engine flexible environment runtime; deprecated on 2016-11-15. |
| 2016-11-15 | jetty9-compat runtime | 2016-11-15 | The jetty9-compat runtime is a legacy App Engine flexible environment runtime; deprecated on 2016-11-15. |
| 2016-11-15 | modern networking stack |  | App Engine flexible environment includes a modern networking stack with increased throughput. |
| 2016-11-15 | multi-zonal deployment support |  | App Engine flexible environment supports deploying applications across multiple zones. |
| 2016-11-15 | python-compat runtime | 2016-11-15 | The python-compat runtime is a legacy App Engine flexible environment runtime; deprecated on 2016-11-15. |
| 2016-11-15 | python27 runtime | 2016-11-15 | The python27 runtime is a legacy App Engine flexible environment runtime; deprecated on 2016-11-15. |
| 2016-05-02 | Ruby runtime |  | The App Engine flexible environment supports the Ruby runtime. |
| 2016-02-03 | Cloud Build-based container builds |  | Managed VMs deployments can build container images remotely with the Cloud Build service instead of a transient Compute Engine VM. |

Source file slug: `app-engine-flexible-environment-node-js.md`

