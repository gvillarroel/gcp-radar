---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.423Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "advanced filter condition controls"
feature_slug: "advanced-filter-condition-controls"
latest_feature_date: "2026-01-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml"
keywords:
  - "advanced"
  - "filter"
  - "condition"
  - "controls"
  - "lets"
  - "dashboard"
  - "creators"
  - "restrict"
---

# advanced filter condition controls

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Lets dashboard creators restrict which condition options users can choose in advanced filters.

## Extended Definition

Lets dashboard creators restrict which condition options users can choose in advanced filters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml)

## Supporting Pages

### Admin settings - LDAP authentication \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Optionally, enter an Optional Custom Filter , which lets you provide arbitrary LDAP filters that will be applied when searching for a user to bind during LDAP authentication.
- The Advanced Role Management section contains these options: Prevent Individual LDAP Users from Receiving Direct Roles : Turning this option on prevents Looker admins from assigning Looker roles directly to LDAP users.
- Requirements Looker displays the LDAP page in the Authentication section of the Admin menu only if the following conditions are met: Your Looker instance is not a Looker (Google Cloud core) instance.
- Set the Base DN , which is the base of the search tree for all users [Optional] Specify a User Object Class , which controls the types of results that Looker will find and return.

### "Admin settings - OpenID Connect authentication \_|\_ Looker \_|\_ Google\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- The Advanced Role Management section contains these options: Prevent Individual OpenID Connect Users from Receiving Direct Roles : Turning this option on prevents Looker admins from assigning Looker roles directly to OpenID Connect users.
- However, it is only possible when one of the following two conditions is met: Condition 1 : Users are authenticating into Looker (Google Cloud core) using their Google identities through the OpenID Connect protocol.
- This dashboard has tiles that display recent login failures and includes the authentication method that was used, the error message that was returned, and the time of the attempt.
- Requirements Looker displays the OpenID Connect page in the Authentication section of the Admin menu only if the following conditions are met: You have the Admin role .

### Admin settings - SAML authentication \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Condition 2 : Before selecting the merge option, you have completed the following two steps: Federated users' identities in Google Cloud using Cloud Identity Set up OAuth authentication as the backup authentication method using the federated users.
- The Advanced Role Management section contains these options: Prevent Individual SAML Users from Receiving Direct Roles : Turning this option on prevents Looker admins from assigning Looker roles directly to SAML users.
- However, it is only possible if one of the two following conditions are met: Condition 1 : Users are authenticating into Looker (Google Cloud core) using their Google identities through the SAML protocol.
- This dashboard has tiles that display recent login failures and includes the authentication method that was used, the error message that was returned, and the time of the attempt.

