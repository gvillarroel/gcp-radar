---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:05:19.023Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "App Hub application management in app-enabled folders"
feature_slug: "app-hub-application-management-in-app-enabled-folders"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/enabled-apis"
  - "https://docs.cloud.google.com/app-hub/docs/quickstart-create-application"
  - "https://docs.cloud.google.com/app-hub/docs/application-centric-google-cloud"
keywords:
  - "folders"
  - "application"
  - "management"
  - "enabled"
  - "supports"
---

# App Hub application management in app-enabled folders

Product: App Hub
Coverage: MEDIUM

## Step 02 Summary

App Hub now supports creating and managing App Hub applications from app-enabled folders in Preview.

## Extended Definition

App Hub now supports creating and managing App Hub applications from app-enabled folders in Preview.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/enabled-apis](https://docs.cloud.google.com/app-hub/docs/enabled-apis)
- [https://docs.cloud.google.com/app-hub/docs/quickstart-create-application](https://docs.cloud.google.com/app-hub/docs/quickstart-create-application)
- [https://docs.cloud.google.com/app-hub/docs/application-centric-google-cloud](https://docs.cloud.google.com/app-hub/docs/application-centric-google-cloud)

## Supporting Pages

### Enable APIs on the management project \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/enabled-apis](https://docs.cloud.google.com/app-hub/docs/enabled-apis)
- Source ID: `site-docs-root-2`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- API Required or recommended More information App Hub API ( apphub.googleapis.com ) Organize existing resources into applications Required App Hub pricing VPC Service Controls App Design Center API ( designcenter.googleapis.com ) Design, deploy, and update applications Required App Design Center pricing Cloud Asset API ( cloudasset.googleapis.com ) Manage the global metadata inventory of Google Cloud resources and other assets Required Cloud Asset Inventory pricing VPC Service Controls Cloud Resource Manager API ( cloudresourcemanager.googleapis.com ) Manage container resources such as organizations, folders, and projects Required Cloud Resource Manager API pricing VPC Service Controls Infrastructure Manager API ( config.googleapis.com ) Automate deployment and management of Google Cloud infrastructure resources Required Infra Manager pricing VPC Service Controls Cloud Build API ( cloudbuild.googleapis.com ) Run builds for Infra Manager deployments Required Cloud Build pricing VPC Service Controls Cloud Storage API ( storage.googleapis.com ) Store data for Google Cloud services, including App Design Center and Cloud Logging Required Cloud Storage pricing VPC Service Controls Google Cloud Observability APIs The following APIs provide capabilities for observability features.
- API Required or recommended More information App Optimize API ( appoptimize.googleapis.com ) Optimize costs in Cost Explorer and Cloud Hub Required Retrieve data from Cloud Billing and Cloud Monitoring Recommender API ( recommender.googleapis.com ) Generate recommendations and insights to help you optimize your Google Cloud resources Required Recommender pricing VPC Service Controls Service Health API ( servicehealth.googleapis.com ) Identify Google Cloud service disruptions relevant to your applications Required Personalized Service Health pricing VPC Service Controls Security and compliance APIs Security Command Center is a risk management solution that helps security professionals to prevent, detect, and respond to security issues.
- API Required or recommended More information Gemini for Google Cloud API ( cloudaicompanion.googleapis.com ) Recommended Gemini Cloud Assist pricing VPC Service Controls Enable recommended APIs To enable recommended APIs after application management setup, follow these steps: To get the permissions that you need to enable APIs, ask your administrator to grant you the Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) role on the management project.
- API Required or recommended More information Security Command Center API ( securitycenter.googleapis.com ) Recommended Security Command Center pricing VPC Service Controls Developer tooling APIs Developer Connect connects your application management workflows with your development lifecycle.

### "Quickstart: Create an application from existing resources \_|\_ App Hub\

- URL: [https://docs.cloud.google.com/app-hub/docs/quickstart-create-application](https://docs.cloud.google.com/app-hub/docs/quickstart-create-application)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Compute Engine API ( compute.googleapis.com ) Infrastructure Manager API ( config.googleapis.com ) Enable APIs Required roles To get the permissions that you need to enable required APIs and create a sample application from existing resources, ask your administrator to grant you the following IAM roles on the management project: To enable required APIs: Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) To get full access to required services: App Hub Admin ( roles/apphub.admin ) Cloud Run Admin ( roles/run.admin ) Compute Admin ( roles/compute.admin ) Cloud Infrastructure Manager Admin ( roles/config.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- This quickstart supports users who want to use their existing infrastructure to gain visibility and operational control by grouping Google Cloud resources into logical applications.
- This quickstart assumes you have defined an application management boundary and creates an application using the management project .
- When you set up a management project, most of the APIs you need for this quickstart are enabled automatically.

### Application-centric Google Cloud \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/application-centric-google-cloud](https://docs.cloud.google.com/app-hub/docs/application-centric-google-cloud)
- Source ID: `site-docs-root-2`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In this case, two folders ( Business Unit 1 and Business Unit 2 ) are attached to their own management projects, defining separate application management boundaries.
- All the folders are configured for application management and hence have their own distinct management projects.
- When you set up a management project, APIs for application management are automatically enabled.
- What's next Learn more about App Hub Choose your application setup model Learn more about Application Design Center Learn more about Cloud Hub Prepare for application management Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

