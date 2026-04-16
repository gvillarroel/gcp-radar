---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.424Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Controlled native egress for Private Service Connect"
feature_slug: "controlled-native-egress-for-private-service-connect"
latest_feature_date: "2026-01-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/bi-connectors"
  - "https://docs.cloud.google.com/looker/docs/action-hub"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect"
keywords:
  - "controlled"
  - "native"
  - "egress"
  - "private"
  - "connect"
  - "looker"
  - "core"
  - "instances"
---

# Controlled native egress for Private Service Connect

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Looker (Google Cloud core) instances using Private Service Connect can connect to Google APIs through controlled native egress.

## Extended Definition

Looker (Google Cloud core) instances using Private Service Connect can connect to Google APIs through controlled native egress.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/bi-connectors](https://docs.cloud.google.com/looker/docs/bi-connectors)
- [https://docs.cloud.google.com/looker/docs/action-hub](https://docs.cloud.google.com/looker/docs/action-hub)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)

## Supporting Pages

### Admin settings - BI Connectors \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/bi-connectors](https://docs.cloud.google.com/looker/docs/bi-connectors)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- The Microsoft Excel connector is supported for all configurations of Looker and Looker (Google Cloud core) instances, including customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections .
- The Tableau Desktop connector is supported for all configurations of Looker and Looker (Google Cloud core) instances, including customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections .
- For customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections, your network administrator must configure your network so that traffic from Microsoft Excel can reach your Looker instance.
- For customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections, your network administrator must configure your network so that traffic from Tableau Desktop can reach your Looker instance.

### Sharing data through an action hub \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/action-hub](https://docs.cloud.google.com/looker/docs/action-hub)
- Source ID: `site-docs-reference-required-4`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you're using a Looker (Google Cloud core) instance that has an IP allowlist configured, the Link Google services with this instance checkbox must be selected on the Details tab of the instance's Instance page in the Google Cloud console in order to connect to Looker Action Hub.
- Looker recommends that you also add the following: A README to explain the purpose and means of authentication for your action A PNG icon to display in the Looker Action Hub (or private action hub on your Looker instance) and in the Looker data delivery windows Any files for tests you want to run on your action code — this is different from testing your action Writing an action A design requirement for the Looker Action Hub server is that it remain completely stateless, so storing any information in the action application or service is not allowed.
- The Looker Action Hub must be able to send and receive API requests in the following ways: From the Looker instance to the Looker Action Hub network From the Looker user's browser to the Looker Action Hub network From the Looker Action Hub network to the Looker instance If your Looker deployment cannot accommodate these requests or if the IP Allowlist feature is enabled on your Looker instance, consider setting up a local action hub server to serve private Looker integrations or custom actions .
- You can create a custom action by: Setting up a development repo Writing your action Testing your action Publishing and enabling your action, either in the Looker Action Hub or on your own private action hub server As with any action, you may need to configure your LookML models with specific parameters before you can use the action to deliver your data.

### "Admin settings - OpenID Connect authentication \_|\_ Looker \_|\_ Google\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Additionally, Looker (Google Cloud core) customers who are using OIDC with a private connections instance, must ensure that their networks are set up to allow access to the OIDC provider.
- Enabling mirror OpenID Connect groups If you are using a Looker (Google Cloud core) instance, we recommend that you enable group mirroring for only the primary authentication method and don't enable group mirroring for the backup OAuth authentication .
- However, it is only possible when one of the following two conditions is met: Condition 1 : Users are authenticating into Looker (Google Cloud core) using their Google identities through the OpenID Connect protocol.
- Merging users when using Looker (Google Cloud core) When you're using Looker (Google Cloud core) and OpenID Connect, merging works as described in the previous section.

