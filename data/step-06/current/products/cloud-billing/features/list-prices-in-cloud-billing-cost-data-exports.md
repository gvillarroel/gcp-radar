---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.584Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "List prices in Cloud Billing cost data exports"
feature_slug: "list-prices-in-cloud-billing-cost-data-exports"
latest_feature_date: "2023-07-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage"
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-table"
keywords:
  - "list"
  - "prices"
  - "billing"
  - "cost"
  - "exports"
  - "adds"
  - "column"
  - "so"
---

# List prices in Cloud Billing cost data exports

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Adds the `cost_at_list` column so list prices are visible for all line items in standard and detailed cost data exports.

## Extended Definition

Adds the `cost_at_list` column so list prices are visible for all line items in standard and detailed cost data exports.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)

## Supporting Pages

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- Promotional credits for custom pricing contracts : If you have a custom pricing contract with Google Cloud, and received promotional credits that apply to costs at list prices , your report includes a service called Invoice , with a SKU called Contract billing adjustment .
- Negotiated savings: When you set the report time range by Invoice month , starting with the May 2021 invoice, Cloud Billing accounts associated with a custom pricing contract display Negotiated savings as a savings column, separate from the List cost column.
- If your Cloud Billing account is associated with a custom pricing contract and your report settings result in the display of the Negotiated savings column, you will see a List cost column in your CSV download .
- For usage costs incurred after May 1, 2021, your on-demand rate is based on the publicly available list prices, and the Usage cost column shows the gross cost of your cloud usage calculated using list prices.

### "View and download the cost details of your invoice or statement \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- List cost N/A The List cost column is available for Cloud Billing accounts associated with a custom pricing contract , and represents the monthly cost of your usage calculated using list prices .
- The other cost columns, Unrounded cost and Cost , are calculated using the price that's applicable to your billing account (either list prices or contract prices ).
- Note : The List cost column is available starting with your May 2021 invoice, and only for Cloud Billing accounts associated with a custom pricing contract .
- View the List cost column to see your usage costs calculated using list prices.

### "Structure of Detailed data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- Source ID: `site-docs-root-2`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Note: You can use the sku.id column to map each of your line items to the list prices published on the Google Cloud pricing pages , in the Pricing Table report , and through the Cloud Billing Catalog API . sku.description String A description of the resource type used by the service.
- PARTITIONTIME , DAY )) = '2025-09-16' AND t . sku . description LIKE '%Core%' AND sl reservation . value LIKE '%tc-billing-case2-res-1757983801%' GROUP BY consumer project id , t . sku . description , usage category , usage unit ORDER BY consumer project id , usage category ; Sample Results: consumer project id sku description usage category total usage amount usage unit total cost usd disco-sector-292704 E2 Instance Core running in Americas Instance Usage 14551 seconds 0.088158 flash-freehold-292704 E2 Instance Core running in Americas Instance Usage 7347 seconds 0.044512 united-sandbox-303721 E2 Instance Core running in Americas Unused Capacity 7936 seconds 0.04808 List all the instances consuming a reservation Similarly, we can write a query to understand all the instances, including first-party (1P) instances, that have consumed a given reservation during a given time period.
- For example, for costs recorded before September 1, your usage cost data looks similar to the following example, which shows a total tax liability of $10. billing account id project.id cost type cost 123456-ABCDEF-123456 example-project Regular $60 123456-ABCDEF-123456 test-project Regular $40 123456-ABCDEF-123456 [empty] Tax $10 For costs recorded after September 1, the $10 is broken down to $6 for example-project , and $4 for test-project : billing account id project.id cost type cost 123456-ABCDEF-123456 example-project Regular $60 123456-ABCDEF-123456 test-project Regular $40 123456-ABCDEF-123456 example-project Tax $6 123456-ABCDEF-123456 test-project Tax $4 Note: If the tax isn't related to a project, the project columns are empty.
- Note: The first full day of data in this field is July 15, 2025. cost at list consumption model Numeric Cost per the applicable consumption model before any negotiated discounts reflected in the custom pricing in the contract linked to your Cloud Billing account (if applicable).

