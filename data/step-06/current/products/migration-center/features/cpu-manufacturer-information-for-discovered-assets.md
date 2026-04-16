---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.047Z"
product_name: "Migration Center"
product_slug: "migration-center"
feature_name: "CPU manufacturer information for discovered assets"
feature_slug: "cpu-manufacturer-information-for-discovered-assets"
latest_feature_date: "2025-10-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient"
  - "https://docs.cloud.google.com/migration-center/docs/view-assets"
  - "https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.assets"
keywords:
  - "cpu"
  - "manufacturer"
  - "information"
  - "for"
  - "discovered"
  - "assets"
  - "migration"
  - "center"
---

# CPU manufacturer information for discovered assets

Product: Migration Center
Coverage: MEDIUM

## Step 02 Summary

Migration Center collects and displays CPU manufacturer information for discovered assets.

## Extended Definition

Migration Center collects and displays CPU manufacturer information for discovered assets.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- [https://docs.cloud.google.com/migration-center/docs/view-assets](https://docs.cloud.google.com/migration-center/docs/view-assets)
- [https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.assets](https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.assets)

## Supporting Pages

### "Class MigrationCenterAsyncClient (0.4.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- Source ID: `site-python-reference`
- Final score: 239
- Re-rank relevance: N/A

Evidence snippets:
- RemoveAssetsFromGroupRequest ( group="group value", assets=assets, ) Make the request operation = client. remove assets from group (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.RemoveAssetsFromGroupRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import migrationcenter v1 async def sample remove assets from group(): Create a client client = migrationcenter v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import migrationcenter v1 async def sample aggregate assets values(): Create a client client = migrationcenter v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import migrationcenter v1 async def sample add assets to group(): Create a client client = migrationcenter v1 .

### "Class MigrationCenterClient (0.4.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- Source ID: `site-python-reference`
- Final score: 239
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.migrationcenter v1.types.Source Source represents an object from which asset information is streamed to Migration Center. group path group path ( project : str , location : str , group : str ) - > str Returns a fully-qualified group string. import data file path import data file path ( project : str , location : str , import job : str , import data file : str ) - > str Returns a fully-qualified import data file string. import job path import job path ( project : str , location : str , import job : str ) - > str Returns a fully-qualified import job string. list assets list assets ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import migrationcenter v1 def sample remove assets from group(): Create a client client = migrationcenter v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import migrationcenter v1 def sample aggregate assets values(): Create a client client = migrationcenter v1 .
- RemoveAssetsFromGroupRequest ( group="group value", assets=assets, ) Make the request operation = client. remove assets from group (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.RemoveAssetsFromGroupRequest , dict] The request object.

### View the collected assets \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/view-assets](https://docs.cloud.google.com/migration-center/docs/view-assets)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: N/A

Evidence snippets:
- This tab shows all the aggregated performance data and statistics collected with the Migration Center discovery client, manual file import, and the mcdc CLI, such as the following: Daily input/output operations per second Daily memory usage Daily CPU usage Network bytes received and sent per second Available details for databases On the details page for a database, you can see the basic information about the database, including the name, engine, edition, and version.
- After you add your assets to Migration Center with an automatic scan by using one of the available collection methods , you can review the basic information about your infrastructure directly in Migration Center, both at the asset level, and in aggregate.
- For example, you can see the following structured attributes for an EKS cluster: cluster endpoint access cluster vpc id endpoint kubernetes version logging platform version role arn status Label assets Migration Center lets you assign labels to your assets to help you organize your resources.
- This tab shows all the data that was collected about your server, including information about CPU, disks, network, and vCenter.

### "REST Resource: projects.locations.assets \_|\_ Migration Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.assets](https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.assets)
- Source ID: `site-api-reference`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource: Asset JSON representation InsightList JSON representation Insight JSON representation MigrationInsight JSON representation FitDescriptor JSON representation FitLevel ComputeEngineMigrationTarget JSON representation ComputeEngineShapeDescriptor JSON representation ComputeStorageDescriptor JSON representation GenericInsight JSON representation AssetPerformanceData JSON representation DailyResourceUsageAggregation JSON representation CPU JSON representation Stats JSON representation Memory JSON representation Network JSON representation Disk JSON representation Methods Resource: Asset An asset represents a resource in your environment.
- Home Documentation Migration Migration Center Reference Send feedback REST Resource: projects.locations.assets Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-17 UTC."],[],[]]
- JSON representation { // Union field insight can be only one of the following: "migrationInsight" : { object ( MigrationInsight ) } , "genericInsight" : { object ( GenericInsight ) } // End of list of possible types for union field insight . } Fields Union field insight . insight can be only one of the following: migration Insight object ( MigrationInsight ) Output only.

