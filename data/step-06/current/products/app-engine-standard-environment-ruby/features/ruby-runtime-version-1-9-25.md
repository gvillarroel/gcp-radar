---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:41.417Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "Ruby runtime version 1.9.25"
feature_slug: "ruby-runtime-version-1-9-25"
latest_feature_date: "2015-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime"
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime"
keywords:
  - "ruby"
  - "runtime"
  - "version"
  - "25"
  - "app"
  - "engine"
  - "standard"
  - "environment"
---

# Ruby runtime version 1.9.25

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

The App Engine standard environment Ruby runtime was updated to version 1.9.25.

## Extended Definition

The App Engine standard environment Ruby runtime was updated to version 1.9.25.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime](https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime)
- [https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime](https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime)

## Supporting Pages

### "Ruby Runtime Environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime](https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime)
- Source ID: `site-docs-root-2`
- Final score: 94
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
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The .NET runtime is the software stack responsible for installing your application code and dependencies, and then running that application in the flexible environment. .NET versions .NET 10 is built using buildpacks .
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The .NET runtime Stay organized with collections Save and categorize content based on your preferences.
- By default, App Engine uses the latest available LTS .NET version if the runtime version setting is not specified.
- To deploy your .NET app, run the following commands from the root directory where your app resides: dotnet restore dotnet publish -c Release gcloud app deploy Support for other .NET runtimes If you need to use a .NET version that isn't supported , you can create a custom runtime and select a valid base image with the .NET version you need.

### "The Ruby runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime](https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The Ruby runtime Stay organized with collections Save and categorize content based on your preferences.
- Specify the operating system setting in your app.yaml file: runtime : ruby env : flex runtime config : operating system : "ubuntu24" Optionally, you can specify a version of the Ruby interpreter using a .ruby-version file in your application directory.
- Support for other Ruby runtimes If you need to use a Ruby version that isn't supported , you can create a custom runtime and select a valid base image with the Ruby version you need.
- The Ruby runtime is the software stack responsible for installing your application code and dependencies, and then running that application in the flexible environment.

