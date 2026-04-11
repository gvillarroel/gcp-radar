---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.204Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Granular Pub/Sub usage data in Cloud Billing BigQuery exports"
feature_slug: "granular-pub-sub-usage-data-in-cloud-billing-bigquery-exports"
latest_feature_date: "2025-12-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage"
  - "https://docs.cloud.google.com/billing/docs/how-to/disable-billing-with-notifications"
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
keywords:
  - "granular"
  - "pub"
  - "sub"
  - "usage"
  - "in"
  - "billing"
  - "exports"
  - "detailed"
---

# Granular Pub/Sub usage data in Cloud Billing BigQuery exports

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Cloud Billing detailed exports now include granular Pub/Sub snapshot, subscription, and topic usage data using the resource fields in BigQuery exports.

## Extended Definition

Cloud Billing detailed exports now include granular Pub/Sub snapshot, subscription, and topic usage data using the resource fields in BigQuery exports.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- [https://docs.cloud.google.com/billing/docs/how-to/disable-billing-with-notifications](https://docs.cloud.google.com/billing/docs/how-to/disable-billing-with-notifications)
- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)

## Supporting Pages

### "Structure of Detailed data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- Source ID: `site-docs-root-2`
- Final score: 244
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you enabled, disabled, and subsequently re-enabled the detailed usage cost data export, the Cloud Billing data might not be available for the period when data export was explicitly disabled.
- PARTITIONTIME , DAY )) = '2025-09-16' AND t . sku . description LIKE '%Core%' AND sl reservation . value LIKE '%tc-billing-case2-res-1757983801%' AND t . resource . global name NOT LIKE '%allocation/%' AND t . resource . name IS NOT NULL AND t . resource . name != '' ORDER BY t . usage start time , t . project . id , t . resource . name ; Sample results: usage start time usage end time consumer project id instance name usage amount 2025-09-16 00:00:00.000000 UTC 2025-09-16 01:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins0-1757983801 552 2025-09-16 00:00:00.000000 UTC 2025-09-16 01:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins1-1757983801 533 2025-09-16 00:00:00.000000 UTC 2025-09-16 01:00:00.000000 UTC flash-freehold-292704 projects/978655420110/instances/tc-billing-case2-ins2-1757983801 517 2025-09-16 01:00:00.000000 UTC 2025-09-16 02:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins0-1757983801 3600 2025-09-16 01:00:00.000000 UTC 2025-09-16 02:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins1-1757983801 3600 2025-09-16 01:00:00.000000 UTC 2025-09-16 02:00:00.000000 UTC flash-freehold-292704 projects/978655420110/instances/tc-billing-case2-ins2-1757983801 3600 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins0-1757983801 3022 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins0-1757983801 79 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins1-1757983801 79 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins1-1757983801 3086 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC flash-freehold-292704 projects/978655420110/instances/tc-billing-case2-ins2-1757983801 3151 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC flash-freehold-292704 projects/978655420110/instances/tc-billing-case2-ins2-1757983801 79 Analyze Vertex AI reservation usage using BigQuery To analyze how first-party (1P) products, such as Vertex AI, consume your shared reservations across projects where Vertex AI jobs are active, use the following system labels in BigQuery: compute.googleapis.com/reservation name compute.googleapis.com/reservation project id For more information about how to share reservations with first-party (1P) products in Vertex AI, see the following: Use reservations with training Use reservations with online inference Use reservations with Vertex AI Workbench instances The following example queries show how to use these labels to get detailed visibility into your reservation usage, monitor how instances consume these reservations, and perform in-depth cost analysis.
- For resellers : For usage costs generated by a Cloud Billing subaccount , this is the ID of the subaccount, not the ID of the parent reseller Cloud Billing account. invoice.month String The year and month (YYYYMM) of the invoice that includes the cost line items.
- When you enable the detailed usage cost data export for the first time in Cloud Billing, if you select a dataset configured to use a multi-region location (EU or US), Cloud Billing data will be available retroactively from the start of the previous month.

### "Disable billing usage with notifications \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/disable-billing-with-notifications](https://docs.cloud.google.com/billing/docs/how-to/disable-billing-with-notifications)
- Source ID: `site-docs-root-2`
- Final score: 220
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- GOOGLE CLOUD PROJECT ; const PROJECT NAME = projects/ ${ PROJECT ID } ; const billing = new CloudBillingClient (); exports . stopBilling = async pubsubEvent = > { const pubsubData = JSON . parse ( Buffer . from ( pubsubEvent . data , 'base64' ). toString () ); if ( pubsubData . costAmount < = pubsubData . budgetAmount ) { return No action necessary. (Current cost: ${ pubsubData . costAmount } ) ; } if ( !
- What's next Re-enable Cloud Billing for your project Review other programmatic notification examples to learn how to do the following: Listen to your notifications Control resource usage with notifications Send notifications to Slack Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Costs and usage management Cloud Billing Guides Send feedback Disable billing usage with notifications Stay organized with collections Save and categorize content based on your preferences.
- PROJECT ID ) { return 'No project specified' ; } const billingEnabled = await isBillingEnabled ( PROJECT NAME ); if ( billingEnabled ) { return disableBillingForProject ( PROJECT NAME ); } else { return 'Billing already disabled' ; } }; / Determine whether billing is enabled for a project @param {string} projectName Name of project to check if billing is enabled @return {bool} Whether project has billing enabled or not / const isBillingEnabled = async projectName = > { try { const [ res ] = await billing . getProjectBillingInfo ({ name : projectName }); return res . billingEnabled ; } catch ( e ) { console . log ( 'Unable to determine if billing is enabled on specified project, assuming billing is enabled' ); return true ; } }; / Disable billing for a project by removing its billing account @param {string} projectName Name of project disable billing on @return {string} Text containing response from disabling billing / const disableBillingForProject = async projectName = > { const [ res ] = await billing . updateProjectBillingInfo ({ name : projectName , resource : { billingAccountName : '' }, // Disable billing }); return Billing disabled: ${ JSON . stringify ( res ) } ; }; Python WARNING: The following action, if not in simulation mode, will disable billing for the project, potentially stopping all services and causing outages.

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Prerequisites to generate and run a query To generate a query from a Cloud Billing Report , ensure you and your Cloud Billing account meet the following requirements: On your Cloud Billing account, Cloud Billing data export to BigQuery must be enabled, for either the standard usage cost data or detailed usage cost data .
- Service description, Service ID, SKU description, SKU ID, Usage amount, Usage unit Subaccount One row with costs summed per each billing account, including the parent account and its subaccounts.
- When viewing costs by Invoice month , the following data is available in the Cloud Billing reports: Invoices generally include all costs incurred during a given calendar month, but the cost for some services' usage at the very end of a calendar month might roll over to the next month's invoice.
- Due to the complexity of our billing and processing systems, you might see a delay between your use of services, the usage charges being applied to your Google payments accounts, and the usage and costs being available to view in the various cost reports and dashboards.

