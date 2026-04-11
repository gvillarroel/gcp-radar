---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:19:31.146Z"
product_name: "Channel Services"
product_slug: "channel-services"
feature_name: "Rebilling BigQuery Export Schema Enhancements"
feature_slug: "rebilling-bigquery-export-schema-enhancements"
latest_feature_date: "2022-12-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery"
  - "https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview"
  - "https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries"
keywords:
  - "enhancements"
  - "extends"
  - "schema"
  - "exports"
  - "rebilling"
  - "export"
  - "with"
  - "to"
---

# Rebilling BigQuery Export Schema Enhancements

Product: Channel Services
Coverage: LOW

## Step 02 Summary

Extends rebilling data exports to BigQuery with CustomerRepricingConfigName, ChannelPartnerRepricingName, and Tags columns.

## Extended Definition

Extends rebilling data exports to BigQuery with CustomerRepricingConfigName, ChannelPartnerRepricingName, and Tags columns.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery](https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery)
- [https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview](https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview)
- [https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries](https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries)

## Supporting Pages

### Export Channel Services data to BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery](https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery)
- Source ID: `site-docs-reference`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following columns or fields don't apply to offline order billing exports: project labels system labels location resource credits entitlement name channel partner name channel partner cost customer name customer cost cost at list customer repricing config name channel partner repricing config name tags price.effective price price.tier start amount price.list price price.effective price default price.list price consumption model transaction type seller name consumption model Other notes about Google Workspace export There are several special behaviors with Google Workspace exports: Google Workspace data doesn't contain the reseller's own usage.
- The service account is: cloud-channel-billing-reporting-rebilling@system.gserviceaccount.com This service account requires the predefined role: roles/bigquery.dataEditor to allow exports.
- However, data from a Channel Services export is compatible with Cloud Billing exports, and you can use queries to join both datasets for analysis.
- For example, the base unit for standard storage is byte-seconds . usage.amount in pricing unit Numeric The quantity of usage.pricing unit usage. usage.pricing unit String The units for measuring resource usage. credits Struct, Repeated Contains fields that describe the structure and value of credits. credits.id String If populated, indicates that a credit is associated with the product SKU. credits.full name String The name of the credit associated with the product SKU. credits.type String This field describes the purpose or origin of the credits.id . credits.name String A description of the credit applied to the usage. credits.amount Numeric The amount of the credit applied to the usage. credits.channel partner amount Numeric The amount of the credit applied to the usage, after rebilling markups and discounts.

### Rebilling overview \_|\_ Channel Services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview](https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Rebilling consists of two main features: Repricing configurations BigQuery exports BigQuery exports You can export a comprehensive report of your customers' billing usage and cost data to a BigQuery dataset that you own.
- Compatible with Cloud Billing data exports : The Channel Services data export table schema is backward compatible with Cloud Billing Detailed data export , so you can migrate your existing data exports.
- Since this report includes customer and channel partner costs, along with customer metadata and cost configured using Repricing configurations , you can use the exported data to improve your internal billing processes and financial analytics.
- Optimized queries : Channel Services data exports use the payer billing account id as the clustering column, so queries for one parent billing account are optimized to reduce the cost of querying data data.

### "BigQuery export query examples \_|\_ Channel Services \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries](https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- DATASET NAME . reseller billing detailed export v1 WHERE export time BETWEEN TIMESTAMP ( START DATE ) AND TIMESTAMP ( END DATE ) GROUP BY customer name , billing account id , payer billing account id , currency , invoice . month ORDER BY customer name , billing account id , payer billing account id , currency , invoice . month ; Sum of customer costs by Cloud Billing subaccount, as shown to the subaccount owner This query shows you how the data cost numbers map with what a resold customer (or you as the partner) sees when they open the Google Cloud console for their subaccount.
- DATASET NAME . reseller billing detailed export v1 WHERE export time BETWEEN TIMESTAMP ( START DATE ) AND TIMESTAMP ( END DATE ) AND customer name IS NULL GROUP BY billing account id , payer billing account id , currency , invoice . month ORDER BY billing account id , payer billing account id , currency , invoice . month ; Google Workspace data view similar to invoice CSV If you are a Google Workspace reseller, you may get a view of the Google Workspace billing data with similar columns as the invoice CSV files.
- For additional troubleshooting tips, see Troubleshoot issues with BigQuery exports .
- DATASET NAME . reseller billing detailed export v1 WHERE export time BETWEEN TIMESTAMP ( START DATE ) AND TIMESTAMP ( END DATE ) AND payer billing account id = ' EXTERNAL BILLING ACCOUNT ID ' AND invoice . month = ' INVOICE MONTH ' GROUP BY domain name , customer id , sku name , sku id , description , order name , start date , end date , po number HAVING amount != 0 ORDER BY domain name , order name , start date , end date ; Other columns of interest to add to SELECT and GROUP BY clauses: billing account id : Represents the Customer Cloud Identity ID. customer name : Represents the customer resource which can be used in API calls. channel partner name : (For distributors) Represents the channel partner. entitlement name : Resource name of the Entitlement in Channel Services. customer correlation id : A Customer Relationship Management (CRM) ID that you can define for a customer. usage.amount : For Google Workspace seat-based usage, this indicates paid seats.

