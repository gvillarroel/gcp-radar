---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.329Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Database Center"
feature_slug: "database-center"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-manage-databases"
keywords:
  - "database"
  - "center"
  - "provides"
  - "an"
  - "ai"
  - "assisted"
  - "dashboard"
  - "with"
---

# Database Center

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Database Center provides an AI-assisted dashboard with a centralized view across your database fleet.

## Extended Definition

Database Center provides an AI-assisted dashboard with a centralized view across your database fleet.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/create-manage-databases](https://docs.cloud.google.com/sql/docs/postgres/create-manage-databases)

## Supporting Pages

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- April 09, 2024 Cloud SQL for MySQL Feature The following Gemini in Databases features are now available in Public Preview: Database Center : an AI-assisted dashboard that gives you one centralized view across your entire database fleet.
- Cloud SQL for PostgreSQL Feature The following Gemini in Databases features are now available in Public Preview: Database Center : an AI-assisted dashboard that gives you one centralized view across your entire database fleet.
- Cloud SQL for SQL Server Feature The following Gemini in Databases features are now available in Public Preview: Database Center : an AI-assisted dashboard that gives you one centralized view across your entire database fleet.
- Cloud SQL for SQL Server Feature You can use the following observability dashboards in Cloud SQL for SQL Server to monitor, analyze, and diagnose issues with your instances, databases, and queries: System insights Query insights Both of these dashboards are available to you in the Google Cloud Console.

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- April 09, 2024 Feature The following Gemini in Databases features are now available in Public Preview: Database Center : an AI-assisted dashboard that gives you one centralized view across your entire database fleet.
- With AI-assisted troubleshooting, you can resolve complex database performance issues like slow queries and high load for your instances in a guided manner.
- With AI-assisted troubleshooting, you can resolve complex database performance issues like slow queries and high load for your instances in a guided manner.
- April 28, 2022 Feature The following Cloud SQL recommenders that help you optimize your database costs are now generally available: Idle database instance recommender : Identifies idle database instances in your project and provides recommendations about the savings that you can make by shutting them down.

### "Create and manage databases \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-manage-databases](https://docs.cloud.google.com/sql/docs/postgres/create-manage-databases)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID database-name : The name of a database inside the Cloud SQL instance HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /databases Request JSON body: { "project": " project-id ", "instance": " instance-id ", "name": " database-name " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID database-name : The name of a database inside the Cloud SQL instance HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /databases Request JSON body: { "project": " project-id ", "instance": " instance-id ", "name": " database-name " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID database-name : The name of a database inside the Cloud SQL instance HTTP method and URL: DELETE https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /databases/ database-name To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID database-name : The name of a database inside the Cloud SQL instance HTTP method and URL: DELETE https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /databases/ database-name To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

