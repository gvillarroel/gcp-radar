---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T22:04:50.100Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "App Engine Users API IAM role and group-based admin recognition"
feature_slug: "app-engine-users-api-iam-role-and-group-based-admin-recognition"
latest_feature_date: "2016-04-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes"
  - "https://docs.cloud.google.com/appengine/docs/standard/authenticating-users"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic"
  - "https://docs.cloud.google.com/appengine/docs/admin-api"
keywords:
  - "Owner Editor Viewer"
  - "group-based admin recognition"
  - "IAM role recognition"
  - "group membership admin"
  - "Users API IAM"
  - "App Engine Users API"
  - "Users API"
  - "App Engine Admin"
---

# App Engine Users API IAM role and group-based admin recognition

Product: App Engine standard environment Node.js
Coverage: LOW

## Step 02 Summary

The App Engine Users API now recognizes Owner, Editor, Viewer, and App Engine Admin access for users based on IAM roles or group membership.

## Extended Definition

The App Engine Users API now recognizes Owner, Editor, Viewer, and App Engine Admin access for users based on IAM roles or group membership.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes](https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes)
- [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- [https://docs.cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic](https://docs.cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic)
- [https://docs.cloud.google.com/appengine/docs/admin-api](https://docs.cloud.google.com/appengine/docs/admin-api)

## Supporting Pages

### "App Engine standard environment for Node.js release notes \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes](https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- This means that any user who is a project Owner, Editor or Viewer or an App Engine Admin is considered an "admin" by the Users API, regardless of whether the user was granted the role directly or by membership in a group.
- April 18, 2016 Feature In response to your requests, the App Engine Users API joins the rest of App Engine in supporting IAM roles and group expansion.

### "Authenticating users \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- Source ID: `site-docs-reference-2`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: The page mentions the App Engine Users API but only in general as a legacy authentication option and provides no evidence of IAM-role or group-based admin recognition behavior.

Evidence snippets:
- This solution works well if you are upgrading an existing app from a first-generation runtime to a second-generation runtime, and want to continue to use the Users API.
- The Users API allows an App Engine app to perform the following tasks: Detect whether the current user is signed in using a Google Account.
- Users API Note: The Users API is only supported for Python, Java, Go, and PHP apps that use the legacy bundled services .
- Users API Authenticate users that are using Google and Google Workspace accounts.

### "Method: apps.services.versions.patch \_|\_ App Engine Admin API \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic](https://docs.cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Technology areas App Engine Admin API Reference Send feedback Method: apps.services.versions.patch Stay organized with collections Save and categorize content based on your preferences.

### APIs and Reference \_|\_ App Engine Admin API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api](https://docs.cloud.google.com/appengine/docs/admin-api)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Technology areas App Engine Admin API Reference Send feedback APIs and Reference Stay organized with collections Save and categorize content based on your preferences.

