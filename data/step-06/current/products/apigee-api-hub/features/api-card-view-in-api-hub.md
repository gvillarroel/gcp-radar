---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:45:01.533Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "API card view in API hub"
feature_slug: "api-card-view-in-api-hub"
latest_feature_date: "2025-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide"
  - "https://docs.cloud.google.com/apigee/docs/release/known-issues"
  - "https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes"
keywords:
  - "browsing"
  - "richer"
  - "card"
  - "view"
  - "management"
  - "based"
  - "adds"
---

# API card view in API hub

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

Adds a card-based API browsing and management view in API hub with richer at-a-glance API metadata.

## Extended Definition

Adds a card-based API browsing and management view in API hub with richer at-a-glance API metadata.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide](https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide)
- [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
- [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes)

## Supporting Pages

### Apigee known issues \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Find the - apiGroups: apiregistration.k8s.io block, and add the apiservices/finalizers resource to the list of resources: - apiGroups: - apiregistration.k8s.io resources: - apiservices - apiservices/finalizers verbs: - create - delete - get - patch - update Find the - apiGroups: authorization.k8s.io block, and add the - apiGroups: apigee.cloud.google.com block after the end of the block with the following text: - apiGroups: - apigee.cloud.google.com resources: - apigeetelemetries/finalizers verbs: - get - patch - update For example: - apiGroups: - authorization.k8s.io resources: - subjectaccessreviews verbs: - create - get - list - apiGroups: - apigee.cloud.google.com resources: - apigeetelemetries/finalizers verbs: - get - patch - update Apply the changes to the apigee-operator chart: Dry run: helm upgrade operator apigee-operator/ \ --install \ --namespace APIGEE NAMESPACE \ --atomic \ -f OVERRIDES FILE \ --dry-run=server upgrade the chart: helm upgrade operator apigee-operator/ \ --install \ --namespace APIGEE NAMESPACE \ --atomic \ -f OVERRIDES FILE \ 402739748 Apigee OPEN APIproducts are limited to 50 paths.
- N/A Apigee FIXED in Apigee 1-12-0-apigee-2 and hybrid 1.12.0 API Monitoring and Cloud Monitoring show abnormal spikes API Proxy request and response counts (for proxy and targets) show abnormal spikes Here is a sample showing such a spike: ( view larger image ) Due to a bug, the system registers the count incorrectly for a brief period and the count is corrected.
- For example, use of the following basepaths for two proxies deployed in the same environment may result in a 404 error when calling Proxy-2 : Proxy-1: /a/v1/b Proxy-2: /a/ /c In this case, calls to the explicit base path will resolve successfully, but calls to the Proxy-2 may return a 404 , if the wildcard path is evaluated as /a/v1/c .
- N/A Archive deployments OPEN Managing and debugging Apigee archive deployments in the UI is not supported In the Apigee UI, you cannot view, confirm deployment status, or manage your archive deployments, as described Deploying an API proxy , or use the Debug UI as described in Using Debug .

### Manage attributes \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes)
- Source ID: `site-docs-reference-required-4`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows the API call to create the attribute-01 user defined attribute. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{ "display name" : "custom attribute", "description" : "custom attribute details", "definition type" : "USER DEFINED", "scope" : "API", "data type" : "ENUM", "allowed values" : [ { "id" : "value-1", "display name" : "Value 1", "description" : "Value 1 test description", "immutable" : false, }, { "id" : "value-2", "display name" : "Value 2", "description" : "Value 2 test description", "immutable" : false, }, ], "cardinality" : 4, "mandatory" : false }' \ -X POST https://apihub.googleapis.com/v1/projects/test-15/locations/us-central1/attributes?attribute id=attribute-01 Edit a user defined attribute Caution: Avoid adding sensitive data to user defined attributes.
- The following example shows the API call to filter resources based on a user defined attribute value of String data type. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-type: application/json" \ -X GET \ https://apihub.googleapis.com/v1/projects/test-project-1/locations/us-central1/apis?filter=attributes.projects/test-project-1/locations/us-central1/attributes/cdcb1260-ed63-4e5b-935d-4394f178da4f.string values.values:helloworld Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- REST API To view all the user defined attributes of a resource issue a GET request to the following API: https://apihub.googleapis.com/v1/projects/ PROJECT /locations/ LOCATION /attributes For more information about the API, see ListAttributes .
- REST API To filter APIs based on attributes, issue a GET request to the following API: https://apihub.googleapis.com/v1/projects/ PROJECT /locations/ LOCATION /apis You can use system or user-defined attributes in the filter query parameter.

### PCI Configuration Guide for Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide](https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For a customer to be Payment Card Industry (PCI) compliant on Apigee, there are some actions and processes the customer owns under the "Shared Responsibility Model." The following items should be reviewed by customers who are seeking to be PCI compliant.
- Use/Authorizations Access to Debug Session is managed through the Cloud IAM (Identity Access Management) RBAC (Role-Based Access Control) system.
- PCI Requirement Section Requirement 3: Protect stored account data Data masking Requirement 3: Protect stored account data Data storage Requirement 4: Protect cardholder data with strong cryptography during transmission over open, public networks TLS configuration Requirement 4: Protect cardholder data with strong cryptography during transmission over open, public networks Data encryption Requirement 7: Restrict access to system components and cardholder data by business need to know Use/Authorizations Requirement 8: Identify users and authenticate access to system components Complex password requirements or SAML Requirement 10: Log and monitor all access to system components and cardholder data Audit trail Requirement 11: Test security of systems and networks regularly Endpoint scanning To obtain a PCI Data Security Standard Attestation of Compliance (AOC), please visit Google Compliance Report Manager or contact your Apigee sales team.
- Testing of shared resources, such as the management portal UI, is not approved for individual customers (a third party report covering testing of the shared services is available to customers under a non-disclosure agreement and upon request).

