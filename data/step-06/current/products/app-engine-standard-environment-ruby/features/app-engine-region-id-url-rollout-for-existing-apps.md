---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:41.399Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "App Engine region-ID URL rollout for existing apps"
feature_slug: "app-engine-region-id-url-rollout-for-existing-apps"
latest_feature_date: "2020-02-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website"
keywords:
  - "app"
  - "engine"
  - "region"
  - "id"
  - "url"
  - "rollout"
  - "existing"
  - "apps"
---

# App Engine region-ID URL rollout for existing apps

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

Existing App Engine apps are migrated gradually to the region-ID URL format, with no required action when IDs are introduced.

## Extended Definition

Existing App Engine apps are migrated gradually to the region-ID URL format, with no required action when IDs are introduced.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)
- [https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website](https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website)

## Supporting Pages

### "Quickstart: Create a .NET app in the App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- App Engine locations App Engine is regional , which means the infrastructure that runs your apps is located in a specific region, and Google manages it so that it is available redundantly across all of the zones within that region .
- REGION ID .r.appspot.com gcloud app browse This time, the page that displays the Hello World message is delivered by a web server running on an App Engine instance.
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- For existing apps created before this date, the region ID is optional in the URL.

### "Quickstart: Create a custom runtime app in the App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)
- Source ID: `site-docs-root`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable billing in your new Google Cloud project by creating a new billing account or setting an existing one: Go to Billing Download and install the Google Cloud CLI and then initialize the gcloud CLI: Download the SDK Run the following gcloud command to create an App Engine application and specify in which geographical region that you want your app to run: gcloud app create Due to changes in the default behavior for how Cloud Build uses service accounts in new projects, and secure-by-default organization policy changes , you might need to grant additional roles to your deploying service account.
- App Engine Locations App Engine is regional , which means the infrastructure that runs your apps is located in a specific region, and Google manages it so that it is available redundantly across all of the zones within that region .
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- For existing apps created before this date, the region ID is optional in the URL.

### "Hosting a static website on App Engine \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website](https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website)
- Source ID: `site-docs-root-2`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REGION ID .r.appspot.com , run the following command: gcloud app browse What's next Serve your App Engine hosted website from a custom domain .
- Sites hosted on App Engine are hosted on the REGION ID .r.appspot.com subdomain, such as [my-project-id].uc.r.appspot.com .
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- For existing apps created before this date, the region ID is optional in the URL.

