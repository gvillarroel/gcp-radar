---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:09:51.617Z"
product_name: "Application Design Center"
product_slug: "application-design-center"
feature_name: "Cloud SQL (MySQL/PostgreSQL) component support"
feature_slug: "cloud-sql-mysql-postgresql-component-support"
latest_feature_date: "2025-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-design-center/docs/configure-cloud-sql-mysql"
  - "https://docs.cloud.google.com/application-design-center/docs/configure-cloud-sql-postgresql"
  - "https://docs.cloud.google.com/application-design-center/docs/design-application-templates"
keywords:
  - "postgresql"
  - "mysql"
  - "sql"
  - "application"
  - "component"
  - "supports"
  - "design"
  - "center"
---

# Cloud SQL (MySQL/PostgreSQL) component support

Product: Application Design Center
Coverage: LOW

## Step 02 Summary

Application Design Center supports Cloud SQL for MySQL and PostgreSQL as a design-canvas component.

## Extended Definition

Application Design Center supports Cloud SQL for MySQL and PostgreSQL as a design-canvas component.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-design-center/docs/configure-cloud-sql-mysql](https://docs.cloud.google.com/application-design-center/docs/configure-cloud-sql-mysql)
- [https://docs.cloud.google.com/application-design-center/docs/configure-cloud-sql-postgresql](https://docs.cloud.google.com/application-design-center/docs/configure-cloud-sql-postgresql)
- [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates)

## Supporting Pages

### "Configure a Cloud SQL (MySQL) instance \_|\_ Application Design Center \_\

- URL: [https://docs.cloud.google.com/application-design-center/docs/configure-cloud-sql-mysql](https://docs.cloud.google.com/application-design-center/docs/configure-cloud-sql-mysql)
- Source ID: `site-iam-reference`
- Final score: 254
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application development Application Design Center Guides Send feedback Configure a Cloud SQL (MySQL) instance Stay organized with collections Save and categorize content based on your preferences.
- For more information, see the following: Cloud SQL overview About instance settings This document describes the connections and parameters you can configure when using App Design Center to create a Cloud SQL for MySQL instance.
- Component connections The following table includes the components that you can connect to a Cloud SQL (MySQL) instance, and the resulting updates to your application and its generated Terraform code.
- Connected component Application updates Background information Compute Engine instance template The Compute Engine instances can connect and read and write data to the Cloud SQL (MySQL) instance.

### "Configure a Cloud SQL (PostgreSQL) instance \_|\_ Application Design Center\

- URL: [https://docs.cloud.google.com/application-design-center/docs/configure-cloud-sql-postgresql](https://docs.cloud.google.com/application-design-center/docs/configure-cloud-sql-postgresql)
- Source ID: `site-iam-reference`
- Final score: 254
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application development Application Design Center Guides Send feedback Configure a Cloud SQL (PostgreSQL) instance Stay organized with collections Save and categorize content based on your preferences.
- For more information, see the following: Cloud SQL overview About instance settings This document describes the connections and parameters you can configure when using App Design Center to create a Cloud SQL (PostgreSQL) instance.
- Component connections The following table includes the components that you can connect to a Cloud SQL (PostgreSQL) instance, and the resulting updates to your application and its generated Terraform code.
- Connected component Application updates Background information Compute Engine instance template The Compute Engine instances can connect and read and write data to the Cloud SQL (PostgreSQL) instance.

### "Design application templates \_|\_ Application Design Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- For example, you might create the following file for a Cloud Run component: [ { "key" : "service name" , "value" : "frontend-service" }, { "key" : "project id" , "value" : " DEPLOYMENT PROJECT " } ] Update each component in the application template to configure the required parameters. gcloud design-center spaces application-templates components update COMPONENT \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --parameters = PARAMETERS FILE PATH 1 \ --application-template = APPLICATION TEMPLATE Replace the following: COMPONENT : The component ID for the component that you want to update.
- Create a connection between the two components. gcloud design-center spaces application-templates components connections create CONNECTION \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --application-template = APPLICATION TEMPLATE \ --component = COMPONENT \ --destination-component-uri = COMPONENT 2 Replace the following: CONNECTION : The connection ID for the connection that you want to add to the template.
- Add a second component to your template. gcloud design-center spaces application-templates components create COMPONENT 2 \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --application-template = APPLICATION TEMPLATE \ --shared-template-revision-uri = SHARED TEMPLATE URI 2 Replace the following: COMPONENT 2 : The component ID for the second component that you want to add to the template.
- Edit component connection parameters. gcloud design-center spaces application-templates components connections update CONNECTION \ --component = COMPONENT \ --application-template = APPLICATION TEMPLATE \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --source-component-parameters = '[{"key": SOURCE KEY , "value": SOURCE VALUE }]' Replace the following: CONNECTION : The connection ID.

