---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.412Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "IP allowlist exceptions for essential Google Cloud services"
feature_slug: "ip-allowlist-exceptions-for-essential-google-cloud-services"
latest_feature_date: "2026-02-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-server-ip-allowlist"
  - "https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/add_support_access_allowlist_entries"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
keywords:
  - "ip"
  - "allowlist"
  - "exceptions"
  - "essential"
  - "looker"
  - "admins"
  - "can"
  - "allow"
---

# IP allowlist exceptions for essential Google Cloud services

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Looker admins can allow essential Google Cloud services to access an instance even when an IP allowlist is active.

## Extended Definition

Looker admins can allow essential Google Cloud services to access an instance even when an IP allowlist is active.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-server-ip-allowlist](https://docs.cloud.google.com/looker/docs/admin-panel-server-ip-allowlist)
- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/add_support_access_allowlist_entries](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/add_support_access_allowlist_entries)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)

## Supporting Pages

### Admin settings - IP Allowlist \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-server-ip-allowlist](https://docs.cloud.google.com/looker/docs/admin-panel-server-ip-allowlist)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If no IP allowlist rules have been defined for your Looker instance, the IP Allowlist page displays the following message: "Your IP address is not allowlisted." You must define an IP allowlist rule for the IP address that you are using to access the Looker instance before you can turn on the Enable Allowlist setting.
- For Looker (Google Cloud core) instances that use public secure connections or hybrid connections, you can add particular IP ranges to an allowlist by editing your Looker (Google Cloud core) instance in the Google Cloud console or with the Google Cloud CLI.
- Home Documentation Data analytics Looker Guides Send feedback Admin settings - IP Allowlist Stay organized with collections Save and categorize content based on your preferences.
- When the IP allowlist is enabled, your Looker instance filters IP addresses at the application level, allowing connections from only the IP addresses on the allowlist.

### Add Support Access Allowlist Users \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/add_support_access_allowlist_entries](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/add_support_access_allowlist_entries)
- Source ID: `site-api-reference`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Version 4.0.26.6 (latest) Add Support Access Allowlist Users Adds a list of emails to the Allowlist, using the provided reason Calls to this endpoint may be denied by Looker (Google Cloud core) .
- Home Documentation Data analytics Looker API Reference Send feedback Add Support Access Allowlist Users Stay organized with collections Save and categorize content based on your preferences.
- Expand SupportAccessAddEntries definition... emails string[] reason string Reason for adding emails to the Allowlist Response 200: Support Access Allowlist Entries Datatype Description (array) SupportAccessAllowlistEntry [] id lock string Unique ID email string Email address full name lock string Full name of allowlisted user reason string Reason the Email is included in the Allowlist created date lock string Date the Email was added to the Allowlist 400: Bad Request Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link 403: Permission Denied Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link 404: Not Found Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link 422: Validation Error Datatype Description (object) ValidationError message lock string Error details errors ValidationErrorDetail [] Expand ValidationErrorDetail definition... field lock string Field with error code lock string Error code message lock string Error info message documentation url lock string Documentation link documentation url lock string Documentation link 429: Too Many Requests Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Request POST /support access/allowlist Datatype Description Request HTTP Request body HTTP Body Expand HTTP Body definition... body SupportAccessAddEntries Request params.

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- For an overview of how user permissions affect the domains to which users can send Looker content deliveries or alert notifications, see the following table: User type Permissions Email Domain Allowlist for Scheduled Content contains the domain friendly domain.org Email Domain Allowlist for Scheduled Content contains no domains Non-embed schedule look emails only Can email content deliveries to their own email address, to the email address of another Looker user on the same instance, or to an email address with the friendly domain.org domain Can email content deliveries to any email address schedule look emails and create alerts Can email content deliveries and alert notifications to their own email address, to the email address of another Looker user on the same instance, or to an email address with the friendly domain.org domain Can email content deliveries and alert notifications to any email address schedule external look emails only Can email content deliveries to any email address Can email content deliveries to any email address schedule external look emails and create alerts Can email content deliveries and alert notifications to any email address Can email content deliveries and alert notifications to any email address Signed embed schedule look emails only Can email content deliveries to an email address with the friendly domain.org domain Cannot email any Looker content schedule look emails and create alerts Can email content deliveries and alert notifications to an email address with the friendly domain.org domain Cannot email any Looker content or alert notifications schedule external look emails Can email content deliveries to any email address Can email content deliveries to any email address schedule external look emails and create alerts Can email content deliveries and alert notifications to any email address Can email content deliveries and alert notifications to any email address Embedded Looker content is accessed through a dedicated embed user account, not by individual user accounts.
- See more about how this setting and a user's permissions affect their ability to deliver Looker content and alert notifications in the Permissions overview section on this page. looker internal email domain allowlist user attribute In addition to the email domains that are included in the global Email Domain Allowlist for Scheduled Content field, you can also specify email domains on a per-group level using the looker internal email domain allowlist user attribute .
- For example: ...&user attributes={"email":"joe@domain.com"} If you define the email user attribute in the embed URL, Looker will allow an embed user who has only the schedule look emails permission to email Looker content to their own email address, even if their email domain isn't in the Email Domain Allowlist for Scheduled Content field, or if the Email Domain Allowlist for Scheduled Content field is blank.
- In other words, the set of email domains that a group can send emails to is the union of the set of email domains that are listed in the Email Domain Allowlist for Scheduled Content field and every set of email domains that are assigned to the group by the looker internal email domain allowlist user attribute.

