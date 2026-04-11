---
title: "Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/bigtable/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/changelog
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
2.35.0 (latest)
2.34.0
2.33.0
2.32.0
2.31.0
2.30.1
2.29.0
2.28.1
2.26.0
2.25.0
2.24.0
2.23.1
2.22.0
2.21.0
2.20.0
2.19.0
2.18.1
2.17.0
2.16.0
2.15.0
2.14.1
2.13.2
2.12.0
2.11.3
2.10.1
2.9.0
2.8.1
2.7.1
2.6.0
2.5.2
2.4.0
2.3.3
2.2.0
2.1.0
2.0.0
1.7.3
1.6.1
1.5.1
1.4.0
1.3.0
1.2.1
1.1.0
1.0.0
0.34.0
Changelog
PyPI History
2.35.0 (2025-12-16)
Features
support mTLS certificates when available (#1249) ( ca20219cf45305de25dfb715f69dd63bce9981b7 )
add basic interceptor to client (#1206) ( 6561cfac605ba7c5b3f750c3bdca9108e517ba77 )
add PeerInfo proto in Bigtable API ( 72dfdc440c22db0f4c372e6f11a9f7dc83fed350 )
Add Type API updates needed to support structured keys in materialized views ( 72dfdc440c22db0f4c372e6f11a9f7dc83fed350 )
Add encodings for STRUCT and the Timestamp type ( 72dfdc440c22db0f4c372e6f11a9f7dc83fed350 )
Bug Fixes
async client uses fixed grace period (#1236) ( 544db1cd7af876298b8637f495b6c7b2a0bcf16c )
re-export AddToCell for consistency (#1241) ( 2a5baf11d30dc383a7b48d5f43b6cbb6160782e3 )
retry cancelled errors (#1235) ( e3fd5d8668303db4ed35e9bf6be48b46954f9d67 )
Add ReadRows/SampleRowKeys bindings for materialized views ( 72dfdc440c22db0f4c372e6f11a9f7dc83fed350 )
Deprecate credentials_file argument ( 72dfdc440c22db0f4c372e6f11a9f7dc83fed350 )
2.34.0 (2025-10-16)
Features
Add support for Python 3.14 ( #1217 ) ( 263332a )
2.33.0 (2025-10-06)
Features
Add support for Proto and Enum types ( #1202 ) ( 34ceb86 )
Expose universe_domain for tpc ( #1150 ) ( 451fd97 )
Bug Fixes
Fix instance registration cleanup on early iterator termination ( #1216 ) ( bbfd746 )
Refactor channel refresh ( #1174 ) ( 6fa3008 )
2.32.0 (2025-08-01)
Features
Add Idempotency to Cloud Bigtable MutateRowsRequest API ( #1143 ) ( c3e3eb0 )
Add support for AddToCell in Data Client ( #1147 ) ( 1a5b4b5 )
Implement SQL support in test proxy ( #1106 ) ( 7a91bbf )
Modernized Bigtable Admin Client featuring selective GAPIC generation ( #1177 ) ( 58e7d37 )
2.31.0 (2025-05-22)
Features
Add deletion_protection support for LVs ( #1108 ) ( c6d384d )
Support authorized views ( #1034 ) ( 97a0198 )
Throw better error on invalid metadata response ( #1107 ) ( 2642317 )
Bug Fixes
Re-add py-typed file for bigtable package ( #1085 ) ( 0c322c7 )
2.30.1 (2025-04-17)
Bug Fixes
Populate SQL app_profile_id header even when it is unset ( #1109 ) ( 17b75bd )
2.30.0 (2025-03-18)
Features
Update ExecuteQuery to use Prepare ( #1100 ) ( 8a7abc1 )
Bug Fixes
Allow protobuf 6.x ( #1092 ) ( 1015fa8 )
Remove setup.cfg configuration for creating universal wheels ( #1097 ) ( 95f4b82 )
2.29.0 (2025-02-26)
Features
Add support for array and float32 SQL query params ( #1078 ) ( 89b8da8 )
Bug Fixes
Grpc channel refresh ( #1087 ) ( f44b36b )
2.28.1 (2025-01-17)
Bug Fixes
Allow empty headers for btql routing ( #1072 ) ( e7ecfeb )
2.28.0 (2025-01-08)
Features
Add generated sync client ( #1017 ) ( f974823 )
2.27.0 (2024-11-12)
Features
Add support for Cloud Bigtable Node Scaling Factor for CBT Clusters ( #1023 ) ( 0809c6a )
Surface retry param to Table.read_row api ( #982 ) ( a8286d2 )
Bug Fixes
Registering duplicate instance ( #1033 ) ( 2bca8fb )
2.26.0 (2024-08-12)
Features
Add fields and the BackupType proto for Hot Backups ( #1010 ) ( b95801f )
Add MergeToCell to Mutation APIs ( f029a24 )
Add min, max, hll aggregators and more types ( f029a24 )
Async execute query client ( #1011 ) ( 45bc8c4 )
Bug Fixes
Use single routing metadata header ( #1005 ) ( 20eeb0a )
Documentation
Add clarification around SQL timestamps ( #1012 ) ( 6e80190 )
Corrected various type documentation ( f029a24 )
2.25.0 (2024-07-18)
Features
Publish ProtoRows Message ( 7ac8e14 )
Publish the Cloud Bigtable ExecuteQuery API ( 7ac8e14 )
Bug Fixes
Allow protobuf 5.x ( 7ac8e14 )
2.24.0 (2024-06-11)
Features
Add String type with Utf8Raw encoding to Bigtable API ( #968 ) ( 2a2bbfd )
Improve async sharding ( #977 ) ( fd1f7da )
Bug Fixes
backup: Backup name regex ( #970 ) ( 6ef122a )
Improve rowset revision ( #979 ) ( da27527 )
2.23.1 (2024-04-15)
Bug Fixes
Use insecure grpc channel with emulator ( #946 ) ( aa31706 )
2.23.0 (2024-02-07)
Features
Add async data client preview ( 7088e39 )
Adding feature flags for routing cookie and retry info ( #905 ) ( 1859e67 )
Bug Fixes
Fix ValueError in test__validate_universe_domain ( #929 ) ( aa76a5a )
2.22.0 (2023-12-12)
Features
Add support for Cloud Bigtable Request Priorities in App Profiles ( #871 ) ( a4d551e )
Add support for Python 3.12 ( #888 ) ( 4f050aa )
Introduce compatibility with native namespace packages ( #893 ) ( d218f4e )
Publish CopyBackup protos to external customers ( #855 ) ( 4105df7 )
Bug Fixes
Add feature flag for improved mutate rows throttling ( e5af359 )
Add lock to flow control ( #899 ) ( e4e63c7 )
Mutations batcher race condition ( #896 ) ( fe58f61 )
Require google-cloud-core 1.4.4 ( #866 ) ( 09f8a46 )
Use retry_async instead of retry in async client ( 597efd1 )
Documentation
Minor formatting ( e5af359 )
2.21.0 (2023-08-02)
Features
Add last_scanned_row_responses to FeatureFlags ( #845 ) ( 14a6739 )
Documentation
Minor formatting ( #851 ) ( 5ebe231 )
2.20.0 (2023-07-17)
Features
Add experimental reverse scan for public preview ( d5720f8 )
Increase the maximum retention period for a Cloud Bigtable backup from 30 days to 90 days ( d5720f8 )
Bug Fixes
Add async context manager return types ( #828 ) ( 475a160 )
Documentation
Fix formatting for reversed order field example ( #831 ) ( fddd0ba )
2.19.0 (2023-06-08)
Features
Add ChangeStreamConfig to CreateTable and UpdateTable ( #786 ) ( cef70f2 )
Bug Fixes
Add a callback function on flush_rows ( #796 ) ( 589aa5d )
Documentation
samples: Add region tags ( #788 ) ( ecf539c )
2.18.1 (2023-05-11)
Bug Fixes
Revert “Feat: Threaded MutationsBatcher” ( #773 ) ( a767cff )
2.18.0 (2023-05-10)
Features
Publish RateLimitInfo and FeatureFlag protos ( #768 ) ( 171fea6 )
Threaded MutationsBatcher ( #722 ) ( 7521a61 )
Bug Fixes
Pass the “retry” when calling read_rows. ( #759 ) ( 505273b )
Documentation
Fix delete from column family example ( #764 ) ( 128b4e1 )
Fix formatting of request arg in docstring ( #756 ) ( 45d3e43 )
2.17.0 (2023-03-01)
Features
Add new_partitions field for CloseStream for Cloud Bigtable ChangeStream ( #740 ) ( 1adcad4 )
2.16.0 (2023-02-27)
Features
Enable “rest” transport in Python for services supporting numeric enums ( c5116e0 )
Publish the Cloud Bigtable Change Streams ( c5116e0 )
Bug Fixes
Add context manager return types ( beb5bf3 )
deps: Require google-api-core>=1.34.0,>=2.11.0 ( c5116e0 )
Documentation
Add documentation for enums ( beb5bf3 )
2.15.0 (2023-01-10)
Features
Add support for python 3.11 ( #718 ) ( 803a15e )
2.14.1 (2022-12-06)
Bug Fixes
deps: Require google-api-core >=1.34.0, >=2.11.0 ( e5875cb )
Drop usage of pkg_resources ( e5875cb )
Fix timeout default values ( e5875cb )
Documentation
samples: Snippetgen should call await on the operation coroutine before calling result ( e5875cb )
2.14.0 (2022-11-30)
Features
Add typing to proto.Message based class attributes ( c1538d5 )
remove enum value ReadRowsRequest.RequestStatsView.REQUEST_STATS_EFFICIENCY ( c1538d5 )
remove field ReadIterationStats.deletes_seen ( c1538d5 )
remove field RequestStats.read_efficiency_stats ( c1538d5 )
remove proto ReadEfficiencyStats ( c1538d5 )
rename field RequestStats.all_read_stats to full_read_stats_view ( c1538d5 )
rename proto AllReadStats to FullReadStatsView ( c1538d5 )
rename proto ReadIteratorStats to ReadIterationStats ( c1538d5 )
Bug Fixes
Add dict typing for client_options ( c1538d5 )
2.13.2 (2022-10-20)
Bug Fixes
Respect deadlines for column family operations ( #687 ) ( df2e64a )
2.13.1 (2022-10-10)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #682 ) ( 0bb3420 )
2.13.0 (2022-09-29)
Features
Publish the RequestStats proto ( #676 ) ( 199949b )
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #679 ) ( 030ef38 )
2.12.0 (2022-09-19)
Features
Publish CBT deletion_protection field in Table, UpdateTableRequest, and UpdateTable API ( #670 ) ( c57289c )
Documentation
Remove unnecessary comment ( #674 ) ( 9c62655 )
2.11.3 (2022-08-17)
Performance Improvements
optimize row merging ( #628 ) ( c71ec70 )
2.11.2 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #631 ) ( fd54fc6 )
deps: require proto-plus >= 1.22.0 ( fd54fc6 )
2.11.1 (2022-08-08)
Bug Fixes
Retry the RST Stream error in mutate rows and read rows( #624 ) ( d24574a )
2.11.0 (2022-08-04)
Features
add audience parameter ( a7a7699 )
add satisfies_pzs output only field ( #614 ) ( 7dc1469 )
Add storage_utilization_gib_per_node to Autoscaling target ( a7a7699 )
Cloud Bigtable Undelete Table service and message proto files ( a7a7699 )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( a7a7699 )
require python 3.7+ ( #610 ) ( 10d00f5 )
Performance Improvements
improve row merging ( #619 ) ( b4853e5 )
2.10.1 (2022-06-03)
Bug Fixes
deps: require protobuf <4.0.0dev ( #595 ) ( a4deaf7 )
Documentation
fix changelog header to consistent size ( #596 ) ( 51961c3 )
2.10.0 (2022-05-30)
Features
refreshes Bigtable Admin API(s) protos ( #589 ) ( b508e33 )
Documentation
Add EncryptionInfo documentation ( #588 ) ( bedbf1b )
2.9.0 (2022-04-14)
Features
App Profile multi cluster routing support with specified cluster ids ( #549 ) ( a0ed5b5 )
AuditConfig for IAM v1 ( 4e50278 )
Bug Fixes
deps: require grpc-google-iam-v1 >=0.12.4 ( 4e50278 )
Documentation
fix type in docstring for map fields ( 4e50278 )
2.8.1 (2022-04-07)
Bug Fixes
Prevent sending full table scan when retrying ( #554 ) ( 56f5357 )
2.8.0 (2022-04-04)
Features
Add ListHotTablets API method and protobufs ( #542 ) ( 483f139 )
Documentation
explain mutate vs mutate_rows ( #543 ) ( 84cfb0a )
Remove the limitation that all clusters in a CMEK instance must use the same key ( f008eea )
Update cpu_utilization_percent limit ( #547 ) ( f008eea )
2.7.1 (2022-03-17)
Bug Fixes
Ensure message fields are copied when building retry request ( #533 ) ( ff7f190 )
2.7.0 (2022-03-06)
Features
Add support for autoscaling ( #509 ) ( 8f4e197 )
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #526 ) ( a8a92ee )
deps: require proto-plus>=1.15.0 ( a8a92ee )
2.6.0 (2022-02-26)
Features
add WarmAndPing request for channel priming ( #504 ) ( df5fc1f )
2.5.2 (2022-02-24)
Bug Fixes
Pass app_profile_id when building updated request ( #512 ) ( 2f8ba7a )
2.5.1 (2022-02-17)
Bug Fixes
deps: move libcst to extras ( #508 ) ( 4b4d7e2 )
2.5.0 (2022-02-07)
Features
add ‘Instance.create_time’ field ( #449 ) ( b9ecfa9 )
add api key support ( #497 ) ( ee3a6c4 )
add Autoscaling API ( #475 ) ( 97b3cdd )
add context manager support in client ( #440 ) ( a3d2cf1 )
add support for Python 3.10 ( #437 ) ( 3cf0814 )
Bug Fixes
deps: drop packaging dependency ( a535f99 )
deps: require google-api-core >= 1.28.0 ( a535f99 )
improper types in pagers generation ( f9c7699 )
improve type hints, mypy checks ( #448 ) ( a99bf88 )
resolve DuplicateCredentialArgs error when using credentials_file ( d6bff70 )
Documentation
clarify comments in ReadRowsRequest and RowFilter ( #494 ) ( 1efd9b5 )
list oneofs in docstring ( a535f99 )
2.4.0 (2021-09-24)
Features
Publish new fields to support cluster group routing for Cloud Bigtable ( #407 ) ( 66af554 )
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( 160bfd3 )
2.3.3 (2021-07-24)
Bug Fixes
enable self signed jwt for grpc ( #397 ) ( 9d43a38 )
2.3.2 (2021-07-20)
Bug Fixes
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #379 ) ( 95b2e13 )
directly append to pb for beter read row performance ( #382 ) ( 7040e11 )
2.3.1 (2021-07-13)
Bug Fixes
use public ‘table_admin_client’ property in backups methods ( #359 ) ( bc57c79 )
2.3.0 (2021-07-01)
Features
add always_use_jwt_access ( #333 ) ( f1fce5b )
Bug Fixes
deps: add packaging requirement ( #326 ) ( d31c27b )
deps: require google-api-core >= 1.26.0 ( #344 ) ( ce4ceb6 )
disable always_use_jwt_access ( #348 ) ( 4623248 )
Documentation
add paramter mutation_timeout to instance.table docs ( #305 ) ( 5bbd06e )
fix broken links in multiprocessing.rst ( #317 ) ( e329352 )
omit mention of Python 2.7 in ‘CONTRIBUTING.rst’ ( #1127 ) ( #329 ) ( 6bf0c64 ), closes #1126
2.2.0 (2021-04-30)
Features
backup restore to different instance ( #300 ) ( 049a25f )
2.1.0 (2021-04-21)
Features
customer managed keys (CMEK) ( #249 ) ( 93df829 )
2.0.0 (2021-04-06)
⚠ BREAKING CHANGES
microgenerator changes (#203)
Features
microgenerator changes ( #203 ) ( b31bd87 )
publish new fields for CMEK ( #222 ) ( 0fe5b63 )
Bug Fixes
address issue in establishing an emulator connection ( #246 ) ( 1a31826 )
fix unit test that could be broken by user’s environment ( #239 ) ( cbd712e )
guard assignments of certain values against None ( #220 ) ( 341f448 )
retry: restore grpc_service_config for CreateBackup and {Restore,Snapshot}Table ( #240 ) ( 79f1734 )
Documentation
add backup docs ( #251 ) ( 7d5c7aa )
Dependencies
update gapic-generator-python to 0.40.11 ( #230 ) ( 47d5dc1 )
upgrade gapic-generator-python to 0.43.1 ( #276 ) ( 0e9fe54 )
2.0.0-dev1 (2021-02-24)
⚠ BREAKING CHANGES
microgenerator changes (#203)
Features
microgenerator changes ( #203 ) ( b31bd87 )
Bug Fixes
guard assignments of certain values against None ( #220 ) ( 341f448 )
1.7.0 (2021-02-09)
Features
add keep alive timeout ( #182 ) ( e9637cb )
support filtering on incrementable values ( #178 ) ( e221352 )
Bug Fixes
Renaming region tags to not conflict with documentation snippets ( #190 ) ( dd0cdc5 )
Documentation
update python contributing guide ( #206 ) ( e301ac3 )
1.6.1 (2020-12-01)
Documentation
update intersphinx mappings ( #172 ) ( 7b09368 )
1.6.0 (2020-11-16)
Features
add ‘timeout’ arg to ‘Table.mutate_rows’ ( #157 ) ( 6d597a1 ), closes /github.com/googleapis/python-bigtable/issues/7#issuecomment-715538708 #7
Backup Level IAM ( #160 ) ( 44932cb )
1.5.1 (2020-10-06)
Bug Fixes
harden version data gathering against DistributionNotFound ( #150 ) ( c815421 )
1.5.0 (2020-09-22)
Features
add ‘Rowset.add_row_range_with_prefix’ ( #30 ) ( 4796ac8 )
add response status to DirectRow.commit() ( #128 ) ( 2478bb8 ), closes #127
pass ‘client_options’ to base class ctor ( #104 ) ( e55ca07 ), closes #69
Bug Fixes
pass timeout to ‘PartialRowsData.response_iterator’ ( #16 ) ( 8f76434 )
retry if failure occurs on initial call in MutateRows ( #123 ) ( 0c9cde8 )
python_samples: README link fix, enforce samples=True ( #114 ) ( dfe658a )
Documentation
add sample for writing data with Beam ( #80 ) ( 6900290 )
clarify ‘Table.read_rows’ snippet ( #50 ) ( 5ca8bbd )
document ‘row_set’ module explicitly ( #29 ) ( 0e0291e )
Pysamples new readme gen ( #112 ) ( 3ecca7a )
remove indent from snippet code blocks ( #49 ) ( 1fbadf9 )
switch links to client documentation ( #93 ) ( 2c973e6 )
update docs build (via synth) ( #99 ) ( c301b53 ), closes #700
update links to reflect new Github org ( #48 ) ( 9bb11ed )
use correct storage type constant in docstrings ( #110 ) ( bc6db77 )
samples: filter cpu query to get metrics for the correct resources ([#4238](https://www.github.com/googleapis/python-bigtable/issues/4238)) ( #81 ) ( 2c8c386 )
1.4.0 (2020-07-21)
Features
bigtable: Managed Backups wrappers ( #57 ) ( a351734 )
1.3.0 (2020-07-16)
Features
api_core: support version 3 policy bindings ( #9869 ) ( a9dee32 )
bigtable: add py2 deprecation warnings; standardize use of ‘required’ in docstrings (via synth) ( #10064 ) ( 5460de0 )
Create CODEOWNERS ( #27 ) ( 2b63746 )
bigtable: skip system tests failing with emulator ( #18 ) ( 399d3d3 )
bigtable: support requested_policy_version for Instance IAM ( #10001 ) ( 7e5d963 ), closes #3
update gapic-generator and go microgen, backups generated api ( #55 ) ( c38888d )
Bug Fixes
localdeps ( 5d799b2 )
test_utils ( 43481a9 )
python: change autodoc_default_flags to autodoc_default_options ( #58 ) ( 5c1d618 )
Documentation
add note about multiprocessing usage ( #26 ) ( 1449589 )
bigtable: clean up ( #32 ) ( 9f4068c )
add samples from bigtable ( #38 ) ( 1121f0d ), closes #371 #383 #383 #456 #456 #540 #540 #542 #542 #544 #544 #576 #599 #599 #656 #715 #715 #781 #781 #887 #887 #914 #914 #922 #922 #962 #962 #1004 #1004 #1003 #1005 #1005 #1028 #1055 #1055 #1055 #1057 #1093 #1093 #1093 #1094 #1094 #1121 #1121 #1121 #1156 #1158 #1158 #1158 #1186 #1186 #1186 #1199 #1199 #1199 #1254 #1254 #1254 #1377 #1377 #1377 #1441 #1441 #1441 #1464 #1464 #1464 #1549 #1562 #1555 #1616 #1616 #1665 #1670 #1664 #1674 #1755 #1755 #1755 #1764 #1764 #1770 #1794 #1846 #1846 #1846 #1846 #1846 #1846 #1878 #1890 #1980 #1980 #1980 #1980 #1980 #1980 #1980 #2057 #2057 #2054 #2054 #2018 #2018 #2224 #2201 #2436 #2436 #2436 #2436 #2436 #2436 #2436 #2005 #2005 #2005 #2005 #2005 #2692 #2692 #2692 #2692 #2692 #2692 #2692 #2692 #3066 #2707 #3103 #2806 #2806 #2806 #2806 #2806 #2806 #2806 #2806 #3459 #3494 #3070 #3119 #3738 #3738 #3738 #3739 #3739 #3740 #3783 #3877
bigtable: fix incorrect display_name update ( #46 ) ( 1ac60be )
bigtable: remove missing argument from instance declaration ( #47 ) ( c966647 ), closes #42
1.2.1
01-03-2020 10:05 PST
Implementation Changes
Add ability to use single-row transactions ( #10021 )
1.2.0
12-04-2019 12:21 PST
New Features
add table level IAM policy controls ( #9877 )
add ‘client_options’ / ‘admin_client_options’ to Client ( #9517 )
Documentation
change spacing in docs templates (via synth) ( #9739 )
add python 2 sunset banner to documentation ( #9036 )
Internal
add trailing commas (via synth) ( #9557 )
1.1.0
10-15-2019 06:40 PDT
New Features
Add IAM Policy methods to table admin client (via synth). ( #9172 )
Dependencies
Pin ‘google-cloud-core >= 1.0.3, < 2.0.0dev’. ( #9445 )
Documentation
Fix intersphinx reference to requests ( #9294 )
Fix misspelling in docs. ( #9184 )
1.0.0
08-28-2019 12:49 PDT
Implementation Changes
Remove send/recv msg size limit (via synth). ( #8979 )
Documentation
Avoid creating table in ‘list_tables’ snippet; harden ‘delete_instance’ snippet. ( #8879 )
Add retry for DeadlineExceeded to ‘test_bigtable_create_table’ snippet. ( #8889 )
Remove compatability badges from READMEs. ( #9035 )
Internal / Testing Changes
Docs: Remove CI for gh-pages, use googleapis.dev for api_core refs. ( #9085 )
0.34.0
07-30-2019 10:05 PDT
Implementation Changes
Pick up changes to GAPIC client configuration (via synth). ( #8724 )
Add Cell.__repr__ . ( #8683 )
Increase timeout for app profile update operation. ( #8417 )
New Features
Add methods returning Separate row types to remove confusion around return types of row.commit . ( #8662 )
Add options_ argument to clients’ get_iam_policy (via synth). ( #8652 )
Add client_options support, update list method docstrings (via synth). ( #8500 )
Dependencies
Bump minimum version for google-api-core to 1.14.0. ( #8709 )
Update pin for grpc-google-iam-v1 to 0.12.3+. ( #8647 )
Allow kwargs to be passed to create_channel (via synth). ( #8458 )
Add PartialRowsData.cancel . ( #8176 )
Documentation
Update intersphinx mapping for requests. ( #8805 )
Link to googleapis.dev documentation in READMEs. ( #8705 )
Add compatibility check badges to READMEs. ( #8288 )
Add snppets illustrating use of application profiles. ( #7033 )
Internal / Testing Changes
Add nox session docs to remaining manual clients. ( #8478 )
All: Add docs job to publish to googleapis.dev. ( #8464 )
Force timeout for table creation to 90 seconds (in systests). ( #8450 )
Plug systest / snippet instance leaks. ( #8416 )
Declare encoding as utf-8 in pb2 files (via synth). ( #8346 )
Add disclaimer to auto-generated template files (via synth). ( #8308 )
Fix coverage in types.py (via synth). ( #8149 )
Integrate docstring / formatting tweaks (via synth). ( #8138 )
Use alabaster theme everwhere. ( #8021 )
0.33.0
05-16-2019 11:51 PDT
Implementation Changes
Fix typos in deprecation warnings. ( #7858 )
Add deprecation warnings for to-be-removed features. ( #7532 )
Remove classifier for Python 3.4 for end-of-life. ( #7535 )
Improve Policy interchange w/ JSON, gRPC payloads. ( #7378 )
New Features
Add support for passing client_info to client. ( #7876 ) and ( #7898 )
Add Table.mutation_timeout , allowing override of config timeouts. ( #7424 )
Dependencies
Pin google-cloud-core >= 1.0.0, < 2.0dev . ( #7993 )
Documentation
Remove duplicate snippet tags for Delete cluster. ( #7860 )
Fix rendering of instance admin snippets. ( #7797 )
Avoid leaking instances from snippets. ( #7800 )
Fix enum reference in documentation. ( #7724 )
Remove duplicate snippets. ( #7528 )
Add snippeds for Batcher, RowData, Row Operations, AppendRow. ( #7019 )
Add column family snippets. ( #7014 )
Add Row Set snippets. ( #7016 )
Update client library documentation URLs. ( #7307 )
Fix typos in Table docstrings. ( #7261 )
Update copyright headers (via synth). ( #7139 )
Fix linked classes in generated docstrings (via synth). ( #7060 )
Internal / Testing Changes
Run instance_admin system tests on a separate instance from table_admin and data system tests. ( #6579 )
Re-blacken. ( #7462 )
Copy lintified proto files (via synth). ( #7445 )
Remove unused message exports (via synth). ( #7264 )
Compare 0 using ‘!=’, rather than ‘is not’. ( #7312 )
Add protos as an artifact to library ( #7205 )
Protoc-generated serialization update. ( #7077 )
Blacken snippets. ( #7048 )
Bigtable client snippets ( #7020 )
Pick up order-of-enum fix from GAPIC generator. ( #6879 )
Plug systest instance leaks ( #7004 )
0.32.1
12-17-2018 16:38 PST
Documentation
Document Python 2 deprecation ( #6910 )
Add snippets for table operations. ( #6484 )
0.32.0
12-10-2018 12:47 PST
Implementation Changes
Import iam.policy from google.api_core . ( #6741 )
Remove deepcopy from PartialRowData.cells property. ( #6648 )
Pick up fixes to GAPIC generator. ( #6630 )
Dependencies
Update dependency to google-cloud-core ( #6835 )
Internal / Testing Changes
Blacken all gen’d libs ( #6792 )
Omit local deps ( #6701 )
Run black at end of synth.py ( #6698 )
Blackening Continued… ( #6667 )
Add templates for flake8, coveragerc, noxfile, and black. ( #6642 )
0.31.1
11-02-2018 08:13 PDT
Implementation Changes
Fix anonymous usage under Bigtable emulator ( #6385 )
Support DirectRow without a Table ( #6336 )
Add retry parameter to Table.read_rows() . ( #6281 )
Fix ConditionalRow interaction with check_and_mutate_row ( #6296 )
Deprecate channel arg to Client ( #6279 )
Dependencies
Update dependency: google-api-core >= 1.4.1 ( #6391 )
Update IAM version in dependencies ( #6362 )
Documentation
Add docs/snippets.py and test ( #6012 )
Normalize use of support level badges ( #6159 )
Internal / Testing Changes
Fix client_info bug, update docstrings and timeouts. ( #6406) )
Remove now-spurious fixup from ‘synth.py’. ( #6400 )
Fix flaky systests / snippets ( #6367 )
Add explicit coverage for row_data._retry_read_rows_exception . ( #6364 )
Fix instance IAM test methods ( #6343 )
Fix error from new flake8 version. ( #6309 )
Use new Nox ( #6175 )
0.31.0
New Features
Upgrade support level from alpha to beta . ( #6129 )
Implementation Changes
Improve admin operation timeouts. ( #6010 )
Documentation
Prepare docs for repo split. ( #6014 )
Internal / Testing Changes
Refactor read_row to call read_rows ( #6137 )
Harden instance teardown against ‘429 Too Many Requests’. ( #6102 )
Add {RowSet,RowRange}.{__eq__,.__ne__} ( #6025 )
Regenerate low-level GAPIC code ( #6036 )
0.30.2
New Features
Add iam policy implementation for an instance. (#5838)
Implementation Changes
Fix smart retries for ‘read_rows()’ when reading the full table (#5966)
Documentation
Replace links to /stable/ with /latest/ . (#5901)
Internal / Testing Changes
Re-generate library using bigtable/synth.py (#5974)
Refactor read_rows infrastructure (#5963)
0.30.1
Implementation changes
Fix non-admin access to table data. (#5875)
Synth bigtable and bigtable admin GAPIC clients. (#5867)
Testing and internal changes
Nox: use in-place installs for local packages. (#5865)
0.30.0
New Features
Improve performance and capabilities of reads. read_rows now returns a generator; has automatic retries; and can read an arbitrary set of keys and ranges
Consolidate read_rows and yield_rows (#5840)
Implement row set for yield_rows (#5506)
Improve read rows validation performance (#5390)
Add retry for yield_rows (#4882)
Require TimestampRanges to be milliseconds granularity (#5002)
Provide better access to cell values (#4908)
Add data app profile id (#5369)
Improve writes: Writes are usable in Beam
Create MutationBatcher for bigtable (#5651)
Allow DirectRow to be created without a table (#5567)
Add data app profile id (#5369)
Improve table admin: Table creation now can also create families in a single RPC. Add an exist() method. Add get_cluster_states for information about replication
Add ‘Table.get_cluster_states’ method (#5790)
Optimize ‘Table.exists’ performance (#5749)
Add column creation in ‘Table.create()’. (#5576)
Add ‘Table.exists’ method (#5545)
Add split keys on create table - v2 (#5513)
Avoid sharing table names across unrelated systests. (#5421)
Add truncate table and drop by prefix on top of GAPIC integration (#5360)
Improve instance admin: Instance creation allows for the creation of multiple clusters. Instance label management is now enabled.
Create app_profile_object (#5782)
Add ‘Instance.exists’ method (#5802)
Add ‘InstanceAdminClient.list_clusters’ method (#5715)
Add ‘Instance._state’ property (#5736)
Convert ‘instance.labels’ to return a dictionary (#5728)
Reshape cluster.py, adding cluster() factory to instance.py (#5663)
Convert ‘Instance.update’ to use ‘instance.partial_instance_update’ API (#5643)
Refactor ‘InstanceAdminClient.update_app_profile’ to remove update_mask argument (#5684)
Add the ability to create an instance with multiple clusters (#5622)
Add ‘instance_type’, ‘labels’ to ‘Instance’ ctor (#5614)
Add optional app profile to ‘Instance.table’ (#5605)
Clean up Instance creation. (#5542)
Make ‘InstanceAdminClient.list_instances’ return actual instance objects, not protos. (#5420)
Add admin app profile methods on Instance (#5315)
Internal / Testing Changes
Rename releases to changelog and include from CHANGELOG.md (#5191)
Fix bad trove classifier
Integrate new generated low-level client (#5178)
Override gRPC max message lengths. (#5498)
Use client properties rather than private attrs (#5398)
Fix the broken Bigtable system test. (#5607)
Fix Py3 breakage in new system test. (#5474)
Modify system test for new GAPIC code (#5302)
Add Test runs for Python 3.7 and remove 3.4 (#5295)
Disable Bigtable system tests (#5381)
Modify system tests to use prerelease versions of grpcio (#5304)
Pass through ‘session.posargs’ when running Bigtable system tests. (#5418)
Harden ‘test_list_instances’ against simultaneous test runs. (#5476)
Shorten instance / cluster name to fix CI breakage. (#5641)
Fix failing systest: ‘test_create_instance_w_two_clusters’. (#5836)
Add labels {’python-system’: ISO-timestamp} to systest instances (#5729)
Shorten cluster ID in system test (#5719)
Harden ‘test_list_instances’ further. (#5696)
Improve testing of create instance (#5544)
0.29.0
New features
Use api_core.retry for mutate_row (#4665, #4341)
Added a row generator on a table. (#4679)
Implementation changes
Remove gax usage from BigTable (#4873)
BigTable: Cell.from_pb() performance improvement (#4745)
Dependencies
Update dependency range for api-core to include v1.0.0 releases (#4944)
Documentation
Minor typo (#4758)
Row filter end points documentation error (#4667)
Removing “rename” from bigtable table.py comments (#4526)
Small docs/hygiene tweaks after #4256. (#4333)
Testing and internal changes
Install local dependencies when running lint (#4936)
Re-enable lint for tests, remove usage of pylint (#4921)
Normalize all setup.py files (#4909)
Timestamp system test fix (#4765)
0.28.1
Implementation Changes
Bugfix: Distinguish between an unset column qualifier and an empty string
column qualifier while parsing a ReadRows response (#4252)
Features added
Add a retry strategy that will be used for retry-able errors
in Table.mutate_rows . This will be used for gRPC errors of type
ABORTED , DEADLINE_EXCEEDED and SERVICE_UNAVAILABLE . (#4256)
PyPI: https://pypi.org/project/google-cloud-bigtable/0.28.1/
0.28.0
Documentation
Fixed referenced types in Table.row docstring (#3934, h/t to
@MichaelTamm)
Added link to “Python Development Environment Setup Guide” in
project README (#4187, h/t to @michaelawyu)
Dependencies
Upgrading to google-cloud-core >= 0.28.0 and adding dependency
on google-api-core (#4221, #4280)
PyPI: https://pypi.org/project/google-cloud-bigtable/0.28.0/
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
