---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:52:30.814Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "App Engine Go SDK 1.9.57"
feature_slug: "app-engine-go-sdk-1-9-57"
latest_feature_date: "2017-08-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/memcache"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/building-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/search"
keywords:
  - "57"
  - "released"
  - "version"
  - "engine"
  - "sdk"
  - "was"
  - "app"
  - "go"
---

# App Engine Go SDK 1.9.57

Product: App Engine standard environment Go
Coverage: LOW

## Step 02 Summary

App Engine Go SDK version 1.9.57 was released.

## Extended Definition

App Engine Go SDK version 1.9.57 was released.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/memcache](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/memcache)
- [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/search](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/search)

## Supporting Pages

### "Package google.golang.org/appengine/v2/memcache (v2.0.6) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/memcache](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/memcache)
- Source ID: `site-docs-reference`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Package google.golang.org/appengine/v2/memcache (v2.0.6) Stay organized with collections Save and categorize content based on your preferences.
- Context , items [] Item ) error AddMulti is a batch version of Add. appengine.MultiError may be returned. func (Codec) CompareAndSwap func ( cd Codec ) CompareAndSwap ( c context .
- Context , items [] Item ) error CompareAndSwapMulti is a batch version of CompareAndSwap. appengine.MultiError may be returned. func (Codec) Get func ( cd Codec ) Get ( c context .
- Context , item [] Item ) error CompareAndSwapMulti is a batch version of CompareAndSwap. appengine.MultiError may be returned. func Delete func Delete ( c context .

### "Build a Go app on App Engine \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a new folder called go-app for your Go service: mkdir go-app In your go-app/ folder, create a file called app.yaml , and add the following contents: runtime : go126 # or another supported version This is the simplest configuration for an App Engine app.
- To confirm service creation and version deployment: View your App Engine services in the Google Cloud console: View services You should see one service listed, named default .
- Deploy your web service on App Engine In your go-app directory where your app.yaml file is located, deploy your web service to App Engine using the following command: gcloud app deploy To launch your browser and view your web service at https:// PROJECT ID .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Build a Go app on App Engine Stay organized with collections Save and categorize content based on your preferences.

### "Package google.golang.org/appengine/v2/search (v2.0.6) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/search](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/search)
- Source ID: `site-docs-reference`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Package google.golang.org/appengine/v2/search (v2.0.6) Stay organized with collections Save and categorize content based on your preferences.
- The query language is described at https://cloud.google.com/appengine/docs/standard/go/search/query strings Search also takes an optional SearchOptions struct which gives much more control over how results are calculated and returned.
- SortExpression type SortExpression struct { // Expr is evaluated to provide a sorting value for each document. // See https://cloud.google.com/appengine/docs/standard/go/search/options for // the supported expression syntax.
- Name string // Expr is evaluated to provide a custom content snippet for each document. // See https://cloud.google.com/appengine/docs/standard/go/search/options for // the supported expression syntax.

