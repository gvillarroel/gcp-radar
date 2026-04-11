---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.315Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "google_ml_integration extension"
feature_slug: "google-ml-integration-extension"
latest_feature_date: "2024-10-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
  - "https://docs.cloud.google.com/sql/docs/postgres/troubleshooting"
keywords:
  - "ml"
  - "integration"
  - "extension"
  - "the"
  - "postgresql"
  - "is"
  - "available"
  - "in"
---

# google_ml_integration extension

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

The google_ml_integration PostgreSQL extension is available in Cloud SQL with support updated to version 1.4.2.

## Extended Definition

The google_ml_integration PostgreSQL extension is available in Cloud SQL with support updated to version 1.4.2.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)

## Supporting Pages

### "Build context sets using Gemini CLI \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli)
- Source ID: `site-iam-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Run the following commands in your terminal to authenticate: gcloud auth application-default login Configure the tools.yaml file The extension requires a database connection for context generation, which is supported by the MCP Toolbox and defined within the tools.yaml configuration file.
- To use SEMANTIC SIMILARITY MATCH , you must enable the vector and the google ml integration extension.
- MySQL PostgreSQL SQL Server Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms , and the Additional Terms for Generative AI Preview Products .
- Note: If this connection is not established, the extension will return error messages, such as "Error Discovering tools from mcp toolbox" and context generation won't work.

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "enableGoogleMlIntegration": " true " " false " "databaseFlags": [ { "name": "cloudsql.enable google ml integration", "value": " on " " off " } ] "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "backupConfiguration": { "enabled": true }, "passwordValidationPolicy": { "enablePasswordPolicy": true "minLength": " MIN LENGTH ", "complexity": COMPLEXITY DEFAULT, "reuseInterval": " REUSE INTERVAL ", "disallowUsernameSubstring": " DISALLOW USERNAME SUBSTRING ", "passwordChangeInterval": " PASSWORD CHANGE INTERVAL " }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "enablePrivatePathForGoogleCloudServices": true, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " }, "dataApiAccess": "ALLOW DATA API" }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "enableGoogleMlIntegration": " true " " false " "databaseFlags": [ { "name": "cloudsql.enable google ml integration", "value": " on " " off " } ] "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "backupConfiguration": { "enabled": true }, "passwordValidationPolicy": { "enablePasswordPolicy": true "minLength": " MIN LENGTH ", "complexity": COMPLEXITY DEFAULT, "reuseInterval": " REUSE INTERVAL ", "disallowUsernameSubstring": " DISALLOW USERNAME SUBSTRING ", "passwordChangeInterval": " PASSWORD CHANGE INTERVAL " }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "enablePrivatePathForGoogleCloudServices": true, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " }, "dataApiAccess": "ALLOW DATA API" }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Set the following parameters, as required: enableGoogleMlIntegration : when this parameter is set to true , Cloud SQL instances can connect to Vertex AI to pass requests for real-time predictions and insights to the AI cloudsql.enable google ml integration : when this parameter is set to on , Cloud SQL can integrate with Vertex AI You can use the sqlNetworkArchitecture field to enforce the use of the new network architecture for the instance upon creation, even if the project isn't fully upgraded.
- Set the following parameters, as required: enableGoogleMlIntegration : when this parameter is set to true , Cloud SQL instances can connect to Vertex AI to pass requests for real-time predictions and insights to the AI cloudsql.enable google ml integration : when this parameter is set to on , Cloud SQL can integrate with Vertex AI You can use the sqlNetworkArchitecture field to enforce the use of the new network architecture for the instance upon creation, even if the project isn't fully upgraded.

### Troubleshoot \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- To specify the user, run the following command: gcloud sql import sql INSTANCE URI [--async] [--database=DATABASE, -d DATABASE] [--user=USER] [GCLOUD WIDE FLAG …] Integrate with Vertex AI Issue Troubleshooting Error message: Google ML integration API is supported only on Postgres version 12 or above.
- To turn this flag on, use the gcloud sql instances patch command: gcloud sql instances patch INSTANCE NAME --database-flags cloudsql.enable google ml integration=on Replace INSTANCE NAME with the name of the primary Cloud SQL instance.
- To enable this integration, use the gcloud sql instances patch command: gcloud sql instances patch INSTANCE NAME --enable-google-ml-integration Replace INSTANCE NAME with the name of the primary Cloud SQL instance.
- The cloudsql.enable google ml integration database flag is turned off.

