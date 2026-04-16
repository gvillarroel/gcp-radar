---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.108Z"
product_name: "Migration Center"
product_slug: "migration-center"
feature_name: "Out-of-scope assets"
feature_slug: "out-of-scope-assets"
latest_feature_date: "2023-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migration-center/docs/view-assets"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient"
  - "https://docs.cloud.google.com/migration-center/docs/migration-execution"
keywords:
  - "out"
  - "of"
  - "scope"
  - "assets"
  - "migration"
  - "center"
  - "lets"
  - "you"
---

# Out-of-scope assets

Product: Migration Center
Coverage: MEDIUM

## Step 02 Summary

Migration Center lets you mark assets as out of scope so they are hidden from groups and excluded from TCO reports.

## Extended Definition

Migration Center lets you mark assets as out of scope so they are hidden from groups and excluded from TCO reports.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migration-center/docs/view-assets](https://docs.cloud.google.com/migration-center/docs/view-assets)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- [https://docs.cloud.google.com/migration-center/docs/migration-execution](https://docs.cloud.google.com/migration-center/docs/migration-execution)

## Supporting Pages

### View the collected assets \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/view-assets](https://docs.cloud.google.com/migration-center/docs/view-assets)
- Source ID: `site-docs-root`
- Final score: 318
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Out of scope assets Migration Center lets you mark assets as out of scope.
- After you add your assets to Migration Center with an automatic scan by using one of the available collection methods , you can review the basic information about your infrastructure directly in Migration Center, both at the asset level, and in aggregate.
- For example, you can see the following structured attributes for an EKS cluster: cluster endpoint access cluster vpc id endpoint kubernetes version logging platform version role arn status Label assets Migration Center lets you assign labels to your assets to help you organize your resources.
- To put one or more assets back in scope, follow these steps: From the Out of scope tab on the Assets page, select the assets that you want to put back in scope, then click Put back in scope .

### "Class MigrationCenterAsyncClient (0.4.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- Source ID: `site-python-reference`
- Final score: 303
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.cloud.migrationcenter v1.types.BatchUpdateAssetsResponse Response for updating a list of assets. cancel operation cancel operation ( request : typing .
- RemoveAssetsFromGroupRequest ( group="group value", assets=assets, ) Make the request operation = client. remove assets from group (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.migrationcenter v1.types.RemoveAssetsFromGroupRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import migrationcenter v1 async def sample remove assets from group(): Create a client client = migrationcenter v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import migrationcenter v1 async def sample aggregate assets values(): Create a client client = migrationcenter v1 .

### "Class MigrationCenterClient (0.4.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- Source ID: `site-python-reference`
- Final score: 303
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.cloud.migrationcenter v1.types.BatchUpdateAssetsResponse Response for updating a list of assets. cancel operation cancel operation ( request : typing .
- Returns Type Description google.cloud.migrationcenter v1.types.Source Source represents an object from which asset information is streamed to Migration Center. group path group path ( project : str , location : str , group : str ) - > str Returns a fully-qualified group string. import data file path import data file path ( project : str , location : str , import job : str , import data file : str ) - > str Returns a fully-qualified import data file string. import job path import job path ( project : str , location : str , import job : str ) - > str Returns a fully-qualified import job string. list assets list assets ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import migrationcenter v1 def sample remove assets from group(): Create a client client = migrationcenter v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import migrationcenter v1 def sample aggregate assets values(): Create a client client = migrationcenter v1 .

### Execute your migration \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/migration-execution](https://docs.cloud.google.com/migration-center/docs/migration-execution)
- Source ID: `site-docs-root`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You must continue to perform discovery and assessment throughout your cloud migration project to recalibrate and enrich data relating to the following aspects: Application and database mapping to infrastructure mapping (to identify all of the infrastructure and platform components for a business workload) Mapping between infrastructure to applications, databases, and services (to identify all of the business workloads attached to an infrastructure or platform component) Dependencies across business workloads Resource consumption by workloads Identification of any workloads that were not discovered in the initial wave of assessment Identification of new or changed landing zone requirements that have not been identified in the initial wave of assessment Identification of blocking issues that potentially prevent the migration An ongoing assessment is critical to continuously calibrate and refine move group, identify and mitigate risks, and refine and optimize migration wave plans.
- The outputs of the deployment phase are the following: Migration plan updates (status per step, notes) Migration issue tracker updates Post-migration test results CMDB updates (if applicable) Migration results communication to stakeholders If the deployment is unsuccessful, for example, if the migration plan fails, the tests fail or the fix is impossible within the defined migration timeframe, you need to execute the rollback plan.
- The outputs of this phase are the following: Move group(s) within the scope of the current sprint Migration sprint checklist Mitigations to remediate blocking issues Migrate, build, test, and deployment plan Rollback plan Scheduling of execution Low-level detailed planning is critical for a successful deployment that follows.
- During the execution phase of your migration, you need to create an architecture of automation tools based on a number of factors, such as the type of workloads to be migrated, geographical distribution and rollout strategy, and security requirements.

