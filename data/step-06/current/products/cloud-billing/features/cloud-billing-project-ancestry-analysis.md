---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.302Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing project ancestry analysis"
feature_slug: "cloud-billing-project-ancestry-analysis"
latest_feature_date: "2022-04-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.types.ListProjectBillingInfoRequest"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.types.GetProjectBillingInfoRequest"
keywords:
  - "billing"
  - "project"
  - "ancestry"
  - "analysis"
  - "adds"
  - "for"
  - "analyzing"
  - "and"
---

# Cloud Billing project ancestry analysis

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Adds support for analyzing and grouping or filtering billing data by project ancestry in Billing Reports and Cost breakdown reports using folders and organizations.

## Extended Definition

Adds support for analyzing and grouping or filtering billing data by project ancestry in Billing Reports and Cost breakdown reports using folders and organizations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.types.ListProjectBillingInfoRequest](https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.types.ListProjectBillingInfoRequest)
- [https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.types.GetProjectBillingInfoRequest](https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.types.GetProjectBillingInfoRequest)

## Supporting Pages

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Understand and analyze changes in project ancestry For the time range you're analyzing, it's possible for the same Project to be listed in more than one row in the report table.
- To view the cost reports for your Cloud Billing account, including viewing the cost information for all of the Google Cloud projects that are linked to the billing account, you need a role on your Cloud Billing account that includes the following permissions : billing.accounts.get billing.accounts.getSpendingInformation To gain these permissions using a predefined role , ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Viewer Billing Account Costs Manager Billing Account Administrator For more information about Cloud Billing permissions, see: Overview of Cloud Billing access control Create custom roles for Cloud Billing Understanding predefined Identity and Access Management roles for Cloud Billing To view all costs for an individual Google Cloud project, you need billing-specific permissions on the Google Cloud project .
- For more information about Google Cloud project permissions, see: Access control for projects with IAM IAM basic and predefined roles reference Access the reports page To view the cost reports for your Cloud Billing account or project: Using the procedure that fits your level of access to Cloud Billing accounts , go to your Cloud Billing account in the Billing section of the Google Cloud console: Users with Cloud Billing account permissions Users with project-level permissions only If you have Cloud Billing account permissions, you can select from a list of billing accounts that you have permissions to access.
- When you open the cost report from the budget's cost trend chart , if your budget scope is set for all projects, and your Cloud Billing account is incurring charges not specific to a project , you might notice that your costs appear higher in the cost report than in the budget's cost trend chart.

### "Class ListProjectBillingInfoRequest (1.18.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.types.ListProjectBillingInfoRequest](https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.types.ListProjectBillingInfoRequest)
- Source ID: `site-python-reference`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Class ListProjectBillingInfoRequest (1.18.0) Stay organized with collections Save and categorize content based on your preferences.
- Version latest keyboard arrow down 1.18.0 (latest) 1.17.0 1.16.3 1.15.0 1.14.1 1.13.6 1.12.1 1.11.5 1.10.1 1.9.1 1.8.0 1.7.3 1.6.1 1.5.1 1.4.1 1.3.4 1.2.1 1.1.1 1.0.0 0.1.0 ListProjectBillingInfoRequest ( mapping = None , , ignore unknown fields = False , kwargs ) Request message for ListProjectBillingInfo .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
- The resource name of the billing account associated with the projects that you want to list.

### "Class GetProjectBillingInfoRequest (1.18.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.types.GetProjectBillingInfoRequest](https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.types.GetProjectBillingInfoRequest)
- Source ID: `site-python-reference`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Class GetProjectBillingInfoRequest (1.18.0) Stay organized with collections Save and categorize content based on your preferences.
- Version latest keyboard arrow down 1.18.0 (latest) 1.17.0 1.16.3 1.15.0 1.14.1 1.13.6 1.12.1 1.11.5 1.10.1 1.9.1 1.8.0 1.7.3 1.6.1 1.5.1 1.4.1 1.3.4 1.2.1 1.1.1 1.0.0 0.1.0 GetProjectBillingInfoRequest ( mapping = None , , ignore unknown fields = False , kwargs ) Request message for GetProjectBillingInfo .
- The resource name of the project for which billing information is retrieved.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]

