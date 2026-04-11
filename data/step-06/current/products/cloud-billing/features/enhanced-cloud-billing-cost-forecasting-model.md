---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.214Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Enhanced Cloud Billing cost forecasting model"
feature_slug: "enhanced-cloud-billing-cost-forecasting-model"
latest_feature_date: "2025-06-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown"
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-table"
keywords:
  - "enhanced"
  - "billing"
  - "cost"
  - "forecasting"
  - "model"
  - "forecasts"
  - "now"
  - "use"
---

# Enhanced Cloud Billing cost forecasting model

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Cloud Billing forecasts now use an enhanced AI-powered model that improves accuracy by modeling seasonality, transient effects, and trend changes in spend data.

## Extended Definition

Cloud Billing forecasts now use an enhanced AI-powered model that improves accuracy by modeling seasonality, transient effects, and trend changes in spend data.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown](https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown)
- [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)

## Supporting Pages

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- For more information about Google Cloud project permissions, see: Access control for projects with IAM IAM basic and predefined roles reference Access the reports page To view the cost reports for your Cloud Billing account or project: Using the procedure that fits your level of access to Cloud Billing accounts , go to your Cloud Billing account in the Billing section of the Google Cloud console: Users with Cloud Billing account permissions Users with project-level permissions only If you have Cloud Billing account permissions, you can select from a list of billing accounts that you have permissions to access.
- Due to the complexity of our billing and processing systems, you might see a delay between your use of services, the usage charges being applied to your Google payments accounts, and the usage and costs being available to view in the various cost reports and dashboards.
- This document teaches you how to access Cloud Billing Reports in the Google Cloud console and how to configure reports, providing details on how to use the various report settings, filters, and report features to track and understand your Google Cloud usage costs.
- The cost prediction is driven by AI The cost forecasting model applies advanced machine learning techniques designed to understand complex cost patterns and handle real-world data imperfections to provide you with more reliable and actionable cost predictions.

### "Understand your savings with cost breakdown reports \_|\_ Cloud Billing\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown](https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- If your Cloud Billing account is associated with a custom pricing contract , the on-demand rate used to calculate the gross cost of your usage depends on the Time range of the costs you are analyzing: When viewing the report using a time range that starts before May 1, 2021, the gross cost of your usage is calculated using your custom contract prices, and includes the savings you earned compared to list prices.
- Related topics View your Cloud Billing reports and cost trends Analyze the effectiveness of your committed use discounts Export Cloud Billing data to BigQuery View your cost and payment history Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- If your Cloud Billing account is associated with a custom pricing contract , the on-demand rate used to calculate the gross cost of your usage depends on the time range of the costs you're analyzing: For costs incurred before May 1, 2021, your on-demand rate is based on your contract prices, and includes the savings you earned compared to list prices.
- The actual type of currency that's used to calculate your costs matches the currency of your Cloud Billing account .

### "View and download the cost details of your invoice or statement \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Billing account ID Project ID SKU description Cost type Cost 123456-ABCDEF-123456 example-project N1 Predefined Instance Core Usage $60 123456-ABCDEF-123456 test-project N1 Predefined Instance Core Usage $40 123456-ABCDEF-123456 0 State sales tax (10.0%) Tax $10 For costs recorded after September 1, 2020, the $10 tax total is broken out to attribute $6 for example-project , and $4 for test-project : Billing account ID Project ID SKU description Cost type Cost 123456-ABCDEF-123456 example-project N1 Predefined Instance Core Usage $60 123456-ABCDEF-123456 example-project State sales tax (10.0%) Tax $6 123456-ABCDEF-123456 test-project N1 Predefined Instance Core Usage $40 123456-ABCDEF-123456 test-project State sales tax (10.0%) Tax $4 Viewing project-level taxes in the nested table view To view your tax costs by project in the nested table view , you must use or configure a Group by option with Project as the first grouping dimension.
- Due to the complexity of our billing and processing systems, you might see a delay between your use of services, and the usage and costs being available to view in Cloud Billing and other cost reports and billing dashboards.
- Note: When viewing a primary billing account with subaccounts (reseller account), your costs are grouped by subaccount first, and then grouped by project, then service, then SKU, then Consumption model.
- Note: When viewing a primary billing account with subaccounts (reseller account), your costs are grouped by subaccount first, and then grouped by service, then SKU, then Consumption model.

