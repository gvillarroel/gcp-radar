---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.892Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Customer-managed CA mode"
feature_slug: "customer-managed-ca-mode"
latest_feature_date: "2025-05-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
  - "https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances"
keywords:
  - "customer"
  - "managed"
  - "ca"
  - "mode"
  - "lets"
  - "sql"
  - "instances"
  - "use"
---

# Customer-managed CA mode

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Customer-managed CA mode lets Cloud SQL instances use a user-managed certificate authority hierarchy for server certificates; Customer-managed CA mode lets Cloud SQL instances use a user-managed certificate authority hierarchy for server certificates.

## Extended Definition

Customer-managed CA mode lets Cloud SQL instances use a user-managed certificate authority hierarchy for server certificates; Customer-managed CA mode lets Cloud SQL instances use a user-managed certificate authority hierarchy for server certificates.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- [https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name](https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-reference-3`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Managed Connection Pooling lets you scale your workloads by optimizing resource utilization and connection latency Cloud SQL instances using pooling and multiplexing.
- This feature is available in Preview and for CUSTOMER MANAGED CAS CA instances only.
- This feature is available in Preview and for CUSTOMER MANAGED CAS CA instances only.
- Requires server ca mode to be GOOGLE MANAGED CAS CA or CUSTOMER MANAGED CAS CA .

### "Set up a custom DNS name for a Cloud SQL instance \_|\_ Cloud SQL for MySQL\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name](https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name)
- Source ID: `site-docs-reference-3`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following sample also creates prerequisite resources for the new instance. resource "google project service identity" "default" { provider = google-beta service = "sqladmin.googleapis.com" } resource "random string" "default" { length = 10 special = false upper = false } resource "google privateca ca pool" "default" { name = "customer-ca-pool-${random string.default.result}" location = "asia-northeast1" tier = "DEVOPS" publishing options { publish ca cert = false publish crl = false } } This is required for setting up customer managed CAS (Certificate Authority Service) instances. resource "google privateca certificate authority" "default" { pool = google privateca ca pool.default.name certificate authority id = "my-certificate-authority" location = "asia-northeast1" lifetime = "86400s" type = "SELF SIGNED" deletion protection = false # set to "true" in production skip grace period = true ignore active certificates on deletion = true config { subject config { subject { organization = "my organization" common name = "my certificate authority name" } } x509 config { ca options { is ca = true } key usage { base key usage { cert sign = true crl sign = true } extended key usage { server auth = false } } } } key spec { algorithm = "RSA PKCS1 4096 SHA256" } } resource "google privateca ca pool iam member" "default" { ca pool = google privateca ca pool.default.id role = "roles/privateca.certificateRequester" member = "serviceAccount:${google project service identity.default.email}" } resource "google sql database instance" "default" { name = "mysql-instance" region = "asia-northeast1" database version = "MYSQL 8 4" settings { edition = "ENTERPRISE" tier = "db-f1-micro" ip configuration { The following server CA mode lets the instance use customer-managed CAS CA to issue server certificates. https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances#ipconfiguration server ca mode = "CUSTOMER MANAGED CAS CA" server ca pool = google privateca ca pool.default.id custom subject alternative names = ["customSan.test.com"] } } } Add or update custom SAN values for an instance To add or update custom SAN values for an existing instance, do the following: gcloud gcloud sql instances patch INSTANCE NAME \ --custom-subject-alternative-names = CUSTOM DNS NAME Caution : If you're updating an instance that already has custom SAN values, then specify the existing custom SAN values or the existing values will be replaced.
- Terraform To update an instance that already has custom SAN values, use a Terraform resource . resource "google sql database instance" "default" { name = "mysql-instance" region = "asia-northeast1" database version = "MYSQL 8 4" settings { edition = "ENTERPRISE" tier = "db-f1-micro" ip configuration { The following server CA mode lets the instance use customer-managed CAS CA to issue server certificates. https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances#ipconfiguration server ca mode = "CUSTOMER MANAGED CAS CA" server ca pool = google privateca ca pool.default.id custom subject alternative names = ["customSan.test.com"] } } } Caution : If you're updating an instance that already has custom SAN values, then specify the existing custom SAN values or the existing values will be replaced.
- Create an instance with custom SAN values To create an instance with custom SAN values, use the following gcloud sql instances create command: gcloud gcloud sql instances create " INSTANCE NAME " \ --database-version = DATABASE VERSION \ --project = PROJECT ID \ --region = REGION \ --server-ca-mode = CUSTOMER MANAGED CAS CA \ --server-ca-pool = projects/ PROJECT ID CAS /locations/ REGION /caPools/ CA POOL ID --custom-subject-alternative-names = CUSTOM DNS NAME Make the following replacements: INSTANCE NAME with the name of the Cloud SQL instance that you want to create.
- For security reasons, you can use a custom SAN configuration only for instances that you configure with CUSTOMER MANAGED CAS CA as the server CA mode.

### REST Resource: instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- Source ID: `site-docs-reference-3`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- The resource name of the server CA pool for an instance with CUSTOMER MANAGED CAS CA as the serverCaMode .
- This setting can only be set if serverCaMode is either GOOGLE MANAGED CAS CA or CUSTOMER MANAGED CAS CA.
- Requires serverCaMode to be GOOGLE MANAGED CAS CA or CUSTOMER MANAGED CAS CA .
- CUSTOMER MANAGED ACTIVE DIRECTORY Customer-managed Active Directory mode.

