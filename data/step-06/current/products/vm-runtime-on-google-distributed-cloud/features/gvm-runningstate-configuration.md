---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.736Z"
product_name: "VM Runtime on Google Distributed Cloud"
product_slug: "vm-runtime-on-google-distributed-cloud"
feature_name: "GVM runningState configuration"
feature_slug: "gvm-runningstate-configuration"
latest_feature_date: "2024-04-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/manage-power-state"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/list-view-vms"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms"
keywords:
  - "gvm"
  - "runningstate"
  - "configuration"
  - "adds"
  - "for"
  - "configuring"
  - "running"
  - "state"
---

# GVM runningState configuration

Product: VM Runtime on Google Distributed Cloud
Coverage: MEDIUM

## Step 02 Summary

Adds support for configuring a GVM's running state (Running or Stopped) through the runningState field in the GVM resource spec.

## Extended Definition

Adds support for configuring a GVM's running state (Running or Stopped) through the runningState field in the GVM resource spec.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/manage-power-state](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/manage-power-state)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/list-view-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/list-view-vms)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms)

## Supporting Pages

### "Edit VM configuration in VM Runtime on GDC \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- The following example output shows the VM in a Running state: NAME STATUS AGE IP vm1 Running 1m 192.168.2.72 View detailed information about a VM using kubectl describe gvm : kubectl describe gvm VM NAME Replace VM NAME with the name of the VM that you edited.
- Check the STATUS of your VM: kubectl get gvm VM NAME Make sure that your VM is in a Running state.
- Check the STATUS of your VM: kubectl get gvm VM NAME Make sure that your VM is in a Running state.
- Check the STATUS of your VM: kubectl get gvm VM NAME Make sure that your VM is in a Running state.

### "Manage the power state of VMs that use VM Runtime on GDC \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/manage-power-state](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/manage-power-state)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Check the STATUS of your VM: kubectl get gvm VM NAME The following example output shows the VM in a Stopping state: NAME STATUS AGE IP vm1 Stopping 7s 192 .168.2.72 Check the STATUS of your VM again after a minute or two: kubectl get gvm VM NAME After the VM has successfully restarted, the following example output shows the VM in a Running state again: NAME STATUS AGE IP vm1 Running 1m 192 .168.2.73 This example VM uses an ephemeral pod IP address, so the address changes when the VM restarts.
- Check the STATUS of your VM: kubectl get gvm VM NAME The following example output shows the VM in a Running state: NAME STATUS AGE IP vm1 Running 1m 192 .168.2.72 Restart a VM To restart a VM that's in a running state, use the following steps.
- Check the STATUS of your VM: kubectl get gvm VM NAME The following example output shows the VM in a Stopped state: NAME STATUS AGE IP vm1 Stopped 1m 192 .168.2.72 Start a VM To start a VM that's in a stopped state, use the following steps.
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Manage the power state of VMs that use VM Runtime on GDC Stay organized with collections Save and categorize content based on your preferences.

### "List and view VM information using VM Runtime on GDC \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/list-view-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/list-view-vms)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- View a list of all VMs using kubectl get gvm : kubectl get gvm --all-namespaces The following example output shows the VM information: NAME STATUS AGE IP vm1 Running 7m 192 .168.2.72 vm2 Running 4m 192 .168.2.73 Single namespace To view a list of VMs in a specific namespace, use the --namespace parameter with the kubectl command.
- Interfaces: Dns Config: Nameservers: 172 .26.232.10 Ip Addresses: 192 .168.4.118 Mac Address: f8:8f:ca:00:00:01 Name: eth0 Resource Name: vm1-eth0-f8b63 Routes: To: 192 .168.0.0/16 To: 172 .26.232.0/24 State: Running Events: <none> What's next Manage the power state of VMs in Google Distributed Cloud .
- The following example output shows the VM information: NAME STATUS AGE IP vm1 Running 7m 192 .168.2.72 View VM information If you want to view information about a specific VM in your cluster, use kubectl .
- View detailed information about a VM using kubectl describe gvm : kubectl describe gvm VM NAME --namespace NAMESPACE NAME Replace the following values: VM NAME : the name of your VM.

### "Connect to VMs that use VM Runtime on GDC \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- To verify the guest agent is working, check the status in your VM custom resource: kubectl get gvm VM NAME --kubeconfig KUBECONFIG When the guest agent is working, you see status: "True" for the GuestEnvironmentEnabled and GuestEnvironmentDataSynced conditions. apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachine metadata : ... name : vm-sample-01 ... status : conditions : - lastTransitionTime : "2022-10-05T22:40:26Z" message : "" observedGeneration : 1 reason : UserConfiguration status : "True" type : GuestEnvironmentEnabled - lastTransitionTime : "2022-10-06T21:55:57Z" message : "" observedGeneration : 1 reason : GuestEnvironmentDataSynced status : "True" type : GuestEnvironmentSynced ...
- To disable the guest agent: Use kubectl to stop your VM before you make changes to the configuration: kubectl virt stop VM NAME --kubeconfig KUBECONFIG Edit your VM resource: kubectl edit gvm VM NAME --kubeconfig KUBECONFIG Update the VirtualMachine configuration to add an empty spec.guestEnvironment explicitly: apiVersion : vm.cluster.gke.io/v1alpha1 kind : VirtualMachine metadata : name : vm-example namespace : default spec : compute : ... osType : Linux guestEnvironment : {} Save and close the updated VM manifest in your editor.
- To verify that your access request configuration succeeded, check the status of the VirtualMachineAccessRequest : kubectl get vmar VMAR NAME -o yaml --kubeconfig KUBECONFIG When the configuration is successful, the status section includes state: configured : apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachineAccessRequest metadata : ... annotations : kubectl.kubernetes.io/last-applied-configuration : {"apiVersion":"vm.cluster.gke.io/v1","kind":"VirtualMachineAccessRequest", "metadata":{"annotations":{},"name":"vmar-sample","namespace":"default"}, "spec":{"ssh":{"key":"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQ...jMLHFc= sample-user@sample-host","ttl":"5h"},"user":"sample-user","vm":"vm-sample-01"}} creationTimestamp : "2022-10-06T21:55:57Z" finalizers : - vm.cluster.gke.io/vmar-finalizer generation : 2 name : vmar-sample namespace : default resourceVersion : "13033921" uid : 282d72ad-f48d-4e89-af22-336940ac9f58 spec : ssh : key : ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQ...jMLHFc= sample-user@sample-host ttl : 5m0s user : sample-user vm : vm-sample-01 status : processedAt : "2022-10-06T21:55:57Z" state : configured Disable the guest agent When you create a new VM and set the osType field, the guest agent is enabled.
- After you confirm (or force) the password reset, the command returns the new password for the specified VM and username: Resetting and retrieving password for USERNAME on VM NAME vm name: VM NAME username: USERNAME password: PASSWORD What's next Manage the power state of a VM in Google Distributed Cloud .

