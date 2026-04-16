# App Engine standard environment Python

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 132
Unique features: 97

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-02 | SMTP-based email service migration |  | App Engine standard environment Python supports migrating from the legacy Mail API to an SMTP-based email service such as SendGrid, Mailgun, or Mailjet; App Engine standard environment Python supports migrating from the legacy Mail API to an SMTP-based email service such as SendGrid, Mailgun, or Mailjet. |
| 2026-02-12 | Cloud Run migration command |  | App Engine standard environment Python supports deploying existing apps to Cloud Run with the gcloud beta app migrate-to-run command. |
| 2026-01-31 | Python 2.7 runtime | 2026-01-31 | Python 2.7 is a legacy App Engine standard environment runtime for Python applications; deprecated on 2026-01-31. |
| 2025-12-19 | Python 3.14 runtime |  | Python 3.14 is a supported App Engine standard environment runtime for Python applications; Python 3.14 is a supported App Engine standard environment runtime for Python applications. |
| 2025-10-20 | TLS 1.2 and later support |  | App Engine standard environment supports TLS 1.2 and later with a secure set of cipher suites; App Engine standard environment supports TLS 1.2 and later with a secure set of cipher suites. |
| 2025-08-07 | TLS 1.1 and earlier support | March 2025 | App Engine standard environment previously supported TLS 1.1 and earlier for application connections; deprecated on March 2025. |
| 2025-06-30 | URL Fetch API host certificate validation |  | The URL Fetch API validates the contacted host certificate by default for new deployments. |
| 2025-05-05 | Python 3.13 runtime |  | Python 3.13 is a supported App Engine standard environment runtime for Python applications; Python 3.13 is a supported App Engine standard environment runtime for Python applications. |
| 2025-03-03 | Automatic scaling max_instances default of 20 |  | New App Engine standard environment projects default automatic scaling max_instances to 20 unless overridden in app.yaml. |
| 2024-12-09 | Custom organization policies for Serverless VPC Access connectors |  | Custom organization policies can control Serverless VPC Access connectors at the project, folder, or organization level. |
| 2024-07-30 | Runtime lifecycle stage filtering |  | The Google Cloud console can filter App Engine versions by runtime lifecycle stage and highlight versions nearing or past support milestones. |
| 2024-01-23 | Serverless VPC Access connector updates |  | Serverless VPC Access connectors can be updated to change machine type and minimum or maximum instance counts; Serverless VPC Access connectors can be updated to change machine type and minimum or maximum instance counts. |
| 2023-11-06 | Python 3.12 runtime |  | Python 3.12 is a supported App Engine standard environment runtime for Python applications; Python 3.12 is a supported App Engine standard environment runtime for Python applications. |
| 2023-04-27 | Search API for Python 3 second-generation runtimes |  | The Search API is available in App Engine legacy bundled services for Python 3 second-generation runtimes through the App Engine services SDK. |
| 2023-02-27 | Python 3.11 runtime |  | Python 3.11 is a supported App Engine standard environment runtime for Python applications; Python 3.11 is a supported App Engine standard environment runtime for Python applications. |
| 2022-12-13 | App-level default service account selection |  | App Engine applications can use any configured service account in the Cloud project as the app-level default service account during creation and updates. |
| 2022-11-01 | Build environment variables |  | App Engine supports build environment variables for configuring application build-time settings; App Engine supports build environment variables for configuring application build-time settings. |
| 2022-07-01 | Python 3.10 runtime |  | Python 3.10 is a supported App Engine standard environment runtime for Python applications; Python 3.10 is a supported App Engine standard environment runtime for Python applications. |
| 2022-05-18 | Version-specific user-managed service accounts |  | App Engine versions can be deployed with a specified user-managed service account to scope privileges per version; App Engine versions can be deployed with a specified user-managed service account to scope privileges per version. |
| 2022-04-13 | App Engine legacy bundled services for Python 3 |  | App Engine legacy bundled services are available for Python 3 through language-idiomatic libraries; App Engine legacy bundled services are available for Python 3 through language-idiomatic libraries. |
| 2022-03-24 | Serverless VPC Access connectors in Shared VPC host projects |  | Serverless VPC Access connectors can be configured in Shared VPC host projects for App Engine connectivity; Serverless VPC Access connectors can be configured in Shared VPC host projects for App Engine connectivity. |
| 2022-02-15 | Artifact Registry private Python dependencies |  | Python 3 apps can install private dependencies hosted in an Artifact Registry Python repository through requirements.txt. |
| 2022-01-19 | Blobstore handler for Python 3 bundled services |  | App Engine bundled services for Python 3 provide Blobstore handlers through language-idiomatic libraries. |
| 2022-01-19 | Deferred handler for Python 3 bundled services |  | App Engine bundled services for Python 3 provide Deferred handlers through language-idiomatic libraries. |
| 2022-01-19 | Mail handler for Python 3 bundled services |  | App Engine bundled services for Python 3 provide Mail handlers through language-idiomatic libraries. |
| 2021-11-03 | Serverless VPC Access egress settings |  | Serverless VPC Access egress settings let App Engine control whether traffic to external destinations is routed through a connector; Serverless VPC Access egress settings let App Engine control whether traffic to external destinations is routed through a connector. |
| 2021-03-26 | CPU Utilization metric |  | App Engine standard environment provides a CPU Utilization metric that reports average CPU usage across active instances. |
| 2021-03-11 | Python 3.9 runtime |  | Python 3.9 is a supported App Engine standard environment runtime for Python applications. |
| 2020-09-25 | Network ingress controls |  | Network ingress controls can restrict an App Engine app to receive requests only through Cloud Load Balancing. |
| 2020-07-08 | External HTTP(S) Load Balancing via Serverless NEG |  | App Engine supports External HTTP(S) Load Balancing through Serverless network endpoint groups, enabling integrations such as Cloud CDN. |
| 2020-07-06 | Python 3.8 runtime |  | Python 3.8 is a supported App Engine standard environment runtime for Python applications. |
| 2020-05-14 | App Engine resource labels for billing analysis |  | App Engine services support labels that can be exported with billing data to BigQuery for fine-grained cost analysis. |
| 2020-02-11 | Region ID appspot URLs |  | App Engine supports app URLs that include a region ID to improve request routing efficiency and reliability. |
| 2020-02-06 | Project spending limits | 2020-02-06 | Project spending limits let you cap App Engine application spending for a project; deprecated on 2020-02-06. |
| 2019-12-11 | Serverless VPC Access |  | Serverless VPC Access lets App Engine services connect to internal resources in a VPC network; Serverless VPC Access lets App Engine services connect to internal resources in a VPC network. |
| 2019-07-30 | AppCfg tooling | 2020-07-30 | AppCfg tooling provides legacy command-line deployment and management support for App Engine applications; deprecated on 2020-07-30. |
| 2019-07-30 | Cloud SDK-based App Engine tooling |  | Cloud SDK delivers the supported App Engine SDK functionality for development and deployment workflows. |
| 2019-07-30 | Legacy standalone App Engine SDK | 2020-07-30 | The legacy standalone App Engine SDK packages provide local development and deployment tooling outside Cloud SDK; deprecated on 2020-07-30. |
| 2019-04-18 | Region availability: asia-northeast2 |  | App Engine standard environment for Python is available in the asia-northeast2 region. |
| 2019-04-15 | Region availability: europe-west6 |  | App Engine standard environment for Python is available in the europe-west6 region. |
| 2019-04-09 | Cloud Tasks |  | Cloud Tasks runs asynchronous tasks outside the scope of user requests. |
| 2019-04-04 | Python 3 runtime |  | The Python 3 runtime provides the managed execution environment for Python applications on App Engine standard; The Python 3 runtime provides the managed execution environment for Python applications on App Engine standard. |
| 2018-12-14 | Python 3.7 runtime |  | The Python 3.7 runtime provides a Python 3 execution environment for App Engine standard applications; The Python 3.7 runtime provides a Python 3 execution environment for App Engine standard applications. |
| 2018-12-12 | BSD network sockets |  | BSD network sockets provide the default socket implementation for App Engine applications. |
| 2018-12-12 | Python SDK |  | The Python SDK provides development tooling for App Engine standard Python applications. |
| 2018-12-12 | Sockets API |  | The Sockets API enables applications to use socket-based network communication on App Engine standard. |
| 2018-11-16 | nginx default web server |  | Nginx serves as the default web server for App Engine standard Python applications. |
| 2018-10-31 | Recursive requirements.txt support |  | The Python 3 runtime supports recursive includes in requirements.txt dependency files. |
| 2018-10-22 | Region availability: asia-east2 |  | App Engine standard environment for Python is available in the asia-east2 region. |
| 2018-07-10 | Region availability: us-west2 |  | App Engine standard environment for Python is available in the us-west2 region. |
| 2018-05-15 | Automatic scaling dynamic instance labeling |  | The automatic scaling scheduler labels all auto-scaled instances as Dynamic instead of using Resident instances. |
| 2018-05-15 | Automatic scaling efficiency improvements |  | The automatic scaling system improves scheduling efficiency to reduce instance cost and loading requests. |
| 2018-05-15 | Automatic scaling max instances setting |  | The max instances setting lets you cap the total number of instances scheduled for an application. |
| 2018-05-15 | Automatic scaling min instances setting |  | The min instances setting lets you keep a minimum number of application instances running. |
| 2018-05-15 | Automatic scaling target CPU utilization setting |  | The target CPU utilization setting lets you tune automatic scaling behavior for latency versus cost. |
| 2018-05-15 | Automatic scaling target throughput utilization setting |  | The target throughput utilization setting controls the concurrency threshold for starting new instances. |
| 2017-10-31 | Region availability: asia-south1 |  | App Engine standard environment for Python is available in the asia-south1 region. |
| 2017-10-11 | App Engine firewall |  | App Engine firewall lets you control inbound access to App Engine applications. |
| 2017-09-13 | Custom domain mapping API and CLI |  | The Admin API and gcloud commands let you verify domains and map custom domains to App Engine applications. |
| 2017-09-13 | Managed SSL certificates |  | Managed SSL certificates automatically provision, renew, and revoke certificates for mapped custom domains. |
| 2017-09-05 | Region availability: southamerica-east1 |  | App Engine standard environment for Python is available in the southamerica-east1 region. |
| 2017-08-01 | Region availability: europe-west3 |  | App Engine standard environment for Python is available in the europe-west3 region. |
| 2017-07-18 | Region availability: australia-southeast1 |  | App Engine standard environment for Python is available in the australia-southeast1 region. |
| 2017-06-06 | Custom domain management API and CLI |  | The Admin API and gcloud tool let you create and manage custom domains for App Engine applications. |
| 2017-06-06 | Region availability: europe-west2 |  | App Engine standard environment for Python is available in the europe-west2 region. |
| 2017-06-06 | SSL certificate management API and CLI |  | The Admin API and gcloud tool let you create and manage SSL certificates for App Engine custom domains. |
| 2017-05-09 | Region availability: us-east4 |  | App Engine standard environment for Python is available in the us-east4 region. |
| 2016-10-27 | Channel service | 2017-10-31 | The Channel service enables server-to-client push messaging for App Engine applications; deprecated on 2017-10-31. |
| 2016-10-27 | XMPP service | 2017-10-31 | The XMPP service enables App Engine applications to send and receive XMPP messages; deprecated on 2017-10-31. |
| 2016-08-01 | Admin API v1 |  | Admin API v1 provides programmatic management of App Engine applications and resources. |
| 2016-07-18 | Cloud Console guided walkthrough |  | The Cloud Console guided walkthrough provides an interactive tutorial for getting started with App Engine. |
| 2016-07-18 | Cron task limit |  | The cron task limit defines how many scheduled cron tasks an App Engine application can configure. |
| 2016-07-18 | LeaseTasksByTag rate limit |  | LeaseTasksByTag supports tagged task leasing with an enforced request-rate limit. |
| 2016-07-18 | Per-URL error reporting |  | Per-URL error reporting shows server and client error status more accurately in the App Engine dashboard. |
| 2016-05-25 | Cross-group transaction version consistency |  | Cross-group transactions return the same version number for all newly created or updated entities in a commit. |
| 2016-05-25 | URL Fetch invalid port error handling |  | URL Fetch returns INVALID_URL consistently for requests to ports outside the supported ranges. |
| 2016-04-18 | OverQuota error details |  | OverQuota exceptions include available error details in returned error messages. |
| 2016-04-18 | Users API IAM role support |  | The Users API recognizes project IAM roles and group membership when determining admin users. |
| 2016-03-24 | Trace timestamp alignment |  | App Engine now aligns trace timestamps with log timestamps. |
| 2016-03-04 | URL Fetch billed app default quota |  | App Engine increases the default URL Fetch quota for billed applications. |
| 2016-02-17 | Forwarding for /form path |  | App Engine now allows the /form URL path and forwards requests on that path to applications. |
| 2016-02-03 | Cloud Build for Managed VM deployment |  | Managed VM deployments can use Cloud Build to remotely build container images for app deployment. |
| 2016-01-14 | Google Groups project access |  | App Engine supports granting project and application access through Google Group membership. |
| 2015-11-30 | Endpoints API discovery toggle |  | The Endpoints API adds a discoverable parameter on the @Api annotation to disable API discovery. |
| 2015-11-30 | Task Queue Content-Length header for empty payloads |  | Push queue requests for Task Queue tasks without payloads now include a Content-Length header set to 0. |
| 2015-11-30 | Task Queue queue depth calculation optimization |  | App Engine no longer calculates or stores queue depth for non-existent or deleting queues and during queue table outages. |
| 2015-09-25 | Faceted Search |  | Faceted Search reached general availability in App Engine. |
| 2015-09-25 | Unlimited default daily budget for billed apps |  | Newly billed applications now default to an unlimited daily budget instead of a zero-dollar cap. |
| 2015-08-27 | Elastic provisioning by VM and application metrics |  | App Engine can provision applications for current load and configure elastic provisioning using VM-level and application-level metrics. |
| 2015-08-27 | MVM logs show in context |  | Managed VM application logs add a show in context menu for entries containing thread_id or request_id. |
| 2015-08-27 | oauth2client 1.4.2 library support |  | App Engine upgrades the bundled oauth2client library to version 1.4.2. |
| 2015-08-27 | Remote API OAuth2 access |  | Remote API can now be accessed using OAuth2 credentials through application default credentials. |
| 2015-08-27 | URLFetch oversized payload exception |  | URLFetch now uses RequestPayloadTooLargeException when request payloads exceed the size limit. |
| 2015-08-14 | Admin Console to Cloud Console redirect |  | App Engine Admin Console menus now begin redirecting users to the Cloud Console while some services remain in the Admin Console. |
| 2015-08-14 | Datastore empty list properties |  | Datastore now allows entity properties to represent an empty list. |
| 2015-08-14 | PyAMF 0.7.2 beta library support |  | App Engine adds beta support for the PyAMF library version 0.7.2. |
| 2015-08-14 | Task Queue retry_limit zero behavior |  | Tasks in queues configured with a retry_limit of zero are no longer retried after failure. |

Source file slug: `app-engine-standard-environment-python.md`

