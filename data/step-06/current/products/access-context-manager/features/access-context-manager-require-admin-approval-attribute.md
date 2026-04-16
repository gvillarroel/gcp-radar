---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:43:03.656Z"
product_name: "Access Context Manager"
product_slug: "access-context-manager"
feature_name: "Access Context Manager Require admin approval attribute"
feature_slug: "access-context-manager-require-admin-approval-attribute"
latest_feature_date: "2019-03-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes"
  - "https://docs.cloud.google.com/access-context-manager/docs/use-mobile-devices"
  - "https://docs.cloud.google.com/access-context-manager/docs/create-access-level"
keywords:
  - "approval"
  - "admin"
  - "require"
  - "attribute"
  - "device"
---

# Access Context Manager Require admin approval attribute

Product: Access Context Manager
Coverage: MEDIUM

## Step 02 Summary

The Require admin approval device-policy access-level attribute became available in Access Context Manager.

## Extended Definition

The Require admin approval device-policy access-level attribute became available in Access Context Manager.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes](https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes)
- [https://docs.cloud.google.com/access-context-manager/docs/use-mobile-devices](https://docs.cloud.google.com/access-context-manager/docs/use-mobile-devices)
- [https://docs.cloud.google.com/access-context-manager/docs/create-access-level](https://docs.cloud.google.com/access-context-manager/docs/create-access-level)

## Supporting Pages

### "Access level attributes \_|\_ Access Context Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes](https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes)
- Source ID: `site-api-reference`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following attributes are supported: Require screen lock Storage encryption Require administrator approval Require corp owned device OS policy Only certain device policy attributes can be used with mobile devices.
- YAML allowedEncryptionStatuses Valid values One or more of the following values: ENCRYPTION UNSUPPORTED ENCRYPTED UNENCRYPTED API reference REST RPC Require admin approval Description Checks whether the device has been approved by a an administrator.
- This attribute can only be included in conditions when creating or modifying an access level using the gcloud command-line tool or the Access Context Manager API.
- Supports mobile devices Yes YAML requireAdminApproval Valid values true false If omitted, defaults to false .

### "Use mobile devices with access levels \_|\_ Access Context Manager \_|\_\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/use-mobile-devices](https://docs.cloud.google.com/access-context-manager/docs/use-mobile-devices)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- While changes to access levels usually come into effect within a few minutes, enforcement of mobile device attributes can be delayed while changes to your managed mobile device settings are propagated.
- Getting started To start using access levels to check mobile device attributes, do the following: Set up basic mobile management or advanced mobile management for your organization.
- If a request from a mobile device doesn't meet the previous criteria, that request will be denied, even if the request otherwise meets the requirements of the access level.
- Request origin Currently, access levels checking mobile device attributes will permit access only if: The request is made from Safari or Google Chrome.

### "Creating a basic access level \_|\_ Access Context Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/create-access-level](https://docs.cloud.google.com/access-context-manager/docs/create-access-level)
- Source ID: `site-api-reference`
- Final score: 111
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The OR value will give the principals access even if other conditions, such as IP address or those inherited from other required access levels, are not met. { "name" : " NAME " , "title" : " TITLE " , "basic" : { "conditions" : [ { "members" : [ "user:sysadmin@example.com" , "serviceAccount:service@project.iam.gserviceaccount.com" ] }, { "requiredAccessLevels" : [ "accessPolicies/247332951433/accessLevels/Device Trust" , "accessPolicies/247332951433/accessLevels/IP Trust" ] } ], "combiningFunction" : "OR" } } Create the access level by calling accessLevels.create .
- In this example, assume the access levels are named Device Trust and IP Trust , and that 247332951433 is the name of your access policy. { "name" : " NAME " , "title" : " TITLE " , "basic" : { "conditions" : [ { "members" : [ "user:sysadmin@example.com" , "serviceAccount:service@project.iam.gserviceaccount.com" ] }, { "requiredAccessLevels" : [ "accessPolicies/247332951433/accessLevels/Device Trust" , "accessPolicies/247332951433/accessLevels/IP Trust" ] } ] } } Set combiningFunction to OR .
- In this example, assume the access levels are named Device Trust and IP Trust , and that 247332951433 is the name of your access policy. - members : - user:sysadmin@example.com - serviceAccount:service@project. iam.gserviceaccount.com - requiredAccessLevels : - accessPolicies/247332951433/accessLevels/Device Trust - accessPolicies/247332951433/accessLevels/IP Trust Save the file.
- Limit access by device attributes This example describes how to create an access level that grants access only to devices, which meet a specified set of requirements, like a certain operating system (OS) version.

