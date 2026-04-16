---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.909Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "User-defined labels in alert notifications and details pages"
feature_slug: "user-defined-labels-in-alert-notifications-and-details-pages"
latest_feature_date: "2022-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
  - "https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring"
  - "https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent"
keywords:
  - "user"
  - "defined"
  - "labels"
  - "alert"
  - "notifications"
  - "details"
  - "pages"
  - "included"
---

# User-defined labels in alert notifications and details pages

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

User-defined labels are included in PagerDuty, Pub/Sub, webhook, and email notifications and are visible on alerting policy and incident details pages.

## Extended Definition

User-defined labels are included in PagerDuty, Pub/Sub, webhook, and email notifications and are visible on alerting policy and incident details pages.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- [https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring](https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring)
- [https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent](https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent)

## Supporting Pages

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Incidents and notifications in Cloud Monitoring To be notified when the value of a performance metric meets criteria that you define, create an alerting policy .
- The Cloud Monitoring API reference pages, such as the page alertPolicies.list , let you experiment with API calls directly from the reference page.
- These labels are defined as part of the MetricDescriptor , which is a data structure that defines the attributes of the measured data.
- User-defined metrics that are created by using the Cloud Monitoring API or by using a library such as OpenTelemetry .

### "User-defined metrics from the agent \_|\_ Cloud Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent](https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent)
- Source ID: `site-iam-reference`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- More details are available in User-defined metrics overview and Structure of time series .
- TypeInstance "^active-connections$" # Match on type instance . < / Match > < Target "set" > Specify the metric descriptor type : MetaData "stackdriver metric type" "custom.googleapis.com/nginx/active connections" Specify a value for the "service name" label ; clean it up in the next Target : MetaData "label:service name" "%{plugin instance}" < / Target > < Target "replace" > Remove the "nginx " prefix in the service name to get the real service name : MetaData "label:service name" "nginx " "" < / Target > < / Rule > The following rule is run after rewriting your metric , or if the metric wasn ' t one of your user - defined metrics .
- The default processing will write all metrics to Cloud Monitoring , which will drop any unrecognized metrics : ones that aren ' t in the list of curated metrics and don ' t have the user - defined metric metadata . < Rule "go back" > Target "return" < / Rule > < / Chain > Load the new configuration Restart your agent to pick up the new configuration by executing the following command on your VM instance: sudo service stackdriver-agent restart Your user-defined metric information begins to flow into Monitoring.
- The first five components make up the collectd identifier for the metric: Host, Plugin, Plugin-instance, Type, Type-instance, [value] In this example, the metrics you want to send as a user-defined metric have the following values: Component Expected value(s) Host any Plugin curl json Plugin instance nginx my service a or nginx my service b 1 Type gauge Type instance active-connections [value] any value 2 Notes : 1 In the example, this value encodes both the application (Nginx) and the connected service name.

### "Set up Google Cloud Observability for Application Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring](https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These user-defined labels are also included in any incidents created for a policy.
- These labels identify your application and your service or workload: apphub application location apphub application id apphub service id or apphub workload id You can also add user labels to an alerting policy by using the Google Cloud CLI, Terraform, or the Cloud Monitoring API.
- To associate an alerting policy with a workload or service by using the Google Cloud console, do the following: In the Google Cloud console, go to the notifications Alerting page: Go to Alerting If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- Associate an alerting policy with an App Hub application To view your alerting policies from the context of Application Monitoring, you must associate them with a service or workload by adding application-specific labels to the alerting policy.

