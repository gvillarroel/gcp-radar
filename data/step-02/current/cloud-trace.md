# Cloud Trace

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 43
Unique features: 43

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-30 | Cloud Trace API MCP server |  | The Cloud Trace API MCP server lets agents and AI applications interact with trace data. |
| 2026-03-24 | Telemetry API regional trace ingestion quotas |  | The Telemetry API provides regional byte-based quotas for trace ingestion with higher limits in selected regions. |
| 2026-03-19 | Expanded observability bucket locations |  | Observability buckets for trace data support additional storage locations. |
| 2026-03-19 | SQL query result alerting |  | Alerting policies can monitor the results of SQL queries. |
| 2026-02-26 | Configurable observability bucket locations |  | Observability buckets for trace data can be configured in specific multi-region and regional locations. |
| 2026-02-26 | Observability bucket default settings |  | Default settings let organizations, folders, and projects preconfigure location and Cloud KMS key values for new observability buckets. |
| 2026-02-17 | Trace sinks | 2026-02-18 | Trace sinks export trace spans to external destinations such as BigQuery; deprecated on 2026-02-18. |
| 2026-02-02 | Trace analysis in Log Analytics |  | The Log Analytics page can query and analyze trace data with SQL, including joins between trace and log data. |
| 2026-02-02 | Trace storage in observability datasets |  | Cloud Trace stores trace data in an observability dataset that can be linked for querying with services such as BigQuery. |
| 2026-01-05 | Multimodal prompt and response tracing |  | Cloud Trace can collect, view, and analyze multimodal prompts and responses from agentic applications built with LangGraph or ADK. |
| 2025-12-15 | App Hub annotations in Trace Explorer |  | Trace Explorer shows annotations for App Hub-registered services and workloads with links to Application Monitoring dashboards. |
| 2025-11-06 | ADK prompt and response tracing |  | Cloud Trace can collect, view, and analyze prompts and responses from agentic applications built with the Agent Development Kit. |
| 2025-08-27 | Trace scopes API management |  | Trace scopes can be created and managed programmatically through an API. |
| 2025-07-17 | Application-specific resource attributes in traces |  | Trace data can include application-specific resource attributes that support filtering by application, service, or workload in Trace Explorer. |
| 2025-05-27 | Generative AI event tracing |  | Cloud Trace can capture and display generative AI events from applications instrumented with OpenTelemetry and LangGraph. |
| 2025-03-25 | Telemetry API |  | The Telemetry API provides an OpenTelemetry OTLP-compatible endpoint for sending trace data and supports VPC Service Controls. |
| 2025-01-24 | Trace scopes |  | Trace scopes are persistent project-level resources that define which projects Trace Explorer searches and can be set as default. |
| 2024-05-28 | OpenTelemetry instrumentation samples |  | Google published OpenTelemetry samples for Python and Node.js applications to collect metrics, logs, and traces. |
| 2024-05-28 | Trace keyword search |  | Trace Explorer can search within a trace by keywords. |
| 2023-05-15 | Ops Agent OTLP receiver |  | The Ops Agent includes an OTLP receiver for collecting custom traces and metrics from applications instrumented with OpenTelemetry SDKs. |
| 2022-10-24 | Microservices observability for gRPC |  | GRPC applications can be instrumented to use Microservices observability. |
| 2021-07-09 | OpenTelemetry for Java |  | Cloud Trace supports the generally available OpenTelemetry library for Java applications. |
| 2021-04-19 | OpenTelemetry for Python |  | Cloud Trace supports the generally available OpenTelemetry library for Python applications. |
| 2020-08-28 | Trace exemplars in Cloud Monitoring |  | Cloud Monitoring can display Cloud Trace exemplars alongside charted metrics data. |
| 2020-08-17 | Trace ID search |  | The Cloud Trace viewer supports searching by trace ID. |
| 2020-03-30 | OpenTelemetry for Go and Node.js |  | Cloud Trace supports using OpenTelemetry with Go and Node.js applications on GKE and Compute Engine. |
| 2020-02-19 | Trace export to BigQuery |  | Cloud Trace can export trace data to BigQuery. |
| 2019-12-16 | VPC Service Controls for Cloud Trace |  | Cloud Trace integrates with VPC Service Controls. |
| 2019-11-20 | Menu-driven trace filtering |  | The Trace list page includes a menu-driven filtering interface for finding traces. |
| 2018-12-18 | Analysis report trace filters |  | Analysis reports can filter traces by full URI, URI prefix, or trace filter. |
| 2018-09-05 | Trace billing estimate |  | Cloud Trace can estimate billing based on the new pricing model before enforcement begins. |
| 2018-04-04 | Cross-project trace viewing |  | Trace Viewer can display trace spans from related Google Cloud projects in a single view. |
| 2018-03-28 | Trace Data Access audit logs |  | Cloud Trace provides Data Access audit logs. |
| 2018-02-27 | Log entry association with trace spans |  | Trace Viewer can associate Cloud Logging entries with trace spans when the span_id field is set. |
| 2018-01-12 | Sub-millisecond span resolution |  | Trace Viewer displays trace spans with sub-millisecond time resolution. |
| 2018-01-09 | Span annotations and message events in Trace Viewer |  | Trace Viewer displays span annotations and message events written with the Stackdriver Trace API v2. |
| 2017-10-31 | Stackdriver Trace API v2 |  | Stackdriver Trace API v2 provides the next version of the Trace API. |
| 2017-10-02 | Parent-child span visualization |  | Trace Viewer visualizes parent-child relationships between trace spans and lets users expand or collapse parent spans. |
| 2017-08-01 | Inline log viewing in Trace Viewer |  | Trace Viewer shows associated log entries inline with trace spans and links to VM logs for load balancer spans. |
| 2017-06-05 | Advanced trace filters |  | The Trace List page and Trace API support filtering traces by custom labels, latency, child spans, methods, and URIs. |
| 2017-02-06 | Trace UI scatter plots |  | The Stackdriver Trace UI includes a scatter-plot selection tool for identifying, viewing, and comparing traces. |
| 2017-02-06 | Zipkin tracer compatibility |  | Stackdriver Trace is compatible with Zipkin tracers. |
| 2016-10-20 | Analysis reports |  | Analysis reports compare an application's latency profile across time and versions. |

Source file slug: `cloud-trace.md`

