---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.540Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Signed embed URL domain allowlist auto-add"
feature_slug: "signed-embed-url-domain-allowlist-auto-add"
latest_feature_date: "2023-08-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed"
keywords:
  - "signed"
  - "embed"
  - "url"
  - "domain"
  - "allowlist"
  - "auto"
  - "add"
  - "creation"
---

# Signed embed URL domain allowlist auto-add

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The signed embed URL creation endpoint can now add a valid embed domain to the allowlist automatically.

## Extended Definition

The signed embed URL creation endpoint can now add a valid embed domain to the allowlist automatically.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed](https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed)

## Supporting Pages

### Create Signed Embed Url \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url)
- Source ID: `site-api-reference`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If provided and valid, the embed domain will be added to the embed domain allowlist if it is not currently in the list Response 200: Signed Embed URL Datatype Description (object) EmbedUrlResponse url lock string The embed URL.
- If the Looker instance is behind a load balancer or other proxy, target uri must be the public-facing domain name and port required to reach the Looker instance, not the actual internal network machine name of the Looker instance. session length integer Number of seconds the signed embed session will be valid after the embed session is started.
- If not specified, the URL will be signed with the newest active embed secret defined in the Looker instance. embed domain string Optional.
- If specified and valid, the domain will be added to the embed domain allowlist if it is missing.

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- For an overview of how user permissions affect the domains to which users can send Looker content deliveries or alert notifications, see the following table: User type Permissions Email Domain Allowlist for Scheduled Content contains the domain friendly domain.org Email Domain Allowlist for Scheduled Content contains no domains Non-embed schedule look emails only Can email content deliveries to their own email address, to the email address of another Looker user on the same instance, or to an email address with the friendly domain.org domain Can email content deliveries to any email address schedule look emails and create alerts Can email content deliveries and alert notifications to their own email address, to the email address of another Looker user on the same instance, or to an email address with the friendly domain.org domain Can email content deliveries and alert notifications to any email address schedule external look emails only Can email content deliveries to any email address Can email content deliveries to any email address schedule external look emails and create alerts Can email content deliveries and alert notifications to any email address Can email content deliveries and alert notifications to any email address Signed embed schedule look emails only Can email content deliveries to an email address with the friendly domain.org domain Cannot email any Looker content schedule look emails and create alerts Can email content deliveries and alert notifications to an email address with the friendly domain.org domain Cannot email any Looker content or alert notifications schedule external look emails Can email content deliveries to any email address Can email content deliveries to any email address schedule external look emails and create alerts Can email content deliveries and alert notifications to any email address Can email content deliveries and alert notifications to any email address Embedded Looker content is accessed through a dedicated embed user account, not by individual user accounts.
- For example: ...&user attributes={"email":"joe@domain.com"} If you define the email user attribute in the embed URL, Looker will allow an embed user who has only the schedule look emails permission to email Looker content to their own email address, even if their email domain isn't in the Email Domain Allowlist for Scheduled Content field, or if the Email Domain Allowlist for Scheduled Content field is blank.
- If a group is assigned multiple email domain sets, for example through membership in multiple groups, then members of that group will be able to send emails to all domains that are assigned to each of the user attribute values, as well as the domains that are listed in the Email Domain Allowlist for Scheduled Content admin setting.
- In other words, the set of email domains that a group can send emails to is the union of the set of email domains that are listed in the Email Domain Allowlist for Scheduled Content field and every set of email domains that are assigned to the group by the looker internal email domain allowlist user attribute.

### Admin settings - Embed \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed](https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Embedded Domain Allowlist You need to use this setting to make use of JavaScript events to pass data or actions between a parent page and a Looker iframe.
- Embed domain for schedules and alerts allowlist Specify all domains that custom URLs in email deliveries may link to.
- Select content path is not available if the Embed domain for schedules and alerts allowlist field is left blank.
- In these cases, you need to have the Same-Origin Protections for Looker Login Pages option set to Disabled : If you use private embedding of Looker content in an iframe of a web page hosted by a non-Looker domain, you need to disable Same-Origin Protections for Looker Login Pages so that Looker can display the login page in the iframe and allow users to log into Looker.

