---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.656Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing reports availability"
feature_slug: "cloud-billing-reports-availability"
latest_feature_date: "2018-04-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/onboarding-checklist"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup"
keywords:
  - "billing"
  - "reports"
  - "availability"
  - "became"
  - "generally"
  - "available"
  - "enabling"
  - "users"
---

# Cloud Billing reports availability

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Cloud Billing reports became generally available, enabling users to chart billing account spending; Cloud Billing reports became available in beta, providing quick charting of billing account cloud spending.

## Extended Definition

Cloud Billing reports became generally available, enabling users to chart billing account spending; Cloud Billing reports became available in beta, providing quick charting of billing account cloud spending.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/onboarding-checklist](https://docs.cloud.google.com/billing/docs/onboarding-checklist)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup)

## Supporting Pages

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- When viewing costs by Invoice month , the following data is available in the Cloud Billing reports: Invoices generally include all costs incurred during a given calendar month, but the cost for some services' usage at the very end of a calendar month might roll over to the next month's invoice.
- Saved reports are saved to the All reports page and are available for viewing by users in your organization with Cloud Billing account-level access, who can view reports for all costs and projects for the Cloud Billing account.
- For more information about Google Cloud project permissions, see: Access control for projects with IAM IAM basic and predefined roles reference Access the reports page To view the cost reports for your Cloud Billing account or project: Using the procedure that fits your level of access to Cloud Billing accounts , go to your Cloud Billing account in the Billing section of the Google Cloud console: Users with Cloud Billing account permissions Users with project-level permissions only If you have Cloud Billing account permissions, you can select from a list of billing accounts that you have permissions to access.
- To view the Cloud Billing reports for a project, you need a role on the Google Cloud project that includes the following permissions : billing.resourceCosts.get resourcemanager.projects.get To gain these permissions using a predefined role , ask your administrator to grant you one of the following basic IAM roles on your Google Cloud projects: Project Viewer Project Editor Project Owner Note : If you are viewing Cloud Billing reports using project-level permissions only, some of the billing-account-level report features aren't available.

### "Guide to Cloud Billing Resource Organization and Access Management \_|\_\

- URL: [https://docs.cloud.google.com/billing/docs/onboarding-checklist](https://docs.cloud.google.com/billing/docs/onboarding-checklist)
- Source ID: `site-docs-root`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- This way, your usage data will be tracked and available to you from day one, and ready for analysis using a variety of tools. stars Key Concepts: Billing Export, Billing Reports, and Invoices Your usage is reported from your Projects to your Billing Accounts and your usage data is made available to you in a variety of ways, all of which can be used to help you understand the full picture of your spend.
- Configure Access ❑ Grant access to view Billing Reports to people in finance and other departments and roles where users need to track spend or need to review cost anomalies. ❑ Assign multiple Billing Account Administrators to each Billing Account – you might also consider using Organization-level permissions.
- Overview Projects are: Required to use resources (such as Compute Engine virtual machines, Pub/Sub topics, and Cloud Storage buckets) The base-level organizing entity in Google Cloud – all service-level resources are parented by projects Used to form the basis for enabling services, APIs, and IAM permissions Folders are: A grouping mechanism for projects and can contain both projects and other folders Used to group resources that share common IAM policies Mapped under an Organization node (you must have an Organization node to use folders) Labels are: Used to categorize your Google Cloud resources (such as Compute Engine instances) Key-value pairs you attach to resources, letting you filter resources based on their labels Great for cost tracking at a granular-level because they're forwarded to the billing system so you can analyze your charges by label stars Key Decision: Folders and Projects Strategy Projects are required.
- Note: To ensure users can receive monthly invoices and important communications about Google payments profile issues, new Google payments profile users and administrators will need to verify their email address. ❑ For invoiced billing, assign multiple invoice delivery addresses , both for email delivery and for paper invoice delivery, to ensure that you're always aware of when a new invoice has been sent out. ❑ For electronic notifications and monthly statements, add users and set their email preferences to receive documents and notices.

### Set up Cloud Billing data export to BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup)
- Source ID: `site-docs-root-2`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Resource-level tags are available for the following resources: Compute Engine instances Spanner instances Cloud Run services Artifact Registry repositories Related topics Topics related to exported Cloud Billing data Understanding the Cloud Billing data tables in BigQuery Example queries for Cloud Billing data export to BigQuery Visualize spend over time with Looker Studio Cost and pricing reports available in the Google Cloud console View your Cloud Billing reports and cost trends View and download the cost details of your invoice or statement View and download prices for Google's cloud services Understand your savings with cost breakdown reports Analyze the effectiveness of your committed use discounts View your cost and payment history Previous arrow back Overview of billing data export to BigQuery Next Understand the billing data tables in BigQuery arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Before you update the project or dataset where your billing data is stored, or disable any of your data exports, review the limitations and data availability guidelines for how these updates might impact your billing data exported to BigQuery.
- If you edit the export settings to change the project or dataset where your exported billing data is stored, or you are re-enabling the export , then billing data is not added retroactively .
- For a quick introduction to enabling billing data export and running sample queries of Cloud Billing data in BigQuery, follow this interactive tutorial for billing data export .

