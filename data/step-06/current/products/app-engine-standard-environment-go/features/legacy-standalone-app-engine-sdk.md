---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:48.297Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Legacy standalone App Engine SDK"
feature_slug: "legacy-standalone-app-engine-sdk"
latest_feature_date: "2019-07-30"
deprecation_date: "2020-07-30"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/services/access"
  - "https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/bundled-services-overview"
keywords:
  - "downloadable"
  - "distribution"
  - "standalone"
  - "older"
  - "legacy"
---

# Legacy standalone App Engine SDK

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

The legacy standalone App Engine SDK is the older downloadable SDK distribution for App Engine development tools; deprecated on 2020-07-30.

## Extended Definition

The legacy standalone App Engine SDK is the older downloadable SDK distribution for App Engine development tools; deprecated on 2020-07-30.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/services/access](https://docs.cloud.google.com/appengine/docs/standard/go/services/access)
- [https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview](https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview)
- [https://docs.cloud.google.com/appengine/docs/standard/go/bundled-services-overview](https://docs.cloud.google.com/appengine/docs/standard/go/bundled-services-overview)

## Supporting Pages

### "Access legacy bundled services for Go \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/services/access](https://docs.cloud.google.com/appengine/docs/standard/go/services/access)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Migration considerations You should be aware of the following considerations if you are migrating to the Go runtime and your app uses legacy bundled services: To test the legacy bundled services functionality in your Go app, run your application in your local environment with the development tools that you usually use, such as go run .
- For example, if using Memcache, do the following: import ( "google.golang.org/appengine/v2" "google.golang.org/appengine/v2/memcache" ) For the full list of available package names, see the legacy bundled services API references documentation .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Access legacy bundled services for Go Stay organized with collections Save and categorize content based on your preferences.
- If you run go mod tidy and find that it is still importing an older version of the App Engine services SDK for Go, you have probably missed upgrading an import statement.

### "Overview of legacy bundled services \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview](https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview)
- Source ID: `site-docs-reference`
- Final score: 49
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Because several of the legacy runtimes are no longer maintained by their respective open-source communities, as an App Engine developer, you may face hard choices on whether to invest time and effort in migrating to a newer runtime or else incur growing costs to retain your app on a legacy runtime.
- For the legacy bundled services that are not available as separate products in Google Cloud, such as image processing, search, and messaging, you can use third-party providers or other workarounds as suggested in the Runtimes guide.
- To reduce runtime migration complexity, Google Cloud now supports a set of App Engine legacy bundled services and their associated APIs on second-generation runtimes, which include Python 3 , Java 11+ , Go 1.12+ , and PHP 7+ .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Overview of legacy bundled services Stay organized with collections Save and categorize content based on your preferences.

### "Overview of legacy bundled services \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/bundled-services-overview](https://docs.cloud.google.com/appengine/docs/standard/go/bundled-services-overview)
- Source ID: `site-docs-reference-4`
- Final score: 49
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Because several of the legacy runtimes are no longer maintained by their respective open-source communities, as an App Engine developer, you may face hard choices on whether to invest time and effort in migrating to a newer runtime or else incur growing costs to retain your app on a legacy runtime.
- For the legacy bundled services that are not available as separate products in Google Cloud, such as image processing, search, and messaging, you can use third-party providers or other workarounds as suggested in the Runtimes guide.
- To reduce runtime migration complexity, Google Cloud now supports a set of App Engine legacy bundled services and their associated APIs on second-generation runtimes, which include Python 3 , Java 11+ , Go 1.12+ , and PHP 7+ .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Overview of legacy bundled services Stay organized with collections Save and categorize content based on your preferences.

