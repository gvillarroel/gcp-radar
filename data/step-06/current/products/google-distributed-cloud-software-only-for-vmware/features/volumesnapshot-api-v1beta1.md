---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.211Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "VolumeSnapshot API v1beta1"
feature_slug: "volumesnapshot-api-v1beta1"
latest_feature_date: "2021-06-28"
deprecation_date: "2021-06-28"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-user-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading"
keywords:
  - "volumesnapshot"
  - "v1beta1"
  - "apis"
  - "deprecated"
  - "will"
  - "soon"
  - "stop"
  - "being"
---

# VolumeSnapshot API v1beta1

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

The v1beta1 VolumeSnapshot APIs are deprecated and will soon stop being served; deprecated on 2021-06-28.

## Extended Definition

The provided official Google Cloud documentation excerpts do not define or describe the `VolumeSnapshot API v1beta1` feature directly; they instead detail Google Distributed Cloud (software only) for VMware procedures for cluster backup/restore, preflight checks, and upgrades. As a result, the deprecation claim and date for `VolumeSnapshot API v1beta1` cannot be substantiated from these excerpts.

## Evidence Summary

The cited pages document backup/restore, preflight validation, and upgrade workflows, but none of the supplied snippets mention `VolumeSnapshot` APIs or their deprecation.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-user-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)

## Supporting Pages

### "Back up and restore a user cluster \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- In the shell, stop the Kubernetes API server and the etcd server on all the user control plane nodes: sudo mv /etc/kubernetes/manifests/kube-apiserver.yaml /etc/kubernetes/manifests/etcd.yaml In the shell, use snapshot.db to restore the etcd data on all the user control plane nodes: ETCDCTL API=3 sudo etcdctl \ --cacert=/etc/kubernetes/pki/etcd/ca.crt \ --cert=/etc/kubernetes/pki/etcd/server.crt \ --key=/etc/kubernetes/pki/etcd/server.key \ --data-dir=/opt/data/var/lib/etcd \ --name= NODE NAME \ --initial-advertise-peer-urls=https:// NODE IP ADDRESS :2380 \ --initial-cluster= NODE1 =https:// NODE1 IP :2380, NODE2 =https:// NODE2 IP :2380, NODE3 =https:// NODE3 IP :2380 \ snapshot restore /tmp/snapshot.db Replace the following: NODE NAME : the name of the node where the restore is being performed.
- This ensures that no components will use etcd during restoration: kubectl --kubeconfig ADMIN CLUSTER KUBECONIFG --namespace USER CLUSTER NAME \ scale --replicas 0 statefulset kube-apiserver kubectl --kubeconfig ADMIN CLUSTER KUBECONIFG --namespace USER CLUSTER NAME \ scale --replicas 0 deployment gke-master-etcd-maintenance Recall the name of the container image for your etcd Pods.
- Then delete the PDB. kubectl --kubeconfig ADMIN CLUSTER KUBECONIFG get pdb --namespace USER CLUSTER NAME \ kube-apiserver-pdb --output yaml > kube-apiserver-pdb.yaml kubectl --kubeconfig ADMIN CLUSTER KUBECONIFG delete pdb --namespace USER CLUSTER NAME \ kube-apiserver-pdb Stop the Kubernetes API server and the etcd maintenance Deployment.
- Get a shell into the user control plane node: ssh -i NODE NAME .key ubuntu@ NODE EXTERNAL IP In the shell, stop the Kubernetes API server and the etcd server: sudo mv /etc/kubernetes/manifests/kube-apiserver.yaml /etc/kubernetes/manifests/etcd.yaml In the shell, enter exit to exit the shell.

### "Running preflight checks \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks)
- Source ID: `site-docs-root`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Coming soon The following preflight checks will be added in a future release: NTP server Running preflight checks You run preflight checks by running the following command: gkectl check-config --config [CONFIG] where [CONFIG] is the path to your configuration file Running in fast mode If you prefer, you can run preflight checks in "fast mode," which skips the validations that create temporary test VMs, such as the load balancing VIP and node IP validations.
- In this example, the configuration being validated uses integrated load balancing mode and static IPs without an external Docker registry: - Validation Category: Config Check - [SUCCESS] Config - Validation Category: Internet Access - [SUCCESS] Internet access to required domains - Validation Category: GCP - [SUCCESS] GCP Service - [SUCCESS] GCP Service Account - Validation Category: Docker Registry - [SUCCESS] gcr.io/gke-on-prem-release access - Validation Category: vCenter - [SUCCESS] Credentials - [SUCCESS] Version - [SUCCESS] Datacenter - [SUCCESS] Datastore - [SUCCESS] Data Disk - [SUCCESS] Resource Pool - [SUCCESS] Network - [SUCCESS] VSphere CSI Driver - Validation Category: F5 BIG-IP - [SUCCESS] Admin Cluster F5 (credentials, partition and user role) - [SUCCESS] User Cluster F5 (credentials, partition and user role) - Validation Category: Network Configuration - [SUCCESS] CIDR, VIP and static IP (availability and overlapping) - Validation Category: DNS - [SUCCESS] DNS (availability) - Validation Category: VIPs - [SUCCESS] ping (availability) - Validation Category: Node IPs - [SUCCESS] ping (availability) Now running slow validation checks. ...
- If your configuration file indicates that your cluster nodes will be assigned static IP addresses, then the preflight check assigns static IP addresses that you specified in your IP block files to the test VMs.
- If your configuration file indicates that your cluster nodes will get their IP addresses from a DHCP server, then the preflight check uses a DHCP server to assign IP addresses to the test VMs.

### "Upgrade a cluster \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- Source ID: `site-docs-root`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- We record events for the start and end of each critical upgrade phase, including: ControlPlaneUpgrade MasterNodeUpgrade AddonsUpgrade NodePoolsUpgrade Example output: Events: Type Reason Age From Message ---- ------ ---- ---- ------- Normal NodePoolsUpgradeStarted 22m onprem-user-cluster-controller Creating or updating node pools: pool-2: Creating or updating node pool Normal AddonsUpgradeStarted 22m onprem-user-cluster-controller Creating or updating addon workloads Normal ControlPlaneUpgradeStarted 25m onprem-user-cluster-controller Creating or updating cluster control plane workloads: deploying user-kube-apiserver-base, ...: 14/15 pods are ready Normal ControlPlaneUpgradeFinished 23m onprem-user-cluster-controller Control plane is running When the upgrade is complete, gkectl list clusters shows a STATUS of RUNNING : NAMESPACE NAME READY STATE AGE VERSION my-uc-gkeonprem-mgmt my-uc True RUNNING 9h 1.34.0-gke.1 Also, when the upgrade is complete, gkectl describe clusters shows a Last GKE On Prem Version field under Status .
- After the upgrade is complete, if you removed any non-system NetworkPolicy specifications, then reapply them with this command: kubectl --kubeconfig USER CLUSTER KUBECONFIG apply -f NETWORK POLICY NAME .yaml Google API and IAM requirements To upgrade a cluster to version 1.28 and later, you must enable kubernetesmetadata.googleapis.com and grant the kubernetesmetadata.publisher IAM role to the logging-monitoring service account .
- In the meantime, with the new upgrade flow, you can still benefit from new user cluster features without being blocked by the admin cluster upgrade, which allows you to reduce the upgrade frequency of the admin cluster if you want.
- Versions annotated with isInstalled=true are installed on the admin cluster for the purpose of user cluster creation or upgrade whereas other version are released and will be available for upgrade once dependencies are resolved.

