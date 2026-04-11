---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:36.637Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "Resource filtering by user-defined attributes"
feature_slug: "resource-filtering-by-user-defined-attributes"
latest_feature_date: "2025-01-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/quickstart-settings"
keywords:
  - "attribute-based filters"
  - "REST API filtering"
  - "API resource query"
  - "query by attributes"
  - "custom attribute filtering"
  - "resource filtering"
  - "user-defined attributes"
  - "custom attributes"
---

# Resource filtering by user-defined attributes

Product: Apigee API hub
Coverage: LOW

## Step 02 Summary

API hub now supports filtering resources via REST API using user-defined attributes.

## Extended Definition

In Apigee API hub, entities such as API resources, versions, and deployments can have user-defined attributes attached. The available evidence confirms attribute creation/editing is supported, which means the platform supports metadata assignment to resources, though the provided excerpt does not explicitly confirm a REST API filter operation using those attributes.

## Evidence Summary

The cited documentation confirms support for system and user-defined attributes on API hub entities, but it does not directly document REST API attribute-based resource filtering.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/quickstart-settings](https://docs.cloud.google.com/apigee/docs/apihub/quickstart-settings)

## Supporting Pages

### Create and edit attributes \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/quickstart-settings](https://docs.cloud.google.com/apigee/docs/apihub/quickstart-settings)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: MODERATE
- Re-rank rationale: The page defines how to create and associate user-defined attributes with API hub resources, which is useful context for filtering by attributes but does not describe REST filtering behavior itself.

Evidence snippets:
- Overview The entities you create in API hub, such as API resources, versions, and deployments, can have system and user-defined attributes associated with them.
- Add more user-defined attributes before continuing to the next quickstart, if you wish.

