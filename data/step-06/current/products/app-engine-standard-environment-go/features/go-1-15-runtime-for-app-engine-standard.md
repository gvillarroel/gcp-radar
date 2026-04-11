---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:52:30.775Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Go 1.15 runtime for App Engine standard"
feature_slug: "go-1-15-runtime-for-app-engine-standard"
latest_feature_date: "2021-03-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://cloud.google.com/appengine/docs/standard/go/runtime"
keywords:
  - "golang 1.15"
  - "go1.15 App Engine standard"
  - "App Engine Go 1.15"
  - "Go 1.15 runtime"
  - "go1.15"
  - "GA Go runtime"
  - "Go runtime version"
  - "Go runtime"
---

# Go 1.15 runtime for App Engine standard

Product: App Engine standard environment Go
Coverage: LOW

## Step 02 Summary

The Go 1.15 runtime for the App Engine standard environment reached general availability.

## Extended Definition

In App Engine standard, the Go runtime is a runtime stack that installs the service code and dependencies and runs the service. It is configured in `app.yaml` with `runtime: go VERSION`, where VERSION is the Go major and minor version (for example, a 1.15 runtime entry), and App Engine uses the latest stable release of that specified version. The provided documentation does not explicitly confirm the GA launch event/date for Go 1.15.

## Evidence Summary

The cited page defines how Go runtimes are declared and versioned in App Engine standard, but does not include explicit evidence for Go 1.15 GA timing or deprecation status.

## Source Links

- [https://cloud.google.com/appengine/docs/standard/go/runtime](https://cloud.google.com/appengine/docs/standard/go/runtime)

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

