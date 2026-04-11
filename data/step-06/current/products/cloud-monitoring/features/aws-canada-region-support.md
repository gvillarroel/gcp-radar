---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.157Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "AWS Canada Region Support"
feature_slug: "aws-canada-region-support"
latest_feature_date: "2017-01-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring"
keywords:
  - "aws"
  - "canada"
  - "region"
  - "monitoring"
  - "supports"
  - "the"
  - "ca"
  - "central"
---

# AWS Canada Region Support

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Monitoring supports the AWS Canada region ca-central-1.

## Extended Definition

Monitoring supports the AWS Canada region ca-central-1.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring](https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring](https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- January 18, 2017 Feature New AWS regions : Monitoring now supports the AWS Canada ( ca-central-1 ) and London ( eu-west-2 ) regions.
- Feature New AWS region : Monitoring now supports the AWS region us-east-2 .
- To learn more, see the following: List registered and discovered services and workloads Application Monitoring overview View application telemetry April 02, 2026 Feature Application Monitoring has added support for the following resources: Vertex AI Workbench GKE Gateway GKE Ingress Layer 7 cross-regional Application Load Balancers Additionally, dashboards for Kubernetes workloads display L4 and L7 traffic metrics, when both are available.
- August 22, 2024 Deprecated Cloud Monitoring has ended support for the ingestion of AWS CloudWatch metrics by using AWS connector projects.

### "Instrument an application for Application Monitoring \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring](https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- The googlemanagedprometheus exporter converts the http.server.request.duration OpenTelemetry metric into a Prometheus metric that has the following properties: Name: prometheus/http server request duration seconds/histogram Metric: prometheus.googleapis.com/http server request duration seconds/histogram Resource types: prometheus target Unit: s Kind: CUMULATIVE Value type: DISTRIBUTION When your Google Cloud project contains the http server request duration seconds metric, then your Application Monitoring dashboards display the traffic level, server error rate and the latency for HTTP requests.
- Verify metric labels To verify that your application is sending Prometheus metrics, to your project, do the following: Verify that your application is sending Prometheus metrics to your project: In the Google Cloud console, go to the leaderboard Metrics explorer page: Go to Metrics explorer If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- Attributes that identify your project and resource location Set the following attributes: cloud.provider : Set to "gcp" . cloud.account.id : Set to your project ID. cloud.availability zone or cloud.region : Set to the zone or region where your resources are located.
- It also describes how to have your application export a metric that is used by Application Monitoring to report the traffic level, server error rate, or the latency for HTTP requests workloads that run on Google Kubernetes Engine.

### "Set up Google Cloud Observability for Application Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring](https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Configure and set the default log scope Do one of the following: If you have an organization-level aggregated sink that routes all log data in your organization to a centralized log bucket, then we recommend the following: Create a log view on the centralized log bucket for your application logs.
- To associate an alerting policy with a workload or service by using the Google Cloud console, do the following: In the Google Cloud console, go to the notifications Alerting page: Go to Alerting If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- These labels identify your application and your service or workload: apphub application location apphub application id apphub service id or apphub workload id You can also add user labels to an alerting policy by using the Google Cloud CLI, Terraform, or the Cloud Monitoring API.
- Associate an alerting policy with an App Hub application To view your alerting policies from the context of Application Monitoring, you must associate them with a service or workload by adding application-specific labels to the alerting policy.

