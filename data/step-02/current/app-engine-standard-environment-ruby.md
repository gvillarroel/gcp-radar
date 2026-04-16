# App Engine standard environment Ruby

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 110
Unique features: 85

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-17 | Ruby 4.0 runtime |  | Ruby 4.0 runtime support lets App Engine standard environment run Ruby 4.0 applications; Ruby 4.0 runtime support lets App Engine standard environment run Ruby 4.0 applications. |
| 2026-02-12 | App Engine to Cloud Run migration |  | App Engine to Cloud Run migration lets you deploy existing standard environment apps to Cloud Run with the gcloud beta app migrate-to-run command. |
| 2025-10-20 | TLS 1.2 and later support |  | TLS 1.2 and later support enables secure transport using modern TLS versions and approved cipher suites; TLS 1.2 and later support enables secure transport using modern TLS versions and approved cipher suites. |
| 2025-08-07 | TLS 1.1 and earlier support | 2025-03 | TLS 1.1 and earlier support allows legacy transport security versions for App Engine standard environment applications; deprecated on 2025-03. |
| 2025-06-17 | Ruby 3.4 runtime |  | Ruby 3.4 runtime support lets App Engine standard environment run Ruby 3.4 applications; Ruby 3.4 runtime support lets App Engine standard environment run Ruby 3.4 applications. |
| 2025-03-03 | Automatic scaling default max instances |  | Automatic scaling default max instances sets the default maximum number of instances for new standard environment deployments. |
| 2024-12-09 | Serverless VPC Access connector custom organization policies |  | Custom organization policies for Serverless VPC Access connectors let administrators enforce connector policy settings at project, folder, or organization scope. |
| 2024-07-31 | Ruby 3.3 runtime |  | Ruby 3.3 runtime support lets App Engine standard environment run Ruby 3.3 applications; Ruby 3.3 runtime support lets App Engine standard environment run Ruby 3.3 applications. |
| 2024-07-30 | Runtime lifecycle stage filter |  | The runtime lifecycle stage filter lets users filter App Engine versions by lifecycle status and view warnings for versions nearing or past support milestones. |
| 2024-01-23 | Serverless VPC Access connector update |  | Serverless VPC Access connector update lets you modify connector machine type and minimum and maximum instance counts; Serverless VPC Access connector update lets you modify connector machine type and minimum and maximum instance counts. |
| 2023-04-14 | Ruby 3.2 runtime |  | Ruby 3.2 runtime support lets App Engine standard environment run Ruby 3.2 applications; Ruby 3.2 runtime support lets App Engine standard environment run Ruby 3.2 applications. |
| 2022-12-13 | App-level default service account selection |  | App-level default service account selection lets you use any configured service account in the project as the default service account for an App Engine app. |
| 2022-11-01 | Build environment variables |  | Build environment variables let you define environment variables for the App Engine build process; Build environment variables let you define environment variables for the App Engine build process. |
| 2022-05-18 | User-managed service account per version |  | User-managed service account per version lets you assign a specific service account to each deployed App Engine version; User-managed service account per version lets you assign a specific service account to each deployed App Engine version. |
| 2022-05-04 | Ruby 3.0 runtime |  | Ruby 3.0 runtime support lets App Engine standard environment run Ruby 3.0 applications; Ruby 3.0 runtime support lets App Engine standard environment run Ruby 3.0 applications. |
| 2022-03-24 | Serverless VPC Access connectors in Shared VPC host projects |  | Serverless VPC Access connectors in Shared VPC host projects let services use connectors configured in Shared VPC host projects. |
| 2021-11-03 | Serverless VPC Access egress settings |  | Serverless VPC Access egress settings let you choose whether external-destination traffic is routed through a connector; Serverless VPC Access egress settings let you choose whether external-destination traffic is routed through a connector. |
| 2021-06-14 | Regional availability in asia-east1 |  | Regional availability in asia-east1 lets you create and run App Engine applications in the Taiwan region. |
| 2021-06-14 | Regional availability in asia-southeast1 |  | Regional availability in asia-southeast1 lets you create and run App Engine applications in the Singapore region. |
| 2021-06-14 | Regional availability in us-west1 |  | Regional availability in us-west1 lets you create and run App Engine applications in the Oregon region. |
| 2021-04-14 | Serverless VPC Access Shared VPC support |  | Serverless VPC Access Shared VPC support lets App Engine services use connectors with Shared VPC networks; Serverless VPC Access Shared VPC support lets App Engine services use connectors with Shared VPC networks. |
| 2021-04-13 | Regional availability in europe-central2 |  | Regional availability in europe-central2 lets you create and run App Engine applications in the Warsaw region. |
| 2021-03-26 | CPU Utilization metric |  | The CPU Utilization metric reports average CPU usage across all active App Engine standard environment instances. |
| 2020-11-18 | Ruby 2.6 runtime |  | Ruby 2.6 runtime support lets App Engine standard environment run Ruby 2.6 applications; Ruby 2.6 runtime support lets App Engine standard environment run Ruby 2.6 applications. |
| 2020-11-18 | Ruby 2.7 runtime |  | Ruby 2.7 runtime support lets App Engine standard environment run Ruby 2.7 applications; Ruby 2.7 runtime support lets App Engine standard environment run Ruby 2.7 applications. |
| 2020-09-25 | Network ingress controls |  | Network ingress controls let an app accept requests only when they are routed through Cloud Load Balancing. |
| 2020-07-08 | External HTTP(S) Load Balancing via serverless NEGs |  | External HTTP(S) Load Balancing via serverless network endpoint groups lets App Engine use external load balancing and related services such as Cloud CDN. |
| 2020-06-08 | Regional availability in asia-southeast2 |  | Regional availability in asia-southeast2 lets you create and run App Engine applications in the Jakarta region. |
| 2020-05-14 | App Engine resource labels for billing analysis |  | App Engine resource labels for billing analysis let you label services and analyze detailed billing data in BigQuery. |
| 2020-04-20 | Regional availability in us-west4 |  | Regional availability in us-west4 lets you create and run App Engine applications in the Las Vegas region. |
| 2020-03-13 | Regional availability in asia-northeast3 |  | Regional availability in asia-northeast3 lets you create and run App Engine applications in the Seoul region. |
| 2020-03-06 | Regional availability in us-west3 |  | Regional availability in us-west3 lets you create and run App Engine applications in the Salt Lake City region. |
| 2020-02-11 | Region ID in app URLs |  | Region ID in app URLs adds the application region identifier to r.appspot.com request URLs for improved routing; Region ID in app URLs adds the application region identifier to r.appspot.com request URLs for improved routing. |
| 2020-02-06 | Project spending limits | 2020-02-06 | Project spending limits let you cap spending for App Engine projects; deprecated on 2020-02-06. |
| 2019-12-11 | Serverless VPC Access |  | Serverless VPC Access lets App Engine services connect to resources in a VPC network. |
| 2019-07-30 | AppCfg tooling | 2020-07-30 | AppCfg tooling provides legacy command-line tooling for managing App Engine applications; deprecated on 2020-07-30. |
| 2019-07-30 | Cloud SDK delivery for App Engine SDK functionality |  | Cloud SDK delivery for App Engine SDK functionality provides App Engine SDK capabilities exclusively through Cloud SDK. |
| 2019-07-30 | Legacy standalone App Engine SDK | 2020-07-30 | The legacy standalone App Engine SDK provides packaged local tooling for App Engine development and administration; deprecated on 2020-07-30. |
| 2019-06-12 | Ruby runtime |  | The Ruby runtime lets App Engine standard environment run Ruby applications. |
| 2019-04-18 | Regional availability in asia-northeast2 |  | Regional availability in asia-northeast2 lets you create and run App Engine applications in the Osaka region. |
| 2019-04-15 | Regional availability in europe-west6 |  | Regional availability in europe-west6 lets you create and run App Engine applications in the Zurich region. |
| 2018-10-22 | Regional availability in asia-east2 |  | Regional availability in asia-east2 lets you create and run App Engine applications in the Hong Kong region. |
| 2018-07-10 | Regional availability in us-west2 |  | App Engine is available in the us-west2 region in Los Angeles. |
| 2018-05-15 | Automatic scaling max instances setting |  | The max instances setting lets you cap the total number of instances scheduled for an app. |
| 2018-05-15 | Automatic scaling min instances setting |  | The min instances setting lets you keep a minimum number of app instances running. |
| 2018-05-15 | Automatic scaling scheduler upgrade |  | App Engine automatic scaling uses an upgraded scheduler that improves efficiency and reduces loading-request overhead. |
| 2018-05-15 | Automatic scaling target CPU utilization setting |  | The target CPU utilization setting lets you tune automatic scaling to balance latency and cost. |
| 2018-05-15 | Automatic scaling target throughput utilization setting |  | The target throughput utilization setting lets you control when new instances start based on concurrent request load. |
| 2017-10-31 | Regional availability in asia-south1 |  | App Engine is available in the asia-south1 region in Mumbai. |
| 2017-10-11 | App Engine firewall |  | App Engine firewall lets you control inbound access to applications with firewall rules. |
| 2017-09-13 | Custom domain mapping commands and Admin API methods |  | GA gcloud commands and Admin API methods let you verify and manage authorized custom domains for App Engine. |
| 2017-09-13 | Managed SSL certificates for custom domains |  | Managed certificates automatically provision, renew, and revoke SSL certificates for mapped custom domains. |
| 2017-09-05 | Regional availability in southamerica-east1 |  | App Engine is available in the southamerica-east1 region in São Paulo. |
| 2017-08-01 | Regional availability in europe-west3 |  | App Engine is available in the europe-west3 region in Frankfurt. |
| 2017-07-18 | Regional availability in australia-southeast1 |  | App Engine is available in the australia-southeast1 region in Sydney; App Engine is available in the australia-southeast1 region in Sydney. |
| 2017-06-06 | Custom domain and SSL certificate management via Admin API and gcloud |  | Beta Admin API and gcloud features let you create and manage custom domains and SSL certificates. |
| 2017-06-06 | Regional availability in europe-west2 |  | App Engine is available in the europe-west2 region in London. |
| 2017-05-09 | Regional availability in us-east4 |  | App Engine is available in the us-east4 region in North Virginia. |
| 2016-10-27 | Channel service | 2017-10-31 | The Channel service provides real-time communication support for App Engine applications; deprecated on 2017-10-31. |
| 2016-10-27 | XMPP service | 2017-10-31 | The XMPP service provides messaging integration for App Engine applications; deprecated on 2017-10-31. |
| 2016-08-01 | Admin API v1 |  | Version 1 of the App Engine Admin API is generally available. |
| 2016-07-18 | Cloud Console guided walkthrough |  | The Cloud Console includes an interactive App Engine guided walkthrough by preferred language. |
| 2016-07-18 | Cron tasks limit increase |  | App Engine supports up to 250 cron tasks per application. |
| 2016-07-18 | Dashboard per-URL error metrics |  | Server Errors and Client Errors in the App Engine dashboard more accurately reflect per-URL status errors. |
| 2016-07-18 | LeaseTasksByTag rate limit |  | LeaseTasksByTag requests are limited to 25 requests per second. |
| 2016-05-25 | URL Fetch invalid port error handling |  | URL Fetch now consistently returns INVALID_URL for requests to ports outside the permitted ranges. |
| 2016-04-18 | OverQuota error details |  | App Engine error messages for OverQuota exceptions now include error details when available. |
| 2016-04-18 | Users API group expansion support |  | The App Engine Users API treats users granted access through Google Groups the same as directly assigned admins. |
| 2016-04-18 | Users API IAM role support |  | The App Engine Users API recognizes project IAM roles such as Owner, Editor, Viewer, and App Engine Admin as admin access. |
| 2016-03-04 | URL Fetch default quota increase for billed apps |  | Billed applications receive a higher default quota for URL Fetch. |
| 2016-02-17 | Forwarding of /form path |  | Requests to the /form URL path are now allowed and forwarded to applications. |
| 2016-01-14 | Google Groups access support |  | App Engine supports granting project access through Google Groups membership. |
| 2015-11-30 | Endpoints API discovery disablement |  | The Endpoints API supports a discoverable boolean annotation parameter to disable API discovery. |
| 2015-11-30 | Task Queue Content-Length header for empty payloads |  | Push queue requests for Task Queue tasks with no payload now include a Content-Length header set to 0. |
| 2015-11-30 | Task Queue queue depth calculation optimization |  | App Engine no longer calculates or stores queue depth for non-existent queues, queues marked for deletion, or during queue table outages. |
| 2015-09-25 | Faceted Search |  | Faceted Search is generally available for App Engine applications. |
| 2015-09-25 | Unlimited daily budget default for billed apps |  | Newly billed applications default to an unlimited daily budget instead of a zero-dollar daily cap. |
| 2015-08-27 | Elastic provisioning based on VM and application metrics |  | Applications can be provisioned for current load with elastic provisioning configured from both VM-level and application-level metrics. |
| 2015-08-27 | MVM logs show in context |  | MVM application logs include a show-in-context menu that lets users sort logs by thread_id or request_id when those fields are present. |
| 2015-08-27 | Remote API OAuth 2.0 authentication |  | Remote API supports access using OAuth 2.0 application default credentials. |
| 2015-08-27 | URLFetch oversized payload exception |  | URLFetch uses RequestPayloadTooLargeException for requests whose payloads exceed the allowed size. |
| 2015-08-14 | Admin Console to Cloud Console redirect |  | Admin Console menus redirect users to Cloud Console while some services such as Admin Logs remain in the Admin Console. |
| 2015-08-14 | Datastore empty list property support |  | Datastore properties can represent an empty list value. |
| 2015-08-14 | PyAMF 0.7.2 beta |  | PyAMF version 0.7.2 is available in beta. |
| 2015-08-14 | Task queue retry_limit zero handling |  | Failed tasks in queues configured with retry_limit set to zero are no longer retried. |

Source file slug: `app-engine-standard-environment-ruby.md`

