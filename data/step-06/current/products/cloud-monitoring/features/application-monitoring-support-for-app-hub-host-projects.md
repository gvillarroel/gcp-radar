---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.784Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Application Monitoring support for App Hub host projects"
feature_slug: "application-monitoring-support-for-app-hub-host-projects"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/application-topology"
keywords:
  - "application"
  - "monitoring"
  - "app"
  - "hub"
  - "host"
  - "projects"
  - "supports"
---

# Application Monitoring support for App Hub host projects

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Application Monitoring supports App Hub host projects.

## Extended Definition

Application Monitoring supports App Hub host projects.

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
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- This is the project that you use to view your application's telemetry data: To get the permissions that you need to view log and metric data, and to create alerting policies and customize dashboards, ask your administrator to grant you the following IAM roles: Logs Viewer ( roles/logging.viewer ) on your App Hub host project or management project and any other projects listed in its default log scope.
- Google Cloud console navigation when using an app-enabled folder App Hub supports two configurations: app-enabled folder and App Hub host projects.
- Before you begin Before you can use Application Monitoring, make sure that you configure your App Hub host project or management project.
- List applications To list the applications you have registered with App Hub, along with information like the number of incidents and the application's location, criticality, and environment, do the following: In the Google Cloud console, go to the Application monitoring page: Go to Application monitoring If you use the search bar to find this page, then select the result whose subheading is Monitoring .

### "Set up Google Cloud Observability for Application Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring](https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Only configure scopes To get the permissions that you need to configure the observability scope, ask your administrator to grant you the following IAM roles: Observability Editor ( roles/observability.editor ) on your App Hub host project or management project Logs Configuration Writer ( roles/logging.configWriter ) on your App Hub host project or management project Monitoring admin ( roles/monitoring.admin ) on your App Hub host project or management project and on each project that you want to add to the metrics scope Cloud Trace User ( roles/cloudtrace.user ) on your App Hub host project or management project App Hub viewer ( roles/apphub.viewer ) on your App Hub host project or management project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Configure the metrics scope Make sure that the metrics scope for your App Hub host project or management project lists all projects that store your application's metric data: For app-enabled folders, Google Cloud Observability attempts to synchronize the list of projects in your app-enabled folder with the list of projects in the metrics scope.
- Enable the API In your App Hub host project or management project, create a trace scope and add projects that store your application's trace data.
- These labels identify your application and your service or workload: apphub application location apphub application id apphub service id or apphub workload id You can also add user labels to an alerting policy by using the Google Cloud CLI, Terraform, or the Cloud Monitoring API.

### View application topology \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-topology](https://docs.cloud.google.com/monitoring/docs/application-topology)
- Source ID: `site-docs-reference-2`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Setup for Application Monitoring includes configuring the default trace scope to list all projects that store your trace data .
- In the Google Cloud console, go to the Application monitoring page: Go to Application monitoring If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- In the Google Cloud console, go to the Application monitoring page: Go to Application monitoring If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- Home Documentation Observability Cloud Monitoring Guides Send feedback View application topology Stay organized with collections Save and categorize content based on your preferences.

