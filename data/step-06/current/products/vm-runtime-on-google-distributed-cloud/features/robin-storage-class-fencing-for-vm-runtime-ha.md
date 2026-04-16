---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.740Z"
product_name: "VM Runtime on Google Distributed Cloud"
product_slug: "vm-runtime-on-google-distributed-cloud"
feature_name: "Robin storage class fencing for VM Runtime HA"
feature_slug: "robin-storage-class-fencing-for-vm-runtime-ha"
latest_feature_date: "2023-04-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/storage-classes"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/create-storage-credentials"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/vm-rbac"
keywords:
  - "robin"
  - "storage"
  - "class"
  - "fencing"
  - "for"
  - "vm"
  - "runtime"
  - "ha"
---

# Robin storage class fencing for VM Runtime HA

Product: VM Runtime on Google Distributed Cloud
Coverage: MEDIUM

## Step 02 Summary

VM Runtime now triggers Robin storage fencing during HA failover to block access from failed nodes, enabling HA operation with Robin-backed block storage.

## Extended Definition

VM Runtime now triggers Robin storage fencing during HA failover to block access from failed nodes, enabling HA operation with Robin-backed block storage.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/storage-classes](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/storage-classes)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/create-storage-credentials](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/create-storage-credentials)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/vm-rbac](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/vm-rbac)

## Supporting Pages

### "Create and use storage classes in VM Runtime on GDC \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/storage-classes](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/storage-classes)
- Source ID: `site-docs-root`
- Final score: 278
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This document shows you how to create and use storage classes for VMs that use VM Runtime on GDC.
- Edit the VMRuntime custom resource: kubectl edit vmruntime Add or update the spec.storage section that specifies the default StorageClass to use: apiVersion : vm.cluster.gke.io/v1 kind : VMRuntime metadata : name : vmruntime spec : enabled : true storage : defaultStorageClass : STORAGE CLASS NAME ...
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Create and use storage classes in VM Runtime on GDC Stay organized with collections Save and categorize content based on your preferences.
- If you want to initially set or update the default StorageClass that VM Runtime on GDC uses when you create a VirtualMachineDisk , update the VMRuntime custom resource.

### "Tutorial: Create and manage a Linux VM in VM Runtime on GDC \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm)
- Source ID: `site-docs-reference`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a VirtualMachineDisk manifest, such as my-disk.yaml , in the editor of your choice: nano my-disk.yaml Copy and paste the following YAML definition: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachineDisk metadata : name : DISK NAME spec : size : 20Gi storageClassName : STORAGE CLASS NAME source : http : url : https://cloud-images.ubuntu.com/releases/focal/release/ubuntu-20.04-server-cloudimg-amd64.img Replace the following values: DISK NAME : the name that you want for your disk.
- Objectives Configure basic dependencies Create a StorageClass for VM Runtime on GDC Create a virtual network for your VMs to use Create a virtual machine boot disk Create a VM Edit a VM to add a new virtual disk Before you begin To complete this tutorial, you need access to the following resources and tools: Access to Google Distributed Cloud version 1.12.0 ( anthosBareMetalVersion: 1.12.0 ) or higher cluster.
- Create a VirtualMachineDisk manifest, such as my-data-disk.yaml , in the editor of your choice: nano my-data-disk.yaml Copy and paste the following YAML definition: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachineDisk metadata : name : DATA DISK NAME spec : size : 10Gi storageClassName : STORAGE CLASS NAME Replace the following values: DATA DISK NAME : the name that you want for your data disk.
- VM Runtime on GDC automatically generates one storage profile for each StorageClass in a cluster.

### "Create and use credentials to import images from Cloud Storage for VM Runtime\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/create-storage-credentials](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/create-storage-credentials)
- Source ID: `site-docs-reference`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Apply the SecretForwarder manifest in the admin cluster using kubectl with the KUBECONFIG of the admin cluster: kubectl apply -f my-forwarded-secret.yaml Use a Secret to import an image To use the Secret to import an image from Cloud Storage when you create a virtual disk and VM, complete the following steps: Create a manifest that defines a VirtualMachineDisk and VirtualMachine , such as my-vm.yaml, in the editor of your choice: nano my-vm.yaml Copy and paste the following YAML definition: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachineDisk metadata : name : VM NAME -boot-dv spec : size : 20Gi source : gcs : url : IMAGE URL secretRef : SECRET NAME --- apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachine metadata : name : VM NAME spec : interfaces : - name : eth0 networkName : pod-network default : true disks : - boot : true virtualMachineDiskName : VM NAME -boot-dv Replace the following values: VM NAME - the name of your VM.
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Create and use credentials to import images from Cloud Storage for VM Runtime on GDC Stay organized with collections Save and categorize content based on your preferences.
- You can then create virtual disks from these images in Cloud Storage and attach them to VMs that run in your cluster.
- This document shows you how to create and use credentials to access Cloud Storage using VM Runtime on GDC.

### "Role-based access control (RBAC) for VM Runtime on GDC \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/vm-rbac](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/vm-rbac)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here are examples of the command output for each of the four predefined ClusterRoles: kubevm.admin apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : creationTimestamp : "2022-10-11T21:10:31Z" labels : kubevm : kubevm.admin rbac.authorization.k8s.io/aggregate-to-admin : "true" name : kubevm.admin resourceVersion : "16654950" uid : 3296c279-6e85-4ea6-b250-548bf0c3e935 rules : - apiGroups : - vm.cluster.gke.io resources : - virtualmachineaccessrequests - virtualmachinedisks - virtualmachines - gpuallocations - guestenvironmentdata - vmruntimes - virtualmachinetypes - vmhighavailabilitypolicies verbs : - get - delete - create - update - patch - list - watch - deletecollection - apiGroups : - networking.gke.io resources : - networkinterfaces - networks verbs : - get - delete - create - update - patch - list - watch - deletecollection kubevm.edit apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : creationTimestamp : "2022-10-11T21:10:31Z" labels : kubevm : kubevm.edit rbac.authorization.k8s.io/aggregate-to-edit : "true" name : kubevm.edit resourceVersion : "16654951" uid : 237bf9ae-b2c8-4303-94dc-e6425a2df331 rules : - apiGroups : - vm.cluster.gke.io resources : - virtualmachineaccessrequests - virtualmachinedisks - virtualmachines - gpuallocations - guestenvironmentdata - vmruntimes - virtualmachinetypes - vmhighavailabilitypolicies verbs : - get - delete - create - update - patch - list - watch - apiGroups : - networking.gke.io resources : - networkinterfaces - networks verbs : - get - delete - create - update - patch - list - watch kubevm.view apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : creationTimestamp : "2022-10-11T21:10:31Z" labels : kubevm : kubevm.view rbac.authorization.k8s.io/aggregate-to-view : "true" name : kubevm.view resourceVersion : "16654953" uid : b5b54e2d-0097-4698-abbd-aeac212d0a34 rules : - apiGroups : - vm.cluster.gke.io resources : - virtualmachineaccessrequests - virtualmachinedisks - virtualmachines - gpuallocations - guestenvironmentdata - vmruntimes - virtualmachinetypes - vmhighavailabilitypolicies verbs : - get - list - watch - apiGroups : - networking.gke.io resources : - networkinterfaces - networks verbs : - get - list - watch kubevm.cluster.view apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : creationTimestamp : "2022-10-11T21:10:31Z" labels : kubevm : kubevm.cluster.view name : kubevm.cluster.view resourceVersion : "16654956" uid : b25dde64-67da-488b-81d2-1a08f9a4a7c1 rules : - apiGroups : - vm.cluster.gke.io resources : - vmruntimes - virtualmachinetypes - vmhighavailabilitypolicies verbs : - get - list - watch - apiGroups : - networking.gke.io resources : - networks verbs : - get - list - watch Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Use the resource information in the following table if you want to create your own, customized roles: Resource Generated Cluster-wise virtualmachineinstances /console – – virtualmachineinstances /vnc – – virtualmachineinstances /portforward – – virtualmachineinstances /start – – virtualmachineinstances /stop – – virtualmachineinstances /restart – – virtualmachines Yes – virtualmachineinstances Yes – datavolumes – – storageprofiles – Yes cdiconfigs – Yes Kubernetes resources When you work with VM Runtime on GDC and VMs, you may need to manage access to the following Kubernetes resources.
- Use the resource information in the following table if you want to create your own, customized roles: Resource Generated Cluster-wise pods Yes – services – – persistentvolumeclaims – – secrets – – nodes – Yes storageclasses – Yes configmaps – – ClusterRole YAML examples You can retrieve YAML for the ClusterRoles with the following kubectl command: kubectl get ClusterRole CLUSTERROLE NAME -o yaml --kubeconfig KUBECONFIG PATH Replace the following: CLUSTERROLE NAME : the name of the ClusterRole, such as kubevm.cluster.view .
- This document provides information about resources VM Runtime on GDC manages so that cluster administrators can customize their own access model.

