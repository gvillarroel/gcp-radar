---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.535Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "OpenID Connect Authentication"
feature_slug: "openid-connect-authentication"
latest_feature_date: "2024-01-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect"
  - "https://docs.cloud.google.com/looker/docs/access-control-and-permission-management"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml"
keywords:
  - "openid"
  - "connect"
  - "authentication"
  - "looker"
  - "core"
  - "supports"
---

# OpenID Connect Authentication

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Looker (Google Cloud core) supports OpenID Connect authentication.

## Extended Definition

Looker (Google Cloud core) supports OpenID Connect authentication.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml)

## Supporting Pages

### "Admin settings - OpenID Connect authentication \_|\_ Looker \_|\_ Google\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- Source ID: `site-docs-reference`
- Final score: 269
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enabling mirror OpenID Connect groups If you are using a Looker (Google Cloud core) instance, we recommend that you enable group mirroring for only the primary authentication method and don't enable group mirroring for the backup OAuth authentication .
- Looker only supports OpenID Connect authentication using OpenID Connect's Authorization Code Flow .
- The following section is from an example of a discovery document: { "issuer": "https://accounts.google.com", "authorization endpoint": "https://accounts.google.com/o/oauth2/v2/auth", "token endpoint": "https://www.googleapis.com/oauth2/v4/token", "userinfo endpoint": "https://www.googleapis.com/oauth2/v3/userinfo", "revocation endpoint": "https://accounts.google.com/o/oauth2/revoke", "jwks uri": "https://www.googleapis.com/oauth2/v3/certs", "response types supported": [ "code", "token", "id token", "code token" "code id token", "token id token", "code token id token", "none" ], "subject types supported": [ "public" ], "id token signing alg values supported": [ "RS256" ], "scopes supported": [ "openid", "email", "profile" ], "token endpoint auth methods supported": [ "client secret post", "client secret basic" ], "claims supported": [ "aud", "email", "email verified", "exp", "family name", "given name", "iat", "iss", "locale", "name", "picture", "sub" ], Configuring OpenID Connect auth settings To configure OpenID Connect authentication for your Looker instance, select OpenID Connect from the Authentication section of the Admin panel.
- However, it is only possible when one of the following two conditions is met: Condition 1 : Users are authenticating into Looker (Google Cloud core) using their Google identities through the OpenID Connect protocol.

### Admin settings - SAML authentication \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Enabling mirror SAML groups If you are using a Looker (Google Cloud core) instance, we recommend that you enable group mirroring for only the primary authentication method and don't enable group mirroring for the backup OAuth authentication .
- If you are using Looker (Google Cloud core) , the Bypass Login Page option is available automatically if SAML is used as the primary authentication method, and defaults to disabled.
- By default, the backup authentication method for Looker (Google Cloud core) is OAuth .
- You can merge users from the following systems: Looker Email/Password (not available for Looker (Google Cloud core)) Google LDAP (not available for Looker (Google Cloud core)) OIDC If you have more than one system in place, you can specify more than one system to merge by in this field.

### "Access control and permission management \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management)
- Source ID: `site-docs-reference-required-4`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Instead, you'll map your LDAP, SAML, or OpenID Connect groups to Looker roles during the setup process, and will only be able to change assigned roles from the LDAP, SAML, or OpenID Connect setup pages.
- One Looker group will be created for each LDAP, SAML, or OpenID Connect group, and the Looker group name will mirror the LDAP, SAML, or OpenID Connect group name.
- You may also use LDAP to apply user-specific database connections to Looker queries, as described on the LDAP authentication documentation page.
- If you've configured groups in your LDAP, SAML, or OpenID Connect implementation, you can also use those groups within Looker.

