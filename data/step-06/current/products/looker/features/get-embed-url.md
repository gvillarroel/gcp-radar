---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.543Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Get embed URL"
feature_slug: "get-embed-url"
latest_feature_date: "2023-06-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
keywords:
  - "get"
  - "embed"
  - "url"
  - "feature"
  - "automatically"
  - "generates"
  - "private"
  - "dashboard"
---

# Get embed URL

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

This feature automatically generates a private embed URL for a dashboard, Look, or Explore and can include parameters and an existing theme.

## Extended Definition

This feature automatically generates a private embed URL for a dashboard, Look, or Explore and can include parameters and an existing theme.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)

## Supporting Pages

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- Smart Single Value Text Size Enabling the Smart Single Value Text Size feature automatically resizes the fonts on single value visualizations displayed within dashboard tiles.
- Include custom filter values for boards Enabling the Include custom filter values for boards feature enables the Include custom filter values setting instance-wide by default when users add dashboards to boards.
- Limit Automatically refresh dashboard option When this setting is enabled, only Looker admins will be able to enable the Automatically refresh dashboard option on user-defined dashboards.
- When you're using this feature, single value tiles on dashboards may look less consistent, but more characters will fit on smaller tiles.

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- Support Advanced Editor access data , clear cache refresh , create custom fields , create table calculations , develop , explore , follow alerts , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Support Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- Support Basic Editor access data , clear cache refresh , create custom fields , create table calculations , explore , follow alerts , manage privatelabel , manage themes , see admin , see alerts , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see schedules , see sql , see datagroups , see system activity , see user dashboards , see users NOTE : The Support Basic Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- This permission is available only if the Access Content Certification preview feature has been enabled for your instance. clear cache refresh access data Model Specific Users can clear cache and refresh internal and embedded dashboards, dashboard tiles, Looks, and Explores.

### Create Signed Embed Url \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url)
- Source ID: `site-api-reference`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the Looker instance is behind a load balancer or other proxy, target uri must be the public-facing domain name and port required to reach the Looker instance, not the actual internal network machine name of the Looker instance. session length integer Number of seconds the signed embed session will be valid after the embed session is started.
- Content and embed users associated with the external group id will not be accessible to normal Looker users or embed users not associated with this external group id. user attributes object A dictionary of name-value pairs associating a Looker user attribute name with a value. secret id string Id of the embed secret to use to sign this SSO url.
- Timezone values are validated against the IANA Timezone standard and can be seen in the Application Time Zone dropdown list on the Looker General Settings admin page. permissions string[] models string[] group ids string[] external group id string A unique value identifying an embed-exclusive group.
- Request POST /embed/sso url Datatype Description Request HTTP Request body HTTP Body Expand HTTP Body definition... body EmbedSsoParams Signed Embed URL parameters Expand EmbedSsoParams definition... target url string The complete URL of the Looker UI page to display in the embed context.

