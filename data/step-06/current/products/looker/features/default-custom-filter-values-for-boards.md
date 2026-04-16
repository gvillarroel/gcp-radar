---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.427Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "default custom filter values for boards"
feature_slug: "default-custom-filter-values-for-boards"
latest_feature_date: "2026-01-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-users"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap"
keywords:
  - "default"
  - "custom"
  - "filter"
  - "values"
  - "boards"
  - "lets"
  - "admins"
  - "enable"
---

# default custom filter values for boards

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Lets admins enable custom filter values for boards by default at the instance level.

## Extended Definition

Lets admins enable custom filter values for boards by default at the instance level.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap)

## Supporting Pages

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Include custom filter values for boards Enabling the Include custom filter values for boards feature enables the Include custom filter values setting instance-wide by default when users add dashboards to boards.
- This setting lets Looker admins define the email domains to which your users can deliver Looker content — Looks, dashboards, queries with visualizations — or alert notifications through email.
- Limit Automatically refresh dashboard option When this setting is enabled, only Looker admins will be able to enable the Automatically refresh dashboard option on user-defined dashboards.
- When Default Private Personal Folders is enabled, a user's personal folder is by default visible only to that user and to Looker admins.

### Admin settings - Users \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)
- Source ID: `site-docs-reference`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Differences between disabling and deleting an account are described in the following table: Description Disabled Deleted The user can sign in to the Looker instance No No The user's personal folder Still exists Deleted Looks and dashboards in the user's personal folder Still exist Moved to the Trash folder Looks and dashboards the user saved to a Shared folder Still exist in the Shared folder Still exist in the Shared folder Schedules created by the user Schedules are disabled Schedules are deleted Schedules based on the user's content, but created by another user Schedules continue to run User's content is deleted; schedules based on that content are deleted Schedules that list the user as a recipient and are created by another user with the ability to deliver content to external email accounts Schedules will continue to run and deliver normally (user will be treated as an external user) Schedules continue to run and deliver normally (user will be treated as an external user) Schedules that have Run schedule as recipient enabled and list the user as a recipient Schedules will continue to run but will fail to deliver to the disabled user upon next run Schedules continue to run but will fail to deliver to all users with error run as recipient was specified on ScheduledPlan but recipient is not a Looker user Boards created by the user Still exist Still exist Alerts created by the user Remain active, but are not visible or editable from the dashboard on which the alert is set unless self-assigned by an admin.
- From the Edit User page you can do the following: Enable or disable the service account Edit the service account name Manage the service account API keys Assign different groups and Roles Edit the user attributes that are associated with the service account Migrating user accounts to service accounts Important: Starting with the Looker 26.8 release, the following changes will occur: Looker (original) admins will no longer be able to access or manage the API credentials of their standard users.
- If you use a custom locale in a user's Locale field, that user's UI defaults to the language that is set in the instance locale .
- On a Looker (Google Cloud core) instance, Looker admins enable individual users to manage their own API keys.

### Admin settings - LDAP authentication \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap)
- Source ID: `site-docs-reference`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optionally, enter an Optional Custom Filter , which lets you provide arbitrary LDAP filters that will be applied when searching for a user to bind during LDAP authentication.
- When all of the first three options are enabled, Looker admins cannot modify membership of mirrored groups and can only assign roles to users through LDAP mirrored groups.
- If you later enable mirrored LDAP groups, these defaults will be removed for users upon their next login and replaced by roles assigned in the Mirror LDAP Groups section.
- Example This example ldiff user entry demonstrates how to set corresponding Looker settings: Ldiff User Entry dn: cn=mward,ou=People,dc=example,dc=com objectClass: person objectClass: inetOrgPerson objectClass: organizationalPerson objectClass: top cn: mward userpassword: normal givenname: Marcus telephonenumber: +1 408 555 5688 sn: Ward mail: mward@example.com ou: People Corresponding Looker Settings Base DN: ou=People,dc=looker,dc=com User Object Class: person Login Attrs: cn Email Attr: mail First Name Attr: givenname Last Name Attr: sn ID Attr: cn Pairing LDAP user attributes with Looker user attributes You can optionally use the data in your LDAP user attributes to automatically populate values in Looker user attributes when a user logs in.

