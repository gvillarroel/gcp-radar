---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.439Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Private Service Connect outbound connections"
feature_slug: "private-service-connect-outbound-connections"
latest_feature_date: "2025-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/bi-connectors"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-database-connections"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect"
keywords:
  - "private"
  - "connect"
  - "outbound"
  - "connections"
  - "looker"
  - "core"
  - "instances"
  - "can"
---

# Private Service Connect outbound connections

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Looker (Google Cloud core) instances using Private Service Connect can configure outbound connections to external domains or the Looker Marketplace more simply.

## Extended Definition

Looker (Google Cloud core) instances using Private Service Connect can configure outbound connections to external domains or the Looker Marketplace more simply.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/bi-connectors](https://docs.cloud.google.com/looker/docs/bi-connectors)
- [https://docs.cloud.google.com/looker/docs/admin-panel-database-connections](https://docs.cloud.google.com/looker/docs/admin-panel-database-connections)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)

## Supporting Pages

### Admin settings - BI Connectors \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/bi-connectors](https://docs.cloud.google.com/looker/docs/bi-connectors)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Microsoft Excel connector is supported for all configurations of Looker and Looker (Google Cloud core) instances, including customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections .
- The Tableau Desktop connector is supported for all configurations of Looker and Looker (Google Cloud core) instances, including customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections .
- For customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections, your network administrator must configure your network so that traffic from Microsoft Excel can reach your Looker instance.
- For customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections, your network administrator must configure your network so that traffic from Tableau Desktop can reach your Looker instance.

### Admin settings - Connections \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-database-connections](https://docs.cloud.google.com/looker/docs/admin-panel-database-connections)
- Source ID: `site-docs-reference-required-4`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you are using a Looker (Google Cloud core) instance that is set up for public secure connections or for hybrid connections, use the IP address listed in the Egress Public IP field on the Details tab of the Instances page in the Google Cloud console.
- Actions available for some connections Depending on the connection dialect, the gear drop-down menu to the right of the connection may offer the following additional options: Option Description Show Tables This option brings you to a Looker Explore page that lets you create Looker Explore queries based on the metadata of your connection.
- You can check the status of: A single connection by clicking Test to the far right of that connection All connections by clicking the Test All Connections button at the top of the page Two checks are common cause for confusion: Can find temp schema Can use persistent derived tables These checks don't need to pass for Looker to function.
- Actions available for all connections All connections offer these options from the gear drop-down menu to the far right of each connection: Option Description SQL Runner This option brings you to Looker's SQL Runner, with the proper connection and schema already selected.

### "Admin settings - OpenID Connect authentication \_|\_ Looker \_|\_ Google\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Additionally, Looker (Google Cloud core) customers who are using OIDC with a private connections instance, must ensure that their networks are set up to allow access to the OIDC provider.
- Enabling mirror OpenID Connect groups If you are using a Looker (Google Cloud core) instance, we recommend that you enable group mirroring for only the primary authentication method and don't enable group mirroring for the backup OAuth authentication .
- For example, if you have configured OpenID Connect to make user-specific connections to your database, you could pair your OpenID Connect claims with Looker user attributes to make your database connections user-specific in Looker.
- However, it is only possible when one of the following two conditions is met: Condition 1 : Users are authenticating into Looker (Google Cloud core) using their Google identities through the OpenID Connect protocol.

