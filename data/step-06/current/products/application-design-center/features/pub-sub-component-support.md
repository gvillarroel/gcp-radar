---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:09:51.619Z"
product_name: "Application Design Center"
product_slug: "application-design-center"
feature_name: "Pub/Sub component support"
feature_slug: "pub-sub-component-support"
latest_feature_date: "2025-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-design-center/docs/design-application-templates"
  - "https://docs.cloud.google.com/application-design-center/docs/release-notes"
  - "https://docs.cloud.google.com/application-design-center/docs/application-centric-google-cloud"
keywords:
  - "pub"
  - "sub"
  - "application"
  - "component"
  - "supports"
  - "design"
  - "center"
  - "as"
---

# Pub/Sub component support

Product: Application Design Center
Coverage: LOW

## Step 02 Summary

Application Design Center supports Pub/Sub as a design-canvas component.

## Extended Definition

Application Design Center supports Pub/Sub as a design-canvas component.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates)
- [https://docs.cloud.google.com/application-design-center/docs/release-notes](https://docs.cloud.google.com/application-design-center/docs/release-notes)
- [https://docs.cloud.google.com/application-design-center/docs/application-centric-google-cloud](https://docs.cloud.google.com/application-design-center/docs/application-centric-google-cloud)

## Supporting Pages

### "Design application templates \_|\_ Application Design Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: N/A

Evidence snippets:
- For example, you might create the following file for a Cloud Run component: [ { "key" : "service name" , "value" : "frontend-service" }, { "key" : "project id" , "value" : " DEPLOYMENT PROJECT " } ] Update each component in the application template to configure the required parameters. gcloud design-center spaces application-templates components update COMPONENT \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --parameters = PARAMETERS FILE PATH 1 \ --application-template = APPLICATION TEMPLATE Replace the following: COMPONENT : The component ID for the component that you want to update.
- Create a connection between the two components. gcloud design-center spaces application-templates components connections create CONNECTION \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --application-template = APPLICATION TEMPLATE \ --component = COMPONENT \ --destination-component-uri = COMPONENT 2 Replace the following: CONNECTION : The connection ID for the connection that you want to add to the template.
- Add a second component to your template. gcloud design-center spaces application-templates components create COMPONENT 2 \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --application-template = APPLICATION TEMPLATE \ --shared-template-revision-uri = SHARED TEMPLATE URI 2 Replace the following: COMPONENT 2 : The component ID for the second component that you want to add to the template.
- Edit component connection parameters. gcloud design-center spaces application-templates components connections update CONNECTION \ --component = COMPONENT \ --application-template = APPLICATION TEMPLATE \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --source-component-parameters = '[{"key": SOURCE KEY , "value": SOURCE VALUE }]' Replace the following: CONNECTION : The connection ID.

### Application Design Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-design-center/docs/release-notes](https://docs.cloud.google.com/application-design-center/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Feature Application Design Center supports the following components on the design canvas: Compute Engine instance template Compute Engine managed instance group Secret Manager Service account BigQuery Bigtable Cloud Run Cloud SQL (MySQL and PostgreSQL) Cloud Storage Cloud Load Balancing (global and regional) Memorystore for Redis Pub/Sub Spanner Vertex AI Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- September 22, 2025 Feature Application Design Center supports Cloud Run Jobs as a component.
- July 29, 2025 Feature Application Design Center supports AlloyDB as a component.
- Feature Application Design Center supports the following components: Google Kubernetes Engine (GKE) Node Pool GKE Standard Cluster GKE Autopilot Cluster Firestore Feature You can set up Application Design Center using a single project boundary.

### "Application-centric Google Cloud \_|\_ Application Design Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/application-design-center/docs/application-centric-google-cloud](https://docs.cloud.google.com/application-design-center/docs/application-centric-google-cloud)
- Source ID: `site-iam-reference`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- Whether you use Application Design Center to build a new application or App Hub to organize your existing resources, the result is a defined application that is cataloged in App Hub and serves as the basis for unified operations.
- Home Documentation Application development Application Design Center Guides Send feedback Application-centric Google Cloud Stay organized with collections Save and categorize content based on your preferences.
- Application assistance : Get AI-powered support from Gemini Cloud Assist with tasks such as designing applications in Application Design Center, investigating issues, and optimizing your resources.
- Application Design Center data : Elements such as application templates, catalogs, and spaces that are used to design and deploy new applications.

