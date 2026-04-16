---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.799Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ALTER VIEW statement options"
feature_slug: "alter-view-statement-options"
latest_feature_date: "2019-12-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam"
  - "https://docs.cloud.google.com/bigquery/docs/column-data-masking"
keywords:
  - "alter"
  - "view"
  - "statement"
  - "options"
  - "lets"
  - "users"
  - "set"
  - "bigquery"
---

# ALTER VIEW statement options

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The ALTER VIEW statement lets users set options on BigQuery views.

## Extended Definition

The ALTER VIEW statement lets users set options on BigQuery views.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- [https://docs.cloud.google.com/bigquery/docs/column-data-masking](https://docs.cloud.google.com/bigquery/docs/column-data-masking)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following example sets a new description on a table column called price : ALTER TABLE mydataset . mytable ALTER COLUMN price SET OPTIONS ( description = 'Price per unit' ); The following example sets a new description on a view column called total : ALTER VIEW mydataset . myview ALTER COLUMN total SET OPTIONS ( description = 'Total sales of the product' ); ALTER COLUMN DROP NOT NULL statement Removes a NOT NULL constraint from a column in a table in BigQuery.
- Column options for a view have the same syntax and requirements as for a table, but with a different list of NAME and VALUE fields: NAME VALUE Details description STRING Example: description="a unique id" Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.tables.get The table to alter. bigquery.tables.update The table to alter.
- ALTER TABLE mydataset . mytable ADD COLUMN name STRING +--------------------------------+ mydataset.mytable number INT64 word STRING COLLATE 'und:ci' name STRING COLLATE +--------------------------------+ ALTER COLUMN SET OPTIONS statement Sets options, such as the column description, on a column in a table or view in BigQuery.
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.bireservations.update BI Engine reservation Examples Allocating BI Engine capacity without preferred tables ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 ) Deallocating BI capacity ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 0 ) Removing a set of preferred tables from reservation ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( preferred tables = NULL ) Allocating BI Capacity with preferred tables list ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 , preferred tables = [ "data project1.dataset1.table1" , "data project2.dataset2.table2" ] ) Overwriting list of preferred tables without changing the size ALTER BI CAPACITY region-us.default SET OPTIONS ( preferred tables = [ "dataset1.table1" , "data project2.dataset2.table2" ] ) ALTER CAPACITY SET OPTIONS statement Alters an existing capacity commitment.

### Control access to resources with IAM \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- Source ID: `site-docs-reference-5`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- The access policy details are available in the returned policy object. / TODO(developer): Update and un-comment below lines / // const projectId = "YOUR PROJECT ID" // const datasetId = "YOUR DATASET ID" // const resourceName = "YOUR RESOURCE NAME"; const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate a client. const client = new BigQuery (); async function viewTableOrViewAccessPolicy () { const dataset = client . dataset ( datasetId ); const table = dataset . table ( resourceName ); // Get the IAM access policy for the table or view. const [ policy ] = await table . getIamPolicy (); // Initialize bindings if they don't exist if ( ! policy . bindings ) { policy . bindings = []; } // Show policy details. // Find more details for the Policy object here: // https://cloud.google.com/bigquery/docs/reference/rest/v2/Policy console . log ( Access Policy details for table or view ' ${ resourceName } '. ); console . log ( Bindings: ${ JSON . stringify ( policy . bindings , null , 2 ) } ); console . log ( etag: ${ policy . etag } ); console . log ( Version: ${ policy . version } ); } Revoke access to a table or view To revoke access to a table or view, select one of the following options: Console Go to the BigQuery page.
- Go to BigQuery In the query editor, enter the following statement: REVOKE ROLE LIST ON SCHEMA RESOURCE NAME FROM " USER LIST " Replace the following: ROLE LIST : a role or list of comma-separated roles that you want to revoke RESOURCE NAME : the name of the resource that you want to revoke permission on USER LIST : a comma-separated list of users who will have their roles revoked For a list of valid formats, see user list .
- Go to BigQuery In the query editor, enter the following statement: GRANT ROLE LIST ON SCHEMA RESOURCE NAME TO " USER LIST " Replace the following: ROLE LIST : a role or list of comma-separated roles that you want to grant RESOURCE NAME : the name of the dataset that you're granting access to USER LIST : a comma-separated list of users that the role is granted to For a list of valid formats, see user list .
- Go to BigQuery In the query editor, enter the following statement: REVOKE ROLE LIST ON RESOURCE TYPE RESOURCE NAME FROM " USER LIST " Replace the following: ROLE LIST : a role or list of comma-separated roles that you want to revoke RESOURCE TYPE : the type of resource that the role is revoked from Supported values include TABLE , VIEW , MATERIALIZED VIEW and EXTERNAL TABLE .

### Mask column data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/column-data-masking](https://docs.cloud.google.com/bigquery/docs/column-data-masking)
- Source ID: `site-docs-reference-5`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- The following example uses the CREATE TABLE statement and sets data policies on a column: CREATE TABLE myproject . table1 ( name INT64 OPTIONS ( data policies = [ "{'name':'myproject.region-us.data policy name1'}" , "{'name':'myproject.region-us.data policy name2'}" ]) ); The following example uses the ALTER COLUMN SET OPTIONS to add a data policy to an existing column on a table: ALTER TABLE myproject . table1 ALTER COLUMN column name SET OPTIONS ( data policies += [ "{'name':'myproject.region-us.data policy name1'}" , "{'name':'myproject.region-us.data policy name2'}" ]); API To assign a data policy to a column, call the patch method on the table and update the table schema with the applicable data policies.
- Assign a data policy To assign a data policy directly on a column, do one of the following: SQL To attach a data policy to a column, use the CREATE TABLE , ALTER TABLE ADD COLUMN , or ALTER COLUMN SET OPTIONS DDL statements.
- Unassign a data policy To unassign a data policy directly on a column, do one of the following: SQL To detach a data policy to a column, use the ALTER COLUMN SET OPTIONS DDL statement.
- You can unassign the last remaining data policy on a column using the ALTER COLUMN SET OPTIONS DDL statement.

