---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.784Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Cloud SQL federated queries"
feature_slug: "cloud-sql-federated-queries"
latest_feature_date: "2020-05-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam"
  - "https://docs.cloud.google.com/bigquery/docs/quickstarts/load-data-console"
  - "https://docs.cloud.google.com/bigquery/docs/access-historical-data"
keywords:
  - "sql"
  - "federated"
  - "queries"
  - "bigquery"
  - "supports"
  - "against"
  - "across"
---

# Cloud SQL federated queries

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports federated queries against Cloud SQL data; BigQuery supports federated queries across BigQuery and Cloud SQL data.

## Extended Definition

BigQuery supports federated queries against Cloud SQL data; BigQuery supports federated queries across BigQuery and Cloud SQL data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam)
- [https://docs.cloud.google.com/bigquery/docs/quickstarts/load-data-console](https://docs.cloud.google.com/bigquery/docs/quickstarts/load-data-console)
- [https://docs.cloud.google.com/bigquery/docs/access-historical-data](https://docs.cloud.google.com/bigquery/docs/access-historical-data)

## Supporting Pages

### "Create a dataset and grant access to it \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam)
- Source ID: `site-docs-reference-required-15`
- Final score: 52
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the Terraform provider reference documentation . resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days labels = { billing group = "accounting" , pii = "sensitive" } } Update the user, group, or service account provided by the members argument with the appropriate principals for your organization. data "google iam policy" "default" { binding { role = "roles/bigquery.dataOwner" members = [ "user:raha@altostrat.com" , ] } binding { role = "roles/bigquery.admin" members = [ "user:raha@altostrat.com" , ] } binding { role = "roles/bigquery.user" members = [ "group:analysts@altostrat.com" , ] } binding { role = "roles/bigquery.dataViewer" members = [ "serviceAccount:bqcx-1234567891011-abcd@gcp-sa-bigquery-condel.iam.gserviceaccount.com" , ] } } resource "google bigquery dataset iam policy" "default" { dataset id = google bigquery dataset.default.dataset id policy data = data.google iam policy.default.policy data } What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- Home Documentation Data analytics BigQuery Samples Create a dataset and grant access to it Stay organized with collections Save and categorize content based on your preferences.
- The following example creates a dataset named mydataset, then uses the google bigquery dataset iam policy resource to grant access to it.

### Load and query data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/quickstarts/load-data-console](https://docs.cloud.google.com/bigquery/docs/quickstarts/load-data-console)
- Source ID: `site-docs-reference-2`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Required roles To get the permissions that you need to create a dataset, create a table, load data, and query data, ask your administrator to grant you the following IAM roles on the project: Run load jobs and query jobs: BigQuery Job User ( roles/bigquery.jobUser ) Create a dataset, create a table, load data into a table, and query a table: BigQuery Data Editor ( roles/bigquery.dataEditor ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Home Documentation Data analytics BigQuery Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- You have successfully queried a table in a public dataset and then loaded your sample data into BigQuery using the Google Cloud console.
- Note: If your project has a billing account and you want to use the BigQuery sandbox, then disable billing for your project .

### Access historical data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/access-historical-data](https://docs.cloud.google.com/bigquery/docs/access-historical-data)
- Source ID: `site-docs-reference-2`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For this example, we choose the current time as we're about to delete the table immediately afterwards. / const snapshotEpoch = Date . now (); // Delete the table await bigquery . dataset ( datasetId ) . table ( tableId ) . delete (); console . log ( Table ${ tableId } deleted. ); // Construct the restore-from table ID using a snapshot decorator. const snapshotTableId = ${ tableId } @ ${ snapshotEpoch } ; // Construct and run a copy job. await bigquery . dataset ( datasetId ) . table ( snapshotTableId ) . copy ( bigquery . dataset ( datasetId ). table ( recoveredTableId )); console . log ( Copied data from deleted table ${ tableId } to ${ recoveredTableId } ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- TableId . of ( datasetName , recoverTableName ), TableId . of ( datasetName , snapshotTableId )) . build (); Job job = bigquery . create ( JobInfo . of ( configuration )); job = job . waitFor (); if ( job . isDone () && job . getStatus (). getError () == null ) { System . out . println ( "Undelete table recovered successfully." ); } else { System . out . println ( "BigQuery was unable to copy the table due to an error: \n" + job . getStatus (). getError ()); return ; } } catch ( BigQueryException InterruptedException e ) { System . out . println ( "Table not found. \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function undeleteTable () { // Undeletes "my table to undelete" from "my dataset". / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table to undelete"; // const recoveredTableId = "my recovered table"; / TODO(developer): Choose an appropriate snapshot point as epoch milliseconds.
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "time" "cloud.google.com/go/bigquery" ) // deleteAndUndeleteTable demonstrates how to recover a deleted table by copying it from a point in time // that predates the deletion event. func deleteAndUndeleteTable ( projectID , datasetID , tableID string ) error { // projectID := "my-project-id" // datasetID := "mydataset" // tableID := "mytable" ctx := context .

