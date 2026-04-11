---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:44:58.739Z"
product_name: "App Engine flexible environment PHP"
product_slug: "app-engine-flexible-environment-php"
feature_name: "Cloud Build container build option for App Engine deployment"
feature_slug: "cloud-build-container-build-option-for-app-engine-deployment"
latest_feature_date: "2016-02-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/go/create-app"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build"
keywords:
  - "beta use_cloud_build option"
  - "Cloud Build integration"
  - "deployment container build"
  - "Cloud Build container build"
  - "app/use_cloud_build"
  - "use_cloud_build"
  - "flexible environment deployment"
  - "Cloud Build"
---

# Cloud Build container build option for App Engine deployment

Product: App Engine flexible environment PHP
Coverage: LOW

## Step 02 Summary

App Engine flexible environment gained a beta option to build deployment containers through Cloud Build via the `app/use_cloud_build` setting.

## Extended Definition

App Engine flexible environment gained a beta option to build deployment containers through Cloud Build via the `app/use_cloud_build` setting.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/go/create-app](https://docs.cloud.google.com/appengine/docs/flexible/go/create-app)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build)

## Supporting Pages

### "Quickstart: Create a Go app in the App Engine flexible environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/go/create-app](https://docs.cloud.google.com/appengine/docs/flexible/go/create-app)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- To initialize the gcloud CLI, run the following command: gcloud init Required roles To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles: App Engine Admin ( roles/appengine.appAdmin ) on the project Cloud Build Editor ( roles/cloudbuild.builds.editor ) on the project Storage Object Admin ( roles/storage.objectAdmin ) on the project Logs Viewer ( roles/logging.viewer ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the service account Ask your administrator to grant the following roles for the App Engine default service account: Artifact Registry Reader ( roles/artifactregistry.reader ) on the project Cloud Build Service Account ( roles/cloudbuild.builds.builder ) on the project Storage Object Viewer ( roles/storage.objectViewer ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .

### "Build custom runtimes \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- For example, you can use Cloud Build to separately build your images and then store those images in Artifact Registry.
- If your application uses Cloud Build for compiling Docker images, the cloudbuild network hosts the Application Default Credentials enabling the associated Google Cloud services to automatically find your credentials.

