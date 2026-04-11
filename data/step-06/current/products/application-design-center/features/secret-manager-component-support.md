---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:09:51.619Z"
product_name: "Application Design Center"
product_slug: "application-design-center"
feature_name: "Secret Manager component support"
feature_slug: "secret-manager-component-support"
latest_feature_date: "2025-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-design-center/docs/design-application-templates"
  - "https://docs.cloud.google.com/application-design-center/docs/release-notes"
  - "https://docs.cloud.google.com/application-design-center/docs/deploy-applications"
keywords:
  - "manager"
  - "secret"
  - "application"
  - "component"
  - "supports"
  - "design"
  - "center"
  - "as"
---

# Secret Manager component support

Product: Application Design Center
Coverage: LOW

## Step 02 Summary

Application Design Center supports Secret Manager as a component on the design canvas.

## Extended Definition

Application Design Center supports Secret Manager as a component on the design canvas.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates)
- [https://docs.cloud.google.com/application-design-center/docs/release-notes](https://docs.cloud.google.com/application-design-center/docs/release-notes)
- [https://docs.cloud.google.com/application-design-center/docs/deploy-applications](https://docs.cloud.google.com/application-design-center/docs/deploy-applications)

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
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- Feature Application Design Center supports the following components on the design canvas: Compute Engine instance template Compute Engine managed instance group Secret Manager Service account BigQuery Bigtable Cloud Run Cloud SQL (MySQL and PostgreSQL) Cloud Storage Cloud Load Balancing (global and regional) Memorystore for Redis Pub/Sub Spanner Vertex AI Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- September 22, 2025 Feature Application Design Center supports Cloud Run Jobs as a component.
- July 29, 2025 Feature Application Design Center supports AlloyDB as a component.
- Feature Application Design Center supports the following components: Google Kubernetes Engine (GKE) Node Pool GKE Standard Cluster GKE Autopilot Cluster Firestore Feature You can set up Application Design Center using a single project boundary.

### Deploy applications \_|\_ Application Design Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-design-center/docs/deploy-applications](https://docs.cloud.google.com/application-design-center/docs/deploy-applications)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To automatically create a service account, use the following command: gcloud design-center spaces applications deploy APPLICATION \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --create-sa \ --service-account = SERVICE ACCOUNT \ --async To use your own service account, use the following command: gcloud design-center spaces applications deploy APPLICATION \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --service-account = SERVICE ACCOUNT \ --async Replace the following: APPLICATION : The application ID.
- Modify deployed applications If you want to modify a deployed application, do one of the following to make sure that your changes are retained when you redeploy the application: Revise the template and then Apply the template revision Revise the application Apply template revisions If your application was previously deployed using App Design Center, and an administrator has shared a template revision with you, you can apply the template changes to your application.
- For deployment steps, see Deploy your application . gcloud CLI Identify the application template revision URI for the latest revision. gcloud design-center spaces application-templates describe APPLICATION TEMPLATE \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --format = 'yaml(name,latestRevision)' Replace the following: APPLICATION TEMPLATE : The application template ID that is the basis of your application.
- To apply template revisions to your application, do the following: Caution: If you modified an application's components outside of App Design Center, those changes are not retained when you redeploy.

