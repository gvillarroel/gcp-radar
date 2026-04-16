---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:05:19.016Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "Expanded App Hub supported resources"
feature_slug: "expanded-app-hub-supported-resources"
latest_feature_date: "2025-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/application-centric-google-cloud"
  - "https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-single-project"
  - "https://docs.cloud.google.com/app-hub/docs/overview"
keywords:
  - "registerable"
  - "expanded"
  - "products"
  - "adds"
  - "additional"
  - "resources"
---

# Expanded App Hub supported resources

Product: App Hub
Coverage: MEDIUM

## Step 02 Summary

App Hub adds support for additional Google Cloud products and services as registerable resources, including preview-capable integrations.

## Extended Definition

App Hub adds support for additional Google Cloud products and services as registerable resources, including preview-capable integrations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/application-centric-google-cloud](https://docs.cloud.google.com/app-hub/docs/application-centric-google-cloud)
- [https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-single-project](https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-single-project)
- [https://docs.cloud.google.com/app-hub/docs/overview](https://docs.cloud.google.com/app-hub/docs/overview)

## Supporting Pages

### Application-centric Google Cloud \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/application-centric-google-cloud](https://docs.cloud.google.com/app-hub/docs/application-centric-google-cloud)
- Source ID: `site-docs-root-2`
- Final score: 73
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Benefits of application-centric management Organizing Google Cloud resources and registering them in applications as services and workloads offers an alternative to tracking individual resources across various projects or products.
- Whether you use Application Design Center to build a new application or App Hub to organize your existing resources, the result is a defined application that is cataloged in App Hub and serves as the basis for unified operations.
- You can shift your focus from your individual infrastructure resources to the application as a whole, enabling application management in a way that aligns with business functionality and day-to-day operations.
- To enable application management, you define an application management boundary, which is the collection of projects whose underlying Google Cloud resources App Hub can discover and register in applications.

### Set up a single project \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-single-project](https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-single-project)
- Source ID: `site-docs-root-2`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optionally, delete all the applications in the project and then disable the App Hub API if you won't use application features in this project anymore: gcloud services disable apphub.googleapis.com \ --project = PROJECT ID What's next Quickstart: Create an application from existing resources Register resources to an application Set up application monitoring App Hub IAM roles and permissions App Hub overview Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Required roles To get the permissions that you need to configure a single project for application management, ask your administrator to grant you the following IAM roles on the project that you want to configure as the standalone management project: Manage resources, permissions, and billing on the project: Project Owner ( roles/owner ) Manage all application components on the project: App Hub Admin ( roles/apphub.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Enable the App Hub API: gcloud services enable apphub.googleapis.com \ --project PROJECT ID Attach the project to itself to create an application management boundary: gcloud apphub boundary update \ --crm-node = projects/ PROJECT ID \ --project = PROJECT ID \ --location = global This command configures the project as its own management project, letting App Hub automatically discover all supported resources within it.
- If you decide to re-enable application management on the project , App Hub can rediscover your applications, services, and workloads and update the registration status if the underlying resources still exist.

### App Hub overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/overview](https://docs.cloud.google.com/app-hub/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- This approach aligns your application management boundary with your organization's structure by business unit, environment, or team, and automatically includes all projects within that folder. ( Preview ) Single-project boundary : For small applications where all Google Cloud resources reside in one project, you can designate that single project as your boundary.
- Detached : Services or workloads that have been registered to an application, but that App Hub can't manage or monitor because their underlying Google Cloud resources are no longer part of the application management boundary that you have defined.
- Registration status of services and workloads The organizational structure of your Google Cloud resources affects how App Hub can manage services and workloads and lets you register them in applications.
- This application management layer that App Hub introduces on top of your resource hierarchy in Google Cloud lets App Hub discover supported resources within the boundary.

