---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:42.604Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Data reference parameter for custom SQL rules"
feature_slug: "data-reference-parameter-for-custom-sql-rules"
latest_feature_date: "2024-04-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints"
  - "https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1"
keywords:
  - "reference"
  - "parameter"
  - "for"
  - "custom"
  - "sql"
  - "rules"
  - "dataplex"
  - "automatic"
---

# Data reference parameter for custom SQL rules

Product: Dataplex
Coverage: LOW

## Step 02 Summary

Dataplex automatic data quality custom SQL rules can use a data reference parameter to refer to the source table and its precondition filters.

## Extended Definition

Dataplex automatic data quality custom SQL rules can use a data reference parameter to refer to the source table and its precondition filters.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints)
- [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)

## Supporting Pages

### "Manage Dataplex Universal Catalog resources using custom constraints \_\

- URL: [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource Field dataplex.googleapis.com/AspectType resource.authorization.alternateUsePermission resource.description resource.displayName resource.metadataTemplate.annotations.deprecated resource.metadataTemplate.annotations.description resource.metadataTemplate.annotations.displayName resource.metadataTemplate.annotations.displayOrder resource.metadataTemplate.annotations.stringType resource.metadataTemplate.annotations.stringValues resource.metadataTemplate.constraints.required resource.metadataTemplate.enumValues.deprecated resource.metadataTemplate.enumValues.index resource.metadataTemplate.enumValues.name resource.metadataTemplate.index resource.metadataTemplate.name resource.metadataTemplate.type resource.metadataTemplate.typeId resource.metadataTemplate.typeRef dataplex.googleapis.com/DataScan resource.data.entity resource.data.resource resource.dataDiscoverySpec.bigqueryPublishingConfig.connection resource.dataDiscoverySpec.bigqueryPublishingConfig.location resource.dataDiscoverySpec.bigqueryPublishingConfig.tableType resource.dataDiscoverySpec.storageConfig.csvOptions.delimiter resource.dataDiscoverySpec.storageConfig.csvOptions.encoding resource.dataDiscoverySpec.storageConfig.csvOptions.headerRows resource.dataDiscoverySpec.storageConfig.csvOptions.quote resource.dataDiscoverySpec.storageConfig.csvOptions.typeInferenceDisabled resource.dataDiscoverySpec.storageConfig.excludePatterns resource.dataDiscoverySpec.storageConfig.includePatterns resource.dataDiscoverySpec.storageConfig.jsonOptions.encoding resource.dataDiscoverySpec.storageConfig.jsonOptions.typeInferenceDisabled resource.dataProfileSpec.excludeFields.fieldNames resource.dataProfileSpec.includeFields.fieldNames resource.dataProfileSpec.postScanActions.bigqueryExport.resultsTable resource.dataProfileSpec.rowFilter resource.dataProfileSpec.samplingPercent resource.dataQualitySpec.postScanActions.bigqueryExport.resultsTable resource.dataQualitySpec.postScanActions.notificationReport.recipients.emails resource.dataQualitySpec.postScanActions.notificationReport.scoreThresholdTrigger.scoreThreshold resource.dataQualitySpec.rowFilter resource.dataQualitySpec.rules.column resource.dataQualitySpec.rules.description resource.dataQualitySpec.rules.dimension resource.dataQualitySpec.rules.ignoreNull resource.dataQualitySpec.rules.name resource.dataQualitySpec.rules.rangeExpectation.maxValue resource.dataQualitySpec.rules.rangeExpectation.minValue resource.dataQualitySpec.rules.rangeExpectation.strictMaxEnabled resource.dataQualitySpec.rules.rangeExpectation.strictMinEnabled resource.dataQualitySpec.rules.regexExpectation.regex resource.dataQualitySpec.rules.rowConditionExpectation.sqlExpression resource.dataQualitySpec.rules.setExpectation.values resource.dataQualitySpec.rules.sqlAssertion.sqlStatement resource.dataQualitySpec.rules.statisticRangeExpectation.maxValue resource.dataQualitySpec.rules.statisticRangeExpectation.minValue resource.dataQualitySpec.rules.statisticRangeExpectation.statistic resource.dataQualitySpec.rules.statisticRangeExpectation.strictMaxEnabled resource.dataQualitySpec.rules.statisticRangeExpectation.strictMinEnabled resource.dataQualitySpec.rules.suspended resource.dataQualitySpec.rules.tableConditionExpectation.sqlExpression resource.dataQualitySpec.rules.threshold resource.dataQualitySpec.samplingPercent resource.description resource.displayName resource.executionSpec.field resource.executionSpec.trigger.schedule.cron dataplex.googleapis.com/EntryGroup resource.description resource.displayName dataplex.googleapis.com/EntryType resource.authorization.alternateUsePermission resource.description resource.displayName resource.platform resource.requiredAspects.type resource.system resource.typeAliases dataplex.googleapis.com/MetadataJob resource.exportSpec.outputPath resource.exportSpec.scope.aspectTypes resource.exportSpec.scope.entryGroups resource.exportSpec.scope.entryTypes resource.exportSpec.scope.organizationLevel resource.exportSpec.scope.projects resource.importSpec.aspectSyncMode resource.importSpec.entrySyncMode resource.importSpec.logLevel resource.importSpec.scope.aspectTypes resource.importSpec.scope.entryGroups resource.importSpec.scope.entryTypes resource.importSpec.sourceCreateTime resource.importSpec.sourceStorageUri resource.type What's next Learn more about Organization Policy Service .
- Description Constraint syntax Require a specific aspect type for entry types name : organizations/ ORGANIZATION ID /customConstraints/custom.requireAspectTypeForEntryType resourceTypes : - dataplex.googleapis.com/EntryType methodTypes : - CREATE - UPDATE condition : "resource.requiredAspects.exists(value, value.type ==" projects/ PROJECT ID /locations/ LOCATION /aspectTypes/exampleAspectType") actionType : DENY displayName : All entry types require aspect type exampleAspectType description : All entry types require the aspect type exampleAspectType Require a minimum sampling rate for data profiling scans name : organizations/ ORGANIZATION ID /customConstraints/custom.minimumSamplingDataScans resourceTypes : - dataplex.googleapis.com/DataScan methodTypes : - CREATE - UPDATE condition : "resource.dataProfileSpec.samplingPercent > = 20.0" actionType : ALLOW displayName : Require minimum sampling for data profiling scans description : All data profiling scans need at least 20% sampling rate Dataplex Universal Catalog supported resources The following table lists the Dataplex Universal Catalog resources that you can reference in custom constraints.
- Create the policy Save the following file as policy-deny-entry-group.yaml : name : projects/ PROJECT ID /policies/custom.denyDataplexEntryGroup spec : rules : - enforce : true Replace PROJECT ID with your project ID.
- Before you begin, you must know the following: Your organization ID A project ID Create the constraint Save the following file as constraint-valid-entry-groups.yaml : name : organizations/ ORGANIZATION ID /customConstraints/custom.denyDataplexEntryGroup resourceTypes : - dataplex.googleapis.com/EntryGroup methodTypes : - CREATE condition : "resource.description.contains('invalid name')" actionType : DENY displayName : Validate entry group description description : All new entry groups have valid descriptions.

### Use auto data quality \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Export table schema To export the data quality scan results to an existing BigQuery table, make sure that it is compatible with the following table schema: Column name Column data type Sub field name (if applicable) Sub field data type Mode Example data quality scan struct/record resource name string nullable //dataplex.googleapis.com/projects/test-project/locations/europe-west2/datascans/test-datascan project id string nullable dataplex-back-end-dev-project location string nullable us-central1 data scan id string nullable test-datascan display name string nullable datascan-display-name data source struct/record resource name string nullable Entity case: //dataplex.googleapis.com/projects/dataplex-back-end-dev-project/locations/europe-west2/lakes/a0-datascan-test-lake/zones/a0-datascan-test-zone/entities/table1 Table case: //bigquery.googleapis.com/projects/test-project/datasets/test-dataset/tables/test-table dataplex entity project id string nullable dataplex-back-end-dev-project dataplex entity project number integer nullable 123456789 dataplex lake id string nullable (Valid only if source is entity) test-lake dataplex zone id string nullable (Valid only if source is entity) test-zone dataplex entity id string nullable (Valid only if source is entity) test-entity table project id string nullable test-project table project number integer nullable 987654321 dataset id string nullable (Valid only if source is table) test-dataset table id string nullable (Valid only if source is table) test-table data quality job id string nullable caeba234-cfde-4fca-9e5b-fe02a9812e38 data quality job configuration json trigger string nullable ondemand / schedule incremental boolean nullable true / false sampling percent float nullable (0-100) 20.0 (indicates 20%) row filter string nullable col1 >= 0 AND col2 incremental column string nullable column name job labels json nullable {"key1":value1} job start time timestamp nullable 2023-01-01 00:00:00 UTC job end time timestamp nullable 2023-01-01 00:00:00 UTC job quality result struct/record passed boolean nullable true / false score float nullable 90.8 incremental start string nullable 2023-01-01T00:00:00 incremental end string nullable 2024-01-01T00:00:00 job dimension result json nullable {"ACCURACY":{"passed":true,"score":100},"CONSISTENCY":{"passed":false,"score":60}} job rows scanned integer nullable 7500 rule name string nullable test-rule rule description string nullable Test rule description rule type string nullable Range Check rule evaluation type string nullable Per row rule column string nullable Rule only attached to a certain column rule dimension string nullable UNIQUENESS rule threshold percent float nullable (0.0-100.0) Rule-threshold-pct in API 100 rule parameters json nullable {min: 24, max:5345} rule passed boolean nullable true rule rows evaluated integer nullable 7400 rule rows passed integer nullable 3 rule rows null integer nullable 4 rule failed records query string nullable "SELECT FROM test-project.test-dataset.test-table WHERE (NOT((cTime >= '15:31:38.776361' and cTime created on timestamp nullable 2023-01-01 00:00:00 UTC last updated timestamp nullable 2023-01-01 00:00:00 UTC rule assertion row count integer nullable 10 debug queries struct/record description string nullable Test debug query description sql statement string nullable SELECT MIN(col1) AS min col1, AVG(col1) FROM ${data()} debug query results struct/record repeated [{"name": "min col1", "type": "INTEGER", "value": "5"}, {"type": "FLOAT", "value": "7"}] ↳ name string nullable The name of query result column, like min col1 ↳ type string nullable The type of query result column, like INTEGER ↳ value string nullable The value of query result column, like 5 Note: Column rule assertion row count is only applicable for SQL Assertion rule .
- Set alerts on data quality failures for a BigQuery table that isn't organized in a Knowledge Catalog lake: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.dataSource="//bigquery.googleapis.com/projects/test-project/datasets/testdataset/table/chicago taxi trips" AND labels."dataplex.googleapis.com/data scan state"="SUCCEEDED" AND resource.labels.resource container="projects/112233445566" AND NOT jsonPayload.dataQuality.passed=true Set alerts on data quality failures for a BigQuery table that's organized in a Knowledge Catalog lake: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.dataSource="projects/test-project/datasets/testdataset/table/chicago taxi trips" AND labels."dataplex.googleapis.com/data scan state"="SUCCEEDED" AND resource.labels.resource container="projects/112233445566" AND NOT jsonPayload.dataQuality.passed=true Sample queries to set per rule alerts A sample query to set alerts on all failing data quality rules with the specified custom rule name for a data quality scan: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.ruleName="custom-name" AND jsonPayload.result="FAILED" A sample query to set alerts on all failing data quality rules of a specific evaluation type for a data quality scan: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.evalutionType="PER ROW" AND jsonPayload.result="FAILED" A sample query to set alerts on all failing data quality rules for a column in the table used for a data quality scan: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.column="CInteger" AND jsonPayload.result="FAILED" Troubleshoot a data quality failure For each job with row-level rules that fail, Knowledge Catalog provides a query to get the failed records.
- For more information, see Set up authentication for a local development environment . using Google.Cloud.Dataplex.V1 ; using Google.LongRunning ; using Google.Protobuf.WellKnownTypes ; public sealed partial class GeneratedDataScanServiceClientSnippets { /// <summary>Snippet for UpdateDataScan</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void UpdateDataScanRequestObject () { // Create client DataScanServiceClient dataScanServiceClient = DataScanServiceClient .
- For more information, see Set up authentication for a local development environment . using Google.Cloud.Dataplex.V1 ; using Google.LongRunning ; using Google.Protobuf.WellKnownTypes ; public sealed partial class GeneratedDataScanServiceClientSnippets { /// <summary>Snippet for DeleteDataScan</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void DeleteDataScanRequestObject () { // Create client DataScanServiceClient dataScanServiceClient = DataScanServiceClient .

### "Package com.google.cloud.dataplex.v1 (1.86.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
- Source ID: `site-java-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Encryption Config A Resource designed to manage encryption configurations for customers to support Customer Managed Encryption Keys (CMEK). com. google. cloud. dataplex. v1.
- Builder A Resource designed to manage encryption configurations for customers to support Customer Managed Encryption Keys (CMEK). com. google. cloud. dataplex. v1.
- Generate Data Quality Rules Request Request details for generating data quality rule recommendations. com. google. cloud. dataplex. v1.
- Content Service Grpc ContentService manages Notebook and SQL Scripts for Dataplex Universal Catalog. com. google. cloud. dataplex. v1.

