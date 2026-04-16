---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.053Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Incident Detail Pages"
feature_slug: "incident-detail-pages"
latest_feature_date: "2016-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/application-topology"
keywords:
  - "incident"
  - "detail"
  - "pages"
  - "open"
  - "incidents"
  - "have"
  - "graphs"
  - "affected"
---

# Incident Detail Pages

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Open incidents have detail pages with graphs, affected resources, and comments.

## Extended Definition

Open incidents have detail pages with graphs, affected resources, and comments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring](https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/application-topology](https://docs.cloud.google.com/monitoring/docs/application-topology)

## Supporting Pages

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- List applications To list the applications you have registered with App Hub, along with information like the number of incidents and the application's location, criticality, and environment, do the following: In the Google Cloud console, go to the Application monitoring page: Go to Application monitoring If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- To view closed incident and those that opened outside the dashboard's time range setting, in the toolbar of the Incidents section, disable Grouped by policy , and then enable Show closed incidents .
- To get more information about your incidents and alerting policies, do the following: To find details about the alerting policy that caused the incident, click the policy name.
- Explore incidents The Incidents section of a dashboard lists open incidents for alerting policies that are associated with your application.

### "Set up Google Cloud Observability for Application Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring](https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- When you add these labels, incidents associated with your application are shown on the Application Monitoring dashboards.
- These user-defined labels are also included in any incidents created for a policy.
- To learn more about labels, see Annotate incidents with labels .
- If you are using an app-enabled folder and if you don't have an organization-level aggregated sink or nested folders, then we recommend following: Create an intercepting aggregated sink for your app-enabled folder , and route those logs to the Default log bucket of the management project for your app-enabled folder.

### View application topology \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-topology](https://docs.cloud.google.com/monitoring/docs/application-topology)
- Source ID: `site-docs-reference-2`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Limitations The topology map might not display all incidents or all services and workloads: The flyouts display only those incidents from the most recent 24 hours.
- Get information about attributes and associated incidents by selecting an application or a node.
- To get information about attributes and incidents for the application, select its blue circle.
- This dynamic map helps you understand traffic flow and identify incidents.

