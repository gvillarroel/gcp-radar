---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.949Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Automatic IAM database authentication"
feature_slug: "automatic-iam-database-authentication"
latest_feature_date: "2022-12-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/authentication"
  - "https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-ssl-instance"
keywords:
  - "automatic"
  - "iam"
  - "database"
  - "authentication"
  - "sql"
  - "mysql"
  - "supports"
---

# Automatic IAM database authentication

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports automatic IAM database authentication.

## Extended Definition

Cloud SQL for MySQL supports automatic IAM database authentication.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication)
- [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-ssl-instance](https://docs.cloud.google.com/sql/docs/mysql/configure-ssl-instance)

## Supporting Pages

### "Configure SSL/TLS certificates \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-ssl-instance](https://docs.cloud.google.com/sql/docs/mysql/configure-ssl-instance)
- Source ID: `site-docs-reference-3`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Retrieve the public key for the certificate you just created and copy it into the client-cert.pem file with the ssl client-certs describe command: gcloud sql ssl client-certs describe CERT NAME \ --instance = INSTANCE NAME \ --format = "value(cert)" > client-cert.pem Copy the server certificate into the server-ca.pem file using the instances describe command: gcloud sql instances describe INSTANCE NAME \ --format = "value(serverCaCert.cert)" > server-ca.pem Terraform To create a client certificate, use a Terraform resource : resource "google sql ssl cert" "mysql client cert" { common name = "mysql common name" instance = google sql database instance.mysql instance.name } REST v1 Create an SSL/TLS certificate, giving it a unique name for this instance: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID client-cert-name : The client cert name HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /sslCerts Request JSON body: { "commonName" : " client-cert-name " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Terraform To enforce SSL/TLS encryption, use a Terraform resource : resource "google sql database instance" "mysql instance" { name = "mysql-instance" region = "asia-northeast1" database version = "MYSQL 8 0" settings { tier = "db-f1-micro" ip configuration { The following SSL enforcement options only allow connections encrypted with SSL/TLS and with valid client certificates.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Configure SSL/TLS certificates Stay organized with collections Save and categorize content based on your preferences.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /restart" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-20T21:30:35.667Z", "operationType": "RESTART", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } REST v1beta4 Create an SSL/TLS certificate, giving it a unique name for this instance: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID client-cert-name : The client cert name HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /sslCerts Request JSON body: { "commonName" : " client-cert-name " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Manage users with IAM database authentication \_|\_ Cloud SQL for MySQL\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users)
- Source ID: `site-docs-reference-3`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- Terraform To add IAM user and service accounts on an instance with IAM database authentication enabled, use a Terraform resource . resource "google sql database instance" "default" { name = "mysql-db-auth-instance-name-test" region = "us-west4" database version = "MYSQL 8 0" settings { tier = "db-f1-micro" database flags { name = "cloudsql iam authentication" value = "on" } } } Specify the email address of the IAM user to add to the instance This resource does not create a new IAM user account; this account must already exist resource "google sql user" "iam user" { name = "test-user@example.com" instance = google sql database instance.default.name type = "CLOUD IAM USER" } Create a new IAM service account resource "google service account" "default" { account id = "cloud-sql-mysql-sa" display name = "Cloud SQL for MySQL Service Account" } Specify the email address of the IAM service account to add to the instance resource "google sql user" "iam service account user" { name = google service account.default.email instance = google sql database instance.default.name type = "CLOUD IAM SERVICE ACCOUNT" } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- For example, a log might have information similar to the following: { insertId: "..." logName: "projects/.../logs/cloudaudit.googleapis.com%2Fdata access" protoPayload: { @type: "type.googleapis.com/google.cloud.audit.AuditLog" authenticationInfo: { principalEmail: "..." } authorizationInfo: [ 0: { granted: true permission: "cloudsql.instances.login" resource: "instances/..." resourceAttributes: { } } ] methodName: "cloudsql.instances.login" request: { @type: "type.googleapis.com/google.cloud.sql.authorization.v1.InstancesLoginRequest" clientIpAddress: "..." database: "..." databaseSessionId: ... instance: "projects/.../locations/us-central1/instances/..." user: "..." } requestMetadata: { callerIp: "..." destinationAttributes: { } requestAttributes: { auth: { } time: "..." } } resourceName: "instances/..." serviceName: "cloudsql.googleapis.com" status: { } } receiveTimestamp: "..." resource: { labels: { database id: "...:..." project id: "..." region: "us-central" } type: "cloudsql database" } severity: "INFO" timestamp: "..." } Troubleshoot a login failure When an attempt to log in fails, MySQL returns a minimal error message for security reasons.
- Terraform To add IAM user and service accounts on an instance with IAM database authentication enabled, use a Terraform resource . resource "google sql database instance" "default" { name = "mysql-iam-group-auth-instance-name" region = "us-west4" database version = "MYSQL 8 0" settings { tier = "db-f1-micro" database flags { name = "cloudsql iam authentication" value = "on" } } } Specify the email address of the Cloud Identity group to add to the instance This resource does not create a Cloud Identity group; the group must already exist resource "google sql user" "iam group" { name = "example-group@example.com" instance = google sql database instance.default.name type = "CLOUD IAM GROUP" } data "google project" "project" { } resource "google project iam binding" "cloud sql user" { project = data.google project.project.project id role = "roles/cloudsql.instanceUser" members = [ "group:example-group@example.com" ] } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Manage users with IAM database authentication Stay organized with collections Save and categorize content based on your preferences.

### IAM authentication \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication)
- Source ID: `site-docs-reference-3`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Automatic versus manual IAM database authentication Cloud SQL for MySQL has two options for IAM database authentication: automatic and manual.
- Automatic IAM database authentication Automatic IAM database authentication lets you hand off requesting and managing access tokens to an intermediary Cloud SQL connector , such as the Cloud SQL Auth Proxy or one of the Cloud SQL Language Connectors.
- Cloud SQL IAM database authentication for different instance scenarios Read replicas IAM database authentication is not enabled in a read replica automatically, even when it is enabled on the primary instance.
- Automatic IAM database authentication requires the use of a Cloud SQL connector and is supported by the Cloud SQL Auth Proxy , the Go connector , the Java connector , and the Python connector .

