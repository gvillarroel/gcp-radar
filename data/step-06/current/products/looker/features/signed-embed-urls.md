---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.538Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Signed embed URLs"
feature_slug: "signed-embed-urls"
latest_feature_date: "2023-10-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
keywords:
  - "signed"
  - "embed"
  - "urls"
  - "get"
  - "url"
  - "option"
  - "can"
  - "now"
---

# Signed embed URLs

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The Get embed URL option can now generate a signed embed URL for a dashboard, Look, or Explore.

## Extended Definition

The Get embed URL option can now generate a signed embed URL for a dashboard, Look, or Explore.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url)
- [https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed](https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)

## Supporting Pages

### Create Signed Embed Url \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url)
- Source ID: `site-api-reference`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If not specified, the URL will be signed with the newest active embed secret defined in the Looker instance. embed domain string Optional.
- If the Looker instance is behind a load balancer or other proxy, target uri must be the public-facing domain name and port required to reach the Looker instance, not the actual internal network machine name of the Looker instance. session length integer Number of seconds the signed embed session will be valid after the embed session is started.
- Request POST /embed/sso url Datatype Description Request HTTP Request body HTTP Body Expand HTTP Body definition... body EmbedSsoParams Signed Embed URL parameters Expand EmbedSsoParams definition... target url string The complete URL of the Looker UI page to display in the embed context.
- The best way to obtain this target url is to navigate to the desired Looker page in your web browser and use the "Get embed URL" menu option to copy it to your clipboard and paste it into the target url property as a quoted string value in this API request.

### Admin settings - Embed \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed](https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Removing Look navigation from embedded Explores By default, embed users who have the explore and save content permissions will see the following options in the Explore Actions gear menu of an embedded Explore: The option to Save as a Look The Save & Schedule option (for embed users who have the send or scheduling permissions ) When set to Enabled , the Remove Look Navigation feature removes all references to Looks, including the options Save as a Look and Save & Schedule , from the embedded Explore's Explore Actions gear menu.
- In these cases, you need to have the Same-Origin Protections for Looker Login Pages option set to Disabled : If you use private embedding of Looker content in an iframe of a web page hosted by a non-Looker domain, you need to disable Same-Origin Protections for Looker Login Pages so that Looker can display the login page in the iframe and allow users to log into Looker.
- Dashboard Embed Content Navigation When this option is enabled, embedded dashboard viewers who have been granted the necessary permissions can view folders and the Looks and dashboards that they contain from embedded dashboards.
- Removing Look navigation from embedded dashboards When Remove Look Navigation is Enabled , references and navigation options to Looks from embedded Explores and embedded Look-linked dashboard tiles will be removed.

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- For an overview of how user permissions affect the domains to which users can send Looker content deliveries or alert notifications, see the following table: User type Permissions Email Domain Allowlist for Scheduled Content contains the domain friendly domain.org Email Domain Allowlist for Scheduled Content contains no domains Non-embed schedule look emails only Can email content deliveries to their own email address, to the email address of another Looker user on the same instance, or to an email address with the friendly domain.org domain Can email content deliveries to any email address schedule look emails and create alerts Can email content deliveries and alert notifications to their own email address, to the email address of another Looker user on the same instance, or to an email address with the friendly domain.org domain Can email content deliveries and alert notifications to any email address schedule external look emails only Can email content deliveries to any email address Can email content deliveries to any email address schedule external look emails and create alerts Can email content deliveries and alert notifications to any email address Can email content deliveries and alert notifications to any email address Signed embed schedule look emails only Can email content deliveries to an email address with the friendly domain.org domain Cannot email any Looker content schedule look emails and create alerts Can email content deliveries and alert notifications to an email address with the friendly domain.org domain Cannot email any Looker content or alert notifications schedule external look emails Can email content deliveries to any email address Can email content deliveries to any email address schedule external look emails and create alerts Can email content deliveries and alert notifications to any email address Can email content deliveries and alert notifications to any email address Embedded Looker content is accessed through a dedicated embed user account, not by individual user accounts.
- When it is enabled, any Looker admin user will be emailed when a new Looker account is created. ( Signed embed users are an exception; emails are not generated when a signed embed user is created.) The email will contain the new user's email address.
- One exception to the rules that are stipulated in the table is as follows: You can provide Looker with an embed user's email address by defining it in the email user attribute in the signed embed URL .
- Certification Process URL When a user who does not have the certify content permission wants to request certification of their content, and they select a dashboard's or LookML dashboard's three-dot dashboard menu , a Look's Explore actions gear menu , or an Explore or self-service Explore's Explore actions gear menu , they will see an option that says Want to get this dashboard/look/Explore certified? that includes a Learn how link.

