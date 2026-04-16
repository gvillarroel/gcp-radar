---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:56:59.863Z"
product_name: "Channel Services"
product_slug: "channel-services"
feature_name: "Channel Services Rebilling BigQuery Export Dataset Location Support"
feature_slug: "channel-services-rebilling-bigquery-export-dataset-location-support"
latest_feature_date: "2023-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
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
---

# Channel Services Rebilling BigQuery Export Dataset Location Support

Product: Channel Services
Coverage: MEDIUM

## Step 02 Summary

Allows Channel Services rebilling BigQuery datasets to be created in all supported BigQuery locations, with multi-region datasets recommended for broader export coverage.

## Extended Definition

Allows Channel Services rebilling BigQuery datasets to be created in all supported BigQuery locations, with multi-region datasets recommended for broader export coverage.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery](https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery)
- [https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries](https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries)
- [https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview](https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview)

## Supporting Pages

### Export Channel Services data to BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery](https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When you enable the Channel Services data export for the first time per data source (Google Cloud or Google Workspace): If you configure your BigQuery dataset to use a multi-region location , BigQuery export data is available for each selected data source from the start of the previous month.
- Warning : For Partners who disable and later re-enable the BigQuery export or change Export dataset to a different BigQuery location, data might not be available for the period when export was explicitly disabled or between the last export and when cross-region dataset change occurred.
- For continuous data export, when you set up permissions for users, make sure that the service account cloud-channel-billing-reporting-rebilling@system.gserviceaccount.com always has full editor access on the export dataset.
- If you configure your BigQuery dataset to use a region location (other than multi-region US or EU), your BigQuery export data is available for each selected data source from the date you enable the export, and after.

### "BigQuery export query examples \_|\_ Channel Services \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries](https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- DATASET NAME . reseller billing detailed export v1 WHERE export time BETWEEN TIMESTAMP ( START DATE ) AND TIMESTAMP ( END DATE ) AND payer billing account id = ' EXTERNAL BILLING ACCOUNT ID ' AND invoice . month = ' INVOICE MONTH ' GROUP BY domain name , customer id , sku name , sku id , description , order name , start date , end date , po number HAVING amount != 0 ORDER BY domain name , order name , start date , end date ; Other columns of interest to add to SELECT and GROUP BY clauses: billing account id : Represents the Customer Cloud Identity ID. customer name : Represents the customer resource which can be used in API calls. channel partner name : (For distributors) Represents the channel partner. entitlement name : Resource name of the Entitlement in Channel Services. customer correlation id : A Customer Relationship Management (CRM) ID that you can define for a customer. usage.amount : For Google Workspace seat-based usage, this indicates paid seats.
- DATASET NAME . reseller billing detailed export v1 WHERE export time BETWEEN TIMESTAMP ( START DATE ) AND TIMESTAMP ( END DATE ) GROUP BY customer name , billing account id , payer billing account id , currency , invoice . month ORDER BY customer name , billing account id , payer billing account id , currency , invoice . month ; Sum of customer costs by Cloud Billing subaccount, as shown to the subaccount owner This query shows you how the data cost numbers map with what a resold customer (or you as the partner) sees when they open the Google Cloud console for their subaccount.
- DATASET NAME . reseller billing offline orders detailed export v0 WHERE export time BETWEEN TIMESTAMP ( START DATE ) AND TIMESTAMP ( END DATE ) AND payer billing account id = ' EXTERNAL BILLING ACCOUNT ID ' AND invoice . month = ' INVOICE MONTH ' GROUP BY customer name , sku name , sku id , start date , end date HAVING amount != 0 ORDER BY customer name , start date , end date , sku id ; The query result differs from the PDF invoice in the following ways: You can convert the timestamp value to a date value in the "America/Los Angeles" timezone.
- DATASET NAME . reseller billing detailed export v1 WHERE export time BETWEEN TIMESTAMP ( START DATE ) AND TIMESTAMP ( END DATE ) AND customer name IS NULL GROUP BY billing account id , payer billing account id , currency , invoice . month ORDER BY billing account id , payer billing account id , currency , invoice . month ; Google Workspace data view similar to invoice CSV If you are a Google Workspace reseller, you may get a view of the Google Workspace billing data with similar columns as the invoice CSV files.

### Rebilling overview \_|\_ Channel Services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview](https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Rebilling consists of two main features: Repricing configurations BigQuery exports BigQuery exports You can export a comprehensive report of your customers' billing usage and cost data to a BigQuery dataset that you own.
- Rebilling also lets partners export their customer data to a BigQuery dataset that they own.
- Since this report includes customer and channel partner costs, along with customer metadata and cost configured using Repricing configurations , you can use the exported data to improve your internal billing processes and financial analytics.
- Optimized queries : Channel Services data exports use the payer billing account id as the clustering column, so queries for one parent billing account are optimized to reduce the cost of querying data data.

