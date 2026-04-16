# App Engine standard environment Java

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 212
Unique features: 145

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-02 | SMTP-based email service migration support |  | App Engine standard environment Java supports migrating from the legacy Mail API to SMTP-based email services such as SendGrid, Mailgun, or Mailjet; App Engine standard environment Java supports migrating from the legacy Mail API to SMTP-based email services such as SendGrid, Mailgun, or Mailjet. |
| 2026-02-12 | Cloud Run migration command |  | App Engine standard environment Java supports deploying existing standard environment apps to Cloud Run with the gcloud beta app migrate-to-run command. |
| 2025-12-22 | Java 25 runtime |  | The Java 25 runtime enables App Engine standard environment Java applications to run on Java 25; The Java 25 runtime enables App Engine standard environment Java applications to run on Java 25. |
| 2025-10-20 | TLS 1.2 and later support |  | App Engine standard environment Java supports TLS 1.2 and later with a secure set of cipher suites; App Engine standard environment Java supports TLS 1.2 and later with a secure set of cipher suites. |
| 2025-08-07 | TLS 1.1 and earlier support | March 2025 | App Engine standard environment Java previously allowed use of TLS 1.1 and earlier protocol versions; deprecated on March 2025. |
| 2025-06-30 | URL Fetch certificate validation by default |  | The URL Fetch API validates the contacted host certificate by default for new deployments. |
| 2025-03-03 | Automatic scaling max_instances default |  | New standard environment deployments default the automatic scaling maximum instance count to 20. |
| 2024-12-09 | Custom organization policies for Serverless VPC Access connectors |  | Custom organization policies can be applied to Serverless VPC Access connectors at the project, folder, or organization level. |
| 2024-07-30 | Runtime lifecycle stage filtering |  | The Google Cloud console can filter App Engine versions by runtime lifecycle stage and show warning icons for affected versions. |
| 2024-07-16 | HTTP connector |  | App Engine standard environment Java can use an HTTP connector to improve CPU and memory utilization. |
| 2024-02-26 | Java 21 runtime |  | The Java 21 runtime enables App Engine standard environment Java applications to run on Java 21; The Java 21 runtime enables App Engine standard environment Java applications to run on Java 21. |
| 2024-01-23 | Serverless VPC Access connector update |  | Serverless VPC Access connectors can be updated to change instance type and minimum or maximum instance counts; Serverless VPC Access connectors can be updated to change instance type and minimum or maximum instance counts. |
| 2023-06-22 | Maven wrapper support |  | The Java runtime supports using Maven wrappers to manage a project's Maven dependency. |
| 2023-04-27 | Search API for second-generation runtimes |  | The Search API is available in App Engine legacy bundled services for second-generation runtimes through the App Engine API JAR. |
| 2022-12-13 | App-level default service account selection |  | App Engine applications can use any configured service account in the project as the app-level default service account during creation and update. |
| 2022-11-01 | Build environment variables |  | App Engine standard environment Java supports build environment variables; App Engine standard environment Java supports build environment variables. |
| 2022-07-01 | Java 17 runtime |  | The Java 17 runtime enables App Engine standard environment Java applications to run on Java 17; The Java 17 runtime enables App Engine standard environment Java applications to run on Java 17. |
| 2022-05-18 | Per-version user-managed service account |  | App Engine deployments can specify a user-managed service account for each version; App Engine deployments can specify a user-managed service account for each version. |
| 2022-04-13 | Legacy bundled services for Java 11 and 17 |  | App Engine legacy bundled services are available for Java 11 and Java 17 through language-idiomatic libraries. |
| 2022-03-24 | Serverless VPC Access connectors in Shared VPC host projects |  | Serverless VPC Access connectors can be configured in Shared VPC host projects. |
| 2022-03-15 | Open source artifact release mechanism |  | Version 2.x.x released artifacts use the open source release mechanism instead of the internal build system. |
| 2021-11-03 | Serverless VPC Access egress settings |  | Serverless VPC Access egress settings control whether traffic to external destinations is sent through the connector; Serverless VPC Access egress settings control whether traffic to external destinations is sent through the connector. |
| 2021-09-27 | Legacy App Engine APIs for Java 11 second-generation runtimes |  | Many legacy App Engine APIs are available to Java 11 second-generation runtimes through language-idiomatic libraries. |
| 2021-04-14 | Serverless VPC Access support for Shared VPC |  | App Engine standard environment Java supports using Serverless VPC Access with Shared VPC; App Engine standard environment Java supports using Serverless VPC Access with Shared VPC. |
| 2021-03-26 | CPU utilization metric |  | App Engine standard environment provides a CPU Utilization metric that reports average CPU utilization across active instances. |
| 2020-09-25 | Network ingress controls |  | Network ingress controls let an app accept only requests routed through Cloud Load Balancing. |
| 2020-07-08 | External HTTP(S) Load Balancing via serverless NEGs |  | App Engine supports External HTTP(S) Load Balancing through serverless network endpoint groups, including Cloud CDN use. |
| 2020-05-14 | App Engine resource labels for billing analysis |  | App Engine services can use labels to support fine-grained billing analysis in BigQuery exports. |
| 2020-02-11 | Region ID in app URLs |  | App Engine app URLs can include a region ID to improve request routing efficiency and reliability. |
| 2020-02-06 | Project spending limits | 2020-02-06 | Project spending limits allowed App Engine projects to cap spending; deprecated on 2020-02-06. |
| 2019-12-11 | Serverless VPC Access |  | Serverless VPC Access lets App Engine services connect to VPC network resources. |
| 2019-12-07 | Jakarta Jasper JSP compiler 9.0.24 |  | App Engine standard environment Java includes Jakarta Jasper JSP compiler version 9.0.24. |
| 2019-12-07 | Java SDK 1.9.77 |  | App Engine standard environment Java includes Java SDK version 1.9.77. |
| 2019-10-17 | Java 11 runtime |  | The Java 11 runtime enables App Engine standard environment Java applications to run on Java 11; The App Engine standard environment Java 11 runtime entered Beta. |
| 2019-07-30 | AppCfg tooling | 2020-07-30 | AppCfg tooling is the legacy App Engine deployment and management tool for Java applications; deprecated on 2020-07-30. |
| 2019-07-30 | Cloud SDK-based App Engine SDK tooling |  | App Engine SDK functionality is delivered exclusively through Cloud SDK. |
| 2019-07-30 | Legacy standalone App Engine SDK | 2020-07-30 | The legacy standalone App Engine SDK packages provided local tooling outside Cloud SDK; deprecated on 2020-07-30. |
| 2019-06-24 | App Engine Java SDK |  | The App Engine Java SDK was updated to version 1.9.76; The App Engine Java SDK was updated to version 1.9.75. |
| 2019-06-03 | Google App Engine API jar |  | The Google App Engine API jar is now compiled for a Java 8 target. |
| 2019-04-18 | App Engine region availability in asia-northeast2 |  | App Engine became available in the asia-northeast2 region in Osaka, Japan. |
| 2019-04-15 | App Engine region availability in europe-west6 |  | App Engine became available in the europe-west6 region in Zurich, Switzerland. |
| 2019-02-13 | Java 7 runtime application builds | 2019-01-25 | Building Java 7 applications is no longer supported in App Engine standard environment; deprecated on 2019-01-25. |
| 2019-01-25 | Java 7 runtime deployment | 2019-01-25 | Deployments targeting the Java 7 runtime are blocked and existing apps are automatically migrated to Java 8; deprecated on 2019-01-25. |
| 2018-12-28 | ASM library |  | The ASM library was upgraded to improve handling of Java 11 bytecode. |
| 2018-12-28 | JSP compilation classpath ECJ bundling |  | The JSP compilation classpath no longer bundles the Eclipse compiler ECJ. |
| 2018-12-19 | Search Index DeleteSchema method |  | The com.google.appengine.api.search.Index DeleteSchema method is now supported. |
| 2018-12-06 | Jetty runtime |  | Jetty was updated to version 9.4.14.v20181114; Jetty was updated to version 9.4.12.v20180830. |
| 2018-10-22 | App Engine region availability in asia-east2 |  | App Engine became available in the asia-east2 region in Hong Kong. |
| 2018-09-19 | DatastoreType high replication reporting |  | DatastoreType now always returns high replication. |
| 2018-09-19 | enhance_jdos exception handling |  | Enhance_jdos now fails when it raises an exception. |
| 2018-09-19 | Java 11 development support for Java 8 runtime |  | Support was improved for developing and deploying apps with Java 11 on the Java 8 runtime. |
| 2018-09-19 | min instances setting |  | The min-instances setting in appengine-web.xml can now be set to 0; The min instances setting lets you specify a minimum number of instances to keep running for an app. |
| 2018-08-24 | Cloud Endpoints Frameworks v1 | 2018-09-03 | Cloud Endpoints Frameworks v1 for App Engine standard environment is scheduled for shutdown; deprecated on 2018-09-03. |
| 2018-07-10 | App Engine region availability in us-west2 |  | App Engine became available in the us-west2 region in Los Angeles. |
| 2018-05-31 | Deployment filename validation |  | Deployments are now prevented when filenames contain carriage returns. |
| 2018-05-31 | dev_appserver.py application flag |  | Dev_appserver.py now supports the --application flag. |
| 2018-05-15 | Automatic scaling system upgrade |  | The automatic scaling system was upgraded to improve efficiency, reduce instance cost, and reduce loading request overhead. |
| 2018-05-15 | Dynamic-only instance labeling in auto scaling |  | Auto scaling no longer uses resident instance labels and now labels all instances as Dynamic. |
| 2018-05-15 | max instances setting |  | The max instances setting lets you cap the total number of instances scheduled for an app. |
| 2018-05-15 | target CPU utilization setting |  | The target CPU utilization setting lets you optimize autoscaling behavior between latency and cost. |
| 2018-05-15 | target throughput utilization setting |  | The target throughput utilization setting lets you tune the concurrent request level that triggers new instances. |
| 2017-12-20 | appcfg enable_new_staging_defaults flag |  | The appcfg command now includes the enable_new_staging_defaults flag to prepare for future Cloud SDK integration. |
| 2017-12-20 | Java 7 deprecation warning |  | A deprecation warning is now shown when deploying or locally running a Java 7 application. |
| 2017-12-20 | Local development server character encoding |  | The local development server now defaults to UTF-8 for Java 8 and supports explicit configuration with the appengine.file.encoding system property. |
| 2017-12-14 | IAM-based app deployment |  | App Engine supports deploying applications by using IAM roles and service accounts. |
| 2017-12-14 | Java SDK |  | The App Engine Java SDK provides local development and deployment tooling for Java applications; The App Engine Java SDK provides local development and deployment tooling for Java applications. |
| 2017-12-14 | Native URL stream handler default |  | The local development server now sets the url-stream-handler configuration parameter to native by default to match Java 8 production behavior. |
| 2017-10-31 | Regional availability in asia-south1 |  | App Engine standard environment for Java is available in the asia-south1 region. |
| 2017-10-11 | App Engine firewall |  | App Engine firewall lets you control inbound traffic to applications with network-level access rules. |
| 2017-10-11 | Jetty 9 JSP compiler JDK 9 targeting |  | The Jetty 9 JSP compiler now targets Java 1.8 when running on JDK 9. |
| 2017-09-25 | Cloud Endpoints v1 on Java 8 runtime | 2017-09-25 | Cloud Endpoints v1 support on the App Engine Java 8 runtime has been discontinued; deprecated on 2017-09-25. |
| 2017-09-25 | Java 8 runtime | 2026-01-31 | The Java 8 runtime lets App Engine standard environment run Java 8 applications; The App Engine standard environment Java 8 runtime lets applications run on Java 8 in the standard environment; deprecated on 2026-01-31. |
| 2017-09-25 | Local development server boot classpath overrides | 2017-09-25 | The local development server no longer supports -Xbootclasspath/p and google_sql.jar on the class path; deprecated on 2017-09-25. |
| 2017-09-18 | App Engine Gradle plugin |  | The App Engine Gradle plugin supports building and deploying Java applications from Gradle; The App Engine Gradle plugin supports building and deploying Java applications from Gradle. |
| 2017-09-18 | datastore-indexes-auto.xml preservation |  | Non-clean rebuilds now preserve datastore-indexes-auto.xml instead of removing it. |
| 2017-09-18 | explodeWar sync behavior |  | The explodeWar task now uses sync instead of copy. |
| 2017-09-13 | Custom domain mapping commands and API |  | The gcloud commands and Admin API methods for verifying and listing custom domain mappings are generally available. |
| 2017-09-13 | Managed SSL certificate upgrade |  | Existing domain mappings can be upgraded to managed SSL certificates. |
| 2017-09-13 | Managed SSL certificates for custom domains |  | Managed certificates automatically provision, renew, and revoke SSL certificates for mapped custom domains. |
| 2017-09-11 | GAE_ENV environment variable |  | The App Engine SDK now exposes the GAE_ENV environment variable for the standard environment. |
| 2017-09-11 | GAE_RUNTIME environment variable |  | The App Engine SDK now exposes the GAE_RUNTIME environment variable for Java runtimes. |
| 2017-09-11 | Liveness and readiness health check configuration |  | The SDK adds updated liveness and readiness health check support in appengine-web.xml for compatible flexible runtimes. |
| 2017-09-11 | session_affinity configuration support |  | The SDK supports the session_affinity setting in appengine-web.xml for compatible flexible runtimes. |
| 2017-09-11 | subnetwork_name configuration support |  | The SDK supports the subnetwork_name setting in appengine-web.xml for compatible flexible runtimes. |
| 2017-09-05 | Appstats filter Java 8 compatibility warning |  | The tooling now emits an error message when the appstats filter is used with Java 8. |
| 2017-09-05 | Regional availability in southamerica-east1 |  | App Engine standard environment for Java is available in the southamerica-east1 region. |
| 2017-08-01 | Regional availability in europe-west3 |  | App Engine standard environment for Java is available in the europe-west3 region. |
| 2017-07-18 | Regional availability in australia-southeast1 |  | App Engine standard environment for Java is available in the australia-southeast1 region. |
| 2017-06-28 | Google Cloud Client Library access |  | The Java 8 runtime supports Google Cloud-based APIs that are accessible through the Google Cloud Client Library for Java. |
| 2017-06-28 | Java 7 API compatibility for Java 8 runtime |  | The Java 8 runtime maintains compatibility with Java 7 App Engine features and built-in APIs. |
| 2017-06-28 | Metadata server project and service account access |  | The Java 8 runtime supports read-only access to project and service account values from the GCP metadata server. |
| 2017-06-28 | Removal of class whitelisting |  | The Java 8 runtime makes all public Java 8 APIs available by removing class whitelisting. |
| 2017-06-28 | Removal of Java security manager |  | The Java 8 runtime removes the Java security manager. |
| 2017-06-06 | Custom domain and SSL management |  | Beta Admin API and gcloud features let you create and manage custom domains and SSL certificates. |
| 2017-06-06 | Regional availability in europe-west2 |  | App Engine standard environment for Java is available in the europe-west2 region. |
| 2017-05-09 | Regional availability in us-east4 |  | App Engine standard environment for Java is available in the us-east4 region. |
| 2017-05-08 | Additional environment variable configuration |  | The Maven and Gradle plugins expose an environment parameter for adding extra environment variables. |
| 2017-05-08 | App Engine Maven plugin |  | The App Engine Maven plugin supports building and deploying Java applications from Maven; The App Engine Maven plugin supports building and deploying Java applications from Maven. |
| 2017-05-08 | Local environment variable loading from appengine-web.xml |  | The local development server now reads and includes environment variables defined in appengine-web.xml. |
| 2017-05-02 | Flexible app staging file selection |  | Maven and Gradle staging for flexible apps now copies only app.yaml into the build or target directory and expects other configuration files under src/main/appengine. |
| 2017-05-02 | Gradle configuration deployment tasks |  | The Gradle plugin adds dedicated tasks for deploying cron, dispatch, dos, index, and queue configuration files. |
| 2017-05-02 | Maven configuration deployment goals |  | The Maven plugin adds dedicated goals for deploying cron, dispatch, dos, index, and queue configuration files. |
| 2017-04-19 | Java 8 standard environment alpha runtime support |  | The tooling improves support for the Java 8 standard environment alpha runtime. |
| 2017-04-19 | Jetty 9.3 runtime upgrade for Java 8 alpha |  | The Java 8 alpha standard environment runtime upgrades to Jetty 9.3.18. |
| 2017-04-19 | quickstart-web.xml processing improvements |  | Quickstart-web.xml processing now uses newer Jetty capabilities to better support Java 8 Spring Boot applications. |
| 2017-03-29 | web.xml-less local execution for Java 8 alpha |  | Java 8 alpha applications without a web.xml file can now run in the local development server. |
| 2017-03-01 | Automatic web.xml generation |  | App Engine can avoid generating a web.xml file when a Java 7 app already includes a servlet 3.1 web.xml. |
| 2017-03-01 | Local development server multi-service testing |  | The local development server can test multiple App Engine services together. |
| 2017-03-01 | ZIP deployment Java class packaging |  | ZIP packaging for App Engine Java applications includes Java class files even when the app does not use JSPs. |
| 2017-02-17 | Local datastore clearDatastore flag |  | The App Engine Maven and Gradle plugins provide a clearDatastore flag to clear the local datastore on startup. |
| 2017-02-17 | Source context tasks and goals |  | The App Engine Maven and Gradle plugins provide source-context tasks and goals. |
| 2016-11-03 | App Engine Java runtime |  | The App Engine Java runtime executes Java applications in the standard environment; The App Engine Java runtime executes Java applications in the standard environment. |
| 2016-10-27 | Channel service | 2017-10-31 | The Channel service provides server-to-client messaging for App Engine applications; deprecated on 2017-10-31. |
| 2016-10-27 | XMPP service | 2017-10-31 | The XMPP service enables App Engine applications to send and receive XMPP messages; deprecated on 2017-10-31. |
| 2016-10-17 | BlobInfo Cloud Storage property |  | BlobInfo includes a property that identifies when a Blobstore blob is stored in a Cloud Storage bucket. |
| 2016-08-01 | App Engine Admin API v1 |  | App Engine Admin API v1 provides administrative operations for App Engine applications. |
| 2016-07-18 | 64-bit Java runtime |  | App Engine Java applications can run on the 64-bit Java runtime. |
| 2016-07-18 | Cloud Console guided walkthrough |  | Cloud Console provides an interactive App Engine guided walkthrough by language. |
| 2016-07-18 | Cron task limit |  | App Engine supports up to 250 cron tasks per application. |
| 2016-07-18 | LeaseTasksByTag request rate limit |  | LeaseTasksByTag enforces a rate limit on tagged task lease requests. |
| 2016-07-18 | Per-URL error reporting in App Engine dashboard |  | The App Engine dashboard reports server and client errors more accurately at the per-URL level. |
| 2016-05-25 | Cross-group transaction version consistency |  | Cross-group Datastore transactions assign the same version number to all new or updated entities in the transaction. |
| 2016-05-25 | URL Fetch invalid URL error handling |  | URL Fetch returns INVALID_URL for requests to ports outside the permitted ranges. |
| 2016-04-18 | Mail service quota increase requests | 2016-04-18 | The mail service previously allowed customers to request quota increases; deprecated on 2016-04-18. |
| 2016-04-18 | OverQuota error details |  | OverQuota exception messages can include available error details. |
| 2016-04-18 | Users API IAM role support |  | The App Engine Users API recognizes IAM roles when determining administrator access. |
| 2016-03-04 | URL Fetch default quota for billed apps |  | Billed applications receive a higher default quota for URL Fetch. |
| 2016-02-17 | Reserved /form URL path support |  | App Engine forwards requests for the /form URL path to applications. |
| 2016-02-03 | Datastore Transaction.rollback exception handling |  | The low-level Datastore API logs an INFO message instead of throwing an exception when rollback follows a failed transaction operation. |
| 2016-01-14 | Google Groups access support |  | App Engine project access can be granted through Google Groups membership. |
| 2015-12-30 | Endpoints API discovery toggle |  | The Endpoints API provides a discoverable parameter on the @Api annotation to disable API discovery. |
| 2015-12-30 | Push queue Content-Length header for empty payloads |  | Push queue requests for tasks with no payload include a Content-Length header set to 0. |
| 2015-12-30 | Task queue depth calculation controls |  | Task Queue avoids calculating and storing queue depth for non-existent or deleting queues and during queue table outages. |
| 2015-10-29 | Files API in Java DevAppServer |  | The Java DevAppServer no longer supports the Files API. |
| 2015-10-29 | Search geo filtering accuracy |  | Search queries provide more accurate geo filtering. |
| 2015-09-25 | Default unlimited daily budget for newly billed apps |  | Newly billed applications default to an unlimited daily budget until a budget is explicitly set. |
| 2015-09-25 | Faceted Search |  | Faceted Search lets applications refine search results using facet-based filtering. |
| 2015-08-27 | Elastic provisioning based on VM and application metrics |  | Applications can be provisioned for current load and configured for elastic provisioning using both VM-level and application-level metrics. |
| 2015-08-27 | MVM application logs show in context |  | MVM application logs support a Show in Context menu that lets users sort logs by thread_id or request_id when those fields are present. |
| 2015-08-27 | Remote API OAuth2 authentication |  | Remote API access supports OAuth2 credentials through Application Default Credentials. |
| 2015-08-27 | URLFetch default deadline property |  | The Java URLFetch API supports an appengine-web.xml property to set a default fetch timeout in seconds. |
| 2015-08-27 | URLFetch oversized payload exception |  | The Java URLFetch API uses RequestPayloadTooLargeException for requests whose payloads exceed the supported size. |
| 2015-08-14 | Admin Console menu redirection to Cloud Console |  | Admin Console menus redirect users to Cloud Console while some services such as Admin Logs remain in the Admin Console. |
| 2015-08-14 | Datastore empty list properties |  | Datastore properties can represent an empty list value. |
| 2015-08-14 | Task queue zero retry_limit behavior |  | Failed tasks in queues configured with a retry_limit of zero are no longer retried. |

Source file slug: `app-engine-standard-environment-java.md`

