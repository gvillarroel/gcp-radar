---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:50:31.511Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "App Engine flexible environment region availability: europe-west"
feature_slug: "app-engine-flexible-environment-region-availability-europe-west"
latest_feature_date: "2017-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/locations"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app"
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby/create-app"
keywords:
  - "app"
  - "engine"
  - "flexible"
  - "environment"
  - "region"
  - "availability"
  - "europe"
  - "west"
---

# App Engine flexible environment region availability: europe-west

Product: App Engine flexible environment Ruby
Coverage: MEDIUM

## Step 02 Summary

The App Engine flexible environment became available in the Europe West region.

## Extended Definition

The App Engine flexible environment became available in the Europe West region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/locations](https://docs.cloud.google.com/appengine/docs/flexible/locations)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app)
- [https://docs.cloud.google.com/appengine/docs/flexible/ruby/create-app](https://docs.cloud.google.com/appengine/docs/flexible/ruby/create-app)

## Supporting Pages

### "App Engine locations \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/locations](https://docs.cloud.google.com/appengine/docs/flexible/locations)
- Source ID: `site-docs-reference-2`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: Two locations, which are called europe-west and us-central in App Engine commands and in the Google Cloud console, are called europe-west1 and us-central1 , respectively, elsewhere in Google documentation.
- Home Documentation Application hosting App Engine Flexible environment Resources Send feedback App Engine locations Stay organized with collections Save and categorize content based on your preferences.
- Apps located in europe-west create a database in the eur3 multi-region.
- Apps located in europe-west create a bucket in the EU multi-region.

### "Quickstart: Create a .NET app in the App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a .NET app in the App Engine flexible environment Region ID The REGION ID is an abbreviated code that Google assigns based on the region you select when you create your app.
- Learn about the App Engine flexible environment Here are some topics to help continue your learning about App Engine: An overview of App Engine Request routing Request handling Managing instances Hello World code review Hello World is the simplest possible App Engine app, as it contains only one service, has only one version, and all of the code is located within the app's root directory.
- Note: Two locations, which are called europe-west and us-central in App Engine commands and in the Google Cloud console, are called europe-west1 and us-central1 , respectively, elsewhere in Google documentation.
- Specifies the runtime used by the app. runtime : aspnetcore env : flex runtime config : operating system : ubuntu22 This sample incurs costs to run on the App Engine flexible environment.

### "Quickstart: Create a Ruby app in the App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby/create-app](https://docs.cloud.google.com/appengine/docs/flexible/ruby/create-app)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a Ruby app in the App Engine flexible environment Region ID The REGION ID is an abbreviated code that Google assigns based on the region you select when you create your app.
- Learn about the App Engine flexible environment Here are some topics to help continue your learning about App Engine: An overview of App Engine Request routing Request handling Managing instances Hello World code review Hello World is the simplest possible App Engine app, as it contains only one service, has only one version, and all of the code is located within the app's root directory.
- This section describes each of the app files in detail. app.rb The Hello World app is a basic one-file Sinatra app: require "sinatra" get "/" do "Hello world!" end app.yaml The app.yaml file describes the following configuration for your app: Sets env: flex , indicating your app uses the App Engine flexible environment .
- Deploy and run Hello World on App Engine To deploy your app to the App Engine flexible environment: Deploy the Hello World app by running the following command from the flexible/hello world directory: gcloud app deploy Learn about the optional flags .

