---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.532Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Scheduled Content Email Domain Allowlist"
feature_slug: "scheduled-content-email-domain-allowlist"
latest_feature_date: "2024-02-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
keywords:
  - "scheduled"
  - "content"
  - "email"
  - "domain"
  - "allowlist"
  - "admins"
  - "can"
  - "configure"
---

# Scheduled Content Email Domain Allowlist

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Admins can configure the email domain allowlist for scheduled content on a per-group basis using the looker_internal_email_domain_allowlist user attribute.

## Extended Definition

Admins can configure the email domain allowlist for scheduled content on a per-group basis using the looker_internal_email_domain_allowlist user attribute.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails](https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)

## Supporting Pages

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- For an overview of how user permissions affect the domains to which users can send Looker content deliveries or alert notifications, see the following table: User type Permissions Email Domain Allowlist for Scheduled Content contains the domain friendly domain.org Email Domain Allowlist for Scheduled Content contains no domains Non-embed schedule look emails only Can email content deliveries to their own email address, to the email address of another Looker user on the same instance, or to an email address with the friendly domain.org domain Can email content deliveries to any email address schedule look emails and create alerts Can email content deliveries and alert notifications to their own email address, to the email address of another Looker user on the same instance, or to an email address with the friendly domain.org domain Can email content deliveries and alert notifications to any email address schedule external look emails only Can email content deliveries to any email address Can email content deliveries to any email address schedule external look emails and create alerts Can email content deliveries and alert notifications to any email address Can email content deliveries and alert notifications to any email address Signed embed schedule look emails only Can email content deliveries to an email address with the friendly domain.org domain Cannot email any Looker content schedule look emails and create alerts Can email content deliveries and alert notifications to an email address with the friendly domain.org domain Cannot email any Looker content or alert notifications schedule external look emails Can email content deliveries to any email address Can email content deliveries to any email address schedule external look emails and create alerts Can email content deliveries and alert notifications to any email address Can email content deliveries and alert notifications to any email address Embedded Looker content is accessed through a dedicated embed user account, not by individual user accounts.
- See more about how this setting and a user's permissions affect their ability to deliver Looker content and alert notifications in the Permissions overview section on this page. looker internal email domain allowlist user attribute In addition to the email domains that are included in the global Email Domain Allowlist for Scheduled Content field, you can also specify email domains on a per-group level using the looker internal email domain allowlist user attribute .
- For example: ...&user attributes={"email":"joe@domain.com"} If you define the email user attribute in the embed URL, Looker will allow an embed user who has only the schedule look emails permission to email Looker content to their own email address, even if their email domain isn't in the Email Domain Allowlist for Scheduled Content field, or if the Email Domain Allowlist for Scheduled Content field is blank.
- If a group is assigned multiple email domain sets, for example through membership in multiple groups, then members of that group will be able to send emails to all domains that are assigned to each of the user attribute values, as well as the domains that are listed in the Email Domain Allowlist for Scheduled Content admin setting.

### Admin settings - Scheduled Emails \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails](https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails)
- Source ID: `site-docs-reference-required-4`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Old Emailed Data Policy What Gets Delivered New Emailed Data Policy What Gets Delivered Send Link Only Link back to Looker content Send Data Only Existing Schedules : An embedded data visualization or file attachment replaces the link New Deliveries : Embedded data or a file attachment Send Link Only Link back to Looker content Send Links and Data Existing Schedules : Embedded data or a file attachment and option to include links automatically selected New Deliveries : Embedded data or a file attachment and option to include links automatically selected Send Data Only Embedded data or a file attachment Send Link Only Existing Schedules : Link back to Looker content replaces embedded; no file is attached New Deliveries : Link back to Looker content Send Data Only Embedded data or a file attachment Send Links and Data Existing Schedules : Embedded data or a file attachment and option to include links automatically selected New Deliveries : Embedded data or a file attachment and option to include links automatically selected Send Links and Data Embedded data or a file attachment and option to include links back to Looker content Send Link Only Existing Schedules : Link back to Looker content New Deliveries : Link back to Looker content Send Links and Data Embedded data or a file attachment and option to include links back to Looker content Send Data Only Existing Schedules : Embedded data or a file attachment New Deliveries : Embedded data or a file attachment Switching deliveries to Send Link Only If you are switching to the Send Link Only option, all new one-time and scheduled email deliveries will be sent containing only links back to Looker and the title of the Looker content, rather than embedded or attached Looker content.
- Changing your emailed data policy option Although your Looker instance will have a default emailed data policy option selected based on the instance's settings prior to an update to Looker 7.8, Looker admins can change this default setting at any time by navigating to the Scheduled Emails page in the Admin panel under Alerts & Schedules .
- The Scheduled Emails page, accessible from the Admin panel under Alerts & Schedules , lets Looker admins set a data sharing policy that applies to all new and existing one-time and scheduled email deliveries that use Looker 's native email destination.
- Home Documentation Data analytics Looker Guides Send feedback Admin settings - Scheduled Emails Stay organized with collections Save and categorize content based on your preferences.

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Users can email content deliveries or alert notifications to email addresses with any domain, regardless of whether the Email domain allowlist on the Settings page of the Admin panel contains any email domains. create alerts see looks Instance Wide NN This permission applies to dashboards in Looker and to charts in Looker Studio that use the Looker connector.
- Looker admins can control the email domains that Looker users and embed users can send email deliveries to with the Email domain allowlist on the Settings page of the Admin panel.
- LookML dashboard user access data , clear cache refresh , mobile app access , see lookml dashboards User access data , can create forecast , clear cache refresh , create custom fields , create table calculations , download without limit , explore , manage spaces , mobile app access , save content , save dashboards , save looks , schedule look emails , see drill overlay , see lookml , see lookml dashboards , see looks , see sql , see user dashboards , send to integration , schedule without limit User who can't view LookML access data , can create forecast , clear cache refresh , create custom fields , create table calculations , download without limit , explore , manage spaces , mobile app access , save content , save dashboards , save looks , schedule look emails , see lookml dashboards , see looks , see user dashboards , send to integration , schedule without limit Viewer access data , clear cache refresh , download without limit , mobile app access , schedule look emails , see drill overlay , see lookml dashboards , see looks , see user dashboards , schedule without limit You'll see these permission sets appear as options when you create a new role.
- Default permission sets For new installations, Looker includes several default permission sets that you can start with: Permission Set Included Permissions Admin All permissions Developer access data , can create forecast , clear cache refresh , create custom fields , create table calculations , deploy , develop , download without limit , explore , manage spaces , mobile app access , save content , save dashboards , save looks , schedule look emails , see drill overlay , see lookml , see lookml dashboards , see looks , see pdts , see sql , see user dashboards , send to integration , schedule without limit , use sql runner NOTE : The see pdts permission is included in the Developer default permission only for Looker installations that were created with Looker 21.18 or later.

