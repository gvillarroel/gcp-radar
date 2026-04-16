---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.293Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Container Storage Interface 1.0 storage class support"
feature_slug: "container-storage-interface-1-0-storage-class-support"
latest_feature_date: "2019-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/default-storage-class"
keywords:
  - "container"
  - "storage"
  - "interface"
  - "class"
  - "clusters"
  - "can"
  - "use"
  - "csi"
---

# Container Storage Interface 1.0 storage class support

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Clusters can use CSI 1.0 as a storage class.

## Extended Definition

Google Distributed Cloud (software only) for VMware user clusters support persistent storage through Kubernetes StorageClass resources backed by the vSphere Container Storage Interface (CSI) driver. The docs state that the in-tree vSphere volume plugin is deprecated and that the default user-cluster StorageClass is now provisioned by the vSphere CSI driver, with examples showing StorageClass provisioning via CSI-related provisioners (for example, `csi.vsphere.vmware.com`). The documentation confirms that storage is requested by choosing a StorageClass, but the provided excerpts do not explicitly mention the CSI specification version.

## Evidence Summary

These official Google Distributed Cloud for VMware pages document CSI-based storage integration, migration to CSI for the default StorageClass, and practical StorageClass creation/usage patterns with CSI provisioners in user clusters.

## Source Links

- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/default-storage-class](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/default-storage-class)

## Supporting Pages

### "Storage \_|\_ Google Distributed Cloud (software only) for VMware \_|\_\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage)
- Source ID: `site-docs-reference-3`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: It discusses StorageClasses and CSI-backed provisioning but does not mention CSI 1.0 or version-specific storage class compatibility.

Evidence snippets:
- Further reading Persistent volumes in Google Kubernetes Engine Persistent Volumes Storage Classes Container Storage Interface in Kubernetes Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Summary Google Distributed Cloud integrates with external block or file storage systems through: The vSphere Container Storage Interface (CSI) driver Third party CSI drivers Kubernetes in-tree volume plugins vSphere datastores When you create an admin cluster, you specify an existing vSphere datastore for the cluster's etcd data.
- CSI Migration for the vSphere storage driver In the past, the in-tree vSphere volume plugin was the provisioner for the default StorageClass in user clusters.
- But now the in-tree vSphere volume plugin is deprecated, and the vSphere CSI driver is the provisioner for the default StorageClass in user clusters.

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Windows persistent storage When working with Windows Server containers with persistent storage, you must create a StorageClass object, and specify the name of that object in the storageClassName field of the PersistentVolumeClaim object, because the default StorageClass in on-prem user cluster uses ext4 as the file system type, which only works for Linux containers.
- For example: [INPUT] # https://docs.fluentbit.io/manual/input/tail Name tail Tag Regex var.log.containers.(?<pod name>a-z0-9?(?:.a-z0-9?) ) (?<namespace name>[^ ]+) (?<container name>.+)-(?<docker id>[a-z0-9]{64}).log$ Tag k8s container.<namespace name>.<pod name>.<container name> Path C:\var\log\containers\ .log Exclude Path kube-system .log, gke-connect .log, knative-serving .log, gke-system .log, istio-system .log, monitoring-system .log, config-management-system .log, gatekeeper-system .log, cnrm-system .log DB C:\var\log\fluent-bit-k8s-container-application.db Mem Buf Limit 30MB Skip Long Lines On Refresh Interval 10 # storage.type filesystem Buffer Chunk Size 512KB Buffer Max Size 5M Rotate Wait 30 Ignore Older 4h Run the rollout restart command to restart the fluent-bit-windows daemonset: kubectl --kubeconfig KUBECONFIG rollout restart daemonset fluent-bit-windows -n kube-system Node resource type: kubelet, kube-proxy and Windows event-logs You can access logs using the Logs Explorer in the console.
- Step 3: Verify the Active Domain joining for the Windows nodes On the AD domain controller VM, run the following command: PS C:\> Get-ADComputer -Filter 'Name -like "user-host-prefix "' DistinguishedName : CN=AD-VM-1,CN=Computers,DC=example,DC=org DNSHostName : ad-vm-1.example.org Enabled : True Name : AD-VM-1 ObjectClass : computer ObjectGUID : b3609717-d24b-4df6-bccb-26ca8e8b9eb0 SamAccountName : AD-VM-1$ SID : S-1-5-21-3236879623-1561052741-2808297733-1103 Step 4: Configure Group Managed Service Accounts (optional) Follow these instructions: Configure GMSA for Windows Pods and containers .
- Example Windows storage class: kind : StorageClass apiVersion : storage . k8s . io / v1 metadata : name : my - storage - class provisioner : kubernetes . io / vsphere - volume parameters : datastore : my - datastore diskformat : thin fstype : ntfs CSI proxy is deployed automatically onto Windows nodes.

### "Setting the default StorageClass \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/default-storage-class](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/default-storage-class)
- Source ID: `site-docs-reference-required-4`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: The page mentions installing/deploying CSI drivers and using their parameters in StorageClass creation, but does not discuss CSI version 1.0 or version-specific support.

Evidence snippets:
- Remove the default annotation from the default StorageClass Open the default StorageClass in a text editor: kubectl --kubeconfig [USER CLUSTER KUBECONFIG] edit storageclass \ DEFAULT STORAGE CLASS In the text editor, remove the storageclass.kubernetes.io/is-default-class: "true" annotation.
- For example, in the following output, you can see that a StorageClass named standard-rwo is the default StorageClass: standard kubernetes.io/vsphere-volume standard-rwo (default) csi.vsphere.vmware.com When you request storage, you can specify a StorageClass.
- To verify that the annotation was removed, enter this command: kubectl --kubeconfig [USER CLUSTER KUBECONFIG] get storageclass \ DEFAULT STORAGE CLASS --output yaml Create a new StorageClass Create a manifest for a new StorageClass .
- When you create a StorageClass for your new appliance, you should name the StorageClass after its properties (such as "fast" or "highly-replicated"), rather than after the name of the specific driver or appliance behind it.

