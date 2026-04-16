---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.445Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery resource tags for IAM conditional access"
feature_slug: "bigquery-resource-tags-for-iam-conditional-access"
latest_feature_date: "2024-06-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-iam-policy"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function"
keywords:
  - "bigquery"
  - "resource"
  - "tags"
  - "iam"
  - "conditional"
  - "access"
  - "supports"
  - "tables"
---

# BigQuery resource tags for IAM conditional access

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports tags on tables and datasets for conditionally granting or denying access with IAM policies.

## Extended Definition

BigQuery supports tags on tables and datasets for conditionally granting or denying access with IAM policies.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-iam-policy](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-iam-policy)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function)

## Supporting Pages

### "Run queries using the BigQuery DataFrames bigframes.pandas APIs \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods)
- Source ID: `site-docs-reference-required-15`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . import bigframes.pandas as bpd Load data from BigQuery query or table = "bigquery-public-data.ml datasets.penguins" bq df = bpd . read gbq ( query or table ) Inspect one of the columns (or series) of the DataFrame: bq df [ "body mass g" ] Compute the mean of this series: average body mass = bq df [ "body mass g" ] . mean () print ( f "average body mass: { average body mass } " ) Find the heaviest species using the groupby operation to calculate the mean body mass g: ( bq df [ "body mass g" ] . groupby ( by = bq df [ "species" ]) . mean () . sort values ( ascending = False ) . head ( 10 ) ) What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- Explore further For detailed documentation that includes this code sample, see the following: Use BigQuery DataFrames Code sample Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Home Documentation Data analytics BigQuery Samples Run queries using the BigQuery DataFrames bigframes.pandas APIs Stay organized with collections Save and categorize content based on your preferences.
- Use the BigQuery DataFrames bigframes.pandas APIs to perform data analysis via the BigQuery Query engine.

### Create IAM policy \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-iam-policy](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-iam-policy)
- Source ID: `site-docs-reference-required-15`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); TableId tableId = TableId . of ( datasetName , tableName ); Policy policy = bigquery . getIamPolicy ( tableId ); policy . toBuilder () . addIdentity ( Role . of ( "roles/bigquery.dataViewer" ), Identity . user ( "example-analyst-group@google.com" )) . build (); bigquery . setIamPolicy ( tableId , policy ); System . out . println ( "Iam policy created successfully" ); } catch ( BigQueryException e ) { System . out . println ( "Iam policy was not created. \n" + e . toString ()); } } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Client () policy = bqclient . get iam policy ( your table id , # e.g. "project.dataset.table" ) analyst email = "example-analyst-group@google.com" binding = { "role" : "roles/bigquery.dataViewer" , "members" : { f "group: { analyst email } " }, } policy . bindings . append ( binding ) updated policy = bqclient . set iam policy ( your table id , # e.g. "project.dataset.table" policy , ) for binding in updated policy . bindings : print ( repr ( binding )) What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- Home Documentation Data analytics BigQuery Samples Create IAM policy Stay organized with collections Save and categorize content based on your preferences.
- Code sample Java Before trying this sample, follow the Java setup instructions in the BigQuery quickstart using client libraries .

### "Deploy and apply a remote function using BigQuery DataFrames \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function)
- Source ID: `site-docs-reference-required-15`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- The BigQuery remote function created to support the BigQuery DataFrames remote function can be located via a property bigframes remote function set in the remote function object. print ( f "Created BQ remote function: { get bucket . bigframes remote function } " ) The cloud function can be located via another property bigframes cloud function set in the remote function object. print ( f "Created cloud function: { get bucket . bigframes cloud function } " ) Warning: The deployed cloud function may be visible to other users with sufficient privilege in the project, so the user should be careful about having any sensitive data in the code that will be deployed as a remote function.
- One can find more details about the usage and the requirements via help command. help ( bpd . remote function ) Read a table and inspect the column of interest. df = bpd . read gbq ( "bigquery-public-data.ml datasets.penguins" ) df [ "body mass g" ] . head ( 10 ) Define a custom function, and specify the intent to turn it into a remote function.
- For more information, see Set up authentication for client libraries . import bigframes.pandas as bpd Set BigQuery DataFrames options bpd . options . bigquery . project = your gcp project id bpd . options . bigquery . location = "US" BigQuery DataFrames gives you the ability to turn your custom scalar functions into a BigQuery remote function.
- For that, there is a google cloud function deployed by serializing the user code, and a BigQuery remote function created to call the cloud function via the latter's http endpoint on the data in the DataFrame.

