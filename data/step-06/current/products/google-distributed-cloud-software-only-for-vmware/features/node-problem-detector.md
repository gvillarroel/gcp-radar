---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.234Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Node Problem Detector"
feature_slug: "node-problem-detector"
latest_feature_date: "2020-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools"
keywords:
  - "node"
  - "problem"
  - "detector"
  - "automatically"
  - "detects"
  - "additional"
  - "failures"
  - "conditions"
---

# Node Problem Detector

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Node Problem Detector automatically detects additional node failures and conditions.

## Extended Definition

Node Problem Detector in Google Distributed Cloud (software only) for VMware continuously checks nodes for possible problems and reports detected issues as node events and conditions. For Windows Server OS node pools, it uses multiple built-in monitor configurations (for example, kubelet, kube-proxy, Docker, containerd, and Windows Defender), and the corresponding node condition is set to true when a matching failure scenario is detected. In the documented upgrade context, the feature is noted as being enabled automatically in version 1.9.

## Evidence Summary

The cited Google Cloud user guide confirms how Node Problem Detector detects node issues, records them as events/conditions, and lists the enabled Windows-specific monitors.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)

## Supporting Pages

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 233
- Re-rank relevance: N/A

Evidence snippets:
- The following monitor configurations are enabled for Node Problem Detector: windows-health-checker-kubelet windows-health-checker-kubeproxy windows-health-checker-docker windows-health-checker-containerd windows-defender-monitor To get events and conditions on a node: kubectl --kubeconfig KUBECONFIG describe nodes NODE NAME Replace: KUBECONFIG with the path of the kubeconfig file for the cluster that contains the node.
- Node Problem Detector keeps checking for possible problems and reports them as events and conditions on the node.
- Each of these is set to true if Node Problem Detector detects the corresponding failure scenario on the node.
- If you have upgraded to version 1.9, Node Problem Detector is enabled automatically.

### "Upgrade a cluster \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- To see all PodDisruptionBudget objects that do not allow any disruptions: kubectl get poddisruptionbudget --all-namespaces -o jsonpath='{range .items[?(@.status.disruptionsAllowed==0)]}{.metadata.name}/{.metadata.namespace}{"\n"}{end}' Appendix About VMware DRS rules enabled in version 1.1.0-gke.6 As of version 1.1.0-gke.6, Google Distributed Cloud automatically creates VMware Distributed Resource Scheduler (DRS) anti-affinity rules for your user cluster's nodes, causing them to be spread across at least three physical hosts in your datacenter.
- Nodes fail to complete their upgrade process If you have PodDisruptionBudget objects configured that are unable to allow any additional disruptions, node upgrades might fail to upgrade to the control plane version after repeated attempts.
- We record events for the start and end of each critical upgrade phase, including: ControlPlaneUpgrade MasterNodeUpgrade AddonsUpgrade NodePoolsUpgrade Example output: Events: Type Reason Age From Message ---- ------ ---- ---- ------- Normal NodePoolsUpgradeStarted 22m onprem-user-cluster-controller Creating or updating node pools: pool-2: Creating or updating node pool Normal AddonsUpgradeStarted 22m onprem-user-cluster-controller Creating or updating addon workloads Normal ControlPlaneUpgradeStarted 25m onprem-user-cluster-controller Creating or updating cluster control plane workloads: deploying user-kube-apiserver-base, ...: 14/15 pods are ready Normal ControlPlaneUpgradeFinished 23m onprem-user-cluster-controller Control plane is running When the upgrade is complete, gkectl list clusters shows a STATUS of RUNNING : NAMESPACE NAME READY STATE AGE VERSION my-uc-gkeonprem-mgmt my-uc True RUNNING 9h 1.34.0-gke.1 Also, when the upgrade is complete, gkectl describe clusters shows a Last GKE On Prem Version field under Status .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- For example: --dns-search-domains example.com,examplepetstore.com For a complete list of the flags and their descriptions, see the gcloud CLI reference . vSphere flags Specify the following optional flags if needed: --disable-aag-config : If you don't include this flag the VMware Distributed Resource Scheduler (DRS) anti-affinity rules are automatically created for your user cluster's nodes, causing them to be spread across at least 3 physical hosts in your data center.
- Enable anti-affinity groups : VMware Distributed Resource Scheduler (DRS) anti-affinity rules are automatically created for your user cluster's nodes, causing them to be spread across at least 3 physical hosts in your data center.
- A user cluster needs to have one IP address for each node and an additional IP address for a temporary node that is needed during cluster upgrades, updates, and auto repair.
- Resizing means that the vCPU and memory resources assigned to a node are adjusted automatically.

