---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.440Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Ruby 3.4 runtime"
feature_slug: "ruby-3-4-runtime"
latest_feature_date: "2025-06-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-ruby-service"
  - "https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api"
  - "https://docs.cloud.google.com/python/docs/reference/run/latest"
keywords:
  - "ruby"
  - "workloads"
  - "deployed"
  - "runtime"
  - "supports"
---

# Ruby 3.4 runtime

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports the Ruby 3.4 runtime for deployed workloads; Cloud Run supports the Ruby 3.4 runtime for deployed workloads.

## Extended Definition

Cloud Run supports the Ruby 3.4 runtime for deployed workloads; Cloud Run supports the Ruby 3.4 runtime for deployed workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-ruby-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-ruby-service)
- [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api)
- [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest)

## Supporting Pages

### Authenticate to Cloud Run Admin API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

### "Quickstart: Build and deploy a Ruby web app to Google Cloud with Cloud Run\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-ruby-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-ruby-service)
- Source ID: `site-docs-reference-2`
- Final score: 31
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dockerfile README . md . ruby - version . bundle / vendor / Your app is finished and ready to be deployed.
- Success: You deployed a Ruby web app to Cloud Run.
- Write the sample application To write a Ruby application: Create a new directory named helloworld and change directory into it: mkdir helloworld cd helloworld Create a file named app.rb and paste the following code into it: require "sinatra" set :bind , "0.0.0.0" port = ENV [ "PORT" ] "8080" set :port , port get "/" do name = ENV [ "NAME" ] "World" "Hello #{ name } !" end This code creates a basic web server that listens on the port defined by the PORT environment variable .
- Create a file name Gemfile and copy the following into it: source "https://rubygems.org" gem "sinatra" , " >3.1" gem "thin" group :test do gem "rack-test" gem "rest-client" gem "rspec" gem "rspec junit formatter" gem "rspec-retry" gem "rubysl-securerandom" end gem "puma" , " > 6.6" gem "rackup" , " > 1.0" If you don't have Bundler 2.0 or greater installed, install Bundler .

### "Python Client for Cloud Run \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest)
- Source ID: `site-python-reference`
- Final score: 26
- Re-rank relevance: N/A

