---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:41.391Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "App Engine Ruby 3.2 runtime"
feature_slug: "app-engine-ruby-3-2-runtime"
latest_feature_date: "2023-04-14"
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
  - "standard"
  - "environment"
  - "generally"
  - "available"
---

# App Engine Ruby 3.2 runtime

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

The Ruby 3.2 runtime for App Engine standard environment is generally available; The Ruby 3.2 runtime for App Engine standard environment is available in preview.

## Extended Definition

The Ruby 3.2 runtime for App Engine standard environment is generally available; The Ruby 3.2 runtime for App Engine standard environment is available in preview.

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
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- The app.yaml file must reside in the same directory as the Dockerfile file. runtime : custom env : flex The runtime: custom entry tells App Engine to look for a Dockerfile that will define your runtime's image and env: flex specifies that you are deploying to the flexible environment.
- You can generally select the region nearest to your app's users, but you should consider the locations where App Engine is available as well as the locations of the other Google Cloud products and services that your app uses.
- Create a custom runtime app in the App Engine flexible environment Region ID The REGION ID is an abbreviated code that Google assigns based on the region you select when you create your app.
- OK Download the Hello World app Choose one of the following to download the Hello World sample app from GitHub, to your local machine: Clone the Hello World sample app from the following repository: git clone https://github.com/GoogleCloudPlatform/appengine-custom-runtimes-samples Download the sample as a .zip file and then extract it to a local directory.

### "Ruby Runtime Environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime](https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime)
- Source ID: `site-docs-root-2`
- Final score: 85
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Ruby Runtime Environment Stay organized with collections Save and categorize content based on your preferences.
- Specify the Ruby runtime for App Engine in the standard environment in the app.yaml file: runtime : ruby VERSION Where VERSION is the Ruby MAJOR and MINOR version numbers.
- This document explains the details of the Ruby runtime environment, including what headers are provided to your code and other information to successfully deploy your application on App Engine.
- The Ruby runtime allows you to run your app in App Engine in a sandbox environment.

### "The .NET runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime)
- Source ID: `site-docs-root`
- Final score: 85
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The .NET runtime Stay organized with collections Save and categorize content based on your preferences.
- By default, App Engine uses the latest available LTS .NET version if the runtime version setting is not specified.
- The .NET runtime is the software stack responsible for installing your application code and dependencies, and then running that application in the flexible environment. .NET versions .NET 10 is built using buildpacks .
- Environment variables The following environment variables are set by the runtime environment: Environment variable Description GAE INSTANCE The name of the current instance.

