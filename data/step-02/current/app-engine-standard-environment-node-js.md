# App Engine standard environment Node.js

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 128
Unique features: 123

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-02-12 | App Engine standard environment migration to Cloud Run |  | The gcloud beta app migrate-to-run command now supports deploying existing App Engine standard applications directly to Cloud Run in preview. |
| 2025-11-20 | Node.js 24 runtime support |  | The Node.js 24 runtime is now generally available in App Engine standard environment. |
| 2025-10-20 | TLS 1.2+ support with secure cipher suites |  | App Engine standard environment now supports TLS version 1.2 and later using the corresponding secure cipher suites. |
| 2025-08-07 | TLS 1.1 and earlier support | March 2025 | Support for TLS versions 1.1 and earlier in App Engine standard environment is deprecated in favor of TLS 1.2 and later; deprecated on March 2025. |
| 2025-07-30 | Node.js 24 runtime preview |  | The Node.js 24 runtime is now available in preview for App Engine standard environment. |
| 2025-03-03 | Default max_instances for new automatic scaling deployments |  | New App Engine standard projects created after March 2025 now default to 20 maximum instances for automatic scaling deployments. |
| 2024-12-09 | Custom organization policies for Serverless VPC Access connectors |  | Custom organization policies for Serverless VPC Access connectors are now generally available and can be applied at project, folder, or organization scope. |
| 2024-11-19 | Node.js 22 runtime support |  | The Node.js 22 runtime is now generally available in App Engine standard environment. |
| 2024-07-30 | Runtime lifecycle stage filtering for App Engine versions |  | The App Engine versions list in Google Cloud console now supports filtering by runtime lifecycle stage and shows warning icons for deprecated or unsupported runtimes. |
| 2024-05-17 | Node.js 22 runtime preview |  | The Node.js 22 runtime is now available in preview for App Engine standard environment. |
| 2024-01-23 | Serverless VPC Access connector update controls |  | Updating a Serverless VPC Access connector is now generally available, including edits to machine type and minimum/maximum instance counts. |
| 2023-06-26 | Node.js 20 runtime support |  | The Node.js 20 runtime is now generally available in App Engine standard environment. |
| 2023-06-01 | Pnpm support for Node.js runtimes |  | App Engine standard environments now support using the pnpm package manager to configure dependencies for Node.js runtimes. |
| 2023-05-05 | Node.js 20 runtime for App Engine standard environment |  | The Node.js 20 runtime became available in App Engine standard environment in preview. |
| 2023-04-05 | Yarn 2 support for private modules in Artifact Registry |  | App Engine standard Node.js runtimes now support Yarn 2 for configuring private modules hosted in Artifact Registry. |
| 2023-01-17 | Node.js 18 runtime for App Engine standard environment |  | The Node.js 18 runtime for App Engine standard environment became generally available; The Node.js 18 runtime for App Engine standard environment was introduced in preview. |
| 2022-12-21 | Serverless VPC Access connector configuration updates |  | App Engine standard now allows preview updates to Serverless VPC Access connectors, including changing machine type and min/max instance counts. |
| 2022-12-13 | App-level default service account configuration |  | You can create and update App Engine applications using any configured service account in the Cloud project as the app-level default service account. |
| 2022-11-01 | Build environment variables support |  | Build environment variables support is now generally available for App Engine standard environment. |
| 2022-05-18 | User-managed service account per App Engine version |  | Specifying a user-managed service account for each App Engine version during deployment is now generally available. |
| 2022-03-24 | Serverless VPC Access connectors in Shared VPC host projects |  | Serverless VPC Access connectors now support configuration in Shared VPC host projects for App Engine standard environment at general availability. |
| 2022-02-15 | Artifact Registry authentication for private Node.js dependencies |  | Node.js apps in App Engine standard can now use private dependencies from an Artifact Registry Node.js package repository using .npmrc configuration and authentication settings. |
| 2021-11-29 | Node.js 16 runtime for App Engine standard environment |  | The Node.js 16 runtime for App Engine standard environment became generally available; The Node.js 16 runtime for App Engine standard environment entered public preview. |
| 2021-11-03 | Serverless VPC Access egress settings |  | Serverless VPC Access egress settings are generally available for App Engine standard, allowing control over whether external outbound traffic uses the VPC connector; Serverless VPC Access egress settings became available for App Engine, enabling external outbound traffic routing control through the connector. |
| 2021-06-30 | Version-specific user-managed service accounts for App Engine standard |  | App Engine standard deployment now supports specifying a user-managed service account per version during deployment for finer-grained IAM privilege control. |
| 2021-06-14 | App Engine standard environment regional availability |  | App Engine standard became available in the us-west1, asia-southeast1, and asia-east1 regions; App Engine standard became available in the europe-central2 region. |
| 2021-04-20 | Build environment variables support in App Engine standard |  | Support for build environment variables became available in preview for App Engine standard. |
| 2021-04-14 | Shared VPC support for Serverless VPC Access |  | Serverless VPC Access support for Shared VPC is now generally available for App Engine standard; Serverless VPC Access support for Shared VPC was introduced in beta for App Engine standard. |
| 2021-03-26 | CPU Utilization metric for App Engine standard |  | App Engine standard added a new CPU Utilization metric that reports average CPU usage across active instances. |
| 2021-03-11 | Node.js 14 runtime for App Engine standard environment |  | The Node.js 14 runtime for App Engine standard environment became generally available. |
| 2020-09-25 | Network ingress controls for App Engine via Cloud Load Balancing |  | Apps using Cloud Load Balancing can use network ingress controls to accept requests only through the load balancer. |
| 2020-07-08 | App Engine External HTTP(S) Load Balancing via Serverless network endpoint groups |  | App Engine can use External HTTP(S) Load Balancing through Serverless network endpoint groups, enabling Cloud CDN integration for App Engine services. |
| 2020-07-06 | App Engine standard environment Node.js 12 runtime |  | The Node.js 12 runtime for App Engine Standard Environment reached general availability; The Node.js 12 runtime for App Engine Standard Environment reached beta availability. |
| 2020-06-08 | App Engine region availability: asia-southeast2 (Jakarta) |  | App Engine became available in the asia-southeast2 (Jakarta) region. |
| 2020-05-14 | App Engine resource billing labels with BigQuery export |  | App Engine introduced fine-grained resource billing visibility by labeling services and exporting billing data to BigQuery for querying. |
| 2020-04-20 | App Engine region availability: us-west4 (Las Vegas) |  | App Engine became available in the us-west4 (Las Vegas, NV) region. |
| 2020-03-13 | App Engine region availability: asia-northeast3 (Seoul) |  | App Engine became available in the asia-northeast3 (Seoul) region. |
| 2020-03-06 | App Engine region availability: us-west3 (Salt Lake City) |  | App Engine became available in the us-west3 (Salt Lake City, Utah) region. |
| 2020-02-11 | App Engine region-based app URLs |  | App Engine introduced region-ID-based app URLs (for example, REGION_ID.r.appspot.com) to improve request routing efficiency and reliability. |
| 2020-02-06 | Creating new App Engine spending limits | 2020-02-06 | Applying new spending limits to projects is no longer allowed, while existing spending limits continue to function; deprecated on 2020-02-06. |
| 2019-12-11 | Serverless VPC Access |  | Serverless VPC Access reached general availability; Serverless VPC Access is now in beta, enabling App Engine apps to connect to internal VPC resources. |
| 2019-07-30 | App Engine SDK delivery via Cloud SDK |  | App Engine SDK capabilities are provided only through the Cloud SDK. |
| 2019-07-30 | AppCfg tooling and legacy standalone App Engine SDK | 2020-07-30 | AppCfg tooling and the legacy standalone App Engine SDK packages (GoogleAppEngineLauncher.dmg, GoogleAppEngine.msi, google_appengine.zip) were deprecated and support was scheduled for removal; deprecated on 2020-07-30. |
| 2019-06-27 | Node.js 8 support on App Engine | 2019-06-27 | Support for Node.js 8 on App Engine is deprecated; deprecated on 2019-06-27. |
| 2019-04-18 | App Engine Standard environment availability in asia-northeast2 |  | App Engine Standard became available in the Osaka (asia-northeast2) region. |
| 2019-04-15 | App Engine Standard environment availability in europe-west6 |  | App Engine Standard became available in the Zurich (europe-west6) region. |
| 2019-04-09 | Cloud Tasks |  | Cloud Tasks reached general availability for asynchronous task processing. |
| 2019-03-20 | Node.js 10 runtime for App Engine standard environment |  | The App Engine standard Node.js 10 runtime reached general availability; The App Engine standard Node.js 10 runtime was updated to version 10.14.0. |
| 2019-03-20 | Node.js 8 runtime for App Engine standard environment |  | The App Engine standard Node.js 8 runtime was updated to version 8.14.0; The App Engine standard Node.js 8 runtime reached general availability. |
| 2018-10-22 | App Engine Standard environment availability in asia-east2 |  | App Engine Standard became available in the Hong Kong (asia-east2) region. |
| 2018-09-19 | App Engine Node.js deployment --no-cache option |  | The `gcloud beta app deploy --no-cache` option was added to force Node.js dependency installation during deployment by bypassing the build cache. |
| 2018-09-19 | Yarn dependency installation for App Engine Node.js |  | Node.js applications on App Engine now install dependencies using Yarn when a `yarn.lock` file is present. |
| 2018-08-24 | Node.js 8.11.4 runtime support |  | The App Engine standard environment Node.js runtime was updated to version 8.11.4. |
| 2018-08-10 | Custom `gcp-build` deployment script |  | App Engine now executes a `gcp-build` script from `package.json` at deployment time as a custom build step. |
| 2018-08-10 | Local `file:` dependencies in package.json |  | `package.json` now supports local dependencies for App Engine Node.js apps using the `file:` path notation. |
| 2018-07-10 | App Engine availability in us-west2 region |  | App Engine became available in the us-west2 (Los Angeles) region. |
| 2018-07-04 | Node.js 8.11.3 runtime support |  | The App Engine standard environment Node.js runtime was updated to version 8.11.3. |
| 2018-06-12 | Beta availability of App Engine standard Node.js runtime |  | The App Engine standard Node.js runtime entered beta with Node.js version 8.11.2. |
| 2018-05-15 | App Engine automatic scaling upgrade rollout |  | App Engine standard completed a rollout of an automatic scaling upgrade that improved instance efficiency and reduced loading request and operating costs. |
| 2018-05-15 | Auto-scaling max instances setting |  | A configurable `max instances` setting was added to cap the total number of instances scheduled by App Engine automatic scaling. |
| 2018-05-15 | Auto-scaling min instances setting |  | A configurable `min instances` setting was added to App Engine automatic scaling to retain a minimum number of running instances. |
| 2018-05-15 | Auto-scaling target CPU utilization control |  | A new target CPU utilization setting allows App Engine automatic scaling to tune performance between latency and cost. |
| 2018-05-15 | Auto-scaling target throughput utilization control |  | A new target throughput utilization setting allows App Engine automatic scaling to optimize scaling based on concurrent request load. |
| 2018-05-15 | Dynamic-only instance labeling in App Engine automatic scaling |  | Automatic scaling now labels instances as Dynamic only, removing resident instance labeling while preserving equivalent scheduling behavior. |
| 2018-04-27 | Alpha documentation for App Engine Node.js runtime |  | Published alpha documentation for the App Engine standard environment Node.js runtime. |
| 2017-12-14 | App Engine deployment access-control documentation |  | Access-control documentation was improved to describe IAM roles and permissions required for deploying App Engine applications. |
| 2017-10-31 | App Engine availability in asia-south1 region |  | App Engine became available in the asia-south1 (Mumbai, India) region. |
| 2017-10-11 | App Engine firewall |  | App Engine firewall support reached general availability. |
| 2017-09-13 | App Engine custom domain management APIs and gcloud commands |  | Custom domain mapping and related operations became generally available via gcloud and App Engine Admin API methods. |
| 2017-09-13 | Managed SSL certificate migration for existing App Engine custom domains |  | Existing custom domain mappings and certificates remain supported, with an option to upgrade existing certificates to managed SSL certificates. |
| 2017-09-13 | Managed SSL certificates for App Engine custom domains |  | Managed certificates allow App Engine applications on custom domains to have automatically provisioned, renewed, and revoked SSL certificates. |
| 2017-09-05 | App Engine availability in southamerica-east1 |  | App Engine became available in the South America (São Paulo) region. |
| 2017-08-01 | App Engine availability in europe-west3 |  | App Engine became available in the Europe (Frankfurt) region. |
| 2017-07-18 | App Engine availability in australia-southeast1 |  | App Engine became available in the Australia (Sydney) region. |
| 2017-06-06 | App Engine availability in europe-west2 |  | App Engine became available in the Europe (London) region. |
| 2017-06-06 | Beta custom domain and SSL certificate management via Admin API and gcloud |  | Beta-level Admin API and gcloud capabilities became available to create and manage App Engine custom domains and SSL certificates. |
| 2017-05-09 | App Engine availability in us-east4 |  | App Engine became available in the US (North Virginia) region. |
| 2016-10-27 | App Engine Channel and XMPP services | 2017-10-31 | The App Engine Channel and XMPP services were deprecated and scheduled for shutdown; deprecated on 2017-10-31. |
| 2016-08-01 | App Engine Admin API v1 |  | Version 1 of the App Engine Admin API reached general availability. |
| 2016-08-01 | App Engine Node.js runtime version 1.9.42 |  | The App Engine Node.js runtime was updated to version 1.9.42. |
| 2016-07-18 | App Engine Node.js runtime version 1.9.40 |  | The App Engine Node.js runtime was updated to version 1.9.40. |
| 2016-07-18 | App Engine per-URL dashboard error reporting |  | App Engine dashboard Server Errors and Client Errors now better reflect per-URL status-error behavior. |
| 2016-07-18 | Cloud Console guided App Engine walkthrough |  | A guided, language-based App Engine walkthrough with interactive in-console tutorials was added to Cloud Console. |
| 2016-07-18 | Cron task limit increase |  | The maximum number of cron tasks allowed was increased to 250. |
| 2016-07-18 | LeaseTasksByTag request rate limit |  | LeaseTasksByTag requests are now limited to 25 requests per second. |
| 2016-07-01 | Cloud Datastore new pricing model |  | New Cloud Datastore pricing became effective. |
| 2016-05-25 | App Engine Node.js runtime version 1.9.38 |  | The App Engine Node.js runtime was updated to version 1.9.38. |
| 2016-05-25 | Cross-group transaction version consistency |  | Cross-group transactions now assign the same version number to all new or updated entities regardless of entity group. |
| 2016-05-25 | URL Fetch invalid port error handling |  | URL Fetch now consistently returns INVALID_URL for requests to disallowed ports outside documented ranges. |
| 2016-05-04 | App Engine Node.js runtime version 1.9.37 |  | The App Engine Node.js runtime was updated to version 1.9.37. |
| 2016-04-18 | App Engine Node.js runtime 1.9.36 |  | The App Engine standard environment Node.js 1.9.36 runtime is available. |
| 2016-04-18 | App Engine Users API IAM role and group-based admin recognition |  | The App Engine Users API now recognizes Owner, Editor, Viewer, and App Engine Admin access for users based on IAM roles or group membership. |
| 2016-04-18 | OverQuota exception detail reporting |  | OverQuota exception messages now include available error details. |
| 2016-03-24 | App Engine Node.js runtime 1.9.35 |  | The App Engine standard environment Node.js 1.9.35 runtime is available. |
| 2016-03-04 | App Engine Node.js runtime 1.9.34 |  | The App Engine standard environment Node.js 1.9.34 runtime is available. |
| 2016-03-04 | URL Fetch billed-app quota increase |  | The default quota for URL Fetch requests was increased for billed applications. |
| 2016-02-17 | Allowing /form URL path |  | The /form URL path is now allowed and forwarded to applications. |
| 2016-02-17 | App Engine Node.js runtime 1.9.33 |  | The App Engine standard environment Node.js 1.9.33 runtime is available. |
| 2016-02-03 | App Engine Node.js runtime 1.9.32 |  | The App Engine standard environment Node.js 1.9.32 runtime is available. |
| 2016-02-03 | Managed VM container build backend selection |  | App Engine Managed VM deployments can build container images using either the default ephemeral Compute Engine VM path or Cloud Build. |
| 2016-01-14 | App Engine Node.js runtime 1.9.31 |  | The App Engine standard environment Node.js 1.9.31 runtime is available. |
| 2016-01-14 | Google Groups project-role propagation for App Engine access |  | App Engine now grants project Google Group members the same App Engine application access as the role assigned to the group. |
| 2015-11-30 | App Engine Node.js runtime version 1.9.29 |  | The App Engine Standard Node.js runtime was updated to version 1.9.29. |
| 2015-11-30 | App Engine Node.js runtime version 1.9.30 |  | The App Engine Standard Node.js runtime was updated to version 1.9.30. |
| 2015-11-30 | Endpoints discoverable annotation flag |  | An discoverable boolean parameter was added to the @Api annotation to disable API discovery for Endpoints users. |
| 2015-11-30 | Task queue depth measurement for invalid queues |  | Queue depth calculation and storage are now skipped for non-existent, deleted, or unavailable queue tables. |
| 2015-11-30 | Task Queue push request Content-Length header for empty payloads |  | Push requests to Task Queue with no payload now include a Content-Length header set to 0. |
| 2015-10-29 | App Engine Node.js runtime version 1.9.28 |  | The App Engine Standard Node.js runtime was updated to version 1.9.28. |
| 2015-09-25 | App Engine Node.js runtime version 1.9.27 |  | The App Engine Standard Node.js runtime was updated to version 1.9.27. |
| 2015-09-25 | Datastore |  | Datastore capability updates were included in this App Engine Standard Node.js release. |
| 2015-09-25 | Default unlimited daily budget for newly enabled apps |  | Newly billing-enabled applications now default to an unlimited daily budget instead of $0. |
| 2015-09-25 | Faceted Search general availability |  | Faceted Search reached general availability status. |
| 2015-08-27 | App Engine runtime version 1.9.26 |  | The App Engine runtime/SDK release was updated to version 1.9.26. |
| 2015-08-27 | Elastic provisioning with VM and application metrics |  | Applications can be provisioned for current load and scaled elastically using both VM and app-level metrics. |
| 2015-08-27 | MVM application log context menu |  | MVM application logs that include thread_id or request_id now have a show-in-context menu that lets users sort logs by those fields. |
| 2015-08-27 | OAuth2 access for Remote API |  | The Remote API can now be accessed using OAuth2 credentials and application-default credentials. |
| 2015-08-27 | oauth2client library update |  | The oauth2client library was upgraded to version 1.4.2. |
| 2015-08-27 | URLFetch payload size exception handling |  | URLFetch now throws RequestPayloadTooLargeException when request payloads exceed the allowed size. |
| 2015-08-14 | Admin Console menu redirection to Cloud Console |  | Admin Console menus now redirect to Cloud Console, while selected services such as Admin Logs remain available in Admin Console. |
| 2015-08-14 | App Engine runtime version 1.9.25 |  | The App Engine runtime/SDK release was updated to version 1.9.25. |
| 2015-08-14 | Datastore empty list property support |  | Datastore now supports properties whose value is an empty list. |
| 2015-08-14 | PyAMF 0.7.2 Beta support |  | PyAMF version 0.7.2 (Beta) support was added. |
| 2015-08-14 | Queue retry_limit=0 behavior |  | Tasks in queues configured with a retry_limit of zero are no longer retried. |

Source file slug: `app-engine-standard-environment-node-js.md`

