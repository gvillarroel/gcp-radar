---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:04.018Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "Ruby runtime"
feature_slug: "ruby-runtime"
latest_feature_date: "2016-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime"
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime"
keywords:
  - "ruby"
  - "runtime"
  - "available"
  - "app"
  - "engine"
  - "flexible"
  - "environment"
  - "applications"
---

# Ruby runtime

Product: App Engine flexible environment Ruby
Coverage: MEDIUM

## Step 02 Summary

The Ruby runtime is available for App Engine flexible environment applications.

## Extended Definition

The Ruby runtime is available for App Engine flexible environment applications.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime](https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime)
- [https://docs.cloud.google.com/appengine/docs/flexible/ruby](https://docs.cloud.google.com/appengine/docs/flexible/ruby)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime)

## Supporting Pages

### "The Ruby runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime](https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime)
- Source ID: `site-docs-reference-2`
- Final score: 135
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The Ruby runtime Stay organized with collections Save and categorize content based on your preferences.
- The Ruby runtime is the software stack responsible for installing your application code and dependencies, and then running that application in the flexible environment.
- The runtime will install all dependencies before your entrypoint is called. source "https://rubygems.org" gem "rack" gem "puma" An example entrypoint using puma for a Rails application: entrypoint : bundle exec rails server Puma - p $PORT An example entrypoint using puma for any Rack application: entrypoint : bundle exec rackup - s Puma - p $PORT For applications that can handle requests without a Rack server, you can just execute a ruby script: entrypoint : bundle exec ruby app . rb Note: The entrypoint command will be executed by bash's exec function .
- App Engine blocks you from deploying your applications using runtimes that have reached end of support.

### "The Ruby runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby](https://docs.cloud.google.com/appengine/docs/flexible/ruby)
- Source ID: `site-docs-reference-2`
- Final score: 125
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The Ruby runtime Stay organized with collections Save and categorize content based on your preferences.
- The Ruby runtime is the software stack responsible for installing your application code and dependencies, and then running that application in the flexible environment.
- The runtime will install all dependencies before your entrypoint is called. source "https://rubygems.org" gem "rack" gem "puma" An example entrypoint using puma for a Rails application: entrypoint : bundle exec rails server Puma - p $PORT An example entrypoint using puma for any Rack application: entrypoint : bundle exec rackup - s Puma - p $PORT For applications that can handle requests without a Rack server, you can just execute a ruby script: entrypoint : bundle exec ruby app . rb Note: The entrypoint command will be executed by bash's exec function .
- App Engine blocks you from deploying your applications using runtimes that have reached end of support.

### "The .NET runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime)
- Source ID: `site-docs-reference`
- Final score: 89
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The .NET runtime Stay organized with collections Save and categorize content based on your preferences.
- The .NET runtime is the software stack responsible for installing your application code and dependencies, and then running that application in the flexible environment. .NET versions .NET 10 is built using buildpacks .
- By default, App Engine uses the latest available LTS .NET version if the runtime version setting is not specified.
- App Engine blocks you from deploying your applications using runtimes that have reached end of support.

