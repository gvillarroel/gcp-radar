---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:03:23.581Z"
product_name: "Access Context Manager"
product_slug: "access-context-manager"
feature_name: "Access Context Manager mobile OS policy attribute"
feature_slug: "access-context-manager-mobile-os-policy-attribute"
latest_feature_date: "2020-02-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes"
keywords:
  - "operating system device attribute"
  - "device policy OS condition"
  - "OS policy device attribute"
  - "Android OS attribute"
  - "access level OS policy"
  - "iOS OS attribute"
  - "OS policy"
  - "OS attribute"
---

# Access Context Manager mobile OS policy attribute

Product: Access Context Manager
Coverage: MEDIUM

## Step 02 Summary

Access Context Manager added support for the OS policy device attribute in access levels for iOS and Android devices.

## Extended Definition

In Access Context Manager, the Access Level device attributes include an OS policy attribute that can be used in access-level definitions. This attribute checks whether a device is using a specified operating system and is one of the supported device policy attributes for mobile-device contexts. The same documentation also notes that some device policy attributes are limited to specific environments, with OS policy described separately from platform-specific checks such as ChromeOS.

## Evidence Summary

The access-level-attributes page identifies OS policy as a supported device attribute and defines it as an operating-system check, with device-policy support scoped to specific mobile/other device contexts.

## Source Links

- [https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes](https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes)

## Supporting Pages

### "Access level attributes \_|\_ Access Context Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes](https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes)
- Source ID: `site-api-reference`
- Final score: 40
- Re-rank relevance: STRONG
- Re-rank rationale: The page defines an OS policy access-level attribute with `osConstraints`, valid OS types including iOS and Android, and its YAML/validation details.

Evidence snippets:
- The following attributes are supported: Require screen lock Storage encryption Require administrator approval Require corp owned device OS policy Only certain device policy attributes can be used with mobile devices.
- API reference None OS policy Description Checks whether a device is using a specified operating system.
- If you create a ChromeOS policy, you can also specify that it must be a verified ChromeOS .

