# Body-based routing for GKE Inference Gateway

Product: Google Kubernetes Engine
Feature slug: `body-based-routing-for-gke-inference-gateway`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GKE Inference Gateway can route requests using the model field in the HTTP request body.

## Lifecycle

- Latest feature date: 2025-12-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- armor (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart))
- credential (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart))
- iam (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart))
- permission (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart))
- token (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails)
