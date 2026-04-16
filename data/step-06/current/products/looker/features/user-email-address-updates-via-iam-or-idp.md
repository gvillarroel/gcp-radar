---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.524Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "User Email Address Updates via IAM or IdP"
feature_slug: "user-email-address-updates-via-iam-or-idp"
latest_feature_date: "2024-06-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-users"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml"
keywords:
  - "user"
  - "email"
  - "address"
  - "updates"
  - "via"
  - "iam"
  - "idp"
  - "admins"
---

# User Email Address Updates via IAM or IdP

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Admins can update a user email address through IAM or an identity provider.

## Extended Definition

Admins can update a user email address through IAM or an identity provider.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)
- [https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails](https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml)

## Supporting Pages

### Admin settings - Users \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- For name and email address, when you enter any string, the list of users displayed shows all users whose name or email address contains the string entered in the filter field.
- If you need to set or reset a password, you can click this button to send a link to the user's email address that you previously specified.
- Warning: Editing a user's email address logs out that user and sends an email verification link to the user's new email address.
- Each row lists the user's name, ID, and email address, and it includes an icon that indicates the type of access the user has.

### Admin settings - Scheduled Emails \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails](https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails)
- Source ID: `site-docs-reference-required-4`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Scheduled Emails page lists any email addresses that are scheduled to receive Looks or dashboards but that are not associated with one of your Looker instance's user accounts.
- Admins should check with their users to see if these have been set up and decide how to manage changes to the emailed data policy.
- Changing your emailed data policy option Although your Looker instance will have a default emailed data policy option selected based on the instance's settings prior to an update to Looker 7.8, Looker admins can change this default setting at any time by navigating to the Scheduled Emails page in the Admin panel under Alerts & Schedules .
- The Scheduled Emails page, accessible from the Admin panel under Alerts & Schedules , lets Looker admins set a data sharing policy that applies to all new and existing one-time and scheduled email deliveries that use Looker 's native email destination.

### Admin settings - SAML authentication \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- When a user logs in for the first time through SAML, this option will connect the user into their existing account by finding the account with a matching email address.
- Standard attributes You'll need to specify these standard attributes: Email Attr : The attribute name your IdP uses for user email addresses.
- This option allows alternate email-based login using /login/email for admins and for specified users with the login special email permission.
- When merging, Looker (Google Cloud core) will search for user records that share the exact same email address.

