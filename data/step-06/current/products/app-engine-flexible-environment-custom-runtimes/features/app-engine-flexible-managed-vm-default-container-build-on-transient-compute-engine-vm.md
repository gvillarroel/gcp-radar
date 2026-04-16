---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:21:29.633Z"
product_name: "App Engine flexible environment custom runtimes"
product_slug: "app-engine-flexible-environment-custom-runtimes"
feature_name: "App Engine flexible/Managed VM default container build on transient Compute Engine VM"
feature_slug: "app-engine-flexible-managed-vm-default-container-build-on-transient-compute-engine-vm"
latest_feature_date: "2016-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/flexible/quotas"
keywords:
  - "app"
  - "engine"
  - "flexible"
  - "managed"
  - "vm"
  - "default"
  - "container"
  - "build"
---

# App Engine flexible/Managed VM default container build on transient Compute Engine VM

Product: App Engine flexible environment custom runtimes
Coverage: MEDIUM

## Step 02 Summary

Managed VM and App Engine flexible deployments can build container images remotely on a transient Compute Engine VM with Docker when using gcloud preview app deploy.

## Extended Definition

Managed VM and App Engine flexible deployments can build container images remotely on a transient Compute Engine VM with Docker when using gcloud preview app deploy.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)

## Supporting Pages

### "Build custom runtimes \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Build custom runtimes Stay organized with collections Save and categorize content based on your preferences.
- Build and deploy your custom runtime After you configure your app.yaml and DOCKER file, you can build and deploy that container image to App Engine.
- If your application uses Cloud Build for compiling Docker images, the cloudbuild network hosts the Application Default Credentials enabling the associated Google Cloud services to automatically find your credentials.
- With a custom runtime, the flexible environment provides and manages your scaling, monitoring, and load balancing infrastructure for you, so you can focus on building your application.

### "Quotas and limits \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- Source ID: `site-docs-reference-2`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Resources Send feedback Quotas and limits Stay organized with collections Save and categorize content based on your preferences.
- For resources that are required to initiate a request, when the resource is depleted, App Engine by default returns an HTTP 403 or 503 error code for the request instead of calling a request handler.
- Quotas for the App Engine flexible environment When you deploy an application to the App Engine flexible environment, some Google Cloud resources are consumed.
- You create this free default bucket in the Google Cloud console App Engine settings page for your project.

### "How instances are managed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback How instances are managed Stay organized with collections Save and categorize content based on your preferences.
- If you need to extend the default behavior of split health checks to your application, you can customize the app.yaml file to configure two types of health checks: Liveness checks detect that a VM instance and its container are running.
- NTP with App Engine flexible environment The App Engine flexible environment has network time protocol (NTP) services which use Google NTP servers.
- By default, your app uses automatic scaling, which means App Engine will manage the number of idle instances.

