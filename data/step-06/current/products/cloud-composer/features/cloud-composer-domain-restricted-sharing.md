---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:20.139Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer domain-restricted sharing"
feature_slug: "cloud-composer-domain-restricted-sharing"
latest_feature_date: "2021-02-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption"
  - "https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc"
keywords:
  - "composer"
  - "domain"
  - "restricted"
  - "sharing"
  - "added"
  - "for"
  - "environments"
  - "and"
---

# Cloud Composer domain-restricted sharing

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer added domain-restricted sharing support for environments and resources.

## Extended Definition

Cloud Composer added domain-restricted sharing support for environments and resources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption](https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption)
- [https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture](https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)

## Supporting Pages

### Cloud Composer security overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview)
- Source ID: `site-iam-reference`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Composer supports Domain Restricted Sharing organizational policy .
- Compliance to standards See the pages linked below to check Cloud Composer's compliance with various standards: HIPAA Compliance Access Transparency PCI DSS ISO/IEC: 27001 , 27017 , 27018 SOC: SOC 1 , SOC 2 , SOC 3 NIST: NIST800-53 , NIST800-171 DRZ FedRamp Moderate Data Residency/Location Restrictions ( configuration guide for Cloud Composer) See also Some of the security features mentioned in this article are discussed in the the Airflow Summit 2020 presentation: Run Airflow DAGs in a secure way .
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 Cloud Composer offers a handful of security features and compliances that are beneficial for enterprise companies with stricter security requirements.
- Cloud Composer 1 environments that were created based on GKE versions 1.18 and later use Shielded VMs to run the nodes of their environment cluster.

### "Configure encryption with customer-managed encryption keys \_|\_ Cloud Composer\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption](https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption)
- Source ID: `site-iam-reference`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- Details about encryption are listed in the Data encryption key item. gcloud Run the following gcloud command to view the encryption configuration gcloud composer environments describe \ ENVIRONMENT NAME \ --location LOCATION \ --format = "value(config.encryptionConfig)" Replace: ENVIRONMENT NAME with the name of the environment.
- Example: gcloud projects add-iam-policy-binding \ example-project \ --member = "serviceAccount:example-sa@gcp-sa-logging.iam.gserviceaccount.com" \ --role = "roles/storage.objectCreator" \ --condition = None Exclude the logs for your new environment from Monitoring. gcloud beta logging sinks update Default \ --add-exclusion name = ENVIRONMENT NAME -exclusion,filter = "resource.type=cloud composer environment AND resource.labels.environment name= ENVIRONMENT NAME AND resource.labels.location= LOCATION " Replace: ENVIRONMENT NAME with the name of the environment.
- Data protected with CMEK encryption Cloud Composer protects the following data with CMEK encryption: Contents and schema of the Airflow database Environment and Airflow task logs in Cloud Logging Contents of the environment's bucket Secrets stored in the environment's cluster Persistent disks used by the task queue Container images of environment components stored in Artifact Registry repositories For specific details about how the data is encrypted, see: About customer-managed encryption keys (CMEK) in the Cloud SQL documentation.
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-1.20.12-airflow-1.10.15 \ --kms-key projects/example-project/locations/us-central1/keyRings/example-key-ring/cryptoKeys/example-key View the environment's encryption configuration You can view encryption configuration for an existing environment: Console In Google Cloud console, go to the Environments page.

### Environment architecture \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture](https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture)
- Source ID: `site-iam-reference`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- Environment architecture configurations Cloud Composer 1 environments can have the following architecture configurations: Public IP architecture Private IP architecture with VPC peerings Private IP with Domain restricted sharing (DRS) architecture Customer and tenant projects When you create an environment, Cloud Composer distributes the environment's resources between a tenant and a customer project: Customer project is a Google Cloud project where you create your environments.
- Private IP environment architecture (click to enlarge) If the Domain Restricted Sharing (DRS) organizational policy is turned on in your project, then Cloud Composer uses the Private IP with DRS environment architecture.
- Public IP environment architecture (click to enlarge) In a Public IP environment architecture for Cloud Composer 1: The tenant project hosts a Cloud SQL instance, Cloud SQL storage, and a App Engine Flex instance that runs the Airflow web server.
- Cloud Composer hides the IAP integration details, and provides access to the web server based on user identities and IAM policy bindings defined for users.

### Configure VPC Service Controls \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)
- Source ID: `site-iam-reference`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- In addition to other log messages, you can check logs for information about cloud-airflow-prod@system.gserviceaccount.com and service- PROJECT ID @cloudcomposer-accounts.iam.gserviceaccount.com service accounts that configure components of your environments.
- Displaying a rendered template with functions in the web UI with DAG serialization enabled is supported for environments running Cloud Composer version 1.12.0 or later and Airflow version 1.10.9 or later.
- Create environments in a perimeter The following steps are required to deploy Cloud Composer inside a perimeter: Enable Access Context Manager API and Cloud Composer API for your project.
- Cloud Composer environments use the following domains: .googleapis.com is used to access other Google services. .pkg.dev is used to get environment images, such as when creating or updating an environment. .gcr.io GKE requires connectivity to Container Registry domain regardless of Cloud Composer version.

