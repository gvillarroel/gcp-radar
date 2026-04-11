---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:09:51.615Z"
product_name: "Application Design Center"
product_slug: "application-design-center"
feature_name: "Cloud Run Jobs component support"
feature_slug: "cloud-run-jobs-component-support"
latest_feature_date: "2025-09-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-design-center/docs/design-application-templates"
  - "https://docs.cloud.google.com/application-design-center/docs/release-notes"
  - "https://docs.cloud.google.com/application-design-center/docs/audit-logging"
keywords:
  - "jobs"
  - "run"
  - "application"
  - "component"
  - "supports"
  - "design"
  - "center"
  - "as"
---

# Cloud Run Jobs component support

Product: Application Design Center
Coverage: LOW

## Step 02 Summary

Application Design Center supports Cloud Run Jobs as a component option.

## Extended Definition

Application Design Center supports Cloud Run Jobs as a component option.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates)
- [https://docs.cloud.google.com/application-design-center/docs/release-notes](https://docs.cloud.google.com/application-design-center/docs/release-notes)
- [https://docs.cloud.google.com/application-design-center/docs/audit-logging](https://docs.cloud.google.com/application-design-center/docs/audit-logging)

## Supporting Pages

### "Design application templates \_|\_ Application Design Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates)
- Source ID: `site-docs-root`
- Final score: 238
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
- Re-rank relevance: N/A

Evidence snippets:
- September 22, 2025 Feature Application Design Center supports Cloud Run Jobs as a component.
- Feature Application Design Center supports the following components on the design canvas: Compute Engine instance template Compute Engine managed instance group Secret Manager Service account BigQuery Bigtable Cloud Run Cloud SQL (MySQL and PostgreSQL) Cloud Storage Cloud Load Balancing (global and regional) Memorystore for Redis Pub/Sub Spanner Vertex AI Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- July 29, 2025 Feature Application Design Center supports AlloyDB as a component.
- Feature Application Design Center supports the following components: Google Kubernetes Engine (GKE) Node Pool GKE Standard Cluster GKE Autopilot Cluster Firestore Feature You can set up Application Design Center using a single project boundary.

### "App Design Center audit logging \_|\_ Application Design Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/application-design-center/docs/audit-logging](https://docs.cloud.google.com/application-design-center/docs/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following methods don't produce audit logs: google.cloud.designcenter.v1alpha.DesignCenter.CreateCatalog google.cloud.designcenter.v1alpha.DesignCenter.CreateSpace google.cloud.designcenter.v1alpha.DesignCenter.DeleteCatalog google.cloud.designcenter.v1alpha.DesignCenter.DeleteCatalogTemplateRevision google.cloud.designcenter.v1alpha.DesignCenter.DeleteShare google.cloud.designcenter.v1alpha.DesignCenter.DeleteSpace google.cloud.designcenter.v1alpha.DesignCenter.GetComponent google.cloud.designcenter.v1alpha.DesignCenter.GetConnection google.cloud.designcenter.v1alpha.DesignCenter.GetShare google.cloud.designcenter.v1alpha.DesignCenter.GetSharedTemplate google.cloud.designcenter.v1alpha.DesignCenter.ListApplicationTemplateRevisions google.cloud.designcenter.v1alpha.DesignCenter.ListCatalogTemplateRevisions google.cloud.designcenter.v1alpha.DesignCenter.ListCatalogTemplates google.cloud.designcenter.v1alpha.DesignCenter.ListComponents google.cloud.designcenter.v1alpha.DesignCenter.ListConnections google.cloud.designcenter.v1alpha.DesignCenter.ListSharedTemplates google.cloud.designcenter.v1alpha.DesignCenter.ListShares google.cloud.designcenter.v1alpha.DesignCenter.ListSpaces google.cloud.designcenter.v1alpha.DesignCenter.SyncShare google.cloud.designcenter.v1alpha.DesignCenter.UpdateApplicationTemplate google.cloud.designcenter.v1alpha.DesignCenter.UpdateCatalog google.cloud.designcenter.v1alpha.DesignCenter.UpdateCatalogTemplate google.cloud.designcenter.v1alpha.DesignCenter.UpdateConnection google.cloud.designcenter.v1alpha.DesignCenter.UpdateSpace google.cloud.designcenter.v1alpha.DesignCenterInternal.ImportSerializedApplicationTemplate google.longrunning.Operations.WaitOperation Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Permission type Methods ADMIN READ google.cloud.designcenter.v1alpha.DesignCenter.DeployApplication (LRO) google.cloud.designcenter.v1alpha.DesignCenter.GenerateApplicationIaC google.cloud.designcenter.v1alpha.DesignCenter.GenerateApplicationTemplateIaC google.cloud.designcenter.v1alpha.DesignCenter.GetApplication google.cloud.designcenter.v1alpha.DesignCenter.GetApplicationTemplate google.cloud.designcenter.v1alpha.DesignCenter.GetApplicationTemplateRevision google.cloud.designcenter.v1alpha.DesignCenter.GetCatalog google.cloud.designcenter.v1alpha.DesignCenter.GetCatalogTemplate google.cloud.designcenter.v1alpha.DesignCenter.GetCatalogTemplateRevision google.cloud.designcenter.v1alpha.DesignCenter.GetSpace google.cloud.designcenter.v1alpha.DesignCenter.ListApplicationTemplates google.cloud.designcenter.v1alpha.DesignCenter.ListApplications google.cloud.designcenter.v1alpha.DesignCenter.ListCatalogs google.cloud.designcenter.v1alpha.DesignCenter.PreviewApplication (LRO) ADMIN WRITE google.cloud.designcenter.v1alpha.DesignCenter.CommitApplicationTemplate google.cloud.designcenter.v1alpha.DesignCenter.CreateApplication google.cloud.designcenter.v1alpha.DesignCenter.CreateApplicationTemplate google.cloud.designcenter.v1alpha.DesignCenter.CreateCatalogTemplate google.cloud.designcenter.v1alpha.DesignCenter.CreateCatalogTemplateRevision (LRO) google.cloud.designcenter.v1alpha.DesignCenter.CreateComponent google.cloud.designcenter.v1alpha.DesignCenter.CreateConnection google.cloud.designcenter.v1alpha.DesignCenter.DeleteApplication (LRO) google.cloud.designcenter.v1alpha.DesignCenter.DeleteApplicationTemplate google.cloud.designcenter.v1alpha.DesignCenter.DeleteCatalogTemplate (LRO) google.cloud.designcenter.v1alpha.DesignCenter.DeleteComponent google.cloud.designcenter.v1alpha.DesignCenter.DeleteConnection google.cloud.designcenter.v1alpha.DesignCenter.ImportApplicationTemplate google.cloud.designcenter.v1alpha.DesignCenter.UpdateApplication google.cloud.designcenter.v1alpha.DesignCenter.UpdateComponent API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Design Center. google.cloud.designcenter.v1alpha.DesignCenter The following audit logs are associated with methods belonging to google.cloud.designcenter.v1alpha.DesignCenter .
- Filter for this method : protoPayload.methodName="google.cloud.designcenter.v1alpha.DesignCenter.DeleteApplicationTemplate" DeleteCatalogTemplate Method : google.cloud.designcenter.v1alpha.DesignCenter.DeleteCatalogTemplate Audit log type : Admin activity Permissions : designcenter.catalogTemplates.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.designcenter.v1alpha.DesignCenter.DeleteCatalogTemplate" DeleteComponent Method : google.cloud.designcenter.v1alpha.DesignCenter.DeleteComponent Audit log type : Admin activity Permissions : designcenter.components.delete - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.designcenter.v1alpha.DesignCenter.UpdateApplication" UpdateComponent Method : google.cloud.designcenter.v1alpha.DesignCenter.UpdateComponent Audit log type : Admin activity Permissions : designcenter.components.update - ADMIN WRITE Method is a long-running or streaming operation : No.

