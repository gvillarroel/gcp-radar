# Cloud Run traffic routing integration

Product: Cloud Service Mesh
Feature slug: `cloud-run-traffic-routing-integration`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Service Mesh can route traffic between mesh workloads and Cloud Run services; Cloud Service Mesh can route traffic between mesh workloads and Cloud Run services.

## Lifecycle

- Latest feature date: 2024-12-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/service-mesh/docs/configure-cloud-service-mesh-for-cloud-run](https://docs.cloud.google.com/service-mesh/docs/configure-cloud-service-mesh-for-cloud-run), [https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh](https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh), [https://docs.cloud.google.com/service-mesh/docs/tutorials/canary-deployment](https://docs.cloud.google.com/service-mesh/docs/tutorials/canary-deployment), [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial))
- allow (evidence: [https://docs.cloud.google.com/service-mesh/docs/configure-cloud-service-mesh-for-cloud-run](https://docs.cloud.google.com/service-mesh/docs/configure-cloud-service-mesh-for-cloud-run), [https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh](https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh), [https://docs.cloud.google.com/service-mesh/docs/tutorials/canary-deployment](https://docs.cloud.google.com/service-mesh/docs/tutorials/canary-deployment), [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial))
- auth (evidence: [https://docs.cloud.google.com/service-mesh/docs/configure-cloud-service-mesh-for-cloud-run](https://docs.cloud.google.com/service-mesh/docs/configure-cloud-service-mesh-for-cloud-run), [https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh](https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh), [https://docs.cloud.google.com/service-mesh/docs/tutorials/canary-deployment](https://docs.cloud.google.com/service-mesh/docs/tutorials/canary-deployment), [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial))
- authorization (evidence: [https://docs.cloud.google.com/service-mesh/docs/configure-cloud-service-mesh-for-cloud-run](https://docs.cloud.google.com/service-mesh/docs/configure-cloud-service-mesh-for-cloud-run), [https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh](https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh), [https://docs.cloud.google.com/service-mesh/docs/tutorials/canary-deployment](https://docs.cloud.google.com/service-mesh/docs/tutorials/canary-deployment), [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial))
- iam (evidence: [https://docs.cloud.google.com/service-mesh/docs/configure-cloud-service-mesh-for-cloud-run](https://docs.cloud.google.com/service-mesh/docs/configure-cloud-service-mesh-for-cloud-run), [https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh](https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh), [https://docs.cloud.google.com/service-mesh/docs/tutorials/canary-deployment](https://docs.cloud.google.com/service-mesh/docs/tutorials/canary-deployment), [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial))
- policy (evidence: [https://docs.cloud.google.com/service-mesh/docs/configure-cloud-service-mesh-for-cloud-run](https://docs.cloud.google.com/service-mesh/docs/configure-cloud-service-mesh-for-cloud-run), [https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh](https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh), [https://docs.cloud.google.com/service-mesh/docs/tutorials/canary-deployment](https://docs.cloud.google.com/service-mesh/docs/tutorials/canary-deployment), [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial))
- private (evidence: [https://docs.cloud.google.com/service-mesh/docs/configure-cloud-service-mesh-for-cloud-run](https://docs.cloud.google.com/service-mesh/docs/configure-cloud-service-mesh-for-cloud-run), [https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh](https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh), [https://docs.cloud.google.com/service-mesh/docs/tutorials/canary-deployment](https://docs.cloud.google.com/service-mesh/docs/tutorials/canary-deployment), [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial))
- role (evidence: [https://docs.cloud.google.com/service-mesh/docs/configure-cloud-service-mesh-for-cloud-run](https://docs.cloud.google.com/service-mesh/docs/configure-cloud-service-mesh-for-cloud-run), [https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh](https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh), [https://docs.cloud.google.com/service-mesh/docs/tutorials/canary-deployment](https://docs.cloud.google.com/service-mesh/docs/tutorials/canary-deployment), [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial))
- security (evidence: [https://docs.cloud.google.com/service-mesh/docs/configure-cloud-service-mesh-for-cloud-run](https://docs.cloud.google.com/service-mesh/docs/configure-cloud-service-mesh-for-cloud-run), [https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh](https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh), [https://docs.cloud.google.com/service-mesh/docs/tutorials/canary-deployment](https://docs.cloud.google.com/service-mesh/docs/tutorials/canary-deployment), [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial))

## Official Evidence

- [https://docs.cloud.google.com/service-mesh/docs/configure-cloud-service-mesh-for-cloud-run](https://docs.cloud.google.com/service-mesh/docs/configure-cloud-service-mesh-for-cloud-run)
- [https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh](https://docs.cloud.google.com/service-mesh/docs/gateway/proxyless-grpc-mesh)
- [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial)
- [https://docs.cloud.google.com/service-mesh/docs/tutorials/canary-deployment](https://docs.cloud.google.com/service-mesh/docs/tutorials/canary-deployment)
