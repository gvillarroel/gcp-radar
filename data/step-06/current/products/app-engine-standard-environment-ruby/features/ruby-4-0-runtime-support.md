---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:26:39.330Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "Ruby 4.0 runtime support"
feature_slug: "ruby-4-0-runtime-support"
latest_feature_date: "2026-03-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime"
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app"
keywords:
  - "generally"
  - "runtime"
  - "available"
  - "ruby"
  - "is"
  - "now"
  - "for"
  - "app"
---

# Ruby 4.0 runtime support

Product: App Engine standard environment Ruby
Coverage: LOW

## Step 02 Summary

Ruby 4.0 runtime support is now generally available for App Engine standard; Ruby 4.0 runtime support is now available in preview for App Engine standard.

## Extended Definition

Ruby 4.0 runtime support is now generally available for App Engine standard; Ruby 4.0 runtime support is now available in preview for App Engine standard.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime](https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime)
- [https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime](https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)

## Supporting Pages

### "Ruby Runtime Environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime](https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime)
- Source ID: `site-docs-root-2`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- The runtime will install all dependencies before your entrypoint is called. source "https://rubygems.org" gem "rack" gem "puma" An example entrypoint using puma for a Rails application: entrypoint : bundle exec rails server Puma - p $PORT An example entrypoint using puma for any Rack application: entrypoint : bundle exec rackup - s Puma - p $PORT For applications that can handle requests without a Rack server, you can just execute a ruby script: entrypoint : bundle exec ruby app . rb Note: The entrypoint command will be executed by bash's exec function .
- This document explains the details of the Ruby runtime environment, including what headers are provided to your code and other information to successfully deploy your application on App Engine.
- Specify the Ruby runtime for App Engine in the standard environment in the app.yaml file: runtime : ruby VERSION Where VERSION is the Ruby MAJOR and MINOR version numbers.
- The Ruby runtime uses the latest stable release of the version that is specified in your app.yaml file.

### "The Ruby runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime](https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- The runtime will install all dependencies before your entrypoint is called. source "https://rubygems.org" gem "rack" gem "puma" An example entrypoint using puma for a Rails application: entrypoint : bundle exec rails server Puma - p $PORT An example entrypoint using puma for any Rack application: entrypoint : bundle exec rackup - s Puma - p $PORT For applications that can handle requests without a Rack server, you can just execute a ruby script: entrypoint : bundle exec ruby app . rb Note: The entrypoint command will be executed by bash's exec function .
- The Ruby runtime is the software stack responsible for installing your application code and dependencies, and then running that application in the flexible environment.
- Support for other Ruby runtimes If you need to use a Ruby version that isn't supported , you can create a custom runtime and select a valid base image with the Ruby version you need.
- When this file is present, the runtime installs the requested version of Ruby when you deploy your application using rbenv .

### "Quickstart: Create a custom runtime app in the App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Navigate to the nginx directory where the sample code is located, for example: cd appengine-custom-runtimes-samples/nginx Running Hello World on your local machine You can test the sample app by downloading and installing Docker , and then running the Hello World container on your local machine.
- You can generally select the region nearest to your app's users, but you should consider the locations where App Engine is available as well as the locations of the other Google Cloud products and services that your app uses.
- Enable billing in your new Google Cloud project by creating a new billing account or setting an existing one: Go to Billing Download and install the Google Cloud CLI and then initialize the gcloud CLI: Download the SDK Run the following gcloud command to create an App Engine application and specify in which geographical region that you want your app to run: gcloud app create Due to changes in the default behavior for how Cloud Build uses service accounts in new projects, and secure-by-default organization policy changes , you might need to grant additional roles to your deploying service account.
- OK Download the Hello World app Choose one of the following to download the Hello World sample app from GitHub, to your local machine: Clone the Hello World sample app from the following repository: git clone https://github.com/GoogleCloudPlatform/appengine-custom-runtimes-samples Download the sample as a .zip file and then extract it to a local directory.

