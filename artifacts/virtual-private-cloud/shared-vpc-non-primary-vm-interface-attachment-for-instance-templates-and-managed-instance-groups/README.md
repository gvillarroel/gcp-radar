# Shared VPC non-primary VM interface attachment for instance templates and managed instance groups

Product: Virtual Private Cloud
Feature slug: `shared-vpc-non-primary-vm-interface-attachment-for-instance-templates-and-managed-instance-groups`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Allows VM instances created from instance templates or managed instance groups to attach network interfaces other than nic0 when connected to Shared VPC.

## Lifecycle

- Latest feature date: 2021-03-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc), [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc), [https://docs.cloud.google.com/vpc/docs/about-network-attachments](https://docs.cloud.google.com/vpc/docs/about-network-attachments), [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes))
- allow (evidence: [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc), [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc), [https://docs.cloud.google.com/vpc/docs/about-network-attachments](https://docs.cloud.google.com/vpc/docs/about-network-attachments), [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes))
- iam (evidence: [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc), [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc), [https://docs.cloud.google.com/vpc/docs/about-network-attachments](https://docs.cloud.google.com/vpc/docs/about-network-attachments), [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes))
- key (evidence: [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc), [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc), [https://docs.cloud.google.com/vpc/docs/about-network-attachments](https://docs.cloud.google.com/vpc/docs/about-network-attachments), [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes))
- permission (evidence: [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc), [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc), [https://docs.cloud.google.com/vpc/docs/about-network-attachments](https://docs.cloud.google.com/vpc/docs/about-network-attachments), [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes))
- policy (evidence: [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc), [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc), [https://docs.cloud.google.com/vpc/docs/about-network-attachments](https://docs.cloud.google.com/vpc/docs/about-network-attachments), [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes))
- private (evidence: [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc), [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc), [https://docs.cloud.google.com/vpc/docs/about-network-attachments](https://docs.cloud.google.com/vpc/docs/about-network-attachments), [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes))
- role (evidence: [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc), [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc), [https://docs.cloud.google.com/vpc/docs/about-network-attachments](https://docs.cloud.google.com/vpc/docs/about-network-attachments), [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes))

## Official Evidence

- [https://docs.cloud.google.com/vpc/docs/about-network-attachments](https://docs.cloud.google.com/vpc/docs/about-network-attachments)
- [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes)
- [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
