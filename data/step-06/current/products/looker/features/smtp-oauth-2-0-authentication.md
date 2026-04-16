---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.434Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "SMTP OAuth 2.0 authentication"
feature_slug: "smtp-oauth-2-0-authentication"
latest_feature_date: "2026-01-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-platform-smtp"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-google"
keywords:
  - "smtp"
  - "oauth"
  - "authentication"
  - "adds"
  - "based"
  - "custom"
  - "mail"
  - "settings"
---

# SMTP OAuth 2.0 authentication

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Adds OAuth 2.0 authentication for SMTP-based custom mail settings.

## Extended Definition

Adds OAuth 2.0 authentication for SMTP-based custom mail settings.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-platform-smtp](https://docs.cloud.google.com/looker/docs/admin-panel-platform-smtp)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-google](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-google)

## Supporting Pages

### Admin settings - SMTP \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-platform-smtp](https://docs.cloud.google.com/looker/docs/admin-panel-platform-smtp)
- Source ID: `site-docs-reference`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Custom mail settings can be configured for SMTP servers that support the PLAIN and LOGIN authentication protocols or OAuth 2.0.
- Note: If you are using custom mail settings for SMTP, add Looker's IP addresses to your SMTP server's IP allowlist so that your SMTP server will allow inbound traffic from Looker.
- Mail settings Deprecated: For customer-hosted Looker instances, the default Looker email service is not available and the SMTP Options won't be visible.
- Custom mail settings Enter the appropriate values for your email service's SMTP settings: Mail Server : The URL of your SMTP server.

### "Admin settings - OpenID Connect authentication \_|\_ Looker \_|\_ Google\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- Source ID: `site-docs-reference`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following section is from an example of a discovery document: { "issuer": "https://accounts.google.com", "authorization endpoint": "https://accounts.google.com/o/oauth2/v2/auth", "token endpoint": "https://www.googleapis.com/oauth2/v4/token", "userinfo endpoint": "https://www.googleapis.com/oauth2/v3/userinfo", "revocation endpoint": "https://accounts.google.com/o/oauth2/revoke", "jwks uri": "https://www.googleapis.com/oauth2/v3/certs", "response types supported": [ "code", "token", "id token", "code token" "code id token", "token id token", "code token id token", "none" ], "subject types supported": [ "public" ], "id token signing alg values supported": [ "RS256" ], "scopes supported": [ "openid", "email", "profile" ], "token endpoint auth methods supported": [ "client secret post", "client secret basic" ], "claims supported": [ "aud", "email", "email verified", "exp", "family name", "given name", "iat", "iss", "locale", "name", "picture", "sub" ], Configuring OpenID Connect auth settings To configure OpenID Connect authentication for your Looker instance, select OpenID Connect from the Authentication section of the Admin panel.
- Home Documentation Data analytics Looker Guides Send feedback Admin settings - OpenID Connect authentication Stay organized with collections Save and categorize content based on your preferences.
- You can merge users from the following systems: Looker Email/Password (not available for Looker (Google Cloud core)) Google LDAP (not available for Looker (Google Cloud core)) SAML If you have multiple authentication systems in place, you can specify more than one system to merge by in this field.
- Enabling mirror OpenID Connect groups If you are using a Looker (Google Cloud core) instance, we recommend that you enable group mirroring for only the primary authentication method and don't enable group mirroring for the backup OAuth authentication .

### Admin settings - Google authentication \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-google](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-google)
- Source ID: `site-docs-reference`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Looker Guides Send feedback Admin settings - Google authentication Stay organized with collections Save and categorize content based on your preferences.
- Click Enabled to display and edit Google OAuth settings. (This does not immediately enable Google authentication; you must confirm your choice later).
- For example: If Looker hosts your instance: https://mycompany.looker.com If you have a customer-hosted Looker instance: https://looker.mycompany.com If your Looker instance requires a port number: https://looker.mycompany.com:9999 In the Authorized redirect URIs field, enter the URL to your Looker instance, followed by /oauth2callback .
- Disabling Google Auth once it has been enabled If you'd like to disable Google Authentication for your Looker instance after it has already been enabled, there are some things to think about: Users who were created before Google Authentication was added, and already setup a normal email login and password, will still function.

