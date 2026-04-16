---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:28:23.688Z"
product_name: "Application Design Center"
product_slug: "application-design-center"
feature_name: "Secret Manager component support"
feature_slug: "secret-manager-component-support"
latest_feature_date: "2025-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-design-center/docs/quickstart-create-template"
  - "https://docs.cloud.google.com/application-design-center/docs/overview"
  - "https://docs.cloud.google.com/iam/docs/federated-identity-supported-services"
keywords:
  - "manager"
  - "secret"
  - "component"
  - "supports"
  - "canvas"
---

# Secret Manager component support

Product: Application Design Center
Coverage: LOW

## Step 02 Summary

Application Design Center supports Secret Manager as a component on the design canvas.

## Extended Definition

Application Design Center supports Secret Manager as a component on the design canvas.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-design-center/docs/quickstart-create-template](https://docs.cloud.google.com/application-design-center/docs/quickstart-create-template)
- [https://docs.cloud.google.com/application-design-center/docs/overview](https://docs.cloud.google.com/application-design-center/docs/overview)
- [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)

## Supporting Pages

### "Create and verify a template \_|\_ Application Design Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/application-design-center/docs/quickstart-create-template](https://docs.cloud.google.com/application-design-center/docs/quickstart-create-template)
- Source ID: `site-docs-root`
- Final score: 29
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To remove the load balancers and Secret Manager components, enter the following prompt: I don't need load balancers or Secret Manager.
- Add a Cloud Run component to use as the frontend. gcloud design-center spaces application-templates components create cloud-run-1 \ --application-template = quickstart-three-tier-web-app \ --shared-template-revision-uri = google/1b5e09c8-780f-484e-b8ed-c7178f4e4342 \ --space = SPACE \ --location = us-central1 \ --project = MANAGEMENT PROJECT ID Add a second Cloud Run component to use as the backend. gcloud design-center spaces application-templates components create cloud-run-2 \ --application-template = quickstart-three-tier-web-app \ --shared-template-revision-uri = google/1b5e09c8-780f-484e-b8ed-c7178f4e4342 \ --space = SPACE \ --location = us-central1 \ --project = MANAGEMENT PROJECT ID Add a Cloud SQL component. gcloud design-center spaces application-templates components create sql-postgresql-1 \ --application-template = quickstart-three-tier-web-app \ --shared-template-revision-uri = google/45be1bc2-89bc-477b-9b5d-64c41ff3b146 \ --space = SPACE \ --location = us-central1 \ --project = MANAGEMENT PROJECT ID Connect cloud-run-1 to cloud-run-2. gcloud design-center spaces application-templates components connections create frontend-to-backend \ --application-template = quickstart-three-tier-web-app \ --component = cloud-run-1 \ --destination-component-uri = cloud-run-2 \ --space = SPACE \ --location = us-central1 \ --project = MANAGEMENT PROJECT ID Connect cloud-run-2 to sql-postgresql-1. gcloud design-center spaces application-templates components connections create backend-to-database \ --application-template = quickstart-three-tier-web-app \ --component = cloud-run-2 \ --destination-component-uri = sql-postgresql-1 \ --space = SPACE \ --location = us-central1 \ --project = MANAGEMENT PROJECT ID Commit your changes to create an application template revision. gcloud design-center spaces application-templates commit quickstart-three-tier-web-app \ --space = SPACE \ --location = us-central1 \ --project = MANAGEMENT PROJECT ID Create an application draft Design canvas From the design canvas, click Configure an app .
- Create frontend-service.json . { "component" : "projects/ MANAGEMENT PROJECT ID /locations/us-central1/spaces/ SPACE /applicationTemplates/quickstart-three-tier-web-app/components/cloud-run-1" , "parameters" : [ { "key" : "service name" , "value" : "frontend-service" }, { "key" : "project id" , "value" : " DEPLOYMENT PROJECT ID " } ] } Create backend-service.json . { "component" : "projects/ MANAGEMENT PROJECT ID /locations/us-central1/spaces/ SPACE /applicationTemplates/quickstart-three-tier-web-app/components/cloud-run-2" , "parameters" : [ { "key" : "service name" , "value" : "backend-service" }, { "key" : "project id" , "value" : " DEPLOYMENT PROJECT ID " } ] } Create database-postgresql.json . { "component" : "projects/ MANAGEMENT PROJECT ID /locations/us-central1/spaces/ SPACE /applicationTemplates/quickstart-three-tier-web-app/components/sql-postgresql-1" , "parameters" : [ { "key" : "name" , "value" : "database-postgresql" }, { "key" : "project id" , "value" : " DEPLOYMENT PROJECT ID " }, { "key" : "database version" , "value" : "POSTGRES 15" }, { "key" : "region" , "value" : "us-central1" }, { "key" : "zone" , "value" : "us-central1-a" } ] } Update the application to configure the required parameters. gcloud design-center spaces applications update quickstart-three-tier-test \ --space = SPACE \ --location = us-central1 \ --project = MANAGEMENT PROJECT ID \ --component-parameters = ./frontend-service.json \ --component-parameters = ./backend-service.json \ --component-parameters = ./database-postgresql.json Deploy the application Design canvas Click Deploy .
- The system creates the application draft. gcloud CLI Identify your application template latest revision URI. gcloud design-center spaces application-templates describe quickstart-three-tier-web-app \ --space = SPACE \ --location = us-central1 \ --project = MANAGEMENT PROJECT ID \ --format = 'yaml(name,latestRevision)' Create an application draft based on your template. gcloud design-center spaces applications create quickstart-three-tier-test \ --space = SPACE \ --location = us-central1 \ --project = MANAGEMENT PROJECT ID \ --source-application-template-revision = projects/ MANAGEMENT PROJECT ID /locations/us-central1/spaces/ SPACE /applicationTemplates/quickstart-three-tier-web-app/revisions/ TEMPLATE REVISION \ --display-name = "Quickstart three-tier test" \ --environment-type = test \ --criticality-type = low \ --scope-type = regional \ --deployment-region = us-central1 Configure components Design canvas In the design canvas, click cloud-run-1 and do the following in the Configuration area: From the Project ID list, select the descendant project you created in Before you begin .

### Application Design Center overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-design-center/docs/overview](https://docs.cloud.google.com/application-design-center/docs/overview)
- Source ID: `site-api-reference`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Components can include: Assets : supporting resources that help you control other resources, such as service accounts or secrets.
- Design and deployment approaches To determine the best design and deployment approach for your purpose, use the following table: Your goal Primary benefit Approach Visualize your architecture Real-time suggestions and visual layout Design canvas Rapid prototyping AI-driven starting points from requirements Natural language chat Automation and integration Repeatable, programmable workflows REST API Command-line management Efficient terminal-based operations Google Cloud CLI Team collaboration workflow Platform teams and developers work together to move from business requirements to a working application using the following example workflow: Set up collaboration : platform administrators create spaces and assign team access.
- You can select from the following types of components: Google components : components designed by Google that incorporate Google Cloud best practices and default security configurations.
- By using these components, you ensure that every part of your application follows security and performance standards.

### "Identity federation: products and limitations \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- Source ID: `site-iam-reference`
- Final score: 25
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Google Cloud API: The following methods don't support identity federtation: UpdateCatalog ImportCompletionData TuneModel ImportProducts PurgeProducts ImportUserEvents ImportUserEvents PurgeUserEvents RejoinUserEvents Other: No known limitations Secret Manager GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Secure Source Manager GA Console (federated): No known limitations Google Cloud API: Identity federation users must sign in through the Secure Source Manager instance web interface before running any of the following commands: Git CLI commands API calls to data plane endpoints Identity federation users must sign in through the Secure Source Manager instance web interface after every session expiry to continue using Git SSH CLI commands with user SSH keys.
- Google Cloud API: No known limitations Other: The following features don't support Workforce Identity Federation with BigQuery: Connected Sheets Google Drive Recommendations Slot estimator The following operations don't support Workforce Identity Federation: Loading data from Amazon S3 , Apache Spark , or Azure Blob Storage through the Connection API Loading data from Google Drive Bigtable GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Binary Authorization GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Blockchain Analytics GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Blockchain Node Engine GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Carbon Footprint GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Certificate Authority Service GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Certificate Manager GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Channel Services GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Asset Inventory GA Console (federated): In the IAM policy tab, the Analyze Full Access button is unavailable for Workforce Identity Federation users.
- Other: No known limitations Cloud Build GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud CDN GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Code Unsupported Alternatives: No alternatives available Cloud Composer GA Console (federated): No known limitations Google Cloud API: No known limitations Other: Cloud Composer supports Workforce Identity Federation only for environments created in Composer version 2.1.11 or later and Airflow version 2.4.3 or later.
- List of products and limitations Launch stage GA Preview Unsupported Product Identity federation launch stage Limitations Access Approval GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Access Context Manager GA Console (federated): No known limitations Google Cloud API: v1alpha APIs aren't available for federated identities.

