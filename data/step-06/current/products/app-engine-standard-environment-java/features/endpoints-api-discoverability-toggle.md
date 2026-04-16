---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.919Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Endpoints @Api discoverability toggle"
feature_slug: "endpoints-api-discoverability-toggle"
latest_feature_date: "2015-12-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/developers-console"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/config/appref"
keywords:
  - "endpoints"
  - "discoverability"
  - "toggle"
  - "now"
  - "provides"
  - "discoverable"
  - "boolean"
  - "parameter"
---

# Endpoints @Api discoverability toggle

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

Endpoints API now provides a discoverable boolean parameter on `@Api` to let developers disable API discovery for their services.

## Extended Definition

Endpoints API now provides a discoverable boolean parameter on `@Api` to let developers disable API discovery for their services.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console)
- [https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid](https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid)
- [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)

## Supporting Pages

### "Setting up your Google Cloud project for App Engine \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console)
- Source ID: `site-docs-reference`
- Final score: 54
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Mail API for legacy bundled services \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid](https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: N/A

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- Source ID: `site-docs-reference`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- Example The following is an example of an app.yaml file: runtime : java25 instance class : F2 env variables : BUCKET NAME : "example-gcs-bucket" handlers : - url : /stylesheets static dir : stylesheets - url : /. secure : always redirect http response code : 301 script : auto The following table provides YAML examples of available fields in an app.yaml file: Runtime and app elements Element Description build env variables Optional.
- This parameter specifies the CPU usage threshold at which new instances will be started to handle traffic, enabling you to balance between performance and cost, with lower values increasing performance and increasing cost, and higher values decreasing performance but also decreasing cost.
- Example vpc access connector : name : "projects/ PROJECT ID /locations/ REGION /connectors/ CONNECTOR NAME " egress setting : all-traffic Handlers element The handlers element provides a list of URL patterns and descriptions of how they should be handled.
- When a user's request is redirected, the HTTP status code will be set to the value of the redirect http response code parameter.

