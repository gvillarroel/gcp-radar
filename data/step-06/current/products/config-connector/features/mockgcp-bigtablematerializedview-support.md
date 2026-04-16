---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.016Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "mockgcp BigtableMaterializedView support"
feature_slug: "mockgcp-bigtablematerializedview-support"
latest_feature_date: "2025-11-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields"
  - "https://docs.cloud.google.com/config-connector/docs/reference/annotations"
  - "https://docs.cloud.google.com/config-connector/docs/best-practices"
keywords:
  - "bigtablematerializedview"
  - "mockgcp"
  - "added"
---

# mockgcp BigtableMaterializedView support

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Mockgcp added support for BigtableMaterializedView.

## Extended Definition

Mockgcp added support for BigtableMaterializedView.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- [https://docs.cloud.google.com/config-connector/docs/reference/annotations](https://docs.cloud.google.com/config-connector/docs/reference/annotations)
- [https://docs.cloud.google.com/config-connector/docs/best-practices](https://docs.cloud.google.com/config-connector/docs/best-practices)

## Supporting Pages

### Ignore unspecified fields \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- Source ID: `site-docs-reference`
- Final score: 27
- Re-rank relevance: N/A

Evidence snippets:
- Note that the only populating behavior CRDs added in version 1.114.0 and later follow is Absent regardless of the cnrm.cloud.google.com/state-into-spec annotation or the stateIntoSpec fields in the ConfigConnector CR or ConfigConnectorContext CR.
- Both config management tools and Config Connector treat list fields as atomic, thus the added spec.bars[0].br2 is treated as a drift by config management tools and will be removed to correct the drift .
- This page might not be applicable if you're using a CRD added in version 1.114.0 and later because those CRDs use only the Absent behavior.
- For CRDs added in version 1.114.0 and later , the default populating behavior is Absent .

### Annotations \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/annotations](https://docs.cloud.google.com/config-connector/docs/reference/annotations)
- Source ID: `site-docs-reference`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- Annotation Description cnrm.cloud.google.com/mutable-but-unreadable-fields This annotation is added and managed by Config Connector for resources with mutable but unreadable fields (for example, "password" field in some resource spec). cnrm.cloud.google.com/observed-secret-versions This annotation is added and managed by Config Connector for resources with sensitive fields. cnrm.cloud.google.com/supports-ssa This annotation is added and managed by Config Connector for resources with server-side apply enabled . cnrm.cloud.google.com/blueprint This annotation is added for resources used in KRM blueprints .

### Best practices for Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/best-practices](https://docs.cloud.google.com/config-connector/docs/best-practices)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

