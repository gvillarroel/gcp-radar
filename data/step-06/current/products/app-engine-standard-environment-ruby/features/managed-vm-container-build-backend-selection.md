---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:41.411Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "Managed VM container build backend selection"
feature_slug: "managed-vm-container-build-backend-selection"
latest_feature_date: "2016-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed"
keywords:
  - "managed"
  - "vm"
  - "container"
  - "build"
  - "backend"
  - "selection"
  - "app"
  - "engine"
---

# Managed VM container build backend selection

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

App Engine Managed VMs now let developers choose between building deployment containers on a transient Compute Engine VM or using Cloud Build via gcloud app/use_cloud_build configuration.

## Extended Definition

App Engine Managed VMs now let developers choose between building deployment containers on a transient Compute Engine VM or using Cloud Build via gcloud app/use_cloud_build configuration.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build)
- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)

## Supporting Pages

### "Build custom runtimes \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Build and deploy your custom runtime After you configure your app.yaml and DOCKER file, you can build and deploy that container image to App Engine.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Build custom runtimes Stay organized with collections Save and categorize content based on your preferences.
- A base image is used to create the container and build your application.
- If your application fails to run, check this log. monitoring. text Information from the Docker container publishing data to Cloud Monitoring. shutdown.log text Information logged on shutdown. stdout text Standard output from your app. stderr text Standard error from your container. syslog text The VM syslog, outside of the Docker container.

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-root-2`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback How instances are managed Stay organized with collections Save and categorize content based on your preferences.
- Instances are the basic building blocks of App Engine, providing all the resources needed to successfully host your application.
- App Engine normally sends a STOP ( SIGTERM ) signal to the app container.
- Click the tab for instructions on using the tool of your choice: Console To stop or disable a version for your service: Go to the App Engine Versions page in the Google Cloud console: Go to Versions Select a version from the table, and click Stop . gcloud Run the following: gcloud app versions stop --service= SERVICE VERSION Replace: SERVICE with the name of your service.

### "How instances are managed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- Source ID: `site-docs-root`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback How instances are managed Stay organized with collections Save and categorize content based on your preferences.
- Click the tab for instructions on using the tool of your choice: Console To stop or disable a version for your service: Go to the App Engine Versions page in the Google Cloud console: Go to Versions Select a version from the table, and click Stop . gcloud Run the following: gcloud app versions stop --service= SERVICE VERSION Replace: SERVICE with the name of your service.
- Click the tab for instructions on using the tool of your choice: Console To delete a service: Go to the App Engine Services page in the Google Cloud console: Go to Services Select a service from the table, and click Delete . gcloud Run the following: gcloud app services delete SERVICE Replace: SERVICE with the name of your service.
- If you need to extend the default behavior of split health checks to your application, you can customize the app.yaml file to configure two types of health checks: Liveness checks detect that a VM instance and its container are running.

