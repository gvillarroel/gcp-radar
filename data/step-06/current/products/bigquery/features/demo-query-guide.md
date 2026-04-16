---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.640Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Demo query guide"
feature_slug: "demo-query-guide"
latest_feature_date: "2022-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries"
  - "https://docs.cloud.google.com/bigquery/docs/managing-datasets"
keywords:
  - "demo"
  - "query"
  - "guide"
  - "helps"
  - "users"
  - "trends"
  - "public"
  - "dataset"
---

# Demo query guide

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The demo query guide helps users query a Google Trends public dataset in BigQuery.

## Extended Definition

The demo query guide helps users query a Google Trends public dataset in BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries](https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries)
- [https://docs.cloud.google.com/bigquery/docs/managing-datasets](https://docs.cloud.google.com/bigquery/docs/managing-datasets)

## Supporting Pages

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Partner references Creating a dataset using BigQuery Adding a new QuickSight dataset for BigQuery Unlock the power of unified business intelligence with BigQuery and Amazon QuickSight Amplitude Solution Amplitude Analytics Category BI, ML, & Advanced Analytics Description Amplitude is an event-based analytics tool that tracks the behaviors of users based on in-product interactions and analyzes user behavior in real-time.
- Partner references Use BigQuery directly in a notebook Getting started with BigQuery in Deepnote BigQuery with Google OAuth Partner Advantage page Direct link DinMo Solution DinMo Category BI, ML, & Advanced Analytics Description DinMo transforms all customer touch points into high-value audiences and helps users leverage them in all activation platforms without code or engineering in less than 5 minutes.
- Partner references Hightouch BigQuery Source Hightouch for BigQuery documentation Sync data from BigQuery to Segment Partner Advantage page Direct link Incorta Solution Incorta unified data & analytics platform Category ETL & Data Integration Description Incorta is a self-service data analytics platform that helps users gain a deeper understanding of their business and make quick, accurate decisions.
- Partner references Secoda + BigQuery integration Connect to BigQuery from Secoda BigQuery integration guides Partner Advantage page Direct link SecuPi Solution SecuPi Platform Category Data Governance, Security, & MDM Description SecuPi offers a Data Centric, Privacy, Governance and Security Platform and helps protect, monitor and manage access to sensitive data over on-premise and cloud platforms.

### "Query a public dataset with the BigQuery client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries](https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries)
- Source ID: `site-docs-reference-2`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Query a public dataset Select one of the following languages: C# In Cloud Shell, create a new C# project and file: dotnet new console -n BigQueryCsharpDemo The output is similar to the following.
- To create a query against the bigquery-public-data.stackoverflow dataset that returns the top 10 most viewed Stack Overflow pages and their view counts, copy the following code into the app.js file: // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); async function queryStackOverflow () { // Queries a public Stack Overflow dataset. // Create a client const bigqueryClient = new BigQuery (); // The SQL query to run const sqlQuery = SELECT CONCAT( 'https://stackoverflow.com/questions/', CAST(id as STRING)) as url, view count FROM \bigquery-public-data.stackoverflow.posts questions\ WHERE tags like '%google-bigquery%' ORDER BY view count DESC LIMIT 10 ; const options = { query : sqlQuery , // Location must match that of the dataset(s) referenced in the query. location : 'US' , }; // Run the query const [ rows ] = await bigqueryClient . query ( options ); console . log ( 'Query Results:' ); rows . forEach ( row = > { const url = row [ 'url' ]; const viewCount = row [ 'view count' ]; console . log ( url: ${ url } , ${ viewCount } views ); }); } queryStackOverflow (); Click Open Terminal .
- If you are prompted to authorize Cloud Shell and agree to the terms, click Authorize . php app.php The result is similar to the following: --- Row 1 --- url: https://stackoverflow.com/questions/35159967, 170023 views --- Row 2 --- url: https://stackoverflow.com/questions/22879669, 142581 views --- Row 3 --- url: https://stackoverflow.com/questions/10604135, 132406 views --- Row 4 --- url: https://stackoverflow.com/questions/44564887, 128781 views --- Row 5 --- url: https://stackoverflow.com/questions/27060396, 127008 views --- Row 6 --- url: https://stackoverflow.com/questions/12482637, 120766 views --- Row 7 --- url: https://stackoverflow.com/questions/20673986, 115720 views --- Row 8 --- url: https://stackoverflow.com/questions/39109817, 108368 views --- Row 9 --- url: https://stackoverflow.com/questions/11057219, 105175 views --- Row 10 --- url: https://stackoverflow.com/questions/43195143, 101878 views Found 10 row(s) You have successfully queried a public dataset with the BigQuery PHP client library.
- If you are prompted to authorize Cloud Shell and agree to the terms, click Authorize . node app.js The result is similar to the following: Query Results: url: https://stackoverflow.com/questions/35159967, 170023 views url: https://stackoverflow.com/questions/22879669, 142581 views url: https://stackoverflow.com/questions/10604135, 132406 views url: https://stackoverflow.com/questions/44564887, 128781 views url: https://stackoverflow.com/questions/27060396, 127008 views url: https://stackoverflow.com/questions/12482637, 120766 views url: https://stackoverflow.com/questions/20673986, 115720 views url: https://stackoverflow.com/questions/39109817, 108368 views url: https://stackoverflow.com/questions/11057219, 105175 views url: https://stackoverflow.com/questions/43195143, 101878 views You have successfully queried a public dataset with the BigQuery Node.js client library.

### Manage datasets \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/managing-datasets](https://docs.cloud.google.com/bigquery/docs/managing-datasets)
- Source ID: `site-docs-reference-required-11`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Value ; import java.io.IOException ; import java.util.HashMap ; import java.util.Map ; // Sample to copy dataset from another gcp project public class CopyDataset { public static void main ( String [] args ) throws IOException { // TODO(developer): Replace these variables before running the sample. final String destinationProjectId = "MY DESTINATION PROJECT ID" ; final String destinationDatasetId = "MY DESTINATION DATASET ID" ; final String sourceProjectId = "MY SOURCE PROJECT ID" ; final String sourceDatasetId = "MY SOURCE DATASET ID" ; Map<String , Value > params = new HashMap <> (); params . put ( "source project id" , Value . newBuilder (). setStringValue ( sourceProjectId ). build ()); params . put ( "source dataset id" , Value . newBuilder (). setStringValue ( sourceDatasetId ). build ()); TransferConfig transferConfig = TransferConfig . newBuilder () . setDestinationDatasetId ( destinationDatasetId ) . setDisplayName ( "Your Dataset Copy Name" ) . setDataSourceId ( "cross region copy" ) . setParams ( Struct . newBuilder (). putAllFields ( params ). build ()) . setSchedule ( "every 24 hours" ) . build (); copyDataset ( destinationProjectId , transferConfig ); } public static void copyDataset ( String projectId , TransferConfig transferConfig ) throws IOException { try ( DataTransferServiceClient dataTransferServiceClient = DataTransferServiceClient . create ()) { ProjectName parent = ProjectName . of ( projectId ); CreateTransferConfigRequest request = CreateTransferConfigRequest . newBuilder () . setParent ( parent . toString ()) . setTransferConfig ( transferConfig ) . build (); TransferConfig config = dataTransferServiceClient . createTransferConfig ( request ); System . out . println ( "Copy dataset created successfully :" + config . getName ()); } catch ( ApiException ex ) { System . out . print ( "Copy dataset was not created." + ex . toString ()); } } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- The following examples show the formatting of the parameters, based on your system's environment: Linux: use single quotes to enclose the JSON string–for example: '{"source dataset id":"mydataset","source project id":"mysourceproject","overwrite destination table":"true"}' Windows command line: use double quotes to enclose the JSON string, and escape double quotes in the string with a backslash–for example: "{\"source dataset id\":\"mydataset\",\"source project id\":\"mysourceproject\",\"overwrite destination table\":\"true\"}" PowerShell: use single quotes to enclose the JSON string, and escape double quotes in the string with a backslash–for example: '{\"source dataset id\":\"mydataset\",\"source project id\":\"mysourceproject\",\"overwrite destination table\":\"true\"}' For example, the following command creates a dataset copy configuration that's named My Transfer with a target dataset that's named mydataset and a project with the ID of myproject . bq mk \ --transfer config \ --project id = myproject \ --data source = cross region copy \ --target dataset = mydataset \ --display name = 'My Transfer' \ --params = '{ "source dataset id":"123 demo eu", "source project id":"mysourceproject", "overwrite destination table":"true" }' API Enable the BigQuery Data Transfer Service for your destination dataset.
- See the // License for the specific language governing permissions and limitations under // the License. // using Google.Cloud.BigQuery.V2 ; using System ; public class BigQueryDeleteDatasetAndContents { public void DeleteDatasetAndContents ( string projectId = "your-project-id" , string datasetId = "your dataset with tables" ) { BigQueryClient client = BigQueryClient .
- Then create a transfer configuration to copy the dataset. import ( "context" "fmt" "cloud.google.com/go/bigquery" ) // deleteDataset demonstrates the deletion of an empty dataset. func deleteDataset ( projectID , datasetID string ) error { // projectID := "my-project-id" // datasetID := "mydataset" ctx := context .

