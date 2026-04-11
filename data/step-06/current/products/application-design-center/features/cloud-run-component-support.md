---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:09:51.617Z"
product_name: "Application Design Center"
product_slug: "application-design-center"
feature_name: "Cloud Run component support"
feature_slug: "cloud-run-component-support"
latest_feature_date: "2025-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-design-center/docs/design-application-templates"
  - "https://docs.cloud.google.com/application-design-center/docs/import-components"
  - "https://docs.cloud.google.com/application-design-center/docs/manage-applications"
keywords:
  - "run"
  - "application"
  - "component"
  - "supports"
  - "design"
  - "center"
  - "on"
  - "as"
---

# Cloud Run component support

Product: Application Design Center
Coverage: LOW

## Step 02 Summary

Application Design Center supports Cloud Run as a component on the design canvas.

## Extended Definition

Application Design Center supports Cloud Run as a component on the design canvas.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates)
- [https://docs.cloud.google.com/application-design-center/docs/import-components](https://docs.cloud.google.com/application-design-center/docs/import-components)
- [https://docs.cloud.google.com/application-design-center/docs/manage-applications](https://docs.cloud.google.com/application-design-center/docs/manage-applications)

## Supporting Pages

### "Design application templates \_|\_ Application Design Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates)
- Source ID: `site-docs-root`
- Final score: 302
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, you might create the following file for a Cloud Run component: [ { "key" : "service name" , "value" : "frontend-service" }, { "key" : "project id" , "value" : " DEPLOYMENT PROJECT " } ] Update each component in the application template to configure the required parameters. gcloud design-center spaces application-templates components update COMPONENT \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --parameters = PARAMETERS FILE PATH 1 \ --application-template = APPLICATION TEMPLATE Replace the following: COMPONENT : The component ID for the component that you want to update.
- Create a connection between the two components. gcloud design-center spaces application-templates components connections create CONNECTION \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --application-template = APPLICATION TEMPLATE \ --component = COMPONENT \ --destination-component-uri = COMPONENT 2 Replace the following: CONNECTION : The connection ID for the connection that you want to add to the template.
- Add a second component to your template. gcloud design-center spaces application-templates components create COMPONENT 2 \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --application-template = APPLICATION TEMPLATE \ --shared-template-revision-uri = SHARED TEMPLATE URI 2 Replace the following: COMPONENT 2 : The component ID for the second component that you want to add to the template.
- Edit component connection parameters. gcloud design-center spaces application-templates components connections update CONNECTION \ --component = COMPONENT \ --application-template = APPLICATION TEMPLATE \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --source-component-parameters = '[{"key": SOURCE KEY , "value": SOURCE VALUE }]' Replace the following: CONNECTION : The connection ID.

### Import components \_|\_ Application Design Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-design-center/docs/import-components](https://docs.cloud.google.com/application-design-center/docs/import-components)
- Source ID: `site-docs-root`
- Final score: 292
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Application Design Center supports several Google Cloud products that you can add as components to your application.
- For example, the following is a metadata.yaml file that you might create for a service account: spec : info : actuationTool : flavor : Terraform version : ">= 1.3" interfaces : # Optional variables : - name : service account connections : - source : source : github.com/terraform-google/terraform-google-service-accounts version : ">= 4.4" spec : outputExpr : email requirements : roles : # Optional after IAM integrations - level : Project roles : - roles/iam.serviceAccountUser - roles/iap.admin - roles/run.admin - roles/iam.serviceAccountAdmin providerVersions : - source : hashicorp/google version : ">= 6, < 7" - source : hashicorp/google-beta version : ">= 6, < 7" ui : # Optional input : variables : ca root module : name : ca root module title : Ca Root Module service account : name : service account title : Service Account Import from your repository You can create an App Design Center component by importing a Terraform module that is based on a single Google Cloud product.
- Home Documentation Application development Application Design Center Guides Send feedback Import components Stay organized with collections Save and categorize content based on your preferences.
- Create a catalog template revision based on the Terraform module in your repository. gcloud design-center spaces catalogs templates revisions create REVISION \ --project = PROJECT \ --catalog = CATALOG \ --location = LOCATION \ --space = SPACE \ --template = COMPONENT TEMPLATE \ --developer-connect-repo = DEVELOPER CONNECT REPO \ --developer-connect-repo-ref = DEVELOPER CONNECT REPO REF \ --developer-connect-repo-dir = DEVELOPER CONNECT REPO DIR \ --metadata = METADATA Replace the following: REVISION : The revision ID for the revision that you want to create.

### Manage applications \_|\_ Application Design Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-design-center/docs/manage-applications](https://docs.cloud.google.com/application-design-center/docs/manage-applications)
- Source ID: `site-docs-root`
- Final score: 288
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, you might create the following file for a Cloud Run component: { "component" : "projects/ PROJECT /locations/us-central1/spaces/ SPACE /applicationTemplates/ APPLICATION TEMPLATE /components/ COMPONENT " , "parameters" : [ { "key" : "service name" , "value" : "frontend-service" }, { "key" : "project id" , "value" : " DEPLOYMENT PROJECT " } ] } Update the application to configure the required parameters. gcloud design-center spaces applications update APPLICATION \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --component-parameters = COMPONENT FILE PATH 1 Replace the following: APPLICATION : The application ID.
- The application details are displayed. gcloud CLI Identify the application template revision URI for the template that you want to use to create the application. gcloud design-center spaces application-templates describe APPLICATION TEMPLATE \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --format = 'yaml(name,latestRevision)' Replace the following: APPLICATION TEMPLATE : The template ID for the application template that you want to use as the basis for your application.
- Create an application draft based on your template. gcloud design-center spaces applications create APPLICATION \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --source-application-template-revision = SOURCE APPLICATION TEMPLATE REVISION \ --scope-type = SCOPE TYPE Replace the following: APPLICATION : The application ID for the application draft that you want to create.
- Click Save . gcloud CLI Describe the application to view component parameters, and identify required parameters for your application. gcloud design-center spaces applications describe APPLICATION \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --format = 'yaml(name,componentParameters)' Replace the following: APPLICATION : The application ID.

