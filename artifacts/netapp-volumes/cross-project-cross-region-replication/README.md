# Cross-project cross-region replication

Product: NetApp Volumes
Feature slug: `cross-project-cross-region-replication`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cross-project cross-region replication replicates NetApp Volumes data across regions and projects for supported service levels.

## Lifecycle

- Latest feature date: 2025-07-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/netapp/volumes/docs/reference/rest](https://docs.cloud.google.com/netapp/volumes/docs/reference/rest), [https://docs.cloud.google.com/netapp/volumes/docs/discover/overview](https://docs.cloud.google.com/netapp/volumes/docs/discover/overview), [https://docs.cloud.google.com/netapp/volumes/docs/quotas](https://docs.cloud.google.com/netapp/volumes/docs/quotas), [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels))
- allow (evidence: [https://docs.cloud.google.com/netapp/volumes/docs/reference/rest](https://docs.cloud.google.com/netapp/volumes/docs/reference/rest), [https://docs.cloud.google.com/netapp/volumes/docs/discover/overview](https://docs.cloud.google.com/netapp/volumes/docs/discover/overview), [https://docs.cloud.google.com/netapp/volumes/docs/quotas](https://docs.cloud.google.com/netapp/volumes/docs/quotas), [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels))
- encrypt (evidence: [https://docs.cloud.google.com/netapp/volumes/docs/reference/rest](https://docs.cloud.google.com/netapp/volumes/docs/reference/rest), [https://docs.cloud.google.com/netapp/volumes/docs/discover/overview](https://docs.cloud.google.com/netapp/volumes/docs/discover/overview), [https://docs.cloud.google.com/netapp/volumes/docs/quotas](https://docs.cloud.google.com/netapp/volumes/docs/quotas), [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels))
- iam (evidence: [https://docs.cloud.google.com/netapp/volumes/docs/reference/rest](https://docs.cloud.google.com/netapp/volumes/docs/reference/rest), [https://docs.cloud.google.com/netapp/volumes/docs/discover/overview](https://docs.cloud.google.com/netapp/volumes/docs/discover/overview), [https://docs.cloud.google.com/netapp/volumes/docs/quotas](https://docs.cloud.google.com/netapp/volumes/docs/quotas), [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels))
- identity (evidence: [https://docs.cloud.google.com/netapp/volumes/docs/reference/rest](https://docs.cloud.google.com/netapp/volumes/docs/reference/rest), [https://docs.cloud.google.com/netapp/volumes/docs/discover/overview](https://docs.cloud.google.com/netapp/volumes/docs/discover/overview), [https://docs.cloud.google.com/netapp/volumes/docs/quotas](https://docs.cloud.google.com/netapp/volumes/docs/quotas), [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels))
- key (evidence: [https://docs.cloud.google.com/netapp/volumes/docs/reference/rest](https://docs.cloud.google.com/netapp/volumes/docs/reference/rest), [https://docs.cloud.google.com/netapp/volumes/docs/discover/overview](https://docs.cloud.google.com/netapp/volumes/docs/discover/overview), [https://docs.cloud.google.com/netapp/volumes/docs/quotas](https://docs.cloud.google.com/netapp/volumes/docs/quotas), [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels))
- kms (evidence: [https://docs.cloud.google.com/netapp/volumes/docs/reference/rest](https://docs.cloud.google.com/netapp/volumes/docs/reference/rest), [https://docs.cloud.google.com/netapp/volumes/docs/discover/overview](https://docs.cloud.google.com/netapp/volumes/docs/discover/overview), [https://docs.cloud.google.com/netapp/volumes/docs/quotas](https://docs.cloud.google.com/netapp/volumes/docs/quotas), [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels))
- permission (evidence: [https://docs.cloud.google.com/netapp/volumes/docs/reference/rest](https://docs.cloud.google.com/netapp/volumes/docs/reference/rest), [https://docs.cloud.google.com/netapp/volumes/docs/discover/overview](https://docs.cloud.google.com/netapp/volumes/docs/discover/overview), [https://docs.cloud.google.com/netapp/volumes/docs/quotas](https://docs.cloud.google.com/netapp/volumes/docs/quotas), [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels))
- policy (evidence: [https://docs.cloud.google.com/netapp/volumes/docs/reference/rest](https://docs.cloud.google.com/netapp/volumes/docs/reference/rest), [https://docs.cloud.google.com/netapp/volumes/docs/discover/overview](https://docs.cloud.google.com/netapp/volumes/docs/discover/overview), [https://docs.cloud.google.com/netapp/volumes/docs/quotas](https://docs.cloud.google.com/netapp/volumes/docs/quotas), [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels))
- role (evidence: [https://docs.cloud.google.com/netapp/volumes/docs/reference/rest](https://docs.cloud.google.com/netapp/volumes/docs/reference/rest), [https://docs.cloud.google.com/netapp/volumes/docs/discover/overview](https://docs.cloud.google.com/netapp/volumes/docs/discover/overview), [https://docs.cloud.google.com/netapp/volumes/docs/quotas](https://docs.cloud.google.com/netapp/volumes/docs/quotas), [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels))
- security (evidence: [https://docs.cloud.google.com/netapp/volumes/docs/reference/rest](https://docs.cloud.google.com/netapp/volumes/docs/reference/rest), [https://docs.cloud.google.com/netapp/volumes/docs/discover/overview](https://docs.cloud.google.com/netapp/volumes/docs/discover/overview), [https://docs.cloud.google.com/netapp/volumes/docs/quotas](https://docs.cloud.google.com/netapp/volumes/docs/quotas), [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels))

## Official Evidence

- [https://docs.cloud.google.com/netapp/volumes/docs/discover/overview](https://docs.cloud.google.com/netapp/volumes/docs/discover/overview)
- [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels)
- [https://docs.cloud.google.com/netapp/volumes/docs/quotas](https://docs.cloud.google.com/netapp/volumes/docs/quotas)
- [https://docs.cloud.google.com/netapp/volumes/docs/reference/rest](https://docs.cloud.google.com/netapp/volumes/docs/reference/rest)
