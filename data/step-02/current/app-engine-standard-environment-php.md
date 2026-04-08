# App Engine standard environment PHP

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 121
Unique features: 108

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-02-27 | App Engine PHP 8.5 runtime |  | App Engine now supports the PHP 8.5 runtime in the standard environment; App Engine now offers PHP 8.5 runtime support in Preview for the standard environment. |
| 2026-02-12 | Deployment of App Engine standard apps to Cloud Run |  | App Engine standard environment apps can be migrated to Cloud Run using the gcloud beta app migrate-to-run command. |
| 2026-01-31 | PHP 5 runtime support in App Engine standard | 2026-01-31 | The PHP 5 runtime is deprecated in App Engine standard, and new deployments of PHP 5 apps are no longer supported; deprecated on 2026-01-31. |
| 2025-10-20 | TLS 1.2+ support in App Engine standard |  | App Engine standard now supports TLS 1.2 and later with a corresponding secure set of cipher suites in GA. |
| 2025-08-07 | TLS 1.1 and earlier support deprecation in App Engine standard | March 2025 | Support for TLS 1.1 and earlier is deprecated in App Engine standard, with a recommendation to use TLS 1.2 or later; deprecated on March 2025. |
| 2025-06-17 | App Engine PHP 8.4 runtime |  | App Engine now supports the PHP 8.4 runtime in the standard environment GA; App Engine now provides Preview support for the PHP 8.4 runtime in the standard environment. |
| 2025-03-03 | Default auto scaling max instances for new App Engine standard projects |  | New App Engine standard projects now default to a maximum of 20 automatic-scaling instances unless max_instances is overridden. |
| 2024-12-09 | Serverless VPC Access connector organization policies |  | App Engine now supports generally available custom organization policies for Serverless VPC Access connectors. |
| 2024-07-30 | App Engine version filtering by runtime lifecycle stage |  | The App Engine console now lets users filter versions by runtime lifecycle stage and show support-status warning icons. |
| 2024-02-26 | App Engine PHP 8.3 runtime |  | App Engine now supports the PHP 8.3 runtime in the standard environment. |
| 2024-02-12 | App Engine standard environment PHP 8.3 runtime |  | PHP 8.3 runtime support is available for App Engine standard environment in preview. |
| 2024-01-23 | Serverless VPC Access connector update |  | Editing Serverless VPC Access connector settings, including machine type and minimum/maximum instances, is now available at general availability for App Engine; Updating Serverless VPC Access connectors, including machine type and minimum/maximum instance settings, is now available in preview for App Engine. |
| 2023-05-15 | App Engine standard environment PHP 8.2 runtime |  | The PHP 8.2 runtime for App Engine standard environment is generally available; The PHP 8.2 runtime for App Engine standard environment is available in preview. |
| 2022-12-13 | App Engine app-level default service account selection |  | Applications can use any configured service account in the Cloud project as the app-level default service account when creating or updating App Engine apps. |
| 2022-11-01 | App Engine build environment variables |  | Build-time environment variables support is now generally available for App Engine; App Engine standard environment now supports build environment variables (preview). |
| 2022-07-18 | App Engine legacy bundled services for PHP 7+ |  | Legacy bundled services for PHP 7+ are available at general availability for App Engine standard environment with language-idiomatic libraries; Legacy bundled services for PHP 7+ are available at preview for App Engine standard environment with language-idiomatic libraries. |
| 2022-07-01 | App Engine standard environment PHP 8.1 runtime |  | The PHP 8.1 runtime for App Engine standard environment is generally available; The PHP 8.1 runtime for App Engine standard environment is available at preview. |
| 2022-05-18 | Per-version user-managed service account deployment |  | Selecting a user-managed service account per App Engine version at deployment is now generally available. |
| 2022-03-24 | App Engine Serverless VPC Access for Shared VPC host projects |  | App Engine standard environment now supports Serverless VPC Access connectors in Shared VPC host projects with general availability. |
| 2021-11-03 | App Engine Serverless VPC Access egress settings |  | Serverless VPC Access egress settings are now generally available in App Engine standard to control whether external traffic uses the connector; App Engine standard now offers Serverless VPC Access egress settings so you can choose whether external traffic is sent through the connector. |
| 2021-06-30 | App Engine per-version user-managed service accounts |  | Deployment for App Engine standard now allows assigning a user-managed service account to each version for version-specific privilege control. |
| 2021-06-14 | App Engine standard environment regional availability |  | App Engine standard environment became available in the us-west1, asia-southeast1, and asia-east1 regions; App Engine standard became available in the europe-central2 (Warsaw) region. |
| 2021-04-14 | App Engine Serverless VPC Access for Shared VPC |  | Serverless VPC Access integration with Shared VPC is now generally available for App Engine standard environment; Serverless VPC Access support for Shared VPC in App Engine standard entered beta availability. |
| 2021-03-26 | App Engine standard CPU Utilization metric |  | App Engine standard environment added a new CPU Utilization metric reporting average CPU usage across active instances. |
| 2020-11-18 | PHP 7.4 runtime for App Engine standard environment |  | The PHP 7.4 runtime for App Engine standard environment reached general availability. |
| 2020-09-25 | App Engine network ingress controls with Cloud Load Balancing |  | Apps using Cloud Load Balancing can use network ingress controls so App Engine only accepts traffic routed through the load balancer. |
| 2020-07-08 | External HTTP(S) load balancing for App Engine |  | App Engine now supports External HTTP(S) Load Balancing via Serverless Network Endpoint Groups, enabling Cloud CDN usage. |
| 2020-06-08 | App Engine availability in asia-southeast2 region |  | App Engine is available in the asia-southeast2 (Jakarta) region. |
| 2020-05-14 | App Engine billing labels and BigQuery export |  | App Engine services can now be labeled and their billing data exported to BigQuery for fine-grained billing analysis. |
| 2020-04-20 | App Engine availability in us-west4 region |  | App Engine is available in the us-west4 (Las Vegas, NV) region. |
| 2020-03-13 | App Engine availability in asia-northeast3 region |  | App Engine is available in the asia-northeast3 (Seoul) region. |
| 2020-03-06 | App Engine availability in us-west3 region |  | App Engine is available in the us-west3 (Salt Lake City, Utah) region. |
| 2020-02-11 | App Engine regionalized app URLs |  | App Engine now supports URLs that include a region ID (for example `<project-id>.<region-id>.r.appspot.com`) to improve request routing. |
| 2020-02-06 | Applying new spending limits to App Engine projects | 2020-02-06 | Applying new spending limits to App Engine projects is deprecated; existing spending limits remain in effect; deprecated on 2020-02-06. |
| 2019-12-11 | Serverless VPC Access |  | Serverless VPC Access has reached general availability. |
| 2019-10-10 | PHP 7.3 runtime for App Engine standard environment |  | The App Engine standard environment PHP 7.3 runtime is now generally available. |
| 2019-07-30 | App Engine legacy SDK tooling (AppCfg and standalone SDK) | 2020-07-30 | The AppCfg tooling and legacy standalone App Engine SDK artifacts are deprecated, with support removal scheduled for July 30, 2020; deprecated on 2020-07-30. |
| 2019-07-30 | Cloud SDK delivery of App Engine SDK functionality |  | App Engine SDK functionality is now delivered exclusively through the Cloud SDK. |
| 2019-05-28 | App Engine standard environment PHP 7.3 runtime |  | The PHP 7.3 runtime was added to the App Engine standard environment and was launched in beta. |
| 2019-04-18 | App Engine standard environment availability in asia-northeast2 region |  | App Engine standard environment became available in the asia-northeast2 (Osaka, Japan) region. |
| 2019-04-15 | App Engine standard environment availability in europe-west6 region |  | App Engine standard environment became available in the europe-west6 (Zurich, Switzerland) region. |
| 2019-04-09 | Cloud Tasks |  | Cloud Tasks reached general availability, enabling asynchronous task execution outside user requests. |
| 2019-04-09 | Serverless VPC Access for App Engine |  | Serverless VPC Access entered beta, allowing App Engine apps to connect to internal resources in a VPC network. |
| 2019-03-20 | App Engine standard environment PHP 7.2 runtime |  | The PHP 7.2 runtime for the App Engine standard environment reached general availability; The PHP 7.2 runtime for the App Engine standard environment entered beta. |
| 2018-10-22 | App Engine standard environment availability in asia-east2 region |  | App Engine standard environment became available in the asia-east2 (Hong Kong) region. |
| 2018-08-21 | PHP 5.5 to PHP 7.2 migration guide for App Engine |  | A migration guide was published to help move App Engine PHP applications from PHP 5.5 to PHP 7.2. |
| 2018-07-10 | App Engine standard environment availability in us-west2 region |  | App Engine standard environment became available in the us-west2 (Los Angeles) region. |
| 2018-05-15 | App Engine automatic scaling max instances setting |  | A new max instances setting was introduced to cap the total number of App Engine automatic-scaling instances that can be scheduled. |
| 2018-05-15 | App Engine automatic scaling min instances setting |  | A new min instances setting was introduced to keep a minimum number of App Engine automatic-scaling instances running. |
| 2018-05-15 | App Engine automatic scaling target CPU utilization setting |  | A target CPU utilization setting was added to optimize App Engine automatic-scaling behavior for latency and cost. |
| 2018-05-15 | App Engine automatic scaling target throughput utilization setting |  | A target throughput utilization setting was added to optimize App Engine automatic-scaling around concurrent request levels. |
| 2018-01-23 | Python SDK version 1.9.66 update |  | The App Engine Python SDK was updated to version 1.9.66. |
| 2017-12-14 | App Engine IAM deployment roles and permissions |  | App Engine deployment guidance was improved to cover deploying apps with IAM roles and service accounts using predefined App Engine roles and required permissions. |
| 2017-10-31 | App Engine availability in asia-south1 region |  | App Engine became available in the asia-south1 (Mumbai) region. |
| 2017-10-11 | App Engine Firewall |  | App Engine Firewall was announced as generally available. |
| 2017-09-13 | Generally available App Engine custom domain management commands |  | App Engine made gcloud custom domain mapping commands and Admin API methods generally available, including `gcloud domains verify` and `apps.authorizedDomains.list`. |
| 2017-09-13 | Managed SSL certificate upgrades for existing domain mappings |  | Existing domain mappings with SSL certificates were supported to continue functioning and be upgraded to managed SSL certificates. |
| 2017-09-13 | Managed SSL certificates for custom domains |  | App Engine added managed SSL certificates for custom domains, with automatic provisioning, renewal, and revocation tied to domain mapping. |
| 2017-09-05 | App Engine availability in southamerica-east1 region |  | App Engine became available in the southamerica-east1 (São Paulo) region. |
| 2017-08-01 | App Engine availability in europe-west3 region |  | App Engine became available in the europe-west3 (Frankfurt) region. |
| 2017-07-18 | App Engine availability in australia-southeast1 region |  | App Engine became available in the australia-southeast1 (Sydney) region. |
| 2017-06-06 | App Engine availability in europe-west2 region |  | App Engine became available in the europe-west2 (London) region. |
| 2017-06-06 | Beta App Engine custom domain and SSL certificate management APIs |  | App Engine added beta-level Admin API and gcloud support for creating and managing custom domains and SSL certificates. |
| 2017-05-09 | App Engine availability in us-east4 region |  | App Engine became available in the us-east4 (North Virginia) region. |
| 2016-08-01 | App Engine Admin API v1 |  | Version 1 of the App Engine Admin API was made generally available. |
| 2016-08-01 | App Engine PHP runtime version 1.9.42 |  | App Engine PHP was released with runtime version 1.9.42. |
| 2016-07-18 | App Engine cron task throughput limit |  | The maximum number of cron tasks was increased to 250. |
| 2016-07-18 | App Engine dashboard per-URL error reporting |  | Server Error and Client Error metrics in the App Engine dashboard now more accurately reflect status errors on a per-URL basis. |
| 2016-07-18 | App Engine PHP runtime version 1.9.40 |  | App Engine PHP was released with runtime version 1.9.40. |
| 2016-07-18 | Cloud Console guided App Engine walkthrough |  | A guided App Engine walkthrough was added in Cloud Console to launch language-specific interactive tutorials directly from the console. |
| 2016-07-18 | LeaseTasksByTag request rate limit |  | LeaseTasksByTag requests are limited to 25 requests per second. |
| 2016-07-01 | Cloud Datastore new pricing rollout |  | The new Cloud Datastore pricing model was made effective. |
| 2016-05-25 | App Engine PHP runtime version 1.9.38 |  | App Engine PHP was released with runtime version 1.9.38. |
| 2016-05-25 | App Engine PHP runtime version 5.5.34 |  | The App Engine PHP runtime was updated to PHP 5.5.34. |
| 2016-05-25 | Cloud Datastore cross-group transaction version consistency |  | Cross-group transaction commits now assign identical version numbers to all new and updated entities regardless of entity group. |
| 2016-05-25 | URL Fetch invalid URL error behavior |  | URL Fetch now consistently returns INVALID_URL for requests to ports outside the permitted ranges. |
| 2016-05-04 | App Engine PHP runtime version 1.9.37 |  | The App Engine PHP runtime was updated to version 1.9.37. |
| 2016-05-02 | App Engine flexible environment Ruby runtime support |  | App Engine introduced support for the Ruby runtime in the flexible environment. |
| 2016-04-18 | App Engine OverQuota exception error details |  | OverQuota exception responses now populate available error details when provided. |
| 2016-04-18 | App Engine PHP mail service quota increase handling | 2016-04-18 | Google stopped accepting quota increase requests for the App Engine PHP mail service, directing users to SendGrid instead; deprecated on 2016-04-18. |
| 2016-04-18 | App Engine PHP runtime version 1.9.36 |  | The App Engine PHP runtime was updated to version 1.9.36. |
| 2016-04-18 | App Engine Users API IAM role and group expansion |  | The App Engine Users API now treats project Owners, Editors, Viewers, and App Engine Admins as admins through IAM roles and group membership. |
| 2016-03-24 | App Engine PHP runtime version 1.9.35 |  | The App Engine PHP runtime was updated to version 1.9.35. |
| 2016-03-04 | App Engine PHP runtime version 1.9.34 |  | The App Engine PHP runtime was updated to version 1.9.34. |
| 2016-03-04 | App Engine URL Fetch default quota for billed apps |  | The default URL Fetch quota for billed applications was increased. |
| 2016-02-17 | App Engine PHP runtime version 1.9.33 |  | The App Engine PHP runtime was updated to version 1.9.33. |
| 2016-02-17 | App Engine routing for /form path |  | The URL path /form is now allowed and is forwarded to applications. |
| 2016-02-03 | App Engine PHP runtime version 1.9.32 |  | The App Engine PHP runtime was updated to version 1.9.32. |
| 2016-02-03 | Managed VMs remote container construction options |  | Managed VM deployments now support remote container builds via either a transient Compute Engine VM with Docker or Google Cloud Build when enabled. |
| 2016-01-14 | Google Groups project membership for App Engine access |  | App Engine now supports granting application access to all members of a Google Group when the group is added as a project member. |
| 2015-11-30 | Endpoints API discoverable annotation flag |  | Endpoints API adds a discoverable boolean parameter to the @Api annotation to let developers disable API discovery. |
| 2015-11-30 | PHP runtime dynamic fileinfo extension |  | The PHP runtime now supports the fileinfo extension as a dynamically loadable extension. |
| 2015-11-30 | Task Queue empty-payload push request content-length header |  | Push requests for Task Queue tasks with no payload now include a Content-Length header set to 0. |
| 2015-11-30 | Task Queue queue depth calculation for inactive queues |  | Task Queue no longer calculates or stores queue depth for non-existent queues, queues marked for deletion, or during queue table outages. |
| 2015-09-25 | Default App Engine billing daily budget |  | Applications enabled for billing now default to an unlimited daily budget instead of a $0 cap, preventing accidental budget exhaustion outages. |
| 2015-09-25 | Faceted Search |  | Faceted Search reached General Availability. |
| 2015-08-27 | Elastic provisioning by VM and application metrics |  | Applications can be provisioned for current load with elastic provisioning based on VM and application-level metrics. |
| 2015-08-27 | MVM log context menu and sort by request/thread ID |  | A show-in-context menu was added to MVM application logs to sort entries by thread_id or request_id. |
| 2015-08-27 | oauth2client library version 1.4.2 upgrade |  | The oauth2client library has been upgraded to version 1.4.2. |
| 2015-08-27 | PHP runtime version 1.9.26 release |  | The App Engine PHP runtime release is updated to version 1.9.26. |
| 2015-08-27 | Remote API OAuth2 credentials support |  | The Remote API now supports OAuth2 authentication using Application Default Credentials. |
| 2015-08-27 | URLFetch oversized payload exception |  | URLFetch now raises RequestPayloadTooLargeException when request payloads exceed supported size limits. |
| 2015-08-14 | Admin Console menu redirection to Cloud Console |  | Admin Console menus now redirect to the Cloud Console while selected services, such as Admin Logs, remain available. |
| 2015-08-14 | App Engine Standard Environment PHP runtime version 1.9.25 |  | This release introduces PHP runtime version 1.9.25 for Google App Engine standard environment. |
| 2015-08-14 | Datastore empty-list property support |  | Datastore now allows property values to be empty lists. |
| 2015-08-14 | PHP runtime in Development Server | 2015-08-14 | The Development Server no longer supports the php runtime and requires using php55 instead; deprecated on 2015-08-14. |
| 2015-08-14 | PyAMF 0.7.2 beta integration |  | PyAMF version 0.7.2 (Beta) has been added. |
| 2015-08-14 | Task queue retry behavior for retry_limit zero |  | Failed tasks in queues with a retry_limit of zero are no longer retried. |

Source file slug: `app-engine-standard-environment-php.md`

