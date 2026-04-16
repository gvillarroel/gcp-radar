---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.217Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Dataplane V2"
feature_slug: "dataplane-v2"
latest_feature_date: "2021-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools"
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading"
keywords:
  - "dataplane"
  - "v2"
  - "generally"
  - "available"
  - "newly"
  - "created"
  - "clusters"
---

# Dataplane V2

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Dataplane V2 is generally available for newly created clusters.

## Extended Definition

Dataplane V2 is the recommended/modern network datapath option in Google Distributed Cloud (software only) for VMware that replaces Dataplane V1 (Calico) as clusters move to current architecture. For new cluster workflows, existing documentation indicates Dataplane V1 is no longer allowed for new clusters at version 1.30 and higher, and Dataplane V2 is described as the recommended migration target (noted for improved performance and scalability), with legacy Dataplane V1 blocked during upgrade to 1.32. In Windows node pools, newly created user clusters have Dataplane V2 enabled by default.

## Evidence Summary

The cited pages collectively establish Dataplane V2 as the recommended replacement for Dataplane V1 in newer cluster lifecycle paths, show where Dataplane V1 is disallowed for new clusters or blocked on upgrade, and confirm default Dataplane V2 enablement in newly created Windows node pools.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)

## Supporting Pages

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- If you are using DHCP mode, the newly created VMs are likely to have duplicated IPs again since the DHCP server is encountering issues for IP allocation, you can delete the pending Windows node pool by running gkectl update cluster , and add it back in user-cluster.yaml, run gkectl update cluster again for creating it, the newly created node pool should have correct IP allocations.
- By default, Windows Dataplane V2 is enabled for the Windows node pools for new user clusters.
- Create an IIS file named iis.yaml with the following content: apiVersion: apps/v1 kind: Deployment metadata: name: iis labels: app: iis spec: replicas: 1 selector: matchLabels: app: iis template: metadata: labels: app: iis spec: nodeSelector: kubernetes.io/os: windows containers: - name: iis-server image: mcr.microsoft.com/windows/servercore/iis ports: - containerPort: 80 --- apiVersion: v1 kind: Service metadata: labels: app: iis name: iis spec: ports: - port: 80 protocol: TCP targetPort: 80 selector: app: iis sessionAffinity: None type: LoadBalancer loadBalancerIP: [Fill in with an available IP address] Step 2: Create the deployment and expose it via a service Create the deployment kubectl --kubeconfig USER CLUSTER KUBECONFIG create -f iis.yaml Step 3: Validate the Pod Check the status of the Pod using kubectl . kubectl --kubeconfig USER CLUSTER KUBECONFIG get pods Wait until the returned output shows that the Pod has a status of "Running".
- Create a new cluster gkectl create cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Update an existing cluster with the new Windows node pool gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Upgrade an existing cluster with the new Windows node pool gkectl upgrade cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Step 6: Validate Windows nodes are running Check that your Windows nodes have been created and are Ready . kubectl --kubeconfig USER KUBECONFIG get nodes Diagnose the user cluster to check whether it's healthy. gkectl diagnose cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --cluster-name CLUSTER NAME Deploy a Windows Pod Windows Server nodes are tainted with this key-value pair: node.kubernetes.io/os=windows:NoSchedule .

### "Plan cluster migration to recommended features \_|\_ Google Distributed\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features)
- Source ID: `site-docs-reference-3`
- Final score: 129
- Re-rank relevance: STRONG
- Re-rank rationale: Dataplane V2 is explicitly defined as the recommended CNI option with Dataplane V1 as original, and the page includes migration/upgrade behavior by version.

Evidence snippets:
- The following tables show the support matrix for these features in admin and user clusters: Cluster type Outdated feature Add for new cluster Allow for cluster upgrade Migration to new feature Version 1.32 and higher Admin Non-HA No No N/A Seesaw No No N/A Integrated F5 Big IP No No N/A User Kubeception No No N/A Seesaw No No N/A Integrated F5 Big IP No No N/A Dataplane V1 No No N/A Version 1.30 and 1.31 Admin Non-HA No Yes Yes Seesaw No Yes Yes Integrated F5 Big IP No Yes Yes User Kubeception No Yes Yes Seesaw No Yes Yes Integrated F5 Big IP No Yes Yes Dataplane V1 No Yes Yes Version 1.29 Admin Non-HA No Yes Yes ( Preview ) Seesaw No Yes Yes Integrated F5 Big IP Yes Yes Yes ( Preview ) User Kubeception Yes Yes Yes ( Preview ) Seesaw Yes Yes Yes Integrated F5 Big IP Yes Yes Yes ( Preview ) Dataplane V1 Yes Yes No Version 1.28 Admin Non-HA No Yes No Seesaw No Yes Yes Integrated F5 Big IP Yes Yes No User Kubeception Yes Yes No Seesaw Yes Yes Yes Integrated F5 Big IP Yes Yes No Dataplane V1 Yes Yes No Key points : Starting with version 1.30, all migration solutions are available to migrate clusters to their recommended alternatives.
- Before migration After migration LB nodes Extra Seesaw VMs (outside of cluster) In-cluster LB nodes with customer choices Client IP Preservation Can be achieved via externalTrafficPolicy: Local Can be achieved via DataplaneV2 DSR mode Service creation Manually specified Service IP Auto-assigned Service IP from address pool Migrate user clusters to Controlplane V2 and admin clusters to HA The recommended control plane for user clusters is Controlplane V2.
- When creating new clusters, here are the versions where original features aren't allowed: Admin clusters: Non-HA control plane: 1.28 and higher Seesaw load balancing: 1.28 and higher Integrated F5 Big IP: 1.30 and higher User clusters: Kubeception: 1.30 and higher Seesaw: 1.30 and higher Integrated F5 Big IP: 1.30 and higher Dataplane V1: 1.30 and higher You can still upgrade existing clusters with the original features.
- By proactively migrating to Dataplane V2, you can benefit from: Enhanced Performance and Scalability: Dataplane V2's optimized design and efficient resource utilization can lead to improved network performance and better scalability, particularly in large clusters or environments with high network traffic demands.

### "Upgrade a cluster \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- To upgrade a user cluster: Update the Google Cloud CLI components: gcloud components update Get a list of available versions to upgrade to: gcloud container vmware clusters query-version-config \ --cluster= USER CLUSTER NAME \ --project= PROJECT ID \ --location= REGION The output of the command is similar to the following: versions: - version: 1.16.3-gke.45 - version: 1.16.2-gke.28 - version: 1.16.1-gke.45 - version: 1.16.0-gke.669 - version: 1.15.6-gke.25 - version: 1.15.5-gke.41 An Anthos version must be made available on the admin cluster ahead of the user cluster creation or upgrade.
- Legacy features blocked on upgrades The following legacy features are blocked during cluster upgrade to version 1.32: Dataplane V1 (Calico) Integrated F5 Big IP load balancer configuration Non-HA admin cluster Kubeception user cluster Seesaw load balancer You must migrate your clusters to recommended features before upgrading to version 1.32.
- Get a list of available versions to upgrade to: gcloud container vmware clusters query-version-config \ --cluster= USER CLUSTER NAME \ --project= PROJECT ID \ --location= REGION Replace the following: USER CLUSTER NAME : The name of the user cluster.
- The steps for upgrading a user cluster using the gcloud CLI or Terraform include a step to run gcloud container vmware clusters query-version-config to get available versions for the upgrade.

