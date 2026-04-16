---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.838Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Avro logical type conversion"
feature_slug: "bigquery-avro-logical-type-conversion"
latest_feature_date: "2018-12-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-quickstart"
  - "https://docs.cloud.google.com/bigquery/docs/analyze-multimodal-data"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job"
keywords:
  - "bigquery"
  - "avro"
  - "logical"
  - "type"
  - "conversion"
  - "supports"
  - "converting"
  - "types"
---

# BigQuery Avro logical type conversion

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports converting Avro logical types when loading Avro data.

## Extended Definition

BigQuery supports converting Avro logical types when loading Avro data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-quickstart)
- [https://docs.cloud.google.com/bigquery/docs/analyze-multimodal-data](https://docs.cloud.google.com/bigquery/docs/analyze-multimodal-data)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job)

## Supporting Pages

### List data sources \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-quickstart)
- Source ID: `site-docs-reference-required-15`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Includes the autoloader for libraries installed with composer require DIR . '/vendor/autoload.php'; Imports the Google Cloud client library use Google\Cloud\BigQuery\DataTransfer\V1\Client\DataTransferServiceClient; use Google\Cloud\BigQuery\DataTransfer\V1\ListDataSourcesRequest; Instantiates a client $bqdtsClient = new DataTransferServiceClient(); Your Google Cloud Platform project ID $projectId = 'YOUR PROJECT ID'; $parent = sprintf('projects/%s/locations/us', $projectId); try { echo 'Supported Data Sources:', PHP EOL; $listDataSourcesRequest = (new ListDataSourcesRequest()) ->setParent($parent); $pagedResponse = $bqdtsClient->listDataSources($listDataSourcesRequest); foreach ($pagedResponse->iterateAllElements() as $dataSource) { echo 'Data source: ', $dataSource->getDisplayName(), PHP EOL; echo 'ID: ', $dataSource->getDataSourceId(), PHP EOL; echo 'Full path: ', $dataSource->getName(), PHP EOL; echo 'Description: ', $dataSource->getDescription(), PHP EOL; } } finally { $bqdtsClient->close(); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Imports the Google Cloud client library require "google/cloud/bigquery/data transfer" Your Google Cloud Platform project ID project id = "YOUR PROJECT ID" Instantiate a client data transfer = Google :: Cloud :: Bigquery :: DataTransfer . data transfer service Get the full path to your project. project path = data transfer . project path project : project id puts "Supported Data Sources:" Iterate over all possible data sources. data transfer . list data sources ( parent : project path ) . each do data source puts "Data source: #{ data source . display name } " puts "ID: #{ data source . data source id } " puts "Full path: #{ data source . name } " puts "Description: #{ data source . description } " end What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- Data sources are the services that can be used to create data transfers into BigQuery. @param {string} projectId The Google Cloud project ID, for example 'example-project-id'. / async function listDataSources ( projectId ) { const request = { parent : projects/ ${ projectId } , }; try { const [ dataSources ] = await client . listDataSources ( request ); if ( dataSources . length === 0 ) { console . log ( No data sources found in project ${ projectId } . ); return ; } console . log ( 'Supported data sources:' ); for ( const dataSource of dataSources ) { console . log ( \nData source: ${ dataSource . name } ); console . log ( ID: ${ dataSource . dataSourceId } ); console . log ( Display Name: ${ dataSource . displayName } ); } } catch ( err ) { if ( err . code === status .
- DataTransferServiceClient () TODO: Update to your project ID. project id = "my-project" Get the full path to your project. parent = client . common project path ( project id ) print ( "Supported Data Sources:" ) Iterate over all possible data sources. for data source in client . list data sources ( parent = parent ): print ( " {} :" . format ( data source . display name )) print ( " \t ID: {} " . format ( data source . data source id )) print ( " \t Full path: {} " . format ( data source . name )) print ( " \t Description: {} " . format ( data source . description )) Ruby Before trying this sample, follow the Ruby setup instructions in the BigQuery quickstart using client libraries .

### Analyze multimodal data in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analyze-multimodal-data](https://docs.cloud.google.com/bigquery/docs/analyze-multimodal-data)
- Source ID: `site-docs-reference-5`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Generative AI functions Generate text, embeddings, and scalar values based on ObjectRef or ObjectRefRuntime input by using the following generative AI functions with Gemini models: AI.GENERATE AI.GENERATE TEXT AI.GENERATE TABLE AI.GENERATE BOOL AI.GENERATE DOUBLE AI.GENERATE INT AI.GENERATE EMBEDDING AI.EMBED AI.SIMILARITY AI.CLASSIFY AI.IF AI.SCORE Work with multimodal data in Python You can analyze multimodal data in Python by using BigQuery DataFrames classes and methods.
- Limitations The following limitations apply to BigQuery multimodal data features: If you don't explicitly specify the name of the project that contains the connection in the authorizer field of an ObjectRef value, then the connection must exist either in the project that contains the object table that stores it, or in the project in which the query that references the ObjectRef value is run.
- BigQuery's multimodal data features let you perform the following tasks: Integrate unstructured data stored in Cloud Storage as another column alongside structured data in standard BigQuery tables by representing unstructured data as ObjectRef values.
- Benefits BigQuery's multimodal data features offer the following benefits: Composability : you can store and manage structured and unstructured data in the same standard table row by using ObjectRef values.

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

