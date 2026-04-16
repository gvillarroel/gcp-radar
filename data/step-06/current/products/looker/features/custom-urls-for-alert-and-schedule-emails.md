---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.533Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Custom URLs for alert and schedule emails"
feature_slug: "custom-urls-for-alert-and-schedule-emails"
latest_feature_date: "2024-01-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-pages"
keywords:
  - "custom"
  - "urls"
  - "alert"
  - "schedule"
  - "emails"
  - "alerts"
  - "scheduled"
  - "can"
---

# Custom URLs for alert and schedule emails

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Alerts and scheduled emails can use custom URLs; Email alerts and scheduled deliveries can customize the View full dashboard link URL and link text.

## Extended Definition

Alerts and scheduled emails can use custom URLs; Email alerts and scheduled deliveries can customize the View full dashboard link URL and link text.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails](https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-pages](https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-pages)

## Supporting Pages

### Admin settings - Scheduled Emails \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails](https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails)
- Source ID: `site-docs-reference-required-4`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Changing your emailed data policy option Although your Looker instance will have a default emailed data policy option selected based on the instance's settings prior to an update to Looker 7.8, Looker admins can change this default setting at any time by navigating to the Scheduled Emails page in the Admin panel under Alerts & Schedules .
- The Scheduled Emails page, accessible from the Admin panel under Alerts & Schedules , lets Looker admins set a data sharing policy that applies to all new and existing one-time and scheduled email deliveries that use Looker 's native email destination.
- External recipients You can use the Scheduled Emails page in the Alerts & Schedules section of the Admin menu to monitor data being sent from Looker to non-users.
- These schedules display in the Scheduler History page in the Admin panel with an error indicating that the option to include links in scheduled emails must be enabled when a Send Link Only policy is enabled.

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- For an overview of how user permissions affect the domains to which users can send Looker content deliveries or alert notifications, see the following table: User type Permissions Email Domain Allowlist for Scheduled Content contains the domain friendly domain.org Email Domain Allowlist for Scheduled Content contains no domains Non-embed schedule look emails only Can email content deliveries to their own email address, to the email address of another Looker user on the same instance, or to an email address with the friendly domain.org domain Can email content deliveries to any email address schedule look emails and create alerts Can email content deliveries and alert notifications to their own email address, to the email address of another Looker user on the same instance, or to an email address with the friendly domain.org domain Can email content deliveries and alert notifications to any email address schedule external look emails only Can email content deliveries to any email address Can email content deliveries to any email address schedule external look emails and create alerts Can email content deliveries and alert notifications to any email address Can email content deliveries and alert notifications to any email address Signed embed schedule look emails only Can email content deliveries to an email address with the friendly domain.org domain Cannot email any Looker content schedule look emails and create alerts Can email content deliveries and alert notifications to an email address with the friendly domain.org domain Cannot email any Looker content or alert notifications schedule external look emails Can email content deliveries to any email address Can email content deliveries to any email address schedule external look emails and create alerts Can email content deliveries and alert notifications to any email address Can email content deliveries and alert notifications to any email address Embedded Looker content is accessed through a dedicated embed user account, not by individual user accounts.
- It is used specifically when links to your instance are created in scheduled emails and in all absolute URLs that Looker generates.
- See more about how this setting and a user's permissions affect their ability to deliver Looker content and alert notifications in the Permissions overview section on this page. looker internal email domain allowlist user attribute In addition to the email domains that are included in the global Email Domain Allowlist for Scheduled Content field, you can also specify email domains on a per-group level using the looker internal email domain allowlist user attribute .
- For example: ...&user attributes={"email":"joe@domain.com"} If you define the email user attribute in the embed URL, Looker will allow an embed user who has only the schedule look emails permission to email Looker content to their own email address, even if their email domain isn't in the Email Domain Allowlist for Scheduled Content field, or if the Email Domain Allowlist for Scheduled Content field is blank.

### "Admin settings - Alerts & Schedules pages \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-pages](https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-pages)
- Source ID: `site-docs-reference-required-4`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics Looker Guides Send feedback Admin settings - Alerts & Schedules pages Stay organized with collections Save and categorize content based on your preferences.
- These pages appear under the Alerts & Schedules section of Looker's Admin menu: Alerts : View, filter by, edit, and delete dashboard tile alerts.
- Scheduled Emails : Manage email delivery settings to include only links back to Looker content, only Looker data, or both links and data.
- Schedule History : View history of and troubleshoot scheduled data deliveries.

