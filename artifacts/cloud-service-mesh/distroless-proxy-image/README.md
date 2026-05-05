# Distroless proxy image

Product: Cloud Service Mesh
Feature slug: `distroless-proxy-image`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Service Mesh supports deploying a proxy built on a distroless base image; Cloud Service Mesh supports deploying a proxy built on a distroless base image.

## Lifecycle

- Latest feature date: 2021-12-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed), [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane), [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster), [https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh](https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh))
- authorization (evidence: [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed), [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane), [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster), [https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh](https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh))
- policy (evidence: [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed), [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane), [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster), [https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh](https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh))
- private (evidence: [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed), [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane), [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster), [https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh](https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh))
- role (evidence: [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed), [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane), [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster), [https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh](https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh))
- secret (evidence: [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed), [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane), [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster), [https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh](https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh))

## Official Evidence

- [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster)
- [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed)
- [https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh](https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh)
- [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
