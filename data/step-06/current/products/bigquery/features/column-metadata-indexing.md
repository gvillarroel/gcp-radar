---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.344Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Column metadata indexing"
feature_slug: "column-metadata-indexing"
latest_feature_date: "2025-05-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam"
keywords:
  - "column"
  - "metadata"
  - "indexing"
  - "available"
  - "both"
  - "bigquery"
  - "tables"
  - "external"
---

# Column metadata indexing

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Column metadata indexing is available for both BigQuery tables and external tables.

## Extended Definition

Column metadata indexing is available for both BigQuery tables and external tables.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)

## Supporting Pages

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- BigLake tables support the following formats: Avro CSV Delta Lake Iceberg JSON ORC Parquet You can't use cached metadata with Apache Iceberg external tables ; BigQuery already uses the metadata that Iceberg captures in manifest files.
- If there are no BACKGROUND reservations available for refreshing the metadata cache, BigQuery automatically uses slots in QUERY reservations instead if you are using the Enterprise or Enterprise Plus edition.
- The following types of BigLake tables support metadata caching: Amazon S3 BigLake tables Cloud Storage BigLake tables BigQuery uses CMETA as a distributed metadata system to handle large tables efficiently.
- Introduction to BigLake external tables Important: The term "BigLake" on this page refers to an access delegation functionality for external tables in BigQuery.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- Example: replication interval seconds=900 Required permissions This statement requires the following IAM permissions : bigquery.tables.create bigquery.tables.get bigquery.tables.getData bigquery.tables.replicateData bigquery.jobs.create Example The following example creates a materialized view replica named mv replica in bq dataset : CREATE MATERIALIZED VIEW myproject . bq dataset . mv replica OPTIONS ( replication interval seconds = 600 ) AS REPLICA OF myproject.s3 dataset.my s3 mv CREATE EXTERNAL SCHEMA statement Creates a new federated dataset.
- Column options for a view have the same syntax and requirements as for a table, but with a different list of NAME and VALUE fields: NAME VALUE Details description STRING Example: description="a unique id" Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.tables.get The table to alter. bigquery.tables.update The table to alter.
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.tables.delete The external table to delete. bigquery.tables.get The external table to delete.
- When both the column list and the AS query statement clause are present, BigQuery ignores the names in the AS query statement clause and matches the columns with the column list by position.

### Control access to resources with IAM \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- Source ID: `site-docs-reference-5`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- This permission is required for creating replica materialized views. bigquery.tables.restoreSnapshot Table Restore a table snapshot. bigquery.tables.setCategory Table Set policy tags in the table's schema. bigquery.tables.setColumnDataPolicy Table Set column-level access policies on a table. bigquery.tables.setIamPolicy Table Set access controls on a table. bigquery.tables.update Table Update table. metadata. bigquery.tables.get is also required to update table metadata in the console. bigquery.tables.updateData Table Update table data. bigquery.tables.updateIndex Table Update a search index on the table.
- Modify the access property to exclude the desired entity, and then call the Dataset#setMetadata() function to apply the updated access list. / TODO(developer): Update and un-comment below lines / // const datasetId = "my project id.my dataset" // ID of the user or group from whom you are revoking access. // const entityId = "user-or-group-to-remove@example.com" const { BigQuery } = require ( '@google-cloud/bigquery' ); // Instantiate a client. const bigquery = new BigQuery (); async function revokeDatasetAccess () { const [ dataset ] = await bigquery . dataset ( datasetId ). get (); // To revoke access to a dataset, remove elements from the access list. // // See the BigQuery client library documentation for more details on access entries: // https://cloud.google.com/nodejs/docs/reference/bigquery/latest // Filter access entries to exclude entries matching the specified entity id // and assign a new list back to the access list. dataset . metadata . access = dataset . metadata . access . filter ( entry = > { return ! ( entry . entity id === entityId entry . userByEmail === entityId entry . groupByEmail === entityId ); }); // Update will only succeed if the dataset // has not been modified externally since retrieval. // // See the BigQuery client library documentation for more details on metadata updates: // https://cloud.google.com/bigquery/docs/updating-datasets // Update just the 'access entries' property of the dataset. await dataset . setMetadata ( dataset . metadata ); console . log ( Revoked access to ' ${ entityId } ' from ' ${ datasetId } '. ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- The access policy is available in the access property of the resulting metadata object. / TODO(developer): Update and un-comment below lines / // const datasetId = "my project id.my dataset"; const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate a client. const bigquery = new BigQuery (); async function viewDatasetAccessPolicy () { const dataset = bigquery . dataset ( datasetId ); const [ metadata ] = await dataset . getMetadata (); const accessEntries = metadata . access []; // Show the list of AccessEntry objects. // More details about the AccessEntry object in the BigQuery documentation: // https://cloud.google.com/nodejs/docs/reference/bigquery/latest console . log ( ${ accessEntries . length } Access entries in dataset ' ${ datasetId } ': ); for ( const accessEntry of accessEntries ) { console . log ( Role: ${ accessEntry . role 'null' } ); console . log ( Special group: ${ accessEntry . specialGroup 'null' } ); console . log ( User by Email: ${ accessEntry . userByEmail 'null' } ); } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Create a copy for modifications. const entries = [... dataset . metadata . access ]; // Append an AccessEntry to grant the role to a dataset. // Find more details about the AccessEntry object in the BigQuery documentation: // https://cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.dataset.AccessEntry entries . push ({ role , [ entityType ] : entityId , }); // Assign the array of AccessEntries back to the dataset. const metadata = { access : entries , }; // Update will only succeed if the dataset // has not been modified externally since retrieval. // // See the BigQuery client library documentation for more details on metadata updates: // https://cloud.google.com/nodejs/docs/reference/bigquery/latest // Update just the 'access entries' property of the dataset. await client . dataset ( datasetId ). setMetadata ( metadata ); console . log ( Role ' ${ role } ' granted for entity ' ${ entityId } ' in ' ${ datasetId } '. ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .

