# Regional external Application Load Balancer GatewayClasses

Product: Google Kubernetes Engine
Feature slug: `regional-external-application-load-balancer-gatewayclasses`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GKE Gateway controller 2023-R2 adds GatewayClasses for the regional external Application Load Balancer.

## Lifecycle

- Latest feature date: 2023-07-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/simulate-zone-failure](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/simulate-zone-failure))
- armor (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/simulate-zone-failure](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/simulate-zone-failure))
- iam (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/simulate-zone-failure](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/simulate-zone-failure))
- permission (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/simulate-zone-failure](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/simulate-zone-failure))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/simulate-zone-failure](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/simulate-zone-failure))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/simulate-zone-failure](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/simulate-zone-failure))
- secret (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/simulate-zone-failure](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/simulate-zone-failure))
- token (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/simulate-zone-failure](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/simulate-zone-failure))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/simulate-zone-failure](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/simulate-zone-failure)
