---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:19:31.147Z"
product_name: "Channel Services"
product_slug: "channel-services"
feature_name: "SKU Group Snapshot CSV Export"
feature_slug: "sku-group-snapshot-csv-export"
latest_feature_date: "2022-12-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries"
  - "https://docs.cloud.google.com/channel/docs/concepts/sku-groups"
  - "https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery"
keywords:
  - "downloading"
  - "snapshot"
  - "csv"
  - "allows"
  - "group"
  - "of"
  - "export"
  - "sku"
---

# SKU Group Snapshot CSV Export

Product: Channel Services
Coverage: LOW

## Step 02 Summary

Allows downloading a snapshot of product SKUs for each SKU group as a CSV file from Partner Sales Console.

## Extended Definition

Allows downloading a snapshot of product SKUs for each SKU group as a CSV file from Partner Sales Console.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries](https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries)
- [https://docs.cloud.google.com/channel/docs/concepts/sku-groups](https://docs.cloud.google.com/channel/docs/concepts/sku-groups)
- [https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery](https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery)

## Supporting Pages

### "BigQuery export query examples \_|\_ Channel Services \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries](https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- DATASET NAME . reseller billing detailed export v1 WHERE export time BETWEEN TIMESTAMP ( START DATE ) AND TIMESTAMP ( END DATE ) AND payer billing account id = ' EXTERNAL BILLING ACCOUNT ID ' AND invoice . month = ' INVOICE MONTH ' GROUP BY domain name , customer id , sku name , sku id , description , order name , start date , end date , po number HAVING amount != 0 ORDER BY domain name , order name , start date , end date ; Other columns of interest to add to SELECT and GROUP BY clauses: billing account id : Represents the Customer Cloud Identity ID. customer name : Represents the customer resource which can be used in API calls. channel partner name : (For distributors) Represents the channel partner. entitlement name : Resource name of the Entitlement in Channel Services. customer correlation id : A Customer Relationship Management (CRM) ID that you can define for a customer. usage.amount : For Google Workspace seat-based usage, this indicates paid seats.
- DATASET NAME . reseller billing offline orders detailed export v0 WHERE export time BETWEEN TIMESTAMP ( START DATE ) AND TIMESTAMP ( END DATE ) AND payer billing account id = ' EXTERNAL BILLING ACCOUNT ID ' AND invoice . month = ' INVOICE MONTH ' GROUP BY customer name , sku name , sku id , start date , end date HAVING amount != 0 ORDER BY customer name , start date , end date , sku id ; The query result differs from the PDF invoice in the following ways: You can convert the timestamp value to a date value in the "America/Los Angeles" timezone.
- DATASET NAME . reseller billing detailed export v1 WHERE export time BETWEEN TIMESTAMP ( START DATE ) AND TIMESTAMP ( END DATE ) AND customer name IS NULL GROUP BY billing account id , payer billing account id , currency , invoice . month ORDER BY billing account id , payer billing account id , currency , invoice . month ; Google Workspace data view similar to invoice CSV If you are a Google Workspace reseller, you may get a view of the Google Workspace billing data with similar columns as the invoice CSV files.
- DATASET NAME . reseller billing detailed export v1 WHERE export time BETWEEN TIMESTAMP ( START DATE ) AND TIMESTAMP ( END DATE ) GROUP BY customer name , billing account id , payer billing account id , currency , invoice . month ORDER BY customer name , billing account id , payer billing account id , currency , invoice . month ; Sum of customer costs by Cloud Billing subaccount, as shown to the subaccount owner This query shows you how the data cost numbers map with what a resold customer (or you as the partner) sees when they open the Google Cloud console for their subaccount.

### Google Cloud SKU groups \_|\_ Channel Services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/concepts/sku-groups](https://docs.cloud.google.com/channel/docs/concepts/sku-groups)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To view the SKUs this might include, you can export this SKU group to a file and view the full list of available SKUs.
- Elastic Marketplace SKUs (Id: 4935495f-6ae7-44b8-b3b5-e3545492b732) Splunk Marketplace SKUs (Id: d4806ac5-1df1-4a95-9dfc-c22784c3ea0d) MongoDB Marketplace SKUs (Id: 3c98e00f-626d-40b1-8806-678b19ec51f8) Netapp Marketplace SKUs (Id: cd701612-f7a4-436e-ab6f-9398172307b2) Palo Alto Networks Marketplace SKUs (Id: d8938e23-f696-4242-8385-ab3f86e0b0f0) Redis Marketplace SKUs (Id: de0c79ce-c2fd-49bd-b1b2-66277e14b278) Itopia Marketplace SKUs (Id: 2e573702-a404-4d9f-bcb8-67f31faa571d) HashiCorp Marketplace SKUs (Id: 53ce8604-8e0b-4e8a-9540-85f2e5154a03) Third party Marketplace SKU group This group includes product SKUs from third-party software providers.
- This page provides a summary of the stock keeping unit (SKU) groups available to you as a reseller.
- As an example, the Directions API and Places API SKUs are a part of this group.

### Export Channel Services data to BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery](https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- DATASET NAME . reseller billing detailed export v1 WHERE export time BETWEEN TIMESTAMP ( START DATE ) AND TIMESTAMP ( END DATE ) AND payer billing account id IN ( PAYER BILLING ACCOUNT IDS ) GROUP BY billing account id , currency , invoice . month ORDER BY billing account id , currency , invoice . month ; For more information on partitioning, clustering, and best practices, see the following links: Query Partitioned tables Query Clustered tables Optimize query computation Best Practices to control costs in BigQuery Finding payer's billing account ID To find the payer's billing account ID, open the billing accounts page of the Partner Sales Console and click the Partner billing tab.
- The following fields don't apply to Google Workspace exports: service.id sku.id project labels resource customer repricing config name channel partner repricing config name tags price.effective price price.tier start amount transaction type seller name subscription Columns not applicable to offline orders (preview) When a column or field doesn't apply to a Product Family, the exported data for this product family contains null in this column or field.
- For example, the base unit for standard storage is byte-seconds . usage.amount in pricing unit Numeric The quantity of usage.pricing unit usage. usage.pricing unit String The units for measuring resource usage. credits Struct, Repeated Contains fields that describe the structure and value of credits. credits.id String If populated, indicates that a credit is associated with the product SKU. credits.full name String The name of the credit associated with the product SKU. credits.type String This field describes the purpose or origin of the credits.id . credits.name String A description of the credit applied to the usage. credits.amount Numeric The amount of the credit applied to the usage. credits.channel partner amount Numeric The amount of the credit applied to the usage, after rebilling markups and discounts.
- If credits.type is RESELLER MARGIN, this amount will be zero. adjustmentsInfo Struct, Repeated Contains fields that describe the structure and value of an adjustment to cost line items. adjustmentsInfo.adjustment id String If populated, an adjustment is associated with a cost line item. adjustmentsInfo.adjustments id is the unique ID for all the adjustments caused by an issue. adjustmentsInfo.adjustment description String A description of the adjustment and its cause. adjustmentsInfo.adjustment type String The type of the adjustment. adjustmentsInfo.adjustment mode String How the adjustment was issued. export time Timestamp A processing time associated with an append of billing data.

