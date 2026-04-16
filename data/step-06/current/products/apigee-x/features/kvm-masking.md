---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.724Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "KVM masking"
feature_slug: "kvm-masking"
latest_feature_date: "2025-12-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
keywords:
  - "masking"
  - "values"
  - "mask"
  - "value"
  - "available"
---

# KVM masking

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Key value map (KVM) masking is available to mask KVM values with asterisks.

## Extended Definition

Key value map (KVM) masking is available to mask KVM values with asterisks.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide](https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide)
- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)

## Supporting Pages

### Manage attributes \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows the API call update the API Visibility user defined attribute. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{"name": "projects/test-15/locations/us-central1/attributes/API Visibility", display name" : "API Visibility Updated", "allowedValues": [ { "id": "internal", "displayName": "Internal", "description": "The API is visible internally in an organization" }, { "id": "external", "displayName": "External", "description": "The API is visible externally in an organization" }, { "id": "public", "displayName": "Public", "description": "The API is visible public in an organization" } ]}' \ -X PATCH https://autopush-apihub.sandbox.googleapis.com/v1/projects/common-dev-15/locations/us-central1/attributes/API Visibility?update mask=display name,allowed values It's important to understand how API hub interprets the request payload for the UpdateAttribute API.
- The following example shows the API call to update the values of the Business unit attribute. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{"allowed values": [ { "id": "bu1", "display name": "Business unit 1", "description": "The API can be used by business unit 1" }, { "id": "bu2", "display name": "Business unit 2", "description": "The API can be used by business unit 2" }, { "id": "bu3", "display name": "Business unit 3", "description": "The API can be used by business unit 3" }]}' \ -X PATCH https://apihub.googleapis.com/v1/projects/test-15/locations/us-central1/attributes/system-business-unit?update mask=allowed values It's important to understand how API hub interprets the request payload for the UpdateAttribute API.
- The following example shows the API call to create the attribute-01 user defined attribute. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{ "display name" : "custom attribute", "description" : "custom attribute details", "definition type" : "USER DEFINED", "scope" : "API", "data type" : "ENUM", "allowed values" : [ { "id" : "value-1", "display name" : "Value 1", "description" : "Value 1 test description", "immutable" : false, }, { "id" : "value-2", "display name" : "Value 2", "description" : "Value 2 test description", "immutable" : false, }, ], "cardinality" : 4, "mandatory" : false }' \ -X POST https://apihub.googleapis.com/v1/projects/test-15/locations/us-central1/attributes?attribute id=attribute-01 Edit a user defined attribute Caution: Avoid adding sensitive data to user defined attributes.
- The following example shows the API call to filter resources based on a user defined attribute value of String data type. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-type: application/json" \ -X GET \ https://apihub.googleapis.com/v1/projects/test-project-1/locations/us-central1/apis?filter=attributes.projects/test-project-1/locations/us-central1/attributes/cdcb1260-ed63-4e5b-935d-4394f178da4f.string values.values:helloworld Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### PCI Configuration Guide for Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide](https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Details of how to set up masking are available at Data masking and hiding .
- PCI Requirement Section Requirement 3: Protect stored account data Data masking Requirement 3: Protect stored account data Data storage Requirement 4: Protect cardholder data with strong cryptography during transmission over open, public networks TLS configuration Requirement 4: Protect cardholder data with strong cryptography during transmission over open, public networks Data encryption Requirement 7: Restrict access to system components and cardholder data by business need to know Use/Authorizations Requirement 8: Identify users and authenticate access to system components Complex password requirements or SAML Requirement 10: Log and monitor all access to system components and cardholder data Audit trail Requirement 11: Test security of systems and networks regularly Endpoint scanning To obtain a PCI Data Security Standard Attestation of Compliance (AOC), please visit Google Compliance Report Manager or contact your Apigee sales team.
- Data masking Data masking prevents the display of sensitive data during a Debug session only, both in the Debug tool (Apigee UI) and in the backend by Debug (Apigee API).
- Data masking does NOT prevent the data from being visible in places such as log files, the cache, and analytics.

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- On the Apps page, click + Create On the Create App page, complete the required fields in the App Details section using the following values: App name : Enter a name for the App.
- In the Assign Message pane, complete the required fields in the Name and Display name sections using the following values: Name : Enter a policy name.
- In the VerifyAPIKey pane, complete the required fields in the Name and Display name sections using the following values: Name : Enter a policy name.
- In the Add developer page, complete the required fields using any values you wish.

