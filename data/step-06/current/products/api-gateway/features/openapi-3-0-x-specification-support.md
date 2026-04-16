---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:11:52.459Z"
product_name: "API Gateway"
product_slug: "api-gateway"
feature_name: "OpenAPI 3.0.x specification support"
feature_slug: "openapi-3-0-x-specification-support"
latest_feature_date: "2025-11-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/api-gateway/docs/creating-api-config"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.OpenApiDocument"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.OpenApiDocument.Builder"
keywords:
  - "specification"
  - "directly"
  - "specifications"
  - "openapi"
  - "version"
  - "supports"
---

# OpenAPI 3.0.x specification support

Product: API Gateway
Coverage: MEDIUM

## Step 02 Summary

API Gateway now supports OpenAPI version 3.0.x specifications directly, including all patch versions, without requiring conversion to OpenAPI 2.0.

## Extended Definition

API Gateway now supports OpenAPI version 3.0.x specifications directly, including all patch versions, without requiring conversion to OpenAPI 2.0.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/api-gateway/docs/creating-api-config](https://docs.cloud.google.com/api-gateway/docs/creating-api-config)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.OpenApiDocument](https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.OpenApiDocument)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.OpenApiDocument.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.OpenApiDocument.Builder)

## Supporting Pages

### Create an API config | API Gateway | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/api-gateway/docs/creating-api-config](https://docs.cloud.google.com/api-gateway/docs/creating-api-config)
- Source ID: `feature-recovery-direct-http`
- Final score: 165
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If the managedService in your API definition is set to an ESPv2 Beta service, make sure that the host field (OpenAPI 2.0) or server.url field (OpenAPI 3.x) is set to an x-google-endpoint extension in your API config.
- Create an API config | API Gateway | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in API Gateway Start free Overview Guides Reference Support Resources Technology areas More Overview Guides Reference Support Resources Cross-product tools More Console API Gateway Quickstarts All quickstarts Quickstart: Use the gcloud command-line tool Quickstart: Use the Cloud console Tutorials All tutorials Get started with API Gateway and App Engine Get started with API Gateway and Cloud Run Get started with API Gateway and Cloud Run for gRPC Get started with API Gateway and Cloud Functions Get started with load balancing for API Gateway Get started centralizing APIs with API hub How-to guides All how-to guides Create and deploy an API About the development environment Configure the development environment Create an API Create an API config Configure a gRPC service Deploy an API to a gateway Pass data to and from the backend service Troubleshooting & monitoring Troubleshooting Monitor your API Trace your API Access audit logs Access platform logs Authentication & API Keys Choose an authentication method Authenticate users Use JWT to authenticate users Use Firebase to authenticate users Use Auth0 to authenticate users Use Okta to authenticate users Use Google ID tokens to authenticate users Authentication between services Secure backend services Use API Keys Manage API access Limit API requests About quotas Use custom domains Create multi-region deployments Deploy Cloud Endpoints APIs Centralize APIs using API hub Overview Connect API Gateway with API hub View API Gateway APIs in API hub Remove an API Gateway connection from API hub Concepts All concepts About API Gateway API Gateway architecture API Gateway deployment model OpenAPI OpenAPI overview Modify a gateway to use OpenAPI 3.x OpenAPI 2.0 extensions OpenAPI 3.x extensions OpenAPI 2.0 feature limitations OpenAPI 3.x feature limitations gRPC overview Load balancing for API Gateway Path templating CMEK compliance in API Gateway Glossary AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Application development API Gateway Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Note: API Gateway supports creation of API definitions as OpenAPI specs for all available backend services.
- Validate the project ID returned from the following command to make sure that the service isn't created in the wrong project. gcloud config list project If you need to change the default project, run the following command and replace PROJECT_ID with the Google Cloud project ID in which you want to create the service: gcloud config set project PROJECT_ID View help for the api-configs create command: gcloud api-gateway api-configs create --help Run the following command to create the API config: gcloud api-gateway api-configs create CONFIG_ID \ --api= API_ID --openapi-spec= API_DEFINITION \ --project= PROJECT_ID --backend-auth-service-account= SERVICE_ACCOUNT_EMAIL where: CONFIG_ID specifies the ID of the new API config.

### "Class ApiConfig.OpenApiDocument (2.88.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.OpenApiDocument](https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.OpenApiDocument)
- Source ID: `site-java-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- OpenApiDocument > getParserForType () Returns Type Description Parser < OpenApiDocument > Overrides GeneratedMessage.getParserForType() getSerializedSize() public int getSerializedSize () Returns Type Description int Overrides GeneratedMessage.getSerializedSize() hasDocument() public boolean hasDocument () The OpenAPI Specification document file. .google.cloud.apigateway.v1.ApiConfig.File document = 1; Returns Type Description boolean Whether the document field is set. hashCode() public int hashCode () Returns Type Description int Overrides AbstractMessage.hashCode() internalGetFieldAccessorTable() protected GeneratedMessage .
- FileOrBuilder getDocumentOrBuilder () The OpenAPI Specification document file. .google.cloud.apigateway.v1.ApiConfig.File document = 1; Returns Type Description ApiConfig.FileOrBuilder getParserForType() public Parser<ApiConfig .
- File getDocument () The OpenAPI Specification document file. .google.cloud.apigateway.v1.ApiConfig.File document = 1; Returns Type Description ApiConfig.File The document. getDocumentOrBuilder() public ApiConfig .
- OpenApiDocumentOrBuilder An OpenAPI Specification Document describing an API.

### "Class ApiConfig.OpenApiDocument.Builder (2.88.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.OpenApiDocument.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.OpenApiDocument.Builder)
- Source ID: `site-java-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- FileOrBuilder getDocumentOrBuilder () The OpenAPI Specification document file. .google.cloud.apigateway.v1.ApiConfig.File document = 1; Returns Type Description ApiConfig.FileOrBuilder hasDocument() public boolean hasDocument () The OpenAPI Specification document file. .google.cloud.apigateway.v1.ApiConfig.File document = 1; Returns Type Description boolean Whether the document field is set. internalGetFieldAccessorTable() protected GeneratedMessage .
- Builder builderForValue ) The OpenAPI Specification document file. .google.cloud.apigateway.v1.ApiConfig.File document = 1; Parameter Name Description builderForValue ApiConfig.File.Builder Returns Type Description ApiConfig.OpenApiDocument.Builder Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- File value ) The OpenAPI Specification document file. .google.cloud.apigateway.v1.ApiConfig.File document = 1; Parameter Name Description value ApiConfig.File Returns Type Description ApiConfig.OpenApiDocument.Builder setDocument(ApiConfig.File.Builder builderForValue) public ApiConfig .
- File value ) The OpenAPI Specification document file. .google.cloud.apigateway.v1.ApiConfig.File document = 1; Parameter Name Description value ApiConfig.File Returns Type Description ApiConfig.OpenApiDocument.Builder mergeFrom(ApiConfig.OpenApiDocument other) public ApiConfig .

