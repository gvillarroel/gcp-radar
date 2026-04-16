---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.220Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Node auto repair"
feature_slug: "node-auto-repair"
latest_feature_date: "2021-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading"
keywords:
  - "node"
  - "auto"
  - "repair"
  - "automatically"
  - "checks"
  - "cluster"
  - "health"
  - "repairs"
---

# Node auto repair

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Node auto repair automatically checks cluster health and repairs unhealthy nodes; Node Auto Repair automatically repairs additional node failures and conditions.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, Node auto repair is an advanced-cluster capability controlled by the `autoRepair.enabled` configuration option, which is set to true to enable automatic node repair behavior. When enabled, the platform can react to node health issues by performing automated remediation actions, including restarting relevant services on unhealthy nodes and replacing/deleting nodes so that the controller recreates them.

## Evidence Summary

The provided pages document the `autoRepair.enabled` setting for advanced clusters and provide examples of automatic unhealthy-node remediation via service restart and controller-based node recreation.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)

## Supporting Pages

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 231
- Re-rank relevance: N/A

Evidence snippets:
- As a workaround, you can delete the node by running the command below and wait for the controller to automatically recreate it. kubectl --kubeconfig USER KUBECONFIG delete node NODE NAME Diagnose command fails when Windows VM hardware versions are lower than expected When the Windows VM template is using an old hardware version, the gkectl diagnose cluster command fails with the following message: Checking storage...FAILURE Reason: 1 storage error ( s ) .
- If the template name doesn't match the osImage field value, update the osImage value to match the new generated VM template name and run the following command: gkectl update cluster Re-create the Windows node by running the following command: kubectl --kubeconfig USER KUBECONFIG delete node NODE NAME Wait for the controller to automatically recreate the node.
- When an unhealthy condition is found, Node Problem Detector attempts to auto-repair the node by restarting the relevant system service.
- Create a new cluster gkectl create cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Update an existing cluster with the new Windows node pool gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Upgrade an existing cluster with the new Windows node pool gkectl upgrade cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Step 6: Validate Windows nodes are running Check that your Windows nodes have been created and are Ready . kubectl --kubeconfig USER KUBECONFIG get nodes Diagnose the user cluster to check whether it's healthy. gkectl diagnose cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --cluster-name CLUSTER NAME Deploy a Windows Pod Windows Server nodes are tainted with this key-value pair: node.kubernetes.io/os=windows:NoSchedule .

### "Upgrade a cluster \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- Source ID: `site-docs-root`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- To see all PodDisruptionBudget objects that do not allow any disruptions: kubectl get poddisruptionbudget --all-namespaces -o jsonpath='{range .items[?(@.status.disruptionsAllowed==0)]}{.metadata.name}/{.metadata.namespace}{"\n"}{end}' Appendix About VMware DRS rules enabled in version 1.1.0-gke.6 As of version 1.1.0-gke.6, Google Distributed Cloud automatically creates VMware Distributed Resource Scheduler (DRS) anti-affinity rules for your user cluster's nodes, causing them to be spread across at least three physical hosts in your datacenter.
- Before the cluster is upgraded, preflight checks run to validate cluster status and node health.
- Automatic upgrade to advanced clusters Note the following differences between versions: When you upgrade your clusters from version 1.32 to 1.33, they are automatically converted to advanced clusters , which uses improved architectures that provide greater flexibility and scalability.
- When you migrate from a non-advanced cluster to an advanced cluster, the cert-manager integrated with advanced clusters automatically overrides any existing versions of cert-manager .

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- For more information see the following: Non-advanced clusters: Back up and restore an admin cluster with gkectl Advanced clusters: Back up and restore advanced clusters with gkectl autoRepair.enabled Optional Mutable Boolean Prepopulated: true Set this to true to enable node auto repair .
- Default value is bundled for advanced cluster without topology # # domains; and is manual for advanced cluster with topology domains. # mode: "" # (Only used in 1.16 and older versions) Specify the addon node configuration which # can be added or edited only during cluster creation addonNode: # Enable auto resize for addon node autoResize: # Whether to enable auto resize for master.
- Invalid for HA admin cluster as the path is generated automatically under # the root directory "anthos" in the specified datastore. dataDisk: "" (Required) Network configuration network: (Required when using "static" ipMode.type; or "Seesaw" loadBalancer.kind; or using amdin cluster HA mode) This section overrides ipMode.ipBlockFilePath values when ipMode.type=static.
- Example: gkeConnect: registerServiceAccountKeyPath: "my-key-folder/connect-register-key.json" gkeOnPremAPI Optional In 1.16 and later, if the GKE On-Prem API is enabled in your Google Cloud project, all clusters in the project are enrolled in the GKE On-Prem API automatically in the region configured in stackdriver.clusterLocation .

