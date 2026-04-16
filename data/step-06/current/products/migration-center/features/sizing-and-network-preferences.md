---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.043Z"
product_name: "Migration Center"
product_slug: "migration-center"
feature_name: "Sizing and network preferences"
feature_slug: "sizing-and-network-preferences"
latest_feature_date: "2026-02-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient"
  - "https://docs.cloud.google.com/migration-center/docs/generate-tco-report"
  - "https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/VirtualMachinePreferences"
keywords:
  - "sizing"
  - "and"
  - "network"
  - "preferences"
  - "migration"
  - "center"
  - "lets"
  - "you"
---

# Sizing and network preferences

Product: Migration Center
Coverage: MEDIUM

## Step 02 Summary

Migration Center lets you customize sizing recommendations with target sizing strategy, default utilization estimates, and network data transfer preferences.

## Extended Definition

Migration Center lets you customize sizing recommendations with target sizing strategy, default utilization estimates, and network data transfer preferences.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- [https://docs.cloud.google.com/migration-center/docs/generate-tco-report](https://docs.cloud.google.com/migration-center/docs/generate-tco-report)
- [https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/VirtualMachinePreferences](https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/VirtualMachinePreferences)

## Supporting Pages

### "Class MigrationCenterAsyncClient (0.4.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- Source ID: `site-python-reference`
- Final score: 262
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Class MigrationCenterAsyncClient (0.4.0) Stay organized with collections Save and categorize content based on your preferences.
- CreatePreferenceSetRequest ( parent="parent value", preference set id="preference set id value", ) Make the request operation = client. create preference set (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreatePreferenceSetRequest , dict]] The request object.
- DeletePreferenceSetRequest ( name="name value", ) Make the request operation = client. delete preference set (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.DeletePreferenceSetRequest , dict]] The request object.
- UpdatePreferenceSetRequest ( ) Make the request operation = client. update preference set (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.UpdatePreferenceSetRequest , dict]] The request object.

### "Class MigrationCenterClient (0.4.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- Source ID: `site-python-reference`
- Final score: 262
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Class MigrationCenterClient (0.4.0) Stay organized with collections Save and categorize content based on your preferences.
- CreatePreferenceSetRequest ( parent="parent value", preference set id="preference set id value", ) Make the request operation = client. create preference set (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.CreatePreferenceSetRequest , dict] The request object.
- DeletePreferenceSetRequest ( name="name value", ) Make the request operation = client. delete preference set (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.DeletePreferenceSetRequest , dict] The request object.
- UpdatePreferenceSetRequest ( ) Make the request operation = client. update preference set (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.UpdatePreferenceSetRequest , dict] The request object.

### Generate TCO reports \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/generate-tco-report](https://docs.cloud.google.com/migration-center/docs/generate-tco-report)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Migration Migration Center Guides Send feedback Generate TCO reports Stay organized with collections Save and categorize content based on your preferences.
- If assets don't have performance data, Migration Center generates sizing recommendations based on the target sizing strategy that you choose in the migration preferences.
- Limitations If you generate a TCO report for a group that contains a database deployment and its underlying server, Migration Center generates separate cost estimates for the server and the database.
- It describes the options you have for migrating your groups of assets to Google Cloud, and the associated costs, based on the migration preferences that you specify.

### VirtualMachinePreferences \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/VirtualMachinePreferences](https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/VirtualMachinePreferences)
- Source ID: `site-api-reference`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation ComputeMigrationTargetProduct RegionPreferences JSON representation CommitmentPlan SizingOptimizationStrategy ComputeEnginePreferences JSON representation MachinePreferences JSON representation LicenseType VmwareEnginePreferences JSON representation CommitmentPlan SoleTenancyPreferences JSON representation HostMaintenancePolicy CommitmentPlan VirtualMachinePreferences enables you to create sets of assumptions, for example, a geographical location and pricing track, for your migrated virtual machines.
- Home Documentation Migration Migration Center Reference Send feedback VirtualMachinePreferences Stay organized with collections Save and categorize content based on your preferences.
- If you are unsure which value to set, a moderate sizing optimization strategy is often a good value to start with. compute Engine Preferences object ( ComputeEnginePreferences ) Compute Engine preferences concern insights and recommendations for Compute Engine target. vmware Engine Preferences object ( VmwareEnginePreferences ) Preferences concerning insights and recommendations for Google Cloud VMware Engine. sole Tenancy Preferences object ( SoleTenancyPreferences ) Preferences concerning Sole Tenant nodes and virtual machines.
- JSON representation { "targetProduct" : enum ( ComputeMigrationTargetProduct ) , "regionPreferences" : { object ( RegionPreferences ) } , "commitmentPlan" : enum ( CommitmentPlan ) , "sizingOptimizationStrategy" : enum ( SizingOptimizationStrategy ) , "computeEnginePreferences" : { object ( ComputeEnginePreferences ) } , "vmwareEnginePreferences" : { object ( VmwareEnginePreferences ) } , "soleTenancyPreferences" : { object ( SoleTenancyPreferences ) } } Fields target Product enum ( ComputeMigrationTargetProduct ) Target product for assets using this preference set.

