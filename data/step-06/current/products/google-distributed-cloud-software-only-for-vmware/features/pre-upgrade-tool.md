---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.069Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "pre-upgrade tool"
feature_slug: "pre-upgrade-tool"
latest_feature_date: "2023-12-18"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading"
keywords:
  - "pre"
  - "upgrade"
  - "tool"
  - "checks"
  - "cluster"
  - "health"
  - "configuration"
  - "before"
---

# pre-upgrade tool

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

The pre-upgrade tool checks cluster health and configuration before an upgrade.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, the pre-upgrade tool is a preflight check step run before upgrading a user cluster. For upgrades to version 1.29 and later, it is executed with `gkectl upgrade cluster ... --dry-run` using the user cluster configuration file, and it validates cluster status and node health before the upgrade proceeds.

## Evidence Summary

The upgrading documentation confirms the pre-upgrade `--dry-run` workflow and states that preflight checks verify cluster status and node health before an upgrade.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)

## Supporting Pages

### "Upgrade a cluster \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- Source ID: `site-docs-root`
- Final score: 213
- Re-rank relevance: WEAK
- Re-rank rationale: It references preflight checks and `--dry-run` before upgrades, but does not define a dedicated pre-upgrade tool.

Evidence snippets:
- Run preflight checks When upgrading to version 1.29 and higher, you can run the preflight checks before upgrading a user cluster: gkectl upgrade cluster \ --kubeconfig ADMIN CLUSTER KUBECONFIG \ --config USER CLUSTER CONFIG \ --dry-run Replace USER CLUSTER CONFIG with the path to the user cluster configuration file.
- Before the cluster is upgraded, preflight checks run to validate cluster status and node health.
- Legacy features blocked on upgrades The following legacy features are blocked during cluster upgrade to version 1.32: Dataplane V1 (Calico) Integrated F5 Big IP load balancer configuration Non-HA admin cluster Kubeception user cluster Seesaw load balancer You must migrate your clusters to recommended features before upgrading to version 1.32.
- Starting from 1.12.0, if the admin control plane is unhealthy, the upgrade process will directly upgrade to the target version without trying to restore the admin cluster at the source version before proceeding to upgrade.

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- Create a user cluster with the tool of your choice This section provides steps for creating a user cluster using gkectl , the console, the gcloud CLI, and Terraform. gkectl Procedure overview These are the primary steps involved in using gkectl to create a user cluster: Fill in your configuration files Specify the details for your new cluster by completing a user cluster configuration file, a credentials configuration file, and possibly an IP block file. (Optional) Import OS images to vSphere, and push container images to the private registry if applicable.
- Ensure this depends on the null resource depends on = [ null resource.gkectl prepare ] ... rest of your cluster configuration ... location = var.location name = var.cluster name ... other required fields ... } Troubleshooting See Troubleshooting cluster creation and upgrade .
- Optional: Run command-line tools before resource creation If needed, you can run command-line tools such as the gcloud CLI and gkectl to perform setup or configuration tasks before resource creation.
- Before running the gcloud command to create the cluster, you can include --validate-only to validate the configuration that you specified in the flags to the gcloud command.

### "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- For information to help you choose a tool and limitations with some tools, see Choose a tool to manage cluster lifecycle . gkectl Procedure overview These are the primary steps involved in creating an admin cluster: Fill in your configuration files.
- If you have enabled VM encryption in your instance of vCenter Server, then you must have the Cryptographic operations.Direct Access privilege before you create or upgrade your admin cluster.
- The configuration enables some, but not all, of the available features. vc-01-admin-cluster.yaml apiVersion: v1 kind: AdminCluster name: "gke-admin-01" bundlePath: "/var/lib/gke/bundles/gke-onprem-vsphere-1.28.0-gke.1-full.tgz" vCenter: address: "vc01.example" datacenter: "vc-01" cluster: "vc01-workloads-1" resourcePool: "vc-01-pool-1" datastore: "vc01-datastore-1" caCertPath: "/usr/local/google/home/me/certs/vc01-cert.pem"" credentials: fileRef: path: "credential.yaml" entry: "vCenter" network: hostConfig: dnsServers: - "203.0.113.1" - "198.51.100.1" ntpServers: - "216.239.35.4" serviceCIDR: "10.96.232.0/24" podCIDR: "192.168.0.0/16" vCenter: networkName: "vc01-net-1" controlPlaneIPBlock: netmask: "255.255.248.0" gateway: "21.0.143.254" ips: - ip: "21.0.140.226" hostname: "admin-cp-vm-1" - ip: "21.0.141.48" hostname: "admin-cp-vm-2" - ip: "21.0.141.65" hostname: "admin-cp-vm-3" loadBalancer: vips: controlPlaneVIP: "172.16.20.59" kind: "MetalLB" antiAffinityGroups: enabled: true adminMaster: cpus: 4 memoryMB: 16384 replicas: 3 componentAccessServiceAccountKeyPath: "sa-key.json" gkeConnect: projectID: "my-project-123" registerServiceAccountKeyPath: "connect-register-sa-2203040617.json" stackdriver: projectID: "my-project-123" clusterLocation: "us-central1" enableVPC: false serviceAccountKeyPath: "log-mon-sa-2203040617.json" disableVsphereResourceMetrics: false clusterBackup: datastore: "vc-01-datastore-bu" autoRepair: enabled: true osImageType: "ubuntu containerd" Validate your configuration file After you've filled in your admin cluster configuration file, run gkectl check-config to verify that the file is valid: gkectl check-config --config ADMIN CLUSTER CONFIG Replace ADMIN CLUSTER CONFIG with the path of your admin cluster configuration file.
- If you used gkeadm to create your admin workstation, open your admin workstation configuration file so you can copy values from the vCenter section to the corresponding placeholder variables. resource "google gkeonprem vmware admin cluster" "admin-cluster-metallb" { provider = google-beta name = " ADMIN CLUSTER NAME " project = " PROJECT ID " location = " REGION " description = " DESCRIPTION " bootstrap cluster membership = "projects/ PROJECT ID /locations/ REGION /memberships/bootstrap- ADMIN CLUSTER NAME " on prem version = " VERSION " image type = " IMAGE TYPE " vcenter { address = " VCENTER ADDRESS " datacenter = " DATA CENTER " cluster = " VCENTER CLUSTER " resource pool = " RESOURCE POOL " datastore = " DATASTORE " ca cert data = " CA CERT DATA " } network config { service address cidr blocks = [" 10.96.232.0/24 "] pod address cidr blocks = [" 192.168.0.0/16 "] vcenter network = " NETWORK " dhcp ip config { enabled = true } host config { dns servers = [" DNS SERVERS "] ntp servers = [" NTP SERVERS "] } ha control plane config { control plane ip block { gateway = " GATEWAY " netmask = " NETMASK " ips { hostname = " CONTROL PLANE HOST 1 " ip = " CONTROL PLANE NODE IP 1 " } ips { hostname = " CONTROL PLANE HOST 2 " ip = " CONTROL PLANE NODE IP 2 " } ips { hostname = " CONTROL PLANE HOST 3 " ip = " CONTROL PLANE NODE IP 3 " } } } } control plane node { cpus = NUM CPUS memory = MEMORY replicas = 3 } load balancer { vip config { control plane vip = " CONTROL PLANE VIP " } metal lb config { enabled = true } } } Replace the following: ADMIN CLUSTER NAME : the name for the admin cluster.

