---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:04:48.091Z"
product_name: "API Gateway"
product_slug: "api-gateway"
feature_name: "OpenAPI 3.0.x specification support"
feature_slug: "openapi-3-0-x-specification-support"
latest_feature_date: "2025-11-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.OpenApiDocument.Builder"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.OpenApiDocument"
keywords:
  - "no conversion to OpenAPI 2.0"
  - "API configuration import"
  - "OpenAPI patch versions"
  - "OpenAPI specification"
  - "OAS 3.0"
  - "OpenAPI 3.0 support"
  - "OpenAPI 3 support"
  - "OpenAPI 3.0.x"
---

# OpenAPI 3.0.x specification support

Product: API Gateway
Coverage: LOW

## Step 02 Summary

API Gateway now supports OpenAPI version 3.0.x specifications directly, including all patch versions, without requiring conversion to OpenAPI 2.0.

## Extended Definition

Google Cloud API Gateway’s Java client defines API configuration via `ApiConfig`, which includes an `OpenApiDocument` field backed by an `ApiConfig.File` object containing the OpenAPI specification document for the API. The available documentation confirms API Gateway clients can submit and read an OpenAPI specification as part of API configuration creation/update, but it does not state which OpenAPI versions are accepted (for example, 3.0.x patch versions) or whether conversion to OpenAPI 2.0 is avoided.

## Evidence Summary

The cited API Gateway Java client library reference pages verify the existence of OpenAPI specification document fields in `ApiConfig`, but they provide no explicit evidence about OpenAPI 3.0.x patch support or no-2.0-conversion behavior.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.OpenApiDocument.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.OpenApiDocument.Builder)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig](https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.OpenApiDocument](https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.OpenApiDocument)

## Supporting Pages

### "Class ApiConfig.OpenApiDocument.Builder (2.88.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.OpenApiDocument.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.OpenApiDocument.Builder)
- Source ID: `site-java-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- FileOrBuilder getDocumentOrBuilder () The OpenAPI Specification document file. .google.cloud.apigateway.v1.ApiConfig.File document = 1; Returns Type Description ApiConfig.FileOrBuilder hasDocument() public boolean hasDocument () The OpenAPI Specification document file. .google.cloud.apigateway.v1.ApiConfig.File document = 1; Returns Type Description boolean Whether the document field is set. internalGetFieldAccessorTable() protected GeneratedMessage .
- Builder builderForValue ) The OpenAPI Specification document file. .google.cloud.apigateway.v1.ApiConfig.File document = 1; Parameter Name Description builderForValue ApiConfig.File.Builder Returns Type Description ApiConfig.OpenApiDocument.Builder Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- File value ) The OpenAPI Specification document file. .google.cloud.apigateway.v1.ApiConfig.File document = 1; Parameter Name Description value ApiConfig.File Returns Type Description ApiConfig.OpenApiDocument.Builder setDocument(ApiConfig.File.Builder builderForValue) public ApiConfig .
- File value ) The OpenAPI Specification document file. .google.cloud.apigateway.v1.ApiConfig.File document = 1; Parameter Name Description value ApiConfig.File Returns Type Description ApiConfig.OpenApiDocument.Builder mergeFrom(ApiConfig.OpenApiDocument other) public ApiConfig .

### "Class ApiConfig (2.88.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig](https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig)
- Source ID: `site-java-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- OpenAPI specification documents.
- OpenAPI specification documents.
- OpenAPI specification documents.
- OpenAPI specification documents.

### "Class ApiConfig.OpenApiDocument (2.88.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.OpenApiDocument](https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.OpenApiDocument)
- Source ID: `site-java-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- OpenApiDocument > getParserForType () Returns Type Description Parser < OpenApiDocument > Overrides GeneratedMessage.getParserForType() getSerializedSize() public int getSerializedSize () Returns Type Description int Overrides GeneratedMessage.getSerializedSize() hasDocument() public boolean hasDocument () The OpenAPI Specification document file. .google.cloud.apigateway.v1.ApiConfig.File document = 1; Returns Type Description boolean Whether the document field is set. hashCode() public int hashCode () Returns Type Description int Overrides AbstractMessage.hashCode() internalGetFieldAccessorTable() protected GeneratedMessage .
- FileOrBuilder getDocumentOrBuilder () The OpenAPI Specification document file. .google.cloud.apigateway.v1.ApiConfig.File document = 1; Returns Type Description ApiConfig.FileOrBuilder getParserForType() public Parser<ApiConfig .
- File getDocument () The OpenAPI Specification document file. .google.cloud.apigateway.v1.ApiConfig.File document = 1; Returns Type Description ApiConfig.File The document. getDocumentOrBuilder() public ApiConfig .
- OpenApiDocumentOrBuilder An OpenAPI Specification Document describing an API.

