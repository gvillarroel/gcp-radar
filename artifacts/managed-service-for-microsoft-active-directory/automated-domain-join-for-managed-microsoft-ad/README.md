# Automated domain join for Managed Microsoft AD

Product: Managed Service for Microsoft Active Directory
Feature slug: `automated-domain-join-for-managed-microsoft-ad`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Windows Compute Engine VMs can join a Managed Microsoft AD domain automatically, with support for the managed-ad-force and managed-ad-ou-name flags, and GKE Windows Server nodes are also supported; Windows VMs can join a Managed Microsoft AD domain automatically in Preview.

## Lifecycle

- Latest feature date: 2023-06-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/managed-microsoft-ad/docs/automated-domain-join-gke](https://docs.cloud.google.com/managed-microsoft-ad/docs/automated-domain-join-gke), [https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-join-windows](https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-join-windows), [https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-join-linux](https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-join-linux))
- auth (evidence: [https://docs.cloud.google.com/managed-microsoft-ad/docs/automated-domain-join-gke](https://docs.cloud.google.com/managed-microsoft-ad/docs/automated-domain-join-gke), [https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-join-windows](https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-join-windows), [https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-join-linux](https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-join-linux))
- security (evidence: [https://docs.cloud.google.com/managed-microsoft-ad/docs/automated-domain-join-gke](https://docs.cloud.google.com/managed-microsoft-ad/docs/automated-domain-join-gke), [https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-join-windows](https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-join-windows), [https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-join-linux](https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-join-linux))

## Official Evidence

- [https://docs.cloud.google.com/managed-microsoft-ad/docs/automated-domain-join-gke](https://docs.cloud.google.com/managed-microsoft-ad/docs/automated-domain-join-gke)
- [https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-join-linux](https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-join-linux)
- [https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-join-windows](https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-join-windows)
