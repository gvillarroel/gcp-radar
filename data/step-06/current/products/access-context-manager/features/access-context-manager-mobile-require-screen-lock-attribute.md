---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:03:23.582Z"
product_name: "Access Context Manager"
product_slug: "access-context-manager"
feature_name: "Access Context Manager mobile require screen lock attribute"
feature_slug: "access-context-manager-mobile-require-screen-lock-attribute"
latest_feature_date: "2020-02-25"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes"
keywords:
  - "access level screen lock condition"
  - "screen lock requirement"
  - "Android Require screen lock"
  - "iOS Require screen lock"
  - "require screen lock attribute"
  - "device-policy screen lock"
  - "Require screen lock"
  - "screen lock attribute"
---

# Access Context Manager mobile require screen lock attribute

Product: Access Context Manager
Coverage: HIGH

## Step 02 Summary

Access Context Manager added support for the Require screen lock device attribute for iOS and Android access levels.

## Extended Definition

Access Context Manager access levels include a device-policy attribute called **Require screen lock**. This attribute is supported for access levels that use mobile device policy attributes, and it is defined as checking whether a device has screen lock enabled. The feature is therefore a device-state condition used in access context policies.

## Evidence Summary

The cited Access Context Manager documentation explicitly lists 'Require screen lock' as a supported access-level device-policy attribute and states its purpose as validating whether a device has screen lock enabled.

## Source Links

- [https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes](https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes)

## Supporting Pages

### "Access level attributes \_|\_ Access Context Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes](https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes)
- Source ID: `site-api-reference`
- Final score: 36
- Re-rank relevance: STRONG
- Re-rank rationale: It includes a dedicated "Require screen lock" device-policy subsection with description, mobile-device applicability, and YAML field mapping.

Evidence snippets:
- The following attributes are supported: Require screen lock Storage encryption Require administrator approval Require corp owned device OS policy Only certain device policy attributes can be used with mobile devices.
- API reference REST RPC Device policy attributes Require screen lock Description Checks if a device has screen lock enabled.

