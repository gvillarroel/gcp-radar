---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.413Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Password expiration policy"
feature_slug: "password-expiration-policy"
latest_feature_date: "2026-02-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-password"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-users"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap"
keywords:
  - "password"
  - "expiration"
  - "policy"
  - "admins"
  - "can"
  - "enforce"
  - "windows"
  - "users"
---

# Password expiration policy

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Admins can enforce password expiration windows for users who authenticate with an email and password.

## Extended Definition

Admins can enforce password expiration windows for users who authenticate with an email and password.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-password](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-password)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap)

## Supporting Pages

### Admin settings - Password policy \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-password](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-password)
- Source ID: `site-docs-reference`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- The Password Policy page in the Authentication section of the Admin menu provides admins with additional control over password requirements for users on the instance.
- Customizing password requirements Looker admins can enforce additional security requirements by specifying a minimum password length or requiring special characters in passwords.
- To manage password requirements for users on your instance, select Password Policy in the Authentication section of the Looker Admin menu.
- On the Password Policy page, Looker displays current password requirement settings for existing users on your Looker instance.

### Admin settings - Users \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- From the Edit User page you can do the following: Enable or disable the service account Edit the service account name Manage the service account API keys Assign different groups and Roles Edit the user attributes that are associated with the service account Migrating user accounts to service accounts Important: Starting with the Looker 26.8 release, the following changes will occur: Looker (original) admins will no longer be able to access or manage the API credentials of their standard users.
- API Keys Important: Starting with the Looker 26.8 release, the following changes will occur: Looker (original) admins will no longer be able to access or manage the API credentials of their standard users.
- This is to ensure admins can either create or migrate service accounts from existing standard users if they require access to users' API credentials.
- This is to ensure admins can either create or migrate service accounts from existing standard users if they require access to users' API credentials.

### Admin settings - LDAP authentication \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Alternate login for admins and specified users Allow an alternate email-based login for admins and for users with the login special email permission (read more about setting this permission in the Roles documentation ).
- The Advanced Role Management section contains these options: Prevent Individual LDAP Users from Receiving Direct Roles : Turning this option on prevents Looker admins from assigning Looker roles directly to LDAP users.
- When all of the first three options are enabled, Looker admins cannot modify membership of mirrored groups and can only assign roles to users through LDAP mirrored groups.
- The options in this section determine how much flexibility Lookeradmins have when configuring Looker groups and users who have been mirrored from Looker.

