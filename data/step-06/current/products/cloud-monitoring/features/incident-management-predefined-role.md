---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.860Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Incident management predefined role"
feature_slug: "incident-management-predefined-role"
latest_feature_date: "2023-06-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/application-topology"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
keywords:
  - "incident"
  - "management"
  - "predefined"
  - "role"
  - "iam"
  - "lets"
  - "users"
  - "view"
---

# Incident management predefined role

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

A predefined IAM role lets users view and manage incidents with limited permissions.

## Extended Definition

A predefined IAM role lets users view and manage incidents with limited permissions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/application-topology](https://docs.cloud.google.com/monitoring/docs/application-topology)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)

## Supporting Pages

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- This is the project that you use to view your application's telemetry data: To get the permissions that you need to view log and metric data, and to create alerting policies and customize dashboards, ask your administrator to grant you the following IAM roles: Logs Viewer ( roles/logging.viewer ) on your App Hub host project or management project and any other projects listed in its default log scope.
- Logs View Accessor ( roles/logging.viewAccessor ) on the log views listed in the default log scope of your App Hub host project or management project.
- App Hub viewer ( roles/apphub.viewer ) on your App Hub host project or management project.
- View topology for your application management boundary Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

### View application topology \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-topology](https://docs.cloud.google.com/monitoring/docs/application-topology)
- Source ID: `site-docs-reference-2`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to view application topology: To generate topology: apptopology.applicationTopologies.generate You might also be able to get these permissions with custom roles or other predefined roles .
- You can also view a topology map at the application management boundary level , which lets you understand how an application interacts with external services and workloads.
- However, to view the topology map at the application management boundary level, your IAM roles must include App Topology Viewer.
- This predefined role contains the permissions required to view application topology.

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- View summaries of metric usage To view summaries of the number of billable metrics, rates of metric ingestion, and error rate, do the following: In the Google Cloud console, go to the query stats Metrics management page: Go to Metrics management If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- View the volume of excluded metrics To see the volume of excluded bytes or samples as a chart in Metrics Explorer, do the following: In the Google Cloud console, go to the query stats Metrics management page: Go to Metrics management If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- Authorization To get the permissions that you need to view dashboards and create alerting policies by using the Google Cloud console or to create, edit, and delete metric-exclusion rules, ask your administrator to grant you the Monitoring Editor ( roles/monitoring.editor ) IAM role on your project.
- To view the table of usage data for each billable metric, do the following: In the Google Cloud console, go to the query stats Metrics management page: Go to Metrics management If you use the search bar to find this page, then select the result whose subheading is Monitoring .

