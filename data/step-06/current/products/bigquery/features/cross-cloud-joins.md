---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.500Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Cross-cloud joins"
feature_slug: "cross-cloud-joins"
latest_feature_date: "2024-02-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam"
  - "https://docs.cloud.google.com/bigquery/docs/samples/analyticshub-quickstart"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function"
keywords:
  - "cross"
  - "joins"
  - "bigquery"
  - "supports"
  - "across"
  - "omni"
  - "regions"
  - "queries"
---

# Cross-cloud joins

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports joins across Google Cloud and BigQuery Omni regions; BigQuery supports queries that join data across Google Cloud and BigQuery Omni regions.

## Extended Definition

BigQuery supports joins across Google Cloud and BigQuery Omni regions; BigQuery supports queries that join data across Google Cloud and BigQuery Omni regions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam)
- [https://docs.cloud.google.com/bigquery/docs/samples/analyticshub-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/analyticshub-quickstart)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function)

## Supporting Pages

### "Create a dataset and grant access to it \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam)
- Source ID: `site-docs-reference-required-15`
- Final score: 56
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the Terraform provider reference documentation . resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days labels = { billing group = "accounting" , pii = "sensitive" } } Update the user, group, or service account provided by the members argument with the appropriate principals for your organization. data "google iam policy" "default" { binding { role = "roles/bigquery.dataOwner" members = [ "user:raha@altostrat.com" , ] } binding { role = "roles/bigquery.admin" members = [ "user:raha@altostrat.com" , ] } binding { role = "roles/bigquery.user" members = [ "group:analysts@altostrat.com" , ] } binding { role = "roles/bigquery.dataViewer" members = [ "serviceAccount:bqcx-1234567891011-abcd@gcp-sa-bigquery-condel.iam.gserviceaccount.com" , ] } } resource "google bigquery dataset iam policy" "default" { dataset id = google bigquery dataset.default.dataset id policy data = data.google iam policy.default.policy data } What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- Home Documentation Data analytics BigQuery Samples Create a dataset and grant access to it Stay organized with collections Save and categorize content based on your preferences.
- The following example creates a dataset named mydataset, then uses the google bigquery dataset iam policy resource to grant access to it.

### "Create a data exchange and listing using Analytics Hub \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/analyticshub-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/analyticshub-quickstart)
- Source ID: `site-docs-reference-required-15`
- Final score: 48
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Leverage the page tokens to iterate through the entire collection. / // const pageSize = 1234 / Page token, returned by a previous call, to request the next page of results. / // const pageToken = 'abc123' // Imports the Dataexchange library const { AnalyticsHubServiceClient } = require ( ' @google-cloud/bigquery-data-exchange ' ). v1beta1 ; // Instantiates a client const dataexchangeClient = new AnalyticsHubServiceClient (); async function callListDataExchanges () { // Construct request const request = { parent , }; // Run request const iterable = await dataexchangeClient . listDataExchangesAsync ( request ); for await ( const response of iterable ) { console . log ( response ); } } callListDataExchanges (); What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- For more information, see Set up authentication for client libraries . // The analyticshub quickstart application demonstrates usage of the // Analytics hub API by creating an example data exchange and listing. package main import ( "context" "flag" "fmt" "log" analyticshub "cloud.google.com/go/bigquery/analyticshub/apiv1" "cloud.google.com/go/bigquery/analyticshub/apiv1/analyticshubpb" "google.golang.org/grpc/codes" "google.golang.org/grpc/status" ) func main () { // Define the command line flags for controlling the behavior of this quickstart. var ( projectID = flag .
- Explore further For detailed documentation that includes this code sample, see the following: Sharing Client Libraries Code sample Go Before trying this sample, follow the Go setup instructions in the BigQuery quickstart using client libraries .
- Home Documentation Data analytics BigQuery Samples Create a data exchange and listing using Analytics Hub Stay organized with collections Save and categorize content based on your preferences.

### "Deploy and apply a remote function using BigQuery DataFrames \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function)
- Source ID: `site-docs-reference-required-15`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- The BigQuery remote function created to support the BigQuery DataFrames remote function can be located via a property bigframes remote function set in the remote function object. print ( f "Created BQ remote function: { get bucket . bigframes remote function } " ) The cloud function can be located via another property bigframes cloud function set in the remote function object. print ( f "Created cloud function: { get bucket . bigframes cloud function } " ) Warning: The deployed cloud function may be visible to other users with sufficient privilege in the project, so the user should be careful about having any sensitive data in the code that will be deployed as a remote function.
- One can find more details about the usage and the requirements via help command. help ( bpd . remote function ) Read a table and inspect the column of interest. df = bpd . read gbq ( "bigquery-public-data.ml datasets.penguins" ) df [ "body mass g" ] . head ( 10 ) Define a custom function, and specify the intent to turn it into a remote function.
- For more information, see Set up authentication for client libraries . import bigframes.pandas as bpd Set BigQuery DataFrames options bpd . options . bigquery . project = your gcp project id bpd . options . bigquery . location = "US" BigQuery DataFrames gives you the ability to turn your custom scalar functions into a BigQuery remote function.
- For that, there is a google cloud function deployed by serializing the user code, and a BigQuery remote function created to call the cloud function via the latter's http endpoint on the data in the DataFrame.

