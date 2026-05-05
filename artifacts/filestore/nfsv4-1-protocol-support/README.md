# NFSv4.1 protocol support

Product: Filestore
Feature slug: `nfsv4-1-protocol-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Filestore supports the NFSv4.1 protocol with Managed Service for Microsoft Active Directory integration.

## Lifecycle

- Latest feature date: 2024-02-22
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/filestore/docs/configure-nfsv4](https://docs.cloud.google.com/filestore/docs/configure-nfsv4), [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver), [https://docs.cloud.google.com/filestore/docs/about-supported-protocols](https://docs.cloud.google.com/filestore/docs/about-supported-protocols), [https://docs.cloud.google.com/filestore/docs/configure-nfsv4-managed-ad](https://docs.cloud.google.com/filestore/docs/configure-nfsv4-managed-ad))
- allow (evidence: [https://docs.cloud.google.com/filestore/docs/configure-nfsv4](https://docs.cloud.google.com/filestore/docs/configure-nfsv4), [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver), [https://docs.cloud.google.com/filestore/docs/about-supported-protocols](https://docs.cloud.google.com/filestore/docs/about-supported-protocols), [https://docs.cloud.google.com/filestore/docs/configure-nfsv4-managed-ad](https://docs.cloud.google.com/filestore/docs/configure-nfsv4-managed-ad))
- auth (evidence: [https://docs.cloud.google.com/filestore/docs/configure-nfsv4](https://docs.cloud.google.com/filestore/docs/configure-nfsv4), [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver), [https://docs.cloud.google.com/filestore/docs/about-supported-protocols](https://docs.cloud.google.com/filestore/docs/about-supported-protocols), [https://docs.cloud.google.com/filestore/docs/configure-nfsv4-managed-ad](https://docs.cloud.google.com/filestore/docs/configure-nfsv4-managed-ad))
- encrypt (evidence: [https://docs.cloud.google.com/filestore/docs/configure-nfsv4](https://docs.cloud.google.com/filestore/docs/configure-nfsv4), [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver), [https://docs.cloud.google.com/filestore/docs/about-supported-protocols](https://docs.cloud.google.com/filestore/docs/about-supported-protocols), [https://docs.cloud.google.com/filestore/docs/configure-nfsv4-managed-ad](https://docs.cloud.google.com/filestore/docs/configure-nfsv4-managed-ad))
- iam (evidence: [https://docs.cloud.google.com/filestore/docs/configure-nfsv4](https://docs.cloud.google.com/filestore/docs/configure-nfsv4), [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver), [https://docs.cloud.google.com/filestore/docs/about-supported-protocols](https://docs.cloud.google.com/filestore/docs/about-supported-protocols), [https://docs.cloud.google.com/filestore/docs/configure-nfsv4-managed-ad](https://docs.cloud.google.com/filestore/docs/configure-nfsv4-managed-ad))
- key (evidence: [https://docs.cloud.google.com/filestore/docs/configure-nfsv4](https://docs.cloud.google.com/filestore/docs/configure-nfsv4), [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver), [https://docs.cloud.google.com/filestore/docs/about-supported-protocols](https://docs.cloud.google.com/filestore/docs/about-supported-protocols), [https://docs.cloud.google.com/filestore/docs/configure-nfsv4-managed-ad](https://docs.cloud.google.com/filestore/docs/configure-nfsv4-managed-ad))
- policy (evidence: [https://docs.cloud.google.com/filestore/docs/configure-nfsv4](https://docs.cloud.google.com/filestore/docs/configure-nfsv4), [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver), [https://docs.cloud.google.com/filestore/docs/about-supported-protocols](https://docs.cloud.google.com/filestore/docs/about-supported-protocols), [https://docs.cloud.google.com/filestore/docs/configure-nfsv4-managed-ad](https://docs.cloud.google.com/filestore/docs/configure-nfsv4-managed-ad))
- private (evidence: [https://docs.cloud.google.com/filestore/docs/configure-nfsv4](https://docs.cloud.google.com/filestore/docs/configure-nfsv4), [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver), [https://docs.cloud.google.com/filestore/docs/about-supported-protocols](https://docs.cloud.google.com/filestore/docs/about-supported-protocols), [https://docs.cloud.google.com/filestore/docs/configure-nfsv4-managed-ad](https://docs.cloud.google.com/filestore/docs/configure-nfsv4-managed-ad))
- role (evidence: [https://docs.cloud.google.com/filestore/docs/configure-nfsv4](https://docs.cloud.google.com/filestore/docs/configure-nfsv4), [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver), [https://docs.cloud.google.com/filestore/docs/about-supported-protocols](https://docs.cloud.google.com/filestore/docs/about-supported-protocols), [https://docs.cloud.google.com/filestore/docs/configure-nfsv4-managed-ad](https://docs.cloud.google.com/filestore/docs/configure-nfsv4-managed-ad))
- security (evidence: [https://docs.cloud.google.com/filestore/docs/configure-nfsv4](https://docs.cloud.google.com/filestore/docs/configure-nfsv4), [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver), [https://docs.cloud.google.com/filestore/docs/about-supported-protocols](https://docs.cloud.google.com/filestore/docs/about-supported-protocols), [https://docs.cloud.google.com/filestore/docs/configure-nfsv4-managed-ad](https://docs.cloud.google.com/filestore/docs/configure-nfsv4-managed-ad))

## Official Evidence

- [https://docs.cloud.google.com/filestore/docs/about-supported-protocols](https://docs.cloud.google.com/filestore/docs/about-supported-protocols)
- [https://docs.cloud.google.com/filestore/docs/configure-nfsv4](https://docs.cloud.google.com/filestore/docs/configure-nfsv4)
- [https://docs.cloud.google.com/filestore/docs/configure-nfsv4-managed-ad](https://docs.cloud.google.com/filestore/docs/configure-nfsv4-managed-ad)
- [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver)
