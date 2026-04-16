---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.439Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Visual Drilling"
feature_slug: "visual-drilling"
latest_feature_date: "2025-11-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil"
keywords:
  - "visual"
  - "drilling"
  - "generally"
  - "available"
  - "admin"
  - "settings"
  - "page"
  - "has"
---

# Visual Drilling

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Visual Drilling is generally available on the Admin > General Settings page; Visual Drilling has graduated from Labs and is generally available on the Admin > General Settings page.

## Extended Definition

Visual Drilling is generally available on the Admin > General Settings page; Visual Drilling has graduated from Labs and is generally available on the Admin > General Settings page.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil](https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil)

## Supporting Pages

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 266
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Or, with Visual Drilling enabled, you can use the link parameter to customize a drill visualization, as shown on the link parameter documentation page and on the More powerful data drilling Best Practices page.
- The Settings page in the General section of the Admin panel lets Looker admins configure the instance-wide settings for Looker.
- The locations in Looker where users might see other users include the following: The Users page in the Admin section of Looker Users' folders in the Folders section of the Looker main menu, if they have been granted at least View access to another user's personal folder The Manage Access pop-up , which is a part of folder management When the Closed System setting is enabled, a non-admin user without the see users permission can see only the other users with whom they share a group and only those groups of which they are a member.
- Note: If you have a permission that provides access to only select pages in the Admin panel, such as manage schedules , manage themes , or see admin , but you don't have the Admin role , the page or pages that are described here may not be visible to you in the Admin panel.

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- This permission is available only if themes have been enabled for your instance. manage internal themes None Instance Wide CM Users can configure theme settings for dashboards that are internal to Looker (non-embedded) on the Themes page in the Platform section of the Admin menu.
- This permission is available only if the Internal Dashboard Theming preview feature has been enabled for your instance. manage privatelabel None Instance Wide CM Users can configure private label settings on the Private Label page in the Platform section of the Admin menu.
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- Support Advanced Editor access data , clear cache refresh , create custom fields , create table calculations , develop , explore , follow alerts , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Support Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.

### Admin settings \u2013 Gemini in Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil](https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil)
- Source ID: `site-docs-reference`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Selectively enable and disable Gemini in Looker features Important: Gemini in Looker is enabled automatically for Looker (original) instances that meet at least one of the following criteria: The Automated Gemini in Looker enablement and user management setting on the Settings page in the Admin panel was enabled prior to June 9, 2025.
- It covers the following topics: How to enable and disable Gemini in Looker features for a Looker (original) instance The permissions that are required to use Gemini in Looker features This page is intended for users who are assigned the Looker Admin role for the Looker (original) instance.
- Home Documentation Data analytics Looker Guides Send feedback Admin settings – Gemini in Looker Stay organized with collections Save and categorize content based on your preferences.
- For information about enabling Gemini in Looker for Looker (Google Cloud core) instances, see the Administer Gemini on your Looker (Google Cloud core) instance documentation page.

