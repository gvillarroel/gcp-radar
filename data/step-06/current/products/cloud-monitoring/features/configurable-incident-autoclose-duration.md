---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.937Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Configurable incident autoclose duration"
feature_slug: "configurable-incident-autoclose-duration"
latest_feature_date: "2021-09-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
  - "https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring"
keywords:
  - "configurable"
  - "incident"
  - "autoclose"
  - "duration"
  - "monitoring"
  - "lets"
  - "users"
  - "configure"
---

# Configurable incident autoclose duration

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Cloud Monitoring lets users configure how long to wait before closing an incident when observations stop arriving.

## Extended Definition

Cloud Monitoring lets users configure how long to wait before closing an incident when observations stop arriving.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- [https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring](https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring)

## Supporting Pages

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- List applications To list the applications you have registered with App Hub, along with information like the number of incidents and the application's location, criticality, and environment, do the following: In the Google Cloud console, go to the Application monitoring page: Go to Application monitoring If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- Before you begin Before you can use Application Monitoring, make sure that you configure your App Hub host project or management project.
- Use dashboard options to explore telemetry The Application Monitoring dashboards display log, metric, trace, and incident information.
- The following screenshot illustrates the dashboard for a workload: The registration status of a service or workload affects what data Application Monitoring displays on the dashboard for the service or workload: Registered : Application Monitoring uses the application-specific labels and attributes that supported infrastructure and instrumented applications attach to the telemetry they generate.

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Incidents and notifications in Cloud Monitoring To be notified when the value of a performance metric meets criteria that you define, create an alerting policy .
- Typically, a record lists the status of the incident, links to logs, a chart of the recorded metric data, labels, and duration.
- Query languages for Cloud Monitoring When you create an alerting policy or a chart, you must provide a query that describes the data that you want to monitor or chart: Google Cloud console: You can build your query by making selections from menus, or you can write a query.
- Monitor metrics for multiple Google Cloud projects To view and monitor the time-series data for multiple Google Cloud projects and AWS accounts through a single interface, configure a multi-project metrics scope .

### Troubleshoot Application Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring](https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Unexpected incidents are being opened With the release of Application Monitoring, the metadata.system labels.apphub host project id label was renamed as metadata.system labels.apphub application container .
- Incidents close automatically when data stops arriving, after the auto-close duration expires.
- To associate an alerting policy with a workload or service by using the Google Cloud console, do the following: In the Google Cloud console, go to the notifications Alerting page: Go to Alerting If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- These labels identify your application and your service or workload: apphub application location apphub application id apphub service id or apphub workload id You can also add user labels to an alerting policy by using the Google Cloud CLI, Terraform, or the Cloud Monitoring API.

