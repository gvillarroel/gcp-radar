---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:20:51.426Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "Debug Sequence View v2"
feature_slug: "debug-sequence-view-v2"
latest_feature_date: "2025-02-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines"
keywords:
  - "experience"
  - "sequence"
  - "debugging"
  - "redesigned"
  - "provides"
  - "debug"
  - "view"
---

# Debug Sequence View v2

Product: Apigee UI
Coverage: MEDIUM

## Step 02 Summary

Debug Sequence View v2 provides a redesigned debugging experience with a horizontal sequence diagram, search, and improved transaction visualization.

## Extended Definition

Debug Sequence View v2 provides a redesigned debugging experience with a horizontal sequence diagram, search, and improved transaction visualization.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)

## Supporting Pages

### View message data with the Debug view \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application development Apigee Guides Send feedback View message data with the Debug view Stay organized with collections Save and categorize content based on your preferences.
- View message data The Debug view in the Apigee Proxy Editor lets you view headers, variables, objects, and other details such as response time in the API proxy request and response flow.
- To use the Debug view in the Apigee UI to see what happens when the SpikeArrest policy rate is exceeded: In the Google Cloud console, go to the Proxy development > API Proxies page.
- A debug session is deleted within 24 hours of the time it is completed, so if you want to view the session after that time, you need to download it before then.

### UI overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Whether you are a Pay-as-you-go or Subscription customer, this view provides you with a snapshot of key resource usage, as well as shortcuts to other monitoring and identity management resources for your organization, including: Cloud Monitoring Cloud Billing Identity and Access Management Explore Apigee API management features From the main navigation menu, you can explore the range of Apigee API management features available for your organization, as described in the table below: Main navigation menu Purpose Proxy development Develop and deploy API proxies .
- The following table maps each Apigee UI feature page to its current location in the Apigee UI: Feature Apigee UI Proxies Proxy development > API proxies Go to API proxies Sharedflows Proxy development > Sharedflows Go to Sharedflows Offline debug Proxy development > Offline debug Go to Offline debug API products Distribution > API products Go to API products Portals Distribution > Portals Go to Portals Monetization Distribution > Monetization Go to Monetization Developers Distribution > Developers Go to Developers Apps Distribution > Apps Go to Apps API monitoring Proxy development > API monitoring Go to API monitoring API metrics Analytics > API metrics Go to API metrics Developer Engagement Analytics > Developer analysis Go to Developer analysis Traffic Composition Analytics > Developer analysis Go to Developer analysis Devices Analytics > End user analysis Go to End user analysis Geomap Analytics > End user analysis Go to End user analysis Custom reports Analytics > Custom reports Go to Custom reports Instances Management > Instances Go to Instances Data collectors Management > Data collectors Go to Data collectors Environments Management > Environments Go to Environments Endpoint attachments Management > Endpoint attachments Go to Endpoint attachments Roles Identity and Access Management (IAM) > Roles Go to Roles Users IAM Go to IAM Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Apigee API management From the Overview page, you can: Get started as a new Apigee user Test your Apigee runtime View key resource usage metrics Explore Apigee API management features Get started as a new Apigee user If you just are new to Apigee, you can begin your API management journey with quickstart learning options launched from the Overview page: Begin by deploying your first proxy : Watch a video tutorial that walks you through the steps required to create and deploy an API proxy.
- You can use the Apigee UI to develop and deploy your API proxies, trace their execution, view API analytics, and manage other aspects of your Apigee organization and its environments.

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Version 1.10 keyboard arrow down Supported versions: v1.16 (latest) v1.15 v1.14 List of supported versions Unsupported versions: v1.13 v1.12 v1.11 v1.10 v1.9 v1.8 v1.7 v1.6 v1.5 v1.4 v1.3 v1.2 v1.1 Overview This guide provides guidelines on what to monitor and how to monitor an Apigee Hybrid deployment.
- However, a request rate chart can provide useful information about any unusual abnormal traffic spikes or dips during debugging any issue related to traffic (read, write, response code, etc).
- For example: In production, trigger an event notification if the read clientrequest latency value of 99thPercentile is 5 seconds for 3 minutes Cloud Monitoring dashboard MQL query : fetch k8s container metric 'apigee.googleapis.com/cassandra/clientrequest latency' filter (metric.scope == 'Read' && metric.unit == '99thPercentile') group by 1m, [value clientrequest latency mean: mean(value.clientrequest latency)] every 1m group by [metric.scope, metric.unit], [value clientrequest latency mean aggregate: aggregate(value clientrequest latency mean)] Cassandra write request latency Use case : The cassandra/clientrequest latency (with scope=Write) SLI metric provides Cassandra services write request latency (at 99th percentile, 95th percentile, or 75th percentile).
- Alert threshold None Cloud Monitoring dashboard MQL query : fetch k8s container metric 'apigee.googleapis.com/cassandra/clientrequest latency' filter (metric.scope == 'Write' && metric.unit == 'OneMinuteRate') group by 1m, [value clientrequest latency mean: mean(value.clientrequest latency)] every 1m group by [metric.scope, metric.unit], [value clientrequest latency mean aggregate: aggregate(value clientrequest latency mean)] Cassandra read request latency Use case : The cassandra/clientrequest latency (with scope=Read) SLI metric provides Cassandra services read request latency (at 99th percentile, 95th percentile, or 75th percentile).

