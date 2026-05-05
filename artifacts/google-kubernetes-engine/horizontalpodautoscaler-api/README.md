# HorizontalPodAutoscaler API

Product: Google Kubernetes Engine
Feature slug: `horizontalpodautoscaler-api`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The autoscaling/v2beta2 HorizontalPodAutoscaler API is removed in GKE 1.26 in favor of autoscaling/v2; The autoscaling/v2beta2 HorizontalPodAutoscaler API is removed in GKE 1.26 in favor of autoscaling/v2; deprecated on 2023-01-05.

## Lifecycle

- Latest feature date: 2023-01-05
- Deprecation date: 2023-01-05
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler))
- allow (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler))
- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler))
- authorization (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler))
- certificate (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler))
- iam (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler))
- identity (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler))
- key (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler))
- permission (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler))
- secret (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler))
- token (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics)
