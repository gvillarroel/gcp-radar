---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.889Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "bigquery.jobUser IAM role"
feature_slug: "bigquery-jobuser-iam-role"
latest_feature_date: "2017-05-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/authorized-views"
  - "https://docs.cloud.google.com/bigquery/docs/access-control"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-grant-roles"
keywords:
  - "bigquery"
  - "jobuser"
  - "iam"
  - "role"
  - "provides"
  - "predefined"
---

# bigquery.jobUser IAM role

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery provides the predefined IAM role bigquery.jobUser.

## Extended Definition

BigQuery provides the predefined IAM role bigquery.jobUser.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/authorized-views](https://docs.cloud.google.com/bigquery/docs/authorized-views)
- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-grant-roles](https://docs.cloud.google.com/bigquery/docs/analytics-hub-grant-roles)

## Supporting Pages

### BigQuery IAM roles and permissions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- Source ID: `site-docs-reference-2`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Don't apply the role directly to a resource through Identity and Access Management (IAM). bigquery. rowAccessPolicies. getFilteredData BigQuery Job User ( roles/ bigquery.jobUser ) Provides permissions to run jobs, including queries, within the project.
- BigQuery IAM roles and permissions This document provides a list of Identity and Access Management (IAM) predefined roles and permissions for BigQuery.
- Role Permissions BigQuery Data Policy Admin ( roles/ bigquerydatapolicy.admin ) Role for managing Data Policies in BigQuery This role can only be granted on Resource Manager resources (projects, folders, and organizations). bigquery.dataPolicies.attach bigquery.dataPolicies.create bigquery.dataPolicies.delete bigquery.dataPolicies.get bigquery. dataPolicies. getIamPolicy bigquery.dataPolicies.list bigquery. dataPolicies. setIamPolicy bigquery.dataPolicies.update Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor ) Editor role for bigquerydatapolicy bigquery.bireservations. bigquery.bireservations.get bigquery.bireservations.update bigquery. capacityCommitments. get bigquery. capacityCommitments. list bigquery. capacityCommitments. update bigquery.config. bigquery.config.get bigquery.config.update bigquery.connections.create bigquery.connections.delete bigquery.connections.get bigquery. connections. getIamPolicy bigquery.connections.list bigquery.connections.update bigquery.connections.updateTag bigquery.connections.use bigquery.dataPolicies.attach bigquery.dataPolicies.create bigquery.dataPolicies.delete bigquery.dataPolicies.get bigquery. dataPolicies. getIamPolicy bigquery.dataPolicies.list bigquery.dataPolicies.update bigquery.datasets.create bigquery.datasets.get bigquery.datasets.getIamPolicy bigquery. datasets. listEffectiveTags bigquery. datasets. listTagBindings bigquery.datasets.updateTag bigquery.jobs.create bigquery. jobs. createGlobalQuery bigquery.jobs.delete bigquery.jobs.get bigquery.jobs.list bigquery. jobs. listExecutionMetadata bigquery.models. bigquery.models.create bigquery.models.delete bigquery.models.export bigquery.models.getData bigquery.models.getMetadata bigquery.models.list bigquery.models.updateData bigquery.models.updateMetadata bigquery.models.updateTag bigquery.objectRefs. bigquery.objectRefs.read bigquery.objectRefs.write bigquery.readsessions. bigquery.readsessions.create bigquery.readsessions.getData bigquery.readsessions.update bigquery. reservationAssignments. bigquery. reservationAssignments. create bigquery. reservationAssignments. delete bigquery. reservationAssignments. list bigquery. reservationAssignments. search bigquery.reservationGroups. bigquery. reservationGroups. create bigquery. reservationGroups. delete bigquery.reservationGroups.get bigquery. reservationGroups. list bigquery.reservations.create bigquery.reservations.delete bigquery.reservations.get bigquery. reservations. getIamPolicy bigquery.reservations.list bigquery. reservations. listFailoverDatasets bigquery.reservations.update bigquery.reservations.use bigquery.routines. bigquery.routines.create bigquery.routines.delete bigquery.routines.get bigquery.routines.list bigquery.routines.update bigquery.routines.updateTag bigquery. rowAccessPolicies. create bigquery. rowAccessPolicies. delete bigquery.rowAccessPolicies.get bigquery. rowAccessPolicies. getIamPolicy bigquery. rowAccessPolicies. list bigquery. rowAccessPolicies. update bigquery.savedqueries. bigquery.savedqueries.create bigquery.savedqueries.delete bigquery.savedqueries.get bigquery.savedqueries.list bigquery.savedqueries.update bigquery.tables.createIndex bigquery.tables.createSnapshot bigquery.tables.deleteIndex bigquery.tables.getIamPolicy bigquery. tables. listEffectiveTags bigquery. tables. listTagBindings bigquery.tables.replicateData bigquery. tables. restoreSnapshot bigquery.tables.updateIndex bigquery.transfers. bigquery.transfers.get bigquery.transfers.update resourcemanager.projects.get resourcemanager.projects.list BigQuery Data Policy Viewer ( roles/ bigquerydatapolicy.viewer ) Role for viewing Data Policies in BigQuery This role can only be granted on Resource Manager resources (projects, folders, and organizations). bigquery.dataPolicies.get bigquery.dataPolicies.list Masked Reader ( roles/ bigquerydatapolicy.maskedReader ) Masked read access to sub-resources tagged by the policy tag associated with a data policy, for example, BigQuery columns This role can only be granted on Resource Manager resources (projects, folders, and organizations). bigquery. dataPolicies. maskedGet Raw Data Reader Beta ( roles/ bigquerydatapolicy.rawDataReader ) Raw read access to sub-resources associated with a data policy, for example, BigQuery columns This role can only be granted on Resource Manager resources (projects, folders, and organizations). bigquery. dataPolicies. getRawData BigQuery Data Transfer Service roles This table lists the predefined IAM roles and permissions for BigQuery Data Transfer Service.
- Lowest-level resources where you can grant this role: Saved query Data canvas Data preparation Pipeline Repository This role can also be granted on Resource Manager resources (projects, folders, and organizations). aiplatform.locations.get aiplatform. notebookRuntimeTemplates. apply aiplatform. notebookRuntimeTemplates. get aiplatform. notebookRuntimeTemplates. getIamPolicy aiplatform. notebookRuntimeTemplates. list aiplatform. notebookRuntimes. assign aiplatform. notebookRuntimes. get aiplatform. notebookRuntimes. list aiplatform.operations.list bigquery.config.get bigquery.jobs.create bigquery.readsessions. bigquery.readsessions.create bigquery.readsessions.getData bigquery.readsessions.update cloudaicompanion.companions. cloudaicompanion. companions. generateChat cloudaicompanion. companions. generateCode cloudaicompanion. entitlements. get cloudaicompanion.instances. cloudaicompanion. instances. completeCode cloudaicompanion. instances. completeTask cloudaicompanion. instances. exportMetrics cloudaicompanion. instances. generateCode cloudaicompanion. instances. generateText cloudaicompanion. instances. queryEffectiveSetting cloudaicompanion. instances. queryEffectiveSettingBindings cloudaicompanion. licenses. selfAssign cloudaicompanion. operations. get cloudaicompanion.topics.create cloudkms.keyHandles. cloudkms.keyHandles.create cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.operations.get cloudkms. projects. showEffectiveAutokeyConfig compute.projects.get compute.regions. compute.regions.get compute.regions.list compute.zones. compute.zones.get compute.zones.list dataform.commentThreads.get dataform.commentThreads.list dataform.comments.get dataform.comments.list dataform.folders.create dataform.locations. dataform.locations.get dataform.locations.list dataform.repositories.create dataform.repositories.list dataplex.projects.search dataproc.batches. dataproc.batches.analyze dataproc.batches.cancel dataproc.batches.create dataproc.batches.delete dataproc.batches.get dataproc.batches.list dataproc. batches. sparkApplicationRead dataproc. batches. sparkApplicationWrite dataproc.operations.cancel dataproc.operations.delete dataproc.operations.get dataproc.operations.list dataproc.sessionTemplates. dataproc. sessionTemplates. create dataproc. sessionTemplates. delete dataproc.sessionTemplates.get dataproc.sessionTemplates.list dataproc. sessionTemplates. update dataproc.sessions. dataproc.sessions.create dataproc.sessions.delete dataproc.sessions.get dataproc.sessions.list dataproc. sessions. sparkApplicationRead dataproc. sessions. sparkApplicationWrite dataproc.sessions.terminate dataprocrm.nodePools. dataprocrm.nodePools.create dataprocrm.nodePools.delete dataprocrm. nodePools. deleteNodes dataprocrm.nodePools.get dataprocrm.nodePools.list dataprocrm.nodePools.resize dataprocrm.nodes.get dataprocrm.nodes.heartbeat dataprocrm.nodes.list dataprocrm.nodes.update dataprocrm.operations.get dataprocrm.operations.list dataprocrm.workloads. dataprocrm.workloads.cancel dataprocrm.workloads.create dataprocrm.workloads.delete dataprocrm.workloads.get dataprocrm.workloads.list geminidataanalytics. locations. useDataEngineeringAgent resourcemanager.projects.get resourcemanager.projects.list BigQuery User ( roles/ bigquery.user ) When granted on a dataset, this role provides the ability to read the dataset's metadata and list tables in the dataset.

### Authorized views \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/authorized-views](https://docs.cloud.google.com/bigquery/docs/authorized-views)
- Source ID: `site-docs-reference-5`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Admin permissions on the second dataset that gives access to the view To update dataset properties, you need the following IAM permissions: bigquery.datasets.update bigquery.datasets.setIamPolicy (only required when updating dataset access controls in the Google Cloud console) The roles/bigquery.dataOwner predefined IAM role includes the permissions that you need to update dataset properties.
- User permissions on the project and dataset for the view To share an authorized view with users or groups, you must grant the users or groups the following IAM permissions: The roles/bigquery.jobUser IAM role to the project that contains the authorized view.
- The roles/bigquery.dataEditor predefined IAM role includes the permissions that you need to create a view.
- For more information on IAM roles and permissions in BigQuery, see Predefined roles and permissions .

### Configure BigQuery sharing roles \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-grant-roles](https://docs.cloud.google.com/bigquery/docs/analytics-hub-grant-roles)
- Source ID: `site-docs-reference-2`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Analytics Hub Subscriber and Viewer roles To view and subscribe to listings and data exchanges , Sharing provides the following predefined roles that you can grant for a project, a data exchange, or a listing: Analytics Hub Subscriber role ( roles/analyticshub.subscriber ), which lets users view and subscribe to listings.
- Analytics Hub Publisher and Listing Admin roles To manage listings , Sharing provides the following predefined roles that you can grant for a project, a data exchange, or a listing: Analytics Hub Publisher role ( roles/analyticshub.publisher ), which lets users do the following: Create, update, and delete listings.
- Analytics Hub Subscription Owner role To manage subscriptions , Sharing provides the following predefined role that you can grant at the project level: Analytics Hub Subscription Owner role ( roles/analyticshub.subscriptionOwner ), which lets users manage their subscriptions.
- Analytics Hub Admin role To manage data exchanges , BigQuery sharing provides the Analytics Hub Admin role ( roles/analyticshub.admin ) that you can grant for a Google Cloud project or data exchange.

