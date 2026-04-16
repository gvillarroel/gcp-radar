---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:41.387Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "App Engine standard to Cloud Run migration"
feature_slug: "app-engine-standard-to-cloud-run-migration"
latest_feature_date: "2026-02-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime"
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website"
keywords:
  - "app"
  - "engine"
  - "standard"
  - "run"
  - "migration"
  - "existing"
  - "apps"
  - "can"
---

# App Engine standard to Cloud Run migration

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

Existing App Engine standard apps can be migrated to Cloud Run in preview using the `gcloud beta app migrate-to-run` command.

## Extended Definition

Existing App Engine standard apps can be migrated to Cloud Run in preview using the `gcloud beta app migrate-to-run` command.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime)
- [https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime](https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website](https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website)

## Supporting Pages

### "Customizing the .NET Runtime \_|\_ App Engine flexible environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime)
- Source ID: `site-docs-root`
- Final score: 64
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Customizing the .NET Runtime Stay organized with collections Save and categorize content based on your preferences.

### "The Ruby runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime](https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime)
- Source ID: `site-docs-root`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Metadata server Each instance of your application can use the Compute Engine metadata server to query information about the instance, including its hostname, external IP address, instance ID, custom metadata, and service account information.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The Ruby runtime Stay organized with collections Save and categorize content based on your preferences.
- App Engine doesn't allow you to set custom metadata for each instance, but you can set project-wide custom metadata and read it from your App Engine and Compute Engine instances.
- App Engine blocks you from deploying your applications using runtimes that have reached end of support.

### "Hosting a static website on App Engine \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website](https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website)
- Source ID: `site-docs-root-2`
- Final score: 59
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin Before you can host your website on App Engine: Create a new Google Cloud console project or retrieve the project ID of an existing project to use: Go to the Projects page Tip: You can retrieve a list of your existing project IDs with the gcloud command line tool .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Hosting a static website on App Engine Stay organized with collections Save and categorize content based on your preferences.
- Hosting your static site on App Engine can cost less than using a traditional hosting provider, as App Engine standard environment provides a free tier.
- REGION ID .r.appspot.com , run the following command: gcloud app browse What's next Serve your App Engine hosted website from a custom domain .

