# PodDisruptionBudget

Product: Google Kubernetes Engine
Feature slug: `poddisruptionbudget`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

PodDisruptionBudget is a Kubernetes API for limiting voluntary disruptions to pods; PodDisruptionBudget is a Kubernetes API for limiting voluntary disruptions to pods; deprecated on 2022-09-14.

## Lifecycle

- Latest feature date: 2021-05-28
- Deprecation date: 2022-09-14
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/upgrading-stateful-workload](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/upgrading-stateful-workload), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies))
- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/upgrading-stateful-workload](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/upgrading-stateful-workload), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies))
- constraint (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/upgrading-stateful-workload](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/upgrading-stateful-workload), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies))
- key (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/upgrading-stateful-workload](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/upgrading-stateful-workload), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies))
- permission (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/upgrading-stateful-workload](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/upgrading-stateful-workload), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/upgrading-stateful-workload](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/upgrading-stateful-workload), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies))
- secret (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/upgrading-stateful-workload](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/upgrading-stateful-workload), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/upgrading-stateful-workload](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/upgrading-stateful-workload), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/upgrading-stateful-workload](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/upgrading-stateful-workload)
