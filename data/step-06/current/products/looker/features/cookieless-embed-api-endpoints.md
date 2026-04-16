---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.544Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Cookieless embed API endpoints"
feature_slug: "cookieless-embed-api-endpoints"
latest_feature_date: "2023-05-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/acquire_embed_cookieless_session"
  - "https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/delete_embed_cookieless_session"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed"
keywords:
  - "cookieless"
  - "embed"
  - "endpoints"
  - "now"
  - "marked"
  - "stable"
---

# Cookieless embed API endpoints

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Cookieless embed API endpoints are now marked as stable.

## Extended Definition

Cookieless embed API endpoints are now marked as stable.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/acquire_embed_cookieless_session](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/acquire_embed_cookieless_session)
- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/delete_embed_cookieless_session](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/delete_embed_cookieless_session)
- [https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed](https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed)

## Supporting Pages

### "Create Acquire cookieless embed session \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/acquire_embed_cookieless_session](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/acquire_embed_cookieless_session)
- Source ID: `site-api-reference`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Response 200: Embed cookieless acquire session response Datatype Description (object) EmbedCookielessSessionAcquireResponse authentication token string One time token used to create or to attach to an embedded session in the Looker application server. authentication token ttl integer Authentication token time to live in seconds. navigation token string Token used to load and navigate between Looker pages. navigation token ttl integer Navigation token time to live in seconds. api token string Token to used to call Looker APIs. api token ttl integer Api token time to live in seconds. session reference token string Token referencing the actual embed session.
- Request POST /embed/cookieless session/acquire Datatype Description Request HTTP Request body HTTP Body Expand HTTP Body definition... body EmbedCookielessSessionAcquire Embed user details Expand EmbedCookielessSessionAcquire definition... session length integer Number of seconds the signed embed session will be valid after the embed session is started.
- Home Documentation Data analytics Looker API Reference Send feedback Create Acquire cookieless embed session Stay organized with collections Save and categorize content based on your preferences.
- Since the user ids of Looker embed users may change with every embed session, external user id provides a way to assign a known, stable user identifier across multiple embed sessions.

### Delete cookieless embed session \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/delete_embed_cookieless_session](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/delete_embed_cookieless_session)
- Source ID: `site-api-reference`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Request DELETE /embed/cookieless session/{session reference token} Datatype Description Request HTTP Request path HTTP Path Expand HTTP Path definition... session reference token string Embed session reference token Response 204: Successfully deleted.
- Home Documentation Data analytics Looker API Reference Send feedback Delete cookieless embed session Stay organized with collections Save and categorize content based on your preferences.
- Version 4.0.26.6 (latest) Delete cookieless embed session This will delete the session associated with the given session reference token.
- This endpoint can be used to log an embed user out of the Looker instance.

### Admin settings - Embed \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed](https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Embed JWT Secret Note: When the Embed SSO Authentication option is Enabled and the Cookieless Embed option is enabled, this setting is revealed.
- Important: the Persistent Sessions setting on the Admin > Authentication > Sessions panel must also be enabled to use cookieless embedding.
- Cookieless embed requires that Embed SSO Authentication be enabled, but cookieless embed uses Embed JWT Secret instead of Embed Secret .
- Setting the JWT secret is not necessary, since the very first attempt to create a cookieless embed session will create the JWT token.

