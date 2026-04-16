---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.785Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "CMEK instance re-encryption"
feature_slug: "cmek-instance-re-encryption"
latest_feature_date: "2023-08-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/cmek"
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-cmek"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
keywords:
  - "encrypt"
  - "encryption"
  - "existing"
  - "cmek"
  - "instance"
  - "lets"
---

# CMEK instance re-encryption

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

CMEK instance re-encryption lets you re-encrypt an existing CMEK-enabled primary instance or replica with a new primary key version.

## Extended Definition

CMEK instance re-encryption lets you re-encrypt an existing CMEK-enabled primary instance or replica with a new primary key version.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/cmek](https://docs.cloud.google.com/sql/docs/postgres/cmek)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-cmek](https://docs.cloud.google.com/sql/docs/postgres/configure-cmek)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)

## Supporting Pages

### "About customer-managed encryption keys (CMEK) \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/cmek](https://docs.cloud.google.com/sql/docs/postgres/cmek)
- Source ID: `site-iam-reference`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Restrictions The following restrictions apply when using customer-managed encryption keys: You can't enable customer-managed encryption keys on an existing instance.
- For more information about how to re-encrypt a Cloud SQL instance or replica after a key rotation, see Re-encrypt an existing CMEK-enabled instance or replica .
- Backup creation During backups for a CMEK-enabled instance, customer-managed encryption keys encrypt user data, such as user queries and responses.
- Clone creation Clones from a CMEK-enabled instance inherit CMEK encryption with same Cloud KMS key as the source instance.

### "Use customer-managed encryption keys (CMEK) \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-cmek](https://docs.cloud.google.com/sql/docs/postgres/configure-cmek)
- Source ID: `site-iam-reference`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GO TO THE PROJECT IAM PAGE gcloud gcloud kms keys add-iam-policy-binding KMS KEY ID \ --location = GCP REGION \ --keyring = KMS KEYRING ID \ --member = serviceAccount:service- PROJECT NUMBER @gcp-sa-cloud-sql.iam.gserviceaccount.com \ --role = roles/cloudkms.cryptoKeyEncrypterDecrypter Terraform To grant access to the key, use a Terraform resource . resource "google kms crypto key iam binding" "crypto key" { provider = google-beta crypto key id = google kms crypto key.key.id role = "roles/cloudkms.cryptoKeyEncrypterDecrypter" members = [ "serviceAccount:${google project service identity.gcp sa cloud sql.email}", ] } Apply the Terraform configuration: terraform apply Create a Cloud SQL instance with CMEK Note: You can't enable customer-managed encryption keys on existing instances.
- Read and acknowledge it to proceed further with instance creation. gcloud gcloud sql instances create INSTANCE NAME \ --project = PROJECT ID \ --disk-encryption-key = KMS KEY ID \ --database-version = VERSION \ --cpu = NUMBER CPUS \ --memory = MEMORY SIZE \ --region = REGION \ --root-password = INSERT-PASSWORD-HERE Terraform To create an instance with CMEK, use a Terraform resource . resource "google sql database instance" "postgres instance with cmek" { name = "postgres-instance-cmek" provider = google-beta region = "us-central1" database version = "POSTGRES 14" encryption key name = google kms crypto key.key.id settings { tier = "db-custom-2-7680" } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } Delete the changes To delete your changes, do the following: To disable deletion protection, in your Terraform configuration file set the deletion protection argument to false . deletion protection = "false" Apply the updated Terraform configuration by running the following command and entering yes at the prompt: terraform apply Remove resources previously applied with your Terraform configuration by running the following command and entering yes at the prompt: terraform destroy REST v1 To create an instance with customer-managed encryption keys, pass diskEncryptionConfiguration to the command.
- If anyone destroys this key, all data encrypted with it will be permanently lost." View key information for a CMEK-enabled instance Once you successfully create a Cloud SQL instance, you can look at the instance list or the instance overview page to see that it was created using a customer-managed encryption key.
- If anyone destroys this key, all data encrypted with it will be permanently lost." Create a clone of a CMEK-enabled instance When you create a clone of Cloud SQL instance, it inherits the same customer-managed encryption key as the one used to encrypt the source instance.

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- Customer key-managed encryption key (CMEK) Select to use your key with Google Cloud Key Management Service.
- Managed Connection Pooling lets you scale your workloads by optimizing resource utilization and connection latency Cloud SQL instances using pooling and multiplexing.
- For Private IP-only instances, enabling Data API access lets authorized users connect and execute SQL statements from the public internet.
- Encryption Google-managed encryption The default option.

