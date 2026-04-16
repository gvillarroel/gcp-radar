---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.125Z"
product_name: "Migration Center"
product_slug: "migration-center"
feature_name: "Migration preferences"
feature_slug: "migration-preferences"
latest_feature_date: "2023-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient"
  - "https://docs.cloud.google.com/migration-center/docs/migration-modernization-tools"
  - "https://docs.cloud.google.com/migration-center/docs/get-started-with-migration-center"
keywords:
  - "migration"
  - "preferences"
  - "center"
  - "lets"
  - "users"
  - "define"
  - "multiple"
  - "to"
---

# Migration preferences

Product: Migration Center
Coverage: MEDIUM

## Step 02 Summary

Migration Center lets users define multiple migration preferences to customize migration assessments.

## Extended Definition

Migration Center lets users define multiple migration preferences to customize migration assessments.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- [https://docs.cloud.google.com/migration-center/docs/migration-modernization-tools](https://docs.cloud.google.com/migration-center/docs/migration-modernization-tools)
- [https://docs.cloud.google.com/migration-center/docs/get-started-with-migration-center](https://docs.cloud.google.com/migration-center/docs/get-started-with-migration-center)

## Supporting Pages

### "Class MigrationCenterAsyncClient (0.4.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- Source ID: `site-python-reference`
- Final score: 298
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CreatePreferenceSetRequest ( parent="parent value", preference set id="preference set id value", ) Make the request operation = client. create preference set (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.CreatePreferenceSetRequest , dict]] The request object.
- DeletePreferenceSetRequest ( name="name value", ) Make the request operation = client. delete preference set (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.DeletePreferenceSetRequest , dict]] The request object.
- UpdatePreferenceSetRequest ( ) Make the request operation = client. update preference set (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.UpdatePreferenceSetRequest , dict]] The request object.
- Home Documentation Developer tools Python Client libraries Send feedback Class MigrationCenterAsyncClient (0.4.0) Stay organized with collections Save and categorize content based on your preferences.

### "Class MigrationCenterClient (0.4.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- Source ID: `site-python-reference`
- Final score: 298
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CreatePreferenceSetRequest ( parent="parent value", preference set id="preference set id value", ) Make the request operation = client. create preference set (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.CreatePreferenceSetRequest , dict] The request object.
- DeletePreferenceSetRequest ( name="name value", ) Make the request operation = client. delete preference set (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.DeletePreferenceSetRequest , dict] The request object.
- UpdatePreferenceSetRequest ( ) Make the request operation = client. update preference set (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.UpdatePreferenceSetRequest , dict] The request object.
- Home Documentation Developer tools Python Client libraries Send feedback Class MigrationCenterClient (0.4.0) Stay organized with collections Save and categorize content based on your preferences.

### Migration tools \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/migration-modernization-tools](https://docs.cloud.google.com/migration-center/docs/migration-modernization-tools)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- RackWare Management Module (RMM) is a fully-automated enterprise-grade migration solution that lets you migrate physical and virtual servers from any data center or public cloud into Google Cloud.
- Home Documentation Migration Migration Center Guides Send feedback Migration tools Stay organized with collections Save and categorize content based on your preferences.
- The following list includes additional migration tools: Storage Transfer Service lets you bring data to Cloud Storage from other cloud providers, online resources, or local data (for example: S3, Blob, Data Lake, on-premises file systems).
- Migration tools are at the center of migration execution.

### Get started with Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/get-started-with-migration-center](https://docs.cloud.google.com/migration-center/docs/get-started-with-migration-center)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Add users to your project To let other users access your Google Cloud project, for example if you want a Google customer engineer to help you with your assessment, grant them the permissions required to manage resources in Migration Center.
- Grant access to Google customer engineers If you want to let Google Cloud customer engineers access your Migration Center project to help you with your migration, you must first give your consent by accepting the terms and conditions .
- Home Documentation Migration Migration Center Guides Send feedback Get started with Migration Center Stay organized with collections Save and categorize content based on your preferences.
- Update your Expert Request number To update your Expert Request number after activating Migration Center, follow these steps: In the Google Cloud console, go to the Migration Center page.

