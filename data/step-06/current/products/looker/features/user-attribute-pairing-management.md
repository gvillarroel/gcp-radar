---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.415Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "User attribute pairing management"
feature_slug: "user-attribute-pairing-management"
latest_feature_date: "2026-02-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml"
keywords:
  - "user"
  - "attribute"
  - "pairing"
  - "management"
  - "adds"
  - "side"
  - "panel"
  - "adding"
---

# User attribute pairing management

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

User attribute pairing management adds a side panel for adding, removing, viewing, filtering, and paginating attribute pairings.

## Extended Definition

User attribute pairing management adds a side panel for adding, removing, viewing, filtering, and paginating attribute pairings.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml)

## Supporting Pages

### "Admin settings - OpenID Connect authentication \_|\_ Looker \_|\_ Google\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To pair claims with corresponding Looker user attributes, or manage existing pairings, follow these steps: In the User Attribute Settings section, click the Manage Pairings button to open the Manage Pairings side panel.
- Your Looker groups will still mirror your OpenID Connect configuration, but you will be able to do additional group and user management within Looker, such as adding OpenID Connect users to Looker-specific groups or assigning Looker roles directly to OpenID Connect users.
- Attribute pairings Optionally, you can use the data in your OpenID Connect claims to automatically populate values in Looker user attributes when a user logs in.
- The Manage Pairings side panel also includes the following tools: The Filter List filter menu and search bar.

### Admin settings - LDAP authentication \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To pair LDAP user attributes with corresponding Looker user attributes, or manage existing pairings, follow these steps: In the User Attribute Pairings section, click the Manage Pairings button to open the Manage Pairings side panel.
- Example This example ldiff user entry demonstrates how to set corresponding Looker settings: Ldiff User Entry dn: cn=mward,ou=People,dc=example,dc=com objectClass: person objectClass: inetOrgPerson objectClass: organizationalPerson objectClass: top cn: mward userpassword: normal givenname: Marcus telephonenumber: +1 408 555 5688 sn: Ward mail: mward@example.com ou: People Corresponding Looker Settings Base DN: ou=People,dc=looker,dc=com User Object Class: person Login Attrs: cn Email Attr: mail First Name Attr: givenname Last Name Attr: sn ID Attr: cn Pairing LDAP user attributes with Looker user attributes You can optionally use the data in your LDAP user attributes to automatically populate values in Looker user attributes when a user logs in.
- Your Looker groups will still mirror your LDAP configuration, but you will be able to do additional group and user management within Looker, such as adding LDAP users to Looker groups or assigning Looker roles directly to LDAP users.
- The Manage Pairings side panel also includes the following tools: The Filter List filter menu and search bar.

### Admin settings - SAML authentication \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To pair SAML user attributes with corresponding Looker user attributes, or manage existing pairings, follow these steps: In the User Attribute Settings section, click the Manage Pairings button to open the Manage Pairings side panel.
- Your Looker groups will still mirror your SAML configuration, but you will be able to do additional group and user management within Looker, such as adding SAML users to Looker-specific groups or assigning Looker roles directly to SAML users.
- Pairing SAML attributes with Looker user attributes You can optionally use the data in your SAML attributes to automatically populate values in Looker user attributes when a user logs in.
- The Manage Pairings side panel also includes the following tools: The Filter List filter menu and search bar.

