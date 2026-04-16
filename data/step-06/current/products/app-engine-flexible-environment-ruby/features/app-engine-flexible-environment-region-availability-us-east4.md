---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:50:31.510Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "App Engine flexible environment region availability: us-east4"
feature_slug: "app-engine-flexible-environment-region-availability-us-east4"
latest_feature_date: "2017-05-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/locations"
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby/create-app"
  - "https://docs.cloud.google.com/appengine/docs/flexible/application-security"
keywords:
  - "app"
  - "engine"
  - "flexible"
  - "environment"
  - "region"
  - "availability"
  - "us"
  - "east4"
---

# App Engine flexible environment region availability: us-east4

Product: App Engine flexible environment Ruby
Coverage: MEDIUM

## Step 02 Summary

The App Engine flexible environment became available in the us-east4 (North Virginia) region.

## Extended Definition

The App Engine flexible environment became available in the us-east4 (North Virginia) region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/locations](https://docs.cloud.google.com/appengine/docs/flexible/locations)
- [https://docs.cloud.google.com/appengine/docs/flexible/ruby/create-app](https://docs.cloud.google.com/appengine/docs/flexible/ruby/create-app)
- [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)

## Supporting Pages

### "App Engine locations \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/locations](https://docs.cloud.google.com/appengine/docs/flexible/locations)
- Source ID: `site-docs-reference-2`
- Final score: 51
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Resources Send feedback App Engine locations Stay organized with collections Save and categorize content based on your preferences.
- You can generally select the region nearest to your app's users, but you should consider the locations where App Engine is available as well as the locations of the other Google Cloud products and services that your app uses.
- App Engine is regional , which means the infrastructure that runs your apps is located in a specific region, and Google manages it so that it is available redundantly across all of the zones within that region .
- The following App Engine app locations create databases that are multi-region: Apps located in us-central create a database in the nam5 multi-region.

### "Quickstart: Create a Ruby app in the App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby/create-app](https://docs.cloud.google.com/appengine/docs/flexible/ruby/create-app)
- Source ID: `site-docs-reference`
- Final score: 51
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a Ruby app in the App Engine flexible environment Region ID The REGION ID is an abbreviated code that Google assigns based on the region you select when you create your app.
- Learn about the App Engine flexible environment Here are some topics to help continue your learning about App Engine: An overview of App Engine Request routing Request handling Managing instances Hello World code review Hello World is the simplest possible App Engine app, as it contains only one service, has only one version, and all of the code is located within the app's root directory.
- This section describes each of the app files in detail. app.rb The Hello World app is a basic one-file Sinatra app: require "sinatra" get "/" do "Hello world!" end app.yaml The app.yaml file describes the following configuration for your app: Sets env: flex , indicating your app uses the App Engine flexible environment .
- Deploy and run Hello World on App Engine To deploy your app to the App Engine flexible environment: Deploy the Hello World app by running the following command from the flexible/hello world directory: gcloud app deploy Learn about the optional flags .

### "Overview of app security \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)
- Source ID: `site-docs-reference`
- Final score: 45
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Overview of app security Stay organized with collections Save and categorize content based on your preferences.
- VPC Service Controls Not supported in the App Engine flexible environment.
- REGION ID .r.appspot.com To target specific resources in your App Engine app, use the -dot- syntax to separate each resource you want to target, for example: https:// VERSION -dot- SERVICE -dot- PROJECT ID .
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.

