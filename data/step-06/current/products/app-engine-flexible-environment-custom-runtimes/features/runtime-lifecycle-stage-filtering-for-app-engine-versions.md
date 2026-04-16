---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:21:29.602Z"
product_name: "App Engine flexible environment custom runtimes"
product_slug: "app-engine-flexible-environment-custom-runtimes"
feature_name: "Runtime lifecycle-stage filtering for App Engine versions"
feature_slug: "runtime-lifecycle-stage-filtering-for-app-engine-versions"
latest_feature_date: "2024-07-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/lifecycle/runtime-lifecycle"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app"
keywords:
  - "runtime"
  - "lifecycle"
  - "stage"
  - "filtering"
  - "app"
  - "engine"
  - "versions"
  - "console"
---

# Runtime lifecycle-stage filtering for App Engine versions

Product: App Engine flexible environment custom runtimes
Coverage: MEDIUM

## Step 02 Summary

The App Engine console now allows filtering versions by runtime lifecycle stage and shows warning icons for versions nearing or past end-of-support status.

## Extended Definition

The App Engine console now allows filtering versions by runtime lifecycle stage and shows warning icons for versions nearing or past end-of-support status.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/lifecycle/runtime-lifecycle](https://docs.cloud.google.com/appengine/docs/flexible/lifecycle/runtime-lifecycle)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)

## Supporting Pages

### "Runtime lifecycle \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/lifecycle/runtime-lifecycle](https://docs.cloud.google.com/appengine/docs/flexible/lifecycle/runtime-lifecycle)
- Source ID: `site-docs-reference-2`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Runtime lifecycle GA-level support End of Support Deprecated Decommissioned Creation & redeployment Yes No No No Project Configuration Updates Yes Yes No No Running existing workloads Yes Yes Yes No UI & CLI Warnings Yes Yes No No Language patches Automatic No automatic updates No automatic updates No automatic updates Patching APIs & SDKs Automatic No automatic updates No automatic updates No automatic updates Customer Support GA-level support No runtime support No runtime support No runtime support Notification period App Engine will begin issuing in-app notifications 90 days before the application reaches end of support.
- Home Documentation Application hosting App Engine Flexible environment Resources Send feedback Runtime lifecycle Stay organized with collections Save and categorize content based on your preferences.
- When a language version is no longer actively maintained by the respective community, App Engine will also stop providing maintenance and support for that language runtime.
- Google may make changes to any runtime's support schedule or lifecycle in accordance with the terms of your agreement for the use of Google Cloud platform services.

### "The .NET runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the app.yaml file looks as follows when specifying .NET 10 on Ubuntu 24: runtime : aspnetcore env : flex runtime config : runtime version : "10" operating system : "ubuntu24" Previous runtime versions Warning: .NET version 3 and earlier have reached end of support.
- The .NET runtime is the software stack responsible for installing your application code and dependencies, and then running that application in the flexible environment. .NET versions .NET 10 is built using buildpacks .
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The .NET runtime Stay organized with collections Save and categorize content based on your preferences.
- For the full list of supported .NET versions, and their corresponding Ubuntu version, see the Runtime support schedule .

### "Quickstart: Create a custom runtime app in the App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- OK Download the Hello World app Choose one of the following to download the Hello World sample app from GitHub, to your local machine: Clone the Hello World sample app from the following repository: git clone https://github.com/GoogleCloudPlatform/appengine-custom-runtimes-samples Download the sample as a .zip file and then extract it to a local directory.
- Before you begin Before running the sample app in this quickstart, you need to set up your environment and create a new Google Cloud project for App Engine: Create a new Google Cloud project by using the Google Cloud console: Open the Google Cloud console: Go to Projects Click Create Project and then name your new Google Cloud project.
- Navigate to the nginx directory where the sample code is located, for example: cd appengine-custom-runtimes-samples/nginx Running Hello World on your local machine You can test the sample app by downloading and installing Docker , and then running the Hello World container on your local machine.
- The app.yaml file must reside in the same directory as the Dockerfile file. runtime : custom env : flex The runtime: custom entry tells App Engine to look for a Dockerfile that will define your runtime's image and env: flex specifies that you are deploying to the flexible environment.

