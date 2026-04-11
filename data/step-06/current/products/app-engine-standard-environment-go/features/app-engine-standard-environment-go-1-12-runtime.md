---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:52:30.788Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "App Engine standard environment Go 1.12 runtime"
feature_slug: "app-engine-standard-environment-go-1-12-runtime"
latest_feature_date: "2019-05-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/specifying-dependencies"
keywords:
  - "Golang 1.12 runtime"
  - "Go 1.12 runtime availability"
  - "Go 1.12 standard environment"
  - "GA for Go 1.12"
  - "App Engine Go 1.12 runtime"
  - "App Engine standard Go"
  - "Go 1.12"
---

# App Engine standard environment Go 1.12 runtime

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

The Go 1.12 runtime on App Engine standard environment became generally available.

## Extended Definition

The App Engine Standard Go 1.12+ runtime is configured in an app’s `app.yaml` via the `runtime` setting (for example `go126`), with App Engine supplying default values for other settings such as instance class and scaling. In this runtime, dependency behavior is tied to the Go tooling model: if the app directory is under `$GOPATH/src`, App Engine uses GOPATH mode even when `go.mod` exists, while Go 1.12 apps are advised not to place app code under `$GOPATH/src`.

## Evidence Summary

The pages document how to configure `app.yaml` for Go 1.12+ in the standard environment (including runtime declaration) and describe Go 1.12 runtime dependency behavior and GOPATH-mode considerations.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml)
- [https://docs.cloud.google.com/appengine/docs/standard/go/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/go/specifying-dependencies)

## Supporting Pages

### "Defining runtime settings \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly describes configuring Go 1.12+ apps in the standard environment and gives concrete runtime examples like `runtime: go126`.

Evidence snippets:
- Generally, your app.yaml file requires only the runtime element for a simple Go 1.12+ app in the standard environment, for example: runtime : go126 App Engine provides default values for all other settings, including the F1 instance class , which determines the memory and CPU resources that are available to your app, and automatic scaling , which controls how and when new instances of your app are created.
- About app.yaml files You can specify the runtime configuration for your Go 1.12+ app, including versions and URLs, in the app.yaml file.

### "Specify dependencies \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/go/specifying-dependencies)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: It provides operational guidance specific to Go 1.12+ runtimes, including module mode, GOPATH behavior, and build-time dependency handling.

Evidence snippets:
- If your Go 1.12 app is anywhere in the $GOPATH/src directory tree, App Engine follows GOPATH mode even if you've defined a go.mod file for your app.
- Apps that run in the Go 1.12+ standard runtime can use any linux/amd64-compatible package.
- For Go 1.12, don't locate your app directory within the $GOPATH/src folder.

