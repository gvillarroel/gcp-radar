---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.741Z"
product_name: "VM Runtime on Google Distributed Cloud"
product_slug: "vm-runtime-on-google-distributed-cloud"
feature_name: "Softening KubeVirt migration taints during cluster upgrades"
feature_slug: "softening-kubevirt-migration-taints-during-cluster-upgrades"
latest_feature_date: "2023-04-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/schedule-vms"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/eviction-policy"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/overview"
keywords:
  - "softening"
  - "kubevirt"
  - "migration"
  - "taints"
  - "during"
  - "cluster"
  - "upgrades"
  - "vm"
---

# Softening KubeVirt migration taints during cluster upgrades

Product: VM Runtime on Google Distributed Cloud
Coverage: MEDIUM

## Step 02 Summary

VM Runtime now uses soft migration taints for KubeVirt during upgrades to address issues in single-control-node upgrade scenarios.

## Extended Definition

VM Runtime now uses soft migration taints for KubeVirt during upgrades to address issues in single-control-node upgrade scenarios.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/schedule-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/schedule-vms)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/eviction-policy](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/eviction-policy)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/overview](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/overview)

## Supporting Pages

### "Schedule VMs that use VM Runtime on GDC \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/schedule-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/schedule-vms)
- Source ID: `site-docs-root`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a VirtualMachine manifest, such as my-scheduled-vm.yaml, in the editor of your choice: nano my-scheduled-vm.yaml Copy and paste the following YAML manifest: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachine metadata : name : VM NAME labels : KEY:VALUE spec : interfaces : - name : eth0 networkName : pod-network default : true disks : - virtualMachineDiskName : VM NAME -boot-dv boot : true scheduling : affinity : podAntiAffinity : preferredDuringSchedulingIgnoredDuringExecution : - weight : 100 podAffinityTerm : topologyKey : kubernetes.io/hostname labelSelector : matchLabels : KEY:VALUE Replace the following values: VM NAME : the name of your VM.
- Create a VirtualMachine manifest, such as my-scheduled-vm.yaml, in the editor of your choice: nano my-scheduled-vm.yaml Copy and paste the following YAML manifest: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachine metadata : name : VM NAME labels : KEY:VALUE spec : interfaces : - name : eth0 networkName : pod-network default : true disks : - virtualMachineDiskName : VM NAME -boot-dv boot : true scheduling : affinity : podAffinity : preferredDuringSchedulingIgnoredDuringExecution - podAffinityTerm : topologyKey : kubernetes.io/hostname labelSelector : matchLabels : KEY:VALUE weight : 100 Replace the following values: VM NAME : the name of your VM.
- Create a VirtualMachine manifest, such as my-scheduled-vm.yaml, in the editor of your choice: nano my-scheduled-vm.yaml Copy and paste the following YAML manifest: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachine metadata : name : V VM NAME spec : interfaces : - name : eth0 networkName : pod-network default : true disks : - virtualMachineDiskName : VM NAME -boot-dv boot : true scheduling : affinity : nodeAffinity : preferredDuringSchedulingIgnoredDuringExecution : - weight : 100 preference : matchExpressions : - key : kubernetes.io/hostname operator : NotIn values : - NODE NAME Replace the following values: VM NAME : the name of your VM.
- Create a VirtualMachine manifest, such as my-scheduled-vm.yaml, in the editor of your choice: nano my-scheduled-vm.yaml Copy and paste the following YAML manifest: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachine metadata : name : VM NAME spec : interfaces : - name : eth0 networkName : pod-network default : true disks : - virtualMachineDiskName : VM NAME -boot-dv boot : true scheduling : affinity : nodeAffinity : preferredDuringSchedulingIgnoredDuringExecution : - weight : 100 preference : matchExpressions : - key : kubernetes.io/hostname operator : In values : - NODE NAME Replace the following values: VM NAME : the name of your VM.

### "Configure the eviction policies for VMs in Google Distributed Cloud \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/eviction-policy](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/eviction-policy)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The cluster can retry the live migration up to 3 times, with a 30-second timeout on the process each time to start: apiVersion : vm.cluster.gke.io/v1 kind : VMRuntime metadata : name : vmruntime spec : disableCDIUploadProxyVIP : false enabled : true evictionPolicy : evictionStrategy : LiveMigrate maxMigrationAttemptsPerVM : 3 migrationTargetInitializationTimeout : 30s useEmulation : false Restart The following example eviction policy makes no attempt at migration for any VMs during eviction.
- Migration-based eviction for cluster upgrades is only supported for Google Distributed Cloud version 1.12 and higher.
- VM Runtime on GDC uses an eviction policy that controls how the cluster handles VMs that run during these events.
- To enable and configure the eviction policy, complete the following steps: Edit the VMRuntime custom resource: kubectl edit vmruntime vmruntime Add or update the evictionPolicy section with an empty object to use the default eviction policy settings, or add your desired settings: apiVersion : vm.cluster.gke.io/v1 kind : VMRuntime metadata : name : vmruntime spec : disableCDIUploadProxyVIP : false enabled : true evictionPolicy : {} useEmulation : false If the evictionPolicy isn't populated, such as evictionPolicy: null or isn't included in the manifest, no special action is taken.

### "Tutorial: Deploy an existing VM in a cluster using VM Runtime on GDC \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- The following example output shows the VMRuntime is ready: vmruntime.vm.cluster.gke.io/vmruntime condition met Install the virtctl plugin for kubectl : sudo -E bmctl install virtctl The following example output shows the virtctl plugin installation process is complete: Please check the logs at bmctl-workspace/log/install-virtctl-20220831-182135/install-virtctl.log [ 2022 -08-31 18 :21:35+0000 ] Install virtctl succeeded Verify installation of the virtctl plugin: kubectl virt The following example output shows that the virtctl plugin is available for use with kubectl : Available Commands: addvolume add a volume to a running VM completion generate the autocompletion script for the specified shell config Config subcommands. console Connect to a console of a virtual machine instance. create Create subcommands. delete Delete subcommands. ...
- If your cluster doesn't have this Ingress resource, create it by applying the following manifest: kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/anthos-samples/main/anthos-bm-gcp-terraform/resources/manifests/pos-ingress.yaml apiVersion : networking.k8s.io/v1 kind : Ingress metadata : name : pos-ingress spec : rules : - http : paths : - path : / pathType : Prefix backend : service : name : api-server-svc port : number : 8080 Create a Kubernetes Service that routes traffic to the VM.
- The Ingress resource routes traffic to this Service : kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/anthos-samples/main/anthos-vmruntime/pos-service.yaml The following example output confirms the creation of a Service: service/api-server-svc created apiVersion : v1 kind : Service metadata : name : api-server-svc spec : selector : kubevirt/vm : pos-vm ports : - protocol : TCP port : 8080 targetPort : 8081 Get the external IP address of the Ingress load balancer.
- Objectives Enable VM Runtime on GDC and install the virtctl plugin Deploy the VM-based workload Log in to the VM and check the application status Access the VM-based workload Before you begin To complete this document you need the following resources: Access to a version 1.12.0 or higher bare metal cluster that was created by following the Install with Manual Loadbalancer guide.

### "VM Runtime on Google Distributed Cloud overview \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/overview](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/overview)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- When used with compatible storage, cluster upgrades include live migration of VM workloads ( Preview ) between hosts to minimize potential VM workload disruption.
- Networking VM Runtime on GDC expands on the default pod-network offering of KubeVirt to provide networking options more suitable for production VM workloads .
- VM Runtime on GDC integrates Kubevirt into your Google Distributed Cloud software-only installation to give a consistent way to manage your applications.
- VMs run like they do in other virtualized environments, but benefit from a single set of workflows and processes for your applications in a cluster.

