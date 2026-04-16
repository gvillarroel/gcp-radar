---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.926Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "SSL mode configuration"
feature_slug: "ssl-mode-configuration"
latest_feature_date: "2023-12-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-ssl-instance"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-ip"
  - "https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name"
keywords:
  - "ssl"
  - "mode"
  - "configuration"
  - "sql"
  - "mysql"
  - "lets"
  - "you"
  - "configure"
---

# SSL mode configuration

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL for MySQL lets you configure the SSL mode for an instance.

## Extended Definition

Cloud SQL for MySQL lets you configure the SSL mode for an instance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/configure-ssl-instance](https://docs.cloud.google.com/sql/docs/mysql/configure-ssl-instance)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-ip)
- [https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name](https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name)

## Supporting Pages

### "Configure SSL/TLS certificates \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-ssl-instance](https://docs.cloud.google.com/sql/docs/mysql/configure-ssl-instance)
- Source ID: `site-docs-reference-3`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Delete the changes To delete your changes, do the following: To disable deletion protection, in your Terraform configuration file set the deletion protection argument to false . deletion protection = "false" Apply the updated Terraform configuration by running the following command and entering yes at the prompt: terraform apply Remove resources previously applied with your Terraform configuration by running the following command and entering yes at the prompt: terraform destroy REST v1 Before using any of the request data, make the following replacements: PROJECT ID : The project ID SSL ENFORCEMENT MODE : Use one of the following options: ALLOW UNENCRYPTED AND ENCRYPTED : allows non-SSL/non-TLS and SSL/TLS connections.
- Please check the API reference for other SSL enforcement options: https://cloud.google.com/sql/docs/postgres/admin-api/rest/v1beta4/instances#ipconfiguration ssl mode = "TRUSTED CLIENT CERTIFICATE REQUIRED" } } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- INSTANCE ID : The instance ID HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID Request JSON body: { "settings": { "ipConfiguration": {"sslMode": " SSL ENFORCEMENT MODE "} } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- INSTANCE ID : The instance ID HTTP method and URL: PATCH https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID Request JSON body: { "settings": { "ipConfiguration": {"sslMode": " SSL ENFORCEMENT MODE "} } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### Configure public IP \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-ip)
- Source ID: `site-docs-reference-required-5`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To remove all authorized networks, use the following command: gcloud sql instances patch INSTANCE NAME --clear-authorized-networks Terraform To enable public IP and add an authorized address or address range, use a Terraform resource . resource "google sql database instance" "mysql public ip instance name" { database version = "MYSQL 5 7" name = "mysql-public-ip-instance-name" region = "asia-southeast2" settings { availability type = "ZONAL" disk size = 100 disk type = "PD SSD" ip configuration { Add optional authorized networks Update to match the customer's networks authorized networks { name = "test-net-3" value = "203.0.113.0/24" } Enable public IP ipv4 enabled = true } tier = "db-custom-4-26624" } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Configure public IP Stay organized with collections Save and categorize content based on your preferences.
- MySQL PostgreSQL SQL Server This page describes how to configure public IP connectivity for a Cloud SQL instance.
- For more information about server CA mode configuration, see Certificate authority (CA) authorities .

### "Set up a custom DNS name for a Cloud SQL instance \_|\_ Cloud SQL for MySQL\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name](https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name)
- Source ID: `site-docs-reference-3`
- Final score: 119
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following sample also creates prerequisite resources for the new instance. resource "google project service identity" "default" { provider = google-beta service = "sqladmin.googleapis.com" } resource "random string" "default" { length = 10 special = false upper = false } resource "google privateca ca pool" "default" { name = "customer-ca-pool-${random string.default.result}" location = "asia-northeast1" tier = "DEVOPS" publishing options { publish ca cert = false publish crl = false } } This is required for setting up customer managed CAS (Certificate Authority Service) instances. resource "google privateca certificate authority" "default" { pool = google privateca ca pool.default.name certificate authority id = "my-certificate-authority" location = "asia-northeast1" lifetime = "86400s" type = "SELF SIGNED" deletion protection = false # set to "true" in production skip grace period = true ignore active certificates on deletion = true config { subject config { subject { organization = "my organization" common name = "my certificate authority name" } } x509 config { ca options { is ca = true } key usage { base key usage { cert sign = true crl sign = true } extended key usage { server auth = false } } } } key spec { algorithm = "RSA PKCS1 4096 SHA256" } } resource "google privateca ca pool iam member" "default" { ca pool = google privateca ca pool.default.id role = "roles/privateca.certificateRequester" member = "serviceAccount:${google project service identity.default.email}" } resource "google sql database instance" "default" { name = "mysql-instance" region = "asia-northeast1" database version = "MYSQL 8 4" settings { edition = "ENTERPRISE" tier = "db-f1-micro" ip configuration { The following server CA mode lets the instance use customer-managed CAS CA to issue server certificates. https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances#ipconfiguration server ca mode = "CUSTOMER MANAGED CAS CA" server ca pool = google privateca ca pool.default.id custom subject alternative names = ["customSan.test.com"] } } } Add or update custom SAN values for an instance To add or update custom SAN values for an existing instance, do the following: gcloud gcloud sql instances patch INSTANCE NAME \ --custom-subject-alternative-names = CUSTOM DNS NAME Caution : If you're updating an instance that already has custom SAN values, then specify the existing custom SAN values or the existing values will be replaced.
- Terraform To update an instance that already has custom SAN values, use a Terraform resource . resource "google sql database instance" "default" { name = "mysql-instance" region = "asia-northeast1" database version = "MYSQL 8 4" settings { edition = "ENTERPRISE" tier = "db-f1-micro" ip configuration { The following server CA mode lets the instance use customer-managed CAS CA to issue server certificates. https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances#ipconfiguration server ca mode = "CUSTOMER MANAGED CAS CA" server ca pool = google privateca ca pool.default.id custom subject alternative names = ["customSan.test.com"] } } } Caution : If you're updating an instance that already has custom SAN values, then specify the existing custom SAN values or the existing values will be replaced.
- For security reasons, you can use a custom SAN configuration only for instances that you configure with CUSTOMER MANAGED CAS CA as the server CA mode.
- If the IP address of the instance on your company network is 192.0.2.4 , then create the following DNS records: Record type: A Name: prod-db.mycompany.example.com Value: 192.0.2.4 TTL: 600 Record type: TXT Name: prod-db.mycompany.example.com Value: my-project:region:my-instance TTL: 600 Connect to an instance using a custom DNS name When you connect to a Cloud SQL for MySQL instance, configure the custom DNS name as the hostname and enable server identity verification in your client.

