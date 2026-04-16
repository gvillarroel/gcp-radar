---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:18:25.404Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "Regional availability in us-west1"
feature_slug: "regional-availability-in-us-west1"
latest_feature_date: "2021-06-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/ruby/create-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/locations"
  - "https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime"
keywords:
  - "west1"
  - "availability"
  - "regional"
  - "create"
  - "lets"
---

# Regional availability in us-west1

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

Regional availability in us-west1 lets you create and run App Engine applications in the Oregon region.

## Extended Definition

Regional availability in us-west1 lets you create and run App Engine applications in the Oregon region.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/ruby/create-app](https://docs.cloud.google.com/appengine/docs/standard/ruby/create-app)
- [https://docs.cloud.google.com/appengine/docs/standard/locations](https://docs.cloud.google.com/appengine/docs/standard/locations)
- [https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime](https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime)

## Supporting Pages

### "Quickstart: Create a Ruby app in the App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ruby/create-app](https://docs.cloud.google.com/appengine/docs/standard/ruby/create-app)
- Source ID: `site-docs-reference-2`
- Final score: 80
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Additional prerequisites Initialize your App Engine app with your project and choose its region: gcloud app create -- project =[ YOUR PROJECT ID ] When prompted, select the region where you want to locate your App Engine application.
- App Engine locations App Engine is regional , which means the infrastructure that runs your apps is located in a specific region, and Google manages it so that it is available redundantly across all of the zones within that region .
- Note: Two locations, which are called europe-west and us-central in App Engine commands and in the Google Cloud console, are called europe-west1 and us-central1 , respectively, elsewhere in Google documentation.
- Roles required to select or create a project Select a project : Selecting a project doesn't require a specific IAM role—you can select any project that you've been granted a role on.

### "Ruby Runtime Environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime](https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime)
- Source ID: `site-docs-root`
- Final score: 68
- Re-rank relevance: N/A

### "App Engine locations \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/locations](https://docs.cloud.google.com/appengine/docs/standard/locations)
- Source ID: `site-docs-reference-4`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- App Engine is regional , which means the infrastructure that runs your apps is located in a specific region, and Google manages it so that it is available redundantly across all of the zones within that region .
- Note: Two locations, which are called europe-west and us-central in App Engine commands and in the Google Cloud console, are called europe-west1 and us-central1 , respectively, elsewhere in Google documentation.
- The following App Engine app locations create databases that are multi-region: Apps located in us-central create a database in the nam5 multi-region.
- The following App Engine app locations create buckets that are multi-region: Apps located in us-central create a bucket in the US multi-region.

