---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.749Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Data Transfer Service VPC Service Controls integration"
feature_slug: "bigquery-data-transfer-service-vpc-service-controls-integration"
latest_feature_date: "2020-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-vpc-sc-rules"
  - "https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery"
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
keywords:
  - "bigquery"
  - "transfer"
  - "vpc"
  - "controls"
  - "integration"
  - "can"
  - "protected"
  - "perimeters"
---

# BigQuery Data Transfer Service VPC Service Controls integration

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service can be protected by VPC Service Controls service perimeters.

## Extended Definition

BigQuery Data Transfer Service can be protected by VPC Service Controls service perimeters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-vpc-sc-rules](https://docs.cloud.google.com/bigquery/docs/analytics-hub-vpc-sc-rules)
- [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)

## Supporting Pages

### "Best practices for multi-tenant workloads on BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- Source ID: `site-docs-reference-5`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Configure VPC Service Controls perimeters In this configuration, we recommend VPC Service Controls perimeters to share data externally and to prevent accidental exposure of BigQuery datasets outside of your internal projects.
- Configure VPC Service Controls perimeters In this configuration, we recommend VPC Service Controls perimeters to prevent accidental exposure of BigQuery datasets outside of your Google Cloud organization.
- Configure VPC Service Controls perimeters In this configuration, we recommend VPC Service Controls perimeters to prevent accidental exposure of BigQuery datasets outside of your Google Cloud organization.
- Configure VPC Service Controls perimeters In this configuration, we recommend VPC Service Controls perimeters to prevent accidental exposure of tenant datasets outside of your Google Cloud organization and to prevent unauthorized data joining within the organization.

### Sharing VPC Service Controls rules \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-vpc-sc-rules](https://docs.cloud.google.com/bigquery/docs/analytics-hub-vpc-sc-rules)
- Source ID: `site-docs-root-2`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: ingressTo: operations: - methodSelectors: - method: ' ' serviceName: analyticshub.googleapis.com resources: - projects/ PROJECT ID If BigQuery resources are also protected by service perimeters, you must allow ingress and egress rules for the BigQuery service.
- Sharing VPC Service Controls rules This document describes the ingress and egress rules that you need to let publishers and subscribers in BigQuery sharing (formerly Analytics Hub) access data from projects that have VPC Service Controls perimeters.
- When you create a listing in a data exchange that is in a different project than the shared dataset, you must add the following ingress and egress rules to let BigQuery sharing publishers create a listing: Project Rule Project R Egress rule for project E Egress rule for project S Project E (data exchange) Egress rule for project S Ingress rule for project R Project S (shared dataset) Egress rule for project E Ingress rule for project R Subscribe to a listing In the following diagram, the projects that contain the listing and the linked dataset for that listing are in different service perimeters: Figure 3.
- As a BigQuery sharing subscriber, when you subscribe to a listing in a data exchange that is in a different project than your project, you must add the following ingress and egress rules: Project Rule Project R Egress rule for project E Egress rule for project L Project E (listing) Egress rule for project L Ingress rule for project R Project L (linked dataset) Egress rule for project E Ingress rule for project R Query tables in a linked dataset In the following diagram, the caller project and the project that contain the linked dataset are in different service perimeters: Figure 4.

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Consider the following query as an example: SELECT FROM bigquery dataset . bigquery table AS clients WHERE clients . sales rep IN ( SELECT id FROM aws dataset . aws table1 AS employees INNER JOIN aws dataset . aws table2 AS active employees ON employees . id = active employees . id WHERE employees . level > 3 ); This example has two transfers: one from an employees table (with a level filter) and one from an active employees table.
- Be aware that if you explicitly specify a BigQuery region and your query only contains BigLake tables, then your query is run as a cross-cloud query and incurs data transfer costs.
- However, BigQuery helps reduce these costs by only transferring columns and rows in the BigLake table that are referenced in the query, rather than the entire table.
- Integrations BigLake tables are accessible from a number of other BigQuery features and gcloud CLI services, including the following, highlighted services.

