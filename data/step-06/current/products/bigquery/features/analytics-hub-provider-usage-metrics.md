---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.463Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Analytics Hub Provider Usage Metrics"
feature_slug: "analytics-hub-provider-usage-metrics"
latest_feature_date: "2024-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-monitor-listings"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings"
keywords:
  - "analytics"
  - "hub"
  - "provider"
  - "usage"
  - "metrics"
  - "reports"
  - "jobs"
  - "subscriber"
---

# Analytics Hub Provider Usage Metrics

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Analytics Hub Provider Usage Metrics reports jobs, subscriber consumption details, and rows and bytes processed for shared data.

## Extended Definition

Analytics Hub Provider Usage Metrics reports jobs, subscriber consumption details, and rows and bytes processed for shared data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-monitor-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-monitor-listings)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction](https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)

## Supporting Pages

### Monitor listings \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-monitor-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-monitor-listings)
- Source ID: `site-docs-root-2`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SHARED DATASET USAGE The result is similar to the following: +------------+ num jobs +------------+ 1000 +------------+ To check the total jobs run by subscribers, use the WHERE clause: For datasets, use WHERE dataset id = "..." .
- Use Sharing To get usage metrics for your shared data using Sharing, follow these steps: In the Google Cloud console, go to the Sharing (Analytics Hub) page.
- Use INFORMATION SCHEMA view Data providers can track how subscribers use datasets by querying the INFORMATION SCHEMA.SHARED DATASET USAGE view .
- Go to Sharing (Analytics Hub) Click the name of the data exchange that contains the listing to view its usage metrics.

### Introduction to BigQuery sharing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction](https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction)
- Source ID: `site-docs-reference-5`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- Publishers Publishers create the following listings for their datasets in the Forecasting project or in a different project: Listing A: Demand Forecast Dataset 1 Listing B: Demand Forecast Dataset 2 Listing C: Demand Forecast Dataset 3 As a data provider, you can track the usage metrics for your shared dataset.
- The usage metrics include the following details: Jobs that run against your shared dataset.
- Usage metrics for consumption are supported only for usage with BigQuery jobs .
- If the listing is of a commercial resource, subscribers can either request access to the listing directly from the data provider, or they can browse and purchase Google Cloud Marketplace-integrated commercial listings .

### Manage listings \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)
- Source ID: `site-docs-reference-5`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- To enable the Analytics Hub API, you need the following Identity and Access Management (IAM) permissions: serviceUsage.services.get serviceUsage.services.list serviceUsage.services.enable The following predefined IAM role includes the permissions that you need to enable the Analytics Hub API: Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) To enable the Analytics Hub API, select one of the following options: Console Go to the Analytics Hub API page and enable the Analytics Hub API for your Google Cloud project.
- Use the following format to add members: user:test-user@gmail.com group:admins@example.com serviceAccount:test123@example.domain.com domain:example.domain.com For example, to grant the roles/analyticshub.subscriber role to group:subscribers@example.com , add the following binding to the policy: { "members": [ "group:subscribers@example.com" ], "role":"roles/analyticshub.subscriber" } Write the updated policy by using the projects.locations.dataExchanges.listings.setIamPolicy method .
- For read operations, the provider can authorize either the linked shared stored procedure (in the subscriber's linked dataset) or their original shared stored procedure (in the provider's dataset) and attach an IAM role to any of the provider's resources that are accessed by the linked stored procedure.
- Note: After you grant licenses to users to access non-Cloud Marketplace-integrated commercial listings, you can either create a private listing for those users, or grant those users the Analytics Hub Subscriber ( roles/analyticshub.subscriber ) role for your commercial listing.

