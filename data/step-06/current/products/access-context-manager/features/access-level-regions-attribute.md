---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:43:03.658Z"
product_name: "Access Context Manager"
product_slug: "access-context-manager"
feature_name: "Access level Regions attribute"
feature_slug: "access-level-regions-attribute"
latest_feature_date: "2019-03-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes"
  - "https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec"
  - "https://docs.cloud.google.com/access-context-manager/docs/create-access-level"
keywords:
  - "regions"
  - "available"
  - "became"
  - "attribute"
  - "level"
---

# Access level Regions attribute

Product: Access Context Manager
Coverage: MEDIUM

## Step 02 Summary

The Regions access-level attribute became available in Access Context Manager.

## Extended Definition

The Regions access-level attribute became available in Access Context Manager.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes](https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes)
- [https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec](https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec)
- [https://docs.cloud.google.com/access-context-manager/docs/create-access-level](https://docs.cloud.google.com/access-context-manager/docs/create-access-level)

## Supporting Pages

### "Access level attributes \_|\_ Access Context Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes](https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes)
- Source ID: `site-api-reference`
- Final score: 127
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This attribute can only be included in conditions when creating or modifying an access level using the gcloud command-line tool or the Access Context Manager API.
- You can include the following attributes in your access level: IP subnetworks Geographic locations Access level dependencies Principals Device policy Attributes IP subnetworks Description Checks whether a request is coming from one or more IPv4 and/or IPv6 CIDR blocks that you specify.
- Home Documentation Security Access Context Manager Reference Send feedback Access level attributes Stay organized with collections Save and categorize content based on your preferences.
- The following table lists the attributes supported by access levels and provides additional details about each attribute.

### "Custom access level specification \_|\_ Access Context Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec](https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec)
- Source ID: `site-api-reference`
- Final score: 112
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Objects origin Contains attributes that identify the origin of the request. request.auth Contains attributes that identify authentication and authorization aspects of the request. request.time Contains time-based attributes that you can use to restrict access to resources based on the time of day, day of the week, or a specific date range. levels Contains attributes to define dependency on other access levels. device Contains attributes that describe the device the request originated from. origin attributes This section lists the attributes supported by the origin object.
- Example: // Checks if the enterprise certificate associated with the origin matches the device. device.certificates.exists ( cert , cert.is valid && cert.cert fingerprint == origin.clientCertFingerprint ()) Macros for CEL expressions You can use the following macros in the CEL expressions for custom access levels: Macro Description has(e.f) Tests whether a field is available.
- Example: levels. allow corp ips Where allow corp ips is the name of an access level. device attribute This section lists the attributes supported by the device object.
- This page details the objects and attributes that are used to the build the Common Expression Language (CEL) expressions for custom access levels.

### "Creating a basic access level \_|\_ Access Context Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/create-access-level](https://docs.cloud.google.com/access-context-manager/docs/create-access-level)
- Source ID: `site-api-reference`
- Final score: 96
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following criteria can be checked when determining whether to grant access: Screen lock is enabled Storage encryption is enabled Device is running a specified operating system kind and version Important: You must have a paid subscription to use device attributes in custom access level expressions.
- Limit access by device attributes This example describes how to create an access level that grants access only to devices, which meet a specified set of requirements, like a certain operating system (OS) version.
- See the following examples: Limit access on a corporate network Limit access by device attributes Grant access by user or service account Before you begin Learn about access levels .
- For example, if you want the access level to consider where a request is coming from within your network, you would select the IP Subnetworks attribute.

