---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:43:03.655Z"
product_name: "Access Context Manager"
product_slug: "access-context-manager"
feature_name: "Access Context Manager mobile require screen lock attribute"
feature_slug: "access-context-manager-mobile-require-screen-lock-attribute"
latest_feature_date: "2020-02-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes"
  - "https://docs.cloud.google.com/access-context-manager/docs/use-mobile-devices"
  - "https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec"
keywords:
  - "screen"
  - "lock"
  - "require"
  - "mobile"
  - "attribute"
---

# Access Context Manager mobile require screen lock attribute

Product: Access Context Manager
Coverage: MEDIUM

## Step 02 Summary

Access Context Manager added support for the Require screen lock device attribute for iOS and Android access levels.

## Extended Definition

Access Context Manager added support for the Require screen lock device attribute for iOS and Android access levels.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes](https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes)
- [https://docs.cloud.google.com/access-context-manager/docs/use-mobile-devices](https://docs.cloud.google.com/access-context-manager/docs/use-mobile-devices)
- [https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec](https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec)

## Supporting Pages

### "Access level attributes \_|\_ Access Context Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes](https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes)
- Source ID: `site-api-reference`
- Final score: 167
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following attributes are supported: Require screen lock Storage encryption Require administrator approval Require corp owned device OS policy Only certain device policy attributes can be used with mobile devices.
- This attribute can only be included in conditions when creating or modifying an access level using the gcloud command-line tool or the Access Context Manager API.
- Supports mobile devices Yes Important: For an iOS device to satisfy the the storage encryption attribute, screen lock must be enabled on the device.
- API reference REST RPC Device policy attributes Require screen lock Description Checks if a device has screen lock enabled.

### "Use mobile devices with access levels \_|\_ Access Context Manager \_|\_\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/use-mobile-devices](https://docs.cloud.google.com/access-context-manager/docs/use-mobile-devices)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, if you modify your basic management settings to require use of a screen lock, it can take up to 24 hours to propagate that change.
- While changes to access levels usually come into effect within a few minutes, enforcement of mobile device attributes can be delayed while changes to your managed mobile device settings are propagated.
- Getting started To start using access levels to check mobile device attributes, do the following: Set up basic mobile management or advanced mobile management for your organization.
- If a request from a mobile device doesn't meet the previous criteria, that request will be denied, even if the request otherwise meets the requirements of the access level.

### "Custom access level specification \_|\_ Access Context Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec](https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec)
- Source ID: `site-api-reference`
- Final score: 105
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example: device.is corp owned device == true is secured with screenlock Type boolean Description Whether the device has its screen lock function enabled.
- Example: device.is secured with screenlock == true os type Type enum Description Identifies which operating system the device is using.
- Objects origin Contains attributes that identify the origin of the request. request.auth Contains attributes that identify authentication and authorization aspects of the request. request.time Contains time-based attributes that you can use to restrict access to resources based on the time of day, day of the week, or a specific date range. levels Contains attributes to define dependency on other access levels. device Contains attributes that describe the device the request originated from. origin attributes This section lists the attributes supported by the origin object.
- Example 2 ( device.os type == OsType.DESKTOP WINDOWS && device.is corp owned device ) ( device.os type == OsType.DESKTOP MAC && device.is admin approved device && device.versionAtLeast ( "10.11.0" )) This example represents an access level that requires the following conditions be met in order to allow a request: One of the following is true: The device that the request originated from uses a desktop Windows operating system and is owned by your organization.

