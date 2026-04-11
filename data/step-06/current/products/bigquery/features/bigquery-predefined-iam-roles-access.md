---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.937Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery predefined IAM roles access"
feature_slug: "bigquery-predefined-iam-roles-access"
latest_feature_date: "2016-08-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/access-control-intro"
  - "https://docs.cloud.google.com/bigquery/docs/access-control"
keywords:
  - "BigQuery predefined roles"
  - "predefined IAM roles"
  - "roles available to all users"
  - "default IAM roles"
  - "managed IAM roles"
  - "built-in roles"
  - "IAM role access"
---

# BigQuery predefined IAM roles access

Product: BigQuery
Coverage: LOW

## Step 02 Summary

Updated beta predefined IAM roles for BigQuery were made accessible to all users.

## Extended Definition

Updated beta predefined IAM roles for BigQuery were made accessible to all users.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/access-control-intro](https://docs.cloud.google.com/bigquery/docs/access-control-intro)
- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)

## Supporting Pages

### "Introduction to security and access controls in BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/access-control-intro](https://docs.cloud.google.com/bigquery/docs/access-control-intro)
- Source ID: `site-docs-root-2`
- Final score: 28
- Re-rank relevance: MODERATE
- Re-rank rationale: The page explains BigQuery predefined and custom IAM roles and permission assignment, which is useful context for understanding predefined IAM role access.

Evidence snippets:
- Note: When new capabilities are added to BigQuery, new permissions might be added to predefined IAM roles.
- For a list of BigQuery predefined IAM roles and permissions, see BigQuery IAM roles and permissions .
- Also, new predefined IAM roles can be added to BigQuery at any time.

### BigQuery IAM roles and permissions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Role Permissions BigQuery Data Policy Admin ( roles/ bigquerydatapolicy.admin ) Role for managing Data Policies in BigQuery This role can only be granted on Resource Manager resources (projects, folders, and organizations). bigquery.dataPolicies.attach bigquery.dataPolicies.create bigquery.dataPolicies.delete bigquery.dataPolicies.get bigquery. dataPolicies. getIamPolicy bigquery.dataPolicies.list bigquery. dataPolicies. setIamPolicy bigquery.dataPolicies.update Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor ) Editor role for bigquerydatapolicy bigquery.bireservations. bigquery.bireservations.get bigquery.bireservations.update bigquery. capacityCommitments. get bigquery. capacityCommitments. list bigquery. capacityCommitments. update bigquery.config. bigquery.config.get bigquery.config.update bigquery.connections.create bigquery.connections.delete bigquery.connections.get bigquery. connections. getIamPolicy bigquery.connections.list bigquery.connections.update bigquery.connections.updateTag bigquery.connections.use bigquery.dataPolicies.attach bigquery.dataPolicies.create bigquery.dataPolicies.delete bigquery.dataPolicies.get bigquery. dataPolicies. getIamPolicy bigquery.dataPolicies.list bigquery.dataPolicies.update bigquery.datasets.create bigquery.datasets.get bigquery.datasets.getIamPolicy bigquery. datasets. listEffectiveTags bigquery. datasets. listTagBindings bigquery.datasets.updateTag bigquery.jobs.create bigquery. jobs. createGlobalQuery bigquery.jobs.delete bigquery.jobs.get bigquery.jobs.list bigquery. jobs. listExecutionMetadata bigquery.models. bigquery.models.create bigquery.models.delete bigquery.models.export bigquery.models.getData bigquery.models.getMetadata bigquery.models.list bigquery.models.updateData bigquery.models.updateMetadata bigquery.models.updateTag bigquery.objectRefs. bigquery.objectRefs.read bigquery.objectRefs.write bigquery.readsessions. bigquery.readsessions.create bigquery.readsessions.getData bigquery.readsessions.update bigquery. reservationAssignments. bigquery. reservationAssignments. create bigquery. reservationAssignments. delete bigquery. reservationAssignments. list bigquery. reservationAssignments. search bigquery.reservationGroups. bigquery. reservationGroups. create bigquery. reservationGroups. delete bigquery.reservationGroups.get bigquery. reservationGroups. list bigquery.reservations.create bigquery.reservations.delete bigquery.reservations.get bigquery. reservations. getIamPolicy bigquery.reservations.list bigquery. reservations. listFailoverDatasets bigquery.reservations.update bigquery.reservations.use bigquery.routines. bigquery.routines.create bigquery.routines.delete bigquery.routines.get bigquery.routines.list bigquery.routines.update bigquery.routines.updateTag bigquery. rowAccessPolicies. create bigquery. rowAccessPolicies. delete bigquery.rowAccessPolicies.get bigquery. rowAccessPolicies. getIamPolicy bigquery. rowAccessPolicies. list bigquery. rowAccessPolicies. update bigquery.savedqueries. bigquery.savedqueries.create bigquery.savedqueries.delete bigquery.savedqueries.get bigquery.savedqueries.list bigquery.savedqueries.update bigquery.tables.createIndex bigquery.tables.createSnapshot bigquery.tables.deleteIndex bigquery.tables.getIamPolicy bigquery. tables. listEffectiveTags bigquery. tables. listTagBindings bigquery.tables.replicateData bigquery. tables. restoreSnapshot bigquery.tables.updateIndex bigquery.transfers. bigquery.transfers.get bigquery.transfers.update resourcemanager.projects.get resourcemanager.projects.list Masked Reader ( roles/ bigquerydatapolicy.maskedReader ) Masked read access to sub-resources tagged by the policy tag associated with a data policy, for example, BigQuery columns This role can only be granted on Resource Manager resources (projects, folders, and organizations). bigquery. dataPolicies. maskedGet Raw Data Reader Beta ( roles/ bigquerydatapolicy.rawDataReader ) Raw read access to sub-resources associated with a data policy, for example, BigQuery columns This role can only be granted on Resource Manager resources (projects, folders, and organizations). bigquery. dataPolicies. getRawData BigQuery Data Policy Viewer ( roles/ bigquerydatapolicy.viewer ) Role for viewing Data Policies in BigQuery This role can only be granted on Resource Manager resources (projects, folders, and organizations). bigquery.dataPolicies.get bigquery.dataPolicies.list BigQuery Data Transfer Service roles This table lists the predefined IAM roles and permissions for BigQuery Data Transfer Service.
- Role Permissions Bigquerymigration Admin ( roles/ bigquerymigration.admin ) Admin role for bigquerymigration bigquerymigration. bigquerymigration.subtasks.get bigquerymigration. subtasks. list bigquerymigration. translation. translate bigquerymigration. workflows. create bigquerymigration. workflows. delete bigquerymigration. workflows. enableAiOutputTypes bigquerymigration. workflows. enableLineageOutputTypes bigquerymigration. workflows. enableOutputTypePermissions bigquerymigration. workflows. get bigquerymigration. workflows. list bigquerymigration. workflows. orchestrateTask bigquerymigration. workflows. update resourcemanager.projects.get resourcemanager.projects.list MigrationWorkflow Editor ( roles/ bigquerymigration.editor ) Editor of EDW migration workflows. bigquerymigration.subtasks. bigquerymigration.subtasks.get bigquerymigration. subtasks. list bigquerymigration. workflows. create bigquerymigration. workflows. delete bigquerymigration. workflows. enableAiOutputTypes bigquerymigration. workflows. enableLineageOutputTypes bigquerymigration. workflows. enableOutputTypePermissions bigquerymigration. workflows. get bigquerymigration. workflows. list bigquerymigration. workflows. update Task Orchestrator ( roles/ bigquerymigration.orchestrator ) Orchestrator of EDW migration tasks. bigquerymigration. workflows. orchestrateTask storage.objects.list Migration Translation User ( roles/ bigquerymigration.translationUser ) User of EDW migration interactive SQL translation service. bigquerymigration. translation. translate MigrationWorkflow Viewer ( roles/ bigquerymigration.viewer ) Viewer of EDW migration MigrationWorkflow. bigquerymigration.subtasks. bigquerymigration.subtasks.get bigquerymigration. subtasks. list bigquerymigration. workflows. get bigquerymigration. workflows. list Task Worker ( roles/ bigquerymigration.worker ) Worker that executes EDW migration subtasks. storage.objects.create storage.objects.get storage.objects.list BigQuery Omni roles This table lists the predefined IAM roles and permissions for BigQuery Omni.
- Lowest-level resources where you can grant this role: Dataset These resources within a dataset: Routine This role can also be granted on Resource Manager resources (projects, folders, and organizations). bigquery.bireservations.get bigquery. capacityCommitments. get bigquery. capacityCommitments. list bigquery.config.get bigquery.datasets.create bigquery.datasets.get bigquery.datasets.getIamPolicy bigquery.jobs.create bigquery.jobs.list bigquery.models.list bigquery.readsessions. bigquery.readsessions.create bigquery.readsessions.getData bigquery.readsessions.update bigquery. reservationAssignments. list bigquery. reservationAssignments. search bigquery.reservationGroups.get bigquery. reservationGroups. list bigquery.reservations.get bigquery.reservations.list bigquery. reservations. listFailoverDatasets bigquery.reservations.use bigquery.routines.list bigquery.savedqueries.get bigquery.savedqueries.list bigquery.tables.list bigquery.transfers.get bigquerymigration. translation. translate cloudkms.keyHandles. cloudkms.keyHandles.create cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.operations.get cloudkms. projects. showEffectiveAutokeyConfig dataform.folders.create dataform.locations. dataform.locations.get dataform.locations.list dataform.repositories.create dataform.repositories.list dataplex.projects.search resourcemanager.projects.get resourcemanager.projects.list BigQuery Connection API roles This table lists the predefined IAM roles and permissions for BigQuery Connection API.
- Warning: Do not grant service agent roles to any principals except service agents . compute. networkAttachments. create compute. networkAttachments. delete compute.networkAttachments.get compute. networkAttachments. list compute. networkAttachments. update compute.networks.get compute.networks.list compute.regionOperations.get compute.subnetworks.get compute.subnetworks.list compute.subnetworks.use dns. networks. targetWithPeeringZone managedkafka.clusters.get managedkafka.clusters.list managedkafka.clusters.update monitoring. metricDescriptors. create monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring. monitoredResourceDescriptors. monitoring. monitoredResourceDescriptors. get monitoring. monitoredResourceDescriptors. list monitoring.timeSeries.create serviceusage.services.use storage.objects.get Managed Flink Viewer Beta ( roles/ managedflink.viewer ) Readonly access to Managed Flink resources. managedflink.deployments.get managedflink.deployments.list managedflink.jobs.get managedflink.jobs.list managedflink.locations. managedflink.locations.get managedflink.locations.list managedflink.operations.get managedflink.operations.list managedflink.sessions.get managedflink.sessions.list resourcemanager.projects.get resourcemanager.projects.list BigQuery Migration Service roles This table lists the predefined IAM roles and permissions for BigQuery Migration Service.

