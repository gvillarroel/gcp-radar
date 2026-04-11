---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:09:51.620Z"
product_name: "Application Design Center"
product_slug: "application-design-center"
feature_name: "Vertex AI component support"
feature_slug: "vertex-ai-component-support"
latest_feature_date: "2025-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-design-center/docs/design-application-templates"
  - "https://docs.cloud.google.com/application-design-center/docs/release-notes"
  - "https://docs.cloud.google.com/application-design-center/docs/reference/rest"
keywords:
  - "vertex"
  - "ai"
  - "application"
  - "component"
  - "supports"
  - "design"
  - "center"
  - "as"
---

# Vertex AI component support

Product: Application Design Center
Coverage: LOW

## Step 02 Summary

Application Design Center supports Vertex AI as a component on the design canvas.

## Extended Definition

Application Design Center supports Vertex AI as a component on the design canvas.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates)
- [https://docs.cloud.google.com/application-design-center/docs/release-notes](https://docs.cloud.google.com/application-design-center/docs/release-notes)
- [https://docs.cloud.google.com/application-design-center/docs/reference/rest](https://docs.cloud.google.com/application-design-center/docs/reference/rest)

## Supporting Pages

### "Design application templates \_|\_ Application Design Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates)
- Source ID: `site-docs-root`
- Final score: 254
- Re-rank relevance: N/A

Evidence snippets:
- Edit Terraform code As you design your application template, Application Design Center generates Terraform code to reflect the design and configuration details.
- If you specify configuration details, Application Design Center uses them as default values for applications.
- For example, you might create the following file for a Cloud Run component: [ { "key" : "service name" , "value" : "frontend-service" }, { "key" : "project id" , "value" : " DEPLOYMENT PROJECT " } ] Update each component in the application template to configure the required parameters. gcloud design-center spaces application-templates components update COMPONENT \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --parameters = PARAMETERS FILE PATH 1 \ --application-template = APPLICATION TEMPLATE Replace the following: COMPONENT : The component ID for the component that you want to update.
- Create a connection between the two components. gcloud design-center spaces application-templates components connections create CONNECTION \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --application-template = APPLICATION TEMPLATE \ --component = COMPONENT \ --destination-component-uri = COMPONENT 2 Replace the following: CONNECTION : The connection ID for the connection that you want to add to the template.

### Application Design Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-design-center/docs/release-notes](https://docs.cloud.google.com/application-design-center/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Feature Application Design Center supports the following components on the design canvas: Compute Engine instance template Compute Engine managed instance group Secret Manager Service account BigQuery Bigtable Cloud Run Cloud SQL (MySQL and PostgreSQL) Cloud Storage Cloud Load Balancing (global and regional) Memorystore for Redis Pub/Sub Spanner Vertex AI Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- September 22, 2025 Feature Application Design Center supports Cloud Run Jobs as a component.
- July 29, 2025 Feature Application Design Center supports AlloyDB as a component.
- Feature Application Design Center supports the following components: Google Kubernetes Engine (GKE) Node Pool GKE Standard Cluster GKE Autopilot Cluster Firestore Feature You can set up Application Design Center using a single project boundary.

### Design Center API \_|\_ Application Design Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-design-center/docs/reference/rest](https://docs.cloud.google.com/application-design-center/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST Resource: v1alpha.projects.locations REST Resource: v1alpha.projects.locations.operations REST Resource: v1alpha.projects.locations.spaces REST Resource: v1alpha.projects.locations.spaces.applicationTemplates REST Resource: v1alpha.projects.locations.spaces.applicationTemplates.components REST Resource: v1alpha.projects.locations.spaces.applicationTemplates.components.connections REST Resource: v1alpha.projects.locations.spaces.applicationTemplates.revisions REST Resource: v1alpha.projects.locations.spaces.applications REST Resource: v1alpha.projects.locations.spaces.catalogs REST Resource: v1alpha.projects.locations.spaces.catalogs.shares REST Resource: v1alpha.projects.locations.spaces.catalogs.templates REST Resource: v1alpha.projects.locations.spaces.catalogs.templates.revisions REST Resource: v1alpha.projects.locations.spaces.sharedTemplates REST Resource: v1alpha.projects.locations.spaces.sharedTemplates.revisions Service: designcenter.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- Home Documentation Application development Application Design Center Reference Send feedback Design Center API Stay organized with collections Save and categorize content based on your preferences.
- REST Resource: v1alpha.projects.locations.spaces Methods create POST /v1alpha/{parent=projects/ /locations/ }/spaces Creates a space. delete DELETE /v1alpha/{name=projects/ /locations/ /spaces/ } Deletes a space. get GET /v1alpha/{name=projects/ /locations/ /spaces/ } Gets details about a space. getIamPolicy GET /v1alpha/{resource=projects/ /locations/ /spaces/ }:getIamPolicy Gets the access control policy for a resource. inferConnections POST /v1alpha/{name=projects/ /locations/ /spaces/ }:inferConnections Infers and suggests connections between components within a space. list GET /v1alpha/{parent=projects/ /locations/ }/spaces Lists spaces in a given project and location. patch PATCH /v1alpha/{space.name=projects/ /locations/ /spaces/ } Updates a space. setIamPolicy POST /v1alpha/{resource=projects/ /locations/ /spaces/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1alpha/{resource=projects/ /locations/ /spaces/ }:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v1alpha.projects.locations.spaces.applicationTemplates.components.connections Methods create POST /v1alpha/{parent=projects/ /locations/ /spaces/ /applicationTemplates/ /components/ }/connections Creates a connection. delete DELETE /v1alpha/{name=projects/ /locations/ /spaces/ /applicationTemplates/ /components/ /connections/ } Deletes a connection. get GET /v1alpha/{name=projects/ /locations/ /spaces/ /applicationTemplates/ /components/ /connections/ } Gets details about a connection. list GET /v1alpha/{parent=projects/ /locations/ /spaces/ /applicationTemplates/ /components/ }/connections Lists connections in an application template. patch PATCH /v1alpha/{connection.name=projects/ /locations/ /spaces/ /applicationTemplates/ /components/ /connections/ } Updates a connection.

