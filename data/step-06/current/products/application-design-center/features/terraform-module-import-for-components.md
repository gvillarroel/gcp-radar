---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:28:23.682Z"
product_name: "Application Design Center"
product_slug: "application-design-center"
feature_name: "Terraform module import for components"
feature_slug: "terraform-module-import-for-components"
latest_feature_date: "2025-12-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-design-center/docs/import-components"
  - "https://docs.cloud.google.com/application-design-center/docs/overview"
  - "https://docs.cloud.google.com/application-design-center/docs/design-application-templates"
keywords:
  - "components"
  - "module"
  - "import"
  - "terraform"
  - "supports"
---

# Terraform module import for components

Product: Application Design Center
Coverage: LOW

## Step 02 Summary

Application Design Center supports importing Terraform modules to create components in preview.

## Extended Definition

Application Design Center supports importing Terraform modules to create components in preview.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-design-center/docs/import-components](https://docs.cloud.google.com/application-design-center/docs/import-components)
- [https://docs.cloud.google.com/application-design-center/docs/overview](https://docs.cloud.google.com/application-design-center/docs/overview)
- [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates)

## Supporting Pages

### Import components \_|\_ Application Design Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-design-center/docs/import-components](https://docs.cloud.google.com/application-design-center/docs/import-components)
- Source ID: `site-docs-root`
- Final score: 35
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To use your own version of these components, or add other components, import your Terraform modules to App Design Center.
- For example, the following is a metadata.yaml file that you might create for a service account: spec : info : actuationTool : flavor : Terraform version : ">= 1.3" interfaces : # Optional variables : - name : service account connections : - source : source : github.com/terraform-google/terraform-google-service-accounts version : ">= 4.4" spec : outputExpr : email requirements : roles : # Optional after IAM integrations - level : Project roles : - roles/iam.serviceAccountUser - roles/iap.admin - roles/run.admin - roles/iam.serviceAccountAdmin providerVersions : - source : hashicorp/google version : ">= 6, < 7" - source : hashicorp/google-beta version : ">= 6, < 7" ui : # Optional input : variables : ca root module : name : ca root module title : Ca Root Module service account : name : service account title : Service Account Import from your repository You can create an App Design Center component by importing a Terraform module that is based on a single Google Cloud product.
- To import your Terraform module, do the following: Identify the catalog where you want to create your component. gcloud design-center spaces catalogs list \ --project = PROJECT \ --location = LOCATION \ --space = SPACE Replace the following: PROJECT : Your management project ID.
- Optional: Prepare your Terraform module metadata When you import your Terraform module, you can supply your own metadata, or let App Design Center create a metadata file for you.

### Application Design Center overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-design-center/docs/overview](https://docs.cloud.google.com/application-design-center/docs/overview)
- Source ID: `site-api-reference`
- Final score: 33
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Imported components : your own components that you import to App Design Center, based on your own Terraform modules.
- You can select from the following types of components: Google components : components designed by Google that incorporate Google Cloud best practices and default security configurations.
- Components can include: Assets : supporting resources that help you control other resources, such as service accounts or secrets.
- By using these components, you ensure that every part of your application follows security and performance standards.

### "Design application templates \_|\_ Application Design Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates)
- Source ID: `site-docs-root`
- Final score: 31
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To use your own Terraform modules in your application template design, import components .
- Your own components that you import , based on your own Terraform modules.
- The system generates the following Terraform files: main.tf : Infrastructure code that includes a module for each component in the template. outputs.tf : Exposes information about infrastructure components that are deployed. variables.tf : Declares name, type, and description for variables used in the main.tf file. input.tfvars : Defines values for variables used in the main.tf file. providers.tf : Defines labels that help Terraform interact with Google Cloud APIs and resources.
- The system displays the Terraform module for each component.

