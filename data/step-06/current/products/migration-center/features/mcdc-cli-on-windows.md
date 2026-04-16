---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.109Z"
product_name: "Migration Center"
product_slug: "migration-center"
feature_name: "mcdc CLI on Windows"
feature_slug: "mcdc-cli-on-windows"
latest_feature_date: "2023-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient"
  - "https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security"
  - "https://docs.cloud.google.com/migration-center/docs/start-asset-discovery"
keywords:
  - "mcdc"
  - "cli"
  - "on"
  - "windows"
  - "the"
  - "migration"
  - "center"
  - "discovery"
---

# mcdc CLI on Windows

Product: Migration Center
Coverage: MEDIUM

## Step 02 Summary

The Migration Center discovery client CLI can run on Windows while retaining inventory discovery, guest discovery, and IP range scan support.

## Extended Definition

The Migration Center discovery client CLI can run on Windows while retaining inventory discovery, guest discovery, and IP range scan support.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- [https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security](https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security)
- [https://docs.cloud.google.com/migration-center/docs/start-asset-discovery](https://docs.cloud.google.com/migration-center/docs/start-asset-discovery)

## Supporting Pages

### "Class MigrationCenterAsyncClient (0.4.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- Source ID: `site-python-reference`
- Final score: 368
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CreateImportDataFileRequest ( parent="parent value", import data file id="import data file id value", import data file=import data file, ) Make the request operation = client. create import data file (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreateImportDataFileRequest , dict]] The request object.
- CreateReportConfigRequest ( parent="parent value", report config id="report config id value", report config=report config, ) Make the request operation = client. create report config (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreateReportConfigRequest , dict]] The request object.
- CreateImportJobRequest ( parent="parent value", import job id="import job id value", import job=import job, ) Make the request operation = client. create import job (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreateImportJobRequest , dict]] The request object.
- CreatePreferenceSetRequest ( parent="parent value", preference set id="preference set id value", ) Make the request operation = client. create preference set (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreatePreferenceSetRequest , dict]] The request object.

### "Class MigrationCenterClient (0.4.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- Source ID: `site-python-reference`
- Final score: 368
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CreateImportDataFileRequest ( parent="parent value", import data file id="import data file id value", import data file=import data file, ) Make the request operation = client. create import data file (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.CreateImportDataFileRequest , dict] The request object.
- CreateReportConfigRequest ( parent="parent value", report config id="report config id value", report config=report config, ) Make the request operation = client. create report config (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.CreateReportConfigRequest , dict] The request object.
- CreateImportJobRequest ( parent="parent value", import job id="import job id value", import job=import job, ) Make the request operation = client. create import job (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.CreateImportJobRequest , dict] The request object.
- CreatePreferenceSetRequest ( parent="parent value", preference set id="preference set id value", ) Make the request operation = client. create preference set (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.CreatePreferenceSetRequest , dict] The request object.

### "Discovery client data collection and security \_|\_ Migration Center \_\

- URL: [https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security](https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security)
- Source ID: `site-docs-root`
- Final score: 358
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Communication with Google Cloud Registered discovery clients communicate with Google Cloud Migration Center during their normal operation.
- This document addresses concerns and questions about installing the Migration Center discovery client in data centers.
- The communication happens through a service account with the roles/migrationcenter.discoveryClient role binding.
- You can review the actual scripts used for collection at the following links: Linux Full collection Performance collection Windows Full collection Performance collection The collection scripts store the results in an archive file (zip or tar) which the discovery client then retrieves.

### Start an asset discovery \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/start-asset-discovery](https://docs.cloud.google.com/migration-center/docs/start-asset-discovery)
- Source ID: `site-docs-root`
- Final score: 328
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Collected environment Collection method Automated (one-time) Automated (continuous) Manual collection and import Virtual machines on vCenter mcdc CLI Discovery client Upload RVTools data Virtual machines on other hypervisors mcdc CLI 1 Discovery client Manually create and upload data tables Physical servers mcdc CLI 1 Discovery client Manually create and upload data tables AWS EC2s mcdc CLI Discovery client 2 Not available AWS assets mcdc CLI Not available Not available Azure virtual machines ( Preview) mcdc CLI Discovery client 2 Not available Databases mcdc CLI Not available Discover and import databases 1 Use the mcdc CLI for Windows if you need to collect data directly from Windows hosts.
- To learn how data collection works with the mcdc CLI, see Migration Center discovery client CLI overview .
- To perform an automated one-time collection, download and run the Migration Center discovery client CLI, then scan your infrastructure.
- To perform continuous collection, install the discovery client on a Windows machine and allow it to periodically scan your infrastructure and gather configuration and performance data.

