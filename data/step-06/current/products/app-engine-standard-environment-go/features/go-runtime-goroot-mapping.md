---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:48.311Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Go runtime GOROOT mapping"
feature_slug: "go-runtime-goroot-mapping"
latest_feature_date: "2017-05-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/runtime"
keywords:
  - "goroot"
  - "maps"
  - "mapping"
  - "version"
  - "runtime"
---

# Go runtime GOROOT mapping

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

App Engine maps Go api_version values to a specific GOROOT directory for runtime selection; App Engine maps Go api_version values to a specific GOROOT directory for runtime selection.

## Extended Definition

App Engine maps Go api_version values to a specific GOROOT directory for runtime selection; App Engine maps Go api_version values to a specific GOROOT directory for runtime selection.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains)
- [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/go/runtime](https://docs.cloud.google.com/appengine/docs/standard/go/runtime)

## Supporting Pages

### "Mapping custom domains \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains)
- Source ID: `site-docs-reference-4`
- Final score: 101
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Deleting custom domains from your app In order to delete a custom domain mapping from your app, your account must have the App Engine Admin role ( roles/appengine.appAdmin ) or a custom role that contains the appengine.applications.update permission.
- Troubleshooting If your app shows authentication errors after configuring your custom domain with Google Workspace domain authentication, remove your custom domain mapping and redo the steps for mapping a custom domain to your app .
- Note: Some third party CDN providers might inadvertently intercept validation requests, preventing them from reaching the App Engine app and causing the domain mapping to fail or its certificate to fail to renew.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Mapping custom domains Stay organized with collections Save and categorize content based on your preferences.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Example The following is an example of an app.yaml file: runtime : python314 instance class : F2 env variables : BUCKET NAME : "example-gcs-bucket" handlers : Matches requests to /images/... to files in static/images/... - url : /images static dir : static/images - url : /. secure : always redirect http response code : 301 script : auto The following table provides YAML examples of available fields in an app.yaml file: Runtime and app elements Element Description app engine apis Optional.
- Python example handlers : - url : /youraccount/. secure : always script : auto To target a specific version of your app using the REGION ID .r.appspot.com domain, you replace the periods that would usually separate the subdomain components of the URL with the string " -dot- ", for example: https:// VERSION ID -dot-default-dot- PROJECT ID .
- The combined length of VERSION-dot-SERVICE-dot-PROJECT ID , where VERSION is the name of your version, SERVICE is the name of your service, and PROJECT ID is your project ID, cannot be longer than 63 characters and cannot start or end with a hyphen.
- For Python, these variables are available in the os.environ dictionary: env variables : DJANGO SETTINGS MODULE : "myapp.settings" Also see the list of runtime environment variables that cannot be overwritten. error handlers Optional.

### "Go runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/runtime](https://docs.cloud.google.com/appengine/docs/standard/go/runtime)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Go runtime for App Engine in the standard environment is declared in the app.yaml file: runtime : go VERSION Where VERSION is the Go MAJOR and MINOR version numbers.
- For other supported Go versions, and the corresponding Ubuntu version for your Go version, see the Runtime support schedule .
- The Go runtime uses the latest stable release of the version that is specified in your app.yaml file.
- For example, your application might be deployed at the minor version Go 1.13.1 and be automatically updated to version 1.13.2 at a later deployment, but it won't be automatically updated to the major version Go 1.14.

