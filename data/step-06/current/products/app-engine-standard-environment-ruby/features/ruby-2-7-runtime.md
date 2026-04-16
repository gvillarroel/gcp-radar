---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:18:25.406Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "Ruby 2.7 runtime"
feature_slug: "ruby-2-7-runtime"
latest_feature_date: "2020-11-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle"
  - "https://docs.cloud.google.com/appengine/docs/standard/ruby/configuring-your-app-with-app-yaml"
keywords:
  - "runtime"
  - "lets"
---

# Ruby 2.7 runtime

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

Ruby 2.7 runtime support lets App Engine standard environment run Ruby 2.7 applications; Ruby 2.7 runtime support lets App Engine standard environment run Ruby 2.7 applications.

## Extended Definition

Ruby 2.7 runtime support lets App Engine standard environment run Ruby 2.7 applications; Ruby 2.7 runtime support lets App Engine standard environment run Ruby 2.7 applications.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime](https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle](https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle)
- [https://docs.cloud.google.com/appengine/docs/standard/ruby/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/ruby/configuring-your-app-with-app-yaml)

## Supporting Pages

### "Ruby Runtime Environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime](https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime)
- Source ID: `site-docs-root`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- The runtime will install all dependencies before your entrypoint is called. source "https://rubygems.org" gem "rack" gem "puma" An example entrypoint using puma for a Rails application: entrypoint : bundle exec rails server Puma - p $PORT An example entrypoint using puma for any Rack application: entrypoint : bundle exec rackup - s Puma - p $PORT For applications that can handle requests without a Rack server, you can just execute a ruby script: entrypoint : bundle exec ruby app . rb Note: The entrypoint command will be executed by bash's exec function .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Ruby Runtime Environment Stay organized with collections Save and categorize content based on your preferences.
- This document explains the details of the Ruby runtime environment, including what headers are provided to your code and other information to successfully deploy your application on App Engine.
- Specify the Ruby runtime for App Engine in the standard environment in the app.yaml file: runtime : ruby VERSION Where VERSION is the Ruby MAJOR and MINOR version numbers.

### "Runtime lifecycle \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle](https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle)
- Source ID: `site-docs-reference-4`
- Final score: 57
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Runtime lifecycle GA-level support End of Support Deprecated Decommissioned Creation & redeployment Yes No 1 No No Project Configuration Updates Yes Yes No No Running existing workloads Yes Yes Yes May be disabled UI & CLI Warnings Yes Yes No No Language patches Automatic No automatic updates No automatic updates No automatic updates Patching APIs & SDKs Automatic No automatic updates No automatic updates No automatic updates Patching OS Automatic No automatic updates No automatic updates No automatic updates Customer Support GA-level support No runtime support No runtime support No runtime support Notification period App Engine will begin issuing in-app notifications 90 days before the application reaches end of support.
- For details, see the migration guides: Migrate from Python 2.7 to the latest Python runtime Migrate from PHP 5 to the latest PHP runtime Migrate from Go 1.11 to the latest Go runtime Migrate from Java 8 to the latest Java runtime In certain cases, Google may permit your Organization to re-enable deployments in unsupported runtimes, subject to service specific terms and conditions.
- In certain cases, Google may permit your organization to re-enable deployments for legacy runtimes using an organization policy . ↩ Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Issues arising from the use of an unsupported runtime will not be eligible for technical support We strongly encourage you to upgrade your application to a supported runtime version as soon as it becomes available to continue receiving security updates and being eligible for technical support.

### "Defining runtime settings \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ruby/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/ruby/configuring-your-app-with-app-yaml)
- Source ID: `site-docs-reference`
- Final score: 47
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Generally, your app.yaml file requires only the runtime element for a simple Ruby app in the standard environment, for example: runtime : ruby40 App Engine provides default values for all other settings, including the F1 instance class , which determines the memory and CPU resources that are available to your app, and automatic scaling , which controls how and when new instances of your app are created.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Defining runtime settings Stay organized with collections Save and categorize content based on your preferences.
- An App Engine app is configured using an app.yaml file, that contains the runtime, handlers, scaling, and other general settings including environment variables.
- About app.yaml files You can specify the runtime configuration for your Ruby app, including versions and URLs, in the app.yaml file.

