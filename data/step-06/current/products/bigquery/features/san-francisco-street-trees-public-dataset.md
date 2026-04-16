---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.894Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "San Francisco Street Trees public dataset"
feature_slug: "san-francisco-street-trees-public-dataset"
latest_feature_date: "2017-03-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/managing-datasets"
  - "https://docs.cloud.google.com/bigquery/docs/boosted-tree-classifier-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/visualize-jupyter"
keywords:
  - "san"
  - "francisco"
  - "street"
  - "trees"
  - "public"
  - "dataset"
  - "bigquery"
  - "datasets"
---

# San Francisco Street Trees public dataset

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BigQuery public datasets program includes the San Francisco Street Trees dataset.

## Extended Definition

The BigQuery public datasets program includes the San Francisco Street Trees dataset.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/managing-datasets](https://docs.cloud.google.com/bigquery/docs/managing-datasets)
- [https://docs.cloud.google.com/bigquery/docs/boosted-tree-classifier-tutorial](https://docs.cloud.google.com/bigquery/docs/boosted-tree-classifier-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/visualize-jupyter](https://docs.cloud.google.com/bigquery/docs/visualize-jupyter)

## Supporting Pages

### Manage datasets \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/managing-datasets](https://docs.cloud.google.com/bigquery/docs/managing-datasets)
- Source ID: `site-docs-reference-required-11`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Value ; import java.io.IOException ; import java.util.HashMap ; import java.util.Map ; // Sample to copy dataset from another gcp project public class CopyDataset { public static void main ( String [] args ) throws IOException { // TODO(developer): Replace these variables before running the sample. final String destinationProjectId = "MY DESTINATION PROJECT ID" ; final String destinationDatasetId = "MY DESTINATION DATASET ID" ; final String sourceProjectId = "MY SOURCE PROJECT ID" ; final String sourceDatasetId = "MY SOURCE DATASET ID" ; Map<String , Value > params = new HashMap <> (); params . put ( "source project id" , Value . newBuilder (). setStringValue ( sourceProjectId ). build ()); params . put ( "source dataset id" , Value . newBuilder (). setStringValue ( sourceDatasetId ). build ()); TransferConfig transferConfig = TransferConfig . newBuilder () . setDestinationDatasetId ( destinationDatasetId ) . setDisplayName ( "Your Dataset Copy Name" ) . setDataSourceId ( "cross region copy" ) . setParams ( Struct . newBuilder (). putAllFields ( params ). build ()) . setSchedule ( "every 24 hours" ) . build (); copyDataset ( destinationProjectId , transferConfig ); } public static void copyDataset ( String projectId , TransferConfig transferConfig ) throws IOException { try ( DataTransferServiceClient dataTransferServiceClient = DataTransferServiceClient . create ()) { ProjectName parent = ProjectName . of ( projectId ); CreateTransferConfigRequest request = CreateTransferConfigRequest . newBuilder () . setParent ( parent . toString ()) . setTransferConfig ( transferConfig ) . build (); TransferConfig config = dataTransferServiceClient . createTransferConfig ( request ); System . out . println ( "Copy dataset created successfully :" + config . getName ()); } catch ( ApiException ex ) { System . out . print ( "Copy dataset was not created." + ex . toString ()); } } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to copy datasets: bigquery.transfers.update on the destination project bigquery.jobs.create on the destination project bigquery.datasets.get on the source and destination dataset bigquery.tables.list on the source and destination dataset bigquery.datasets.update on the destination dataset bigquery.tables.create on the destination dataset You might also be able to get these permissions with custom roles or other predefined roles .
- See the License for the specific language governing permissions and limitations under the License. require "google/cloud/bigquery" def delete dataset and contents dataset id = "my dataset with tables" bigquery = Google :: Cloud :: Bigquery . new Use the force parameter to delete a dataset and its contents dataset = bigquery . dataset dataset id dataset . delete force : true puts "Dataset #{ dataset id } and contents deleted." end Restore tables from deleted datasets You can restore tables from a deleted dataset that are within the dataset's time travel window .
- To copy a dataset to a project in another VPC Service Controls service perimeter , you need to set the following egress rules: In the destination project's VPC Service Controls service perimeter configuration, the IAM principal must have the following methods: bigquery.datasets.get bigquery.tables.list bigquery.tables.get , bigquery.tables.getData In the source project's VPC Service Controls service perimeter configuration, the IAM principal being used must have the method set to All Methods .

### "Perform classification with a boosted trees model \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/boosted-tree-classifier-tutorial](https://docs.cloud.google.com/bigquery/docs/boosted-tree-classifier-tutorial)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to BigQuery In the query editor, run the following query: CREATE OR REPLACE VIEW bqml tutorial.input data AS SELECT age , workclass , marital status , education num , occupation , hours per week , income bracket , CASE WHEN MOD ( functional weight , 10 ) 8 THEN 'training' WHEN MOD ( functional weight , 10 ) = 8 THEN 'evaluation' WHEN MOD ( functional weight , 10 ) = 9 THEN 'prediction' END AS dataframe FROM bigquery-public-data.ml datasets.census adult income ; In the left pane, click explore Explorer : If you don't see the left pane, click last page Expand left pane to open the pane.
- For more information, see Set up ADC for a local development environment . import bigframes.pandas as bpd input data = bpd . read gbq ( "bigquery-public-data.ml datasets.census adult income" , columns = ( "age" , "workclass" , "marital status" , "education num" , "occupation" , "hours per week" , "income bracket" , "functional weight" , ), ) input data [ "dataframe" ] = bpd .
- This tutorial uses the bigquery-public-data.ml datasets.census adult income dataset.
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .

### "Visualize geospatial analytics data using a Colab notebook \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/visualize-jupyter](https://docs.cloud.google.com/bigquery/docs/visualize-jupyter)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- This tutorial uses the following BigQuery public datasets : San Francisco Ford GoBike Share San Francisco Neighborhoods San Francisco Police Department (SFPD) Reports For information on accessing these public datasets, see Access public datasets in the Google Cloud console .
- This code uses the %%bigquery magic function to run the query and return the results in a DataFrame: Query the neighborhood name and geometry from the San Francisco neighborhoods dataset. %% bigquery gdf sanfrancisco neighborhoods -- project { GCP PROJECT ID } -- use geodataframe geometry SELECT neighborhood , neighborhood geom AS geometry FROM bigquery - public - data . san francisco neighborhoods . boundaries Click play circle filled Run cell .
- You use the public datasets to create the following visualizations: A scatter plot of all bike share stations from the Ford GoBike Share dataset Polygons in the San Francisco Neighborhoods dataset A choropleth map of the number of bike share stations by neighborhood A heatmap of incidents from the San Francisco Police Department Reports dataset Objectives Set up authentication with Google Cloud and, optionally, Google Maps.
- Create a scatter plot In this section, you create a scatter plot of all bike share stations in the San Francisco Ford GoBike Share public dataset by retrieving data from the bigquery-public-data.san francisco bikeshare.bikeshare station info table.

