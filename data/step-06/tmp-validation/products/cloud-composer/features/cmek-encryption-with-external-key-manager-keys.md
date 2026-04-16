---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.599Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "CMEK encryption with External Key Manager keys"
feature_slug: "cmek-encryption-with-external-key-manager-keys"
latest_feature_date: "2022-04-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc"
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
keywords:
  - "external"
  - "encryption"
  - "cmek"
  - "keys"
  - "manager"
  - "supports"
---

# CMEK encryption with External Key Manager keys

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer supports CMEK encryption with keys stored in External Key Managers.

## Extended Definition

Cloud Composer supports CMEK encryption with keys stored in External Key Managers.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption](https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)
- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)

## Supporting Pages

### "Configure encryption with customer-managed encryption keys \_|\_ Cloud Composer\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption](https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption)
- Source ID: `site-iam-reference`
- Final score: 45
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Composer supports CMEK encryption using keys stored in External Key Managers .
- Example: gcloud composer environments describe \ example-environment \ --location us-central1 \ --format = "value(config.encryptionConfig)" Use CMEK for Cloud Composer logs Cloud Logging supports encrypting Log storage with CMEK keys.
- Example: gcloud beta logging sinks update Default \ --add-exclusion name = example-environment-exclusion,filter = "resource.type=cloud composer environment AND resource.labels.environment name=example-environment AND resource.labels.location=us-central1" Add organization-level CMEK encryption to the Log Router. gcloud logging cmek-settings describe \ --organization = ORGANIZATION ID gcloud kms keys add-iam-policy-binding \ --project = KEY PROJECT ID \ --member LOGGING SERVICE AGENT \ --role roles/cloudkms.cryptoKeyEncrypterDecrypter \ --location = KEY LOCATION \ --keyring = KEY RING NAME \ KEY NAME gcloud logging cmek-settings update \ --organization = ORGANIZATION ID \ --kms-project = KEY PROJECT ID \ --kms-keyring = KEY RING NAME \ --kms-location = KEY LOCATION \ --kms-key-name = KEY NAME Replace: ORGANIZATION ID with your organization ID .
- Data protected with CMEK encryption Cloud Composer protects the following data with CMEK encryption: Contents and schema of the Airflow database Environment and Airflow task logs in Cloud Logging Contents of the environment's bucket Secrets stored in the environment's cluster Persistent disks used by the task queue Container images of environment components stored in Artifact Registry repositories For specific details about how the data is encrypted, see: About customer-managed encryption keys (CMEK) in the Cloud SQL documentation.

### Configure VPC Service Controls \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)
- Source ID: `site-iam-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Make sure that your service perimeter has the following VPC accessible services, otherwise your environment might fail to create: Cloud Composer API (composer.googleapis.com) Compute Engine API (compute.googleapis.com) Kubernetes Engine API (container.googleapis.com) Container Registry API (containerregistry.googleapis.com) Artifact Registry API (artifactregistry.googleapis.com) Cloud Storage API (storage.googleapis.com) Cloud SQL Admin API (sqladmin.googleapis.com) Cloud Logging API (logging.googleapis.com) Cloud Monitoring API (monitoring.googleapis.com) Cloud Pub/Sub API (pubsub.googleapis.com) Cloud Cloud Resource Manager API (cloudresourcemanager.googleapis.com) Service Directory API (servicedirectory.googleapis.com) Cloud Key Management Service API (cloudkms.googleapis.com), if you are using Cloud KMS or CMEK keys.
- Install PyPI packages in VPC Service Controls In the default VPC Service Controls configuration, Cloud Composer only supports installing PyPI packages from private repositories that are reachable from the internal IP address space of the VPC network.
- External connections To install PyPI packages from repositories outside the private IP space, follow these steps: Configure Cloud NAT to allow Cloud Composer running in the private IP space to connect with external PyPI repositories.
- Create environments in a perimeter The following steps are required to deploy Cloud Composer inside a perimeter: Enable Access Context Manager API and Cloud Composer API for your project.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- To use customer-managed encryption keys (CMEK) to encrypt data in your environment, follow the instructions outlined in Using customer-managed encryption keys .
- The 1 January, 2023 date is ignored. resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { maintenance window { start time = "2023-01-01T01:00:00Z" end time = "2023-01-01T07:00:00Z" recurrence = "FREQ=WEEKLY;BYDAY=SU,WE,SA" } } } Step 9. (Optional) Configure data encryption (CMEK) By default, data in your environment is encrypted with a key provided by Google.
- Variable names may contain upper and lowercase letters, digits, and underscores, but they may not begin with a digit. --airflow-configs specifies a comma-separated list of keys and values for Airflow configuration overrides. gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " SERVICE ACCOUNT " \ --env-variables ENV VARS \ --airflow-configs CONFIG OVERRIDES Replace: ENV VARS with a list of comma-separated NAME=VALUE pairs for environment variables.
- In Key and Value fields, specify key and value pairs for the environment labels. gcloud When you create an environment, the --labels argument specifies a comma-separated list of keys and values with environment labels. gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " SERVICE ACCOUNT " \ --labels LABELS Replace: LABELS with a list of comma-separated KEY=VALUE pairs for environment labels.

