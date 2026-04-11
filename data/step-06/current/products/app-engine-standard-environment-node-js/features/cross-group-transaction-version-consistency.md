---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T22:04:50.098Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Cross-group transaction version consistency"
feature_slug: "cross-group-transaction-version-consistency"
latest_feature_date: "2016-05-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes"
keywords:
  - "cross-group XG consistency"
  - "XG transaction versioning"
  - "Datastore transaction versioning"
  - "cross-group transactions"
  - "cross-group transaction"
  - "new or updated entities"
  - "entity groups"
  - "version consistency"
---

# Cross-group transaction version consistency

Product: App Engine standard environment Node.js
Coverage: LOW

## Step 02 Summary

Cross-group transactions now assign the same version number to all new or updated entities regardless of entity group.

## Extended Definition

Cross-group transactions now assign the same version number to all new or updated entities regardless of entity group.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes](https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes)

## Supporting Pages

### "App Engine standard environment for Node.js release notes \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes](https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- May 25, 2016 Feature Cloud Datastore When committing a cross-group transaction, version numbers returned for new or updated entities are all the same.
- With the previous behavior, entities within the same group committed as part of a cross-group transaction, had the same version number, but entities in different groups might have had different version numbers.
- This change ensures all new and updated entities have an identical version number, regardless of their entity group, when committed as part of a cross-group transaction.

