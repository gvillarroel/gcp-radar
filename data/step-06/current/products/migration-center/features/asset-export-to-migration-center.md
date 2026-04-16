---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.113Z"
product_name: "Migration Center"
product_slug: "migration-center"
feature_name: "Asset export to Migration Center"
feature_slug: "asset-export-to-migration-center"
latest_feature_date: "2023-08-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient"
  - "https://docs.cloud.google.com/migration-center/docs/view-assets"
  - "https://docs.cloud.google.com/migration-center/docs/start-asset-discovery"
keywords:
  - "asset"
  - "export"
  - "to"
  - "migration"
  - "center"
  - "the"
  - "mcdc"
  - "cli"
---

# Asset export to Migration Center

Product: Migration Center
Coverage: MEDIUM

## Step 02 Summary

The mcdc CLI can export discovered assets to Migration Center for insight generation and TCO reporting.

## Extended Definition

The mcdc CLI can export discovered assets to Migration Center for insight generation and TCO reporting.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- [https://docs.cloud.google.com/migration-center/docs/view-assets](https://docs.cloud.google.com/migration-center/docs/view-assets)
- [https://docs.cloud.google.com/migration-center/docs/start-asset-discovery](https://docs.cloud.google.com/migration-center/docs/start-asset-discovery)

## Supporting Pages

### "Class MigrationCenterAsyncClient (0.4.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- Source ID: `site-python-reference`
- Final score: 326
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- RemoveAssetsFromGroupRequest ( group="group value", assets=assets, ) Make the request operation = client. remove assets from group (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.RemoveAssetsFromGroupRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import migrationcenter v1 async def sample remove assets from group(): Create a client client = migrationcenter v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import migrationcenter v1 async def sample aggregate assets values(): Create a client client = migrationcenter v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import migrationcenter v1 async def sample add assets to group(): Create a client client = migrationcenter v1 .

### "Class MigrationCenterClient (0.4.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- Source ID: `site-python-reference`
- Final score: 326
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import migrationcenter v1 def sample remove assets from group(): Create a client client = migrationcenter v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import migrationcenter v1 def sample aggregate assets values(): Create a client client = migrationcenter v1 .
- RemoveAssetsFromGroupRequest ( group="group value", assets=assets, ) Make the request operation = client. remove assets from group (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.migrationcenter v1.types.RemoveAssetsFromGroupRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import migrationcenter v1 def sample add assets to group(): Create a client client = migrationcenter v1 .

### View the collected assets \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/view-assets](https://docs.cloud.google.com/migration-center/docs/view-assets)
- Source ID: `site-docs-root`
- Final score: 276
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This tab shows all the aggregated performance data and statistics collected with the Migration Center discovery client, manual file import, and the mcdc CLI, such as the following: Daily input/output operations per second Daily memory usage Daily CPU usage Network bytes received and sent per second Available details for databases On the details page for a database, you can see the basic information about the database, including the name, engine, edition, and version.
- For example, you can see the following structured attributes for an EKS cluster: cluster endpoint access cluster vpc id endpoint kubernetes version logging platform version role arn status Label assets Migration Center lets you assign labels to your assets to help you organize your resources.
- After you add your assets to Migration Center with an automatic scan by using one of the available collection methods , you can review the basic information about your infrastructure directly in Migration Center, both at the asset level, and in aggregate.
- This is useful when the discovery client finds and collects data from assets that you don't plan to migrate, for example corporate desktop machines, or assets that you are going to decommission.

### Start an asset discovery \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/start-asset-discovery](https://docs.cloud.google.com/migration-center/docs/start-asset-discovery)
- Source ID: `site-docs-root`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Collected environment Collection method Automated (one-time) Automated (continuous) Manual collection and import Virtual machines on vCenter mcdc CLI Discovery client Upload RVTools data Virtual machines on other hypervisors mcdc CLI 1 Discovery client Manually create and upload data tables Physical servers mcdc CLI 1 Discovery client Manually create and upload data tables AWS EC2s mcdc CLI Discovery client 2 Not available AWS assets mcdc CLI Not available Not available Azure virtual machines ( Preview) mcdc CLI Discovery client 2 Not available Databases mcdc CLI Not available Discover and import databases 1 Use the mcdc CLI for Windows if you need to collect data directly from Windows hosts.
- To learn how data collection works with the mcdc CLI, see Migration Center discovery client CLI overview .
- To perform an automated one-time collection, download and run the Migration Center discovery client CLI, then scan your infrastructure.
- Finally, export the collected configuration and performance data to Migration Center.

