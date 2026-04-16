---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:56:59.861Z"
product_name: "Channel Services"
product_slug: "channel-services"
feature_name: "Channel Services BigQuery Rebilling Export"
feature_slug: "channel-services-bigquery-rebilling-export"
latest_feature_date: "2024-03-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview"
  - "https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery"
  - "https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries"
keywords:
  - "capability"
  - "partners"
  - "rebilling"
  - "export"
  - "adds"
---

# Channel Services BigQuery Rebilling Export

Product: Channel Services
Coverage: MEDIUM

## Step 02 Summary

Adds a BigQuery Export (Rebilling) capability so partners can programmatically access Workspace billing data, including Channel Service identifiers and configured CRM IDs, in a BigQuery dataset.

## Extended Definition

Adds a BigQuery Export (Rebilling) capability so partners can programmatically access Workspace billing data, including Channel Service identifiers and configured CRM IDs, in a BigQuery dataset.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview](https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview)
- [https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery](https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery)
- [https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries](https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries)

## Supporting Pages

### Rebilling overview \_|\_ Channel Services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview](https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Rebilling also lets partners export their customer data to a BigQuery dataset that they own.
- Rebilling consists of two main features: Repricing configurations BigQuery exports BigQuery exports You can export a comprehensive report of your customers' billing usage and cost data to a BigQuery dataset that you own.
- Migrating to Channel Services data export We brought improvements to the data export experience for partners originally integrated with Cloud Billing data export.
- Since this report includes customer and channel partner costs, along with customer metadata and cost configured using Repricing configurations , you can use the exported data to improve your internal billing processes and financial analytics.

### Export Channel Services data to BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery](https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Warning : For Partners who disable and later re-enable the BigQuery export or change Export dataset to a different BigQuery location, data might not be available for the period when export was explicitly disabled or between the last export and when cross-region dataset change occurred.
- For continuous data export, when you set up permissions for users, make sure that the service account cloud-channel-billing-reporting-rebilling@system.gserviceaccount.com always has full editor access on the export dataset.
- The service account is: cloud-channel-billing-reporting-rebilling@system.gserviceaccount.com This service account requires the predefined role: roles/bigquery.dataEditor to allow exports.
- In your BigQuery dataset, the detailed rebilling export is loaded into a data table named reseller billing detailed export v1 .

### "BigQuery export query examples \_|\_ Channel Services \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries](https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- DATASET NAME . reseller billing detailed export v1 WHERE export time BETWEEN TIMESTAMP ( START DATE ) AND TIMESTAMP ( END DATE ) AND payer billing account id = ' EXTERNAL BILLING ACCOUNT ID ' AND invoice . month = ' INVOICE MONTH ' GROUP BY domain name , customer id , sku name , sku id , description , order name , start date , end date , po number HAVING amount != 0 ORDER BY domain name , order name , start date , end date ; Other columns of interest to add to SELECT and GROUP BY clauses: billing account id : Represents the Customer Cloud Identity ID. customer name : Represents the customer resource which can be used in API calls. channel partner name : (For distributors) Represents the channel partner. entitlement name : Resource name of the Entitlement in Channel Services. customer correlation id : A Customer Relationship Management (CRM) ID that you can define for a customer. usage.amount : For Google Workspace seat-based usage, this indicates paid seats.
- DATASET NAME . reseller billing detailed export v1 WHERE export time BETWEEN TIMESTAMP ( START DATE ) AND TIMESTAMP ( END DATE ) GROUP BY customer name , billing account id , payer billing account id , currency , invoice . month ORDER BY customer name , billing account id , payer billing account id , currency , invoice . month ; Sum of customer costs by Cloud Billing subaccount, as shown to the subaccount owner This query shows you how the data cost numbers map with what a resold customer (or you as the partner) sees when they open the Google Cloud console for their subaccount.
- DATASET NAME . reseller billing offline orders detailed export v0 WHERE export time BETWEEN TIMESTAMP ( START DATE ) AND TIMESTAMP ( END DATE ) AND payer billing account id = ' EXTERNAL BILLING ACCOUNT ID ' AND invoice . month = ' INVOICE MONTH ' GROUP BY customer name , sku name , sku id , start date , end date HAVING amount != 0 ORDER BY customer name , start date , end date , sku id ; The query result differs from the PDF invoice in the following ways: You can convert the timestamp value to a date value in the "America/Los Angeles" timezone.
- DATASET NAME . reseller billing detailed export v1 WHERE export time BETWEEN TIMESTAMP ( START DATE ) AND TIMESTAMP ( END DATE ) AND customer name IS NULL GROUP BY billing account id , payer billing account id , currency , invoice . month ORDER BY billing account id , payer billing account id , currency , invoice . month ; Google Workspace data view similar to invoice CSV If you are a Google Workspace reseller, you may get a view of the Google Workspace billing data with similar columns as the invoice CSV files.

