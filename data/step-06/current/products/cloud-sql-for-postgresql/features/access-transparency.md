---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.825Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Access Transparency"
feature_slug: "access-transparency"
latest_feature_date: "2019-11-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-manage-users"
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-cmek"
keywords:
  - "transparency"
  - "staff"
  - "actions"
  - "customer"
  - "logs"
  - "supports"
  - "access"
---

# Access Transparency

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL supports Access Transparency logs for Google staff actions that access customer data.

## Extended Definition

Cloud SQL supports Access Transparency logs for Google staff actions that access customer data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview)
- [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-cmek](https://docs.cloud.google.com/sql/docs/postgres/configure-cmek)

## Supporting Pages

### "Data residency overview \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Access Approval complements the visibility provided by Access Transparency , which generates near-real-time audit logs when Google administrators interact with your data.
- To learn more about how Google Cloud protects customer data throughout its lifecycle, and how Google Cloud provides customers with transparency and control over their data, see Trusting your data with Google Cloud .
- Using IAM permissions, Access Approval, Access Transparency, and Key Access Justifications with Cloud KMS and Cloud EKM, you can deny Google the ability to decrypt your data.
- The audit logs include the office location of the administrator and the reason for the access.

### "Create and manage users \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#usersList", "items": [ { "kind": "sql#user", "etag": "--redacted--", "name": "sqlserver", "host": "", "instance": " instance-id ", "project": " project-id ", "sqlserverUserDetails": { "serverRoles": [ "CustomerDbRootRole" ] } }, { "kind": "sql#user", "etag": "--redacted--", "name": " user-id-1 ", "host": "", "instance": " instance-id ", "project": " project-id ", "sqlserverUserDetails": { "serverRoles": [ "CustomerDbRootRole" ] } }, { "kind": "sql#user", "etag": "--redacted--", "name": " user-id-2 ", "host": "", "instance": " instance-id ", "project": " project-id ", "sqlserverUserDetails": { "serverRoles": [ "CustomerDbRootRole" ] } }, { ... }, { ... } ] } If a user password policy was set, the items section of the response includes a passwordPolicy section.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#usersList", "items": [ { "kind": "sql#user", "etag": "--redacted--", "name": "sqlserver", "host": "", "instance": " instance-id ", "project": " project-id ", "sqlserverUserDetails": { "serverRoles": [ "CustomerDbRootRole" ] } }, { "kind": "sql#user", "etag": "--redacted--", "name": " user-id-1 ", "host": "", "instance": " instance-id ", "project": " project-id ", "sqlserverUserDetails": { "serverRoles": [ "CustomerDbRootRole" ] } }, { "kind": "sql#user", "etag": "--redacted--", "name": " user-id-2 ", "host": "", "instance": " instance-id ", "project": " project-id ", "sqlserverUserDetails": { "serverRoles": [ "CustomerDbRootRole" ] } }, { ... }, { ... } ] } If a user password policy was set, the items section of the response includes a passwordPolicy section.
- Before using any of the request data, make the following replacements: PROJECT ID : your project ID INSTANCE ID : the instance ID USER ID : the ID of the user PASSWORD : the password of the user FAILED ATTEMPTS CHECK : set to true to enable a check for the number of failed attempts to log in after which the account is locked NUMBER OF ATTEMPTS : the number of failed attempts to log in after which the account is locked PASSWORD EXPIRATION DURATION : the number of days after which the password expires and the user needs to create a new one HTTP method and URL: PUT https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users?name= USER ID Request JSON body: { "name": " USER ID ", "password": " PASSWORD ", "data": { "passwordValidationUserPolicy" : { { "enableFailedAttemptsCheck" : " FAILED ATTEMPTS CHECK ", "allowedFailedAttempts" : " NUMBER OF ATTEMPTS ", "passwordExpirationDuration" : " PASSWORD EXPIRATION DURATION " } }, } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Before using any of the request data, make the following replacements: PROJECT ID : your project ID INSTANCE ID : the instance ID USER ID : the ID of the user PASSWORD : the password of the user FAILED ATTEMPTS CHECK : set to true to enable a check for the number of failed attempts to log in after which the account is locked NUMBER OF ATTEMPTS : the number of failed attempts to log in after which the account is locked PASSWORD EXPIRATION DURATION : the number of days after which the password expires and the user needs to create a new one HTTP method and URL: PUT https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE ID /users?name= USER ID Request JSON body: { "name": " USER ID ", "password": " PASSWORD ", "data": { "passwordValidationUserPolicy" : { { "enableFailedAttemptsCheck" : " FAILED ATTEMPTS CHECK ", "allowedFailedAttempts" : " NUMBER OF ATTEMPTS ", "passwordExpirationDuration" : " PASSWORD EXPIRATION DURATION " } }, } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Use customer-managed encryption keys (CMEK) \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-cmek](https://docs.cloud.google.com/sql/docs/postgres/configure-cmek)
- Source ID: `site-iam-reference`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID /reencrypt" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2023-06-28T21:19:09.503Z", "operationType": "REENCRYPT", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } REST v1beta4 To re-encrypt your instance or replica with your new key, run the following command: POST https://sqladmin.googleapis.com/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /reencrypt Before using any of the request data, make the following replacements: PROJECT ID : The project ID INSTANCE ID : The instance ID HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /reencrypt To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- GO TO THE PROJECT IAM PAGE gcloud gcloud kms keys add-iam-policy-binding KMS KEY ID \ --location = GCP REGION \ --keyring = KMS KEYRING ID \ --member = serviceAccount:service- PROJECT NUMBER @gcp-sa-cloud-sql.iam.gserviceaccount.com \ --role = roles/cloudkms.cryptoKeyEncrypterDecrypter Terraform To grant access to the key, use a Terraform resource . resource "google kms crypto key iam binding" "crypto key" { provider = google-beta crypto key id = google kms crypto key.key.id role = "roles/cloudkms.cryptoKeyEncrypterDecrypter" members = [ "serviceAccount:${google project service identity.gcp sa cloud sql.email}", ] } Apply the Terraform configuration: terraform apply Create a Cloud SQL instance with CMEK Note: You can't enable customer-managed encryption keys on existing instances.
- Read and acknowledge it to proceed further with instance creation. gcloud gcloud sql instances create INSTANCE NAME \ --project = PROJECT ID \ --disk-encryption-key = KMS KEY ID \ --database-version = VERSION \ --cpu = NUMBER CPUS \ --memory = MEMORY SIZE \ --region = REGION \ --root-password = INSERT-PASSWORD-HERE Terraform To create an instance with CMEK, use a Terraform resource . resource "google sql database instance" "postgres instance with cmek" { name = "postgres-instance-cmek" provider = google-beta region = "us-central1" database version = "POSTGRES 14" encryption key name = google kms crypto key.key.id settings { tier = "db-custom-2-7680" } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } Delete the changes To delete your changes, do the following: To disable deletion protection, in your Terraform configuration file set the deletion protection argument to false . deletion protection = "false" Apply the updated Terraform configuration by running the following command and entering yes at the prompt: terraform apply Remove resources previously applied with your Terraform configuration by running the following command and entering yes at the prompt: terraform destroy REST v1 To create an instance with customer-managed encryption keys, pass diskEncryptionConfiguration to the command.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /reencrypt" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2023-06-28T21:22:13.663Z", "operationType": "REENCRYPT", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } Automatic re-encryption backups When you re-encrypt a primary instance with a new primary key version, Cloud SQL automatically creates an on-demand backup called the re-encryption backup.

