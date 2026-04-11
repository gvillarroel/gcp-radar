---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:52:30.802Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "App Engine automatic scaling max instances setting"
feature_slug: "app-engine-automatic-scaling-max-instances-setting"
latest_feature_date: "2018-05-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
keywords:
  - "scaling upper limit"
  - "automatic scaling max instances"
  - "instance cap"
  - "max_instances"
  - "max instances"
  - "instance maximum"
  - "maximum instances"
---

# App Engine automatic scaling max instances setting

Product: App Engine standard environment Go
Coverage: LOW

## Step 02 Summary

A max instances setting was introduced to cap how many instances can be scheduled for an App Engine application.

## Extended Definition

A max instances setting was introduced to cap how many instances can be scheduled for an App Engine application.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)

## Supporting Pages

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- A service with basic scaling is configured by setting the maximum number of instances in the max instances parameter of the basic scaling setting.
- To override the default, specify a new max instances value in your app.yaml file, and deploy a new version or redeploy over an existing version.
- Note: For new projects you create after March 2025, App Engine sets the automatic scaling maximum instances default for standard environment deployments to 20.

