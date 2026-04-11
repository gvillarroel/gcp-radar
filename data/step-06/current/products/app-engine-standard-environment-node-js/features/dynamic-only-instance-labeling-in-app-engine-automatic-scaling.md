---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T22:04:50.088Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Dynamic-only instance labeling in App Engine automatic scaling"
feature_slug: "dynamic-only-instance-labeling-in-app-engine-automatic-scaling"
latest_feature_date: "2018-05-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
keywords:
  - "resident instance label"
  - "dynamic label"
  - "automatic scaling instance labels"
  - "Dynamic instance"
  - "dynamic only"
  - "dynamic-only"
  - "dynamic instances"
---

# Dynamic-only instance labeling in App Engine automatic scaling

Product: App Engine standard environment Node.js
Coverage: LOW

## Step 02 Summary

Automatic scaling now labels instances as Dynamic only, removing resident instance labeling while preserving equivalent scheduling behavior.

## Extended Definition

Automatic scaling now labels instances as Dynamic only, removing resident instance labeling while preserving equivalent scheduling behavior.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)

## Supporting Pages

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference-2`
- Final score: 36
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Scaling dynamic instances App Engine applications that use basic or automatic scaling are powered by any number of dynamic instances at a given time, depending on the volume of incoming requests.
- When an application is not being used at all, App Engine turns off its associated dynamic instances, but readily reloads them as soon as they are needed.
- As requests for your application increase, the number of dynamic instances may increase as well.

