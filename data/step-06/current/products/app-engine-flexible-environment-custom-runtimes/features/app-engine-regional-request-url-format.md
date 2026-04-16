---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:21:29.609Z"
product_name: "App Engine flexible environment custom runtimes"
product_slug: "app-engine-flexible-environment-custom-runtimes"
feature_name: "App Engine regional request URL format"
feature_slug: "app-engine-regional-request-url-format"
latest_feature_date: "2020-02-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/flexible/go/create-app"
keywords:
  - "app"
  - "engine"
  - "regional"
  - "request"
  - "url"
  - "format"
  - "introduced"
  - "optional"
---

# App Engine regional request URL format

Product: App Engine flexible environment custom runtimes
Coverage: MEDIUM

## Step 02 Summary

App Engine introduced optional region-ID based application URLs to improve request routing, with a gradual rollout to existing projects.

## Extended Definition

App Engine introduced optional region-ID based application URLs to improve request routing, with a gradual rollout to existing projects.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/flexible/go/create-app](https://docs.cloud.google.com/appengine/docs/flexible/go/create-app)

## Supporting Pages

### "How requests are routed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Inconsistent metrics when App Engine flexible environment uses Cloud Load Balancing The App Engine flexible environment dashboard displays all metrics only for requests routed through a flexible environment managed backend.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback How requests are routed Stay organized with collections Save and categorize content based on your preferences.
- Routing with URLs Once your app is running in App Engine, you can use the following URL to send HTTP requests to the app: https:// PROJECT ID .
- For example, you can create a dispatch file to route mobile requests like https://simple-sample.uc.r.appspot.com/mobile/ to a mobile frontend, and route worker requests like https://simple-sample.uc.r.appspot.com/work/ to a static backend: dispatch: Send all mobile traffic to the mobile frontend. - url: " /mobile/ " service: mobile-frontend Send all work to the one static backend. - url: " /work/ " service: static-backend Deploying the dispatch file To deploy the dispatch file using gcloud , run the following command: gcloud app deploy dispatch.yaml Routing with Cloud Load Balancing Cloud Load Balancing is a separate product that enables advanced network configurations for all of your applications running on Google Cloud.

### "How requests are handled \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback How requests are handled Stay organized with collections Save and categorize content based on your preferences.
- However, this is bound by the following restrictions: App Engine reserves automatic scaling capacity for applications with low latency, where the application responds to requests in less than one second.
- The Google Cloud console Quota Details page also reports Secure Requests , Secure Incoming Bandwidth , and Secure Outgoing Bandwidth as separate values for informational purposes.
- OK Go Java Node.js PHP Python Ruby .NET Custom This document describes how your App Engine application receives requests and sends responses.

### "Quickstart: Create a Go app in the App Engine flexible environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/go/create-app](https://docs.cloud.google.com/appengine/docs/flexible/go/create-app)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To initialize the gcloud CLI, run the following command: gcloud init Required roles To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles: App Engine Admin ( roles/appengine.appAdmin ) on the project Cloud Build Editor ( roles/cloudbuild.builds.editor ) on the project Storage Object Admin ( roles/storage.objectAdmin ) on the project Logs Viewer ( roles/logging.viewer ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the service account Ask your administrator to grant the following roles for the App Engine default service account: Artifact Registry Reader ( roles/artifactregistry.reader ) on the project Cloud Build Service Account ( roles/cloudbuild.builds.builder ) on the project Storage Object Viewer ( roles/storage.objectViewer ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Learn about the App Engine flexible environment Here are some topics to help continue your learning about App Engine: An overview of App Engine Request routing Request handling Managing instances Hello World code review Hello World is the simplest possible App Engine app, as it contains only one service, has only one version, and all of the code is located within the app's root directory.
- Run the following command to install the gcloud component that includes the App Engine extension for Go: gcloud components install app - engine - go App Engine locations App Engine is regional , which means the infrastructure that runs your apps is located in a specific region, and Google manages it so that it is available redundantly across all of the zones within that region .
- For more information, see: https://docs.cloud.google.com/appengine/docs/flexible/go/configuring-your-app-with-app-yaml manual scaling : instances : 1 resources : cpu : 1 memory gb : 0.5 disk size gb : 10 For more information on how the Go runtime works, see The Go runtime .

