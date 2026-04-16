---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.294Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Debug toolbox container image"
feature_slug: "debug-toolbox-container-image"
latest_feature_date: "2019-09-26"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/node-image"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/node-image"
keywords:
  - "debug"
  - "toolbox"
  - "container"
  - "image"
  - "can"
  - "used"
  - "diagnose"
  - "node"
---

# Debug toolbox container image

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

A debug-toolbox container image can be used to diagnose node issues.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, the debug-toolbox is a preinstalled container image in the node OS that is intended to help diagnose node issues. The image is run by using a provided `toolbox` shell script, which unpacks and launches the container for troubleshooting.

## Evidence Summary

The cited Node image docs state that debug-toolbox is preinstalled on the node OS, includes packages for node debugging, and is started via the `toolbox` shell script.

## Source Links

- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/node-image](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/node-image)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/node-image](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/node-image)

## Supporting Pages

### "Node image \_|\_ Google Distributed Cloud (software only) for VMware \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/node-image](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/node-image)
- Source ID: `site-docs-reference-2`
- Final score: 210
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly states that the node OS has a preinstalled debug-toolbox container image and describes using the toolbox script to run it for node issue debugging.

Evidence snippets:
- The node OS has the debug-toolbox container image preinstalled. debug-toolbox includes several packages for debugging node issues.
- Google Distributed Cloud offers the following node image options for your cluster: 1.16 OS Node images Status Container-Optimized OS cos General Availability Ubuntu with containerd ubuntu containerd General Availability 1.28 OS Node images Status Container-Optimized OS cos General Availability Container-Optimized OS with cgroup v2 cos cgv2 Preview Ubuntu with containerd ubuntu containerd General Availability Ubuntu with containerd and cgroup v2 ubuntu cgv2 Preview 1.29 OS Node images Status Container-Optimized OS cos General Availability Container-Optimized OS with cgroup v2 cos cgv2 General Availability Ubuntu with containerd ubuntu containerd General Availability Ubuntu with containerd and cgroup v2 ubuntu cgv2 General Availability Kubernetes version New Google Distributed Cloud versions sometimes introduce a new Kubernetes version for clusters.
- You run an accompanying shell script, toolbox , to unpack and run the debug-toolbox container.
- Home Technology areas Google Distributed Cloud Documentation GDC for VMware Guides Send feedback Node image Stay organized with collections Save and categorize content based on your preferences.

### "Node image \_|\_ Google Distributed Cloud (software only) for VMware \_\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/node-image](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/node-image)
- Source ID: `site-docs-reference-3`
- Final score: 210
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly states that the node OS preinstalls the debug-toolbox container image and provides the toolbox script to run it for node issue debugging.

Evidence snippets:
- The node OS has the debug-toolbox container image preinstalled. debug-toolbox includes several packages for debugging node issues.
- Google Distributed Cloud offers the following node image options for your cluster: 1.16 OS Node images Status Container-Optimized OS cos General Availability Ubuntu with containerd ubuntu containerd General Availability 1.28 OS Node images Status Container-Optimized OS cos General Availability Container-Optimized OS with cgroup v2 cos cgv2 Preview Ubuntu with containerd ubuntu containerd General Availability Ubuntu with containerd and cgroup v2 ubuntu cgv2 Preview 1.29 OS Node images Status Container-Optimized OS cos General Availability Container-Optimized OS with cgroup v2 cos cgv2 General Availability Ubuntu with containerd ubuntu containerd General Availability Ubuntu with containerd and cgroup v2 ubuntu cgv2 General Availability Kubernetes version New Google Distributed Cloud versions sometimes introduce a new Kubernetes version for clusters.
- You run an accompanying shell script, toolbox , to unpack and run the debug-toolbox container.
- Home Technology areas Google Distributed Cloud Documentation GDC for VMware Guides Send feedback Node image Stay organized with collections Save and categorize content based on your preferences.

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- To complete these tasks, run the following commands: Pull the Windows container images docker pull gcr.io/gke-on-prem-release/pause-win:gke windows pause 20210302 RC00 2019 docker pull gcr.io/gke-on-prem-release/fluent-bit-win:v1.8.3-gke.1 ltsc2019 docker pull gcr.io/gke-on-prem-release/gke-metrics-agent-windows:0.3.10-gke.0 2019 Tag the images to use private registry docker tag gcr.io/gke-on-prem-release/pause-win:gke windows pause 20210302 RC00 2019 $PRIVATE REGISTRY URL/pause-win:gke windows pause 20210302 RC00 2019 docker tag gcr.io/gke-on-prem-release/fluent-bit-win:v1.8.3-gke.1 ltsc2019 $PRIVATE REGISTRY URL/fluent-bit-win:v1.8.3-gke.1 ltsc2019 docker tag gcr.io/gke-on-prem-release/gke-metrics-agent-windows:0.3.10-gke.0 2019 $PRIVATE REGISTRY URL/gke-metrics-agent-windows:0.3.10-gke.0 2019 Push to private registry docker push PRIVATE REGISTRY URL /pause-win:gke windows pause 20210302 RC00 2019 docker push PRIVATE REGISTRY URL /fluent-bit-win:v1.8.3-gke.1 ltsc2019 docker push PRIVATE REGISTRY URL /gke-metrics-agent-windows:0.3.10-gke.0 2019 Step 3: (Required if using proxy) Allowlisting URLs for creating Windows node pools If your cluster is behind a proxy server, add these URLs to your proxy server allowlist in addition to the other addresses that Google Distributed Cloud requires.
- Create an IIS file named iis.yaml with the following content: apiVersion: apps/v1 kind: Deployment metadata: name: iis labels: app: iis spec: replicas: 1 selector: matchLabels: app: iis template: metadata: labels: app: iis spec: nodeSelector: kubernetes.io/os: windows containers: - name: iis-server image: mcr.microsoft.com/windows/servercore/iis ports: - containerPort: 80 --- apiVersion: v1 kind: Service metadata: labels: app: iis name: iis spec: ports: - port: 80 protocol: TCP targetPort: 80 selector: app: iis sessionAffinity: None type: LoadBalancer loadBalancerIP: [Fill in with an available IP address] Step 2: Create the deployment and expose it via a service Create the deployment kubectl --kubeconfig USER CLUSTER KUBECONFIG create -f iis.yaml Step 3: Validate the Pod Check the status of the Pod using kubectl . kubectl --kubeconfig USER CLUSTER KUBECONFIG get pods Wait until the returned output shows that the Pod has a status of "Running".
- To schedule Windows Server containers on Windows Server nodes, your manifest file must include this nodeSelector section: nodeSelector: kubernetes.io/os: windows With nodeSelector configured, an admission webhook running in the cluster checks new workloads for the presence of this Windows node selector and when found, applies the following toleration to the workload which allows it to run on the tainted Windows Server nodes: tolerations: - key: "node.kubernetes.io/os" operator: "Equal" value: "windows" effect: "NoSchedule" Step 1: Create an Internet Information Services (IIS) deployment file Here is a sample configuration, which deploys Microsoft's official IIS image to a single Pod.
- This tarball contains the log files on nodes as well as outputs for troubleshooting commands running on the node. gkectl diagnose snapshot --scenario system-with-logs --cluster-name [USER CLUSTER NAME] --kubeconfig [PATH TO KUBECONFIG] Windows VM creation fails Check the logs from the vsphere-controller-manager container in the clusterapi-controllers Pod in the user namespace of the admin cluster. kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG -n USER CLUSTER NAME logs clusterapi-controllers- POD NAME SUFFIX vsphere-controller-manager Ensure that your VM template is located in the same datacenter and datastore as specified in your user cluster configuration file.

