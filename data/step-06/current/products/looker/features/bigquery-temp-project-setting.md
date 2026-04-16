---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.468Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "BigQuery Temp Project setting"
feature_slug: "bigquery-temp-project-setting"
latest_feature_date: "2025-04-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-google"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
keywords:
  - "bigquery"
  - "temp"
  - "project"
  - "setting"
  - "lets"
  - "looker"
  - "admins"
  - "specify"
---

# BigQuery Temp Project setting

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Lets Looker admins specify the project used to write PDTs for BigQuery connections.

## Extended Definition

Lets Looker admins specify the project used to write PDTs for BigQuery connections.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-google](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-google)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)

## Supporting Pages

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- This setting lets Looker admins define the email domains to which your users can deliver Looker content — Looks, dashboards, queries with visualizations — or alert notifications through email.
- The Settings page in the General section of the Admin panel lets Looker admins configure the instance-wide settings for Looker.
- See more about how this setting and a user's permissions affect their ability to deliver Looker content and alert notifications in the Permissions overview section on this page. looker internal email domain allowlist user attribute In addition to the email domains that are included in the global Email Domain Allowlist for Scheduled Content field, you can also specify email domains on a per-group level using the looker internal email domain allowlist user attribute .
- Onboarding When enabled, Looker admins and developers who log in to a new Looker instance will see the Looker onboarding walkthrough, which guides users through the four major steps to make use of a Looker instance: Adding a connection Creating a project Editing project files as needed Exploring data Once any combination of admins or developers completes the full guide, it stops being displayed.

### Admin settings - Google authentication \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-google](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-google)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Alternate login for admins - Lets admins continue logging in with email and password, which is a useful fall-back in case of problems setting up Google OAuth.
- To add a user with an email address that is not in your Google Domain: Enable the Alternate login for admins and specified users option on the Google Auth page Create or modify an existing user role to add the login special email permission Go to Add Users from the users panel ( /admin/users/new ) Add the email address(es) you would like to include, and the roles those users should have, which must include a role with the login special email permission Those users are now able to sign in using https://mycompany.looker.com/login/email (hidden URL) Note: If a user has authenticated into the Looker instance using only Google, you can enable alternate login only by using the Looker API.
- Note: Setting up Google authentication in Looker (Google Cloud core) is covered on the Create an OAuth client and credentials for a Looker (Google Cloud core) instance and the Use Google OAuth for Looker (Google Cloud core) user authentication documentation pages.
- If a user's attempt to sign in fails, but Looker does not display an error message, the user may have edited their Google Google Workspace account name and deleted either their first or last name.

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- The following list describes all the permissions that are available in Looker, in the order in which they appear on the New Permission Set page in the Admin section: Permission Depends On Type Definition access data None Model Specific Users can access data from Looker, but only the data that admins specify.
- Looker admins can control the email domains that Looker users and embed users can send email deliveries to with the Email domain allowlist on the Settings page of the Admin panel.
- They can also view and edit that data source's configuration in Looker Studio. create table calculations explore Instance Wide NN Users can view, edit, or add table calculations create custom fields explore Instance Wide NN Users can view, edit, or add custom fields ; users who have only the explore permission can only view custom fields. can create forecast explore Instance Wide NN Users can create and edit forecasts in visualizations; users who don't have this permission can only view existing forecasts in the content to which they have access. can override vis config explore Instance Wide NN Users can access the Chart Config Editor , which lets them modify the Highchart API JSON values of a visualization and customize the visualization appearance and format. save content see looks Instance Wide NN This permission is a parent permission of save dashboards , save looks , and create public looks .

