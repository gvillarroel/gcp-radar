# Cloud Logging

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 227
Unique features: 228

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-04-02 | Log views advanced filters |  | Log views support disjunctive clauses, negation statements, and labels in filters. |
| 2026-02-12 | On-demand BigQuery slots for Log Analytics and SQL-based alerting |  | Log Analytics queries and SQL-based alerting policies use on-demand BigQuery slots by default when no reservation assignment exists. |
| 2026-02-09 | Cloud Logging API MCP server |  | The Cloud Logging API MCP server lets agents and AI applications interact with log entries. |
| 2026-01-29 | Crashlytics export to Cloud Logging |  | Crashlytics data and optional Firebase sessions data can be exported to Cloud Logging for use across observability workflows. |
| 2026-01-26 | Ops Agent management with global VM Extension Manager policies |  | Ops Agent installation and lifecycle management can be automated across zones with global VM Extension Manager extension policies. |
| 2025-12-08 | Ops Agent management with zonal VM Extension Manager policies |  | Ops Agent installation and lifecycle management can be automated for virtual machines in a specified zone with VM Extension Manager extension policies. |
| 2025-10-09 | Log Analytics query builder |  | The Log Analytics query builder lets users build, edit, and run queries without writing SQL manually; The Log Analytics query builder lets users build queries in the Log Analytics page without manually writing SQL. |
| 2025-06-04 | Logs Explorer query cancellation |  | Logs Explorer lets users stop a running query with a Stop query control. |
| 2025-05-29 | Observability scope management with Google Cloud CLI |  | The Google Cloud CLI can configure observability scopes and set the default log scope. |
| 2025-05-08 | Log Analytics JSON field inference |  | Log Analytics can infer fields from JSON columns and show how frequently those inferred fields appear. |
| 2025-04-17 | Logs Explorer JSON payload field frequency analysis |  | Logs Explorer can show the most frequently occurring fields and values in log JSON payloads. |
| 2025-04-04 | Log Analytics pipe syntax |  | Log Analytics SQL queries support pipe syntax for a more linear and readable query structure; Log Analytics SQL queries support pipe syntax. |
| 2025-03-13 | App Hub labels in log entries |  | App Hub application labels are attached to log entries and exposed as application, service, and workload facets in Logs Explorer. |
| 2025-03-12 | Default log scope management with Observability API |  | The Observability API can set the default log scope. |
| 2025-02-18 | Organization Policy custom constraints for Cloud Logging |  | Custom Organization Policy constraints provide more granular control over Cloud Logging resources. |
| 2025-02-06 | Log view management in Google Cloud console |  | The Google Cloud console can create and manage log views. |
| 2025-01-13 | Analytics views |  | Analytics views transform log data into a custom format that can be queried with SQL. |
| 2024-12-18 | Custom roles for log scopes |  | Custom IAM roles can be created to allow creation and management of log scopes. |
| 2024-12-13 | Ops Agent pending status refinement in VM Instances dashboard |  | The VM Instances dashboard reports the Ops Agent pending status with additional states. |
| 2024-12-06 | Dashboard editing for saved Log Analytics charts |  | Saved Log Analytics charts can be edited directly from the Dashboards page; Saved Log Analytics charts can be edited directly from the Dashboards page. |
| 2024-10-29 | Log scope management with Google Cloud CLI |  | The Google Cloud CLI can create and manage log scopes. |
| 2024-10-28 | Tags for log buckets |  | Log buckets can be annotated with tags and those tags can be used for access management. |
| 2024-10-24 | SQL-based alerting policies |  | Alerting policies can monitor the results of SQL queries. |
| 2024-10-02 | Log scope management with Terraform |  | Terraform can create or update a log scope. |
| 2024-09-19 | Reserved BigQuery slots for Log Analytics |  | Log Analytics can query log data by using reserved BigQuery slots. |
| 2024-09-16 | Log scope management with Logging API |  | The Logging API can create and manage log scopes. |
| 2024-08-13 | Log scopes |  | Log scopes are persistent project-level resources that define which resources Logs Explorer searches for log entries. |
| 2024-07-19 | Saved and recent queries permission model |  | Saved and recent queries have updated permission requirements and support a configurable storage location in default resource settings. |
| 2024-07-03 | Log Analytics query byte estimation |  | Log Analytics shows estimated bytes processed and query validation status before running a SQL query. |
| 2024-06-26 | Log Analytics billable log volume analysis |  | Log Analytics can analyze billable log volume. |
| 2024-06-25 | Ops Agent support for Debian 11 Deep Learning VM Images |  | Ops Agent supports Compute Engine virtual machines running Deep Learning VM Images based on Debian 11. |
| 2024-06-24 | Gauge and scorecard charts for Log Analytics |  | Log Analytics query results can be visualized with gauge and scorecard charts. |
| 2024-06-13 | Terraform IAM bindings for log views |  | Terraform can attach IAM role bindings to log views to grant principals access. |
| 2024-04-03 | Logging query language cast function |  | The Logging query language supports the cast function. |
| 2024-04-03 | Logging query language regexp_extract function |  | The Logging query language supports the regexp_extract function. |
| 2024-03-28 | Pie charts for Log Analytics |  | Log Analytics can visualize data with pie charts. |
| 2024-03-26 | Intercepting aggregated sinks |  | Aggregated sinks can be configured as intercepting so logs are not passed through the child resource Log Router. |
| 2024-02-20 | Monitoring-native Log Analytics chart creation |  | Log Analytics charts can be configured and saved directly in Monitoring. |
| 2024-02-13 | Copy log entries |  | Cloud Logging supports copying log entries. |
| 2024-02-12 | Table widgets for Log Analytics results in Monitoring dashboards |  | Monitoring dashboards can display Log Analytics query results as a table widget. |
| 2024-01-08 | Analyze results from Logs Explorer in Log Analytics |  | Logs Explorer can open matching results in Log Analytics and automatically translate a Logging query language query into SQL. |
| 2023-12-13 | Log Analytics charting |  | Log Analytics supports charting query results, including selecting no aggregation for a chart. |
| 2023-12-05 | Error group ID queries |  | Logs Explorer and Log Analytics can query for a specific error group by error group ID. |
| 2023-12-01 | Ops Agent self-log collection control |  | Ops Agent can be configured not to collect and send its own logs to Cloud Logging. |
| 2023-12-01 | Ops Agent support for Arm VMs on Debian 12 |  | Ops Agent supports Compute Engine Arm virtual machines running Debian 12. |
| 2023-12-01 | Ops Agent support for Ubuntu 23.10 |  | Ops Agent supports Compute Engine virtual machines running Ubuntu 23.10. |
| 2023-11-29 | Default filter configuration for _Default sinks |  | New resources can inherit configured inclusion or exclusion filters for their _Default sinks. |
| 2023-11-10 | Saved query loading in Log Analytics |  | Log Analytics can load saved queries into the Query pane for editing before execution. |
| 2023-11-02 | Custom chart time intervals in Log Analytics |  | Log Analytics charts support custom time intervals specified in minutes, hours, or days. |
| 2023-11-01 | Duet AI log entry summarization |  | Duet AI can summarize Cloud Logging log entries for faster analysis; Duet AI can summarize Cloud Logging log entries for faster analysis. |
| 2023-10-24 | Ops Agent Arm VM support for SLES 15 and OpenSUSE Leap 15 |  | Ops Agent supports Compute Engine Arm VMs running SLES 15 and OpenSUSE Leap 15. |
| 2023-09-18 | Log Analytics chart export to custom dashboards |  | Log Analytics SQL query charts can be saved to custom dashboards. |
| 2023-08-21 | IAM deny policy support for Cloud Logging permissions |  | IAM deny policies can include supported Cloud Logging permissions. |
| 2023-08-21 | Log Analytics query result charts |  | Log Analytics can display query results as charts in the Log Analytics page. |
| 2023-08-14 | Ops Agent logging pipeline health checks |  | Ops Agent runtime health checks detect logging pipeline configuration and log parsing errors and report them to Cloud Logging. |
| 2023-08-01 | Ops Agent Arm VM support for Debian 11 |  | Ops Agent supports Compute Engine Arm VMs running Debian 11. |
| 2023-07-21 | Cross-project log bucket scope refinement |  | Logs Explorer can refine scope to view logs stored in buckets across different projects. |
| 2023-07-10 | Synchronized time ranges across Logging and Monitoring pages |  | Selected Logging and Monitoring pages share synchronized time range settings. |
| 2023-07-06 | Automatic Ops Agent installation during VM creation |  | The Google Cloud console can automatically install and maintain the Ops Agent when a VM is created. |
| 2023-06-12 | User-managed service accounts for log sinks |  | Cloud Logging log sinks can be created with user-managed service accounts. |
| 2023-06-05 | Folder-level default settings for CMEK and storage location |  | Cloud Logging supports configuring CMEK and a default storage location for individual folders. |
| 2023-05-22 | Log Analytics SQL JOIN and UNION support |  | Log Analytics SQL queries support JOIN and UNION operators. |
| 2023-05-15 | Log Analytics time-range selector |  | Log Analytics queries can be filtered with preset, custom, and relative time ranges using a time-range selector. |
| 2023-04-26 | Ops Agent built-in log rotation |  | Ops Agent includes built-in support for log rotation. |
| 2023-04-18 | Terraform support for Log Analytics bucket and linked dataset configuration |  | Terraform modules can configure Log Analytics on Cloud Logging buckets and BigQuery linked datasets. |
| 2023-03-27 | Cloud Logging API regional support in me-central1 |  | The Cloud Logging API supports the Doha region me-central1. |
| 2023-03-14 | Logging query language SEARCH function |  | The Logging Query Language includes a built-in SEARCH function for finding strings in log data. |
| 2023-03-10 | Bucket-level log-based metrics |  | Cloud Logging can create log-based metrics at the log bucket level; Cloud Logging can create log-based metrics at the log bucket level. |
| 2023-03-10 | Ops Agent disk buffer usage limits |  | Ops Agent limits disk space used for buffering unsent logging data during outages. |
| 2023-03-09 | Cross-project log routing |  | Cloud Logging can route logs through the Log Router of another Google Cloud project. |
| 2023-02-23 | Logs Explorer expanded time-range selector |  | The Logs Explorer time-range selector supports preset, custom, and relative time range options. |
| 2023-02-17 | Logging API support for Log Analytics buckets |  | The Logging API can create and upgrade log buckets to use Log Analytics. |
| 2023-02-16 | Ops Agent startup health checks |  | Ops Agent performs startup health checks to detect conditions that prevent correct operation. |
| 2022-12-19 | Cloud Logging data regionality in US and EU |  | Cloud Logging supports data regionality in the US and EU. |
| 2022-11-07 | Log content in alert notifications |  | Alert notifications can dynamically include extracted log content for troubleshooting. |
| 2022-11-04 | Suggested queries in GKE cluster logs tab |  | The GKE cluster Logs tab includes suggested queries for exploring logs. |
| 2022-10-24 | Microservices observability for gRPC applications |  | GRPC applications can be instrumented to use Microservices observability. |
| 2022-10-21 | Logs Explorer similar entries controls |  | Logs Explorer can show or hide entries similar to a selected log entry. |
| 2022-10-04 | Ops Agent Oracle Database integration |  | Ops Agent can collect Oracle Database logs and metrics. |
| 2022-09-27 | Log Analytics |  | Log Analytics lets users run SQL queries on log data and use BigQuery to analyze logs. |
| 2022-09-20 | Cloud Logging API regional support in me-west1 |  | The Cloud Logging API supports the Israel region me-west1. |
| 2022-08-04 | Error group indicators in Logs Explorer |  | Logs Explorer marks entries that belong to error groups and links to related error details and actions. |
| 2022-07-26 | Ops Agent Couchbase integration |  | Ops Agent can collect Couchbase logs and metrics. |
| 2022-07-18 | Correlated log entry search in Logs Explorer |  | Logs Explorer can search correlated log entries. |
| 2022-07-15 | Ops Agent SAP HANA integration |  | Ops Agent can collect SAP HANA logs and metrics. |
| 2022-07-15 | Ops Agent Vault log collection |  | Ops Agent can collect Vault logs. |
| 2022-06-29 | Ops Agent Apache Flink log collection |  | Ops Agent can collect Apache Flink logs. |
| 2022-05-26 | Ops Agent Active Directory Domain Services integration |  | Ops Agent can collect Active Directory Domain Services logs and metrics. |
| 2022-05-26 | Ops Agent IIS integration |  | Ops Agent can collect IIS logs and additional metrics. |
| 2022-05-26 | Ops Agent Jetty log collection |  | Ops Agent can collect Jetty logs. |
| 2022-05-26 | Ops Agent Varnish integration |  | Ops Agent can collect Varnish logs and metrics. |
| 2022-05-20 | Expanded log entry density in Logs Explorer |  | Logs Explorer displays more log entries through UI style changes. |
| 2022-05-05 | Hide similar logs in Logs Explorer |  | Logs Explorer can hide large sets of similar log entries from query results. |
| 2022-04-28 | Logging query language comments |  | The Logging query language supports comments within queries. |
| 2022-04-26 | Logs Explorer date and time format preferences |  | The improved Logs Explorer lets users customize date and time display and query-building formats. |
| 2022-04-26 | Logs Explorer plain-text search and filter builder |  | The improved Logs Explorer can build queries using a plain-text search field and filter menus without requiring query language syntax. |
| 2022-04-26 | Logs Explorer query library |  | Logs Explorer provides a query library for selecting reusable queries. |
| 2022-04-26 | Logs Explorer raw-text log view |  | The improved Logs Explorer can toggle default summary fields off to show logs in a raw-text view. |
| 2022-04-25 | and southamerica-west1 |  | The Cloud Logging API supports the regions europe-southwest1, europe-west6, europe-west8, europe-west9, and southamerica-west1. |
| 2022-04-25 | Cloud Logging API regional support in europe-southwest1 |  | The Cloud Logging API supports the regions europe-southwest1, europe-west6, europe-west8, europe-west9, and southamerica-west1. |
| 2022-04-25 | europe-west6 |  | The Cloud Logging API supports the regions europe-southwest1, europe-west6, europe-west8, europe-west9, and southamerica-west1. |
| 2022-04-25 | europe-west8 |  | The Cloud Logging API supports the regions europe-southwest1, europe-west6, europe-west8, europe-west9, and southamerica-west1. |
| 2022-04-25 | europe-west9 |  | The Cloud Logging API supports the regions europe-southwest1, europe-west6, europe-west8, europe-west9, and southamerica-west1. |
| 2022-04-14 | Pinned Log Entries in Logs Explorer |  | Logs Explorer supports pinning log entries and viewing pinned entries in different resource contexts. |
| 2022-03-25 | CMEK Organization Policies for Cloud Logging |  | Cloud Logging supports organization policies that enforce customer-managed encryption key protection. |
| 2022-03-11 | RabbitMQ Log Collection in Ops Agent |  | Ops Agent can collect RabbitMQ logs for Cloud Logging. |
| 2022-02-22 | Apache CouchDB Log Collection in Ops Agent |  | Ops Agent can collect Apache CouchDB logs for Cloud Logging. |
| 2022-02-22 | Apache Hadoop Log and Metric Collection in Ops Agent |  | Ops Agent can collect Apache Hadoop logs and metrics for Cloud Logging and Monitoring. |
| 2022-02-22 | Apache HBase Log and Metric Collection in Ops Agent |  | Ops Agent can collect Apache HBase logs and metrics for Cloud Logging and Monitoring. |
| 2022-02-22 | Apache ZooKeeper Log Collection in Ops Agent |  | Ops Agent can collect Apache ZooKeeper logs for Cloud Logging. |
| 2022-02-22 | WildFly Log Collection in Ops Agent |  | Ops Agent can collect WildFly logs for Cloud Logging. |
| 2022-02-14 | Apache Kafka Log and Metric Collection in Ops Agent |  | Ops Agent can collect Apache Kafka logs and metrics for Cloud Logging and Monitoring. |
| 2022-02-14 | Apache Solr Log and Metric Collection in Ops Agent |  | Ops Agent can collect Apache Solr logs and metrics for Cloud Logging and Monitoring. |
| 2022-02-14 | Default _Default Sink Disablement Settings |  | Organizations can disable the default _Default sink for new projects and folders. |
| 2022-02-14 | Default Storage Region Settings for Logging |  | Organizations can configure default storage regions for Logging resources in new projects and folders. |
| 2022-02-14 | MongoDB Log Collection in Ops Agent |  | Ops Agent can collect MongoDB logs for Cloud Logging. |
| 2022-02-10 | Regional Preferences in Logs Explorer |  | Logs Explorer supports regional preferences such as localized date and time formatting. |
| 2022-02-09 | Compute Engine Resource Names in Logs Explorer |  | Logs Explorer supports Compute Engine resource names alongside resource IDs. |
| 2022-01-26 | Apache Tomcat Log and Metric Collection in Ops Agent |  | Ops Agent can collect Apache Tomcat logs and metrics for Cloud Logging and Monitoring. |
| 2022-01-26 | Elasticsearch Log Collection in Ops Agent |  | Ops Agent can collect Elasticsearch logs for Cloud Logging. |
| 2022-01-26 | exclude_logs Processor in Ops Agent |  | Ops Agent provides an exclude_logs processor to prevent ingestion of selected logs. |
| 2022-01-26 | PostgreSQL Log and Metric Collection in Ops Agent |  | Ops Agent can collect PostgreSQL logs and metrics for Cloud Logging and Monitoring. |
| 2022-01-07 | MariaDB Log and Metric Collection in Ops Agent |  | Ops Agent can collect MariaDB logs and metrics for Cloud Logging and Monitoring. |
| 2021-11-22 | Legacy Logs Viewer | 2022-03-01 | Legacy Logs Viewer is the older log viewing interface that is being retired in favor of Logs Explorer; deprecated on 2022-03-01. |
| 2021-10-20 | Cassandra Log Collection in Ops Agent |  | Ops Agent can collect Cassandra logs for Cloud Logging. |
| 2021-10-20 | MySQL Log Collection in Ops Agent |  | Ops Agent can collect MySQL logs for Cloud Logging. |
| 2021-10-20 | Redis Log Collection in Ops Agent |  | Ops Agent can collect Redis logs for Cloud Logging. |
| 2021-10-06 | Apache httpd Log Collection in Ops Agent |  | Ops Agent can collect Apache httpd logs for Cloud Logging. |
| 2021-10-06 | systemd-journald Log Collection in Ops Agent |  | Ops Agent supports collecting logs from the systemd-journald service. |
| 2021-08-31 | nginx Log and Metric Collection in Ops Agent |  | Ops Agent can collect nginx logs and metrics for Cloud Logging and Monitoring. |
| 2021-08-18 | Chef Integration for Cloud Ops Agents |  | Chef can install and manage Google Cloud operations suite agents across Linux and Windows virtual machines. |
| 2021-08-02 | Puppet Integration for Cloud Ops Agents |  | Puppet can install and manage Google Cloud operations suite agents across Linux and Windows virtual machines. |
| 2021-07-30 | Field-Level Access Control |  | Cloud Logging supports controlling access to individual fields within log entries. |
| 2021-07-23 | Cloud EKM for Organization-Level Log Router CMEK |  | Organization-level Log Router CMEK can use Cloud External Key Manager keys. |
| 2021-07-12 | Bulk Agent Installation from VM Instances Inventory |  | The Cloud Monitoring VM Instances Inventory tab can generate installation commands to install Logging and Monitoring agents on multiple VMs. |
| 2021-07-07 | Log-Based Alerts |  | Cloud Logging supports alerts that trigger when log contents match specified conditions and create incidents in Cloud Monitoring. |
| 2021-07-07 | Share Link Time Range Options in Logs Explorer |  | Logs Explorer share links can include either absolute or relative time ranges. |
| 2021-06-30 | Log Bucket Copy to Cloud Storage |  | Cloud Logging can copy log entries from a Logging bucket to a Cloud Storage bucket. |
| 2021-05-06 | Histogram Time Controls in Logs Explorer |  | The Logs Explorer histogram includes zooming and scrolling controls for deeper time-based log analysis. |
| 2021-05-03 | Custom Fields in Logs Explorer |  | Logs Explorer lets users add custom fields to analyze logs and refine queries. |
| 2021-04-27 | OpenSUSE Leap Support for Logging Agents |  | Cloud Logging agent, Cloud Monitoring agent, and Ops Agent can be installed on OpenSUSE Leap 15, 15.1, and 15.2 virtual machines. |
| 2021-04-21 | Ansible Management for Cloud Logging Agent on Windows |  | Ansible can provision and manage the Cloud Logging agent on Windows systems. |
| 2021-04-12 | Shared Queries |  | Cloud Logging supports saved queries that can be shared with other users. |
| 2021-04-08 | Ansible Installation for Google Cloud Ops Agent |  | Ansible can install the Google Cloud Ops Agent on Linux and Windows Compute Engine virtual machines. |
| 2021-04-08 | Google Cloud Ops Agent |  | Google Cloud Ops Agent combines logging and metrics collection in a single agent with higher throughput and improved resource efficiency. |
| 2021-04-08 | Terraform Provisioning for Google Cloud Ops Agent |  | Terraform can provision the Google Cloud Ops Agent on Linux and Windows Compute Engine virtual machines. |
| 2021-03-18 | Log Severity Breakdown in Histogram |  | Cloud Logging shows the distribution of log severity levels in the Logs Explorer histogram pane. |
| 2021-03-04 | Logs Explorer Navigation from GKE Dashboards |  | GKE Clusters and Workloads dashboards provide an Operations menu option that opens Logs Explorer. |
| 2021-03-04 | Logs Explorer Navigation from VM Instances Dashboard |  | Compute Engine VM Instances dashboard provides an Operations menu option that opens Logs Explorer. |
| 2021-01-26 | gcloud Agent Policies Commands |  | Gcloud beta includes commands for managing Agent Policies. |
| 2020-12-07 | Real-Time Log Streaming in Logs Explorer |  | Logs Explorer can stream log entries in real time as Cloud Logging ingests them. |
| 2020-11-13 | Shareable Short URLs in Logs Explorer |  | Logs Explorer can create shortened share links for the current query. |
| 2020-11-06 | Live Tailing via gcloud and API |  | Cloud Logging supports live tailing of log entries through a gcloud command and API. |
| 2020-10-28 | Sink Creation from Logs Explorer and Logs Router |  | Cloud Logging lets users create sinks directly from the Logs Explorer and Logs Router pages. |
| 2020-10-19 | Logs Explorer log download |  | Logs Explorer lets users download log entries in JSON or CSV to a computer, Google Drive, or a new browser tab. |
| 2020-10-15 | Ops Agent |  | Ops Agent is a unified agent for collecting logs and metrics on Compute Engine instances. |
| 2020-09-22 | Logs Viewer histogram viewport |  | The Logs Viewer histogram panel includes a viewport to show the time range of displayed log entries within query results. |
| 2020-09-17 | Logs Viewer log entry links |  | Logs Viewer lets users copy a direct link to a log entry. |
| 2020-09-17 | Logs Viewer pinned log entries |  | Logs Viewer lets users pin log entries within the query results and histogram panes; Logs Viewer lets users pin a log entry while changing the surrounding display context. |
| 2020-09-17 | Logs Viewer resource context view |  | Logs Viewer lets users view a log entry in its resource context; Logs Viewer lets users view a log entry in its resource context. |
| 2020-09-14 | Recent queries |  | Cloud Logging provides a Recent queries tab for viewing the history of previously run queries. |
| 2020-08-24 | Logs Viewer trace integration |  | Logs Viewer can display Cloud Trace information alongside log data. |
| 2020-08-17 | Suggested queries |  | Cloud Logging provides suggested queries based on the context of a Google Cloud project. |
| 2020-08-11 | Logs Buckets |  | Logs Buckets let users centralize or separate logs according to their storage and management needs; Logs Buckets let users centralize or separate logs according to their storage and management needs. |
| 2020-06-30 | Logs Dashboard |  | Logs Dashboard provides a high-level overview of the health of systems running within a project. |
| 2020-06-03 | Saved queries |  | Logs Viewer lets users save queries and later view and run them from a Saved queries tab. |
| 2020-05-18 | Logs field explorer |  | The Logs field explorer panel shows aggregation-based results for project log fields to help refine queries. |
| 2020-05-11 | Regular expression queries |  | Cloud Logging supports using regular expressions in log queries and filters. |
| 2020-03-10 | Logs Viewer histogram panel |  | The Logs Viewer histogram panel visualizes log data to help users spot patterns and troubleshoot issues. |
| 2020-02-24 | Logs Viewer |  | The new Logs Viewer lets users view, parse, analyze, and refine queries for log data. |
| 2020-01-17 | Logs Router CMEK |  | Customer-managed encryption keys for Logs Router let users create and manage encryption keys for log routing data; Customer-managed encryption keys for Logs Router let users create and manage encryption keys for log routing data. |
| 2019-12-16 | BigQuery partitioned table exports |  | Cloud Logging exports to BigQuery can use partitioned tables; Cloud Logging exports to BigQuery can use partitioned tables. |
| 2019-12-11 | Legacy Stackdriver support for GKE | 2019-12-11 | Legacy Stackdriver support for Google Kubernetes Engine provided older monitoring and logging integration for GKE; deprecated on 2019-12-11. |
| 2019-09-10 | Saved searches |  | Cloud Logging lets users save advanced log queries to a library for management and sharing. |
| 2019-05-21 | Stackdriver Kubernetes Engine Monitoring |  | Stackdriver Kubernetes Engine Monitoring provides monitoring and logging integration for Google Kubernetes Engine. |
| 2019-04-15 | Windows Logging agent v1-9 |  | Windows Logging agent v1-9 stores agent service logs on disk and supports the config.d configuration extension directory. |
| 2018-11-01 | Log sink export system metrics |  | Cloud Logging provides export system metrics to show success and error metrics for log sinks. |
| 2018-10-19 | App Engine request log trace links |  | Certain App Engine request logs link to detailed traces that explain request latency. |
| 2018-10-19 | Request latency log filtering |  | Cloud Logging can filter log entries by request latency and trace-data availability. |
| 2018-10-01 | Logs Viewer log download |  | Logs Viewer lets users download up to 300 log entries in JSON or CSV format. |
| 2018-09-05 | Access Transparency logging |  | Access Transparency logging records Google administrator actions on customer content. |
| 2018-06-26 | Disable all logs ingestion |  | Cloud Logging can immediately disable all log ingestion for a project. |
| 2018-06-19 | Cloud Storage log export streaming latency reduction |  | Cloud Logging reduced Google Cloud Storage log export streaming time from 12 hours to 3 hours. |
| 2018-06-12 | Data Access audit log console configuration |  | The Google Cloud console lets users enable and configure Data Access audit logs. |
| 2018-05-17 | Logging usage and bill estimation |  | Cloud Logging shows usage and estimated billing under the new Stackdriver pricing model. |
| 2018-05-08 | Logs Viewer custom summary fields |  | Logs Viewer lets users specify custom fields in log-entry summary lines. |
| 2018-05-02 | Stackdriver Kubernetes Monitoring |  | Stackdriver Kubernetes Monitoring provides monitoring support for Kubernetes Engine clusters. |
| 2018-04-10 | Structured logging agent JSON conversion |  | The Stackdriver Logging agent can convert payloads to JSON format for certain log inputs. |
| 2018-03-12 | Logging data retention |  | Cloud Logging retains logging data for 30 days for all projects. |
| 2018-02-01 | Logging agent partial success ingestion |  | The Logging agent supports partial success so valid log entries are ingested even when some entries in a batch are invalid. |
| 2017-12-13 | Logs Viewer time-range filtering |  | Logs Viewer supports filtering logs by time range. |
| 2017-12-04 | HTTP request size alignment in load balancing logs |  | HTTP(S) load balancing logging aligns httpRequest.requestSize with Stackdriver Monitoring API metrics. |
| 2017-12-04 | HTTP(S) load balancing rejected request logs |  | HTTP(S) load balancing logging includes logs for rejected requests such as invalid or expired URL signatures. |
| 2017-11-29 | Logs-based metrics |  | Logs-based metrics derive monitoring metrics from log data. |
| 2017-10-30 | Exclusion filters |  | Exclusion filters let users control which logs are retained in Cloud Logging; Exclusion filters let users control which logs are retained in Cloud Logging. |
| 2017-09-12 | Admin Activity audit log retention |  | Admin Activity audit logs are retained for 400 days in both Stackdriver Basic and Premium tiers. |
| 2017-09-12 | Logging agent extended LogEntry field support |  | Logging agent version 1.5.18-1 supports setting the trace, sourceLocation, and operation LogEntry fields. |
| 2017-09-12 | Logging agent JSON detection |  | Logging agent version 1.5.18-1 allows JSON detection to be enabled through configuration. |
| 2017-08-31 | Logs-based metrics extracted values |  | Logs-based metrics can extract values from log entries to create distribution metrics and populate user-defined labels. |
| 2017-08-31 | Logs-based metrics low-latency updates |  | Logs-based metrics latency was reduced from about five minutes to about one minute. |
| 2017-08-31 | Resource Usage page |  | The Resource Usage page in Logs Viewer breaks down log volume by resource type. |
| 2017-08-23 | Aggregated exports |  | Aggregated exports let organizations and folders export selected log entries from all their projects through a single sink. |
| 2017-07-10 | Logging custom IAM roles |  | Cloud Logging IAM support includes custom roles. |
| 2017-06-05 | Apps Script log ingestion |  | Cloud Logging can ingest and display logs from Apps Script. |
| 2017-06-05 | Logs Viewer field expansion |  | Logs Viewer lets users expand all fields in a log entry more easily. |
| 2017-05-01 | Aggregated log exports |  | Cloud Logging supports organization, folder, and billing account sinks that export logs from included projects. |
| 2017-05-01 | Data access logs |  | Cloud Logging provides user-configurable data access logs. |
| 2017-05-01 | Logging API v1 sinks and logs-based metrics | mid-July, 2017 | The v1 API support for export sinks and logs-based metrics is being retired in favor of migration to v2; deprecated on mid-July, 2017. |
| 2017-05-01 | Logging API v1 WriteLogEntries method | October 1, 2017 | The v1 WriteLogEntries method is being shut down and applications must migrate off the v1 API; deprecated on October 1, 2017. |
| 2017-04-01 | Expanded monitored resource types |  | Cloud Logging adds new monitored resource types including Cloud Bigtable, Cloud Dataflow, and Cloud Container Engine. |
| 2017-02-06 | App Engine Flexible Environment request log correlation |  | Logs Viewer can display App Engine Flexible Environment application log lines inside the associated service request log entry. |
| 2017-02-06 | Logs Viewer automatic stream resume |  | Logs Viewer automatically resumes log streaming when the browser tab or window becomes active again. |
| 2017-02-06 | Logs Viewer multi-log selection |  | Logs Viewer lets users select and view multiple logs within a resource type at the same time. |
| 2017-02-06 | Non-project audit log export sinks |  | The gcloud tool and API can create log sinks to export audit logs from organizations, folders, and billing accounts. |
| 2016-12-12 | LogEntry trace and source location fields |  | LogEntry includes trace and sourceLocation fields for richer log record metadata. |
| 2016-12-12 | Logs API list methods |  | The Logging API provides list logs methods for organizations and projects. |
| 2016-11-21 | Organization-owned logs |  | The Logging API allows organizations as well as projects to own logs with organization-scoped log names. |
| 2016-11-21 | Organization-owned sinks |  | The Logging API allows organizations as well as projects to own sinks and export logs to destinations in other projects. |
| 2016-10-20 | Logging API v1 | March 30, 2017 | The Stackdriver Logging API v1 is deprecated and users should migrate to the v2 API; deprecated on March 30, 2017. |
| 2016-10-20 | Logging API v2 |  | The Stackdriver Logging API v2 provides a simplified log format and is generally available. |
| 2015-08-12 | Project log sinks |  | The Cloud Logging API and command-line interface support project sinks that export log entries using advanced logs filters. |
| 2015-08-03 | Advanced logs filters |  | Cloud Logging supports advanced logs filters with arbitrary Boolean expressions over log entries. |
| 2015-04-28 | Pub/Sub log export |  | Cloud Logging can stream logs to Google Cloud Pub/Sub for routing to downstream systems. |
| 2015-03-19 | Cloud Logging API |  | The Google Cloud Logging API lets users write logs, create logs, and control log export through client libraries and API methods. |
| 2015-03-19 | gcloud logging command-line interface |  | The gcloud logging command-line interface provides beta support for administrative tasks such as configuring log export. |
| 2015-03-19 | google-fluentd expanded operating system support |  | The google-fluentd logging agent supports additional operating systems including Debian, Ubuntu, Red Hat, and CentOS. |
| 2015-03-19 | google-fluentd third-party log support |  | The google-fluentd logging agent supports ingesting two dozen third-party log types. |
| 2015-01-15 | App Engine log export to Cloud Storage and BigQuery |  | App Engine logs can be exported from Cloud Logging to Cloud Storage and BigQuery. |

Source file slug: `cloud-logging.md`

