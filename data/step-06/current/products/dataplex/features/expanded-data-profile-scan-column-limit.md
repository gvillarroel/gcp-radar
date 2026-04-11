---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:42.592Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Expanded data profile scan column limit"
feature_slug: "expanded-data-profile-scan-column-limit"
latest_feature_date: "2025-05-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/use-data-profiling"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1"
  - "https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints"
keywords:
  - "expanded"
  - "profile"
  - "scan"
  - "column"
  - "limit"
  - "dataplex"
  - "scans"
  - "can"
---

# Expanded data profile scan column limit

Product: Dataplex
Coverage: LOW

## Step 02 Summary

Dataplex data profile scans can profile up to 10,000 columns in a BigQuery table.

## Extended Definition

Dataplex data profile scans can profile up to 10,000 columns in a BigQuery table.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
- [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints)

## Supporting Pages

### "Create and use data profile scans \_|\_ Knowledge Catalog \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Export table schema If you want to export the data profile scan results to an existing BigQuery table, make sure that it is compatible with the following table schema: Column name Column data type Sub field name (if applicable) Sub field data type Mode Example data profile scan struct/record resource name string nullable //dataplex.googleapis.com/projects/test-project/locations/europe-west2/datascans/test-datascan project id string nullable test-project location string nullable us-central1 data scan id string nullable test-datascan data source struct/record resource name string nullable Entity case: //dataplex.googleapis.com/projects/test-project/locations/europe-west2/lakes/test-lake/zones/test-zone/entities/test-entity Table case: //bigquery.googleapis.com/projects/test-project/datasets/test-dataset/tables/test-table dataplex entity project id string nullable test-project dataplex entity project number integer nullable 123456789012 dataplex lake id string nullable (Valid only if source is entity) test-lake dataplex zone id string nullable (Valid only if source is entity) test-zone dataplex entity id string nullable (Valid only if source is entity) test-entity table project id string nullable dataplex-table table project number int64 nullable 345678901234 dataset id string nullable (Valid only if source is table) test-dataset table id string nullable (Valid only if source is table) test-table data profile job id string nullable caeba234-cfde-4fca-9e5b-fe02a9812e38 data profile job configuration json trigger string nullable ondemand / schedule incremental boolean nullable true / false sampling percent float nullable (0-100) 20.0 (indicates 20%) row filter string nullable col1 >= 0 AND col2 column filter json nullable {"include fields":["col1","col2"], "exclude fields":["col3"]} job labels json nullable {"key1":value1} job start time timestamp nullable 2023-01-01 00:00:00 UTC job end time timestamp nullable 2023-01-01 00:00:00 UTC job rows scanned integer nullable 7500 column name string nullable column-1 column type string nullable string column mode string nullable repeated percent null float nullable (0.0-100.0) 20.0 (indicates 20%) percent unique float nullable (0.0-100.0) 92.5 min string length integer nullable (Valid only if column type is string) 10 max string length integer nullable (Valid only if column type is string) 4 average string length float nullable (Valid only if column type is string) 7.2 min value float nullable (Valid only if column type is numeric - integer/float) max value float nullable (Valid only if column type is numeric - integer/float) average value float nullable (Valid only if column type is numeric - integer/float) standard deviation float nullable (Valid only if column type is numeric - integer/float) quartile lower integer nullable (Valid only if column type is numeric - integer/float) quartile median integer nullable (Valid only if column type is numeric - integer/float) quartile upper integer nullable (Valid only if column type is numeric - integer/float) top n struct/record - repeated value string nullable "4009" count integer nullable 20 percent float nullable 10 (indicates 10%) Export table setup When you export to BigQueryExport tables, follow these guidelines: For the field resultsTable , use the format: //bigquery.googleapis.com/projects/{project-id}/datasets/{dataset-id}/tables/{table-id} .
- It lists the scanned table's columns and statistics about the columns that were found in the scan. gcloud To view the most recent successful data profile scan, use the gcloud dataplex datascans describe command : gcloud dataplex datascans describe DATASCAN \ --location= LOCATION \ --view=FULL Replace the following variables: DATASCAN : The name of the data profile scan to view the most recent job for.
- To view detailed information about a job, click any of the jobs in the Job ID column. gcloud To view historical data profile scan jobs, use the gcloud dataplex datascans jobs list command : gcloud dataplex datascans jobs list \ --location= LOCATION \ --datascan= DATASCAN Replace the following variables: LOCATION : The Google Cloud region in which the data profile scan was created.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create and manage data profile scans: Create, run, update, and delete data profile scans: dataplex.datascans.create on project dataplex.datascans.update on data scan dataplex.datascans.delete on data scan dataplex.datascans.run on data scan dataplex.datascans.get on data scan dataplex.datascans.list on project dataplex.dataScanJobs.get on data scan job dataplex.dataScanJobs.list on data scan View data profile scan results, jobs, and history: dataplex.datascans.getData on data scan dataplex.datascans.list on project dataplex.dataScanJobs.get on data scan job dataplex.dataScanJobs.list on data scan Publish data profile scan results to Knowledge Catalog: dataplex.entryGroups.useDataProfileAspect on entry group bigquery.tables.update on table dataplex.entries.update on entry View published data profile results for a table in BigQuery or Knowledge Catalog: bigquery.tables.get on table bigquery.tables.getData on table You might also be able to get these permissions with custom roles or other predefined roles .

### "Package com.google.cloud.dataplex.v1 (1.86.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
- Source ID: `site-java-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Builder Builder for projects/{project}/locations/{location}/dataScans/{dataScan}/jobs/{job}. com. google. cloud. dataplex. v1.
- Selected Fields The specification for fields to include or exclude in data profile scan. com. google. cloud. dataplex. v1.
- Data Profile Applied Configs Applied configs for data profile type data scan job. com. google. cloud. dataplex. v1.
- Builder Builder for projects/{project}/locations/{location}/dataScans/{dataScan}. com. google. cloud. dataplex. v1.

### "Manage Dataplex Universal Catalog resources using custom constraints \_\

- URL: [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Resource Field dataplex.googleapis.com/AspectType resource.authorization.alternateUsePermission resource.description resource.displayName resource.metadataTemplate.annotations.deprecated resource.metadataTemplate.annotations.description resource.metadataTemplate.annotations.displayName resource.metadataTemplate.annotations.displayOrder resource.metadataTemplate.annotations.stringType resource.metadataTemplate.annotations.stringValues resource.metadataTemplate.constraints.required resource.metadataTemplate.enumValues.deprecated resource.metadataTemplate.enumValues.index resource.metadataTemplate.enumValues.name resource.metadataTemplate.index resource.metadataTemplate.name resource.metadataTemplate.type resource.metadataTemplate.typeId resource.metadataTemplate.typeRef dataplex.googleapis.com/DataScan resource.data.entity resource.data.resource resource.dataDiscoverySpec.bigqueryPublishingConfig.connection resource.dataDiscoverySpec.bigqueryPublishingConfig.location resource.dataDiscoverySpec.bigqueryPublishingConfig.tableType resource.dataDiscoverySpec.storageConfig.csvOptions.delimiter resource.dataDiscoverySpec.storageConfig.csvOptions.encoding resource.dataDiscoverySpec.storageConfig.csvOptions.headerRows resource.dataDiscoverySpec.storageConfig.csvOptions.quote resource.dataDiscoverySpec.storageConfig.csvOptions.typeInferenceDisabled resource.dataDiscoverySpec.storageConfig.excludePatterns resource.dataDiscoverySpec.storageConfig.includePatterns resource.dataDiscoverySpec.storageConfig.jsonOptions.encoding resource.dataDiscoverySpec.storageConfig.jsonOptions.typeInferenceDisabled resource.dataProfileSpec.excludeFields.fieldNames resource.dataProfileSpec.includeFields.fieldNames resource.dataProfileSpec.postScanActions.bigqueryExport.resultsTable resource.dataProfileSpec.rowFilter resource.dataProfileSpec.samplingPercent resource.dataQualitySpec.postScanActions.bigqueryExport.resultsTable resource.dataQualitySpec.postScanActions.notificationReport.recipients.emails resource.dataQualitySpec.postScanActions.notificationReport.scoreThresholdTrigger.scoreThreshold resource.dataQualitySpec.rowFilter resource.dataQualitySpec.rules.column resource.dataQualitySpec.rules.description resource.dataQualitySpec.rules.dimension resource.dataQualitySpec.rules.ignoreNull resource.dataQualitySpec.rules.name resource.dataQualitySpec.rules.rangeExpectation.maxValue resource.dataQualitySpec.rules.rangeExpectation.minValue resource.dataQualitySpec.rules.rangeExpectation.strictMaxEnabled resource.dataQualitySpec.rules.rangeExpectation.strictMinEnabled resource.dataQualitySpec.rules.regexExpectation.regex resource.dataQualitySpec.rules.rowConditionExpectation.sqlExpression resource.dataQualitySpec.rules.setExpectation.values resource.dataQualitySpec.rules.sqlAssertion.sqlStatement resource.dataQualitySpec.rules.statisticRangeExpectation.maxValue resource.dataQualitySpec.rules.statisticRangeExpectation.minValue resource.dataQualitySpec.rules.statisticRangeExpectation.statistic resource.dataQualitySpec.rules.statisticRangeExpectation.strictMaxEnabled resource.dataQualitySpec.rules.statisticRangeExpectation.strictMinEnabled resource.dataQualitySpec.rules.suspended resource.dataQualitySpec.rules.tableConditionExpectation.sqlExpression resource.dataQualitySpec.rules.threshold resource.dataQualitySpec.samplingPercent resource.description resource.displayName resource.executionSpec.field resource.executionSpec.trigger.schedule.cron dataplex.googleapis.com/EntryGroup resource.description resource.displayName dataplex.googleapis.com/EntryType resource.authorization.alternateUsePermission resource.description resource.displayName resource.platform resource.requiredAspects.type resource.system resource.typeAliases dataplex.googleapis.com/MetadataJob resource.exportSpec.outputPath resource.exportSpec.scope.aspectTypes resource.exportSpec.scope.entryGroups resource.exportSpec.scope.entryTypes resource.exportSpec.scope.organizationLevel resource.exportSpec.scope.projects resource.importSpec.aspectSyncMode resource.importSpec.entrySyncMode resource.importSpec.logLevel resource.importSpec.scope.aspectTypes resource.importSpec.scope.entryGroups resource.importSpec.scope.entryTypes resource.importSpec.sourceCreateTime resource.importSpec.sourceStorageUri resource.type What's next Learn more about Organization Policy Service .
- Description Constraint syntax Require a specific aspect type for entry types name : organizations/ ORGANIZATION ID /customConstraints/custom.requireAspectTypeForEntryType resourceTypes : - dataplex.googleapis.com/EntryType methodTypes : - CREATE - UPDATE condition : "resource.requiredAspects.exists(value, value.type ==" projects/ PROJECT ID /locations/ LOCATION /aspectTypes/exampleAspectType") actionType : DENY displayName : All entry types require aspect type exampleAspectType description : All entry types require the aspect type exampleAspectType Require a minimum sampling rate for data profiling scans name : organizations/ ORGANIZATION ID /customConstraints/custom.minimumSamplingDataScans resourceTypes : - dataplex.googleapis.com/DataScan methodTypes : - CREATE - UPDATE condition : "resource.dataProfileSpec.samplingPercent > = 20.0" actionType : ALLOW displayName : Require minimum sampling for data profiling scans description : All data profiling scans need at least 20% sampling rate Dataplex Universal Catalog supported resources The following table lists the Dataplex Universal Catalog resources that you can reference in custom constraints.
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: dataplex.googleapis.com/AspectType dataplex.googleapis.com/EntryType dataplex.googleapis.com/EntryGroup dataplex.googleapis.com/DataScan dataplex.googleapis.com/MetadataJob To learn more about Organization Policy, see Custom organization policies .
- Limitations Custom constraints and organization policies aren't supported on the following resources: dataplex.googleapis.com/Lake dataplex.googleapis.com/Zone dataplex.googleapis.com/Task dataplex.googleapis.com/Asset dataplex.googleapis.com/Environment Before you begin Sign in to your Google Cloud account.

