---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:03:36.809Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "Single-project application management setup model"
feature_slug: "single-project-application-management-setup-model"
latest_feature_date: "2025-12-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/set-up-app-hub"
  - "https://docs.cloud.google.com/app-hub/docs/best-practices"
  - "https://docs.cloud.google.com/app-hub/docs/application-centric-google-cloud"
keywords:
  - "setup"
  - "project"
  - "model"
  - "application"
  - "management"
  - "single"
  - "app"
  - "hub"
---

# Single-project application management setup model

Product: App Hub
Coverage: LOW

## Step 02 Summary

App Hub introduces a preview setup model that lets a standalone project be configured as the management project and attached as an application management boundary.

## Extended Definition

App Hub introduces a preview setup model that lets a standalone project be configured as the management project and attached as an application management boundary.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/set-up-app-hub](https://docs.cloud.google.com/app-hub/docs/set-up-app-hub)
- [https://docs.cloud.google.com/app-hub/docs/best-practices](https://docs.cloud.google.com/app-hub/docs/best-practices)
- [https://docs.cloud.google.com/app-hub/docs/application-centric-google-cloud](https://docs.cloud.google.com/app-hub/docs/application-centric-google-cloud)

## Supporting Pages

### Choose your application setup model \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/set-up-app-hub](https://docs.cloud.google.com/app-hub/docs/set-up-app-hub)
- Source ID: `site-docs-root`
- Final score: 290
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Compare setup models The following table provides a comparison between projects and folders for your application management boundary: Feature Single-project boundary ( Preview ) Folder-level boundary Host project (Legacy) Recommendation New users or small organizations where all application components reside in a single project.
- Setup guide Set up a single project Set up a folder Set up a host project (Legacy) Plan your resource hierarchy for application management Effective application management in App Hub builds directly upon your existing resource hierarchy in Google Cloud .
- Boundary type App Hub project type Application-centric Google Cloud support Single project ( Preview ) Host project App Hub Application Monitoring Management project App Hub Application Design Center Application Monitoring Folder level Management project App Hub Application Design Center Application Monitoring Cloud Hub Cost Explorer Gemini Cloud Assist Other Application-centric Google Cloud products Multiple projects Host project App Hub Application Monitoring What's next Set up a single project Set up a folder Set up a host project (Legacy) App Hub IAM roles and permissions App Hub overview Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- How applications align with the Google Cloud resource hierarchy Think of App Hub's data model as an overlay on the Google Cloud resource hierarchy: Permissions are inherited: IAM roles and permissions for applications are granted on the management project, and standard IAM inheritance rules from your resource hierarchy apply.

### "Best practices for application management \_|\_ App Hub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/app-hub/docs/best-practices](https://docs.cloud.google.com/app-hub/docs/best-practices)
- Source ID: `site-iam-reference`
- Final score: 244
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Data model recommendations By understanding how to model your real-world systems as applications, services, and workloads within App Hub's framework , you can effectively use application management capabilities in your Google Cloud environment.
- To define the best application management boundary for your resource hierarchy and business needs and learn about product support for different resource structure patterns, see Choose your application setup model .
- For example, consider the following model for existing resources running in Google Cloud: Application: Create or define a single application in App Hub named, for example, my-ecommerce-site .
- Your choice of a single project, a folder, or a set of projects to define your application management boundary fundamentally shapes governance, policy enforcement, and resource discovery.

### Application-centric Google Cloud \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/application-centric-google-cloud](https://docs.cloud.google.com/app-hub/docs/application-centric-google-cloud)
- Source ID: `site-iam-reference`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- What's next Learn more about App Hub Choose your application setup model Learn more about Application Design Center Learn more about Cloud Hub Prepare for application management Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Data handling in resource organization The management project stores not just high-level application attributes but the entire application model, including the following: App Hub data : The complete logical model of your applications, including the definitions of and relationships between applications, services, and workloads.
- To enable application management, you define an application management boundary, which is the collection of projects whose underlying Google Cloud resources App Hub can discover and register in applications.
- The management project from your boundary stores App Hub and Application Design Center data and enables the necessary APIs for application management.

