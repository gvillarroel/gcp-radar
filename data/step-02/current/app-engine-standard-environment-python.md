# App Engine standard environment Python

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 132
Unique features: 118

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-02 | Legacy Mail API migration to SMTP email services |  | App Engine standard environment supports migrating email delivery from the legacy Mail API to SMTP-based providers such as SendGrid, Mailgun, or Mailjet; App Engine standard environment preview support allows migrating from the legacy Mail API to SMTP-based services such as SendGrid, Mailgun, or Mailjet. |
| 2026-02-12 | Deploying existing App Engine standard apps to Cloud Run |  | Existing App Engine standard applications can be deployed to Cloud Run using the `gcloud beta app migrate-to-run` command. |
| 2026-01-31 | Python 2.7 runtime deprecation | 2026-01-31 | Deployment of Python 2.7 applications is deprecated in App Engine standard environment, while existing apps continue to run and receive traffic; deprecated on 2026-01-31. |
| 2025-12-19 | Python 3.14 runtime support |  | App Engine standard environment supports the Python 3.14 runtime in General Availability; Python 3.14 runtime is available in Preview for App Engine standard environment. |
| 2025-10-20 | TLS 1.2 and later support with secure cipher suites |  | App Engine standard environment supports Transport Layer Security version 1.2 and later using a secure set of cipher suites. |
| 2025-08-07 | TLS 1.1 and earlier deprecation | 2025-03-01 | Support for TLS 1.1 and earlier is deprecated, with guidance to use TLS 1.2+ and secure cipher suites instead; deprecated on 2025-03-01. |
| 2025-06-30 | URL Fetch API certificate validation default |  | For new App Engine standard deployments, URL Fetch API now validates the certificate of contacted hosts by default. |
| 2025-05-05 | Python 3.13 runtime support |  | App Engine standard environment supports the Python 3.13 runtime in General Availability; Python 3.13 runtime is available in Preview for App Engine standard environment. |
| 2025-03-03 | Default automatic scaling max_instances for new projects |  | App Engine standard environment defaults to 20 maximum instances for automatic scaling in new projects, unless `max_instances` is explicitly set during deployment. |
| 2024-12-09 | Custom organization policies for Serverless VPC Access connectors |  | App Engine introduced custom organization-policy support for Serverless VPC Access connectors that can be enforced at project, folder, or organization scope. |
| 2024-07-30 | App Engine version lifecycle-stage filtering in Cloud Console |  | The App Engine page in Google Cloud Console can now filter versions by runtime lifecycle stage and show warning icons for versions nearing or past end of support. |
| 2024-01-23 | Serverless VPC Access connector update configuration |  | App Engine users can now update a Serverless VPC Access connector in production by changing instance machine type and min/max instance counts; App Engine added preview support for updating Serverless VPC Access connectors, including machine type and minimum/maximum instance configuration. |
| 2023-11-06 | Python 3.12 runtime for App Engine standard environment |  | The App Engine standard environment now supports the Python 3.12 runtime as a generally available runtime option; Python 3.12 support was introduced for App Engine standard environment in preview. |
| 2023-04-27 | Search API for App Engine legacy bundled services |  | The Search API became available in App Engine legacy bundled services for second-generation runtimes, accessible via the App Engine services SDK for Python 3. |
| 2023-02-27 | Python 3.11 runtime for App Engine standard environment |  | The Python 3.11 runtime for App Engine standard environment is now generally available; The Python 3.11 runtime for App Engine standard environment was introduced in preview. |
| 2022-12-13 | Configurable app-level default service account in App Engine |  | App Engine now allows choosing any configured service account in the Cloud project as the app-level default service account during app creation and updates. |
| 2022-11-01 | Build environment variables in App Engine standard environment |  | Build environment variables support is now generally available for App Engine standard environment builds. |
| 2022-07-01 | Python 3.10 runtime for App Engine standard environment |  | The Python 3.10 runtime became generally available in App Engine standard environment. |
| 2022-05-18 | User-managed service accounts per App Engine version during deployment |  | Allows specifying a different service account for each App Engine version at deploy time; Allows assigning a user-managed service account to each App Engine version during deployment. |
| 2022-04-18 | App Engine Standard Python 3.10 runtime |  | Introduces the Python 3.10 runtime for the App Engine standard environment. |
| 2022-04-13 | Python 3 legacy bundled services (GA) in App Engine Standard |  | Makes App Engine legacy bundled services for Python 3 generally available through language-idiomatic libraries. |
| 2022-03-24 | Serverless VPC Access connectors in Shared VPC host projects |  | Enables Serverless VPC Access connectors to be used in Shared VPC host projects. |
| 2022-02-15 | Private Python dependencies from Artifact Registry in App Engine Standard |  | Adds support for Python 3 App Engine apps to install private packages from an Artifact Registry Python repository. |
| 2022-01-19 | Deferred |  | Enables access to Blobstore, Deferred, and Mail handlers for App Engine bundled services in Python 3 through language-idiomatic libraries. |
| 2022-01-19 | Mail) |  | Enables access to Blobstore, Deferred, and Mail handlers for App Engine bundled services in Python 3 through language-idiomatic libraries. |
| 2022-01-19 | Python 3 App Engine bundled service handlers preview (Blobstore |  | Enables access to Blobstore, Deferred, and Mail handlers for App Engine bundled services in Python 3 through language-idiomatic libraries. |
| 2021-11-03 | Serverless VPC Access egress settings |  | Adds generally available egress configuration options for Serverless VPC Access traffic; Introduces egress settings that control whether outbound external traffic uses a Serverless VPC Access connector. |
| 2021-09-27 | Legacy App Engine APIs on Python 3 second-generation runtimes (preview) |  | Makes many legacy App Engine APIs available to selected second-generation runtimes for Python 3 in preview. |
| 2021-06-14 | and asia-east1 |  | Adds App Engine availability in the Oregon, Singapore, and Taiwan regions. |
| 2021-06-14 | App Engine region expansion to us-west1 |  | Adds App Engine availability in the Oregon, Singapore, and Taiwan regions. |
| 2021-06-14 | asia-southeast1 |  | Adds App Engine availability in the Oregon, Singapore, and Taiwan regions. |
| 2021-04-20 | Build environment variables support |  | Adds support for build-time environment variables in App Engine. |
| 2021-04-14 | Serverless VPC Access support for Shared VPC in App Engine standard environment |  | Serverless VPC Access for App Engine standard environments now supports Shared VPC; App Engine standard environments gained beta support for Shared VPC via Serverless VPC Access. |
| 2021-04-13 | App Engine standard environment regional expansion to europe-central2 |  | App Engine standard environment became available in the europe-central2 (Warsaw) region. |
| 2021-03-26 | App Engine standard environment CPU Utilization metric |  | A new CPU Utilization metric was added for App Engine standard environments, reporting average CPU usage across active instances. |
| 2021-03-11 | Python 3.9 runtime for App Engine standard environment |  | The Python 3.9 runtime was made generally available for App Engine standard environments. |
| 2020-09-25 | Network ingress controls with Cloud Load Balancing for App Engine |  | App Engine gained support for restricting incoming traffic to requests routed through Cloud Load Balancing. |
| 2020-07-08 | External HTTPS Load Balancing for App Engine via serverless NEGs |  | App Engine added support for External HTTP(S) Load Balancing through serverless network endpoint groups, including Cloud CDN compatibility. |
| 2020-07-06 | Python 3.8 runtime for App Engine standard environment |  | The Python 3.8 runtime was made generally available for App Engine standard environments. |
| 2020-06-08 | App Engine standard environment regional expansion to asia-southeast2 |  | App Engine standard environment became available in the asia-southeast2 (Jakarta) region. |
| 2020-05-14 | App Engine resource labeling and billing export to BigQuery |  | App Engine services can be labeled and their billing data exported to BigQuery for granular billing analysis. |
| 2020-04-20 | App Engine standard environment regional expansion to us-west4 |  | App Engine standard environment became available in the us-west4 (Las Vegas, NV) region. |
| 2020-03-13 | App Engine standard environment regional expansion to asia-northeast3 |  | App Engine standard environment became available in the asia-northeast3 (Seoul) region. |
| 2020-03-06 | App Engine regional availability: us-west3 |  | App Engine added support for applications deployed in the us-west3 (Salt Lake City, Utah) region. |
| 2020-02-11 | App Engine regional request URL format |  | App Engine introduced optional region-ID-based app URLs (such as PROJECT_ID.REGION_ID.r.appspot.com) to improve request routing. |
| 2020-02-06 | App Engine spending limit creation | 2020-02-06 | Creating new spending limits for App Engine projects was deprecated, while existing limits continue to apply; deprecated on 2020-02-06. |
| 2019-12-11 | Serverless VPC Access |  | Serverless VPC Access reached general availability for connecting App Engine to VPC resources; Serverless VPC Access entered beta, allowing App Engine apps to connect securely to VPC resources. |
| 2019-07-30 | Cloud SDK-only App Engine SDK distribution |  | App Engine SDK functionality was moved to be available exclusively through the Cloud SDK. |
| 2019-07-30 | Legacy standalone App Engine SDK tooling | 2020-07-30 | The AppCfg tooling and legacy standalone SDK installers (GoogleAppEngineLauncher.dmg, GoogleAppEngine.msi, google_appengine.zip) were deprecated; deprecated on 2020-07-30. |
| 2019-04-18 | App Engine regional availability: asia-northeast2 |  | App Engine added support for the asia-northeast2 (Osaka, Japan) region. |
| 2019-04-15 | App Engine regional availability: europe-west6 |  | App Engine added support for the europe-west6 (Zurich, Switzerland) region. |
| 2019-04-09 | Cloud Tasks |  | Cloud Tasks reached general availability for asynchronous work processing in App Engine. |
| 2019-04-04 | Python 3 runtime version 3.7.3 |  | The App Engine Python runtime was updated to Python 3.7.3. |
| 2019-01-11 | Python 3 runtime version 3.7.2 |  | The App Engine Python runtime was updated to Python 3.7.2. |
| 2018-12-14 | App Engine standard Python 3.7 runtime |  | The App Engine standard environment introduced the Python 3.7 runtime at GA; The App Engine standard environment Python 3.7 runtime reached beta. |
| 2018-12-12 | App Engine Python SDK 1.9.81 |  | The Python SDK used by App Engine was updated to version 1.9.81. |
| 2018-12-12 | App Engine standard Sockets API |  | The Sockets API became generally available in App Engine standard environment. |
| 2018-12-12 | BSD network sockets in App Engine |  | All applications were switched to BSD network sockets in App Engine without requiring app changes. |
| 2018-11-16 | nginx default web server for App Engine |  | Nginx was made the default web server for App Engine. |
| 2018-10-31 | Python 3 runtime Python 3.7.1 update |  | The App Engine standard Python 3 runtime was updated to Python 3.7.1. |
| 2018-10-31 | Recursive requirements.txt support in Python 3 runtime |  | The Python 3 runtime added support for recursive entries in requirements.txt. |
| 2018-10-22 | App Engine region: asia-east2 |  | App Engine became available in the asia-east2 (Hong Kong) region. |
| 2018-07-10 | App Engine region: us-west2 |  | App Engine became available in the us-west2 (Los Angeles) region. |
| 2018-05-15 | App Engine automatic max instances setting |  | The automatic scaling system added a max instances setting to cap the total number of scheduled instances. |
| 2018-05-15 | App Engine automatic min instances setting |  | The automatic scaling system added a min instances setting to keep a minimum number of instances running. |
| 2018-05-15 | App Engine automatic scaling resident instance behavior |  | Resident instances in automatic scaling were replaced with dynamic instance labeling and behavior. |
| 2018-05-15 | App Engine automatic scaling system upgrade |  | The App Engine automatic scaling system was upgraded with improved efficiency and lower instance costs. |
| 2018-05-15 | App Engine automatic target CPU utilization setting |  | The automatic scaling configuration added a target CPU utilization setting for balancing latency and cost. |
| 2018-05-15 | App Engine automatic target throughput utilization setting |  | The automatic scaling configuration added a target throughput utilization setting for controlling instance startup based on concurrent requests. |
| 2017-12-14 | App Engine deployment with IAM roles and service accounts |  | App Engine now supports app deployment using IAM roles and service accounts with documented predefined deploy permissions. |
| 2017-10-31 | App Engine availability in asia-south1 |  | App Engine is available as a deployment target in the asia-south1 (Mumbai) region. |
| 2017-10-11 | App Engine Firewall |  | App Engine Firewall is now generally available for controlling inbound traffic to App Engine applications. |
| 2017-09-13 | App Engine custom domain management via gcloud and Admin API |  | Custom domain mapping operations are now generally available through gcloud commands and App Engine Admin API methods, including domains verify and authorizedDomains.list. |
| 2017-09-13 | App Engine managed SSL certificates for custom domains |  | Existing custom domain SSL setups remain compatible, with support for upgrading them to managed SSL certificates. |
| 2017-09-13 | Managed SSL certificates for App Engine custom domains |  | Managed SSL certificates are available for custom domains, with automatic provisioning, renewal, and revocation when domains are mapped. |
| 2017-09-05 | App Engine availability in southamerica-east1 |  | App Engine is available as a deployment region in southamerica-east1 (São Paulo, Brazil). |
| 2017-08-01 | App Engine availability in europe-west3 |  | App Engine is available as a deployment region in europe-west3 (Frankfurt, Germany). |
| 2017-07-18 | App Engine availability in australia-southeast1 |  | App Engine is available as a deployment region in australia-southeast1 (Sydney, Australia). |
| 2017-06-06 | App Engine availability in europe-west2 |  | App Engine is available as a deployment region in europe-west2 (London). |
| 2017-06-06 | Beta custom domain and SSL certificate management in Admin API and gcloud |  | The Admin API and gcloud command-line tool support beta features for creating and managing App Engine custom domains and SSL certificates. |
| 2017-05-09 | App Engine availability in us-east4 |  | App Engine is available as a deployment region in us-east4 (North Virginia). |
| 2016-10-27 | App Engine Channel API | October 31, 2017 | The App Engine Channel API was deprecated and is scheduled for shutdown; deprecated on October 31, 2017. |
| 2016-10-27 | App Engine XMPP service | October 31, 2017 | The App Engine XMPP service was deprecated and is scheduled for shutdown; deprecated on October 31, 2017. |
| 2016-08-01 | App Engine Admin API v1 |  | Version 1 of the App Engine Admin API reached general availability. |
| 2016-08-01 | App Engine SDK 1.9.42 |  | App Engine SDK version 1.9.42 was released. |
| 2016-08-01 | Python 3.7 runtime |  | Python 3.7 runtime notes were published, and Python 3.7 users were instructed to continue using the 1.9.40 SDK. |
| 2016-07-18 | App Engine dashboard per-URL error reporting |  | Server and Client Error metrics in the App Engine dashboard now report status errors at a per-URL level. |
| 2016-07-18 | App Engine SDK 1.9.40 |  | App Engine SDK version 1.9.40 was released. |
| 2016-07-18 | Cloud Console guided App Engine walkthrough |  | A guided App Engine walkthrough was added to Cloud Console, launching an interactive language-based tutorial. |
| 2016-07-18 | Cron task limit |  | The maximum number of cron tasks was increased to 250. |
| 2016-07-18 | LeaseTasksByTag API rate limiting |  | LeaseTasksByTag requests were limited to 25 requests per second. |
| 2016-07-01 | Cloud Datastore pricing model |  | The new Cloud Datastore pricing model was made effective. |
| 2016-05-25 | Cloud Datastore cross-group transaction versioning |  | Cross-group Datastore transactions were updated to return identical version numbers for all new or updated entities in a transaction. |
| 2016-05-25 | URL Fetch invalid URL validation |  | URL Fetch now always returns INVALID_URL for requests to disallowed destination ports. |
| 2016-05-02 | Ruby runtime for App Engine flexible environment |  | App Engine made the Ruby runtime available in the App Engine flexible environment. |
| 2016-04-18 | App Engine Users API IAM role and group-based admin recognition |  | The App Engine Users API now treats project Owner, Editor, Viewer, and App Engine Admin users—including group members—as admins. |
| 2016-04-18 | OverQuota exception error details in App Engine |  | Error details are now populated in error messages for the OverQuota exception type when available. |
| 2016-03-24 | Trace timestamp alignment in App Engine logs |  | Trace timestamps were corrected to align with log timestamps. |
| 2016-03-04 | Increased default URL fetch quota for billed App Engine apps |  | The default quota for URL fetch requests was increased for billed applications. |
| 2016-02-17 | Support for forwarding "/form" requests in App Engine |  | The URL path “/form” is now allowed and will be forwarded to applications. |
| 2016-02-03 | Configurable remote container build method for App Engine Managed VMs |  | Managed VM deployments now support selecting the remote container build mechanism via default transient VM builds or Cloud Build-backed builds. |
| 2016-01-14 | Google Group-based App Engine IAM access |  | App Engine applications can grant role access to all members of a Google Group by adding the group to the project. |
| 2015-11-30 | Endpoints @Api discoverable flag |  | The Endpoints API now supports a discoverable boolean parameter on the @Api annotation to disable API discovery. |
| 2015-11-30 | Task Queue Content-Length header for empty push tasks |  | Push queue requests for Task Queue tasks with no payload now include a Content-Length header set to 0. |
| 2015-11-30 | Task Queue queue depth calculation scope |  | App Engine stops calculating and storing queue depth for non-existent queues, queues marked for deletion, and during queue table outages. |
| 2015-09-25 | Default App Engine daily billing budget behavior |  | Newly billing-enabled applications now default to an unlimited daily budget, with optional user-defined budget caps. |
| 2015-09-25 | Faceted Search |  | Faceted Search was promoted to generally available for App Engine Python. |
| 2015-08-27 | App Engine Python SDK 1.9.26 release |  | Version 1.9.26 of the App Engine Python environment components was released. |
| 2015-08-27 | Elastic provisioning based on load metrics |  | Applications can be provisioned for current load and elastic provisioning can be configured from VM and application metrics. |
| 2015-08-27 | MVM application log in-context sorting |  | A show-in-context menu was added for MVM application logs to sort logs by thread_id or request_id fields. |
| 2015-08-27 | oauth2client library update |  | The oauth2client library was upgraded to version 1.4.2. |
| 2015-08-27 | Remote API OAuth2 authentication |  | The Remote API can now be accessed using OAuth2 credentials via application default credentials. |
| 2015-08-27 | URLFetch large payload exception |  | URLFetch requests now raise RequestPayloadTooLargeException for payloads that are too large. |
| 2015-08-14 | Admin Console menu redirection |  | Admin Console menus now redirect users to Cloud Console while key services, such as Admin Logs, remain accessible. |
| 2015-08-14 | App Engine Python SDK 1.9.25 release |  | Version 1.9.25 of the App Engine Python environment components was released. |
| 2015-08-14 | Datastore empty-list property support |  | Datastore now supports properties that represent an empty list. |
| 2015-08-14 | PyAMF 0.7.2 Beta support |  | PyAMF version 0.7.2 (Beta) was added to the App Engine Python environment. |
| 2015-08-14 | Task queue retry behavior for retry_limit zero |  | Queue tasks configured with a retry_limit of zero are no longer retried when they fail. |

Source file slug: `app-engine-standard-environment-python.md`

