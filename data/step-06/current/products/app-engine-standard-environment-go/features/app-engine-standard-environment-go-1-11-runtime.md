---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:52:24.728Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "App Engine standard environment Go 1.11 runtime"
feature_slug: "app-engine-standard-environment-go-1-11-runtime"
latest_feature_date: "2019-03-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/upgrade-go-runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/config/appref"
keywords:
  - "app"
  - "engine"
  - "standard"
  - "environment"
  - "go"
  - "11"
  - "runtime"
  - "reached"
---

# App Engine standard environment Go 1.11 runtime

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

The Go 1.11 runtime on App Engine standard environment reached general availability.

## Extended Definition

The Go 1.11 runtime on App Engine standard environment reached general availability.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/runtime](https://docs.cloud.google.com/appengine/docs/standard/go/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/go/upgrade-go-runtime](https://docs.cloud.google.com/appengine/docs/standard/go/upgrade-go-runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)

## Supporting Pages

### "Go runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/runtime](https://docs.cloud.google.com/appengine/docs/standard/go/runtime)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Go runtime environment Stay organized with collections Save and categorize content based on your preferences.
- The Go runtime for App Engine in the standard environment is declared in the app.yaml file: runtime : go VERSION Where VERSION is the Go MAJOR and MINOR version numbers.
- Environment variables The following environment variables are set by the runtime: Environment variable Description GAE APPLICATION The ID of your App Engine application.
- Note: Custom metadata is not supported in the standard environment.

### "Upgrade an existing application \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/upgrade-go-runtime](https://docs.cloud.google.com/appengine/docs/standard/go/upgrade-go-runtime)
- Source ID: `site-docs-reference`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Upgrade an existing application Stay organized with collections Save and categorize content based on your preferences.
- However, App Engine might block re-deployment of applications that use runtimes after their end of support date .
- The process of upgrading an existing app depends on the runtime version that your app currently uses: Go 1.11 (first-generation runtime) : You must migrate your app to the latest supported Go version .
- Go second-generation runtimes (after end of support) : To upgrade to a supported version of Go , update the app.yaml file by specifying a version of Go that you want your app to run.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)
- Source ID: `site-docs-reference-2`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback App Engine app.yaml reference Stay organized with collections Save and categorize content based on your preferences.
- Note: For new projects you create after March 2025, App Engine sets the maximum instances default for standard environment deployments to 20.
- Example The following is an example of an app.yaml file: runtime : python314 instance class : F2 env variables : BUCKET NAME : "example-gcs-bucket" handlers : Matches requests to /images/... to files in static/images/... - url : /images static dir : static/images - url : /. secure : always redirect http response code : 301 script : auto The following table provides YAML examples of available fields in an app.yaml file: Runtime and app elements Element Description app engine apis Optional.
- Note that the scheduler might spawn a new instance before the actual maximum number of requests is reached. max pending latency The maximum amount of time that App Engine should allow a request to wait in the pending queue before starting additional instances to handle requests so that pending latency is reduced.

