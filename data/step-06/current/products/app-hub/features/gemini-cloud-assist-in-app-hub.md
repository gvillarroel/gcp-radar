---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:05:19.024Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "Gemini Cloud Assist in App Hub"
feature_slug: "gemini-cloud-assist-in-app-hub"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/enabled-apis"
  - "https://docs.cloud.google.com/app-hub/docs/overview"
  - "https://docs.cloud.google.com/app-hub/docs/optimize-applications"
keywords:
  - "allowing"
  - "gemini"
  - "assist"
  - "supports"
  - "preview"
---

# Gemini Cloud Assist in App Hub

Product: App Hub
Coverage: MEDIUM

## Step 02 Summary

App Hub now supports Gemini Cloud Assist in Preview, allowing users to retrieve application information through a chat panel in app-enabled folders.

## Extended Definition

App Hub now supports Gemini Cloud Assist in Preview, allowing users to retrieve application information through a chat panel in app-enabled folders.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/enabled-apis](https://docs.cloud.google.com/app-hub/docs/enabled-apis)
- [https://docs.cloud.google.com/app-hub/docs/overview](https://docs.cloud.google.com/app-hub/docs/overview)
- [https://docs.cloud.google.com/app-hub/docs/optimize-applications](https://docs.cloud.google.com/app-hub/docs/optimize-applications)

## Supporting Pages

### Enable APIs on the management project \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/enabled-apis](https://docs.cloud.google.com/app-hub/docs/enabled-apis)
- Source ID: `site-docs-root-2`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- API Required or recommended More information Gemini for Google Cloud API ( cloudaicompanion.googleapis.com ) Recommended Gemini Cloud Assist pricing VPC Service Controls Enable recommended APIs To enable recommended APIs after application management setup, follow these steps: To get the permissions that you need to enable APIs, ask your administrator to grant you the Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) role on the management project.
- API Required or recommended More information Developer Connect API ( developerconnect.googleapis.com ) Recommended Developer Connect pricing VPC Service Controls Gemini Cloud Assist APIs Gemini Cloud Assist integrates the power of AI into your application-centric experience, offering assistance across the application lifecycle.
- Use Gemini Cloud Assist to help you with application tasks such as designing an application in App Design Center or troubleshoot issues with your applications.
- If a product supports VPC Service Controls , review the linked documentation in the provided list for more information, such as limitations or additional configuration requirements.

### App Hub overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/overview](https://docs.cloud.google.com/app-hub/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- AI-powered assistance from Gemini Cloud Assist , which uses App Hub's data model to help you design, operate, and troubleshoot your applications.
- This approach aligns your application management boundary with your organization's structure by business unit, environment, or team, and automatically includes all projects within that folder. ( Preview ) Single-project boundary : For small applications where all Google Cloud resources reside in one project, you can designate that single project as your boundary.
- For example, when an AI agent is deployed through a managed platform like Vertex AI Agent Engine , App Hub automatically classifies the resource with the AGENT functional type value to indicate that the workload runs an AI agent. ( Preview ) Extended metadata : an schema-driven property that provides rich, structured information about the service or workload.
- You can define single-project boundaries by configuring the project as a standalone management project. (Legacy) Multiple-project boundary with a host project : For existing users, App Hub supports a legacy model where you can designate a host project for application management by enabling the App Hub API on a Google Cloud project.

### "Optimize an application with design recommendations \_|\_ App Hub \_|\_\

- URL: [https://docs.cloud.google.com/app-hub/docs/optimize-applications](https://docs.cloud.google.com/app-hub/docs/optimize-applications)
- Source ID: `site-docs-root-2`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Analyze the application for optimization opportunities Use Cloud Hub and Gemini Cloud Assist to get a consolidated view of your application's operational data and receive recommendations: In the Google Cloud console, use the project picker to select your management project.
- Optionally, use the Gemini Cloud Assist panel to ask for optimization recommendations using natural language prompts, for example: Give me recommendations to optimize my application.
- Application insights and assistance services, such as Cloud Hub and Gemini Cloud Assist , help you identify optimization opportunities.
- Gemini Cloud Assist provides recommendations, such as resizing underutilized machine types or enabling a Cloud CDN.

