---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:41.414Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "App Engine Ruby runtime/library version 1.9.26"
feature_slug: "app-engine-ruby-runtime-library-version-1-9-26"
latest_feature_date: "2015-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime"
keywords:
  - "app"
  - "engine"
  - "ruby"
  - "runtime"
  - "library"
  - "version"
  - "26"
  - "environment"
---

# App Engine Ruby runtime/library version 1.9.26

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

The App Engine Ruby environment was updated to version 1.9.26.

## Extended Definition

The App Engine Ruby environment was updated to version 1.9.26.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)
- [https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime](https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime)

## Supporting Pages

### "Quickstart: Create a custom runtime app in the App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The app.yaml file must reside in the same directory as the Dockerfile file. runtime : custom env : flex The runtime: custom entry tells App Engine to look for a Dockerfile that will define your runtime's image and env: flex specifies that you are deploying to the flexible environment.
- Create a custom runtime app in the App Engine flexible environment Region ID The REGION ID is an abbreviated code that Google assigns based on the region you select when you create your app.
- OK Download the Hello World app Choose one of the following to download the Hello World sample app from GitHub, to your local machine: Clone the Hello World sample app from the following repository: git clone https://github.com/GoogleCloudPlatform/appengine-custom-runtimes-samples Download the sample as a .zip file and then extract it to a local directory.
- Before you begin Before running the sample app in this quickstart, you need to set up your environment and create a new Google Cloud project for App Engine: Create a new Google Cloud project by using the Google Cloud console: Open the Google Cloud console: Go to Projects Click Create Project and then name your new Google Cloud project.

### "Ruby Runtime Environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime](https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime)
- Source ID: `site-docs-root-2`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Specify the Ruby runtime for App Engine in the standard environment in the app.yaml file: runtime : ruby VERSION Where VERSION is the Ruby MAJOR and MINOR version numbers.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Ruby Runtime Environment Stay organized with collections Save and categorize content based on your preferences.
- This document explains the details of the Ruby runtime environment, including what headers are provided to your code and other information to successfully deploy your application on App Engine.
- The Ruby runtime allows you to run your app in App Engine in a sandbox environment.

### "The .NET runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The .NET runtime is the software stack responsible for installing your application code and dependencies, and then running that application in the flexible environment. .NET versions .NET 10 is built using buildpacks .
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The .NET runtime Stay organized with collections Save and categorize content based on your preferences.
- By default, App Engine uses the latest available LTS .NET version if the runtime version setting is not specified.
- To deploy your .NET app, run the following commands from the root directory where your app resides: dotnet restore dotnet publish -c Release gcloud app deploy Support for other .NET runtimes If you need to use a .NET version that isn't supported , you can create a custom runtime and select a valid base image with the .NET version you need.

