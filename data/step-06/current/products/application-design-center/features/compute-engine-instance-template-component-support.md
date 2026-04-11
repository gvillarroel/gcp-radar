---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:09:51.618Z"
product_name: "Application Design Center"
product_slug: "application-design-center"
feature_name: "Compute Engine instance template component support"
feature_slug: "compute-engine-instance-template-component-support"
latest_feature_date: "2025-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-design-center/docs/configure-compute-engine-instance"
  - "https://docs.cloud.google.com/application-design-center/docs/configure-compute-engine-mig"
  - "https://docs.cloud.google.com/application-design-center/docs/design-application-templates"
keywords:
  - "template"
  - "instance"
  - "compute"
  - "engine"
  - "application"
  - "component"
  - "design"
  - "center"
---

# Compute Engine instance template component support

Product: Application Design Center
Coverage: LOW

## Step 02 Summary

Application Design Center supports the Compute Engine instance template component on the design canvas.

## Extended Definition

Application Design Center supports the Compute Engine instance template component on the design canvas.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-design-center/docs/configure-compute-engine-instance](https://docs.cloud.google.com/application-design-center/docs/configure-compute-engine-instance)
- [https://docs.cloud.google.com/application-design-center/docs/configure-compute-engine-mig](https://docs.cloud.google.com/application-design-center/docs/configure-compute-engine-mig)
- [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates)

## Supporting Pages

### "Configure a Compute Engine instance template \_|\_ Application Design Center\

- URL: [https://docs.cloud.google.com/application-design-center/docs/configure-compute-engine-instance](https://docs.cloud.google.com/application-design-center/docs/configure-compute-engine-instance)
- Source ID: `site-iam-reference`
- Final score: 296
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application development Application Design Center Guides Send feedback Configure a Compute Engine instance template Stay organized with collections Save and categorize content based on your preferences.
- For more information, see the following: Compute Engine overview Instance templates This document describes the connections and parameters you can configure when using App Design Center to create a Compute Engine instance template.
- Component connections The following table includes the components that you can connect to a Compute Engine instance template, and the resulting updates to your application and its generated Terraform code.
- Connected component Application updates Background information Service Account The Compute Engine instance template uses the connected service account instead of creating a new service account.

### "Configure a Compute Engine MIG \_|\_ Application Design Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/application-design-center/docs/configure-compute-engine-mig](https://docs.cloud.google.com/application-design-center/docs/configure-compute-engine-mig)
- Source ID: `site-iam-reference`
- Final score: 262
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information, see the following: Compute Engine overview Managed instance groups (MIGs) This document describes the connections and parameters you can configure when using App Design Center to create a Compute Engine MIG.
- Basic scenarios for creating managed instance groups (MIGs) Required configuration parameters If your template includes a Compute Engine MIG component, you must configure the following parameters before you deploy.
- Set up a regional external Application Load Balancer with VM instance group backends Compute Engine instance template The Compute Engine instance template is used to create instances in the managed instance group.
- Home Documentation Application development Application Design Center Guides Send feedback Configure a Compute Engine MIG Stay organized with collections Save and categorize content based on your preferences.

### "Design application templates \_|\_ Application Design Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates)
- Source ID: `site-docs-root`
- Final score: 258
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, you might create the following file for a Cloud Run component: [ { "key" : "service name" , "value" : "frontend-service" }, { "key" : "project id" , "value" : " DEPLOYMENT PROJECT " } ] Update each component in the application template to configure the required parameters. gcloud design-center spaces application-templates components update COMPONENT \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --parameters = PARAMETERS FILE PATH 1 \ --application-template = APPLICATION TEMPLATE Replace the following: COMPONENT : The component ID for the component that you want to update.
- Create a connection between the two components. gcloud design-center spaces application-templates components connections create CONNECTION \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --application-template = APPLICATION TEMPLATE \ --component = COMPONENT \ --destination-component-uri = COMPONENT 2 Replace the following: CONNECTION : The connection ID for the connection that you want to add to the template.
- Add a second component to your template. gcloud design-center spaces application-templates components create COMPONENT 2 \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --application-template = APPLICATION TEMPLATE \ --shared-template-revision-uri = SHARED TEMPLATE URI 2 Replace the following: COMPONENT 2 : The component ID for the second component that you want to add to the template.
- Edit component connection parameters. gcloud design-center spaces application-templates components connections update CONNECTION \ --component = COMPONENT \ --application-template = APPLICATION TEMPLATE \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --source-component-parameters = '[{"key": SOURCE KEY , "value": SOURCE VALUE }]' Replace the following: CONNECTION : The connection ID.

