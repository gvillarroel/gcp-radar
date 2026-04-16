---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.217Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "gkectl cross-version cluster operations"
feature_slug: "gkectl-cross-version-cluster-operations"
latest_feature_date: "2021-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster"
keywords:
  - "gkectl"
  - "cross"
  - "version"
  - "cluster"
  - "operations"
  - "can"
  - "perform"
  - "both"
---

# gkectl cross-version cluster operations

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Gkectl 1.7.0 can perform operations on both 1.6.x and 1.7.0 clusters.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, gkectl command usage is documented with explicit version-compatibility constraints for cluster operations: the gkectl minor version cannot be lower than the cluster minor version, and gkectl can operate with a higher patch version than the cluster in examples. The docs also show gkectl performing cluster lifecycle operations such as validation (`check-config`), preparation (`prepare`), and backup/restore commands across admin and user cluster workflows, while these sources do not explicitly confirm support specifically for cross-operation between 1.6.x and 1.7.0 clusters.

## Evidence Summary

The cited pages define gkectl’s version rules and command availability for admin/user cluster operations, but they do not provide direct evidence for the specific 1.6.x-to-1.7.0 cross-version operational claim.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)

## Supporting Pages

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- If you are installing a lower version on an advanced cluster, the command will fail. gkectl check-config --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Replace the following: ADMIN CLUSTER KUBECONFIG : the path of the kubeconfig file for your admin cluster USER CLUSTER CONFIG : the path of your user cluster configuration file If the command returns any failure messages, fix the issues and validate the file again.
- To generate a template for your user cluster configuration file: gkectl create-config cluster --config= OUTPUT FILENAME --gke-on-prem-version= VERSION Replace the following: OUTPUT FILENAME : a path of your choice for the generated template.
- Support for the gkectl check-config command on advanced user clusters was added in the following versions: 1.32.700+, 1.33.300+, and 1.34.0 and higher.
- The following version rules are enforced during cluster creation: The gkectl minor version can't be lower than the minor version for the cluster.

### "Back up and restore advanced clusters with gkectl \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Backup to vSphere To configure backups so that the backup file for both admin and user clusters are uploaded to vSphere in addition to being saved on your admin workstation, do the following: Add the clusterBackup.datastore field to your admin cluster configuration file: clusterBackup : datastore : DATASTORE Replace DATASTORE with the datastore where you want to store the backup.
- Optionally, you can specify a different name and location for your backup file with the --backup-file flag, for example: gkectl backup cluster testuser \ --kubeconfig admin-cluster/kubeconfig \ --backup-file cluster-backups/testuser-backup-aug-23-2025.tar.gz The backup file expires after a year and the cluster restore process doesn't work with expired backup files.
- To restore quorum, run the applicable command for your cluster type: Admin cluster gkectl restore admin --kubeconfig ADMIN KUBECONFIG \ --config ADMIN CONFIG \ --control-plane-node WORKING NODE IP \ --ssh-key ADMIN SSH KEY PATH Replace the following: ADMIN KUBECONFIG : the path of the kubeconfig file for the admin cluster.
- Run the applicable command to back up the cluster: Admin cluster gkectl backup admin --kubeconfig ADMIN KUBECONFIG User cluster gkectl backup cluster --cluster-name CLUSTER NAME \ --kubeconfig ADMIN KUBECONFIG By default, the backup tar file is saved to the directory gkectl-workspace/backups on your admin workstation.

### "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- The configuration enables some, but not all, of the available features. vc-01-admin-cluster.yaml apiVersion: v1 kind: AdminCluster name: "gke-admin-01" bundlePath: "/var/lib/gke/bundles/gke-onprem-vsphere-1.28.0-gke.1-full.tgz" vCenter: address: "vc01.example" datacenter: "vc-01" cluster: "vc01-workloads-1" resourcePool: "vc-01-pool-1" datastore: "vc01-datastore-1" caCertPath: "/usr/local/google/home/me/certs/vc01-cert.pem"" credentials: fileRef: path: "credential.yaml" entry: "vCenter" network: hostConfig: dnsServers: - "203.0.113.1" - "198.51.100.1" ntpServers: - "216.239.35.4" serviceCIDR: "10.96.232.0/24" podCIDR: "192.168.0.0/16" vCenter: networkName: "vc01-net-1" controlPlaneIPBlock: netmask: "255.255.248.0" gateway: "21.0.143.254" ips: - ip: "21.0.140.226" hostname: "admin-cp-vm-1" - ip: "21.0.141.48" hostname: "admin-cp-vm-2" - ip: "21.0.141.65" hostname: "admin-cp-vm-3" loadBalancer: vips: controlPlaneVIP: "172.16.20.59" kind: "MetalLB" antiAffinityGroups: enabled: true adminMaster: cpus: 4 memoryMB: 16384 replicas: 3 componentAccessServiceAccountKeyPath: "sa-key.json" gkeConnect: projectID: "my-project-123" registerServiceAccountKeyPath: "connect-register-sa-2203040617.json" stackdriver: projectID: "my-project-123" clusterLocation: "us-central1" enableVPC: false serviceAccountKeyPath: "log-mon-sa-2203040617.json" disableVsphereResourceMetrics: false clusterBackup: datastore: "vc-01-datastore-bu" autoRepair: enabled: true osImageType: "ubuntu containerd" Validate your configuration file After you've filled in your admin cluster configuration file, run gkectl check-config to verify that the file is valid: gkectl check-config --config ADMIN CLUSTER CONFIG Replace ADMIN CLUSTER CONFIG with the path of your admin cluster configuration file.
- Get OS images Run gkectl prepare to initialize your vSphere environment: gkectl prepare --config ADMIN CLUSTER CONFIG The gkectl prepare command performs the following preparatory tasks: Imports OS images to vSphere and marks them as VM templates.
- The following version rules are enforced during cluster creation: The gkectl minor version can't be lower than the minor version for the cluster.
- For example, you can use gkectl version 1.29.0-gke.1456 to create a cluster with a higher patch version, such as 1.29.1000-gke.94.

