# CSIStorageCapacity

Product: Google Kubernetes Engine
Feature slug: `csistoragecapacity`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

CSIStorageCapacity is a Kubernetes API for advertising storage capacity to the scheduler; deprecated on 2022-09-14.

## Lifecycle

- Latest feature date: 2022-09-14
- Deprecation date: 2022-09-14
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/optimize-multishares](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/optimize-multishares), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cloud-storage-fuse-csi-driver-perf](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cloud-storage-fuse-csi-driver-perf), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/cloud-storage-fuse-csi-driver/volume-attr](https://docs.cloud.google.com/kubernetes-engine/docs/reference/cloud-storage-fuse-csi-driver/volume-attr))
- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/optimize-multishares](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/optimize-multishares), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cloud-storage-fuse-csi-driver-perf](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cloud-storage-fuse-csi-driver-perf), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/cloud-storage-fuse-csi-driver/volume-attr](https://docs.cloud.google.com/kubernetes-engine/docs/reference/cloud-storage-fuse-csi-driver/volume-attr))
- logging (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/optimize-multishares](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/optimize-multishares), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cloud-storage-fuse-csi-driver-perf](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cloud-storage-fuse-csi-driver-perf), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/cloud-storage-fuse-csi-driver/volume-attr](https://docs.cloud.google.com/kubernetes-engine/docs/reference/cloud-storage-fuse-csi-driver/volume-attr))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/optimize-multishares](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/optimize-multishares), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cloud-storage-fuse-csi-driver-perf](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cloud-storage-fuse-csi-driver-perf), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/cloud-storage-fuse-csi-driver/volume-attr](https://docs.cloud.google.com/kubernetes-engine/docs/reference/cloud-storage-fuse-csi-driver/volume-attr))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cloud-storage-fuse-csi-driver-perf](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cloud-storage-fuse-csi-driver-perf)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/cloud-storage-fuse-csi-driver/volume-attr](https://docs.cloud.google.com/kubernetes-engine/docs/reference/cloud-storage-fuse-csi-driver/volume-attr)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/optimize-multishares](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/optimize-multishares)
