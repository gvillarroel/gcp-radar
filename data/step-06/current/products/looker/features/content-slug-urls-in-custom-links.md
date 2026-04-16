---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.541Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Content slug URLs in custom links"
feature_slug: "content-slug-urls-in-custom-links"
latest_feature_date: "2023-07-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
keywords:
  - "content"
  - "slug"
  - "urls"
  - "custom"
  - "links"
  - "alert"
  - "scheduled"
  - "email"
---

# Content slug URLs in custom links

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Custom links in alert and scheduled email deliveries can use a URL built from content slugs.

## Extended Definition

Custom links in alert and scheduled email deliveries can use a URL built from content slugs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails](https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails)
- [https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed](https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)

## Supporting Pages

### Admin settings - Scheduled Emails \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails](https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails)
- Source ID: `site-docs-reference-required-4`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Old Emailed Data Policy What Gets Delivered New Emailed Data Policy What Gets Delivered Send Link Only Link back to Looker content Send Data Only Existing Schedules : An embedded data visualization or file attachment replaces the link New Deliveries : Embedded data or a file attachment Send Link Only Link back to Looker content Send Links and Data Existing Schedules : Embedded data or a file attachment and option to include links automatically selected New Deliveries : Embedded data or a file attachment and option to include links automatically selected Send Data Only Embedded data or a file attachment Send Link Only Existing Schedules : Link back to Looker content replaces embedded; no file is attached New Deliveries : Link back to Looker content Send Data Only Embedded data or a file attachment Send Links and Data Existing Schedules : Embedded data or a file attachment and option to include links automatically selected New Deliveries : Embedded data or a file attachment and option to include links automatically selected Send Links and Data Embedded data or a file attachment and option to include links back to Looker content Send Link Only Existing Schedules : Link back to Looker content New Deliveries : Link back to Looker content Send Links and Data Embedded data or a file attachment and option to include links back to Looker content Send Data Only Existing Schedules : Embedded data or a file attachment New Deliveries : Embedded data or a file attachment Switching deliveries to Send Link Only If you are switching to the Send Link Only option, all new one-time and scheduled email deliveries will be sent containing only links back to Looker and the title of the Looker content, rather than embedded or attached Looker content.
- Send Links and Data With the Send Links and Data option selected, when you are setting up deliveries of Looks and dashboards to email, the Scheduler will contain fields to name your delivery, list email recipients, elect a format for the data, define the delivery's trigger or frequency, and specify additional advanced scheduling options, including selecting whether to include links back to Looker content in the body of the email.
- Changing your emailed data policy option Although your Looker instance will have a default emailed data policy option selected based on the instance's settings prior to an update to Looker 7.8, Looker admins can change this default setting at any time by navigating to the Scheduled Emails page in the Admin panel under Alerts & Schedules .
- The Scheduled Emails page, accessible from the Admin panel under Alerts & Schedules , lets Looker admins set a data sharing policy that applies to all new and existing one-time and scheduled email deliveries that use Looker 's native email destination.

### Admin settings - Embed \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed](https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed)
- Source ID: `site-docs-reference`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Embed domain URL with Looker slugs — The URL in the custom link includes the domain that is selected in the Domain field in the scheduling or alerts dialog and the Looker path to the embedded dashboard, using the content slug.
- The Alerts and scheduling custom url option lets you configure a custom URL in alerts and scheduled email deliveries that will link embed users to the embedding application, rather than a Looker instance.
- Alerts and scheduling custom url Unless disabled , email deliveries from embedded dashboards, either from alerts or scheduled deliveries , include a link that reads View full dashboard .
- Embed domain for schedules and alerts allowlist Specify all domains that custom URLs in email deliveries may link to.

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- For an overview of how user permissions affect the domains to which users can send Looker content deliveries or alert notifications, see the following table: User type Permissions Email Domain Allowlist for Scheduled Content contains the domain friendly domain.org Email Domain Allowlist for Scheduled Content contains no domains Non-embed schedule look emails only Can email content deliveries to their own email address, to the email address of another Looker user on the same instance, or to an email address with the friendly domain.org domain Can email content deliveries to any email address schedule look emails and create alerts Can email content deliveries and alert notifications to their own email address, to the email address of another Looker user on the same instance, or to an email address with the friendly domain.org domain Can email content deliveries and alert notifications to any email address schedule external look emails only Can email content deliveries to any email address Can email content deliveries to any email address schedule external look emails and create alerts Can email content deliveries and alert notifications to any email address Can email content deliveries and alert notifications to any email address Signed embed schedule look emails only Can email content deliveries to an email address with the friendly domain.org domain Cannot email any Looker content schedule look emails and create alerts Can email content deliveries and alert notifications to an email address with the friendly domain.org domain Cannot email any Looker content or alert notifications schedule external look emails Can email content deliveries to any email address Can email content deliveries to any email address schedule external look emails and create alerts Can email content deliveries and alert notifications to any email address Can email content deliveries and alert notifications to any email address Embedded Looker content is accessed through a dedicated embed user account, not by individual user accounts.
- See more about how this setting and a user's permissions affect their ability to deliver Looker content and alert notifications in the Permissions overview section on this page. looker internal email domain allowlist user attribute In addition to the email domains that are included in the global Email Domain Allowlist for Scheduled Content field, you can also specify email domains on a per-group level using the looker internal email domain allowlist user attribute .
- It is used specifically when links to your instance are created in scheduled emails and in all absolute URLs that Looker generates.
- For example: ...&user attributes={"email":"joe@domain.com"} If you define the email user attribute in the embed URL, Looker will allow an embed user who has only the schedule look emails permission to email Looker content to their own email address, even if their email domain isn't in the Email Domain Allowlist for Scheduled Content field, or if the Email Domain Allowlist for Scheduled Content field is blank.

