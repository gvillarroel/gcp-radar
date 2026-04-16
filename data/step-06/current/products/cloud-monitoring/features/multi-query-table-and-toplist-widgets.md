---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.807Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Multi-query Table and TopList widgets"
feature_slug: "multi-query-table-and-toplist-widgets"
latest_feature_date: "2024-09-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.query.Query"
keywords:
  - "multi"
  - "query"
  - "table"
  - "toplist"
  - "widgets"
  - "can"
  - "display"
  - "results"
---

# Multi-query Table and TopList widgets

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Table and TopList widgets can display the results of multiple queries with configurable headers, alignment, and threshold-based cell coloring.

## Extended Definition

Table and TopList widgets can display the results of multiple queries with configurable headers, alignment, and threshold-based cell coloring.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.query.Query](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.query.Query)

## Supporting Pages

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- For example, to list active metrics that appear in no alerting policies and in no custom dashboards, add the following filters to the filter bar: Status: Active Alert Policies: (Empty) Custom Dashboards: (Empty) By default, when you add multiple filters, the table includes a row when the row meets all filters.
- To view the table of usage data for each billable metric, do the following: In the Google Cloud console, go to the query stats Metrics management page: Go to Metrics management If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- For each metric, the table displays that metric's contribution to billable volume and provides links to to the alerting policies and custom dashboards associated with the metric, as shown in the following screenshot.
- Find the metric in the table, and then click more vert Actions to do any of the following: To view a chart that displays the current metric, select View in Metrics Explorer .

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- For each supported App Hub region , this page lists at most 100 discovered services and 100 discovered workloads: The App Hub Type column displays the App Hub registration type : Service ( ) Workload ( ) The Functional Type column displays the App Hub functional type : Agent ( robot 2 ) MCP server ( ) From the Services and Workloads tab, you can do all of the following: Modify the data the table displays by using the view column Columns button.
- View chart configuration To view details like the metric type and the aggregation options for a chart that displays metric data, go to the toolbar of a chart or table, and then click info Information .
- Explore metric data The charts and tables on your dashboard display golden signals and other metric data that is relevant for the resources used by your application, service, or workload.
- However, the flyout retains your current context and lets you save your exploration results to a custom dashboard: To open a flyout, click query stats Explore data .

### Class Query (2.30.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.query.Query](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.query.Query)
- Source ID: `site-python-reference`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This can be useful for seeing what labels are available. dataframe = query.as dataframe() Generate a dataframe using a particular label for the column names. dataframe = query.as dataframe(label='instance name') Generate a dataframe with a multi-level column header. dataframe = query.as dataframe(labels=['zone', 'instance name']) Generate a dataframe with a multi-level column header, assuming the metric is issued by more than one type of resource. dataframe = query.as dataframe( labels=['resource type', 'instance id']) Parameters Name Description label str (Optional) The label name to use for the dataframe header.
- Examples:: query = query.select metrics(instance name='myinstance') query = query.select metrics(instance name prefix='mycluster-') A keyword argument <label>=<value> ordinarily generates a filter expression of the form:: metric.label.<label> = "<value>" However, by adding " notequal" to the keyword, you can inequality: <label> notequal=<value> generates:: metric.label.<label> != <value> By adding " prefix" or " suffix" to the keyword, you can specify a partial match. <label> prefix=<value> generates:: metric.label.<label> = starts with("<value>") <label> suffix=<value> generates:: metric.label.<label> = ends with("<value>") If the label's value type is INT64 , a similar notation can be used to express inequalities: <label> less=<value> generates:: metric.label.<label> < <value> <label> lessequal=<value> generates:: metric.label.<label> <= <value> <label> greater=<value> generates:: metric.label.<label> > <value> <label> greaterequal=<value> generates:: metric.label.<label> >= <value> Parameter Name Description args tuple Raw filter expression strings to include in the conjunction.
- Examples:: query = query.select resources(zone='us-central1-a') query = query.select resources(zone prefix='europe-') query = query.select resources(resource type='gce instance') A keyword argument <label>=<value> ordinarily generates a filter expression of the form:: resource.label.<label> = "<value>" However, by adding " prefix" or " suffix" to the keyword, you can specify a partial match. <label> prefix=<value> generates:: resource.label.<label> = starts with("<value>") <label> suffix=<value> generates:: resource.label.<label> = ends with("<value>") As a special case, "resource type" is treated as a special pseudo-label corresponding to the filter object resource.type .
- 2.30.0 (latest) 2.29.1 2.28.0 2.27.2 2.26.0 2.25.0 2.24.0 2.23.1 2.22.2 2.21.0 2.20.0 2.19.4 2.18.0 2.17.0 2.16.0 2.15.1 2.14.2 2.13.0 2.12.0 2.11.3 2.10.1 2.9.2 2.8.0 2.7.0 2.6.0 2.5.2 2.4.2 2.3.0 2.2.1 2.1.0 2.0.1 1.1.2 1.0.0 0.36.2 0.35.0 0.34.0 0.33.0 0.32.0 Query ( client , project , metric type = "compute.googleapis.com/instance/cpu/utilization" , end time = None , days = 0 , hours = 0 , minutes = 0 , ) Query object for retrieving metric data.

