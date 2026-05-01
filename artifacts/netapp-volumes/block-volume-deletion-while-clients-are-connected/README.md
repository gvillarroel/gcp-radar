# Block volume deletion while clients are connected

Product: NetApp Volumes
Feature slug: `block-volume-deletion-while-clients-are-connected`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

This option prevents deleting a volume while clients are connected or it is mounted as a GCVE datastore.

## Lifecycle

- Latest feature date: 2024-09-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- encrypt
- firewall
- iam
- identity
- permission
- policy
- private
- role

## Official Evidence

- [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume)
- [https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-nfs-clients](https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-nfs-clients)
- [https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-smb-clients](https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-smb-clients)
- [https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations](https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations)
