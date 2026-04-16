---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.411Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Gemini in Looker"
feature_slug: "gemini-in-looker"
latest_feature_date: "2026-02-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
keywords:
  - "gemini"
  - "looker"
  - "provides"
  - "ai"
  - "assisted"
  - "features"
  - "based"
  - "instances"
---

# Gemini in Looker

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Gemini in Looker provides AI-assisted features in Looker; Provides Gemini-based AI features in Looker for supported instances.

## Extended Definition

Gemini in Looker provides AI-assisted features in Looker; Provides Gemini-based AI features in Looker for supported instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil](https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)

## Supporting Pages

### Admin settings \u2013 Gemini in Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil](https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil)
- Source ID: `site-docs-reference`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Selectively enable and disable Gemini in Looker features Important: Gemini in Looker is enabled automatically for Looker (original) instances that meet at least one of the following criteria: The Automated Gemini in Looker enablement and user management setting on the Settings page in the Admin panel was enabled prior to June 9, 2025.
- To use any of these Gemini-assisted features, users must be granted a Looker role that applies the gemini in looker permission to the appropriate models as well as a role that contains permissions to perform the Gemini-assisted task .
- Gemini in Looker represents a series of features in the Gemini for Google Cloud portfolio that provides generative AI-powered assistance to help you analyze and gain valuable insights from your data.
- Additional permissions To use any Gemini in Looker features, users must be granted a Looker role that contains permissions to perform the Gemini-assisted task.

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- A new user group called Default Gemini Users has been created automatically for all Looker (original) instances that use an open system configuration .
- Automated Gemini in Looker enablement and user management Note: This setting is not available for Looker (Google Cloud core) instances.
- Users in this group are assigned the Gemini role , which grants them the ability to use Gemini in Looker features.
- Gemini in Looker isn't enabled automatically for Looker (Google Cloud core) instances.

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Default roles For new instances, Looker creates the following default roles, each of which includes a default permission set of the same name: Admin Admin via IAM Developer Gemini Looker CI Users Conversational Analytics Agent Manager Conversational Analytics User Support Advanced Editor Support Basic Editor Customer Engineer Advanced Editor User Viewer The default roles in the following sections have conditions for use.
- To restrict users to accessing Gemini in Looker features with specific models, remove those user accounts from the Gemini role and create a new role that applies the gemini in looker permission on selected models.
- For more information about Gemini in Looker features, see the Gemini in Looker overview .
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.

