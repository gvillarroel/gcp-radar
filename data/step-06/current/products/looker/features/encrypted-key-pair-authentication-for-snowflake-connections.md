---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.427Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Encrypted key-pair authentication for Snowflake connections"
feature_slug: "encrypted-key-pair-authentication-for-snowflake-connections"
latest_feature_date: "2026-01-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml"
keywords:
  - "encrypted"
  - "key"
  - "pair"
  - "authentication"
  - "snowflake"
  - "connections"
  - "lets"
  - "looker"
---

# Encrypted key-pair authentication for Snowflake connections

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Lets Looker use encrypted files for key-pair authentication on Snowflake connections.

## Extended Definition

Lets Looker use encrypted files for key-pair authentication on Snowflake connections.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml)

## Supporting Pages

### "Admin settings - OpenID Connect authentication \_|\_ Looker \_|\_ Google\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you have configured OpenID Connect to make user-specific connections to your database, you could pair your OpenID Connect claims with Looker user attributes to make your database connections user-specific in Looker.
- The OpenID Connect page in the Authentication section of the Admin menu lets you configure Looker to authenticate users using the OpenID Connect protocol.
- The following section is from an example of a discovery document: { "issuer": "https://accounts.google.com", "authorization endpoint": "https://accounts.google.com/o/oauth2/v2/auth", "token endpoint": "https://www.googleapis.com/oauth2/v4/token", "userinfo endpoint": "https://www.googleapis.com/oauth2/v3/userinfo", "revocation endpoint": "https://accounts.google.com/o/oauth2/revoke", "jwks uri": "https://www.googleapis.com/oauth2/v3/certs", "response types supported": [ "code", "token", "id token", "code token" "code id token", "token id token", "code token id token", "none" ], "subject types supported": [ "public" ], "id token signing alg values supported": [ "RS256" ], "scopes supported": [ "openid", "email", "profile" ], "token endpoint auth methods supported": [ "client secret post", "client secret basic" ], "claims supported": [ "aud", "email", "email verified", "exp", "family name", "given name", "iat", "iss", "locale", "name", "picture", "sub" ], Configuring OpenID Connect auth settings To configure OpenID Connect authentication for your Looker instance, select OpenID Connect from the Authentication section of the Admin panel.
- The tab displays: Whether Looker was able to talk to the various endpoints and validate A trace of the authentication endpoint response The user info Looker gets from the user info endpoint Both decoded and raw versions of the ID token received You can use this test to verify the information received from the various endpoints is correct, and to troubleshoot any errors.

### Admin settings - LDAP authentication \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you have configured LDAP to make user-specific connections to your database, you could pair your LDAP user attributes with Looker user attributes to make your database connections user-specific in Looker.
- The LDAP page in the Authentication section of the Admin menu lets you configure Looker to authenticate users with Lightweight Directory Access Protocol (LDAP).
- Example This example ldiff user entry demonstrates how to set corresponding Looker settings: Ldiff User Entry dn: cn=mward,ou=People,dc=example,dc=com objectClass: person objectClass: inetOrgPerson objectClass: organizationalPerson objectClass: top cn: mward userpassword: normal givenname: Marcus telephonenumber: +1 408 555 5688 sn: Ward mail: mward@example.com ou: People Corresponding Looker Settings Base DN: ou=People,dc=looker,dc=com User Object Class: person Login Attrs: cn Email Attr: mail First Name Attr: givenname Last Name Attr: sn ID Attr: cn Pairing LDAP user attributes with Looker user attributes You can optionally use the data in your LDAP user attributes to automatically populate values in Looker user attributes when a user logs in.
- To pair LDAP user attributes with corresponding Looker user attributes, or manage existing pairings, follow these steps: In the User Attribute Pairings section, click the Manage Pairings button to open the Manage Pairings side panel.

### Admin settings - SAML authentication \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you have configured SAML to make user-specific connections to your database, you could pair your SAML attributes with Looker user attributes to make your database connections user-specific in Looker.
- The SAML page in the Authentication section of the Admin menu lets you configure Looker to authenticate users using Security Assertion Markup Language (SAML).
- To pair SAML attributes with corresponding Looker user attributes, follow these steps: Enter the name of the SAML attribute in the SAML Attribute field and the name of the Looker user attribute that you want to pair it with in the Looker User Attributes field.
- Enabling mirror SAML groups If you are using a Looker (Google Cloud core) instance, we recommend that you enable group mirroring for only the primary authentication method and don't enable group mirroring for the backup OAuth authentication .

