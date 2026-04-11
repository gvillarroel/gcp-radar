---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.365Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Detailed credit-type reporting in Cloud Billing reports"
feature_slug: "detailed-credit-type-reporting-in-cloud-billing-reports"
latest_feature_date: "2019-02-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/billing-cycle"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage"
keywords:
  - "detailed"
  - "credit"
  - "type"
  - "reporting"
  - "in"
  - "billing"
  - "reports"
  - "now"
---

# Detailed credit-type reporting in Cloud Billing reports

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Cloud Billing reports now support toggling and displaying detailed credit types (such as discounts and promotions) instead of only aggregate credit totals.

## Extended Definition

Cloud Billing reports now support toggling and displaying detailed credit types (such as discounts and promotions) instead of only aggregate credit totals.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/how-to/billing-cycle](https://docs.cloud.google.com/billing/docs/how-to/billing-cycle)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)

## Supporting Pages

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: N/A

Evidence snippets:
- If applicable to your Cloud Billing account, there are various types of other savings you might earn, such as the following: Free tier credits : Some services offer free resource usage up to specified limits .
- Negotiated savings Negotiated savings is a credit type that displays for Cloud Billing accounts that are associated with a custom pricing contract .
- If a particular type of credit or discount doesn't apply to your Cloud Billing account, you won't see that Savings option in the list.
- To view the cost reports for your Cloud Billing account, including viewing the cost information for all of the Google Cloud projects that are linked to the billing account, you need a role on your Cloud Billing account that includes the following permissions : billing.accounts.get billing.accounts.getSpendingInformation To gain these permissions using a predefined role , ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Viewer Billing Account Costs Manager Billing Account Administrator For more information about Cloud Billing permissions, see: Overview of Cloud Billing access control Create custom roles for Cloud Billing Understanding predefined Identity and Access Management roles for Cloud Billing To view all costs for an individual Google Cloud project, you need billing-specific permissions on the Google Cloud project .

### "Find out your Cloud Billing account type and charging cycle \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/billing-cycle](https://docs.cloud.google.com/billing/docs/how-to/billing-cycle)
- Source ID: `site-docs-root-2`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Your Cloud Billing account can be one of two types, which determines what type of Google payments account is used to pay for your usage and differentiates how and when you pay for your Google Cloud usage and other eligible services: Invoiced billing If you have invoiced billing , you accrue costs first, then receive a monthly invoice, or multiple invoices when split invoicing applies.
- Related topics View your Cloud Billing reports and cost trends Get an invoice, statement, or receipt Export Cloud Billing data to BigQuery View your cost and payment history Create, modify, or close your Cloud Billing account Split invoicing for agency model transactions Split charging cycles for self-serve (online) Cloud Billing accounts .
- Postpay Automatic payments triggered by threshold billing This Cloud Billing account has a threshold billing cycle and the linked payment instrument (such as a credit card or bank account) is charged automatically when your accrued Google Cloud costs meet an automatically assigned threshold amount.
- Postpay Automatic monthly payments This Cloud Billing account has a monthly billing cycle and the linked payment instrument (such as a credit card or bank account) is charged automatically on the second day of every month for charges accrued during the previous month.

### "Structure of Detailed data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- Source ID: `site-docs-root-2`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Standard SQL SELECT invoice . month , cost type , resource . name , SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS total , ( SUM ( CAST ( cost 1000000 AS int64 )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount 1000000 as int64 )) FROM UNNEST ( credits ) c ), 0 ))) / 1000000 AS total exact FROM project . dataset . gcp billing export resource v1 XXXXXX XXXXXX XXXXXX GROUP BY 1 , 2 , 3 ORDER BY 1 ASC , 2 ASC , 3 ASC ; For example, the result of the preceding query might be: Row month cost type name total total exact 1 201901 regular null $1000.501209987994782 $1000.50 2 201901 rounding error null –$0.500489920049387 –$0.50 3 201901 tax null $10.000329958477891 $10.00 4 201901 adjustment null –$5.002572999387045 –$5.00 5 201901 regular backend1 $410.998795012082947 $411.00 2 201901 rounding error backend1 –$0.2404900489920378 –$0.24 3 201901 tax backend1 $4.105840329977189 $4.11 Get a breakdown of Google Kubernetes Engine (GKE) cluster costs This section provides examples of filtering GKE cluster costs in your BigQuery export reports.
- Note that in the Cloud Billing reports available in the Google Cloud console, the discount credit type is listed as Spending-based discounts .
- Standard SQL SELECT invoice . month , resource . name , SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS total , ( SUM ( CAST ( cost 1000000 AS int64 )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount 1000000 as int64 )) FROM UNNEST ( credits ) c ), 0 ))) / 1000000 AS total exact FROM project . dataset . gcp billing export resource v1 XXXXXX XXXXXX XXXXXX GROUP BY 1 , 2 ORDER BY 1 ASC , 2 ASC ; For example, the result of the preceding query might be: Row month name total total exact 1 201901 null $1005.004832999999984 $1005.00 2 201901 backend1 $781.8499760000028 $781.85 3 201902 null $953.0034923645475983 $953.03 4 201902 backend1 $992.3101739999999717 $992.31 5 201902 bitnami-launchpad-wordpress-1-wordpress $1.2817819999999998 $1.28 Return details by cost type for each resource, per invoice month This query shows the totals for each cost type for each resource.name per month.
- Common values used in the example detailed cost queries The query examples in this section use the following value for Table name : project.dataset.gcp billing export resource v1 XXXXXX XXXXXX XXXXXX Return the resource-level costs on an invoice The following queries demonstrate two ways of viewing resource-level cost and credit values on an invoice using exported billing data.

