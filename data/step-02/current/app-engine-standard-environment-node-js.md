# App Engine standard environment Node.js

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 128
Unique features: 85

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-02-12 | App Engine to Cloud Run migration command |  | The gcloud beta app migrate-to-run command lets you deploy existing App Engine standard environment apps to Cloud Run. |
| 2025-11-20 | Node.js 24 runtime |  | The Node.js 24 runtime enables App Engine standard environment applications to run on Node.js 24; The Node.js 24 runtime enables App Engine standard environment applications to run on Node.js 24. |
| 2025-10-20 | TLS 1.2+ support |  | TLS 1.2 and later support provides secure transport with a corresponding secure set of cipher suites; TLS 1.2 and later support provides secure transport with a corresponding secure set of cipher suites. |
| 2025-08-07 | TLS 1.1 and earlier support | 2025-03 | Support for TLS 1.1 and earlier allows older transport security protocol versions for App Engine standard environment applications; deprecated on 2025-03. |
| 2025-03-03 | Automatic scaling max instances default |  | App Engine standard environment sets a default automatic scaling max_instances value of 20 for new projects. |
| 2024-12-09 | Custom organization policies for Serverless VPC Access connectors |  | Custom organization policies for Serverless VPC Access connectors let administrators apply policy controls at the project, folder, or organization level. |
| 2024-11-19 | Node.js 22 runtime |  | The Node.js 22 runtime enables App Engine standard environment applications to run on Node.js 22; The Node.js 22 runtime enables App Engine standard environment applications to run on Node.js 22. |
| 2024-07-30 | Runtime lifecycle stage filter |  | The App Engine console can filter existing versions by runtime lifecycle stage and show warning icons for support status. |
| 2024-01-23 | Serverless VPC Access connector updates |  | Serverless VPC Access connector updates let you edit connector machine type and minimum and maximum instance counts; Serverless VPC Access connector updates let you edit connector machine type and minimum and maximum instance counts. |
| 2023-06-26 | Node.js 20 runtime |  | The Node.js 20 runtime enables App Engine standard environment applications to run on Node.js 20; The Node.js 20 runtime enables App Engine standard environment applications to run on Node.js 20. |
| 2023-06-01 | pnpm package manager support |  | Pnpm package manager support lets Node.js runtimes configure application dependencies with pnpm. |
| 2023-04-05 | Yarn 2 private module support |  | Yarn 2 support lets the Node.js runtime configure private modules hosted in Artifact Registry. |
| 2023-01-17 | Node.js 18 runtime |  | The Node.js 18 runtime enables App Engine standard environment applications to run on Node.js 18; The Node.js 18 runtime enables App Engine standard environment applications to run on Node.js 18. |
| 2022-12-13 | App-level default service account selection |  | App Engine can use any configured service account in the project as the app-level default service account during application creation and updates. |
| 2022-11-01 | Build environment variables |  | Build environment variables support lets applications define environment variables for the build process; Build environment variables support lets applications define environment variables for the build process. |
| 2022-05-18 | Per-version user-managed service account |  | Per-version user-managed service account support lets each App Engine version run with a specified user-managed service account; Per-version user-managed service account support lets each App Engine version run with a specified user-managed service account. |
| 2022-03-24 | Serverless VPC Access connectors in Shared VPC host projects |  | Serverless VPC Access connectors in Shared VPC host projects let App Engine use connectors configured in Shared VPC host projects. |
| 2022-02-15 | Artifact Registry private Node.js dependencies |  | Node.js apps can install private dependencies from an Artifact Registry Node.js package repository. |
| 2021-11-29 | Node.js 16 runtime |  | The Node.js 16 runtime enables App Engine standard environment applications to run on Node.js 16; The Node.js 16 runtime enables App Engine standard environment applications to run on Node.js 16. |
| 2021-11-03 | Serverless VPC Access egress settings |  | Serverless VPC Access egress settings let you control whether traffic to external destinations goes through the connector; Serverless VPC Access egress settings let you control whether traffic to external destinations goes through the connector. |
| 2021-04-14 | Serverless VPC Access support for Shared VPC |  | Serverless VPC Access support for Shared VPC lets App Engine connect through connectors in Shared VPC networks; Serverless VPC Access support for Shared VPC lets App Engine connect through connectors in Shared VPC networks. |
| 2021-03-26 | CPU utilization metric |  | The CPU utilization metric reports the average CPU utilization across all active App Engine standard environment instances. |
| 2021-03-11 | Node.js 14 runtime |  | The Node.js 14 runtime enables App Engine standard environment applications to run on Node.js 14. |
| 2020-09-25 | Network ingress controls |  | Network ingress controls let an app accept only requests routed through Cloud Load Balancing. |
| 2020-07-08 | External HTTP(S) Load Balancing via serverless NEGs |  | External HTTP(S) Load Balancing via serverless network endpoint groups lets App Engine use Cloud Load Balancing and Cloud CDN. |
| 2020-07-06 | Node.js 12 runtime |  | The Node.js 12 runtime enables App Engine standard environment applications to run on Node.js 12; The Node.js 12 runtime enables App Engine standard environment applications to run on Node.js 12. |
| 2020-05-14 | App Engine resource labels for billing analysis |  | App Engine resource labels support fine-grained billing analysis by labeling services and exporting billing data to BigQuery. |
| 2020-02-11 | Region ID in appspot URLs |  | App Engine app URLs can include a region ID to improve request routing efficiency and reliability. |
| 2020-02-06 | Project spending limits | 2020-02-06 | Project spending limits let you cap costs for App Engine projects; deprecated on 2020-02-06. |
| 2019-12-11 | Serverless VPC Access |  | Serverless VPC Access lets App Engine connect to resources in a VPC network; Serverless VPC Access lets App Engine services connect to internal resources in a VPC network. |
| 2019-07-30 | AppCfg tooling | 2020-07-30 | AppCfg tooling provides legacy deployment and management commands for App Engine applications; deprecated on 2020-07-30. |
| 2019-07-30 | Cloud SDK delivery for App Engine SDK functionality |  | Cloud SDK delivery for App Engine SDK functionality provides App Engine tooling exclusively through Cloud SDK. |
| 2019-07-30 | Legacy standalone App Engine SDK | 2020-07-30 | The legacy standalone App Engine SDK provides App Engine tooling through downloadable standalone packages; deprecated on 2020-07-30. |
| 2019-04-18 | App Engine regional availability: asia-northeast2 |  | App Engine applications can be deployed in the asia-northeast2 (Osaka, Japan) region. |
| 2019-04-15 | App Engine regional availability: europe-west6 |  | App Engine applications can be deployed in the europe-west6 (Zurich, Switzerland) region. |
| 2019-04-09 | Cloud Tasks integration |  | Cloud Tasks integration lets App Engine applications run asynchronous tasks outside user requests. |
| 2019-03-20 | Node.js 10 runtime |  | The Node.js 10 runtime provides a managed App Engine standard environment for Node.js 10 applications; The Node.js 10 runtime provides a managed App Engine standard environment for Node.js 10 applications. |
| 2019-03-20 | Node.js 8 runtime | 2019-06-27 | The Node.js 8 runtime enables App Engine standard environment applications to run on Node.js 8; The Node.js 8 runtime provides a managed App Engine standard environment for Node.js 8 applications; deprecated on 2019-06-27. |
| 2018-10-22 | App Engine regional availability: asia-east2 |  | App Engine applications can be deployed in the asia-east2 (Hong Kong) region. |
| 2018-09-19 | Dependency installation cache bypass |  | A deployment flag can force Node.js dependencies to be reinstalled instead of using the build cache. |
| 2018-09-19 | Yarn package manager support |  | App Engine can install dependencies with Yarn when a yarn.lock file is present. |
| 2018-08-10 | gcp-build custom build step |  | A gcp-build script in package.json can run custom build logic during deployment. |
| 2018-08-10 | Local package dependencies |  | Package.json can reference local file-based dependencies for deployment. |
| 2018-07-10 | App Engine regional availability: us-west2 |  | App Engine applications can be deployed in the us-west2 (Los Angeles) region. |
| 2018-05-15 | Automatic scaling efficiency improvements |  | The automatic scaling system can reduce instance costs and loading-request overhead through improved scheduling efficiency. |
| 2018-05-15 | Automatic scaling max instances |  | Automatic scaling can cap the total number of instances scheduled for an application. |
| 2018-05-15 | Automatic scaling min instances |  | Automatic scaling can keep a minimum number of application instances running. |
| 2018-05-15 | Automatic scaling target CPU utilization |  | Automatic scaling can tune instance creation based on a target CPU utilization setting. |
| 2018-05-15 | Automatic scaling target throughput utilization |  | Automatic scaling can tune instance creation based on a target throughput utilization setting. |
| 2017-10-31 | App Engine regional availability: asia-south1 |  | App Engine applications can be deployed in the asia-south1 (Mumbai, India) region. |
| 2017-10-11 | App Engine firewall |  | App Engine firewall provides network-level traffic filtering for applications. |
| 2017-09-13 | Custom domain mapping API and CLI |  | Admin API methods and gcloud commands support verifying and managing custom domain mappings. |
| 2017-09-13 | Managed SSL certificates |  | Managed SSL certificates automatically provision, renew, and revoke certificates for custom domains. |
| 2017-09-05 | App Engine regional availability: southamerica-east1 |  | App Engine applications can be deployed in the southamerica-east1 (São Paulo, Brazil) region. |
| 2017-08-01 | App Engine regional availability: europe-west3 |  | App Engine applications can be deployed in the europe-west3 (Frankfurt, Germany) region. |
| 2017-07-18 | App Engine regional availability: australia-southeast1 |  | App Engine applications can be deployed in the australia-southeast1 (Sydney, Australia) region. |
| 2017-06-06 | App Engine regional availability: europe-west2 |  | App Engine applications can be deployed in the europe-west2 (London) region. |
| 2017-06-06 | Custom domain and SSL certificate management API and CLI |  | Beta Admin API features and gcloud commands can create and manage custom domains and SSL certificates. |
| 2017-05-09 | App Engine regional availability: us-east4 |  | App Engine applications can be deployed in the us-east4 (North Virginia) region. |
| 2016-10-27 | Channel service | 2017-10-31 | The Channel service provides server-initiated messaging for App Engine applications; deprecated on 2017-10-31. |
| 2016-10-27 | XMPP service | 2017-10-31 | The XMPP service enables App Engine applications to send and receive XMPP messages; deprecated on 2017-10-31. |
| 2016-08-01 | Admin API v1 |  | Admin API v1 provides generally available programmatic management of App Engine resources. |
| 2016-07-18 | Cloud Console guided walkthrough |  | The Cloud Console provides an interactive App Engine guided walkthrough by language. |
| 2016-07-18 | Cron task limit |  | App Engine cron supports up to 250 scheduled tasks. |
| 2016-07-18 | Per-URL error metrics |  | The App Engine dashboard can report server and client errors more accurately on a per-URL basis. |
| 2016-04-18 | OverQuota error details |  | OverQuota exceptions can include populated error details when available. |
| 2016-04-18 | Users API IAM role support |  | The Users API recognizes IAM roles and group expansion when determining App Engine administrators. |
| 2016-03-04 | URL Fetch default quota increase |  | Billed applications receive a higher default quota for URL Fetch requests. |
| 2016-02-17 | Form URL path forwarding |  | App Engine now allows the /form URL path and forwards requests on that path to applications. |
| 2016-02-03 | Cloud Build deployment for Managed VMs |  | Managed VMs deployments can use Cloud Build as an alternative remote container image build mechanism for app deployment. |
| 2016-01-14 | Google Groups project access |  | App Engine supports granting project access through Google Groups membership. |
| 2015-11-30 | Content-Length header for empty push queue payloads |  | Push queue requests for Task Queue tasks without payloads now include a Content-Length header set to 0. |
| 2015-11-30 | Endpoints API discovery toggle |  | The Endpoints API supports a discoverable boolean parameter on the @Api annotation to disable API discovery. |
| 2015-11-30 | Task queue depth calculation filtering |  | Task queue depth calculation now skips non-existent queues, queues marked for deletion, and queue table outage cases. |
| 2015-09-25 | Faceted Search |  | Faceted Search reached general availability. |
| 2015-09-25 | Unlimited default daily budget for billed applications |  | Newly billed applications now default to an unlimited daily budget instead of a zero-dollar cap. |
| 2015-08-27 | Elastic provisioning with VM and application metrics |  | Applications can be provisioned for current load and elastically scaled using both VM-level and application-level metrics. |
| 2015-08-27 | oauth2client 1.4.2 library update |  | The oauth2client library was upgraded to version 1.4.2. |
| 2015-08-27 | Remote API OAuth2 access |  | Remote API access now supports OAuth2 credentials through Application Default Credentials. |
| 2015-08-27 | RequestPayloadTooLargeException for URLFetch |  | URLFetch now uses RequestPayloadTooLargeException when request payloads exceed the allowed size. |
| 2015-08-27 | Show in context for Managed VM application logs |  | Managed VM application logs now support a show in context menu using thread_id or request_id for log sorting. |
| 2015-08-14 | Admin Console menu redirection to Cloud Console |  | Admin Console menus now begin redirecting users to Cloud Console while some services remain in the Admin Console. |
| 2015-08-14 | Datastore empty list properties |  | Datastore now allows properties to represent an empty list. |
| 2015-08-14 | No retries for retry_limit zero task queues |  | Failed tasks in queues configured with a retry_limit of zero are no longer retried. |
| 2015-08-14 | PyAMF 0.7.2 beta |  | App Engine added PyAMF version 0.7.2 in beta. |

Source file slug: `app-engine-standard-environment-node-js.md`

