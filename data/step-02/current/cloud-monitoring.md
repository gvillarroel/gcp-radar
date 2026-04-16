# Cloud Monitoring

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 299
Unique features: 335

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-04-03 | Application Monitoring Services and Workloads tab |  | Application Monitoring includes a Services and Workloads tab for listing, registering, searching, and opening telemetry for registered and discovered services and workloads. |
| 2026-04-02 | Application Monitoring support for GKE Gateway |  | Application Monitoring supports GKE Gateway resources. |
| 2026-04-02 | Application Monitoring support for GKE Ingress |  | Application Monitoring supports GKE Ingress resources. |
| 2026-04-02 | Application Monitoring support for Layer 7 cross-regional Application Load Balancers |  | Application Monitoring supports Layer 7 cross-regional Application Load Balancer resources. |
| 2026-04-02 | Application Monitoring support for Vertex AI Workbench |  | Application Monitoring supports Vertex AI Workbench resources. |
| 2026-04-02 | Kubernetes workload dashboards L4 and L7 traffic metrics |  | Application Monitoring dashboards for Kubernetes workloads can display both L4 and L7 traffic metrics when available. |
| 2026-03-24 | Telemetry API regional metric ingestion quota |  | The Telemetry API uses a regional quota of up to 60,000 metric-ingestion requests per minute per region instead of a global quota. |
| 2026-03-09 | PromQL chart legend templates |  | Cloud Monitoring lets you configure legend templates for PromQL-formatted charts. |
| 2026-03-02 | Observability Analytics project ID SQL variable |  | Observability Analytics SQL queries can use a system-defined variable that resolves to the project ID. |
| 2026-02-06 | Cloud Monitoring API MCP server |  | The Cloud Monitoring API MCP server lets agents and AI applications interact with time series data. |
| 2026-02-06 | OTLP metric ingestion via Telemetry API |  | Cloud Monitoring can ingest OTLP metrics by using an OpenTelemetry Collector, an OTLP exporter, and the Telemetry API. |
| 2026-01-26 | Ops Agent management with global VM Extension Manager policies |  | Cloud Monitoring supports installing and managing the Ops Agent across zones by using global VM Extension Manager extension policies. |
| 2026-01-21 | Application Monitoring trace spans in dashboards |  | Application Monitoring dashboards display trace spans associated with registered App Hub applications and include service and workload annotations with access to Trace Explorer; Application Monitoring dashboards display trace spans associated with registered App Hub applications and include service and workload annotations with access to Trace Explorer. |
| 2025-12-11 | Dashboard variable control widget |  | Cloud Monitoring dashboards can include a widget for managing the settings of a dashboard variable. |
| 2025-12-11 | gcloud support for Cloud Monitoring alerting policies |  | The Google Cloud CLI provides generally available commands to manage Cloud Monitoring alerting policies. |
| 2025-12-08 | Ops Agent management with zonal VM Extension Manager policies |  | Cloud Monitoring supports installing and managing the Ops Agent in a specified zone by using VM Extension Manager extension policies. |
| 2025-11-04 | Application Monitoring topology map |  | Application Monitoring provides a topology map for App Hub applications that visualizes relationships, alerts, traffic, and latency across services and workloads. |
| 2025-10-23 | Incident listing and details via gcloud and API |  | Cloud Monitoring lets you list incidents and retrieve incident details through the Google Cloud CLI and the Cloud Monitoring API. |
| 2025-10-02 | Application Monitoring |  | Application Monitoring provides out-of-the-box dashboards to monitor App Hub applications from the perspective of their resources and infrastructure; Application Monitoring provides out-of-the-box dashboards to monitor App Hub applications from the perspective of their resources and infrastructure. |
| 2025-09-15 | Chart and logs correlation flyout |  | Cloud Monitoring charts can open a flyout that shows the chart alongside related log entries for deeper investigation. |
| 2025-08-25 | Application Monitoring telemetry for GKE workloads |  | Application Monitoring dashboards can display latency, error rates, and traffic levels for Google Kubernetes Engine workloads instrumented with OpenTelemetry. |
| 2025-08-21 | Application Monitoring support for AlloyDB for PostgreSQL |  | Application Monitoring supports AlloyDB for PostgreSQL clusters and services. |
| 2025-08-21 | Application Monitoring support for Bigtable |  | Application Monitoring supports Bigtable clusters and services. |
| 2025-08-21 | Application Monitoring support for Cloud Deploy |  | Application Monitoring supports Cloud Deploy delivery pipelines. |
| 2025-08-21 | Application Monitoring support for Dataproc Metastore |  | Application Monitoring supports Dataproc Metastore services. |
| 2025-08-21 | Application Monitoring support for Firestore |  | Application Monitoring supports Firestore databases. |
| 2025-08-21 | Application Monitoring support for Secret Manager |  | Application Monitoring supports Secret Manager secrets. |
| 2025-08-05 | time_series_billed_for_queries_count metric |  | Cloud Monitoring provides the time_series_billed_for_queries_count metric to estimate charges based on queried time series. |
| 2025-07-24 | Cost Explorer |  | Cost Explorer lets you monitor and understand resource costs and utilization for a Google Cloud project or App Hub application. |
| 2025-07-17 | Application-specific trace resource attributes |  | Trace data can include application-specific resource attributes for supported Google Cloud resources and OpenTelemetry-instrumented applications using the Google Cloud Telemetry endpoint. |
| 2025-06-02 | Treemap dashboard widget |  | Custom dashboards support treemap widgets that display aggregated recent values as nested rectangles. |
| 2025-05-06 | Label-based filters for single-policy snoozes |  | Single alerting policy snoozes can use resource, metric, and metadata labels to filter applicable incidents. |
| 2025-04-09 | Application Monitoring support for App Hub host projects |  | Application Monitoring supports App Hub host projects. |
| 2025-04-09 | Application Monitoring support for app-enabled folders |  | Application Monitoring supports app-enabled folders with automatic synchronization of the management project's metrics scope to folder projects when quota is available. |
| 2025-04-04 | Uptime check failure logs in Uptime details |  | The Uptime details page can display logs for uptime check failures when failure logging is enabled. |
| 2025-03-13 | Dashboard version history |  | Cloud Monitoring dashboards provide version history so you can review changes made to a dashboard. |
| 2025-03-13 | Markdown support for Slack notification documentation |  | Documentation for Slack notification channels supports Markdown formatting. |
| 2025-02-27 | Tab-group dashboard widget |  | Custom dashboards support tab-group widgets that reduce load time by showing one member of a grouped collection at a time. |
| 2025-02-20 | Observability Analytics widget view selection |  | Observability Analytics widgets on custom dashboards can query additional log views and analytics views from the Views and Schema section. |
| 2025-02-10 | Variable-controlled dashboard widget visibility |  | Cloud Monitoring dashboards can use a variable to control whether a widget is visible. |
| 2025-02-04 | Resource-label matching for incident snoozes |  | Snoozes created from the Incident details page can apply to other incidents that share one or more resource labels. |
| 2025-02-03 | Custom organization policies for Monitoring resources |  | Cloud Monitoring supports custom organization policies for alerting policies, notification channels, and snoozes. |
| 2025-01-31 | Vertex AI foundation model observability dashboard |  | Cloud Monitoring provides a predefined dashboard for monitoring usage, throughput, latency, and 429 errors for Vertex AI foundation models. |
| 2024-12-13 | Refined Ops Agent pending status reporting |  | The Cloud Monitoring VM Instances dashboard refines reporting of the Ops Agent pending status to include additional states. |
| 2024-12-12 | PromQL alert policy metric existence override |  | PromQL-based alerting policies can override validation that checks whether a metric exists. |
| 2024-12-12 | Text widget dashboard section links |  | Text widgets can link to sections of a dashboard. |
| 2024-12-12 | Text widget variable rendering |  | Text widgets can render dashboard variables. |
| 2024-11-11 | Dashboard variables and dashboard-level filtering |  | Cloud Monitoring supports generally available dashboard variables and dashboard-level filtering, including multi-value selection and multiple default values for pinned filters and variables. |
| 2024-10-28 | Enhanced dashboard variables and pinned filters |  | Dashboard-level filtering supports multi-value defaults, multi-select behavior, value-only variables, and SQL-generated variable values. |
| 2024-10-24 | SQL-based alerting policies |  | Cloud Monitoring lets you create alerting policies that monitor the results of SQL queries. |
| 2024-10-14 | Closed-incident notifications for metric alerting policies |  | The Monitoring API can configure metric-based alerting policies to send notifications when incidents are closed. |
| 2024-10-09 | App Hub metadata labels in Monitoring |  | App Hub applications write metadata labels that can be used to filter chart data and alerting policies in Cloud Monitoring. |
| 2024-10-09 | Ops Agent DCGM metrics collection |  | Ops Agent version 2.51.0 can collect observability metrics from NVIDIA Data Center GPU Manager. |
| 2024-10-09 | System metrics for App Hub applications |  | Cloud Monitoring can display system metrics for App Hub applications from the context of an App Hub host. |
| 2024-09-30 | Table-cell dashboard-wide filtering |  | Dashboard-wide filters can be applied and modified directly from values selected in table widget cells. |
| 2024-09-16 | Cloud Observability Overview page |  | Google Cloud console includes a customizable Cloud Observability Overview page for viewing observability products, signals, incidents, dashboards, and events. |
| 2024-09-09 | Multi-query Table and TopList widgets |  | Table and TopList widgets can display the results of multiple queries with configurable headers, alignment, and threshold-based cell coloring. |
| 2024-09-06 | GPU metrics in Compute Engine Observability tabs |  | The Compute Engine VM instances Observability tabs include GPU charts based on NVIDIA Management Library metrics for eligible GPU-attached VMs. |
| 2024-09-06 | Metric read source visibility and metric exclusion |  | The Metrics management page shows sources of metric reads and can exclude unneeded metrics to avoid ingestion costs. |
| 2024-09-02 | Grafana dashboard import |  | Cloud Monitoring can import Grafana dashboards through the Google Cloud console; This feature lets users import Grafana dashboards into Cloud Monitoring. |
| 2024-08-22 | AWS CloudWatch metrics ingestion in AWS connector projects | 2024-08-22 | This feature ingests AWS CloudWatch metrics into Cloud Monitoring by using AWS connector projects; This feature ingests AWS CloudWatch metrics into Cloud Monitoring by using AWS connector projects; deprecated on 2024-08-22. |
| 2024-07-30 | Compute Engine interactive playbook dashboards |  | These dashboards provide guided troubleshooting for Compute Engine host events, autoscaling, health-check, resource availability, and VM performance issues. |
| 2024-07-08 | Dashboard event type recommendations |  | This feature recommends event types to display on Cloud Monitoring dashboards. |
| 2024-07-01 | Private uptime checks with TCP requests |  | This feature lets private uptime checks issue TCP requests to monitored targets. |
| 2024-06-26 | Dashboard display of Google Cloud service disruptions |  | This feature lets dashboards show disruptions in Google Cloud services through service health events. |
| 2024-06-25 | Ops Agent support for Deep Learning VM Images on Debian 11 |  | This feature adds Ops Agent support for Compute Engine VMs running Deep Learning VM Images based on Debian 11. |
| 2024-06-24 | Dashboard alert incident events |  | This feature lets dashboards show events for when alerting incidents were opened. |
| 2024-06-17 | Monitoring API notification documentation links |  | This feature lets the Monitoring API configure documentation links included with notifications. |
| 2024-06-06 | Pinned dashboard event filters |  | This feature lets custom dashboards save pinned event type selections in the dashboard configuration. |
| 2024-05-28 | OpenTelemetry instrumentation samples for Python and Node.js |  | These samples show how to instrument Python and Node.js applications to collect metrics, logs, and traces with OpenTelemetry. |
| 2024-05-13 | Monitoring API dashboard events configuration |  | This feature lets the Monitoring API enable events and filters on dashboards. |
| 2024-05-09 | Logs panel widget log-view filtering |  | This feature lets a logs panel widget display log entries filtered by log view. |
| 2024-05-06 | Synthetic monitors restricted ingress support |  | This feature allows synthetic monitors to run without requiring an allow-all ingress rule. |
| 2024-05-06 | Synthetic monitors Selenium WebDriver template |  | This feature provides a Selenium WebDriver sample template for synthetic monitors. |
| 2024-04-26 | Broken-link checker screenshots |  | This feature lets broken-link checkers save screenshots of failing tests to Cloud Storage. |
| 2024-03-28 | Uptime check OIDC authentication |  | This feature lets uptime checks authenticate with a service account and generated OpenID Connect token. |
| 2024-03-07 | Dashboard events |  | This feature lets dashboards display operational events such as GKE pod crashes; This feature lets dashboards display operational events such as GKE pod crashes. |
| 2024-02-12 | PromQL-based alerting conditions |  | This feature lets alerting policies use PromQL expressions as conditions. |
| 2024-01-22 | Google Cloud CLI support for synthetic monitors |  | This feature lets users create and manage synthetic monitors with the Google Cloud CLI. |
| 2024-01-22 | Google Cloud CLI support for uptime checks |  | This feature lets users create and manage uptime checks with the Google Cloud CLI. |
| 2024-01-19 | Ops Agent LogPingOpsAgent health check |  | This health check writes an informational payload to the ops-agent-health log every 10 minutes to verify log delivery. |
| 2024-01-16 | GKE Observability kube state metrics enablement |  | This feature lets GKE deployments enable the kube state metrics package from the Observability tab. |
| 2023-12-20 | Default kube state metrics for new GKE Autopilot clusters |  | This feature enables kube state metrics by default for new GKE Autopilot clusters starting with version 1.27.4-gke.900. |
| 2023-12-19 | Dashboard section widgets |  | This feature adds section widgets that create a table of contents for navigating custom dashboards. |
| 2023-12-18 | Dashboard widget grouping |  | This feature lets custom dashboards group widgets into single-view widgets or collapsible groups. |
| 2023-12-15 | Managed Service for Prometheus sidecar for Cloud Run |  | This feature collects Prometheus metrics from Cloud Run services by using a Managed Service for Prometheus sidecar. |
| 2023-12-12 | Alerting policy severity |  | This feature lets alerting policies define the severity level assigned to incidents. |
| 2023-12-07 | Broken-link checker |  | This feature creates synthetic checks that periodically validate links on a website. |
| 2023-12-01 | Ops Agent self-log collection control |  | This feature lets users prevent the Ops Agent from collecting and sending its self logs to Cloud Logging. |
| 2023-12-01 | Ops Agent support for Compute Engine Arm VMs on Debian 12 |  | This feature adds Ops Agent support for Compute Engine Arm VMs running Debian 12. |
| 2023-12-01 | Ops Agent support for Ubuntu 23.10 |  | This feature adds Ops Agent support for Compute Engine VMs running Ubuntu 23.10. |
| 2023-11-17 | GKE Observability GPU metrics dashboard |  | This feature adds a GPU metrics dashboard to the GKE cluster Observability tab when GPU nodes are present. |
| 2023-11-07 | GKE Observability application performance metrics |  | This feature shows application performance metrics in the GKE deployment Observability tab from supported metric sources. |
| 2023-10-24 | Ops Agent support for Compute Engine Arm VMs on SLES 15 and OpenSUSE Leap 15 |  | This feature adds Ops Agent support for Compute Engine Arm VMs running SLES 15 and OpenSUSE Leap 15. |
| 2023-10-17 | Error groups on custom dashboards |  | This feature lets custom dashboards display Error Reporting error groups. |
| 2023-10-05 | Ops Agent support for Compute Engine Arm VMs on Ubuntu 22.04 LTS |  | This feature adds Ops Agent support for Compute Engine Arm VMs running Ubuntu 22.04 LTS. |
| 2023-10-02 | Google Chat space notification channels |  | This feature lets Cloud Monitoring send notifications to Google Chat spaces. |
| 2023-09-14 | Ops Agent support for Compute Engine Arm VMs on RHEL 9 and Rocky Linux 9 |  | This feature adds Ops Agent support for Compute Engine Arm VMs running RHEL 9 and Rocky Linux 9. |
| 2023-09-07 | Ops Agent support for Compute Engine Arm VMs on Ubuntu 20.04 LTS |  | This feature adds Ops Agent support for Compute Engine Arm VMs running Ubuntu 20.04 LTS. |
| 2023-08-21 | GKE Observability integration filters |  | This feature adds recommended and configured integration filters to the GKE cluster Observability tab. |
| 2023-08-21 | Pie charts on custom dashboards |  | This feature lets custom dashboards display the most recent data in pie chart widgets. |
| 2023-08-16 | Curated kube state metrics for GKE Observability |  | This feature lets GKE clusters enable a curated set of kube state metrics and preview related charts and metrics. |
| 2023-08-16 | GKE interactive playbook dashboards |  | These dashboards provide guided troubleshooting for GKE CPU and memory utilization issues; Interactive playbook dashboards in Cloud Monitoring help troubleshoot common GKE issues such as unschedulable pods and crashlooping containers. |
| 2023-08-14 | Ops Agent runtime health checks |  | This feature reports logging pipeline configuration and log parsing errors to Cloud Logging through runtime health checks. |
| 2023-08-10 | PromQL alerting |  | This feature lets Cloud Monitoring alerting policies use PromQL queries and migrate Prometheus alerting configurations. |
| 2023-08-07 | GKE Observability fleet ID filter |  | This feature adds an optional fleet ID filter to applicable GKE Observability charts for clusters and workloads. |
| 2023-08-01 | Alerting policy snooze from incident details |  | This feature lets users snooze an alerting policy directly from a related incident details page. |
| 2023-08-01 | Ops Agent support for Compute Engine Arm VMs on Debian 11 |  | This feature adds Ops Agent support for Compute Engine Arm VMs running Debian 11. |
| 2023-07-17 | Synthetic monitors |  | This feature continuously tests the availability, consistency, and performance of services, web pages, and APIs with automated script-based probes. |
| 2023-07-06 | Ops Agent automatic installation during VM creation |  | The Google Cloud console can automatically install and reinstall the Ops Agent when a VM instance is created. |
| 2023-06-13 | Incident management predefined role |  | A predefined IAM role lets users view and manage incidents with limited permissions. |
| 2023-06-09 | Managed Service for Prometheus exemplar ingestion |  | Google Cloud Managed Service for Prometheus can ingest exemplars attached to histogram metrics for trace-linked analysis. |
| 2023-05-26 | GKE Observability ephemeral storage metrics |  | The GKE Observability tab includes ephemeral storage metrics for clusters. |
| 2023-05-15 | Ops Agent OTLP receiver |  | The Ops Agent includes an OTLP receiver for collecting custom metrics and traces from OpenTelemetry-instrumented applications. |
| 2023-05-02 | GKE control plane metrics enablement in Observability tab |  | The GKE Observability tab can enable control plane metrics and preview related charts and metrics before activation. |
| 2023-04-26 | Ops Agent log rotation |  | The Ops Agent provides built-in support for log rotation. |
| 2023-04-25 | Compute Engine VM Observability detected integrations navigation |  | The VM Observability tab includes a Detected integrations section that links to dashboards for configured third-party integrations. |
| 2023-04-25 | Compute Engine VM Observability disk and network charts |  | The Observability tab on the VM instances page includes expanded disk and network chart coverage. |
| 2023-04-25 | Compute Engine VM recommended alerts |  | The VM Observability tab includes recommended pre-configured alerting policies for common host resource and error conditions. |
| 2023-04-05 | Metrics Explorer chart creation interface |  | Metrics Explorer offers a new interface for creating charts. |
| 2023-04-03 | Repeated notifications for metric-based alerting policies |  | Metric-based alerting policies can send repeated notifications for open and acknowledged incidents. |
| 2023-03-24 | Managed Service for Prometheus OpenTelemetry Collector ingestion |  | Managed Service for Prometheus can ingest standard Prometheus metrics scraped by the OpenTelemetry Collector. |
| 2023-03-10 | Dashboard sharing by email |  | Cloud Monitoring can send dashboard links by email to people or groups in an organization. |
| 2023-03-08 | Snoozes gcloud CLI support |  | Snoozes can be created and managed with the gcloud CLI in addition to the console and API. |
| 2023-03-06 | Dashboard incidents widget |  | Custom dashboards can display and list incidents. |
| 2023-02-17 | Installable alerting policies for Monitoring integrations |  | Cloud Monitoring provides installable pre-defined alerting policies for integrated services and GKE observability views. |
| 2023-02-16 | Ops Agent health checks |  | The Ops Agent performs startup health checks and writes troubleshooting information when blocking conditions are detected. |
| 2023-02-16 | Ops Agent NVIDIA GPU metrics support |  | The Ops Agent can collect NVIDIA GPU metrics, including NVML and DCGM metrics, for GPU-enabled workloads. |
| 2023-01-27 | Ops Agent Prometheus receiver |  | The Ops Agent includes a receiver for collecting Prometheus metrics from applications on Compute Engine instances. |
| 2023-01-25 | Forecast condition alerting policies |  | Alerting policies can forecast threshold violations within a configurable time window for constraint metrics such as quota, memory, and storage usage. |
| 2023-01-10 | Managed Service for Prometheus exporter integration dashboards |  | Managed Service for Prometheus provides dashboards for exporter integrations and can show static previews before configuration. |
| 2022-12-14 | GKE Workloads Observability top resource consumers |  | The Kubernetes Engine Workloads Observability tab shows the five workloads consuming the most of a resource. |
| 2022-12-13 | VM Instances dashboard map view |  | The VM Instances dashboard includes a map view for visualizing fleet health by labels and metric values. |
| 2022-11-11 | GKE Clusters dashboard for Managed Service for Prometheus enablement |  | Cloud Monitoring provides a GKE Clusters dashboard for enabling Managed Service for Prometheus on clusters in a project. |
| 2022-11-07 | Log content in alert notifications |  | Alert notifications can include extracted log content to improve troubleshooting context. |
| 2022-11-03 | Enhanced dashboard table widgets |  | Dashboard table widgets support row limits, column persistence, top or bottom filtering, and visual value indicators. |
| 2022-10-24 | Microservices observability for gRPC |  | GRPC applications can be instrumented to use Microservices observability. |
| 2022-10-21 | Logs access from Monitoring Integrations details pages |  | The Cloud Monitoring Integrations page exposes logs collected by logs-enabled integrations from each integration's details page. |
| 2022-10-04 | Ops Agent Oracle Database integration |  | The Ops Agent can collect Oracle Database logs and metrics. |
| 2022-09-30 | Microservices gRPC Overview dashboard |  | Pre-configured Monitoring dashboards include a Microservices gRPC Overview dashboard for projects emitting gRPC metrics. |
| 2022-09-26 | PromQL in Cloud Monitoring charts and dashboards |  | Cloud Monitoring supports PromQL when creating charts and dashboards. |
| 2022-08-29 | Monitoring role management in console |  | Cloud Monitoring pages in the Google Cloud console can be used to manage Monitoring-specific roles. |
| 2022-08-15 | GKE Clusters Observability tab |  | The GKE Clusters List page includes an Observability tab with Monitoring data, control-plane metrics, and ingestion visibility for Managed Service for Prometheus and Cloud Logging. |
| 2022-08-11 | Snoozes for notifications and incidents |  | Snoozes can suppress Cloud Monitoring notifications and incident creation during specified time periods. |
| 2022-07-29 | Dashboard table widgets |  | Custom dashboards support table widgets with row limits, top or bottom filtering, and visual value indicators; Cloud Monitoring dashboards support displaying data in tabular form. |
| 2022-07-28 | User-defined labels for uptime checks |  | Public and private uptime checks support user-defined labels. |
| 2022-07-26 | Ops Agent Aerospike integration |  | The Ops Agent can collect Aerospike metrics. |
| 2022-07-26 | Ops Agent Couchbase integration |  | The Ops Agent can collect Couchbase logs and metrics. |
| 2022-07-26 | Ops Agent Vault integration |  | The Ops Agent can collect Vault metrics. |
| 2022-07-15 | Ops Agent Flink integration |  | The Ops Agent can collect Flink metrics. |
| 2022-07-15 | Ops Agent SAP HANA integration |  | The Ops Agent can collect SAP HANA logs and metrics. |
| 2022-06-30 | Managed Service for Prometheus PromQL access to Cloud Monitoring metrics |  | Managed Service for Prometheus can query Cloud Monitoring metrics by using PromQL. |
| 2022-06-24 | Ops Agent Jetty integration |  | The Ops Agent can collect Jetty metrics. |
| 2022-06-24 | Read-only dashboard chart configuration view |  | Dashboard users can view chart configuration while a dashboard is in read-only mode. |
| 2022-06-03 | Alerting policy user labels in console |  | The preview alerting interface in the Cloud console supports adding, editing, and removing user labels on alerting policies. |
| 2022-05-26 | Ops Agent Active Directory Domain Services integration |  | The Ops Agent can collect Active Directory Domain Services logs and metrics. |
| 2022-05-26 | Ops Agent IIS integration |  | The Ops Agent can collect IIS logs and additional metrics. |
| 2022-05-26 | Ops Agent Varnish integration |  | The Ops Agent can collect Varnish logs and metrics. |
| 2022-05-26 | Uptime check JSONPath validation |  | Uptime checks can validate a specific JSONPath in the response data. |
| 2022-05-06 | Metrics ratio charts |  | Metrics Explorer and dashboard charts can display ratios of metrics in the Cloud Console. |
| 2022-04-14 | Dashboard template variables and permanent filters |  | Cloud Monitoring dashboards support template variables and permanent filters for reusable dashboard customization. |
| 2022-03-28 | User-defined labels in alert notifications and details pages |  | User-defined labels are included in PagerDuty, Pub/Sub, webhook, and email notifications and are visible on alerting policy and incident details pages. |
| 2022-03-11 | Ops Agent WildFly metrics integration |  | The Ops Agent can collect WildFly metrics for Cloud Monitoring. |
| 2022-03-04 | Collapsible dashboard widget groups |  | Cloud Monitoring dashboards support organizing widgets into collapsible groups. |
| 2022-02-22 | Ops Agent Apache ActiveMQ metrics integration |  | The Ops Agent can collect Apache ActiveMQ metrics for Cloud Monitoring. |
| 2022-02-22 | Ops Agent Apache Hadoop metrics and logs integration |  | The Ops Agent can collect Apache Hadoop metrics and logs for Cloud Monitoring. |
| 2022-02-22 | Ops Agent Apache HBase metrics and logs integration |  | The Ops Agent can collect Apache HBase metrics and logs for Cloud Monitoring. |
| 2022-02-22 | Ops Agent MongoDB metrics integration |  | The Ops Agent can collect MongoDB metrics for Cloud Monitoring. |
| 2022-02-22 | Ops Agent RabbitMQ metrics integration |  | The Ops Agent can collect RabbitMQ metrics for Cloud Monitoring. |
| 2022-02-14 | Ops Agent Apache CouchDB metrics integration |  | The Ops Agent can collect Apache CouchDB metrics for Cloud Monitoring. |
| 2022-02-14 | Ops Agent Apache Kafka metrics and logs integration |  | The Ops Agent can collect Apache Kafka metrics and logs for Cloud Monitoring. |
| 2022-02-14 | Ops Agent Apache Solr metrics and logs integration |  | The Ops Agent can collect Apache Solr metrics and logs for Cloud Monitoring. |
| 2022-02-14 | Ops Agent Apache ZooKeeper metrics integration |  | The Ops Agent can collect Apache ZooKeeper metrics for Cloud Monitoring. |
| 2022-02-14 | Ops Agent Elasticsearch metrics integration |  | The Ops Agent can collect Elasticsearch metrics for Cloud Monitoring. |
| 2022-02-08 | Metrics Explorer Diagnostics tab for user-defined metrics |  | The Metrics Explorer Diagnostics tab provides summary, usage, audit log, and detailed views for user-defined metrics. |
| 2022-02-07 | Integrations page for Ops Agent third-party applications |  | The Google Cloud console Integrations page lets users configure Ops Agent-supported third-party application integrations and view setup guidance and collected telemetry. |
| 2022-02-03 | Add predefined dashboard charts to custom dashboards |  | Users can copy charts from predefined dashboards to custom dashboards and optionally rename them. |
| 2022-02-01 | SLO widgets on custom dashboards |  | Custom dashboards can display service level objectives. |
| 2022-01-26 | Ops Agent Apache Tomcat metrics and logs integration |  | The Ops Agent can collect Apache Tomcat metrics and logs for Cloud Monitoring. |
| 2022-01-26 | Ops Agent PostgreSQL metrics and logs integration |  | The Ops Agent can collect PostgreSQL metrics and logs for Cloud Monitoring. |
| 2022-01-07 | Ops Agent MariaDB metrics and logs integration |  | The Ops Agent can collect MariaDB metrics and logs for Cloud Monitoring. |
| 2022-01-07 | Ops Agent Memcached metrics integration |  | The Ops Agent can collect Memcached metrics for Cloud Monitoring. |
| 2022-01-07 | Ops Agent MySQL metrics integration |  | The Ops Agent can collect MySQL metrics for Cloud Monitoring. |
| 2022-01-07 | Ops Agent Ubuntu 21.10 support |  | The Ops Agent supports Ubuntu 21.10. |
| 2021-11-18 | Dashboard-wide grouping and filtering |  | Cloud Monitoring dashboards support dashboard-wide grouping and filtering controls. |
| 2021-11-11 | Metrics scope logs on custom dashboards |  | Custom dashboards can display project-scoped log entries for all projects in a metrics scope. |
| 2021-11-08 | Add VM Observability charts to custom dashboards |  | Users can copy charts from the Compute Engine VM Observability tab to custom dashboards and optionally rename them. |
| 2021-11-05 | Ops Agent Apache Web Server metrics integration |  | The Ops Agent can collect Apache Web Server metrics for Cloud Monitoring. |
| 2021-11-05 | Ops Agent Redis metrics integration |  | The Ops Agent can collect Redis metrics for Cloud Monitoring. |
| 2021-11-04 | Dashboard alert chart policy creation |  | Users can create alerting policies from the alert chart dialog or by converting custom dashboard charts into alert charts. |
| 2021-11-01 | Ops Agent Cassandra metrics integration |  | The Ops Agent can collect Cassandra metrics for Cloud Monitoring. |
| 2021-10-04 | Managed Prometheus metric collection for GKE workloads |  | GKE offers a fully managed pipeline to scrape Prometheus-style metrics from workloads and send them to Cloud Monitoring. |
| 2021-09-27 | Ops Agent installation from VM Instances dashboard |  | The Monitoring VM Instances dashboard can generate Cloud Shell commands to install the Ops Agent or legacy agents on selected Compute Engine VMs. |
| 2021-09-09 | Ops Agent JVM metrics integration |  | The Ops Agent can collect JVM metrics for Cloud Monitoring. |
| 2021-09-03 | Configurable incident autoclose duration |  | Cloud Monitoring lets users configure how long to wait before closing an incident when observations stop arriving. |
| 2021-08-31 | Ops Agent nginx metrics and logs integration |  | The Ops Agent can collect nginx metrics and logs for Cloud Monitoring. |
| 2021-08-30 | Enhanced VM health scorecards |  | The VM Instances page includes enhanced VM health scorecards with maintenance and system events plus improved inventory filtering and sorting. |
| 2021-08-18 | Chef integration for Operations Suite agents |  | Chef can be used to install and manage Google Cloud operations suite agents across Linux and Windows VM fleets. |
| 2021-08-09 | Dual Y-axis support for dashboard line charts |  | Dashboard line charts can assign metrics to either the left or right Y-axis to compare different scales. |
| 2021-08-05 | New alerting policy creation UI |  | A new alerting policy creation interface provides finer-grained control over metric selection in alerting conditions. |
| 2021-08-02 | Metrics scopes management API |  | An API is available to manage the metrics scope of a Google Cloud project. |
| 2021-08-02 | Puppet integration for Operations Suite agents |  | Puppet can be used to install and manage Google Cloud operations suite agents across Linux and Windows VM fleets. |
| 2021-07-26 | External HTTP(S) Load Balancers dashboard |  | Monitoring provides a dedicated dashboard with visualizations for understanding and troubleshooting external HTTP(S) load balancers. |
| 2021-07-13 | VM Instances Processes tab |  | The VM Instances page includes a Processes tab with charts for process metrics. |
| 2021-07-12 | Bulk agent installation from VM inventory |  | The Cloud Monitoring VM Instances inventory can generate installation commands to install Logging and Monitoring agents on multiple VMs. |
| 2021-07-07 | Log-based alerts |  | Cloud Monitoring supports alerts triggered by log content matches created from Logs Explorer or the Monitoring API. |
| 2021-07-02 | Single-condition alert policy summaries on dashboards |  | Custom dashboards can display summaries of single-condition alerting policies including time series, thresholds, and incident status. |
| 2021-06-30 | Sample dashboards gallery |  | The Monitoring dashboards page includes sample dashboards that users can preview, install, and customize. |
| 2021-06-28 | Compute Engine VM Observability tab |  | Compute Engine VM instance details include an Observability tab with logs and expanded visibility into CPU, disk, and network metrics. |
| 2021-06-01 | Dashboard JSON editor |  | The dashboard page includes a JSON editor for editing, downloading, and uploading dashboard definitions. |
| 2021-05-12 | Metrics scopes |  | Metrics scopes let a Google Cloud project view and monitor metrics from multiple Google Cloud projects and AWS accounts. |
| 2021-05-05 | Distribution chart percentile overlay |  | Distribution charts can display optional 50th, 95th, and 99th percentile overlay lines. |
| 2021-05-05 | Interactive chart navigation |  | Charts support selecting line ranges, shifting the time axis, and expanding around a specific point in time. |
| 2021-05-03 | VM health scorecards |  | The VM Instances dashboard includes health scorecards with metrics and statistics about VM and agent health. |
| 2021-05-03 | VM inventory table filtering and sorting |  | The VM Instances dashboard inventory table can be filtered and sorted by any combination of columns. |
| 2021-04-27 | Ops agents on OpenSUSE Leap |  | The Cloud Logging agent, Cloud Monitoring agent, and Ops Agent can be installed on VMs running OpenSUSE Leap 15, 15.1, and 15.2. |
| 2021-04-16 | GKE dashboard SLO management |  | The Cloud Operations for GKE monitoring dashboard can manage and display application service-level objectives. |
| 2021-04-15 | GKE dashboard error logs column |  | The Cloud Operations for GKE monitoring dashboard tables include an Error logs column based on the selected time range. |
| 2021-04-15 | GKE dashboard table column selection |  | The Cloud Operations for GKE monitoring dashboard lets users choose which table columns to display. |
| 2021-04-13 | GKE dashboard resource metrics tab |  | The Cloud Operations for GKE monitoring dashboard resource details panel includes a Metrics tab with an option to create an alert policy. |
| 2021-04-12 | GKE dashboard resource alerts tab |  | The Cloud Operations for GKE monitoring dashboard resource details panel includes an Alerts tab with a link to create an alert policy. |
| 2021-04-08 | Google Cloud Ops Agent |  | The Google Cloud Ops Agent is a unified logging and metrics agent for Linux and Windows Compute Engine VMs. |
| 2021-04-08 | Ops Agent Ansible installation |  | The Google Cloud Ops Agent can be installed with Ansible on Linux and Windows Compute Engine VMs. |
| 2021-04-08 | Ops Agent Terraform provisioning |  | The Google Cloud Ops Agent can be provisioned with Terraform on Linux and Windows Compute Engine VMs. |
| 2021-03-04 | GKE dashboard operations menu |  | Kubernetes Engine Clusters and Workloads dashboards include an Operations menu with shortcuts to Monitoring metrics and Logging logs. |
| 2021-03-04 | VM Instances dashboard operations menu |  | The Compute Engine VM Instances dashboard includes an Operations menu with shortcuts to Monitoring metrics and Logging logs. |
| 2021-02-19 | Incident details page redesign |  | The Incident details page was redesigned with a timeline, charting tools, and an investigative history log. |
| 2021-01-26 | Agent Policies gcloud commands |  | Gcloud commands for managing Agent Policies are available in beta. |
| 2020-11-16 | Dashboard editor |  | A new dashboard editor lets users create and edit all dashboard widget types with mosaic layout and multiple configuration tabs. |
| 2020-11-05 | VM details event timeline |  | The VM Details page includes an Event Timeline that shows important events and links to Incident Details. |
| 2020-10-26 | VM dashboard logging agent installation workflow |  | The Monitoring VM Instances dashboard provides a UI workflow to install the Logging agent from the inventory table. |
| 2020-10-26 | VM dashboard logging agent status |  | The Monitoring VM Instances dashboard inventory table includes a Logging Agent Status column. |
| 2020-10-15 | Ops Agent |  | Ops Agent is a single agent for collecting logs and metrics on Compute Engine instances. |
| 2020-10-05 | MQL alerting |  | Alerting policies can be created using Monitoring Query Language. |
| 2020-08-28 | Trace exemplars in charts |  | Cloud Trace exemplars can be viewed in Cloud Monitoring charts. |
| 2020-08-13 | Infrastructure Summary dashboard |  | The Infrastructure Summary dashboard provides an out-of-the-box fleet view for Compute Engine VMs and load balancers. |
| 2020-08-12 | VM dashboard Explore tab |  | The VM Instances dashboard Explore tab summarizes additional metrics and links to related metric types. |
| 2020-08-12 | VM dashboard monitoring agent installation workflow |  | The Monitoring VM Instances dashboard provides a UI workflow to install the Monitoring agent from the inventory table. |
| 2020-08-12 | VM dashboard monitoring agent status |  | The Monitoring VM Instances dashboard inventory table includes a Monitoring Agent Status column. |
| 2020-08-12 | VM dashboard recommended alerts |  | The VM Instances dashboard includes a Recommended Alerts button to configure fleet-wide alerts. |
| 2020-07-10 | SLO monitoring |  | SLO monitoring lets users define service-level objectives and monitor them with alerts and auto-generated dashboards. |
| 2020-06-08 | Agent-based VM memory and disk analysis |  | VMs with the Monitoring agent installed receive detailed memory and disk analysis in the Compute Engine VM Instances dashboard. |
| 2020-06-08 | Compute Engine VM dashboard cross-fleet metrics |  | The Compute Engine VM Instances dashboard provides cross-fleet metrics and detailed CPU, disk, memory, and network views. |
| 2020-06-08 | Compute Engine VM dashboard filtering and time selection |  | The Compute Engine VM Instances dashboard supports filtering VMs and changing the inspection time window with selectors and in-chart selection. |
| 2020-05-20 | Incident management experience |  | Cloud Monitoring provides an improved incident management experience with better performance, summary statistics, and richer filtering. |
| 2020-05-08 | Monitoring Query Language | 2024-10-22 | Monitoring Query Language is a query language for Cloud Monitoring metrics and dashboards; Monitoring Query Language is a text-based interface for querying Cloud Monitoring time-series data in the console and API; deprecated on 2024-10-22. |
| 2020-04-28 | Cloud Monitoring agent for Linux 5.x | 2020-04-28 | Version 5.x of the Cloud Monitoring agent for Linux provided the prior Linux agent release line; deprecated on 2020-04-28. |
| 2020-03-30 | High-frequency custom and Prometheus metric writes |  | Custom and Prometheus metrics can be written at up to one data point every 10 seconds. |
| 2020-02-24 | Stackdriver Monitoring agent 6.0.0 |  | Stackdriver Monitoring agent version 6.0.0 is available for CentOS 7, Ubuntu 16.04 and 18.04, Ubuntu Minimal 16.04 and 18.04, and Amazon Linux AMI; Stackdriver Monitoring agent version 6.0.0 introduces a new release built on a fork of collectd 5.8.1. |
| 2020-02-19 | Stackdriver Monitoring agent on Ubuntu 19.10 |  | Stackdriver Monitoring agent version 6.0.0 is available for Ubuntu 19.10. |
| 2020-02-18 | Stackdriver Monitoring agent on Debian 9 |  | Stackdriver Monitoring agent version 6.0.0 is available for Debian 9. |
| 2020-02-14 | Pub/Sub alert notifications |  | Alerting policies can send notifications to Cloud Pub/Sub topics. |
| 2020-02-11 | Stackdriver Monitoring agent on CentOS 8 |  | Stackdriver Monitoring agent version 6.0.0 is available for CentOS 8. |
| 2020-02-06 | Stackdriver Monitoring agent on Debian 10 |  | Stackdriver Monitoring agent version 6.0.0 is available for Debian 10. |
| 2020-01-31 | Stackdriver Monitoring agent on SUSE |  | Stackdriver Monitoring agent version 6.0.0 is available for SUSE and SUSE Linux Enterprise Server distributions. |
| 2019-12-11 | Legacy Stackdriver support for GKE | 2019-12-11 | Legacy Stackdriver support for Google Kubernetes Engine provided the older GKE monitoring and logging experience; deprecated on 2019-12-11. |
| 2019-12-09 | Dashboard API |  | The Stackdriver Monitoring Dashboard API lets users programmatically manage dashboards and charts. |
| 2019-12-04 | Monitoring in Google Cloud console |  | Stackdriver Monitoring in the Google Cloud console provides access to monitoring configuration alongside the classic console. |
| 2019-11-14 | Service Monitoring API |  | The Service Monitoring API lets users create services, define SLOs, and create alerting policies for them. |
| 2019-08-08 | Uptime checks regex negation content matching |  | Uptime checks support regex negation for content matching. |
| 2019-08-08 | Uptime checks SSL certificate validation |  | Uptime checks support SSL certificate validation. |
| 2019-05-21 | Stackdriver Kubernetes Engine Monitoring |  | Stackdriver Kubernetes Engine Monitoring provides the newer GKE monitoring experience. |
| 2019-05-02 | One-step workspace creation |  | Stackdriver Workspace creation is a one-step operation. |
| 2019-04-23 | OpenCensus custom metrics library |  | OpenCensus is the generally available official library for writing user-defined metrics to Stackdriver Monitoring. |
| 2019-03-18 | Uptime Configuration API |  | The Uptime Configuration API lets users create, edit, and manage uptime checks; The Uptime Configuration API lets users create and edit uptime checks programmatically. |
| 2019-02-08 | Stackdriver Monitoring agent on Ubuntu 18.04 |  | The Stackdriver Monitoring agent supports Ubuntu 18.04 LTS. |
| 2018-12-05 | OpenCensus custom metrics for Java |  | Documentation is available for using OpenCensus to capture custom metrics in Java applications. |
| 2018-10-10 | Alerting Policy Creation UI |  | A Metrics Explorer-based interface provides fine-grained control for creating alerting policies. |
| 2018-09-18 | Chart Legends |  | Chart legends support multiple labeled columns, sorting, scrolling, and improved resizing. |
| 2018-06-19 | Minimal AWS Permissions |  | Documentation describes a reduced AWS permission set for using Monitoring with AWS. |
| 2018-05-22 | Monitoring Usage Metrics and Billing Estimates |  | Monitoring provides usage metrics and estimated billing based on the new pricing model. |
| 2018-05-21 | Alerting Condition Creation UI |  | A Metrics Explorer-based interface provides fine-grained control for creating alerting conditions. |
| 2018-05-02 | Kubernetes Metrics |  | Kubernetes Monitoring introduces new Kubernetes metrics for monitored clusters. |
| 2018-05-02 | Kubernetes Monitored Resource Types |  | Kubernetes Monitoring introduces new monitored resource types for Kubernetes workloads. |
| 2018-05-02 | Kubernetes Monitoring |  | Kubernetes Monitoring adds Monitoring support for Kubernetes 1.10 clusters in Kubernetes Engine. |
| 2018-04-19 | Boolean Metric Charting |  | Boolean metrics can be queried and visualized in charts. |
| 2018-03-08 | AlertPolicy API |  | The AlertPolicy API enables programmatic management of alerting policies. |
| 2018-03-08 | NotificationChannels API |  | The NotificationChannels API enables programmatic management of notification channels. |
| 2017-11-05 | Cloud Monitoring API v2 | 2017-08 | Cloud Monitoring API v2 was deprecated and later turned down; deprecated on 2017-08. |
| 2017-10-19 | Agent Export for collectd Metrics |  | The Monitoring agent can export collectd metrics as custom metrics. |
| 2017-10-19 | Agent Export for StatsD Metrics |  | The Monitoring agent can export StatsD metrics as custom metrics. |
| 2017-10-17 | Uptime Metrics |  | Uptime metrics record the status of configured uptime checks. |
| 2017-09-08 | Cloud Interconnect Monitoring |  | Monitoring supports custom dashboards and alerting for Cloud Interconnect resources. |
| 2017-09-08 | HTTPS Load Balancer Metrics |  | Monitoring supports metrics for HTTPS load balancers; Monitoring supports metrics for HTTPS load balancers. |
| 2017-08-23 | Dashboard Group Filtering |  | Custom dashboards and resource list pages support filtering by groups. |
| 2017-07-10 | Distribution Metric Heatmaps |  | Dashboard charts can display distribution metrics as heatmaps. |
| 2017-07-10 | Monitoring Admin Role |  | The Monitoring Admin role grants administrative IAM permissions for Monitoring. |
| 2017-07-10 | Monitoring Editor Role |  | The Monitoring Editor role grants IAM-based permissions for Monitoring operations. |
| 2017-07-10 | Monitoring IAM |  | Monitoring provides complete IAM support including predefined and custom roles. |
| 2017-07-10 | Windows Process Metrics |  | Windows process metrics include all processes accessible to the Monitoring agent. |
| 2017-07-10 | Windows Server 2016 Agent Support |  | The Monitoring agent supports Windows Server 2016. |
| 2017-06-05 | Singapore Region Support |  | Monitoring supports resources in the Singapore region asia-southeast1. |
| 2017-06-05 | Uptime Check Dashboards |  | Uptime checks have new overview and detail dashboards. |
| 2017-05-01 | Cloud Bigtable Metrics |  | Monitoring adds metric and resource types for Cloud Bigtable. |
| 2017-05-01 | Cloud Dataflow Metrics |  | Monitoring adds metric and resource types for Cloud Dataflow. |
| 2017-05-01 | Cloud DNS Metrics |  | Monitoring adds metric and resource types for Cloud DNS. |
| 2017-05-01 | Cloud IoT Metrics |  | Monitoring adds metric and resource types for Cloud IoT. |
| 2017-05-01 | Cloud Pub/Sub Metrics |  | Monitoring adds metric and resource types for Cloud Pub/Sub. |
| 2017-05-01 | Cloud Spanner Metrics |  | Monitoring adds metric and resource types for Cloud Spanner; Monitoring supports Cloud Spanner metrics for dashboards and alerting. |
| 2017-05-01 | Stackdriver Logging Metrics |  | Monitoring adds metric and resource types for Stackdriver Logging. |
| 2017-05-01 | Windows IIS Metrics |  | Monitoring agent metrics include Microsoft Windows IIS metrics for charting and alerting. |
| 2017-05-01 | Windows MSSQL Metrics |  | Monitoring agent metrics include Microsoft Windows MSSQL metrics for charting and alerting. |
| 2017-05-01 | Windows Pagefile Metrics |  | Monitoring agent metrics include Microsoft Windows pagefile metrics for charting and alerting. |
| 2017-03-31 | Cloud Dataflow Integration |  | Cloud Dataflow is integrated with Monitoring. |
| 2017-03-31 | Cloud Machine Learning Engine Metrics |  | Monitoring supports Cloud Machine Learning Engine metrics for dashboards and alerting. |
| 2017-03-31 | Faster Chart Legends |  | Charts for custom and logs-based metrics have faster legends with instance names and sorting. |
| 2017-03-31 | Faster User Interface |  | The Monitoring user interface has reduced initial page load times. |
| 2017-03-31 | Time Shifting |  | Time shifting lets users compare current metric data with data from earlier periods. |
| 2017-02-06 | Selectable Uptime Check Regions |  | Users can choose the geographic regions that perform uptime checks. |
| 2017-01-18 | AWS Canada Region Support |  | Monitoring supports the AWS Canada region ca-central-1. |
| 2017-01-18 | AWS London Region Support |  | Monitoring supports the AWS London region eu-west-2. |
| 2016-12-12 | Account IDs in URLs |  | Monitoring URLs include the Stackdriver account ID to support multi-account tabs and link sharing. |
| 2016-12-08 | Incident Detail Pages |  | Open incidents have detail pages with graphs, affected resources, and comments. |
| 2016-12-08 | Metrics Explorer |  | Metrics Explorer lets users select monitored resource types and metrics and aggregate data across instances. |
| 2016-11-21 | AWS US East 2 Region Support |  | Monitoring supports the AWS region us-east-2. |
| 2016-11-21 | Chart Snapshots |  | Charts can be downloaded as PNG images. |
| 2016-11-21 | Group Filtering for Metric Charts |  | Custom and logs-based metric charts support a group filter. |
| 2016-11-21 | Stacked Area Charts |  | Charts can display data as stacked area charts. |
| 2016-11-21 | Stacked Bar Charts |  | Charts can display data as stacked bar charts. |
| 2016-10-20 | Agent Health Metrics |  | The Monitoring agent publishes health metrics for the agent itself. |
| 2016-10-20 | Alerting Policy Editor UI |  | A streamlined user interface supports creating and editing alerting policies. |
| 2016-10-20 | BigQuery Metrics |  | Monitoring adds metrics for BigQuery. |
| 2016-10-20 | Bundled Network Plugin |  | The Monitoring agent includes a bundled network plugin. |
| 2016-10-20 | Bundled StatsD Plugin |  | The Monitoring agent includes a bundled StatsD plugin. |
| 2016-10-20 | Bundled Tail Plugin |  | The Monitoring agent includes a bundled tail plugin. |
| 2016-10-20 | Chart Axis Zoom |  | Charts support click-and-drag zooming on both x and y axes. |
| 2016-10-20 | Cloud Router Metrics |  | Monitoring adds metrics for Cloud Router. |
| 2016-10-20 | Custom Metric Descriptor Auto-Creation |  | Custom metric descriptors are created automatically when time series data is written. |
| 2016-10-20 | Log Scale Charting |  | Charts support logarithmic scales. |
| 2016-10-20 | MongoDB 3.0 Agent Support |  | The Monitoring agent supports MongoDB 3.0. |
| 2016-10-20 | Monitoring API v3 |  | Monitoring API v3 is generally available for programmatic access to Monitoring; Monitoring API v3 is available and intended to replace API v2. |
| 2016-10-20 | TaskQueues Pull Metrics |  | Monitoring adds pull metrics for TaskQueues. |
| 2016-09-11 | Monitoring API v2 | 2016-09-11 | Monitoring API v2 is deprecated in favor of newer API versions; deprecated on 2016-09-11. |
| 2016-03-23 | AWS Account Monitoring |  | Monitoring can monitor Amazon Web Services accounts alongside Google Cloud projects. |
| 2015-09-29 | View Logs from Charts |  | Charts include a View Logs option in their settings menu. |

Source file slug: `cloud-monitoring.md`

