---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.807Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Random host port assignment in Autopilot Pods"
feature_slug: "random-host-port-assignment-in-autopilot-pods"
latest_feature_date: "2023-01-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port"
keywords:
  - "random"
  - "host"
  - "port"
  - "assignment"
  - "autopilot"
  - "pods"
  - "gke"
  - "now"
---

# Random host port assignment in Autopilot Pods

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE Autopilot now supports exposing randomly assigned host ports in Pods.

## Extended Definition

GKE Autopilot now supports exposing randomly assigned host ports in Pods.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port)

## Supporting Pages

### GKE Autopilot security measures \_|\_ GKE security \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security)
- Source ID: `site-iam-reference`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can manually set up random host port assignment from a known range to support direct-connection networking applications such as game servers.
- Pod-level security policy enforcement Autopilot supports enforcement mechanisms for Pod-level security policies such as the PodSecurity admission controller , Gatekeeper , or Policy Controller .
- Volume types Autopilot allows only the volume types in the Restricted policy with the following additions: HostPath volumes with read-only access to /var/log for debugging, gcePersistentDisk for Compute Engine persistent disks, and nfs for network file system volumes.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE security Send feedback GKE Autopilot security measures Stay organized with collections Save and categorize content based on your preferences.

### "Disable the kubelet read-only port in GKE clusters \_|\_ GKE security \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port)
- Source ID: `site-iam-reference`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To update this Pod to use the secure port 10250 , do the following steps: Create a ClusterRole with access to get node metrics: apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : name : curl-authenticated-role rules : Grant access to read node metrics in the cluster. - apiGroups : - "" resources : - nodes/metrics verbs : - get Bind the ClusterRole to your application's identity: apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRoleBinding metadata : name : curl-authenticated-role-binding roleRef : apiGroup : rbac.authorization.k8s.io kind : ClusterRole name : curl-authenticated-role Bind the ClusterRole to the default ServiceAccount in the default namespace. subjects : - kind : ServiceAccount name : default namespace : default Update the curl command to use the secure port endpoint with the corresponding authorization headers: apiVersion : v1 kind : Pod metadata : name : kubelet-authenticated-example spec : restartPolicy : Never containers : - name : kubelet-readonly-example image : us-docker.pkg.dev/cloud-builders/ga/v1/curl:latest env : - name : NODE ADDRESS valueFrom : fieldRef : fieldPath : status.hostIP Update the command to send a request with the ServiceAccount credentials in the header. command : - sh - -c - 'curl -s --cacert /var/run/secrets/kubernetes.io/serviceaccount/ca.crt -H "Authorization: Bearer $(cat /var/run/secrets/kubernetes.io/serviceaccount/token)" https://${NODE ADDRESS}:10250/metrics' Modify VPC firewall rules If you update workloads to use port 10250 , create firewall rules so that Pods in the cluster can reach the port in your node IP address ranges.
- If your workload uses the /pods endpoint on the insecure kubelet read-only port, you need to grant the nodes/proxy RBAC permission to access the endpoint on the secure kubelet port. nodes/proxy is a powerful permission that you can't grant in GKE Autopilot clusters and that you shouldn't grant in GKE Standard clusters.
- Save the following manifest as read-only-port-metrics.yaml : Create a namespace for the DaemonSet that checks for port usage. apiVersion : v1 kind : Namespace metadata : name : node-metrics-printer-namespace --- Grant access to read node metrics in the cluster. apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : name : node-metrics-printer-role rules : - apiGroups : - "" resources : - nodes/metrics verbs : - get --- apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRoleBinding metadata : name : node-metrics-printer-binding roleRef : apiGroup : rbac.authorization.k8s.io kind : ClusterRole name : node-metrics-printer-role Bind the ClusterRole to the ServiceAccount that the DaemonSet will use. subjects : - kind : ServiceAccount name : node-metrics-printer-sa namespace : node-metrics-printer-namespace --- Create a ServiceAccount for the DaemonSet. apiVersion : v1 kind : ServiceAccount metadata : name : node-metrics-printer-sa namespace : node-metrics-printer-namespace --- apiVersion : apps/v1 kind : DaemonSet metadata : name : node-metrics-printer namespace : node-metrics-printer-namespace spec : selector : matchLabels : app : node-metrics-printer template : metadata : labels : app : node-metrics-printer spec : Assign the ServiceAccount to the DaemonSet. serviceAccountName : node-metrics-printer-sa containers : - name : metrics-printer image : us-docker.pkg.dev/cloud-builders/ga/v1/curl:latest command : [ "sh" , "-c" ] Call the /metrics endpoint using the insecure kubelet read-only port. args : - 'while true; do curl -s --cacert "${CA CERT}" -H "Authorization: Bearer $(cat ${TOKEN FILE})" "https://${NODE ADDRESS}:10250/metrics" grep kubelet http requests total; sleep 20; done' env : Provide credentials and the IP address for the command. - name : CA CERT value : /var/run/secrets/kubernetes.io/serviceaccount/ca.crt - name : TOKEN FILE value : /var/run/secrets/kubernetes.io/serviceaccount/token - name : NODE ADDRESS valueFrom : fieldRef : fieldPath : status.hostIP This manifest does the following: Creates a namespace and sets up RBAC roles to allow reading node metrics.
- It is recommended to migrate to port 10250 for enhanced security." else echo "Info: The configuration file ( $resource type : $namespace / $resource name ) is not using insecure port 10255." fi } Get the list of ConfigMaps with their namespaces configmaps = $( kubectl get configmaps -A -o custom-columns = NAMESPACE:.metadata.namespace,NAME:.metadata.name tail -n +2 awk '{print $1"/"$2}' ) Iterate over each ConfigMap for configmap in $configmaps ; do namespace = $( echo $configmap cut -d/ -f1 ) configmap name = $( echo $configmap cut -d/ -f2 ) isUsingInsecurePort "configmap" " $configmap name " " $namespace " done Get the list of Pods with their namespaces pods = $( kubectl get pods -A -o custom-columns = NAMESPACE:.metadata.namespace,NAME:.metadata.name tail -n +2 awk '{print $1"/"$2}' ) Iterate over each Pod for pod in $pods ; do namespace = $( echo $pod cut -d/ -f1 ) pod name = $( echo $pod cut -d/ -f2 ) isUsingInsecurePort "pod" " $pod name " " $namespace " done Once you've identified the relevant workloads, migrate them to use the secure port 10250 by completing the steps in the following section.

### Deploy GPU workloads in Autopilot \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)
- Source ID: `site-docs-reference-2`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- GPU use cases in Autopilot You can allocate GPUs to containers in Autopilot Pods to facilitate workloads such as the following: Machine learning (ML) inference ML training Rendering Supported GPU quantities When you request GPUs in your Pod specification, you must use the following quantities based on the GPU type: GPU quantities NVIDIA B200 (180GB) nvidia-b200 8 NVIDIA H200 (141GB) nvidia-h200-141gb 8 NVIDIA H100 Mega (80GB) nvidia-h100-mega-80gb 8 NVIDIA H100 (80GB) nvidia-h100-80gb 1, 2, 4, 8 NVIDIA A100 (80GB) nvidia-a100-80gb 1, 2, 4, 8 NVIDIA A100 (40GB) nvidia-tesla-a100 1, 2, 4, 8, 16 NVIDIA RTX PRO 6000 nvidia-rtx-pro-6000 1, 2, 4, 8 NVIDIA L4 nvidia-l4 1, 2, 4, 8 NVIDIA T4 nvidia-tesla-t4 1, 2, 4 Note: Autopilot supports the smaller machine shapes of 1, 2, and 4 GPUs for NVIDIA H100 (80GB) GPUs on version 1.31.4-gke.1072000 or later.
- Ensure that you have a GKE Autopilot cluster running one of the following versions to use the following GPUs or features: NVIDIA B200 (180 GB) GPUs: 1.32.2-gke.1422000 or later NVIDIA H200 (141GB) GPUs: 1.31.4-gke.1183000 or later NVIDIA H100 Mega (80GB) GPUs: 1.28.9-gke.1250000 or later, and 1.29.4-gke.1542000 or later NVIDIA H100 (80GB) GPUs: 1.28.6-gke.1369000 or later, and 1.29.1-gke.1575000 or later NVIDIA RTX PRO 6000 GPUs: 1.34.1-gke.1829001 or later (except for G4 machine types that have less than one GPU, see the limitations ) Multiple GPU Pods per VM: 1.29.2-gke.1355000 or later Other GPUs: all supported versions Note: For GKE Sandbox GPU clusters, see GPU model support for gVisor compatibility.
- Accelerator compatibility with GKE capabilities The following table shows the compatible GKE capabilities for each method of selecting accelerators in GKE Autopilot: Accelerator compute class selected Compatibility with GKE capabilities Spot Pods Compute flexible committed use discounts (CUDs) for the Autopilot premium Compute Engine CUDs for the node hardware Compute Engine capacity reservations GKE Sandbox Spot Pods Autopilot committed use discounts (CUDs) for regular Pods Caution: Autopilot committed use discounts (CUDs) are no longer available for purchase.
- Placing multiple Pods on a single GPU node is useful in situations like the following: You have capacity reservations for large Accelerator machine types and you run single-GPU workloads, so deploying one Pod per node would waste the other GPUs on that machine You have GPU workloads that must run on the same host In these situations, we recommend that you use all of the GPUs on the node by ensuring that the sum of Pod GPU resource requests on the node is equal to the number of GPUs attached to the node.

