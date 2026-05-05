# Image streaming in GKE

Product: Google Kubernetes Engine
Feature slug: `image-streaming-in-gke`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Image streaming reduces container image pull time and improves application startup and autoscaling performance.

## Lifecycle

- Latest feature date: 2021-11-04
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass), [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot))
- allow (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass), [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot))
- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass), [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot))
- confidential (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass), [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot))
- iam (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass), [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot))
- key (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass), [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot))
- kms (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass), [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot))
- logging (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass), [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot))
- permission (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass), [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass), [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot))
- private (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass), [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass), [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot))
- secret (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass), [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass), [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot)
