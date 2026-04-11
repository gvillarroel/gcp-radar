---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:09:51.614Z"
product_name: "Application Design Center"
product_slug: "application-design-center"
feature_name: "Single project boundary setup"
feature_slug: "single-project-boundary-setup"
latest_feature_date: "2025-12-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-design-center/docs/setup"
  - "https://docs.cloud.google.com/application-design-center/docs/design-application-templates"
  - "https://docs.cloud.google.com/application-design-center/docs/application-centric-google-cloud"
keywords:
  - "boundary"
  - "project"
  - "single"
  - "setup"
  - "can"
  - "application"
  - "design"
  - "center"
---

# Single project boundary setup

Product: Application Design Center
Coverage: LOW

## Step 02 Summary

Application Design Center can be set up using a single Google Cloud project boundary.

## Extended Definition

Application Design Center can be set up using a single Google Cloud project boundary.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-design-center/docs/setup](https://docs.cloud.google.com/application-design-center/docs/setup)
- [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates)
- [https://docs.cloud.google.com/application-design-center/docs/application-centric-google-cloud](https://docs.cloud.google.com/application-design-center/docs/application-centric-google-cloud)

## Supporting Pages

### Set up Application Design Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-design-center/docs/setup](https://docs.cloud.google.com/application-design-center/docs/setup)
- Source ID: `site-docs-root`
- Final score: 248
- Re-rank relevance: N/A

Evidence snippets:
- The application management boundary you choose impacts your Application Design Center setup in the following ways: Single-project boundary Preview : The system quickly configures your project for application management, enables required APIs, and creates a space and storage bucket.
- To enable application management in a single project, see Create a space and enable APIs Folder-level You can use App Design Center in a folder configured for application management, which lets you define, group, and manage applications.
- Enable application management Single-project (Preview) You can use App Design Center in an app-enabled project, which lets you define, group, and manage applications.
- Single-project (Preview) To enable application management on a single project and set up App Design Center, do the following: Go to the Application Design Center Overview page.

### "Design application templates \_|\_ Application Design Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- The design canvas is displayed. gcloud CLI Create a new application template. gcloud design-center spaces application-templates create APPLICATION TEMPLATE \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --display-name = DISPLAY NAME \ --description = DESCRIPTION Replace the following: APPLICATION TEMPLATE : The template ID for the application template that you want to create.
- For example, you might create the following file for a Cloud Run component: [ { "key" : "service name" , "value" : "frontend-service" }, { "key" : "project id" , "value" : " DEPLOYMENT PROJECT " } ] Update each component in the application template to configure the required parameters. gcloud design-center spaces application-templates components update COMPONENT \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --parameters = PARAMETERS FILE PATH 1 \ --application-template = APPLICATION TEMPLATE Replace the following: COMPONENT : The component ID for the component that you want to update.
- Create a connection between the two components. gcloud design-center spaces application-templates components connections create CONNECTION \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --application-template = APPLICATION TEMPLATE \ --component = COMPONENT \ --destination-component-uri = COMPONENT 2 Replace the following: CONNECTION : The connection ID for the connection that you want to add to the template.
- Add a second component to your template. gcloud design-center spaces application-templates components create COMPONENT 2 \ --project = PROJECT \ --location = LOCATION \ --space = SPACE \ --application-template = APPLICATION TEMPLATE \ --shared-template-revision-uri = SHARED TEMPLATE URI 2 Replace the following: COMPONENT 2 : The component ID for the second component that you want to add to the template.

### "Application-centric Google Cloud \_|\_ Application Design Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/application-design-center/docs/application-centric-google-cloud](https://docs.cloud.google.com/application-design-center/docs/application-centric-google-cloud)
- Source ID: `site-iam-reference`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The management project from your boundary stores App Hub and Application Design Center data and enables the necessary APIs for application management.
- To enable application management, you define an application management boundary, which is the collection of projects whose underlying Google Cloud resources App Hub can discover and register in applications.
- Application design and deployment : Application Design Center : Design and deploy new applications using prebuilt or custom templates that you can update.
- You define which resources App Hub can manage by configuring an application management boundary with a management project.

