---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.356Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Fine-grained access control for Iceberg tables"
feature_slug: "fine-grained-access-control-for-iceberg-tables"
latest_feature_date: "2025-04-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog"
  - "https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam"
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
keywords:
  - "fine"
  - "grained"
  - "access"
  - "control"
  - "iceberg"
  - "tables"
  - "bigquery"
  - "metastore"
---

# Fine-grained access control for Iceberg tables

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery metastore Iceberg tables now support fine-grained access control.

## Extended Definition

BigQuery metastore Iceberg tables now support fine-grained access control.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog](https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog)
- [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)

## Supporting Pages

### Use the BigLake metastore Iceberg REST catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog](https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog)
- Source ID: `site-docs-reference-5`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Table limitations Tables managed through the REST catalog do not support fine-grained access control (FGAC), such as row-level and column-level security.
- Enable the API Required roles To get the permissions that you need to use the Iceberg REST catalog in BigLake metastore, ask your administrator to grant you the following IAM roles: Perform administrative tasks, such as managing catalog user access, storage access, and the catalog's credential vending mode: BigLake Admin ( roles/biglake.admin ) on the project Storage Admin ( roles/storage.admin ) on the Cloud Storage bucket Read table data in credential vending mode: BigLake Viewer ( roles/biglake.viewer ) on the project Write table data in credential vending mode: BigLake Editor ( roles/biglake.editor ) on the project Read catalog resources and table data in non-credential vending mode: BigLake Viewer ( roles/biglake.viewer ) on the project Storage Object Viewer ( roles/storage.objectViewer ) on the Cloud Storage bucket Manage catalog resources and write table data in non-credential vending mode: BigLake Editor ( roles/biglake.editor ) on the project Storage Object User ( roles/storage.objectUser ) on the Cloud Storage bucket Perform data manipulation language (DML) operations with BigQuery catalog federation: BigQuery Data Editor ( roles/bigquery.dataEditor ) on the project Storage Admin ( roles/storage.admin ) on the Cloud Storage bucket.
- It supports features like credential vending for fine-grained access control and cross-region replication and disaster recovery .
- Credential vending is a storage access delegation mechanism that lets BigLake metastore administrators control permissions directly on BigLake metastore resources, eliminating the need for catalog users to have direct access to Cloud Storage buckets.

### Control access to resources with IAM \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- Source ID: `site-docs-reference-5`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to modify IAM policies for resources: To get a dataset's access policy: bigquery.datasets.get To set a dataset's access policy: bigquery.datasets.update To get a dataset's access policy (Google Cloud console only): bigquery.datasets.getIamPolicy To set a dataset's access policy (console only): bigquery.datasets.setIamPolicy To get a table or view's policy: bigquery.tables.getIamPolicy To set a table or view's policy: bigquery.tables.setIamPolicy To get a routine's access policy: bigquery.routines.getIamPolicy To set a routine's access policy: bigquery.routines.setIamPolicy To create bq tool or SQL BigQuery jobs (optional): bigquery.jobs.create You might also be able to get these permissions with custom roles or other predefined roles .
- Find more details about Policy and Binding objects here: https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Policy https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Binding binding = { "role" : role , "members" : [ principal id , ], } policy . bindings . append ( binding ) Set the IAM access policy with updated bindings. updated policy = client . set iam policy ( full resource name , policy ) Show a success message. print ( f "Role ' { role } ' granted for principal ' { principal id } '" f " on resource ' { full resource name } '." ) Predefined roles that grant access to tables and views Views are treated as table resources in BigQuery.
- This permission is required for creating replica materialized views. bigquery.tables.restoreSnapshot Table Restore a table snapshot. bigquery.tables.setCategory Table Set policy tags in the table's schema. bigquery.tables.setColumnDataPolicy Table Set column-level access policies on a table. bigquery.tables.setIamPolicy Table Set access controls on a table. bigquery.tables.update Table Update table. metadata. bigquery.tables.get is also required to update table metadata in the console. bigquery.tables.updateData Table Update table data. bigquery.tables.updateIndex Table Update a search index on the table.
- OBJECT PRIVILEGES WHERE object name = "mydataset" ; The output should look like the following: +------------------+-----------------------------+-------------------------+ object name privilege type grantee +------------------+-----------------------------+-------------------------+ mydataset roles/bigquery.dataOwner projectOwner:myproject mydataset roles/bigquery.dataViwer user:user@example.com +------------------+-----------------------------+-------------------------+ API To view the access controls for a dataset, call the datasets.get method with a defined dataset resource .

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- BigLake tables on object stores For data lake administrators, BigLake lets you set access controls on tables rather than files, which gives you finer-grained options when setting user access to data in the data lake.
- CMETA provides fine-grained metadata at the column and block level, accessible through system tables.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to run a cross-cloud join: bigquery.jobs.create bigquery.tables.getData You might also be able to get these permissions with custom roles or other predefined roles .
- BigLake tables support the following formats: Avro CSV Delta Lake Iceberg JSON ORC Parquet You can't use cached metadata with Apache Iceberg external tables ; BigQuery already uses the metadata that Iceberg captures in manifest files.

