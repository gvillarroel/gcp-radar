# Distroless proxy image

Product: Managed Anthos Service Mesh
Feature slug: `distroless-proxy-image`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Managed Anthos Service Mesh supports deploying a proxy built on a distroless base image; Managed Anthos Service Mesh supports deploying a proxy built on a distroless base image.

## Lifecycle

- Latest feature date: 2022-01-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed), [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed), [https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh](https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh), [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster))
- allow (evidence: [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed), [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed), [https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh](https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh), [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster))
- auth (evidence: [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed), [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed), [https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh](https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh), [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster))
- authorization (evidence: [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed), [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed), [https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh](https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh), [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster))
- logging (evidence: [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed), [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed), [https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh](https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh), [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster))
- policy (evidence: [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed), [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed), [https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh](https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh), [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster))
- private (evidence: [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed), [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed), [https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh](https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh), [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster))
- role (evidence: [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed), [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed), [https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh](https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh), [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster))
- security (evidence: [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed), [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed), [https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh](https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh), [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster))

## Official Evidence

- [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster)
- [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed)
- [https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh](https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh)
- [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed)
