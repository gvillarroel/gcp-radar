---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.104Z"
product_name: "Migration Center"
product_slug: "migration-center"
feature_name: "Google Distributed Cloud air-gapped migration assessment"
feature_slug: "google-distributed-cloud-air-gapped-migration-assessment"
latest_feature_date: "2024-05-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migration-center/docs/run-offline-assessment"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient"
  - "https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security"
keywords:
  - "distributed"
  - "air"
  - "gapped"
  - "migration"
  - "assessment"
  - "the"
  - "mcdc"
  - "cli"
---

# Google Distributed Cloud air-gapped migration assessment

Product: Migration Center
Coverage: MEDIUM

## Step 02 Summary

The mcdc CLI can assess VMware vSphere virtual machines for migration to Google Distributed Cloud air-gapped.

## Extended Definition

The mcdc CLI can assess VMware vSphere virtual machines for migration to Google Distributed Cloud air-gapped.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migration-center/docs/run-offline-assessment](https://docs.cloud.google.com/migration-center/docs/run-offline-assessment)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- [https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security](https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security)

## Supporting Pages

### "Generate an offline assessment \_|\_ Migration Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migration-center/docs/run-offline-assessment](https://docs.cloud.google.com/migration-center/docs/run-offline-assessment)
- Source ID: `site-docs-root`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, to limit the report to the gcp migration journey, run the following command: Linux ./mcdc report --format FORMAT --target-platform gcp --file REPORT NAME Windows mcdc.exe report --format FORMAT --target-platform gcp --file REPORT NAME If you use the mcdc CLI in a Google Distributed Cloud environment , then specify the gdc value for the target platform: Linux ./mcdc report --format FORMAT --target-platform gdc --file REPORT NAME Windows mcdc.exe report --format FORMAT --target-platform gdc --file REPORT NAME What's next Learn how to generate a total cost of ownership (TCO) report .
- The spreadsheet contains a number of worksheets displaying the following: Information about all discovered VMs Information about all discovered application components Fit score for all journeys for each VM and app component A worksheet per journey containing the results for all rules for that journey The mcdc CLI stores assessment data and log information in the /.mcdc directory on the host machine.
- Before you begin To generate an offline assessment report, discover and collect data from your assets with the discovery client or the mcdc CLI .
- Overview The discovery client and the mcdc CLI let you run an offline assessment with the information that you collect in the discovery phase.

### "Class MigrationCenterAsyncClient (0.4.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- Source ID: `site-python-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- CreateImportDataFileRequest ( parent="parent value", import data file id="import data file id value", import data file=import data file, ) Make the request operation = client. create import data file (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreateImportDataFileRequest , dict]] The request object.
- CreateReportConfigRequest ( parent="parent value", report config id="report config id value", report config=report config, ) Make the request operation = client. create report config (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreateReportConfigRequest , dict]] The request object.
- CreateImportJobRequest ( parent="parent value", import job id="import job id value", import job=import job, ) Make the request operation = client. create import job (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreateImportJobRequest , dict]] The request object.
- CreatePreferenceSetRequest ( parent="parent value", preference set id="preference set id value", ) Make the request operation = client. create preference set (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreatePreferenceSetRequest , dict]] The request object.

### "Class MigrationCenterClient (0.4.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- Source ID: `site-python-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- CreateImportDataFileRequest ( parent="parent value", import data file id="import data file id value", import data file=import data file, ) Make the request operation = client. create import data file (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.CreateImportDataFileRequest , dict] The request object.
- CreateReportConfigRequest ( parent="parent value", report config id="report config id value", report config=report config, ) Make the request operation = client. create report config (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.CreateReportConfigRequest , dict] The request object.
- CreateImportJobRequest ( parent="parent value", import job id="import job id value", import job=import job, ) Make the request operation = client. create import job (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.CreateImportJobRequest , dict] The request object.
- CreatePreferenceSetRequest ( parent="parent value", preference set id="preference set id value", ) Make the request operation = client. create preference set (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.CreatePreferenceSetRequest , dict] The request object.

### "Discovery client data collection and security \_|\_ Migration Center \_\

- URL: [https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security](https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security)
- Source ID: `site-docs-root`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- The discovery client logs are collected using two mechanisms: Local logs: The logs are written to file under C:\ProgramData\Google\mcdc\logs .
- Communication with Google Cloud Registered discovery clients communicate with Google Cloud Migration Center during their normal operation.
- Discovery client service and process The discovery client runs as a service called GoogleMCDC under a process called mcdc service.exe .
- This document addresses concerns and questions about installing the Migration Center discovery client in data centers.

