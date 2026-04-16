---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:43:03.652Z"
product_name: "Access Context Manager"
product_slug: "access-context-manager"
feature_name: "Mobile device access-level attributes in Access Context Manager"
feature_slug: "mobile-device-access-level-attributes-in-access-context-manager"
latest_feature_date: "2020-10-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes"
  - "https://docs.cloud.google.com/access-context-manager/docs/use-mobile-devices"
  - "https://docs.cloud.google.com/access-context-manager/docs/manage-access-levels"
keywords:
  - "attributes"
  - "mobile"
  - "device"
  - "levels"
  - "level"
---

# Mobile device access-level attributes in Access Context Manager

Product: Access Context Manager
Coverage: MEDIUM

## Step 02 Summary

Access levels now evaluate additional mobile request attributes, including Storage encryption status, admin approval requirement, and corp-owned device requirement.

## Extended Definition

Access levels now evaluate additional mobile request attributes, including Storage encryption status, admin approval requirement, and corp-owned device requirement.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes](https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes)
- [https://docs.cloud.google.com/access-context-manager/docs/use-mobile-devices](https://docs.cloud.google.com/access-context-manager/docs/use-mobile-devices)
- [https://docs.cloud.google.com/access-context-manager/docs/manage-access-levels](https://docs.cloud.google.com/access-context-manager/docs/manage-access-levels)

## Supporting Pages

### "Use mobile devices with access levels \_|\_ Access Context Manager \_|\_\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/use-mobile-devices](https://docs.cloud.google.com/access-context-manager/docs/use-mobile-devices)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- While changes to access levels usually come into effect within a few minutes, enforcement of mobile device attributes can be delayed while changes to your managed mobile device settings are propagated.
- Getting started To start using access levels to check mobile device attributes, do the following: Set up basic mobile management or advanced mobile management for your organization.
- Request origin Currently, access levels checking mobile device attributes will permit access only if: The request is made from Safari or Google Chrome.
- Overview Limitations Getting started Troubleshooting Overview Access Context Manager supports using Google basic mobile management and advanced mobile management to create access levels that check for certain characteristics of mobile devices.

### "Access level attributes \_|\_ Access Context Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes](https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes)
- Source ID: `site-api-reference`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This attribute can only be included in conditions when creating or modifying an access level using the gcloud command-line tool or the Access Context Manager API.
- You can include the following attributes in your access level: IP subnetworks Geographic locations Access level dependencies Principals Device policy Attributes IP subnetworks Description Checks whether a request is coming from one or more IPv4 and/or IPv6 CIDR blocks that you specify.
- The following attributes are supported: Require screen lock Storage encryption Require administrator approval Require corp owned device OS policy Only certain device policy attributes can be used with mobile devices.
- API reference REST RPC Device policy Requirements To use the device policy attributes with mobile devices, you must configure MDM for your organization .

### Managing access levels \_|\_ Access Context Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/access-context-manager/docs/manage-access-levels](https://docs.cloud.google.com/access-context-manager/docs/manage-access-levels)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, if the level restricted access to certain operating system versions, the output might look something like: basic : conditions : - devicePolicy : allowedEncryptionStatuses : - ENCRYPTED osConstraints : - minimumVersion : 10.13.6 osType : DESKTOP MAC - minimumVersion : 10.0.18219 osType : DESKTOP WINDOWS - minimumVersion : 68.0.3440 osType : DESKTOP CHROME OS requireScreenlock : true name : accessPolicies/330193482019/accessLevels/Device Trust title : Device Trust Extended Note: To use the output of the describe command to update or create a basic access level, send the response to a .yaml file, and then edit the file to remove the name , title , description , basic , and conditions lines.
- Example command gcloud access-context-manager levels update Device Trust \ --basic-level-spec = corpdevspec.yaml \ --combine-function = OR \ --description = 'Access level that conforms to updated corporate spec.' \ --title = 'Device Trust Extended' \ --policy = 1034095178592 API To update an access level, call accessLevels.patch .
- The output will look something like: NAME TITLE LEVEL TYPE Device Trust Device Trust Extended Basic Service Group A Service Group A Basic API To list all the access levels for a policy, call accessLevels.list .
- You should see output similar to the following: Waiting for operation [accessPolicies/330193482019/accessLevels/Device Trust/delete/1531171874311645] to complete...done.

