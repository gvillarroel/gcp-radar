---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.120Z"
product_name: "Migration Center"
product_slug: "migration-center"
feature_name: "Data warehousing cost calculator"
feature_slug: "data-warehousing-cost-calculator"
latest_feature_date: "2023-05-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migration-center/docs/estimate/overview"
  - "https://docs.cloud.google.com/migration-center/docs/estimate/start-estimation"
  - "https://docs.cloud.google.com/migration-center/docs/generate-estimate"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient"
keywords:
  - "warehousing"
  - "cost"
  - "calculator"
  - "migration"
  - "center"
  - "estimation"
  - "functionality"
  - "includes"
---

# Data warehousing cost calculator

Product: Migration Center
Coverage: MEDIUM

## Step 02 Summary

Migration Center's cost estimation functionality includes a generally available data warehousing cost calculator for BigQuery serverless data warehouse estimates.

## Extended Definition

Migration Center's cost estimation functionality includes a generally available data warehousing cost calculator for BigQuery serverless data warehouse estimates.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migration-center/docs/estimate/overview](https://docs.cloud.google.com/migration-center/docs/estimate/overview)
- [https://docs.cloud.google.com/migration-center/docs/estimate/start-estimation](https://docs.cloud.google.com/migration-center/docs/estimate/start-estimation)
- [https://docs.cloud.google.com/migration-center/docs/generate-estimate](https://docs.cloud.google.com/migration-center/docs/generate-estimate)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)

## Supporting Pages

### Cost estimation overview \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/estimate/overview](https://docs.cloud.google.com/migration-center/docs/estimate/overview)
- Source ID: `site-docs-root`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The cost estimation functionality in Google Cloud Migration Center lets you generate rapid offline cost estimates for running your workloads in Google Cloud, with default assumptions automatically applied for optimized configuration.
- Benefits Efficient estimation of your cloud cost Migration Center quickly and efficiently estimates the costs of Google Cloud products and services that you need for moving your infrastructure, whether available on-premises or on other cloud providers, to Google Cloud.
- Calculators The cost estimation feature includes the following cost calculators: On-premises: Lets you generate a rapid cost estimate for migrating your on-premises infrastructure to Google Cloud.
- Routing data through the cost estimation feature within Migration Center gives a more consistent cost output that can be used to compare migration costs and evaluate different what-if scenarios.

### Start a cost estimation \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/estimate/start-estimation](https://docs.cloud.google.com/migration-center/docs/estimate/start-estimation)
- Source ID: `site-docs-root`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Migration Migration Center Guides Send feedback Start a cost estimation Stay organized with collections Save and categorize content based on your preferences.
- Start an estimate To skip the Migration Center activation and start your cost estimation, in the Google Cloud console, go to the Migration Center Estimate cost page.
- Alternatively, you can skip the Migration Center activation and go to rapid cost estimation directly, as shown in this document.
- If you access the cost estimation tool from the Migration Center homepage, you need to activate Migration Center .

### "Quickstart: Generate a rapid cost estimate \_|\_ Migration Center \_|\_\

- URL: [https://docs.cloud.google.com/migration-center/docs/generate-estimate](https://docs.cloud.google.com/migration-center/docs/generate-estimate)
- Source ID: `site-docs-root`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Start estimation In the Google Cloud console, go to the Migration Center Estimate cost page.
- In this example, you will estimate the cost of migrating an on-premises environment that has the following specifications: Contains x86 vCPUs only Includes SAP and Oracle vCPUs Includes both Linux and Windows vCPUs Has a migration timeline of 5 years To follow step-by-step guidance for this task directly in the Google Cloud console, click Guide me : Guide me Before you begin Sign in to your Google Cloud account.
- Quickstart: Generate a rapid cost estimate Learn how to generate a rapid cost estimate for running your infrastructure on Google Cloud with Migration Center.
- Home Documentation Migration Migration Center Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### "Class MigrationCenterAsyncClient (0.4.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- Source ID: `site-python-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- CreateImportDataFileRequest ( parent="parent value", import data file id="import data file id value", import data file=import data file, ) Make the request operation = client. create import data file (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreateImportDataFileRequest , dict]] The request object.
- Returns Type Description google.cloud.migrationcenter v1.types.ReportAssetFramesResponse A response to a call to ReportAssetFrame. report config path report config path ( project : str , location : str , report config : str ) - > str Returns a fully-qualified report config string. report path report path ( project : str , location : str , report config : str , report : str ) - > str Returns a fully-qualified report string. run import job run import job ( request : typing .
- CreateReportConfigRequest ( parent="parent value", report config id="report config id value", report config=report config, ) Make the request operation = client. create report config (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreateReportConfigRequest , dict]] The request object.
- CreateImportJobRequest ( parent="parent value", import job id="import job id value", import job=import job, ) Make the request operation = client. create import job (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreateImportJobRequest , dict]] The request object.

