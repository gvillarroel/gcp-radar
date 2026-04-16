---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.185Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "User cluster control-plane certificate rotation"
feature_slug: "user-cluster-control-plane-certificate-rotation"
latest_feature_date: "2021-12-22"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/ca-rotation"
keywords:
  - "user"
  - "cluster"
  - "control"
  - "plane"
  - "certificate"
  - "rotation"
  - "certificates"
  - "automatically"
---

# User cluster control-plane certificate rotation

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

User cluster control-plane certificates are automatically rotated at each cluster upgrade.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, user cluster control-plane certificates are automatically rotated during each user cluster upgrade, occurring within about ten hours. Each rotation advances an integer CAVersion value that tracks certificate generations, and status can be checked with `gkectl update credentials certificate-authorities status`. The user cluster’s CA itself is not automatically rotated as part of this process.

## Evidence Summary

The referenced user-cluster CA rotation page directly documents upgrade-triggered automatic control-plane certificate rotation, how to inspect rotation state/version, and the non-automatic rotation of CAs.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/ca-rotation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/ca-rotation)

## Supporting Pages

### "Rotating user cluster certificate authorities \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/ca-rotation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/ca-rotation)
- Source ID: `site-docs-reference`
- Final score: 294
- Re-rank relevance: STRONG
- Re-rank rationale: The page defines the user cluster CA rotation feature that replaces core system certificate authorities and updates system component certificates in a user cluster.

Evidence snippets:
- If the CA rotation starts successfully, you see a message similar to following: successfully started the CA rotation with CAVersion 2, use gkectl update credentials certificate-authorities status command to view the current state of CA rotation If a CA rotation is already in progress, you see an error message similar to the following: Exit with error: admission webhook "vonpremusercluster.onprem.cluster.gke.io" denied the request: requests must not modify CAVersion when cluster is not ready: ready condition is not true: ClusterCreateOrUpdate: Creating or updating user cluster control plane workloads To view the status of the rotation: gkectl update credentials certificate-authorities status \ --config USER CLUSTER CONFIG \ --kubeconfig ADMIN CLUSTER KUBECONFIG The preceding command reports the CAVersion , which is an integer the system automatically increments to differentiate the CAs used before and after a rotation.
- Control plane certificates rotation Without rotation, both the user cluster CAs and control-plane certificates expire five years from the date the cluster was created.
- The user cluster's control-plane certificates are automatically rotated within ten hours of each user cluster upgrade, but the CAs are not automatically rotated.
- To view the last version a user cluster has been upgraded to when control-plane certificates were rotated: gkectl update credentials certificate-authorities status \ --config USER CLUSTER CONFIG \ --kubeconfig ADMIN CLUSTER KUBECONFIG The information appears at the end of the message field within ten hours of an upgrade.

### "Rotating admin cluster CA certificates \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-ca-rotation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-ca-rotation)
- Source ID: `site-docs-reference`
- Final score: 266
- Re-rank relevance: WEAK
- Re-rank rationale: The page is explicitly scoped to admin cluster CA rotation and only mentions control-plane certificates rotating during upgrade, without covering user cluster control-plane certificate behavior.

Evidence snippets:
- The expiration period depends on the cluster type and its creation version: Advanced clusters: 10-year expiration Non-advanced clusters: Created before version 1.5: 10-year expiration Created between versions 1.5 to 1.16: 5-year expiration Created after version 1.16: 30-year expiration The control plane certificates are automatically rotated during a cluster upgrade, but the CAs are not automatically rotated.
- Without rotation, CA certificates and control-plane certificates will expire after a period of time from the date the cluster was created.
- CA certificate rotation restarts the Kubernetes API server, other control-plane processes, and each node in the admin cluster multiple times.
- While the admin cluster and the user clusters managed by the admin cluster do remain operational during a certificate rotation, you should expect that workloads in the admin cluster will be restarted and rescheduled.

### "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- If you plan to create any kubeception user clusters , then you must have enough IP addresses available for the control-plane nodes of those user clusters.
- The configuration enables some, but not all, of the available features. vc-01-admin-cluster.yaml apiVersion: v1 kind: AdminCluster name: "gke-admin-01" bundlePath: "/var/lib/gke/bundles/gke-onprem-vsphere-1.28.0-gke.1-full.tgz" vCenter: address: "vc01.example" datacenter: "vc-01" cluster: "vc01-workloads-1" resourcePool: "vc-01-pool-1" datastore: "vc01-datastore-1" caCertPath: "/usr/local/google/home/me/certs/vc01-cert.pem"" credentials: fileRef: path: "credential.yaml" entry: "vCenter" network: hostConfig: dnsServers: - "203.0.113.1" - "198.51.100.1" ntpServers: - "216.239.35.4" serviceCIDR: "10.96.232.0/24" podCIDR: "192.168.0.0/16" vCenter: networkName: "vc01-net-1" controlPlaneIPBlock: netmask: "255.255.248.0" gateway: "21.0.143.254" ips: - ip: "21.0.140.226" hostname: "admin-cp-vm-1" - ip: "21.0.141.48" hostname: "admin-cp-vm-2" - ip: "21.0.141.65" hostname: "admin-cp-vm-3" loadBalancer: vips: controlPlaneVIP: "172.16.20.59" kind: "MetalLB" antiAffinityGroups: enabled: true adminMaster: cpus: 4 memoryMB: 16384 replicas: 3 componentAccessServiceAccountKeyPath: "sa-key.json" gkeConnect: projectID: "my-project-123" registerServiceAccountKeyPath: "connect-register-sa-2203040617.json" stackdriver: projectID: "my-project-123" clusterLocation: "us-central1" enableVPC: false serviceAccountKeyPath: "log-mon-sa-2203040617.json" disableVsphereResourceMetrics: false clusterBackup: datastore: "vc-01-datastore-bu" autoRepair: enabled: true osImageType: "ubuntu containerd" Validate your configuration file After you've filled in your admin cluster configuration file, run gkectl check-config to verify that the file is valid: gkectl check-config --config ADMIN CLUSTER CONFIG Replace ADMIN CLUSTER CONFIG with the path of your admin cluster configuration file.
- If you used gkeadm to create your admin workstation, open your admin workstation configuration file so you can copy values from the vCenter section to the corresponding placeholder variables. resource "google gkeonprem vmware admin cluster" "admin-cluster-metallb" { provider = google-beta name = " ADMIN CLUSTER NAME " project = " PROJECT ID " location = " REGION " description = " DESCRIPTION " bootstrap cluster membership = "projects/ PROJECT ID /locations/ REGION /memberships/bootstrap- ADMIN CLUSTER NAME " on prem version = " VERSION " image type = " IMAGE TYPE " vcenter { address = " VCENTER ADDRESS " datacenter = " DATA CENTER " cluster = " VCENTER CLUSTER " resource pool = " RESOURCE POOL " datastore = " DATASTORE " ca cert data = " CA CERT DATA " } network config { service address cidr blocks = [" 10.96.232.0/24 "] pod address cidr blocks = [" 192.168.0.0/16 "] vcenter network = " NETWORK " dhcp ip config { enabled = true } host config { dns servers = [" DNS SERVERS "] ntp servers = [" NTP SERVERS "] } ha control plane config { control plane ip block { gateway = " GATEWAY " netmask = " NETMASK " ips { hostname = " CONTROL PLANE HOST 1 " ip = " CONTROL PLANE NODE IP 1 " } ips { hostname = " CONTROL PLANE HOST 2 " ip = " CONTROL PLANE NODE IP 2 " } ips { hostname = " CONTROL PLANE HOST 3 " ip = " CONTROL PLANE NODE IP 3 " } } } } control plane node { cpus = NUM CPUS memory = MEMORY replicas = 3 } load balancer { vip config { control plane vip = " CONTROL PLANE VIP " } metal lb config { enabled = true } } } Replace the following: ADMIN CLUSTER NAME : the name for the admin cluster.
- Use this field to specify whether you want Google Distributed Cloud to create VMware Distributed Resource Scheduler (DRS) anti-affinity rules for your admin cluster nodes, causing them to be spread across at least three physical hosts in your data center. adminMaster If you want to specify CPU and memory for the control-plane nodes of the admin cluster, fill in the cpus and memoryMB fields in the adminMaster section.

