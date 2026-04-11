---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:03:36.814Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "Automatic API enablement on management projects"
feature_slug: "automatic-api-enablement-on-management-projects"
latest_feature_date: "2025-11-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/enabled-apis"
  - "https://docs.cloud.google.com/app-hub/docs/application-centric-google-cloud"
  - "https://docs.cloud.google.com/app-hub/docs/key-concepts"
keywords:
  - "enablement"
  - "projects"
  - "api"
  - "automatic"
  - "core"
  - "on"
  - "management"
  - "and"
---

# Automatic API enablement on management projects

Product: App Hub
Coverage: LOW

## Step 02 Summary

Core and recommended APIs required for App Hub functionality are automatically enabled on the management project.

## Extended Definition

Core and recommended APIs required for App Hub functionality are automatically enabled on the management project.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/enabled-apis](https://docs.cloud.google.com/app-hub/docs/enabled-apis)
- [https://docs.cloud.google.com/app-hub/docs/application-centric-google-cloud](https://docs.cloud.google.com/app-hub/docs/application-centric-google-cloud)
- [https://docs.cloud.google.com/app-hub/docs/key-concepts](https://docs.cloud.google.com/app-hub/docs/key-concepts)

## Supporting Pages

### Enable APIs on the management project \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/enabled-apis](https://docs.cloud.google.com/app-hub/docs/enabled-apis)
- Source ID: `site-iam-reference`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- API Required or recommended More information App Hub API ( apphub.googleapis.com ) Organize existing resources into applications Required App Hub pricing VPC Service Controls App Design Center API ( designcenter.googleapis.com ) Design, deploy, and update applications Required App Design Center pricing Cloud Asset API ( cloudasset.googleapis.com ) Manage the global metadata inventory of Google Cloud resources and other assets Required Cloud Asset Inventory pricing VPC Service Controls Cloud Resource Manager API ( cloudresourcemanager.googleapis.com ) Manage container resources such as organizations, folders, and projects Required Cloud Resource Manager API pricing VPC Service Controls Infrastructure Manager API ( config.googleapis.com ) Automate deployment and management of Google Cloud infrastructure resources Required Infra Manager pricing VPC Service Controls Cloud Build API ( cloudbuild.googleapis.com ) Run builds for Infra Manager deployments Required Cloud Build pricing VPC Service Controls Cloud Storage API ( storage.googleapis.com ) Store data for Google Cloud services, including App Design Center and Cloud Logging Required Cloud Storage pricing VPC Service Controls Google Cloud Observability APIs The following APIs provide capabilities for observability features.
- API Required or recommended More information App Optimize API ( appoptimize.googleapis.com ) Optimize costs in Cost Explorer and Cloud Hub Required Retrieve data from Cloud Billing and Cloud Monitoring Recommender API ( recommender.googleapis.com ) Generate recommendations and insights to help you optimize your Google Cloud resources Required Recommender pricing VPC Service Controls Service Health API ( servicehealth.googleapis.com ) Identify Google Cloud service disruptions relevant to your applications Required Personalized Service Health pricing VPC Service Controls Security and compliance APIs Security Command Center is a risk management solution that helps security professionals to prevent, detect, and respond to security issues.
- API Required or recommended More information Security Command Center API ( securitycenter.googleapis.com ) Recommended Security Command Center pricing VPC Service Controls Developer tooling APIs Developer Connect connects your application management workflows with your development lifecycle.
- Home Documentation Application development App Hub Guides Send feedback Enable APIs on the management project Stay organized with collections Save and categorize content based on your preferences.

### Application-centric Google Cloud \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/application-centric-google-cloud](https://docs.cloud.google.com/app-hub/docs/application-centric-google-cloud)
- Source ID: `site-iam-reference`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Benefits of application-centric management Organizing Google Cloud resources and registering them in applications as services and workloads offers an alternative to tracking individual resources across various projects or products.
- To enable application management, you define an application management boundary, which is the collection of projects whose underlying Google Cloud resources App Hub can discover and register in applications.
- This document provides a conceptual overview of Application-centric Google Cloud, its core products, and how they work together to streamline the entire application management lifecycle.
- In this case, two folders ( Business Unit 1 and Business Unit 2 ) are attached to their own management projects, defining separate application management boundaries.

### Key concepts \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/key-concepts](https://docs.cloud.google.com/app-hub/docs/key-concepts)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- In this legacy model, the host project is equivalent to the management project , and the collection of the host project and service projects serves as an example of a multiple-project application management boundary .
- Application management boundary (also, boundary) The collection of one or more Google Cloud projects or folders whose underlying resources App Hub can discover and you can group in applications .
- To make a project a host project, you typically enable the App Hub API on this specific project and then grant it permissions to access other projects.
- In this model, the combination of the host project and all of its connected service projects forms a multiple-project application management boundary .

