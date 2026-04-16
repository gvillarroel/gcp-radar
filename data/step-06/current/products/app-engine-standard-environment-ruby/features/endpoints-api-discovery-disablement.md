---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:18:25.425Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "Endpoints API discovery disablement"
feature_slug: "endpoints-api-discovery-disablement"
latest_feature_date: "2015-11-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/ruby/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/getting-started"
  - "https://docs.cloud.google.com/appengine/docs/admin-api"
keywords:
  - "discoverable"
  - "disablement"
  - "annotation"
  - "endpoints"
  - "discovery"
  - "parameter"
  - "boolean"
  - "supports"
---

# Endpoints API discovery disablement

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

The Endpoints API supports a discoverable boolean annotation parameter to disable API discovery.

## Extended Definition

The Endpoints API supports a discoverable boolean annotation parameter to disable API discovery.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/ruby/config/appref](https://docs.cloud.google.com/appengine/docs/standard/ruby/config/appref)
- [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- [https://docs.cloud.google.com/appengine/docs/admin-api](https://docs.cloud.google.com/appengine/docs/admin-api)

## Supporting Pages

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ruby/config/appref](https://docs.cloud.google.com/appengine/docs/standard/ruby/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 41
- Re-rank relevance: N/A

Evidence snippets:
- This parameter specifies the CPU usage threshold at which new instances will be started to handle traffic, enabling you to balance between performance and cost, with lower values increasing performance and increasing cost, and higher values decreasing performance but also decreasing cost.
- When a user's request is redirected, the HTTP status code will be set to the value of the redirect http response code parameter.
- You can set the parameter to the value 0 to allow scaling to 0 instances to lower costs when no requests are being served.
- If you are using a runtime that supports buildpacks , you can define build environment variables in your app.yaml file.

### "An Overview of the Admin API \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

### APIs and Reference \_|\_ App Engine Admin API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api](https://docs.cloud.google.com/appengine/docs/admin-api)
- Source ID: `site-docs-reference-4`
- Final score: 34
- Re-rank relevance: N/A

