# Job suspension

Product: Google Kubernetes Engine
Feature slug: `job-suspension`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Jobs can be created or placed into a suspended state for higher-level batch scheduling control.

## Lifecycle

- Latest feature date: 2021-10-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax))
- allow (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax))
- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax))
- credential (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax))
- iam (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax))
- identity (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax))
- logging (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax))
- permission (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax)
