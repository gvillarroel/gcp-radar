---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.912Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery predefined IAM roles"
feature_slug: "bigquery-predefined-iam-roles"
latest_feature_date: "2016-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/access-control-intro"
  - "https://docs.cloud.google.com/bigquery/docs/access-control"
  - "https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam"
keywords:
  - "bigquery"
  - "predefined"
  - "iam"
  - "roles"
  - "provides"
  - "access"
  - "control"
---

# BigQuery predefined IAM roles

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery provides predefined IAM roles for access control.

## Extended Definition

BigQuery provides predefined IAM roles for access control.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/access-control-intro](https://docs.cloud.google.com/bigquery/docs/access-control-intro)
- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)

## Supporting Pages

### BigQuery IAM roles and permissions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- Source ID: `site-docs-reference-2`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigQuery IAM roles and permissions This document provides a list of Identity and Access Management (IAM) predefined roles and permissions for BigQuery.
- For information on granting predefined roles on BigQuery resources like datasets, tables, and routines, see Control access to resources with IAM .
- Role Permissions BigQuery Data Policy Admin ( roles/ bigquerydatapolicy.admin ) Role for managing Data Policies in BigQuery This role can only be granted on Resource Manager resources (projects, folders, and organizations). bigquery.dataPolicies.attach bigquery.dataPolicies.create bigquery.dataPolicies.delete bigquery.dataPolicies.get bigquery. dataPolicies. getIamPolicy bigquery.dataPolicies.list bigquery. dataPolicies. setIamPolicy bigquery.dataPolicies.update Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor ) Editor role for bigquerydatapolicy bigquery.bireservations. bigquery.bireservations.get bigquery.bireservations.update bigquery. capacityCommitments. get bigquery. capacityCommitments. list bigquery. capacityCommitments. update bigquery.config. bigquery.config.get bigquery.config.update bigquery.connections.create bigquery.connections.delete bigquery.connections.get bigquery. connections. getIamPolicy bigquery.connections.list bigquery.connections.update bigquery.connections.updateTag bigquery.connections.use bigquery.dataPolicies.attach bigquery.dataPolicies.create bigquery.dataPolicies.delete bigquery.dataPolicies.get bigquery. dataPolicies. getIamPolicy bigquery.dataPolicies.list bigquery.dataPolicies.update bigquery.datasets.create bigquery.datasets.get bigquery.datasets.getIamPolicy bigquery. datasets. listEffectiveTags bigquery. datasets. listTagBindings bigquery.datasets.updateTag bigquery.jobs.create bigquery. jobs. createGlobalQuery bigquery.jobs.delete bigquery.jobs.get bigquery.jobs.list bigquery. jobs. listExecutionMetadata bigquery.models. bigquery.models.create bigquery.models.delete bigquery.models.export bigquery.models.getData bigquery.models.getMetadata bigquery.models.list bigquery.models.updateData bigquery.models.updateMetadata bigquery.models.updateTag bigquery.objectRefs. bigquery.objectRefs.read bigquery.objectRefs.write bigquery.readsessions. bigquery.readsessions.create bigquery.readsessions.getData bigquery.readsessions.update bigquery. reservationAssignments. bigquery. reservationAssignments. create bigquery. reservationAssignments. delete bigquery. reservationAssignments. list bigquery. reservationAssignments. search bigquery.reservationGroups. bigquery. reservationGroups. create bigquery. reservationGroups. delete bigquery.reservationGroups.get bigquery. reservationGroups. list bigquery.reservations.create bigquery.reservations.delete bigquery.reservations.get bigquery. reservations. getIamPolicy bigquery.reservations.list bigquery. reservations. listFailoverDatasets bigquery.reservations.update bigquery.reservations.use bigquery.routines. bigquery.routines.create bigquery.routines.delete bigquery.routines.get bigquery.routines.list bigquery.routines.update bigquery.routines.updateTag bigquery. rowAccessPolicies. create bigquery. rowAccessPolicies. delete bigquery.rowAccessPolicies.get bigquery. rowAccessPolicies. getIamPolicy bigquery. rowAccessPolicies. list bigquery. rowAccessPolicies. update bigquery.savedqueries. bigquery.savedqueries.create bigquery.savedqueries.delete bigquery.savedqueries.get bigquery.savedqueries.list bigquery.savedqueries.update bigquery.tables.createIndex bigquery.tables.createSnapshot bigquery.tables.deleteIndex bigquery.tables.getIamPolicy bigquery. tables. listEffectiveTags bigquery. tables. listTagBindings bigquery.tables.replicateData bigquery. tables. restoreSnapshot bigquery.tables.updateIndex bigquery.transfers. bigquery.transfers.get bigquery.transfers.update resourcemanager.projects.get resourcemanager.projects.list BigQuery Data Policy Viewer ( roles/ bigquerydatapolicy.viewer ) Role for viewing Data Policies in BigQuery This role can only be granted on Resource Manager resources (projects, folders, and organizations). bigquery.dataPolicies.get bigquery.dataPolicies.list Masked Reader ( roles/ bigquerydatapolicy.maskedReader ) Masked read access to sub-resources tagged by the policy tag associated with a data policy, for example, BigQuery columns This role can only be granted on Resource Manager resources (projects, folders, and organizations). bigquery. dataPolicies. maskedGet Raw Data Reader Beta ( roles/ bigquerydatapolicy.rawDataReader ) Raw read access to sub-resources associated with a data policy, for example, BigQuery columns This role can only be granted on Resource Manager resources (projects, folders, and organizations). bigquery. dataPolicies. getRawData BigQuery Data Transfer Service roles This table lists the predefined IAM roles and permissions for BigQuery Data Transfer Service.
- This role can only be granted on Resource Manager resources (projects, folders, and organizations). bigquery.bireservations.get bigquery. capacityCommitments. get bigquery. capacityCommitments. list bigquery.jobs.get bigquery.jobs.list bigquery.jobs.listAll bigquery. jobs. listExecutionMetadata bigquery. reservationAssignments. list bigquery. reservationAssignments. search bigquery.reservationGroups.get bigquery. reservationGroups. list bigquery.reservations.get bigquery.reservations.list bigquery. reservations. listFailoverDatasets resourcemanager.projects.get resourcemanager.projects.list BigQuery Authorized Routine Admin Beta ( roles/ bigquery.routineAdmin ) Role for Authorized Routine to administer supported resources bigquery.connections.use bigquery.datasets.get bigquery.models.getData bigquery.models.getMetadata bigquery.routines.get bigquery.routines.list bigquery.tables.create bigquery.tables.delete bigquery.tables.get bigquery.tables.getData bigquery.tables.list bigquery.tables.update bigquery.tables.updateData BigQuery Authorized Routine Data Editor Beta ( roles/ bigquery.routineDataEditor ) Role for Authorized Routine to edit contents of supported resources bigquery.datasets.get bigquery.models.getData bigquery.models.getMetadata bigquery.routines.get bigquery.routines.list bigquery.tables.create bigquery.tables.delete bigquery.tables.get bigquery.tables.getData bigquery.tables.list bigquery.tables.update bigquery.tables.updateData BigQuery Authorized Routine Data Viewer Beta ( roles/ bigquery.routineDataViewer ) Role for Authorized Routine to view data and contents of supported resources bigquery.datasets.get bigquery.models.getData bigquery.models.getMetadata bigquery.routines.get bigquery.routines.list bigquery.tables.get bigquery.tables.getData bigquery.tables.list BigQuery Authorized Routine Metadata Viewer Beta ( roles/ bigquery.routineMetadataViewer ) Role for Authorized Routine to view metadata of supported resources bigquery.datasets.get bigquery.models.getMetadata bigquery.routines.get bigquery.routines.list bigquery.tables.get bigquery.tables.list BigQuery Security Admin Beta ( roles/ bigquery.securityAdmin ) Administer all BigQuery security controls bigquery.dataPolicies.attach bigquery.dataPolicies.create bigquery.dataPolicies.delete bigquery.dataPolicies.get bigquery. dataPolicies. getIamPolicy bigquery.dataPolicies.list bigquery. dataPolicies. setIamPolicy bigquery.dataPolicies.update bigquery. datasets. createTagBinding bigquery. datasets. deleteTagBinding bigquery.datasets.get bigquery.datasets.getIamPolicy bigquery. datasets. listEffectiveTags bigquery. datasets. listSharedDatasetUsage bigquery. datasets. listTagBindings bigquery.datasets.setIamPolicy bigquery.datasets.update bigquery.datasets.updateTag bigquery. rowAccessPolicies. create bigquery. rowAccessPolicies. delete bigquery.rowAccessPolicies.get bigquery. rowAccessPolicies. getIamPolicy bigquery. rowAccessPolicies. list bigquery. rowAccessPolicies. setIamPolicy bigquery. rowAccessPolicies. update bigquery. tables. createTagBinding bigquery. tables. deleteTagBinding bigquery.tables.get bigquery.tables.getIamPolicy bigquery.tables.list bigquery. tables. listEffectiveTags bigquery. tables. listTagBindings bigquery. tables. setColumnDataPolicy bigquery.tables.setIamPolicy bigquery.tables.update bigquery.tables.updateTag dataplex.projects.search BigQuery Studio Admin ( roles/ bigquery.studioAdmin ) Combination role of BigQuery Admin, Dataform Admin, Notebook Runtime Admin and Dataproc Serverless Editor.

### "Introduction to security and access controls in BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/access-control-intro](https://docs.cloud.google.com/bigquery/docs/access-control-intro)
- Source ID: `site-docs-reference-2`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use the following types of roles in IAM to grant access to BigQuery resources: Predefined roles are managed by Google Cloud and support common use cases and access control patterns.
- Introduction to security and access controls in BigQuery This document provides an overview of access controls in BigQuery using Identity and Access Management (IAM).
- This document describes how predefined and custom IAM roles can be used to allow principals to access BigQuery resources.
- What's next For more information about assigning roles to BigQuery resources, see Control access to resources with IAM .

### Control access to resources with IAM \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- Source ID: `site-docs-reference-5`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- Then call the Dataset#setMetadata() function to update the property. / TODO(developer): Update and un-comment below lines. / // const datasetId = "my project id.my dataset name"; // ID of the user or group from whom you are adding access. // const entityId = "user-or-group-to-add@example.com"; // One of the "Basic roles for datasets" described here: // https://cloud.google.com/bigquery/docs/access-control-basic-roles#dataset-basic-roles // const role = "READER"; const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate a client. const client = new BigQuery (); // Type of entity you are granting access to. // Find allowed allowed entity type names here: // https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets#resource:-dataset const entityType = 'groupByEmail' ; async function grantAccessToDataset () { const [ dataset ] = await client . dataset ( datasetId ). get (); // The 'access entries' array is immutable.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to modify IAM policies for resources: To get a dataset's access policy: bigquery.datasets.get To set a dataset's access policy: bigquery.datasets.update To get a dataset's access policy (Google Cloud console only): bigquery.datasets.getIamPolicy To set a dataset's access policy (console only): bigquery.datasets.setIamPolicy To get a table or view's policy: bigquery.tables.getIamPolicy To set a table or view's policy: bigquery.tables.setIamPolicy To get a routine's access policy: bigquery.routines.getIamPolicy To set a routine's access policy: bigquery.routines.setIamPolicy To create bq tool or SQL BigQuery jobs (optional): bigquery.jobs.create You might also be able to get these permissions with custom roles or other predefined roles .
- See the BigQuery client library documentation for more details on update dataset: https://cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.client.Client#google cloud bigquery client Client update dataset try : Update just the access entries property of the dataset. dataset = client . update dataset ( dataset , [ "access entries" ], ) Show a success message. full dataset id = f " { dataset . project } . { dataset . dataset id } " print ( f "Role ' { role } ' granted for entity ' { entity id } '" f " in dataset ' { full dataset id } '." ) except PreconditionFailed : # A read-modify-write error print ( f "Dataset ' { dataset . dataset id } ' was modified remotely before this update. " "Fetch the latest version and retry." ) Predefined roles that grant access to datasets You can grant the following IAM predefined roles access to a dataset.
- Find more details about Policy and Binding objects here: https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Policy https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Binding binding = { "role" : role , "members" : [ principal id , ], } policy . bindings . append ( binding ) Set the IAM access policy with updated bindings. updated policy = client . set iam policy ( full resource name , policy ) Show a success message. print ( f "Role ' { role } ' granted for principal ' { principal id } '" f " on resource ' { full resource name } '." ) Predefined roles that grant access to tables and views Views are treated as table resources in BigQuery.

