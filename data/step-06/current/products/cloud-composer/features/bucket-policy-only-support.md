---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.832Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Bucket Policy Only support"
feature_slug: "bucket-policy-only-support"
latest_feature_date: "2019-10-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture"
  - "https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption"
keywords:
  - "bucket"
  - "policy"
  - "only"
  - "composer"
  - "supports"
  - "during"
  - "environment"
  - "creation"
---

# Bucket Policy Only support

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer supports Bucket Policy Only during environment creation without requiring it to be disabled.

## Extended Definition

Cloud Composer supports Bucket Policy Only during environment creation without requiring it to be disabled.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture](https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture)
- [https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption](https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption)

## Supporting Pages

### Cloud Composer security overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview)
- Source ID: `site-iam-reference`
- Final score: 41
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Composer environments in a Google Cloud project can be accessed only by users whose accounts are added to IAM of the project.
- If you use this policy, then only users from the selected domains can access your environments.
- Cloud Composer supports Domain Restricted Sharing organizational policy .
- Cloud Composer 1 environments that were created based on GKE versions 1.18 and later use Shielded VMs to run the nodes of their environment cluster.

### "Configure encryption with customer-managed encryption keys \_|\_ Cloud Composer\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption](https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption)
- Source ID: `site-iam-reference`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- Example: gcloud beta logging sinks update Default \ --add-exclusion name = example-environment-exclusion,filter = "resource.type=cloud composer environment AND resource.labels.environment name=example-environment AND resource.labels.location=us-central1" Add organization-level CMEK encryption to the Log Router. gcloud logging cmek-settings describe \ --organization = ORGANIZATION ID gcloud kms keys add-iam-policy-binding \ --project = KEY PROJECT ID \ --member LOGGING SERVICE AGENT \ --role roles/cloudkms.cryptoKeyEncrypterDecrypter \ --location = KEY LOCATION \ --keyring = KEY RING NAME \ KEY NAME gcloud logging cmek-settings update \ --organization = ORGANIZATION ID \ --kms-project = KEY PROJECT ID \ --kms-keyring = KEY RING NAME \ --kms-location = KEY LOCATION \ --kms-key-name = KEY NAME Replace: ORGANIZATION ID with your organization ID .
- Example: gcloud projects add-iam-policy-binding \ example-project \ --member = "serviceAccount:example-sa@gcp-sa-logging.iam.gserviceaccount.com" \ --role = "roles/storage.objectCreator" \ --condition = None Exclude the logs for your new environment from Monitoring. gcloud beta logging sinks update Default \ --add-exclusion name = ENVIRONMENT NAME -exclusion,filter = "resource.type=cloud composer environment AND resource.labels.environment name= ENVIRONMENT NAME AND resource.labels.location= LOCATION " Replace: ENVIRONMENT NAME with the name of the environment.
- Example: gcloud storage buckets update gs://composer-logs-us-central1-example-environment \ --default-encryption-key = projects/example-project/locations/us-central1/keyRings/example-key-ring/cryptoKeys/example-key Create a new log sink. gcloud logging sinks create \ composer-log-sink- ENVIRONMENT NAME \ storage.googleapis.com/ BUCKET NAME \ --log-filter "resource.type=cloud composer environment AND resource.labels.environment name= ENVIRONMENT NAME AND resource.labels.location= LOCATION " Replace: ENVIRONMENT NAME with the name of the environment.
- Data protected with CMEK encryption Cloud Composer protects the following data with CMEK encryption: Contents and schema of the Airflow database Environment and Airflow task logs in Cloud Logging Contents of the environment's bucket Secrets stored in the environment's cluster Persistent disks used by the task queue Container images of environment components stored in Artifact Registry repositories For specific details about how the data is encrypted, see: About customer-managed encryption keys (CMEK) in the Cloud SQL documentation.

### Environment architecture \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture](https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture)
- Source ID: `site-iam-reference`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- Private IP environment architecture (click to enlarge) If the Domain Restricted Sharing (DRS) organizational policy is turned on in your project, then Cloud Composer uses the Private IP with DRS environment architecture.
- When you upload your DAG files to the /dags folder in your environment's bucket, Cloud Composer synchronizes the DAGs to Airflow components of your environment.
- To protect sensitive connection and workflow information, Cloud Composer allows database access only to the service account of your environment.
- The service account for web server is auto-generated during the environment creation and is derived from the web server domain.

