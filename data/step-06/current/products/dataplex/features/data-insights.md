---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:48.464Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Data insights"
feature_slug: "data-insights"
latest_feature_date: "2024-08-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/data-insights"
  - "https://docs.cloud.google.com/dataplex/docs/use-data-profiling"
  - "https://docs.cloud.google.com/dataplex/docs/develop-custom-connector"
  - "https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality"
keywords:
  - "insights"
  - "dataplex"
  - "uses"
  - "gemini"
  - "generated"
  - "queries"
  - "to"
  - "help"
---

# Data insights

Product: Dataplex
Coverage: MEDIUM

## Step 02 Summary

Dataplex uses Gemini-generated queries to help users explore table data, identify patterns, and assess quality; Dataplex uses Gemini-generated queries to help users explore table data, identify patterns, and assess quality.

## Extended Definition

Dataplex uses Gemini-generated queries to help users explore table data, identify patterns, and assess quality; Dataplex uses Gemini-generated queries to help users explore table data, identify patterns, and assess quality.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/data-insights](https://docs.cloud.google.com/dataplex/docs/data-insights)
- [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling)
- [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector)
- [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality)

## Supporting Pages

### Access data insights in Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/data-insights](https://docs.cloud.google.com/dataplex/docs/data-insights)
- Source ID: `site-docs-root`
- Final score: 266
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required generate insights, expand the Required permissions section: Required permissions dataplex.datascans.get dataplex.datascans.getData Enable APIs To use data insights, enable the following APIs in your project: Dataplex API, BigQuery API, and Gemini for Google Cloud API.
- Required roles To get read-only access to the generated insights, ask your administrator to grant you the following IAM role: Dataplex DataScan DataViewer ( roles/dataplex.dataScanDataViewer ) on the project containing the BigQuery tables for which you want to view insights.
- Knowledge Catalog (formerly Dataplex Universal Catalog) data insights automatically generates descriptions, relationship graphs, and SQL queries from your table and dataset metadata.
- Note: To provide feedback on this feature, email dataplex-data-insights-help@google.com .

### "Create and use data profile scans \_|\_ Knowledge Catalog \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . using Google.Cloud.Dataplex.V1 ; using Google.LongRunning ; using Google.Protobuf.WellKnownTypes ; public sealed partial class GeneratedDataScanServiceClientSnippets { /// <summary>Snippet for UpdateDataScan</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void UpdateDataScanRequestObject () { // Create client DataScanServiceClient dataScanServiceClient = DataScanServiceClient .
- For more information, see Set up authentication for a local development environment . using Google.Api.Gax.ResourceNames ; using Google.Cloud.Dataplex.V1 ; using Google.LongRunning ; public sealed partial class GeneratedDataScanServiceClientSnippets { /// <summary>Snippet for CreateDataScan</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void CreateDataScanRequestObject () { // Create client DataScanServiceClient dataScanServiceClient = DataScanServiceClient .
- For more information, see Set up authentication for a local development environment . using Google.Api.Gax ; using Google.Cloud.Dataplex.V1 ; using System ; public sealed partial class GeneratedDataScanServiceClientSnippets { /// <summary>Snippet for ListDataScanJobs</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void ListDataScanJobsRequestObject () { // Create client DataScanServiceClient dataScanServiceClient = DataScanServiceClient .
- For more information, see Set up authentication for a local development environment . using Google.Cloud.Dataplex.V1 ; public sealed partial class GeneratedDataScanServiceClientSnippets { /// <summary>Snippet for RunDataScan</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void RunDataScanRequestObject () { // Create client DataScanServiceClient dataScanServiceClient = DataScanServiceClient .

### "Develop a custom connector for metadata import \_|\_ Knowledge Catalog \_\

- URL: [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector)
- Source ID: `site-docs-root-2`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- ArgumentParser () Dataplex arguments parser . add argument ( "--target project id" , type = str , required = True , help = "The name of the target Google Cloud project to import the metadata into." ) parser . add argument ( "--target location id" , type = str , required = True , help = "The target Google Cloud location where the metadata will be imported into." ) parser . add argument ( "--target entry group id" , type = str , required = True , help = "The ID of the entry group to import metadata into. " "The metadata will be imported into entry group with the following" "full resource name: projects/$ {target project id} /" "locations/$ {target location id} /entryGroups/$ {target entry group id} ." ) Oracle arguments parser . add argument ( "--host port" , type = str , required = True , help = "Oracle host and port number separated by the colon (:)." ) parser . add argument ( "--user" , type = str , required = True , help = "Oracle User." ) parser . add argument ( "--password-secret" , type = str , required = True , help = "Secret resource name in the Secret Manager for the Oracle password." ) parser . add argument ( "--database" , type = str , required = True , help = "Source Oracle database." ) Google Cloud Storage arguments It is assumed that the bucket is in the same region as the entry group parser . add argument ( "--output bucket" , type = str , required = True , help = "The Cloud Storage bucket to write the generated metadata import file." ) parser . add argument ( "--output folder" , type = str , required = True , help = "A folder in the Cloud Storage bucket, to write the generated metadata import files." ) return vars ( parser . parse known args ()[ 0 ]) In production environments, we recommend that you store the password in Secret Manager .
- Install PySpark: pip install pyspark Install requirements: pip install -r requirements.txt The following requirements are installed: google-cloud-dataplex==2.2.2 google-cloud-storage google-cloud-secret-manager Update the oracle connector.py file with code to read data from an Oracle data source and return DataFrames. """Reads Oracle using PySpark.""" from typing import Dict from pyspark.sql import SparkSession , DataFrame from src.constants import EntryType SPARK JAR PATH = "/opt/spark/jars/ojdbc11.jar" class OracleConnector : """Reads data from Oracle and returns Spark Dataframes.""" def init ( self , config : Dict [ str , str ]): PySpark entrypoint self . spark = SparkSession . builder . appName ( "OracleIngestor" ) \ . config ( "spark.jars" , SPARK JAR PATH ) \ . getOrCreate () self . config = config self . url = f "jdbc:oracle:thin:@ { config [ 'host port' ] } : { config [ 'database' ] } " def execute ( self , query : str ) - > DataFrame : """A generic method to execute any query.""" return self . spark . read . format ( "jdbc" ) \ . option ( "driver" , "oracle.jdbc.OracleDriver" ) \ . option ( "url" , self . url ) \ . option ( "query" , query ) \ . option ( "user" , self . config [ "user" ]) \ . option ( "password" , self . config [ "password" ]) \ . load () def get db schemas ( self ) - > DataFrame : """In Oracle, schemas are usernames.""" query = "SELECT username FROM dba users" return self . execute ( query ) def get columns ( self , schema name : str , object type : str ) - > str : """Gets a list of columns in tables or views in a batch.""" Every line here is a column that belongs to the table or to the view.
- The function calls the metadataJobs.create API method to run a metadata import job. - submit import job: call: http.post args: url: ${ "https://dataplex.googleapis.com/v1/projects/" + args.TARGET PROJECT ID + "/locations/" + args.CLOUD REGION + "/metadataJobs?metadata job id=" + WORKFLOW ID } auth: type: OAuth2 scopes: "https://www.googleapis.com/auth/cloud-platform" body: type: IMPORT import spec: source storage uri: ${ "gs://" + args.CLOUD STORAGE BUCKET ID + "/" + WORKFLOW ID + "/" } entry sync mode: FULL aspect sync mode: INCREMENTAL scope: entry groups: - ${ "projects/" + args.TARGET PROJECT ID + "/locations/" + args.CLOUD REGION + "/entryGroups/" +args.TARGET ENTRY GROUP ID } entry types: - "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-instance" - "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-database" - "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-schema" - "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-table" - "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-view" aspect types: - "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-instance" - "projects/dataplex-types/locations/global/aspectTypes/schema" - "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-database" - "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-schema" - "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-table" - "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-view" result: IMPORT JOB RESPONSE Provide the same entry types and aspect types that you included when you called the API method manually.
- PROJECT ID = PROJECT LOCATION ID = LOCATION DATAPLEX API = dataplex.googleapis.com/v1/projects/ $PROJECT ID /locations/ $LOCATION ID alias gcurl = 'curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"' Call the API method, passing the entry types and aspect types that you want to import. gcurl https:// ${ DATAPLEX API } /metadataJobs?metadata job id = " JOB ID " -d " $( cat <<EOF { "type" : "IMPORT" , "import spec" : { "source storage uri" : "gs:// BUCKET / FOLDER /" , "entry sync mode" : "FULL" , "aspect sync mode" : "INCREMENTAL" , "scope" : { "entry groups" : [ "projects/ PROJECT /locations/ LOCATION /entryGroups/ ENTRY GROUP ID " ] , "entry types" : [ "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-instance" , "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-database" , "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-schema" , "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-table" , "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-view" ] , "aspect types" : [ "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-instance" , "projects/dataplex-types/locations/global/aspectTypes/schema" , "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-database" , "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-schema" , "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-table" , "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-view" ] , } , } , } EOF ) " The schema aspect type is a global aspect type that is defined by Knowledge Catalog.

### Use auto data quality \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality)
- Source ID: `site-docs-root`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . using Google.Cloud.Dataplex.V1 ; using Google.LongRunning ; using Google.Protobuf.WellKnownTypes ; public sealed partial class GeneratedDataScanServiceClientSnippets { /// <summary>Snippet for UpdateDataScan</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void UpdateDataScanRequestObject () { // Create client DataScanServiceClient dataScanServiceClient = DataScanServiceClient .
- For more information, see Set up authentication for a local development environment . using Google.Cloud.Dataplex.V1 ; using Google.LongRunning ; using Google.Protobuf.WellKnownTypes ; public sealed partial class GeneratedDataScanServiceClientSnippets { /// <summary>Snippet for DeleteDataScan</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void DeleteDataScanRequestObject () { // Create client DataScanServiceClient dataScanServiceClient = DataScanServiceClient .
- For more information, see Set up authentication for a local development environment . using Google.Api.Gax.ResourceNames ; using Google.Cloud.Dataplex.V1 ; using Google.LongRunning ; public sealed partial class GeneratedDataScanServiceClientSnippets { /// <summary>Snippet for CreateDataScan</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void CreateDataScanRequestObject () { // Create client DataScanServiceClient dataScanServiceClient = DataScanServiceClient .
- For more information, see Set up authentication for a local development environment . using Google.Api.Gax ; using Google.Cloud.Dataplex.V1 ; using System ; public sealed partial class GeneratedDataScanServiceClientSnippets { /// <summary>Snippet for ListDataScanJobs</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void ListDataScanJobsRequestObject () { // Create client DataScanServiceClient dataScanServiceClient = DataScanServiceClient .

