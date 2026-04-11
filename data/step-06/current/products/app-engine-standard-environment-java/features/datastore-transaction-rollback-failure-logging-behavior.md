---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:44:03.409Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Datastore Transaction.rollback() failure logging behavior"
feature_slug: "datastore-transaction-rollback-failure-logging-behavior"
latest_feature_date: "2016-02-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes"
keywords:
  - "transaction rollback logging"
  - "Datastore Transaction.rollback()"
  - "rollback failure"
  - "low-level Datastore API"
  - "rollback no exception"
  - "INFO log"
  - "Datastore rollback"
  - "rollback()"
---

# Datastore Transaction.rollback() failure logging behavior

Product: App Engine standard environment Java
Coverage: LOW

## Step 02 Summary

The low-level Datastore API now logs an INFO message for `Transaction.rollback()` failures instead of throwing an exception.

## Extended Definition

The low-level Datastore API now logs an INFO message for `Transaction.rollback()` failures instead of throwing an exception.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes)

## Supporting Pages

### "App Engine standard environment for Java gen2 release notes \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Feature Java runtime notes Improved exception handling for the low-level API for Datastore, Transaction.rollback() .
- Instead of an exception, it generates an INFO log message when an operation associated with the transaction has failed.

