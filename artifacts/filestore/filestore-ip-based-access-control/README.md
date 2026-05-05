# Filestore IP-based access control

Product: Filestore
Feature slug: `filestore-ip-based-access-control`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

IP-based access control lets you restrict file-share access by client IP address.

## Lifecycle

- Latest feature date: 2020-06-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/filestore/docs/access-control](https://docs.cloud.google.com/filestore/docs/access-control), [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver), [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances), [https://docs.cloud.google.com/filestore/docs/create-custom-constraints](https://docs.cloud.google.com/filestore/docs/create-custom-constraints))
- allow (evidence: [https://docs.cloud.google.com/filestore/docs/access-control](https://docs.cloud.google.com/filestore/docs/access-control), [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver), [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances), [https://docs.cloud.google.com/filestore/docs/create-custom-constraints](https://docs.cloud.google.com/filestore/docs/create-custom-constraints))
- auth (evidence: [https://docs.cloud.google.com/filestore/docs/access-control](https://docs.cloud.google.com/filestore/docs/access-control), [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver), [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances), [https://docs.cloud.google.com/filestore/docs/create-custom-constraints](https://docs.cloud.google.com/filestore/docs/create-custom-constraints))
- authorization (evidence: [https://docs.cloud.google.com/filestore/docs/access-control](https://docs.cloud.google.com/filestore/docs/access-control), [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver), [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances), [https://docs.cloud.google.com/filestore/docs/create-custom-constraints](https://docs.cloud.google.com/filestore/docs/create-custom-constraints))
- constraint (evidence: [https://docs.cloud.google.com/filestore/docs/access-control](https://docs.cloud.google.com/filestore/docs/access-control), [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver), [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances), [https://docs.cloud.google.com/filestore/docs/create-custom-constraints](https://docs.cloud.google.com/filestore/docs/create-custom-constraints))
- encrypt (evidence: [https://docs.cloud.google.com/filestore/docs/access-control](https://docs.cloud.google.com/filestore/docs/access-control), [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver), [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances), [https://docs.cloud.google.com/filestore/docs/create-custom-constraints](https://docs.cloud.google.com/filestore/docs/create-custom-constraints))
- key (evidence: [https://docs.cloud.google.com/filestore/docs/access-control](https://docs.cloud.google.com/filestore/docs/access-control), [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver), [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances), [https://docs.cloud.google.com/filestore/docs/create-custom-constraints](https://docs.cloud.google.com/filestore/docs/create-custom-constraints))
- kms (evidence: [https://docs.cloud.google.com/filestore/docs/access-control](https://docs.cloud.google.com/filestore/docs/access-control), [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver), [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances), [https://docs.cloud.google.com/filestore/docs/create-custom-constraints](https://docs.cloud.google.com/filestore/docs/create-custom-constraints))
- policy (evidence: [https://docs.cloud.google.com/filestore/docs/access-control](https://docs.cloud.google.com/filestore/docs/access-control), [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver), [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances), [https://docs.cloud.google.com/filestore/docs/create-custom-constraints](https://docs.cloud.google.com/filestore/docs/create-custom-constraints))
- private (evidence: [https://docs.cloud.google.com/filestore/docs/access-control](https://docs.cloud.google.com/filestore/docs/access-control), [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver), [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances), [https://docs.cloud.google.com/filestore/docs/create-custom-constraints](https://docs.cloud.google.com/filestore/docs/create-custom-constraints))
- role (evidence: [https://docs.cloud.google.com/filestore/docs/access-control](https://docs.cloud.google.com/filestore/docs/access-control), [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver), [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances), [https://docs.cloud.google.com/filestore/docs/create-custom-constraints](https://docs.cloud.google.com/filestore/docs/create-custom-constraints))
- security (evidence: [https://docs.cloud.google.com/filestore/docs/access-control](https://docs.cloud.google.com/filestore/docs/access-control), [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver), [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances), [https://docs.cloud.google.com/filestore/docs/create-custom-constraints](https://docs.cloud.google.com/filestore/docs/create-custom-constraints))
- token (evidence: [https://docs.cloud.google.com/filestore/docs/access-control](https://docs.cloud.google.com/filestore/docs/access-control), [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver), [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances), [https://docs.cloud.google.com/filestore/docs/create-custom-constraints](https://docs.cloud.google.com/filestore/docs/create-custom-constraints))

## Official Evidence

- [https://docs.cloud.google.com/filestore/docs/access-control](https://docs.cloud.google.com/filestore/docs/access-control)
- [https://docs.cloud.google.com/filestore/docs/create-custom-constraints](https://docs.cloud.google.com/filestore/docs/create-custom-constraints)
- [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver)
