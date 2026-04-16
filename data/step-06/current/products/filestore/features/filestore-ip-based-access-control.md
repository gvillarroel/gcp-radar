---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:59.668Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "Filestore IP-based access control"
feature_slug: "filestore-ip-based-access-control"
latest_feature_date: "2020-06-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/access-control"
  - "https://docs.cloud.google.com/filestore/docs/csi-driver"
  - "https://docs.cloud.google.com/filestore/docs/creating-instances"
  - "https://docs.cloud.google.com/filestore/docs/create-custom-constraints"
keywords:
  - "filestore"
  - "ip"
  - "based"
  - "access"
  - "control"
  - "lets"
  - "you"
  - "restrict"
---

# Filestore IP-based access control

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

IP-based access control lets you restrict file-share access by client IP address.

## Extended Definition

IP-based access control lets you restrict file-share access by client IP address.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/access-control](https://docs.cloud.google.com/filestore/docs/access-control)
- [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver)
- [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- [https://docs.cloud.google.com/filestore/docs/create-custom-constraints](https://docs.cloud.google.com/filestore/docs/create-custom-constraints)

## Supporting Pages

### Access control \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/access-control](https://docs.cloud.google.com/filestore/docs/access-control)
- Source ID: `site-docs-root-2`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- However, if you have clients on non- RFC 1918 subnet ranges, you must explicitly grant them access to the Filestore instance using IP-based access control .
- IP-based access control You can change these export settings by creating access control rules using the Google Cloud console or by specifying a JSON configuration file during instance creation using the gcloud CLI.
- Home Documentation Storage Filestore Guides Send feedback Access control Stay organized with collections Save and categorize content based on your preferences.
- The instance exports the share regardless of whether IP-based access control is applied.

### "Access Filestore instances with the Filestore CSI driver \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver)
- Source ID: `site-docs-root`
- Final score: 229
- Re-rank relevance: N/A

Evidence snippets:
- Configure IP access rules with Filestore volumes Filestore supports IP-based access control rules for volumes.
- Access pre-existing Filestore instances using the Filestore CSI driver This section describes the typical process for using a Kubernetes volume to access pre-existing Filestore instances using Filestore CSI driver in GKE: Create a PersistentVolume and a PersistentVolumeClaim to access the instance Create a manifest file like the one shown in the following example, and name it preprov-filestore.yaml : apiVersion : v1 kind : PersistentVolume metadata : name : PV NAME spec : storageClassName : "" capacity : storage : 1Ti accessModes : - ReadWriteMany persistentVolumeReclaimPolicy : Retain volumeMode : Filesystem csi : driver : filestore.csi.storage.gke.io volumeHandle : "modeInstance/ FILESTORE INSTANCE LOCATION / FILESTORE INSTANCE NAME / FILESTORE SHARE NAME " volumeAttributes : ip : FILESTORE INSTANCE IP volume : FILESTORE SHARE NAME protocol : FILESYSTEM PROTOCOL claimRef : name : PVC NAME namespace : NAMESPACE --- kind : PersistentVolumeClaim apiVersion : v1 metadata : name : PVC NAME namespace : NAMESPACE spec : accessModes : - ReadWriteMany storageClassName : "" resources : requests : storage : 1Ti To create the PersistentVolumeClaim and PersistentVolume resources based on the preprov-filestore.yaml manifest file, run the following command: kubectl apply -f preprov-filestore.yaml To specify the NFSv4.1 file system protocol, set the protocol field to NFS V4 1 in the volumeAttributes field of a PersistentVolume object.
- Create a StorageClass when using the Filestore CSI driver with Shared VPC The following example shows how you can create a StorageClass when using the Filestore CSI driver with Shared VPC: cat <<EOF kubectl apply -f - apiVersion: storage.k8s.io/v1 kind: StorageClass metadata: name: filestore-sharedvpc-example provisioner: filestore.csi.storage.gke.io parameters: network: "projects/ HOST PROJECT ID /global/networks/ SHARED VPC NAME " connect-mode: PRIVATE SERVICE ACCESS reserved-ip-range: RESERVED IP RANGE NAME allowVolumeExpansion: true EOF Replace the following: HOST PROJECT ID : the ID or name of the host project of the Shared VPC network.
- This enhances security by restricting access to only authorized clients, especially in scenarios where the GKE cluster's IP range is too broad, potentially exposing the Filestore instance to unauthorized users or applications.

### Create an instance \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- Source ID: `site-docs-root`
- Final score: 215
- Re-rank relevance: N/A

Evidence snippets:
- Clients on non-RFC 1918 ranges If you plan to connect non- RFC 1918 clients to your Filestore instance, you must explicitly grant them access to the Filestore instance using IP-based access control .
- A justification for the deletion protection setting is provided. gcloud filestore instances create render1 \ --project=myproject \ --region=us-central1 \ --tier=REGIONAL \ --performance=max-iops-per-tb=17000 \ --network=name="default",reserved-ip-range="10.0.7.0/29" \ --flags-file=nfs-export-options.json \ --deletion-protection \ --deletion-protection-reason="All genomics data must adhere to current organization policies." nfs-export-options.json file contents: { "--file-share": { "capacity": "2048", "name": "my vol", "nfs-export-options": [ { "access-mode": "READ WRITE", "ip-ranges": [ "10.0.0.0/29", "10.2.0.0/29" ], "squash-mode": "ROOT SQUASH", "anon uid": 1003, "anon gid": 1003 }, { "access-mode": "READ ONLY", "ip-ranges": [ "192.168.0.0/26" ], "squash-mode": "NO ROOT SQUASH" } ] } } REST API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- Configure IP-based access control By default, a Filestore instance grants root level read and write access to all clients, including Compute Engine VMs and GKE clusters, that share the same Google Cloud project and VPC network.
- If you want to restrict access, you can do so by creating rules that grant specific access levels to clients based on their IP address.

### Creating custom constraints for Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/create-custom-constraints](https://docs.cloud.google.com/filestore/docs/create-custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Test the policy Try creating an instance without setting deletionProtection to true : gcloud filestore instances create test-ins --zone = us-central1 --tier = enterprise --network = name = "default" --file-share = "capacity=1024,name=test-fs" The output is similar to the following: ERROR: (gcloud.filestore.instances.create) FAILED PRECONDITION: Operation denied by custom org policy on resource 'projects/test-project/locations/us-central1/instances/test-ins': ["customConstraints/custom.deletionProtectionEnabledEnforcedOnCreate": "Enforce instance creation with deletion protection."]. - '@type': type.googleapis.com/google.rpc.DebugInfo detail: "generic::failed precondition: Operation denied by custom org policy on\ \ resource 'projects/test-project/locations/us-central1/instances/test-ins':\ \ [\"customConstraints/custom.deletionProtectionEnabledEnforcedOnCreate\": \"\ Enforce instance creation with deletion protection.\"]." . . . - '@type': type.googleapis.com/google.rpc.DebugInfo - '@type': type.googleapis.com/google.rpc.ErrorInfo domain: file.googleapis.com metadata: customConstraints: customConstraints/custom.deletionProtectionEnabledEnforcedOnCreate resource: projects/test-project/locations/us-central1/instances/test-ins reason: CUSTOM ORG POLICY VIOLATION Example custom organization policies for common use cases The following table lists custom organization policies that you might find useful: Description Constraint syntax When setting the access control to a restricted list of IPs and roles, allow setting the administrator IP to a unique IP name : organizations/ ORGANIZATION ID /customConstraints/custom.filestoreAdminIP resourceTypes : - file.googleapis.com/Instance methodTypes : - CREATE - UPDATE condition : "resource.fileShares.size() > 0 && resource.fileShares[0].nfsExportOptions.size() > 0 && resource.fileShares[0].nfsExportOptions.exists(o, o.squashMode == 'NO ROOT SQUASH' && o.accessMode == 'READ WRITE' && o.ipRanges.exists(i, i != '10.0.0.1'))" actionType : ALLOW displayName : Access control admin IP description : Access control restriction allows setting admin IP exclusively to 10.0.0.1.
- However, if you want more granular, customizable control over the specific fields that are restricted in your organization policies, you can also create custom constraints and use those custom constraints in an organization policy.
- Home Documentation Storage Filestore Guides Send feedback Creating custom constraints for Filestore Stay organized with collections Save and categorize content based on your preferences.
- Resource Field file.googleapis.com/Backup resource.description resource.kmsKey resource.sourceFileShare resource.sourceInstance file.googleapis.com/Instance resource.deletionProtectionEnabled resource.deletionProtectionReason resource.description resource.fileShares.capacityGb resource.fileShares.name resource.fileShares.nfsExportOptions.accessMode resource.fileShares.nfsExportOptions.anonGid resource.fileShares.nfsExportOptions.anonUid resource.fileShares.nfsExportOptions.ipRanges resource.fileShares.nfsExportOptions.squashMode resource.fileShares.sourceBackup resource.kmsKeyName resource.networks.connectMode resource.networks.modes resource.networks.network resource.networks.reservedIpRange resource.performanceConfig.fixedIops.maxIops resource.performanceConfig.iopsPerTb.maxIopsPerTb resource.protocol resource.replication.replicas.peerInstance resource.replication.role resource.tier file.googleapis.com/Snapshot resource.description What's next Learn more about Organization Policy Service .

