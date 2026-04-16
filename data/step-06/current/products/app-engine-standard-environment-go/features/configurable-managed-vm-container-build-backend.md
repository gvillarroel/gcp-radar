---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:52:24.758Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Configurable Managed VM container build backend"
feature_slug: "configurable-managed-vm-container-build-backend"
latest_feature_date: "2016-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/building-app"
keywords:
  - "configurable"
  - "managed"
  - "vm"
  - "container"
  - "build"
  - "backend"
  - "deployments"
  - "gained"
---

# Configurable Managed VM container build backend

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

Managed VM deployments gained configurable container construction options, allowing builds to use either the default transient Compute Engine VM path or Cloud Build via gcloud configuration.

## Extended Definition

Managed VM deployments gained configurable container construction options, allowing builds to use either the default transient Compute Engine VM path or Cloud Build via gcloud configuration.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)

## Supporting Pages

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback How instances are managed Stay organized with collections Save and categorize content based on your preferences.
- Note: For new projects you create after March 2025, App Engine sets the automatic scaling maximum instances default for standard environment deployments to 20.
- Your app does not need to respond to this event, but it can use this to perform any necessary clean-up actions before the container is shut down.
- Instances are the basic building blocks of App Engine, providing all the resources needed to successfully host your application.

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-2`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- When you deploy, Cloud Build builds a container image, and stores the image in the Artifact Registry .
- Instead, you see instance hours from the "B" classes reported as "Backend Instances", and instance hours from the "F" classes reported as "Frontend Instances".
- Yes Maximum number of backend instances per project and region measured over a 1 minute period Depends on selected region.
- There are separate free quotas for "F" and "B" instance classes (also known as "frontend" and "backend" instance classes).

### "Build a Go app on App Engine \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- Due to changes in the default behavior for how Cloud Build uses service accounts in new projects, and secure-by-default organization policy changes , you might need to grant additional roles to your deploying service account.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Build a Go app on App Engine Stay organized with collections Save and categorize content based on your preferences.
- After you build your app, you can read other tutorials to learn how to integrate with other Google Cloud services and add more features to your app.

