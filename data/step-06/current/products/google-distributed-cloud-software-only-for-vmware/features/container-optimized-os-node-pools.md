---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.190Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Container-Optimized OS node pools"
feature_slug: "container-optimized-os-node-pools"
latest_feature_date: "2021-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools"
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd"
keywords:
  - "container"
  - "optimized"
  - "os"
  - "node"
  - "pools"
  - "you"
  - "can"
  - "create"
---

# Container-Optimized OS node pools

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

You can create node pools with Container-Optimized OS.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, a node pool can use Container-Optimized OS (COS) as its Linux node image in a user cluster; a user cluster that includes Windows Server OS node pools can also run node pools using Ubuntu or Container-Optimized OS. For containerd-based node pools, Linux node pools are configured in the user cluster config with an `osImageType` value of `cos` (or `ubuntu containerd`), indicating COS is an officially supported OS image choice for these node pools.

## Evidence Summary

The pages confirm COS/Container-Optimized OS is a supported user cluster node image type (including mixed OS pools) and show how COS appears in node pool OS image configuration for containerd-based clusters.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd)

## Supporting Pages

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- The user cluster that runs the Windows Server OS node pools can also run node pools that contain nodes using Ubuntu or Container-Optimized OS.
- To complete these tasks, run the following commands: Pull the Windows container images docker pull gcr.io/gke-on-prem-release/pause-win:gke windows pause 20210302 RC00 2019 docker pull gcr.io/gke-on-prem-release/fluent-bit-win:v1.8.3-gke.1 ltsc2019 docker pull gcr.io/gke-on-prem-release/gke-metrics-agent-windows:0.3.10-gke.0 2019 Tag the images to use private registry docker tag gcr.io/gke-on-prem-release/pause-win:gke windows pause 20210302 RC00 2019 $PRIVATE REGISTRY URL/pause-win:gke windows pause 20210302 RC00 2019 docker tag gcr.io/gke-on-prem-release/fluent-bit-win:v1.8.3-gke.1 ltsc2019 $PRIVATE REGISTRY URL/fluent-bit-win:v1.8.3-gke.1 ltsc2019 docker tag gcr.io/gke-on-prem-release/gke-metrics-agent-windows:0.3.10-gke.0 2019 $PRIVATE REGISTRY URL/gke-metrics-agent-windows:0.3.10-gke.0 2019 Push to private registry docker push PRIVATE REGISTRY URL /pause-win:gke windows pause 20210302 RC00 2019 docker push PRIVATE REGISTRY URL /fluent-bit-win:v1.8.3-gke.1 ltsc2019 docker push PRIVATE REGISTRY URL /gke-metrics-agent-windows:0.3.10-gke.0 2019 Step 3: (Required if using proxy) Allowlisting URLs for creating Windows node pools If your cluster is behind a proxy server, add these URLs to your proxy server allowlist in addition to the other addresses that Google Distributed Cloud requires.
- Create an IIS file named iis.yaml with the following content: apiVersion: apps/v1 kind: Deployment metadata: name: iis labels: app: iis spec: replicas: 1 selector: matchLabels: app: iis template: metadata: labels: app: iis spec: nodeSelector: kubernetes.io/os: windows containers: - name: iis-server image: mcr.microsoft.com/windows/servercore/iis ports: - containerPort: 80 --- apiVersion: v1 kind: Service metadata: labels: app: iis name: iis spec: ports: - port: 80 protocol: TCP targetPort: 80 selector: app: iis sessionAffinity: None type: LoadBalancer loadBalancerIP: [Fill in with an available IP address] Step 2: Create the deployment and expose it via a service Create the deployment kubectl --kubeconfig USER CLUSTER KUBECONFIG create -f iis.yaml Step 3: Validate the Pod Check the status of the Pod using kubectl . kubectl --kubeconfig USER CLUSTER KUBECONFIG get pods Wait until the returned output shows that the Pod has a status of "Running".
- To schedule Windows Server containers on Windows Server nodes, your manifest file must include this nodeSelector section: nodeSelector: kubernetes.io/os: windows With nodeSelector configured, an admission webhook running in the cluster checks new workloads for the presence of this Windows node selector and when found, applies the following toleration to the workload which allows it to run on the tainted Windows Server nodes: tolerations: - key: "node.kubernetes.io/os" operator: "Equal" value: "windows" effect: "NoSchedule" Step 1: Create an Internet Information Services (IIS) deployment file Here is a sample configuration, which deploys Microsoft's official IIS image to a single Pod.

### "Using containerd for the container runtime \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd)
- Source ID: `site-docs-reference-2`
- Final score: 157
- Re-rank relevance: STRONG
- Re-rank rationale: The document identifies containerd COS as a supported OS image type for user cluster nodes, which directly defines COS node pool support.

Evidence snippets:
- Example: nodePools - name: "my-node-pool" osImageType: "ubuntu containerd" Update the user cluster: gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Replace the following: ADMIN CLUSTER KUBECONFIG : the path of the admin custer kubeconfig file USER CLUSTER CONFIG : the path of the user cluster configuration file Update Windows nodes to use containerd In the user cluster configuration file, set enableWindowsDataplaneV2 to true . enableWindowsDataplaneV2: true Update the user cluster: gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG The preceding command sets the container runtime to containerd for all Windows nodes in the cluster.
- Update Linux node pools to use containerd For each node pool in the user cluster configuration file, set osImageType ubuntu containerd or cos .
- Example output: ubuntu-node-pool-1 ubuntu-node-pool-3 Windows All Windows node pools in a user cluster use the same container runtime.
- Support for containerd in a user cluster Google Distributed Cloud supports the following OS image types for user cluster nodes: OS image type Container runtime ubuntu containerd containerd cos containerd windows containerd Restrictions and recommendations Starting in version 1.13.0, Google Distributed Cloud no longer supports the ubuntu OS image type.

### "Using containerd for the container runtime \_|\_ Google Distributed Cloud\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd)
- Source ID: `site-docs-reference-3`
- Final score: 157
- Re-rank relevance: STRONG
- Re-rank rationale: The document identifies COS as a supported OS image type for user cluster node pools in the container runtime section.

Evidence snippets:
- Example: nodePools - name: "my-node-pool" osImageType: "ubuntu containerd" Update the user cluster: gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Replace the following: ADMIN CLUSTER KUBECONFIG : the path of the admin custer kubeconfig file USER CLUSTER CONFIG : the path of the user cluster configuration file Update Windows nodes to use containerd In the user cluster configuration file, set enableWindowsDataplaneV2 to true . enableWindowsDataplaneV2: true Update the user cluster: gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG The preceding command sets the container runtime to containerd for all Windows nodes in the cluster.
- Update Linux node pools to use containerd For each node pool in the user cluster configuration file, set osImageType ubuntu containerd or cos .
- Example output: ubuntu-node-pool-1 ubuntu-node-pool-3 Windows All Windows node pools in a user cluster use the same container runtime.
- Support for containerd in a user cluster Google Distributed Cloud supports the following OS image types for user cluster nodes: OS image type Container runtime ubuntu containerd containerd cos containerd windows containerd Restrictions and recommendations Starting in version 1.13.0, Google Distributed Cloud no longer supports the ubuntu OS image type.

