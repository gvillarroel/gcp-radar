---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.164Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "AWS Account Monitoring"
feature_slug: "aws-account-monitoring"
latest_feature_date: "2016-03-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
  - "https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting"
keywords:
  - "aws"
  - "account"
  - "monitoring"
  - "can"
  - "monitor"
  - "amazon"
  - "web"
  - "services"
---

# AWS Account Monitoring

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Monitoring can monitor Amazon Web Services accounts alongside Google Cloud projects.

## Extended Definition

Monitoring can monitor Amazon Web Services accounts alongside Google Cloud projects.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- [https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting](https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Feature You can now monitor Amazon Web Services (AWS) accounts alongside your Google Cloud projects.
- June 06, 2016 Change Metrics List is now a comprehensive list of all metrics available in Monitoring, including metrics gathered by the monitoring agent and metrics from Amazon Web Services.
- Issue When installing the monitoring agent on an Amazon EC2 VM instance running Microsoft Windows, ignore the following error message if you get it only once after the service is started: "StackdriverAgent is running on an AWS instance but project ID is not set." March 17, 2016 Feature The Monitoring API v3 is now available.
- February 17, 2023 Feature You can now install pre-defined alerting policies for services integrated with Cloud Monitoring from the Monitoring Integrations page and from the Observability tab on the pages for Kubernetes Engine clusters and workloads.

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud Monitoring services Cloud Monitoring provides different services that you can use to understand the health and performance of your applications, and of the other Google Cloud services that you use.
- Proactive monitoring and validation To test the availability, consistency, and performance of your services, applications, web pages, and APIs, create synthetic monitors .
- Query languages for Cloud Monitoring When you create an alerting policy or a chart, you must provide a query that describes the data that you want to monitor or chart: Google Cloud console: You can build your query by making selections from menus, or you can write a query.
- Monitor metrics for multiple Google Cloud projects To view and monitor the time-series data for multiple Google Cloud projects and AWS accounts through a single interface, configure a multi-project metrics scope .

### Troubleshoot the Monitoring agent \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting](https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting)
- Source ID: `site-iam-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Generating new credentials If the credentials aren't valid, take the following steps: For each connected project containing instances that need to be authorized with a private key — each project containing Compute Engine instances that were created without including the access scope https://www.googleapis.com/auth/monitoring.write — create a service account and generate a private key, if they don't already exist.
- For example, on Linux, you can create the following crontab entry to check the agent status every 5 minutes: /5 /bin/pidof stackdriver-collectd >/dev/null 2>&1 /usr/sbin/service stackdriver-agent restart >/dev/null 2>&1 Known issues The following sections describe issues known to the Monitoring agent.
- Reinstalling the Monitoring agent Installing the most recent version of the agent can solve many problems: If you are sure that the problem isn't related to credentials, you can skip ahead to Installing on Linux and Windows .
- Caution: Other services besides Cloud Monitoring might use private-key credentials on your instance.

