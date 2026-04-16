---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.503Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Use Legacy Project Creation Page"
feature_slug: "use-legacy-project-creation-page"
latest_feature_date: "2024-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/default-configuration"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
keywords:
  - "use"
  - "legacy"
  - "project"
  - "creation"
  - "page"
  - "when"
  - "enabled"
  - "feature"
---

# Use Legacy Project Creation Page

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

When enabled, this legacy feature shows the deprecated New Project page instead of the Create a Model page; When enabled, this legacy feature shows the deprecated New Project page instead of the Create a Model page.

## Extended Definition

When enabled, this legacy feature shows the deprecated New Project page instead of the Create a Model page; When enabled, this legacy feature shows the deprecated New Project page instead of the Create a Model page.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/default-configuration](https://docs.cloud.google.com/bigquery/docs/default-configuration)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)

## Supporting Pages

### Manage configuration settings \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/default-configuration](https://docs.cloud.google.com/bigquery/docs/default-configuration)
- Source ID: `site-docs-reference-required-6`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example specifies several regional, project-level settings, including the following: Time zone: America/Los Angeles Cloud KMS key: an example key Query timeout: 1 hour (1,800,000 milliseconds) Interactive query queue timeout: 10 minutes (600,000 milliseconds) Batch query queue timeout: 20 minutes (1,200,000 milliseconds) Reservation-based fairness: enabled Global queries: enabled for running and for accessing data INFORMATION SCHEMA : enabled To see all regional project settings, go to project set options list .
- To configure the default location at the project level, follow these steps: Console Go to the BigQuery page in the Google Cloud console.
- If enabled, the idle slots are shared equally across all reservations first, and then across projects within the reservation.
- Set the use legacy sql flag to false : ALTER ORGANIZATION SET OPTIONS ( region- REGION .default time zone = NULL , region- REGION .default kms key name = NULL , region- REGION .default query job timeout ms = NULL , region- REGION .default interactive query queue timeout ms = NULL , region- REGION .default batch query queue timeout ms = NULL , region- REGION .default storage billing model = NULL , region- REGION .default max time travel hours = NULL , region- REGION .default cloud resource connection id = NULL , region- REGION .default sql dialect option = NULL , region- REGION .enable reservation based fairness = NULL , region- REGION .enable global queries execution = NULL , region- REGION .enable global queries data access = NULL ); API Call the jobs.query method and supply the DDL statement in the request body's query property.

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- The locations in Looker where users might see other users include the following: The Users page in the Admin section of Looker Users' folders in the Folders section of the Looker main menu, if they have been granted at least View access to another user's personal folder The Manage Access pop-up , which is a part of folder management When the Closed System setting is enabled, a non-admin user without the see users permission can see only the other users with whom they share a group and only those groups of which they are a member.
- Onboarding When enabled, Looker admins and developers who log in to a new Looker instance will see the Looker onboarding walkthrough, which guides users through the four major steps to make use of a Looker instance: Adding a connection Creating a project Editing project files as needed Exploring data Once any combination of admins or developers completes the full guide, it stops being displayed.
- Force mobile authentication When this setting is enabled, users are required to sign in to the Looker mobile app and the Looker (Legacy) app every time they open the app on their mobile device.
- Mobile Application Access When this setting is enabled, users can log in to their Looker account on the instance using the Looker mobile app and the Looker (Legacy) app .

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- This permission is applied to individual models or model sets, rather than across the entire Looker instance or to connections. see system activity None Instance Wide CM Users can access the System Activity Explores and dashboards to view usage, history, and other metadata about a Looker instance. see admin None Instance Wide CM Users can have read-only access to admin resources, including pages in the Admin panel , with the exception of the following pages: Support Access Preview Features Legacy Features Export Content Access Actions (if the page displays only the enabled or disabled states of actions) This permission doesn't provide access to System Activity pages. mobile app access None Instance Wide NN Users can sign in to your instance on a mobile device using the Looker mobile app .
- Support Advanced Editor access data , clear cache refresh , create custom fields , create table calculations , develop , explore , follow alerts , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Support Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- Support Basic Editor access data , clear cache refresh , create custom fields , create table calculations , explore , follow alerts , manage privatelabel , manage themes , see admin , see alerts , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see schedules , see sql , see datagroups , see system activity , see user dashboards , see users NOTE : The Support Basic Editor permission set is available only when the Tiered Support Access Labs feature is enabled.

