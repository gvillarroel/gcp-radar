---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:36:38.565Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "App Engine flexible environment Ruby runtime"
feature_slug: "app-engine-flexible-environment-ruby-runtime"
latest_feature_date: "2016-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/overview"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/runtime"
keywords:
  - "app"
  - "engine"
  - "flexible"
  - "environment"
  - "ruby"
  - "runtime"
  - "became"
  - "available"
---

# App Engine flexible environment Ruby runtime

Product: App Engine Admin API
Coverage: MEDIUM

## Step 02 Summary

The Ruby runtime became available for the App Engine flexible environment.

## Extended Definition

The Ruby runtime became available for the App Engine flexible environment.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/overview](https://docs.cloud.google.com/appengine/docs/flexible/overview)
- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- [https://docs.cloud.google.com/appengine/docs/standard/go/runtime](https://docs.cloud.google.com/appengine/docs/standard/go/runtime)

## Supporting Pages

### App Engine flexible environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/overview](https://docs.cloud.google.com/appengine/docs/flexible/overview)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Go Java Node.js PHP Python Ruby .NET Custom runtimes Features Customizable infrastructure - App Engine flexible environment instances are Compute Engine virtual machines, which means that you can take advantage of custom libraries, use SSH for debugging, and deploy your own Docker containers.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback App Engine flexible environment Stay organized with collections Save and categorize content based on your preferences.
- You can specify how much CPU and memory each instance of your application needs, and the App Engine flexible environment provisions the necessary infrastructure for you.
- Based on Compute Engine , the App Engine flexible environment automatically scales your app up and down while also balancing the load.

### "Go runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/runtime](https://docs.cloud.google.com/appengine/docs/standard/go/runtime)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Go runtime environment Stay organized with collections Save and categorize content based on your preferences.
- The Go runtime for App Engine in the standard environment is declared in the app.yaml file: runtime : go VERSION Where VERSION is the Go MAJOR and MINOR version numbers.
- Environment variables The following environment variables are set by the runtime: Environment variable Description GAE APPLICATION The ID of your App Engine application.
- NODE ENV (Only available in the Node.js runtime) Set to production when your service is deployed.

### "Package google.appengine.v1 \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- Source ID: `site-docs-reference-4`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Defaults to the default channel. threadsafe bool Whether multiple requests can be dispatched to this version at once. vm bool Whether to deploy this version in a container on a virtual machine. flexible runtime settings FlexibleRuntimeSettings Settings for App Engine flexible runtimes. app engine apis bool Allows App Engine second generation runtimes to access the legacy bundled services. beta settings map<string, string> Metadata settings that are supplied to this version to enable beta runtime features. env string App Engine execution environment for this version.
- Any value specified here in a request is ignored. flexible environment available bool App Engine flexible environment is available in the given location.
- Only applicable in the App Engine flexible environment. runtime string Desired runtime.
- FlexibleRuntimeSettings Runtime settings for the App Engine flexible environment.

