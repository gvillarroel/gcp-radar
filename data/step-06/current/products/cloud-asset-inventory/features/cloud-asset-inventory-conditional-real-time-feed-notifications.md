---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.777Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory conditional real-time feed notifications"
feature_slug: "cloud-asset-inventory-conditional-real-time-feed-notifications"
latest_feature_date: "2020-07-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes"
  - "https://docs.cloud.google.com/asset-inventory/docs/monitoring-asset-changes"
  - "https://docs.cloud.google.com/asset-inventory/docs/quota"
keywords:
  - "conditional"
  - "notifications"
  - "real"
  - "time"
  - "feed"
---

# Cloud Asset Inventory conditional real-time feed notifications

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Cloud Asset Inventory now supports configuring feed notifications to match user-defined conditions.

## Extended Definition

Cloud Asset Inventory now supports configuring feed notifications to match user-defined conditions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes](https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes)
- [https://docs.cloud.google.com/asset-inventory/docs/monitoring-asset-changes](https://docs.cloud.google.com/asset-inventory/docs/monitoring-asset-changes)
- [https://docs.cloud.google.com/asset-inventory/docs/quota](https://docs.cloud.google.com/asset-inventory/docs/quota)

## Supporting Pages

### "Monitor asset changes with Pub/Sub \_|\_ Cloud Asset Inventory \_|\_ Google\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes](https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- You can receive real-time notifications about resource and policy changes by creating and subscribing to a feed.
- Logged information Real-time feed log entries contain following types of information: General information shown in most Google Cloud logs, such as severity, project ID, project number, or timestamp.
- Cloud Logging When real-time feeds fail to send resources or IAM policy updates through Pub/Sub, Cloud Asset Inventory logs the error status and message in Logging.
- Real-time feed log fields in jsonPayload , which contains asset name, feed output config, and error status when publishing resource or IAM policy updates.

### "Monitor asset changes with Pub/Sub \_|\_ Cloud Asset Inventory \_|\_ Google\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/monitoring-asset-changes](https://docs.cloud.google.com/asset-inventory/docs/monitoring-asset-changes)
- Source ID: `site-docs-reference-2`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- You can receive real-time notifications about resource and policy changes by creating and subscribing to a feed.
- Logged information Real-time feed log entries contain following types of information: General information shown in most Google Cloud logs, such as severity, project ID, project number, or timestamp.
- Cloud Logging When real-time feeds fail to send resources or IAM policy updates through Pub/Sub, Cloud Asset Inventory logs the error status and message in Logging.
- Real-time feed log fields in jsonPayload , which contains asset name, feed output config, and error status when publishing resource or IAM policy updates.

### Quotas and limits \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/quota](https://docs.cloud.google.com/asset-inventory/docs/quota)
- Source ID: `site-api-reference`
- Final score: 79
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The default quotas are as follows: Quota Value AnalyzeIamPolicy 100 per minute per consumer project 1000 per day per consumer project AnalyzeIamPolicyLongrunning 100 per minute per consumer project 1000 per day per consumer project BatchGetAssetsHistory 100 per minute per consumer project BatchGetEffectiveIamPolicies 100 per minute per consumer project ExportAssets 60 per minute per consumer project 6000 per day per consumer project ListAssets 100 per minute per consumer project Real-time feed APIs 600 per minute per consumer project Saved Query APIs 600 per minute per consumer project SearchAllIamPolicies 400 per minute per consumer project SearchAllResources 400 per minute per consumer project You can use the APIs and services quotas dashboard to view current quotas and usage for your project.
- The limits are as follows: Quota Value BatchGetAssetsHistory 180 per minute per organization 195,000 per day per organization ExportAssets 75 per minute per organization 13,000 per day per organization ListAssets 800 per minute per organization 650,000 per day per organization QueryAssets 20 per minute per organization for requests with a query statement 200 per minute per organization for requests with a job reference Real-time feed APIs 30 per minute per organization SearchAllIamPolicies 3,000 per minute per organization SearchAllResources 1,500 per minute per organization Policy Analyzer expansion limits The Policy Analyzer limits group expansion in the group memberships and resource expansion in the resource hierarchy to the following values.
- Pub/Sub Publisher throughput: Pub/Sub has a publisher throughput limit per region, which affects the combined asset update size Real-time feed can publish to your topic.
- For Real-time feed , if the payload of your asset update exceeds the limit, your asset update is discarded.

