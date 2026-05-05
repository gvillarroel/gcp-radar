# Optimize-utilization autoscaling profile

Product: Google Kubernetes Engine
Feature slug: `optimize-utilization-autoscaling-profile`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

For clusters using the optimize-utilization autoscaling profile, GKE sets the Pod scheduler name to gke.io/optimize-utilization-scheduler in GKE 1.18 and later.

## Lifecycle

- Latest feature date: 2020-10-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- key (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm))
- permission (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm))
- token (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm)
