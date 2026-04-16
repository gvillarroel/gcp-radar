---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.245Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Cloud Monitoring dashboards"
feature_slug: "cloud-monitoring-dashboards"
latest_feature_date: "2020-09-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools"
keywords:
  - "monitoring"
  - "dashboards"
  - "automatically"
  - "creates"
  - "during"
  - "installation"
  - "when"
  - "enabled"
---

# Cloud Monitoring dashboards

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Cloud Monitoring automatically creates monitoring dashboards during installation when enabled.

## Extended Definition

Cloud Monitoring dashboards in Google Distributed Cloud (software only) for VMware are monitoring dashboards that Google Distributed Cloud creates automatically during admin cluster installation when Cloud Monitoring is enabled. Evidence in the provided excerpts confirms the auto-creation trigger and timing, but does not describe dashboard contents or later lifecycle behavior.

## Evidence Summary

The cited Google Cloud documentation states that these dashboards are automatically created during admin cluster installation when Cloud Monitoring is enabled.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)

## Supporting Pages

### "Upgrade a cluster \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- To see all PodDisruptionBudget objects that do not allow any disruptions: kubectl get poddisruptionbudget --all-namespaces -o jsonpath='{range .items[?(@.status.disruptionsAllowed==0)]}{.metadata.name}/{.metadata.namespace}{"\n"}{end}' Appendix About VMware DRS rules enabled in version 1.1.0-gke.6 As of version 1.1.0-gke.6, Google Distributed Cloud automatically creates VMware Distributed Resource Scheduler (DRS) anti-affinity rules for your user cluster's nodes, causing them to be spread across at least three physical hosts in your datacenter.
- Automatic upgrade to advanced clusters Note the following differences between versions: When you upgrade your clusters from version 1.32 to 1.33, they are automatically converted to advanced clusters , which uses improved architectures that provide greater flexibility and scalability.
- About downtime during upgrades Resource Description Admin cluster When an admin cluster is down, user cluster control planes and workloads on user clusters continue to run, unless they were affected by a failure that caused the downtime.
- The full bundle contains all of the container and VM images, whereas the regular bundle downloads the container and VM images from Google Cloud Platform on to the admin workstation during installation.

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- These dashboards are automatically created during admin cluster installation if Cloud Monitoring is enabled.
- As a workaround, you can delete the node by running the command below and wait for the controller to automatically recreate it. kubectl --kubeconfig USER KUBECONFIG delete node NODE NAME Diagnose command fails when Windows VM hardware versions are lower than expected When the Windows VM template is using an old hardware version, the gkectl diagnose cluster command fails with the following message: Checking storage...FAILURE Reason: 1 storage error ( s ) .
- Windows nodes having IP address conflicts This is a known issue that happens very rarely, if you encounter this during Windows node pool creation, you can mitigate this following the steps: If you are using IPAM mode, you can manually remove the VMs that having IP conflicts from vCenter, new VMs will be created automatically which should have correct IP allocations.
- Once you have the username and password, you can access your Windows VM using any of the following approaches: Using Remote Desktop Protocol Note: the RDP (Remote Desktop Protocol) access is enabled during the Windows VM template build in gkectl prepare windows .

### "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- If the regions aren't the same, cluster creation fails. gkeOnPremAPI If the GKE On-Prem API is enabled in your Google Cloud project, all clusters in the project are enrolled in the GKE On-Prem API automatically in the region configured in stackdriver.clusterLocation .
- If you didn't specify the --admin-kubeconfig-out flag when you ran gkectl register bootstrap , the command creates a kubeconfig file called kubeconfig in the directory in which you ran the command.
- If you didn't specify the --admin-kubeconfig-out flag when you ran gkectl register bootstrap , the command creates a kubeconfig file called kubeconfig in the directory in which you ran the command.
- When Google Distributed Cloud creates an admin cluster, it deploys a Kubernetes in Docker (kind) cluster to temporarily host the Kubernetes controllers needed to create the admin cluster.

