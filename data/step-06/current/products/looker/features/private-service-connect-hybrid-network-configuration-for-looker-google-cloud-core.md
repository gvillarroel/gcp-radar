---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.467Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Private Service Connect hybrid network configuration for Looker (Google Cloud core)"
feature_slug: "private-service-connect-hybrid-network-configuration-for-looker-google-cloud-core"
latest_feature_date: "2025-05-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/bi-connectors"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-database-connections"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect"
keywords:
  - "private"
  - "connect"
  - "hybrid"
  - "network"
  - "configuration"
  - "looker"
  - "core"
  - "lets"
---

# Private Service Connect hybrid network configuration for Looker (Google Cloud core)

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Lets Looker (Google Cloud core) instances use Private Service Connect with a hybrid network configuration for secure inbound web access and private outbound connectivity.

## Extended Definition

Lets Looker (Google Cloud core) instances use Private Service Connect with a hybrid network configuration for secure inbound web access and private outbound connectivity.

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
- Final score: 192
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
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you are using a Looker (Google Cloud core) instance that is set up for public secure connections or for hybrid connections, use the IP address listed in the Egress Public IP field on the Details tab of the Instances page in the Google Cloud console.
- Actions available for some connections Depending on the connection dialect, the gear drop-down menu to the right of the connection may offer the following additional options: Option Description Show Tables This option brings you to a Looker Explore page that lets you create Looker Explore queries based on the metadata of your connection.
- Show Processes This option brings you to a Looker Explore page that lets you create Looker Explore queries based on the processes running on this connection, the state they are in, how long they have been running, and other info.
- Show PDT Event Log This option brings you to a Looker Explore page that lets you create Looker Explore queries based on the derived table activity for this connection.

### "Admin settings - OpenID Connect authentication \_|\_ Looker \_|\_ Google\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- Source ID: `site-docs-reference`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- Additionally, Looker (Google Cloud core) customers who are using OIDC with a private connections instance, must ensure that their networks are set up to allow access to the OIDC provider.
- Your Looker groups will still mirror your OpenID Connect configuration, but you will be able to do additional group and user management within Looker, such as adding OpenID Connect users to Looker-specific groups or assigning Looker roles directly to OpenID Connect users.
- Enabling mirror OpenID Connect groups If you are using a Looker (Google Cloud core) instance, we recommend that you enable group mirroring for only the primary authentication method and don't enable group mirroring for the backup OAuth authentication .
- Use the configuration information you obtained from your OP's discovery document, your OP, or your internal authentication team to enter connection settings in the following fields: Identifier : The client identifier unique to your Looker instance.

