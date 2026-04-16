---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:43:03.657Z"
product_name: "Access Context Manager"
product_slug: "access-context-manager"
feature_name: "Access Context Manager require corp-owned device attribute"
feature_slug: "access-context-manager-require-corp-owned-device-attribute"
latest_feature_date: "2019-03-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes"
  - "https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec"
  - "https://docs.cloud.google.com/access-context-manager/docs/use-mobile-devices"
keywords:
  - "owned"
  - "corp"
  - "require"
  - "attribute"
  - "device"
---

# Access Context Manager require corp-owned device attribute

Product: Access Context Manager
Coverage: MEDIUM

## Step 02 Summary

The Require corp owned device device-policy access-level attribute became available in Access Context Manager.

## Extended Definition

The Require corp owned device device-policy access-level attribute became available in Access Context Manager.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes](https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes)
- [https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec](https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec)
- [https://docs.cloud.google.com/access-context-manager/docs/use-mobile-devices](https://docs.cloud.google.com/access-context-manager/docs/use-mobile-devices)

## Supporting Pages

### "Access level attributes \_|\_ Access Context Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes](https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes)
- Source ID: `site-api-reference`
- Final score: 155
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following attributes are supported: Require screen lock Storage encryption Require administrator approval Require corp owned device OS policy Only certain device policy attributes can be used with mobile devices.
- This attribute can only be included in conditions when creating or modifying an access level using the gcloud command-line tool or the Access Context Manager API.
- API reference None Require corp owned device Description Checks whether the device is owned by your enterprise.
- Supports mobile devices Yes YAML requireCorpOwned Valid values true false If omitted, defaults to false .

### "Use mobile devices with access levels \_|\_ Access Context Manager \_|\_\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/use-mobile-devices](https://docs.cloud.google.com/access-context-manager/docs/use-mobile-devices)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- While changes to access levels usually come into effect within a few minutes, enforcement of mobile device attributes can be delayed while changes to your managed mobile device settings are propagated.
- Getting started To start using access levels to check mobile device attributes, do the following: Set up basic mobile management or advanced mobile management for your organization.
- If a request from a mobile device doesn't meet the previous criteria, that request will be denied, even if the request otherwise meets the requirements of the access level.
- Request origin Currently, access levels checking mobile device attributes will permit access only if: The request is made from Safari or Google Chrome.

### "Custom access level specification \_|\_ Access Context Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec](https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec)
- Source ID: `site-api-reference`
- Final score: 137
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example 2 ( device.os type == OsType.DESKTOP WINDOWS && device.is corp owned device ) ( device.os type == OsType.DESKTOP MAC && device.is admin approved device && device.versionAtLeast ( "10.11.0" )) This example represents an access level that requires the following conditions be met in order to allow a request: One of the following is true: The device that the request originated from uses a desktop Windows operating system and is owned by your organization.
- Example: levels. allow corp ips Where allow corp ips is the name of an access level. device attribute This section lists the attributes supported by the device object.
- Example: device.is corp owned device == true is secured with screenlock Type boolean Description Whether the device has its screen lock function enabled.
- Example: device.is admin approved device == true is corp owned device Type boolean Description Whether the device is owned by the organization.

