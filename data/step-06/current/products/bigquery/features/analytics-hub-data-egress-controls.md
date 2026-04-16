---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.447Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Analytics Hub data egress controls"
feature_slug: "analytics-hub-data-egress-controls"
latest_feature_date: "2024-06-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-stream-sharing"
keywords:
  - "analytics"
  - "hub"
  - "egress"
  - "controls"
  - "let"
  - "publishers"
  - "restrict"
  - "subscribers"
---

# Analytics Hub data egress controls

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Analytics Hub data egress controls let publishers restrict subscribers from copying or exporting shared data.

## Extended Definition

Analytics Hub data egress controls let publishers restrict subscribers from copying or exporting shared data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction](https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-stream-sharing](https://docs.cloud.google.com/bigquery/docs/analytics-hub-stream-sharing)

## Supporting Pages

### Introduction to BigQuery sharing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction](https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction)
- Source ID: `site-docs-reference-5`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Compliance BigQuery sharing, as part of BigQuery, is compliant with the following compliance programs: ISO 27001 ISO 27017 ISO 27018 SOC 1 SOC 2 SOC 3 PCI Penetration Testing HIPAA HITRUST VPC Service Controls You can set the ingress and egress rules needed to let publishers and subscribers access data from projects that have VPC Service Controls perimeters.
- Data egress options (BigQuery shared datasets only) Data egress options let publishers restrict subscribers from exporting data out of BigQuery linked datasets.
- As an Analytics Hub Admin, you can create data exchanges that enable data sharing, and then give permissions to data publishers and subscribers to access these data exchanges.
- Publishers can enable data egress restriction on a listing, the results of a query, or both.

### Manage listings \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)
- Source ID: `site-docs-reference-5`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- For more information about data egress controls, including restrictions, see Data egress options (BigQuery shared datasets only) .
- For more information about data egress controls, including restrictions, see Data egress options (BigQuery shared datasets only) .
- Use the following format to add members: user:test-user@gmail.com group:admins@example.com serviceAccount:test123@example.domain.com domain:example.domain.com For example, to grant the roles/analyticshub.subscriber role to group:subscribers@example.com , add the following binding to the policy: { "members": [ "group:subscribers@example.com" ], "role":"roles/analyticshub.subscriber" } Write the updated policy by using the projects.locations.dataExchanges.listings.setIamPolicy method .
- To apply data egress restrictions on your shared dataset and query results of your shared dataset, select Disable copy and export of query results , which will automatically set Disable copy and export of shared data as well.

### Stream sharing with Pub/Sub \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-stream-sharing](https://docs.cloud.google.com/bigquery/docs/analytics-hub-stream-sharing)
- Source ID: `site-docs-reference-5`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VPC Service Controls For shared topics from projects with VPC Service Controls perimeters, set the appropriate ingress and egress rules to grant access to shared topic publishers and subscribers.
- Shared topic subscribers are charged for the total bytes read (subscribe throughput) from the linked subscription and for network egress (if applicable).
- Shared topic publishers are charged for the total bytes written (publish throughput) to the shared topic and for network egress (if applicable).
- Architecture The following diagram describes how publishers and subscribers of Pub/Sub resources interact with BigQuery sharing: Figure 1.

