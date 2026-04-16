---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.419Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Delete Developer Copy"
feature_slug: "delete-developer-copy"
latest_feature_date: "2026-01-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
  - "https://docs.cloud.google.com/looker/docs/bar-options"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
keywords:
  - "delete"
  - "developer"
  - "copy"
  - "button"
  - "looker"
  - "ide"
  - "lets"
  - "lookml"
---

# Delete Developer Copy

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

A button in the Looker IDE lets LookML developers delete their local developer copy of a project's Git repository.

## Extended Definition

A button in the Looker IDE lets LookML developers delete their local developer copy of a project's Git repository.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/looker/docs/bar-options](https://docs.cloud.google.com/looker/docs/bar-options)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)

## Supporting Pages

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Default permission sets For new installations, Looker includes several default permission sets that you can start with: Permission Set Included Permissions Admin All permissions Developer access data , can create forecast , clear cache refresh , create custom fields , create table calculations , deploy , develop , download without limit , explore , manage spaces , mobile app access , save content , save dashboards , save looks , schedule look emails , see drill overlay , see lookml , see lookml dashboards , see looks , see pdts , see sql , see user dashboards , send to integration , schedule without limit , use sql runner NOTE : The see pdts permission is included in the Developer default permission only for Looker installations that were created with Looker 21.18 or later.
- However, they will still not be able to query models that you have not allowed. deploy develop Instance Wide NN Users can push their local LookML changes to production so that those changes become available to everyone. support access toggle develop Instance Wide NN Users can enable or disable access by Looker analysts to your Looker instance. manage project models develop Model Specific Users can add, edit, or delete model configurations for allowed models on the Edit Model Configuration page.
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- They can also view and edit that data source's configuration in Looker Studio. create table calculations explore Instance Wide NN Users can view, edit, or add table calculations create custom fields explore Instance Wide NN Users can view, edit, or add custom fields ; users who have only the explore permission can only view custom fields. can create forecast explore Instance Wide NN Users can create and edit forecasts in visualizations; users who don't have this permission can only view existing forecasts in the content to which they have access. can override vis config explore Instance Wide NN Users can access the Chart Config Editor , which lets them modify the Highchart API JSON values of a visualization and customize the visualization appearance and format. save content see looks Instance Wide NN This permission is a parent permission of save dashboards , save looks , and create public looks .

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Onboarding When enabled, Looker admins and developers who log in to a new Looker instance will see the Looker onboarding walkthrough, which guides users through the four major steps to make use of a Looker instance: Adding a connection Creating a project Editing project files as needed Exploring data Once any combination of admins or developers completes the full guide, it stops being displayed.
- This setting lets Looker admins define the email domains to which your users can deliver Looker content — Looks, dashboards, queries with visualizations — or alert notifications through email.
- Deleting a custom color collection You can delete a custom color collection by selecting the collection from the drop-down menu and clicking the Delete button that appears.
- URL Allowlist for Data Actions This setting lets you define URLs (such as https://looker.com ) where your users can process data actions .

### Bar chart options \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/bar-options](https://docs.cloud.google.com/looker/docs/bar-options)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- For Looker developers: The formatting used in the Value Format field is the same as formatting that is used with the value format LookML parameter , except that the value format parameter requires the formatting string to be enclosed in double quotes.
- The Edit Chart Config button is available if you have either the Looker Admin role or the can override vis config permission .
- See Time Formatting for Looker Charts for all formatting options. %b '%y, %H:%M displays Aug '14, 22:31 %B %Y, %I:%M %p displays August 2014, 10:31 PM %x %X displays 12/15/2014 10:31:00 %I:%M:%S %p displays 10:31:00 PM Y menu options Gridlines You can toggle the appearance of gridlines extending from the y-axis.
- Trend lines are not supported for the following use cases: Charts with a Stacked or Stacked Percentage series positioning type Charts with a By Row grid layout Charts with an Ordinal x-axis scale type Click the Add Trend Line button to add trend lines in your chart.

