---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.283Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "CSIStorageCapacity"
feature_slug: "csistoragecapacity"
latest_feature_date: "2022-09-14"
deprecation_date: "2022-09-14"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/optimize-multishares"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cloud-storage-fuse-csi-driver-perf"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/cloud-storage-fuse-csi-driver/volume-attr"
keywords:
  - "advertising"
  - "csistoragecapacity"
  - "capacity"
  - "scheduler"
  - "deprecated"
  - "storage"
  - "2022"
---

# CSIStorageCapacity

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

CSIStorageCapacity is a Kubernetes API for advertising storage capacity to the scheduler; deprecated on 2022-09-14.

## Extended Definition

CSIStorageCapacity is a Kubernetes API for advertising storage capacity to the scheduler; deprecated on 2022-09-14.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/optimize-multishares](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/optimize-multishares)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cloud-storage-fuse-csi-driver-perf](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cloud-storage-fuse-csi-driver-perf)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/cloud-storage-fuse-csi-driver/volume-attr](https://docs.cloud.google.com/kubernetes-engine/docs/reference/cloud-storage-fuse-csi-driver/volume-attr)

## Supporting Pages

### "Optimize storage with Filestore Multishares for GKE \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/optimize-multishares](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/optimize-multishares)
- Source ID: `site-docs-reference-required-5`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- From the command line, run the following command to check the current PVC size of replica 0: kubectl get pvc test-pvc-multishare-web-0 -o json { "apiVersion": "v1", "kind": "PersistentVolumeClaim", "metadata": { "annotations": { "pv.kubernetes.io/bind-completed": "yes", "pv.kubernetes.io/bound-by-controller": "yes", "volume.beta.kubernetes.io/storage-provisioner": "filestore.csi.storage.gke.io", "volume.kubernetes.io/storage-provisioner": "filestore.csi.storage.gke.io" }, "creationTimestamp": "2022-06-21T22:07:42Z", "finalizers": [ "kubernetes.io/pvc-protection" ], "labels": { "app": "nginx" }, "name": "test-pvc-multishare-web-0", "namespace": "default", "resourceVersion": "48395", "uid": "7aa21b5a-5343-4547-b7d7-414c16af15a7" }, "spec": { "accessModes": [ "ReadWriteMany" ], "resources": { "requests": { "storage": "100Gi" } }, "storageClassName": "enterprise-multishare-rwx", "volumeMode": "Filesystem", "volumeName": "pvc-7aa21b5a-5343-4547-b7d7-414c16af15a7" }, "status": { "accessModes": [ "ReadWriteMany" ], "capacity": { "storage": "100Gi" }, "phase": "Bound" } } From the command line, run the following command to increase the size to 500 GiB: kubectl edit pvc test-pvc-multishare-web-0 The file will open in the command line.
- From the command line, run the following instances describe command to verify the capacity of the Filestore instance: gcloud filestore instances describe fs-a767cef8-738e-4c8e-b70b-09cbb872d016 --project= YOUR PROJECT ID --region= REGION capacityGb: '1536' capacityStepSizeGb: '256' createTime: '2022-06-21T21:15:30.464237089Z' labels: storage gke io created-by: filestore csi storage gke io storage gke io storage-class-id: enterprise-multishare-rwx maxCapacityGb: '10240' maxShareCount: '10' multiShareEnabled: true name: projects/ YOUR PROJECT ID /locations/us-central1/instances/fs-a767cef8-738e-4c8e-b70b-09cbb872d016 networks: - connectMode: DIRECT PEERING ipAddresses: - 10.192.53.2 modes: - MODE IPV4 network: csi-filestore-test-network reservedIpRange: 10.192.53.0/26 state: READY tier: ENTERPRISE where: YOUR PROJECT ID is the name of the project being used.
- From the command line, run the following instances describe command: gcloud filestore instances describe fs-a767cef8-738e-4c8e-b70b-09cbb872d016 --project= YOUR PROJECT ID --region= REGION capacityGb: '1024' capacityStepSizeGb: '256' createTime: '2022-06-21T21:15:30.464237089Z' labels: storage gke io created-by: filestore csi storage gke io storage gke io storage-class-id: enterprise-multishare-rwx maxCapacityGb: '10240' maxShareCount: '10' multiShareEnabled: true name: projects/ YOUR PROJECT ID /locations/ REGION /instances/fs-a767cef8-738e-4c8e-b70b-09cbb872d016 networks: - connectMode: DIRECT PEERING ipAddresses: - 10.192.53.2 modes: - MODE IPV4 network: csi-filestore-test-network reservedIpRange: 10.192.53.0/26 state: READY tier: ENTERPRISE where: YOUR PROJECT ID is the name of the project being used.
- From the command line, run the following command: kubectl get pvc You should see something similar to the following response: NAME STATUS VOLUME CAPACITY ACCESS MODES STORAGECLASS AGE test-pvc-fs Bound pvc-056d769d-a709-4bb2-b6d3-0361871b27a2 100Gi RWX enterprise-multishare-rwx 65m test-pvc-multishare-web-0 Bound pvc-7aa21b5a-5343-4547-b7d7-414c16af15a7 100Gi RWX enterprise-multishare-rwx 13m test-pvc-multishare-web-1 Bound pvc-8b37cd6e-d764-4d38-80d7-d74228536cfe 100Gi RWX enterprise-multishare-rwx 12m test-pvc-multishare-web-2 Bound pvc-3fcbd132-939f-4364-807a-7c8ac6a3e64e 100Gi RWX enterprise-multishare-rwx 5m12s test-pvc-multishare-web-3 Bound pvc-5894afa5-2502-4ee7-9d5c-b7378cb85479 100Gi RWX enterprise-multishare-rwx 4m57s test-pvc-multishare-web-4 Bound pvc-ebbe452b-bc8f-4624-a830-a2094cce0d67 100Gi RWX enterprise-multishare-rwx 4m36s test-pvc-multishare-web-5 Bound pvc-5a73a698-d174-44cb-a3a1-e767966c3417 100Gi RWX enterprise-multishare-rwx 4m20s test-pvc-multishare-web-6 Bound pvc-102da6a9-2ca6-4f9e-9896-8fe14709db7a 100Gi RWX enterprise-multishare-rwx 3m55s test-pvc-multishare-web-7 Bound pvc-160e81cd-c5bf-4ae6-966e-518e8249e02d 100Gi RWX enterprise-multishare-rwx 3m38s test-pvc-multishare-web-8 Bound pvc-9b52d773-2e9a-40de-881c-dc06945ba3d7 100Gi RWX enterprise-multishare-rwx 118s Verify the Filestore instance state.

### "Manually optimize Cloud Storage FUSE CSI driver for performance \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cloud-storage-fuse-csi-driver-perf](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cloud-storage-fuse-csi-driver-perf)
- Source ID: `site-docs-reference-2`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Inference serving example The following example shows how to enable parallel download for inference serving: Create a PersistentVolume and PersistentVolumeClaim manifest with the following specification: apiVersion : v1 kind : PersistentVolume metadata : name : serving-bucket-pv spec : accessModes : - ReadWriteMany capacity : storage : 64Gi persistentVolumeReclaimPolicy : Retain storageClassName : example-storage-class claimRef : namespace : NAMESPACE name : serving-bucket-pvc mountOptions : - implicit-dirs #avoid if list cache enabled and doing metadata prefetch - metadata-cache:ttl-secs:-1 - metadata-cache:stat-cache-max-size-mb:-1 - metadata-cache:type-cache-max-size-mb:-1 - file-cache:max-size-mb:-1 - file-cache:cache-file-for-range-read:true - file-system:kernel-list-cache-ttl-secs:-1 - file-cache:enable-parallel-downloads:true - read ahead kb=1024 csi : driver : gcsfuse.csi.storage.gke.io volumeHandle : BUCKET NAME volumeAttributes : skipCSIBucketAccessCheck : "true" gcsfuseMetadataPrefetchOnMount : "true" --- apiVersion : v1 kind : PersistentVolumeClaim metadata : name : serving-bucket-pvc namespace : NAMESPACE spec : accessModes : - ReadWriteMany resources : requests : storage : 64Gi volumeName : serving-bucket-pv storageClassName : example-storage-class Replace the following values: NAMESPACE : the Kubernetes namespace where you want to deploy your Pod.
- Note: If you choose to use the default emptyDir volume for file caching, the value of Pod annotation gke-gcsfuse/ephemeral-storage-limit must be larger than the fileCacheCapacity volume attribute or the file-cache:max-size-mb mount option value.
- For example: volumeAttributes : mountOptions : "implicit-dirs" fileCacheCapacity : "-1" gcsfuseLoggingSeverity : warning Cloud Storage FUSE metrics The following Cloud Storage FUSE metrics are now available through the GKE Monitoring API .
- Create a Pod manifest with the following specification to consume the PersistentVolumeClaim, depending on whether you are using Local SSD-backed file caching or RAM disk-backed file caching: Local SSD apiVersion : v1 kind : Pod metadata : name : gcs-fuse-csi-example-pod namespace : NAMESPACE annotations : gke-gcsfuse/volumes : "true" gke-gcsfuse/cpu-limit : "0" gke-gcsfuse/memory-limit : "0" gke-gcsfuse/ephemeral-storage-limit : "0" spec : containers : Your workload container spec ... volumeMounts : - name : serving-bucket-vol mountPath : /serving-data readOnly : true serviceAccountName : KSA NAME volumes : - name : serving-bucket-vol persistentVolumeClaim : claimName : serving-bucket-pvc RAM disk apiVersion : v1 kind : Pod metadata : name : gcs-fuse-csi-example-pod namespace : NAMESPACE annotations : gke-gcsfuse/volumes : "true" gke-gcsfuse/cpu-limit : "0" gke-gcsfuse/memory-limit : "0" gke-gcsfuse/ephemeral-storage-limit : "0" spec : containers : Your workload container spec ... volumeMounts : - name : serving-bucket-vol mountPath : /serving-data readOnly : true serviceAccountName : KSA NAME volumes : - name : gke-gcsfuse-cache # gcsfuse file cache backed by RAM Disk emptyDir : medium : Memory - name : serving-bucket-vol persistentVolumeClaim : claimName : serving-bucket-pvc Apply the manifest to the cluster: kubectl apply -f POD FILE PATH Replace POD FILE PATH with the path to your YAML file.

### "Cloud Storage FUSE CSI driver volume attributes \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/cloud-storage-fuse-csi-driver/volume-attr](https://docs.cloud.google.com/kubernetes-engine/docs/reference/cloud-storage-fuse-csi-driver/volume-attr)
- Source ID: `site-api-reference`
- Final score: 78
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This attribute is required if you manually manage the Cloud Storage FUSE sidecars for your hostNetwork: true Pods and want to enable those Pods to use their own Kubernetes Service Account (KSA) for authentication when accessing Cloud Storage.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Reference Send feedback Cloud Storage FUSE CSI driver volume attributes Stay organized with collections Save and categorize content based on your preferences.
- Default value : "0". fileCacheForRangeRead Description : Whether the full object should be downloaded asynchronously and stored in the Cloud Storage FUSE cache directory when the first read is done from a non-zero offset.
- Set this to "true" to configure your host network ( hostNetwork: true ) Pods to use their own Kubernetes Service Account (KSA) for authentication when accessing Cloud Storage using Cloud Storage FUSE.

