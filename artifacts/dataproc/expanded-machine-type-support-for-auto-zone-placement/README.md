# Expanded machine type support for Auto Zone Placement

Product: Dataproc
Feature slug: `expanded-machine-type-support-for-auto-zone-placement`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Auto Zone Placement supports n2, c2, e2, n2d, and m2 machine types in addition to earlier options.

## Lifecycle

- Latest feature date: 2020-03-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- credential
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceBlockingStub](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceBlockingStub)
