---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.823Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "PostgreSQL 10"
feature_slug: "postgresql-10"
latest_feature_date: "2020-03-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/authorize-networks"
  - "https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption"
  - "https://docs.cloud.google.com/sql/docs/postgres/cmek"
keywords:
  - "offers"
  - "major"
  - "version"
  - "supports"
  - "beta"
---

# PostgreSQL 10

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for PostgreSQL supports PostgreSQL major version 10; Cloud SQL for PostgreSQL offers PostgreSQL major version 10 in beta.

## Extended Definition

Cloud SQL for PostgreSQL supports PostgreSQL major version 10; Cloud SQL for PostgreSQL offers PostgreSQL major version 10 in beta.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/authorize-networks](https://docs.cloud.google.com/sql/docs/postgres/authorize-networks)
- [https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption](https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption)
- [https://docs.cloud.google.com/sql/docs/postgres/cmek](https://docs.cloud.google.com/sql/docs/postgres/cmek)

## Supporting Pages

### "About client-side encryption \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption](https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption)
- Source ID: `site-iam-reference`
- Final score: 28
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Tink supports envelope encryption in C++, Java, Go, and Python using the AEAD API: public interface Aead { byte [] encrypt ( final byte [] plaintext, final byte [] associatedData ) throws… byte [] decrypt ( final byte [] ciphertext, final byte [] associatedData ) throws… } Besides the normal message/ciphertext argument, the encrypt and decrypt methods support optional associated data.
- Cloud KMS supports many different key types.

### "About customer-managed encryption keys (CMEK) \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/cmek](https://docs.cloud.google.com/sql/docs/postgres/cmek)
- Source ID: `site-iam-reference`
- Final score: 28
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Customer-managed encryption keys use the following format: projects / [ KMS PROJECT ID ] / locations / [ LOCATION ] / keyRings / [ KEY RING ] / cryptoKeys / [ KEY NAME ] If Cloud SQL is unable to access the key (such as if you disable the key version), Cloud SQL suspends the instance.
- You can't use customer-managed encryption keys to encrypt: External servers (external primary instances and external replicas) Instance metadata, such as the instance ID, database version, machine type, flags, backup schedule, etc.
- When you rotate keys, instances that are encrypted with that key aren't automatically re-encrypted with the new primary key version.
- Once you destroy a key version that is associated with a Cloud SQL instance, Google can't get the data back.

### "Authorize with authorized networks \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/authorize-networks](https://docs.cloud.google.com/sql/docs/postgres/authorize-networks)
- Source ID: `site-iam-reference`
- Final score: 28
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "UPDATE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } Limitations Some IP address ranges can't be added as authorized networks.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "UPDATE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } REST v1beta4 Configuring authorized networks replaces the existing authorized networks list.
- Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID network range 1 An authorized ip address or range network range 2 Another authorized ip address or range HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id Request JSON body: { "settings": { "ipConfiguration": { "authorizedNetworks": [{"value": " network range 1 "}, {"value": " network range 2 "}] } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Terraform To configure authorized networks, use a Terraform resource . resource "google sql database instance" "default" { name = "postgres-instance-with-authorized-network" region = "us-central1" database version = "POSTGRES 14" settings { tier = "db-custom-2-7680" ip configuration { authorized networks { name = "Network Name" value = "192.0.2.0/24" expiration time = "3021-11-15T16:19:00.094Z" } } } } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.

