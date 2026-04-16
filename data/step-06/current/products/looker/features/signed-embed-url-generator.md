---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.533Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Signed Embed URL Generator"
feature_slug: "signed-embed-url-generator"
latest_feature_date: "2024-02-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
keywords:
  - "signed"
  - "embed"
  - "url"
  - "generator"
  - "can"
  - "include"
  - "themes"
  - "current"
---

# Signed Embed URL Generator

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The signed embed URL generator can include themes, current parameters, and external group IDs.

## Extended Definition

The signed embed URL generator can include themes, current parameters, and external group IDs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url)
- [https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed](https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)

## Supporting Pages

### Create Signed Embed Url \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url)
- Source ID: `site-api-reference`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If provided and valid, the embed domain will be added to the embed domain allowlist if it is not currently in the list Response 200: Signed Embed URL Datatype Description (object) EmbedUrlResponse url lock string The embed URL.
- If the Looker instance is behind a load balancer or other proxy, target uri must be the public-facing domain name and port required to reach the Looker instance, not the actual internal network machine name of the Looker instance. session length integer Number of seconds the signed embed session will be valid after the embed session is started.
- Request POST /embed/sso url Datatype Description Request HTTP Request body HTTP Body Expand HTTP Body definition... body EmbedSsoParams Signed Embed URL parameters Expand EmbedSsoParams definition... target url string The complete URL of the Looker UI page to display in the embed context.
- Permissions for the embed user are defined by the groups in which the embed user is a member ( group ids property) and the lists of models and permissions assigned to the embed user.

### Admin settings - Embed \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed](https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- After you enter a signed embed URL, the Embed URI quick check section will display the parameters and values that are included in the signed embed URL.
- Embed domain URL with Looker IDs — The URL in the custom link will include the domain that is selected in the Domain field in the scheduling or alerts dialog and the Looker path to the embedded dashboard, using the content ID.
- Embed domain URL with Looker slugs — The URL in the custom link includes the domain that is selected in the Domain field in the scheduling or alerts dialog and the Looker path to the embedded dashboard, using the content slug.
- Alerts and scheduling custom url Unless disabled , email deliveries from embedded dashboards, either from alerts or scheduled deliveries , include a link that reads View full dashboard .

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- Support Advanced Editor access data , clear cache refresh , create custom fields , create table calculations , develop , explore , follow alerts , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Support Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- Users who have the save content permission but not the embed save shared space permission will only have the option to save content to their personal embed folder . manage embed settings None Instance Wide CM Users can edit embed settings on the Embed page in the Platform section of the Admin menu. manage themes None Instance Wide CM Users can configure theme settings for embedded dashboards, Looks, and Explores on the Themes page in the Platform section of the Admin menu.
- This permission is available only if themes have been enabled for your instance. manage internal themes None Instance Wide CM Users can configure theme settings for dashboards that are internal to Looker (non-embedded) on the Themes page in the Platform section of the Admin menu.

