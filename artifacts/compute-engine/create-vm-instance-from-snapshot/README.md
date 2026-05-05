# Create VM instance from snapshot

Product: Compute Engine
Feature slug: `create-vm-instance-from-snapshot`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Compute Engine can create a VM instance directly from a persistent disk snapshot using the API or gcloud.

## Lifecycle

- Latest feature date: 2019-10-07
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://developers.google.com/compute/docs/instances/create-start-instance](https://developers.google.com/compute/docs/instances/create-start-instance), [https://docs.cloud.google.com/compute/docs/instances/create-start-instance](https://docs.cloud.google.com/compute/docs/instances/create-start-instance), [https://docs.cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances](https://docs.cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances))
- auth (evidence: [https://developers.google.com/compute/docs/instances/create-start-instance](https://developers.google.com/compute/docs/instances/create-start-instance), [https://docs.cloud.google.com/compute/docs/instances/create-start-instance](https://docs.cloud.google.com/compute/docs/instances/create-start-instance), [https://docs.cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances](https://docs.cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances))
- iam (evidence: [https://developers.google.com/compute/docs/instances/create-start-instance](https://developers.google.com/compute/docs/instances/create-start-instance), [https://docs.cloud.google.com/compute/docs/instances/create-start-instance](https://docs.cloud.google.com/compute/docs/instances/create-start-instance), [https://docs.cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances](https://docs.cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances))
- permission (evidence: [https://developers.google.com/compute/docs/instances/create-start-instance](https://developers.google.com/compute/docs/instances/create-start-instance), [https://docs.cloud.google.com/compute/docs/instances/create-start-instance](https://docs.cloud.google.com/compute/docs/instances/create-start-instance), [https://docs.cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances](https://docs.cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances))
- role (evidence: [https://developers.google.com/compute/docs/instances/create-start-instance](https://developers.google.com/compute/docs/instances/create-start-instance), [https://docs.cloud.google.com/compute/docs/instances/create-start-instance](https://docs.cloud.google.com/compute/docs/instances/create-start-instance), [https://docs.cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances](https://docs.cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances))

## Official Evidence

- [https://developers.google.com/compute/docs/instances/create-start-instance](https://developers.google.com/compute/docs/instances/create-start-instance)
- [https://docs.cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances](https://docs.cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances)
- [https://docs.cloud.google.com/compute/docs/instances/create-start-instance](https://docs.cloud.google.com/compute/docs/instances/create-start-instance)
