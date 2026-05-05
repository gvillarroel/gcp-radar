# GKE logging agent

Product: Google Kubernetes Engine
Feature slug: `gke-logging-agent`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

In GKE 1.34.1-gke.2037001 and later, the logging agent processes logs faster per node and uses fewer node resources.

## Lifecycle

- Latest feature date: 2025-11-07
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vertex](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vertex), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vllm))
- audit (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vertex](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vertex), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vllm))
- constraint (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vertex](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vertex), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vllm))
- firewall (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vertex](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vertex), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vllm))
- iam (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vertex](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vertex), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vllm))
- logging (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vertex](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vertex), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vllm))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vertex](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vertex), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vllm))
- private (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vertex](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vertex), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vllm))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vertex](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vertex), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vllm))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vertex](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vertex), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vllm))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vertex](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vertex)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vllm)
