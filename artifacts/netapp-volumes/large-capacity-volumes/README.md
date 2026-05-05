# Large capacity volumes

Product: NetApp Volumes
Feature slug: `large-capacity-volumes`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Large capacity volumes are available on Premium and Extreme service levels and scale from 15 TiB to 1 PiB; Large capacity volumes provide higher-capacity NetApp Volumes storage for larger workloads.

## Lifecycle

- Latest feature date: 2024-09-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering), [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels), [https://docs.cloud.google.com/netapp/volumes/docs/quotas](https://docs.cloud.google.com/netapp/volumes/docs/quotas), [https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations](https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations))
- allow (evidence: [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering), [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels), [https://docs.cloud.google.com/netapp/volumes/docs/quotas](https://docs.cloud.google.com/netapp/volumes/docs/quotas), [https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations](https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations))
- encrypt (evidence: [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering), [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels), [https://docs.cloud.google.com/netapp/volumes/docs/quotas](https://docs.cloud.google.com/netapp/volumes/docs/quotas), [https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations](https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations))
- iam (evidence: [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering), [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels), [https://docs.cloud.google.com/netapp/volumes/docs/quotas](https://docs.cloud.google.com/netapp/volumes/docs/quotas), [https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations](https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations))
- identity (evidence: [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering), [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels), [https://docs.cloud.google.com/netapp/volumes/docs/quotas](https://docs.cloud.google.com/netapp/volumes/docs/quotas), [https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations](https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations))
- key (evidence: [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering), [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels), [https://docs.cloud.google.com/netapp/volumes/docs/quotas](https://docs.cloud.google.com/netapp/volumes/docs/quotas), [https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations](https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations))
- permission (evidence: [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering), [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels), [https://docs.cloud.google.com/netapp/volumes/docs/quotas](https://docs.cloud.google.com/netapp/volumes/docs/quotas), [https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations](https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations))
- policy (evidence: [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering), [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels), [https://docs.cloud.google.com/netapp/volumes/docs/quotas](https://docs.cloud.google.com/netapp/volumes/docs/quotas), [https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations](https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations))
- security (evidence: [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering), [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels), [https://docs.cloud.google.com/netapp/volumes/docs/quotas](https://docs.cloud.google.com/netapp/volumes/docs/quotas), [https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations](https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations))

## Official Evidence

- [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering)
- [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels)
- [https://docs.cloud.google.com/netapp/volumes/docs/quotas](https://docs.cloud.google.com/netapp/volumes/docs/quotas)
- [https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations](https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations)
