---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.741Z"
product_name: "VM Runtime on Google Distributed Cloud"
product_slug: "vm-runtime-on-google-distributed-cloud"
feature_name: "Ubuntu 22.04 guest OS support"
feature_slug: "ubuntu-22-04-guest-os-support"
latest_feature_date: "2023-04-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/guest-os"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/vm-rbac"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/vm-startup-config"
keywords:
  - "ubuntu"
  - "22"
  - "04"
  - "guest"
  - "os"
  - "adds"
  - "for"
  - "as"
---

# Ubuntu 22.04 guest OS support

Product: VM Runtime on Google Distributed Cloud
Coverage: MEDIUM

## Step 02 Summary

Adds support for Ubuntu 22.04 as a guest operating system.

## Extended Definition

Adds support for Ubuntu 22.04 as a guest operating system.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/guest-os](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/guest-os)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/vm-rbac](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/vm-rbac)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/vm-startup-config](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/vm-startup-config)

## Supporting Pages

### "Verified guest operating systems for VM Runtime on GDC \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/guest-os](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/guest-os)
- Source ID: `site-docs-reference`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Verified guest operating systems: RHEL 7 ( Extended Life Cycle Support available through June 2028 ) RHEL 8 ( Extended Update Support available through May 2025 ) Rocky Linux 8 ( reaches End of Life May 2029 ) Ubuntu 18.04 ( Expanded Security Maintenance ends April 2028 ) Ubuntu 20.04 ( Expanded Security Maintenance ends April 2030 ) Ubuntu 22.04 ( Expanded Security Maintenance ends March 2032 ) Windows Server 2016 ( extended support ends January 2027 ) Windows Server 2019 ( extended support ends January 2029 ) Windows Server 2022 ( extended support ends October 2031 ) Windows 10 Professional ( support ends October 2025 ) What's next To get started, Create a VM in Google Distributed Cloud .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Verified guest operating systems for VM Runtime on GDC Stay organized with collections Save and categorize content based on your preferences.
- For example, if a given Red Hat Enterprise Linux (RHEL) 8.x is verified, then RHEL 8 minor releases such as RHEL 8.y or RHEL 8.z ought to work without any issues, even though they aren't explicitly tested and verified.

### "Connect to VMs that use VM Runtime on GDC \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms)
- Source ID: `site-docs-reference`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the --configure-initial-password parameter with kubectl virt create command: kubectl virt create vm VM NAME \ --image ubuntu20.04 \ --os-type Linux \ --configure-initial-password USERNAME : PASSWORD \ --kubeconfig KUBECONFIG Replace the following values: VM NAME : name for your VM.
- To verify that your access request configuration succeeded, check the status of the VirtualMachineAccessRequest : kubectl get vmar VMAR NAME -o yaml --kubeconfig KUBECONFIG When the configuration is successful, the status section includes state: configured : apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachineAccessRequest metadata : ... annotations : kubectl.kubernetes.io/last-applied-configuration : {"apiVersion":"vm.cluster.gke.io/v1","kind":"VirtualMachineAccessRequest", "metadata":{"annotations":{},"name":"vmar-sample","namespace":"default"}, "spec":{"ssh":{"key":"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQ...jMLHFc= sample-user@sample-host","ttl":"5h"},"user":"sample-user","vm":"vm-sample-01"}} creationTimestamp : "2022-10-06T21:55:57Z" finalizers : - vm.cluster.gke.io/vmar-finalizer generation : 2 name : vmar-sample namespace : default resourceVersion : "13033921" uid : 282d72ad-f48d-4e89-af22-336940ac9f58 spec : ssh : key : ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQ...jMLHFc= sample-user@sample-host ttl : 5m0s user : sample-user vm : vm-sample-01 status : processedAt : "2022-10-06T21:55:57Z" state : configured Disable the guest agent When you create a new VM and set the osType field, the guest agent is enabled.
- To verify the guest agent is working, check the status in your VM custom resource: kubectl get gvm VM NAME --kubeconfig KUBECONFIG When the guest agent is working, you see status: "True" for the GuestEnvironmentEnabled and GuestEnvironmentDataSynced conditions. apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachine metadata : ... name : vm-sample-01 ... status : conditions : - lastTransitionTime : "2022-10-05T22:40:26Z" message : "" observedGeneration : 1 reason : UserConfiguration status : "True" type : GuestEnvironmentEnabled - lastTransitionTime : "2022-10-06T21:55:57Z" message : "" observedGeneration : 1 reason : GuestEnvironmentDataSynced status : "True" type : GuestEnvironmentSynced ...
- Windows guest OS Use the following steps to reset a password for an existing user or create the initial password for a new user: Enable the guest agent in your Windows VM: Configure the VM to enable the guest agent .

### "Role-based access control (RBAC) for VM Runtime on GDC \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/vm-rbac](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/vm-rbac)
- Source ID: `site-docs-root`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here are examples of the command output for each of the four predefined ClusterRoles: kubevm.admin apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : creationTimestamp : "2022-10-11T21:10:31Z" labels : kubevm : kubevm.admin rbac.authorization.k8s.io/aggregate-to-admin : "true" name : kubevm.admin resourceVersion : "16654950" uid : 3296c279-6e85-4ea6-b250-548bf0c3e935 rules : - apiGroups : - vm.cluster.gke.io resources : - virtualmachineaccessrequests - virtualmachinedisks - virtualmachines - gpuallocations - guestenvironmentdata - vmruntimes - virtualmachinetypes - vmhighavailabilitypolicies verbs : - get - delete - create - update - patch - list - watch - deletecollection - apiGroups : - networking.gke.io resources : - networkinterfaces - networks verbs : - get - delete - create - update - patch - list - watch - deletecollection kubevm.edit apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : creationTimestamp : "2022-10-11T21:10:31Z" labels : kubevm : kubevm.edit rbac.authorization.k8s.io/aggregate-to-edit : "true" name : kubevm.edit resourceVersion : "16654951" uid : 237bf9ae-b2c8-4303-94dc-e6425a2df331 rules : - apiGroups : - vm.cluster.gke.io resources : - virtualmachineaccessrequests - virtualmachinedisks - virtualmachines - gpuallocations - guestenvironmentdata - vmruntimes - virtualmachinetypes - vmhighavailabilitypolicies verbs : - get - delete - create - update - patch - list - watch - apiGroups : - networking.gke.io resources : - networkinterfaces - networks verbs : - get - delete - create - update - patch - list - watch kubevm.view apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : creationTimestamp : "2022-10-11T21:10:31Z" labels : kubevm : kubevm.view rbac.authorization.k8s.io/aggregate-to-view : "true" name : kubevm.view resourceVersion : "16654953" uid : b5b54e2d-0097-4698-abbd-aeac212d0a34 rules : - apiGroups : - vm.cluster.gke.io resources : - virtualmachineaccessrequests - virtualmachinedisks - virtualmachines - gpuallocations - guestenvironmentdata - vmruntimes - virtualmachinetypes - vmhighavailabilitypolicies verbs : - get - list - watch - apiGroups : - networking.gke.io resources : - networkinterfaces - networks verbs : - get - list - watch kubevm.cluster.view apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : creationTimestamp : "2022-10-11T21:10:31Z" labels : kubevm : kubevm.cluster.view name : kubevm.cluster.view resourceVersion : "16654956" uid : b25dde64-67da-488b-81d2-1a08f9a4a7c1 rules : - apiGroups : - vm.cluster.gke.io resources : - vmruntimes - virtualmachinetypes - vmhighavailabilitypolicies verbs : - get - list - watch - apiGroups : - networking.gke.io resources : - networks verbs : - get - list - watch Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Resource Generated Cluster-wise kubevm.admin kubevm.view kubevm.edit kubevm.cluster.view virtualmachineaccessrequests – – Full Read Read/Write – virtualmachinedisks – – Full Read Read/Write – virtualmachines – – Full Read Read/Write – gpuallocations – – Full Read Read/Write – guestenvironmentdata Yes – Full Read Read/Write – vmruntimes – Yes Full Read Read/Write Read virtualmachinetypes – Yes Full Read Read/Write Read vmhighavailabilitypolicies – Yes Full Read Read/Write Read networkinterfaces Yes – Full Read Read/Write – networks – Yes Full Read Read/Write Read KubeVirt resources VM Runtime on GDC is based on the KubeVirt open source project .
- Use the resource information in the following table if you want to create your own, customized roles: Resource Generated Cluster-wise pods Yes – services – – persistentvolumeclaims – – secrets – – nodes – Yes storageclasses – Yes configmaps – – ClusterRole YAML examples You can retrieve YAML for the ClusterRoles with the following kubectl command: kubectl get ClusterRole CLUSTERROLE NAME -o yaml --kubeconfig KUBECONFIG PATH Replace the following: CLUSTERROLE NAME : the name of the ClusterRole, such as kubevm.cluster.view .

### "Configure VM startup routines \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/vm-startup-config](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/vm-startup-config)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Script formats You can specify startup scripts in the following data formats: Clear text Base64-encoded string Kubernetes Secret Note the following rules for working with different script formats: When using clear text or a base64-encoded string, the maximum size allowed for script contents is 2048 bytes.
- Windows guest OSes aren't supported for this capability, since they don't support cloud-init.
- Ensure that the guest OS has cloud-init installed.

