# API Gateway API public availability

Product: API Gateway
Feature slug: `api-gateway-api-public-availability`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

API Gateway API became publicly visible so it can be viewed and enabled without allowlisting.

## Lifecycle

- Latest feature date: 2020-09-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- private

## Official Evidence

- [https://docs.cloud.google.com/api-gateway/docs/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/api-gateway/docs/reference/rest/Shared.Types/Binding)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinition.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinition.Builder)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinitionOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinitionOrBuilder)
