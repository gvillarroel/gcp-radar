---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:05:03.261Z"
product_name: "App Engine flexible environment Java"
product_slug: "app-engine-flexible-environment-java"
feature_name: "Runtime lifecycle stage filtering"
feature_slug: "runtime-lifecycle-stage-filtering"
latest_feature_date: "2024-07-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/lifecycle/runtime-lifecycle"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build"
keywords:
  - "runtime"
  - "lifecycle"
  - "stage"
  - "filtering"
  - "console"
  - "can"
  - "filter"
  - "app"
---

# Runtime lifecycle stage filtering

Product: App Engine flexible environment Java
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud console can filter App Engine versions by runtime lifecycle stage and show warning icons for lifecycle status.

## Extended Definition

The Google Cloud console can filter App Engine versions by runtime lifecycle stage and show warning icons for lifecycle status.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/lifecycle/runtime-lifecycle](https://docs.cloud.google.com/appengine/docs/flexible/lifecycle/runtime-lifecycle)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build)

## Supporting Pages

### "Runtime lifecycle \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/lifecycle/runtime-lifecycle](https://docs.cloud.google.com/appengine/docs/flexible/lifecycle/runtime-lifecycle)
- Source ID: `site-docs-reference-2`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Runtime lifecycle GA-level support End of Support Deprecated Decommissioned Creation & redeployment Yes No No No Project Configuration Updates Yes Yes No No Running existing workloads Yes Yes Yes No UI & CLI Warnings Yes Yes No No Language patches Automatic No automatic updates No automatic updates No automatic updates Patching APIs & SDKs Automatic No automatic updates No automatic updates No automatic updates Customer Support GA-level support No runtime support No runtime support No runtime support Notification period App Engine will begin issuing in-app notifications 90 days before the application reaches end of support.
- Home Documentation Application hosting App Engine Flexible environment Resources Send feedback Runtime lifecycle Stay organized with collections Save and categorize content based on your preferences.
- Google may make changes to any runtime's support schedule or lifecycle in accordance with the terms of your agreement for the use of Google Cloud platform services.
- Custom runtimes are not impacted by the runtime lifecycle policy.

### "Quickstart: Create a custom runtime app in the App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- OK Download the Hello World app Choose one of the following to download the Hello World sample app from GitHub, to your local machine: Clone the Hello World sample app from the following repository: git clone https://github.com/GoogleCloudPlatform/appengine-custom-runtimes-samples Download the sample as a .zip file and then extract it to a local directory.
- Before you begin Before running the sample app in this quickstart, you need to set up your environment and create a new Google Cloud project for App Engine: Create a new Google Cloud project by using the Google Cloud console: Open the Google Cloud console: Go to Projects Click Create Project and then name your new Google Cloud project.
- Navigate to the nginx directory where the sample code is located, for example: cd appengine-custom-runtimes-samples/nginx Running Hello World on your local machine You can test the sample app by downloading and installing Docker , and then running the Hello World container on your local machine.
- The app.yaml file must reside in the same directory as the Dockerfile file. runtime : custom env : flex The runtime: custom entry tells App Engine to look for a Dockerfile that will define your runtime's image and env: flex specifies that you are deploying to the flexible environment.

### "Build custom runtimes \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Provide an app.yaml file Your app.yaml configuration file must contain at least the following settings: runtime: custom env: flex For information about what else you can set for your app, see Configuring your App with app.yaml .
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Build custom runtimes Stay organized with collections Save and categorize content based on your preferences.
- With a custom runtime, the flexible environment provides and manages your scaling, monitoring, and load balancing infrastructure for you, so you can focus on building your application.
- Integrate your application with Google Cloud Applications running in custom runtimes can use the Google Cloud Client Libraries to access Google Cloud services.

