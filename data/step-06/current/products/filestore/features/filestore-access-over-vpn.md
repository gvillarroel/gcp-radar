---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:59.667Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "Filestore access over VPN"
feature_slug: "filestore-access-over-vpn"
latest_feature_date: "2020-11-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/overview"
  - "https://docs.cloud.google.com/filestore/docs/mounting-fileshares"
  - "https://docs.cloud.google.com/filestore/docs/csi-driver"
  - "https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient"
keywords:
  - "filestore"
  - "access"
  - "over"
  - "vpn"
  - "file"
  - "shares"
  - "can"
  - "be"
---

# Filestore access over VPN

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

Filestore file shares can be mounted from on-premises clients and remote VPCs over VPN.

## Extended Definition

Filestore file shares can be mounted from on-premises clients and remote VPCs over VPN.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/overview](https://docs.cloud.google.com/filestore/docs/overview)
- [https://docs.cloud.google.com/filestore/docs/mounting-fileshares](https://docs.cloud.google.com/filestore/docs/mounting-fileshares)
- [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver)
- [https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient](https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient)

## Supporting Pages

### Filestore overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/overview](https://docs.cloud.google.com/filestore/docs/overview)
- Source ID: `site-api-reference`
- Final score: 278
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For details, see the following resources: Benefits of NFSv4.1 Encryption in Transit in Google Cloud Access control You can control the level of access that a client has on Filestore instance data based on the client's IP address.
- Filestore instances are fully managed file servers on Google Cloud that can be connected to a number of client types: Compute Engine VMs Google Kubernetes Engine (GKE) clusters External datastores such as Google Cloud VMware Engine On-premises machines Cloud Run services Once provisioned, you can scale the capacity of your instances according to need without any downtime.
- For Google Kubernetes Engine users, for example, Filestore provides multiple reader, multiple writer access, letting you mount your GKE PersistentVolumes as read-write by many nodes.
- This means you can optimize your Filestore instances for your workload requirements and scale your file shares to meet the demands of your applications without resizing the capacity.

### "Mounting file shares on Compute Engine clients \_|\_ Filestore \_|\_ Google\

- URL: [https://docs.cloud.google.com/filestore/docs/mounting-fileshares](https://docs.cloud.google.com/filestore/docs/mounting-fileshares)
- Source ID: `site-docs-root`
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To reduce the possibility of I/O disruptions when the Filestore instance reboots, we recommend using the hard mount option for both Linux and Windows clients. timeo=600 The NFS client waits 600 deciseconds (60 seconds) before retrying an NFS request. retrans=3 The NFS client attempts NFS requests three times before taking further recovery action. rsize=524288 The NFS client can receive a maximum of 524,288 bytes from the NFS server per READ request.
- Example : The following line in /etc/auto.nfs mounts file share vol1 of the Filestore instance with IP address 10.0.0.2 in the dynamically generated subdirectory file-shares with read/write access granted: file-shares -rw 10.0.0.2:/vol1 Test your configuration If the file share is mounted, you need to unmount it: sudo umount mount-point-directory where mount-point-directory is the path where the Filestore file share is mapped to.
- If you're looking to access Filestore instances from Google Kubernetes Engine clusters instead, see Access Filestore instances with the Filestore CSI driver .
- For specific service tiers, we recommend specifying the following number of connections between the client and server: Tier Capacity Number of connections Regional, zonal 1-9.75 TiB nconnect=2 Regional, zonal 10-100 TiB nconnect=7 Enterprise - nconnect=2 High scale SSD - nconnect=7 In general, the larger the file share capacity and the fewer the connecting client VMs, the more performance you gain by specifying additional connections with nconnect . ip-address is the IP address for the Filestore instance. file-share is the name of the file share on the instance.

### "Access Filestore instances with the Filestore CSI driver \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver)
- Source ID: `site-docs-root`
- Final score: 271
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a StorageClass when using the Filestore CSI driver with Shared VPC The following example shows how you can create a StorageClass when using the Filestore CSI driver with Shared VPC: cat <<EOF kubectl apply -f - apiVersion: storage.k8s.io/v1 kind: StorageClass metadata: name: filestore-sharedvpc-example provisioner: filestore.csi.storage.gke.io parameters: network: "projects/ HOST PROJECT ID /global/networks/ SHARED VPC NAME " connect-mode: PRIVATE SERVICE ACCESS reserved-ip-range: RESERVED IP RANGE NAME allowVolumeExpansion: true EOF Replace the following: HOST PROJECT ID : the ID or name of the host project of the Shared VPC network.
- You can access existing Filestore instances by using pre-provisioned Filestore instances in Kubernetes workloads .
- Access pre-existing Filestore instances using the Filestore CSI driver This section describes the typical process for using a Kubernetes volume to access pre-existing Filestore instances using Filestore CSI driver in GKE: Create a PersistentVolume and a PersistentVolumeClaim to access the instance Create a manifest file like the one shown in the following example, and name it preprov-filestore.yaml : apiVersion : v1 kind : PersistentVolume metadata : name : PV NAME spec : storageClassName : "" capacity : storage : 1Ti accessModes : - ReadWriteMany persistentVolumeReclaimPolicy : Retain volumeMode : Filesystem csi : driver : filestore.csi.storage.gke.io volumeHandle : "modeInstance/ FILESTORE INSTANCE LOCATION / FILESTORE INSTANCE NAME / FILESTORE SHARE NAME " volumeAttributes : ip : FILESTORE INSTANCE IP volume : FILESTORE SHARE NAME protocol : FILESYSTEM PROTOCOL claimRef : name : PVC NAME namespace : NAMESPACE --- kind : PersistentVolumeClaim apiVersion : v1 metadata : name : PVC NAME namespace : NAMESPACE spec : accessModes : - ReadWriteMany storageClassName : "" resources : requests : storage : 1Ti To create the PersistentVolumeClaim and PersistentVolume resources based on the preprov-filestore.yaml manifest file, run the following command: kubectl apply -f preprov-filestore.yaml To specify the NFSv4.1 file system protocol, set the protocol field to NFS V4 1 in the volumeAttributes field of a PersistentVolume object.
- Save the following manifest as filestore-example-deployment.yaml : apiVersion : apps/v1 kind : Deployment metadata : name : web-server-deployment labels : app : nginx spec : replicas : 3 selector : matchLabels : app : nginx template : metadata : labels : app : nginx spec : containers : - name : nginx image : nginx volumeMounts : - mountPath : /usr/share/nginx/html name : mypvc volumes : - name : mypvc persistentVolumeClaim : claimName : podpvc --- kind : PersistentVolumeClaim apiVersion : v1 metadata : name : podpvc spec : accessModes : - ReadWriteMany storageClassName : filestore-example resources : requests : storage : 1Ti To create a Deployment based on the filestore-example-deployment.yaml manifest file, run the following command: kubectl apply -f filestore-example-deployment.yaml Confirm the Deployment was successfully created: kubectl get deployment It might take a while for Filestore instances to complete provisioning.

### "Class CloudFilestoreManagerAsyncClient (1.16.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient](https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The elements of the repeated paths field may only include these fields: - "description" - "file shares" - "labels" - "performance config" - "deletion protection enabled" - "deletion protection reason" This corresponds to the update mask field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- As such, Filestore instances are resources of the form: /projects/{project number}/locations/{location id}/instances/{instance id} and backups are resources of the form: /projects/{project number}/locations/{location id}/backup/{backup id} Note that location id must be a Google Cloud zone for instances, but a Google Cloud region for backups; for example: projects/12345/locations/us-central1-c/instances/my-filestore projects/12345/locations/us-central1/backups/my-backup Properties api endpoint Return the API endpoint used by the client instance.
- PromoteReplicaRequest promotes a Filestore standby instance (replica). retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The Filestore Instance to create the snapshots of, in the format projects/{project id}/locations/{location}/instances/{instance id} This corresponds to the parent field on the request instance; if request is provided, this should not be set. snapshot Snapshot Required.

