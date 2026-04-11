---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:19:31.132Z"
product_name: "Channel Services"
product_slug: "channel-services"
feature_name: "Channel Services Rebilling BigQuery Export Dataset Location Support"
feature_slug: "channel-services-rebilling-bigquery-export-dataset-location-support"
latest_feature_date: "2023-09-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery"
  - "https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries"
  - "https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview"
keywords:
  - "location"
  - "datasets"
  - "allows"
  - "dataset"
  - "rebilling"
  - "export"
  - "services"
  - "channel"
---

# Channel Services Rebilling BigQuery Export Dataset Location Support

Product: Channel Services
Coverage: LOW

## Step 02 Summary

Allows Channel Services rebilling BigQuery datasets to be created in all supported BigQuery locations, with multi-region datasets recommended for broader export coverage.

## Extended Definition

Allows Channel Services rebilling BigQuery datasets to be created in all supported BigQuery locations, with multi-region datasets recommended for broader export coverage.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery](https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery)
- [https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries](https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries)
- [https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview](https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview)

## Supporting Pages

### Export Channel Services data to BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery](https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery)
- Source ID: `site-docs-reference`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When you enable the Channel Services data export for the first time per data source (Google Cloud or Google Workspace): If you configure your BigQuery dataset to use a multi-region location , BigQuery export data is available for each selected data source from the start of the previous month.
- However, data from a Channel Services export is compatible with Cloud Billing exports, and you can use queries to join both datasets for analysis.
- Permissions required for exports To enable and configure Channel Services exports, you need the following roles: For BigQuery, if you created the target dataset, you need BigQuery User for the project that contains the dataset.
- For continuous data export, when you set up permissions for users, make sure that the service account cloud-channel-billing-reporting-rebilling@system.gserviceaccount.com always has full editor access on the export dataset.

### "BigQuery export query examples \_|\_ Channel Services \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries](https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- DATASET NAME . reseller billing detailed export v1 WHERE export time BETWEEN TIMESTAMP ( START DATE ) AND TIMESTAMP ( END DATE ) AND payer billing account id = ' EXTERNAL BILLING ACCOUNT ID ' AND invoice . month = ' INVOICE MONTH ' GROUP BY domain name , customer id , sku name , sku id , description , order name , start date , end date , po number HAVING amount != 0 ORDER BY domain name , order name , start date , end date ; Other columns of interest to add to SELECT and GROUP BY clauses: billing account id : Represents the Customer Cloud Identity ID. customer name : Represents the customer resource which can be used in API calls. channel partner name : (For distributors) Represents the channel partner. entitlement name : Resource name of the Entitlement in Channel Services. customer correlation id : A Customer Relationship Management (CRM) ID that you can define for a customer. usage.amount : For Google Workspace seat-based usage, this indicates paid seats.
- DATASET NAME . reseller billing detailed export v1 WHERE export time BETWEEN TIMESTAMP ( START DATE ) AND TIMESTAMP ( END DATE ) GROUP BY channel partner name , payer billing account id , currency , invoice . month ORDER BY channel partner name , payer billing account id , currency , invoice . month ; Sum of costs not assigned to a customer You can use this query to summarize costs not linked to a Channel Services customer, but that may represent usage billable to other customers.
- DATASET NAME .reseller billing detailed export v1 To let other users view a Channel Services export, you must apply the correct permissions .
- This page provides examples of how to query Channel Services data exported to a BigQuery dataset.

### Rebilling overview \_|\_ Channel Services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview](https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Rebilling consists of two main features: Repricing configurations BigQuery exports BigQuery exports You can export a comprehensive report of your customers' billing usage and cost data to a BigQuery dataset that you own.
- Optimized queries : Channel Services data exports use the payer billing account id as the clustering column, so queries for one parent billing account are optimized to reduce the cost of querying data data.
- Channel Services-specific columns : Channel Services data exports contain additional columns that map to Partner Sales Console entities, such as resource names of customers and entitlements, or CRM IDs.
- Compatible with Cloud Billing data exports : The Channel Services data export table schema is backward compatible with Cloud Billing Detailed data export , so you can migrate your existing data exports.

