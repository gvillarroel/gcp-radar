---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:48.455Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Metadata change feeds"
feature_slug: "metadata-change-feeds"
latest_feature_date: "2026-02-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/catalog-overview"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1"
  - "https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata"
  - "https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints"
keywords:
  - "metadata"
  - "change"
  - "feeds"
  - "dataplex"
  - "can"
  - "publish"
  - "near"
  - "real"
---

# Metadata change feeds

Product: Dataplex
Coverage: MEDIUM

## Step 02 Summary

Dataplex can publish near real-time metadata change notifications to a Pub/Sub topic.

## Extended Definition

Dataplex can publish near real-time metadata change notifications to a Pub/Sub topic.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/catalog-overview](https://docs.cloud.google.com/dataplex/docs/catalog-overview)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
- [https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata](https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata)
- [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints)

## Supporting Pages

### About metadata management in Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/catalog-overview](https://docs.cloud.google.com/dataplex/docs/catalog-overview)
- Source ID: `site-docs-root`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Additionally, Knowledge Catalog can stream metadata changes in near real-time using metadata change feeds.
- Metadata change feeds Near real-time metadata change notifications are streamed to Pub/Sub.
- Supported sources Automatic discovery of Cloud Storage data Metadata from the following Google Cloud sources is automatically ingested into Knowledge Catalog: BigQuery sharing (formerly Analytics Hub) exchanges and listings BigQuery datasets, tables, views, models, routines, connections, and linked datasets Bigtable instances, clusters, and tables (including column family details) Dataform repositories and code assets Dataproc Metastore services, databases, and tables Looker (Google Cloud core) instances, dashboards, dashboard elements, Looks, LookML projects, models, Explores, and views ( Preview ) Pub/Sub topics Spanner instances, databases, tables, and views Vertex AI models, datasets, feature groups, feature views, and online store instances If Knowledge Catalog integration is enabled, then metadata from the following Google Cloud sources is automatically ingested into Knowledge Catalog: AlloyDB for PostgreSQL clusters, instances, databases, schemas, tables, views—see Enable the AlloyDB for PostgreSQL integration ( Preview ) Cloud SQL instances, databases, schemas, tables, views—see Enable the Cloud SQL integration To import metadata from a third-party source into Knowledge Catalog, you can use a managed connectivity pipeline.
- Data Catalog API method Dataplex API method projects.locations.tagTemplates.fields.create (REST) CreateTagTemplateField (RPC) projects.locations.aspectTypes.patch (REST) UpdateAspectType (RPC) projects.locations.tagTemplates.fields.patch (REST) UpdateTagTemplateField (RPC) projects.locations.aspectTypes.patch (REST) UpdateAspectType (RPC) projects.locations.tagTemplates.fields.rename (REST) RenameTagTemplateField (RPC) projects.locations.aspectTypes.patch (REST) UpdateAspectType (RPC) projects.locations.tagTemplates.fields.delete (REST) DeleteTagTemplateField (RPC) projects.locations.aspectTypes.patch (REST) UpdateAspectType (RPC) Tag template field enum values Similar to tag template fields, you can edit enum values in the Dataplex API by modifying the metadata template field in the corresponding aspect type.

### "Package com.google.cloud.dataplex.v1 (1.86.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
- Source ID: `site-java-reference`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- Data Scan Catalog Publishing Status The status of publishing the data scan result as Dataplex Universal Catalog metadata.
- Builder The status of publishing the data scan result as Dataplex Universal Catalog metadata.
- Multiple DataScan log events may exist, each with different publishing information depending on the type of publishing triggered. com. google. cloud. dataplex. v1.
- Multiple DataScan log events may exist, each with different publishing information depending on the type of publishing triggered. com. google. cloud. dataplex. v1.

### "Manage aspects and enrich metadata \_|\_ Knowledge Catalog \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata](https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata)
- Source ID: `site-docs-root`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- You can use Metadata change feeds to receive notifications when aspects are modified.
- This client only needs to be created // once, and can be reused for multiple requests. try ( CatalogServiceClient client = CatalogServiceClient . create ()) { Entry entry = Entry . newBuilder () . setName ( EntryName . of ( projectId , location , entryGroupId , entryId ). toString ()) . setEntrySource ( EntrySource . newBuilder () . setDescription ( "updated description of the entry" ) . build ()) . putAllAspects ( Map . of ( "dataplex-types.global.generic" , Aspect . newBuilder () . setAspectType ( "projects/dataplex-types/locations/global/aspectTypes/generic" ) . setData ( Struct . newBuilder () // "Generic" Aspect Type have fields called "type" and "system. // The values below are a sample of possible options. . putFields ( "type" , Value . newBuilder () . setStringValue ( "updated example value" ) . build ()) . putFields ( "system" , Value . newBuilder () . setStringValue ( "updated example system" ) . build ()) . build ()) . build ())) . build (); // Update mask specifies which fields will be updated. // For more information on update masks, see: https://google.aip.dev/161 FieldMask updateMask = FieldMask . newBuilder (). addPaths ( "aspects" ). addPaths ( "entry source.description" ). build (); return client . updateEntry ( entry , updateMask ); } } } Python Python Before trying this sample, follow the Python setup instructions in the Knowledge Catalog quickstart using client libraries .
- Required roles To get the permissions that you need to create and manage aspect types and aspects, ask your administrator to grant you the following IAM roles on the resource: Full set of permissions on metadata resources in Knowledge Catalog, including aspect types and data aspects: Dataplex Catalog Admin ( roles/dataplex.catalogAdmin ) Create and manage metadata resources in Knowledge Catalog, including aspect types and data aspects: Dataplex Catalog Editor ( roles/dataplex.catalogEditor ) Full set of permissions on custom aspect types (except for permissions to use aspect types to create or edit entries): Dataplex Aspect Type Owner ( roles/dataplex.aspectTypeOwner ) View aspect types and IAM policies associated with them: Dataplex Catalog Viewer ( roles/dataplex.catalogViewer ) Use aspect types to create and modify entries with the corresponding aspects: Dataplex Aspect Type User ( roles/dataplex.aspectTypeUser ) Add aspects of some of the system aspect types, such as schema , schema-join , overview , contacts : Dataplex Entry and EntryLink Owner ( roles/dataplex.entryOwner ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Create the payload.json file as follows: { "aspects" : { "dataplex-types.global.data-profile" : { "data" : { "sourceDataInfo" : { "scope" : "ALL" , "scannedRows" : 100 }, "fields" : { "col1" : { "nullness" : 0.0 , "uniqueness" : 0.1 , "string" : { "length" : { "min" : 1 , "max" : 20 , "avg" : 12.54 } } } } } } }} Generic.

### "Manage Dataplex Universal Catalog resources using custom constraints \_\

- URL: [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Resource Field dataplex.googleapis.com/AspectType resource.authorization.alternateUsePermission resource.description resource.displayName resource.metadataTemplate.annotations.deprecated resource.metadataTemplate.annotations.description resource.metadataTemplate.annotations.displayName resource.metadataTemplate.annotations.displayOrder resource.metadataTemplate.annotations.stringType resource.metadataTemplate.annotations.stringValues resource.metadataTemplate.constraints.required resource.metadataTemplate.enumValues.deprecated resource.metadataTemplate.enumValues.index resource.metadataTemplate.enumValues.name resource.metadataTemplate.index resource.metadataTemplate.name resource.metadataTemplate.type resource.metadataTemplate.typeId resource.metadataTemplate.typeRef dataplex.googleapis.com/DataScan resource.data.entity resource.data.resource resource.dataDiscoverySpec.bigqueryPublishingConfig.connection resource.dataDiscoverySpec.bigqueryPublishingConfig.location resource.dataDiscoverySpec.bigqueryPublishingConfig.tableType resource.dataDiscoverySpec.storageConfig.csvOptions.delimiter resource.dataDiscoverySpec.storageConfig.csvOptions.encoding resource.dataDiscoverySpec.storageConfig.csvOptions.headerRows resource.dataDiscoverySpec.storageConfig.csvOptions.quote resource.dataDiscoverySpec.storageConfig.csvOptions.typeInferenceDisabled resource.dataDiscoverySpec.storageConfig.excludePatterns resource.dataDiscoverySpec.storageConfig.includePatterns resource.dataDiscoverySpec.storageConfig.jsonOptions.encoding resource.dataDiscoverySpec.storageConfig.jsonOptions.typeInferenceDisabled resource.dataProfileSpec.excludeFields.fieldNames resource.dataProfileSpec.includeFields.fieldNames resource.dataProfileSpec.postScanActions.bigqueryExport.resultsTable resource.dataProfileSpec.rowFilter resource.dataProfileSpec.samplingPercent resource.dataQualitySpec.postScanActions.bigqueryExport.resultsTable resource.dataQualitySpec.postScanActions.notificationReport.recipients.emails resource.dataQualitySpec.postScanActions.notificationReport.scoreThresholdTrigger.scoreThreshold resource.dataQualitySpec.rowFilter resource.dataQualitySpec.rules.column resource.dataQualitySpec.rules.description resource.dataQualitySpec.rules.dimension resource.dataQualitySpec.rules.ignoreNull resource.dataQualitySpec.rules.name resource.dataQualitySpec.rules.rangeExpectation.maxValue resource.dataQualitySpec.rules.rangeExpectation.minValue resource.dataQualitySpec.rules.rangeExpectation.strictMaxEnabled resource.dataQualitySpec.rules.rangeExpectation.strictMinEnabled resource.dataQualitySpec.rules.regexExpectation.regex resource.dataQualitySpec.rules.rowConditionExpectation.sqlExpression resource.dataQualitySpec.rules.setExpectation.values resource.dataQualitySpec.rules.sqlAssertion.sqlStatement resource.dataQualitySpec.rules.statisticRangeExpectation.maxValue resource.dataQualitySpec.rules.statisticRangeExpectation.minValue resource.dataQualitySpec.rules.statisticRangeExpectation.statistic resource.dataQualitySpec.rules.statisticRangeExpectation.strictMaxEnabled resource.dataQualitySpec.rules.statisticRangeExpectation.strictMinEnabled resource.dataQualitySpec.rules.suspended resource.dataQualitySpec.rules.tableConditionExpectation.sqlExpression resource.dataQualitySpec.rules.threshold resource.dataQualitySpec.samplingPercent resource.description resource.displayName resource.executionSpec.field resource.executionSpec.trigger.schedule.cron dataplex.googleapis.com/EntryGroup resource.description resource.displayName dataplex.googleapis.com/EntryType resource.authorization.alternateUsePermission resource.description resource.displayName resource.platform resource.requiredAspects.type resource.system resource.typeAliases dataplex.googleapis.com/MetadataJob resource.exportSpec.outputPath resource.exportSpec.scope.aspectTypes resource.exportSpec.scope.entryGroups resource.exportSpec.scope.entryTypes resource.exportSpec.scope.organizationLevel resource.exportSpec.scope.projects resource.importSpec.aspectSyncMode resource.importSpec.entrySyncMode resource.importSpec.logLevel resource.importSpec.scope.aspectTypes resource.importSpec.scope.entryGroups resource.importSpec.scope.entryTypes resource.importSpec.sourceCreateTime resource.importSpec.sourceStorageUri resource.type What's next Learn more about Organization Policy Service .
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: dataplex.googleapis.com/AspectType dataplex.googleapis.com/EntryType dataplex.googleapis.com/EntryGroup dataplex.googleapis.com/DataScan dataplex.googleapis.com/MetadataJob To learn more about Organization Policy, see Custom organization policies .
- Description Constraint syntax Require a specific aspect type for entry types name : organizations/ ORGANIZATION ID /customConstraints/custom.requireAspectTypeForEntryType resourceTypes : - dataplex.googleapis.com/EntryType methodTypes : - CREATE - UPDATE condition : "resource.requiredAspects.exists(value, value.type ==" projects/ PROJECT ID /locations/ LOCATION /aspectTypes/exampleAspectType") actionType : DENY displayName : All entry types require aspect type exampleAspectType description : All entry types require the aspect type exampleAspectType Require a minimum sampling rate for data profiling scans name : organizations/ ORGANIZATION ID /customConstraints/custom.minimumSamplingDataScans resourceTypes : - dataplex.googleapis.com/DataScan methodTypes : - CREATE - UPDATE condition : "resource.dataProfileSpec.samplingPercent > = 20.0" actionType : ALLOW displayName : Require minimum sampling for data profiling scans description : All data profiling scans need at least 20% sampling rate Dataplex Universal Catalog supported resources The following table lists the Dataplex Universal Catalog resources that you can reference in custom constraints.
- A custom constraint can only contain letters (including upper and lowercase) or numbers, for example, custom.denyDataplexEntryGroup .

