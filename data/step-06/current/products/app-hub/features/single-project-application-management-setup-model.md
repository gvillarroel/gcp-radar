---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:05:19.003Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "Single-project application management setup model"
feature_slug: "single-project-application-management-setup-model"
latest_feature_date: "2025-12-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/set-up-app-hub"
  - "https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-single-project"
  - "https://docs.cloud.google.com/app-hub/docs/best-practices"
keywords:
  - "setup"
  - "project"
  - "model"
  - "application"
  - "management"
  - "single"
---

# Single-project application management setup model

Product: App Hub
Coverage: MEDIUM

## Step 02 Summary

App Hub introduces a preview setup model that lets a standalone project be configured as the management project and attached as an application management boundary.

## Extended Definition

App Hub introduces a preview setup model that lets a standalone project be configured as the management project and attached as an application management boundary.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/set-up-app-hub](https://docs.cloud.google.com/app-hub/docs/set-up-app-hub)
- [https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-single-project](https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-single-project)
- [https://docs.cloud.google.com/app-hub/docs/best-practices](https://docs.cloud.google.com/app-hub/docs/best-practices)

## Supporting Pages

### Choose your application setup model \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/set-up-app-hub](https://docs.cloud.google.com/app-hub/docs/set-up-app-hub)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Compare setup models The following table provides a comparison between projects and folders for your application management boundary: Feature Single-project boundary ( Preview ) Folder-level boundary Host project (Legacy) Recommendation New users or small organizations where all application components reside in a single project.
- Setup guide Set up a single project Set up a folder Set up a host project (Legacy) Plan your resource hierarchy for application management Effective application management in App Hub builds directly upon your existing resource hierarchy in Google Cloud .
- Boundary type App Hub project type Application-centric Google Cloud support Single project ( Preview ) Host project App Hub Application Monitoring Management project App Hub Application Design Center Application Monitoring Folder level Management project App Hub Application Design Center Application Monitoring Cloud Hub Cost Explorer Gemini Cloud Assist Other Application-centric Google Cloud products Multiple projects Host project App Hub Application Monitoring What's next Set up a single project Set up a folder Set up a host project (Legacy) App Hub IAM roles and permissions App Hub overview Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- How applications align with the Google Cloud resource hierarchy Think of App Hub's data model as an overlay on the Google Cloud resource hierarchy: Permissions are inherited: IAM roles and permissions for applications are granted on the management project, and standard IAM inheritance rules from your resource hierarchy apply.

### Set up a single project \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-single-project](https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-single-project)
- Source ID: `site-docs-root-2`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to configure a single project for application management, ask your administrator to grant you the following IAM roles on the project that you want to configure as the standalone management project: Manage resources, permissions, and billing on the project: Project Owner ( roles/owner ) Manage all application components on the project: App Hub Admin ( roles/apphub.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Change the application management boundary If you want to change the project that defines your single-project boundary, disable application management on the old project and enable it on the new one.
- To disable application management on a single project, follow these steps: Console In the Google Cloud console, use the project picker to select the management project.
- To enable application management on a single project, follow these steps: Console In the Google Cloud console, use the project picker to select your project.

### "Best practices for application management \_|\_ App Hub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/app-hub/docs/best-practices](https://docs.cloud.google.com/app-hub/docs/best-practices)
- Source ID: `site-docs-root-2`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To define the best application management boundary for your resource hierarchy and business needs and learn about product support for different resource structure patterns, see Choose your application setup model .
- Your choice of a single project, a folder, or a set of projects to define your application management boundary fundamentally shapes governance, policy enforcement, and resource discovery.
- Data model recommendations By understanding how to model your real-world systems as applications, services, and workloads within App Hub's framework , you can effectively use application management capabilities in your Google Cloud environment.
- The following model maps technical layers into a three-tier web application: Application: Create a single application, for example, my-web-app , to serve as the logical container for all the components that make up your web application.

