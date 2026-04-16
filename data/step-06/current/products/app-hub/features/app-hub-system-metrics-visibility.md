---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:05:19.046Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "App Hub system metrics visibility"
feature_slug: "app-hub-system-metrics-visibility"
latest_feature_date: "2024-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/quotas"
  - "https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-host-project"
  - "https://docs.cloud.google.com/app-hub/docs/best-practices"
keywords:
  - "visibility"
  - "system"
  - "metrics"
  - "allows"
  - "users"
---

# App Hub system metrics visibility

Product: App Hub
Coverage: MEDIUM

## Step 02 Summary

App Hub now allows users to view system metrics for applications in the App Hub interface and Metrics Explorer.

## Extended Definition

App Hub now allows users to view system metrics for applications in the App Hub interface and Metrics Explorer.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/quotas](https://docs.cloud.google.com/app-hub/docs/quotas)
- [https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-host-project](https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-host-project)
- [https://docs.cloud.google.com/app-hub/docs/best-practices](https://docs.cloud.google.com/app-hub/docs/best-practices)

## Supporting Pages

### Quotas and limits \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/quotas](https://docs.cloud.google.com/app-hub/docs/quotas)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Cloud Quotas system does the following: Monitors your consumption of Google Cloud products and services Restricts your consumption of those resources Provides a way to request changes to the quota value and automate quota adjustments In most cases, when you attempt to consume more of a resource than its quota allows, the system blocks access to the resource, and the task that you're trying to perform fails.
- 1200 Globally per host project or management project Observability quotas The following quotas apply to Google Cloud Observability features when used with App Hub: Resource Description Quota Limit Scope Projects per metrics scope The number of projects that can be included in a metrics scope for application monitoring.
- If the number of projects in your folder exceeds the metrics scope quota, some projects might not be included, and you might not see all of your application's metrics.
- 375 3500 Per metrics scope Note: When you use an app-enabled folder, App Hub attempts to synchronize the projects in the folder with the metrics scope.

### "Best practices for application management \_|\_ App Hub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/app-hub/docs/best-practices](https://docs.cloud.google.com/app-hub/docs/best-practices)
- Source ID: `site-docs-root-2`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Register the following resources to the application to create a logical grouping of components that jointly delivers the business function of your online store: Microservices as workloads: Register the individual microservices that make up the ecommerce system, such as Ad , Cart , and Checkout , as workloads within the application.
- By grouping all the microservices into a single application, you gain the following benefits: Comprehensive visibility: You can monitor the health and performance of the entire ecommerce user journey, from the ad functionality to the checkout functionality, in a single, unified view.
- Data model recommendations By understanding how to model your real-world systems as applications, services, and workloads within App Hub's framework , you can effectively use application management capabilities in your Google Cloud environment.
- Use global applications strategically: Opt for a global application only when your system's components are necessarily spread across multiple regions or involve global Google Cloud resources, like a global external Application Load Balancer.

### Set up a host project (Legacy) \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-host-project](https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-host-project)
- Source ID: `site-docs-root-2`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optional: Configure the metrics scope To view system metrics for applications within your host project in Cloud Monitoring, add the attached service projects to the host project's metrics scope .
- In each of the App Hub service projects you attached to the host project, grant the same roles to the same users: gcloud projects add-iam-policy-binding SERVICE PROJECT ID \ --member = 'user: EMAIL ADDRESS ' \ --role = ' ROLE NAME ' Replace SERVICE PROJECT ID with the ID of the service project you are granting access to.
- In each of the App Hub service projects you attached to the host project, repeat the previous process to grant the same roles to the same users. gcloud Find the project ID of each of the Google Cloud projects that you configured as host and service projects.
- Assign App Hub roles and permissions To grant appropriate App Hub roles and permissions to App Hub users in the host project and service projects, follow these steps: Console In the Google Cloud console, use the project picker to select the host project.

