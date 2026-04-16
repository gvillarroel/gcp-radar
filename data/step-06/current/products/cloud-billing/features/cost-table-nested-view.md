---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.637Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cost Table Nested View"
feature_slug: "cost-table-nested-view"
latest_feature_date: "2020-03-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-table"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data"
  - "https://docs.cloud.google.com/billing/docs/how-to/bq-examples"
keywords:
  - "cost"
  - "table"
  - "nested"
  - "view"
  - "adds"
  - "tree"
  - "structured"
  - "billing"
---

# Cost Table Nested View

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Adds a nested, tree-structured table view to the Cloud Billing Cost Table report for hierarchical cost analysis.

## Extended Definition

Adds a nested, tree-structured table view to the Cloud Billing Cost Table report for hierarchical cost analysis.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data)
- [https://docs.cloud.google.com/billing/docs/how-to/bq-examples](https://docs.cloud.google.com/billing/docs/how-to/bq-examples)

## Supporting Pages

### "View and download the cost details of your invoice or statement \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Nested table view A nested table view is a hierarchical, tree-structured view of your cost data, grouped by various dimensions that you specify.
- Billing account ID Project ID SKU description Cost type Cost 123456-ABCDEF-123456 example-project N1 Predefined Instance Core Usage $60 123456-ABCDEF-123456 test-project N1 Predefined Instance Core Usage $40 123456-ABCDEF-123456 0 State sales tax (10.0%) Tax $10 For costs recorded after September 1, 2020, the $10 tax total is broken out to attribute $6 for example-project , and $4 for test-project : Billing account ID Project ID SKU description Cost type Cost 123456-ABCDEF-123456 example-project N1 Predefined Instance Core Usage $60 123456-ABCDEF-123456 example-project State sales tax (10.0%) Tax $6 123456-ABCDEF-123456 test-project N1 Predefined Instance Core Usage $40 123456-ABCDEF-123456 test-project State sales tax (10.0%) Tax $4 Viewing project-level taxes in the nested table view To view your tax costs by project in the nested table view , you must use or configure a Group by option with Project as the first grouping dimension.
- To gain this permission, ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Viewer Billing Account Costs Manager Billing Account Administrator For more information about billing permissions, see: Overview of Cloud Billing access control Create custom roles for Cloud Billing Understanding predefined IAM roles for Cloud Billing Access the report To view the Cost table report for your Cloud Billing account: In the Google Cloud console, go to your Cloud Billing account.
- Permissions required to access the Cost table report To view the Cost table report for your Cloud Billing account, you need a role that includes the following permission on your Cloud Billing account: billing.accounts.getSpendingInformation to view costs and usage for a billing account.

### "Structure of pricing data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data)
- Source ID: `site-docs-root-2`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- FROM my - billing - admin - project . my billing dataset . cloud pricing export as sku pricing , UNNEST ( sku pricing . list price . tiered rates ) as tier WHERE DATE ( PARTITIONTIME ) = "2020-07-20" AND sku . id = "2DA5-55D3-E679" ; Query results: Row sku id sku description service id service description pricing unit quantity start usage amount usd amount account currency amount 1 2DA5-55D3-E679 Requests 152E-C115-5142 Cloud Run 1000000.0 0.0 0.0 0.0 2 2DA5-55D3-E679 Requests 152E-C115-5142 Cloud Run 1000000.0 2000000.0 0.4 0.4 Related topics Topics related to exported Cloud Billing data Set up Cloud Billing data export to BigQuery Example queries for Cloud Billing data export to BigQuery Visualize spend over time with Looker Studio Cost and pricing reports available in the Google Cloud console View your Cloud Billing reports and cost trends View and download the cost details of your invoice or statement View and download prices for Google's cloud services Understand your savings with cost breakdown reports Analyze the effectiveness of your committed use discounts View your cost and payment history Previous arrow back Structure of Detailed data export Next Structure of CUD metadata export arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- FROM my - billing - admin - project . my billing dataset . cloud pricing export WHERE DATE ( PARTITIONTIME ) = "2020-07-20" AND sku . id = "2DA5-55D3-E679" ; Query results: Row sku id sku description service id service description aggregation info. aggregation level aggregation info. aggregation interval tiered rates. pricing unit quantity tiered rates. start usage amount tiered rates. usd amount tiered rates. account currency amount 1 2DA5-55D3-E679 Requests 152E-C115-5142 Cloud Run ACCOUNT MONTHLY 1000000 0 0 0 1000000 2000000 0.4 0.4 Example 2: Returns unnested data joined with the same table This example queries a single SKU to return the list price .
- FROM my - billing - admin - project . my billing dataset . cloud pricing export WHERE DATE ( PARTITIONTIME ) = "2020-07-20" AND sku . id = "2DA5-55D3-E679" ; Query results: Row sku id sku description service id service description aggregation info. aggregation level aggregation info. aggregation interval tiered rates. pricing unit quantity tiered rates. start usage amount tiered rates. usd amount tiered rates. account currency amount 1 2DA5-55D3-E679 Requests 152E-C115-5142 Cloud Run ACCOUNT MONTHLY 1000000 0 0 0 1000000 2000000 0.4 0.4 Example 2: Returns unnested data joined with the same table This example queries a single SKU to return the list price .
- Get list prices for a specific SKU Get list prices for a specific SKU, and include service description Example 1: Returns nested data Example 2: Returns unnested data joined with the same table Use product taxonomy and geo taxonomy to query SKUs Get the product taxonomy of a SKU Get all SKUs for a specific product taxonomy Get all SKUs for a specific geo taxonomy and product taxonomy This section provides different examples of how to query the Cloud Billing pricing data exported to BigQuery.

### Example queries for Cloud Billing data export \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/bq-examples](https://docs.cloud.google.com/billing/docs/how-to/bq-examples)
- Source ID: `site-docs-root-2`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Standard usage cost data Detailed usage cost data Pricing data Standard usage cost query examples Return the total costs on an invoice Example 1: Sum of all costs, per invoice Example 2: Return details by cost type, per invoice month Query examples with labels Query every row without grouping Group by label map as a JSON string Group by label value for a specific key Group by key/value pairs Committed use discount queries Viewing commitment fees Viewing commitment credits Use resource hierarchy filters to review ancestry Example 1: Filter by resource name Example 2: Filter by display name Query examples with tags Calculate costs by invoice month with tags View costs of untagged resources Additional query examples Query costs and credits by project for a specified invoice month Query costs to view corrections or late-monetized usage for a specified invoice month Query cost details to view corrections or late-monetized usage by service for a specified invoice month Detailed usage cost query examples Return the resource-level costs on an invoice Sum costs for each resource, per invoice Return details by cost type for each resource, per invoice month Get breakdown of Google Kubernetes Engine (GKE) cluster costs Filter GKE cost breakdown Pricing data query examples Get list prices for a specific SKU Get list prices for a specific SKU, and include service description Example 1: Returns nested data Example 2: Returns unnested data joined with the same table Use product taxonomy and geo taxonomy to query SKUs Get the product taxonomy of a SKU Get all SKUs for a specific product taxonomy Get all SKUs for a specific geo taxonomy and product taxonomy Join pricing data with detailed usage cost data Standard usage cost query examples This section provides examples of how to query the Cloud Billing standard usage cost data exported to BigQuery.
- Tags ) AS tag WHERE tag . key = 'gcp-product' AND tag . value = 'vertex ai' AND tag . inherited = TRUE ) AND sl reservation . value = ' RESERVATION NAME ' AND sl project id . value = ' PROJECT ID ' GROUP BY consumer project id , sku description , usage unit ORDER BY consumer project id , sku description , usage unit ; Sample results The following output shows the contribution of each project to total usage costs while consuming the reservation. consumer project id sku description usage unit total usage amount project1 N1 Predefined Instance Core running in Americas seconds 4221572 project1 N1 Predefined Instance Ram running in Americas byte-seconds 16998309356466500 project1 Nvidia Tesla T4 GPU running in Americas seconds 1057391 project2 N1 Predefined Instance Core running in Americas seconds 3996192 project2 N1 Predefined Instance Ram running in Americas byte-seconds 16009292257431300 project2 Nvidia Tesla T4 GPU running in Americas seconds 993985 Related topics Topics related to exported Cloud Billing data Set up Cloud Billing data export to BigQuery Understanding the Cloud Billing data tables in BigQuery Visualize spend over time with Looker Studio Cost and pricing reports available in the Google Cloud console View your Cloud Billing reports and cost trends View and download the cost details of your invoice or statement View and download prices for Google's cloud services Understand your savings with cost breakdown reports Analyze the effectiveness of your committed use discounts View your cost and payment history Previous arrow back Structure of CUD metadata export Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Common values used in the example detailed cost queries The query examples in this section use the following value for Table name : project-ID.dataset.gcp billing export resource v1 XXXXXX-XXXXXX-XXXXXX Return the resource-level costs on an invoice The following queries demonstrate two ways of viewing resource-level cost and credit values on an invoice using exported billing data.
- Common values used in the example standard cost queries The query examples in this section use the following value for Table name : project-ID.dataset.gcp billing export v1 XXXXXX-XXXXXX-XXXXXX Return the total costs on an invoice The following queries demonstrate two ways of viewing cost and credit values using exported billing data.

