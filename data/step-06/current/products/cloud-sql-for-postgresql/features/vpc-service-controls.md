---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.824Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "VPC Service Controls"
feature_slug: "vpc-service-controls"
latest_feature_date: "2019-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api"
keywords:
  - "protect"
  - "host"
  - "project"
  - "controls"
  - "admin"
  - "supports"
---

# VPC Service Controls

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL supports VPC Service Controls to protect the Cloud SQL Admin API and host project with a service perimeter.

## Extended Definition

Cloud SQL supports VPC Service Controls to protect the Cloud SQL Admin API and host project with a service perimeter.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api)

## Supporting Pages

### "Configure VPC Service Controls \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls)
- Source ID: `site-docs-root`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: If you're using Shared VPC , we recommend that you include the host project in a service perimeter along with any projects that belong to the Shared VPC.
- Enable the API Add the Identity and Access Management (IAM) roles to the user or service account you are using to set up and administer VPC Service Controls.
- Create a service perimeter During this procedure, you select the Cloud SQL projects that you want the VPC service perimeter to protect.
- For this scenario, when you enable VPC-SC, you must add the KMS key hosting project to the security perimeter.

### "Configure VPC Service Controls \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls)
- Source ID: `site-docs-reference`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: If you're using Shared VPC , we recommend that you include the host project in a service perimeter along with any projects that belong to the Shared VPC.
- Enable the API Add the Identity and Access Management (IAM) roles to the user or service account you are using to set up and administer VPC Service Controls.
- Create a service perimeter During this procedure, you select the Cloud SQL projects that you want the VPC service perimeter to protect.
- For this scenario, when you enable VPC-SC, you must add the KMS key hosting project to the security perimeter.

### "Use the Cloud SQL Admin API \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api)
- Source ID: `site-docs-reference`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- At the command line, provide the path to the file, preceded by the @ character, as the --data parameter: --data @<path-to-file>/<filename> For example, to create a database user, you could create a file named data.json with the following content: {"host": "%", "name": "user1", "password": "abc123"} Then you would use the following cURL command at the command line: curl --header "Authorization: Bearer ${ ACCESS TOKEN } " \ --header 'Content-Type: application/json' \ --data @./data.json \ -X POST \ https://www.googleapis.com/sql/v1beta4/projects/myProject/instances/myInstance/users Work with long-running API calls Some API calls, such as object creation, can take some time to complete.
- Select Continue . gcloud Enter the following to display the project IDs for your Google Cloud projects: gcloud projects list Set your default project: gcloud config set project YOUR PROJECT ID Enable the Cloud SQL Admin API: gcloud services enable sqladmin.googleapis.com Authorize requests Your application needs to identify itself every time it sends a request to the Cloud SQL Admin API, by including an API key with each request.
- Use VPC Service Controls with the Cloud SQL Admin API VPC Service Controls let you create a service perimeter around the Cloud SQL Admin API to help mitigate data exfiltration.
- Enable the API To use the Cloud SQL Admin API, you need to enable it: Console Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.

