---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/speech/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/speech/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/speech/latest/changelog
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
2.38.0 (latest)
2.37.0
2.36.1
2.35.0
2.34.0
2.33.0
2.32.0
2.31.0
2.30.0
2.29.0
2.28.1
2.27.0
2.26.1
2.25.1
2.24.1
2.23.0
2.22.0
2.21.1
2.20.1
2.19.0
2.18.0
2.17.3
2.16.2
2.15.1
2.14.1
2.13.1
2.12.0
2.11.1
2.10.0
2.9.3
2.8.0
2.7.0
2.6.0
2.5.1
2.4.1
2.3.0
2.2.1
2.1.0
2.0.1
1.3.4
1.2.0
1.1.0
PyPI History
2.38.0 (2026-03-26)
Features
Allow Protobuf 7.x ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Bug Fixes
Require Python 3.9 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Require google-api-core >= 2.11.0 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Improve type checking ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
2.37.0 (2026-02-26)
Features
adds endpointing sensitivity to streaming recognition features ( e40bfd4df5e3ddfcc9d9b187f39cfadf58aafe0c )
2.36.1 (2026-02-05)
Bug Fixes
fix mypy errors (#15494) ( 1f4c2862d77afa893f7a968af57e7adf54d49d0e )
2.36.0 (2026-01-09)
Documentation
Clarify that min_speaker_count and max_speaker_count in SpeakerDiarizationConfig are not currently used ( b3cb4de3ce50c3ec55af2b132d756252a32641f3 )
Update guidance on how to enable speaker diarization; to enable, set the diarization_config field to an empty SpeakerDiarizationConfig message ( b3cb4de3ce50c3ec55af2b132d756252a32641f3 )
Features
add custom prompt config in the request and return prompt in the response ( b3cb4de3ce50c3ec55af2b132d756252a32641f3 )
update min_speaker_count and max_speaker_count to be optional ( b3cb4de3ce50c3ec55af2b132d756252a32641f3 )
2.35.0 (2025-12-17)
Features
auto-enable mTLS when supported certificates are detected ( d2b35b25342bfa389b472f9ce49922e630019fe6 )
check Python and dependency versions in generated GAPICs ( d2b35b25342bfa389b472f9ce49922e630019fe6 )
2.34.0 (2025-10-20)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
2.33.0 (2025-06-11)
Features
add denoiser related configuration ( c522070 )
Documentation
updated description of sample_rate_hertz ( c522070 )
2.32.0 (2025-04-12)
Features
add ALAW support to RecognitionConfig ( c970f9f )
add new fields to CustomClass and PhraseSet.Phrase messages ( c970f9f )
deprecating speaker_tag (int) for speaker_label (string) ( c970f9f )
make transcript_normalization field optional ( c970f9f )
Documentation
miscellaneous clarifications ( c970f9f )
2.31.1 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( 784a3ca )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
2.31.0 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( 87b5382 )
Add support for reading selective GAPIC generation methods from service YAML ( 87b5382 )
2.30.0 (2025-01-02)
Features
expand the set of supported explicit audio encodings ( 6ddf897 )
Documentation
updated ExplicitDecodingConfig documentation to reflect changes related to newly supported encodings ( 6ddf897 )
2.29.0 (2024-12-12)
Features
Add support for opt-in debug logging ( 856e0f0 )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( 856e0f0 )
2.28.1 (2024-11-11)
Bug Fixes
disable universe-domain validation ( #13246 ) ( bcad563 )
2.28.0 (2024-10-24)
Features
Add support for Python 3.13 ( #13209 ) ( 5f2e30d )
2.27.0 (2024-07-30)
Features
[google-cloud-speech] add locations metadata proto file ( a6b3bc7 )
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( 9cdac77 )
Documentation
update the list of automatically detected encodings ( a6b3bc7 )
update the maximum number of files that may be included in a BatchRecognizeRequest ( a6b3bc7 )
2.26.1 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12870 ) ( 4d16761 )
2.26.0 (2024-04-04)
Features
add translation_config in RecognitionConfig message ( 4ed87f1 )
2.25.1 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12387 ) ( 12ce658 )
2.25.0 (2024-02-22)
Features
add API for writing BatchRecognize transcripts in SRT and VTT formats ( b76625a )
Bug Fixes
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12309 ) ( c23398a )
fix ValueError in test__validate_universe_domain ( 2451e88 )
Documentation
update field documentation based on field behavior updates ( b76625a )
2.24.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( 9e8d039 )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( 9e8d039 )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( 9e8d039 )
2.24.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12243 ) ( e14d4b1 )
2.23.0 (2023-12-07)
Features
Add support for python 3.12 ( e9655df )
Introduce compatibility with native namespace packages ( e9655df )
Bug Fixes
Require proto-plus >= 1.22.3 ( e9655df )
Use retry_async instead of retry in async client ( e9655df )
2.22.0 (2023-11-02)
Features
add transcript normalization + m4a audio format support ( 8536b20 )
Support MP3, TranscriptNormalization and SpeakerLabels in STT V1 API ( #11967 ) ( 6a96691 )
Documentation
clarify alternatives for deprecated fields ( 8536b20 )
deprecate BatchRecognizeFileResult.transcript in favor of inline_result.transcript ( 8536b20 )
deprecate BatchRecognizeFileResult.uri in favor of cloud_storage_result.native_format_uri ( 8536b20 )
2.21.1 (2023-10-09)
Documentation
Minor formatting ( 7342cd5 )
2.21.0 (2023-07-05)
Features
Add model and language_codes fields in RecognitionConfig message + enable default _ recognizer ( #524 ) ( 65971c5 )
2.20.1 (2023-07-04)
Bug Fixes
Add async context manager return types ( #522 ) ( d473ad3 )
2.20.0 (2023-05-25)
Features
v2: Add processing strategy to batch recognition requests ( #514 ) ( 5bbf3a4 )
2.19.0 (2023-03-27)
Features
Add support for BatchRecognize ( 2e7ee2d )
Documentation
Fix formatting of request arg in docstring ( #512 ) ( 1edd640 )
Fix the resource name format in comment for CreatePhraseSetRequest ( 2e7ee2d )
2.18.0 (2023-02-28)
Features
Enable “rest” transport in Python for services supporting numeric enums ( a20d0f1 )
Voice Activity Detection - adding speech event time and speech event type ( a20d0f1 )
2.17.3 (2023-02-02)
Documentation
v1: Clarified boost usage ( #491 ) ( 8a2a41a )
2.17.2 (2023-01-30)
Documentation
Clarify boost usage in Reference ( #486 ) ( e75f4a2 )
2.17.1 (2023-01-23)
Bug Fixes
Add context manager return types ( ed80330 )
Documentation
Add documentation for enums ( ed80330 )
2.17.0 (2023-01-16)
Features
Add support for python 3.11 ( #478 ) ( 487242f )
Add typing to proto.Message based class attributes ( c2a079c )
Added new fields to facilitate debugging ( c2a079c )
v1: Added ABNF Grammars field in Speech Adaptation ( ca28974 )
v1p1beta1: Added ABNF Grammars field in Speech Adaptation ( ca28974 )
Bug Fixes
Add dict typing for client_options ( c2a079c )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( c2a079c )
Drop usage of pkg_resources ( c2a079c )
Fix timeout default values ( c2a079c )
Documentation
samples: Code samples for Speech-to-Text V2 ( 5c99f00 )
samples: Snippetgen handling of repeated enum field ( c2a079c )
samples: Snippetgen should call await on the operation coroutine before calling result ( c2a079c )
samples: Update code samples for adaptation and VAD ( #462 ) ( f785ac7 )
2.16.2 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #456 ) ( 01f7324 )
Documentation
samples: Add create_recognizer code sample ( #450 ) ( 4ea3edc )
samples: Add quickstart code sample for STT V2 ( #451 ) ( 5b1ce98 )
2.16.1 (2022-10-05)
Bug Fixes
Remove SpeechHelpers from STT V2 client library ( #452 ) ( acfb24f )
2.16.0 (2022-10-03)
Features
Added Speech-to-Text V2 API ( #447 ) ( b78cda4 )
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #446 ) ( 89ceb17 )
2.15.1 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #425 ) ( 1ad5df9 )
deps: require proto-plus >= 1.22.0 ( 1ad5df9 )
2.15.0 (2022-07-14)
Features
add audience parameter ( 068f8e8 )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #416 ) ( 87ad726 )
require python 3.7+ ( #414 ) ( 8961725 )
2.14.1 (2022-06-06)
Bug Fixes
deps: require protobuf <4.0.0dev ( #400 ) ( a5d2059 )
Documentation
fix changelog header to consistent size ( #401 ) ( 233539d )
samples: resolve library deprecation warnings ( 1d4569d )
2.14.0 (2022-05-11)
Features
Add adaptation proto for v1 api ( #371 ) ( c03a6cc )
Documentation
Add documentation for latest models to RecognitionConfig ( #368 ) ( 75b8379 )
Update client libraries for v1p1beta1 api ( #372 ) ( 39b0a2c )
update docstrings to use absolute links ( #355 ) ( e36910b )
2.13.1 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #334 ) ( b35bd09 )
deps: require proto-plus>=1.15.0 ( b35bd09 )
2.13.0 (2022-02-26)
Features
add api key support ( #313 ) ( 86fe8ea )
Bug Fixes
deps: move libcst to extras ( #322 ) ( de6e7c1 )
resolve DuplicateCredentialArgs error when using credentials_file ( #318 ) ( 1348765 )
Documentation
add generated snippets ( #321 ) ( ca99f96 )
2.12.0 (2022-01-17)
Features
add hint boost in SpeechContext ( 3fdef1f )
add result_end_time to SpeechRecognitionResult ( #291 ) ( 6ac4df6 )
add SpeechAdaptation configuration ( 3fdef1f )
add spoken punctuation and spoken emojis ( 3fdef1f )
add WEBM_OPUS codec ( 3fdef1f )
add word confidence ( 3fdef1f )
added alternative_language_codes to RecognitionConfig ( #290 ) ( 3fdef1f )
2.11.1 (2021-11-01)
Bug Fixes
deps: drop packaging dependency ( 43f25c0 )
deps: require google-api-core >= 1.28.0 ( 43f25c0 )
Documentation
list oneofs in docstring ( 43f25c0 )
2.11.0 (2021-10-25)
Features
add support for python 3.10 ( #274 ) ( cc97a58 )
2.10.0 (2021-10-08)
Features
add context manager support in client ( #268 ) ( a5e2005 )
2.9.3 (2021-10-04)
Documentation
samples: Remove reference to deprecated message “diarization_speaker_count” in favor of diarization_config ( #264 ) ( c1f7f35 )
2.9.2 (2021-09-30)
Bug Fixes
improper types in pagers generation ( a0bac07 )
2.9.1 (2021-09-24)
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( e75ada8 )
2.9.0 (2021-09-20)
Features
add output_config request field ( #252 ) ( b9f856e )
Documentation
samples: fixed model adaptation sample to correctly refer to custom classes ( #246 ) ( 5fa2433 )
2.8.0 (2021-08-19)
Features
Add transcript normalization ( #235 ) ( f76effc )
Documentation
samples: remove io dependency in transcribe samples ( #223 ) ( 928ca3a )
2.7.0 (2021-08-10)
Features
add total_billed_time response field ( #224 ) ( 07b5203 )
2.6.0 (2021-07-28)
Features
v1p1beta1: add total_billed_time response field ( #219 ) ( e7efa67 )
Bug Fixes
enable self signed jwt for grpc ( #217 ) ( f43812c )
v1p1beta1: custom_class_id is required field in CreateCustomClassRequest. ( e7efa67 )
v1p1beta1: phrase_set_id is required field in CreatePhraseSetRequest ( e7efa67 )
Documentation
samples: Add Spoken Punctuation and Emojis code samples ( #155 ) ( cc6b234 )
add Samples section to CONTRIBUTING.rst ( #211 ) ( 4b7e4c4 )
2.5.1 (2021-07-21)
Bug Fixes
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #210 ) ( 44d3f5b )
2.5.0 (2021-07-01)
Features
add always_use_jwt_access ( #191 ) ( 0d84445 )
2.4.1 (2021-06-21)
Documentation
omit mention of Python 2.7 in ‘CONTRIBUTING.rst’ ( #1127 ) ( #178 ) ( 77d8d0e ), closes #1126
2.4.0 (2021-05-22)
Features
add webm opus support ( eb360ae )
support self-signed JWT flow for service accounts ( eb360ae )
Bug Fixes
add async client to %name_%version/init.py ( eb360ae )
2.3.0 (2021-04-08)
Features
Support for spoken punctuation and spoken emojis ( #143 ) ( b6bddbe )
2.2.1 (2021-03-31)
Bug Fixes
use correct retry deadline ( #134 ) ( 07a30a1 )
2.2.0 (2021-03-19)
Features
adds model adaptation sample ( #121 ) ( 24b9424 )
Support output transcript to Google Cloud Storage for LongRunningRecognize ( #128 ) ( 5974564 )
2.1.0 (2021-02-26)
Features
add common resource helpers; expose transport; remove gRPC send/recv limits ( #100 ) ( b4700a6 )
add from_service_account_info factory ( 3bed0b4 )
adds new multi region sample ( #96 ) ( a103f09 )
v1p1beta1: support Model Adaptation ( #104 ) ( 3bed0b4 )
Bug Fixes
Remove incorrect comment on enhanced models ( #95 ) ( 8a02cee )
Documentation
fix sphinx identifiers ( 3bed0b4 )
updated setup documentation to point to python-speech instead of python-docs-samples ( #89 ) ( 722e86e )
2.0.1 (2020-11-16)
Bug Fixes
deleted a line duplicating the call to the recognizer ( #83 ) ( 3ef6ce5 )
migrated samples to speech 2.0.0 ( #78 ) ( 47dd992 )
2.0.0 (2020-09-24)
⚠ BREAKING CHANGES
migrate to microgenerator (#61)
Features
Migrate to microgenerator ( #61 ) ( 283b49d ). See the migration guide for details.
Documentation
remove example usage from READMe ( #46 ) ( 4214630 )
1.3.2 (2020-02-03)
Bug Fixes
speech: increase default timeout for v1p1beta1 (via synth) ( #9999 ) ( e9b4919 )
speech: increase timeout values in client config (via synth) ( #9922 ) ( 8d34bea )
speech: mark Recognize idempotent (via synth) ( #9874 ) ( a69e08c )
speech: move ‘speaker_tag’ field from ‘SpeakerDiarizationConfig’ to ‘WordInfo’ (via synth) ( #9576 ) ( 2ba5ab9 )
speech: re-add unused speaker_tag; update spacing in docs templates (via synth) ( #9765 ) ( e1c5a54 )
1.3.1
12-06-2019 13:05 PST
Implementation Changes
Increase timeout values in client config (via synth). ( #9922 )
1.3.0
11-21-2019 14:03 PST
Implementation Changes
Mark Recognize as idempotent (via synth). ( #9874 )
Re-add unused speaker_tag ; update spacing in docs templates (via synth). ( #9765 )
Move speaker_tag field from SpeakerDiarizationConfig to WordInfo (via synth). ( #9576 )
Remove send/recv msg size limit (via synth). ( #8969 )
New Features
Add speaker diarization configuration support (via synth). ( #9202 )
Add SpeakerDiarizationConfig , deprecate enable_speaker_diarization and diarization_speaker_count (via synth). ( #8795 )
Documentation
Add python 2 sunset banner to documentation. ( #9036 )
Reorder samples. ( #9313 )
Update docstrings (via synth). ( #9292 )
Fix intersphinx reference to requests. ( #9294 )
Add generated code samples. ( #9153 )
Remove CI for gh-pages, use googleapis.dev for api_core refs. ( #9085 )
Remove compatibility badges from READMEs. ( #9035 )
Update intersphinx mapping for requests. ( #8805 )
Internal / Testing Changes
Add v1p1beta1 systests for longrunning / streaming recognize. ( #9287 )
Add v1 systests for longrunning / streaming recognize. ( #9285 )
Update samples manifest (via synth). ( #9211 )
1.2.0
07-24-2019 17:35 PDT
New Features
Add ‘client_options’ support (via synth). ( #8534 )
Dependencies
Bump minimum version for google-api-core to 1.14.0. ( #8709 )
Pin black version (via synth). ( #8596 )
Documentation
Link to googleapis.dev documentation in READMEs. ( #8705 )
Add compatibility check badges to READMEs. ( #8288 )
1.1.0
06-27-2019 16:55 PDT
Implementation Changes
Allow kwargs to be passed to ‘create_channel’ (via synth). ( #8428 )
Remove classifier for Python 3.4 for end-of-life. ( #7535 )
New Features
Increase speech max received msg size to 256 MiB ( #8338 )
Add MP3 to Audio Encoding and add boost to Speech Context (via synth). ( #8109 )
Add Recognition Metadata (via synth). ( #7961 )
Documentation
Update to show ‘google-cloud-speech’ is GA. ( #8453 )
Tweak ‘SpeechContext’ docstring (via synth). ( #8223 )
Internal / Testing Changes
All: Add docs job to publish to googleapis.dev. ( #8464 )
(Re)-blacken (via synth). ( #8446 )
Add disclaimer to auto-generated template files (via synth). ( #8328 )
Suppress checking ‘cov-fail-under’ in nox default session (via synth). ( #8252 )
Fix coverage in ‘types.py’ (via synth). ( #8164 )
Blacken noxfile.py, setup.py (via synth). ( #8132 )
Add empty lines. ( #8072 )
Update noxfile (via synth). ( #7836 )
Add nox session docs (via synth). ( #7782 )
1.0.0
03-18-2019 08:05 PDT
Implementation Changes
Remove unused message exports. ( #7275 )
New Features
Promote google-cloud-speech to GA ( #7525 )
Documentation
Updated client library documentation URLs. ( #7307 )
Internal / Testing Changes
Speech: copy lintified proto files (via synth).
Add clarifying comment to blacken nox target. ( #7404 )
Copy proto files alongside protoc versions. Remove unneeded utf-8 header.
0.36.3
01-31-2019 09:57 PST
New Features
Add ‘RecognitionConfig.audio_channel_count’ field via synth. ( #7240 )
Documentation
Modify file headers. ( #7158 )
Internal / Testing Changes
Add protos as an artifact to library ( #7205 )
0.36.2
01-10-2019 15:36 PST
Implementation Changes
Protoc-generated serialization update. ( #7106 )
Documentation
Regenerate speech to change quote chars in docstr.
Pick up stub docstring fix in GAPIC generator. ( #6982 )
0.36.1
12-18-2018 09:46 PST
Implementation Changes
Import iam.policy from google.api_core . ( #6741 )
Pick up fixes to GAIPC generator. ( #6508 )
Add result_end_time , docstring changes via synth. ( #6462 )
Assorted synth fixups / cleanups ( #6400 )
Fix client_info bug, update docstrings and timeouts. ( #6421 )
Re-generate library using speech/synth.py ( #5979 )
Dependencies
Bump minimum api_core version for all GAPIC libs to 1.4.1. ( #6391 )
Documentation
Document Python 2 deprecation ( #6910 )
Clarify passed arguments in speech examples. ( #6857 )
Docs: normalize use of support level badges ( #6159 )
Fix client library URL. ( #6052 )
Prep docs for repo split. ( #6017 )
Internal / Testing Changes
Synth.metadata. ( #6868 )
Update noxfile.
Blacken all gen’d libs ( #6792 )
Omit local deps ( #6701 )
Run black at end of synth.py ( #6698 )
Run Black on Generated libraries ( #6666 )
Add templates for flake8, coveragerc, noxfile, and black. ( #6642 )
Add / fix badges for PyPI / versions. ( #6158 )
Use new Nox ( #6175 )
0.36.0
New Features
Re-generate the library to pick up changes and new features in the underlying API. ( #5915 )
Documentation
Fix broken links to description of ‘Beta’ ( #5917 )
Replace links to ‘/stable/’ with ‘/latest/’. ( #5901 )
0.35.0
Implementation Changes
Re-generated the library to pick up new API features. (#5577)
Internal / Testing Changes
Add Test runs for Python 3.7 and remove 3.4 (#5295)
Avoid overwriting ‘ module ’ of messages from shared modules. (#5364)
Modify system tests to use prerelease versions of grpcio (#5304)
0.34.0
Implementation Changes
Regenerate GAPIC to account for the removal of GoogleDataCollectionConfig and google_data_collection_opt_in (#5235)
0.33.0
New Features
Add Audio Logging and Recognition Metadata. (#5123)
Internal / Testing Changes
Fix bad trove classifier
0.32.1
Dependencies
Update dependency range for api-core to include v1.0.0 releases (#4944)
Testing and internal changes
Install local dependencies when running lint (#4936)
Re-enable lint for tests, remove usage of pylint (#4921)
Normalize all setup.py files (#4909)
0.31.1
Bugfixes
Fix speech helpers to properly pass retry and timeout args. (#4828, #4830)
0.31.0
This is the (hopefully) final release candidate before 1.0.
Breaking Changes
The deprecated Speech layer (deprecated since 0.27.0) has been removed. If you are still using it, the migration guide is still available.
The following changes are technically breaking but very unlikely to affect you directly:
google.cloud.gapic.speech.v1 moved to google.cloud.speech_v1.gapic , in accordance with more recent clients.
google.cloud.proto.speech.v1 moved to google.cloud.speech_v1.proto , in accordance with more recent clients.
Dependencies
Removed dependency on google-gax .
Added dependency on google-api-core , its replacement.
0.30.0
Documentation
Added link to “Python Development Environment Setup Guide” in
project README (#4187, h/t to @michaelawyu)
Dependencies
Upgrading to google-cloud-core >= 0.28.0 and adding dependency
on google-api-core (#4221, #4280)
Deferring to google-api-core for grpcio and
googleapis-common-protos dependencies (#4096, #4098)
PyPI: https://pypi.org/project/google-cloud-speech/0.30.0/
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
