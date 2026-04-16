---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.446Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Gemini CLI extension for Looker"
feature_slug: "gemini-cli-extension-for-looker"
latest_feature_date: "2025-09-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
  - "https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards"
keywords:
  - "gemini"
  - "cli"
  - "extension"
  - "looker"
  - "dedicated"
  - "can"
  - "connect"
  - "run"
---

# Gemini CLI extension for Looker

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

A dedicated Gemini CLI extension can connect to Looker to run queries, create Looks and dashboards, and retrieve LookML model elements.

## Extended Definition

A dedicated Gemini CLI extension can connect to Looker to run queries, create Looks and dashboards, and retrieve LookML model elements.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards](https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards)

## Supporting Pages

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- For an overview of how user permissions affect the domains to which users can send Looker content deliveries or alert notifications, see the following table: User type Permissions Email Domain Allowlist for Scheduled Content contains the domain friendly domain.org Email Domain Allowlist for Scheduled Content contains no domains Non-embed schedule look emails only Can email content deliveries to their own email address, to the email address of another Looker user on the same instance, or to an email address with the friendly domain.org domain Can email content deliveries to any email address schedule look emails and create alerts Can email content deliveries and alert notifications to their own email address, to the email address of another Looker user on the same instance, or to an email address with the friendly domain.org domain Can email content deliveries and alert notifications to any email address schedule external look emails only Can email content deliveries to any email address Can email content deliveries to any email address schedule external look emails and create alerts Can email content deliveries and alert notifications to any email address Can email content deliveries and alert notifications to any email address Signed embed schedule look emails only Can email content deliveries to an email address with the friendly domain.org domain Cannot email any Looker content schedule look emails and create alerts Can email content deliveries and alert notifications to an email address with the friendly domain.org domain Cannot email any Looker content or alert notifications schedule external look emails Can email content deliveries to any email address Can email content deliveries to any email address schedule external look emails and create alerts Can email content deliveries and alert notifications to any email address Can email content deliveries and alert notifications to any email address Embedded Looker content is accessed through a dedicated embed user account, not by individual user accounts.
- Onboarding When enabled, Looker admins and developers who log in to a new Looker instance will see the Looker onboarding walkthrough, which guides users through the four major steps to make use of a Looker instance: Adding a connection Creating a project Editing project files as needed Exploring data Once any combination of admins or developers completes the full guide, it stops being displayed.
- The status of the Automated Gemini in Looker enablement and user management setting affects the group as follows: If you enable the setting: New users who are added to the instance are added to the group automatically.
- Application Time Zone When displaying data in an Explore, a Look, or a dashboard, Looker can convert time data from the connection's Database Time Zone to the appropriate time zone for that user.

### "Downloading or delivering dashboards in rendered formats \_|\_ Looker \_\

- URL: [https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards](https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- Important : Starting in Looker 26.4, table charts, scatterplot charts, and Google Maps charts that have increased row limits are subject to the following limitations when you download, send, or schedule dashboards in PDF format: The query results for each table chart on a dashboard will display up to 50,000 rows, to a maximum total limit of 200,000 cells per dashboard.
- Home Documentation Data analytics Looker Best Practices Send feedback Downloading or delivering dashboards in rendered formats Stay organized with collections Save and categorize content based on your preferences.
- Here is an example of a PDF download with Looker's default settings: You can change the appearance of the dashboard in the PDF by adjusting several Looker settings.
- This page provides examples of the types of output these rendered formats produce, given different settings in Looker.

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- The Looker CI Users role has the following permissions that are required to perform CI runs: deploy : required for setting up the GitHub webhooks that are required for CI runs see ci : required to view the results of CI runs, view the CI Suites page, and run CI suites manage ci : required to create CI suites, manage CI users, and configure the Git connection with Continuous Integration Gemini The Gemini role cannot be renamed or deleted and contains only the gemini in looker permission in its permission set.
- This permission is applied to individual models or model sets, rather than across the entire Looker instance or to connections. see system activity None Instance Wide CM Users can access the System Activity Explores and dashboards to view usage, history, and other metadata about a Looker instance. see admin None Instance Wide CM Users can have read-only access to admin resources, including pages in the Admin panel , with the exception of the following pages: Support Access Preview Features Legacy Features Export Content Access Actions (if the page displays only the enabled or disabled states of actions) This permission doesn't provide access to System Activity pages. mobile app access None Instance Wide NN Users can sign in to your instance on a mobile device using the Looker mobile app .
- This permission grants users the ability to perform the following tasks: Write LookML using Gemini assistance when they also have a Looker role that contains the develop permission for at least one model in a LookML project Create custom Looker visualizations using Gemini assistance when they also have a Looker role that contains the can override vis config permission Use Conversational Analytics with Looker Explore data in Looker Studio, even if they don't have a role that contains the explore permission, when they also have a Looker role that contains the access data permission on the model that they are querying chat with agent gemini in looker Model Specific Added 25.18 Conversational Analytics users can chat with data agents that use one or more Looker Explores.

