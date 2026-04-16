---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:48.299Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Go 1.11 runtime"
feature_slug: "go-1-11-runtime"
latest_feature_date: "2019-03-20"
deprecation_date: "2026-01-31"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/upgrade-go-runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/config/appref"
keywords:
  - "existing"
  - "allows"
  - "runtime"
---

# Go 1.11 runtime

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

The Go 1.11 runtime allows existing App Engine standard environment applications to continue running even though new deployments are no longer supported; App Engine standard environment supports the Go 1.11 runtime; deprecated on 2026-01-31.

## Extended Definition

The Go 1.11 runtime allows existing App Engine standard environment applications to continue running even though new deployments are no longer supported; App Engine standard environment supports the Go 1.11 runtime; deprecated on 2026-01-31.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/upgrade-go-runtime](https://docs.cloud.google.com/appengine/docs/standard/go/upgrade-go-runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/go/runtime](https://docs.cloud.google.com/appengine/docs/standard/go/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)

## Supporting Pages

### "Upgrade an existing application \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/upgrade-go-runtime](https://docs.cloud.google.com/appengine/docs/standard/go/upgrade-go-runtime)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The process of upgrading an existing app depends on the runtime version that your app currently uses: Go 1.11 (first-generation runtime) : You must migrate your app to the latest supported Go version .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Upgrade an existing application Stay organized with collections Save and categorize content based on your preferences.
- Go second-generation runtimes (after end of support) : To upgrade to a supported version of Go , update the app.yaml file by specifying a version of Go that you want your app to run.
- You must upgrade your applications to the latest supported runtime version to continue receiving security updates and be eligible for technical support.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- Example The following is an example of an app.yaml file: runtime : python314 instance class : F2 env variables : BUCKET NAME : "example-gcs-bucket" handlers : Matches requests to /images/... to files in static/images/... - url : /images static dir : static/images - url : /. secure : always redirect http response code : 301 script : auto The following table provides YAML examples of available fields in an app.yaml file: Runtime and app elements Element Description app engine apis Optional.
- For Python, these variables are available in the os.environ dictionary: env variables : DJANGO SETTINGS MODULE : "myapp.settings" Also see the list of runtime environment variables that cannot be overwritten. error handlers Optional.
- Basic and manual scaling B1 , B2 , B4 , B4 1G , B8 Default: B2 Basic and manual instance classes require you to specify either the basic scaling element or the manual scaling element. runtime Required.
- The following table lists the subelements of the handlers element that control the behavior for static files, static directories, scripts in runtimes other than Node.js, and other settings.

### "Go runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/runtime](https://docs.cloud.google.com/appengine/docs/standard/go/runtime)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Go runtime environment Stay organized with collections Save and categorize content based on your preferences.
- The Go runtime for App Engine in the standard environment is declared in the app.yaml file: runtime : go VERSION Where VERSION is the Go MAJOR and MINOR version numbers.
- Environment variables The following environment variables are set by the runtime: Environment variable Description GAE APPLICATION The ID of your App Engine application.
- The Go runtime is the software stack responsible for installing your web service's code and its dependencies and running your service.

