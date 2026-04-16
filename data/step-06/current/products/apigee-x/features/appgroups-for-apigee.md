---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.747Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "AppGroups for Apigee"
feature_slug: "appgroups-for-apigee"
latest_feature_date: "2024-05-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines"
keywords:
  - "reached"
  - "appgroups"
  - "grouping"
  - "availability"
  - "enabling"
  - "hybrid"
  - "apps"
---

# AppGroups for Apigee

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

AppGroups reached general availability for Apigee and Apigee hybrid, enabling grouping of apps managed by the same people.

## Extended Definition

AppGroups reached general availability for Apigee and Apigee hybrid, enabling grouping of apps managed by the same people.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership](https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines)

## Supporting Pages

### Organizing client app ownership \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership](https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership)
- Source ID: `site-iam-reference`
- Final score: 62
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Description Permissions Manage AppGroups and associated apps and keys. apigee.appgroups.list apigee.appgroups.get apigee.appgroups.create apigee.appgroups.update apigee.appgroups.delete Manage AppGroup apps. apigee.appgroupapps.list apigee.appgroupapps.get apigee.appgroupapps.create apigee.appgroupapps.manage apigee.appgroupapps.delete Manage app keys for AppGroups: apigee.appkeys.get apigee.appkeys.create apigee.appkeys.manage apigee.appkeys.delete Manage AppGroup subscriptions and monetization configurations. apigee.appgroupbalances.adjust apigee.appgroupbalances.get apigee.appgroupbalances.update apigee.appgroupmonetizationconfigs.get apigee.appgroupmonetizationconfigs.update apigee.appgroupsubscriptions.create apigee.appgroupsubscriptions.get apigee.appgroupsubscriptions.list apigee.appgroupsubscriptions.update Viewing and managing AppGroups This section shows how to view and manage AppGroups.
- Managing AppGroups using the Apigee APIs Use these APIs to manage AppGroups in your orgs: Activities Link View and manage AppGroups https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups View and manage the apps that belong to AppGroups https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.apps View and manage the app keys associated to AppGroups https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.apps.keys View and manage AppGroup subscriptions to API products https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.subscriptions See also AppGroup subscription management .
- The expected syntax to store this is: [{ "developer":"<developer email>", "roles":[ "<role(s)>" ] }, ... ] Using developer-app association to organize app ownership A less comprehensive and flexible method of tracking app ownership than AppGroups is tracking apps by developer association.
- Note: To manage the Display Name and Notes of an App associated with an AppGroup, you should use the DisplayName and Notes attribute in the organizations.appgroups.apps.update method .

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)
- Source ID: `site-docs-reference-2`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- For example: in production, trigger an event notification if the write clientrequest latency value of 99thPercentile is 5 seconds for 3 minutes Cloud Monitoring dashboard MQL query : fetch k8s container metric 'apigee.googleapis.com/cassandra/clientrequest latency' filter (metric.scope == 'Write' && metric.unit == '99thPercentile') group by 1m, [value clientrequest latency mean: mean(value.clientrequest latency)] every 1m group by [metric.scope, metric.unit], [value clientrequest latency mean aggregate: aggregate(value clientrequest latency mean)] Apigee Control plane Apigee Synchronizer service SLI metrics provide request and response counts and latencies between the Apigee control plane and the Hybrid runtime plane.
- Version 1.10 keyboard arrow down Supported versions: v1.16 (latest) v1.15 v1.14 List of supported versions Unsupported versions: v1.13 v1.12 v1.11 v1.10 v1.9 v1.8 v1.7 v1.6 v1.5 v1.4 v1.3 v1.2 v1.1 Overview This guide provides guidelines on what to monitor and how to monitor an Apigee Hybrid deployment.
- To monitor the Apigee Runtime cluster infrastructure health and availability, a cluster admin can monitor the container and pod common resource use such as CPU, Mem, disk, and container restart counts.
- Hybrid cluster monitoring can be categorized into four different general groups, for example Traffic , Database , Apigee control plane , and infrastructure monitoring.

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/cluster-monitoring-guidelines)
- Source ID: `site-docs-reference-2`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- For example: in production, trigger an event notification if the write clientrequest latency value of 99thPercentile is 5 seconds for 3 minutes Cloud Monitoring dashboard MQL query : fetch k8s container metric 'apigee.googleapis.com/cassandra/clientrequest latency' filter (metric.scope == 'Write' && metric.unit == '99thPercentile') group by 1m, [value clientrequest latency mean: mean(value.clientrequest latency)] every 1m group by [metric.scope, metric.unit], [value clientrequest latency mean aggregate: aggregate(value clientrequest latency mean)] Apigee Control plane Apigee Synchronizer service SLI metrics provide request and response counts and latencies between the Apigee control plane and the Hybrid runtime plane.
- Version 1.11 keyboard arrow down Supported versions: v1.16 (latest) v1.15 v1.14 List of supported versions Unsupported versions: v1.13 v1.12 v1.11 v1.10 v1.9 v1.8 v1.7 v1.6 v1.5 v1.4 v1.3 v1.2 v1.1 Overview This guide provides guidelines on what to monitor and how to monitor an Apigee Hybrid deployment.
- To monitor the Apigee Runtime cluster infrastructure health and availability, a cluster admin can monitor the container and pod common resource use such as CPU, Mem, disk, and container restart counts.
- Hybrid cluster monitoring can be categorized into four different general groups, for example Traffic , Database , Apigee control plane , and infrastructure monitoring.

