---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:59.669Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "Cloud Filestore"
feature_slug: "cloud-filestore"
latest_feature_date: "2019-04-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/csi-driver"
  - "https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerClient"
  - "https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke"
keywords:
  - "filestore"
  - "is"
  - "managed"
  - "file"
  - "storage"
  - "for"
  - "applications"
  - "that"
---

# Cloud Filestore

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

Cloud Filestore is a managed file storage service for applications that need shared file storage; Cloud Filestore is a managed file storage service for applications that need shared file storage.

## Extended Definition

Cloud Filestore is a managed file storage service for applications that need shared file storage; Cloud Filestore is a managed file storage service for applications that need shared file storage.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver)
- [https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient](https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerClient](https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerClient)
- [https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke](https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke)

## Supporting Pages

### "Access Filestore instances with the Filestore CSI driver \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver)
- Source ID: `site-docs-root`
- Final score: 292
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a volume using the Filestore CSI driver The following sections describe the typical process for using a Kubernetes volume backed by a Filestore CSI driver in GKE: Create a StorageClass Use a PersistentVolumeClaim to access the volume Create a Deployment that consumes the volume Create a StorageClass After you enable the Filestore CSI driver, GKE automatically installs the following StorageClasses for provisioning Filestore instances: zonal-rwx , using the Filestore zonal tier . enterprise-rwx , using the Filestore enterprise tier , where each Kubernetes PersistentVolume maps to a Filestore instance. enterprise-multishare-rwx , using the Filestore enterprise tier , where each Kubernetes PersistentVolume maps to a share of a given Filestore instance.
- Access pre-existing Filestore instances using the Filestore CSI driver This section describes the typical process for using a Kubernetes volume to access pre-existing Filestore instances using Filestore CSI driver in GKE: Create a PersistentVolume and a PersistentVolumeClaim to access the instance Create a manifest file like the one shown in the following example, and name it preprov-filestore.yaml : apiVersion : v1 kind : PersistentVolume metadata : name : PV NAME spec : storageClassName : "" capacity : storage : 1Ti accessModes : - ReadWriteMany persistentVolumeReclaimPolicy : Retain volumeMode : Filesystem csi : driver : filestore.csi.storage.gke.io volumeHandle : "modeInstance/ FILESTORE INSTANCE LOCATION / FILESTORE INSTANCE NAME / FILESTORE SHARE NAME " volumeAttributes : ip : FILESTORE INSTANCE IP volume : FILESTORE SHARE NAME protocol : FILESYSTEM PROTOCOL claimRef : name : PVC NAME namespace : NAMESPACE --- kind : PersistentVolumeClaim apiVersion : v1 metadata : name : PVC NAME namespace : NAMESPACE spec : accessModes : - ReadWriteMany storageClassName : "" resources : requests : storage : 1Ti To create the PersistentVolumeClaim and PersistentVolume resources based on the preprov-filestore.yaml manifest file, run the following command: kubectl apply -f preprov-filestore.yaml To specify the NFSv4.1 file system protocol, set the protocol field to NFS V4 1 in the volumeAttributes field of a PersistentVolume object.
- Save the following manifest as filestore-example-deployment.yaml : apiVersion : apps/v1 kind : Deployment metadata : name : web-server-deployment labels : app : nginx spec : replicas : 3 selector : matchLabels : app : nginx template : metadata : labels : app : nginx spec : containers : - name : nginx image : nginx volumeMounts : - mountPath : /usr/share/nginx/html name : mypvc volumes : - name : mypvc persistentVolumeClaim : claimName : podpvc --- kind : PersistentVolumeClaim apiVersion : v1 metadata : name : podpvc spec : accessModes : - ReadWriteMany storageClassName : filestore-example resources : requests : storage : 1Ti To create a Deployment based on the filestore-example-deployment.yaml manifest file, run the following command: kubectl apply -f filestore-example-deployment.yaml Confirm the Deployment was successfully created: kubectl get deployment It might take a while for Filestore instances to complete provisioning.
- For dynamic provisioning, set the protocol field to NFS V4 1 in the parameters of a StorageClass object. apiVersion : storage.k8s.io/v1 kind : StorageClass metadata : name : enterprise-multishare-rwx provisioner : filestore.csi.storage.gke.io parameters : tier : enterprise multishare : "true" instance-storageclass-label : "enterprise-multishare-rwx" protocol : NFS V4 1 volumeBindingMode : WaitForFirstConsumer allowVolumeExpansion : true You cannot mount the Filestore instance with the NFSv4.1 protocol with mountOptions set to nfsvers=3 in the StorageClass object.

### "Class CloudFilestoreManagerAsyncClient (1.16.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient](https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 292
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- As such, Filestore instances are resources of the form: /projects/{project number}/locations/{location id}/instances/{instance id} and backups are resources of the form: /projects/{project number}/locations/{location id}/backup/{backup id} Note that location id must be a Google Cloud zone for instances, but a Google Cloud region for backups; for example: projects/12345/locations/us-central1-c/instances/my-filestore projects/12345/locations/us-central1/backups/my-backup Properties api endpoint Return the API endpoint used by the client instance.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import filestore v1 async def sample restore instance(): Create a client client = filestore v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import filestore v1 async def sample create instance(): Create a client client = filestore v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import filestore v1 async def sample create snapshot(): Create a client client = filestore v1 .

### "Class CloudFilestoreManagerClient (1.16.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerClient](https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerClient)
- Source ID: `site-python-reference`
- Final score: 292
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- As such, Filestore instances are resources of the form: /projects/{project number}/locations/{location id}/instances/{instance id} and backups are resources of the form: /projects/{project number}/locations/{location id}/backup/{backup id} Note that location id must be a Google Cloud zone for instances, but a Google Cloud region for backups; for example: projects/12345/locations/us-central1-c/instances/my-filestore projects/12345/locations/us-central1/backups/my-backup Properties api endpoint Return the API endpoint used by the client instance.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import filestore v1 def sample restore instance(): Create a client client = filestore v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import filestore v1 def sample create instance(): Create a client client = filestore v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import filestore v1 def sample create snapshot(): Create a client client = filestore v1 .

### "Back up and restore persistent storage for your GKE clusters \_|\_ Filestore\

- URL: [https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke](https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke)
- Source ID: `site-docs-root-2`
- Final score: 288
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can check the status by running the following command: kubectl get volumesnapshot \ -o custom-columns = 'NAME:.metadata.name,READY:.status.readyToUse' If the snapshot is ready to use, the output is similar to the following: NAME READY my-snapshot true Delete the test file Delete the test file that you created: kubectl exec POD NAME \ -- sh -c 'rm /usr/share/hello/hello.txt' Verify that the file no longer exists: kubectl exec POD NAME \ -- sh -c 'cat /usr/share/hello/hello.txt' The output is similar to the following: cat: /usr/share/hello/hello.txt: No such file or directory Restore the volume snapshot Save the following manifest as pvc-restore.yaml : Filestore apiVersion : v1 kind : PersistentVolumeClaim metadata : name : pvc-restore spec : dataSource : name : my-snapshot kind : VolumeSnapshot apiGroup : snapshot.storage.k8s.io storageClassName : enterprise-rwx accessModes : - ReadWriteMany resources : requests : storage : 1Ti Note: The namespace of the PersistentVolumeClaim must be the same as the namespace of the VolumeSnapshot .
- Both volumeSnapshotRef.name and volumeSnapshotRef.namespace must point to the previously created VolumeSnapshot for the bi-directional binding to be valid. apiVersion : snapshot.storage.k8s.io/v1 kind : VolumeSnapshotContent metadata : name : restored-snapshot-content spec : deletionPolicy : Retain driver : filestore.csi.storage.gke.io source : snapshotHandle : projects/ PROJECT ID /global/snapshots /SNAPSHOT NAME volumeSnapshotRef : kind : VolumeSnapshot name : restored-snapshot namespace : default Apply the manifest: kubectl apply -f restored-snapshot-content.yaml Save the following PersistentVolumeClaim manifest as restored-pvc.yaml .
- Home Documentation Storage Filestore Guides Send feedback Back up and restore persistent storage for your GKE clusters Stay organized with collections Save and categorize content based on your preferences.
- You can verify that you're using a CSI driver by checking that the PersistentVolume spec has a csi section with driver: pd.csi.storage.gke.io or filestore.csi.storage.gke.io .

