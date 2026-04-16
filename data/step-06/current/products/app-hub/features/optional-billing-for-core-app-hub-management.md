---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:05:19.017Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "Optional billing for core App Hub management"
feature_slug: "optional-billing-for-core-app-hub-management"
latest_feature_date: "2025-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/best-practices"
  - "https://docs.cloud.google.com/app-hub/docs/enabled-apis"
  - "https://docs.cloud.google.com/app-hub/docs/manage-applications"
keywords:
  - "optional"
  - "billing"
  - "core"
  - "application"
  - "management"
---

# Optional billing for core App Hub management

Product: App Hub
Coverage: MEDIUM

## Step 02 Summary

Core App Hub application management can be used without a billing account, with billing required only for additional application-centric features.

## Extended Definition

Core App Hub application management can be used without a billing account, with billing required only for additional application-centric features.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/best-practices](https://docs.cloud.google.com/app-hub/docs/best-practices)
- [https://docs.cloud.google.com/app-hub/docs/enabled-apis](https://docs.cloud.google.com/app-hub/docs/enabled-apis)
- [https://docs.cloud.google.com/app-hub/docs/manage-applications](https://docs.cloud.google.com/app-hub/docs/manage-applications)

## Supporting Pages

### "Best practices for application management \_|\_ App Hub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/app-hub/docs/best-practices](https://docs.cloud.google.com/app-hub/docs/best-practices)
- Source ID: `site-docs-root-2`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Core principles of application management Adhering to the following core principles helps you maximize the value you get from managing your Google Cloud infrastructure in an application-centric way: Define clear boundaries: Set the application management boundary in a way that is logical for your operations, monitoring, governance, and troubleshooting.
- As you define your applications, it's important to apply the core principles of application management , such as using attributes to establish clear ownership and metadata.
- Data model recommendations By understanding how to model your real-world systems as applications, services, and workloads within App Hub's framework , you can effectively use application management capabilities in your Google Cloud environment.
- Align application management boundaries with team structures Represent your organizational structure, specifically the teams responsible for application development and operation, within your application management boundaries .

### Enable APIs on the management project \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/enabled-apis](https://docs.cloud.google.com/app-hub/docs/enabled-apis)
- Source ID: `site-docs-root-2`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- API Required or recommended More information App Optimize API ( appoptimize.googleapis.com ) Optimize costs in Cost Explorer and Cloud Hub Required Retrieve data from Cloud Billing and Cloud Monitoring Recommender API ( recommender.googleapis.com ) Generate recommendations and insights to help you optimize your Google Cloud resources Required Recommender pricing VPC Service Controls Service Health API ( servicehealth.googleapis.com ) Identify Google Cloud service disruptions relevant to your applications Required Personalized Service Health pricing VPC Service Controls Security and compliance APIs Security Command Center is a risk management solution that helps security professionals to prevent, detect, and respond to security issues.
- You can perform the following tasks at no charge and without linking a billing account to the management project: Use App Hub to organize your existing resources into applications.
- For example, the following features require a linked billing account for the management project: Use App Design Center to deploy applications from the Google Cloud console.
- To take advantage of other application-centric features, you must link a billing account to your management project.

### Manage App Hub applications \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/manage-applications](https://docs.cloud.google.com/app-hub/docs/manage-applications)
- Source ID: `site-docs-root-2`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to manage applications in App Hub, ask your administrator to grant you the following IAM roles on the management project that defines your application management boundary : Update and delete applications: App Hub Editor ( roles/apphub.editor ) View applications: App Hub Viewer ( roles/apphub.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Filter the list of applications based on attributes, using the --filter flag : gcloud apphub applications list \ --project = PROJECT ID \ --location = LOCATION \ --filter = FILTER EXPRESSION \ Replace the following: PROJECT ID : the ID of your management project.
- Display a list of your applications using one of the following options: List all applications: gcloud apphub applications list \ --project = PROJECT ID \ --location = LOCATION Replace the following: PROJECT ID : the ID of your management project.
- View application details Follow these steps to view the detailed information of a specific application, including its attributes and metadata: Console In the Google Cloud console, use the project picker to select your management project.

