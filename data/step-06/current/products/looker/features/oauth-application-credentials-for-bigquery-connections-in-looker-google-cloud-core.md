---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.510Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "OAuth application credentials for BigQuery connections in Looker (Google Cloud core)"
feature_slug: "oauth-application-credentials-for-bigquery-connections-in-looker-google-cloud-core"
latest_feature_date: "2024-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-database-connections"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
keywords:
  - "oauth"
  - "application"
  - "credentials"
  - "bigquery"
  - "connections"
  - "looker"
  - "core"
  - "can"
---

# OAuth application credentials for BigQuery connections in Looker (Google Cloud core)

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Looker (Google Cloud core) can automatically use the OAuth application credentials associated with the instance to connect to Google BigQuery.

## Extended Definition

Looker (Google Cloud core) can automatically use the OAuth application credentials associated with the instance to connect to Google BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only](https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only)
- [https://docs.cloud.google.com/looker/docs/admin-panel-database-connections](https://docs.cloud.google.com/looker/docs/admin-panel-database-connections)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)

## Supporting Pages

### "Restricting OAuth scope to read-only for Google BigQuery connections \_\

- URL: [https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only](https://docs.cloud.google.com/looker/docs/best-practices/oauth-read-only)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- INSTANCE NAME /explore/system activity/scheduled plan oauth events?fields=user.name,count,query.model&f[query.model]=-NULL&f[count]=0&sorts=user.name&limit=500&column limit=50&query timezone=America%2FLos Angeles&vis=%7B%22show view names%22%3Afalse%2C%22show row numbers%22%3Atrue%2C%22transpose%22%3Afalse%2C%22truncate text%22%3Atrue%2C%22hide totals%22%3Afalse%2C%22hide row totals%22%3Afalse%2C%22size to fit%22%3Atrue%2C%22table theme%22%3A%22white%22%2C%22limit displayed rows%22%3Afalse%2C%22enable conditional formatting%22%3Afalse%2C%22header text alignment%22%3A%22left%22%2C%22header font size%22%3A12%2C%22rows font size%22%3A12%2C%22conditional formatting include totals%22%3Afalse%2C%22conditional formatting include nulls%22%3Afalse%2C%22x axis gridlines%22%3Afalse%2C%22y axis gridlines%22%3Atrue%2C%22show y axis labels%22%3Atrue%2C%22show y axis ticks%22%3Atrue%2C%22y axis tick density%22%3A%22default%22%2C%22y axis tick density custom%22%3A5%2C%22show x axis label%22%3Atrue%2C%22show x axis ticks%22%3Atrue%2C%22y axis scale mode%22%3A%22linear%22%2C%22x axis reversed%22%3Afalse%2C%22y axis reversed%22%3Afalse%2C%22plot size by field%22%3Afalse%2C%22trellis%22%3A%22%22%2C%22stacking%22%3A%22%22%2C%22legend position%22%3A%22center%22%2C%22point style%22%3A%22none%22%2C%22show value labels%22%3Afalse%2C%22label density%22%3A25%2C%22x axis scale%22%3A%22auto%22%2C%22y axis combined%22%3Atrue%2C%22ordering%22%3A%22none%22%2C%22show null labels%22%3Afalse%2C%22show totals labels%22%3Afalse%2C%22show silhouette%22%3Afalse%2C%22totals color%22%3A%22%23808080%22%2C%22type%22%3A%22looker grid%22%2C%22defaults version%22%3A1%2C%22series types%22%3A%7B%7D%2C%22hidden fields%22%3A%5B%22count%22%5D%7D&filter config=%7B%22query.model%22%3A%5B%7B%22type%22%3A%22%21null%22%2C%22values%22%3A%5B%7B%7D%2C%7B%7D%5D%2C%22id%22%3A0%7D%5D%2C%22count%22%3A%5B%7B%22type%22%3A%22%3D%22%2C%22values%22%3A%5B%7B%22constant%22%3A%220%22%7D%2C%7B%7D%5D%2C%22id%22%3A1%7D%5D%2C%22 %21internal%21 %22%3A%5B%22OR%22%2C%5B%5B%22AND%22%2C%5B%5B%22FILTER%22%2C%7B%22field%22%3A%22query.model%22%2C%22value%22%3A%22-NULL%22%2C%22type%22%3A%22%21null%22%7D%5D%2C%5B%22FILTER%22%2C%7B%22field%22%3A%22count%22%2C%22value%22%3A%220%22%7D%5D%5D%5D%5D%5D%7D&dynamic fields=%5B%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Count%22%2C%22value format%22%3Anull%2C%22value format name%22%3Anull%2C%22based on%22%3A%22event attribute.value%22%2C%22 kind hint%22%3A%22measure%22%2C%22measure%22%3A%22count%22%2C%22type%22%3A%22count distinct%22%2C%22 type hint%22%3A%22number%22%2C%22filters%22%3A%7B%22event attribute.value%22%3A%22%25%2Fauth%2Fbigquery.readonly%25%22%7D%7D%5D&origin=share-expanded Each of these users will need to reauthorize their OAuth connection credentials to ensure uninterrupted schedule delivery. (Optional) Force read-only scope usage across your Looker instance To sign out all your users who have OAuth credentials that allow read and write scope from any of your BigQuery connections, follow these steps: Navigate to the Admin settings - General settings page.
- Generate a list of all users with potentially affected schedules To generate a list of all users without read-only OAuth credentials who have created schedules on your BigQuery connections, visit the following System Activity Explore, replacing INSTANCE NAME with the address of your Looker instance (such as https://example.cloud.looker.com ).
- Prior to Looker 24.20, when OAuth authentication for Google BigQuery connections were being set up , Looker created OAuth credentials that allowed the database user to request read and write scope.
- Starting in Looker 24.20, Looker instead requests OAuth read-only scopes for any new BigQuery OAuth connections, new OAuth authorizations to existing BigQuery OAuth connections, and re-authorizations to existing BigQuery OAuth connections.

### Admin settings - Connections \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-database-connections](https://docs.cloud.google.com/looker/docs/admin-panel-database-connections)
- Source ID: `site-docs-reference-required-4`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- If you are using a Looker (Google Cloud core) instance that is set up for public secure connections or for hybrid connections, use the IP address listed in the Egress Public IP field on the Details tab of the Instances page in the Google Cloud console.
- If you are not logged in to your OAuth user account when you test one of these connections, Looker will show a warning with a Log In link.
- Click the link to enter your OAuth credentials or to allow Looker access to your OAuth account information.
- Database connections that use OAuth, such as Snowflake and Google BigQuery , require a user login.

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Force BigQuery Readonly Scope usage Enabling this setting signs out users that have OAuth credentials that allow read and write scope on any of BigQuery connections.
- When the users authenticate again, Looker will create read-only OAuth credentials for those users instead.
- See Restricting OAuth scope to read-only for Google BigQuery connections for more information.
- Application Time Zone When displaying data in an Explore, a Look, or a dashboard, Looker can convert time data from the connection's Database Time Zone to the appropriate time zone for that user.

