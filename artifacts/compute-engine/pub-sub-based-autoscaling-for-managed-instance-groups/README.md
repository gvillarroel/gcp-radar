# Pub/Sub-based autoscaling for managed instance groups

Product: Compute Engine
Feature slug: `pub-sub-based-autoscaling-for-managed-instance-groups`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Managed instance groups can autoscale based on the number of unacknowledged messages in a Pub/Sub subscription.

## Lifecycle

- Latest feature date: 2022-07-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- audit
- auth
- certificate
- confidential
- constraint
- credential
- encrypt
- iam
- identity
- key
- kms
- logging
- permission
- policy
- private
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/compute/docs/autoscaler](https://docs.cloud.google.com/compute/docs/autoscaler)
- [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances)
- [https://docs.cloud.google.com/compute/docs/tutorials/globally-autoscaling-a-web-service-on-compute-engine](https://docs.cloud.google.com/compute/docs/tutorials/globally-autoscaling-a-web-service-on-compute-engine)
