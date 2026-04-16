---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.088Z"
product_name: "Migration Center"
product_slug: "migration-center"
feature_name: "License cost reduction calculations for disabling simultaneous multithreading"
feature_slug: "license-cost-reduction-calculations-for-disabling-simultaneous-multithreading"
latest_feature_date: "2024-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migration-center/docs/generate-estimate"
  - "https://docs.cloud.google.com/migration-center/docs/estimate/start-estimation"
  - "https://docs.cloud.google.com/migration-center/docs/ramp-overview"
  - "https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/MachineDetails"
keywords:
  - "license"
  - "cost"
  - "reduction"
  - "calculations"
  - "for"
  - "disabling"
  - "simultaneous"
  - "multithreading"
---

# License cost reduction calculations for disabling simultaneous multithreading

Product: Migration Center
Coverage: MEDIUM

## Step 02 Summary

Migration Center can calculate license cost reductions by disabling simultaneous multithreading for Windows Server and Microsoft SQL Server virtual machines.

## Extended Definition

Migration Center can calculate license cost reductions by disabling simultaneous multithreading for Windows Server and Microsoft SQL Server virtual machines.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migration-center/docs/generate-estimate](https://docs.cloud.google.com/migration-center/docs/generate-estimate)
- [https://docs.cloud.google.com/migration-center/docs/estimate/start-estimation](https://docs.cloud.google.com/migration-center/docs/estimate/start-estimation)
- [https://docs.cloud.google.com/migration-center/docs/ramp-overview](https://docs.cloud.google.com/migration-center/docs/ramp-overview)
- [https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/MachineDetails](https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/MachineDetails)

## Supporting Pages

### "Quickstart: Generate a rapid cost estimate \_|\_ Migration Center \_|\_\

- URL: [https://docs.cloud.google.com/migration-center/docs/generate-estimate](https://docs.cloud.google.com/migration-center/docs/generate-estimate)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- In the additional Oracle vCPUs and SAP vCPUs fields that appear, enter the following values: % of total vCPUs running Oracle Database : 32 % of total vCPUs running Oracle Exadata : 0 % of total total vCPUs running Oracle Data Warehouse Database : 0 Storage for Oracle database (GB) : 50 % of total SAP Application vCPUs : 38 % of total SAP Database vCPUs : 12 In the Licenses for all other workloads section, select Windows Server .
- In this example, you will estimate the cost of migrating an on-premises environment that has the following specifications: Contains x86 vCPUs only Includes SAP and Oracle vCPUs Includes both Linux and Windows vCPUs Has a migration timeline of 5 years To follow step-by-step guidance for this task directly in the Google Cloud console, click Guide me : Guide me Before you begin Sign in to your Google Cloud account.
- In this example, to view the breakdown of the annual cost for migrating your on-premises infrastructure to Google Cloud and the breakdown of the annual cost for each product, click View details in the On-premises results card.
- Quickstart: Generate a rapid cost estimate Learn how to generate a rapid cost estimate for running your infrastructure on Google Cloud with Migration Center.

### Start a cost estimation \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/estimate/start-estimation](https://docs.cloud.google.com/migration-center/docs/estimate/start-estimation)
- Source ID: `site-docs-root`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Select one or more types of environments to be migrated to Google Cloud section, click Add to estimate for workload types that you want to migrate to Google Cloud: On-premise: select this calculator card to estimate the cost of migrating your on-premises infrastructure to Google Cloud.
- Data warehousing: select this calculator card to estimate the cost of running your data analytics and warehousing setup from other cloud platforms to BigQuery on Google Cloud.
- Google Cloud VMware Engine: select this calculator card to estimate the costs of running the VMware platform as a fully managed service in Google Cloud.
- On the Estimate cost page, you can start by specifying a name for your estimate.

### "Rapid Migration and Modernization Program (RaMP) overview \_|\_ Migration\

- URL: [https://docs.cloud.google.com/migration-center/docs/ramp-overview](https://docs.cloud.google.com/migration-center/docs/ramp-overview)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Using our advanced tools, we help you identify the highest-value opportunities and workloads, perform total cost of ownership calculations, and establish performance benchmarks to start to maximize immediate business value.
- Using our advanced tools, we help you identify the highest-value opportunities and workloads, perform total cost of ownership calculations, and establish performance benchmarks to start to maximize immediate business value.
- Using our advanced tools, we help you identify the highest-value opportunities and workloads, perform total cost of ownership calculations, and establish performance benchmarks to start to maximize immediate business value.
- Using our advanced tools, we help you identify the highest-value opportunities and workloads, perform total cost of ownership calculations, and establish performance benchmarks to start to maximize immediate business value.

### MachineDetails \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/MachineDetails](https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/MachineDetails)
- Source ID: `site-api-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "applicationName" : string , "vendor" : string , "installTime" : string , "path" : string , "version" : string , "licenses" : [ string ] } Fields application Name string Installed application name. vendor string Installed application vendor. install Time string ( Timestamp format) The time when the application was installed.
- HyperthreadingStatus The Simultaneous Multithreading (Hyperthreading) Status of the machine.
- HYPERTHREADING STATUS DISABLED Simultaneous Multithreading is disabled or unavailable.
- Enums HYPERTHREADING STATUS UNSPECIFIED Simultaneous Multithreading status unknown.

