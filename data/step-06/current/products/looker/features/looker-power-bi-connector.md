---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.448Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Looker Power BI Connector"
feature_slug: "looker-power-bi-connector"
latest_feature_date: "2025-09-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/bi-connectors"
  - "https://docs.cloud.google.com/looker/docs/best-practices/looker-support-details"
  - "https://docs.cloud.google.com/looker/docs/action-hub"
keywords:
  - "looker"
  - "power"
  - "bi"
  - "connector"
  - "now"
  - "customer"
  - "hosted"
  - "instances"
---

# Looker Power BI Connector

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The Looker Power BI Connector is now supported for customer-hosted Looker instances and Looker (Google Cloud core) instances that use private connections; The Looker Power BI Connector now lets users show or display hidden fields when connecting to a Looker Explore.

## Extended Definition

The Looker Power BI Connector is now supported for customer-hosted Looker instances and Looker (Google Cloud core) instances that use private connections; The Looker Power BI Connector now lets users show or display hidden fields when connecting to a Looker Explore.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/bi-connectors](https://docs.cloud.google.com/looker/docs/bi-connectors)
- [https://docs.cloud.google.com/looker/docs/best-practices/looker-support-details](https://docs.cloud.google.com/looker/docs/best-practices/looker-support-details)
- [https://docs.cloud.google.com/looker/docs/action-hub](https://docs.cloud.google.com/looker/docs/action-hub)

## Supporting Pages

### Admin settings - BI Connectors \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/bi-connectors](https://docs.cloud.google.com/looker/docs/bi-connectors)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Power BI connector is supported for all configurations of Looker and Looker (Google Cloud core) instances, including customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections .
- The Microsoft Excel connector is supported for all configurations of Looker and Looker (Google Cloud core) instances, including customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections .
- The Tableau Desktop connector is supported for all configurations of Looker and Looker (Google Cloud core) instances, including customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections .
- For customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections, your network administrator must configure your network so that traffic from Power BI can reach your Looker instance.

### Looker Support details \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/best-practices/looker-support-details](https://docs.cloud.google.com/looker/docs/best-practices/looker-support-details)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Finding logs For customer-hosted instances, you can find the Looker logs in the log subdirectory under the Looker user's home directory (usually /home/looker ).
- See the Finding logs section for more information on retrieving logs from customer-hosted Looker instances.
- If your Looker instance is customer-hosted and is running an unsupported Looker version, update your Looker instance to a supported Looker version.
- Instances that are hosted by Looker automatically update to supported releases.

### Sharing data through an action hub \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/action-hub](https://docs.cloud.google.com/looker/docs/action-hub)
- Source ID: `site-docs-reference-required-4`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Admins of customer-hosted instances may need to consider additional factors when choosing to enable Looker integrations from the Looker Action Hub, especially integrations that support streamed results or that use OAuth .
- Considerations for customer-hosted instances To use Looker integrations , the Looker Action Hub must be able to communicate with the Looker instance and fulfill the Looker Action hub requirements .
- This is not always possible with customer-hosted Looker instances, for various reasons.
- The appropriate solution or combination of solutions will depend on the architecture of the Looker instance: If the customer-hosted instance is not resolvable by the Looker Action Hub — that is, the Looker Action Hub cannot receive requests from the Looker instance — Looker admins can contact a Google Cloud sales specialist to enable the public host url license feature.

