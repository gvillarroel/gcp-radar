---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:48.466Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Location organization policy support for Data Lineage"
feature_slug: "location-organization-policy-support-for-data-lineage"
latest_feature_date: "2024-07-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/lineage-custom-constraints"
  - "https://docs.cloud.google.com/dataplex/docs/cmek"
  - "https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints"
  - "https://docs.cloud.google.com/dataplex/docs/reference/data-lineage/rest/v1/organizations.locations.config"
keywords:
  - "location"
  - "organization"
  - "policy"
  - "for"
  - "lineage"
  - "supports"
  - "constraints"
  - "controlling"
---

# Location organization policy support for Data Lineage

Product: Dataplex
Coverage: MEDIUM

## Step 02 Summary

Data Lineage supports organization policy constraints for controlling allowed resource locations.

## Extended Definition

Data Lineage supports organization policy constraints for controlling allowed resource locations.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/lineage-custom-constraints](https://docs.cloud.google.com/dataplex/docs/lineage-custom-constraints)
- [https://docs.cloud.google.com/dataplex/docs/cmek](https://docs.cloud.google.com/dataplex/docs/cmek)
- [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints)
- [https://docs.cloud.google.com/dataplex/docs/reference/data-lineage/rest/v1/organizations.locations.config](https://docs.cloud.google.com/dataplex/docs/reference/data-lineage/rest/v1/organizations.locations.config)

## Supporting Pages

### "Manage data lineage resources using custom constraints \_|\_ Knowledge Catalog\

- URL: [https://docs.cloud.google.com/dataplex/docs/lineage-custom-constraints](https://docs.cloud.google.com/dataplex/docs/lineage-custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The output is the following: Operation denied by org policy on resource 'projects/ PROJECT ID /locations/ LOCATION ': ["customConstraints/custom.denyLineageProcess"] Data lineage supported resources and operations The following custom constraint fields are available to use when you create or update a data lineage process: resource.name resource.displayName resource.origin.name resource.origin.sourceType Custom constraints are checked for the following methods: CreateProcess UpdateProcess ProcessopenLineageRunEvent Example custom organization policies for common use cases The following table provides the syntax of some custom constraints for common use cases: For more information about CEL macros available for use in custom constraint conditions, see Common Expression Language .
- Disable the creation of data lineage processes by BigQuery or Managed Service for Apache Spark name : organizations/ ORGANIZATION ID /customConstraints/custom.denyLineageProcessesCreation resourceTypes : - datalineage.googleapis.com/Process methodTypes : - CREATE condition : "resource.origin.sourceType == 'BIGQUERY' resource.origin.sourceType == 'DATAPROC'" actionType : DENY displayName : Deny data lineage processes created by BigQuery or Managed Service for Apache Spark.
- To create a YAML file for a custom constraint: name : organizations/ ORGANIZATION ID /customConstraints/ CONSTRAINT NAME resourceTypes : - datalineage.googleapis.com/ RESOURCE TYPE methodTypes : - CREATE - UPDATE condition : " CONDITION " actionType : ACTION displayName : DISPLAY NAME description : DESCRIPTION Replace the following: ORGANIZATION ID : your organization ID, such as 123456789 .
- Although Organization Policy provides predefined constraints for various Google Cloud services, custom constraints let you to define granular control over specific fields in your organization policies.

### "Enable customer-managed encryption keys \_|\_ Knowledge Catalog \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataplex/docs/cmek](https://docs.cloud.google.com/dataplex/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CMEK organization policies Google Cloud provides organization policy constraints to enforce CMEK usage and control the permissible Cloud KMS keys within your organization.
- Upgrade existing CMEK configurations If you enabled CMEK in Knowledge Catalog before November 7, 2025, run the following command to extend CMEK coverage to Knowledge Catalog and Knowledge Catalog search: gcloud dataplex encryption-config update organizations/ ORG ID /locations/ LOCATION /encryptionConfigs/default --enable-metastore-encryption Replace ORG ID with the ID of the organization that contains the key.
- Supported features Knowledge Catalog supports CMEK encryption for the following features: Auto data quality Data profiling Data discovery Data insights Knowledge Catalog Business Glossary Knowledge Catalog search Data Lineage doesn't store customer core content or sensitive data, and therefore doesn't require CMEK encryption.
- This policy is validated at the individual resource project level. constraints/gcp.restrictCmekCryptoKeyProjects restricts the selection of Cloud KMS keys for CMEK to designated resource hierarchies.

### "Manage Dataplex Universal Catalog resources using custom constraints \_\

- URL: [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Resource Field dataplex.googleapis.com/AspectType resource.authorization.alternateUsePermission resource.description resource.displayName resource.metadataTemplate.annotations.deprecated resource.metadataTemplate.annotations.description resource.metadataTemplate.annotations.displayName resource.metadataTemplate.annotations.displayOrder resource.metadataTemplate.annotations.stringType resource.metadataTemplate.annotations.stringValues resource.metadataTemplate.constraints.required resource.metadataTemplate.enumValues.deprecated resource.metadataTemplate.enumValues.index resource.metadataTemplate.enumValues.name resource.metadataTemplate.index resource.metadataTemplate.name resource.metadataTemplate.type resource.metadataTemplate.typeId resource.metadataTemplate.typeRef dataplex.googleapis.com/DataScan resource.data.entity resource.data.resource resource.dataDiscoverySpec.bigqueryPublishingConfig.connection resource.dataDiscoverySpec.bigqueryPublishingConfig.location resource.dataDiscoverySpec.bigqueryPublishingConfig.tableType resource.dataDiscoverySpec.storageConfig.csvOptions.delimiter resource.dataDiscoverySpec.storageConfig.csvOptions.encoding resource.dataDiscoverySpec.storageConfig.csvOptions.headerRows resource.dataDiscoverySpec.storageConfig.csvOptions.quote resource.dataDiscoverySpec.storageConfig.csvOptions.typeInferenceDisabled resource.dataDiscoverySpec.storageConfig.excludePatterns resource.dataDiscoverySpec.storageConfig.includePatterns resource.dataDiscoverySpec.storageConfig.jsonOptions.encoding resource.dataDiscoverySpec.storageConfig.jsonOptions.typeInferenceDisabled resource.dataProfileSpec.excludeFields.fieldNames resource.dataProfileSpec.includeFields.fieldNames resource.dataProfileSpec.postScanActions.bigqueryExport.resultsTable resource.dataProfileSpec.rowFilter resource.dataProfileSpec.samplingPercent resource.dataQualitySpec.postScanActions.bigqueryExport.resultsTable resource.dataQualitySpec.postScanActions.notificationReport.recipients.emails resource.dataQualitySpec.postScanActions.notificationReport.scoreThresholdTrigger.scoreThreshold resource.dataQualitySpec.rowFilter resource.dataQualitySpec.rules.column resource.dataQualitySpec.rules.description resource.dataQualitySpec.rules.dimension resource.dataQualitySpec.rules.ignoreNull resource.dataQualitySpec.rules.name resource.dataQualitySpec.rules.rangeExpectation.maxValue resource.dataQualitySpec.rules.rangeExpectation.minValue resource.dataQualitySpec.rules.rangeExpectation.strictMaxEnabled resource.dataQualitySpec.rules.rangeExpectation.strictMinEnabled resource.dataQualitySpec.rules.regexExpectation.regex resource.dataQualitySpec.rules.rowConditionExpectation.sqlExpression resource.dataQualitySpec.rules.setExpectation.values resource.dataQualitySpec.rules.sqlAssertion.sqlStatement resource.dataQualitySpec.rules.statisticRangeExpectation.maxValue resource.dataQualitySpec.rules.statisticRangeExpectation.minValue resource.dataQualitySpec.rules.statisticRangeExpectation.statistic resource.dataQualitySpec.rules.statisticRangeExpectation.strictMaxEnabled resource.dataQualitySpec.rules.statisticRangeExpectation.strictMinEnabled resource.dataQualitySpec.rules.suspended resource.dataQualitySpec.rules.tableConditionExpectation.sqlExpression resource.dataQualitySpec.rules.threshold resource.dataQualitySpec.samplingPercent resource.description resource.displayName resource.executionSpec.field resource.executionSpec.trigger.schedule.cron dataplex.googleapis.com/EntryGroup resource.description resource.displayName dataplex.googleapis.com/EntryType resource.authorization.alternateUsePermission resource.description resource.displayName resource.platform resource.requiredAspects.type resource.system resource.typeAliases dataplex.googleapis.com/MetadataJob resource.exportSpec.outputPath resource.exportSpec.scope.aspectTypes resource.exportSpec.scope.entryGroups resource.exportSpec.scope.entryTypes resource.exportSpec.scope.organizationLevel resource.exportSpec.scope.projects resource.importSpec.aspectSyncMode resource.importSpec.entrySyncMode resource.importSpec.logLevel resource.importSpec.scope.aspectTypes resource.importSpec.scope.entryGroups resource.importSpec.scope.entryTypes resource.importSpec.sourceCreateTime resource.importSpec.sourceStorageUri resource.type What's next Learn more about Organization Policy Service .
- The output is the following: Operation denied by custom org policy on resource 'projects/ PROJECT ID /locations/ LOCATION /entryGroups/org-policy-test': ["customConstraints/custom.denyDataplexEntryGroup"] Example custom organization policies for common use cases This table provides syntax examples for some common custom constraints.
- Description Constraint syntax Require a specific aspect type for entry types name : organizations/ ORGANIZATION ID /customConstraints/custom.requireAspectTypeForEntryType resourceTypes : - dataplex.googleapis.com/EntryType methodTypes : - CREATE - UPDATE condition : "resource.requiredAspects.exists(value, value.type ==" projects/ PROJECT ID /locations/ LOCATION /aspectTypes/exampleAspectType") actionType : DENY displayName : All entry types require aspect type exampleAspectType description : All entry types require the aspect type exampleAspectType Require a minimum sampling rate for data profiling scans name : organizations/ ORGANIZATION ID /customConstraints/custom.minimumSamplingDataScans resourceTypes : - dataplex.googleapis.com/DataScan methodTypes : - CREATE - UPDATE condition : "resource.dataProfileSpec.samplingPercent > = 20.0" actionType : ALLOW displayName : Require minimum sampling for data profiling scans description : All data profiling scans need at least 20% sampling rate Dataplex Universal Catalog supported resources The following table lists the Dataplex Universal Catalog resources that you can reference in custom constraints.
- Organization Policy provides built-in managed constraints for various Google Cloud services.

### "REST Resource: organizations.locations.config \_|\_ Knowledge Catalog \_\

- URL: [https://docs.cloud.google.com/dataplex/docs/reference/data-lineage/rest/v1/organizations.locations.config](https://docs.cloud.google.com/dataplex/docs/reference/data-lineage/rest/v1/organizations.locations.config)
- Source ID: `site-api-reference`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- Format: organizations/{organization id}/locations/global/config folders/{folder id}/locations/global/config projects/{projectId}/locations/global/config projects/{project number}/locations/global/config ingestion object ( Ingestion ) Optional.
- Home Documentation Data analytics Knowledge Catalog Reference Send feedback REST Resource: organizations.locations.config Stay organized with collections Save and categorize content based on your preferences.
- Ingestion rule for Data Lineage ingestion. etag string Optional. etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a config from overwriting each other.
- Defines different configuration options for Lineage customers to control behaviour of lineage systems.

