---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.845Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "jsonschema dependency for DAG serialization"
feature_slug: "jsonschema-dependency-for-dag-serialization"
latest_feature_date: "2019-10-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/changelog"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest"
keywords:
  - "jsonschema"
  - "serialization"
  - "dependency"
  - "provides"
  - "python"
---

# jsonschema dependency for DAG serialization

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer provides jsonschema as a Python dependency for DAG serialization; Cloud Composer provides jsonschema as a Python dependency for DAG serialization.

## Extended Definition

Cloud Composer provides jsonschema as a Python dependency for DAG serialization; Cloud Composer provides jsonschema as a Python dependency for DAG serialization.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/changelog](https://docs.cloud.google.com/python/docs/reference/composer/latest/changelog)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest](https://docs.cloud.google.com/python/docs/reference/composer/latest)

## Supporting Pages

### Install Python dependencies \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- Source ID: `site-iam-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Install a Python dependency to a private IP environment in a VPC Service Controls perimeter Protecting your project with a VPC Service Controls perimeter results in further security restrictions.
- PythonVirtualenvOperator You don't want the package to be installed for all Airflow workers, or the dependency conflicts with preinstalled packages.
- To install custom PyPI packages from an Artifact Registry repository: Create a pip.conf file and include the following information in the file, if applicable: URL of the Artifact Registry repository (in the index-url parameter) Access credentials for the repository Non-default pip installation options For an Artifact Registry repository, append /simple/ to the repository URL: [global] index-url = https://us-central1-python.pkg.dev/example-project/example-repository/simple/ (Optional) In some cases, you might want to fetch packages from multiple repositories, such as when your Artifact Registry repository contains some specific packages that you want to install, and you want to install all other packages from PyPI: Configure an Artifact Registry virtual repository .
- You can use the --tree argument to get the result of the python -m pipdeptree --warn command. gcloud beta composer environments list-packages \ ENVIRONMENT NAME \ --location LOCATION Replace: ENVIRONMENT NAME with the name of the environment.

### "Python Client for Cloud Composer \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest](https://docs.cloud.google.com/python/docs/reference/composer/latest)
- Source ID: `site-python-reference`
- Final score: 71
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Environment-Based Examples Enabling the default handler for all Google-based loggers export GOOGLE SDK PYTHON LOGGING SCOPE=google Enabling the default handler for a specific Google module (for a client library called library v1 ): export GOOGLE SDK PYTHON LOGGING SCOPE=google.cloud.library v1 Advanced, code-based configuration You can also configure a valid logging scope using Python’s standard logging mechanism.
- Mac/Linux python3 -m venv <your-env> source <your-env>/bin/activate pip install google-cloud-orchestration-airflow Windows py -m venv <your-env> .\<your-env>\Scripts\activate pip install google-cloud-orchestration-airflow Next Steps Read the Client Library Documentation for Cloud Composer to see other available methods on the client.
- Python >= 3.7, including 3.14 Unsupported Python Versions Python <= 3.6 If you are using an end-of-life version of Python, we recommend that you update as soon as possible to an actively supported version.
- Simple, environment-based configuration To enable logging for this library without any changes in your code, set the GOOGLE SDK PYTHON LOGGING SCOPE environment variable to a valid Google logging scope.

### Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/changelog](https://docs.cloud.google.com/python/docs/reference/composer/latest/changelog)
- Source ID: `site-python-reference`
- Final score: 70
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Version latest keyboard arrow down 1.19.0 (latest) 1.18.0 1.17.5 1.16.1 1.15.1 1.14.0 1.13.1 1.12.2 1.11.1 1.10.0 1.9.1 1.8.0 1.7.1 1.6.1 1.5.0 1.4.4 1.3.2 1.2.1 1.1.0 1.0.0 0.1.3 PyPI History 1.19.0 (2026-01-09) Features auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 ) check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 ) 1.18.0 (2025-10-20) Features Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def ) Bug Fixes Deprecate credentials file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def ) 1.17.5 (2025-04-15) Documentation enabled field of MasterAuthorizedNetworksConfig is now marked as optional ( 0a2a1ee ) 1.17.4 (2025-04-12) Documentation [google-cloud-orchestration-airflow] enabled field of MasterAuthorizedNetworksConfig is now marked as optional ( #13728 ) ( 79835a9 ) 1.17.3 (2025-03-21) Documentation [google-cloud-orchestration-airflow] fix typo in comments ( #13697 ) ( 6e93528 ) 1.17.2 (2025-03-19) Documentation [google-cloud-orchestration-airflow] A comment for field ( 6cce4cd ) [google-cloud-orchestration-airflow] update composer supported environments version match ( #13663 ) ( 098c51d ) A comment for field connection type in message .google.cloud.orchestration.airflow.service.v1.NetworkingConfig is changed ( #13679 ) ( 6cce4cd ) 1.17.1 (2025-03-15) Bug Fixes [Many APIs] Allow Protobuf 6.x ( 7295cbb ) remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 ) Documentation [google-cloud-orchestration-airflow] fix Composer 3 image version format in API docs ( #13649 ) ( fb48dac ) 1.17.0 (2025-02-12) Features Add REST Interceptors which support reading metadata ( a0910dd ) Add support for reading selective GAPIC generation methods from service YAML ( a0910dd ) 1.16.1 (2025-01-16) Documentation [google-cloud-orchestration-airflow] A comment for method ListWorkloads in service Environments is changed ( #13443 ) ( f47303a ) 1.16.0 (2024-12-12) Features Add support for opt-in debug logging ( f05eae5 ) Bug Fixes Fix typing issue with gRPC metadata when key ends in -bin ( f05eae5 ) Documentation A comment for field config in message .google.cloud.orchestration.airflow.service.v1beta1.Environment is changed ( f05eae5 ) A comment for field data in message .google.cloud.orchestration.airflow.service.v1beta1.UserWorkloadsConfigMap is changed ( f05eae5 ) A comment for field data in message .google.cloud.orchestration.airflow.service.v1beta1.UserWorkloadsSecret is changed ( f05eae5 ) A comment for field image version in message .google.cloud.orchestration.airflow.service.v1beta1.SoftwareConfig is changed ( f05eae5 ) A comment for field name in message .google.cloud.orchestration.airflow.service.v1beta1.Environment is changed ( f05eae5 ) A comment for field node config in message .google.cloud.orchestration.airflow.service.v1beta1.EnvironmentConfig is changed ( f05eae5 ) A comment for field private environment config in message .google.cloud.orchestration.airflow.service.v1beta1.EnvironmentConfig is changed ( f05eae5 ) A comment for field software config in message .google.cloud.orchestration.airflow.service.v1beta1.EnvironmentConfig is changed ( f05eae5 ) add examples for kubernetes secret ( f05eae5 ) 1.15.1 (2024-11-11) Bug Fixes disable universe-domain validation ( #13244 ) ( ae1f471 ) 1.15.0 (2024-10-24) Features Add support for Python 3.13 ( #13208 ) ( a019409 ) 1.14.0 (2024-09-16) Features [google-cloud-orchestration-airflow] A new method CheckUpgrade is added to service Environments ( b624f04 ) [google-cloud-orchestration-airflow] add satisfies pzi to Environment ( b624f04 ) A new field airflow metadata retention config is added to message .google.cloud.orchestration.airflow.service.v1.DataRetentionConfig ( b624f04 ) A new field satisfies pzi is added to message .google.cloud.orchestration.airflow.service.v1.Environment ( b624f04 ) A new message AirflowMetadataRetentionPolicyConfig is added ( b624f04 ) A new message CheckUpgradeRequest is added ( b624f04 ) Documentation A comment for field maintenance window in message .google.cloud.orchestration.airflow.service.v1.EnvironmentConfig is changed ( b624f04 ) A comment for field storage mode in message .google.cloud.orchestration.airflow.service.v1.TaskLogsRetentionConfig is changed ( b624f04 ) A comment for message WorkloadsConfig is changed ( b624f04 ) 1.13.1 (2024-07-30) Bug Fixes Retry and timeout values do not propagate in requests during pagination ( d95af77 ) 1.13.0 (2024-07-10) Features add airflow database retention days and airflow metadata retention config to message DataRetentionConfig ( 547a8d8 ) add AirflowMetadataRetentionPolicyConfig message ( 547a8d8 ) Documentation various documentation clarifications ( 547a8d8 ) 1.12.2 (2024-07-08) Bug Fixes Allow Protobuf 5.x ( #12868 ) ( 0e39c1a ) 1.12.1 (2024-03-05) Bug Fixes deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12386 ) ( edcad16 ) 1.12.0 (2024-02-22) Features Added field data retention config to EnvironmentConfig ( 0268729 ) Added field storage config to Environment ( 0268729 ) Added field web server plugins mode to SoftwareConfig ( 0268729 ) Added ListWorkloads RPC ( 0268729 ) Bug Fixes deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12308 ) ( 74dabeb ) fix ValueError in test validate universe domain ( 7c2f2c2 ) 1.11.1 (2024-02-06) Bug Fixes Add google-auth as a direct dependency ( e75fcf6 ) Add staticmethod decorator to get client cert source and get api endpoint ( e75fcf6 ) Resolve AttributeError ‘Credentials’ object has no attribute ‘universe domain’ ( e75fcf6 ) 1.11.0 (2024-02-01) Features Allow users to explicitly configure universe domain ( 4368029 ) 1.10.0 (2023-12-07) Features Add support for python 3.12 ( f46b37f ) Introduce compatibility with native namespace packages ( f46b37f ) Bug Fixes Require proto-plus >= 1.22.3 ( f46b37f ) Use retry async instead of retry in async client ( f46b37f ) 1.9.2 (2023-09-19) Documentation Minor formatting ( 1ae610b ) 1.9.1 (2023-07-05) Bug Fixes Add async context manager return types ( #11448 ) ( 4d2c35a ) 1.9.0 (2023-06-14) Features added RPCs StopAirflowCommand, ExecuteAirflowCommand, PollAirflowCommand, DatabaseFailover, FetchDatabaseProperties ( #11400 ) ( b2dc3e5 ) 1.8.0 (2023-05-25) Features Add airflow byoid uri field to Cloud Composer API ( #172 ) ( a402b20 ) 1.7.1 (2023-03-23) Documentation Fix formatting of request arg in docstring ( #170 ) ( 91e315c ) 1.7.0 (2023-02-17) Features Enable “rest” transport in Python for services supporting numeric enums ( #163 ) ( 43b46e2 ) Bug Fixes Add service yaml parameters to py gapic library BUILD.bazel targets ( #165 ) ( e244bd5 ) 1.6.1 (2023-01-20) Bug Fixes Add context manager return types ( 693d570 ) Documentation Add documentation for enums ( 693d570 ) 1.6.0 (2023-01-10) Features Add support for python 3.11 ( #154 ) ( 86db9d6 ) 1.5.0 (2022-12-13) Features add support for google.cloud.orchestration.airflow.service. version ( 8edf594 ) Add typing to proto.Message based class attributes ( 8edf594 ) added field enable ip masq agent to NodeConfig ( 6c8a0bf ) added field scheduler count to SoftwareConfig ( 6c8a0bf ) added fields cloud composer network ipv4 cidr block, cloud composer network ipv4 reserved range, enable privately used public ips, cloud composer connection subnetwork, networking config to PrivateEnvironmentConfig ( 6c8a0bf ) added fields maintenance window, workloads config, environment size, master authorized networks config, recovery config to EnvironmentConfig ( 6c8a0bf ) Added LoadSnapshot, SaveSnapshot RPCs ( #150 ) ( 6c8a0bf ) Bug Fixes Add dict typing for client options ( 8edf594 ) deps: Require google-api-core >=1.34.0, >=2.11.0 ( 9b1d61e ) Drop usage of pkg resources ( 9b1d61e ) Fix timeout default values ( 9b1d61e ) Documentation samples: Snippetgen handling of repeated enum field ( 8edf594 ) samples: Snippetgen should call await on the operation coroutine before calling result ( 9b1d61e ) 1.4.4 (2022-10-07) Bug Fixes deps: Allow protobuf 3.19.5 ( #143 ) ( d6bc170 ) 1.4.3 (2022-09-29) Bug Fixes deps: Require protobuf >= 3.20.2 ( #141 ) ( ab36ee0 ) 1.4.2 (2022-08-11) Bug Fixes deps: allow protobuf < 5.0.0 ( #128 ) ( 73fb0c2 ) deps: require proto-plus >= 1.22.0 ( 73fb0c2 ) 1.4.1 (2022-07-13) Bug Fixes deps: require google-api-core>=1.32.0,>=2.8.0 ( #120 ) ( 3fcf6fc ) 1.4.0 (2022-07-07) Features add audience parameter ( 1e74b80 ) Bug Fixes deps: require google-api-core >= 2.8.0 ( #116 ) ( 1e74b80 ) require python 3.7+ ( #118 ) ( 891963c ) 1.3.2 (2022-06-03) Bug Fixes deps: require protobuf <4.0.0dev ( #108 ) ( 9f4671f ) Documentation fix changelog header to consistent size ( #109 ) ( 5d8f6a0 ) 1.3.1 (2022-03-05) Bug Fixes deps: require google-api-core>=1.31.5, >=2.3.2 ( #70 ) ( 5847489 ) 1.3.0 (2022-02-26) Features add api key support ( #60 ) ( 8e05a90 ) Bug Fixes resolve DuplicateCredentialArgs error when using credentials file ( #63 ) ( d2bd1b9 ) 1.2.1 (2021-11-01) Bug Fixes deps: drop packaging dependency ( be8de44 ) deps: require google-api-core >= 1.28.0 ( be8de44 ) Documentation list oneofs in docstring ( be8de44 ) 1.2.0 (2021-10-18) Features add support for python 3.10 ( #36 ) ( f8a94e1 ) 1.1.0 (2021-10-08) Features add context manager support in client ( #32 ) ( e88a664 ) 1.0.0 (2021-10-05) Features bump release level to production/stable ( #12 ) ( 9034947 ) 0.1.3 (2021-09-30) Bug Fixes improper types in pagers generation ( b9b7a2f ) 0.1.2 (2021-09-24) Bug Fixes add ‘dict’ annotation type to ‘request’ ( 7d5d4de ) 0.1.1 (2021-07-28) Bug Fixes deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #9 ) ( b4ef804 ) 0.1.0 (2021-07-28) Features generate v1 and v1beta1 ( 87d29da ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Developer tools Python Client libraries Send feedback Changelog Stay organized with collections Save and categorize content based on your preferences.

