---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.437Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Global access with Private Service Connect"
feature_slug: "global-access-with-private-service-connect"
latest_feature_date: "2025-12-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect"
  - "https://docs.cloud.google.com/looker/docs/bi-connectors"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
keywords:
  - "global"
  - "access"
  - "private"
  - "connect"
  - "enables"
  - "looker"
  - "core"
  - "instances"
---

# Global access with Private Service Connect

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Enables global access for Looker (Google Cloud core) instances that use Private Service Connect connections.

## Extended Definition

Enables global access for Looker (Google Cloud core) instances that use Private Service Connect connections.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- [https://docs.cloud.google.com/looker/docs/bi-connectors](https://docs.cloud.google.com/looker/docs/bi-connectors)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)

## Supporting Pages

### "Admin settings - OpenID Connect authentication \_|\_ Looker \_|\_ Google\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Additionally, Looker (Google Cloud core) customers who are using OIDC with a private connections instance, must ensure that their networks are set up to allow access to the OIDC provider.
- Enabling mirror OpenID Connect groups If you are using a Looker (Google Cloud core) instance, we recommend that you enable group mirroring for only the primary authentication method and don't enable group mirroring for the backup OAuth authentication .
- However, it is only possible when one of the following two conditions is met: Condition 1 : Users are authenticating into Looker (Google Cloud core) using their Google identities through the OpenID Connect protocol.
- Note: Customers who use Looker (Google Cloud core) should be aware of their responsibility for controlling access and permissions when using third-party identity providers.

### Admin settings - BI Connectors \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/bi-connectors](https://docs.cloud.google.com/looker/docs/bi-connectors)
- Source ID: `site-docs-reference`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Looker (Google Cloud core) private connections (private services access) instances aren't supported.
- The Microsoft Excel connector is supported for all configurations of Looker and Looker (Google Cloud core) instances, including customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections .
- The Tableau Desktop connector is supported for all configurations of Looker and Looker (Google Cloud core) instances, including customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections .
- For customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections, your network administrator must configure your network so that traffic from Microsoft Excel can reach your Looker instance.

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Email Domain Allowlist for Scheduled Content Note: In Looker (Google Cloud core) instances, you set the email domain allowlist for an instance within the Google Cloud console .
- Default Private Personal Folders Note: The Default Private Personal Folders option is not available for Looker instances with Closed System enabled.
- Automated Gemini in Looker enablement and user management Note: This setting is not available for Looker (Google Cloud core) instances.
- Some settings are available only for Looker (original) instances or only for Looker (Google Cloud core) instances.

