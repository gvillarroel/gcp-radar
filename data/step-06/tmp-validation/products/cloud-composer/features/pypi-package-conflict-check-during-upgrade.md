---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.715Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "PyPI package conflict check during upgrade"
feature_slug: "pypi-package-conflict-check-during-upgrade"
latest_feature_date: "2021-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.CheckUpgradeResponse"
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
keywords:
  - "conflict"
  - "check"
  - "upgrade"
  - "during"
  - "pypi"
  - "package"
---

# PyPI package conflict check during upgrade

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer can check for conflicts between installed PyPI packages and preinstalled packages in a target image during environment upgrades.

## Extended Definition

Cloud Composer can check for conflicts between installed PyPI packages and preinstalled packages in a target image during environment upgrades.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.CheckUpgradeResponse](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.CheckUpgradeResponse)
- [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)

## Supporting Pages

### "Class CheckUpgradeResponse (1.19.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.CheckUpgradeResponse](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.CheckUpgradeResponse)
- Source ID: `site-python-reference`
- Final score: 169
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Url for a docker build log of an upgraded image. contains pypi modules conflict google.cloud.orchestration.airflow.service v1.types.CheckUpgradeResponse.ConflictResult Output only.
- Version latest keyboard arrow down 1.19.0 (latest) 1.18.0 1.17.5 1.16.1 1.15.1 1.14.0 1.13.1 1.12.2 1.11.1 1.10.0 1.9.1 1.8.0 1.7.1 1.6.1 1.5.0 1.4.4 1.3.2 1.2.1 1.1.0 1.0.0 0.1.3 CheckUpgradeResponse ( mapping = None , , ignore unknown fields = False , kwargs ) Message containing information about the result of an upgrade check operation.
- Extract from a docker image build log containing information about pypi modules conflicts. image version str Composer image for which the build was happening. pypi dependencies MutableMapping[str, str] Pypi dependencies specified in the environment configuration, at the time when the build was triggered.
- Home Documentation Developer tools Python Client libraries Send feedback Class CheckUpgradeResponse (1.19.0) Stay organized with collections Save and categorize content based on your preferences.

### Install Python dependencies \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- Source ID: `site-iam-reference`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This check reports if custom PyPI packages in your environment have any conflicts with preinstalled packages in a later Cloud Composer image.
- Install packages from PyPI A package can be installed from Python Package Index if it has no external dependencies or conflicts with preinstalled packages.
- To install custom PyPI packages from an Artifact Registry repository: Create a pip.conf file and include the following information in the file, if applicable: URL of the Artifact Registry repository (in the index-url parameter) Access credentials for the repository Non-default pip installation options For an Artifact Registry repository, append /simple/ to the repository URL: [global] index-url = https://us-central1-python.pkg.dev/example-project/example-repository/simple/ (Optional) In some cases, you might want to fetch packages from multiple repositories, such as when your Artifact Registry repository contains some specific packages that you want to install, and you want to install all other packages from PyPI: Configure an Artifact Registry virtual repository .
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.softwareConfig.pypiPackages.EXAMPLE PACKAGE, // config.softwareConfig.pypiPackages.ANOTHER PACKAGE { "config" : { "softwareConfig" : { "pypiPackages" : { "EXAMPLE PACKAGE" : "" , "ANOTHER PACKAGE" : ">=1.10.3" } } } } Terraform The pypi packages block in the software config block specifies packages. resource "google composer environment" "example" { name = " ENVIRONMENT NAME " region = " LOCATION " config { software config { pypi packages = { PACKAGE NAME = " EXTRAS AND VERSION " } } } } Replace: ENVIRONMENT NAME with the name of the environment.

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Methods checkUpgrade Check if an upgrade operation on the environment will succeed. create Create a new environment. databaseFailover Triggers database failover (only for highly resilient environments). delete Delete an environment. executeAirflowCommand Executes Airflow CLI command. fetchDatabaseProperties Fetches database properties. get Get an existing environment. list List environments. loadSnapshot Loads a snapshot of a Cloud Composer environment. patch Update an environment. pollAirflowCommand Polls Airflow CLI command execution and fetches logs. restartWebServer Restart Airflow web server. saveSnapshot Creates a snapshots of a Cloud Composer environment. stopAirflowCommand Stops Airflow CLI command execution.
- JSON representation { "imageVersion" : string , "airflowConfigOverrides" : { string : string , ... } , "pypiPackages" : { string : string , ... } , "envVariables" : { string : string , ... } , "pythonVersion" : string , "schedulerCount" : integer , "cloudDataLineageIntegration" : { object ( CloudDataLineageIntegration ) } , "webServerPluginsMode" : enum ( WebServerPluginsMode ) } Fields imageVersion string Optional.
- If true , builds performed during operations that install Python packages have only private connectivity to Google services (including Artifact Registry) and VPC network (if either NodeConfig.network and NodeConfig.subnetwork fields or NodeConfig.composer network attachment field are specified).
- Certain Apache Airflow configuration property values are blocked , and cannot be overridden. pypiPackages map (key: string, value: string) Optional.

