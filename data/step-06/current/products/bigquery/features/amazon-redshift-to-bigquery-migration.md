---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.796Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Amazon Redshift to BigQuery migration"
feature_slug: "amazon-redshift-to-bigquery-migration"
latest_feature_date: "2020-02-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-authorized-dataset"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataset-exists"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job"
keywords:
  - "amazon"
  - "redshift"
  - "bigquery"
  - "migration"
  - "supports"
  - "warehouses"
  - "into"
---

# Amazon Redshift to BigQuery migration

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports migration of Amazon Redshift data warehouses into BigQuery; BigQuery supports migration of Amazon Redshift data warehouses into BigQuery.

## Extended Definition

BigQuery supports migration of Amazon Redshift data warehouses into BigQuery; BigQuery supports migration of Amazon Redshift data warehouses into BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-authorized-dataset](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-authorized-dataset)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataset-exists](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataset-exists)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job)

## Supporting Pages

### Authorize a BigQuery Dataset \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-authorized-dataset](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-authorized-dataset)
- Source ID: `site-docs-reference-required-15`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: Only views target types are supported for now. @param source project id [String] The ID of the source Google Cloud project. @param source database id [String] The ID of the source database. @param user project id [String] The ID of the user Google Cloud project. @param user database id [String] The ID of the user database. @param target types [Array<String>] List of target types for authorization. def authorized dataset source project id :, source database id :, user project id :, user database id :, target types : Initialize client and get source dataset's references source bigquery = Google :: Cloud :: Bigquery . new project id : source project id source dataset = source bigquery . dataset source database id Initialize client and get user dataset's references user bigquery = Google :: Cloud :: Bigquery . new project id : user project id user dataset = user bigquery . dataset user database id Add the user dataset's DatasetAccessEntry object to the existing source dataset rules source dataset . access do access access . add reader dataset user dataset . build access entry ( target types : target types ) end puts "Dataset #{ user dataset . dataset id } added as authorized dataset in dataset #{ source dataset . dataset id } " end What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- DatasetAclEntity ( userDatasetId , targetTypes ); sourceDatasetAcl . add ( Acl . of ( userDatasetAclEntity )); // update the source dataset with user dataset's ACL Dataset updatedSourceDataset = sourceDataset . toBuilder (). setAcl ( sourceDatasetAcl ). build (). update (); System . out . printf ( "Dataset %s updated with the added authorization\n" , updatedSourceDataset . getDatasetId ()); } catch ( BigQueryException e ) { System . out . println ( "Dataset Authorization failed due to error: \n" + e ); } } } Ruby Before trying this sample, follow the Ruby setup instructions in the BigQuery quickstart using client libraries .
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); // Get both source and user dataset's references Dataset sourceDataset = bigquery . getDataset ( sourceDatasetId ); Dataset userDataset = bigquery . getDataset ( userDatasetId ); // Get the source dataset's ACL List<Acl> sourceDatasetAcl = new ArrayList <> ( sourceDataset . getAcl ()); // Add the user dataset's DatasetAccessEntry object to the existing sourceDatasetAcl List<String> targetTypes = ImmutableList . of ( "VIEWS" ); Acl .
- String projectId = "PROJECT ID" ; String sourceDatasetName = "BIGQUERY SOURCE DATASET NAME" ; String userDatasetName = "BIGQUERY USER DATASET NAME" ; authorizeDataset ( DatasetId . of ( projectId , sourceDatasetName ), DatasetId . of ( projectId , userDatasetName )); } // This method will update sourceDataset's ACL with userDataset's ACL public static void authorizeDataset ( DatasetId sourceDatasetId , DatasetId userDatasetId ) { try { // Initialize client that will be used to send requests.

### Check dataset existence \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataset-exists](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataset-exists)
- Source ID: `site-docs-reference-required-15`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); Dataset dataset = bigquery . getDataset ( DatasetId . of ( datasetName )); if ( dataset != null ) { System . out . println ( "Dataset already exists." ); } else { System . out . println ( "Dataset not found." ); } } catch ( BigQueryException e ) { System . out . println ( "Something went wrong. \n" + e . toString ()); } } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Explore further For detailed documentation that includes this code sample, see the following: Listing datasets Code sample Java Before trying this sample, follow the Java setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . from google.cloud import bigquery from google.cloud.exceptions import NotFound client = bigquery .
- Home Documentation Data analytics BigQuery Samples Check dataset existence Stay organized with collections Save and categorize content based on your preferences.

### "Create a BigQuery DataFrame from a finished query job \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job)
- Source ID: `site-docs-reference-required-15`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Client ( project = project , location = location ) Job ID inserted based on the query results selcted to explore job id = JOB ID job = client . get job ( job id ) destination = str ( job . destination ) Load data from a BigQuery table using BigFrames DataFrames: bq df = bpd . read gbq table ( destination ) What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- For more information, see Set up authentication for client libraries . from google.cloud import bigquery import bigframes.pandas as bpd Project ID inserted based on the query results selected to explore project = your project id Location inserted based on the query results selected to explore location = "us" client = bigquery .
- Home Documentation Data analytics BigQuery Samples Create a BigQuery DataFrame from a finished query job Stay organized with collections Save and categorize content based on your preferences.
- Use the BigQuery DataFrames API to explore the results of a query job that may have been started elsewhere, such as from the BigQuery Console or bq CLI.

