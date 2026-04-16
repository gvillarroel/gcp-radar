---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.551Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Cookieless embed error logging"
feature_slug: "cookieless-embed-error-logging"
latest_feature_date: "2023-02-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/acquire_embed_cookieless_session"
  - "https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/delete_embed_cookieless_session"
  - "https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_embed_url_as_me"
keywords:
  - "cookieless"
  - "embed"
  - "error"
  - "logging"
  - "requests"
  - "now"
  - "log"
  - "additional"
---

# Cookieless embed error logging

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Cookieless embed requests now log additional error details when an issue is detected.

## Extended Definition

Cookieless embed requests now log additional error details when an issue is detected.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/acquire_embed_cookieless_session](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/acquire_embed_cookieless_session)
- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/delete_embed_cookieless_session](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/delete_embed_cookieless_session)
- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_embed_url_as_me](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_embed_url_as_me)

## Supporting Pages

### "Create Acquire cookieless embed session \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/acquire_embed_cookieless_session](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/acquire_embed_cookieless_session)
- Source ID: `site-api-reference`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 400: Bad Request Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link 403: Permission Denied Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link 404: Not Found Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link 409: Resource Already Exists Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link 422: Validation Error Datatype Description (object) ValidationError message lock string Error details errors ValidationErrorDetail [] Expand ValidationErrorDetail definition... field lock string Field with error code lock string Error code message lock string Error info message documentation url lock string Documentation link documentation url lock string Documentation link 429: Too Many Requests Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Response 200: Embed cookieless acquire session response Datatype Description (object) EmbedCookielessSessionAcquireResponse authentication token string One time token used to create or to attach to an embedded session in the Looker application server. authentication token ttl integer Authentication token time to live in seconds. navigation token string Token used to load and navigate between Looker pages. navigation token ttl integer Navigation token time to live in seconds. api token string Token to used to call Looker APIs. api token ttl integer Api token time to live in seconds. session reference token string Token referencing the actual embed session.
- Request POST /embed/cookieless session/acquire Datatype Description Request HTTP Request body HTTP Body Expand HTTP Body definition... body EmbedCookielessSessionAcquire Embed user details Expand EmbedCookielessSessionAcquire definition... session length integer Number of seconds the signed embed session will be valid after the embed session is started.
- Home Documentation Data analytics Looker API Reference Send feedback Create Acquire cookieless embed session Stay organized with collections Save and categorize content based on your preferences.

### Delete cookieless embed session \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/delete_embed_cookieless_session](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/delete_embed_cookieless_session)
- Source ID: `site-api-reference`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Datatype Description (string) string 400: Bad Request Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link 403: Permission Denied Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link 404: Not Found Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link 422: Validation Error Datatype Description (object) ValidationError message lock string Error details errors ValidationErrorDetail [] Expand ValidationErrorDetail definition... field lock string Field with error code lock string Error code message lock string Error info message documentation url lock string Documentation link documentation url lock string Documentation link 429: Too Many Requests Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Request DELETE /embed/cookieless session/{session reference token} Datatype Description Request HTTP Request path HTTP Path Expand HTTP Path definition... session reference token string Embed session reference token Response 204: Successfully deleted.
- Home Documentation Data analytics Looker API Reference Send feedback Delete cookieless embed session Stay organized with collections Save and categorize content based on your preferences.
- Version 4.0.26.6 (latest) Delete cookieless embed session This will delete the session associated with the given session reference token.

### Create Embed URL \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_embed_url_as_me](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_embed_url_as_me)
- Source ID: `site-api-reference`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 400: Bad Request Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link 403: Permission Denied Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link 404: Not Found Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link 409: Resource Already Exists Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link 422: Validation Error Datatype Description (object) ValidationError message lock string Error details errors ValidationErrorDetail [] Expand ValidationErrorDetail definition... field lock string Field with error code lock string Error code message lock string Error info message documentation url lock string Documentation link documentation url lock string Documentation link 429: Too Many Requests Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- If the Looker instance is behind a load balancer or other proxy, target uri must be the public-facing domain name and port required to reach the Looker instance, not the actual internal network machine name of the Looker instance. session length integer Number of seconds the signed embed session will be valid after the embed session is started.
- Request POST /embed/token url/me Datatype Description Request HTTP Request body HTTP Body Expand HTTP Body definition... body EmbedParams Embed parameters Expand EmbedParams definition... target url string The complete URL of the Looker UI page to display in the embed context.
- The best way to obtain this target url is to navigate to the desired Looker page in your web browser, copy the URL shown in the browser address bar, insert "/embed" after the host/port, and paste it into the target url property as a quoted string value in this API request.

