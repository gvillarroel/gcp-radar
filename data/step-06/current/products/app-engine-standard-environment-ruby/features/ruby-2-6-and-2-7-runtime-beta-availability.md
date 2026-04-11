---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:26:39.347Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "Ruby 2.6 and 2.7 runtime beta availability"
feature_slug: "ruby-2-6-and-2-7-runtime-beta-availability"
latest_feature_date: "2020-07-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime"
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler"
keywords:
  - "introduces"
  - "availability"
  - "beta"
  - "runtime"
  - "ruby"
  - "of"
  - "and"
  - "the"
---

# Ruby 2.6 and 2.7 runtime beta availability

Product: App Engine standard environment Ruby
Coverage: LOW

## Step 02 Summary

Introduces beta availability of the Ruby 2.6 and Ruby 2.7 runtimes for App Engine standard environment.

## Extended Definition

Introduces beta availability of the Ruby 2.6 and Ruby 2.7 runtimes for App Engine standard environment.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime](https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime)
- [https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime](https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler](https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler)

## Supporting Pages

### "Ruby Runtime Environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime](https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- This document explains the details of the Ruby runtime environment, including what headers are provided to your code and other information to successfully deploy your application on App Engine.
- The runtime will install all dependencies before your entrypoint is called. source "https://rubygems.org" gem "rack" gem "puma" An example entrypoint using puma for a Rails application: entrypoint : bundle exec rails server Puma - p $PORT An example entrypoint using puma for any Rack application: entrypoint : bundle exec rackup - s Puma - p $PORT For applications that can handle requests without a Rack server, you can just execute a ruby script: entrypoint : bundle exec ruby app . rb Note: The entrypoint command will be executed by bash's exec function .
- Specify the Ruby runtime for App Engine in the standard environment in the app.yaml file: runtime : ruby VERSION Where VERSION is the Ruby MAJOR and MINOR version numbers.
- For other supported Ruby versions, and the corresponding Ubuntu version for your Ruby version, see the Runtime support schedule .

### "The Ruby runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime](https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- The Ruby runtime is the software stack responsible for installing your application code and dependencies, and then running that application in the flexible environment.
- To use Ruby runtime version 3.1 and earlier , specify a version of the Ruby interpreter using a .ruby-version file in your application directory.
- For the full list of supported Ruby versions, and their corresponding Ubuntu version, see the Runtime support schedule .
- Using C libraries with Ruby For Ruby libraries that require C extensions, the headers for the current Ruby version and the following Ubuntu packages are pre-installed on the system. autoconf build-essential ca-certificates cmake curl file git imagemagick libcurl3 libcurl3-gnutls libcurl4-openssl-dev libffi-dev libgdbm-dev libgit2-dev libgmp-dev libicu-dev libjemalloc-dev libjemalloc1 libmagickwand-dev libmysqlclient-dev libncurses5-dev libpq-dev libqdbm-dev libreadline6-dev libsqlite3-dev libssl-dev libxml2-dev libxslt-dev libyaml-dev libz-dev systemtap tzdata These packages allow the installation of most popular Ruby libraries.

### "Understand performance with Cloud Profiler \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler](https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler)
- Source ID: `site-docs-root-2`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- You can capture profiling data for the following runtimes: Go Java Python Node.js Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Understand performance with Cloud Profiler Stay organized with collections Save and categorize content based on your preferences.
- This page describes how to modify your application to capture profiling data and have that data sent to your Google Cloud project.

