---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.547Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Embed SDK pop-up dialog positioning"
feature_slug: "embed-sdk-pop-up-dialog-positioning"
latest_feature_date: "2023-04-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/acquire_embed_cookieless_session"
keywords:
  - "embed"
  - "sdk"
  - "pop"
  - "up"
  - "dialog"
  - "positioning"
  - "embedded"
  - "applications"
---

# Embed SDK pop-up dialog positioning

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Embedded applications can now set the position of pop-up dialogs in embedded environments.

## Extended Definition

Embedded applications can now set the position of pop-up dialogs in embedded environments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed](https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/acquire_embed_cookieless_session](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/acquire_embed_cookieless_session)

## Supporting Pages

### Admin settings - Embed \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed](https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Embed domain URL with Looker IDs — The URL in the custom link will include the domain that is selected in the Domain field in the scheduling or alerts dialog and the Looker path to the embedded dashboard, using the content ID.
- Embed domain URL with Looker slugs — The URL in the custom link includes the domain that is selected in the Domain field in the scheduling or alerts dialog and the Looker path to the embedded dashboard, using the content slug.
- Removing Look navigation from embedded Explores By default, embed users who have the explore and save content permissions will see the following options in the Explore Actions gear menu of an embedded Explore: The option to Save as a Look The Save & Schedule option (for embed users who have the send or scheduling permissions ) When set to Enabled , the Remove Look Navigation feature removes all references to Looks, including the options Save as a Look and Save & Schedule , from the embedded Explore's Explore Actions gear menu.
- Dashboard Embed Content Navigation When this option is enabled, embedded dashboard viewers who have been granted the necessary permissions can view folders and the Looks and dashboards that they contain from embedded dashboards.

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- For an overview of how user permissions affect the domains to which users can send Looker content deliveries or alert notifications, see the following table: User type Permissions Email Domain Allowlist for Scheduled Content contains the domain friendly domain.org Email Domain Allowlist for Scheduled Content contains no domains Non-embed schedule look emails only Can email content deliveries to their own email address, to the email address of another Looker user on the same instance, or to an email address with the friendly domain.org domain Can email content deliveries to any email address schedule look emails and create alerts Can email content deliveries and alert notifications to their own email address, to the email address of another Looker user on the same instance, or to an email address with the friendly domain.org domain Can email content deliveries and alert notifications to any email address schedule external look emails only Can email content deliveries to any email address Can email content deliveries to any email address schedule external look emails and create alerts Can email content deliveries and alert notifications to any email address Can email content deliveries and alert notifications to any email address Signed embed schedule look emails only Can email content deliveries to an email address with the friendly domain.org domain Cannot email any Looker content schedule look emails and create alerts Can email content deliveries and alert notifications to an email address with the friendly domain.org domain Cannot email any Looker content or alert notifications schedule external look emails Can email content deliveries to any email address Can email content deliveries to any email address schedule external look emails and create alerts Can email content deliveries and alert notifications to any email address Can email content deliveries and alert notifications to any email address Embedded Looker content is accessed through a dedicated embed user account, not by individual user accounts.
- Block Inline Embedded Images in Query Results By default, Looker does not display Base64 encoded images in query results.
- Looker won't show in-app guides to embedded users or non-admin users on private label instances.
- For example: ...&user attributes={"email":"joe@domain.com"} If you define the email user attribute in the embed URL, Looker will allow an embed user who has only the schedule look emails permission to email Looker content to their own email address, even if their email domain isn't in the Email Domain Allowlist for Scheduled Content field, or if the Email Domain Allowlist for Scheduled Content field is blank.

### "Create Acquire cookieless embed session \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/acquire_embed_cookieless_session](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/acquire_embed_cookieless_session)
- Source ID: `site-api-reference`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Response 200: Embed cookieless acquire session response Datatype Description (object) EmbedCookielessSessionAcquireResponse authentication token string One time token used to create or to attach to an embedded session in the Looker application server. authentication token ttl integer Authentication token time to live in seconds. navigation token string Token used to load and navigate between Looker pages. navigation token ttl integer Navigation token time to live in seconds. api token string Token to used to call Looker APIs. api token ttl integer Api token time to live in seconds. session reference token string Token referencing the actual embed session.
- This is an alternative to specifying the domain in the embedded domain allow list in the Looker embed admin page. session reference token string Token referencing the embed session and is used to generate new authentication, navigation and api tokens.
- This allows the embed session to attach a new embedded IFRAME to the embed session.
- Request POST /embed/cookieless session/acquire Datatype Description Request HTTP Request body HTTP Body Expand HTTP Body definition... body EmbedCookielessSessionAcquire Embed user details Expand EmbedCookielessSessionAcquire definition... session length integer Number of seconds the signed embed session will be valid after the embed session is started.

