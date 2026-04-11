---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/datastream/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/datastream/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/datastream/latest/changelog
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
1.18.0 (latest)
1.17.0
1.16.0
1.15.0
1.14.1
1.13.2
1.12.0
1.11.0
1.10.1
1.9.5
1.8.0
1.7.0
1.6.1
1.5.1
1.4.1
1.3.0
1.2.2
1.1.1
1.0.2
0.4.3
0.3.1
0.2.0
0.1.3
PyPI History
1.18.0 (2026-03-26)
Features
Allow Protobuf 7.x ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
update image to us-central1-docker.pkg.dev/cloud-sdk-librarian-prod/images-prod/python-librarian-generator@sha256:f5426423676c75008c2135037e7b98f78cbb99f78b3c46fe043b6897be92d836 ( 3654fe76d755dd8db62ece81d5770ec58b3624df )
Bug Fixes
Require Python 3.9 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Require google-api-core >= 2.11.0 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Improve type checking ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
1.17.0 (2026-01-08)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
1.16.0 (2025-10-16)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
1.15.0 (2025-08-10)
Features
Add new field mongodb_cluster to message DiscoverConnectionProfileRequest ( 7aed62d )
Add new field mongodb_profile to message ConnectionProfile ( 7aed62d )
Add new field project_id to message BigQueryDestinationConfig ( 7aed62d )
Add new field psc_interface_config to message PrivateConnection ( 7aed62d )
Add new field salesforce_org to message DiscoverConnectionProfileRequest ( 7aed62d )
Add new field validate_only to message CreatePrivateConnectionRequest ( 7aed62d )
Add new field for server certificate to message OracleSslConfig ( 7aed62d )
Add new field for server certificate to message PostgresqlSslConfig ( 7aed62d )
1.14.1 (2025-06-11)
Documentation
Update import statement example in README ( 3d5bc37 )
1.14.0 (2025-03-27)
Features
A new field blmt_config is added to message .google.cloud.datastream.v1.BigQueryDestinationConfig ( 8bdf223 )
A new field mysql_gtid_position is added to message .google.cloud.datastream.v1.CdcStrategy ( 8bdf223 )
A new field satisfies_pzi is added to multiple messages. ( 8bdf223 )
A new field satisfies_pzs is added to multiple messages. ( 8bdf223 )
A new field secret_manager_stored_password is added to multiple messages ( 8bdf223 )
A new message BlmtConfig is added ( 8bdf223 )
A new message MysqlGtidPosition is added ( 8bdf223 )
A new messages related to SalesforceProfile are added ( 8bdf223 )
Documentation
documentation improvements and changes for multiple fields ( 8bdf223 )
1.13.2 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( feb5353 )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
1.13.1 (2025-02-18)
Bug Fixes
deps: Require grpc-google-iam-v1>=0.14.0 ( 16e14c8 )
1.13.0 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( e92d527 )
Add support for reading selective GAPIC generation methods from service YAML ( e92d527 )
1.12.0 (2025-01-20)
Features
A new message PostgresqlSslConfig is added ( 6fa4ff8 )
Documentation
A comment for field name in message .google.cloud.datastream.v1.ConnectionProfile is changed ( 6fa4ff8 )
A comment for field name in message .google.cloud.datastream.v1.PrivateConnection is changed ( 6fa4ff8 )
A comment for field name in message .google.cloud.datastream.v1.Route is changed ( 6fa4ff8 )
A comment for field name in message .google.cloud.datastream.v1.Stream is changed ( 6fa4ff8 )
A comment for field name in message .google.cloud.datastream.v1.StreamObject is changed ( 6fa4ff8 )
A comment for field password in message .google.cloud.datastream.v1.OracleAsmConfig is changed ( 6fa4ff8 )
A comment for message OracleAsmConfig is changed ( 6fa4ff8 )
1.11.0 (2024-12-12)
Features
A new field append_only is added to message .google.cloud.datastream.v1.BigQueryDestinationConfig ( e3cdd49 )
A new field binary_log_parser is added to message .google.cloud.datastream.v1.OracleSourceConfig ( e3cdd49 )
A new field binary_log_position is added to message .google.cloud.datastream.v1.MysqlSourceConfig ( e3cdd49 )
A new field gtid is added to message .google.cloud.datastream.v1.MysqlSourceConfig ( e3cdd49 )
A new field last_recovery_time is added to message .google.cloud.datastream.v1.Stream ( e3cdd49 )
A new field log_miner is added to message .google.cloud.datastream.v1.OracleSourceConfig ( e3cdd49 )
A new field merge is added to message .google.cloud.datastream.v1.BigQueryDestinationConfig ( e3cdd49 )
A new field oracle_asm_config is added to message .google.cloud.datastream.v1.OracleProfile ( e3cdd49 )
A new field oracle_ssl_config is added to message .google.cloud.datastream.v1.OracleProfile ( e3cdd49 )
A new field secret_manager_stored_password is added to message .google.cloud.datastream.v1.OracleProfile ( e3cdd49 )
A new field sql_server_excluded_objects is added to message .google.cloud.datastream.v1.Stream ( e3cdd49 )
A new field sql_server_identifier is added to message .google.cloud.datastream.v1.SourceObjectIdentifier ( e3cdd49 )
A new field sql_server_profile is added to message .google.cloud.datastream.v1.ConnectionProfile ( e3cdd49 )
A new field sql_server_rdbms is added to message .google.cloud.datastream.v1.DiscoverConnectionProfileRequest ( e3cdd49 )
A new field sql_server_rdbms is added to message .google.cloud.datastream.v1.DiscoverConnectionProfileResponse ( e3cdd49 )
A new field sql_server_source_config is added to message .google.cloud.datastream.v1.SourceConfig ( e3cdd49 )
A new message AppendOnly is added ( e3cdd49 )
A new message BinaryLogParser is added ( e3cdd49 )
A new message BinaryLogPosition is added ( e3cdd49 )
A new message CdcStrategy is added ( e3cdd49 )
A new message Gtid is added ( e3cdd49 )
A new message LogMiner is added ( e3cdd49 )
A new message Merge is added ( e3cdd49 )
A new message MysqlLogPosition is added ( e3cdd49 )
A new message OracleAsmConfig is added ( e3cdd49 )
A new message OracleScnPosition is added ( e3cdd49 )
A new message OracleSslConfig is added ( e3cdd49 )
A new message RunStreamRequest is added ( e3cdd49 )
A new message SqlServerChangeTables is added ( e3cdd49 )
A new message SqlServerColumn is added ( e3cdd49 )
A new message SqlServerLsnPosition is added ( e3cdd49 )
A new message SqlServerObjectIdentifier is added ( e3cdd49 )
A new message SqlServerProfile is added ( e3cdd49 )
A new message SqlServerRdbms is added ( e3cdd49 )
A new message SqlServerSchema is added ( e3cdd49 )
A new message SqlServerSourceConfig is added ( e3cdd49 )
A new message SqlServerTable is added ( e3cdd49 )
A new message SqlServerTransactionLogs is added ( e3cdd49 )
A new method RunStream is added to service Datastream ( e3cdd49 )
A new value WARNING is added to enum State ( e3cdd49 )
Add support for opt-in debug logging ( 19ed3be )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( 19ed3be )
Documentation
A comment for field dataset_id in message .google.cloud.datastream.v1.BigQueryDestinationConfig is changed ( e3cdd49 )
A comment for field password in message .google.cloud.datastream.v1.MysqlProfile is changed ( e3cdd49 )
A comment for field password in message .google.cloud.datastream.v1.OracleProfile is changed ( e3cdd49 )
A comment for field password in message .google.cloud.datastream.v1.PostgresqlProfile is changed ( e3cdd49 )
A comment for field requested_cancellation in message .google.cloud.datastream.v1.OperationMetadata is changed ( e3cdd49 )
A comment for field state in message .google.cloud.datastream.v1.BackfillJob is changed ( e3cdd49 )
A comment for field state in message .google.cloud.datastream.v1.Validation is changed ( e3cdd49 )
A comment for field stream_large_objects in message .google.cloud.datastream.v1.OracleSourceConfig is changed ( e3cdd49 )
A comment for message MysqlProfile is changed ( e3cdd49 )
A comment for message OracleProfile is changed ( e3cdd49 )
1.10.1 (2024-10-31)
Bug Fixes
disable universe-domain validation ( 53c951e )
1.10.0 (2024-10-24)
Features
Add support for Python 3.13 ( #13202 ) ( 5b1f2f3 )
1.9.5 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( ba1064f )
1.9.4 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12866 ) ( 40e1810 )
1.9.3 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12384 ) ( c69966f )
1.9.2 (2024-02-22)
Bug Fixes
[Many APIs] fix ValueError in test__validate_universe_domain ( #12282 ) ( b985096 )
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12306 ) ( 1e787f2 )
1.9.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( c721248 )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( c721248 )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( c721248 )
1.9.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12239 ) ( 8004d15 )
1.8.0 (2023-12-07)
Features
Add support for python 3.12 ( b96013d )
Introduce compatibility with native namespace packages ( b96013d )
Bug Fixes
Require proto-plus >= 1.22.3 ( b96013d )
Use retry_async instead of retry in async client ( b96013d )
1.7.1 (2023-09-19)
Documentation
Minor formatting ( #11632 ) ( dbee08f )
1.7.0 (2023-07-24)
Features
Add precision and scale to MysqlColumn ( #11507 ) ( add1b35 )
1.6.1 (2023-07-05)
Bug Fixes
Add async context manager return types ( #11445 ) ( 98bddda )
1.6.0 (2023-05-25)
Features
Max concurrent backfill tasks ( #168 ) ( 06a127b )
1.5.1 (2023-03-23)
Documentation
Fix formatting of request arg in docstring ( #165 ) ( e44614b )
1.5.0 (2023-02-17)
Features
Enable “rest” transport in Python for services supporting numeric enums ( #158 ) ( c96a9ad )
1.4.1 (2023-01-20)
Bug Fixes
Add context manager return types ( a12a7e7 )
Documentation
Add documentation for enums ( a12a7e7 )
1.4.0 (2023-01-10)
Features
Add support for python 3.11 ( #150 ) ( 9a67ea8 )
1.3.0 (2022-12-15)
Features
Add support for google.cloud.datastream.__version__ ( 431698c )
Add typing to proto.Message based class attributes ( 431698c )
Bug Fixes
Add dict typing for client_options ( 431698c )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( 34ff993 )
Drop usage of pkg_resources ( 34ff993 )
Fix timeout default values ( 34ff993 )
Documentation
samples: Snippetgen handling of repeated enum field ( 431698c )
samples: Snippetgen should call await on the operation coroutine before calling result ( 34ff993 )
1.2.2 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #140 ) ( 7665324 )
1.2.1 (2022-10-03)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #138 ) ( 1963f81 )
1.2.0 (2022-08-24)
Features
added support for BigQuery destination and PostgreSQL source types ( #124 ) ( 6eb26d1 )
1.1.1 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #120 ) ( 5923fd3 )
deps: require proto-plus >= 1.22.0 ( 5923fd3 )
1.1.0 (2022-07-15)
Features
add audience parameter ( 32ab62f )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #111 ) ( 32ab62f )
require python 3.7+ ( #113 ) ( 2200832 )
1.0.2 (2022-06-03)
Bug Fixes
deps: require protobuf <4.0.0dev ( #100 ) ( 251b6b4 )
Documentation
fix changelog header to consistent size ( #101 ) ( f3dc083 )
1.0.1 (2022-05-06)
Documentation
fix type in docstring for map fields ( cb7249d )
1.0.0 (2022-03-15)
Features
bump release level to production/stable ( 05b5c87 )
0.4.2 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #76 ) ( f29eba0 )
0.4.1 (2022-02-26)
Documentation
add generated snippets ( #66 ) ( 75656c1 )
0.4.0 (2022-02-03)
Features
add api key support ( #58 ) ( 88cf10a )
add datastream v1 ( #61 ) ( 28dab85 )
Bug Fixes
remove FetchErrorsRequest and FetchErrorsResponse ( 28dab85 )
remove GcsFileFormat and SchemaFileFormat ( 28dab85 )
remove NoConnectivitySettings ( 28dab85 )
0.3.1 (2021-11-01)
Bug Fixes
deps: drop packaging dependency ( 1ea0cb4 )
deps: require google-api-core >= 1.28.0 ( 1ea0cb4 )
Documentation
list oneofs in docstring ( 1ea0cb4 )
0.3.0 (2021-10-15)
Features
add support for python 3.10 ( #38 ) ( 52d43b4 )
0.2.0 (2021-10-08)
Features
add context manager support in client ( #35 ) ( fa36978 )
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( 973c851 )
improper types in pagers generation ( 09eaafd )
0.1.3 (2021-08-30)
Bug Fixes
datastream: Change a few resource pattern variables from camelCase to snake_case ( #20 ) ( 296962a )
0.1.2 (2021-07-29)
Bug Fixes
enable self signed jwt for grpc ( #11 ) ( a292c8d )
Documentation
add Samples section to CONTRIBUTING.rst ( #7 ) ( 2159aa8 )
Miscellaneous Chores
release as 0.1.2 ( #12 ) ( 15998c2 )
0.1.1 (2021-07-21)
Bug Fixes
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #6 ) ( 641dbc7 )
0.1.0 (2021-06-30)
Features
generate v1alpha1 ( 00ea8f3 )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
