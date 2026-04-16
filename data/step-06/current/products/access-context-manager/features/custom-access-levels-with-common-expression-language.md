---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:43:03.653Z"
product_name: "Access Context Manager"
product_slug: "access-context-manager"
feature_name: "Custom access levels with Common Expression Language"
feature_slug: "custom-access-levels-with-common-expression-language"
latest_feature_date: "2020-06-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/access-context-manager/docs/custom-access-levels"
  - "https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec"
  - "https://docs.cloud.google.com/access-context-manager/docs/overview"
keywords:
  - "expression"
  - "language"
  - "common"
  - "custom"
  - "levels"
---

# Custom access levels with Common Expression Language

Product: Access Context Manager
Coverage: LOW

## Step 02 Summary

Access Context Manager supports custom access levels using Common Expression Language across APIs, gcloud, and the Cloud Console advanced mode.

## Extended Definition

Access Context Manager supports custom access levels using Common Expression Language across APIs, gcloud, and the Cloud Console advanced mode.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/access-context-manager/docs/custom-access-levels](https://docs.cloud.google.com/access-context-manager/docs/custom-access-levels)
- [https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec](https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec)
- [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview)

## Supporting Pages

### Custom access levels \_|\_ Access Context Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/access-context-manager/docs/custom-access-levels](https://docs.cloud.google.com/access-context-manager/docs/custom-access-levels)
- Source ID: `site-iam-reference`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- Custom access levels use boolean expressions written in a subset of Common Expression Language (CEL) to test the attributes of a client making a request.
- To learn more about building CEL expressions for custom access levels, see the custom access level specification .
- Custom access levels enable your organization to use the device and context data of third-party security and endpoint management vendors to permit access to Google Cloud resources.
- Home Documentation Security Access Context Manager Guides Send feedback Custom access levels Stay organized with collections Save and categorize content based on your preferences.

### "Custom access level specification \_|\_ Access Context Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec](https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec)
- Source ID: `site-api-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- This page details the objects and attributes that are used to the build the Common Expression Language (CEL) expressions for custom access levels.
- Example: // Checks if the enterprise certificate associated with the origin matches the device. device.certificates.exists ( cert , cert.is valid && cert.cert fingerprint == origin.clientCertFingerprint ()) Macros for CEL expressions You can use the following macros in the CEL expressions for custom access levels: Macro Description has(e.f) Tests whether a field is available.
- Example: // Checks if the device has at least one valid enterprise certificate. device.certificates.exists ( cert , cert.is valid == true ) Functions Access Context Manager provides the following functions for use in the CEL expressions for custom access levels.
- Example: This returns false because more than one element is greater than 1: [1,2,3].exists one(x, x > 1) Example CEL expressions This section includes examples of CEL expressions used to create custom access levels.

### Access Context Manager Overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Custom access levels are created using a subset of Common Expression Language.
- Learn more Quickstart: Create an access level for Access Context Manager Create a basic access level Create a custom access level Example Access Level YAML Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- In addition to the request context used for basic access levels, you can also use custom access levels to permit requests based on data from third-party services.
- For example, in the following expression, the evaluation of origin.region code fails, but the levels.ip check evaluation succeeds.

