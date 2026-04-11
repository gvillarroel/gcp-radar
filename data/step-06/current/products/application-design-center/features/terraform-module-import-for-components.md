---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:09:51.615Z"
product_name: "Application Design Center"
product_slug: "application-design-center"
feature_name: "Terraform module import for components"
feature_slug: "terraform-module-import-for-components"
latest_feature_date: "2025-12-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-design-center/docs/import-components"
  - "https://docs.cloud.google.com/application-design-center/docs/design-application-templates"
  - "https://docs.cloud.google.com/application-design-center/docs/manage-applications"
keywords:
  - "components"
  - "module"
  - "import"
  - "terraform"
  - "for"
  - "application"
  - "design"
  - "center"
---

# Terraform module import for components

Product: Application Design Center
Coverage: LOW

## Step 02 Summary

Application Design Center supports importing Terraform modules to create components in preview.

## Extended Definition

Application Design Center supports importing Terraform modules to create components in preview.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-design-center/docs/import-components](https://docs.cloud.google.com/application-design-center/docs/import-components)
- [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates)
- [https://docs.cloud.google.com/application-design-center/docs/manage-applications](https://docs.cloud.google.com/application-design-center/docs/manage-applications)

## Supporting Pages

### Import components \_|\_ Application Design Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-design-center/docs/import-components](https://docs.cloud.google.com/application-design-center/docs/import-components)
- Source ID: `site-docs-root`
- Final score: 286
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To use your own version of these components, or add other components, import your Terraform modules to App Design Center.
- For example, the following is a metadata.yaml file that you might create for a service account: spec : info : actuationTool : flavor : Terraform version : ">= 1.3" interfaces : # Optional variables : - name : service account connections : - source : source : github.com/terraform-google/terraform-google-service-accounts version : ">= 4.4" spec : outputExpr : email requirements : roles : # Optional after IAM integrations - level : Project roles : - roles/iam.serviceAccountUser - roles/iap.admin - roles/run.admin - roles/iam.serviceAccountAdmin providerVersions : - source : hashicorp/google version : ">= 6, < 7" - source : hashicorp/google-beta version : ">= 6, < 7" ui : # Optional input : variables : ca root module : name : ca root module title : Ca Root Module service account : name : service account title : Service Account Import from your repository You can create an App Design Center component by importing a Terraform module that is based on a single Google Cloud product.
- To import your Terraform module, do the following: Identify the catalog where you want to create your component. gcloud design-center spaces catalogs list \ --project = PROJECT \ --location = LOCATION \ --space = SPACE Replace the following: PROJECT : Your management project ID.
- Optional: Prepare your Terraform module metadata When you import your Terraform module, you can supply your own metadata, or let App Design Center create a metadata file for you.

### "Design application templates \_|\_ Application Design Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates)
- Source ID: `site-docs-root`
- Final score: 270
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To use your own Terraform modules in your application template design, import components .
- For example, you might create the following file for a Cloud Run component: [ { "key" : "service name" , "value" : "frontend-service" }, { "key" : "project id" , "value" : " DEPLOYMENT PROJECT " } ] Update each component in the application template to configure the required parameters. gcloud design-center spaces application-templates components update COMPONENT \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --parameters = PARAMETERS FILE PATH 1 \ --application-template = APPLICATION TEMPLATE Replace the following: COMPONENT : The component ID for the component that you want to update.
- Create a connection between the two components. gcloud design-center spaces application-templates components connections create CONNECTION \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --application-template = APPLICATION TEMPLATE \ --component = COMPONENT \ --destination-component-uri = COMPONENT 2 Replace the following: CONNECTION : The connection ID for the connection that you want to add to the template.
- Add a second component to your template. gcloud design-center spaces application-templates components create COMPONENT 2 \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --application-template = APPLICATION TEMPLATE \ --shared-template-revision-uri = SHARED TEMPLATE URI 2 Replace the following: COMPONENT 2 : The component ID for the second component that you want to add to the template.

### Manage applications \_|\_ Application Design Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-design-center/docs/manage-applications](https://docs.cloud.google.com/application-design-center/docs/manage-applications)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, you might create the following file for a Cloud Run component: { "component" : "projects/ PROJECT /locations/us-central1/spaces/ SPACE /applicationTemplates/ APPLICATION TEMPLATE /components/ COMPONENT " , "parameters" : [ { "key" : "service name" , "value" : "frontend-service" }, { "key" : "project id" , "value" : " DEPLOYMENT PROJECT " } ] } Update the application to configure the required parameters. gcloud design-center spaces applications update APPLICATION \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --component-parameters = COMPONENT FILE PATH 1 Replace the following: APPLICATION : The application ID.
- The application details are displayed. gcloud CLI Identify the application template revision URI for the template that you want to use to create the application. gcloud design-center spaces application-templates describe APPLICATION TEMPLATE \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --format = 'yaml(name,latestRevision)' Replace the following: APPLICATION TEMPLATE : The template ID for the application template that you want to use as the basis for your application.
- The system generates the following Terraform files: main.tf : Infrastructure code that includes a module for each component in the template. outputs.tf : Exposes information about infrastructure components that are deployed. variables.tf : Declares name, type, and description for variables used in the main.tf file. input.tfvars : Defines values for variables used in the main.tf file. providers.tf : Defines labels that help Terraform interact with Google Cloud APIs and resources.
- Create an application draft based on your template. gcloud design-center spaces applications create APPLICATION \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --source-application-template-revision = SOURCE APPLICATION TEMPLATE REVISION \ --scope-type = SCOPE TYPE Replace the following: APPLICATION : The application ID for the application draft that you want to create.

