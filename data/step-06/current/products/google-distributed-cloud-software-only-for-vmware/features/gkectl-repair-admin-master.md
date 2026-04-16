---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.232Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "gkectl repair admin-master"
feature_slug: "gkectl-repair-admin-master"
latest_feature_date: "2020-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading"
keywords:
  - "gkectl"
  - "repair"
  - "admin"
  - "master"
  - "repairs"
  - "administrator"
  - "vm"
  - "failures"
---

# gkectl repair admin-master

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Repairs administrator master VM failures with a new gkectl command.

## Extended Definition

`gkectl repair admin-master` is a Google Distributed Cloud (software only) for VMware `gkectl` command used to repair an unhealthy admin control plane (admin master). The official documentation states it should be run when the admin control plane is unhealthy before the initial upgrade attempt, and explicitly warns not to use it after a failed upgrade attempt. Beyond this pre-upgrade recovery usage and constraint, no additional command behavior is detailed in the provided excerpts.

## Evidence Summary

The upgrade documentation is the primary cited source, showing when to invoke `gkectl repair admin-master` and when not to use it.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)

## Supporting Pages

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- For more information see the following: Non-advanced clusters: Back up and restore an admin cluster with gkectl Advanced clusters: Back up and restore advanced clusters with gkectl autoRepair.enabled Optional Mutable Boolean Prepopulated: true Set this to true to enable node auto repair .
- Must not overlap with the service CIDR range podCIDR: 192.168.0.0/16 vCenter: vSphere network name networkName: "" (Required for HA admin cluster) Specify the IPs to use for control plane machines for HA admin cluster. controlPlaneIPBlock: netmask: "" gateway: "" ips: - ip: "" hostname: "" - ip: "" hostname: "" - ip: "" hostname: "" (Required) Load balancer configuration loadBalancer: (Required) The VIPs to use for load balancing vips: Used to connect to the Kubernetes API controlPlaneVIP: "" (Required) Which load balancer to use "ManualLB" or "MetalLB". kind: MetalLB # (Required when using "ManualLB" kind) Specify pre-defined nodeports manualLB: # NodePort for ingress service's http (only needed for user cluster) ingressHTTPNodePort: 0 # NodePort for ingress service's https (only needed for user cluster) ingressHTTPSNodePort: 0 # NodePort for konnectivity server service (only needed for controlplane v1 user # cluster) konnectivityServerNodePort: 0 # NodePort for control plane service (not needed for HA admin cluster or controlplane # V2 user cluster) controlPlaneNodePort: 30968 Spread admin addon nodes and user masters across different physical hosts (requires at least three hosts) antiAffinityGroups: Set to false to disable DRS rule creation enabled: true Specify the admin master node configuration (default: 4 CPUs; 16384 MB memory; 3 replicas).
- Additionally, you must set loadBalancer.kind in your configuration file even though the field is a no-op in 1.32 and higher. adminMaster.controlPlaneLoadBalancer.mode Optional Immutable String Default: Depends on whether the cluster uses topology domains The kind of load balancer that you can use depends on whether you will set up the cluster to use topology domains .
- Example: antiAffinityGroups: enabled: true adminMaster Immutable Configuration settings for the control-plane nodes in the admin cluster. adminMaster.controlPlaneLoadBalancer 1.32 and higher Optionally, include this section to specify the kind of load balancer to use for control-plane traffic in the admin cluster.

### "Upgrade a cluster \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- If the admin control plane is unhealthy prior to the initial upgrade attempt, repair the admin control plane with the gkectl repair admin-master command.
- Warning : Don't repair the admin master with gkectl repair admin-master after a failed upgrade attempt.
- We record events for the start and end of each critical upgrade phase, including: ControlPlaneUpgrade MasterNodeUpgrade AddonsUpgrade NodePoolsUpgrade Example output: Events: Type Reason Age From Message ---- ------ ---- ---- ------- Normal NodePoolsUpgradeStarted 22m onprem-user-cluster-controller Creating or updating node pools: pool-2: Creating or updating node pool Normal AddonsUpgradeStarted 22m onprem-user-cluster-controller Creating or updating addon workloads Normal ControlPlaneUpgradeStarted 25m onprem-user-cluster-controller Creating or updating cluster control plane workloads: deploying user-kube-apiserver-base, ...: 14/15 pods are ready Normal ControlPlaneUpgradeFinished 23m onprem-user-cluster-controller Control plane is running When the upgrade is complete, gkectl list clusters shows a STATUS of RUNNING : NAMESPACE NAME READY STATE AGE VERSION my-uc-gkeonprem-mgmt my-uc True RUNNING 9h 1.34.0-gke.1 Also, when the upgrade is complete, gkectl describe clusters shows a Last GKE On Prem Version field under Status .
- Example output: Events: Type Reason Age From Message ---- ------ ---- ---- ------- Normal ControlPlaneUpgradeStarted 40m onprem-admin-cluster-controller Creating or updating admin cluster API Controller Normal ControlPlaneMachineUpgradeStarted 40m onprem-admin-cluster-controller Creating or updating control plane machine Normal StatusChanged 40m onprem-admin-cluster-controller OnPremAdminCluster status changed: - New ClusterState condition: UPGRADING - New Ready condition: False, CreateOrUpdateControlPlaneMachine, Creating or updating control plane machine Normal StatusChanged 2m onprem-admin-cluster-controller OnPremAdminCluster status changed: - New ClusterState condition: RUNNING - New Ready condition: True, ClusterRunning, Cluster is running When the upgrade is complete, gkectl list admin shows a STATUS of RUNNING : NAME STATE AGE VERSION gke-admin-test RUNNING 9h 1.34.200-gke.68 Also, when the upgrade is complete, gkectl describe admin shows a Last GKE On Prem Version field under Status .

### "Admin cluster configuration file 1.28 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- It is supported in GKE on-prem version # 1.7+. (default: false) disableVRRPMAC: true Spread admin addon nodes and user masters across different physical hosts (requires at least three hosts) antiAffinityGroups: Set to false to disable DRS rule creation enabled: true (Optional) Specify the admin master node configuration which can be added or edited only during cluster creation (default: 4 CPUs; 16384 MB memory; 3 replicas) adminMaster: cpus: 4 memoryMB: 16384 How many machines of this type to deploy replicas: 3 # (Only used in 1.16 and older versions) Specify the addon node configuration which # can be added or edited only during cluster creation addonNode: # Enable auto resize for addon node autoResize: # Whether to enable auto resize for master.
- If you do not have DRS enabled, or if you do not have at least four hosts where vSphere VMs can be scheduled, set antiAffinityGroups.enabled to false . adminMaster Immutable Configuration settings for the control-plane nodes in the admin cluster. adminMaster.cpus Preview Optional Immutable Integer Prepopulated: 4 Default: 4 The number of vCPUs for each control-plane node in the admin cluster.
- To generate a template for your admin cluster configuration file: gkectl create-config admin --config= OUTPUT FILENAME --gke-on-prem-version= VERSION Replace OUTPUT FILENAME with a path of your choice for the generated template.
- Backups will be stored under # /anthos-backups/. clusterBackup: # # datastore where admin cluster backups are desired # datastore: "" Enable auto repair for the cluster autoRepair: Whether to enable auto repair feature.

