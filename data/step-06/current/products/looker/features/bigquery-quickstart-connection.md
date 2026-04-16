---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.503Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "BigQuery Quickstart connection"
feature_slug: "bigquery-quickstart-connection"
latest_feature_date: "2024-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition"
  - "https://docs.cloud.google.com/bigquery/docs/exporting-data"
  - "https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart"
keywords:
  - "bigquery"
  - "quickstart"
  - "connection"
  - "can"
  - "create"
  - "default"
  - "uses"
  - "application"
---

# BigQuery Quickstart connection

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The BigQuery Quickstart connection can create a default BigQuery connection that uses Application Default Credentials.

## Extended Definition

The BigQuery Quickstart connection can create a default BigQuery connection that uses Application Default Credentials.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition](https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition)
- [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- [https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart](https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart)

## Supporting Pages

### "Quickstart: Create a Looker (Google Cloud core) public secure connection\

- URL: [https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition](https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition)
- Source ID: `site-docs-reference-required-4`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next This Quickstart covered how to create a Standard Looker (Google Cloud core) instance that uses a public secure network connection and Google-managed encryption and that requires no deferred or denied maintenance windows and no additional users beyond the default number that is provided for a Standard edition.
- Create a Looker (Google Cloud core) public secure connection standard edition instance Learn how to create a Looker (Google Cloud core) instance that uses default configuration settings.
- For more information about creating and configuring an instance, see the Looker (Google Cloud core) documentation: Create a Looker (Google Cloud core) instance Set up a custom domain for a Looker (Google Cloud core) instance that uses public connections Configure an IP allowlist for Looker (Google Cloud core) Prepare a Looker (Google Cloud core) instance for users Connect to your database Use the sample LookML project on a Looker (Google Cloud core) instance Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Create the Looker (Google Cloud core) instance To create a Looker (Google Cloud core) instance that uses default configuration settings, follow these steps: Click Go to Looker (Google Cloud core) and select the Google Cloud project in which you want to create the Looker (Google Cloud core) instance, if it is not already pre-selected.

### Export table data to Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- Source ID: `site-docs-reference-required-6`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To learn how to create an application using the BigQuery API client libraries, see Client library quickstart .
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client libraries const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const { Storage } = require ( ' @google-cloud/storage ' ); const bigquery = new BigQuery (); const storage = new Storage (); async function extractTableCompressed () { // Exports my dataset:my table to gcs://my-bucket/my-file as a compressed file. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; // const bucketName = "my-bucket"; // const filename = "file.csv"; // Location must match that of the source table. const options = { location : 'US' , gzip : true , }; // Export data from the table into a Google Cloud Storage file const [ job ] = await bigquery . dataset ( datasetId ) . table ( tableId ) . extract ( storage . bucket ( bucketName ). file ( filename ), options ); console . log ( Job ${ job . id } created. ); // Check the job's status for errors const errors = job . status . errors ; if ( errors && errors . length > 0 ) { throw errors ; } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client libraries const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const { Storage } = require ( ' @google-cloud/storage ' ); const bigquery = new BigQuery (); const storage = new Storage (); async function extractTableToGCS () { // Exports my dataset:my table to gcs://my-bucket/my-file as raw CSV. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; // const bucketName = "my-bucket"; // const filename = "file.csv"; // Location must match that of the source table. const options = { location : 'US' , }; // Export data from the table into a Google Cloud Storage file const [ job ] = await bigquery . dataset ( datasetId ) . table ( tableId ) . extract ( storage . bucket ( bucketName ). file ( filename ), options ); console . log ( Job ${ job . id } created. ); // Check the job's status for errors const errors = job . status . errors ; if ( errors && errors . length > 0 ) { throw errors ; } } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- The following example shows how to create a new processed table from an existing table called source table which requires n partitions to achieve the chosen file size: CREATE TABLE my dataset . processed table PARTITION BY RANGE BUCKET ( export id , GENERATE ARRAY ( 0 , n , 1 )) CLUSTER BY export id AS ( SELECT , CAST ( FLOOR ( n RAND ()) AS INT64 ) AS export id FROM my dataset . source table ); For each integer i between 0 and n-1 , run an EXPORT DATA statement on the following query: SELECT EXCEPT ( export id ) FROM my dataset . processed table WHERE export id = i ; Extract compressed table Go Before trying this sample, follow the Go setup instructions in the BigQuery quickstart using client libraries .

### "Quickstart: Build a dashboard with sample data \_|\_ Looker \_|\_ Google\

- URL: [https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart](https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart)
- Source ID: `site-docs-reference-required-4`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Looker permissions You'll need to have the following Looker permissions on your Looker (Google Cloud core) instance (or a Looker role that includes these permissions): access data : Access the sample data in the Intermediate Ecommerce Explore explore (and its parent permission, see looks ): Access the Explore page and run queries in the Intermediate Ecommerce Explore. see user dashboards (and its parent permission, see looks ): View the Sales and Customer Insights dashboard. save dashboards (and its parent permission, save content ): Save and edit the Sales and Customer Insights dashboard. save looks (and its parent permission, save content ): Save the Weekly Shipping Trends (Last 8 Weeks) Look (if you complete the Build a Look with sample data quickstart). create table calculations : Create the table calculations for the Yearly Sales Goal Tracking (2024) tile.
- Create a new query tile within the dashboard In this section, you'll create the Sales Goal Tracking (2024) tile, which will show your cumulative sales over time compared to a yearly sales goal and uses table calculations to define the running total and the target sales.
- You'll create a query tile that tracks progress against a yearly sales goal and, if you completed the Build a Look with sample data quickstart, you'll add that Look to your dashboard as a tile.
- Yearly Sales Goal Tracking (2024) : Visualize your year-to-date sales and compare them to a set goal by using table calculations to visualize a running total and by adding a reference line. (Optional) Weekly Shipping Trends (Last 8 Weeks) : If you've completed the Build a Look with sample data quickstart, you can also add your shipping delay analysis Look to this dashboard.

