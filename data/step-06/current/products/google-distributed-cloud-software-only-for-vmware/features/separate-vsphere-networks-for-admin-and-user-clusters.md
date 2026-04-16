---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.301Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Separate vSphere networks for admin and user clusters"
feature_slug: "separate-vsphere-networks-for-admin-and-user-clusters"
latest_feature_date: "2019-08-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster-topology-domains"
keywords:
  - "separate"
  - "vsphere"
  - "networks"
  - "admin"
  - "user"
  - "clusters"
  - "can"
  - "use"
---

# Separate vSphere networks for admin and user clusters

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Admin clusters and user clusters can use different vSphere networks.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, admin and user clusters can be deployed on separate vSphere clusters, and those clusters may be in the same data center or different data centers. For user clusters, the docs show that placing a cluster in its own vSphere cluster is controlled via `vCenter.cluster` in the user cluster configuration, while admin cluster configuration includes a vCenter network setting (`networkName`). The evidence for explicit per-cluster network-name settings for user clusters is indirect in the provided excerpts, so separate network usage is supported as a constrained inference rather than a fully documented explicit pairing.

## Evidence Summary

These Google Cloud docs describe separating admin/user clusters in vSphere (including cross-cluster and cross-data-center placement) and provide `vCenter`-scoped configuration fields that indicate where per-cluster vSphere targeting and networking are defined.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster-topology-domains](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster-topology-domains)

## Supporting Pages

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- In particular, you might want to use separate vSphere clusters for your admin cluster and user clusters, and you might want to use separate data centers for your admin cluster and user clusters.
- Think about whether you want to use separate vSphere clusters for your admin cluster and user clusters, and whether you want to use separate data centers .
- If your admin cluster and user cluster are in separate vSphere clusters, they can be in the same data center or different data centers.
- Using separate vSphere clusters If you want to create a user cluster that is in its own vSphere cluster, specify a value for vCenter.cluster in the user cluster configuration file.

### "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- At the end of this procedure, you will have a running admin cluster that you can use to create and manage user clusters.
- User clusters are created and upgraded by their managing admin without the use of a bootstrap cluster.
- The admin cluster manages user clusters that run your workloads.
- The configuration enables some, but not all, of the available features. vc-01-admin-cluster.yaml apiVersion: v1 kind: AdminCluster name: "gke-admin-01" bundlePath: "/var/lib/gke/bundles/gke-onprem-vsphere-1.28.0-gke.1-full.tgz" vCenter: address: "vc01.example" datacenter: "vc-01" cluster: "vc01-workloads-1" resourcePool: "vc-01-pool-1" datastore: "vc01-datastore-1" caCertPath: "/usr/local/google/home/me/certs/vc01-cert.pem"" credentials: fileRef: path: "credential.yaml" entry: "vCenter" network: hostConfig: dnsServers: - "203.0.113.1" - "198.51.100.1" ntpServers: - "216.239.35.4" serviceCIDR: "10.96.232.0/24" podCIDR: "192.168.0.0/16" vCenter: networkName: "vc01-net-1" controlPlaneIPBlock: netmask: "255.255.248.0" gateway: "21.0.143.254" ips: - ip: "21.0.140.226" hostname: "admin-cp-vm-1" - ip: "21.0.141.48" hostname: "admin-cp-vm-2" - ip: "21.0.141.65" hostname: "admin-cp-vm-3" loadBalancer: vips: controlPlaneVIP: "172.16.20.59" kind: "MetalLB" antiAffinityGroups: enabled: true adminMaster: cpus: 4 memoryMB: 16384 replicas: 3 componentAccessServiceAccountKeyPath: "sa-key.json" gkeConnect: projectID: "my-project-123" registerServiceAccountKeyPath: "connect-register-sa-2203040617.json" stackdriver: projectID: "my-project-123" clusterLocation: "us-central1" enableVPC: false serviceAccountKeyPath: "log-mon-sa-2203040617.json" disableVsphereResourceMetrics: false clusterBackup: datastore: "vc-01-datastore-bu" autoRepair: enabled: true osImageType: "ubuntu containerd" Validate your configuration file After you've filled in your admin cluster configuration file, run gkectl check-config to verify that the file is valid: gkectl check-config --config ADMIN CLUSTER CONFIG Replace ADMIN CLUSTER CONFIG with the path of your admin cluster configuration file.

### "Create a user cluster for use with topology domains \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster-topology-domains](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster-topology-domains)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Create separate IP block files for the admin cluster and for each user cluster.
- Multiple network interfaces for Pods aren't supported with topology domains. storage Set storage.vSphereCSIDisabled to true to disable the deployment of vSphere CSI components. masterNode If you want to specify CPU and memory for the control-plane nodes of the user cluster, fill in the cpus and memoryMB fields in the masterNode section.
- Create a user cluster Run the following command to create a user cluster: gkectl create cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Locate the user cluster kubeconfig file The gkectl create cluster command creates a kubeconfig file named USER CLUSTER NAME-kubeconfig in the current directory.
- If you haven't already done so, set up your Google Cloud resources as described in these documents: Install the Google Cloud CLI Create Cloud projects Create service accounts Before you create a user cluster, you must have an admin cluster to manage the user cluster.

