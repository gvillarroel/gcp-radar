---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:05:19.047Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "App Hub Cloud Console setup"
feature_slug: "app-hub-cloud-console-setup"
latest_feature_date: "2023-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-single-project"
  - "https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-host-project"
  - "https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources"
keywords:
  - "console"
  - "setup"
  - "available"
  - "preview"
---

# App Hub Cloud Console setup

Product: App Hub
Coverage: MEDIUM

## Step 02 Summary

App Hub setup is now available in the Google Cloud console in Preview.

## Extended Definition

App Hub setup is now available in the Google Cloud console in Preview.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-single-project](https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-single-project)
- [https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-host-project](https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-host-project)
- [https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources](https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources)

## Supporting Pages

### Set up a single project \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-single-project](https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-single-project)
- Source ID: `site-docs-root-2`
- Final score: 84
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Enable App Hub page, choose one of the following options: Quick setup : manage a default configuration for resources in this project and define your first application for initial adoption.
- Complete the setup based on your selection: If you selected Quick setup , the Define application tab lets you optionally define an application now or complete the setup without creating one.
- Full setup : manage custom configurations for your applications, including setting up upfront access controls and, optionally, adding more projects for multiple-project boundaries .
- To disable application management on a single project, follow these steps: Console In the Google Cloud console, use the project picker to select the management project.

### Manage services and workloads \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources](https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources)
- Source ID: `site-docs-root-2`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- For a list of the supported metadata types and their schemas, see Extended metadata schemas . gcloud List all available extended metadata schemas in a project and location: gcloud alpha apphub extended-metadata-schemas list \ --project = PROJECT ID \ --location = LOCATION \ Replace the following: PROJECT ID : the ID of your management project.
- Alternatively, view a list of all services and workloads with a registration status value of discovered or registered : Discovered Discovered Google Cloud resources within your application management boundary are available to be registered as services or workloads in an application.
- Console View details from services and workloads of an application with a registration status value of registered or detached : In the Google Cloud console, use the project picker to select your management project.
- If it is still within your application management boundary, it becomes a resource with a registration status value of discovered , available for registration to another application.

### Set up a host project (Legacy) \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-host-project](https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-host-project)
- Source ID: `site-docs-root-2`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For a comparison of key differences between the available models for application management, see Choose your application setup model .
- Assign App Hub roles and permissions To grant appropriate App Hub roles and permissions to App Hub users in the host project and service projects, follow these steps: Console In the Google Cloud console, use the project picker to select the host project.
- To attach service projects to the host project and create a multiple-project boundary, follow these steps: Console In the Google Cloud console, use the project picker to select the host project.
- Set up the host project To configure a Google Cloud project as a host project, follow these steps: Console In the Google Cloud console, use the project picker to select your project.

