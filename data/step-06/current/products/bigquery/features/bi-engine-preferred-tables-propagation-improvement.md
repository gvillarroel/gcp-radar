---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.609Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BI Engine preferred tables propagation improvement"
feature_slug: "bi-engine-preferred-tables-propagation-improvement"
latest_feature_date: "2023-04-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam"
keywords:
  - "bi"
  - "engine"
  - "preferred"
  - "tables"
  - "propagation"
  - "improvement"
  - "updates"
  - "existing"
---

# BI Engine preferred tables propagation improvement

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Updates to preferred tables for existing BI Engine reservations now propagate much faster.

## Extended Definition

Updates to preferred tables for existing BI Engine reservations now propagate much faster.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.bireservations.update BI Engine reservation Examples Allocating BI Engine capacity without preferred tables ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 ) Deallocating BI capacity ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 0 ) Removing a set of preferred tables from reservation ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( preferred tables = NULL ) Allocating BI Capacity with preferred tables list ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 , preferred tables = [ "data project1.dataset1.table1" , "data project2.dataset2.table2" ] ) Overwriting list of preferred tables without changing the size ALTER BI CAPACITY region-us.default SET OPTIONS ( preferred tables = [ "dataset1.table1" , "data project2.dataset2.table2" ] ) ALTER CAPACITY SET OPTIONS statement Alters an existing capacity commitment.
- The following options are supported: NAME VALUE Details size gb INT64 Specifies the size of the reservation in gigabytes. preferred tables <ARRAY<STRING>> List of tables that acceleration should be applied to.
- Existing table ACLs and row access policies are preserved, but table ACL and row access policy updates made during the table rename are not preserved.
- Setting VALUE replaces the existing value of that option for the BI Engine capacity, if there is one.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Connect to a Google BigQuery database from Preset PuppyGraph Solution PuppyGraph Category BI, ML, & Advanced Analytics Description PuppyGraph is the first and only graph analytics engine in the market, empowering companies to transform existing relational data stores into a unified graph model in under 10 minutes, bypassing traditional graph database costs, latency, and maintenance hurdles.
- It offers native integration with BigQuery, letting users reverse-engineer existing schemas, visualize data relationships, and generate deployment scripts without writing code.
- Partner references Prophecy BigQuery Integration Read and write to catalog tables in BigQuery Partner Advantage page Direct link Qlik Solution Qlik Replicate Category ETL & Data Integration Description Qlik Replicate (formerly Attunity Replicate) is a high-performance data-replication tool offering optimized data ingestion from a broad array of data sources and platforms and seamless integration with all major big data analytics platforms.
- Partner references Behavioral data for BigQuery BigQuery Loader Measure the latency of your data in BigQuery Debugging bad data in Google Cloud with BigQuery Partner Advantage page Direct link Starburst Data Solution Starburst Galaxy Category BI, ML, & Advanced Analytics Description Starburst Galaxy is the cloud-born and fully-managed service of the Starburst massively parallel processing (MPP) and highly-performant query engine.

### Control access to resources with IAM \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- Source ID: `site-docs-reference-5`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Modify the access property to exclude the desired entity, and then call the Dataset#setMetadata() function to apply the updated access list. / TODO(developer): Update and un-comment below lines / // const datasetId = "my project id.my dataset" // ID of the user or group from whom you are revoking access. // const entityId = "user-or-group-to-remove@example.com" const { BigQuery } = require ( '@google-cloud/bigquery' ); // Instantiate a client. const bigquery = new BigQuery (); async function revokeDatasetAccess () { const [ dataset ] = await bigquery . dataset ( datasetId ). get (); // To revoke access to a dataset, remove elements from the access list. // // See the BigQuery client library documentation for more details on access entries: // https://cloud.google.com/nodejs/docs/reference/bigquery/latest // Filter access entries to exclude entries matching the specified entity id // and assign a new list back to the access list. dataset . metadata . access = dataset . metadata . access . filter ( entry = > { return ! ( entry . entity id === entityId entry . userByEmail === entityId entry . groupByEmail === entityId ); }); // Update will only succeed if the dataset // has not been modified externally since retrieval. // // See the BigQuery client library documentation for more details on metadata updates: // https://cloud.google.com/bigquery/docs/updating-datasets // Update just the 'access entries' property of the dataset. await dataset . setMetadata ( dataset . metadata ); console . log ( Revoked access to ' ${ entityId } ' from ' ${ datasetId } '. ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Create a copy for modifications. const entries = [... dataset . metadata . access ]; // Append an AccessEntry to grant the role to a dataset. // Find more details about the AccessEntry object in the BigQuery documentation: // https://cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.dataset.AccessEntry entries . push ({ role , [ entityType ] : entityId , }); // Assign the array of AccessEntries back to the dataset. const metadata = { access : entries , }; // Update will only succeed if the dataset // has not been modified externally since retrieval. // // See the BigQuery client library documentation for more details on metadata updates: // https://cloud.google.com/nodejs/docs/reference/bigquery/latest // Update just the 'access entries' property of the dataset. await client . dataset ( datasetId ). setMetadata ( metadata ); console . log ( Role ' ${ role } ' granted for entity ' ${ entityId } ' in ' ${ datasetId } '. ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to modify IAM policies for resources: To get a dataset's access policy: bigquery.datasets.get To set a dataset's access policy: bigquery.datasets.update To get a dataset's access policy (Google Cloud console only): bigquery.datasets.getIamPolicy To set a dataset's access policy (console only): bigquery.datasets.setIamPolicy To get a table or view's policy: bigquery.tables.getIamPolicy To set a table or view's policy: bigquery.tables.setIamPolicy To get a routine's access policy: bigquery.routines.getIamPolicy To set a routine's access policy: bigquery.routines.setIamPolicy To create bq tool or SQL BigQuery jobs (optional): bigquery.jobs.create You might also be able to get these permissions with custom roles or other predefined roles .
- This capability implies that the authorized resources have the following permissions: bigquery.tables.get bigquery.tables.list bigquery.tables.getData bigquery.tables.updateData bigquery.tables.create bigquery.tables.delete bigquery.routines.get bigquery.routines.list bigquery.datasets.get bigquery.models.getData bigquery.models.getMetadata To deny access to these authorized resources, add one of the following values to the deniedPrincipal field when you create the deny policy: Value Use case principalSet://goog/public:all Blocks all principals including authorized resources. principalSet://bigquery.googleapis.com/projects/ PROJECT NUMBER / Blocks all BigQuery authorized resources in the specified project.

