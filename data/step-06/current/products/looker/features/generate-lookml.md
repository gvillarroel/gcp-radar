---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.495Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Generate LookML"
feature_slug: "generate-lookml"
latest_feature_date: "2025-02-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
keywords:
  - "generate"
  - "lookml"
  - "uses"
  - "gemini"
  - "assistance"
  - "code"
  - "suggestions"
  - "natural"
---

# Generate LookML

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Uses Gemini assistance to generate LookML code suggestions from natural-language prompts; Gemini assistance can generate LookML code suggestions from natural-language prompts in the Looker IDE.

## Extended Definition

Uses Gemini assistance to generate LookML code suggestions from natural-language prompts; Gemini assistance can generate LookML code suggestions from natural-language prompts in the Looker IDE.

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
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- LookML Assistant — allows users to write natural language prompts that produce Gemini-generated suggestions for LookML parameters, which they can add to their project files.
- To write LookML with Gemini assistance, you must be assigned a Looker role that contains the develop permission for at least one model in a LookML project.
- To use the Code Interpreter in Conversational Analytics to translate your natural language questions into Python code and execute that code to provide advanced analysis and visualizations, you must be a assigned a role that has the same permissions that are required to use Conversational Analytics.
- To generate Explore summaries, including the suggested purpose of the Explore and the types of data that are used in the query, you must have a role that contains the develop permission for at least one model in the LookML project and the explore permission to view and interact with Explores.

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Certification Process URL When a user who does not have the certify content permission wants to request certification of their content, and they select a dashboard's or LookML dashboard's three-dot dashboard menu , a Look's Explore actions gear menu , or an Explore or self-service Explore's Explore actions gear menu , they will see an option that says Want to get this dashboard/look/Explore certified? that includes a Learn how link.
- When it is enabled, any Looker admin user will be emailed when a new Looker account is created. ( Signed embed users are an exception; emails are not generated when a signed embed user is created.) The email will contain the new user's email address.
- The status of the Automated Gemini in Looker enablement and user management setting affects the group as follows: If you enable the setting: New users who are added to the instance are added to the group automatically.

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- This permission grants users the ability to perform the following tasks: Write LookML using Gemini assistance when they also have a Looker role that contains the develop permission for at least one model in a LookML project Create custom Looker visualizations using Gemini assistance when they also have a Looker role that contains the can override vis config permission Use Conversational Analytics with Looker Explore data in Looker Studio, even if they don't have a role that contains the explore permission, when they also have a Looker role that contains the access data permission on the model that they are querying chat with agent gemini in looker Model Specific Added 25.18 Conversational Analytics users can chat with data agents that use one or more Looker Explores.
- The gemini in looker permission that is included in this role enables users to perform the following tasks in the Looker instance with Gemini assistance: Write LookML — when they also have a Looker role that contains the develop permission for at least one model in a LookML project.
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- The permission list may look like this: ☑️ access data ☑️ see lookml dashboards ☑️ see looks ☑️ see user dashboards In this example, Looker uses indentation to indicate the following: The access data privilege can be selected at any time.

