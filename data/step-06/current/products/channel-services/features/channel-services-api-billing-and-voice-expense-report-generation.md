---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:56:59.872Z"
product_name: "Channel Services"
product_slug: "channel-services"
feature_name: "Channel Services API Billing and Voice Expense Report Generation"
feature_slug: "channel-services-api-billing-and-voice-expense-report-generation"
latest_feature_date: "2022-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery"
  - "https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview"
  - "https://docs.cloud.google.com/channel/docs/guides/multiple-billing-account-starter"
keywords:
  - "generation"
  - "expense"
  - "ability"
  - "report"
  - "voice"
  - "billing"
  - "adds"
---

# Channel Services API Billing and Voice Expense Report Generation

Product: Channel Services
Coverage: MEDIUM

## Step 02 Summary

Adds the ability in the Channel Services API to generate reports for Google Cloud billing and Google Voice expense data.

## Extended Definition

Adds the ability in the Channel Services API to generate reports for Google Cloud billing and Google Voice expense data.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery](https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery)
- [https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview](https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview)
- [https://docs.cloud.google.com/channel/docs/guides/multiple-billing-account-starter](https://docs.cloud.google.com/channel/docs/guides/multiple-billing-account-starter)

## Supporting Pages

### Export Channel Services data to BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery](https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- DATASET NAME . reseller billing detailed export v1 WHERE export time BETWEEN TIMESTAMP ( START DATE ) AND TIMESTAMP ( END DATE ) AND payer billing account id IN ( PAYER BILLING ACCOUNT IDS ) GROUP BY billing account id , currency , invoice . month ORDER BY billing account id , currency , invoice . month ; For more information on partitioning, clustering, and best practices, see the following links: Query Partitioned tables Query Clustered tables Optimize query computation Best Practices to control costs in BigQuery Finding payer's billing account ID To find the payer's billing account ID, open the billing accounts page of the Partner Sales Console and click the Partner billing tab.
- For Google Workspace consumptive SKUs (Google Voice and Drive), this is the number of minutes used. usage.pricing unit For Google Cloud, learn more about Cloud Billing Catalog API {: track-type="tasks" class="external" track-name="externalLink" track-metadata-position="body"} For Google Workspace, this is count . credits.id For Google Cloud, this is either an alphanumeric unique identifier ( 12-b34-c56-d78 ), or a description of the credit type ( Committed Usage Discount: CPU ).
- For example: "202101" is the same as January 2021. cost type String The type of cost this line item represents: regular, tax, adjustment, or rounding error. service.id String The ID of the service that the usage is associated with. service.description String The Google service that reported the billing data. sku.id String The SKU ID of the resource used by the service. sku.description String A description of the resource type used by the service.
- Depending on the product family, this may be a billing account or a Cloud Identity. payer billing account id String The ID of your parent billing account. invoice.month String The year and month (YYYYMM) of the invoice that includes the cost line items.

### Rebilling overview \_|\_ Channel Services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview](https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Since this report includes customer and channel partner costs, along with customer metadata and cost configured using Repricing configurations , you can use the exported data to improve your internal billing processes and financial analytics.
- Rebilling consists of two main features: Repricing configurations BigQuery exports BigQuery exports You can export a comprehensive report of your customers' billing usage and cost data to a BigQuery dataset that you own.
- Optimized queries : Channel Services data exports use the payer billing account id as the clustering column, so queries for one parent billing account are optimized to reduce the cost of querying data data.
- Compatible with Cloud Billing data exports : The Channel Services data export table schema is backward compatible with Cloud Billing Detailed data export , so you can migrate your existing data exports.

### "Reseller account with multiple Google Workspace billing account Account\

- URL: [https://docs.cloud.google.com/channel/docs/guides/multiple-billing-account-starter](https://docs.cloud.google.com/channel/docs/guides/multiple-billing-account-starter)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, Google Workspace Business Subscriptions and Google Workspace Chrome Subscriptions must use the same Google Workspace billing account but Google Workspace Voice Subscriptions require a different Google Workspace billing account.
- The Google Workspace and Voice Google Workspace billing account must still have the same currency to satisfy condition 1.
- Otherwise, you must choose a specific Google Workspace Voice billing account, otherwise we will throw an exception.
- Google Workspace Voice SKU type - If there is only one Google Workspace Voice billing account, we default to this.

