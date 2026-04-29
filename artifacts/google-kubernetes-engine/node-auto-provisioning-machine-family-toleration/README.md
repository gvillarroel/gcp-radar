# Node auto-provisioning machine-family toleration

Product: Google Kubernetes Engine
Feature slug: `node-auto-provisioning-machine-family-toleration`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Node auto-provisioning can choose a custom machine family when the machine-family toleration is set.

## Lifecycle

- Latest feature date: 2021-02-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- confidential
- encrypt
- iam
- key
- kms
- logging
- policy
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
