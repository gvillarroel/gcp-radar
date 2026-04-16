---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.433Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "search_lookml_dashboards API endpoint"
feature_slug: "search-lookml-dashboards-api-endpoint"
latest_feature_date: "2026-01-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/action-hub"
keywords:
  - "search"
  - "lookml"
  - "dashboards"
  - "endpoint"
  - "generally"
  - "available"
  - "after"
  - "being"
---

# search_lookml_dashboards API endpoint

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The search_lookml_dashboards API endpoint is generally available after being out of Labs; Provides a generally available API endpoint for searching LookML dashboards.

## Extended Definition

The search_lookml_dashboards API endpoint is generally available after being out of Labs; Provides a generally available API endpoint for searching LookML dashboards.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/action-hub](https://docs.cloud.google.com/looker/docs/action-hub)

## Supporting Pages

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- Support Advanced Editor access data , clear cache refresh , create custom fields , create table calculations , develop , explore , follow alerts , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Support Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- Support Basic Editor access data , clear cache refresh , create custom fields , create table calculations , explore , follow alerts , manage privatelabel , manage themes , see admin , see alerts , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see schedules , see sql , see datagroups , see system activity , see user dashboards , see users NOTE : The Support Basic Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- LookML dashboard user access data , clear cache refresh , mobile app access , see lookml dashboards User access data , can create forecast , clear cache refresh , create custom fields , create table calculations , download without limit , explore , manage spaces , mobile app access , save content , save dashboards , save looks , schedule look emails , see drill overlay , see lookml , see lookml dashboards , see looks , see sql , see user dashboards , send to integration , schedule without limit User who can't view LookML access data , can create forecast , clear cache refresh , create custom fields , create table calculations , download without limit , explore , manage spaces , mobile app access , save content , save dashboards , save looks , schedule look emails , see lookml dashboards , see looks , see user dashboards , send to integration , schedule without limit Viewer access data , clear cache refresh , download without limit , mobile app access , schedule look emails , see drill overlay , see lookml dashboards , see looks , see user dashboards , schedule without limit You'll see these permission sets appear as options when you create a new role.

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- This allows LookML dashboards that use those collections to render consistently across instances if both instances have the same custom collections named identically.
- This applies both to existing LookML dashboards and LookML Explores and any LookML dashboards or LookML Explores created in the future.
- Auto-certify LookML When this option is enabled, all LookML dashboards and LookML Explores will be automatically certified.
- Certification Process URL When a user who does not have the certify content permission wants to request certification of their content, and they select a dashboard's or LookML dashboard's three-dot dashboard menu , a Look's Explore actions gear menu , or an Explore or self-service Explore's Explore actions gear menu , they will see an option that says Want to get this dashboard/look/Explore certified? that includes a Learn how link.

### Sharing data through an action hub \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/action-hub](https://docs.cloud.google.com/looker/docs/action-hub)
- Source ID: `site-docs-reference-required-4`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Configuring a LookML model for use with an action For both custom actions and actions that are available from the Looker Action Hub, you must identify the relevant data fields by using the tags parameter in your LookML model.
- In the params parameter of your action file, include the following: params = [{ description: "A description of the param.", label: "A label for the param.", name: "action param name", user attribute name: "user attribute name", required: true, sensitive: true, }] where user attribute name is the user attribute that is defined in the Name field on the User Attributes page in the Users section of the Admin panel, required: true means that a user must have a non-null and valid value defined for that user attribute to see the action when data is being delivered, and sensitive: true means that the user attribute is encrypted and never displayed in the Looker UI once it is entered.
- On the action settings/enablement page, a Looker admin must configure the action's form fields to pull information from the user attribute by clicking the user attribute icon to the right of the appropriate field and selecting the desired user attribute. requiredField parameters in cell-level actions For cell-level actions, you can configure your model's LookML fields to deliver data to that action destination by specifying which tags your action supports in the requiredFields parameter of your action file.
- Parameter Required Description Data Type tag No If present, matches a field that has this tag. string any tag No If present, supersedes tag and matches a field that has any of the provided tags. string all tags No If present, supersedes tag and matches a field that has all the provided tags. string Supported data formats The DataActionRequest class defines what data delivery format is available for the action to work with.

