---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:48.461Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Automatic discovery"
feature_slug: "automatic-discovery"
latest_feature_date: "2025-04-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints"
  - "https://docs.cloud.google.com/dataplex/docs/use-data-profiling"
  - "https://docs.cloud.google.com/dataplex/docs/develop-custom-connector"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1"
keywords:
  - "automatic"
  - "discovery"
  - "dataplex"
  - "can"
  - "scan"
  - "storage"
  - "to"
  - "extract"
---

# Automatic discovery

Product: Dataplex
Coverage: MEDIUM

## Step 02 Summary

Dataplex can scan Cloud Storage data to extract and catalog metadata and create BigLake, external, or object tables; Dataplex can scan Cloud Storage data to extract and catalog metadata and create BigLake, external, or object tables.

## Extended Definition

Dataplex can scan Cloud Storage data to extract and catalog metadata and create BigLake, external, or object tables; Dataplex can scan Cloud Storage data to extract and catalog metadata and create BigLake, external, or object tables.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints)
- [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling)
- [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)

## Supporting Pages

### "Manage Dataplex Universal Catalog resources using custom constraints \_\

- URL: [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource Field dataplex.googleapis.com/AspectType resource.authorization.alternateUsePermission resource.description resource.displayName resource.metadataTemplate.annotations.deprecated resource.metadataTemplate.annotations.description resource.metadataTemplate.annotations.displayName resource.metadataTemplate.annotations.displayOrder resource.metadataTemplate.annotations.stringType resource.metadataTemplate.annotations.stringValues resource.metadataTemplate.constraints.required resource.metadataTemplate.enumValues.deprecated resource.metadataTemplate.enumValues.index resource.metadataTemplate.enumValues.name resource.metadataTemplate.index resource.metadataTemplate.name resource.metadataTemplate.type resource.metadataTemplate.typeId resource.metadataTemplate.typeRef dataplex.googleapis.com/DataScan resource.data.entity resource.data.resource resource.dataDiscoverySpec.bigqueryPublishingConfig.connection resource.dataDiscoverySpec.bigqueryPublishingConfig.location resource.dataDiscoverySpec.bigqueryPublishingConfig.tableType resource.dataDiscoverySpec.storageConfig.csvOptions.delimiter resource.dataDiscoverySpec.storageConfig.csvOptions.encoding resource.dataDiscoverySpec.storageConfig.csvOptions.headerRows resource.dataDiscoverySpec.storageConfig.csvOptions.quote resource.dataDiscoverySpec.storageConfig.csvOptions.typeInferenceDisabled resource.dataDiscoverySpec.storageConfig.excludePatterns resource.dataDiscoverySpec.storageConfig.includePatterns resource.dataDiscoverySpec.storageConfig.jsonOptions.encoding resource.dataDiscoverySpec.storageConfig.jsonOptions.typeInferenceDisabled resource.dataProfileSpec.excludeFields.fieldNames resource.dataProfileSpec.includeFields.fieldNames resource.dataProfileSpec.postScanActions.bigqueryExport.resultsTable resource.dataProfileSpec.rowFilter resource.dataProfileSpec.samplingPercent resource.dataQualitySpec.postScanActions.bigqueryExport.resultsTable resource.dataQualitySpec.postScanActions.notificationReport.recipients.emails resource.dataQualitySpec.postScanActions.notificationReport.scoreThresholdTrigger.scoreThreshold resource.dataQualitySpec.rowFilter resource.dataQualitySpec.rules.column resource.dataQualitySpec.rules.description resource.dataQualitySpec.rules.dimension resource.dataQualitySpec.rules.ignoreNull resource.dataQualitySpec.rules.name resource.dataQualitySpec.rules.rangeExpectation.maxValue resource.dataQualitySpec.rules.rangeExpectation.minValue resource.dataQualitySpec.rules.rangeExpectation.strictMaxEnabled resource.dataQualitySpec.rules.rangeExpectation.strictMinEnabled resource.dataQualitySpec.rules.regexExpectation.regex resource.dataQualitySpec.rules.rowConditionExpectation.sqlExpression resource.dataQualitySpec.rules.setExpectation.values resource.dataQualitySpec.rules.sqlAssertion.sqlStatement resource.dataQualitySpec.rules.statisticRangeExpectation.maxValue resource.dataQualitySpec.rules.statisticRangeExpectation.minValue resource.dataQualitySpec.rules.statisticRangeExpectation.statistic resource.dataQualitySpec.rules.statisticRangeExpectation.strictMaxEnabled resource.dataQualitySpec.rules.statisticRangeExpectation.strictMinEnabled resource.dataQualitySpec.rules.suspended resource.dataQualitySpec.rules.tableConditionExpectation.sqlExpression resource.dataQualitySpec.rules.threshold resource.dataQualitySpec.samplingPercent resource.description resource.displayName resource.executionSpec.field resource.executionSpec.trigger.schedule.cron dataplex.googleapis.com/EntryGroup resource.description resource.displayName dataplex.googleapis.com/EntryType resource.authorization.alternateUsePermission resource.description resource.displayName resource.platform resource.requiredAspects.type resource.system resource.typeAliases dataplex.googleapis.com/MetadataJob resource.exportSpec.outputPath resource.exportSpec.scope.aspectTypes resource.exportSpec.scope.entryGroups resource.exportSpec.scope.entryTypes resource.exportSpec.scope.organizationLevel resource.exportSpec.scope.projects resource.importSpec.aspectSyncMode resource.importSpec.entrySyncMode resource.importSpec.logLevel resource.importSpec.scope.aspectTypes resource.importSpec.scope.entryGroups resource.importSpec.scope.entryTypes resource.importSpec.sourceCreateTime resource.importSpec.sourceStorageUri resource.type What's next Learn more about Organization Policy Service .
- Description Constraint syntax Require a specific aspect type for entry types name : organizations/ ORGANIZATION ID /customConstraints/custom.requireAspectTypeForEntryType resourceTypes : - dataplex.googleapis.com/EntryType methodTypes : - CREATE - UPDATE condition : "resource.requiredAspects.exists(value, value.type ==" projects/ PROJECT ID /locations/ LOCATION /aspectTypes/exampleAspectType") actionType : DENY displayName : All entry types require aspect type exampleAspectType description : All entry types require the aspect type exampleAspectType Require a minimum sampling rate for data profiling scans name : organizations/ ORGANIZATION ID /customConstraints/custom.minimumSamplingDataScans resourceTypes : - dataplex.googleapis.com/DataScan methodTypes : - CREATE - UPDATE condition : "resource.dataProfileSpec.samplingPercent > = 20.0" actionType : ALLOW displayName : Require minimum sampling for data profiling scans description : All data profiling scans need at least 20% sampling rate Dataplex Universal Catalog supported resources The following table lists the Dataplex Universal Catalog resources that you can reference in custom constraints.
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: dataplex.googleapis.com/AspectType dataplex.googleapis.com/EntryType dataplex.googleapis.com/EntryGroup dataplex.googleapis.com/DataScan dataplex.googleapis.com/MetadataJob To learn more about Organization Policy, see Custom organization policies .
- A custom constraint can only contain letters (including upper and lowercase) or numbers, for example, custom.denyDataplexEntryGroup .

### "Create and use data profile scans \_|\_ Knowledge Catalog \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . using Google.Cloud.Dataplex.V1 ; using Google.LongRunning ; using Google.Protobuf.WellKnownTypes ; public sealed partial class GeneratedDataScanServiceClientSnippets { /// <summary>Snippet for UpdateDataScan</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void UpdateDataScanRequestObject () { // Create client DataScanServiceClient dataScanServiceClient = DataScanServiceClient .
- For more information, see Set up authentication for a local development environment . using Google.Api.Gax.ResourceNames ; using Google.Cloud.Dataplex.V1 ; using Google.LongRunning ; public sealed partial class GeneratedDataScanServiceClientSnippets { /// <summary>Snippet for CreateDataScan</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void CreateDataScanRequestObject () { // Create client DataScanServiceClient dataScanServiceClient = DataScanServiceClient .
- For more information, see Set up authentication for a local development environment . using Google.Api.Gax ; using Google.Cloud.Dataplex.V1 ; using System ; public sealed partial class GeneratedDataScanServiceClientSnippets { /// <summary>Snippet for ListDataScanJobs</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void ListDataScanJobsRequestObject () { // Create client DataScanServiceClient dataScanServiceClient = DataScanServiceClient .
- For more information, see Set up authentication for a local development environment . using Google.Cloud.Dataplex.V1 ; public sealed partial class GeneratedDataScanServiceClientSnippets { /// <summary>Snippet for RunDataScan</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void RunDataScanRequestObject () { // Create client DataScanServiceClient dataScanServiceClient = DataScanServiceClient .

### "Develop a custom connector for metadata import \_|\_ Knowledge Catalog \_\

- URL: [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector)
- Source ID: `site-docs-root-2`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ArgumentParser () Dataplex arguments parser . add argument ( "--target project id" , type = str , required = True , help = "The name of the target Google Cloud project to import the metadata into." ) parser . add argument ( "--target location id" , type = str , required = True , help = "The target Google Cloud location where the metadata will be imported into." ) parser . add argument ( "--target entry group id" , type = str , required = True , help = "The ID of the entry group to import metadata into. " "The metadata will be imported into entry group with the following" "full resource name: projects/$ {target project id} /" "locations/$ {target location id} /entryGroups/$ {target entry group id} ." ) Oracle arguments parser . add argument ( "--host port" , type = str , required = True , help = "Oracle host and port number separated by the colon (:)." ) parser . add argument ( "--user" , type = str , required = True , help = "Oracle User." ) parser . add argument ( "--password-secret" , type = str , required = True , help = "Secret resource name in the Secret Manager for the Oracle password." ) parser . add argument ( "--database" , type = str , required = True , help = "Source Oracle database." ) Google Cloud Storage arguments It is assumed that the bucket is in the same region as the entry group parser . add argument ( "--output bucket" , type = str , required = True , help = "The Cloud Storage bucket to write the generated metadata import file." ) parser . add argument ( "--output folder" , type = str , required = True , help = "A folder in the Cloud Storage bucket, to write the generated metadata import files." ) return vars ( parser . parse known args ()[ 0 ]) In production environments, we recommend that you store the password in Secret Manager .
- Install PySpark: pip install pyspark Install requirements: pip install -r requirements.txt The following requirements are installed: google-cloud-dataplex==2.2.2 google-cloud-storage google-cloud-secret-manager Update the oracle connector.py file with code to read data from an Oracle data source and return DataFrames. """Reads Oracle using PySpark.""" from typing import Dict from pyspark.sql import SparkSession , DataFrame from src.constants import EntryType SPARK JAR PATH = "/opt/spark/jars/ojdbc11.jar" class OracleConnector : """Reads data from Oracle and returns Spark Dataframes.""" def init ( self , config : Dict [ str , str ]): PySpark entrypoint self . spark = SparkSession . builder . appName ( "OracleIngestor" ) \ . config ( "spark.jars" , SPARK JAR PATH ) \ . getOrCreate () self . config = config self . url = f "jdbc:oracle:thin:@ { config [ 'host port' ] } : { config [ 'database' ] } " def execute ( self , query : str ) - > DataFrame : """A generic method to execute any query.""" return self . spark . read . format ( "jdbc" ) \ . option ( "driver" , "oracle.jdbc.OracleDriver" ) \ . option ( "url" , self . url ) \ . option ( "query" , query ) \ . option ( "user" , self . config [ "user" ]) \ . option ( "password" , self . config [ "password" ]) \ . load () def get db schemas ( self ) - > DataFrame : """In Oracle, schemas are usernames.""" query = "SELECT username FROM dba users" return self . execute ( query ) def get columns ( self , schema name : str , object type : str ) - > str : """Gets a list of columns in tables or views in a batch.""" Every line here is a column that belongs to the table or to the view.
- The function calls the metadataJobs.create API method to run a metadata import job. - submit import job: call: http.post args: url: ${ "https://dataplex.googleapis.com/v1/projects/" + args.TARGET PROJECT ID + "/locations/" + args.CLOUD REGION + "/metadataJobs?metadata job id=" + WORKFLOW ID } auth: type: OAuth2 scopes: "https://www.googleapis.com/auth/cloud-platform" body: type: IMPORT import spec: source storage uri: ${ "gs://" + args.CLOUD STORAGE BUCKET ID + "/" + WORKFLOW ID + "/" } entry sync mode: FULL aspect sync mode: INCREMENTAL scope: entry groups: - ${ "projects/" + args.TARGET PROJECT ID + "/locations/" + args.CLOUD REGION + "/entryGroups/" +args.TARGET ENTRY GROUP ID } entry types: - "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-instance" - "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-database" - "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-schema" - "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-table" - "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-view" aspect types: - "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-instance" - "projects/dataplex-types/locations/global/aspectTypes/schema" - "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-database" - "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-schema" - "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-table" - "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-view" result: IMPORT JOB RESPONSE Provide the same entry types and aspect types that you included when you called the API method manually.
- PROJECT ID = PROJECT LOCATION ID = LOCATION DATAPLEX API = dataplex.googleapis.com/v1/projects/ $PROJECT ID /locations/ $LOCATION ID alias gcurl = 'curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"' Call the API method, passing the entry types and aspect types that you want to import. gcurl https:// ${ DATAPLEX API } /metadataJobs?metadata job id = " JOB ID " -d " $( cat <<EOF { "type" : "IMPORT" , "import spec" : { "source storage uri" : "gs:// BUCKET / FOLDER /" , "entry sync mode" : "FULL" , "aspect sync mode" : "INCREMENTAL" , "scope" : { "entry groups" : [ "projects/ PROJECT /locations/ LOCATION /entryGroups/ ENTRY GROUP ID " ] , "entry types" : [ "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-instance" , "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-database" , "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-schema" , "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-table" , "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-view" ] , "aspect types" : [ "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-instance" , "projects/dataplex-types/locations/global/aspectTypes/schema" , "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-database" , "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-schema" , "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-table" , "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-view" ] , } , } , } EOF ) " The schema aspect type is a global aspect type that is defined by Knowledge Catalog.

### "Package com.google.cloud.dataplex.v1 (1.86.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
- Source ID: `site-java-reference`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- Selected Fields The specification for fields to include or exclude in data profile scan. com. google. cloud. dataplex. v1.
- Builder The specification for fields to include or exclude in data profile scan. com. google. cloud. dataplex. v1.
- Scan Statistics Describes result statistics of a data scan discovery job. com. google. cloud. dataplex. v1.
- DataScanService manages DataScan resources which can be configured to run com. google. cloud. dataplex. v1.

