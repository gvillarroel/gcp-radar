---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.508Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "GROUP BY CUBE"
feature_slug: "group-by-cube"
latest_feature_date: "2024-02-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-authorized-dataset"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataset-exists"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-datasets-schemata"
keywords:
  - "group"
  - "cube"
  - "bigquery"
  - "supports"
  - "clause"
  - "producing"
  - "aggregated"
  - "across"
---

# GROUP BY CUBE

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports the GROUP BY CUBE clause for producing aggregated data across grouping set permutations; BigQuery queries support the GROUP BY CUBE clause for aggregating over grouping set permutations.

## Extended Definition

BigQuery supports the GROUP BY CUBE clause for producing aggregated data across grouping set permutations; BigQuery queries support the GROUP BY CUBE clause for aggregating over grouping set permutations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-authorized-dataset](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-authorized-dataset)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataset-exists](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataset-exists)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-datasets-schemata](https://docs.cloud.google.com/bigquery/docs/information-schema-datasets-schemata)

## Supporting Pages

### Authorize a BigQuery Dataset \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-authorized-dataset](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-authorized-dataset)
- Source ID: `site-docs-reference-required-15`
- Final score: 68
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
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); Dataset dataset = bigquery . getDataset ( DatasetId . of ( datasetName )); if ( dataset != null ) { System . out . println ( "Dataset already exists." ); } else { System . out . println ( "Dataset not found." ); } } catch ( BigQueryException e ) { System . out . println ( "Something went wrong. \n" + e . toString ()); } } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Explore further For detailed documentation that includes this code sample, see the following: Listing datasets Code sample Java Before trying this sample, follow the Java setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . from google.cloud import bigquery from google.cloud.exceptions import NotFound client = bigquery .
- Home Documentation Data analytics BigQuery Samples Check dataset existence Stay organized with collections Save and categorize content based on your preferences.

### SCHEMATA view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-datasets-schemata](https://docs.cloud.google.com/bigquery/docs/information-schema-datasets-schemata)
- Source ID: `site-docs-reference-3`
- Final score: 64
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Each of the following predefined IAM roles includes the permissions that you need in order to get the SCHEMATA view: roles/bigquery.admin roles/bigquery.dataEditor roles/bigquery.dataOwner roles/bigquery.dataViewer For more information about BigQuery permissions, see Access control with IAM .
- Before you begin To query the SCHEMATA view for dataset metadata, you need the bigquery.datasets.get Identity and Access Management (IAM) permission at the project level.
- Home Documentation Data analytics BigQuery Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.

