---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.348Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable authorized views"
feature_slug: "bigtable-authorized-views"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/access-control"
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient"
keywords:
  - "authorized"
  - "control"
  - "access"
  - "views"
  - "available"
  - "bigtable"
  - "are"
  - "to"
---

# Bigtable authorized views

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Authorized views are available to control access to data in Bigtable tables.

## Extended Definition

Authorized views are available to control access to data in Bigtable tables.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control)
- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient)

## Supporting Pages

### Bigtable access control with IAM \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control)
- Source ID: `site-docs-root-2`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Returned as IAM policies. bigtable.authorizedViews.list List authorized views in a table. bigtable.authorizedViews.mutateRows Modify rows within an authorized view. bigtable.authorizedViews.readRows Read rows from an authorized view. bigtable.authorizedViews.sampleRowKeys Get a sample of the row keys that are used in an authorized view. bigtable.authorizedViews.setIamPolicy Update access control policies for an authorized view. bigtable.authorizedViews.update Update the settings for an authorized view.
- Lowest-level resources where you can grant this role: Table bigtable. bigtable.appProfiles.create bigtable.appProfiles.delete bigtable.appProfiles.get bigtable.appProfiles.list bigtable.appProfiles.update bigtable. authorizedViews. create bigtable. authorizedViews. createTagBinding bigtable. authorizedViews. delete bigtable. authorizedViews. deleteTagBinding bigtable.authorizedViews.get bigtable. authorizedViews. getIamPolicy bigtable.authorizedViews.list bigtable. authorizedViews. listEffectiveTags bigtable. authorizedViews. listTagBindings bigtable. authorizedViews. mutateRows bigtable. authorizedViews. readRows bigtable. authorizedViews. sampleRowKeys bigtable. authorizedViews. setIamPolicy bigtable. authorizedViews. update bigtable.backups.create bigtable.backups.delete bigtable.backups.get bigtable.backups.getIamPolicy bigtable.backups.list bigtable.backups.read bigtable.backups.restore bigtable.backups.setIamPolicy bigtable.backups.update bigtable.clusters.create bigtable.clusters.delete bigtable.clusters.get bigtable.clusters.list bigtable.clusters.update bigtable.hotTablets.list bigtable.instances.create bigtable. instances. createTagBinding bigtable.instances.delete bigtable. instances. deleteTagBinding bigtable. instances. executeQuery bigtable.instances.get bigtable. instances. getIamPolicy bigtable.instances.list bigtable. instances. listEffectiveTags bigtable. instances. listTagBindings bigtable.instances.ping bigtable. instances. setIamPolicy bigtable.instances.update bigtable.keyvisualizer.get bigtable.keyvisualizer.list bigtable.locations.list bigtable.logicalViews.create bigtable.logicalViews.delete bigtable.logicalViews.get bigtable. logicalViews. getIamPolicy bigtable.logicalViews.list bigtable.logicalViews.readRows bigtable. logicalViews. setIamPolicy bigtable.logicalViews.update bigtable. materializedViews. create bigtable. materializedViews. delete bigtable.materializedViews.get bigtable. materializedViews. getIamPolicy bigtable. materializedViews. list bigtable. materializedViews. readRows bigtable. materializedViews. sampleRowKeys bigtable. materializedViews. setIamPolicy bigtable. materializedViews. update bigtable.schemaBundles.create bigtable.schemaBundles.delete bigtable.schemaBundles.get bigtable. schemaBundles. getIamPolicy bigtable.schemaBundles.list bigtable. schemaBundles. setIamPolicy bigtable.schemaBundles.update bigtable. tables. checkConsistency bigtable.tables.create bigtable.tables.delete bigtable. tables. generateConsistencyToken bigtable.tables.get bigtable.tables.getIamPolicy bigtable.tables.list bigtable.tables.mutateRows bigtable.tables.readRows bigtable.tables.sampleRowKeys bigtable.tables.setIamPolicy bigtable.tables.undelete bigtable.tables.update cloudkms.keyHandles. cloudkms.keyHandles.create cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.operations.get cloudkms. projects. showEffectiveAutokeyConfig monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring.timeSeries. monitoring.timeSeries.create monitoring.timeSeries.list resourcemanager.projects.get Bigtable Editor ( roles/ bigtable.editor ) Editor role for bigtable bigtable.appProfiles. bigtable.appProfiles.create bigtable.appProfiles.delete bigtable.appProfiles.get bigtable.appProfiles.list bigtable.appProfiles.update bigtable. authorizedViews. create bigtable. authorizedViews. delete bigtable.authorizedViews.get bigtable. authorizedViews. getIamPolicy bigtable.authorizedViews.list bigtable. authorizedViews. listEffectiveTags bigtable. authorizedViews. listTagBindings bigtable. authorizedViews. mutateRows bigtable. authorizedViews. readRows bigtable. authorizedViews. sampleRowKeys bigtable. authorizedViews. update bigtable.backups.create bigtable.backups.delete bigtable.backups.get bigtable.backups.getIamPolicy bigtable.backups.list bigtable.backups.read bigtable.backups.restore bigtable.backups.update bigtable.clusters. bigtable.clusters.create bigtable.clusters.delete bigtable.clusters.get bigtable.clusters.list bigtable.clusters.update bigtable.hotTablets.list bigtable.instances.create bigtable.instances.delete bigtable. instances. executeQuery bigtable.instances.get bigtable. instances. getIamPolicy bigtable.instances.list bigtable. instances. listEffectiveTags bigtable. instances. listTagBindings bigtable.instances.ping bigtable.instances.update bigtable.keyvisualizer. bigtable.keyvisualizer.get bigtable.keyvisualizer.list bigtable.locations.list bigtable.logicalViews.create bigtable.logicalViews.delete bigtable.logicalViews.get bigtable. logicalViews. getIamPolicy bigtable.logicalViews.list bigtable.logicalViews.readRows bigtable.logicalViews.update bigtable. materializedViews. create bigtable. materializedViews. delete bigtable.materializedViews.get bigtable. materializedViews. getIamPolicy bigtable. materializedViews. list bigtable. materializedViews. readRows bigtable. materializedViews. sampleRowKeys bigtable. materializedViews. update bigtable.schemaBundles.create bigtable.schemaBundles.delete bigtable.schemaBundles.get bigtable. schemaBundles. getIamPolicy bigtable.schemaBundles.list bigtable.schemaBundles.update bigtable. tables. checkConsistency bigtable.tables.create bigtable.tables.delete bigtable. tables. generateConsistencyToken bigtable.tables.get bigtable.tables.getIamPolicy bigtable.tables.list bigtable.tables.mutateRows bigtable.tables.readRows bigtable.tables.sampleRowKeys bigtable.tables.undelete bigtable.tables.update monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring.timeSeries.list resourcemanager.projects.get resourcemanager.projects.list Bigtable User ( roles/ bigtable.user ) Provides read-write access to the data stored within Bigtable tables.
- Lowest-level resources where you can grant this role: Table bigtable.appProfiles.get bigtable.appProfiles.list bigtable.authorizedViews.get bigtable.authorizedViews.list bigtable. authorizedViews. mutateRows bigtable. authorizedViews. readRows bigtable. authorizedViews. sampleRowKeys bigtable.backups.get bigtable.backups.list bigtable.clusters.get bigtable.clusters.list bigtable.hotTablets.list bigtable. instances. executeQuery bigtable.instances.get bigtable.instances.list bigtable.instances.ping bigtable.keyvisualizer. bigtable.keyvisualizer.get bigtable.keyvisualizer.list bigtable.locations.list bigtable.logicalViews.get bigtable.logicalViews.list bigtable.logicalViews.readRows bigtable.materializedViews.get bigtable. materializedViews. list bigtable. materializedViews. readRows bigtable. materializedViews. sampleRowKeys bigtable.schemaBundles.get bigtable.schemaBundles.list bigtable. tables. checkConsistency bigtable. tables. generateConsistencyToken bigtable.tables.get bigtable.tables.list bigtable.tables.mutateRows bigtable.tables.readRows bigtable.tables.sampleRowKeys monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring.timeSeries. monitoring.timeSeries.create monitoring.timeSeries.list resourcemanager.projects.get Bigtable Viewer ( roles/ bigtable.viewer ) Provides no data access.
- Lowest-level resources where you can grant this role: Table bigtable.appProfiles.get bigtable.appProfiles.list bigtable.authorizedViews.get bigtable.authorizedViews.list bigtable.backups.get bigtable.backups.list bigtable.clusters.get bigtable.clusters.list bigtable.hotTablets.list bigtable.instances.get bigtable.instances.list bigtable. instances. listEffectiveTags bigtable. instances. listTagBindings bigtable.locations.list bigtable.logicalViews.get bigtable.logicalViews.list bigtable.materializedViews.get bigtable. materializedViews. list bigtable.schemaBundles.get bigtable.schemaBundles.list bigtable. tables. checkConsistency bigtable. tables. generateConsistencyToken bigtable.tables.get bigtable.tables.list monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring.timeSeries.list resourcemanager.projects.get Bigtable Reader ( roles/ bigtable.reader ) Provides read-only access to the data stored within Bigtable tables.

### "Class BigtableTableAdminAsyncClient (2.35.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- CreateAuthorizedViewRequest ( parent="parent value", authorized view id="authorized view id value", ) Make the request operation = client. create authorized view (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.bigtable admin v2.types.CreateAuthorizedViewRequest , dict]] The request object.
- Returns Type Description google.cloud.bigtable admin v2.services.bigtable table admin.pagers.ListAuthorizedViewsAsyncPager Response message for google.bigtable.admin.v2.BigtableTableAdmin.ListAuthorizedViews][google.bigtable.admin.v2.BigtableTableAdmin.ListAuthorizedViews] Iterating over this object will yield results and resolve additional pages automatically. list backups list backups ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import bigtable admin v2 async def sample list authorized views(): Create a client client = bigtable admin v2.
- ListAuthorizedViewsRequest ( parent="parent value", ) Make the request page result = client. list authorized views (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.bigtable admin v2.types.ListAuthorizedViewsRequest , dict]] The request object.

### "Class BigtableTableAdminClient (2.35.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient)
- Source ID: `site-python-reference`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- CreateAuthorizedViewRequest ( parent="parent value", authorized view id="authorized view id value", ) Make the request operation = client. create authorized view (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.bigtable admin v2.types.CreateAuthorizedViewRequest , dict] The request object.
- Returns Type Description google.cloud.bigtable admin v2.services.bigtable table admin.pagers.ListAuthorizedViewsPager Response message for google.bigtable.admin.v2.BigtableTableAdmin.ListAuthorizedViews][google.bigtable.admin.v2.BigtableTableAdmin.ListAuthorizedViews] Iterating over this object will yield results and resolve additional pages automatically. list backups list backups ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import bigtable admin v2 def sample list authorized views(): Create a client client = bigtable admin v2.
- ListAuthorizedViewsRequest ( parent="parent value", ) Make the request page result = client. list authorized views (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.bigtable admin v2.types.ListAuthorizedViewsRequest , dict] The request object.

