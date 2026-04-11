---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:42.591Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Data quality scan result publishing to Universal Catalog"
feature_slug: "data-quality-scan-result-publishing-to-universal-catalog"
latest_feature_date: "2025-06-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints"
  - "https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality"
  - "https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview"
keywords:
  - "quality"
  - "scan"
  - "result"
  - "publishing"
  - "to"
  - "universal"
  - "catalog"
  - "dataplex"
---

# Data quality scan result publishing to Universal Catalog

Product: Dataplex
Coverage: LOW

## Step 02 Summary

Dataplex can publish data quality scan results as Dataplex Universal Catalog metadata on source table entries.

## Extended Definition

Dataplex can publish data quality scan results as Dataplex Universal Catalog metadata on source table entries.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints)
- [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality)
- [https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview](https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview)

## Supporting Pages

### "Manage Dataplex Universal Catalog resources using custom constraints \_\

- URL: [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 228
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource Field dataplex.googleapis.com/AspectType resource.authorization.alternateUsePermission resource.description resource.displayName resource.metadataTemplate.annotations.deprecated resource.metadataTemplate.annotations.description resource.metadataTemplate.annotations.displayName resource.metadataTemplate.annotations.displayOrder resource.metadataTemplate.annotations.stringType resource.metadataTemplate.annotations.stringValues resource.metadataTemplate.constraints.required resource.metadataTemplate.enumValues.deprecated resource.metadataTemplate.enumValues.index resource.metadataTemplate.enumValues.name resource.metadataTemplate.index resource.metadataTemplate.name resource.metadataTemplate.type resource.metadataTemplate.typeId resource.metadataTemplate.typeRef dataplex.googleapis.com/DataScan resource.data.entity resource.data.resource resource.dataDiscoverySpec.bigqueryPublishingConfig.connection resource.dataDiscoverySpec.bigqueryPublishingConfig.location resource.dataDiscoverySpec.bigqueryPublishingConfig.tableType resource.dataDiscoverySpec.storageConfig.csvOptions.delimiter resource.dataDiscoverySpec.storageConfig.csvOptions.encoding resource.dataDiscoverySpec.storageConfig.csvOptions.headerRows resource.dataDiscoverySpec.storageConfig.csvOptions.quote resource.dataDiscoverySpec.storageConfig.csvOptions.typeInferenceDisabled resource.dataDiscoverySpec.storageConfig.excludePatterns resource.dataDiscoverySpec.storageConfig.includePatterns resource.dataDiscoverySpec.storageConfig.jsonOptions.encoding resource.dataDiscoverySpec.storageConfig.jsonOptions.typeInferenceDisabled resource.dataProfileSpec.excludeFields.fieldNames resource.dataProfileSpec.includeFields.fieldNames resource.dataProfileSpec.postScanActions.bigqueryExport.resultsTable resource.dataProfileSpec.rowFilter resource.dataProfileSpec.samplingPercent resource.dataQualitySpec.postScanActions.bigqueryExport.resultsTable resource.dataQualitySpec.postScanActions.notificationReport.recipients.emails resource.dataQualitySpec.postScanActions.notificationReport.scoreThresholdTrigger.scoreThreshold resource.dataQualitySpec.rowFilter resource.dataQualitySpec.rules.column resource.dataQualitySpec.rules.description resource.dataQualitySpec.rules.dimension resource.dataQualitySpec.rules.ignoreNull resource.dataQualitySpec.rules.name resource.dataQualitySpec.rules.rangeExpectation.maxValue resource.dataQualitySpec.rules.rangeExpectation.minValue resource.dataQualitySpec.rules.rangeExpectation.strictMaxEnabled resource.dataQualitySpec.rules.rangeExpectation.strictMinEnabled resource.dataQualitySpec.rules.regexExpectation.regex resource.dataQualitySpec.rules.rowConditionExpectation.sqlExpression resource.dataQualitySpec.rules.setExpectation.values resource.dataQualitySpec.rules.sqlAssertion.sqlStatement resource.dataQualitySpec.rules.statisticRangeExpectation.maxValue resource.dataQualitySpec.rules.statisticRangeExpectation.minValue resource.dataQualitySpec.rules.statisticRangeExpectation.statistic resource.dataQualitySpec.rules.statisticRangeExpectation.strictMaxEnabled resource.dataQualitySpec.rules.statisticRangeExpectation.strictMinEnabled resource.dataQualitySpec.rules.suspended resource.dataQualitySpec.rules.tableConditionExpectation.sqlExpression resource.dataQualitySpec.rules.threshold resource.dataQualitySpec.samplingPercent resource.description resource.displayName resource.executionSpec.field resource.executionSpec.trigger.schedule.cron dataplex.googleapis.com/EntryGroup resource.description resource.displayName dataplex.googleapis.com/EntryType resource.authorization.alternateUsePermission resource.description resource.displayName resource.platform resource.requiredAspects.type resource.system resource.typeAliases dataplex.googleapis.com/MetadataJob resource.exportSpec.outputPath resource.exportSpec.scope.aspectTypes resource.exportSpec.scope.entryGroups resource.exportSpec.scope.entryTypes resource.exportSpec.scope.organizationLevel resource.exportSpec.scope.projects resource.importSpec.aspectSyncMode resource.importSpec.entrySyncMode resource.importSpec.logLevel resource.importSpec.scope.aspectTypes resource.importSpec.scope.entryGroups resource.importSpec.scope.entryTypes resource.importSpec.sourceCreateTime resource.importSpec.sourceStorageUri resource.type What's next Learn more about Organization Policy Service .
- Description Constraint syntax Require a specific aspect type for entry types name : organizations/ ORGANIZATION ID /customConstraints/custom.requireAspectTypeForEntryType resourceTypes : - dataplex.googleapis.com/EntryType methodTypes : - CREATE - UPDATE condition : "resource.requiredAspects.exists(value, value.type ==" projects/ PROJECT ID /locations/ LOCATION /aspectTypes/exampleAspectType") actionType : DENY displayName : All entry types require aspect type exampleAspectType description : All entry types require the aspect type exampleAspectType Require a minimum sampling rate for data profiling scans name : organizations/ ORGANIZATION ID /customConstraints/custom.minimumSamplingDataScans resourceTypes : - dataplex.googleapis.com/DataScan methodTypes : - CREATE - UPDATE condition : "resource.dataProfileSpec.samplingPercent > = 20.0" actionType : ALLOW displayName : Require minimum sampling for data profiling scans description : All data profiling scans need at least 20% sampling rate Dataplex Universal Catalog supported resources The following table lists the Dataplex Universal Catalog resources that you can reference in custom constraints.
- Home Documentation Data analytics Knowledge Catalog Guides Send feedback Manage Dataplex Universal Catalog resources using custom constraints Stay organized with collections Save and categorize content based on your preferences.
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: dataplex.googleapis.com/AspectType dataplex.googleapis.com/EntryType dataplex.googleapis.com/EntryGroup dataplex.googleapis.com/DataScan dataplex.googleapis.com/MetadataJob To learn more about Organization Policy, see Custom organization policies .

### Use auto data quality \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When you use the gcloud CLI to create or update a data quality scan, you can use a YAML file like this as input to the --data-quality-spec-file argument. rules : - uniquenessExpectation : {} column : transaction id dimension : UNIQUENESS - nonNullExpectation : {} column : amount dimension : COMPLETENESS threshold : 1 - regexExpectation : regex : '^[0-9]{8}[a-zA-Z]{16}$' column : customer id ignoreNull : true dimension : VALIDITY threshold : 1 - setExpectation : values : - 'USD' - 'JPY' - 'INR' - 'GBP' - 'CAN' column : currency id ignoreNull : true dimension : VALIDITY threshold : 1 - rangeExpectation : minValue : '0' maxValue : '100' column : discount pct ignoreNull : true dimension : VALIDITY threshold : 1 - rowConditionExpectation : sqlExpression : 0 < discount pct AND discount pct < 100 column : discount pct dimension : VALIDITY threshold : 1 - rowConditionExpectation : sqlExpression : currency id in (select id from my project id.dim dataset.dim currency) column : currency id dimension : VALIDITY threshold : 1 - tableConditionExpectation : sqlExpression : 30 < avg(discount pct) AND avg(discount pct) < 50 dimension : VALIDITY - rowConditionExpectation : sqlExpression : TIMESTAMP(transaction timestamp) < CURRENT TIMESTAMP() column : transaction timestamp dimension : VALIDITY threshold : 1 - sqlAssertion : sqlStatement : SELECT FROM my project id.dim dataset.dim currency WHERE discount pct > 100 dimension : VALIDITY debugQueries : - sqlStatement : SELECT MAX(discount pct) FROM my project id.dim dataset.dim currency samplingPercent : 50 rowFilter : discount pct > 100 postScanActions : bigqueryExport : resultsTable : projects/my project id/datasets/dim dataset/tables/dim currency notificationReport : recipients : emails : - '222larabrown@gmail.com' - 'cloudysanfrancisco@gmail.com' scoreThresholdTrigger : scoreThreshold : 50 jobFailureTrigger : {} jobEndTrigger : {} catalogPublishingEnabled : true Configure execution identity By default, data quality scans run using the Knowledge Catalog service account.
- Set alerts on data quality failures for a BigQuery table that isn't organized in a Knowledge Catalog lake: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.dataSource="//bigquery.googleapis.com/projects/test-project/datasets/testdataset/table/chicago taxi trips" AND labels."dataplex.googleapis.com/data scan state"="SUCCEEDED" AND resource.labels.resource container="projects/112233445566" AND NOT jsonPayload.dataQuality.passed=true Set alerts on data quality failures for a BigQuery table that's organized in a Knowledge Catalog lake: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.dataSource="projects/test-project/datasets/testdataset/table/chicago taxi trips" AND labels."dataplex.googleapis.com/data scan state"="SUCCEEDED" AND resource.labels.resource container="projects/112233445566" AND NOT jsonPayload.dataQuality.passed=true Sample queries to set per rule alerts A sample query to set alerts on all failing data quality rules with the specified custom rule name for a data quality scan: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.ruleName="custom-name" AND jsonPayload.result="FAILED" A sample query to set alerts on all failing data quality rules of a specific evaluation type for a data quality scan: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.evalutionType="PER ROW" AND jsonPayload.result="FAILED" A sample query to set alerts on all failing data quality rules for a column in the table used for a data quality scan: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.column="CInteger" AND jsonPayload.result="FAILED" Troubleshoot a data quality failure For each job with row-level rules that fail, Knowledge Catalog provides a query to get the failed records.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to read data from various sources and export results: Read BigQuery table data: bigquery.tables.get on BigQuery tables bigquery.tables.getData on BigQuery tables Export scan results to a BigQuery table: bigquery.datasets.get on results dataset and table bigquery.tables.create on results dataset and table bigquery.tables.get on results dataset and table bigquery.tables.getData on results dataset and table bigquery.tables.update on results dataset and table bigquery.tables.updateData on results dataset and table Scan BigQuery data organized in a Knowledge Catalog lake: dataplex.lakes.list on Dataplex resources dataplex.lakes.get on Dataplex resources dataplex.zones.list on Dataplex resources dataplex.zones.get on Dataplex resources dataplex.entities.list on Dataplex resources dataplex.entities.get on Dataplex resources dataplex.operations.get on Dataplex resources Scan a BigQuery external table from Cloud Storage: storage.buckets.get on the Cloud Storage bucket storage.objects.get on the Cloud Storage bucket Your administrator might also be able to give the Knowledge Catalog service account of the project containing the data quality scan these permissions with custom roles or other predefined roles .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to run and manage data quality scans: Run a data quality scan on a BigQuery table: bigquery.jobs.create on the project to run scan jobs bigquery.tables.get on the BigQuery table to be scanned bigquery.tables.getData on the BigQuery table to be scanned Publish data quality scan results to Knowledge Catalog: bigquery.tables.update on the scanned table dataplex.entryGroups.useDataQualityScorecardAspect on the @bigquery entry group in the same location as the table Create a DataScan : dataplex.datascans.create on the project Delete a DataScan : dataplex.datascans.delete on the project View DataScan metadata: dataplex.datascans.get on the project View DataScan details including rules and results: dataplex.datascans.getData on the project List DataScan s: dataplex.datascans.list on the project Run a DataScan : dataplex.datascans.run on the project Update a DataScan : dataplex.datascans.update on the project Get or set IAM policy on a DataScan : dataplex.datascans.getIamPolicy on the project dataplex.datascans.setIamPolicy on the project You might also be able to get these permissions with custom roles or other predefined roles .

### Auto data quality overview \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview](https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: If an existing data quality scan published the results to the BigQuery and Knowledge Catalog pages in the Google Cloud console, and you instead want to publish future scan results as Knowledge Catalog metadata, you must edit the scan to re-enable publishing.
- Execution identity By default, Knowledge Catalog uses a centralized service agent ( service-PROJECT NUMBER@gcp-sa-dataplex.iam.gserviceaccount.com ) to run data quality scans.
- Creating and using a data quality scan consists of the following steps: Define data quality rules Configure rule execution Analyze data quality scan results Set up monitoring and alerting Troubleshoot data quality failures Rule definition Data quality rules associated with a data quality scan define data expectations.
- Monitoring and alerting You can monitor and get alerts about data quality scans by using the following methods: Set alerts in Cloud Logging You can monitor the data quality jobs using the data scan and data quality scan rule result logs in the Logs Explorer.

