# Volume deletion protection

Product: NetApp Volumes
Feature slug: `volume-deletion-protection`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Volume deletion protection prevents deletion of protected volumes to safeguard VMware Engine datastores.

## Lifecycle

- Latest feature date: 2024-02-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume), [https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-volume), [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering), [https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-storage-pool](https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-storage-pool))
- encrypt (evidence: [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume), [https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-volume), [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering), [https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-storage-pool](https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-storage-pool))
- iam (evidence: [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume), [https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-volume), [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering), [https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-storage-pool](https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-storage-pool))
- identity (evidence: [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume), [https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-volume), [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering), [https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-storage-pool](https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-storage-pool))
- permission (evidence: [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume), [https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-volume), [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering), [https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-storage-pool](https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-storage-pool))
- policy (evidence: [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume), [https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-volume), [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering), [https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-storage-pool](https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-storage-pool))
- role (evidence: [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume), [https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-volume), [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering), [https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-storage-pool](https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-storage-pool))

## Official Evidence

- [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume)
- [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering)
- [https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-storage-pool](https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-storage-pool)
- [https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-volume)
