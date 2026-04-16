---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.049Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable monitoring in GCP Console"
feature_slug: "cloud-bigtable-monitoring-in-gcp-console"
latest_feature_date: "2018-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/autoscaling"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/access-control"
keywords:
  - "charts"
  - "improved"
  - "monitoring"
  - "added"
  - "cluster"
  - "console"
---

# Cloud Bigtable monitoring in GCP Console

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

The GCP Console added improved Cloud Bigtable monitoring with new charts for cluster storage utilization, node count, and replication status.

## Extended Definition

The GCP Console added improved Cloud Bigtable monitoring with new charts for cluster storage utilization, node count, and replication status.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/autoscaling](https://docs.cloud.google.com/bigtable/docs/autoscaling)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control)

## Supporting Pages

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- The Bigtable Google Cloud console page comes with prebuilt dashboards for tracking throughput and utilization metrics at the instance, cluster, and table levels.
- The Bigtable Key Visualizer , a monitoring feature in the Google Cloud console, lets you perform advanced performance tuning.
- You can change the cluster size manually in the Google Cloud console or programmatically using the Cloud Bigtable API.
- Reviews details about cluster management, monitoring, and security.

### Autoscaling \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/autoscaling](https://docs.cloud.google.com/bigtable/docs/autoscaling)
- Source ID: `site-docs-reference-2`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- You can also view these metrics using Cloud Monitoring . bigtable.googleapis.com/cluster/autoscaling/min node count bigtable.googleapis.com/cluster/autoscaling/max node count bigtable.googleapis.com/cluster/autoscaling/recommended node count for cpu bigtable.googleapis.com/cluster/autoscaling/recommended node count for storage Logging Bigtable emits a system event audit log each time it scales a cluster.
- When a node is added to a small cluster, such as a one-node cluster, you might observe a temporary increase in latency as the cluster rebalances.
- You can view autoscaling system event logs on the Bigtable cluster overview page in the Google Cloud console.
- The following metrics are displayed in graphs on the cluster overview page in the Google Cloud console.

### Bigtable access control with IAM \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control)
- Source ID: `site-docs-reference-2`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Google Cloud console task Required permissions Basic access to the Google Cloud console bigtable.appProfiles.get bigtable.appProfiles.list bigtable.clusters.get bigtable.clusters.list bigtable.instances.get bigtable.instances.list bigtable.locations.list bigtable.tables.get bigtable.tables.list resourcemanager.projects.get Create an instance or cluster Basic access permissions, plus: bigtable.clusters.create bigtable.instances.create Modify an instance or cluster Basic access permissions, plus: bigtable.clusters.update bigtable.instances.update Manage replication configuration Basic access permissions, plus: bigtable.appProfiles.create bigtable.appProfiles.delete bigtable.appProfiles.update Delete an instance or cluster Basic access permissions, plus: bigtable.clusters.delete bigtable.instances.delete Monitor an instance by viewing graphs Basic access permissions, plus: monitoring.metricDescriptors.get monitoring.metricDescriptors.list monitoring.timeSeries.list Create and update a table Basic access permissions, plus: bigtable.tables.create bigtable.tables.update Restore a backup Basic access permissions, plus: bigtable.backups.list bigtable.tables.create bigtable.backups.restore IAM management This section explains how to manage IAM roles and related permissions at project, instance, table, and backup level.
- Lowest-level resources where you can grant this role: Table bigtable. bigtable.appProfiles.create bigtable.appProfiles.delete bigtable.appProfiles.get bigtable.appProfiles.list bigtable.appProfiles.update bigtable. authorizedViews. create bigtable. authorizedViews. createTagBinding bigtable. authorizedViews. delete bigtable. authorizedViews. deleteTagBinding bigtable.authorizedViews.get bigtable. authorizedViews. getIamPolicy bigtable.authorizedViews.list bigtable. authorizedViews. listEffectiveTags bigtable. authorizedViews. listTagBindings bigtable. authorizedViews. mutateRows bigtable. authorizedViews. readRows bigtable. authorizedViews. sampleRowKeys bigtable. authorizedViews. setIamPolicy bigtable. authorizedViews. update bigtable.backups.create bigtable.backups.delete bigtable.backups.get bigtable.backups.getIamPolicy bigtable.backups.list bigtable.backups.read bigtable.backups.restore bigtable.backups.setIamPolicy bigtable.backups.update bigtable.clusters.create bigtable.clusters.delete bigtable.clusters.get bigtable.clusters.list bigtable.clusters.update bigtable.hotTablets.list bigtable.instances.create bigtable. instances. createTagBinding bigtable.instances.delete bigtable. instances. deleteTagBinding bigtable. instances. executeQuery bigtable.instances.get bigtable. instances. getIamPolicy bigtable.instances.list bigtable. instances. listEffectiveTags bigtable. instances. listTagBindings bigtable.instances.ping bigtable. instances. setIamPolicy bigtable.instances.update bigtable.keyvisualizer.get bigtable.keyvisualizer.list bigtable.locations.list bigtable.logicalViews.create bigtable.logicalViews.delete bigtable.logicalViews.get bigtable. logicalViews. getIamPolicy bigtable.logicalViews.list bigtable.logicalViews.readRows bigtable. logicalViews. setIamPolicy bigtable.logicalViews.update bigtable. materializedViews. create bigtable. materializedViews. delete bigtable.materializedViews.get bigtable. materializedViews. getIamPolicy bigtable. materializedViews. list bigtable. materializedViews. readRows bigtable. materializedViews. sampleRowKeys bigtable. materializedViews. setIamPolicy bigtable. materializedViews. update bigtable.schemaBundles.create bigtable.schemaBundles.delete bigtable.schemaBundles.get bigtable. schemaBundles. getIamPolicy bigtable.schemaBundles.list bigtable. schemaBundles. setIamPolicy bigtable.schemaBundles.update bigtable. tables. checkConsistency bigtable.tables.create bigtable.tables.delete bigtable. tables. generateConsistencyToken bigtable.tables.get bigtable.tables.getIamPolicy bigtable.tables.list bigtable.tables.mutateRows bigtable.tables.readRows bigtable.tables.sampleRowKeys bigtable.tables.setIamPolicy bigtable.tables.undelete bigtable.tables.update cloudkms.keyHandles. cloudkms.keyHandles.create cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.operations.get cloudkms. projects. showEffectiveAutokeyConfig monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring.timeSeries. monitoring.timeSeries.create monitoring.timeSeries.list resourcemanager.projects.get Bigtable Editor ( roles/ bigtable.editor ) Editor role for bigtable bigtable.appProfiles. bigtable.appProfiles.create bigtable.appProfiles.delete bigtable.appProfiles.get bigtable.appProfiles.list bigtable.appProfiles.update bigtable. authorizedViews. create bigtable. authorizedViews. delete bigtable.authorizedViews.get bigtable. authorizedViews. getIamPolicy bigtable.authorizedViews.list bigtable. authorizedViews. listEffectiveTags bigtable. authorizedViews. listTagBindings bigtable. authorizedViews. mutateRows bigtable. authorizedViews. readRows bigtable. authorizedViews. sampleRowKeys bigtable. authorizedViews. update bigtable.backups.create bigtable.backups.delete bigtable.backups.get bigtable.backups.getIamPolicy bigtable.backups.list bigtable.backups.read bigtable.backups.restore bigtable.backups.update bigtable.clusters. bigtable.clusters.create bigtable.clusters.delete bigtable.clusters.get bigtable.clusters.list bigtable.clusters.update bigtable.hotTablets.list bigtable.instances.create bigtable.instances.delete bigtable. instances. executeQuery bigtable.instances.get bigtable. instances. getIamPolicy bigtable.instances.list bigtable. instances. listEffectiveTags bigtable. instances. listTagBindings bigtable.instances.ping bigtable.instances.update bigtable.keyvisualizer. bigtable.keyvisualizer.get bigtable.keyvisualizer.list bigtable.locations.list bigtable.logicalViews.create bigtable.logicalViews.delete bigtable.logicalViews.get bigtable. logicalViews. getIamPolicy bigtable.logicalViews.list bigtable.logicalViews.readRows bigtable.logicalViews.update bigtable. materializedViews. create bigtable. materializedViews. delete bigtable.materializedViews.get bigtable. materializedViews. getIamPolicy bigtable. materializedViews. list bigtable. materializedViews. readRows bigtable. materializedViews. sampleRowKeys bigtable. materializedViews. update bigtable.schemaBundles.create bigtable.schemaBundles.delete bigtable.schemaBundles.get bigtable. schemaBundles. getIamPolicy bigtable.schemaBundles.list bigtable.schemaBundles.update bigtable. tables. checkConsistency bigtable.tables.create bigtable.tables.delete bigtable. tables. generateConsistencyToken bigtable.tables.get bigtable.tables.getIamPolicy bigtable.tables.list bigtable.tables.mutateRows bigtable.tables.readRows bigtable.tables.sampleRowKeys bigtable.tables.undelete bigtable.tables.update monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring.timeSeries.list resourcemanager.projects.get resourcemanager.projects.list Bigtable User ( roles/ bigtable.user ) Provides read-write access to the data stored within Bigtable tables.
- Lowest-level resources where you can grant this role: Table bigtable.appProfiles.get bigtable.appProfiles.list bigtable.authorizedViews.get bigtable.authorizedViews.list bigtable. authorizedViews. readRows bigtable. authorizedViews. sampleRowKeys bigtable.backups.get bigtable.backups.list bigtable.clusters.get bigtable.clusters.list bigtable.hotTablets.list bigtable. instances. executeQuery bigtable.instances.get bigtable.instances.list bigtable.instances.ping bigtable.keyvisualizer. bigtable.keyvisualizer.get bigtable.keyvisualizer.list bigtable.locations.list bigtable.logicalViews.get bigtable.logicalViews.list bigtable.logicalViews.readRows bigtable.materializedViews.get bigtable. materializedViews. list bigtable. materializedViews. readRows bigtable. materializedViews. sampleRowKeys bigtable.schemaBundles.get bigtable.schemaBundles.list bigtable. tables. checkConsistency bigtable. tables. generateConsistencyToken bigtable.tables.get bigtable.tables.list bigtable.tables.readRows bigtable.tables.sampleRowKeys monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring.timeSeries. monitoring.timeSeries.create monitoring.timeSeries.list resourcemanager.projects.get Custom roles If the predefined roles for Bigtable don't address your business requirements, you can define your own custom roles with permissions that you specify.
- Lowest-level resources where you can grant this role: Table bigtable.appProfiles.get bigtable.appProfiles.list bigtable.authorizedViews.get bigtable.authorizedViews.list bigtable. authorizedViews. mutateRows bigtable. authorizedViews. readRows bigtable. authorizedViews. sampleRowKeys bigtable.backups.get bigtable.backups.list bigtable.clusters.get bigtable.clusters.list bigtable.hotTablets.list bigtable. instances. executeQuery bigtable.instances.get bigtable.instances.list bigtable.instances.ping bigtable.keyvisualizer. bigtable.keyvisualizer.get bigtable.keyvisualizer.list bigtable.locations.list bigtable.logicalViews.get bigtable.logicalViews.list bigtable.logicalViews.readRows bigtable.materializedViews.get bigtable. materializedViews. list bigtable. materializedViews. readRows bigtable. materializedViews. sampleRowKeys bigtable.schemaBundles.get bigtable.schemaBundles.list bigtable. tables. checkConsistency bigtable. tables. generateConsistencyToken bigtable.tables.get bigtable.tables.list bigtable.tables.mutateRows bigtable.tables.readRows bigtable.tables.sampleRowKeys monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring.timeSeries. monitoring.timeSeries.create monitoring.timeSeries.list resourcemanager.projects.get Bigtable Viewer ( roles/ bigtable.viewer ) Provides no data access.

