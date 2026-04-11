---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:03:23.580Z"
product_name: "Access Context Manager"
product_slug: "access-context-manager"
feature_name: "Custom access levels with Common Expression Language"
feature_slug: "custom-access-levels-with-common-expression-language"
latest_feature_date: "2020-06-01"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/access-context-manager/docs/custom-access-levels"
  - "https://docs.cloud.google.com/access-context-manager/docs/create-custom-access-level"
  - "https://docs.cloud.google.com/access-context-manager/docs/custom-constraints"
keywords:
  - "Common Expression Language"
  - "advanced mode CEL"
  - "custom access level expression"
  - "custom expression access level"
  - "gcloud custom access levels"
  - "CEL custom access level"
  - "custom level conditions"
  - "custom access levels"
---

# Custom access levels with Common Expression Language

Product: Access Context Manager
Coverage: HIGH

## Step 02 Summary

Access Context Manager supports custom access levels using Common Expression Language across APIs, gcloud, and the Cloud Console advanced mode.

## Extended Definition

Custom access levels in Access Context Manager are access level definitions whose rules are written as boolean expressions in a subset of Common Expression Language (CEL). These expressions evaluate request attributes—including device and context data from third-party security or endpoint vendors—to control access, and they represent an alternative to the service’s basic access levels. Custom access level expressions may require a paid subscription when they use device attributes, and organizations can enforce CEL-based policy constraints that allow or deny creation/updating of custom access levels.

## Evidence Summary

These official pages define custom access levels as CEL-based boolean access-control conditions, explain what they evaluate, and document related operational constraints such as paid-device-attribute requirements and CEL-governed lifecycle controls.

## Source Links

- [https://docs.cloud.google.com/access-context-manager/docs/custom-access-levels](https://docs.cloud.google.com/access-context-manager/docs/custom-access-levels)
- [https://docs.cloud.google.com/access-context-manager/docs/create-custom-access-level](https://docs.cloud.google.com/access-context-manager/docs/create-custom-access-level)
- [https://docs.cloud.google.com/access-context-manager/docs/custom-constraints](https://docs.cloud.google.com/access-context-manager/docs/custom-constraints)

## Supporting Pages

### Custom access levels \_|\_ Access Context Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/access-context-manager/docs/custom-access-levels](https://docs.cloud.google.com/access-context-manager/docs/custom-access-levels)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Custom access levels use boolean expressions written in a subset of Common Expression Language (CEL) to test the attributes of a client making a request.
- Custom access levels enable your organization to use the device and context data of third-party security and endpoint management vendors to permit access to Google Cloud resources.
- Home Documentation Security Access Context Manager Guides Send feedback Custom access levels Stay organized with collections Save and categorize content based on your preferences.
- While Access Context Manager already provides a method of creating basic access levels , you can also create custom access levels.

### "Creating a custom access level \_|\_ Access Context Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/create-custom-access-level](https://docs.cloud.google.com/access-context-manager/docs/create-custom-access-level)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- For examples and more information about Common Expression Language (CEL) support and custom access levels, see the Custom access level specification .
- For examples and more information about Common Expression Language (CEL) support and custom access levels, see the Custom access level specification .
- For details about building Common Expression Language (CEL) expressions for custom access levels, refer to the custom access level specification .
- Important: You must have a paid subscription to use device attributes in custom access level expressions.

### "Create custom constraints for Access Context Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/custom-constraints](https://docs.cloud.google.com/access-context-manager/docs/custom-constraints)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: WEAK
- Re-rank rationale: The page discusses Access Context Manager in the context of Organization Policy custom constraints on AccessPolicy/AccessLevel resources, but it does not describe CEL-based custom access level logic.

Evidence snippets:
- Disable region code in custom access levels name : organizations/ ORGANIZATION ID /customConstraints/custom.denyRegionCode resourceTypes : - accesscontextmanager.googleapis.com/AccessLevel methodTypes : - CREATE - UPDATE condition : "resource.custom.expr.expression.contains('region code')" actionType : DENY displayName : Disable region code in custom access levels description : Disables the use of region code attribute in custom access levels.
- Disable custom access levels name : organizations/ ORGANIZATION ID /customConstraints/custom.denyBasicAccessLevels resourceTypes : - accesscontextmanager.googleapis.com/AccessLevel methodTypes : - CREATE - UPDATE condition : "has(resource.custom)" actionType : ALLOW displayName : Disable custom access levels description : Disables the creation of custom access levels.
- This defines a constraint that only allows the creation of basic access levels and denies the creation of custom access levels.
- Conditions for your custom constraints are defined using Common Expression Language (CEL) .

