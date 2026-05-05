# Node auto-provisioning default machine type

Product: Google Kubernetes Engine
Feature slug: `node-auto-provisioning-default-machine-type`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Node auto-provisioning uses E2 as the default machine type.

## Lifecycle

- Latest feature date: 2021-02-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- confidential (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest))
- encrypt (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest))
- key (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest)
