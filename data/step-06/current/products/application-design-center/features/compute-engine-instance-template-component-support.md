---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:28:23.686Z"
product_name: "Application Design Center"
product_slug: "application-design-center"
feature_name: "Compute Engine instance template component support"
feature_slug: "compute-engine-instance-template-component-support"
latest_feature_date: "2025-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-design-center/docs"
  - "https://docs.cloud.google.com/application-design-center/docs/quickstart-create-template"
  - "https://docs.cloud.google.com/application-design-center/docs/design-application-templates"
keywords:
  - "template"
  - "instance"
  - "compute"
  - "engine"
  - "component"
---

# Compute Engine instance template component support

Product: Application Design Center
Coverage: LOW

## Step 02 Summary

Application Design Center supports the Compute Engine instance template component on the design canvas.

## Extended Definition

Application Design Center supports the Compute Engine instance template component on the design canvas.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-design-center/docs](https://docs.cloud.google.com/application-design-center/docs)
- [https://docs.cloud.google.com/application-design-center/docs/quickstart-create-template](https://docs.cloud.google.com/application-design-center/docs/quickstart-create-template)
- [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates)

## Supporting Pages

### Application Design Center documentation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-design-center/docs](https://docs.cloud.google.com/application-design-center/docs)
- Source ID: `site-api-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Documentation resources Find quickstarts and guides, review key references, and get help with common issues. format list numbered Guides Overview Set up App Design Center Quickstart: Create and verify a template Quickstart: Update a template and redeploy Import components Design application templates Manage applications Deploy applications find in page Reference gcloud commands REST API RPC API info Resources Pricing Release notes Get support Quotas and limits Locations Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Get free usage of 20+ popular products, including Compute Engine and AI APIs.

### "Design application templates \_|\_ Application Design Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, you might create the following file for a Cloud Run component: [ { "key" : "service name" , "value" : "frontend-service" }, { "key" : "project id" , "value" : " DEPLOYMENT PROJECT " } ] Update each component in the application template to configure the required parameters. gcloud design-center spaces application-templates components update COMPONENT \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --parameters = PARAMETERS FILE PATH 1 \ --application-template = APPLICATION TEMPLATE Replace the following: COMPONENT : The component ID for the component that you want to update.
- The system generates the following Terraform files: main.tf : Infrastructure code that includes a module for each component in the template. outputs.tf : Exposes information about infrastructure components that are deployed. variables.tf : Declares name, type, and description for variables used in the main.tf file. input.tfvars : Defines values for variables used in the main.tf file. providers.tf : Defines labels that help Terraform interact with Google Cloud APIs and resources.
- Create a connection between the two components. gcloud design-center spaces application-templates components connections create CONNECTION \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --application-template = APPLICATION TEMPLATE \ --component = COMPONENT \ --destination-component-uri = COMPONENT 2 Replace the following: CONNECTION : The connection ID for the connection that you want to add to the template.
- Add a second component to your template. gcloud design-center spaces application-templates components create COMPONENT 2 \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --application-template = APPLICATION TEMPLATE \ --shared-template-revision-uri = SHARED TEMPLATE URI 2 Replace the following: COMPONENT 2 : The component ID for the second component that you want to add to the template.

### "Create and verify a template \_|\_ Application Design Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/application-design-center/docs/quickstart-create-template](https://docs.cloud.google.com/application-design-center/docs/quickstart-create-template)
- Source ID: `site-docs-root`
- Final score: 27
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To build on this quickstart, see Update an application template and redeploy . gcloud CLI Describe the application to identify required IAM roles for your deployment service account. gcloud design-center spaces applications describe quickstart-three-tier-test \ --space = SPACE \ --location = us-central1 \ --project = MANAGEMENT PROJECT ID \ --format = 'yaml(name,projectParameters)' Create a new service account to deploy the application. gcloud iam service-accounts create quickstart-service-account \ --project = MANAGEMENT PROJECT ID \ --display-name = "Quickstart service account" \ --description = "A service account to deploy the ADC quickstart" Add the required deployment project roles to the service account. #!/bin/bash PROJECT ID = " DEPLOYMENT PROJECT ID " SERVICE ACCOUNT = "quickstart-service-account@ MANAGEMENT PROJECT ID .iam.gserviceaccount.com" ROLES =( "roles/iap.admin" "roles/compute.networkAdmin" "roles/compute.viewer" "roles/run.admin" "roles/iam.serviceAccountAdmin" "roles/serviceusage.serviceUsageAdmin" "roles/cloudkms.admin" "roles/logging.logWriter" "roles/iam.serviceAccountUser" "roles/cloudsql.admin" "roles/cloudkms.autokeyAdmin" "roles/storage.admin" "roles/serviceusage.serviceUsageViewer" "roles/resourcemanager.projectIamAdmin" "roles/cloudkms.cryptoKeyEncrypterDecrypter" ) for role in " ${ ROLES [@] } " ; do echo "Adding role: ${ role } " gcloud projects add-iam-policy-binding " ${ PROJECT ID } " \ --member = "serviceAccount: ${ SERVICE ACCOUNT } " \ --role = " ${ role } " echo "---" done echo "Finished adding roles." Add the required management project roles to the service account. #!/bin/bash PROJECT ID = " MANAGEMENT PROJECT ID " SERVICE ACCOUNT = "quickstart-service-account@ MANAGEMENT PROJECT ID .iam.gserviceaccount.com" ROLES =( "roles/config.agent" "roles/apphub.editor" ) for role in " ${ ROLES [@] } " ; do echo "Adding role: ${ role } " gcloud projects add-iam-policy-binding " ${ PROJECT ID } " \ --member = "serviceAccount: ${ SERVICE ACCOUNT } " \ --role = " ${ role } " echo "---" done echo "Finished adding roles." Identify your management project number. gcloud projects describe MANAGEMENT PROJECT ID \ --format = "value(projectNumber)" Add an IAM policy binding for the roles/iam.serviceAccountUser role on your management project. gcloud iam service-accounts add-iam-policy-binding projects/ MANAGEMENT PROJECT ID /serviceAccounts/quickstart-service-account@ MANAGEMENT PROJECT ID .iam.gserviceaccount.com \ --project = MANAGEMENT PROJECT ID \ --member = "serviceAccount:service- MANAGEMENT PROJECT NUMBER @gcp-sa-designcenter.iam.gserviceaccount.com" \ --role = "roles/iam.serviceAccountUser" Update the application to use your service account. gcloud design-center spaces applications update quickstart-three-tier-test \ --space = SPACE \ --location = us-central1 \ --project = MANAGEMENT PROJECT ID \ --service-account = projects/ MANAGEMENT PROJECT ID /serviceAccounts/quickstart-service-account@ MANAGEMENT PROJECT ID .iam.gserviceaccount.com Give your user actAs permission on your service account. gcloud iam service-accounts add-iam-policy-binding quickstart-service-account@ MANAGEMENT PROJECT ID .iam.gserviceaccount.com \ --project = MANAGEMENT PROJECT ID \ --member = "user: USER " \ --role = "roles/iam.serviceAccountUser" USER is your Google Cloud user.
- Add a Cloud Run component to use as the frontend. gcloud design-center spaces application-templates components create cloud-run-1 \ --application-template = quickstart-three-tier-web-app \ --shared-template-revision-uri = google/1b5e09c8-780f-484e-b8ed-c7178f4e4342 \ --space = SPACE \ --location = us-central1 \ --project = MANAGEMENT PROJECT ID Add a second Cloud Run component to use as the backend. gcloud design-center spaces application-templates components create cloud-run-2 \ --application-template = quickstart-three-tier-web-app \ --shared-template-revision-uri = google/1b5e09c8-780f-484e-b8ed-c7178f4e4342 \ --space = SPACE \ --location = us-central1 \ --project = MANAGEMENT PROJECT ID Add a Cloud SQL component. gcloud design-center spaces application-templates components create sql-postgresql-1 \ --application-template = quickstart-three-tier-web-app \ --shared-template-revision-uri = google/45be1bc2-89bc-477b-9b5d-64c41ff3b146 \ --space = SPACE \ --location = us-central1 \ --project = MANAGEMENT PROJECT ID Connect cloud-run-1 to cloud-run-2. gcloud design-center spaces application-templates components connections create frontend-to-backend \ --application-template = quickstart-three-tier-web-app \ --component = cloud-run-1 \ --destination-component-uri = cloud-run-2 \ --space = SPACE \ --location = us-central1 \ --project = MANAGEMENT PROJECT ID Connect cloud-run-2 to sql-postgresql-1. gcloud design-center spaces application-templates components connections create backend-to-database \ --application-template = quickstart-three-tier-web-app \ --component = cloud-run-2 \ --destination-component-uri = sql-postgresql-1 \ --space = SPACE \ --location = us-central1 \ --project = MANAGEMENT PROJECT ID Commit your changes to create an application template revision. gcloud design-center spaces application-templates commit quickstart-three-tier-web-app \ --space = SPACE \ --location = us-central1 \ --project = MANAGEMENT PROJECT ID Create an application draft Design canvas From the design canvas, click Configure an app .
- Create frontend-service.json . { "component" : "projects/ MANAGEMENT PROJECT ID /locations/us-central1/spaces/ SPACE /applicationTemplates/quickstart-three-tier-web-app/components/cloud-run-1" , "parameters" : [ { "key" : "service name" , "value" : "frontend-service" }, { "key" : "project id" , "value" : " DEPLOYMENT PROJECT ID " } ] } Create backend-service.json . { "component" : "projects/ MANAGEMENT PROJECT ID /locations/us-central1/spaces/ SPACE /applicationTemplates/quickstart-three-tier-web-app/components/cloud-run-2" , "parameters" : [ { "key" : "service name" , "value" : "backend-service" }, { "key" : "project id" , "value" : " DEPLOYMENT PROJECT ID " } ] } Create database-postgresql.json . { "component" : "projects/ MANAGEMENT PROJECT ID /locations/us-central1/spaces/ SPACE /applicationTemplates/quickstart-three-tier-web-app/components/sql-postgresql-1" , "parameters" : [ { "key" : "name" , "value" : "database-postgresql" }, { "key" : "project id" , "value" : " DEPLOYMENT PROJECT ID " }, { "key" : "database version" , "value" : "POSTGRES 15" }, { "key" : "region" , "value" : "us-central1" }, { "key" : "zone" , "value" : "us-central1-a" } ] } Update the application to configure the required parameters. gcloud design-center spaces applications update quickstart-three-tier-test \ --space = SPACE \ --location = us-central1 \ --project = MANAGEMENT PROJECT ID \ --component-parameters = ./frontend-service.json \ --component-parameters = ./backend-service.json \ --component-parameters = ./database-postgresql.json Deploy the application Design canvas Click Deploy .
- The system creates the application draft. gcloud CLI Identify your application template latest revision URI. gcloud design-center spaces application-templates describe quickstart-three-tier-web-app \ --space = SPACE \ --location = us-central1 \ --project = MANAGEMENT PROJECT ID \ --format = 'yaml(name,latestRevision)' Create an application draft based on your template. gcloud design-center spaces applications create quickstart-three-tier-test \ --space = SPACE \ --location = us-central1 \ --project = MANAGEMENT PROJECT ID \ --source-application-template-revision = projects/ MANAGEMENT PROJECT ID /locations/us-central1/spaces/ SPACE /applicationTemplates/quickstart-three-tier-web-app/revisions/ TEMPLATE REVISION \ --display-name = "Quickstart three-tier test" \ --environment-type = test \ --criticality-type = low \ --scope-type = regional \ --deployment-region = us-central1 Configure components Design canvas In the design canvas, click cloud-run-1 and do the following in the Configuration area: From the Project ID list, select the descendant project you created in Before you begin .

