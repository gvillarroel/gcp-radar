---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:28:23.683Z"
product_name: "Application Design Center"
product_slug: "application-design-center"
feature_name: "AlloyDB component support"
feature_slug: "alloydb-component-support"
latest_feature_date: "2025-07-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-design-center/docs/quickstart-create-template"
  - "https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ConnectionParameters"
  - "https://docs.cloud.google.com/application-design-center/docs/overview"
keywords:
  - "alloydb"
  - "option"
  - "component"
  - "supports"
---

# AlloyDB component support

Product: Application Design Center
Coverage: LOW

## Step 02 Summary

Application Design Center supports AlloyDB as a component option.

## Extended Definition

Application Design Center supports AlloyDB as a component option.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-design-center/docs/quickstart-create-template](https://docs.cloud.google.com/application-design-center/docs/quickstart-create-template)
- [https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ConnectionParameters](https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ConnectionParameters)
- [https://docs.cloud.google.com/application-design-center/docs/overview](https://docs.cloud.google.com/application-design-center/docs/overview)

## Supporting Pages

### Application Design Center overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-design-center/docs/overview](https://docs.cloud.google.com/application-design-center/docs/overview)
- Source ID: `site-api-reference`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- You can select from the following types of components: Google components : components designed by Google that incorporate Google Cloud best practices and default security configurations.
- Components can include: Assets : supporting resources that help you control other resources, such as service accounts or secrets.
- By using these components, you ensure that every part of your application follows security and performance standards.
- Imported components : your own components that you import to App Design Center, based on your own Terraform modules.

### "ConnectionParameters \_|\_ Application Design Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ConnectionParameters](https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ConnectionParameters)
- Source ID: `site-api-reference`
- Final score: 21
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation Connection level parameters associated with each component within an application.
- The name of the connection parameter. parameters[] object ( Parameter ) Optional.

### "Create and verify a template \_|\_ Application Design Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/application-design-center/docs/quickstart-create-template](https://docs.cloud.google.com/application-design-center/docs/quickstart-create-template)
- Source ID: `site-docs-root`
- Final score: 21
- Re-rank relevance: N/A

Evidence snippets:
- Track the deployment status. gcloud design-center operations describe operation- OPERATION ID \ --space = SPACE \ --location = us-central1 \ --project = MANAGEMENT PROJECT ID When the deployment completes, identify the application output parameters. gcloud design-center spaces applications describe quickstart-three-tier-test \ --space = SPACE \ --location = us-central1 \ --project = MANAGEMENT PROJECT ID \ --format = 'yaml(name,appParameters,componentParameters,deploymentMetadata,deploymentRevision,previewReference)' Optional: Monitor your deployment After you deploy an application, you can use Application Monitoring to view application telemetry and monitor health and performance: In the Google Cloud console, go to the Application monitoring page: Go to Application monitoring If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- Add a Cloud Run component to use as the frontend. gcloud design-center spaces application-templates components create cloud-run-1 \ --application-template = quickstart-three-tier-web-app \ --shared-template-revision-uri = google/1b5e09c8-780f-484e-b8ed-c7178f4e4342 \ --space = SPACE \ --location = us-central1 \ --project = MANAGEMENT PROJECT ID Add a second Cloud Run component to use as the backend. gcloud design-center spaces application-templates components create cloud-run-2 \ --application-template = quickstart-three-tier-web-app \ --shared-template-revision-uri = google/1b5e09c8-780f-484e-b8ed-c7178f4e4342 \ --space = SPACE \ --location = us-central1 \ --project = MANAGEMENT PROJECT ID Add a Cloud SQL component. gcloud design-center spaces application-templates components create sql-postgresql-1 \ --application-template = quickstart-three-tier-web-app \ --shared-template-revision-uri = google/45be1bc2-89bc-477b-9b5d-64c41ff3b146 \ --space = SPACE \ --location = us-central1 \ --project = MANAGEMENT PROJECT ID Connect cloud-run-1 to cloud-run-2. gcloud design-center spaces application-templates components connections create frontend-to-backend \ --application-template = quickstart-three-tier-web-app \ --component = cloud-run-1 \ --destination-component-uri = cloud-run-2 \ --space = SPACE \ --location = us-central1 \ --project = MANAGEMENT PROJECT ID Connect cloud-run-2 to sql-postgresql-1. gcloud design-center spaces application-templates components connections create backend-to-database \ --application-template = quickstart-three-tier-web-app \ --component = cloud-run-2 \ --destination-component-uri = sql-postgresql-1 \ --space = SPACE \ --location = us-central1 \ --project = MANAGEMENT PROJECT ID Commit your changes to create an application template revision. gcloud design-center spaces application-templates commit quickstart-three-tier-web-app \ --space = SPACE \ --location = us-central1 \ --project = MANAGEMENT PROJECT ID Create an application draft Design canvas From the design canvas, click Configure an app .
- Create frontend-service.json . { "component" : "projects/ MANAGEMENT PROJECT ID /locations/us-central1/spaces/ SPACE /applicationTemplates/quickstart-three-tier-web-app/components/cloud-run-1" , "parameters" : [ { "key" : "service name" , "value" : "frontend-service" }, { "key" : "project id" , "value" : " DEPLOYMENT PROJECT ID " } ] } Create backend-service.json . { "component" : "projects/ MANAGEMENT PROJECT ID /locations/us-central1/spaces/ SPACE /applicationTemplates/quickstart-three-tier-web-app/components/cloud-run-2" , "parameters" : [ { "key" : "service name" , "value" : "backend-service" }, { "key" : "project id" , "value" : " DEPLOYMENT PROJECT ID " } ] } Create database-postgresql.json . { "component" : "projects/ MANAGEMENT PROJECT ID /locations/us-central1/spaces/ SPACE /applicationTemplates/quickstart-three-tier-web-app/components/sql-postgresql-1" , "parameters" : [ { "key" : "name" , "value" : "database-postgresql" }, { "key" : "project id" , "value" : " DEPLOYMENT PROJECT ID " }, { "key" : "database version" , "value" : "POSTGRES 15" }, { "key" : "region" , "value" : "us-central1" }, { "key" : "zone" , "value" : "us-central1-a" } ] } Update the application to configure the required parameters. gcloud design-center spaces applications update quickstart-three-tier-test \ --space = SPACE \ --location = us-central1 \ --project = MANAGEMENT PROJECT ID \ --component-parameters = ./frontend-service.json \ --component-parameters = ./backend-service.json \ --component-parameters = ./database-postgresql.json Deploy the application Design canvas Click Deploy .
- The system creates the application draft. gcloud CLI Identify your application template latest revision URI. gcloud design-center spaces application-templates describe quickstart-three-tier-web-app \ --space = SPACE \ --location = us-central1 \ --project = MANAGEMENT PROJECT ID \ --format = 'yaml(name,latestRevision)' Create an application draft based on your template. gcloud design-center spaces applications create quickstart-three-tier-test \ --space = SPACE \ --location = us-central1 \ --project = MANAGEMENT PROJECT ID \ --source-application-template-revision = projects/ MANAGEMENT PROJECT ID /locations/us-central1/spaces/ SPACE /applicationTemplates/quickstart-three-tier-web-app/revisions/ TEMPLATE REVISION \ --display-name = "Quickstart three-tier test" \ --environment-type = test \ --criticality-type = low \ --scope-type = regional \ --deployment-region = us-central1 Configure components Design canvas In the design canvas, click cloud-run-1 and do the following in the Configuration area: From the Project ID list, select the descendant project you created in Before you begin .

