---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.813Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Saved queries in Cloud SQL Studio"
feature_slug: "saved-queries-in-cloud-sql-studio"
latest_feature_date: "2025-08-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli"
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
keywords:
  - "saved"
  - "queries"
  - "in"
  - "sql"
  - "studio"
  - "this"
  - "lets"
  - "you"
---

# Saved queries in Cloud SQL Studio

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

This feature lets you save and manage SQL queries in Cloud SQL Studio.

## Extended Definition

This feature lets you save and manage SQL queries in Cloud SQL Studio.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli)
- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)

## Supporting Pages

### "Build context sets using Gemini CLI \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli)
- Source ID: `site-iam-reference`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Learn how to create or delete a context set in Cloud SQL Studio Learn how to test a context set Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Grant executesql permission to Cloud SQL instance To grant the executesql permission to Cloud SQL instance and enable the Cloud SQL Data API, run the following command: gcloud config set project PROJECT ID gcloud components update gcloud beta sql instances patch INSTANCE ID --data-api-access=ALLOW DATA API Replace the following: PROJECT ID : The ID of your Google Cloud project.
- Enable ngram token size flag. gcloud sql instances patch INSTANCE NAME --database-flags=ngram token size=3 Create a FULLTEXT index for trigram matching on the airport name CREATE FULLTEXT INDEX idx ngram airports name ON airports ( name ) WITH PARSER ngram ; Prepare your environment You can build context set files from any local development environment or IDE.
- To auto-generate bulk templates, perform the following steps: Run the /generate bulk templates command: /generate bulk templates Based on your database schema, the template-based SQL generation takes you through a series of questions related to verifying the database information and granting permissions to access the database schema.

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- This feature automates read pool scale in and scale out operations based on one or both of the following conditions: Allowed CPU usage of the read pool Allowed number of client connections to the read pool November 13, 2025 Feature Cloud SQL for MySQL now lets you have more control over the number of results that are returned when you perform an ANN vector search with filters.
- December 15, 2022 Feature You can now allow other Google Cloud services, such as BigQuery, to access data in Cloud SQL for MySQL and make queries against this data over a private connection.
- This option lets you establish your own CA hierarchy and manage the rotation of CA certificates for your Cloud SQL instances to help you meet your regulatory compliance needs.
- Cloud SQL Studio : lets authorized users interact directly with the SQL database and run SQL queries from the Google Cloud console to access and manipulate data.

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- The range name should comply with RFC-1035 and be within 1-63 characters. ( gcloud alpha sql instances create ). --enable-google-private-path : If you use this parameter, then you allow other Google Cloud services, such as BigQuery, to access data in Cloud SQL and make queries against this data over a private connection.
- If you set the enablePrivatePathForGoogleCloudServices parameter to true , then you allow other Google Cloud services, such as BigQuery, to access data in Cloud SQL and make queries against this data over a private connection.
- If you set the enablePrivatePathForGoogleCloudServices parameter to true , then you allow other Google Cloud services, such as BigQuery, to access data in Cloud SQL and make queries against this data over a private connection.
- Enable private path By selecting this checkbox, you let other Google Cloud services, such as BigQuery, access data in Cloud SQL and make queries against this data over a private connection.

