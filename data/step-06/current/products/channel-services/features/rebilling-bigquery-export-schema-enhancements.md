---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:56:59.869Z"
product_name: "Channel Services"
product_slug: "channel-services"
feature_name: "Rebilling BigQuery Export Schema Enhancements"
feature_slug: "rebilling-bigquery-export-schema-enhancements"
latest_feature_date: "2022-12-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery"
  - "https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview"
  - "https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries"
keywords:
  - "customerrepricingconfigname"
  - "enhancements"
  - "extends"
  - "schema"
  - "exports"
  - "rebilling"
  - "export"
---

# Rebilling BigQuery Export Schema Enhancements

Product: Channel Services
Coverage: MEDIUM

## Step 02 Summary

Extends rebilling data exports to BigQuery with CustomerRepricingConfigName, ChannelPartnerRepricingName, and Tags columns.

## Extended Definition

Extends rebilling data exports to BigQuery with CustomerRepricingConfigName, ChannelPartnerRepricingName, and Tags columns.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery](https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery)
- [https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview](https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview)
- [https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries](https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries)

## Supporting Pages

### Export Channel Services data to BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery](https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery)
- Source ID: `site-docs-reference`
- Final score: 153
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The service account is: cloud-channel-billing-reporting-rebilling@system.gserviceaccount.com This service account requires the predefined role: roles/bigquery.dataEditor to allow exports.
- The following columns or fields don't apply to offline order billing exports: project labels system labels location resource credits entitlement name channel partner name channel partner cost customer name customer cost cost at list customer repricing config name channel partner repricing config name tags price.effective price price.tier start amount price.list price price.effective price default price.list price consumption model transaction type seller name consumption model Other notes about Google Workspace export There are several special behaviors with Google Workspace exports: Google Workspace data doesn't contain the reseller's own usage.
- The following fields don't apply to Google Workspace exports: project labels resource credits adjustmentsInfo customer repricing config name channel partner repricing config name tags price.effective price price.tier start amount price.list price price.effective price default price.list price consumption model transaction type seller name consumption model Columns not applicable to Google Workspace Consumptive SKUs When a column or field doesn't apply to a Product Family, the exported data for this product family contains null in this field.
- The following fields don't apply to Google Workspace exports: service.id sku.id project labels resource customer repricing config name channel partner repricing config name tags price.effective price price.tier start amount transaction type seller name subscription Columns not applicable to offline orders (preview) When a column or field doesn't apply to a Product Family, the exported data for this product family contains null in this column or field.

### Rebilling overview \_|\_ Channel Services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview](https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Rebilling consists of two main features: Repricing configurations BigQuery exports BigQuery exports You can export a comprehensive report of your customers' billing usage and cost data to a BigQuery dataset that you own.
- Compatible with Cloud Billing data exports : The Channel Services data export table schema is backward compatible with Cloud Billing Detailed data export , so you can migrate your existing data exports.
- Optimized queries : Channel Services data exports use the payer billing account id as the clustering column, so queries for one parent billing account are optimized to reduce the cost of querying data data.
- Channel Services-specific columns : Channel Services data exports contain additional columns that map to Partner Sales Console entities, such as resource names of customers and entitlements, or CRM IDs.

### "BigQuery export query examples \_|\_ Channel Services \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries](https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Identifying and accessing the BigQuery table Channel Services exports are set up using the Partner Sales Console .
- For additional troubleshooting tips, see Troubleshoot issues with BigQuery exports .
- DATASET NAME . reseller billing detailed export v1 WHERE export time BETWEEN TIMESTAMP ( START DATE ) AND TIMESTAMP ( END DATE ) AND payer billing account id = ' EXTERNAL BILLING ACCOUNT ID ' AND invoice . month = ' INVOICE MONTH ' GROUP BY domain name , customer id , sku name , sku id , description , order name , start date , end date , po number HAVING amount != 0 ORDER BY domain name , order name , start date , end date ; Other columns of interest to add to SELECT and GROUP BY clauses: billing account id : Represents the Customer Cloud Identity ID. customer name : Represents the customer resource which can be used in API calls. channel partner name : (For distributors) Represents the channel partner. entitlement name : Resource name of the Entitlement in Channel Services. customer correlation id : A Customer Relationship Management (CRM) ID that you can define for a customer. usage.amount : For Google Workspace seat-based usage, this indicates paid seats.
- DATASET NAME . reseller billing detailed export v1 WHERE export time BETWEEN TIMESTAMP ( START DATE ) AND TIMESTAMP ( END DATE ) GROUP BY customer name , billing account id , payer billing account id , currency , invoice . month ORDER BY customer name , billing account id , payer billing account id , currency , invoice . month ; Sum of customer costs by Cloud Billing subaccount, as shown to the subaccount owner This query shows you how the data cost numbers map with what a resold customer (or you as the partner) sees when they open the Google Cloud console for their subaccount.

