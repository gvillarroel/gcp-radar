---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.318Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud KMS Autokey support for Bigtable clusters"
feature_slug: "cloud-kms-autokey-support-for-bigtable-clusters"
latest_feature_date: "2025-10-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
  - "https://docs.cloud.google.com/bigtable/docs/access-control"
keywords:
  - "autokey"
  - "kms"
  - "clusters"
  - "using"
  - "supports"
  - "bigtable"
  - "for"
  - "now"
---

# Cloud KMS Autokey support for Bigtable clusters

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Bigtable now supports using Cloud KMS Autokey in the Cloud console to automate creation and use of CMEK for Bigtable clusters.

## Extended Definition

Bigtable now supports using Cloud KMS Autokey in the Cloud console to automate creation and use of CMEK for Bigtable clusters.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control)

## Supporting Pages

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- This document applies your knowledge of Apache Cassandra to using Bigtable to describe concepts that you should understand before migrating.
- Nodes are given temporary responsibility for serving various ranges of data based on the operation load and the health of other nodes in the cluster. data center : similar to a Bigtable cluster, except some aspects of topology and replication strategy are configurable in Cassandra. rack : a grouping of nodes in a data center that influences replica placement. cluster : a group of nodes in the same geographic Google Cloud zone, colocated for latency and replication concerns. cluster : a Cassandra deployment consisting of a collection of data centers. instance : a group of Bigtable clusters in different Google Cloud zones or regions between which replication and connection routing occur. vnode : a fixed range of hash values assigned to a specific physical node.
- Cluster size considerations When you size a Bigtable instance to prepare for migrating a Cassandra workload, there are considerations when you compare single-data center Cassandra clusters to single-cluster Bigtable instances, and Cassandra multiple-data center clusters to multi-cluster Bigtable instances.
- When querying Bigtable using SQL, column families are treated like Cassandra's maps . map key : key that uniquely identifies a key-value entry in a Cassandra map column qualifier : a label for a value stored in a table that's indexed by the unique row key.

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- March 24, 2025 Libraries Java 2.56.0 (2025-03-18) Features bigtable: Add support for Logical Views in Admin API ( #2519 ) ( 6dac3fd ) bigtable: Add support for Materialized Views in Admin API ( #2511 ) ( 55cd719 ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.55.1 ( 7992af0 ) Dependencies Sdk-platform-java-config 3.45.1 ( #2517 ) ( b2af258 ) Python 2.30.0 (2025-03-18) Features Update ExecuteQuery to use Prepare ( #1100 ) ( 8a7abc1 ) Bug Fixes Allow protobuf 6.x ( #1092 ) ( 1015fa8 ) Remove setup.cfg configuration for creating universal wheels ( #1097 ) ( 95f4b82 ) March 17, 2025 Libraries Java 2.55.0 (2025-03-11) Features Add MaterializedViewName to ReadRows and SampleRowKeys ( 1763c6e ) Add MaterializedViews and LogicalViews APIs ( 1763c6e ) Add MaterializedViews and LogicalViews APIs ( 7340527 ) Add PrepareQuery api and update ExecuteQuery to support it ( 1763c6e ) bigtable: Add support for data APIs for materialized views ( #2508 ) ( 6310a63 ) large-row-skip: Added large-row-skip-callable with configurable rowadapter ( #2509 ) ( ba193ef ) Next release from main branch is 2.55.0 ( #2506 ) ( 4e45837 ) Publish row key schema fields in table proto and relevant admin APIs to setup a table with a row key schema ( 7340527 ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.54.0 ( 91e4369 ) Documentation Fixed formatting of resource path strings ( 7340527 ) March 11, 2025 Feature You can use Cloud KMS Autokey to automate the creation and use of customer-managed encryption keys (CMEK) in Bigtable clusters.
- Node.js Changes for @google-cloud/bigtable 4.6.0 (2023-05-26) Features Add ChangeStreamConfig to CreateTable and UpdateTable ( #1269 ) ( 2b05fa4 ) 4.5.2 (2023-05-24) Bug Fixes Parsing for qualifiers with colon characters ( #1277 ) ( b80f533 ) May 23, 2023 Change You can now view information about which customer-managed encryption keys (CMEK) are used to protect your Cloud Bigtable resources and projects using Cloud Key Management Service (KMS).
- Java Changes for google-cloud-bigtable 2.27.2 (2023-09-13) Bug Fixes Check that all bulk mutation entries are accounted for ( #1907 ) ( 9ad8a00 ) Set wait timeout on watchdog ( #1913 ) ( f8ba6fe ) Dependencies Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.26 ( #1896 ) ( dfc4231 ) Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.26 ( #1897 ) ( d446856 ) Update shared dependencies ( #1901 ) ( 96f2690 ) 2.27.1 (2023-09-12) Bug Fixes Aggregate batching throttling latency per attempt and reset it between ( #1905 ) ( e6cc5f6 ) Make sure to propagate the response when throttling is enabled ( #1908 ) ( f743187 ) Dependencies Update the Java code generator (gapic-generator-java) to 2.25.0 ( #1902 ) ( f4fe6a0 ) September 11, 2023 Feature You can now choose not to specify the number of nodes when creating a Cloud Bigtable cluster using the gcloud CLI .
- For instances created before June 29, 2016, the instance ID is identical to the cluster ID. (There is one exception to this rule: If you had multiple clusters with the same ID before June 29, 2016, your instance IDs will end with -1 , -2 , and so on, so that each instance has a unique ID.) Feature V2 of the Cloud Bigtable RPC API is now available.

### Bigtable access control with IAM \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control)
- Source ID: `site-docs-root-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Lowest-level resources where you can grant this role: Table bigtable. bigtable.appProfiles.create bigtable.appProfiles.delete bigtable.appProfiles.get bigtable.appProfiles.list bigtable.appProfiles.update bigtable. authorizedViews. create bigtable. authorizedViews. createTagBinding bigtable. authorizedViews. delete bigtable. authorizedViews. deleteTagBinding bigtable.authorizedViews.get bigtable. authorizedViews. getIamPolicy bigtable.authorizedViews.list bigtable. authorizedViews. listEffectiveTags bigtable. authorizedViews. listTagBindings bigtable. authorizedViews. mutateRows bigtable. authorizedViews. readRows bigtable. authorizedViews. sampleRowKeys bigtable. authorizedViews. setIamPolicy bigtable. authorizedViews. update bigtable.backups.create bigtable.backups.delete bigtable.backups.get bigtable.backups.getIamPolicy bigtable.backups.list bigtable.backups.read bigtable.backups.restore bigtable.backups.setIamPolicy bigtable.backups.update bigtable.clusters.create bigtable.clusters.delete bigtable.clusters.get bigtable.clusters.list bigtable.clusters.update bigtable.hotTablets.list bigtable.instances.create bigtable. instances. createTagBinding bigtable.instances.delete bigtable. instances. deleteTagBinding bigtable. instances. executeQuery bigtable.instances.get bigtable. instances. getIamPolicy bigtable.instances.list bigtable. instances. listEffectiveTags bigtable. instances. listTagBindings bigtable.instances.ping bigtable. instances. setIamPolicy bigtable.instances.update bigtable.keyvisualizer.get bigtable.keyvisualizer.list bigtable.locations.list bigtable.logicalViews.create bigtable.logicalViews.delete bigtable.logicalViews.get bigtable. logicalViews. getIamPolicy bigtable.logicalViews.list bigtable.logicalViews.readRows bigtable. logicalViews. setIamPolicy bigtable.logicalViews.update bigtable. materializedViews. create bigtable. materializedViews. delete bigtable.materializedViews.get bigtable. materializedViews. getIamPolicy bigtable. materializedViews. list bigtable. materializedViews. readRows bigtable. materializedViews. sampleRowKeys bigtable. materializedViews. setIamPolicy bigtable. materializedViews. update bigtable.schemaBundles.create bigtable.schemaBundles.delete bigtable.schemaBundles.get bigtable. schemaBundles. getIamPolicy bigtable.schemaBundles.list bigtable. schemaBundles. setIamPolicy bigtable.schemaBundles.update bigtable. tables. checkConsistency bigtable.tables.create bigtable.tables.delete bigtable. tables. generateConsistencyToken bigtable.tables.get bigtable.tables.getIamPolicy bigtable.tables.list bigtable.tables.mutateRows bigtable.tables.readRows bigtable.tables.sampleRowKeys bigtable.tables.setIamPolicy bigtable.tables.undelete bigtable.tables.update cloudkms.keyHandles. cloudkms.keyHandles.create cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.operations.get cloudkms. projects. showEffectiveAutokeyConfig monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring.timeSeries. monitoring.timeSeries.create monitoring.timeSeries.list resourcemanager.projects.get Bigtable Editor ( roles/ bigtable.editor ) Editor role for bigtable bigtable.appProfiles. bigtable.appProfiles.create bigtable.appProfiles.delete bigtable.appProfiles.get bigtable.appProfiles.list bigtable.appProfiles.update bigtable. authorizedViews. create bigtable. authorizedViews. delete bigtable.authorizedViews.get bigtable. authorizedViews. getIamPolicy bigtable.authorizedViews.list bigtable. authorizedViews. listEffectiveTags bigtable. authorizedViews. listTagBindings bigtable. authorizedViews. mutateRows bigtable. authorizedViews. readRows bigtable. authorizedViews. sampleRowKeys bigtable. authorizedViews. update bigtable.backups.create bigtable.backups.delete bigtable.backups.get bigtable.backups.getIamPolicy bigtable.backups.list bigtable.backups.read bigtable.backups.restore bigtable.backups.update bigtable.clusters. bigtable.clusters.create bigtable.clusters.delete bigtable.clusters.get bigtable.clusters.list bigtable.clusters.update bigtable.hotTablets.list bigtable.instances.create bigtable.instances.delete bigtable. instances. executeQuery bigtable.instances.get bigtable. instances. getIamPolicy bigtable.instances.list bigtable. instances. listEffectiveTags bigtable. instances. listTagBindings bigtable.instances.ping bigtable.instances.update bigtable.keyvisualizer. bigtable.keyvisualizer.get bigtable.keyvisualizer.list bigtable.locations.list bigtable.logicalViews.create bigtable.logicalViews.delete bigtable.logicalViews.get bigtable. logicalViews. getIamPolicy bigtable.logicalViews.list bigtable.logicalViews.readRows bigtable.logicalViews.update bigtable. materializedViews. create bigtable. materializedViews. delete bigtable.materializedViews.get bigtable. materializedViews. getIamPolicy bigtable. materializedViews. list bigtable. materializedViews. readRows bigtable. materializedViews. sampleRowKeys bigtable. materializedViews. update bigtable.schemaBundles.create bigtable.schemaBundles.delete bigtable.schemaBundles.get bigtable. schemaBundles. getIamPolicy bigtable.schemaBundles.list bigtable.schemaBundles.update bigtable. tables. checkConsistency bigtable.tables.create bigtable.tables.delete bigtable. tables. generateConsistencyToken bigtable.tables.get bigtable.tables.getIamPolicy bigtable.tables.list bigtable.tables.mutateRows bigtable.tables.readRows bigtable.tables.sampleRowKeys bigtable.tables.undelete bigtable.tables.update monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring.timeSeries.list resourcemanager.projects.get resourcemanager.projects.list Bigtable User ( roles/ bigtable.user ) Provides read-write access to the data stored within Bigtable tables.
- Lowest-level resources where you can grant this role: Table bigtable.appProfiles.get bigtable.appProfiles.list bigtable.authorizedViews.get bigtable.authorizedViews.list bigtable. authorizedViews. readRows bigtable. authorizedViews. sampleRowKeys bigtable.backups.get bigtable.backups.list bigtable.clusters.get bigtable.clusters.list bigtable.hotTablets.list bigtable. instances. executeQuery bigtable.instances.get bigtable.instances.list bigtable.instances.ping bigtable.keyvisualizer. bigtable.keyvisualizer.get bigtable.keyvisualizer.list bigtable.locations.list bigtable.logicalViews.get bigtable.logicalViews.list bigtable.logicalViews.readRows bigtable.materializedViews.get bigtable. materializedViews. list bigtable. materializedViews. readRows bigtable. materializedViews. sampleRowKeys bigtable.schemaBundles.get bigtable.schemaBundles.list bigtable. tables. checkConsistency bigtable. tables. generateConsistencyToken bigtable.tables.get bigtable.tables.list bigtable.tables.readRows bigtable.tables.sampleRowKeys monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring.timeSeries. monitoring.timeSeries.create monitoring.timeSeries.list resourcemanager.projects.get Custom roles If the predefined roles for Bigtable don't address your business requirements, you can define your own custom roles with permissions that you specify.
- Click Save . gcloud If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list If you don't know the instance's table IDs, use the bigtable instances tables list command to view a list of tables in the instance. gcloud bigtable instances tables list --instances = INSTANCE ID If you don't know the view ID, use the bigtable authorized-views list command to see a list of all authorized views of the table. gcloud bigtable instances tables authorized-views list \ --instance = INSTANCE ID \ --table = TABLE ID Use the bigtable authorized-views set-iam-policy command: gcloud bigtable authorized-views set-iam-policy TABLE ID { "</var>" }} \ AUTHORIZED VIEW ID { "</var>" }} --instance = INSTANCE ID { "</var>" }} POLICY FILE { "</var>" }} Provide the following: INSTANCE ID : The permanent identifier for the instance.
- The user or service account is granted the roles that you specified at the table level. gcloud If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list If you don't know the instance's table IDs, use the bigtable instances tables list command to view a list of tables in the instance. gcloud bigtable instances tables list --instances = INSTANCE ID Provide the following: INSTANCE ID : The permanent identifier for the instance.

