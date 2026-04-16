---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:50:17.316Z"
product_name: "App Engine flexible environment Python"
product_slug: "app-engine-flexible-environment-python"
feature_name: "App Engine Python 3.5 runtime"
feature_slug: "app-engine-python-3-5-runtime"
latest_feature_date: "2018-02-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/lifecycle/runtime-lifecycle"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app"
keywords:
  - "app"
  - "engine"
  - "python"
  - "runtime"
  - "was"
  - "updated"
  - "version"
---

# App Engine Python 3.5 runtime

Product: App Engine flexible environment Python
Coverage: MEDIUM

## Step 02 Summary

The App Engine Python 3.5 runtime was updated to version 3.5.5.

## Extended Definition

The App Engine Python 3.5 runtime was updated to version 3.5.5.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/lifecycle/runtime-lifecycle](https://docs.cloud.google.com/appengine/docs/flexible/lifecycle/runtime-lifecycle)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)

## Supporting Pages

### "Runtime lifecycle \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/lifecycle/runtime-lifecycle](https://docs.cloud.google.com/appengine/docs/flexible/lifecycle/runtime-lifecycle)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When a language version is no longer actively maintained by the respective community, App Engine will also stop providing maintenance and support for that language runtime.
- The runtimes are identified by their language version, for example, Java 17, Python 3.10, and so forth.
- Runtime lifecycle GA-level support End of Support Deprecated Decommissioned Creation & redeployment Yes No No No Project Configuration Updates Yes Yes No No Running existing workloads Yes Yes Yes No UI & CLI Warnings Yes Yes No No Language patches Automatic No automatic updates No automatic updates No automatic updates Patching APIs & SDKs Automatic No automatic updates No automatic updates No automatic updates Customer Support GA-level support No runtime support No runtime support No runtime support Notification period App Engine will begin issuing in-app notifications 90 days before the application reaches end of support.
- Issues arising from the use of an unsupported runtime will not be eligible for technical support We strongly encourage you to upgrade your application to a supported runtime version as soon as it becomes available to continue receiving security updates and being eligible for technical support.

### "The .NET runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime)
- Source ID: `site-docs-reference-2`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- By default, App Engine uses the latest available LTS .NET version if the runtime version setting is not specified.
- To deploy your .NET app, run the following commands from the root directory where your app resides: dotnet restore dotnet publish -c Release gcloud app deploy Support for other .NET runtimes If you need to use a .NET version that isn't supported , you can create a custom runtime and select a valid base image with the .NET version you need.
- For example, the app.yaml file looks as follows when specifying .NET 10 on Ubuntu 24: runtime : aspnetcore env : flex runtime config : runtime version : "10" operating system : "ubuntu24" Previous runtime versions Warning: .NET version 3 and earlier have reached end of support.
- Specify the operating system setting in your app.yaml file: runtime : aspnetcore env : flex runtime config : operating system : "ubuntu24" Optionally, you can specify a runtime version by including the runtime version setting in your app.yaml file.

### "Quickstart: Create a custom runtime app in the App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)
- Source ID: `site-docs-reference-2`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- OK Download the Hello World app Choose one of the following to download the Hello World sample app from GitHub, to your local machine: Clone the Hello World sample app from the following repository: git clone https://github.com/GoogleCloudPlatform/appengine-custom-runtimes-samples Download the sample as a .zip file and then extract it to a local directory.
- Navigate to the nginx directory where the sample code is located, for example: cd appengine-custom-runtimes-samples/nginx Running Hello World on your local machine You can test the sample app by downloading and installing Docker , and then running the Hello World container on your local machine.
- The app.yaml file must reside in the same directory as the Dockerfile file. runtime : custom env : flex The runtime: custom entry tells App Engine to look for a Dockerfile that will define your runtime's image and env: flex specifies that you are deploying to the flexible environment.
- Create a custom runtime app in the App Engine flexible environment Region ID The REGION ID is an abbreviated code that Google assigns based on the region you select when you create your app.

