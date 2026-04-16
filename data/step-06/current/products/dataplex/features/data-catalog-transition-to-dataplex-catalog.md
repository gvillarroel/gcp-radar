---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:48.463Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Data Catalog transition to Dataplex Catalog"
feature_slug: "data-catalog-transition-to-dataplex-catalog"
latest_feature_date: "2024-12-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/transition-to-dataplex-catalog"
  - "https://docs.cloud.google.com/dataplex/docs/develop-custom-connector"
  - "https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints"
  - "https://docs.cloud.google.com/dataplex/docs/catalog-overview"
keywords:
  - "catalog"
  - "transition"
  - "to"
  - "dataplex"
  - "provides"
  - "path"
  - "for"
  - "moving"
---

# Data Catalog transition to Dataplex Catalog

Product: Dataplex
Coverage: MEDIUM

## Step 02 Summary

Dataplex provides a transition path for moving Data Catalog content and usage to Dataplex Catalog.

## Extended Definition

Dataplex provides a transition path for moving Data Catalog content and usage to Dataplex Catalog.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/transition-to-dataplex-catalog](https://docs.cloud.google.com/dataplex/docs/transition-to-dataplex-catalog)
- [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector)
- [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints)
- [https://docs.cloud.google.com/dataplex/docs/catalog-overview](https://docs.cloud.google.com/dataplex/docs/catalog-overview)

## Supporting Pages

### Transition from Data Catalog to Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/transition-to-dataplex-catalog](https://docs.cloud.google.com/dataplex/docs/transition-to-dataplex-catalog)
- Source ID: `site-docs-root`
- Final score: 288
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following provides further detail on each phase of the transition process: Preparatory phase : perform necessary configuration tasks to make the Data Catalog content simultaneously available in Knowledge Catalog as read-only .
- Transition overview The Manage transition to Knowledge Catalog page in the Google Cloud console provides a single point of access for managing transition.
- Knowledge Catalog (formerly Dataplex Universal Catalog) replaces Data Catalog, providing more complex metadata management, advanced data governance features, more powerful data search, less complex access control, and a unified API to ease development.
- Before upgrade, to modify the business context of an entry (for example, overview , contacts ), you can use both the Data Catalog API and the Dataplex API.

### "Develop a custom connector for metadata import \_|\_ Knowledge Catalog \_\

- URL: [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector)
- Source ID: `site-docs-root-2`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Install PySpark: pip install pyspark Install requirements: pip install -r requirements.txt The following requirements are installed: google-cloud-dataplex==2.2.2 google-cloud-storage google-cloud-secret-manager Update the oracle connector.py file with code to read data from an Oracle data source and return DataFrames. """Reads Oracle using PySpark.""" from typing import Dict from pyspark.sql import SparkSession , DataFrame from src.constants import EntryType SPARK JAR PATH = "/opt/spark/jars/ojdbc11.jar" class OracleConnector : """Reads data from Oracle and returns Spark Dataframes.""" def init ( self , config : Dict [ str , str ]): PySpark entrypoint self . spark = SparkSession . builder . appName ( "OracleIngestor" ) \ . config ( "spark.jars" , SPARK JAR PATH ) \ . getOrCreate () self . config = config self . url = f "jdbc:oracle:thin:@ { config [ 'host port' ] } : { config [ 'database' ] } " def execute ( self , query : str ) - > DataFrame : """A generic method to execute any query.""" return self . spark . read . format ( "jdbc" ) \ . option ( "driver" , "oracle.jdbc.OracleDriver" ) \ . option ( "url" , self . url ) \ . option ( "query" , query ) \ . option ( "user" , self . config [ "user" ]) \ . option ( "password" , self . config [ "password" ]) \ . load () def get db schemas ( self ) - > DataFrame : """In Oracle, schemas are usernames.""" query = "SELECT username FROM dba users" return self . execute ( query ) def get columns ( self , schema name : str , object type : str ) - > str : """Gets a list of columns in tables or views in a batch.""" Every line here is a column that belongs to the table or to the view.
- You can use this connector to import metadata into Knowledge Catalog (formerly Dataplex Universal Catalog) through a managed connectivity pipeline .
- ArgumentParser () Dataplex arguments parser . add argument ( "--target project id" , type = str , required = True , help = "The name of the target Google Cloud project to import the metadata into." ) parser . add argument ( "--target location id" , type = str , required = True , help = "The target Google Cloud location where the metadata will be imported into." ) parser . add argument ( "--target entry group id" , type = str , required = True , help = "The ID of the entry group to import metadata into. " "The metadata will be imported into entry group with the following" "full resource name: projects/$ {target project id} /" "locations/$ {target location id} /entryGroups/$ {target entry group id} ." ) Oracle arguments parser . add argument ( "--host port" , type = str , required = True , help = "Oracle host and port number separated by the colon (:)." ) parser . add argument ( "--user" , type = str , required = True , help = "Oracle User." ) parser . add argument ( "--password-secret" , type = str , required = True , help = "Secret resource name in the Secret Manager for the Oracle password." ) parser . add argument ( "--database" , type = str , required = True , help = "Source Oracle database." ) Google Cloud Storage arguments It is assumed that the bucket is in the same region as the entry group parser . add argument ( "--output bucket" , type = str , required = True , help = "The Cloud Storage bucket to write the generated metadata import file." ) parser . add argument ( "--output folder" , type = str , required = True , help = "A folder in the Cloud Storage bucket, to write the generated metadata import files." ) return vars ( parser . parse known args ()[ 0 ]) In production environments, we recommend that you store the password in Secret Manager .
- The function calls the metadataJobs.create API method to run a metadata import job. - submit import job: call: http.post args: url: ${ "https://dataplex.googleapis.com/v1/projects/" + args.TARGET PROJECT ID + "/locations/" + args.CLOUD REGION + "/metadataJobs?metadata job id=" + WORKFLOW ID } auth: type: OAuth2 scopes: "https://www.googleapis.com/auth/cloud-platform" body: type: IMPORT import spec: source storage uri: ${ "gs://" + args.CLOUD STORAGE BUCKET ID + "/" + WORKFLOW ID + "/" } entry sync mode: FULL aspect sync mode: INCREMENTAL scope: entry groups: - ${ "projects/" + args.TARGET PROJECT ID + "/locations/" + args.CLOUD REGION + "/entryGroups/" +args.TARGET ENTRY GROUP ID } entry types: - "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-instance" - "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-database" - "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-schema" - "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-table" - "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-view" aspect types: - "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-instance" - "projects/dataplex-types/locations/global/aspectTypes/schema" - "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-database" - "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-schema" - "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-table" - "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-view" result: IMPORT JOB RESPONSE Provide the same entry types and aspect types that you included when you called the API method manually.

### "Manage Dataplex Universal Catalog resources using custom constraints \_\

- URL: [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource Field dataplex.googleapis.com/AspectType resource.authorization.alternateUsePermission resource.description resource.displayName resource.metadataTemplate.annotations.deprecated resource.metadataTemplate.annotations.description resource.metadataTemplate.annotations.displayName resource.metadataTemplate.annotations.displayOrder resource.metadataTemplate.annotations.stringType resource.metadataTemplate.annotations.stringValues resource.metadataTemplate.constraints.required resource.metadataTemplate.enumValues.deprecated resource.metadataTemplate.enumValues.index resource.metadataTemplate.enumValues.name resource.metadataTemplate.index resource.metadataTemplate.name resource.metadataTemplate.type resource.metadataTemplate.typeId resource.metadataTemplate.typeRef dataplex.googleapis.com/DataScan resource.data.entity resource.data.resource resource.dataDiscoverySpec.bigqueryPublishingConfig.connection resource.dataDiscoverySpec.bigqueryPublishingConfig.location resource.dataDiscoverySpec.bigqueryPublishingConfig.tableType resource.dataDiscoverySpec.storageConfig.csvOptions.delimiter resource.dataDiscoverySpec.storageConfig.csvOptions.encoding resource.dataDiscoverySpec.storageConfig.csvOptions.headerRows resource.dataDiscoverySpec.storageConfig.csvOptions.quote resource.dataDiscoverySpec.storageConfig.csvOptions.typeInferenceDisabled resource.dataDiscoverySpec.storageConfig.excludePatterns resource.dataDiscoverySpec.storageConfig.includePatterns resource.dataDiscoverySpec.storageConfig.jsonOptions.encoding resource.dataDiscoverySpec.storageConfig.jsonOptions.typeInferenceDisabled resource.dataProfileSpec.excludeFields.fieldNames resource.dataProfileSpec.includeFields.fieldNames resource.dataProfileSpec.postScanActions.bigqueryExport.resultsTable resource.dataProfileSpec.rowFilter resource.dataProfileSpec.samplingPercent resource.dataQualitySpec.postScanActions.bigqueryExport.resultsTable resource.dataQualitySpec.postScanActions.notificationReport.recipients.emails resource.dataQualitySpec.postScanActions.notificationReport.scoreThresholdTrigger.scoreThreshold resource.dataQualitySpec.rowFilter resource.dataQualitySpec.rules.column resource.dataQualitySpec.rules.description resource.dataQualitySpec.rules.dimension resource.dataQualitySpec.rules.ignoreNull resource.dataQualitySpec.rules.name resource.dataQualitySpec.rules.rangeExpectation.maxValue resource.dataQualitySpec.rules.rangeExpectation.minValue resource.dataQualitySpec.rules.rangeExpectation.strictMaxEnabled resource.dataQualitySpec.rules.rangeExpectation.strictMinEnabled resource.dataQualitySpec.rules.regexExpectation.regex resource.dataQualitySpec.rules.rowConditionExpectation.sqlExpression resource.dataQualitySpec.rules.setExpectation.values resource.dataQualitySpec.rules.sqlAssertion.sqlStatement resource.dataQualitySpec.rules.statisticRangeExpectation.maxValue resource.dataQualitySpec.rules.statisticRangeExpectation.minValue resource.dataQualitySpec.rules.statisticRangeExpectation.statistic resource.dataQualitySpec.rules.statisticRangeExpectation.strictMaxEnabled resource.dataQualitySpec.rules.statisticRangeExpectation.strictMinEnabled resource.dataQualitySpec.rules.suspended resource.dataQualitySpec.rules.tableConditionExpectation.sqlExpression resource.dataQualitySpec.rules.threshold resource.dataQualitySpec.samplingPercent resource.description resource.displayName resource.executionSpec.field resource.executionSpec.trigger.schedule.cron dataplex.googleapis.com/EntryGroup resource.description resource.displayName dataplex.googleapis.com/EntryType resource.authorization.alternateUsePermission resource.description resource.displayName resource.platform resource.requiredAspects.type resource.system resource.typeAliases dataplex.googleapis.com/MetadataJob resource.exportSpec.outputPath resource.exportSpec.scope.aspectTypes resource.exportSpec.scope.entryGroups resource.exportSpec.scope.entryTypes resource.exportSpec.scope.organizationLevel resource.exportSpec.scope.projects resource.importSpec.aspectSyncMode resource.importSpec.entrySyncMode resource.importSpec.logLevel resource.importSpec.scope.aspectTypes resource.importSpec.scope.entryGroups resource.importSpec.scope.entryTypes resource.importSpec.sourceCreateTime resource.importSpec.sourceStorageUri resource.type What's next Learn more about Organization Policy Service .
- Description Constraint syntax Require a specific aspect type for entry types name : organizations/ ORGANIZATION ID /customConstraints/custom.requireAspectTypeForEntryType resourceTypes : - dataplex.googleapis.com/EntryType methodTypes : - CREATE - UPDATE condition : "resource.requiredAspects.exists(value, value.type ==" projects/ PROJECT ID /locations/ LOCATION /aspectTypes/exampleAspectType") actionType : DENY displayName : All entry types require aspect type exampleAspectType description : All entry types require the aspect type exampleAspectType Require a minimum sampling rate for data profiling scans name : organizations/ ORGANIZATION ID /customConstraints/custom.minimumSamplingDataScans resourceTypes : - dataplex.googleapis.com/DataScan methodTypes : - CREATE - UPDATE condition : "resource.dataProfileSpec.samplingPercent > = 20.0" actionType : ALLOW displayName : Require minimum sampling for data profiling scans description : All data profiling scans need at least 20% sampling rate Dataplex Universal Catalog supported resources The following table lists the Dataplex Universal Catalog resources that you can reference in custom constraints.
- The output is the following: Operation denied by custom org policy on resource 'projects/ PROJECT ID /locations/ LOCATION /entryGroups/org-policy-test': ["customConstraints/custom.denyDataplexEntryGroup"] Example custom organization policies for common use cases This table provides syntax examples for some common custom constraints.
- Before you begin, you must know the following: Your organization ID A project ID Create the constraint Save the following file as constraint-valid-entry-groups.yaml : name : organizations/ ORGANIZATION ID /customConstraints/custom.denyDataplexEntryGroup resourceTypes : - dataplex.googleapis.com/EntryGroup methodTypes : - CREATE condition : "resource.description.contains('invalid name')" actionType : DENY displayName : Validate entry group description description : All new entry groups have valid descriptions.

### About metadata management in Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/catalog-overview](https://docs.cloud.google.com/dataplex/docs/catalog-overview)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data Catalog API method Dataplex API method projects.locations.entryGroups.entries.tags.create (REST) CreateTag (RPC) projects.locations.entryGroups.entries.patch (REST) UpdateEntry (RPC) projects.locations.entryGroups.entries.tags.list (REST) ListTags (RPC) projects.locations.entryGroups.entries.get (REST) GetEntry (RPC) Note: To limit the response to only the required aspects, use the views , aspect types , and paths parameters. projects.locations.entryGroups.entries.tags.patch (REST) UpdateTag (RPC) projects.locations.entryGroups.entries.patch (REST) UpdateEntry (RPC) projects.locations.entryGroups.entries.tags.delete (REST) DeleteTag (RPC) projects.locations.entryGroups.entries.patch (REST) UpdateEntry (RPC) Policy tags and taxonomies These APIs are not changing and therefore don't need to be migrated.
- Search is performed over the following: All Google Cloud sources described in Entries and entry groups Custom entries that are created in Data Catalog Tags that are created in Data Catalog Data lineage Data lineage retrieves entry details for asset nodes by using the Dataplex API.
- Note that, to search for entries, you need at least one of the following IAM roles on the project that is used for search: Dataplex Catalog Admin, Dataplex Catalog Editor, or Dataplex Catalog Viewer.
- For more information about how to transition your standalone Data Catalog content and usage to Knowledge Catalog, see Transition from Data Catalog to Knowledge Catalog .

