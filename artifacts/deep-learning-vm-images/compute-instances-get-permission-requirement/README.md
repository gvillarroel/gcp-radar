# compute.instances.get permission requirement

Product: Deep Learning VM Images
Feature slug: `compute-instances-get-permission-requirement`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Deep Learning VM Images removed the requirement for the attached service account to have the compute.instances.get permission.

## Lifecycle

- Latest feature date: 2022-10-18
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

- [https://docs.cloud.google.com/compute/docs/images/premium/access-rhel-knowledgebase](https://docs.cloud.google.com/compute/docs/images/premium/access-rhel-knowledgebase)
- [https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-gcloud](https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-gcloud)
- [https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance](https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance)
