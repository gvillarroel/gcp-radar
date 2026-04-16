---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.539Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Email Allowlist for Scheduled Content Labs"
feature_slug: "email-allowlist-for-scheduled-content-labs"
latest_feature_date: "2023-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed"
keywords:
  - "email"
  - "allowlist"
  - "scheduled"
  - "content"
  - "labs"
  - "feature"
  - "lets"
  - "admin"
---

# Email Allowlist for Scheduled Content Labs

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

This Labs feature lets admin users define email allowlist domains at the group level with the looker_internal_email_domain_allowlist user attribute.

## Extended Definition

This Labs feature lets admin users define email allowlist domains at the group level with the looker_internal_email_domain_allowlist user attribute.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails](https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails)
- [https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed](https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed)

## Supporting Pages

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If a group is assigned multiple email domain sets, for example through membership in multiple groups, then members of that group will be able to send emails to all domains that are assigned to each of the user attribute values, as well as the domains that are listed in the Email Domain Allowlist for Scheduled Content admin setting.
- The user attribute accepts the same string format as the Email Domain Allowlist for Scheduled Content admin setting.
- For an overview of how user permissions affect the domains to which users can send Looker content deliveries or alert notifications, see the following table: User type Permissions Email Domain Allowlist for Scheduled Content contains the domain friendly domain.org Email Domain Allowlist for Scheduled Content contains no domains Non-embed schedule look emails only Can email content deliveries to their own email address, to the email address of another Looker user on the same instance, or to an email address with the friendly domain.org domain Can email content deliveries to any email address schedule look emails and create alerts Can email content deliveries and alert notifications to their own email address, to the email address of another Looker user on the same instance, or to an email address with the friendly domain.org domain Can email content deliveries and alert notifications to any email address schedule external look emails only Can email content deliveries to any email address Can email content deliveries to any email address schedule external look emails and create alerts Can email content deliveries and alert notifications to any email address Can email content deliveries and alert notifications to any email address Signed embed schedule look emails only Can email content deliveries to an email address with the friendly domain.org domain Cannot email any Looker content schedule look emails and create alerts Can email content deliveries and alert notifications to an email address with the friendly domain.org domain Cannot email any Looker content or alert notifications schedule external look emails Can email content deliveries to any email address Can email content deliveries to any email address schedule external look emails and create alerts Can email content deliveries and alert notifications to any email address Can email content deliveries and alert notifications to any email address Embedded Looker content is accessed through a dedicated embed user account, not by individual user accounts.
- See more about how this setting and a user's permissions affect their ability to deliver Looker content and alert notifications in the Permissions overview section on this page. looker internal email domain allowlist user attribute In addition to the email domains that are included in the global Email Domain Allowlist for Scheduled Content field, you can also specify email domains on a per-group level using the looker internal email domain allowlist user attribute .

### Admin settings - Scheduled Emails \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails](https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails)
- Source ID: `site-docs-reference-required-4`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Scheduled Emails page, accessible from the Admin panel under Alerts & Schedules , lets Looker admins set a data sharing policy that applies to all new and existing one-time and scheduled email deliveries that use Looker 's native email destination.
- Home Documentation Data analytics Looker Guides Send feedback Admin settings - Scheduled Emails Stay organized with collections Save and categorize content based on your preferences.
- Old Emailed Data Policy What Gets Delivered New Emailed Data Policy What Gets Delivered Send Link Only Link back to Looker content Send Data Only Existing Schedules : An embedded data visualization or file attachment replaces the link New Deliveries : Embedded data or a file attachment Send Link Only Link back to Looker content Send Links and Data Existing Schedules : Embedded data or a file attachment and option to include links automatically selected New Deliveries : Embedded data or a file attachment and option to include links automatically selected Send Data Only Embedded data or a file attachment Send Link Only Existing Schedules : Link back to Looker content replaces embedded; no file is attached New Deliveries : Link back to Looker content Send Data Only Embedded data or a file attachment Send Links and Data Existing Schedules : Embedded data or a file attachment and option to include links automatically selected New Deliveries : Embedded data or a file attachment and option to include links automatically selected Send Links and Data Embedded data or a file attachment and option to include links back to Looker content Send Link Only Existing Schedules : Link back to Looker content New Deliveries : Link back to Looker content Send Links and Data Embedded data or a file attachment and option to include links back to Looker content Send Data Only Existing Schedules : Embedded data or a file attachment New Deliveries : Embedded data or a file attachment Switching deliveries to Send Link Only If you are switching to the Send Link Only option, all new one-time and scheduled email deliveries will be sent containing only links back to Looker and the title of the Looker content, rather than embedded or attached Looker content.
- Changing your emailed data policy option Although your Looker instance will have a default emailed data policy option selected based on the instance's settings prior to an update to Looker 7.8, Looker admins can change this default setting at any time by navigating to the Scheduled Emails page in the Admin panel under Alerts & Schedules .

### Admin settings - Embed \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed](https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed)
- Source ID: `site-docs-reference`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Remove Look Navigation The Remove Look Navigation feature lets admins further customize embedded content, specifically embedded Explores and embedded dashboards .
- The Alerts and scheduling custom url option lets you configure a custom URL in alerts and scheduled email deliveries that will link embed users to the embedding application, rather than a Looker instance.
- The Embed page in the Platform section of the Admin menu lets you configure settings for embedded Looker content.
- Removing Look navigation from embedded Explores By default, embed users who have the explore and save content permissions will see the following options in the Explore Actions gear menu of an embedded Explore: The option to Save as a Look The Save & Schedule option (for embed users who have the send or scheduling permissions ) When set to Enabled , the Remove Look Navigation feature removes all references to Looks, including the options Save as a Look and Save & Schedule , from the embedded Explore's Explore Actions gear menu.

