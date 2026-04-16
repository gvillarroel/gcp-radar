---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.915Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Google Drive federated data source"
feature_slug: "google-drive-federated-data-source"
latest_feature_date: "2016-05-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-quickstart"
keywords:
  - "drive"
  - "federated"
  - "source"
  - "sources"
  - "let"
  - "bigquery"
  - "query"
  - "documents"
---

# Google Drive federated data source

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Google Drive federated data sources let BigQuery query supported Google Drive documents without loading them first.

## Extended Definition

Google Drive federated data sources let BigQuery query supported Google Drive documents without loading them first.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-quickstart)

## Supporting Pages

### List data sources \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-quickstart)
- Source ID: `site-docs-reference-required-15`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Includes the autoloader for libraries installed with composer require DIR . '/vendor/autoload.php'; Imports the Google Cloud client library use Google\Cloud\BigQuery\DataTransfer\V1\Client\DataTransferServiceClient; use Google\Cloud\BigQuery\DataTransfer\V1\ListDataSourcesRequest; Instantiates a client $bqdtsClient = new DataTransferServiceClient(); Your Google Cloud Platform project ID $projectId = 'YOUR PROJECT ID'; $parent = sprintf('projects/%s/locations/us', $projectId); try { echo 'Supported Data Sources:', PHP EOL; $listDataSourcesRequest = (new ListDataSourcesRequest()) ->setParent($parent); $pagedResponse = $bqdtsClient->listDataSources($listDataSourcesRequest); foreach ($pagedResponse->iterateAllElements() as $dataSource) { echo 'Data source: ', $dataSource->getDisplayName(), PHP EOL; echo 'ID: ', $dataSource->getDataSourceId(), PHP EOL; echo 'Full path: ', $dataSource->getName(), PHP EOL; echo 'Description: ', $dataSource->getDescription(), PHP EOL; } } finally { $bqdtsClient->close(); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Imports the Google Cloud client library require "google/cloud/bigquery/data transfer" Your Google Cloud Platform project ID project id = "YOUR PROJECT ID" Instantiate a client data transfer = Google :: Cloud :: Bigquery :: DataTransfer . data transfer service Get the full path to your project. project path = data transfer . project path project : project id puts "Supported Data Sources:" Iterate over all possible data sources. data transfer . list data sources ( parent : project path ) . each do data source puts "Data source: #{ data source . display name } " puts "ID: #{ data source . data source id } " puts "Full path: #{ data source . name } " puts "Description: #{ data source . description } " end What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- Data sources are the services that can be used to create data transfers into BigQuery. @param {string} projectId The Google Cloud project ID, for example 'example-project-id'. / async function listDataSources ( projectId ) { const request = { parent : projects/ ${ projectId } , }; try { const [ dataSources ] = await client . listDataSources ( request ); if ( dataSources . length === 0 ) { console . log ( No data sources found in project ${ projectId } . ); return ; } console . log ( 'Supported data sources:' ); for ( const dataSource of dataSources ) { console . log ( \nData source: ${ dataSource . name } ); console . log ( ID: ${ dataSource . dataSourceId } ); console . log ( Display Name: ${ dataSource . displayName } ); } } catch ( err ) { if ( err . code === status .
- DataTransferServiceClient () TODO: Update to your project ID. project id = "my-project" Get the full path to your project. parent = client . common project path ( project id ) print ( "Supported Data Sources:" ) Iterate over all possible data sources. for data source in client . list data sources ( parent = parent ): print ( " {} :" . format ( data source . display name )) print ( " \t ID: {} " . format ( data source . data source id )) print ( " \t Full path: {} " . format ( data source . name )) print ( " \t Description: {} " . format ( data source . description )) Ruby Before trying this sample, follow the Ruby setup instructions in the BigQuery quickstart using client libraries .

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- You can use DDL commands to create, alter, and delete resources, such as the following: Datasets Tables Table schemas Table clones Table snapshots Views Connections User-defined functions (UDFs) Indexes Capacity commitments and reservations Row-level access policies Default configuration settings Required permissions To create a job that runs a DDL statement, you must have the bigquery.jobs.create permission for the project where you are running the job.
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.datasets.create The project where you create the federated dataset. bigquery.connections.use The project where you create the federated dataset. bigquery.connections.delegate The project where you create the federated dataset.
- Data definition language (DDL) statements in GoogleSQL Data definition language (DDL) statements let you create and modify BigQuery resources using GoogleSQL query syntax.
- A federated dataset is a connection between BigQuery and an external data source at the dataset level.

### Control access to resources with IAM \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- Source ID: `site-docs-reference-5`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to modify IAM policies for resources: To get a dataset's access policy: bigquery.datasets.get To set a dataset's access policy: bigquery.datasets.update To get a dataset's access policy (Google Cloud console only): bigquery.datasets.getIamPolicy To set a dataset's access policy (console only): bigquery.datasets.setIamPolicy To get a table or view's policy: bigquery.tables.getIamPolicy To set a table or view's policy: bigquery.tables.setIamPolicy To get a routine's access policy: bigquery.routines.getIamPolicy To set a routine's access policy: bigquery.routines.setIamPolicy To create bq tool or SQL BigQuery jobs (optional): bigquery.jobs.create You might also be able to get these permissions with custom roles or other predefined roles .
- See the BigQuery client library documentation for more details on update dataset: https://cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.client.Client#google cloud bigquery client Client update dataset try : Update just the access entries property of the dataset. dataset = client . update dataset ( dataset , [ "access entries" ], ) Notify user that the API call was successful. full dataset id = f " { dataset . project } . { dataset . dataset id } " print ( f "Revoked dataset access for ' { entity id } ' to ' dataset ' { full dataset id } .'" ) except PreconditionFailed : # A read-modify-write error. print ( f "Dataset ' { dataset . dataset id } ' was modified remotely before this update. " "Fetch the latest version and retry." ) Work with table and view access controls Views are treated as table resources in BigQuery.
- This capability implies that the authorized resources have the following permissions: bigquery.tables.get bigquery.tables.list bigquery.tables.getData bigquery.tables.updateData bigquery.tables.create bigquery.tables.delete bigquery.routines.get bigquery.routines.list bigquery.datasets.get bigquery.models.getData bigquery.models.getMetadata To deny access to these authorized resources, add one of the following values to the deniedPrincipal field when you create the deny policy: Value Use case principalSet://goog/public:all Blocks all principals including authorized resources. principalSet://bigquery.googleapis.com/projects/ PROJECT NUMBER / Blocks all BigQuery authorized resources in the specified project.
- Find more details about Policy and Binding objects here: https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Policy https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Binding binding = { "role" : role , "members" : [ principal id , ], } policy . bindings . append ( binding ) Set the IAM access policy with updated bindings. updated policy = client . set iam policy ( full resource name , policy ) Show a success message. print ( f "Role ' { role } ' granted for principal ' { principal id } '" f " on resource ' { full resource name } '." ) Predefined roles that grant access to tables and views Views are treated as table resources in BigQuery.

