---
title: "Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/datacatalog/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/changelog
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
3.29.0 (latest)
3.28.0
3.27.1
3.26.1
3.25.1
3.24.1
3.23.0
3.22.0
3.21.1
3.20.1
3.19.1
3.18.3
3.17.2
3.16.0
3.15.1
3.14.0
3.13.1
3.12.0
3.11.1
3.10.0
3.9.3
3.8.1
3.7.1
3.6.2
3.5.0
3.4.3
3.3.2
3.2.1
3.1.1
3.0.0
2.0.2
1.0.2
0.8.2
0.7.0
0.6.0
0.5.0
0.4.0
0.3.0
Changelog
PyPI History
3.29.0 (2026-01-08)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
3.28.0 (2025-10-16)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
3.27.1 (2025-05-08)
Documentation
[google-cloud-datacatalog] update documentation URL ( #13853 ) ( 5c1d1a7 )
3.27.0 (2025-04-23)
Features
[google-cloud-datacatalog] add field template_migration_enabled_time to .google.cloud.datacatalog.v1.MigrationConfig ( #13823 ) ( e2b8039 )
3.26.1 (2025-04-12)
Documentation
clarify sql variant in comment for v1.LookupEntryRequest.sql_resource ( 2c0c1c8 )
clarify sql variant in comment for v1beta1.LookupEntryRequest.sql_resource ( 2c0c1c8 )
3.26.0 (2025-03-15)
Features
[google-cloud-datacatalog] mark DataCatalog service deprecated, use Dataplex Catalog instead ( #13642 ) ( cc49cd3 )
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( feb5353 )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
Documentation
[google-cloud-datacatalog] Mark DataCatalog v1beta1 service and ( cc49cd3 )
fix a few typos ( cc49cd3 )
3.25.1 (2025-02-18)
Bug Fixes
deps: Require grpc-google-iam-v1>=0.14.0 ( 16e14c8 )
3.25.0 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( e92d527 )
Add support for reading selective GAPIC generation methods from service YAML ( e92d527 )
3.24.1 (2024-12-18)
Documentation
[google-cloud-datacatalog] fix markdown reference in TagTemplate.is_publicly_readable comment ( #13369 ) ( d8afab0 )
3.24.0 (2024-12-12)
Features
Add support for opt-in debug logging ( 19ed3be )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( 19ed3be )
3.23.0 (2024-11-21)
Features
A new enum CatalogUIExperience is added ( 09a3381 )
A new enum TagTemplateMigration is added ( 09a3381 )
A new field dataplex_transfer_status is added to message .google.cloud.datacatalog.v1.Tag ( 09a3381 )
A new field transferred_to_dataplex is added to message .google.cloud.datacatalog.v1.EntryGroup ( 09a3381 )
A new message MigrationConfig is added ( 09a3381 )
A new message OrganizationConfig is added ( 09a3381 )
A new message RetrieveConfigRequest is added ( 09a3381 )
A new message RetrieveEffectiveConfigRequest is added ( 09a3381 )
A new message SetConfigRequest is added ( 09a3381 )
A new method RetrieveConfig is added to service DataCatalog ( 09a3381 )
A new method RetrieveEffectiveConfig is added to service DataCatalog ( 09a3381 )
A new method SetConfig is added to service DataCatalog ( 09a3381 )
A new value TRANSFERRED is added to enum DataplexTransferStatus ( 09a3381 )
Documentation
A comment for message EntryGroup is changed ( 09a3381 )
3.22.0 (2024-11-14)
Features
A new enum DataplexTransferStatus is added ( e0ea31c )
A new field dataplex_transfer_status is added to message .google.cloud.datacatalog.v1.TagTemplate ( e0ea31c )
A new field feature_online_store_spec is added to message .google.cloud.datacatalog.v1.Entry ( e0ea31c )
A new message FeatureOnlineStoreSpec is added ( e0ea31c )
A new value CUSTOM_TEXT_EMBEDDING is added to enum ModelSourceType ( e0ea31c )
A new value FEATURE_GROUP is added to enum EntryType ( e0ea31c )
A new value FEATURE_ONLINE_STORE is added to enum EntryType ( e0ea31c )
A new value FEATURE_VIEW is added to enum EntryType ( e0ea31c )
A new value GENIE is added to enum ModelSourceType ( e0ea31c )
A new value MARKETPLACE is added to enum ModelSourceType ( e0ea31c )
Documentation
A comment for field name in message .google.cloud.datacatalog.v1.Entry is changed ( e0ea31c )
A comment for field name in message .google.cloud.datacatalog.v1.EntryGroup is changed ( e0ea31c )
A comment for field name in message .google.cloud.datacatalog.v1.Tag is changed ( e0ea31c )
A comment for field name in message .google.cloud.datacatalog.v1.TagTemplate is changed ( e0ea31c )
A comment for field name in message .google.cloud.datacatalog.v1.TagTemplateField is changed ( e0ea31c )
3.21.1 (2024-10-31)
Bug Fixes
disable universe-domain validation ( 53c951e )
3.21.0 (2024-10-24)
Features
Add support for Python 3.13 ( 6252476 )
3.20.1 (2024-07-31)
Documentation
[google-cloud-datacatalog] mark DataplexTransferStatus.MIGRATED as deprecated ( #12968 ) ( 6cebf3e )
3.20.0 (2024-07-30)
Features
[google-cloud-datacatalog] add DataplexTransferStatus enum and field to TagTemplate ( 8a2814b )
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( ba1064f )
Documentation
update field comments for updated IDENTIFIER field behavior ( 8a2814b )
3.19.1 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12865 ) ( 7f9dedb )
3.19.0 (2024-03-22)
Features
Add RANGE type to Data Catalog ( d60ef17 )
3.18.3 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12383 ) ( 305f43f )
3.18.2 (2024-02-22)
Bug Fixes
[Many APIs] fix ValueError in test__validate_universe_domain ( #12282 ) ( b985096 )
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12305 ) ( 2aa7f17 )
3.18.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( f3db074 )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( f3db074 )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( f3db074 )
3.18.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12239 ) ( 8004d15 )
3.17.2 (2024-01-12)
Documentation
[google-cloud-datacatalog] Change field behavior of the property “name” to IDENTIFIER for PolicyTag and Taxonomy ( #12163 ) ( 1022ee8 )
3.17.1 (2024-01-08)
Documentation
[google-cloud-datacatalog] Change field behavior of the property “name” to IDENTIFIER for PolicyTag and Taxonomy ( #12161 ) ( 46ea3b4 )
3.17.0 (2023-12-07)
Features
Add support for python 3.12 ( b96013d )
Introduce compatibility with native namespace packages ( b96013d )
Bug Fixes
Require proto-plus >= 1.22.3 ( b96013d )
Use retry_async instead of retry in async client ( b96013d )
3.16.0 (2023-09-30)
Features
Enable Vertex AI Ingestion on DataPlex ( #11762 ) ( b9d7b71 )
3.15.2 (2023-09-19)
Documentation
Minor formatting ( 9487380 )
3.15.1 (2023-08-31)
Documentation
fix typo ( #11600 ) ( cc8021a )
3.15.0 (2023-08-09)
Features
add support for admin_search in SearchCatalog() API method ( #11539 ) ( 6dced1a )
3.14.0 (2023-07-10)
Features
added Entry.usage_signal ( b279092 )
added rpc RenameTagTemplateFieldEnumValue ( b279092 )
returning approximate total size for SearchCatalog ( b279092 )
returning unreachable locations for SearchCatalog ( b279092 )
Documentation
update docs of SearchCatalogRequest message ( b279092 )
3.13.1 (2023-07-05)
Bug Fixes
Add async context manager return types ( #11445 ) ( 98bddda )
3.13.0 (2023-05-29)
Features
Add support for entries associated with Spanner and CloudBigTable ( c057e0d )
Expand SearchCatalogResponse with totalSize ( c057e0d )
Extend ImportApiRequest with jobId parameter ( c057e0d )
Modify documentation for FQN support ( c057e0d )
3.12.0 (2023-03-23)
Features
Add support for a ReconcileTags() API method ( 423efa5 )
Add support for entries associated with Looker and CloudSQL ( 423efa5 )
Add support for new ImportEntries() API, including format of the dump ( 423efa5 )
Documentation
Fix formatting of request arg in docstring ( #472 ) ( 99ea7ba )
3.11.1 (2023-01-20)
Bug Fixes
Add context manager return types ( f9d47e0 )
Documentation
Add documentation for enums ( f9d47e0 )
3.11.0 (2023-01-10)
Features
Add support for python 3.11 ( #454 ) ( 07d3519 )
3.10.0 (2022-12-14)
Features
Add support for google.cloud.datacatalog.__version__ ( 8a4f5f8 )
Add typing to proto.Message based class attributes ( 8a4f5f8 )
Bug Fixes
Add dict typing for client_options ( 8a4f5f8 )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( 9682965 )
Drop usage of pkg_resources ( 9682965 )
Fix timeout default values ( 9682965 )
Documentation
samples: Snippetgen handling of repeated enum field ( 8a4f5f8 )
samples: Snippetgen should call await on the operation coroutine before calling result ( 9682965 )
3.9.3 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #437 ) ( 1f75417 )
3.9.2 (2022-10-03)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #433 ) ( 182a6e9 )
3.9.1 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #412 ) ( dadf9e7 )
deps: require proto-plus >= 1.22.0 ( dadf9e7 )
3.9.0 (2022-07-16)
Features
add audience parameter ( 624f2eb )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #401 ) ( 624f2eb )
require python 3.7+ ( #403 ) ( 5a1b948 )
3.8.1 (2022-06-03)
Bug Fixes
deps: require protobuf <4.0.0dev ( #384 ) ( f73208b )
Documentation
fix changelog header to consistent size ( #385 ) ( 7588b0b )
3.8.0 (2022-05-09)
Features
added Dataplex specific fields ( 9e33102 )
AuditConfig for IAM v1 ( 9e33102 )
Bug Fixes
deps: require grpc-google-iam-v1 >=0.12.4 ( 9e33102 )
Documentation
fix type in docstring for map fields ( 9e33102 )
update taxonomy display_name comment ( #338 ) ( 9e33102 )
3.7.1 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #311 ) ( f2f3c7f )
deps: require proto-plus>=1.15.0 ( f2f3c7f )
3.7.0 (2022-02-28)
Features
add api key support ( #291 ) ( 7d8c3bc )
Add methods and messages related to business context feature ( 650ad39 )
Add methods and messages related to starring feature ( #297 ) ( 650ad39 )
Bug Fixes
deps: move libcst to extras ( #300 ) ( eaf1ad6 )
resolve DuplicateCredentialArgs error when using credentials_file ( 18b7f51 )
Documentation
add autogenerated code snippets ( 650ad39 )
3.6.2 (2022-01-10)
Documentation
convert UPGRADING guide to RST to fix table formatting ( #268 ) ( 571171e )
fixing upgrading guide v2 ( #277 ) ( 76f152a )
samples: Add sample for PolicyTagManagerClient.create_taxonomy ( #37 ) ( 15feb5d )
3.6.1 (2021-11-12)
Documentation
Improved formatting ( #260 ) ( 5bc3840 )
3.6.0 (2021-11-08)
Features
Added BigQueryDateShardedSpec.latest_shard_resource field ( #256 ) ( 36019b6 )
Added SearchCatalogResult.description field ( 36019b6 )
Added SearchCatalogResult.display_name field ( 36019b6 )
Bug Fixes
deps: drop packaging dependency ( 0dcc0c3 )
deps: require google-api-core >= 1.28.0 ( 0dcc0c3 )
Documentation
attempt to fix table layout ( #249 ) ( 26c19ae )
list oneofs in docstring ( 0dcc0c3 )
3.5.0 (2021-10-28)
Features
add context manager support in client ( #240 ) ( c403d1d )
3.4.3 (2021-10-05)
Bug Fixes
improper types in pagers generation ( 322cf9e )
3.4.2 (2021-09-24)
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( 27fcefa )
Documentation
samples: add entry group greation to custom entry sample ( #215 ) ( 24d78cf )
3.4.1 (2021-09-01)
Bug Fixes
make datacatalog == datacatalog_v1 ( #206 ) ( aefe892 )
Documentation
samples: add samples from docs & reorganize all samples for testing ( #78 ) ( d34aca0 )
3.4.0 (2021-07-28)
Features
Added ReplaceTaxonomy in Policy Tag Manager Serialization API ( 6abe29d )
Added support for BigQuery connections entries ( #196 ) ( 6abe29d )
Added support for BigQuery routines entries ( 6abe29d )
Added support for public tag templates ( 6abe29d )
Added support for rich text tags ( 6abe29d )
Added usage_signal field ( 6abe29d )
Documentation
Documentation improvements ( 6abe29d )
3.3.2 (2021-07-27)
Bug Fixes
enable self signed jwt for grpc ( #192 ) ( 90a0be2 )
Documentation
add Samples section to CONTRIBUTING.rst ( #187 ) ( 317b207 )
Miscellaneous Chores
release as 3.3.2 ( #193 ) ( 7f38774 )
3.3.1 (2021-07-20)
Bug Fixes
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #186 ) ( 915f387 )
3.3.0 (2021-07-01)
Features
add always_use_jwt_access ( #178 ) ( 2cb3cc2 )
Bug Fixes
disable always_use_jwt_access ( #182 ) ( 1bef446 )
Documentation
omit mention of Python 2.7 in ‘CONTRIBUTING.rst’ ( #1127 ) ( #173 ) ( a3d17d4 ), closes #1126
3.2.1 (2021-06-09)
Bug Fixes
deps: add packaging requirement ( #163 ) ( 1cfdb5a )
3.2.0 (2021-05-18)
Features
support self-signed JWT flow for service accounts ( 85e46e1 )
Bug Fixes
add async client to %name_%version/init.py ( 85e46e1 )
3.1.1 (2021-03-29)
Bug Fixes
use correct retry deadline ( #124 ) ( 0c69bc2 )
3.1.0 (2021-03-22)
Features
add client_cert_source_for_mtls argument to transports ( #107 ) ( 59a44bc )
Bug Fixes
remove gRPC send/recv limit; add enums to types/__init__.py ( #87 ) ( e0c40c7 )
Documentation
document enum values with undoc-members option ( #93 ) ( 2dbb3ef )
fix type_ attribute name in the migration guide ( #113 ) ( 2f98f22 )
fix upgrade guide ( #114 ) ( 4bfa587 )
update the upgrade guide to be from 1.0 to 3.0 ( #77 ) ( eed034a )
3.0.0 (2020-11-17)
⚠ BREAKING CHANGES
add common resource paths; expose client transport; rename type attributes to type_ to avoid name collisions. (#64)
Renamed attributes:
* `TagTemplateField.type` -> `TagTemplatedField.type_`
* `ColumnSchema.type` -> `ColumnSchema.type_`
* `Entry.type` -> `Entry.type_`
Features
add common resource paths; expose client transport; rename type attributes to type_ to avoid name collisions ( #64 ) ( f8f797a )
2.0.0 (2020-08-20)
⚠ BREAKING CHANGES
This release has breaking changes. See the 2.0.0 Migration Guide for details.
Features
Migrate API client to Microgenerator ( #54 ) ( 14fbdb8 )
Bug Fixes
update retry config ( #47 ) ( 1c56be7 )
Documentation
fix readme link ( #58 ) ( 55da34c )
1.0.0 (2020-06-17)
Features
release as production/stable ( #25 ) ( 6d4c3df ), closes #24
0.8.0 (2020-05-20)
Features
add restricted_locations to v1; add order to TagField and TagTemplateField in v1beta1; rename field_path to tag_template_field_path in v1beta1; add pagination support to list_taxonomies in v1beta1 ( #20 ) ( 7a890c2 )
0.7.0 (2020-04-09)
Features
add v1 ( #13 ) ( 21629fe )
0.6.0 (2020-02-24)
Features
datacatalog: add sample for create a fileset entry quickstart ( #9977 ) ( 16eaf4b )
datacatalog: undeprecate resource name helper methods, bump copyright year to 2020, tweak docstring formatting (via synth) ( #10228 ) ( 84e5e7c )
add list_entry_groups , list_entries , update_entry_group methods to v1beta1 (via synth) ( #6 ) ( b51902e )
Bug Fixes
datacatalog: deprecate resource name helper methods (via synth) ( #9831 ) ( 22db3f0 )
0.5.0
11-14-2019 12:54 PST
New Features
add policy tag manager clients ( #9804 )
Documentation
add python 2 sunset banner to documentation ( #9036 )
add sample to create a fileset entry ( #9590 )
add sample to create an entry group ( #9584 )
Internal / Testing Changes
change spacing in docs templates (via synth) ( #9743 )
0.4.0
10-23-2019 08:54 PDT
Implementation Changes
remove send/recv msg size limit (via synth) ( #8949 )
New Features
add entry group operations ( #9520 )
Documentation
fix intersphinx reference to requests ( #9294 )
remove CI for gh-pages, use googleapis.dev for api_core refs. ( #9085 )
remove unused import from samples (via synth). ( #9110 )
remove compatability badges from READMEs. ( #9035 )
update intersphinx mapping for requests. ( #8805 )
add ‘search’ sample (via synth). ( #8793 )
0.3.0
07-24-2019 15:58 PDT
Implementation Changes
Allow kwargs to be passed to create_channel (via synth). ( #8425 )
New Features
Add ‘options_’ argument to clients’ ‘get_iam_policy’; pin black version (via synth). ( #8654 )
Add ‘client_options’ support, update list method docstrings (via synth). ( #8503 )
Dependencies
Bump minimum version for google-api-core to 1.14.0. ( #8709 )
Update pin for ‘grpc-google-iam-v1’ to 0.12.3+. ( #8647 )
Documentation
Add get_entry sample (via synth). ( #8725 )
Link to googleapis.dev documentation in READMEs. ( #8705 )
Add generated samples (via synth). ( #8710 )
Add compatibility check badges to READMEs. ( #8288 )
Update docstrings (via synth). ( #8299 )
Internal / Testing Changes
Enable Sample Generator Tool for Data Catalog ( #8708 )
Add docs job to publish to googleapis.dev. ( #8464 )
0.2.0
06-12-2019 12:46 PDT
New Features
Add search capability, tags that match a query, and IAM policies ( #8266 )
Add protos as an artifact to library (via synth). ( #8018 )
Documentation
Add nox session docs , reorder methods (via synth). ( #7766 )
Fix broken link to client library docs in README ( #7713 )
Internal / Testing Changes
Suppress checking ‘cov-fail-under’ in nox default session (via synth). ( #8235 )
Fix coverage in ‘types.py’ (via synth). ( #8150 )
Blacken noxfile.py, setup.py (via synth). ( #8117 )
Add empty lines (via synth). ( #8052 )
0.1.0
04-15-2019 15:46 PDT
New Features
Initial release of Cloud Data Catalog client. ( #7708 )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
