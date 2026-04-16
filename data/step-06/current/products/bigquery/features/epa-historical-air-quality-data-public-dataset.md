---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.890Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "EPA Historical Air Quality Data public dataset"
feature_slug: "epa-historical-air-quality-data-public-dataset"
latest_feature_date: "2017-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/time-series-anomaly-detection-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/managing-datasets"
keywords:
  - "epa"
  - "historical"
  - "air"
  - "quality"
  - "public"
  - "dataset"
  - "bigquery"
  - "datasets"
---

# EPA Historical Air Quality Data public dataset

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BigQuery public datasets program includes the EPA Historical Air Quality Data dataset.

## Extended Definition

The BigQuery public datasets program includes the EPA Historical Air Quality Data dataset.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/time-series-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/time-series-anomaly-detection-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/managing-datasets](https://docs.cloud.google.com/bigquery/docs/managing-datasets)

## Supporting Pages

### Manage datasets \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/managing-datasets](https://docs.cloud.google.com/bigquery/docs/managing-datasets)
- Source ID: `site-docs-reference-required-11`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Value ; import java.io.IOException ; import java.util.HashMap ; import java.util.Map ; // Sample to copy dataset from another gcp project public class CopyDataset { public static void main ( String [] args ) throws IOException { // TODO(developer): Replace these variables before running the sample. final String destinationProjectId = "MY DESTINATION PROJECT ID" ; final String destinationDatasetId = "MY DESTINATION DATASET ID" ; final String sourceProjectId = "MY SOURCE PROJECT ID" ; final String sourceDatasetId = "MY SOURCE DATASET ID" ; Map<String , Value > params = new HashMap <> (); params . put ( "source project id" , Value . newBuilder (). setStringValue ( sourceProjectId ). build ()); params . put ( "source dataset id" , Value . newBuilder (). setStringValue ( sourceDatasetId ). build ()); TransferConfig transferConfig = TransferConfig . newBuilder () . setDestinationDatasetId ( destinationDatasetId ) . setDisplayName ( "Your Dataset Copy Name" ) . setDataSourceId ( "cross region copy" ) . setParams ( Struct . newBuilder (). putAllFields ( params ). build ()) . setSchedule ( "every 24 hours" ) . build (); copyDataset ( destinationProjectId , transferConfig ); } public static void copyDataset ( String projectId , TransferConfig transferConfig ) throws IOException { try ( DataTransferServiceClient dataTransferServiceClient = DataTransferServiceClient . create ()) { ProjectName parent = ProjectName . of ( projectId ); CreateTransferConfigRequest request = CreateTransferConfigRequest . newBuilder () . setParent ( parent . toString ()) . setTransferConfig ( transferConfig ) . build (); TransferConfig config = dataTransferServiceClient . createTransferConfig ( request ); System . out . println ( "Copy dataset created successfully :" + config . getName ()); } catch ( ApiException ex ) { System . out . print ( "Copy dataset was not created." + ex . toString ()); } } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to copy datasets: bigquery.transfers.update on the destination project bigquery.jobs.create on the destination project bigquery.datasets.get on the source and destination dataset bigquery.tables.list on the source and destination dataset bigquery.datasets.update on the destination dataset bigquery.tables.create on the destination dataset You might also be able to get these permissions with custom roles or other predefined roles .
- See the License for the specific language governing permissions and limitations under the License. require "google/cloud/bigquery" def delete dataset and contents dataset id = "my dataset with tables" bigquery = Google :: Cloud :: Bigquery . new Use the force parameter to delete a dataset and its contents dataset = bigquery . dataset dataset id dataset . delete force : true puts "Dataset #{ dataset id } and contents deleted." end Restore tables from deleted datasets You can restore tables from a deleted dataset that are within the dataset's time travel window .
- To copy a dataset to a project in another VPC Service Controls service perimeter , you need to set the following egress rules: In the destination project's VPC Service Controls service perimeter configuration, the IAM principal must have the following methods: bigquery.datasets.get bigquery.tables.list bigquery.tables.get , bigquery.tables.getData In the source project's VPC Service Controls service perimeter configuration, the IAM principal being used must have the method set to All Methods .

### "Perform anomaly detection with a multivariate time-series forecasting model\

- URL: [https://docs.cloud.google.com/bigquery/docs/time-series-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/time-series-anomaly-detection-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This tutorial uses the following tables from the public epa historical air quality dataset, which contains daily PM 2.5, temperature, and wind speed information collected from multiple US cities: epa historical air quality.pm25 nonfrm daily summary epa historical air quality.wind daily summary epa historical air quality.temperature daily summary Required permissions To create the dataset, you need the bigquery.datasets.create IAM permission.
- Go to BigQuery In the SQL editor pane, run the following SQL statement: CREATE TABLE bqml tutorial.seattle air quality daily AS WITH pm25 daily AS ( SELECT avg ( arithmetic mean ) AS pm25 , date local AS date FROM bigquery-public-data.epa historical air quality.pm25 nonfrm daily summary WHERE city name = 'Seattle' AND parameter name = 'Acceptable PM2.5 AQI & Speciation Mass' GROUP BY date local ), wind speed daily AS ( SELECT avg ( arithmetic mean ) AS wind speed , date local AS date FROM bigquery-public-data.epa historical air quality.wind daily summary WHERE city name = 'Seattle' AND parameter name = 'Wind Speed - Resultant' GROUP BY date local ), temperature daily AS ( SELECT avg ( first max value ) AS temperature , date local AS date FROM bigquery-public-data.epa historical air quality.temperature daily summary WHERE city name = 'Seattle' AND parameter name = 'Outdoor Temperature' GROUP BY date local ) SELECT pm25 daily . date AS date , pm25 , wind speed , temperature FROM pm25 daily JOIN wind speed daily USING ( date ) JOIN temperature daily USING ( date ) Create the model Create a multivariate time series model, using the data from bqml tutorial.seattle air quality daily as training data.
- Go to BigQuery In the SQL editor pane, run the following SQL statement: CREATE OR REPLACE MODEL bqml tutorial.arimax model OPTIONS ( model type = 'ARIMA PLUS XREG' , auto arima = TRUE , time series data col = 'temperature' , time series timestamp col = 'date' ) AS SELECT FROM bqml tutorial.seattle air quality daily WHERE date "2023-02-01" ; The query takes several seconds to complete, after which the model arimax model appears in the bqml tutorial dataset and can be accessed in the Explorer pane.
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } Prepare the training data The PM2.5, temperature, and wind speed data are in separate tables.

### "Forecast a single time series with a multivariate model \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- You also create the following columns to use as input variables for the model: date : the date of the observation pm25 the average PM2.5 value for each day wind speed : the average wind speed for each day temperature : the highest temperature for each day In the following GoogleSQL query, the FROM bigquery-public-data.epa historical air quality. daily summary clause indicates that you are querying the daily summary tables in the epa historical air quality dataset.
- This table combines columns from several tables in the bigquery-public-data.epa historical air quality dataset in order to provide daily data weather data.
- This tutorial uses data from the bigquery-public-data.epa historical air quality public dataset .
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE TABLE bqml tutorial.seattle air quality daily AS WITH pm25 daily AS ( SELECT avg ( arithmetic mean ) AS pm25 , date local AS date FROM bigquery-public-data.epa historical air quality.pm25 nonfrm daily summary WHERE city name = 'Seattle' AND parameter name = 'Acceptable PM2.5 AQI & Speciation Mass' GROUP BY date local ), wind speed daily AS ( SELECT avg ( arithmetic mean ) AS wind speed , date local AS date FROM bigquery-public-data.epa historical air quality.wind daily summary WHERE city name = 'Seattle' AND parameter name = 'Wind Speed - Resultant' GROUP BY date local ), temperature daily AS ( SELECT avg ( first max value ) AS temperature , date local AS date FROM bigquery-public-data.epa historical air quality.temperature daily summary WHERE city name = 'Seattle' AND parameter name = 'Outdoor Temperature' GROUP BY date local ) SELECT pm25 daily . date AS date , pm25 , wind speed , temperature FROM pm25 daily JOIN wind speed daily USING ( date ) JOIN temperature daily USING ( date ); Visualize the input data Before creating the model, you can optionally visualize your input time series data to get a sense of the distribution.

