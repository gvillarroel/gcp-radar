---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/texttospeech/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/texttospeech/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/texttospeech/latest/changelog
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
2.36.0 (latest)
2.35.0
2.34.0
2.33.0
2.32.0
2.31.0
2.30.0
2.29.0
2.28.0
2.27.0
2.26.0
2.25.0
2.24.0
2.23.0
2.22.0
2.21.1
2.20.0
2.19.0
2.18.0
2.17.2
2.16.5
2.15.1
2.14.2
2.13.0
2.12.3
2.11.1
2.10.2
2.9.1
2.8.0
2.7.1
2.6.0
2.5.3
2.4.0
2.3.0
2.2.0
2.1.0
2.0.0
1.0.3
0.5.0
PyPI History
2.36.0 (2026-04-02)
Documentation
A comment for field markup in message .google.cloud.texttospeech.v1beta1.StreamingSynthesisInput is changed ( c36aa6169035fdb14bf84b0e56e4f81291600b5a )
A comment for field advanced_voice_options in message .google.cloud.texttospeech.v1beta1.SynthesizeSpeechRequest is changed ( c36aa6169035fdb14bf84b0e56e4f81291600b5a )
A comment for field markup in message .google.cloud.texttospeech.v1beta1.SynthesisInput is changed ( c36aa6169035fdb14bf84b0e56e4f81291600b5a )
A comment for field relax_safety_filters in message .google.cloud.texttospeech.v1beta1.AdvancedVoiceOptions is changed ( c36aa6169035fdb14bf84b0e56e4f81291600b5a )
Features
Support enable_textnorm for Gemini voices. ( c36aa6169035fdb14bf84b0e56e4f81291600b5a )
Support safety settings for Gemini voices and deprecate relax_safety_filters ( c36aa6169035fdb14bf84b0e56e4f81291600b5a )
Mark advanced_voice_options as optional. ( c36aa6169035fdb14bf84b0e56e4f81291600b5a )
2.35.0 (2026-03-26)
Features
Allow Protobuf 7.x ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
update image to us-central1-docker.pkg.dev/cloud-sdk-librarian-prod/images-prod/python-librarian-generator@sha256:f5426423676c75008c2135037e7b98f78cbb99f78b3c46fe043b6897be92d836 ( 3654fe76d755dd8db62ece81d5770ec58b3624df )
Bug Fixes
Require Python 3.9 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Require google-api-core >= 2.11.0 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Improve type checking ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
2.34.0 (2026-01-09)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
2.33.0 (2025-10-23)
Features
add relax_safety_filters proto field for Gemini TTS ( 1dbd0988eebdb63c7f08737d45f9ff67735ab396 )
add relax_safety_filters proto field for Gemini TTS ( 1dbd0988eebdb63c7f08737d45f9ff67735ab396 )
2.32.0 (2025-10-20)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
2.31.0 (2025-09-24)
Features
[google-cloud-texttospeech] add Gemini TTS Multispeaker API fields ( #14535 ) ( 5339bcb )
2.30.0 (2025-09-22)
Features
[google-cloud-texttospeech] add Gemini TTS Multispeaker API fields ( #14508 ) ( ac6a721 )
2.29.0 (2025-09-04)
Features
Add prompt to SynthesisInput ( 2c37fa1 )
2.28.0 (2025-08-29)
Features
[google-cloud-texttospeech] Support promptable voices by specifying a model name and a prompt ( a610c53 )
Add enum value M4A to enum AudioEncoding ( a610c53 )
Support promptable voices by specifying a model name and a prompt ( a610c53 )
Documentation
A comment for enum value AUDIO_ENCODING_UNSPECIFIED in enum AudioEncoding is changed ( a610c53 )
A comment for enum value OGG_OPUS in enum AudioEncoding is changed ( a610c53 )
A comment for enum value PCM in enum AudioEncoding is changed ( a610c53 )
A comment for enum value PHONETIC_ENCODING_IPA in enum PhoneticEncoding is changed ( a610c53 )
A comment for enum value PHONETIC_ENCODING_X_SAMPA in enum PhoneticEncoding is changed ( a610c53 )
A comment for field audio_encoding in message .google.cloud.texttospeech.v1beta1.StreamingAudioConfig is changed ( a610c53 )
A comment for field custom_pronunciations in message .google.cloud.texttospeech.v1beta1.SynthesisInput is changed ( a610c53 )
A comment for field low_latency_journey_synthesis in message .google.cloud.texttospeech.v1beta1.AdvancedVoiceOptions is changed ( a610c53 )
A comment for field phrase in message .google.cloud.texttospeech.v1beta1.CustomPronunciationParams is changed ( a610c53 )
A comment for field pronunciations in message .google.cloud.texttospeech.v1beta1.CustomPronunciations is changed ( a610c53 )
A comment for field speaking_rate in message .google.cloud.texttospeech.v1beta1.AudioConfig is changed ( a610c53 )
A comment for field text in message .google.cloud.texttospeech.v1beta1.StreamingSynthesisInput is changed ( a610c53 )
A comment for field voice_clone in message .google.cloud.texttospeech.v1beta1.VoiceSelectionParams is changed ( a610c53 )
A comment for message MultiSpeakerMarkup is changed ( a610c53 )
A comment for method StreamingSynthesize in service TextToSpeech is changed ( a610c53 )
2.27.0 (2025-05-08)
Features
Support markup input for Cloud TTS Chirp 3: HD voice synthesis ( c423602 )
Support pinyin/yomigana custom pronunciation encodings for cmn-cn/ja-jp ( c423602 )
2.26.0 (2025-04-12)
Features
Support HD voice custom pronunciations ( 4da3cf3 )
Documentation
A comment for enum value OGG_OPUS in enum AudioEncoding is changed ( 4da3cf3 )
A comment for enum value PCM in enum AudioEncoding is changed ( 4da3cf3 )
A comment for enum value PHONETIC_ENCODING_IPA in enum PhoneticEncoding is changed ( 4da3cf3 )
A comment for enum value PHONETIC_ENCODING_X_SAMPA in enum PhoneticEncoding is changed ( 4da3cf3 )
A comment for field audio_encoding in message .google.cloud.texttospeech.v1.StreamingAudioConfig is changed ( 4da3cf3 )
A comment for field custom_pronunciations in message .google.cloud.texttospeech.v1.SynthesisInput is changed ( 4da3cf3 )
A comment for field low_latency_journey_synthesis in message .google.cloud.texttospeech.v1.AdvancedVoiceOptions is changed ( 4da3cf3 )
A comment for field phrase in message .google.cloud.texttospeech.v1.CustomPronunciationParams is changed ( 4da3cf3 )
A comment for field pronunciations in message .google.cloud.texttospeech.v1.CustomPronunciations is changed ( 4da3cf3 )
A comment for field text in message .google.cloud.texttospeech.v1.StreamingSynthesisInput is changed ( 4da3cf3 )
A comment for field voice_clone in message .google.cloud.texttospeech.v1.VoiceSelectionParams is changed ( 4da3cf3 )
A comment for message MultiSpeakerMarkup is changed ( 4da3cf3 )
A comment for method StreamingSynthesize in service TextToSpeech is changed ( 4da3cf3 )
2.25.1 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( 4757dae )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
2.25.0 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( 87b5382 )
Add support for reading selective GAPIC generation methods from service YAML ( 87b5382 )
2.24.0 (2025-01-13)
Features
[google-cloud-texttospeech] StreamingSynthesize now supports opus ( #13406 ) ( 9f278d6 )
2.23.0 (2024-12-18)
Features
[google-cloud-texttospeech] StreamingSynthesize now supports opus ( #13370 ) ( 4999fd8 )
2.22.0 (2024-12-12)
Features
Add support for opt-in debug logging ( 856e0f0 )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( 856e0f0 )
2.21.1 (2024-11-11)
Bug Fixes
disable universe-domain validation ( #13246 ) ( bcad563 )
2.21.0 (2024-10-31)
Features
add multi-speaker markup, which allows generating dialogue between multiple speakers ( b01d99d )
2.20.0 (2024-10-24)
Features
Add multi-speaker markup, which allows generating dialogue between multiple speakers ( 7cb80ba )
Add support for Python 3.13 ( 7cb80ba )
2.19.0 (2024-10-23)
Features
[google-cloud-texttospeech] Add brand voice lite ( #13178 ) ( 3b97314 )
[google-cloud-texttospeech] add brand voice lite, which lets you clone a voice with just 10 seconds of audio ( #13192 ) ( 6d622a3 )
2.18.0 (2024-10-10)
Features
Add CustomPronunciationParams for upcoming feature work ( 6ba80ea )
Add low latency journey option to proto ( 6ba80ea )
2.17.2 (2024-08-26)
Documentation
[google-cloud-texttospeech] update Long Audio capabilities to include SSML ( #13031 ) ( 46ef325 )
2.17.1 (2024-08-20)
Documentation
[google-cloud-texttospeech] update Long Audio capabilities to include SSML ( #13020 ) ( 200a64b )
2.17.0 (2024-08-19)
Features
A new method StreamingSynthesize is added to service TextToSpeech ( 973e48a )
Documentation
A comment for field name in message .google.cloud.texttospeech.v1.VoiceSelectionParams is changed ( 973e48a )
A comment for field name in message .google.cloud.texttospeech.v1beta1.VoiceSelectionParams is changed ( 973e48a )
2.16.5 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( 9cdac77 )
2.16.4 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12870 ) ( 4d16761 )
2.16.3 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12388 ) ( d2cd4ff )
2.16.2 (2024-02-22)
Bug Fixes
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12310 ) ( 41821da )
fix ValueError in test__validate_universe_domain ( 2451e88 )
2.16.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( e16032f )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( e16032f )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( e16032f )
2.16.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12243 ) ( e14d4b1 )
2.15.1 (2024-01-04)
Bug Fixes
correct long audio synthesis HTTP binding ( a748565 )
Documentation
Deprecate the custom voice usage field ( a748565 )
2.15.0 (2023-12-07)
Features
Add support for python 3.12 ( e9655df )
Introduce compatibility with native namespace packages ( e9655df )
Bug Fixes
Require proto-plus >= 1.22.3 ( e9655df )
Use retry_async instead of retry in async client ( e9655df )
2.14.2 (2023-09-30)
Documentation
Minor formatting ( #388 ) ( c051f1b )
2.14.1 (2023-01-20)
Bug Fixes
Add context manager return types ( 6415162 )
Documentation
Add documentation for enums ( 6415162 )
2.14.0 (2023-01-10)
Features
Add support for python 3.11 ( #353 ) ( 91e5500 )
2.13.0 (2022-12-15)
Features
Add LRS API ( 07227a0 )
Add support for google.cloud.texttospeech.__version__ ( a2a534c )
Add typing to proto.Message based class attributes ( a2a534c )
Bug Fixes
Add dict typing for client_options ( a2a534c )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( 07227a0 )
Drop usage of pkg_resources ( 07227a0 )
Fix timeout default values ( 07227a0 )
Documentation
samples: Snippetgen handling of repeated enum field ( a2a534c )
samples: Snippetgen should call await on the operation coroutine before calling result ( 07227a0 )
2.12.3 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #338 ) ( aa92121 )
2.12.2 (2022-10-03)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #335 ) ( 50b394d )
2.12.1 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #316 ) ( ec75f1e )
deps: require proto-plus >= 1.22.0 ( ec75f1e )
2.12.0 (2022-07-16)
Features
add audience parameter ( f450551 )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #304 ) ( f450551 )
require python 3.7+ ( #306 ) ( 192277b )
2.11.1 (2022-06-06)
Bug Fixes
deps: require protobuf <4.0.0dev ( #293 ) ( e5ab0d6 )
Documentation
fix changelog header to consistent size ( #294 ) ( 8a8b65c )
2.11.0 (2022-03-10)
Features
promote CustomVoiceParams to v1 ( #266 ) ( f484e7f )
2.10.2 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #261 ) ( f993058 )
deps: require proto-plus>=1.15.0 ( f993058 )
2.10.1 (2022-02-26)
Documentation
add generated snippets ( #249 ) ( f918e82 )
2.10.0 (2022-02-03)
Features
add api key support ( #242 ) ( 3b4f0d0 )
Bug Fixes
resolve DuplicateCredentialArgs error when using credentials_file ( 4c11b12 )
Documentation
update comments for ListVoicesRequest ( #244 ) ( bc5b73f )
2.9.1 (2022-01-08)
Documentation
Added virtualenv comment for clarity ( #225 ) ( 61a7fce )
update comments for ListVoicesRequest ( #229 ) ( 9ea340c )
2.9.0 (2021-11-16)
Features
update v1 proto ( #221 ) ( e8776d7 )
2.8.0 (2021-11-13)
Features
v1beta1: add CustomVoiceParams ( #215 ) ( 6a18d0f )
Documentation
fix docstring formatting ( #218 ) ( 2c57f95 )
2.7.1 (2021-11-01)
Bug Fixes
deps: drop packaging dependency ( 99ac70b )
deps: require google-api-core >= 1.28.0 ( 99ac70b )
Documentation
list oneofs in docstring ( 99ac70b )
2.7.0 (2021-10-18)
Features
add support for python 3.10 ( #202 ) ( 2ffa70b )
2.6.0 (2021-10-07)
Features
add context manager support in client ( #196 ) ( 73d9290 )
2.5.3 (2021-09-24)
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( e74b994 )
2.5.2 (2021-07-28)
Bug Fixes
enable self signed jwt for grpc ( #171 ) ( 9c1c437 )
Documentation
add Samples section to CONTRIBUTING.rst ( #166 ) ( 053abe3 )
Miscellaneous Chores
release as 2.5.2 ( #172 ) ( 3804727 )
2.5.1 (2021-07-20)
Bug Fixes
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #165 ) ( d78b384 )
2.5.0 (2021-07-01)
Features
add always_use_jwt_access ( #155 ) ( cd10c37 )
Bug Fixes
disable always_use_jwt_access ( #159 ) ( d109303 )
Documentation
omit mention of Python 2.7 in ‘CONTRIBUTING.rst’ ( #1127 ) ( #150 ) ( d2954ba ), closes #1126
2.4.0 (2021-05-28)
Features
support self-signed JWT flow for service accounts ( 8a08836 )
Bug Fixes
add async client to %name_%version/init.py ( 8a08836 )
2.3.0 (2021-03-31)
Features
add from_service_account_info to clients ( 139e6e8 )
Add ALAW support on client library and improve the ListVoiceRequest message’s documentation ( #113 ) ( 8bbd380 )
add common resource helper methods ( 139e6e8 )
support custom client info ( #82 ) ( 0612793 )
Bug Fixes
change default retry and timeout settings ( 139e6e8 )
Documentation
use sphinx-1.5.5 for sphinx-docfx-yaml ( #89 ) ( feb04c5 )
2.2.0 (2020-08-10)
Features
incorporate upstream changes ( #73 ) ( 8ee5447 )
support MULAW audio encoding
support MP3_64_KBPS audio encoding
support timepointing via SSML tag
support quota_project_id
2.1.0 (2020-06-20)
Features
add async client ( #53 ) ( 887d8d5 )
Documentation
change relative URLs to absolute URLs to fix broken links ( #40 ) ( b68df44 )
2.0.0 (2020-06-01)
⚠ BREAKING CHANGES
This release has breaking changes. See the 2.0.0 Migration Guide for details.
Features
regenerate with microgenerator ( #30 ) ( 3181b55 )
Bug Fixes
address PR comments ( 65f903b )
1.0.1 (2020-02-28)
Bug Fixes
update url in setup.py ( #13 ) ( dc17707 )
1.0.0 (2020-02-28)
Features
bump release status to GA ( #9 ) ( 03a639e )
0.5.0
07-24-2019 17:48 PDT
Implementation Changes
Allow kwargs to be passed to create_channel (via synth). ( #8407 )
Reformat protos, update nox session docs (via synth). ( #7941 )
Remove classifier for Python 3.4 for end-of-life. ( #7535 )
New Features
Add ‘client_options’ support (via synth). ( #8525 )
Dependencies
Bump minimum version for google-api-core to 1.14.0. ( #8709 )
Documentation
Link to googleapis.dev documentation in READMEs. ( #8705 )
Add compatibility check badges to READMEs. ( #8288 )
Repair top-level API reference page. ( #8435 )
Updated client library documentation URLs. ( #7307 )
Internal / Testing Changes
Pin black version (via synth). ( #8599 )
Add docs job to publish to googleapis.dev. ( #8464 )
Declare encoding as utf-8 in pb2 files (via synth). ( #8367 )
Add disclaimer to auto-generated template files (via synth). ( #8331 )
Blacken (via synth). ( #8281 )
0.4.0
02-07-2019 15:21 PST
Implementation Changes
Pick up stub docstring fix in GAPIC generator. ( #6984 )
New Features
Protoc updates to include effects_profile_id. ( #7097 )
Documentation
Fix Client Library Documentation link ( #7109 )
Internal / Testing Changes
Copy proto files alongside protoc versions.
Add protos as an artifact to library ( #7205 )
Update copyright headers and docstring quoting
0.3.0
12-18-2018 09:54 PST
Implementation Changes
Import iam.policy from google.api_core . ( #6741 )
Pick up fixes to GAPIC generator. ( #6510 )
Fix client_info bug, update docstrings. ( #6423 )
Re-generate library using texttospeech/synth.py ( #5981 )
Add gRPC Transport layer. ( #5959 )
Dependencies
Bump minimum api_core version for all GAPIC libs to 1.4.1. ( #6391 )
Avoid broken ‘google-common-apis 1.5.4’ release. ( #6355 )
Documentation
Document Python 2 deprecation ( #6910 )
Docs: normalize use of support level badges ( #6159 )
Docs: Replace links to /stable/ with /latest/ . ( #5901 )
Fix docs links for TTS. ( #5483 )
Internal / Testing Changes
Add synth.metadata. ( #6870 )
Update noxfile.
blacken all gen’d libs ( #6792 )
omit local deps ( #6701 )
Run black at end of synth.py ( #6698 )
Run Black on Generated libraries ( #6666 )
Add templates for flake8, coveragerc, noxfile, and black. ( #6642 )
Add ‘mock’ to unit test dependencies for autogen libs. ( #6402 )
Add / fix badges for PyPI / versions. ( #6158 )
Use new Nox ( #6175 )
0.2.0
New Features
Add the text-to-speech v1 API surface. (#5468)
Re-generate the text-to-speech v1beta1 API surface. (#5468)
Documentation
Rename releases to changelog and include from CHANGELOG.md (#5191)
Internal / Testing Changes
Add Test runs for Python 3.7 and remove 3.4 (#5295)
0.1.0
Interface additions
Added text-to-speech v1beta1. (#5049)
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],[]]
