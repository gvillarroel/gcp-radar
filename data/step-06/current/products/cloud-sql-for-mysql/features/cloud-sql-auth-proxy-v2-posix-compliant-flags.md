---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.945Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Cloud SQL Auth proxy v2 POSIX-compliant flags"
feature_slug: "cloud-sql-auth-proxy-v2-posix-compliant-flags"
latest_feature_date: "2023-02-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags/list"
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator"
keywords:
  - "sql"
  - "auth"
  - "proxy"
  - "v2"
  - "posix"
  - "compliant"
  - "flags"
  - "introduces"
---

# Cloud SQL Auth proxy v2 POSIX-compliant flags

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL Auth proxy v2 introduces fully POSIX-compliant flags.

## Extended Definition

Cloud SQL Auth proxy v2 introduces fully POSIX-compliant flags.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags/list](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags/list)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator](https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator)

## Supporting Pages

### "Connect using the Cloud SQL Proxy Operator \_|\_ Cloud SQL for MySQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator](https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator)
- Source ID: `site-docs-reference-3`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You will need to use the version and cli arguments specified here to use cert-manager on your GKE cluster. helm repo add jetstack https://charts.jetstack.io helm repo update helm install \ cert-manager jetstack/cert-manager \ --namespace cert-manager \ --version "v1.9.1" \ --create-namespace \ --set global.leaderElection.namespace = cert-manager \ --set installCRDs = true Install the Cloud SQL Proxy Operator to your kubernetes cluster: kubectl apply -f https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy-operator/v1.7.6/cloud-sql-proxy-operator.yaml Wait for the Cloud SQL Proxy Operator to start. kubectl rollout status deployment -n cloud-sql-proxy-operator-system cloud-sql-proxy-operator-controller-manager --timeout = 90s Confirm that the Cloud SQL Proxy Operator is installed and running: kubectl get pods -n cloud-sql-proxy-operator-system What's next Learn more about the Cloud SQL Auth Proxy .
- Overview The Cloud SQL Proxy Operator configures applications deployed on Google Kubernetes Engine (GKE) to connect to Cloud SQL database instances using the Cloud SQL Auth Proxy.
- Using the Cloud SQL Auth Proxy is the recommended method for connecting to a Cloud SQL instance.
- To learn more about the Cloud SQL Auth Proxy, see About the Cloud SQL Auth Proxy .

### Method: flags.list \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags/list](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags/list)
- Source ID: `site-api-reference`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If successful, the response body contains data with the following structure: JSON representation { "kind" : string , "items" : [ { object ( Flag ) } ] } Fields kind string This is always sql#flagsList . items[] object ( Flag ) flags.list of flags.
- Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/sqlservice.admin For more information, see the Authentication Overview .
- Home Documentation Databases Cloud SQL MySQL Reference Send feedback Method: flags.list Stay organized with collections Save and categorize content based on your preferences.
- By default, this method returns flags for all database types and versions. flagScope enum ( SqlFlagScope ) Optional.

### "Manage users with IAM database authentication \_|\_ Cloud SQL for MySQL\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users)
- Source ID: `site-docs-reference-3`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Terraform To add IAM user and service accounts on an instance with IAM database authentication enabled, use a Terraform resource . resource "google sql database instance" "default" { name = "mysql-db-auth-instance-name-test" region = "us-west4" database version = "MYSQL 8 0" settings { tier = "db-f1-micro" database flags { name = "cloudsql iam authentication" value = "on" } } } Specify the email address of the IAM user to add to the instance This resource does not create a new IAM user account; this account must already exist resource "google sql user" "iam user" { name = "test-user@example.com" instance = google sql database instance.default.name type = "CLOUD IAM USER" } Create a new IAM service account resource "google service account" "default" { account id = "cloud-sql-mysql-sa" display name = "Cloud SQL for MySQL Service Account" } Specify the email address of the IAM service account to add to the instance resource "google sql user" "iam service account user" { name = google service account.default.email instance = google sql database instance.default.name type = "CLOUD IAM SERVICE ACCOUNT" } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Terraform To add IAM user and service accounts on an instance with IAM database authentication enabled, use a Terraform resource . resource "google sql database instance" "default" { name = "mysql-iam-group-auth-instance-name" region = "us-west4" database version = "MYSQL 8 0" settings { tier = "db-f1-micro" database flags { name = "cloudsql iam authentication" value = "on" } } } Specify the email address of the Cloud Identity group to add to the instance This resource does not create a Cloud Identity group; the group must already exist resource "google sql user" "iam group" { name = "example-group@example.com" instance = google sql database instance.default.name type = "CLOUD IAM GROUP" } data "google project" "project" { } resource "google project iam binding" "cloud sql user" { project = data.google project.project.project id role = "roles/cloudsql.instanceUser" members = [ "group:example-group@example.com" ] } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- SERVICE ACCT : the email address for the service account. gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: SERVICE ACCT \ --role = roles/cloudsql.instanceUser If you want to connect using the Cloud SQL Auth Proxy or Cloud SQL Language Connectors, then run gcloud projects add-iam-policy-binding again with the --role=roles/cloudsql.client flag.
- USERNAME : the email address for the user. gcloud projects add-iam-policy-binding PROJECT ID \ --member = user: USERNAME \ --role = roles/cloudsql.instanceUser If you want to connect using the Cloud SQL Auth Proxy or Cloud SQL Language Connectors, then run gcloud projects add-iam-policy-binding again with the --role=roles/cloudsql.client flag.

