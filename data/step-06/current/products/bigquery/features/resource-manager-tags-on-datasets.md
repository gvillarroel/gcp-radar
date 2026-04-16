---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.635Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Resource Manager tags on datasets"
feature_slug: "resource-manager-tags-on-datasets"
latest_feature_date: "2023-01-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam"
  - "https://docs.cloud.google.com/bigquery/docs/conditions"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
keywords:
  - "resource"
  - "manager"
  - "tags"
  - "datasets"
  - "bigquery"
  - "can"
  - "have"
  - "attached"
---

# Resource Manager tags on datasets

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery datasets can have Resource Manager tags attached for conditional IAM policy application; Datasets can have Resource Manager tags attached so IAM policies can be applied conditionally.

## Extended Definition

BigQuery datasets can have Resource Manager tags attached for conditional IAM policy application; Datasets can have Resource Manager tags attached so IAM policies can be applied conditionally.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- [https://docs.cloud.google.com/bigquery/docs/conditions](https://docs.cloud.google.com/bigquery/docs/conditions)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Supporting Pages

### Control access to resources with IAM \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- Source ID: `site-docs-reference-5`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- This capability implies that the authorized resources have the following permissions: bigquery.tables.get bigquery.tables.list bigquery.tables.getData bigquery.tables.updateData bigquery.tables.create bigquery.tables.delete bigquery.routines.get bigquery.routines.list bigquery.datasets.get bigquery.models.getData bigquery.models.getMetadata To deny access to these authorized resources, add one of the following values to the deniedPrincipal field when you create the deny policy: Value Use case principalSet://goog/public:all Blocks all principals including authorized resources. principalSet://bigquery.googleapis.com/projects/ PROJECT NUMBER / Blocks all BigQuery authorized resources in the specified project.
- The console also requires the bigquery.datasets.update permission to update the dataset. bigquery.datasets.delete Dataset Delete a dataset. bigquery.datasets.createTagBinding Dataset Attach tags to the dataset. bigquery.datasets.deleteTagBinding Dataset Detach tags from the dataset. bigquery.datasets.listTagBindings Dataset List tags for the dataset. bigquery.datasets.listEffectiveTags Dataset List effective tags (applied and inherited) for the dataset. bigquery.datasets.link Dataset Create a linked dataset . bigquery.datasets.listSharedDatasetUsage Project List shared dataset usage statistics for datasets that you have access to in the project.
- Special cases Consider the following scenarios when you create IAM deny policies on a few BigQuery permissions: Access to authorized resources ( views , routines , datasets , or stored procedures ) lets you create , drop , or manipulate a table, along with reading and modifying table data, even if you don't have direct permission to perform those operations.
- Then call the Dataset#setMetadata() function to update the property. / TODO(developer): Update and un-comment below lines. / // const datasetId = "my project id.my dataset name"; // ID of the user or group from whom you are adding access. // const entityId = "user-or-group-to-add@example.com"; // One of the "Basic roles for datasets" described here: // https://cloud.google.com/bigquery/docs/access-control-basic-roles#dataset-basic-roles // const role = "READER"; const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate a client. const client = new BigQuery (); // Type of entity you are granting access to. // Find allowed allowed entity type names here: // https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets#resource:-dataset const entityType = 'groupByEmail' ; async function grantAccessToDataset () { const [ dataset ] = await client . dataset ( datasetId ). get (); // The 'access entries' array is immutable.

### Control access with IAM Conditions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/conditions](https://docs.cloud.google.com/bigquery/docs/conditions)
- Source ID: `site-docs-reference-5`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- With this role, the user can list all the resources in the dataset, but they can't perform any queries on those resources. { "members" : [ cloudysanfrancisco @ gmail . com ], "role" : roles / bigquery . metadataViewer , "condition" : { "title" : "Dataset dataset 2" , "description" : "Allowed to list resources in dataset 2 dataset" , "expression" : resource . name == projects / project 2 / datasets / dataset 2 && resource . type == bigquery . googleapis . com / Dataset } } Grant owner access to all tables in all datasets with a specific prefix This example grants cloudysanfrancisco@gmail.com the BigQuery Data Owner role on all tables in all datasets that start with the public prefix: { "members" : [ cloudysanfrancisco @ gmail . com ], "role" : roles / bigquery . dataOwner , "condition" : { "title" : "Tables public " , "description" : "Allowed owner access to tables in datasets with public prefix" , "expression" : resource . name . startsWith ( "projects/project 3/datasets/public " ) && resource . type == bigquery . googleapis . com / Table } } Grant owner access to all tables, models, and routines in all datasets that have a specific prefix This example grants cloudysanfrancisco@gmail.com the BigQuery Data Owner role on all tables, models, and routines in all datasets that start with the general prefix: { "members" : [ cloudysanfrancisco @ gmail . com ], "role" : roles / bigquery . dataOwner , "condition" : { "title" : "Tables general " , "description" : "Allowed owner access to tables in datasets with general prefix" , "expression" : resource . name . startsWith ( "projects/project 4/datasets/general " ) && resource . type == bigquery . googleapis . com / Table } }, { "members" : [ cloudysanfrancisco @ gmail . com ], "role" : roles / bigquery . dataOwner , "condition" : { "title" : "Models general " , "description" : "Allowed owner access to models in datasets with general prefix" , "expression" : resource . name . startsWith ( "projects/project 4/datasets/general " ) && resource . type == bigquery . googleapis . com / Model } }, { "members" : [ cloudysanfrancisco @ gmail . com ], "role" : roles / bigquery . dataOwner , "condition" : { "title" : "Routines general " , "description" : "Allowed owner access to routines in datasets with general prefix" , "expression" : resource . name . startsWith ( "projects/project 4/datasets/general " ) && resource . type == bigquery . googleapis . com / Routine } } What's next Learn more about configuring temporary access by using IAM Conditions.
- The user can't view the table in the Google Cloud console because they don't have the bigquery.tables.list permission on the dataset. { "members" : [ cloudysanfrancisco @ gmail . com ], "role" : roles / bigquery . dataViewer , "condition" : { "title" : "Table dataset 1.table 1" , "description" : "Allowed to read table with name table 1 in dataset 1 dataset" , "expression" : resource . name == projects / project 1 / datasets / dataset 1 / tables / table 1 && resource . type == bigquery . googleapis . com / Table } } Grant list access to a specific dataset This example grants cloudysanfrancisco@gmail.com the BigQuery Metadata Viewer role on the dataset 2 dataset.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to apply IAM Conditions to BigQuery resources: Set conditional IAM access at the project level: resourcemanager.projects.setIamPolicy Set conditional IAM access on datasets: bigquery.datasets.setIamPolicy bigquery.datasets.update You might also be able to get these permissions with custom roles or other predefined roles .
- Required roles To get the permissions that you need to apply IAM Conditions to BigQuery resources, ask your administrator to grant you the following IAM roles: For projects: Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) For datasets: BigQuery Data Owner ( roles/bigquery.dataOwner ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- The INFORMATION SCHEMA.TABLE OPTIONS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset table schema STRING The name of the dataset that contains the table or view also referred to as the datasetId table name STRING The name of the table or view also referred to as the tableId option name STRING One of the name values in the options table option type STRING One of the data type values in the options table option value STRING One of the value options in the options table Options table OPTION NAME OPTION TYPE OPTION VALUE description STRING A description of the table enable refresh BOOL Whether automatic refresh is enabled for a materialized view expiration timestamp TIMESTAMP The time when this table expires friendly name STRING The table's descriptive name kms key name STRING The name of the Cloud KMS key used to encrypt the table labels ARRAY<STRUCT<STRING, STRING>> An array of STRUCT 's that represent the labels on the table max staleness INTERVAL The configured table's maximum staleness for BigQuery change data capture (CDC) upserts partition expiration days FLOAT64 The default lifetime, in days, of all partitions in a partitioned table refresh interval minutes FLOAT64 How frequently a materialized view is refreshed require partition filter BOOL Whether queries over the table require a partition filter tags ARRAY<STRUCT<STRING, STRING>> Tags attached to a table in a namespaced <key, value> syntax.
- Take this step only if you want to grant access to the table to principals who don't have access to the dataset in which the table resides. resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days labels = { billing group = "accounting", pii = "sensitive" } } resource "google bigquery table" "default" { dataset id = google bigquery dataset.default.dataset id table id = "mytable" schema = <<EOF [ { "name": "ID", "type": "INT64", "mode": "NULLABLE", "description": "Item ID" }, { "name": "Item", "type": "STRING", "mode": "NULLABLE" } ] EOF } data "google iam policy" "default" { binding { role = "roles/bigquery.dataOwner" members = [ "user:raha@altostrat.com", ] } } resource "google bigquery table iam policy" "policy" { dataset id = google bigquery table.default.dataset id table id = google bigquery table.default.table id policy data = data.google iam policy.default.policy data } Create a table with a customer-managed encryption key The following example creates a table named mytable , and also uses the google kms crypto key and google kms key ring resources to specify a Cloud Key Management Service key for the table.
- These logs record API calls and actions that modify the configuration or metadata of your resources. resource.type = "bigquery dataset" : This narrows the search to events related to BigQuery datasets, where table operations are logged. timestamp >= " STARTING TIMESTAMP " : Filters log entries to only show those created on or after the specified timestamp. protoPayload.@type = "type.googleapis.com/google.cloud.audit.AuditLog" : Ensures the log message conforms to the standard Cloud Audit Log structure. ( ... ) : This block groups conditions to find different types of table events, as outlined in the previous section.
- Go to Logging Use the following query to access the audit data: logName = "projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Factivity" AND resource.type = "bigquery dataset" AND timestamp >= " STARTING TIMESTAMP " AND protoPayload.@type = "type.googleapis.com/google.cloud.audit.AuditLog" AND ( protoPayload.metadata.tableCreation : OR protoPayload.metadata.tableChange : OR protoPayload.metadata.tableDeletion : ) AND protoPayload.resourceName : "projects/ PROJECT ID /datasets/ DATASET ID /tables/" Replace the following: PROJECT ID : the project that contains datasets and tables you are interested in.

