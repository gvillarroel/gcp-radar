---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.489Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Studio in Looker support for Google OAuth-authenticated instances"
feature_slug: "studio-in-looker-support-for-google-oauth-authenticated-instances"
latest_feature_date: "2025-03-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/all_user_login_lockouts"
  - "https://docs.cloud.google.com/bigquery/docs/api-performance"
  - "https://docs.cloud.google.com/bigquery/docs/facebook-ads-transformation"
keywords:
  - "studio"
  - "looker"
  - "oauth"
  - "authenticated"
  - "instances"
  - "can"
  - "enabled"
  - "use"
---

# Studio in Looker support for Google OAuth-authenticated instances

Product: Looker
Coverage: LOW

## Step 02 Summary

Studio in Looker can be enabled on Looker instances that use Google OAuth authentication.

## Extended Definition

Studio in Looker can be enabled on Looker instances that use Google OAuth authentication.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/all_user_login_lockouts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/all_user_login_lockouts)
- [https://docs.cloud.google.com/bigquery/docs/api-performance](https://docs.cloud.google.com/bigquery/docs/api-performance)
- [https://docs.cloud.google.com/bigquery/docs/facebook-ads-transformation](https://docs.cloud.google.com/bigquery/docs/facebook-ads-transformation)

## Supporting Pages

### Get All User Login Lockouts \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/all_user_login_lockouts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/all_user_login_lockouts)
- Source ID: `site-api-reference`
- Final score: 54
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Request GET /user login lockouts Datatype Description Request HTTP Request query HTTP Query Expand HTTP Query definition... fields string Include only these fields in the response Response 200: User Login Lockout Datatype Description (array) UserLoginLockout [] can lock object Operations the current user is able to perform on this object key lock string Hash of user's client id auth type lock string Authentication method for login failures ip lock string IP address of most recent failed attempt user id lock string User ID remote id lock string Remote ID of user if using LDAP full name lock string User's name email lock string Email address associated with the user's account fail count lock integer Number of failures that triggered the lockout lockout at lock string Time when lockout was triggered 400: Bad Request Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link 404: Not Found Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link 429: Too Many Requests Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link Examples Kotlin https://github.com/looker-open-source/sdk-codegen/blob/main/kotlin/src/test/TestMethods.kt Swift https://github.com/looker-open-source/sdk-codegen/blob/main/swift/looker/Tests/lookerTests/smokeTests.swift Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Data analytics Looker API Reference Send feedback Get All User Login Lockouts Stay organized with collections Save and categorize content based on your preferences.

### API performance tips \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/api-performance](https://docs.cloud.google.com/bigquery/docs/api-performance)
- Source ID: `site-docs-reference-required-6`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### Facebook Ads report transformation \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/facebook-ads-transformation](https://docs.cloud.google.com/bigquery/docs/facebook-ads-transformation)
- Source ID: `site-docs-reference-required-6`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

