---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.470Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Google group mirroring with OAuth authentication"
feature_slug: "google-group-mirroring-with-oauth-authentication"
latest_feature_date: "2025-04-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap"
keywords:
  - "group"
  - "mirroring"
  - "oauth"
  - "authentication"
  - "lets"
  - "looker"
  - "core"
  - "mirror"
---

# Google group mirroring with OAuth authentication

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Lets Looker (Google Cloud core) mirror Google groups when using OAuth authentication.

## Extended Definition

Lets Looker (Google Cloud core) mirror Google groups when using OAuth authentication.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap)

## Supporting Pages

### "Admin settings - OpenID Connect authentication \_|\_ Looker \_|\_ Google\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- Source ID: `site-docs-reference`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enabling mirror OpenID Connect groups If you are using a Looker (Google Cloud core) instance, we recommend that you enable group mirroring for only the primary authentication method and don't enable group mirroring for the backup OAuth authentication .
- Mirroring OpenID Connect groups lets you use your externally defined OpenID Connect directory to manage Looker groups and users.
- If you enable group mirroring for both the primary and secondary methods of authentication, the following behaviors will occur: If a user has merged identities, group mirroring will match the primary authentication method regardless of the actual authentication method used to sign in.
- Disabling mirror OpenID Connect groups If you want to stop mirroring your OpenID Connect groups within Looker, turn off the Mirror OpenID Connect Groups switch.

### Admin settings - SAML authentication \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml)
- Source ID: `site-docs-reference`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enabling mirror SAML groups If you are using a Looker (Google Cloud core) instance, we recommend that you enable group mirroring for only the primary authentication method and don't enable group mirroring for the backup OAuth authentication .
- Mirroring SAML groups lets you use your externally defined SAML directory to manage Looker groups and users.
- If you enable group mirroring for both the primary and secondary methods of authentication, the following behaviors will occur: If a user has merged identities, group mirroring will match the primary authentication method regardless of the actual authentication method used to sign in.
- Disabling mirror SAML groups If you want to stop mirroring your SAML groups within Looker, turn off the Mirror SAML Groups switch.

### Admin settings - LDAP authentication \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Mirroring LDAP groups lets you use your externally defined LDAP directory to manage Looker groups and users.
- Disabling mirror LDAP groups If you want to stop mirroring your LDAP groups within Looker, turn off the Mirror LDAP Groups switch.
- Your Looker groups will still mirror your LDAP configuration, but you will be able to do additional group and user management within Looker, such as adding LDAP users to Looker groups or assigning Looker roles directly to LDAP users.
- Requirements Looker displays the LDAP page in the Authentication section of the Admin menu only if the following conditions are met: Your Looker instance is not a Looker (Google Cloud core) instance.

