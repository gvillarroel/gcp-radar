---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.733Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee SemanticCachePopulate policy"
feature_slug: "apigee-semanticcachepopulate-policy"
latest_feature_date: "2025-05-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart"
keywords:
  - "semanticcachepopulate"
  - "storing"
  - "reusing"
  - "available"
  - "public"
  - "preview"
  - "policy"
---

# Apigee SemanticCachePopulate policy

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

The SemanticCachePopulate policy is available in public preview for storing and reusing LLM responses based on semantic similarity.

## Extended Definition

The SemanticCachePopulate policy is available in public preview for storing and reusing LLM responses based on semantic similarity.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide](https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide)
- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)

## Supporting Pages

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference-2`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- SemanticCachePopulate policy: Set the <TTLInSeconds> element to specify the number of seconds until the cache expires, in seconds.
- For more information on using TTL in the SemanticCachePopulate policy, see <TTLInSeconds> .
- For example: gcloud iam service-accounts create ai-client \ --description = " semantic cache client " \ --display-name = " ai-client " Grant the service account the AI Platform User role using the following command: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: SERVICE ACCOUNT NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/aiplatform.user" Replace SERVICE ACCOUNT NAME with the name of the service account created in the previous step.
- Assign the IAM Service Account User role to the service account using the following command: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: SERVICE ACCOUNT NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/iam.serviceAccountUser" Replace SERVICE ACCOUNT NAME with the name of the service account created in the previous step.

### PCI Configuration Guide for Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide](https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide)
- Source ID: `site-docs-reference`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Use of these services is available to customers for storing non-PCI data or other unrestricted data subject to the customer's security and legal requirements.
- PCI Requirement Section Requirement 3: Protect stored account data Data masking Requirement 3: Protect stored account data Data storage Requirement 4: Protect cardholder data with strong cryptography during transmission over open, public networks TLS configuration Requirement 4: Protect cardholder data with strong cryptography during transmission over open, public networks Data encryption Requirement 7: Restrict access to system components and cardholder data by business need to know Use/Authorizations Requirement 8: Identify users and authenticate access to system components Complex password requirements or SAML Requirement 10: Log and monitor all access to system components and cardholder data Audit trail Requirement 11: Test security of systems and networks regularly Endpoint scanning To obtain a PCI Data Security Standard Attestation of Compliance (AOC), please visit Google Compliance Report Manager or contact your Apigee sales team.
- Testing of shared resources, such as the management portal UI, is not approved for individual customers (a third party report covering testing of the shared services is available to customers under a non-disclosure agreement and upon request).
- PCI Requirement 4: (Protect cardholder data with strong cryptography during transmission over open, public networks) recommends to encrypt cardholder data across open, public networks.

### Get started with Apigee and MCP \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- See Version Negotiation in the MCP specification for more information. (Optional) TOKEN : OAuth 2.0 access token A successful response looks similar to the following: { "id":1, "jsonrpc":"2.0", "result": { "capabilities": { "tools": { "listChanged":false } }, "protocolVersion":"2025-11-25", "serverInfo": { "name":"cymbal.products.com", "version":"1.0.0" } } } List available MCP tools In this step, you send a request to the tools/list method to confirm the list of tools available in your MCP endpoint.
- The target mcp.apigee.internal is also supported for backward compatibility. (Optional) Add a security policy to the MCP Discovery Proxy Before deploying your MCP Discovery Proxy, you can add security policies to enforce security requirements.
- The following sections describe the steps to create and deploy an MCP Discovery Proxy, create an API product, and list available tools: Create an OpenAPI 3.0.x specification describing your API operations.
- To configure token verification, place an OAuthV2 policy with the VerifyAccessToken operation at the very beginning of the API proxy flow (the beginning of the ProxyEndpoint Preflow ).

