---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.394Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "CMEK allowed key projects organization policy constraint"
feature_slug: "cmek-allowed-key-projects-organization-policy-constraint"
latest_feature_date: "2022-04-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-cmek"
keywords:
  - "cmek"
  - "allowed"
  - "key"
  - "projects"
  - "organization"
  - "policy"
  - "constraint"
  - "the"
---

# CMEK allowed key projects organization policy constraint

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

The constraints/gcp.restrictCmekCryptoKeyProjects policy constraint controls which projects can supply Cloud KMS keys for CMEK.

## Extended Definition

The constraints/gcp.restrictCmekCryptoKeyProjects policy constraint controls which projects can supply Cloud KMS keys for CMEK.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-cmek](https://docs.cloud.google.com/sql/docs/postgres/configure-cmek)

## Supporting Pages

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- April 12, 2022 Cloud SQL for MySQL Feature Customer-managed encryption key (CMEK) organization policy constraints are now available in Preview . constraints/gcp.restrictNonCmekServices allows you to control which resources require the use of CMEK. constraints/gcp.restrictCmekCryptoKeyProjects allows you to control the projects from which a Cloud KMS key can be used to validate requests.
- Cloud SQL for PostgreSQL Feature Customer-managed encryption key (CMEK) organization policy constraints are now available in Preview . constraints/gcp.restrictNonCmekServices allows you to control which resources require the use of CMEK. constraints/gcp.restrictCmekCryptoKeyProjects allows you to control the projects from which a Cloud KMS key can be used to validate requests.
- Cloud SQL for SQL Server Feature Customer-managed encryption key (CMEK) organization policy constraints are now available in Preview . constraints/gcp.restrictNonCmekServices allows you to control which resources require the use of CMEK. constraints/gcp.restrictCmekCryptoKeyProjects allows you to control the projects from which a Cloud KMS key can be used to validate requests.
- You can use both constraints together to enforce the use of CMEK from allowed projects.

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- April 12, 2022 Feature Customer-managed encryption key (CMEK) organization policy constraints are now available in Preview . constraints/gcp.restrictNonCmekServices allows you to control which resources require the use of CMEK. constraints/gcp.restrictCmekCryptoKeyProjects allows you to control the projects from which a Cloud KMS key can be used to validate requests.
- You can use both constraints together to enforce the use of CMEK from allowed projects.
- After March 17, 2026, organization policies that use the gcp.managed.allowedMCPServices constraint won't work, and you can control MCP use with IAM deny policies.
- To learn more about CMEK, see the Overview of customer managed encryption keys (CMEK) .

### "Use customer-managed encryption keys (CMEK) \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-cmek](https://docs.cloud.google.com/sql/docs/postgres/configure-cmek)
- Source ID: `site-iam-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- GO TO THE PROJECT IAM PAGE gcloud gcloud kms keys add-iam-policy-binding KMS KEY ID \ --location = GCP REGION \ --keyring = KMS KEYRING ID \ --member = serviceAccount:service- PROJECT NUMBER @gcp-sa-cloud-sql.iam.gserviceaccount.com \ --role = roles/cloudkms.cryptoKeyEncrypterDecrypter Terraform To grant access to the key, use a Terraform resource . resource "google kms crypto key iam binding" "crypto key" { provider = google-beta crypto key id = google kms crypto key.key.id role = "roles/cloudkms.cryptoKeyEncrypterDecrypter" members = [ "serviceAccount:${google project service identity.gcp sa cloud sql.email}", ] } Apply the Terraform configuration: terraform apply Create a Cloud SQL instance with CMEK Note: You can't enable customer-managed encryption keys on existing instances.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID /reencrypt" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2023-06-28T21:19:09.503Z", "operationType": "REENCRYPT", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } REST v1beta4 To re-encrypt your instance or replica with your new key, run the following command: POST https://sqladmin.googleapis.com/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /reencrypt Before using any of the request data, make the following replacements: PROJECT ID : The project ID INSTANCE ID : The instance ID HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /reencrypt To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Read and acknowledge it to proceed further with instance creation. gcloud gcloud sql instances create INSTANCE NAME \ --project = PROJECT ID \ --disk-encryption-key = KMS KEY ID \ --database-version = VERSION \ --cpu = NUMBER CPUS \ --memory = MEMORY SIZE \ --region = REGION \ --root-password = INSERT-PASSWORD-HERE Terraform To create an instance with CMEK, use a Terraform resource . resource "google sql database instance" "postgres instance with cmek" { name = "postgres-instance-cmek" provider = google-beta region = "us-central1" database version = "POSTGRES 14" encryption key name = google kms crypto key.key.id settings { tier = "db-custom-2-7680" } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } Delete the changes To delete your changes, do the following: To disable deletion protection, in your Terraform configuration file set the deletion protection argument to false . deletion protection = "false" Apply the updated Terraform configuration by running the following command and entering yes at the prompt: terraform apply Remove resources previously applied with your Terraform configuration by running the following command and entering yes at the prompt: terraform destroy REST v1 To create an instance with customer-managed encryption keys, pass diskEncryptionConfiguration to the command.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /reencrypt" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2023-06-28T21:22:13.663Z", "operationType": "REENCRYPT", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } Automatic re-encryption backups When you re-encrypt a primary instance with a new primary key version, Cloud SQL automatically creates an on-demand backup called the re-encryption backup.

