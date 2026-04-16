---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.738Z"
product_name: "VM Runtime on Google Distributed Cloud"
product_slug: "vm-runtime-on-google-distributed-cloud"
feature_name: "Live VM CD-ROM hot-plug and ejection"
feature_slug: "live-vm-cd-rom-hot-plug-and-ejection"
latest_feature_date: "2023-08-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/create-storage-credentials"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/windows-vm"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm"
keywords:
  - "live"
  - "vm"
  - "cd"
  - "rom"
  - "hot"
  - "plug"
  - "and"
  - "ejection"
---

# Live VM CD-ROM hot-plug and ejection

Product: VM Runtime on Google Distributed Cloud
Coverage: MEDIUM

## Step 02 Summary

Added support for inserting and ejecting CD-ROM devices on running virtual machines without interruption, including use of pre-open slots for later insertion.

## Extended Definition

Added support for inserting and ejecting CD-ROM devices on running virtual machines without interruption, including use of pre-open slots for later insertion.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/create-storage-credentials](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/create-storage-credentials)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/windows-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/windows-vm)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm)

## Supporting Pages

### "Create and use credentials to import images from Cloud Storage for VM Runtime\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/create-storage-credentials](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/create-storage-credentials)
- Source ID: `site-docs-reference`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A Cloud Storage plugin lets you use Containerized Data Importer (CDI) to import VM images from Cloud Storage buckets.
- Apply the SecretForwarder manifest in the admin cluster using kubectl with the KUBECONFIG of the admin cluster: kubectl apply -f my-forwarded-secret.yaml Use a Secret to import an image To use the Secret to import an image from Cloud Storage when you create a virtual disk and VM, complete the following steps: Create a manifest that defines a VirtualMachineDisk and VirtualMachine , such as my-vm.yaml, in the editor of your choice: nano my-vm.yaml Copy and paste the following YAML definition: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachineDisk metadata : name : VM NAME -boot-dv spec : size : 20Gi source : gcs : url : IMAGE URL secretRef : SECRET NAME --- apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachine metadata : name : VM NAME spec : interfaces : - name : eth0 networkName : pod-network default : true disks : - boot : true virtualMachineDiskName : VM NAME -boot-dv Replace the following values: VM NAME - the name of your VM.
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Create and use credentials to import images from Cloud Storage for VM Runtime on GDC Stay organized with collections Save and categorize content based on your preferences.
- You can then create virtual disks from these images in Cloud Storage and attach them to VMs that run in your cluster.

### "Create a Windows VM from ISO image in Google Distributed Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/windows-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/windows-vm)
- Source ID: `site-docs-root`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To provide the virtio drivers to the VM, complete the following steps: Create a VirtualMachineDisk manifest, such as virtio-driver.yaml , in the editor of your choice: nano virtio-driver.yaml Copy and paste the following YAML manifest: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachineDisk metadata : name : virtio-driver spec : size : 1Gi source : registry : url : docker://quay.io/kubevirt/virtio-container-disk:latest diskType : cdrom This manifest pulls the latest virtio drivers from a public Docker repo and sets the diskType as cdrom .
- Create a VirtualMachineDisk manifest, such as windows-iso.yaml , in the editor of your choice: nano windows-iso.yaml Copy and paste the following YAML manifest: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachineDisk metadata : name : windows-iso spec : source : http : url : IMG URL size : 10Gi diskType : cdrom Replace IMG URL with the HTTP path to your Windows ISO.
- Create the VirtualMachineDisk using kubectl : kubectl apply -f virtio-driver.yaml Create a Windows VM Create a VM that boots from the Windows ISO VirtualMachineDisk , and attaches the virtio drivers disk: Create a manifest that defines a VirtualMachineDisk for the boot volume and a VirtualMachine , such as windows-vm.yaml , in the editor of your choice: nano windows-vm.yaml Copy and paste the following YAML manifest: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachineDisk metadata : name : VM NAME -boot-dv spec : size : 100Gi --- apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachine metadata : name : VM NAME spec : osType : Windows disks : - virtualMachineDiskName : VM NAME -boot-dv boot : true - virtualMachineDiskName : windows-iso - virtualMachineDiskName : virtio-driver compute : cpu : vcpus : 2 memory : capacity : 4Gi interfaces : - name : eth0 networkName : pod-network Replace VM NAME with the name that you want for your VM.
- Detach the ISO image and drivers disk After the Windows install is complete, remove the virtio drivers disk and Windows ISO image from the VM: Stop your Windows VM: kubectl virt stop VM NAME Replace VM NAME with the name of your Windows VM.

### "Tutorial: Deploy an existing VM in a cluster using VM Runtime on GDC \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm)
- Source ID: `site-docs-reference`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You don't have to do anything extra to make the Kubernetes Services reachable from the VMs deployed using VM Runtime on GDC. sudo systemctl status pos The following example output shows the status of the three services and root system service, pos.service : ● pos payments.service - Payments service of the Point of Sale Application Loaded: loaded ( /etc/systemd/system/pos payments.service ; enabled ; vendor > Active: active ( running ) since Tue 2022 -06-21 18 :55:30 UTC ; 1h 10min ago Main PID: 750 ( payments.sh ) Tasks: 27 ( limit: 4664 ) Memory: 295 .1M CGroup: /system.slice/pos payments.service ├─750 /bin/sh /pos/scripts/payments.sh └─760 java -jar /pos/jars/payments.jar --server.port = 8083 ● pos inventory.service - Inventory service of the Point of Sale Application Loaded: loaded ( /etc/systemd/system/pos inventory.service ; enabled ; vendor> Active: active ( running ) since Tue 2022 -06-21 18 :55:30 UTC ; 1h 10min ago Main PID: 749 ( inventory.sh ) Tasks: 27 ( limit: 4664 ) Memory: 272 .6M CGroup: /system.slice/pos inventory.service ├─749 /bin/sh /pos/scripts/inventory.sh └─759 java -jar /pos/jars/inventory.jar --server.port = 8082 ● pos.service - Point of Sale Application Loaded: loaded ( /etc/systemd/system/pos.service ; enabled ; vendor preset: e> Active: active ( exited ) since Tue 2022 -06-21 18 :55:30 UTC ; 1h 10min ago Main PID: 743 ( code = exited, status = 0 /SUCCESS ) Tasks: 0 ( limit: 4664 ) Memory: 0B CGroup: /system.slice/pos.service Jun 21 18 :55:30 pos-vm systemd [ 1 ] : Starting Point of Sale Application...
- The following example output shows the VMRuntime is ready: vmruntime.vm.cluster.gke.io/vmruntime condition met Install the virtctl plugin for kubectl : sudo -E bmctl install virtctl The following example output shows the virtctl plugin installation process is complete: Please check the logs at bmctl-workspace/log/install-virtctl-20220831-182135/install-virtctl.log [ 2022 -08-31 18 :21:35+0000 ] Install virtctl succeeded Verify installation of the virtctl plugin: kubectl virt The following example output shows that the virtctl plugin is available for use with kubectl : Available Commands: addvolume add a volume to a running VM completion generate the autocompletion script for the specified shell config Config subcommands. console Connect to a console of a virtual machine instance. create Create subcommands. delete Delete subcommands. ...
- Objectives Enable VM Runtime on GDC and install the virtctl plugin Deploy the VM-based workload Log in to the VM and check the application status Access the VM-based workload Before you begin To complete this document you need the following resources: Access to a version 1.12.0 or higher bare metal cluster that was created by following the Install with Manual Loadbalancer guide.
- Run the following command and press Enter⏎ after you see the Successfully connected to pos-vm… message: kubectl virt console pos-vm This command produces the following example output that prompts you to input the login details: Successfully connected to pos-vm console.

### "Tutorial: Create and manage a Linux VM in VM Runtime on GDC \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The VM connects to the virtual network, and boots from the virtual disk.
- Use kubectl to start the VM: kubectl virt start VM NAME Clean up To delete the resources created in this tutorial, complete the following steps: Delete your VM: kubectl delete -f my-vm.yaml Delete your VirtualMachineDisk resources: kubectl delete -f my-data-disk.yaml kubectl delete -f my-disk.yaml If you don't want to keep the basic dependencies in your cluster, complete the following steps: Delete your virtual network: kubectl delete -f use-dhcp-network.yaml To remove the CSI driver from your cluster, follow the instructions from your storage partner.
- Create a manifest that defines a VirtualMachine , such as my-vm.yaml , in the editor of your choice: nano my-vm.yaml Copy and paste the following YAML definition: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachine metadata : name : VM NAME spec : osType : linux compute : cpu : vcpus : VCPU NUMBER memory : capacity : MEMORY SIZE interfaces : - name : eth0 networkName : NETWORK NAME default : true disks : - boot : true virtualMachineDiskName : DISK NAME Replace the following values: VM NAME : the name for your VM.
- Create a VirtualMachineDisk manifest, such as my-disk.yaml , in the editor of your choice: nano my-disk.yaml Copy and paste the following YAML definition: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachineDisk metadata : name : DISK NAME spec : size : 20Gi storageClassName : STORAGE CLASS NAME source : http : url : https://cloud-images.ubuntu.com/releases/focal/release/ubuntu-20.04-server-cloudimg-amd64.img Replace the following values: DISK NAME : the name that you want for your disk.

