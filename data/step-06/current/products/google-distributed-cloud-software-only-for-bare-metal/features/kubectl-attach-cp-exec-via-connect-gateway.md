---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.339Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "kubectl attach/cp/exec via Connect Gateway"
feature_slug: "kubectl-attach-cp-exec-via-connect-gateway"
latest_feature_date: "2024-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters"
keywords:
  - "kubectl"
  - "attach"
  - "cp"
  - "exec"
  - "via"
  - "connect"
  - "gateway"
  - "preview"
---

# kubectl attach/cp/exec via Connect Gateway

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

The connect gateway preview feature enables kubectl attach, cp, and exec commands through gcloud beta container fleet memberships get-credentials.

## Extended Definition

The connect gateway preview feature enables kubectl attach, cp, and exec commands through gcloud beta container fleet memberships get-credentials.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters)

## Supporting Pages

### "Create a user cluster using GKE On-Prem API clients \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api)
- Source ID: `site-docs-reference-2`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Command line access After the cluster is created, if you want to use the connect gateway to run kubectl against the user cluster on computers other than the admin workstation, install the following command-line tools on the computer that you plan to use.
- In this case, kubectl uses the Connect gateway's kubeconfig , which securely forwards the traffic to the private endpoint on your behalf.
- If you want to access the Google Kubernetes Engine pages in the console, you must also have the following roles: roles/container.viewer . roles/gkehub.viewer After the cluster is created, if your aren't a project owner and you want to use the connect gateway to connect to the user cluster by the command line, the following roles are required: roles/gkehub.gatewayAdmin : This role lets you access the Connect Gateway API.
- Connect gateway Either initialize the gcloud CLI for use with the fleet host project, or run the following commands to log in with your Google Account, set your fleet host project as the default, and update components: gcloud auth login gcloud config set project PROJECT ID gcloud components update Fetch the cluster credentials used to interact with connect gateway.

### "Cluster configuration field reference \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- This field also configures the RBAC policies that let the specified accounts use the connect gateway to run kubectl commands against the cluster.
- The following example shows a Prometheus configuration that uses basic authentication: apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : cluster1 namespace : cluster-cluster1 annotations : preview.baremetal.cluster.gke.io/vertical-pod-autoscaler : enable spec : ... other cluster spec fields verticalPodAutoscaling : ... # other vertical Pod autoscaling fields prometheus : url : "http://prometheus.prometheus.svc.cluster.local:9090" auth : basicAuth : usernameRef : name : prom-basic-creds key : username passwordRef : name : prom-basic-creds key : password For more information, see Use Prometheus as a persistent history provider .
- For example: apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : cluster1 namespace : cluster-cluster1 annotations : preview.baremetal.cluster.gke.io/metrics-adapter : "true" spec : ... other existing cluster configurations ... metricsAdapter : prometheus : url : "http://prometheus-k8s.monitoring.svc.cluster.local:9090" orgID : "production-environment" auth : configSecretRef : name : prometheus-auth-secret key : config rules : configMapKeyRefs : - name : my-app-rules key : config.yaml Cluster resource Optional Mutable metricsAdapter.prometheus Optional.
- For example: gcrKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-gcr.json sshPrivateKeyPath : /home/root-user/.ssh/id rsa gkeConnectAgentServiceAccountKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-connect.json gkeConnectRegisterServiceAccountKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-register.json cloudOperationsServiceAccountKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-cloud-ops.json Credentials Optional Mutable gcrKeyPath String.

### "Update clusters \_|\_ Google Distributed Cloud (software only) for bare\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Note that the annotation preview.baremetal.cluster.gke.io/custom-kubelet: "enable" is required. apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : cluster1 namespace : cluster-cluster1 annotations : preview.baremetal.cluster.gke.io/custom-kubelet : "enable" spec : ... controlPlane : nodePoolSpec : kubeletConfig : registryBurst : 10 registryPullQPS : 5 serializeImagePulls : true ... loadBalancer : nodePoolSpec : kubeletConfig : registryBurst : 10 registryPullQPS : 5 serializeImagePulls : true ... apiVersion : baremetal.cluster.gke.io/v1 kind : NodePool metadata : name : node-pool-new namespace : cluster-cluster1 spec : clusterName : cluster1 ... kubeletConfig : registryBurst : 10 registryPullQPS : 5 serializeImagePulls : true In each case, the setting applies to all nodes in the pool. gcloud CLI The following flags control Artifact Registry pull operations for kubelet: Control plane nodes --control-plane-registry-burst --control-plane-registry-pull-qps --disable-control-plane-serialize-image-pulls --enable-control-plane-serialize-image-pulls Load balancer nodes --bgp-load-balancer-registry-burst --bgp-load-balancer-registry-pull-qps --disable-bgp-load-balancer-serialize-image-pulls --enable-bgp-load-balancer-serialize-image-pulls --metal-lb-load-balancer-registry-burst --metal-lb-load-balancer-registry-pull-qps --disable-metal-lb-load-balancer-serialize-image-pull --enable-metal-lb-load-balancer-serialize-image-pulls Worker nodes --registry-burst --registry-pull-qps --disable-serialize-image-pulls --enable-serialize-image-pulls Warning: Setting the -registryburst or -registry-pull-qps flags to a negative value results in update job failures for the kubelet configuration.
- To check the status of your cluster bare metal machines, use the following command: kubectl get baremetalmachines --kubeconfig ADMIN KUBECONFIG -A When the bare metal machines are ready, the response should look similar to the following sample response: NAMESPACE NAME CLUSTER READY INSTANCEID MACHINE ABM VERSION DESIRED ABM VERSION cluster-admin 10.200.0.2 dra true baremetal://10.200.0.2 10.200.0.2 1.33.0-gke.793 1.33.0-gke.793 cluster-user-dra 10.200.0.6 user-dra true baremetal://10.200.0.6 10.200.0.6 1.33.0-gke.793 1.33.0-gke.793 cluster-user-dra 10.200.0.7 user-dra true baremetal://10.200.0.7 10.200.0.7 1.33.0-gke.793 1.33.0-gke.793 cluster-user-dra 10.200.0.8 user-dra true baremetal://10.200.0.8 10.200.0.8 1.33.0-gke.793 1.33.0-gke.793 Limitations The bundled NVIDIA GPU Operator has the following limitations: The bundled NVIDIA GPU Operator supports the following NVIDIA software components only: NVIDIA Container Toolkit NVIDIA DCGM Exporter NVIDIA Kubernetes Device Plugin NVIDIA MIG Manager for Kubernetes.
- Configure your cluster to enable dynamic resource allocation: Edit your cluster configuration file to include the preview.baremetal.cluster.gke.io/dynamic-resource-allocation: "enable" preview annotation and add DynamicResourceAllocation: true under featureGates in the kubeletConfig section: apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : dra namespace : cluster-dra annotations : preview.baremetal.cluster.gke.io/dynamic-resource-allocation : "enable" spec : controlPlane : nodePoolSpec : kubeletConfig : featureGates : DynamicResourceAllocation : true ... other cluster configuration Update the cluster by running the bmctl update command: bmctl update cluster -c CLUSTER NAME \ --kubeconfig = ADMIN KUBECONFIG Replace the following: CLUSTER NAME : the ame of the user cluster you are updating.
- The following example shows how to specify keepalivedVRRPGARPMasterRepeat in the cluster configuration file: apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : hybrid-ha-lb namespace : cluster-hybrid-ha-lb spec : type : hybrid profile : default anthosBareMetalVersion : 1.34 gkeConnect : projectID : project-fleet controlPlane : loadBalancer : keepalivedVRRPGARPMasterRepeat : 1 nodePoolSpec : nodes : - address : 10.200.0.2 - address : 10.200.0.3 - address : 10.200.0.4 ...

