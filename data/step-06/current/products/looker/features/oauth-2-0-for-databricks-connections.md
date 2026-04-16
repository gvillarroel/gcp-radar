---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.521Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "OAuth 2.0 for Databricks Connections"
feature_slug: "oauth-2-0-for-databricks-connections"
latest_feature_date: "2024-06-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml"
keywords:
  - "oauth"
  - "databricks"
  - "connections"
  - "now"
  - "authentication"
---

# OAuth 2.0 for Databricks Connections

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Databricks connections now support OAuth 2.0 authentication.

## Extended Definition

Databricks connections now support OAuth 2.0 authentication.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only](https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml)

## Supporting Pages

### "Restricting OAuth scope to read-only for Google BigQuery connections \_\

- URL: [https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only](https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Prior to Looker 24.20, when OAuth authentication for Google BigQuery connections were being set up , Looker created OAuth credentials that allowed the database user to request read and write scope.
- Google BigQuery connections that are configured for OAuth authentication do not support query killing .
- INSTANCE NAME /explore/system activity/scheduled plan oauth events?fields=user.name,count,query.model&f[query.model]=-NULL&f[count]=0&sorts=user.name&limit=500&column limit=50&query timezone=America%2FLos Angeles&vis=%7B%22show view names%22%3Afalse%2C%22show row numbers%22%3Atrue%2C%22transpose%22%3Afalse%2C%22truncate text%22%3Atrue%2C%22hide totals%22%3Afalse%2C%22hide row totals%22%3Afalse%2C%22size to fit%22%3Atrue%2C%22table theme%22%3A%22white%22%2C%22limit displayed rows%22%3Afalse%2C%22enable conditional formatting%22%3Afalse%2C%22header text alignment%22%3A%22left%22%2C%22header font size%22%3A12%2C%22rows font size%22%3A12%2C%22conditional formatting include totals%22%3Afalse%2C%22conditional formatting include nulls%22%3Afalse%2C%22x axis gridlines%22%3Afalse%2C%22y axis gridlines%22%3Atrue%2C%22show y axis labels%22%3Atrue%2C%22show y axis ticks%22%3Atrue%2C%22y axis tick density%22%3A%22default%22%2C%22y axis tick density custom%22%3A5%2C%22show x axis label%22%3Atrue%2C%22show x axis ticks%22%3Atrue%2C%22y axis scale mode%22%3A%22linear%22%2C%22x axis reversed%22%3Afalse%2C%22y axis reversed%22%3Afalse%2C%22plot size by field%22%3Afalse%2C%22trellis%22%3A%22%22%2C%22stacking%22%3A%22%22%2C%22legend position%22%3A%22center%22%2C%22point style%22%3A%22none%22%2C%22show value labels%22%3Afalse%2C%22label density%22%3A25%2C%22x axis scale%22%3A%22auto%22%2C%22y axis combined%22%3Atrue%2C%22ordering%22%3A%22none%22%2C%22show null labels%22%3Afalse%2C%22show totals labels%22%3Afalse%2C%22show silhouette%22%3Afalse%2C%22totals color%22%3A%22%23808080%22%2C%22type%22%3A%22looker grid%22%2C%22defaults version%22%3A1%2C%22series types%22%3A%7B%7D%2C%22hidden fields%22%3A%5B%22count%22%5D%7D&filter config=%7B%22query.model%22%3A%5B%7B%22type%22%3A%22%21null%22%2C%22values%22%3A%5B%7B%7D%2C%7B%7D%5D%2C%22id%22%3A0%7D%5D%2C%22count%22%3A%5B%7B%22type%22%3A%22%3D%22%2C%22values%22%3A%5B%7B%22constant%22%3A%220%22%7D%2C%7B%7D%5D%2C%22id%22%3A1%7D%5D%2C%22 %21internal%21 %22%3A%5B%22OR%22%2C%5B%5B%22AND%22%2C%5B%5B%22FILTER%22%2C%7B%22field%22%3A%22query.model%22%2C%22value%22%3A%22-NULL%22%2C%22type%22%3A%22%21null%22%7D%5D%2C%5B%22FILTER%22%2C%7B%22field%22%3A%22count%22%2C%22value%22%3A%220%22%7D%5D%5D%5D%5D%5D%7D&dynamic fields=%5B%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Count%22%2C%22value format%22%3Anull%2C%22value format name%22%3Anull%2C%22based on%22%3A%22event attribute.value%22%2C%22 kind hint%22%3A%22measure%22%2C%22measure%22%3A%22count%22%2C%22type%22%3A%22count distinct%22%2C%22 type hint%22%3A%22number%22%2C%22filters%22%3A%7B%22event attribute.value%22%3A%22%25%2Fauth%2Fbigquery.readonly%25%22%7D%7D%5D&origin=share-expanded Each of these users will need to reauthorize their OAuth connection credentials to ensure uninterrupted schedule delivery. (Optional) Force read-only scope usage across your Looker instance To sign out all your users who have OAuth credentials that allow read and write scope from any of your BigQuery connections, follow these steps: Navigate to the Admin settings - General settings page.
- Generate a list of all users with potentially affected schedules To generate a list of all users without read-only OAuth credentials who have created schedules on your BigQuery connections, visit the following System Activity Explore, replacing INSTANCE NAME with the address of your Looker instance (such as https://example.cloud.looker.com ).

### "Admin settings - OpenID Connect authentication \_|\_ Looker \_|\_ Google\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- Source ID: `site-docs-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- The following section is from an example of a discovery document: { "issuer": "https://accounts.google.com", "authorization endpoint": "https://accounts.google.com/o/oauth2/v2/auth", "token endpoint": "https://www.googleapis.com/oauth2/v4/token", "userinfo endpoint": "https://www.googleapis.com/oauth2/v3/userinfo", "revocation endpoint": "https://accounts.google.com/o/oauth2/revoke", "jwks uri": "https://www.googleapis.com/oauth2/v3/certs", "response types supported": [ "code", "token", "id token", "code token" "code id token", "token id token", "code token id token", "none" ], "subject types supported": [ "public" ], "id token signing alg values supported": [ "RS256" ], "scopes supported": [ "openid", "email", "profile" ], "token endpoint auth methods supported": [ "client secret post", "client secret basic" ], "claims supported": [ "aud", "email", "email verified", "exp", "family name", "given name", "iat", "iss", "locale", "name", "picture", "sub" ], Configuring OpenID Connect auth settings To configure OpenID Connect authentication for your Looker instance, select OpenID Connect from the Authentication section of the Admin panel.
- Enabling mirror OpenID Connect groups If you are using a Looker (Google Cloud core) instance, we recommend that you enable group mirroring for only the primary authentication method and don't enable group mirroring for the backup OAuth authentication .
- Set up OAuth authentication as the backup authentication method using the federated users.
- By default, the backup authentication method is OAuth .

### Admin settings - SAML authentication \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Condition 2 : Before selecting the merge option, you have completed the following two steps: Federated users' identities in Google Cloud using Cloud Identity Set up OAuth authentication as the backup authentication method using the federated users.
- Enabling mirror SAML groups If you are using a Looker (Google Cloud core) instance, we recommend that you enable group mirroring for only the primary authentication method and don't enable group mirroring for the backup OAuth authentication .
- By default, the backup authentication method for Looker (Google Cloud core) is OAuth .
- If you enable group mirroring for both the primary and secondary methods of authentication, the following behaviors will occur: If a user has merged identities, group mirroring will match the primary authentication method regardless of the actual authentication method used to sign in.

