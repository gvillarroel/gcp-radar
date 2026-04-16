---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.736Z"
product_name: "VM Runtime on Google Distributed Cloud"
product_slug: "vm-runtime-on-google-distributed-cloud"
feature_name: "virtctl snapshot command"
feature_slug: "virtctl-snapshot-command"
latest_feature_date: "2024-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm"
keywords:
  - "virtctl"
  - "snapshot"
  - "command"
  - "vm"
  - "runtime"
  - "now"
  - "supports"
  - "the"
---

# virtctl snapshot command

Product: VM Runtime on Google Distributed Cloud
Coverage: MEDIUM

## Step 02 Summary

VM Runtime now supports the `virtctl snapshot` command to collect VMRuntime logs for debugging.

## Extended Definition

VM Runtime now supports the `virtctl snapshot` command to collect VMRuntime logs for debugging.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm)

## Supporting Pages

### "Connect to VMs that use VM Runtime on GDC \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms)
- Source ID: `site-docs-reference`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you use the kubectl virt vnc command, VM Runtime on GDC opens VNC for you, so you aren't required to enable VNC in the guest OS.
- After you confirm (or force) the password reset, the command returns the new password for the specified VM and username: Resetting and retrieving password for USERNAME on VM NAME vm name: VM NAME username: USERNAME password: PASSWORD What's next Manage the power state of a VM in Google Distributed Cloud .
- After you have successfully connected using SSH the VM and no longer need the connection, exit the SSH session: exit Connect directly using the console If you don't have direct network connectivity to your Linux VM for SSH access, connect to the console of the VM using the VM Runtime on GDC console.
- After you've successfully connected to the console of the VM and no longer need the connection, exit the VM session and console: Ctrl + ] Connect directly using VNC You can use the kubectl virt vnc command to open the Virtual Network Computing (VNC) graphical console to access your VMs.

### "Tutorial: Deploy an existing VM in a cluster using VM Runtime on GDC \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm)
- Source ID: `site-docs-reference`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example output shows the VMRuntime is ready: vmruntime.vm.cluster.gke.io/vmruntime condition met Install the virtctl plugin for kubectl : sudo -E bmctl install virtctl The following example output shows the virtctl plugin installation process is complete: Please check the logs at bmctl-workspace/log/install-virtctl-20220831-182135/install-virtctl.log [ 2022 -08-31 18 :21:35+0000 ] Install virtctl succeeded Verify installation of the virtctl plugin: kubectl virt The following example output shows that the virtctl plugin is available for use with kubectl : Available Commands: addvolume add a volume to a running VM completion generate the autocompletion script for the specified shell config Config subcommands. console Connect to a console of a virtual machine instance. create Create subcommands. delete Delete subcommands. ...
- The ConfigMap defines the credentials for the MySQL instance, which are the same credentials passed into the point of sale application . kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/point-of-sale/main/k8-manifests/common/mysql-db.yaml Deploy the VM workload using the pre-prepared qcow2 image: kubectl virt create vm pos-vm \ --boot-disk-size = 80Gi \ --memory = 4Gi \ --vcpu = 2 \ --image = https://storage.googleapis.com/pos-vm-images/pos-vm.qcow2 This command creates a YAML file named after the VM ( google-virtctl/pos-vm.yaml ).
- Objectives Enable VM Runtime on GDC and install the virtctl plugin Deploy the VM-based workload Log in to the VM and check the application status Access the VM-based workload Before you begin To complete this document you need the following resources: Access to a version 1.12.0 or higher bare metal cluster that was created by following the Install with Manual Loadbalancer guide.
- When the command runs successfully, it produces an output like the following example that explains the different resources that were created: Constructing manifest for vm "pos-vm" : Manifest for vm "pos-vm" is saved to /home/tfadmin/google-virtctl/pos-vm.yaml Applying manifest for vm "pos-vm" Created gvm "pos-vm" Check the VM creation status.

### "Tutorial: Create and manage a Linux VM in VM Runtime on GDC \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm)
- Source ID: `site-docs-reference`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Objectives Configure basic dependencies Create a StorageClass for VM Runtime on GDC Create a virtual network for your VMs to use Create a virtual machine boot disk Create a VM Edit a VM to add a new virtual disk Before you begin To complete this tutorial, you need access to the following resources and tools: Access to Google Distributed Cloud version 1.12.0 ( anthosBareMetalVersion: 1.12.0 ) or higher cluster.
- Check the status of the VM with the kubectl command: kubectl get gvm VM NAME The following example output shows the VM in a Running state: NAME STATUS AGE IP MY VM Running 64s 192 .168.2.124 Connect to the VM When your VM is running, connect to the console of the VM.
- Create the disk using kubectl : kubectl apply -f my-disk.yaml Create a VM With a virtual network and boot disk created in the previous sections, now create a VM.
- This is the only network type that you can create in VM Runtime on GDC.

### "Edit VM configuration in VM Runtime on GDC \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm)
- Source ID: `site-docs-reference`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you have made label or scheduling changes for the VM prior to enabling the automatic restart feature, adding autoRestartOnConfigurationChange now without any other change doesn't trigger a restart.
- If your VM doesn't start after you make changes, use the kubectl describe gvm VM NAME command to view troubleshooting information and correct the errors.
- If you have made any other changes to the VM that need to be synchronized with the corresponding VM instance, VM Runtime on GDC restarts the VM.
- VM Runtime on GDC monitors the VM and, if it detects a configuration change, it restarts the VM automatically to sync the changes.

