---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.737Z"
product_name: "VM Runtime on Google Distributed Cloud"
product_slug: "vm-runtime-on-google-distributed-cloud"
feature_name: "Anthos clusters on bare metal 1.16.0 availability"
feature_slug: "anthos-clusters-on-bare-metal-1-16-0-availability"
latest_feature_date: "2023-08-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/numa"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/vm-rbac"
keywords:
  - "anthos"
  - "clusters"
  - "on"
  - "bare"
  - "metal"
  - "16"
  - "availability"
  - "made"
---

# Anthos clusters on bare metal 1.16.0 availability

Product: VM Runtime on Google Distributed Cloud
Coverage: MEDIUM

## Step 02 Summary

Made Anthos clusters on bare metal version 1.16.0 available for download.

## Extended Definition

Made Anthos clusters on bare metal version 1.16.0 available for download.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/numa](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/numa)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/vm-rbac](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/vm-rbac)

## Supporting Pages

### "Edit VM configuration in VM Runtime on GDC \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm)
- Source ID: `site-docs-reference`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This document is intended for application owners that use VM Runtime on GDC to run virtual machines (VMs) in clusters created with Google Distributed Cloud (software only) on bare metal.
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Edit VM configuration in VM Runtime on GDC Stay organized with collections Save and categorize content based on your preferences.
- This document shows you how to edit VMs running in bare metal clusters.
- If you edit compute settings, VM Runtime on GDC restarts your VM automatically when you save your changes. apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachine metadata : ... name : vm-sample-01 namespace : default resourceVersion : "16711824" uid : ed623879-0cfa-52de-ad2c-b63308e6116c spec : autoRestartOnConfigurationChange : true compute : cpu : vcpus : 2 ...

### "Configure NUMA-aware VMs \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/numa](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/numa)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To enable the CPU Manager with a static policy, add the --cpu-manager-policy=static flag to the KUBELET EXTRA ARGS="" section of the file: KUBELET EXTRA ARGS=" --cpu-manager-policy=static " To enable the Memory Manager with a Static policy, add the --memory-manager-policy=Static flag to the KUBELET EXTRA ARGS="" section of the file: KUBELET EXTRA ARGS="--cpu-manager-policy=static --memory-manager-policy=Static " To enable the Topology Manager with a restricted policy, add the --topology-manager-policy=restricted flag to the KUBELET EXTRA ARGS="" section of the file: KUBELET EXTRA ARGS="--cpu-manager-policy=static --memory-manager-policy=Static --topology-manager-policy=restricted " Check the current amount of memory reserved by Google Distributed Cloud: cat /var/lib/kubelet/kubeadm-flags.env The output should look like the following: KUBELET KUBEADM ARGS="--anonymous-auth=false --authentication-token-webhook=true --authorization-mode=Webhook --container-runtime=remote --container-runtime-endpoint=unix:///run/containerd/containerd.sock --feature-gates=SeccompDefault=true --kube-reserved=cpu=100m,memory=3470Mi --max-pods=110 --node-ip=192.168.1.190 --node-labels=baremetal.cluster.gke.io/k8s-ip=192.168.1.190,baremetal.cluster.gke.io/namespace=cluster-user001,baremetal.cluster.gke.io/node-pool=node-pool-1,cloud.google.com/gke-nodepool=node-pool-1 --pod-infra-container-image=gcr.io/anthos-baremetal-release/pause-amd64:3.1-gke.5 --provider-id=baremetal://192.168.1.190 --read-only-port=10255 --rotate-server-certificates=true --seccomp-default=true" The --kube-reserved=cpu=100m,memory=3470Mi setting indicates that Google Distributed Cloud has reserved 3,470 mebibytes of memory on the node.
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Configure NUMA-aware VMs Stay organized with collections Save and categorize content based on your preferences.
- This document describes how to configure clusters and VMs to support high performance and low latency workloads with the computing efficiencies of non-uniform memory access (NUMA).
- For example, with the reserved memory of 3470Mi from the example in the preceding step, you reserve 3570Mi of memory in the kubelet file: KUBELET EXTRA ARGS="--cpu-manager-policy=static --memory-manager-policy=Static --topology-manager-policy=restricted --reserved-memory=0:memory=3570Mi " Remove CPU and memory state files from the /var/lib directory: rm /var/lib/cpu manager state rm /var/lib/memory manager state Restart kubelet: systemctl start kubelet For more information about these policy settings, see the following Kubernetes documentation: CPU Management Policies Memory Manager configuration Topology Manager restricted policy Configure the node to use hugepages Once you have enabled Memory Manager with the Static policy, you can add hugepages to further improve container workload performance on your NUMA nodes.

### "Tutorial: Deploy an existing VM in a cluster using VM Runtime on GDC \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable VM Runtime on GDC and install the virtctl plugin The VM Runtime on GDC custom resource definition is part of all bare metal clusters since version 1.10.
- Objectives Enable VM Runtime on GDC and install the virtctl plugin Deploy the VM-based workload Log in to the VM and check the application status Access the VM-based workload Before you begin To complete this document you need the following resources: Access to a version 1.12.0 or higher bare metal cluster that was created by following the Install with Manual Loadbalancer guide.
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Tutorial: Deploy an existing VM in a cluster using VM Runtime on GDC Stay organized with collections Save and categorize content based on your preferences.
- This document provides a step-by-step guide to deploy a virtual machine (VM) based workload into an installation of Google Distributed Cloud (software only) on bare metal using VM Runtime on GDC.

### "Role-based access control (RBAC) for VM Runtime on GDC \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/vm-rbac](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/vm-rbac)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here are examples of the command output for each of the four predefined ClusterRoles: kubevm.admin apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : creationTimestamp : "2022-10-11T21:10:31Z" labels : kubevm : kubevm.admin rbac.authorization.k8s.io/aggregate-to-admin : "true" name : kubevm.admin resourceVersion : "16654950" uid : 3296c279-6e85-4ea6-b250-548bf0c3e935 rules : - apiGroups : - vm.cluster.gke.io resources : - virtualmachineaccessrequests - virtualmachinedisks - virtualmachines - gpuallocations - guestenvironmentdata - vmruntimes - virtualmachinetypes - vmhighavailabilitypolicies verbs : - get - delete - create - update - patch - list - watch - deletecollection - apiGroups : - networking.gke.io resources : - networkinterfaces - networks verbs : - get - delete - create - update - patch - list - watch - deletecollection kubevm.edit apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : creationTimestamp : "2022-10-11T21:10:31Z" labels : kubevm : kubevm.edit rbac.authorization.k8s.io/aggregate-to-edit : "true" name : kubevm.edit resourceVersion : "16654951" uid : 237bf9ae-b2c8-4303-94dc-e6425a2df331 rules : - apiGroups : - vm.cluster.gke.io resources : - virtualmachineaccessrequests - virtualmachinedisks - virtualmachines - gpuallocations - guestenvironmentdata - vmruntimes - virtualmachinetypes - vmhighavailabilitypolicies verbs : - get - delete - create - update - patch - list - watch - apiGroups : - networking.gke.io resources : - networkinterfaces - networks verbs : - get - delete - create - update - patch - list - watch kubevm.view apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : creationTimestamp : "2022-10-11T21:10:31Z" labels : kubevm : kubevm.view rbac.authorization.k8s.io/aggregate-to-view : "true" name : kubevm.view resourceVersion : "16654953" uid : b5b54e2d-0097-4698-abbd-aeac212d0a34 rules : - apiGroups : - vm.cluster.gke.io resources : - virtualmachineaccessrequests - virtualmachinedisks - virtualmachines - gpuallocations - guestenvironmentdata - vmruntimes - virtualmachinetypes - vmhighavailabilitypolicies verbs : - get - list - watch - apiGroups : - networking.gke.io resources : - networkinterfaces - networks verbs : - get - list - watch kubevm.cluster.view apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : creationTimestamp : "2022-10-11T21:10:31Z" labels : kubevm : kubevm.cluster.view name : kubevm.cluster.view resourceVersion : "16654956" uid : b25dde64-67da-488b-81d2-1a08f9a4a7c1 rules : - apiGroups : - vm.cluster.gke.io resources : - vmruntimes - virtualmachinetypes - vmhighavailabilitypolicies verbs : - get - list - watch - apiGroups : - networking.gke.io resources : - networks verbs : - get - list - watch Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Role-based access control (RBAC) for VM Runtime on GDC Stay organized with collections Save and categorize content based on your preferences.
- Resource Generated Cluster-wise kubevm.admin kubevm.view kubevm.edit kubevm.cluster.view virtualmachineaccessrequests – – Full Read Read/Write – virtualmachinedisks – – Full Read Read/Write – virtualmachines – – Full Read Read/Write – gpuallocations – – Full Read Read/Write – guestenvironmentdata Yes – Full Read Read/Write – vmruntimes – Yes Full Read Read/Write Read virtualmachinetypes – Yes Full Read Read/Write Read vmhighavailabilitypolicies – Yes Full Read Read/Write Read networkinterfaces Yes – Full Read Read/Write – networks – Yes Full Read Read/Write Read KubeVirt resources VM Runtime on GDC is based on the KubeVirt open source project .
- Role binding examples (namespaced editor) The following RoleBinding and ClusterRoleBinding examples give user charlie editor permissions for resources in the default namespace: apiVersion : rbac.authorization.k8s.io/v1 kind : RoleBinding metadata : name : edit-charlie namespace : default roleRef : apiGroup : rbac.authorization.k8s.io kind : ClusterRole name : edit subjects : - apiGroup : rbac.authorization.k8s.io kind : User name : charlie apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRoleBinding metadata : name : kubevm-cluster-view-charlie roleRef : apiGroup : rbac.authorization.k8s.io kind : ClusterRole name : kubevm.cluster.view subjects : - apiGroup : rbac.authorization.k8s.io kind : User name : charlie Namespaced viewer To grant namespaced viewer permissions to a user or set of users, you need to create two separate bindings: Create a RoleBinding on the namespace and reference the default Kubernetes view ClusterRole.

