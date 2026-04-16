---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.777Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Improved bucket synchronization for domain restricted sharing"
feature_slug: "improved-bucket-synchronization-for-domain-restricted-sharing"
latest_feature_date: "2020-11-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption"
  - "https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture"
  - "https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview"
keywords:
  - "improved"
  - "bucket"
  - "synchronization"
  - "domain"
  - "restricted"
  - "sharing"
  - "composer"
  - "improves"
---

# Improved bucket synchronization for domain restricted sharing

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer improves file synchronization between buckets in domain restricted sharing compliant environments.

## Extended Definition

Cloud Composer improves file synchronization between buckets in domain restricted sharing compliant environments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption](https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption)
- [https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture](https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture)
- [https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview)

## Supporting Pages

### "Configure encryption with customer-managed encryption keys \_|\_ Cloud Composer\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption](https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption)
- Source ID: `site-iam-reference`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Grant roles to service agents Important: If your project has a Domain restricted sharing policy that excludes addresses from the google.com domain.
- Important: If your project has a Domain restricted sharing policy that excludes addresses from the google.com domain.
- Example: gcloud storage buckets update gs://composer-logs-us-central1-example-environment \ --default-encryption-key = projects/example-project/locations/us-central1/keyRings/example-key-ring/cryptoKeys/example-key Create a new log sink. gcloud logging sinks create \ composer-log-sink- ENVIRONMENT NAME \ storage.googleapis.com/ BUCKET NAME \ --log-filter "resource.type=cloud composer environment AND resource.labels.environment name= ENVIRONMENT NAME AND resource.labels.location= LOCATION " Replace: ENVIRONMENT NAME with the name of the environment.
- Data protected with CMEK encryption Cloud Composer protects the following data with CMEK encryption: Contents and schema of the Airflow database Environment and Airflow task logs in Cloud Logging Contents of the environment's bucket Secrets stored in the environment's cluster Persistent disks used by the task queue Container images of environment components stored in Artifact Registry repositories For specific details about how the data is encrypted, see: About customer-managed encryption keys (CMEK) in the Cloud SQL documentation.

### Cloud Composer security overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview)
- Source ID: `site-iam-reference`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Composer supports Domain Restricted Sharing organizational policy .
- Domain Restricted Sharing (DRS) .
- Compliance to standards See the pages linked below to check Cloud Composer's compliance with various standards: HIPAA Compliance Access Transparency PCI DSS ISO/IEC: 27001 , 27017 , 27018 SOC: SOC 1 , SOC 2 , SOC 3 NIST: NIST800-53 , NIST800-171 DRZ FedRamp Moderate Data Residency/Location Restrictions ( configuration guide for Cloud Composer) See also Some of the security features mentioned in this article are discussed in the the Airflow Summit 2020 presentation: Run Airflow DAGs in a secure way .
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 Cloud Composer offers a handful of security features and compliances that are beneficial for enterprise companies with stricter security requirements.

### Environment architecture \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture](https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture)
- Source ID: `site-iam-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Environment architecture configurations Cloud Composer 1 environments can have the following architecture configurations: Public IP architecture Private IP architecture with VPC peerings Private IP with Domain restricted sharing (DRS) architecture Customer and tenant projects When you create an environment, Cloud Composer distributes the environment's resources between a tenant and a customer project: Customer project is a Google Cloud project where you create your environments.
- Private IP environment architecture (click to enlarge) If the Domain Restricted Sharing (DRS) organizational policy is turned on in your project, then Cloud Composer uses the Private IP with DRS environment architecture.
- When you upload your DAG files to the /dags folder in your environment's bucket, Cloud Composer synchronizes the DAGs to Airflow components of your environment.
- Public IP environment architecture (click to enlarge) In a Public IP environment architecture for Cloud Composer 1: The tenant project hosts a Cloud SQL instance, Cloud SQL storage, and a App Engine Flex instance that runs the Airflow web server.

