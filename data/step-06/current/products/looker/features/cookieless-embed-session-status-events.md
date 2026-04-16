---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.554Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Cookieless embed session status events"
feature_slug: "cookieless-embed-session-status-events"
latest_feature_date: "2023-01-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/acquire_embed_cookieless_session"
  - "https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/delete_embed_cookieless_session"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed"
keywords:
  - "cookieless"
  - "embed"
  - "session"
  - "status"
  - "events"
  - "looker"
  - "now"
  - "publishes"
---

# Cookieless embed session status events

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Looker now publishes status events for cookieless embed sessions.

## Extended Definition

Looker now publishes status events for cookieless embed sessions.

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
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Response 200: Embed cookieless acquire session response Datatype Description (object) EmbedCookielessSessionAcquireResponse authentication token string One time token used to create or to attach to an embedded session in the Looker application server. authentication token ttl integer Authentication token time to live in seconds. navigation token string Token used to load and navigate between Looker pages. navigation token ttl integer Navigation token time to live in seconds. api token string Token to used to call Looker APIs. api token ttl integer Api token time to live in seconds. session reference token string Token referencing the actual embed session.
- Home Documentation Data analytics Looker API Reference Send feedback Create Acquire cookieless embed session Stay organized with collections Save and categorize content based on your preferences.
- Request POST /embed/cookieless session/acquire Datatype Description Request HTTP Request body HTTP Body Expand HTTP Body definition... body EmbedCookielessSessionAcquire Embed user details Expand EmbedCookielessSessionAcquire definition... session length integer Number of seconds the signed embed session will be valid after the embed session is started.
- Maximum session length accepted is 2592000 seconds (30 days). force logout login boolean When true, the embed session will purge any residual Looker login state (such as in browser cookies) before creating a new login state with the given embed user info.

### Delete cookieless embed session \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/delete_embed_cookieless_session](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/delete_embed_cookieless_session)
- Source ID: `site-api-reference`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Looker API Reference Send feedback Delete cookieless embed session Stay organized with collections Save and categorize content based on your preferences.
- Request DELETE /embed/cookieless session/{session reference token} Datatype Description Request HTTP Request path HTTP Path Expand HTTP Path definition... session reference token string Embed session reference token Response 204: Successfully deleted.
- Version 4.0.26.6 (latest) Delete cookieless embed session This will delete the session associated with the given session reference token.
- This endpoint can be used to log an embed user out of the Looker instance.

### Admin settings - Embed \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed](https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Cookieless Embed Starting in Looker 23.8, the embed domain can be included when the cookieless session is acquired.
- Embedded Domain Allowlist You need to use this setting to make use of JavaScript events to pass data or actions between a parent page and a Looker iframe.
- Important: the Persistent Sessions setting on the Admin > Authentication > Sessions panel must also be enabled to use cookieless embedding.
- Setting the JWT secret is not necessary, since the very first attempt to create a cookieless embed session will create the JWT token.

