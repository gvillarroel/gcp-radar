---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.212Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Windows Server container support"
feature_slug: "windows-server-container-support"
latest_feature_date: "2021-06-28"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools"
keywords:
  - "windows"
  - "server"
  - "container"
  - "containers"
  - "can"
  - "run"
  - "alongside"
  - "linux"
---

# Windows Server container support

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

Windows Server containers can run alongside Linux containers on Anthos clusters on VMware.

## Extended Definition

Google Distributed Cloud (software only) for VMware supports Windows Server containers on Anthos user clusters by running them on Windows Server OS node pools. Workloads must specify `nodeSelector: kubernetes.io/os: windows`, and the platform applies a `node.kubernetes.io/os` NoSchedule toleration so Windows containers are scheduled on Windows nodes while Linux containers are not placed there. For Windows Server containers that use persistent storage, the docs state you must create and reference a StorageClass explicitly (the default cluster StorageClass uses ext4, which is suitable for Linux containers).

## Evidence Summary

The referenced Google Cloud docs page provides direct guidance on Windows Server container workload scheduling, node selector/toleration behavior, and required StorageClass usage in Anthos clusters on VMware.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)

## Supporting Pages

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- Windows persistent storage When working with Windows Server containers with persistent storage, you must create a StorageClass object, and specify the name of that object in the storageClassName field of the PersistentVolumeClaim object, because the default StorageClass in on-prem user cluster uses ext4 as the file system type, which only works for Linux containers.
- This taint ensures that the GKE scheduler does not attempt to run Linux containers on Windows Server nodes.
- Create an IIS file named iis.yaml with the following content: apiVersion: apps/v1 kind: Deployment metadata: name: iis labels: app: iis spec: replicas: 1 selector: matchLabels: app: iis template: metadata: labels: app: iis spec: nodeSelector: kubernetes.io/os: windows containers: - name: iis-server image: mcr.microsoft.com/windows/servercore/iis ports: - containerPort: 80 --- apiVersion: v1 kind: Service metadata: labels: app: iis name: iis spec: ports: - port: 80 protocol: TCP targetPort: 80 selector: app: iis sessionAffinity: None type: LoadBalancer loadBalancerIP: [Fill in with an available IP address] Step 2: Create the deployment and expose it via a service Create the deployment kubectl --kubeconfig USER CLUSTER KUBECONFIG create -f iis.yaml Step 3: Validate the Pod Check the status of the Pod using kubectl . kubectl --kubeconfig USER CLUSTER KUBECONFIG get pods Wait until the returned output shows that the Pod has a status of "Running".
- To schedule Windows Server containers on Windows Server nodes, your manifest file must include this nodeSelector section: nodeSelector: kubernetes.io/os: windows With nodeSelector configured, an admission webhook running in the cluster checks new workloads for the presence of this Windows node selector and when found, applies the following toleration to the workload which allows it to run on the tainted Windows Server nodes: tolerations: - key: "node.kubernetes.io/os" operator: "Equal" value: "windows" effect: "NoSchedule" Step 1: Create an Internet Information Services (IIS) deployment file Here is a sample configuration, which deploys Microsoft's official IIS image to a single Pod.

