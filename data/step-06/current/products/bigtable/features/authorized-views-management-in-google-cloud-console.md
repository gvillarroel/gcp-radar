---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:27.990Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Authorized views management in Google Cloud Console"
feature_slug: "authorized-views-management-in-google-cloud-console"
latest_feature_date: "2024-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage"
  - "https://docs.cloud.google.com/bigtable/docs/access-control"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
keywords:
  - "lets"
  - "authorized"
  - "create"
  - "management"
  - "users"
  - "views"
  - "console"
---

# Authorized views management in Google Cloud Console

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud console now lets users create and manage authorized views for Bigtable tables.

## Extended Definition

The Google Cloud console now lets users create and manage authorized views for Bigtable tables.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage](https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage)
- [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)

## Supporting Pages

### Create and manage authorized views \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage](https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage)
- Source ID: `site-docs-reference-2`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create and manage authorized views This document describes how to define, create, and perform other administrative operations on an authorized view using the Google Cloud CLI or the Google Cloud console.
- For more information, see Set up authentication for client libraries . try { CreateAuthorizedViewRequest request = CreateAuthorizedViewRequest . of ( tableId , authorizedViewId ) . setAuthorizedViewType ( SubsetView . create () . addRowPrefix ( "" ) . setFamilySubsets ( COLUMN FAMILY , FamilySubsets . create (). addQualifierPrefix ( COLUMN QUALIFIER NAME ))); AuthorizedView authorizedView = adminClient . createAuthorizedView ( request ); System . out . printf ( "AuthorizedView: %s created successfully%n" , authorizedView . getId ()); } catch ( NotFoundException e ) { System . err . println ( "Failed to create an authorized view from a non-existent table: " + e . getMessage ()); } Modify an authorized view Console Open the list of Bigtable instances in the Google Cloud console.
- For more information, see the reference documentation at gcloud bigtable authorized-views create . gcloud bigtable authorized-views create AUTHORIZED VIEW ID \ --instance = INSTANCE ID \ --table = TABLE ID \ --definition-file = DEFINITION FILE PATH Replace the following: AUTHORIZED VIEW ID : a permanent identifier for the authorized view that is not already in use for the table INSTANCE ID : the permanent identifier for the instance that contains the table TABLE ID : the permanent identifier of that table you are creating an authorized view of DEFINITION FILE PATH : the path to a valid JSON formatted representation of an authorized view.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to perform administrative operations on an authorized view : bigtable.authorizedViews.get bigtable.authorizedViews.list bigtable.authorizedViews.create bigtable.authorizedViews.update bigtable.authorizedViews.delete bigtable.authorizedViews.getIamPolicy bigtable.authorizedViews.setIamPolicy bigtable.authorizedViews.readRows bigtable.authorizedViews.sampleRowKeys bigtable.authorizedViews.mutateRows You might also be able to get these permissions with custom roles or other predefined roles .

### Bigtable access control with IAM \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control)
- Source ID: `site-docs-reference-2`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Lowest-level resources where you can grant this role: Table bigtable. bigtable.appProfiles.create bigtable.appProfiles.delete bigtable.appProfiles.get bigtable.appProfiles.list bigtable.appProfiles.update bigtable. authorizedViews. create bigtable. authorizedViews. createTagBinding bigtable. authorizedViews. delete bigtable. authorizedViews. deleteTagBinding bigtable.authorizedViews.get bigtable. authorizedViews. getIamPolicy bigtable.authorizedViews.list bigtable. authorizedViews. listEffectiveTags bigtable. authorizedViews. listTagBindings bigtable. authorizedViews. mutateRows bigtable. authorizedViews. readRows bigtable. authorizedViews. sampleRowKeys bigtable. authorizedViews. setIamPolicy bigtable. authorizedViews. update bigtable.backups.create bigtable.backups.delete bigtable.backups.get bigtable.backups.getIamPolicy bigtable.backups.list bigtable.backups.read bigtable.backups.restore bigtable.backups.setIamPolicy bigtable.backups.update bigtable.clusters.create bigtable.clusters.delete bigtable.clusters.get bigtable.clusters.list bigtable.clusters.update bigtable.hotTablets.list bigtable.instances.create bigtable. instances. createTagBinding bigtable.instances.delete bigtable. instances. deleteTagBinding bigtable. instances. executeQuery bigtable.instances.get bigtable. instances. getIamPolicy bigtable.instances.list bigtable. instances. listEffectiveTags bigtable. instances. listTagBindings bigtable.instances.ping bigtable. instances. setIamPolicy bigtable.instances.update bigtable.keyvisualizer.get bigtable.keyvisualizer.list bigtable.locations.list bigtable.logicalViews.create bigtable.logicalViews.delete bigtable.logicalViews.get bigtable. logicalViews. getIamPolicy bigtable.logicalViews.list bigtable.logicalViews.readRows bigtable. logicalViews. setIamPolicy bigtable.logicalViews.update bigtable. materializedViews. create bigtable. materializedViews. delete bigtable.materializedViews.get bigtable. materializedViews. getIamPolicy bigtable. materializedViews. list bigtable. materializedViews. readRows bigtable. materializedViews. sampleRowKeys bigtable. materializedViews. setIamPolicy bigtable. materializedViews. update bigtable.schemaBundles.create bigtable.schemaBundles.delete bigtable.schemaBundles.get bigtable. schemaBundles. getIamPolicy bigtable.schemaBundles.list bigtable. schemaBundles. setIamPolicy bigtable.schemaBundles.update bigtable. tables. checkConsistency bigtable.tables.create bigtable.tables.delete bigtable. tables. generateConsistencyToken bigtable.tables.get bigtable.tables.getIamPolicy bigtable.tables.list bigtable.tables.mutateRows bigtable.tables.readRows bigtable.tables.sampleRowKeys bigtable.tables.setIamPolicy bigtable.tables.undelete bigtable.tables.update cloudkms.keyHandles. cloudkms.keyHandles.create cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.operations.get cloudkms. projects. showEffectiveAutokeyConfig monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring.timeSeries. monitoring.timeSeries.create monitoring.timeSeries.list resourcemanager.projects.get Bigtable Editor ( roles/ bigtable.editor ) Editor role for bigtable bigtable.appProfiles. bigtable.appProfiles.create bigtable.appProfiles.delete bigtable.appProfiles.get bigtable.appProfiles.list bigtable.appProfiles.update bigtable. authorizedViews. create bigtable. authorizedViews. delete bigtable.authorizedViews.get bigtable. authorizedViews. getIamPolicy bigtable.authorizedViews.list bigtable. authorizedViews. listEffectiveTags bigtable. authorizedViews. listTagBindings bigtable. authorizedViews. mutateRows bigtable. authorizedViews. readRows bigtable. authorizedViews. sampleRowKeys bigtable. authorizedViews. update bigtable.backups.create bigtable.backups.delete bigtable.backups.get bigtable.backups.getIamPolicy bigtable.backups.list bigtable.backups.read bigtable.backups.restore bigtable.backups.update bigtable.clusters. bigtable.clusters.create bigtable.clusters.delete bigtable.clusters.get bigtable.clusters.list bigtable.clusters.update bigtable.hotTablets.list bigtable.instances.create bigtable.instances.delete bigtable. instances. executeQuery bigtable.instances.get bigtable. instances. getIamPolicy bigtable.instances.list bigtable. instances. listEffectiveTags bigtable. instances. listTagBindings bigtable.instances.ping bigtable.instances.update bigtable.keyvisualizer. bigtable.keyvisualizer.get bigtable.keyvisualizer.list bigtable.locations.list bigtable.logicalViews.create bigtable.logicalViews.delete bigtable.logicalViews.get bigtable. logicalViews. getIamPolicy bigtable.logicalViews.list bigtable.logicalViews.readRows bigtable.logicalViews.update bigtable. materializedViews. create bigtable. materializedViews. delete bigtable.materializedViews.get bigtable. materializedViews. getIamPolicy bigtable. materializedViews. list bigtable. materializedViews. readRows bigtable. materializedViews. sampleRowKeys bigtable. materializedViews. update bigtable.schemaBundles.create bigtable.schemaBundles.delete bigtable.schemaBundles.get bigtable. schemaBundles. getIamPolicy bigtable.schemaBundles.list bigtable.schemaBundles.update bigtable. tables. checkConsistency bigtable.tables.create bigtable.tables.delete bigtable. tables. generateConsistencyToken bigtable.tables.get bigtable.tables.getIamPolicy bigtable.tables.list bigtable.tables.mutateRows bigtable.tables.readRows bigtable.tables.sampleRowKeys bigtable.tables.undelete bigtable.tables.update monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring.timeSeries.list resourcemanager.projects.get resourcemanager.projects.list Bigtable User ( roles/ bigtable.user ) Provides read-write access to the data stored within Bigtable tables.
- Lowest-level resources where you can grant this role: Table bigtable.appProfiles.get bigtable.appProfiles.list bigtable.authorizedViews.get bigtable.authorizedViews.list bigtable. authorizedViews. readRows bigtable. authorizedViews. sampleRowKeys bigtable.backups.get bigtable.backups.list bigtable.clusters.get bigtable.clusters.list bigtable.hotTablets.list bigtable. instances. executeQuery bigtable.instances.get bigtable.instances.list bigtable.instances.ping bigtable.keyvisualizer. bigtable.keyvisualizer.get bigtable.keyvisualizer.list bigtable.locations.list bigtable.logicalViews.get bigtable.logicalViews.list bigtable.logicalViews.readRows bigtable.materializedViews.get bigtable. materializedViews. list bigtable. materializedViews. readRows bigtable. materializedViews. sampleRowKeys bigtable.schemaBundles.get bigtable.schemaBundles.list bigtable. tables. checkConsistency bigtable. tables. generateConsistencyToken bigtable.tables.get bigtable.tables.list bigtable.tables.readRows bigtable.tables.sampleRowKeys monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring.timeSeries. monitoring.timeSeries.create monitoring.timeSeries.list resourcemanager.projects.get Custom roles If the predefined roles for Bigtable don't address your business requirements, you can define your own custom roles with permissions that you specify.
- Lowest-level resources where you can grant this role: Table bigtable.appProfiles.get bigtable.appProfiles.list bigtable.authorizedViews.get bigtable.authorizedViews.list bigtable. authorizedViews. mutateRows bigtable. authorizedViews. readRows bigtable. authorizedViews. sampleRowKeys bigtable.backups.get bigtable.backups.list bigtable.clusters.get bigtable.clusters.list bigtable.hotTablets.list bigtable. instances. executeQuery bigtable.instances.get bigtable.instances.list bigtable.instances.ping bigtable.keyvisualizer. bigtable.keyvisualizer.get bigtable.keyvisualizer.list bigtable.locations.list bigtable.logicalViews.get bigtable.logicalViews.list bigtable.logicalViews.readRows bigtable.materializedViews.get bigtable. materializedViews. list bigtable. materializedViews. readRows bigtable. materializedViews. sampleRowKeys bigtable.schemaBundles.get bigtable.schemaBundles.list bigtable. tables. checkConsistency bigtable. tables. generateConsistencyToken bigtable.tables.get bigtable.tables.list bigtable.tables.mutateRows bigtable.tables.readRows bigtable.tables.sampleRowKeys monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring.timeSeries. monitoring.timeSeries.create monitoring.timeSeries.list resourcemanager.projects.get Bigtable Viewer ( roles/ bigtable.viewer ) Provides no data access.
- Google Cloud console task Required permissions Basic access to the Google Cloud console bigtable.appProfiles.get bigtable.appProfiles.list bigtable.clusters.get bigtable.clusters.list bigtable.instances.get bigtable.instances.list bigtable.locations.list bigtable.tables.get bigtable.tables.list resourcemanager.projects.get Create an instance or cluster Basic access permissions, plus: bigtable.clusters.create bigtable.instances.create Modify an instance or cluster Basic access permissions, plus: bigtable.clusters.update bigtable.instances.update Manage replication configuration Basic access permissions, plus: bigtable.appProfiles.create bigtable.appProfiles.delete bigtable.appProfiles.update Delete an instance or cluster Basic access permissions, plus: bigtable.clusters.delete bigtable.instances.delete Monitor an instance by viewing graphs Basic access permissions, plus: monitoring.metricDescriptors.get monitoring.metricDescriptors.list monitoring.timeSeries.list Create and update a table Basic access permissions, plus: bigtable.tables.create bigtable.tables.update Restore a backup Basic access permissions, plus: bigtable.backups.list bigtable.tables.create bigtable.backups.restore IAM management This section explains how to manage IAM roles and related permissions at project, instance, table, and backup level.

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 167
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Bigtable Key Visualizer , a monitoring feature in the Google Cloud console, lets you perform advanced performance tuning.
- Custom views and alerts can be created in the Cloud Monitoring dashboards, where metrics are automatically available.
- Reviews details about cluster management, monitoring, and security.
- Tablets are not stored on nodes in Bigtable, but are stored in a series of SSTables on Colossus. replication factor : the number of replicas of a vnode that are maintained across all nodes in the data center.

