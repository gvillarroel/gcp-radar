---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.074Z"
product_name: "Migration Center"
product_slug: "migration-center"
feature_name: "Connected Google Cloud project details"
feature_slug: "connected-google-cloud-project-details"
latest_feature_date: "2025-01-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient"
  - "https://docs.cloud.google.com/migration-center/docs/get-started-with-migration-center"
  - "https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.assets"
keywords:
  - "connected"
  - "project"
  - "details"
  - "migration"
  - "center"
  - "now"
  - "shows"
  - "information"
---

# Connected Google Cloud project details

Product: Migration Center
Coverage: MEDIUM

## Step 02 Summary

Migration Center now shows information about the connected Google Cloud project on the settings page.

## Extended Definition

Migration Center now shows information about the connected Google Cloud project on the settings page.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- [https://docs.cloud.google.com/migration-center/docs/get-started-with-migration-center](https://docs.cloud.google.com/migration-center/docs/get-started-with-migration-center)
- [https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.assets](https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.assets)

## Supporting Pages

### "Class MigrationCenterAsyncClient (0.4.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- Source ID: `site-python-reference`
- Final score: 252
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.migrationcenter v1.types.ReportAssetFramesResponse A response to a call to ReportAssetFrame. report config path report config path ( project : str , location : str , report config : str ) - > str Returns a fully-qualified report config string. report path report path ( project : str , location : str , report config : str , report : str ) - > str Returns a fully-qualified report string. run import job run import job ( request : typing .
- Returns Type Description google.cloud.migrationcenter v1.types.AggregateAssetsValuesResponse A response to a request to aggregated assets values. asset path asset path ( project : str , location : str , asset : str ) - > str Returns a fully-qualified asset string. batch delete assets batch delete assets ( request : typing .
- Returns Type Description google.cloud.migrationcenter v1.types.Source Source represents an object from which asset information is streamed to Migration Center. get transport class get transport class ( label : typing .
- The result type for the operation will be Source Source represents an object from which asset information is streamed to Migration Center. validate import job validate import job ( request : typing .

### "Class MigrationCenterClient (0.4.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- Source ID: `site-python-reference`
- Final score: 252
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.migrationcenter v1.types.Source Source represents an object from which asset information is streamed to Migration Center. group path group path ( project : str , location : str , group : str ) - > str Returns a fully-qualified group string. import data file path import data file path ( project : str , location : str , import job : str , import data file : str ) - > str Returns a fully-qualified import data file string. import job path import job path ( project : str , location : str , import job : str ) - > str Returns a fully-qualified import job string. list assets list assets ( request : typing .
- Returns Type Description google.cloud.migrationcenter v1.types.ReportAssetFramesResponse A response to a call to ReportAssetFrame. report config path report config path ( project : str , location : str , report config : str ) - > str Returns a fully-qualified report config string. report path report path ( project : str , location : str , report config : str , report : str ) - > str Returns a fully-qualified report string. run import job run import job ( request : typing .
- Returns Type Description google.cloud.migrationcenter v1.types.AggregateAssetsValuesResponse A response to a request to aggregated assets values. asset path asset path ( project : str , location : str , asset : str ) - > str Returns a fully-qualified asset string. batch delete assets batch delete assets ( request : typing .
- The result type for the operation will be Source Source represents an object from which asset information is streamed to Migration Center. validate import job validate import job ( request : typing .

### Get started with Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/get-started-with-migration-center](https://docs.cloud.google.com/migration-center/docs/get-started-with-migration-center)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: N/A

Evidence snippets:
- Add users to your project To let other users access your Google Cloud project, for example if you want a Google customer engineer to help you with your assessment, grant them the permissions required to manage resources in Migration Center.
- Grant access to Google customer engineers If you want to let Google Cloud customer engineers access your Migration Center project to help you with your migration, you must first give your consent by accepting the terms and conditions .
- Activate Migration Center The first time you access Google Cloud Migration Center from a Google Cloud project in the Google Cloud console, you need to activate Migration Center.
- To start using Google Cloud Migration Center, you need to create an organization and a project in Google Cloud, and you need to activate Migration Center.

### "REST Resource: projects.locations.assets \_|\_ Migration Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.assets](https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.assets)
- Source ID: `site-api-reference`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Migration Migration Center Reference Send feedback REST Resource: projects.locations.assets Stay organized with collections Save and categorize content based on your preferences.
- Methods aggregate Values Aggregates the requested fields based on provided function. batch Delete Deletes list of Assets. batch Update Updates the parameters of a list of assets. delete Deletes an asset. get Gets the details of an asset. list Lists all the assets in a given project and location. patch Updates the parameters of an asset. report Asset Frames Reports a set of frames.
- In case message code is not yet known by the client defaultMessage will be the message to be used instead. additional Information[] string Output only.
- Asset information specific for virtual and physical machines. database Deployment Details object ( DatabaseDeploymentDetails ) Output only.

