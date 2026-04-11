---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:19:31.130Z"
product_name: "Channel Services"
product_slug: "channel-services"
feature_name: "Channel Services BigQuery Rebilling Export"
feature_slug: "channel-services-bigquery-rebilling-export"
latest_feature_date: "2024-03-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview"
  - "https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery"
  - "https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries"
keywords:
  - "capability"
  - "partners"
  - "so"
  - "rebilling"
  - "export"
  - "services"
  - "channel"
  - "adds"
---

# Channel Services BigQuery Rebilling Export

Product: Channel Services
Coverage: LOW

## Step 02 Summary

Adds a BigQuery Export (Rebilling) capability so partners can programmatically access Workspace billing data, including Channel Service identifiers and configured CRM IDs, in a BigQuery dataset.

## Extended Definition

Adds a BigQuery Export (Rebilling) capability so partners can programmatically access Workspace billing data, including Channel Service identifiers and configured CRM IDs, in a BigQuery dataset.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview](https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview)
- [https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery](https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery)
- [https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries](https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries)

## Supporting Pages

### Rebilling overview \_|\_ Channel Services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview](https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview)
- Source ID: `site-docs-reference`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Optimized queries : Channel Services data exports use the payer billing account id as the clustering column, so queries for one parent billing account are optimized to reduce the cost of querying data data.
- Channel Services-specific columns : Channel Services data exports contain additional columns that map to Partner Sales Console entities, such as resource names of customers and entitlements, or CRM IDs.
- Compatible with Cloud Billing data exports : The Channel Services data export table schema is backward compatible with Cloud Billing Detailed data export , so you can migrate your existing data exports.
- Migrating to Channel Services data export We brought improvements to the data export experience for partners originally integrated with Cloud Billing data export.

### Export Channel Services data to BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery](https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery)
- Source ID: `site-docs-reference`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Region description Region name Iowa us-central1 Las Vegas us-west4 Los Angeles us-west2 Montréal northamerica-northeast1 Northern Virginia us-east4 Oregon us-west1 Salt Lake City us-west3 São Paulo southamerica-east1 South Carolina us-east1 The following table lists the regions in Asia Pacific where Channel Services BigQuery data export is supported.
- Region description Region name Hong Kong asia-east2 Jakarta asia-southeast2 Mumbai asia-south1 Osaka asia-northeast2 Seoul asia-northeast3 Singapore asia-southeast1 Sydney australia-southeast1 Taiwan asia-east1 Tokyo asia-northeast1 The following table lists the regions in Europe where Channel Services BigQuery data export is supported.
- When you enable the Channel Services data export for the first time per data source (Google Cloud or Google Workspace): If you configure your BigQuery dataset to use a multi-region location , BigQuery export data is available for each selected data source from the start of the previous month.
- This page shows you how to configure a Channel Services export, and also describes the available schema for an export.

### "BigQuery export query examples \_|\_ Channel Services \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries](https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- DATASET NAME . reseller billing detailed export v1 WHERE export time BETWEEN TIMESTAMP ( START DATE ) AND TIMESTAMP ( END DATE ) AND payer billing account id = ' EXTERNAL BILLING ACCOUNT ID ' AND invoice . month = ' INVOICE MONTH ' GROUP BY domain name , customer id , sku name , sku id , description , order name , start date , end date , po number HAVING amount != 0 ORDER BY domain name , order name , start date , end date ; Other columns of interest to add to SELECT and GROUP BY clauses: billing account id : Represents the Customer Cloud Identity ID. customer name : Represents the customer resource which can be used in API calls. channel partner name : (For distributors) Represents the channel partner. entitlement name : Resource name of the Entitlement in Channel Services. customer correlation id : A Customer Relationship Management (CRM) ID that you can define for a customer. usage.amount : For Google Workspace seat-based usage, this indicates paid seats.
- Identifying and accessing the BigQuery table Channel Services exports are set up using the Partner Sales Console .
- DATASET NAME . reseller billing detailed export v1 WHERE export time BETWEEN TIMESTAMP ( START DATE ) AND TIMESTAMP ( END DATE ) GROUP BY channel partner name , payer billing account id , currency , invoice . month ORDER BY channel partner name , payer billing account id , currency , invoice . month ; Sum of costs not assigned to a customer You can use this query to summarize costs not linked to a Channel Services customer, but that may represent usage billable to other customers.
- Home Technology areas Channel Services Guides Send feedback BigQuery export query examples Stay organized with collections Save and categorize content based on your preferences.

