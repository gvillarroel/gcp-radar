---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:20.139Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer Artifact Registry configuration"
feature_slug: "cloud-composer-artifact-registry-configuration"
latest_feature_date: "2021-01-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc"
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies"
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption"
keywords:
  - "composer"
  - "artifact"
  - "registry"
  - "configuration"
  - "environments"
  - "can"
  - "be"
  - "configured"
---

# Cloud Composer Artifact Registry configuration

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer environments can be configured to use Artifact Registry instead of Container Registry.

## Extended Definition

Cloud Composer environments can be configured to use Artifact Registry instead of Container Registry.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)
- [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption](https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption)

## Supporting Pages

### Configure VPC Service Controls \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)
- Source ID: `site-iam-reference`
- Final score: 259
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Make sure that your service perimeter has the following VPC accessible services, otherwise your environment might fail to create: Cloud Composer API (composer.googleapis.com) Compute Engine API (compute.googleapis.com) Kubernetes Engine API (container.googleapis.com) Container Registry API (containerregistry.googleapis.com) Artifact Registry API (artifactregistry.googleapis.com) Cloud Storage API (storage.googleapis.com) Cloud SQL Admin API (sqladmin.googleapis.com) Cloud Logging API (logging.googleapis.com) Cloud Monitoring API (monitoring.googleapis.com) Cloud Pub/Sub API (pubsub.googleapis.com) Cloud Cloud Resource Manager API (cloudresourcemanager.googleapis.com) Service Directory API (servicedirectory.googleapis.com) Cloud Key Management Service API (cloudkms.googleapis.com), if you are using Cloud KMS or CMEK keys.
- Warning: In all versions of Cloud Composer 1, if you include Cloud Identity-Aware Proxy API (iap.googleapis.com) or Identity-Aware Proxy TCP API (iaptunnel.googleapis.com) in your perimeter, then Cloud Composer environments cannot be created .
- Cloud Composer environments can be deployed within a service perimeter.
- Cloud Composer environments use the following domains: .googleapis.com is used to access other Google services. .pkg.dev is used to get environment images, such as when creating or updating an environment. .gcr.io GKE requires connectivity to Container Registry domain regardless of Cloud Composer version.

### Install Python dependencies \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- Source ID: `site-iam-reference`
- Final score: 243
- Re-rank relevance: N/A

Evidence snippets:
- You can use the --tree argument to get the result of the python -m pipdeptree --warn command. gcloud beta composer environments list-packages \ ENVIRONMENT NAME \ --location LOCATION Replace: ENVIRONMENT NAME with the name of the environment.
- Users with the composer.environments.update permission can execute Python code on behalf of the environment's service account when installing packages in your environment.
- Go to the PyPI Packages tab. gcloud gcloud composer environments describe ENVIRONMENT NAME \ --location LOCATION \ --format = "value(config.softwareConfig.pypiPackages)" Replace: ENVIRONMENT NAME with the name of the environment.
- Install packages from an Artifact Registry repository You can store packages in an Artifact Registry repository in your project, and configure your environment to install from it.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 233
- Re-rank relevance: N/A

Evidence snippets:
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "softwareConfig" : { "imageVersion" : "composer-1.20.12-airflow-1.10.15" }, "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform To create an environment with default parameters is a specified location, add the following resource block to your Terraform configuration and run terraform apply . resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { software config { image version = " IMAGE VERSION " } node config { service account = " SERVICE ACCOUNT " } } } Important: You must specify an image version for Cloud Composer 1.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { web server network access control { allowed ip range { value = "192.0.2.0/24" description = "office net 1" }, allowed ip range { value = "192.0.4.0/24" description = "office net 3" } } node config { service account = " example-account@example-project . iam.gserviceaccount.com " } } Step 7. (Optional) Specify Airflow configuration overrides and environment variables You can set up Airflow configuration overrides and environment variables when you create an environment.
- Variable names may contain upper and lowercase letters, digits, and underscores, but they may not begin with a digit. --airflow-configs specifies a comma-separated list of keys and values for Airflow configuration overrides. gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " SERVICE ACCOUNT " \ --env-variables ENV VARS \ --airflow-configs CONFIG OVERRIDES Replace: ENV VARS with a list of comma-separated NAME=VALUE pairs for environment variables.
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --zone us-central1-a \ --node-count 6 \ --scheduler-count 1 \ --disk-size 50 \ --machine-type n1-standard-2 \ --cloud-sql-machine-type db-n1-standard-2 \ --web-server-machine-type composer-n1-webserver-2 API When you create an environment, in the Environment > EnvironmentConfig resource, specify environment scale and performance parameters. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "nodeCount" : NODE COUNT , "nodeConfig" : { "machineType" : " NODE MACHINE TYPE " , "diskSizeGb" : DISK SIZE , "serviceAccount" : " SERVICE ACCOUNT " }, "softwareConfig" : { "schedulerCount" : SCHEDULER COUNT }, "databaseConfig" : { "machineType" : " SQL MACHINE TYPE " }, "webServerConfig" : { "machineType" : " WS MACHINE TYPE " } } } Replace: NODE COUNT with the number of nodes.

### "Configure encryption with customer-managed encryption keys \_|\_ Cloud Composer\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption](https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption)
- Source ID: `site-iam-reference`
- Final score: 229
- Re-rank relevance: N/A

Evidence snippets:
- Example: gcloud beta services identity create \ --service = composer.googleapis.com Grant permissions to service agents: Grant the role to Cloud Composer Service Agent: gcloud kms keys add-iam-policy-binding KEY NAME \ --location KEY LOCATION \ --keyring KEY RING NAME \ --member = serviceAccount:service- PROJECT NUMBER @cloudcomposer-accounts.iam.gserviceaccount.com \ --role = roles/cloudkms.cryptoKeyEncrypterDecrypter \ --project KEY PROJECT ID Grant the role to Artifact Registry Service Agent: gcloud kms keys add-iam-policy-binding KEY NAME \ --location KEY LOCATION \ --keyring KEY RING NAME \ --member = serviceAccount:service- PROJECT NUMBER @gcp-sa-artifactregistry.iam.gserviceaccount.com \ --role = roles/cloudkms.cryptoKeyEncrypterDecrypter \ --project KEY PROJECT ID Grant the role to GKE Service Agent: gcloud kms keys add-iam-policy-binding KEY NAME \ --location KEY LOCATION \ --keyring KEY RING NAME \ --member = serviceAccount:service- PROJECT NUMBER @container-engine-robot.iam.gserviceaccount.com \ --role = roles/cloudkms.cryptoKeyEncrypterDecrypter \ --project KEY PROJECT ID Grant the role to Pub/Sub Service Agent: gcloud kms keys add-iam-policy-binding KEY NAME \ --location KEY LOCATION \ --keyring KEY RING NAME \ --member = serviceAccount:service- PROJECT NUMBER @gcp-sa-pubsub.iam.gserviceaccount.com \ --role = roles/cloudkms.cryptoKeyEncrypterDecrypter \ --project KEY PROJECT ID Grant the role to Compute Engine Service Agent: gcloud kms keys add-iam-policy-binding KEY NAME \ --location KEY LOCATION \ --keyring KEY RING NAME \ --member = serviceAccount:service- PROJECT NUMBER @compute-system.iam.gserviceaccount.com \ --role = roles/cloudkms.cryptoKeyEncrypterDecrypter \ --project KEY PROJECT ID Grant encrypt/decrypt permissions to Cloud Storage Service Agent. gcloud storage service-agent \ --authorize-cmek = projects/ KEY PROJECT ID /locations/ KEY LOCATION /keyRings/ KEY RING NAME /cryptoKeys/ KEY NAME Replace: PROJECT ID with your project's ID .
- Service agent name Service account email API service name Cloud Composer Service Agent service- PROJECT NUMBER @cloudcomposer-accounts.iam.gserviceaccount.com composer.googleapis.com Artifact Registry Service Agent service- PROJECT NUMBER @gcp-sa-artifactregistry.iam.gserviceaccount.com artifactregistry.googleapis.com Kubernetes Engine Service Agent service- PROJECT NUMBER @container-engine-robot.iam.gserviceaccount.com container.googleapis.com Pub/Sub Service Agent service- PROJECT NUMBER @gcp-sa-pubsub.iam.gserviceaccount.com pubsub.googleapis.com Compute Engine Service Agent service- PROJECT NUMBER @compute-system.iam.gserviceaccount.com compute.googleapis.com Cloud Storage Service Agent service- PROJECT NUMBER @gs-project-accounts.iam.gserviceaccount.com Grant encrypt/decrypt permissions with gcloud storage service-agent --authorize-cmek (If required) If some of these service accounts are not present in your project, it means that an identity for this service is not yet created.
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-1.20.12-airflow-1.10.15 \ --kms-key projects/example-project/locations/us-central1/keyRings/example-key-ring/cryptoKeys/example-key View the environment's encryption configuration You can view encryption configuration for an existing environment: Console In Google Cloud console, go to the Environments page.
- Cloud Composer stores the following information protected with Google-owned and Google-managed encryption keys, not customer-managed keys: Environment name Airflow configuration overrides Environment variables Descriptions of allowed IP ranges IP ranges Labels The names of some parameters stored by Cloud Composer can include a sub-string of environment's name.

