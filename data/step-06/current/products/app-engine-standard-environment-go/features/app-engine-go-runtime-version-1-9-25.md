---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:52:24.762Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "App Engine Go runtime version 1.9.25"
feature_slug: "app-engine-go-runtime-version-1-9-25"
latest_feature_date: "2015-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/go111"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/upgrade-go-runtime"
keywords:
  - "app"
  - "engine"
  - "go"
  - "runtime"
  - "version"
  - "25"
  - "standard"
  - "environment"
---

# App Engine Go runtime version 1.9.25

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

App Engine standard environment for Go was updated to runtime/version 1.9.25.

## Extended Definition

App Engine standard environment for Go was updated to runtime/version 1.9.25.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/runtime](https://docs.cloud.google.com/appengine/docs/standard/go/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/go111](https://docs.cloud.google.com/appengine/docs/standard/go111)
- [https://docs.cloud.google.com/appengine/docs/standard/go/upgrade-go-runtime](https://docs.cloud.google.com/appengine/docs/standard/go/upgrade-go-runtime)

## Supporting Pages

### "Go runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/runtime](https://docs.cloud.google.com/appengine/docs/standard/go/runtime)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Go runtime for App Engine in the standard environment is declared in the app.yaml file: runtime : go VERSION Where VERSION is the Go MAJOR and MINOR version numbers.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Go runtime environment Stay organized with collections Save and categorize content based on your preferences.
- Environment variables The following environment variables are set by the runtime: Environment variable Description GAE APPLICATION The ID of your App Engine application.
- For other supported Go versions, and the corresponding Ubuntu version for your Go version, see the Runtime support schedule .

### "Go runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go111](https://docs.cloud.google.com/appengine/docs/standard/go111)
- Source ID: `site-docs-reference-2`
- Final score: 84
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Go runtime for App Engine in the standard environment is declared in the app.yaml file: runtime : go VERSION Where VERSION is the Go MAJOR and MINOR version numbers.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Go runtime environment Stay organized with collections Save and categorize content based on your preferences.
- Environment variables The following environment variables are set by the runtime: Environment variable Description GAE APPLICATION The ID of your App Engine application.
- For other supported Go versions, and the corresponding Ubuntu version for your Go version, see the Runtime support schedule .

### "Upgrade an existing application \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/upgrade-go-runtime](https://docs.cloud.google.com/appengine/docs/standard/go/upgrade-go-runtime)
- Source ID: `site-docs-reference`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Upgrade an existing application Stay organized with collections Save and categorize content based on your preferences.
- The process of upgrading an existing app depends on the runtime version that your app currently uses: Go 1.11 (first-generation runtime) : You must migrate your app to the latest supported Go version .
- Go second-generation runtimes (after end of support) : To upgrade to a supported version of Go , update the app.yaml file by specifying a version of Go that you want your app to run.
- You must upgrade your applications to the latest supported runtime version to continue receiving security updates and be eligible for technical support.

