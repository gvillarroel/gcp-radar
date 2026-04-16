---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:50:17.328Z"
product_name: "App Engine flexible environment Python"
product_slug: "app-engine-flexible-environment-python"
feature_name: "Container build backend option for App Engine flexible deployments"
feature_slug: "container-build-backend-option-for-app-engine-flexible-deployments"
latest_feature_date: "2016-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build"
  - "https://docs.cloud.google.com/appengine/docs/flexible/known-issues"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app"
keywords:
  - "container"
  - "build"
  - "backend"
  - "option"
  - "app"
  - "engine"
  - "flexible"
  - "deployments"
---

# Container build backend option for App Engine flexible deployments

Product: App Engine flexible environment Python
Coverage: MEDIUM

## Step 02 Summary

App Engine flexible (Managed VMs) added a beta option to build deployment containers using Cloud Build via app/use_cloud_build, in addition to the default Compute Engine VM Docker build path.

## Extended Definition

App Engine flexible (Managed VMs) added a beta option to build deployment containers using Cloud Build via app/use_cloud_build, in addition to the default Compute Engine VM Docker build path.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build)
- [https://docs.cloud.google.com/appengine/docs/flexible/known-issues](https://docs.cloud.google.com/appengine/docs/flexible/known-issues)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)

## Supporting Pages

### "Build custom runtimes \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build)
- Source ID: `site-docs-reference-2`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Build custom runtimes Stay organized with collections Save and categorize content based on your preferences.
- Build and deploy your custom runtime After you configure your app.yaml and DOCKER file, you can build and deploy that container image to App Engine.
- With a custom runtime, the flexible environment provides and manages your scaling, monitoring, and load balancing infrastructure for you, so you can focus on building your application.
- When shutting down an instance, flexible environment normally sends a STOP ( SIGTERM ) signal to the app container.

### Known issues in the App Engine flexible environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/known-issues](https://docs.cloud.google.com/appengine/docs/flexible/known-issues)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Inconsistent Cloud Load Balancing metrics The App Engine flexible environment dashboard displays all metrics only for requests routed through a flexible environment-managed backend.
- Some events that may affect App Engine flexible environment minimum number of instances are: Rolling out updates to flexible environment instances Zonal failure (Stockout issues, such as when your region is at capacity for your selected CPU, etc.) App Engine flexible environment uses 3 zones to distribute your instances and in such a configuration, we recommend provisioning 50% more instances than required.
- Home Documentation Application hosting App Engine Flexible environment Resources Send feedback Known issues in the App Engine flexible environment Stay organized with collections Save and categorize content based on your preferences.
- After you deploy a new version of an existing service in the App Engine flexible environment with gcloud app deploy , the "Count/sec" metric shown in the "Summary" graph of the App Engine dashboard may decrease significantly.

### "Quickstart: Create a custom runtime app in the App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)
- Source ID: `site-docs-reference-2`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Enable billing in your new Google Cloud project by creating a new billing account or setting an existing one: Go to Billing Download and install the Google Cloud CLI and then initialize the gcloud CLI: Download the SDK Run the following gcloud command to create an App Engine application and specify in which geographical region that you want your app to run: gcloud app create Due to changes in the default behavior for how Cloud Build uses service accounts in new projects, and secure-by-default organization policy changes , you might need to grant additional roles to your deploying service account.
- Navigate to the nginx directory where the sample code is located, for example: cd appengine-custom-runtimes-samples/nginx Running Hello World on your local machine You can test the sample app by downloading and installing Docker , and then running the Hello World container on your local machine.
- The app.yaml file must reside in the same directory as the Dockerfile file. runtime : custom env : flex The runtime: custom entry tells App Engine to look for a Dockerfile that will define your runtime's image and env: flex specifies that you are deploying to the flexible environment.
- Deploying Hello World to App Engine When you are ready to deploy the sample app to App Engine, perform the following steps: From the directory where your app.yaml and Dockerfile are located, run the following command: gcloud app deploy Learn about the optional flags .

