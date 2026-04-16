---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:45:01.542Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "API operation management without valid specifications"
feature_slug: "api-operation-management-without-valid-specifications"
latest_feature_date: "2025-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/release/known-issues"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools"
keywords:
  - "without"
  - "entity"
  - "valid"
  - "operations"
  - "specifications"
  - "operation"
  - "management"
---

# API operation management without valid specifications

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

The Operations entity now supports adding, editing, and deleting operations for an API version even without a valid or parseable specification file.

## Extended Definition

The Operations entity now supports adding, editing, and deleting operations for an API version even without a valid or parseable specification file.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools)

## Supporting Pages

### Apigee known issues \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
- Source ID: `site-docs-reference`
- Final score: 151
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Workaround: Manually create an egress rule, such as the following: -egressTo: operations: -serviceName: "iamcredentials.googleapis.com" methodSelectors: -method: resources: -projects/608305225983 egressFrom: identityType: ANY IDENTITY 247540503 hybrid 1.7.0 and later hybrid 1.8.0 and later FIXED A race condition with encryption key lookup can cause KVM lookup failures.
- 432315283 Apigee OPEN When updating a keystore or truststore without creating a new keystore or truststore, runtime updates may fail and cause the following intermittent error: {"fault":{"faultstring":"SSL Handshake failed sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target","detail":{"errorcode":"messaging.adaptors.http.flow.SslHandshakeFailed"}}} The error is intermittent because the keystore or truststore update may fail on one runtime pod but succeed on other pods.
- 392135466 hybrid 1.14.0 OPEN Proxy chaining with mTLS is not supported when using Enhanced per-environment proxy limits 383334511 Apigee OPEN KVM entry created with unexpected name When a KeyValueMapOperations policy is used with apiproxy scope, and the policy's <Put> operation is called in a shared flow via a flow hook, the KVM entry is created under the shared flow name.
- 289583112 Apigee OPEN OASValidation policy does not work with global security requirements in OpenAPI specifications If the OASValidation policy specifies an <OASResource> with security requirements set at a global level, the security requirements are not enforced.

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference-required-3`
- Final score: 129
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Follow the steps in Operations to add an API operation set to the API product, according to the following specifications: Source: In the Google Cloud console, go to the Apigee > Distribution > API Products page.
- Go to the VPC Networks page in the Google Cloud console: Go to VPC Networks Required roles To get the permissions that you need to install the Apigee Extension Processor, ask your administrator to grant you the following IAM roles: Create and manage service accounts: Service Account Admin ( roles/iam.serviceAccountAdmin ) on organization Create and manage service extensions: Service Extensions Admin ( roles/networkservices.serviceExtensionsAdmin ) on organization Create and manage network endpoint groups (NEGs): Compute Instance Admin ( roles/compute.instanceAdmin ) on organization Create and manage networking resources: Compute Network Admin ( roles/compute.networkAdmin ) on organization Create and manage backend services: Compute Load Balancer Admin ( roles/compute.loadBalancerAdmin ) on organization Create and manage Apigee resources: Apigee Org Admin ( roles/apigee.admin ) on organization Create and manage traffic extensions: Apigee APIM Service Extension Admin ( roles/apigee.apimServiceExtensionAdmin ) on organization View traffic extensions: Apigee APIM Service Extension Viewer ( roles/apigee.apimServiceExtensionViewer ) on organization Manage long-running operations: Apigee APIM Service Extension Service Agent ( roles/apigee.apimServiceExtensionServiceAgent ) on the service agent in the Google Cloud project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Add the AssignMessage policy for Google authentication If you want to use your Extension Processor to provide API management for a Google-authenticated service, you can inject a Google access token or Google ID token into requests sent to the backend service using the AssignMessage policy .
- Send a request to the load balancer using the API key To test the API key validation, send a request to the load balancer using the API key: curl "https:// LB DOMAIN NAME /get" Where LB DOMAIN NAME is the domain name you used for the load balancer and SSL certificate.

### Manage MCP tools \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools)
- Source ID: `site-docs-reference-required-6`
- Final score: 106
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The parser doesn't strictly define their content." } }, "required" : [ "tools" ], "additionalProperties" : false } Example The following example shows a valid MCP specification file using the sample JSON schema. { "tools" : [ { "name" : "get-weather" , "title" : "Get Weather" , "description" : "Fetches the current weather for a given location." , "inputSchema" : { "type" : "object" , "properties" : { "location" : { "type" : "string" , "description" : "The city and state, e.g., San Francisco, CA" } }, "required" : [ "location" ] }, "outputSchema" : { "type" : "object" , "properties" : { "temperature" : { "type" : "number" }, "unit" : { "type" : "string" }, "description" : { "type" : "string" } } }, "annotations" : { "title" : "Weather Tool" , "readOnlyHint" : true , "destructiveHint" : false , "idempotentHint" : true , "openWorldHint" : true , "additionalHints" : { "apiProvider" : "Some Weather API" } } }, { "name" : "send-email" , "title" : "Send Email" , "description" : "Sends an email." }, { "name" : "tool with spaces and Upper" } ], "resources" : [], "prompts" : [], "errors" : [] } What's next See the API reference documentation for the Operations API.
- Example curl --location 'https://apihub.googleapis.com/v1/projects/apihub-test-api/locations/us-central1/apis/apihub-test-api/versions/1/operations?api operation id=get-weather' \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ --header 'Content-Type: application/json; charset=utf-8' \ --data '{ "details": { "description": "Fetches the current weather for a given location.", "documentation": { "externalUri": "https://www.example.com/weather" }, "deprecated": false, "mcpTool": { "name": "get-weather", "title": "Get Weather", "description": "Fetches the current weather for a given location.", "annotations": { "title": "Weather Tool", "readOnlyHint": true, "destructiveHint": false, "idempotentHint": true, "openWorldHint": true, "additionalHints": { "apiProvider": "Some Weather API" } }, "inputSchema": { "jsonSchema": { "type": "object", "properties": { "location": { "type": "string", "description": "The city and state, e.g., San Francisco, CA" } }, "required": [ "location" ] } }, "outputSchema": { "jsonSchema": { "type": "object", "properties": { "temperature": { "type": "number" }, "unit": { "type": "string" }, "description": { "type": "string" } } } } } } }' Extract MCP tools from Apigee MCP proxies Private Preview — MCP in Apigee This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Add MCP tools using the API REST To add a MCP tool to an API version, use the Create operations API. curl --location 'https://apihub.googleapis.com/v1/projects/ PROJECT /locations/ LOCATION /apis/ API ID /versions/ VERSION ID /operations?api operation id= TOOL ID ' \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ --header 'Content-Type: application/json; charset=utf-8' \ --data '{ "details": { "description": " DESCRIPTION ", "documentation": { "externalUri": " EXTERNAL URI " }, "deprecated": false, "mcpTool": { "name": " TOOL NAME ", "title": " TOOL TITLE ", "description": " TOOL DESCRIPTION ", "annotations": { "title": " TOOL ANNOTATION TITLE ", "readOnlyHint": false, "destructiveHint": false, "idempotentHint": true, "openWorldHint": false, "additionalHints": { "custom hint": " TOOL ANNOTATION CUSTOM HINT " } }, "inputSchema": { "jsonSchema": { "type": "object", "properties": { "input param": { "type": "string" } } } }, "outputSchema": { "jsonSchema": { "type": "object", "properties": { "output result": { "type": "string" } } } } } } }' Replace the following: PROJECT : your Google Cloud project ID.
- Learn more about API operations and MCP tools .

