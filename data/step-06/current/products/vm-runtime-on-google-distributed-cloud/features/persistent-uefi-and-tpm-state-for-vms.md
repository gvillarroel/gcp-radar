---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.738Z"
product_name: "VM Runtime on Google Distributed Cloud"
product_slug: "vm-runtime-on-google-distributed-cloud"
feature_name: "Persistent UEFI and TPM state for VMs"
feature_slug: "persistent-uefi-and-tpm-state-for-vms"
latest_feature_date: "2023-08-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/manage-power-state"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/list-view-vms"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/high-availability-policy-vms"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/create-networks"
keywords:
  - "persistent"
  - "uefi"
  - "and"
  - "tpm"
  - "state"
  - "for"
  - "vms"
  - "added"
---

# Persistent UEFI and TPM state for VMs

Product: VM Runtime on Google Distributed Cloud
Coverage: MEDIUM

## Step 02 Summary

Added support for persisting UEFI and trusted platform module (TPM) state across VM restarts when enabled via VMRuntime feature gate VMPersistentState.

## Extended Definition

Added support for persisting UEFI and trusted platform module (TPM) state across VM restarts when enabled via VMRuntime feature gate VMPersistentState.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/manage-power-state](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/manage-power-state)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/list-view-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/list-view-vms)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/high-availability-policy-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/high-availability-policy-vms)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/create-networks](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/create-networks)

## Supporting Pages

### "Manage the power state of VMs that use VM Runtime on GDC \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/manage-power-state](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/manage-power-state)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Manage the power state of VMs that use VM Runtime on GDC Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- This document shows you how to manage the power state of virtual machines (VMs) that use VM Runtime on GDC.
- You can stop, start, and restart VMs as needed to support the lifecycle of your applications.

### "List and view VM information using VM Runtime on GDC \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/list-view-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/list-view-vms)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View a list of all VMs using kubectl get gvm : kubectl get gvm --all-namespaces The following example output shows the VM information: NAME STATUS AGE IP vm1 Running 7m 192 .168.2.72 vm2 Running 4m 192 .168.2.73 Single namespace To view a list of VMs in a specific namespace, use the --namespace parameter with the kubectl command.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Interfaces: Dns Config: Nameservers: 172 .26.232.10 Ip Addresses: 192 .168.4.118 Mac Address: f8:8f:ca:00:00:01 Name: eth0 Resource Name: vm1-eth0-f8b63 Routes: To: 192 .168.0.0/16 To: 172 .26.232.0/24 State: Running Events: <none> What's next Manage the power state of VMs in Google Distributed Cloud .
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback List and view VM information using VM Runtime on GDC Stay organized with collections Save and categorize content based on your preferences.

### "Configure a high availability policy for VMs \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/high-availability-policy-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/high-availability-policy-vms)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Configure a high availability policy for VMs Stay organized with collections Save and categorize content based on your preferences.
- We make this recommendation for the following reasons: If your VMs use local storage, and a node fails, there is no way to recover the stored data and move it to a new node.
- For example: kubectl --kubeconfig USER CLUSTER KUBECONFIG \ annotate vmi my-vm \ vm.cluster.gke.io/vm-ha-recovery-strategy- kubectl --kubeconfig USER CLUSTER KUBECONFIG \ annotate gvm my-vm \ vm.cluster.gke.io/vm-ha-recovery-strategy- Advanced configuration In addition to configuring the default recovery strategy, you can configure the following: Node heartbeat interval : The time between heartbeats sent by each cluster node Node monitor grace period : The maximum amount of time a node can fail to send a heartbeat before it is considered unhealthy In most cases, the default values for heartbeat interval and grace period are appropriate.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

### "Create and use virtual networks for VM Runtime on GDC \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/create-networks](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/create-networks)
- Source ID: `site-docs-reference`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create a network with manually-specified networking settings for VMs, complete the following steps: Create a Network manifest, such as manual-network.yaml , in the editor of your choice: nano manual-network.yaml Copy and paste the following YAML manifest: apiVersion : networking . gke . io / v1 kind : Network metadata : name : NETWORK NAME spec : type : L2 nodeInterfaceMatcher : interfaceName : INTERFACE NAME routes : - to : " ROUTE ADDRESS " gateway4 : GATEWAY ADDRESS dnsConfig : nameservers : - NAMESERVER ADDRESS Replace the following values: NETWORK NAME : the name for your network.
- To create a network in a user-managed mode and manually define the VLAN interface configuration, complete the following steps: Create a Network manifest, such as user-managed-network.yaml , in the editor of your choice: nano user-managed-network.yaml Copy and paste the following YAML definition: apiVersion : networking . gke . io / v1 kind : Network metadata : name : NETWORK NAME spec : type : L2 networkLifecycle : UserManaged l2NetworkConfig : vlanID : VLAN ID nodeInterfaceMatcher : interfaceName : INTERFACE NAME externalDHCP4 : true Replace the following values: NETWORK NAME : the name for your network.
- Manifest To create a VM using a YAML manifest, complete the following steps: Create a VirtualMachine manifest, such as my-vm.yaml , in the editor of your choice: nano my-vm.yaml Copy and paste the following YAML manifest: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachine metadata : name : VM NAME spec : interfaces : - name : eth0 networkName : NETWORK NAME ipAddresses : - IP ADDRESS default : true disks : - virtualMachineDiskName : VM NAME -boot-dv boot : true In this YAML manifest, define the following settings: VM NAME : the name for your VM.
- To create a network that defines a VLAN assignment, complete the following steps: Create a Network manifest, such as vlan-network.yaml , in the editor of your choice: nano vlan-network.yaml Copy and paste the following YAML manifest: apiVersion : networking . gke . io / v1 kind : Network metadata : name : NETWORK NAME spec : type : L2 networkLifecycle : AnthosManaged l2NetworkConfig : vlanID : VLAN ID nodeInterfaceMatcher : interfaceName : INTERFACE NAME externalDHCP4 : true Replace the following values: NETWORK NAME : the name for your network.

