---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:09:51.616Z"
product_name: "Application Design Center"
product_slug: "application-design-center"
feature_name: "AlloyDB component support"
feature_slug: "alloydb-component-support"
latest_feature_date: "2025-07-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-design-center/docs/design-application-templates"
  - "https://docs.cloud.google.com/application-design-center/docs/release-notes"
  - "https://docs.cloud.google.com/application-design-center/docs/import-components"
keywords:
  - "alloydb"
  - "option"
  - "application"
  - "component"
  - "supports"
  - "design"
  - "center"
  - "as"
---

# AlloyDB component support

Product: Application Design Center
Coverage: LOW

## Step 02 Summary

Application Design Center supports AlloyDB as a component option.

## Extended Definition

Application Design Center supports AlloyDB as a component option.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates)
- [https://docs.cloud.google.com/application-design-center/docs/release-notes](https://docs.cloud.google.com/application-design-center/docs/release-notes)
- [https://docs.cloud.google.com/application-design-center/docs/import-components](https://docs.cloud.google.com/application-design-center/docs/import-components)

## Supporting Pages

### "Design application templates \_|\_ Application Design Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- For example, you might create the following file for a Cloud Run component: [ { "key" : "service name" , "value" : "frontend-service" }, { "key" : "project id" , "value" : " DEPLOYMENT PROJECT " } ] Update each component in the application template to configure the required parameters. gcloud design-center spaces application-templates components update COMPONENT \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --parameters = PARAMETERS FILE PATH 1 \ --application-template = APPLICATION TEMPLATE Replace the following: COMPONENT : The component ID for the component that you want to update.
- Create a connection between the two components. gcloud design-center spaces application-templates components connections create CONNECTION \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --application-template = APPLICATION TEMPLATE \ --component = COMPONENT \ --destination-component-uri = COMPONENT 2 Replace the following: CONNECTION : The connection ID for the connection that you want to add to the template.
- Add a second component to your template. gcloud design-center spaces application-templates components create COMPONENT 2 \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --application-template = APPLICATION TEMPLATE \ --shared-template-revision-uri = SHARED TEMPLATE URI 2 Replace the following: COMPONENT 2 : The component ID for the second component that you want to add to the template.
- Edit component connection parameters. gcloud design-center spaces application-templates components connections update CONNECTION \ --component = COMPONENT \ --application-template = APPLICATION TEMPLATE \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --source-component-parameters = '[{"key": SOURCE KEY , "value": SOURCE VALUE }]' Replace the following: CONNECTION : The connection ID.

### Application Design Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-design-center/docs/release-notes](https://docs.cloud.google.com/application-design-center/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- July 29, 2025 Feature Application Design Center supports AlloyDB as a component.
- Feature Application Design Center supports the following components on the design canvas: Compute Engine instance template Compute Engine managed instance group Secret Manager Service account BigQuery Bigtable Cloud Run Cloud SQL (MySQL and PostgreSQL) Cloud Storage Cloud Load Balancing (global and regional) Memorystore for Redis Pub/Sub Spanner Vertex AI Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- September 22, 2025 Feature Application Design Center supports Cloud Run Jobs as a component.
- Feature Application Design Center supports the following components: Google Kubernetes Engine (GKE) Node Pool GKE Standard Cluster GKE Autopilot Cluster Firestore Feature You can set up Application Design Center using a single project boundary.

### Import components \_|\_ Application Design Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-design-center/docs/import-components](https://docs.cloud.google.com/application-design-center/docs/import-components)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Application Design Center supports several Google Cloud products that you can add as components to your application.
- For example, the following is a metadata.yaml file that you might create for a service account: spec : info : actuationTool : flavor : Terraform version : ">= 1.3" interfaces : # Optional variables : - name : service account connections : - source : source : github.com/terraform-google/terraform-google-service-accounts version : ">= 4.4" spec : outputExpr : email requirements : roles : # Optional after IAM integrations - level : Project roles : - roles/iam.serviceAccountUser - roles/iap.admin - roles/run.admin - roles/iam.serviceAccountAdmin providerVersions : - source : hashicorp/google version : ">= 6, < 7" - source : hashicorp/google-beta version : ">= 6, < 7" ui : # Optional input : variables : ca root module : name : ca root module title : Ca Root Module service account : name : service account title : Service Account Import from your repository You can create an App Design Center component by importing a Terraform module that is based on a single Google Cloud product.
- Home Documentation Application development Application Design Center Guides Send feedback Import components Stay organized with collections Save and categorize content based on your preferences.
- Create a catalog template revision based on the Terraform module in your repository. gcloud design-center spaces catalogs templates revisions create REVISION \ --project = PROJECT \ --catalog = CATALOG \ --location = LOCATION \ --space = SPACE \ --template = COMPONENT TEMPLATE \ --developer-connect-repo = DEVELOPER CONNECT REPO \ --developer-connect-repo-ref = DEVELOPER CONNECT REPO REF \ --developer-connect-repo-dir = DEVELOPER CONNECT REPO DIR \ --metadata = METADATA Replace the following: REVISION : The revision ID for the revision that you want to create.

