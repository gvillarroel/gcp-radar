---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.508Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Render event audit log entry"
feature_slug: "render-event-audit-log-entry"
latest_feature_date: "2024-09-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts"
keywords:
  - "render"
  - "event"
  - "audit"
  - "log"
  - "entry"
  - "now"
  - "included"
  - "list"
---

# Render event audit log entry

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The render event is now included in the audit log list.

## Extended Definition

The render event is now included in the audit log list.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts](https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts)

## Supporting Pages

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- See more about how this setting and a user's permissions affect their ability to deliver Looker content and alert notifications in the Permissions overview section on this page. looker internal email domain allowlist user attribute In addition to the email domains that are included in the global Email Domain Allowlist for Scheduled Content field, you can also specify email domains on a per-group level using the looker internal email domain allowlist user attribute .
- For an overview of how user permissions affect the domains to which users can send Looker content deliveries or alert notifications, see the following table: User type Permissions Email Domain Allowlist for Scheduled Content contains the domain friendly domain.org Email Domain Allowlist for Scheduled Content contains no domains Non-embed schedule look emails only Can email content deliveries to their own email address, to the email address of another Looker user on the same instance, or to an email address with the friendly domain.org domain Can email content deliveries to any email address schedule look emails and create alerts Can email content deliveries and alert notifications to their own email address, to the email address of another Looker user on the same instance, or to an email address with the friendly domain.org domain Can email content deliveries and alert notifications to any email address schedule external look emails only Can email content deliveries to any email address Can email content deliveries to any email address schedule external look emails and create alerts Can email content deliveries and alert notifications to any email address Can email content deliveries and alert notifications to any email address Signed embed schedule look emails only Can email content deliveries to an email address with the friendly domain.org domain Cannot email any Looker content schedule look emails and create alerts Can email content deliveries and alert notifications to an email address with the friendly domain.org domain Cannot email any Looker content or alert notifications schedule external look emails Can email content deliveries to any email address Can email content deliveries to any email address schedule external look emails and create alerts Can email content deliveries and alert notifications to any email address Can email content deliveries and alert notifications to any email address Embedded Looker content is accessed through a dedicated embed user account, not by individual user accounts.
- For example: ...&user attributes={"email":"joe@domain.com"} If you define the email user attribute in the embed URL, Looker will allow an embed user who has only the schedule look emails permission to email Looker content to their own email address, even if their email domain isn't in the Email Domain Allowlist for Scheduled Content field, or if the Email Domain Allowlist for Scheduled Content field is blank.
- If a group is assigned multiple email domain sets, for example through membership in multiple groups, then members of that group will be able to send emails to all domains that are assigned to each of the user attribute values, as well as the domains that are listed in the Email Domain Allowlist for Scheduled Content admin setting.

### Admin settings - LDAP authentication \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Example This example ldiff user entry demonstrates how to set corresponding Looker settings: Ldiff User Entry dn: cn=mward,ou=People,dc=example,dc=com objectClass: person objectClass: inetOrgPerson objectClass: organizationalPerson objectClass: top cn: mward userpassword: normal givenname: Marcus telephonenumber: +1 408 555 5688 sn: Ward mail: mward@example.com ou: People Corresponding Looker Settings Base DN: ou=People,dc=looker,dc=com User Object Class: person Login Attrs: cn Email Attr: mail First Name Attr: givenname Last Name Attr: sn ID Attr: cn Pairing LDAP user attributes with Looker user attributes You can optionally use the data in your LDAP user attributes to automatically populate values in Looker user attributes when a user logs in.
- The Advanced Role Management section contains these options: Prevent Individual LDAP Users from Receiving Direct Roles : Turning this option on prevents Looker admins from assigning Looker roles directly to LDAP users.
- Prevent Role Inheritance from non-LDAP Groups : Turning this option on prevents members of mirrored LDAP groups from inheriting roles from built-in Looker groups.
- Prevent Direct Membership in non-LDAP Groups : Turning this option on prevents Looker admins from adding LDAP users directly to built-in Looker groups.

### "Admin settings - Persistent Derived Tables \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts](https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts)
- Source ID: `site-docs-reference-required-4`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- A list of all the persisted table rebuild trigger events , including the event ID number, the date of the event, the type of event, and the data that was included with the trigger event.
- A list of all the persisted table rebuild events , including the event ID number, the date of the event, the type of event, and the data that was included with the rebuild event.
- A list of all the persisted table fields queried, including the LookML view and model in which the field is defined, the field name, the name of the Explore run that included the field, and the number of times the field was included in a query.
- If a PDT view file is included in multiple model files with different connections, the PDT will also appear in other connection PDT lists.

