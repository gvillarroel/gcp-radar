---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:50:31.513Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "Ruby runtime default version in App Engine flexible environment"
feature_slug: "ruby-runtime-default-version-in-app-engine-flexible-environment"
latest_feature_date: "2016-12-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app"
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime"
keywords:
  - "ruby"
  - "runtime"
  - "default"
  - "version"
  - "app"
  - "engine"
  - "flexible"
  - "environment"
---

# Ruby runtime default version in App Engine flexible environment

Product: App Engine flexible environment Ruby
Coverage: MEDIUM

## Step 02 Summary

The Ruby runtime began defaulting to Ruby 2.3.3, with other versions selectable via a root .ruby-version file.

## Extended Definition

The Ruby runtime began defaulting to Ruby 2.3.3, with other versions selectable via a root .ruby-version file.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)
- [https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime](https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime)

## Supporting Pages

### "Quickstart: Create a custom runtime app in the App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The app.yaml file must reside in the same directory as the Dockerfile file. runtime : custom env : flex The runtime: custom entry tells App Engine to look for a Dockerfile that will define your runtime's image and env: flex specifies that you are deploying to the flexible environment.
- Create a custom runtime app in the App Engine flexible environment Region ID The REGION ID is an abbreviated code that Google assigns based on the region you select when you create your app.
- By using a Dockerfile, you can use languages and packages that are not part of the Google Cloud and use the same resources and tooling that are used in the App Engine flexible environment.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### "The Ruby runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime](https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime)
- Source ID: `site-docs-reference-2`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The Ruby runtime Stay organized with collections Save and categorize content based on your preferences.
- The Ruby runtime is the software stack responsible for installing your application code and dependencies, and then running that application in the flexible environment.
- If you don't provide a .ruby-version file, the Ruby runtime defaults to version 2.7.
- Specify the operating system setting in your app.yaml file: runtime : ruby env : flex runtime config : operating system : "ubuntu24" Optionally, you can specify a version of the Ruby interpreter using a .ruby-version file in your application directory.

### "The .NET runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime)
- Source ID: `site-docs-reference`
- Final score: 119
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The .NET runtime is the software stack responsible for installing your application code and dependencies, and then running that application in the flexible environment. .NET versions .NET 10 is built using buildpacks .
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The .NET runtime Stay organized with collections Save and categorize content based on your preferences.
- By default, App Engine uses the latest available LTS .NET version if the runtime version setting is not specified.
- Extending the runtime The flexible environment .NET runtime can be used to create a custom runtime.

