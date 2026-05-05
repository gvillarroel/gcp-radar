# API Gateway

Schema version: `step-08-product-feature-cards-v1`
Generated at: `2026-05-05T20:04:47.374Z`
Product status: `PASS`

## Summary

- Feature cards: 19
- Step 07 failed features: 0
- Step 07 warned features: 1
- Corpus health: healthy
- IAM mapping: 0 explicit, 0 derived, 19 unknown

## Service Card

- Service card ID: `api-gateway:service`
- Latest feature date: 2026-01-12
- Official source links: 30
- Security capabilities: 16

## Features

| Feature | Coverage | Gate | IAM | Sources |
| --- | --- | --- | --- | --- |
| Apigee API Hub integration for API Gateway metadata publishing | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/api-gateway/docs/api-hub-connect)<br>[source](https://docs.cloud.google.com/api-gateway/docs/api-hub-overview)<br>[source](https://docs.cloud.google.com/api-gateway/docs/reference/rest/Shared.Types/OperationMetadata) |
| OpenAPI 3.0.x specification support | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/api-gateway/docs/creating-api-config)<br>[source](https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.OpenApiDocument)<br>[source](https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.OpenApiDocument.Builder) |
| TLS 1.0 and TLS 1.1 deprecation in API Gateway | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/api-gateway/docs/about-api-gateway)<br>[source](https://docs.cloud.google.com/api-gateway/docs/creating-api-config)<br>[source](https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud) |
| Regional API Gateway quota increase | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/api-gateway/docs/about-api-gateway)<br>[source](https://docs.cloud.google.com/api-gateway/docs/creating-api-config)<br>[source](https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud) |
| Data residency support for API Gateway data at rest | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/api-gateway/docs/about-api-gateway)<br>[source](https://docs.cloud.google.com/api-gateway/docs/architecture-overview)<br>[source](https://docs.cloud.google.com/api-gateway/docs/reference/rest) |
| CMEK-compliant data-at-rest encryption for API Gateway | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/api-gateway/docs/about-api-gateway)<br>[source](https://docs.cloud.google.com/api-gateway/docs/api-hub-connect)<br>[source](https://docs.cloud.google.com/api-gateway/docs/cmek) |
| Workforce Identity Federation support for API Gateway | MEDIUM | WARN | unknown | [source](https://docs.cloud.google.com/api-gateway/docs/authenticating-users-auth0)<br>[source](https://docs.cloud.google.com/api-gateway/docs/authenticating-users-googleid)<br>[source](https://docs.cloud.google.com/api-gateway/docs/quotas) |
| API Gateway availability in us-east1 region | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/api-gateway/docs/about-api-gateway)<br>[source](https://docs.cloud.google.com/api-gateway/docs/reference/rest/Shared.Types/ListLocationsResponse)<br>[source](https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud) |
| Cloud Run gRPC backend support in API Gateway | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/api-gateway/docs/about-api-gateway)<br>[source](https://docs.cloud.google.com/api-gateway/docs/creating-api-config)<br>[source](https://docs.cloud.google.com/api-gateway/docs/deployment-model) |
| gcloud CLI support for API Gateway | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/api-gateway/docs/gateway-serverless-neg)<br>[source](https://docs.cloud.google.com/api-gateway/docs/quickstart)<br>[source](https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud) |
| API Gateway API public availability | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/api-gateway/docs/reference/rest/Shared.Types/Binding)<br>[source](https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinition.Builder)<br>[source](https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinitionOrBuilder) |
| API Gateway default gateway hostname pattern | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/api-gateway/docs/creating-api-config)<br>[source](https://docs.cloud.google.com/api-gateway/docs/quickstart)<br>[source](https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud) |
| API Gateway gcloud beta command group | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/api-gateway/docs/gateway-serverless-neg)<br>[source](https://docs.cloud.google.com/api-gateway/docs/quickstart)<br>[source](https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud) |
| Removal of deprecated fields in API Gateway Alpha API | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/api-gateway/docs/api-hub-view-apis)<br>[source](https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.Api.Builder)<br>[source](https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/overview) |
| API Gateway REST API reference update | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/api-gateway/docs/api-hub-view-apis)<br>[source](https://docs.cloud.google.com/api-gateway/docs/reference/rest)<br>[source](https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/overview) |
| OpenAPI host property optional for API Gateway API configs | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/api-gateway/docs/creating-api-config)<br>[source](https://docs.cloud.google.com/api-gateway/docs/deploying-api)<br>[source](https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud) |
| API config metadata update in API Gateway gcloud CLI | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/api-gateway/docs/authenticate-service-account)<br>[source](https://docs.cloud.google.com/api-gateway/docs/creating-api-config)<br>[source](https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfigOrBuilder) |
| API Gateway gcloud CLI API lifecycle management | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/api-gateway/docs/creating-api-config)<br>[source](https://docs.cloud.google.com/api-gateway/docs/quickstart)<br>[source](https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud) |
| API Gateway web console development UI | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/api-gateway/docs/about-dev-env)<br>[source](https://docs.cloud.google.com/api-gateway/docs/configure-dev-env)<br>[source](https://docs.cloud.google.com/api-gateway/docs/secure-traffic-console) |
