---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:20.167Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer location restriction compliance validation"
feature_slug: "cloud-composer-location-restriction-compliance-validation"
latest_feature_date: "2020-12-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-resource-location-restrictions"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
keywords:
  - "composer"
  - "location"
  - "restriction"
  - "compliance"
  - "validation"
  - "now"
  - "validates"
  - "region"
---

# Cloud Composer location restriction compliance validation

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Composer now validates region compliance with organization location restriction policies during environment creation and updates.

## Extended Definition

Composer now validates region compliance with organization location restriction policies during environment creation and updates.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-resource-location-restrictions](https://docs.cloud.google.com/composer/docs/composer-1/configure-resource-location-restrictions)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)

## Supporting Pages

### "Configure resource location restrictions \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-resource-location-restrictions](https://docs.cloud.google.com/composer/docs/composer-1/configure-resource-location-restrictions)
- Source ID: `site-iam-reference`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In addition to checking the location restrictions, Cloud Composer does the following: Stores user-customized Airflow images in regional Artifact Registry repositories.
- Caution: To get support from Cloud Customer Care, you might need to grant Google support engineers access to the Cloud Composer logs stored in Cloud Storage. gcloud Create a new Cloud Storage bucket. gcloud storage buckets create gs:// BUCKET NAME --location = LOCATION Replace: LOCATION with the region where the environment is located.
- To install Python dependencies in a Private IP environment when your location restrictions don't allow the US multi-region , use one of the following options: Use a private PyPI repository hosted in your VPC network .
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Configure resource location restrictions Stay organized with collections Save and categorize content based on your preferences.

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- If both this field and nodeConfig.location are specified, this machineType must belong to the nodeConfig.location ; if both are unspecified, the service will pick a zone in the Compute Engine region corresponding to the Cloud Composer location, and propagate that choice to both fields.
- If both this field and nodeConfig.machineType are specified, nodeConfig.machineType must belong to this location ; if both are unspecified, the service will pick a zone in the Compute Engine region corresponding to the Cloud Composer location, and propagate that choice to both fields.
- JSON representation { "location" : string , "machineType" : string , "network" : string , "subnetwork" : string , "diskSizeGb" : integer , "oauthScopes" : [ string ] , "serviceAccount" : string , "tags" : [ string ] , "ipAllocationPolicy" : { object ( IPAllocationPolicy ) } , "enableIpMasqAgent" : boolean , "composerNetworkAttachment" : string , "composerInternalIpv4CidrBlock" : string } Fields location string Optional.
- For example: "projects/{projectId}/regions/{regionId}/subnetworks/{subnetworkId}" If a subnetwork is provided, nodeConfig.network must also be provided, and the subnetwork must belong to the enclosing environment's project and location. diskSizeGb integer Optional.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "nodeConfig" : { "location" : "projects/example-project/zones/us-central1-a" , "oauthScopes" : [ "https://www.googleapis.com/auth/cloud-platform" , "https://www.googleapis.com/auth/bigquery" ], "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " }, "softwareConfig" : { "pythonVersion" : "3" } } } Terraform When you create an environment, following fields control miscellaneous parameters of your environment: zone field in the node config block specifies a Compute Engine zone for your environment VMs. oauth scopes field in the node config block specifies a comma-separated list of OAuth scopes. python version field in the software config block specifies the version of Python. resource "google composer environment" "example" { name = " ENVIRONMENT NAME " region = " LOCATION " config { node config { zone = " ZONE " oauth scopes = "[ OAUTH SCOPES ]" service account = " SERVICE ACCOUNT " } software config { python version = " PYTHON VERSION " } } } Replace: ZONE with the name of the Compute Engine zone.
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "maintenanceWindow" : { "startTime" : "2023-01-01T01:00:00Z" , "endTime" : "2023-01-01T07:00:00Z" , "recurrence" : "FREQ=WEEKLY;BYDAY=SU,WE,SA" }, "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Terraform The maintenance window block specifies the maintenance windows for your environment: resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { maintenance window { start time = " DATETIME START " end time = " DATETIME END " recurrence = " MAINTENANCE RECURRENCE " } node config { service account = " SERVICE ACCOUNT " } } } Replace: DATETIME START with the start date and time in the date/time input format .
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "softwareConfig" : { "imageVersion" : "composer-1.20.12-airflow-1.10.15" }, "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform To create an environment with default parameters is a specified location, add the following resource block to your Terraform configuration and run terraform apply . resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { software config { image version = " IMAGE VERSION " } node config { service account = " SERVICE ACCOUNT " } } } Important: You must specify an image version for Cloud Composer 1.
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "nodeConfig" : { "tags" : [ "group1" , "production" ], "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform When you create an environment, following fields define network tags for your environment: tags field in the node config block specifies a comma-separated list of network tags applied to all node VMs. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { node config { tags = [ " TAGS " ] service account = " SERVICE ACCOUNT " } } } Replace: TAGS with a comma-separated list of network tags.

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- The command-line interface is the recommended approach for deleting the connection: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ connections delete -- \ CONNECTION ID After deleting the connection, recreate it using the Airflow UI , ensuring that the fields you intend to leave empty are indeed left blank.
- Run a gcloud command to delete the deployments with the ABANDON policy: gcloud deployment-manager deployments delete addons-<uuid> \ --delete-policy = ABANDON gcloud deployment-manager deployments delete <location>-<env-name-prefix>-<hash>-sd \ --delete-policy = ABANDON Delete your Cloud Composer environment .
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Known issues Stay organized with collections Save and categorize content based on your preferences.
- Go to Deployment Manager Find all deployments marked with labels: goog-composer-environment:<environment-name> goog-composer-location:<environment-location> .

