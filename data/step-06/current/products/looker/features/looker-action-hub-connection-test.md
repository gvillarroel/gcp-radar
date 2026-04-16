---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.435Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Looker Action Hub connection test"
feature_slug: "looker-action-hub-connection-test"
latest_feature_date: "2025-12-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/action-hub"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-database-connections"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-platform-actions"
keywords:
  - "looker"
  - "action"
  - "hub"
  - "connection"
  - "test"
  - "lets"
  - "admins"
  - "between"
---

# Looker Action Hub connection test

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Lets admins test the connection between a Looker instance and the Looker Action Hub.

## Extended Definition

Lets admins test the connection between a Looker instance and the Looker Action Hub.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/action-hub](https://docs.cloud.google.com/looker/docs/action-hub)
- [https://docs.cloud.google.com/looker/docs/admin-panel-database-connections](https://docs.cloud.google.com/looker/docs/admin-panel-database-connections)
- [https://docs.cloud.google.com/looker/docs/admin-panel-platform-actions](https://docs.cloud.google.com/looker/docs/admin-panel-platform-actions)

## Supporting Pages

### Admin settings - Connections \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-database-connections](https://docs.cloud.google.com/looker/docs/admin-panel-database-connections)
- Source ID: `site-docs-reference-required-4`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Actions available for some connections Depending on the connection dialect, the gear drop-down menu to the right of the connection may offer the following additional options: Option Description Show Tables This option brings you to a Looker Explore page that lets you create Looker Explore queries based on the metadata of your connection.
- Testing connections Looker lets you test your existing connections to make sure they are functioning properly.
- You can check the status of: A single connection by clicking Test to the far right of that connection All connections by clicking the Test All Connections button at the top of the page Two checks are common cause for confusion: Can find temp schema Can use persistent derived tables These checks don't need to pass for Looker to function.
- Actions available for all connections All connections offer these options from the gear drop-down menu to the far right of each connection: Option Description SQL Runner This option brings you to Looker's SQL Runner, with the proper connection and schema already selected.

### Sharing data through an action hub \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/action-hub](https://docs.cloud.google.com/looker/docs/action-hub)
- Source ID: `site-docs-reference-required-4`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Looker recommends that you also add the following: A README to explain the purpose and means of authentication for your action A PNG icon to display in the Looker Action Hub (or private action hub on your Looker instance) and in the Looker data delivery windows Any files for tests you want to run on your action code — this is different from testing your action Writing an action A design requirement for the Looker Action Hub server is that it remain completely stateless, so storing any information in the action application or service is not allowed.
- The appropriate solution or combination of solutions will depend on the architecture of the Looker instance: If the customer-hosted instance is not resolvable by the Looker Action Hub — that is, the Looker Action Hub cannot receive requests from the Looker instance — Looker admins can contact a Google Cloud sales specialist to enable the public host url license feature.
- You can create a custom action by: Setting up a development repo Writing your action Testing your action Publishing and enabling your action, either in the Looker Action Hub or on your own private action hub server As with any action, you may need to configure your LookML models with specific parameters before you can use the action to deliver your data.
- This reverse proxy accepts requests only from the static egress IP addresses for the Looker Action Hub; Looker admins who use this method must add to the allowlist the egress IP addresses from which the Looker Action Hub makes requests to the Looker instance: 35.153.89.114 , 104.196.138.163 , and 35.169.42.87 .

### Admin settings - Actions \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-platform-actions](https://docs.cloud.google.com/looker/docs/admin-panel-platform-actions)
- Source ID: `site-docs-reference-required-4`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Test the Looker Action Hub connection Note: This option is available only for the Looker Action Hub.
- To test your instance's connection to the Looker Action Hub, select Test Connection .
- Admins of customer-hosted instances may need to consider additional factors when choosing to enable Looker integrations from the Looker Action Hub, especially integrations that support streamed results or that use OAuth .
- For information about building and testing actions to add to the Looker Action Hub or your own private action hub server, see the Sharing data through an action hub documentation page.

