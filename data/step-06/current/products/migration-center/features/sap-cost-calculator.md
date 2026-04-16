---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.126Z"
product_name: "Migration Center"
product_slug: "migration-center"
feature_name: "SAP cost calculator"
feature_slug: "sap-cost-calculator"
latest_feature_date: "2023-03-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migration-center/docs/estimate/overview"
  - "https://docs.cloud.google.com/migration-center/docs/generate-estimate"
  - "https://docs.cloud.google.com/migration-center/docs/estimate/start-estimation"
  - "https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/VirtualMachinePreferences"
keywords:
  - "sap"
  - "cost"
  - "calculator"
  - "migration"
  - "center"
  - "includes"
  - "the"
  - "in"
---

# SAP cost calculator

Product: Migration Center
Coverage: MEDIUM

## Step 02 Summary

Migration Center includes the SAP cost calculator in its cost estimation functionality.

## Extended Definition

Migration Center includes the SAP cost calculator in its cost estimation functionality.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migration-center/docs/estimate/overview](https://docs.cloud.google.com/migration-center/docs/estimate/overview)
- [https://docs.cloud.google.com/migration-center/docs/generate-estimate](https://docs.cloud.google.com/migration-center/docs/generate-estimate)
- [https://docs.cloud.google.com/migration-center/docs/estimate/start-estimation](https://docs.cloud.google.com/migration-center/docs/estimate/start-estimation)
- [https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/VirtualMachinePreferences](https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/VirtualMachinePreferences)

## Supporting Pages

### Cost estimation overview \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/estimate/overview](https://docs.cloud.google.com/migration-center/docs/estimate/overview)
- Source ID: `site-docs-root`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Single tool to calculate the cost for running common Google Cloud services When you're planning a migration, especially for very large projects like data center exits, Migration Center gives you the flexibility to specify more than just the infrastructure details such as CPU cores, memory, and storage.
- Benefits Efficient estimation of your cloud cost Migration Center quickly and efficiently estimates the costs of Google Cloud products and services that you need for moving your infrastructure, whether available on-premises or on other cloud providers, to Google Cloud.
- The cost estimation functionality in Google Cloud Migration Center lets you generate rapid offline cost estimates for running your workloads in Google Cloud, with default assumptions automatically applied for optimized configuration.
- Calculators The cost estimation feature includes the following cost calculators: On-premises: Lets you generate a rapid cost estimate for migrating your on-premises infrastructure to Google Cloud.

### "Quickstart: Generate a rapid cost estimate \_|\_ Migration Center \_|\_\

- URL: [https://docs.cloud.google.com/migration-center/docs/generate-estimate](https://docs.cloud.google.com/migration-center/docs/generate-estimate)
- Source ID: `site-docs-root`
- Final score: 259
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In this example, you will estimate the cost of migrating an on-premises environment that has the following specifications: Contains x86 vCPUs only Includes SAP and Oracle vCPUs Includes both Linux and Windows vCPUs Has a migration timeline of 5 years To follow step-by-step guidance for this task directly in the Google Cloud console, click Guide me : Guide me Before you begin Sign in to your Google Cloud account.
- Start estimation In the Google Cloud console, go to the Migration Center Estimate cost page.
- Quickstart: Generate a rapid cost estimate Learn how to generate a rapid cost estimate for running your infrastructure on Google Cloud with Migration Center.
- In the additional Oracle vCPUs and SAP vCPUs fields that appear, enter the following values: % of total vCPUs running Oracle Database : 32 % of total vCPUs running Oracle Exadata : 0 % of total total vCPUs running Oracle Data Warehouse Database : 0 Storage for Oracle database (GB) : 50 % of total SAP Application vCPUs : 38 % of total SAP Database vCPUs : 12 In the Licenses for all other workloads section, select Windows Server .

### Start a cost estimation \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/estimate/start-estimation](https://docs.cloud.google.com/migration-center/docs/estimate/start-estimation)
- Source ID: `site-docs-root`
- Final score: 251
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Start an estimate To skip the Migration Center activation and start your cost estimation, in the Google Cloud console, go to the Migration Center Estimate cost page.
- Alternatively, you can skip the Migration Center activation and go to rapid cost estimation directly, as shown in this document.
- To estimate your cloud cost using Migration Center, first you need to gather some data about your current environment.
- SAP: select this calculator card to estimate the cost of hosting SAP workloads on Google Cloud.

### VirtualMachinePreferences \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/VirtualMachinePreferences](https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/VirtualMachinePreferences)
- Source ID: `site-api-reference`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you are unsure which value to set, the migration service API region is often a good value to start with. commitment Plan enum ( CommitmentPlan ) Commitment plan to consider when calculating costs for virtual machine insights and recommendations.
- If unspecified (default), all types are considered, based on available usage data. machine Preferences object ( MachinePreferences ) Preferences concerning the machine types to consider on Compute Engine. license Type enum ( LicenseType ) License type to consider when calculating costs for virtual machine insights and recommendations.
- Home Documentation Migration Migration Center Reference Send feedback VirtualMachinePreferences Stay organized with collections Save and categorize content based on your preferences.
- MachinePreferences The type of machines to consider when calculating virtual machine migration insights and recommendations.

