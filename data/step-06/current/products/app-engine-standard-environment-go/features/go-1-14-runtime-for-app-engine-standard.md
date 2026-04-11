---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:52:30.776Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Go 1.14 runtime for App Engine standard"
feature_slug: "go-1-14-runtime-for-app-engine-standard"
latest_feature_date: "2020-08-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/runtime"
keywords:
  - "golang 1.14"
  - "go1.14 App Engine standard"
  - "App Engine Go 1.14"
  - "Go 1.14 runtime"
  - "go1.14"
  - "App Engine language runtime"
  - "Go runtime GA"
  - "Go runtime"
---

# Go 1.14 runtime for App Engine standard

Product: App Engine standard environment Go
Coverage: LOW

## Step 02 Summary

The Go 1.14 runtime for the App Engine standard environment reached general availability; The Go 1.14 runtime for the App Engine standard environment became available in beta.

## Extended Definition

In App Engine standard environment, the Go runtime is the language runtime that installs your Go service code and dependencies and runs the service. It is configured in `app.yaml` with `runtime: go VERSION`, where VERSION is a Go major/minor value (for example, a specific Go 1.x stream). For a chosen version, App Engine uses the latest stable release of that specified Go version.

## Evidence Summary

The cited page defines the Go runtime configuration in App Engine standard and explains that it is version-based and resolves to the latest stable release for the declared version, but does not provide lifecycle details (e.g., GA/beta timing) for Go 1.14 specifically.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/runtime](https://docs.cloud.google.com/appengine/docs/standard/go/runtime)

## Supporting Pages

### "Go runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/runtime](https://docs.cloud.google.com/appengine/docs/standard/go/runtime)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Go runtime environment Stay organized with collections Save and categorize content based on your preferences.
- The Go runtime for App Engine in the standard environment is declared in the app.yaml file: runtime : go VERSION Where VERSION is the Go MAJOR and MINOR version numbers.
- The Go runtime is the software stack responsible for installing your web service's code and its dependencies and running your service.
- The Go runtime uses the latest stable release of the version that is specified in your app.yaml file.

