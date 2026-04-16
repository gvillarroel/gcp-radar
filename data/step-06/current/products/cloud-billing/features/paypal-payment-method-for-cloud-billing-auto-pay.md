---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.614Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "PayPal payment method for Cloud Billing auto-pay"
feature_slug: "paypal-payment-method-for-cloud-billing-auto-pay"
latest_feature_date: "2021-02-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/payment-methods"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage"
  - "https://docs.cloud.google.com/billing/docs/how-to/resolve-issues"
keywords:
  - "paypal"
  - "payment"
  - "method"
  - "billing"
  - "auto"
  - "pay"
  - "enabled"
  - "eligible"
---

# PayPal payment method for Cloud Billing auto-pay

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Enabled PayPal as a payment method for eligible online auto-pay Cloud Billing accounts in supported countries.

## Extended Definition

Enabled PayPal as a payment method for eligible online auto-pay Cloud Billing accounts in supported countries.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/payment-methods](https://docs.cloud.google.com/billing/docs/how-to/payment-methods)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage)
- [https://docs.cloud.google.com/billing/docs/how-to/resolve-issues](https://docs.cloud.google.com/billing/docs/how-to/resolve-issues)

## Supporting Pages

### "Add, remove, or update a payment method \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/payment-methods](https://docs.cloud.google.com/billing/docs/how-to/payment-methods)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Prepay payments accounts with auto-reload enabled require at least one valid payment method assigned as the Primary form of payment.
- Prepay payments accounts with auto-reload enabled require at least one valid payment method assigned as the Primary form of payment.
- Prepay payments accounts with auto-reload enabled require at least one valid payment method assigned as the Primary form of payment.
- Permissions to add, edit, or fix a payment method If you're working in the Cloud Billing console, to add, edit, or fix a form of payment that is used to pay for a self-service, online Cloud Billing account, you need a role on your Cloud Billing account that includes the following permissions : billing.accounts.getPaymentInfo billing.accounts.updatePaymentInfo To gain these permissions using a predefined billing IAM role , you must be a Billing Account Administrator on the Cloud Billing account.

### "Structure of Standard data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage)
- Source ID: `site-docs-root-2`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- SUSTAINED USAGE DISCOUNT : The sustained use discounts credit type is an automatic discount that you receive for running eligible Compute Engine resources for a significant portion of the billing month, with no commitment required.
- Row name project labels total cost total credits 1 CTG - Dev [{"key":"ctg p env","value":"dev"}] 79.140979 -4.763796 2 CTG - Prod [{"key":"ctg p env","value":"prod"},{"key":"ctg team","value":"eng"}] 32.466272 -3.073356 3 CTG - Sandbox [{"key":"ctg p env","value":"dev"}] 0 0 4 CTG - Storage [{"key":"ctg p env","value":"prod"},{"key":"ctg team","value":"data"}] 7.645793 -0.003761 Related topics Topics related to exported Cloud Billing data Set up Cloud Billing data export to BigQuery Example queries for Cloud Billing data export to BigQuery Visualize spend over time with Looker Studio Cost and pricing reports available in the Google Cloud console View your Cloud Billing reports and cost trends View and download the cost details of your invoice or statement View and download prices for Google's cloud services Understand your savings with cost breakdown reports Analyze the effectiveness of your committed use discounts View your cost and payment history Previous arrow back Understand the billing data tables in BigQuery Next Structure of Detailed data export arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- String method SELECT invoice . month AS invoice month , TO JSON STRING ( project . ancestors ) as ancestors , SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS net cost FROM project . dataset . gcp billing export v1 XXXXXX XXXXXX XXXXXX as bq WHERE TO JSON STRING ( project . ancestors ) like "%resource name\" : \ "folders/1234" GROUP BY invoice month , ancestors ORDER BY invoice month , ancestors UNNEST method SELECT invoice . month AS invoice month , TO JSON STRING ( project . ancestors ) as ancestors , SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS net cost FROM project . dataset . gcp billing export v1 XXXXXX XXXXXX XXXXXX as bq , UNNEST ( project . ancestors ) as ancestor WHERE ancestor . resource name = "folders/1234" GROUP BY invoice month , ancestors ORDER BY invoice month , ancestors Example 2: Filter by display name This example demonstrates queries that group costs by project ancestry and filter for only costs generated under a specified hierarchy element, identified by the user-provided display name.
- String matching method SELECT invoice . month AS invoice month , TO JSON STRING ( project . ancestors ) as ancestors , SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS net cost FROM project . dataset . gcp billing export v1 XXXXXX XXXXXX XXXXXX as bq WHERE TO JSON STRING ( project . ancestors ) like "%display name\" : \ "MyFolderName%" GROUP BY invoice month , ancestors ORDER BY invoice month , ancestors UNNEST method SELECT invoice . month AS invoice month , TO JSON STRING ( project . ancestors ) as ancestors , SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS net cost FROM project . dataset . gcp billing export v1 XXXXXX XXXXXX XXXXXX as bq , UNNEST ( project . ancestors ) as ancestor WHERE ancestor . display name = "MyFolderName" GROUP BY invoice month , ancestors ORDER BY invoice month , ancestors Query examples with tags The following examples illustrate ways to query your data with tags.

### Resolve Cloud Billing issues \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/resolve-issues](https://docs.cloud.google.com/billing/docs/how-to/resolve-issues)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Prepay charging cycles and payments accounts: For Prepay accounts with auto-reload enabled , if your credit balance falls below a value you specify, you'll be charged at that time to buy more credits, based on the reload amount you configured.
- If there is an issue with your Postpay payments account, such as a delinquent account balance, a declined payment, or an invalid payment method, your overall Cloud Billing account might be suspended until you resolve the issue.
- Postpay charging cycles and payments accounts: For Postpay accounts with automatic payments triggered by threshold billing, if your accrued balance exceeds your payment threshold, you're charged on that day.
- Charges after making a manual payment For Postpay accounts with automatic payments triggered by threshold billing, if you make a manual payment, you might still be charged on your automatic billing cycle.

