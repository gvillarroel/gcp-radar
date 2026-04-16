---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.638Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing Report User Label Grouping"
feature_slug: "cloud-billing-report-user-label-grouping"
latest_feature_date: "2019-12-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/onboarding-checklist"
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-table"
keywords:
  - "billing"
  - "report"
  - "user"
  - "label"
  - "grouping"
  - "adds"
  - "filtering"
  - "costs"
---

# Cloud Billing Report User Label Grouping

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Adds support for filtering and grouping Cloud Billing report costs by User Labels.

## Extended Definition

Adds support for filtering and grouping Cloud Billing report costs by User Labels.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/onboarding-checklist](https://docs.cloud.google.com/billing/docs/onboarding-checklist)
- [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)

## Supporting Pages

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Saved reports are saved to the All reports page and are available for viewing by users in your organization with Cloud Billing account-level access, who can view reports for all costs and projects for the Cloud Billing account.
- The Cloud Billing reports don't support filtering or grouping by zone .
- To view the cost reports for your Cloud Billing account, including viewing the cost information for all of the Google Cloud projects that are linked to the billing account, you need a role on your Cloud Billing account that includes the following permissions : billing.accounts.get billing.accounts.getSpendingInformation To gain these permissions using a predefined role , ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Viewer Billing Account Costs Manager Billing Account Administrator For more information about Cloud Billing permissions, see: Overview of Cloud Billing access control Create custom roles for Cloud Billing Understanding predefined Identity and Access Management roles for Cloud Billing To view all costs for an individual Google Cloud project, you need billing-specific permissions on the Google Cloud project .
- The Group by options include the following: Single dimension Multiple dimension by date Multiple dimension by month Subaccount Project Project Hierarchy Service SKU Application Location: Region or multi-region Label keys No grouping (show total cost only) Date > Subaccount Date > Project Date > Project Hierarchy Date > Service Date > SKU Date > Application Date > Location: Region or multi-region Month > Subaccount Month > Project Month > Project Hierarchy Month > Service Month > SKU Month > Application Month > Location: Region or multi-region Single-dimension Group by options When using a single-dimension Group by option, the report table and the report chart display the data differently.

### "Guide to Cloud Billing Resource Organization and Access Management \_|\_\

- URL: [https://docs.cloud.google.com/billing/docs/onboarding-checklist](https://docs.cloud.google.com/billing/docs/onboarding-checklist)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Overview Projects are: Required to use resources (such as Compute Engine virtual machines, Pub/Sub topics, and Cloud Storage buckets) The base-level organizing entity in Google Cloud – all service-level resources are parented by projects Used to form the basis for enabling services, APIs, and IAM permissions Folders are: A grouping mechanism for projects and can contain both projects and other folders Used to group resources that share common IAM policies Mapped under an Organization node (you must have an Organization node to use folders) Labels are: Used to categorize your Google Cloud resources (such as Compute Engine instances) Key-value pairs you attach to resources, letting you filter resources based on their labels Great for cost tracking at a granular-level because they're forwarded to the billing system so you can analyze your charges by label stars Key Decision: Folders and Projects Strategy Projects are required.
- Important Roles monetization on Role: Billing Account Admin The Billing Account Admin can: Manage payment instruments Enable Billing Export View costs and spend and set budget alerts Link and unlink projects Manage other user roles tied to the Billing Account Recommended Assignee This role is typically filled by someone with financial control at your company, for example, a business lead that owns the P&L or a technical team member with budget management responsibility.
- Importantly, because this role is required to contact Billing Support, you shouldn't use a service account or mailing list as a billing administrator. monetization on Role: Billing User Billing Users can: Link projects to billing accounts, but can't unlink them View costs Recommended Assignee This role is usually issued broadly in concert with the Project Creator role.
- Configure Access ❑ Grant access to view Billing Reports to people in finance and other departments and roles where users need to track spend or need to review cost anomalies. ❑ Assign multiple Billing Account Administrators to each Billing Account – you might also consider using Organization-level permissions.

### "View and download the cost details of your invoice or statement \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Billing account ID Project ID SKU description Cost type Cost 123456-ABCDEF-123456 example-project N1 Predefined Instance Core Usage $60 123456-ABCDEF-123456 test-project N1 Predefined Instance Core Usage $40 123456-ABCDEF-123456 0 State sales tax (10.0%) Tax $10 For costs recorded after September 1, 2020, the $10 tax total is broken out to attribute $6 for example-project , and $4 for test-project : Billing account ID Project ID SKU description Cost type Cost 123456-ABCDEF-123456 example-project N1 Predefined Instance Core Usage $60 123456-ABCDEF-123456 example-project State sales tax (10.0%) Tax $6 123456-ABCDEF-123456 test-project N1 Predefined Instance Core Usage $40 123456-ABCDEF-123456 test-project State sales tax (10.0%) Tax $4 Viewing project-level taxes in the nested table view To view your tax costs by project in the nested table view , you must use or configure a Group by option with Project as the first grouping dimension.
- To gain this permission, ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Viewer Billing Account Costs Manager Billing Account Administrator For more information about billing permissions, see: Overview of Cloud Billing access control Create custom roles for Cloud Billing Understanding predefined IAM roles for Cloud Billing Access the report To view the Cost table report for your Cloud Billing account: In the Google Cloud console, go to your Cloud Billing account.
- Permissions required to access the Cost table report To view the Cost table report for your Cloud Billing account, you need a role that includes the following permission on your Cloud Billing account: billing.accounts.getSpendingInformation to view costs and usage for a billing account.
- Figure 2 - Nested table view : Example of the Cost table report grouped by Custom grouping , setting the custom Group by dimensions to use Labels and SKU ID , and with the environment:test label row expanded to view the charges by SKUs tagged with that label key.

