---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/documentai/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/documentai/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/documentai/latest/changelog
  title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
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
Changelog
Stay organized with collections
Save and categorize content based on your preferences.
3.14.0 (latest)
3.13.0
3.12.0
3.10.0
3.9.0
3.8.0
3.7.0
3.6.0
3.5.0
3.4.0
3.3.0
3.2.0
3.1.0
3.0.1
2.35.0
2.34.0
2.33.0
2.32.0
2.30.0
2.29.3
2.28.0
2.27.1
2.26.0
2.25.0
2.24.2
2.23.0
2.22.0
2.21.1
2.20.2
2.19.0
2.18.0
2.17.0
2.16.1
2.15.0
2.14.0
2.13.0
2.12.0
2.11.0
2.10.0
2.9.1
2.8.0
2.7.0
2.6.0
2.5.0
2.4.1
2.3.0
2.2.0
2.1.0
2.0.3
1.5.1
1.4.2
1.3.0
1.2.1
1.1.0
1.0.0
0.5.2
0.4.0
0.3.0
0.2.0
0.1.0
PyPI History
3.14.0 (2026-04-02)
Features
Update comments for proto fields ( c36aa6169035fdb14bf84b0e56e4f81291600b5a )
Added a fields for image and table annotation output ( c36aa6169035fdb14bf84b0e56e4f81291600b5a )
3.13.0 (2026-03-26)
Features
Allow Protobuf 7.x ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Bug Fixes
Require Python 3.9 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Require google-api-core >= 2.11.0 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Improve type checking ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
3.12.0 (2026-03-23)
Features
Add a field for upgrading previous processor version when fine tuning ( ee7dd7dc168ecf943440cef38efff348e8eff095 )
3.11.0 (2026-03-05)
Features
Added a field for enabling image and table annotation for layout parser processor ( 6120fb0db084f5e8d1502fb1bb37594ac9976f6e )
3.10.0 (2026-02-12)
Documentation
Updated comments for various fields and messages ( 5371e8e931dfba1d504ac2ffbd48a7f4abdcc158 )
Features
The method ReviewDocument in .google.cloud.documentai.v1beta3.DocumentProcessorService is deprecated ( 5371e8e931dfba1d504ac2ffbd48a7f4abdcc158 )
A new field enable_table_split is added to message .google.cloud.documentai.v1beta3.OcrConfig.LayoutParsingParams ( 5371e8e931dfba1d504ac2ffbd48a7f4abdcc158 )
Added new messages Documents and RawDocuments for inline document input ( 5371e8e931dfba1d504ac2ffbd48a7f4abdcc158 )
The field skip_human_review in messages .google.cloud.documentai.v1beta3.ProcessRequest and .google.cloud.documentai.v1beta3.BatchProcessRequest is deprecated ( 5371e8e931dfba1d504ac2ffbd48a7f4abdcc158 )
A new field document_prompt is added to message .google.cloud.documentai.v1beta3.DocumentSchema ( 5371e8e931dfba1d504ac2ffbd48a7f4abdcc158 )
A new field revisions is added to message .google.cloud.documentai.v1beta3.Evaluation ( 5371e8e931dfba1d504ac2ffbd48a7f4abdcc158 )
A new field document_type is added to message .google.cloud.documentai.v1beta3.ImportDocumentsRequest ( 5371e8e931dfba1d504ac2ffbd48a7f4abdcc158 )
Bug Fixes
Removed the SpannerIndexingConfig message and the spanner_indexing_config field from .google.cloud.documentai.v1beta3.Dataset BREAKING CHANGE: The SpannerIndexingConfig message and the spanner_indexing_config field within the Dataset message have been removed. Client code referencing these will need to stop referencing these in case of an error ( 5371e8e931dfba1d504ac2ffbd48a7f4abdcc158 )
3.9.0 (2026-01-29)
Documentation
Fixed language issues in multiple message field descriptions ( 38754bbd8765298482b679b027e9bc0ac5a66bb3 )
Regenerated REST and RPC Document AI documentation to include missing changes from September 2024 to November 2025 ( 38754bbd8765298482b679b027e9bc0ac5a66bb3 )
3.8.0 (2026-01-08)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
3.7.0 (2025-10-16)
Documentation
The field training_method in TrainProcessorVersionRequest is now marked as optional ( 4dc7381c2121c9e13b24cb3aae59523f8ff31a3a )
A comment for field latest_evaluation in message .google.cloud.documentai.v1beta3.ProcessorVersion is changed ( 98ee71abc0f97c88239b50bf0e0827df19630def )
A comment for field training_method in message .google.cloud.documentai.v1beta3.TrainProcessorVersionRequest is changed ( 98ee71abc0f97c88239b50bf0e0827df19630def )
A comment for field processor_version_source in message .google.cloud.documentai.v1beta3.ImportProcessorVersionRequest is changed ( 98ee71abc0f97c88239b50bf0e0827df19630def )
A comment for field deprecation_info in message .google.cloud.documentai.v1beta3.ProcessorVersion is changed ( 98ee71abc0f97c88239b50bf0e0827df19630def )
A comment for field create_time in message .google.cloud.documentai.v1beta3.Processor is changed ( 98ee71abc0f97c88239b50bf0e0827df19630def )
A comment for field document_schema in message .google.cloud.documentai.v1beta3.ProcessorVersion is changed ( 98ee71abc0f97c88239b50bf0e0827df19630def )
A comment for field kms_key_name in message .google.cloud.documentai.v1beta3.ProcessorVersion is changed ( 98ee71abc0f97c88239b50bf0e0827df19630def )
A comment for field create_time in message .google.cloud.documentai.v1beta3.ProcessorVersion is changed ( 98ee71abc0f97c88239b50bf0e0827df19630def )
A comment for field kms_key_version_name in message .google.cloud.documentai.v1beta3.ProcessorVersion is changed ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Features
Added new messages EntityValidationOutput and EntitiesRevision ( 4dc7381c2121c9e13b24cb3aae59523f8ff31a3a )
Added new fields entity_validation_output , entities_revisions , and entities_revision_id to the Document message ( 4dc7381c2121c9e13b24cb3aae59523f8ff31a3a )
A new field signature_value is added to message .google.cloud.documentai.v1beta3.Document ( 98ee71abc0f97c88239b50bf0e0827df19630def )
A new message EntitiesRevision is added ( 98ee71abc0f97c88239b50bf0e0827df19630def )
A new field entities_revisions is added to message .google.cloud.documentai.v1beta3.Document ( 98ee71abc0f97c88239b50bf0e0827df19630def )
A new field entity_validation_output is added to message .google.cloud.documentai.v1beta3.Document ( 98ee71abc0f97c88239b50bf0e0827df19630def )
A new field method is added to message .google.cloud.documentai.v1beta3.DocumentSchema ( 98ee71abc0f97c88239b50bf0e0827df19630def )
A new enum Method is added ( 98ee71abc0f97c88239b50bf0e0827df19630def )
A new field method is added to message .google.cloud.documentai.v1beta3.Document ( 98ee71abc0f97c88239b50bf0e0827df19630def )
A new message EntityValidationOutput is added ( 98ee71abc0f97c88239b50bf0e0827df19630def )
A new field entities_revision_id is added to message .google.cloud.documentai.v1beta3.Document ( 98ee71abc0f97c88239b50bf0e0827df19630def )
A new field annotations is added to message .google.cloud.documentai.v1beta3.Document ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
3.6.0 (2025-08-29)
Features
Added config options for derived fields and signature detection. Some annotation changes changes to mark fields explicitly output only (no changes in semantics just readability) ( 6d0eeb7 )
Documentation
A comment for field create_time in message .google.cloud.documentai.v1.Processor is changed to describe as output only. ( 6d0eeb7 )
A comment for field create_time in message .google.cloud.documentai.v1.ProcessorVersion is changed to describe as output only. ( 6d0eeb7 )
A comment for field deprecation_info in message .google.cloud.documentai.v1.ProcessorVersion is changed to describe as output only. ( 6d0eeb7 )
A comment for field document_schema in message .google.cloud.documentai.v1.ProcessorVersion is changed to describe as output only. ( 6d0eeb7 )
A comment for field kms_key_name in message .google.cloud.documentai.v1.ProcessorVersion is changed to describe as output only. ( 6d0eeb7 )
A comment for field kms_key_version_name in message .google.cloud.documentai.v1.ProcessorVersion is changed to describe as output only. ( 6d0eeb7 )
A comment for field latest_evaluation in message .google.cloud.documentai.v1.ProcessorVersion is changed to describe as output only. ( 6d0eeb7 )
3.5.0 (2025-04-29)
Features
v1beta3: [google-cloud-documentai] Added config options to enable table annotation and image extraction ( #13847 ) ( cd64ac0 )
v1beta3: Add image block and blob asset in Document proto ( 3c829a0 )
v1beta3: Added config options to enable image annotation ( 3c829a0 )
3.4.0 (2025-04-23)
Features
[google-cloud-documentai] Added a field for enabling returning images and bounding boxes from layout parser processor ( #13822 ) ( 77e38cd )
3.3.0 (2025-03-19)
Features
[google-cloud-documentai] Added config options to enable LLM ( ee05aca )
Added config options to enable LLM layout parsing ( #13680 ) ( ee05aca )
3.2.1 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( feb5353 )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
3.2.0 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( b0e1f43 )
Add support for reading selective GAPIC generation methods from service YAML ( b0e1f43 )
Documentation
mark fields as unused ( b0e1f43 )
3.1.0 (2024-12-12)
Features
Add support for opt-in debug logging ( 819e8fb )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( 819e8fb )
3.0.1 (2024-11-11)
Bug Fixes
disable universe-domain validation ( #13242 ) ( b479ff8 )
3.0.0 (2024-10-28)
⚠ BREAKING CHANGES
Remove google.cloud.documentai_v1beta2 ( #13218 )
Bug Fixes
Remove google.cloud.documentai_v1beta2 ( #13218 ) ( a98df65 )
2.35.0 (2024-10-24)
Features
Add support for Python 3.13 ( #13205 ) ( 4f4fdcf )
2.34.0 (2024-10-23)
Features
[google-cloud-documentai] Updated the exponential backoff settings for the Document AI ProcessDocument and BatchProcessDocuments methods ( 91e9f9f )
Add RESOURCE_EXHAUSTED to retryable status codes for ProcessDocument method ( 91e9f9f )
Add RESOURCE_EXHAUSTED to retryable status codes for ProcessDocument method ( 98a4a8d )
Updated the exponential backoff settings for the Document AI ProcessDocument and BatchProcessDocuments methods ( 98a4a8d )
2.33.0 (2024-10-08)
Features
Removed deprecated api versions ( eeab5c1 )
2.32.0 (2024-09-06)
Features
[google-cloud-documentai] Add API fields for the descriptions of entity type and property in the document schema ( #13067 ) ( 1a2b325 )
2.31.0 (2024-08-08)
Features
A new field gen_ai_model_info is added to message .google.cloud.documentai.v1.ProcessorVersion ( f16067b )
A new field imageless_mode is added to message .google.cloud.documentai.v1.ProcessRequest ( f16067b )
2.30.0 (2024-07-31)
Features
[google-cloud-documentai] A new field imageless_mode is added to message .google.cloud.documentai.v1.ProcessRequest ( #12966 ) ( 60d0728 )
2.29.3 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( ba1064f )
2.29.2 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12866 ) ( 40e1810 )
2.29.1 (2024-06-24)
Documentation
Update the comment to add a note about documentai.processors.create permission ( 9318d94 )
2.29.0 (2024-06-05)
Features
[google-cloud-documentai] Make Layout Parser generally available in V1 ( #12762 ) ( 9fd16ad )
2.28.0 (2024-05-29)
Features
[google-cloud-documentai] Make Layout Parser generally available in V1 ( #12745 ) ( c5b9322 )
2.27.1 (2024-05-16)
Documentation
[google-cloud-documentai] clarify the unavailability of some features ( #12699 ) ( 3ec5a2c )
updated comments ( 9722673 )
2.27.0 (2024-04-24)
Features
Support Chunk header and footer in Doc AI external proto ( 2615bd3 )
Documentation
Keep the API doc up-to-date with recent changes ( 2615bd3 )
2.26.0 (2024-04-17)
Features
A new field foundation_model_tuning_options is added to message TrainProcessorVersionRequest ( 69cfd79 )
A new message FoundationModelTuningOptions is added ( 69cfd79 )
Documentation
updated comments ( 69cfd79 )
2.25.0 (2024-04-03)
Features
Support a new Layout Processor in Document AI ( f008893 )
Documentation
keep the API doc up-to-date with recent changes ( f008893 )
2.24.2 (2024-03-22)
Documentation
A comment for field processor_version_source in message .google.cloud.documentai.v1beta3.ImportProcessorVersionRequest is changed ( 5499d6c )
2.24.1 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12384 ) ( c69966f )
2.24.0 (2024-02-22)
Features
A new field display_name is added to message DocumentSchema ( 38dde99 )
A new field display_name is added to message DocumentSchema ( aae7bf5 )
A new field labels is added to messages ProcessRequest and BatchProcessRequest ( 38dde99 )
A new field labels is added to messages ProcessRequest and BatchProcessRequest ( aae7bf5 )
A new field schema_override is added to message ProcessOptions ( aae7bf5 )
A new field foundation_model_tuning_options is added to message TrainProcessorVersionRequest ( 38dde99 )
A new message FoundationModelTuningOptions is added ( 38dde99 )
Bug Fixes
[Many APIs] fix ValueError in test__validate_universe_domain ( #12283 ) ( f20b41a )
deprecate Dataset.document_warehouse_config ( 38dde99 )
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12306 ) ( 1e787f2 )
Documentation
[google-cloud-documentai] updated comments ( #12321 ) ( 20cd51c )
updated comments ( 38dde99 )
updated comments ( aae7bf5 )
2.23.0 (2024-02-06)
Features
expose model_type in v1 processor, so that user can see the model_type after get or list processor version ( 81d36fc )
Bug Fixes
Add google-auth as a direct dependency ( 81d36fc )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( 81d36fc )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( 81d36fc )
2.22.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12240 ) ( d51f832 )
2.21.1 (2023-12-13)
Documentation
[google-cloud-documentai] Clarify Properties documentation ( #12118 ) ( 35c180e )
2.21.0 (2023-12-07)
Features
Add support for python 3.12 ( fb6f9db )
Introduce compatibility with native namespace packages ( fb6f9db )
Bug Fixes
Require proto-plus >= 1.22.3 ( fb6f9db )
Use retry_async instead of retry in async client ( fb6f9db )
2.20.2 (2023-11-02)
Documentation
updated comments ( #11950 ) ( a0da408 )
2.20.1 (2023-10-10)
Documentation
minor comment update ( #11797 ) ( 1360d6b )
2.20.0 (2023-09-25)
Features
Added ListDocuments() method for Document AI Workbench training documents ( 2fb9078 )
Added SummaryOptions to ProcessOptions for the Summarizer processor ( 2fb9078 )
make page_range field public ( 2fb9078 )
Bug Fixes
OcrConfig.compute_style_info is deprecated. Use PremiumFeatures.compute_style_info instead. ( 2fb9078 )
2.19.0 (2023-09-21)
Features
added field Processor.processor_version_aliases ( c7c3e41 )
added field RawDocument.display_name ( c7c3e41 )
Bug Fixes
deprecated OcrConfig.compute_style_info ( c7c3e41 )
2.18.1 (2023-09-19)
Documentation
update client libraries for Enterprise OCR add-ons ( #11642 ) ( 09cf3ae )
2.18.0 (2023-07-25)
Features
exposed Import PV external_processor_version_source to v1beta3 public ( #11517 ) ( 7915645 )
2.17.0 (2023-07-17)
Features
add OcrConfig and ProcessOptions ( 0510cbb )
v1beta2: added http configuration and document publishing ( 0510cbb )
v1beta3: added ImportDocuments, GetDocument and BatchDeleteDocuments RPCs ( 0510cbb )
Bug Fixes
v1beta2: removed id field from Document message ( 0510cbb )
2.16.1 (2023-07-05)
Bug Fixes
Add async context manager return types ( #11446 ) ( 37682b7 )
2.16.0 (2023-06-19)
Features
add IMPORTING enum to State in processor.proto ( d402fd5 )
add PropertyMetadata and EntityTypeMetadata to document_schema.proto ( d402fd5 )
add REPLACE enum to OperationType in document.proto ( d402fd5 )
add StyleInfo to document.proto ( d402fd5 )
2.15.0 (2023-03-24)
Features
v1beta3: Add ImportProcessorVersion ( f3aa285 )
Documentation
Fix formatting of request arg in docstring ( f3aa285 )
2.14.0 (2023-03-09)
Features
v1beta3: Added enable_image_quality_scores field in OcrConfig ( bee07d2 )
v1beta3: Added enable_symbol field in OcrConfig ( bee07d2 )
v1beta3: Added hints.language_hints field in OcrConfig ( bee07d2 )
2.13.0 (2023-02-21)
Features
Added Training and Evaluation functions, request, responses and metadata to document_processor_service.proto ( #463 ) ( 6ff81aa )
2.12.0 (2023-02-08)
Features
Enable “rest” transport in Python for services supporting numeric enums ( #459 ) ( 02d06d6 )
2.11.0 (2023-02-07)
Features
Added EvaluationReference to evaluation.proto ( f374763 )
Added latest_evaluation to processor.proto ( f374763 )
2.10.0 (2023-01-25)
Features
Added advanced_ocr_options field in OcrConfig ( #451 ) ( 5e1bb96 )
2.9.1 (2023-01-20)
Bug Fixes
Add context manager return types ( 61256d1 )
Documentation
Add documentation for enums ( 61256d1 )
2.9.0 (2023-01-17)
Features
v1: Exposed GetProcessorType ( #446 ) ( 6c38227 )
2.8.0 (2023-01-17)
Features
Exposed GetProcessorType to v1beta3 ( #444 ) ( e5835f4 )
Documentation
samples: Removed Samples after Migration to Mono Repo ( #438 ) ( 8c7f52b )
2.7.0 (2023-01-10)
Features
Add support for python 3.11 ( #440 ) ( e3da68f )
2.6.0 (2022-12-15)
Features
Added process_options field in ProcessRequest in document_processor_service.proto ( d923e53 )
Added sample_document_uris field in ProcessorType in processor_type.proto ( d923e53 )
Added sharding_config field in DocumentOutputConfig.GcsOutputConfig in document_io.proto ( d923e53 )
2.5.0 (2022-12-13)
Features
Added sharding_config field in DocumentOutputConfig.GcsOutputConfig in document_io.proto ( #430 ) ( 80df6cb )
2.4.1 (2022-12-07)
Bug Fixes
deps: Require google-api-core >=1.34.0, >=2.11.0 ( #424 ) ( ea874a7 )
2.4.0 (2022-11-27)
Features
Added field_mask field in DocumentOutputConfig.GcsOutputConfig in document_io.proto ( #415 ) ( 575121f )
Documentation
samples: Fix Typos in Batch process & get processor Samples ( 7bdedd1 )
2.3.0 (2022-11-14)
Features
Added TrainProcessorVersion, EvaluateProcessorVersion, GetEvaluation, and ListEvaluations v1beta3 APIs ( #412 ) ( caefaa7 ), closes #410
2.2.0 (2022-11-14)
Features
New APIs added to reflect updates to the filestore service ( #408 ) ( f8b06f2 )
Documentation
samples: Updated code samples for 2.1.0 release ( #406 ) ( f64a735 )
2.1.0 (2022-11-09)
Features
Added font_family to document.proto ( #404 ) ( 1038a05 )
Documentation
samples: Added extra exception handling to operation samples ( #393 ) ( fa0f715 )
2.0.3 (2022-10-10)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #388 ) ( fd72e6e )
2.0.2 (2022-10-03)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #385 ) ( d65a0c7 )
Documentation
samples: Added Processor Version Samples ( #382 ) ( f9ce801 )
2.0.1 (2022-09-13)
Documentation
samples: Updated Samples for v2.0.0 Client Library ( #365 ) ( 74f2249 )
2.0.0 (2022-08-17)
⚠ BREAKING CHANGES
v1beta3: Added Processor Management and Processor Version support to v1 library
v1: Added Processor Management and Processor Version support to v1 library
v1beta3: Changed the name field for ProcessRequest and BatchProcessorRequest to accept * so the name field can accept Processor and ProcessorVersion.
Features
v1: Added corrected_key_text, correct_value_text to FormField object in document.proto ( 78e7fba )
v1: Added field_mask to ProcessRequest object in document_processor_service.proto ( 78e7fba )
v1: Added integer_values, float_values and non_present to Entity object in document.proto ( 78e7fba )
v1: Added OperationMetadata resource ( 78e7fba )
v1: Added parent_ids to Revision object in document.proto ( 78e7fba )
v1: Added Processor Management and Processor Version support to v1 library ( 78e7fba )
v1beta3: Added Barcode support ( 78e7fba )
v1beta3: Added corrected_key_text, correct_value_text to FormField object in document.proto ( 78e7fba )
v1beta3: Added integer_values, float_values and non_present to Entity object in document.proto ( 78e7fba )
v1beta3: Added OperationMetadata resource ( 78e7fba )
v1beta3: Added parent_ids to Revision object in document.proto ( 78e7fba )
v1beta3: Added Processor Management and Processor Version support to v1 library ( 78e7fba )
Documentation
fix minor docstring formatting ( 78e7fba )
samples: Added Human Review Request Sample ( #357 ) ( 1a5ebea )
1.5.1 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #360 ) ( f6478ef )
deps: require proto-plus >= 1.22.0 ( f6478ef )
1.5.0 (2022-07-15)
Features
add audience parameter ( a904139 )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #344 ) ( a904139 )
require python 3.7+ ( #348 ) ( 0613329 )
1.4.2 (2022-06-03)
Bug Fixes
deps: require protobuf <4.0.0dev ( #334 ) ( fbdc01b )
Documentation
fix changelog header to consistent size ( #333 ) ( bf23383 )
1.4.1 (2022-04-28)
Bug Fixes
mark Document.Entity.type as REQUIRED in all versions ( #317 ) ( 2d82c64 )
remove Document.Entity.bounding_poly_for_demo_frontend from v1beta2 ( 2d82c64 )
1.4.0 (2022-03-19)
Features
add content field in TextAnchor ( #294 ) ( f8b3e05 )
1.3.0 (2022-03-05)
Features
add symbols field, and auto-format comments ( #277 ) ( ca016dd )
add api key support ( #267 ) ( 061eb45 )
add question_id field in ReviewDocumentOperationMetadata ( #269 ) ( 1c61b73 )
add question_id field in ReviewDocumentOperationMetadata ( #273 ) ( 530f2ba )
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #285 ) ( 573deee )
deps: require proto-plus>=1.15.0 ( 573deee )
remove libcst from setup_requires ( #276 ) ( 56c96e4 )
resolve DuplicateCredentialArgs error when using credentials_file ( 530f2ba )
1.2.1 (2022-01-17)
Bug Fixes
deps: drop packaging dependency ( 038a736 )
deps: require google-api-core >= 1.28.0 ( 038a736 )
1.2.0 (2021-10-14)
Features
add support for python 3.10 ( #228 ) ( 86d7cd6 )
1.1.0 (2021-10-08)
Features
add context manager support in client ( #224 ) ( 8b65652 )
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( a95fac8 )
improper types in pagers generation ( fd5dd70 )
v1beta2: enable self signed jwt for grpc ( #191 ) ( 14e7765 )
v1beta2: Update DocumentUnderstandingService default_host from a regional endpoint to non-regional ( #195 ) ( 090bcc5 )
1.0.0 (2021-07-26)
Features
add always_use_jwt_access ( 35e3b74 )
add the processor management methods ( 35e3b74 )
bump release level to production/stable ( #151 ) ( 1e6b470 )
Move CommonOperationMetadata for potential reuse ( #157 ) ( a1a92b2 )
update ReviewDocumentRequest to allow set priority and enable validation ( #172 ) ( 35e3b74 )
v1beta3: update document.proto, add the processor management methods ( #160 ) ( 54bc0e9 )
v1: Move CommonOperationMetadata into a separate file for potential reuse ( #158 ) ( c309f8f )
Bug Fixes
deps: add packaging requirement ( #162 ) ( f09f807 )
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #180 ) ( 8eab36e )
disable always_use_jwt_access ( 35e3b74 )
enable self signed jwt for grpc ( #184 ) ( 1e35b42 )
exclude docs and tests from package ( #159 ) ( 1325677 )
Documentation
omit mention of Python 2.7 in ‘CONTRIBUTING.rst’ ( #1127 ) ( #164 ) ( baba888 )
add Samples section to CONTRIBUTING.rst ( #181 ) ( b0f4c7a )
0.5.0 (2021-05-28)
Features
add confidence field to the PageAnchor.PageRef in document.proto. ( be671a8 )
support self-signed JWT flow for service accounts ( be671a8 )
Use non-regionalized default host name for documentai.googleapis.com ( be671a8 )
Bug Fixes
add async client to %name_%version/init.py ( be671a8 )
Parsing pages, but should be paragraphs ( #147 ) ( c4aca1b )
0.4.0 (2021-03-25)
Features
add ‘from_service_account_info’ factory to clients ( d6f183a )
add common resource path helpers, expose client transport ( #43 ) ( 4918e62 )
add documentai v1 ( #101 ) ( 74fabb5 )
add from_service_account_info factory and fix sphinx identifiers ( #80 ) ( d6f183a )
Bug Fixes
added if statement to filter out dir blob files ( #63 ) ( 7f7f541 )
adds comment with explicit hostname change ( #94 ) ( bb639f9 )
fix sphinx identifiers ( d6f183a )
moves import statment inside region tags ( #71 ) ( a04fbea )
remove client recv msg limit and add enums to types/__init__.py ( #72 ) ( c94afd5 )
removes C-style semicolons and slash comments ( #59 ) ( 1b24bfd )
samples: swaps ‘continue’ for ‘return’ ( #93 ) ( dabe48e )
Documentation
fix pypi link ( #46 ) ( 5162674 )
samples: new Doc AI samples for v1beta3 ( #44 ) ( cc8c58d )
0.3.0 (2020-09-30)
Features
add async client ( #26 ) ( ea83083 )
add v1beta3 ( #34 ) ( 6145da3 )
Bug Fixes
python: change autodoc_default_flags to autodoc_default_options ( #27 ) ( 4eefc0a )
0.2.0 (2020-05-28)
Features
add mtls support ( #18 ) ( 50814b4 )
0.1.0 (2020-04-01)
Features
documentai: bump copyright year to 2020, tweak docstring formatting (via synth) [ #10230 ) ( 329dbcf )
documentai: initial generation of documentai ( #9623 ) ( fc3d29f )
add v1beta2, remove v1beta1 ( #13 ) ( 1d8efd9 )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],[]]
