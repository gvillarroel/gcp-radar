---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:28:23.689Z"
product_name: "Application Design Center"
product_slug: "application-design-center"
feature_name: "Service account component support"
feature_slug: "service-account-component-support"
latest_feature_date: "2025-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-design-center/docs/deploy-applications"
  - "https://docs.cloud.google.com/application-design-center/docs/overview"
  - "https://docs.cloud.google.com/application-design-center/docs/import-components"
keywords:
  - "account"
  - "component"
  - "supports"
  - "canvas"
---

# Service account component support

Product: Application Design Center
Coverage: LOW

## Step 02 Summary

Application Design Center supports Service Account as a component on the design canvas.

## Extended Definition

Application Design Center supports Service Account as a component on the design canvas.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-design-center/docs/deploy-applications](https://docs.cloud.google.com/application-design-center/docs/deploy-applications)
- [https://docs.cloud.google.com/application-design-center/docs/overview](https://docs.cloud.google.com/application-design-center/docs/overview)
- [https://docs.cloud.google.com/application-design-center/docs/import-components](https://docs.cloud.google.com/application-design-center/docs/import-components)

## Supporting Pages

### Deploy applications \_|\_ Application Design Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-design-center/docs/deploy-applications](https://docs.cloud.google.com/application-design-center/docs/deploy-applications)
- Source ID: `site-docs-root`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- Click each component in the design canvas, and modify component configurations.
- Do one of the following: To automatically create a service account, use the following command: gcloud design-center spaces applications preview APPLICATION \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --create-sa \ --service-account = SERVICE ACCOUNT To use your own service account, use the following command: gcloud design-center spaces applications preview APPLICATION \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --service-account = SERVICE ACCOUNT Replace the following: APPLICATION : The application ID.
- To automatically create a service account, use the following command: gcloud design-center spaces applications deploy APPLICATION \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --create-sa \ --service-account = SERVICE ACCOUNT \ --async To use your own service account, use the following command: gcloud design-center spaces applications deploy APPLICATION \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --service-account = SERVICE ACCOUNT \ --async Replace the following: APPLICATION : The application ID.
- Before you begin You must have one of the following roles on the app-enabled folder or management project: Application Admin ( roles/designcenter.applicationAdmin ) Application Operator ( roles/designcenter.applicationOperator ) To deploy the application with a service account , you must have one of the following: Your own service account that you configured to deploy applications and underlying resources.

### Application Design Center overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-design-center/docs/overview](https://docs.cloud.google.com/application-design-center/docs/overview)
- Source ID: `site-api-reference`
- Final score: 31
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Components can include: Assets : supporting resources that help you control other resources, such as service accounts or secrets.
- Design and deployment approaches To determine the best design and deployment approach for your purpose, use the following table: Your goal Primary benefit Approach Visualize your architecture Real-time suggestions and visual layout Design canvas Rapid prototyping AI-driven starting points from requirements Natural language chat Automation and integration Repeatable, programmable workflows REST API Command-line management Efficient terminal-based operations Google Cloud CLI Team collaboration workflow Platform teams and developers work together to move from business requirements to a working application using the following example workflow: Set up collaboration : platform administrators create spaces and assign team access.
- You can select from the following types of components: Google components : components designed by Google that incorporate Google Cloud best practices and default security configurations.
- By using these components, you ensure that every part of your application follows security and performance standards.

### Import components \_|\_ Application Design Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-design-center/docs/import-components](https://docs.cloud.google.com/application-design-center/docs/import-components)
- Source ID: `site-docs-root`
- Final score: 31
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, the following is a metadata.yaml file that you might create for a service account: spec : info : actuationTool : flavor : Terraform version : ">= 1.3" interfaces : # Optional variables : - name : service account connections : - source : source : github.com/terraform-google/terraform-google-service-accounts version : ">= 4.4" spec : outputExpr : email requirements : roles : # Optional after IAM integrations - level : Project roles : - roles/iam.serviceAccountUser - roles/iap.admin - roles/run.admin - roles/iam.serviceAccountAdmin providerVersions : - source : hashicorp/google version : ">= 6, < 7" - source : hashicorp/google-beta version : ">= 6, < 7" ui : # Optional input : variables : ca root module : name : ca root module title : Ca Root Module service account : name : service account title : Service Account Import from your repository You can create an App Design Center component by importing a Terraform module that is based on a single Google Cloud product.
- Application Design Center supports several Google Cloud products that you can add as components to your application.
- Create a catalog template revision based on the Terraform module in your repository. gcloud design-center spaces catalogs templates revisions create REVISION \ --project = PROJECT \ --catalog = CATALOG \ --location = LOCATION \ --space = SPACE \ --template = COMPONENT TEMPLATE \ --developer-connect-repo = DEVELOPER CONNECT REPO \ --developer-connect-repo-ref = DEVELOPER CONNECT REPO REF \ --developer-connect-repo-dir = DEVELOPER CONNECT REPO DIR \ --metadata = METADATA Replace the following: REVISION : The revision ID for the revision that you want to create.
- Create a connection between the two components. gcloud design-center spaces application-templates components connections create CONNECTION \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --application-template = APPLICATION TEMPLATE \ --component = COMPONENT \ --destination-component-uri = SHARED TEMPLATE URI 2 Replace the following: CONNECTION : The connection ID for the connection that you want to add to the template.

