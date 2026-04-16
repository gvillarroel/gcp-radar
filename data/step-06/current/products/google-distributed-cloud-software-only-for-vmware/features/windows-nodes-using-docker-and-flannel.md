---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.166Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Windows nodes using Docker and Flannel"
feature_slug: "windows-nodes-using-docker-and-flannel"
latest_feature_date: "2022-04-27"
deprecation_date: "2022-04-27"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd"
keywords:
  - "windows"
  - "nodes"
  - "docker"
  - "flannel"
  - "will"
  - "removed"
  - "subsequent"
  - "version"
---

# Windows nodes using Docker and Flannel

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Docker and Flannel on Windows nodes will be removed in a subsequent version; deprecated on 2022-04-27.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, Windows node pools can be configured to run with Docker Engine (identified when `enableWindowsDataplaneV2` is false), which applies to all Windows nodes in the cluster. Google’s docs state that Docker and Flannel on Windows nodes are deprecated and will be removed in a later release, so this Windows container networking/runtime setup is considered deprecated. If evidence is read strictly from the provided excerpts, the exact removal version is not specified.

## Evidence Summary

The cited pages confirm the deprecation announcement for Windows Docker/Flannel, describe Docker Engine usage for Windows nodes, and provide upgrade/deprecation-adjacent constraints (including the `enableWindowsDataplaneV2=false` signal) needed to recognize this deprecated path.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd)

## Supporting Pages

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Docker and Flannel for Windows nodes will be deprecated in a subsequent release.
- Create an IIS file named iis.yaml with the following content: apiVersion: apps/v1 kind: Deployment metadata: name: iis labels: app: iis spec: replicas: 1 selector: matchLabels: app: iis template: metadata: labels: app: iis spec: nodeSelector: kubernetes.io/os: windows containers: - name: iis-server image: mcr.microsoft.com/windows/servercore/iis ports: - containerPort: 80 --- apiVersion: v1 kind: Service metadata: labels: app: iis name: iis spec: ports: - port: 80 protocol: TCP targetPort: 80 selector: app: iis sessionAffinity: None type: LoadBalancer loadBalancerIP: [Fill in with an available IP address] Step 2: Create the deployment and expose it via a service Create the deployment kubectl --kubeconfig USER CLUSTER KUBECONFIG create -f iis.yaml Step 3: Validate the Pod Check the status of the Pod using kubectl . kubectl --kubeconfig USER CLUSTER KUBECONFIG get pods Wait until the returned output shows that the Pod has a status of "Running".
- The following monitor configurations are enabled for Node Problem Detector: windows-health-checker-kubelet windows-health-checker-kubeproxy windows-health-checker-docker windows-health-checker-containerd windows-defender-monitor To get events and conditions on a node: kubectl --kubeconfig KUBECONFIG describe nodes NODE NAME Replace: KUBECONFIG with the path of the kubeconfig file for the cluster that contains the node.
- Windows nodes having IP address conflicts This is a known issue that happens very rarely, if you encounter this during Windows node pool creation, you can mitigate this following the steps: If you are using IPAM mode, you can manually remove the VMs that having IP conflicts from vCenter, new VMs will be created automatically which should have correct IP allocations.

### "Upgrade a cluster \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- To see all PodDisruptionBudget objects that do not allow any disruptions: kubectl get poddisruptionbudget --all-namespaces -o jsonpath='{range .items[?(@.status.disruptionsAllowed==0)]}{.metadata.name}/{.metadata.namespace}{"\n"}{end}' Appendix About VMware DRS rules enabled in version 1.1.0-gke.6 As of version 1.1.0-gke.6, Google Distributed Cloud automatically creates VMware Distributed Resource Scheduler (DRS) anti-affinity rules for your user cluster's nodes, causing them to be spread across at least three physical hosts in your datacenter.
- After the upgrade is complete, if you removed any non-system NetworkPolicy specifications, then reapply them with this command: kubectl --kubeconfig USER CLUSTER KUBECONFIG apply -f NETWORK POLICY NAME .yaml Google API and IAM requirements To upgrade a cluster to version 1.28 and later, you must enable kubernetesmetadata.googleapis.com and grant the kubernetesmetadata.publisher IAM role to the logging-monitoring service account .
- Run gkectl prepare to import OS images to vSphere: gkectl prepare \ --bundle-path /var/lib/gke/bundles/gke-onprem-vsphere- TARGET VERSION .tgz \ --kubeconfig ADMIN CLUSTER KUBECONFIG If your cluster has a Windows node pool, run gkectl prepare windows , and update the osImage field for the node pool.
- Nodes fail to complete their upgrade process If you have PodDisruptionBudget objects configured that are unable to allow any additional disruptions, node upgrades might fail to upgrade to the control plane version after repeated attempts.

### "Using containerd for the container runtime \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd)
- Source ID: `site-docs-reference-2`
- Final score: 131
- Re-rank relevance: WEAK
- Re-rank rationale: The page mentions Windows nodes can use Docker Engine when a specific setting is false, but it does not discuss Flannel or the deprecation/removal lifecycle.

Evidence snippets:
- Support for containerd in a user cluster Google Distributed Cloud supports the following OS image types for user cluster nodes: OS image type Container runtime ubuntu containerd containerd cos containerd windows containerd Restrictions and recommendations Starting in version 1.13.0, Google Distributed Cloud no longer supports the ubuntu OS image type.
- This tells you which user clusters are configured to use Docker Engine for Windows nodes. kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG get onpremuserclusters \ -A -o json jq -r '.items[] select(.spec.enableWindowsDataplaneV2 == false) .metadata.name' The output lists all user clusters that are configured to use Docker Engine for Windows nodes.
- For example: user-cluster-1 Regardless of whether a user cluster has any Windows node pools, if the cluster has enableWindowsDataplaneV2 set to false , you will not be able to upgrade it to version 1.13.
- If it is false , all Windows nodes use Docker Engine.

