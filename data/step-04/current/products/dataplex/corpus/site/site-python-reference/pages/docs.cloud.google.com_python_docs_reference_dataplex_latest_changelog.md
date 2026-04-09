---
title: "Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/dataplex/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/dataplex/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/dataplex/latest/changelog
  title: "Python client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
2.16.0 (latest)
2.15.0
2.14.0
2.13.0
2.12.0
2.11.0
2.10.2
2.9.0
2.8.0
2.7.1
2.6.0
2.5.0
2.4.0
2.3.1
2.2.2
2.1.0
2.0.1
1.13.0
1.12.3
1.11.0
1.10.0
1.9.0
1.8.1
1.7.0
1.6.2
1.5.1
1.4.3
1.3.0
1.2.0
1.1.3
1.0.1
0.2.1
0.1.0
Changelog
PyPI History
2.16.0 (2026-01-08)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
2.15.0 (2025-11-06)
Documentation
Update documentation for Catalog SearchEntries filter options, including parent_entry and wildcard usage ( 735dcad100d7957ba5373a654b9a2d7c2a277903 )
Features
Add GetIamPolicy method for DataProduct resources ( 735dcad100d7957ba5373a654b9a2d7c2a277903 )
Allow publishing Data Profile scan results to the Dataplex Catalog ( 735dcad100d7957ba5373a654b9a2d7c2a277903 )
2.14.0 (2025-10-28)
Documentation
A comment for field resource in message .google.cloud.dataplex.v1.DataSource is changed ( c3c2fbbacf03dcaf015bbfb949f95d46d9e669cb )
A comment for message DataScan is changed ( c3c2fbbacf03dcaf015bbfb949f95d46d9e669cb )
Features
A new field data_documentation_result is added for Data Documentation Result in .google.cloud.dataplex.v1.DataScanJob ( c3c2fbbacf03dcaf015bbfb949f95d46d9e669cb )
A new data scan type Data documentation added. ( c3c2fbbacf03dcaf015bbfb949f95d46d9e669cb )
A new field data_documentation_result is added for Data Documentation Result to message .google.cloud.dataplex.v1.DataScan ( c3c2fbbacf03dcaf015bbfb949f95d46d9e669cb )
A new message DataDocumentationSpec is added representing Data Documentation Spec ( c3c2fbbacf03dcaf015bbfb949f95d46d9e669cb )
A new message DataDocumentationResult is added representing Data Documentation Result ( c3c2fbbacf03dcaf015bbfb949f95d46d9e669cb )
A new field data_documentation_spec is added for Data Documentation Spec to message .google.cloud.dataplex.v1.DataScan ( c3c2fbbacf03dcaf015bbfb949f95d46d9e669cb )
A new field data_documentation_spec is added for Data Documentation Spec to message .google.cloud.dataplex.v1.DataScanJob ( c3c2fbbacf03dcaf015bbfb949f95d46d9e669cb )
2.13.0 (2025-10-16)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
2.12.0 (2025-09-22)
Features
A new field catalog_publishing_enabled is added to message .google.cloud.dataplex.v1.DataQualitySpec ( 94387fb )
A new field catalog_publishing_status is added to message .google.cloud.dataplex.v1.DataQualityResult ( 94387fb )
A new field catalog_publishing_status is added to message .google.cloud.dataplex.v1.DataScanEvent ( 94387fb )
A new field created_entry_links is added to message .google.cloud.dataplex.v1.MetadataJob ( 94387fb )
A new field deleted_entry_links is added to message .google.cloud.dataplex.v1.MetadataJob ( 94387fb )
A new field dimensions is added to message .google.cloud.dataplex.v1.DataQualityColumnResult ( 94387fb )
A new field entry_link_types is added to message .google.cloud.dataplex.v1.MetadataJob ( 94387fb )
A new field entry_link is added to message .google.cloud.dataplex.v1.ImportItem ( 94387fb )
A new field glossaries is added to message .google.cloud.dataplex.v1.MetadataJob ( 94387fb )
A new field passed is added to message .google.cloud.dataplex.v1.DataQualityColumnResult ( 94387fb )
A new field project is added to message .google.cloud.dataplex.v1.DataDiscoverySpec ( 94387fb )
A new field referenced_entry_scopes is added to message .google.cloud.dataplex.v1.MetadataJob ( 94387fb )
A new field unchanged_entry_links is added to message .google.cloud.dataplex.v1.MetadataJob ( 94387fb )
A new message CreateEntryLinkRequest is added ( 94387fb )
A new message CreateGlossaryCategoryRequest is added ( 94387fb )
A new message CreateGlossaryRequest is added ( 94387fb )
A new message CreateGlossaryTermRequest is added ( 94387fb )
A new message DataScanCatalogPublishingStatus is added ( 94387fb )
A new message DeleteEntryLinkRequest is added ( 94387fb )
A new message DeleteGlossaryCategoryRequest is added ( 94387fb )
A new message DeleteGlossaryRequest is added ( 94387fb )
A new message DeleteGlossaryTermRequest is added ( 94387fb )
A new message EntryLink is added ( 94387fb )
A new message GetEntryLinkRequest is added ( 94387fb )
A new message GetGlossaryCategoryRequest is added ( 94387fb )
A new message GetGlossaryRequest is added ( 94387fb )
A new message GetGlossaryTermRequest is added ( 94387fb )
A new message Glossary is added ( 94387fb )
A new message GlossaryCategory is added ( 94387fb )
A new message GlossaryTerm is added ( 94387fb )
A new message ListGlossariesRequest is added ( 94387fb )
A new message ListGlossariesResponse is added ( 94387fb )
A new message ListGlossaryCategoriesRequest is added ( 94387fb )
A new message ListGlossaryCategoriesResponse is added ( 94387fb )
A new message ListGlossaryTermsRequest is added ( 94387fb )
A new message ListGlossaryTermsResponse is added ( 94387fb )
A new message UpdateGlossaryCategoryRequest is added ( 94387fb )
A new message UpdateGlossaryRequest is added ( 94387fb )
A new message UpdateGlossaryTermRequest is added ( 94387fb )
A new method CreateEntryLink is added to service CatalogService ( 94387fb )
A new method DeleteEntryLink is added to service CatalogService ( 94387fb )
A new method GetEntryLink is added to service CatalogService ( 94387fb )
A new resource_definition dataplex.googleapis.com/EntryLink is added ( 94387fb )
A new resource_definition dataplex.googleapis.com/Glossary is added ( 94387fb )
A new resource_definition dataplex.googleapis.com/GlossaryCategory is added ( 94387fb )
A new resource_definition dataplex.googleapis.com/GlossaryTerm is added ( 94387fb )
A new service BusinessGlossaryService is added ( 94387fb )
Documentation
various documentation updates ( 94387fb )
2.11.0 (2025-07-10)
Features
A new field semantic_search is added to message.google.cloud.dataplex.v1.SearchEntriesRequest ( 47fa122 )
2.10.2 (2025-05-15)
Documentation
A comment for enum SyncMode is changed ( 6f6d015 )
A comment for enum value EXPORT in enum Type is changed ( 6f6d015 )
A comment for enum value INTERNAL_ERROR in enum ErrorCode is changed ( 6f6d015 )
A comment for field aspect_types in message .google.cloud.dataplex.v1.MetadataJob is changed ( 6f6d015 )
A comment for field encryption_config_id in message .google.cloud.dataplex.v1.CreateEncryptionConfigRequest is changed ( 6f6d015 )
A comment for field entry_groups in message .google.cloud.dataplex.v1.MetadataJob is changed ( 6f6d015 )
A comment for field entry_types in message .google.cloud.dataplex.v1.MetadataJob is changed ( 6f6d015 )
A comment for field error_message in message .google.cloud.dataplex.v1.MetadataJob is changed ( 6f6d015 )
A comment for field exported_entries in message .google.cloud.dataplex.v1.MetadataJob is changed ( 6f6d015 )
A comment for field organization_level in message .google.cloud.dataplex.v1.MetadataJob is changed ( 6f6d015 )
A comment for field output_path in message .google.cloud.dataplex.v1.MetadataJob is changed ( 6f6d015 )
A comment for field projects in message .google.cloud.dataplex.v1.MetadataJob is changed ( 6f6d015 )
A comment for field scan_statistics in message .google.cloud.dataplex.v1.DataDiscoveryResult is changed ( 6f6d015 )
A comment for field scope in message .google.cloud.dataplex.v1.MetadataJob is changed ( 6f6d015 )
A comment for field source_storage_uri in message .google.cloud.dataplex.v1.MetadataJob is changed ( 6f6d015 )
A comment for message DataDiscoveryResult is changed ( 6f6d015 )
A comment for message MetadataJob is changed ( 6f6d015 )
A comment for message MetadataJob is changed ( 6f6d015 )
A comment for message MetadataJob is changed ( 6f6d015 )
2.10.1 (2025-04-17)
Documentation
minor changes ( cf141a8 )
minor changes ( #13792 ) ( cf141a8 )
2.10.0 (2025-04-12)
Features
A new field export_result is added to message .google.cloud.dataplex.v1.MetadataJob ( c46b81a )
A new field export_spec is added to message .google.cloud.dataplex.v1.MetadataJob ( c46b81a )
A new message ExportJobResult is added ( c46b81a )
A new message ExportJobSpec is added ( c46b81a )
A new value EXPORT is added to enum Type ( c46b81a )
Removing internal visibility labels for cmek public preview ( c46b81a )
Documentation
minor formatting changes ( c46b81a )
2.9.0 (2025-03-27)
Features
Add support for REST transport ( fe3dc62 )
2.8.0 (2025-03-15)
Features
[google-cloud-dataplex] Add custom BigQuery dataset location support in Auto Discovery ( #13641 ) ( 90298dd )
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( feb5353 )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
Documentation
update the Dataplex Catalog proto to remove the info about schema ( 90298dd )
2.7.1 (2025-02-18)
Bug Fixes
deps: Require grpc-google-iam-v1>=0.14.0 ( 16e14c8 )
2.7.0 (2025-02-12)
Features
Added value NONE to the SyncMode enum ( 71b9301 )
Documentation
Modified various comments ( 71b9301 )
2.6.0 (2025-01-02)
Features
A new field force is added to message .google.cloud.dataplex.v1.DeleteDataScanRequest ( 0da9e0a )
Documentation
miscellaneous doc updates ( 0da9e0a )
2.5.0 (2024-12-12)
Features
Add support for opt-in debug logging ( 19ed3be )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( 19ed3be )
2.4.0 (2024-11-15)
Features
A new enum TableType is added ( fffe7a5 )
A new field datascan_id is added to message .google.cloud.dataplex.v1.DiscoveryEvent ( fffe7a5 )
A new field suspended is added to DataScans ( fffe7a5 )
A new field table is added to message .google.cloud.dataplex.v1.DiscoveryEvent ( fffe7a5 )
A new message TableDetails is added ( fffe7a5 )
Add a DATA_DISCOVERY enum type in DataScanEvent ( fffe7a5 )
Add a DataDiscoveryAppliedConfigs message ( fffe7a5 )
Add a TABLE_DELETED field in DiscoveryEvent ( fffe7a5 )
Add a TABLE_IGNORED field in DiscoveryEvent ( fffe7a5 )
Add a TABLE_PUBLISHED field in DiscoveryEvent ( fffe7a5 )
Add a TABLE_UPDATED field in DiscoveryEvent ( fffe7a5 )
Add an Issue field to DiscoveryEvent.ActionDetails to output the action message in Cloud Logs ( fffe7a5 )
add annotations in CreateMetadataJob, GetMetadataJob, ListMetaDataJobs and CancelMetadataJob for cloud audit logging ( fffe7a5 )
Add data_version field to AspectSource ( fffe7a5 )
Add new Data Discovery scan type in Datascan ( fffe7a5 )
expose create time in DataScanJobAPI ( fffe7a5 )
expose create time to customers ( fffe7a5 )
release metadata export in private preview ( fffe7a5 )
release MetadataJob APIs and related resources in GA ( fffe7a5 )
Documentation
A comment for message DataScanEvent is changed ( fffe7a5 )
Add comment for field status in message .google.cloud.dataplex.v1.MetadataJob ( fffe7a5 )
Add comment for field type in message .google.cloud.dataplex.v1.MetadataJob ( fffe7a5 )
Add Identifier for name in message .google.cloud.dataplex.v1.MetadataJob ( fffe7a5 )
add info about schema changes for BigQuery metadata in Dataplex Catalog ( fffe7a5 )
Add link to fully qualified names documentation ( fffe7a5 )
correct API documentation ( fffe7a5 )
correct the dimensions for data quality rules ( fffe7a5 )
Dataplex Tasks do not support Dataplex Content path as a direct input anymore ( fffe7a5 )
Scrub descriptions for standalone discovery scans ( fffe7a5 )
2.3.1 (2024-10-31)
Bug Fixes
disable universe-domain validation ( 53c951e )
2.3.0 (2024-10-24)
Features
Add support for Python 3.13 ( #13202 ) ( 5b1f2f3 )
2.2.2 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( ba1064f )
2.2.1 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12865 ) ( 7f9dedb )
2.2.0 (2024-06-27)
Features
[google-cloud-dataplex] expose data scan execution create time to customers ( #12846 ) ( 2726a72 )
2.1.0 (2024-06-24)
Features
exposing EntrySource.location field that contains location of a resource in the source system ( 9264874 )
Documentation
Scrub descriptions for GenerateDataQualityRules ( 9264874 )
2.0.1 (2024-06-19)
Documentation
clarify DataQualityRule.sql_assertion descriptions ( 74db0f8 )
fix links to RuleType proto references ( 74db0f8 )
2.0.0 (2024-05-16)
⚠ BREAKING CHANGES
An existing field entry is removed from message .google.cloud.dataplex.v1.SearchEntriesResult
An existing field display_name is removed from message .google.cloud.dataplex.v1.SearchEntriesResult
An existing field entry_type is removed from message .google.cloud.dataplex.v1.SearchEntriesResult
An existing field modify_time is removed from message .google.cloud.dataplex.v1.SearchEntriesResult
An existing field fully_qualified_name is removed from message .google.cloud.dataplex.v1.SearchEntriesResult
An existing field description is removed from message .google.cloud.dataplex.v1.SearchEntriesResult
An existing field relative_resource is removed from message .google.cloud.dataplex.v1.SearchEntriesResult
Features
updated client libraries for Dataplex Catalog: removed deprecated fields, updated comments ( fd6e39c )
Bug Fixes
An existing field description is removed from message .google.cloud.dataplex.v1.SearchEntriesResult ( fd6e39c )
An existing field display_name is removed from message .google.cloud.dataplex.v1.SearchEntriesResult ( fd6e39c )
An existing field entry_type is removed from message .google.cloud.dataplex.v1.SearchEntriesResult ( fd6e39c )
An existing field entry is removed from message .google.cloud.dataplex.v1.SearchEntriesResult ( fd6e39c )
An existing field fully_qualified_name is removed from message .google.cloud.dataplex.v1.SearchEntriesResult ( fd6e39c )
An existing field modify_time is removed from message .google.cloud.dataplex.v1.SearchEntriesResult ( fd6e39c )
An existing field relative_resource is removed from message .google.cloud.dataplex.v1.SearchEntriesResult ( fd6e39c )
Documentation
A comment for field aspects in message .google.cloud.dataplex.v1.Entry is changed ( fd6e39c )
A comment for field filter in message .google.cloud.dataplex.v1.ListEntriesRequest is changed ( fd6e39c )
1.13.0 (2024-03-22)
Features
[google-cloud-dataplex] added client side library for Unified and CRUD MetaStore APIs ( #12475 ) ( f56d7af )
1.12.3 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12383 ) ( 305f43f )
1.12.2 (2024-02-22)
Bug Fixes
[Many APIs] fix ValueError in test__validate_universe_domain ( #12282 ) ( b985096 )
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12305 ) ( 2aa7f17 )
1.12.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( f3db074 )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( f3db074 )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( f3db074 )
1.12.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12239 ) ( 8004d15 )
Documentation
[google-cloud-dataplex] fix typo in comment ( #12235 ) ( f8c331e )
1.11.0 (2024-01-04)
Features
[google-cloud-dataplex] added enum value EventType.GOVERNANCE_RULE_PROCESSING ( #12132 ) ( 48d42fd )
Documentation
[google-cloud-dataplex] Fix the comment for ignore_null field to clarify its applicability on data quality rules ( #12141 ) ( ca71481 )
1.10.0 (2023-12-07)
Features
[google-cloud-dataplex] add data quality score to DataQualityResult ( #12080 ) ( 777891d )
Add support for python 3.12 ( b96013d )
Introduce compatibility with native namespace packages ( b96013d )
Bug Fixes
Require proto-plus >= 1.22.3 ( b96013d )
Use retry_async instead of retry in async client ( b96013d )
1.9.0 (2023-11-29)
Features
added DataQualityResult.score, dimension_score, column_score ( b2dade2 )
new event types GOVERNANCE_RULE_MATCHED_RESOURCES, GOVERNANCE_RULE_SEARCH_LIMIT_EXCEEDS, GOVERNANCE_RULE_ERRORS ( b2dade2 )
1.8.1 (2023-11-07)
Documentation
updated comments for DataQualityResult.dimensions field ( #11988 ) ( cf3d534 )
1.8.0 (2023-11-02)
Features
Add GovernanceEvent message ( #11939 ) ( a8e7269 )
1.7.0 (2023-10-10)
Features
DataQualityDimension is now part of the DataQualityDimensionResult message ( #11791 ) ( 88844db )
1.6.3 (2023-09-19)
Documentation
Minor formatting ( 9487380 )
1.6.2 (2023-08-09)
Bug Fixes
remove unused annotation in results_table ( #11548 ) ( 840fc36 )
1.6.1 (2023-08-03)
Documentation
Minor formatting ( #11543 ) ( 8cc031e )
1.6.0 (2023-07-25)
Features
added DataQualityRule.name, description ( 3392532 )
added DataQualitySpec.sampling_percent, row_filter ( 3392532 )
added DataScanEvent.data_profile_configs, data_quality_configs, post_scan_actions_result ( 3392532 )
added Job.labels, trigger, execution_spec ( 3392532 )
added JobEvent.execution_trigger ( 3392532 )
added ListDataScanJobsRequest.filter to filter ListDataScanJob results ( 3392532 )
added RunTaskRequest.labels, args ( 3392532 )
added TopNValue.ratio ( 3392532 )
DataProfileSpec message with DataProfileScan related settings ( 3392532 )
new service DataTaxonomyService and related messages ( 3392532 )
1.5.1 (2023-07-05)
Bug Fixes
Add async context manager return types ( #11445 ) ( 98bddda )
1.5.0 (2023-05-25)
Features
Add managed_access_identity to ResourceStatus message ( 17cf7f1 )
Add read_access_mode to ResourceSpec message ( 17cf7f1 )
Add resource to DataSource message ( 17cf7f1 )
Add StorageAccess , RunTaskRequest , RunTaskResponse , ( 17cf7f1 )
Add validate_only to CreateDataScanRequest ( 17cf7f1 )
Added new Dataplex APIs and new features for existing APIs (e.g. DataScans) ( 17cf7f1 )
Documentation
Updated comments for multiple Dataplex APIs ( 17cf7f1 )
1.4.3 (2023-03-23)
Documentation
Fix formatting of request arg in docstring ( #131 ) ( 3ebb439 )
1.4.2 (2023-02-02)
Documentation
Improvements to DataScan API documentation ( #123 ) ( a7e193f )
1.4.1 (2023-01-20)
Bug Fixes
Add context manager return types ( eb88024 )
Documentation
Add documentation for enums ( eb88024 )
1.4.0 (2023-01-10)
Features
Add support for python 3.11 ( #117 ) ( 18c78d6 )
1.3.0 (2023-01-05)
Features
Added StorageFormat.iceberg ( 16871c0 )
DataScans service ( 16871c0 )
1.2.0 (2022-12-15)
Features
Add support for google.cloud.dataplex.__version__ ( 18e2a32 )
Add support for notebook tasks ( #100 ) ( 64d9c48 )
Add typing to proto.Message based class attributes ( 18e2a32 )
Bug Fixes
Add dict typing for client_options ( 18e2a32 )
deps: Allow protobuf 3.19.5 ( #103 ) ( 65adbb3 )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( 1e94a02 )
Drop usage of pkg_resources ( 1e94a02 )
Fix timeout default values ( 1e94a02 )
Documentation
Fix minor docstring formatting ( #113 ) ( 0dc28b3 )
samples: Snippetgen handling of repeated enum field ( 18e2a32 )
samples: Snippetgen should call await on the operation coroutine before calling result ( 1e94a02 )
1.1.2 (2022-09-29)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #98 ) ( 1b178ce )
1.1.1 (2022-08-15)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #84 ) ( 747f4d9 )
deps: require proto-plus >= 1.22.0 ( 747f4d9 )
1.1.0 (2022-07-15)
Features
add audience parameter ( 741f707 )
Add IAM support for Explore content APIs ( #74 ) ( 741f707 )
Add support for cross project for Task ( 741f707 )
Add support for custom container for Task ( 741f707 )
Add support for custom encryption key to be used for encrypt data on the PDs associated with the VMs in your Dataproc cluster for Task ( 741f707 )
Add support for Latest job in Task resource ( 741f707 )
Support logging sampled file paths per partition to Cloud logging for Discovery event ( 741f707 )
User mode filter in Explore list sessions API ( 741f707 )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( 741f707 )
deps: require grpc-google-iam-v1 >=0.12.4 ( 741f707 )
require python 3.7+ ( #76 ) ( 3cd158c )
1.0.1 (2022-06-03)
Bug Fixes
deps: require protobuf <4.0.0dev ( #66 ) ( 0faef94 )
Documentation
fix changelog header to consistent size ( #67 ) ( 3090fd6 )
1.0.0 (2022-04-26)
Features
bump release level to production/stable ( b13ce8f )
0.2.1 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #18 ) ( 10b7809 )
0.2.0 (2022-02-26)
Features
Added Create, Update and Delete APIs for Metadata (e.g. Entity and/or Partition). ( 1333110 )
Added support for Content APIs ( #8 ) ( 1333110 )
0.1.0 (2022-01-28)
Features
generate v1 ( f29b530 )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
