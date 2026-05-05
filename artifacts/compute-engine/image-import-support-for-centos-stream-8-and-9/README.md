# Image import support for CentOS Stream 8 and 9

Product: Compute Engine
Feature slug: `image-import-support-for-centos-stream-8-and-9`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The image import tool can import CentOS Stream 8 and CentOS Stream 9 images into Google Cloud.

## Lifecycle

- Latest feature date: 2023-05-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries), [https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4](https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4))
- allow (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries), [https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4](https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4))
- audit (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries), [https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4](https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4))
- auth (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries), [https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4](https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4))
- certificate (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries), [https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4](https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4))
- confidential (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries), [https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4](https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4))
- constraint (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries), [https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4](https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4))
- credential (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries), [https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4](https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4))
- encrypt (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries), [https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4](https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4))
- firewall (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries), [https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4](https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4))
- iam (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries), [https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4](https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4))
- identity (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries), [https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4](https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4))
- key (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries), [https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4](https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4))
- kms (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries), [https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4](https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4))
- logging (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries), [https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4](https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4))
- permission (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries), [https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4](https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4))
- policy (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries), [https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4](https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4))
- private (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries), [https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4](https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4))
- role (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries), [https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4](https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4))
- security (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries), [https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4](https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4))

## Official Evidence

- [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries)
- [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines)
- [https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4](https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4)
