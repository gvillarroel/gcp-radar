---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.760Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Cloud Monitoring API MCP server"
feature_slug: "cloud-monitoring-api-mcp-server"
latest_feature_date: "2026-02-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/agent/monitoring"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListTimeSeriesAsyncPager"
keywords:
  - "monitoring"
  - "mcp"
  - "server"
  - "lets"
  - "agents"
  - "ai"
  - "applications"
  - "interact"
---

# Cloud Monitoring API MCP server

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The Cloud Monitoring API MCP server lets agents and AI applications interact with time series data.

## Extended Definition

The Cloud Monitoring API MCP server lets agents and AI applications interact with time series data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/agent/monitoring](https://docs.cloud.google.com/monitoring/agent/monitoring)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListTimeSeriesAsyncPager](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListTimeSeriesAsyncPager)

## Supporting Pages

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Details about your discovered and registered services and workloads, including their functional type, which lets you identify agents ( robot 2 ) and MCP servers ( ).
- List applications To list the applications you have registered with App Hub, along with information like the number of incidents and the application's location, criticality, and environment, do the following: In the Google Cloud console, go to the Application monitoring page: Go to Application monitoring If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- The following screenshot illustrates the dashboard for a workload: The registration status of a service or workload affects what data Application Monitoring displays on the dashboard for the service or workload: Registered : Application Monitoring uses the application-specific labels and attributes that supported infrastructure and instrumented applications attach to the telemetry they generate.
- The Application Monitoring dashboards display the following: Details about your registered applications, including their location, criticality, and registered services ( ) and workloads ( ).

### Monitoring agent overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring](https://docs.cloud.google.com/monitoring/agent/monitoring)
- Source ID: `site-iam-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Monitoring APIs: monitoring.googleapis.com Installing the agent requires access to the following DNS names: (Linux) Google Cloud package repository: packages.cloud.google.com (Linux) Google downloads subdomain: dl.google.com (Windows) Legacy Stackdriver download server: repo.stackdriver.com Getting the Monitoring agent source code The source code for the Monitoring agent is available for only the Linux-hosted Monitoring agent.
- Windows operating systems: All versions of the Monitoring agent support the following Windows operating systems: Windows Server 2019 Windows Server Core 2019 Windows Server 2016 Windows Server Core 2016 The Monitoring agent does not presently support Windows Server Core 2019 for containers.
- After installing the Monitoring agent, you can monitor supported third-party applications by adding application-specific collectd configurations.
- Managed Service for Apache Spark instances prior to image version 2.2 have pre-installed Monitoring agents with service-specific configurations.

### "Class ListTimeSeriesAsyncPager (2.30.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListTimeSeriesAsyncPager](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListTimeSeriesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.monitoring v3.types.ListTimeSeriesRequest The initial request object. response google.cloud.monitoring v3.types.ListTimeSeriesResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListTimeSeriesResponse ], ], request : google . cloud . monitoring v3 . types . metric service .
- ListTimeSeriesResponse ], ], request : google . cloud . monitoring v3 . types . metric service .
- ListTimeSeriesRequest , response : google . cloud . monitoring v3 . types . metric service .

