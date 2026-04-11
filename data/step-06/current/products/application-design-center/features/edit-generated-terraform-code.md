---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:09:51.615Z"
product_name: "Application Design Center"
product_slug: "application-design-center"
feature_name: "Edit generated Terraform code"
feature_slug: "edit-generated-terraform-code"
latest_feature_date: "2025-10-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-design-center/docs/design-application-templates"
  - "https://docs.cloud.google.com/application-design-center/docs/manage-applications"
  - "https://docs.cloud.google.com/application-design-center/docs/deploy-applications"
keywords:
  - "edit"
  - "generated"
  - "allows"
  - "code"
  - "terraform"
  - "application"
  - "design"
  - "center"
---

# Edit generated Terraform code

Product: Application Design Center
Coverage: LOW

## Step 02 Summary

Application Design Center allows editing of Terraform code generated from templates and applications.

## Extended Definition

Application Design Center allows editing of Terraform code generated from templates and applications.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates)
- [https://docs.cloud.google.com/application-design-center/docs/manage-applications](https://docs.cloud.google.com/application-design-center/docs/manage-applications)
- [https://docs.cloud.google.com/application-design-center/docs/deploy-applications](https://docs.cloud.google.com/application-design-center/docs/deploy-applications)

## Supporting Pages

### "Design application templates \_|\_ Application Design Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates)
- Source ID: `site-docs-root`
- Final score: 254
- Re-rank relevance: N/A

Evidence snippets:
- Edit Terraform code As you design your application template, Application Design Center generates Terraform code to reflect the design and configuration details.
- Edit component connection parameters. gcloud design-center spaces application-templates components connections update CONNECTION \ --component = COMPONENT \ --application-template = APPLICATION TEMPLATE \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --source-component-parameters = '[{"key": SOURCE KEY , "value": SOURCE VALUE }]' Replace the following: CONNECTION : The connection ID.
- As you design your template, App Design Center generates Terraform code to reflect the design and configuration details.
- The template generates Terraform code, which developers can download or deploy from App Design Center.

### Manage applications \_|\_ Application Design Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-design-center/docs/manage-applications](https://docs.cloud.google.com/application-design-center/docs/manage-applications)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Edit Terraform code Your application generates Terraform code to reflect design and configuration details.
- You'll learn how to create an application draft from a template, configure its components, edit its underlying Terraform code, create a new revision, and finally, delete the application when it's no longer needed.
- To edit the Terraform code, do the following: From the design canvas, click Code .
- Application Editor ( roles/designcenter.applicationEditor ).

### Deploy applications \_|\_ Application Design Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-design-center/docs/deploy-applications](https://docs.cloud.google.com/application-design-center/docs/deploy-applications)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Do one of the following: To automatically create a service account, use the following command: gcloud design-center spaces applications preview APPLICATION \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --create-sa \ --service-account = SERVICE ACCOUNT To use your own service account, use the following command: gcloud design-center spaces applications preview APPLICATION \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --service-account = SERVICE ACCOUNT Replace the following: APPLICATION : The application ID.
- To automatically create a service account, use the following command: gcloud design-center spaces applications deploy APPLICATION \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --create-sa \ --service-account = SERVICE ACCOUNT \ --async To use your own service account, use the following command: gcloud design-center spaces applications deploy APPLICATION \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --service-account = SERVICE ACCOUNT \ --async Replace the following: APPLICATION : The application ID.
- Modify deployed applications If you want to modify a deployed application, do one of the following to make sure that your changes are retained when you redeploy the application: Revise the template and then Apply the template revision Revise the application Apply template revisions If your application was previously deployed using App Design Center, and an administrator has shared a template revision with you, you can apply the template changes to your application.
- For deployment steps, see Deploy your application . gcloud CLI Identify the application template revision URI for the latest revision. gcloud design-center spaces application-templates describe APPLICATION TEMPLATE \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --format = 'yaml(name,latestRevision)' Replace the following: APPLICATION TEMPLATE : The application template ID that is the basis of your application.

