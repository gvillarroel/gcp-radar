---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.795Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "google-cloud-datacatalog package support"
feature_slug: "google-cloud-datacatalog-package-support"
latest_feature_date: "2020-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
keywords:
  - "datacatalog"
  - "installed"
  - "environments"
  - "pypi"
  - "running"
  - "package"
---

# google-cloud-datacatalog package support

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

The google-cloud-datacatalog PyPI package can be installed on Composer environments running Airflow 1.10.6 and Python 3.

## Extended Definition

The google-cloud-datacatalog PyPI package can be installed on Composer environments running Airflow 1.10.6 and Python 3.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)

## Supporting Pages

### "Class EnvironmentsAsyncClient (1.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- For example, to delete all pre-existing user-specified PyPI packages and install botocore at version 1.7.14, the updateMask would contain the path "config.softwareConfig.pypiPackages", and the patch environment would be the following: :: { "config":{ "softwareConfig":{ "pypiPackages":{ "botocore":"==1.7.14" } } } } Note: Only the following fields can be updated: - config.softwareConfig.pypiPackages - Replace all custom custom PyPI packages.
- For example, to set the version of scikit-learn to install in the environment to 0.19.0 and to remove an existing installation of numpy, the updateMask parameter would include the following two paths values: "config.softwareConfig.pypiPackages.scikit-learn" and "config.softwareConfig.pypiPackages.numpy".
- The included patch environment would specify the scikit-learn version as follows: :: { "config":{ "softwareConfig":{ "pypiPackages":{ "scikit-learn":"==0.19.0" } } } } Note that in the above example, any existing PyPI packages other than scikit-learn and numpy will be unaffected.
- It is an error to provide both this mask and a mask specifying an individual package. - config.softwareConfig.pypiPackages. \ packagename - Update the custom PyPI package packagename , preserving other packages.

### "Class EnvironmentsClient (1.19.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient)
- Source ID: `site-python-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- For example, to delete all pre-existing user-specified PyPI packages and install botocore at version 1.7.14, the updateMask would contain the path "config.softwareConfig.pypiPackages", and the patch environment would be the following: :: { "config":{ "softwareConfig":{ "pypiPackages":{ "botocore":"==1.7.14" } } } } Note: Only the following fields can be updated: - config.softwareConfig.pypiPackages - Replace all custom custom PyPI packages.
- For example, to set the version of scikit-learn to install in the environment to 0.19.0 and to remove an existing installation of numpy, the updateMask parameter would include the following two paths values: "config.softwareConfig.pypiPackages.scikit-learn" and "config.softwareConfig.pypiPackages.numpy".
- The included patch environment would specify the scikit-learn version as follows: :: { "config":{ "softwareConfig":{ "pypiPackages":{ "scikit-learn":"==0.19.0" } } } } Note that in the above example, any existing PyPI packages other than scikit-learn and numpy will be unaffected.
- It is an error to provide both this mask and a mask specifying an individual package. - config.softwareConfig.pypiPackages. \ packagename - Update the custom PyPI package packagename , preserving other packages.

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Custom Python Package Index (PyPI) packages to be installed in the environment.
- Resource: Environment JSON representation EnvironmentConfig JSON representation SoftwareConfig JSON representation CloudDataLineageIntegration JSON representation WebServerPluginsMode NodeConfig JSON representation IPAllocationPolicy JSON representation PrivateEnvironmentConfig JSON representation NetworkingType PrivateClusterConfig JSON representation NetworkingConfig JSON representation ConnectionType WebServerNetworkAccessControl JSON representation AllowedIpRange JSON representation DatabaseConfig JSON representation WebServerConfig JSON representation EncryptionConfig JSON representation MaintenanceWindow JSON representation WorkloadsConfig JSON representation SchedulerResource JSON representation WebServerResource JSON representation WorkerResource JSON representation TriggererResource JSON representation DagProcessorResource JSON representation EnvironmentSize MasterAuthorizedNetworksConfig JSON representation CidrBlock JSON representation RecoveryConfig JSON representation ScheduledSnapshotsConfig JSON representation ResilienceMode DataRetentionConfig JSON representation AirflowMetadataRetentionPolicyConfig JSON representation RetentionMode TaskLogsRetentionConfig JSON representation TaskLogsStorageMode State StorageConfig JSON representation Methods Resource: Environment An environment for running orchestration tasks.
- JSON representation { "imageVersion" : string , "airflowConfigOverrides" : { string : string , ... } , "pypiPackages" : { string : string , ... } , "envVariables" : { string : string , ... } , "pythonVersion" : string , "schedulerCount" : integer , "cloudDataLineageIntegration" : { object ( CloudDataLineageIntegration ) } , "webServerPluginsMode" : enum ( WebServerPluginsMode ) } Fields imageVersion string Optional.
- Certain Apache Airflow configuration property values are blocked , and cannot be overridden. pypiPackages map (key: string, value: string) Optional.

