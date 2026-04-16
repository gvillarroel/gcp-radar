---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:00:38.896Z"
product_name: "Cortex"
product_slug: "cortex"
feature_name: "SAP Fiscal and Currency functions"
feature_slug: "sap-fiscal-and-currency-functions"
latest_feature_date: "2024-12-19"
deprecation_date: "2024-12-19"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cortex/docs/external-dags-migration"
  - "https://docs.cloud.google.com/cortex/docs/looker-block-customize"
  - "https://docs.cloud.google.com/cortex/docs/dun-and-bradstreet"
keywords:
  - "sap"
  - "fiscal"
  - "currency"
  - "functions"
  - "provide"
  - "calendar"
  - "conversion"
  - "helper"
---

# SAP Fiscal and Currency functions

Product: Cortex
Coverage: MEDIUM

## Step 02 Summary

SAP Fiscal and Currency functions provide fiscal calendar and currency conversion helper logic in Cortex; deprecated on 2024-12-19.

## Extended Definition

SAP Fiscal and Currency functions provide fiscal calendar and currency conversion helper logic in Cortex; deprecated on 2024-12-19.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/cortex/docs/external-dags-migration](https://docs.cloud.google.com/cortex/docs/external-dags-migration)
- [https://docs.cloud.google.com/cortex/docs/looker-block-customize](https://docs.cloud.google.com/cortex/docs/looker-block-customize)
- [https://docs.cloud.google.com/cortex/docs/dun-and-bradstreet](https://docs.cloud.google.com/cortex/docs/dun-and-bradstreet)

## Supporting Pages

### "External DAGs migration from v4.2 to v5.0 \_|\_ Google Cloud Cortex Framework\

- URL: [https://docs.cloud.google.com/cortex/docs/external-dags-migration](https://docs.cloud.google.com/cortex/docs/external-dags-migration)
- Source ID: `site-docs-reference`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Make sure to remove any DAGs you don't want to migrate from the migrate list section: { "project id src" : "your-source-project" , "project id tgt" : "your-target-project" , "dataset cdc processed" : "your-cdc-processed-dataset" , "dataset reporting tgt" : "your-reporting-target-dataset-OR-SAP REPORTING" , "k9 datasets processing" : "your-k9-processing-dataset-OR-K9 REPORTING" , "migrate list" : [ "holiday calendar" , "trends" , "weather" , "currency conversion" , "inventory snapshots" , "prod hierarchy texts" ] } EOF For example, if you want to remove weather and trends , the script would look like the following: { "project id src" : "kittycorn-demo" , "project id tgt" : "kittycorn-demo" , "dataset cdc processed" : "CDC PROCESSED" , "dataset reporting tgt" : "SAP REPORTING" , "k9 datasets processing" : "K9 PROCESSING" , "migrate list" : [ "holiday calendar" , "currency conversion" , "inventory snapshots" , "prod hierarchy texts" ] } Create an output folder with the following command: mkdir output Generate the parsed migration script with the following command (this command assumes you are at the root of the repository): jinja -d data.json -o output/migrate external dags.sql docs/external dag migration/scripts/migrate external dags.sql Examine the output SQL file and execute in BigQuery to migrate your tables to the new location.
- The following external data sources are now deployed as a part of K9, into the K9 PROCESSING dataset: date dimension holiday calendar trends weather SAP-dependent DAGs The following SAP-dependent DAGs are still triggered by generate external dags.sh script, but now executes during the reporting build step, and now write into the SAP reporting dataset instead of the CDC (Change Data Capture) stage. currency conversion inventory snapshots prod hierarchy texts Migration Guide This guide outlines the steps to upgrade your Cortex Framework Data Foundation to version 5.0.
- Context Cortex Framework Data Foundation versions prior to 4.2 used a GEN EXT flag to manage the deployment of external data sources, with some sources tied to specific workloads (like currency conversion for SAP).
- Migrate existing tables To migrate your existing tables to their new location, use jinja-cli to format the provided migration script template to complete the migration.

### "Customize Looker Blocks \_|\_ Google Cloud Cortex Framework \_|\_ Google\

- URL: [https://docs.cloud.google.com/cortex/docs/looker-block-customize](https://docs.cloud.google.com/cortex/docs/looker-block-customize)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BUSINESS UNIT NAME ) ;; } } Include the new refinement in the Explore : Use the new file in the include property instead of the refinement provided in the Cortex Framework Looker Block. include : "/views/my customizations/sales invoices rfn.view" explore : sales invoices { } Editing LookML dashboard filters The common set of dashboard filters used across multiple LookML dashboards are defined in a dashboard named with template suffix and extended into each dashboard.
- Customize Looker Blocks This page provides an overview of best practices and examples on how to adapt the following Cortex Framework Looker Blocks to your specific business requirements: Looker Block for Oracle EBS Looker Block for Meta Looker Block for YouTube (with DV360) Installation You can install the Cortex Framework Looker Blocks in a few ways, as detailed in the Deploy Looker Blocks documentation.
- These user attributes for default language or currency allow you to customize how dashboards are displayed per user or group.
- Labels can be applied to dimensions to provide them with a business-friendly name.

### "Integration with Dun & Bradstreet \_|\_ Google Cloud Cortex Framework \_\

- URL: [https://docs.cloud.google.com/cortex/docs/dun-and-bradstreet](https://docs.cloud.google.com/cortex/docs/dun-and-bradstreet)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Reporting views Two BigQuery views are provided for this module, in the K9 Reporting dataset (purple objects): SustainableSourcing provides ESG Insights for each vendor.
- The marketplace listing should provide details about the D&B ESG Intelligence offering.
- SustainableVendorSourcing provides vendor performance insights alongside ESG Insights.
- Note: Both methods don't provide the actual data directly.

