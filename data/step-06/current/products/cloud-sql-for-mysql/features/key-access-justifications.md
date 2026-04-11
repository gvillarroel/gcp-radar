---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.914Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Key Access Justifications"
feature_slug: "key-access-justifications"
latest_feature_date: "2022-01-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/cmek"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-cmek"
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
keywords:
  - "key"
  - "access"
  - "justifications"
  - "sql"
  - "supports"
  - "for"
  - "ekm"
  - "so"
---

# Key Access Justifications

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL supports Key Access Justifications for Cloud EKM so you can view and act on the reason for each key access request.

## Extended Definition

Cloud SQL supports Key Access Justifications for Cloud EKM so you can view and act on the reason for each key access request.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek)
- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)

## Supporting Pages

### "About customer-managed encryption keys (CMEK) \_|\_ Cloud SQL for MySQL\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Key Access Justifications enable you to view the reason for each Cloud EKM request.
- Customer-managed encryption keys use the following format: projects / [ KMS PROJECT ID ] / locations / [ LOCATION ] / keyRings / [ KEY RING ] / cryptoKeys / [ KEY NAME ] If Cloud SQL is unable to access the key (such as if you disable the key version), Cloud SQL suspends the instance.
- To use CMEKs created by Cloud KMS Autokey to protect your Cloud SQL for MySQL resources, use the steps provided for Secret Manager at Using Autokey with Secret Manager resources as an example.
- After you set up your resources with CMEKs, the experience of accessing your Cloud SQL for MySQL resources is similar to using Google default encryption.

### "Use customer-managed encryption keys (CMEK) \_|\_ Cloud SQL for MySQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek)
- Source ID: `site-iam-reference`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID /reencrypt" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2023-06-28T21:19:09.503Z", "operationType": "REENCRYPT", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } REST v1beta4 To re-encrypt your instance or replica with your new key, run the following command: POST https://sqladmin.googleapis.com/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /reencrypt Before using any of the request data, make the following replacements: PROJECT ID : The project ID INSTANCE ID : The instance ID HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /reencrypt To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- GO TO THE PROJECT IAM PAGE gcloud gcloud kms keys add-iam-policy-binding KMS KEY ID \ --location = GCP REGION \ --keyring = KMS KEYRING ID \ --member = serviceAccount:service- PROJECT NUMBER @gcp-sa-cloud-sql.iam.gserviceaccount.com \ --role = roles/cloudkms.cryptoKeyEncrypterDecrypter Terraform To grant access to the key, use a Terraform resource . resource "google kms crypto key iam binding" "crypto key" { provider = google-beta crypto key id = google kms crypto key.key.id role = "roles/cloudkms.cryptoKeyEncrypterDecrypter" members = [ "serviceAccount:${google project service identity.gcp sa cloud sql.email}", ] } Apply the Terraform configuration: terraform apply Create a Cloud SQL instance with CMEK Note: You can't enable customer-managed encryption keys on existing instances.
- Terraform To create a keyring, use a Terraform resource . resource "google kms key ring" "keyring" { provider = google-beta name = "keyring-name" location = "us-central1" } To create a key, use a Terraform resource . resource "google kms crypto key" "key" { provider = google-beta name = "crypto-key-name" key ring = google kms key ring.keyring.id purpose = "ENCRYPT DECRYPT" } Apply the Terraform configuration: terraform apply Grant the service account access to the key When creating the Cloud SQL instance with CMEK, you only need to perform this procedure if you are using gcloud or the API.
- Common reasons for failure include a missing Cloud KMS key version, a disabled or destroyed Cloud KMS key version, insufficient IAM permissions to access the Cloud KMS key version, or the Cloud KMS key version is in a different region than the Cloud SQL instance.

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Tags are key-value pairs you can apply to your resources, such as a project or a Cloud SQL instance, which are used for fine-grained access control.
- January 25, 2024 Feature Cloud SQL Enterprise Plus edition now supports the following regions: asia-northeast2 (Osaka) asia-south2 (Delhi) europe-north1 (Finland) europe-southwest1 (Madrid) us-east5 (Columbus) us-south1 (Dallas) January 12, 2024 Feature Cloud SQL for MySQL now supports setting microsecond time periods for the following flag on MySQL 5.7 and MySQL 8.0: innodb flush log at timeout For more information about this flag, see supported flags .
- December 05, 2024 Feature Cloud SQL Enterprise Plus edition now supports the following regions: africa-south1 (Johannesburg) asia-east2 (Hong Kong) europe-west10 (Berlin) December 04, 2024 Feature Cloud SQL for MySQL now supports minor version 8.0.40.
- August 18, 2023 Feature Cloud SQL Enterprise Plus edition now supports four new regions: europe-central2 (Warsaw) europe-west9 (Paris) southamerica-east1 (San Paulo) us-west1 (Oregon) Feature Cloud SQL for MySQL now supports minor version 8.0.34.

