---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.739Z"
product_name: "VM Runtime on Google Distributed Cloud"
product_slug: "vm-runtime-on-google-distributed-cloud"
feature_name: "MIG controller resilience to Kubernetes API server failures"
feature_slug: "mig-controller-resilience-to-kubernetes-api-server-failures"
latest_feature_date: "2023-04-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/overview"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/create-storage-credentials"
keywords:
  - "mig"
  - "controller"
  - "resilience"
  - "to"
  - "kubernetes"
  - "api"
  - "server"
  - "failures"
---

# MIG controller resilience to Kubernetes API server failures

Product: VM Runtime on Google Distributed Cloud
Coverage: MEDIUM

## Step 02 Summary

Makes the MIG controller retry connections when the Kubernetes API server experiences temporary failures.

## Extended Definition

Makes the MIG controller retry connections when the Kubernetes API server experiences temporary failures.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/overview](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/overview)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/create-storage-credentials](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/create-storage-credentials)

## Supporting Pages

### "Tutorial: Deploy an existing VM in a cluster using VM Runtime on GDC \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm)
- Source ID: `site-docs-reference`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- If your cluster doesn't have this Ingress resource, create it by applying the following manifest: kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/anthos-samples/main/anthos-bm-gcp-terraform/resources/manifests/pos-ingress.yaml apiVersion : networking.k8s.io/v1 kind : Ingress metadata : name : pos-ingress spec : rules : - http : paths : - path : / pathType : Prefix backend : service : name : api-server-svc port : number : 8080 Create a Kubernetes Service that routes traffic to the VM.
- You don't have to do anything extra to make the Kubernetes Services reachable from the VMs deployed using VM Runtime on GDC. sudo systemctl status pos The following example output shows the status of the three services and root system service, pos.service : ● pos payments.service - Payments service of the Point of Sale Application Loaded: loaded ( /etc/systemd/system/pos payments.service ; enabled ; vendor > Active: active ( running ) since Tue 2022 -06-21 18 :55:30 UTC ; 1h 10min ago Main PID: 750 ( payments.sh ) Tasks: 27 ( limit: 4664 ) Memory: 295 .1M CGroup: /system.slice/pos payments.service ├─750 /bin/sh /pos/scripts/payments.sh └─760 java -jar /pos/jars/payments.jar --server.port = 8083 ● pos inventory.service - Inventory service of the Point of Sale Application Loaded: loaded ( /etc/systemd/system/pos inventory.service ; enabled ; vendor> Active: active ( running ) since Tue 2022 -06-21 18 :55:30 UTC ; 1h 10min ago Main PID: 749 ( inventory.sh ) Tasks: 27 ( limit: 4664 ) Memory: 272 .6M CGroup: /system.slice/pos inventory.service ├─749 /bin/sh /pos/scripts/inventory.sh └─759 java -jar /pos/jars/inventory.jar --server.port = 8082 ● pos.service - Point of Sale Application Loaded: loaded ( /etc/systemd/system/pos.service ; enabled ; vendor preset: e> Active: active ( exited ) since Tue 2022 -06-21 18 :55:30 UTC ; 1h 10min ago Main PID: 743 ( code = exited, status = 0 /SUCCESS ) Tasks: 0 ( limit: 4664 ) Memory: 0B CGroup: /system.slice/pos.service Jun 21 18 :55:30 pos-vm systemd [ 1 ] : Starting Point of Sale Application...
- The Ingress resource routes traffic to this Service : kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/anthos-samples/main/anthos-vmruntime/pos-service.yaml The following example output confirms the creation of a Service: service/api-server-svc created apiVersion : v1 kind : Service metadata : name : api-server-svc spec : selector : kubevirt/vm : pos-vm ports : - protocol : TCP port : 8080 targetPort : 8081 Get the external IP address of the Ingress load balancer.
- This resource routes the traffic from the external IP address of the Ingress Load Balancer to the API server service of the point of sale sample application.

### "Tutorial: Create and manage a Linux VM in VM Runtime on GDC \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Create a VirtualMachineDisk manifest, such as my-disk.yaml , in the editor of your choice: nano my-disk.yaml Copy and paste the following YAML definition: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachineDisk metadata : name : DISK NAME spec : size : 20Gi storageClassName : STORAGE CLASS NAME source : http : url : https://cloud-images.ubuntu.com/releases/focal/release/ubuntu-20.04-server-cloudimg-amd64.img Replace the following values: DISK NAME : the name that you want for your disk.
- To create a network that uses an external DHCP server, complete the following steps: Create a Network manifest, such as dhcp-network.yaml , in the editor of your choice: nano dhcp-network.yaml Copy and paste the following YAML manifest: apiVersion : networking.gke.io/v1 kind : Network metadata : name : NETWORK NAME spec : type : L2 nodeInterfaceMatcher : interfaceName : INTERFACE NAME externalDHCP4 : true Replace the following values: NETWORK NAME : the name for your network.
- All the nodes in your cluster can then connect to and use this NFS storage: apiVersion : storage.k8s.io/v1 kind : StorageClass metadata : name : example-nfs provisioner : nfs.csi.k8s.io parameters : server : nfs-server.example.com path : /vm-share reclaimPolicy : Delete volumeBindingMode : Immediate mountOptions : - nconnect=8 - nfsvers=4.1 In this tutorial, use the name of a StorageClass in your own cluster.
- Create the disk using kubectl : kubectl apply -f my-data-disk.yaml Use kubectl to stop your VM before you attach the new virtual disk: kubectl virt stop VM NAME Edit your VM resource: kubectl edit gvm VM NAME Update the VirtualMachine YAML manifest to attach the disk at the end of the VM's spec.disks section: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachine metadata : name : VM NAME spec : ... disks : - boot : true virtualMachineDiskName : DISK NAME - virtualMachineDiskName : DATA DISK NAME Replace DATA DISK NAME with the name of your disk created in the previous step.

### "VM Runtime on Google Distributed Cloud overview \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/overview](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/overview)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Kubevirt is built specifically for Kubernetes, and follows the declarative API model to use the Kubernetes Resource Model, custom resource definitions, or operators.
- When used with compatible storage, cluster upgrades include live migration of VM workloads ( Preview ) between hosts to minimize potential VM workload disruption.
- VM Runtime on GDC is a part of Google Distributed Cloud that lets you run VMs on top of Kubernetes in the same way that you run containers.
- The Google Cloud produccts Config Sync and Policy Controller can also be used to implement both GitOps methodology and granular policies.

### "Create and use credentials to import images from Cloud Storage for VM Runtime\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/create-storage-credentials](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/create-storage-credentials)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Apply the SecretForwarder manifest in the admin cluster using kubectl with the KUBECONFIG of the admin cluster: kubectl apply -f my-forwarded-secret.yaml Use a Secret to import an image To use the Secret to import an image from Cloud Storage when you create a virtual disk and VM, complete the following steps: Create a manifest that defines a VirtualMachineDisk and VirtualMachine , such as my-vm.yaml, in the editor of your choice: nano my-vm.yaml Copy and paste the following YAML definition: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachineDisk metadata : name : VM NAME -boot-dv spec : size : 20Gi source : gcs : url : IMAGE URL secretRef : SECRET NAME --- apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachine metadata : name : VM NAME spec : interfaces : - name : eth0 networkName : pod-network default : true disks : - boot : true virtualMachineDiskName : VM NAME -boot-dv Replace the following values: VM NAME - the name of your VM.
- To forward a Secret in the same cluster, complete the following steps: Create a SecretForwarder manifest, such as my-forwarded-secret.yaml , in the editor of your choice: nano my-forwarded-secret.yaml Copy and paste the following YAML manifest: apiVersion : baremetal.cluster.gke.io/v1 kind : SecretForwarder metadata : name : SECRET FORWARDER NAME namespace : NAMESPACE NAME spec : RemoteClusterTargetSecrets : name : TARGET SECRET NAME namespaces : - TARGET NAMESPACE NAME sourceSecret : name : SOURCE SECRET NAME namespace : SOURCE NAMESPACE NAME Replace the following values: SECRET FORWARDER NAME : the name for your SecretForwarder in the remote cluster.
- To forward a Secret in the same cluster, complete the following steps: Create a SecretForwarder manifest, such as my-forwarded-secret.yaml , in the editor of your choice: nano my-forwarded-secret.yaml Copy and paste the following YAML manifest: apiVersion : baremetal.cluster.gke.io/v1 kind : SecretForwarder metadata : name : SECRET FORWARDER NAME namespace : NAMESPACE NAME spec : inClusterTargetSecrets : name : TARGET SECRET NAME namespaces : - TARGET NAMESPACE NAME sourceSecret : name : SOURCE SECRET NAME namespace : SOURCE NAMESPACE NAME Replace the following values: SECRET FORWARDER NAME : the name for your SecretForwarder.
- Manifest Create a Secret manifest, such as my-secret.yaml , in the editor of your choice: nano my-secret.yaml Copy and paste the following YAML manifest: apiVersion : v1 data : creds-gcp.json : BASE64 SERVICE ACCOUNT FILE kind : Secret metadata : name : SECRET NAME namespace : NAMESPACE NAME type : Opaque Replace the following values: BASE64 SERVICE ACCOUNT FILE : the base64 hash of the contents of your service account key file.

