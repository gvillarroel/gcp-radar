---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.464Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Gemini Default Users group auto-creation"
feature_slug: "gemini-default-users-group-auto-creation"
latest_feature_date: "2025-06-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-groups"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
keywords:
  - "gemini"
  - "default"
  - "users"
  - "group"
  - "auto"
  - "creation"
  - "when"
  - "enabled"
---

# Gemini Default Users group auto-creation

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

When enabled, the Gemini Default Users group is created automatically and populated with existing and new users on open-system instances.

## Extended Definition

When enabled, the Gemini Default Users group is created automatically and populated with existing and new users on open-system instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-users-groups](https://docs.cloud.google.com/looker/docs/admin-panel-users-groups)
- [https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil](https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)

## Supporting Pages

### Admin settings - Groups \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-groups](https://docs.cloud.google.com/looker/docs/admin-panel-users-groups)
- Source ID: `site-docs-reference`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Gemini Default Users This user group has been created automatically for all Looker (original) instances that use an open system configuration .
- The status of the Automated Gemini in Looker enablement and user management setting affects the group as follows: If you enable the setting: New users who are added to the instance are added to the group automatically.
- Default groups The following groups are created by default in the Looker instance: All Users Looker CI Users Gemini Default Users All Users The All Users group contains all users in the Looker instance.
- Looker CI Users This user group is created automatically for Looker instances that have been enabled for Continuous Integration .

### Admin settings \u2013 Gemini in Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil](https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil)
- Source ID: `site-docs-reference`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Adding users to the Gemini Default Users group The Gemini Default Users group has been created automatically for all Looker (original) instances that use an open system configuration .
- You can assign the gemini in looker permission in any of the following ways: Grant users the Gemini default role Grant users a custom role that contains the gemini in looker permission Grant users Conversational Analytics permissions, permission sets, or roles Add them to the Gemini Default Users group Granting the Gemini default role The gemini in looker permission is the only permission that is included in the Gemini default role , which by default applies to all models on the instance.
- Users in this group are assigned the Gemini role , which grants them the ability to use Gemini in Looker features when they also have a role that includes the other required permissions to use Gemini in Looker features .
- You may need to remove those users from the Gemini Default Users group, which is assigned the Gemini default role by default.

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- Support Advanced Editor access data , clear cache refresh , create custom fields , create table calculations , develop , explore , follow alerts , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Support Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- Support Basic Editor access data , clear cache refresh , create custom fields , create table calculations , explore , follow alerts , manage privatelabel , manage themes , see admin , see alerts , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see schedules , see sql , see datagroups , see system activity , see user dashboards , see users NOTE : The Support Basic Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- Make sure to remove those users from the Gemini Default Users group.

