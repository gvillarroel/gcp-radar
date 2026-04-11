---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:40.377Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "BigLake table creation for Apache Iceberg"
feature_slug: "biglake-table-creation-for-apache-iceberg"
latest_feature_date: "2025-11-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/create-tables"
  - "https://docs.cloud.google.com/dataform/docs/reference/dataform-core-reference"
  - "https://docs.cloud.google.com/dataform/docs/manage-repository"
keywords:
  - "biglake"
  - "table"
  - "creation"
  - "for"
  - "apache"
  - "iceberg"
  - "this"
  - "lets"
---

# BigLake table creation for Apache Iceberg

Product: Dataform
Coverage: LOW

## Step 02 Summary

This feature lets Dataform automate the creation of BigLake tables for Apache Iceberg in BigQuery.

## Extended Definition

This feature lets Dataform automate the creation of BigLake tables for Apache Iceberg in BigQuery.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/create-tables](https://docs.cloud.google.com/dataform/docs/create-tables)
- [https://docs.cloud.google.com/dataform/docs/reference/dataform-core-reference](https://docs.cloud.google.com/dataform/docs/reference/dataform-core-reference)
- [https://docs.cloud.google.com/dataform/docs/manage-repository](https://docs.cloud.google.com/dataform/docs/manage-repository)

## Supporting Pages

### Create tables \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/create-tables](https://docs.cloud.google.com/dataform/docs/create-tables)
- Source ID: `site-docs-root-2`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create BigLake tables for Apache Iceberg in BigQuery Use Dataform to create BigQuery tables in Iceberg table format.
- The following code sample shows multiple constants with descriptions of individual columns defined in the includes/docs.js JavaScript file: // filename is includes/docs.js const user id = A unique identifier for a user ; const age = The age of a user ; const creation date = The date this user signed up ; const user tenure = The number of years since the user's creation date ; const badge count = The all-time number of badges the user has received ; const questions and answer count = The all-time number of questions and answers the user has created ; const question count = The all-time number of questions the user has created ; const answer count = The all-time number of answers the user has created ; const last badge received at = The time the user received their most recent badge ; const last posted at = The time the user last posted a question or answer ; const last question posted at = The time the user last posted an answer ; const last answer posted at = The time the user last posted a question ; module . exports = { user id , age , creation date , user tenure , badge count , questions and answer count , question count , answer count , last badge received at , last posted at , last question posted at , last answer posted at , }; The following code sample shows the user id and age constants, defined in includes/docs.js , used in the definitions/my table.sqlx SQLX table definition file to generate documentation for selected columns in the table: config { type: "table", description: "Table description.", columns: { user id: docs.user id, column2 name: "Description of the second column", column3 name: "Description of the third column", age: docs.age, } } SELECT ...
- The following code sample shows a constant with a set of column descriptions defined in the includes/docs.js JavaScript file: // filename is includes/docs.js const columns = { user id = A unique identifier for a user , age = The age of a user , creation date = The date this user signed up , user tenure = The number of years since the user's creation date , badge count = The all-time number of badges the user has received , questions and answer count = The all-time number of questions and answers the user has created , question count = The all-time number of questions the user has created , answer count = The all-time number of answers the user has created , last badge received at = The time the user received their most recent badge , last posted at = The time the user last posted a question or answer , last question posted at = The time the user last posted an answer , last answer posted at = The time the user last posted a question , } module . exports = { columns }; The following code sample shows the columns constant, which is defined in includes/table docs.js and used in the definitions/my table.sqlx SQLX table definition file to generate documentation for all columns in the table: config { type: "table", description: "My table description", columns: docs.columns } SELECT 1 AS one Add BigQuery labels This section shows you how to add labels to tables in Dataform.
- For more information about required roles and other setup tasks, see the Before you begin steps for BigLake Iceberg table in BigQuery workflows.

### Dataform core reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/reference/dataform-core-reference](https://docs.cloud.google.com/dataform/docs/reference/dataform-core-reference)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The setting applies to all partitions in a table, but is calculated independently for each partition based on the partition time. requirePartitionFilter boolean Declares whether the partitioned table requires a WHERE clause predicate filter that filters the partitioning column. updatePartitionFilter string SQL-based filter for when incremental updates are applied. iceberg IIcebergOptions Apache Iceberg-specific options for BigLake Iceberg tables in BigQuery.
- IIcebergOptions Apache Iceberg-specific options for BigLake Iceberg tables in BigQuery. connection string Optional.
- Workflow-level defaults for BigLake tables for Apache Iceberg in BigQuery.
- Example: // definitions/file.js assert ( "name" ). query ( ctx = > "select 1" ); CommonContext Context methods are available when evaluating contextable SQL code, such as within SQLX files, or when using a Contextable argument with Dataform core. database () => string Returns the database of this dataset, if applicable. name () => string Returns the name of this table. ref (ref: Resolvable string[], rest: string[]) => string References another action, adding it as a dependency to this action, returning valid SQL to be used in a from expression.

### Manage a repository \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/manage-repository](https://docs.cloud.google.com/dataform/docs/manage-repository)
- Source ID: `site-docs-root-2`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- VARIABLE === " SET VALUE ", " CONDITION ")} Replace the following: VARIABLE : the name of your variable—for example executionSetting SET VALUE : a value for the variable—for example, staging CONDITION : a condition for execution of the table The following code sample shows a table definition SQLX file with a when clause and the executionSetting variable that executes 10% of data in the staging execution setting: select from ${ref("data")} ${when( dataform.projectConfig.vars.executionSetting === "staging", "where mod(farm fingerprint(id) / 10) = 0", )} The following code sample shows a view definition SQLX file with a when clause and the myVariableName variable: config { type: "view" } SELECT ${when( dataform.projectConfig.vars.myVariableName === "myVariableValue", "myVariableName is set to myVariableValue!", "myVariableName is not set to myVariableValue!" )} Configure workflow-level defaults for Iceberg tables You can provide workflow-level defaults for BigLake tables for Apache Iceberg in BigQuery in the workflow settings.yaml file.
- The following code sample shows a workflow settings.yaml file with workflow-level defaults for BigLake Iceberg tables in BigQuery: defaultProject : "defaultProject" defaultDataset : "defaultDataset" defaultLocation : "us-central1" defaultIcebergConfig : bucketName : "wsDefaultBucketName" tableFolderRoot : "wsDefaultTableFolderRoot" tableFolderSubpath : "wsDefaultTableFolderSubpath" You can access these fields in your Dataform code as properties of the ProjectConfig object: dataform.ProjectConfig.defaultIcebergConfig.bucketName dataform.ProjectConfig.defaultIcebergConfig.tableFolderRoot dataform.ProjectConfig.defaultIcebergConfig.tableFolderSubpath For more information, see Create BigLake tables for Apache Iceberg in BigQuery and the iceberg block properties .
- Dataform uses these default values to construct the storage URI for a BigLake Iceberg table in BigQuery if you don't set these values in the config block of the table definition file.
- To configure workflow-level defaults for the tables, add the defaultIcebergConfig block with the following fields to your workflow settings.yaml file: bucketName : Optional.

