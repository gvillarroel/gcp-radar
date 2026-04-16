---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:34:18.710Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Cloud Build deployment for Managed VMs"
feature_slug: "cloud-build-deployment-for-managed-vms"
latest_feature_date: "2016-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/standard/access-control"
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app"
keywords:
  - "build"
  - "deployment"
  - "managed"
  - "vms"
  - "deployments"
  - "can"
  - "use"
  - "alternative"
---

# Cloud Build deployment for Managed VMs

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

Managed VMs deployments can use Cloud Build as an alternative remote container image build mechanism for app deployment.

## Extended Definition

Managed VMs deployments can use Cloud Build as an alternative remote container image build mechanism for app deployment.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app](https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app)

## Supporting Pages

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Note: For new projects you create after March 2025, App Engine sets the automatic scaling maximum instances default for standard environment deployments to 20.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback How instances are managed Stay organized with collections Save and categorize content based on your preferences.
- Instances are the basic building blocks of App Engine, providing all the resources needed to successfully host your application.

### "Build a Node.js app on App Engine \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app](https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app)
- Source ID: `site-docs-reference-2`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Build a Node.js app on App Engine Stay organized with collections Save and categorize content based on your preferences.
- Getting started Learn how to build a simple web app and deploy it on App Engine: Create a Google Cloud project Learn how to create a Google Cloud project to hold your App Engine app's resources.
- After you build your app, you can use the other tutorials to learn how to integrate with other Google Cloud services and add more features to your app.
- Each task includes steps that build up to a simple web app that allows users to submit messages to the server.

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Next steps If you're using the service account in your automated build and deployment processes, authorize the gcloud CLI with a service account .
- Use service accounts in your automated build, test, and deployment processes, especially if multiple developers can run these processes.
- A user account can be used to authenticate from the following tools: Google Cloud console Google Cloud CLI IDEs and build tools that use the gcloud CLI to test and deploy App Engine apps A service account , which is intended to represent an application or a process instead of a person.
- A service account can be used to authenticate from the following tools: gcloud CLI IDEs and build tools that use gcloud CLI tools to test and deploy App Engine apps Creating a user account Open the IAM page in the Google Cloud console.

