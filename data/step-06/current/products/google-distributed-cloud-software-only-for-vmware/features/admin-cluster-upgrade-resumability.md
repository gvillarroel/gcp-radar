---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.177Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Admin cluster upgrade resumability"
feature_slug: "admin-cluster-upgrade-resumability"
latest_feature_date: "2021-12-22"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading"
keywords:
  - "admin"
  - "cluster"
  - "upgrade"
  - "resumability"
  - "can"
  - "resume"
  - "after"
  - "previous"
---

# Admin cluster upgrade resumability

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

An admin cluster upgrade can resume after a previous failed upgrade attempt.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, an interrupted or failed admin cluster upgrade is resumable when the admin cluster checkpoint contains the required restore state. The documented recovery workflow is to rerun the admin upgrade command after interruption/failure, typically after stopping/removing the local gkectl kind control-plane container before rerunning the upgrade path. The admin-cluster checkpoint is updated during `gkectl upgrade admin` operations, which is the mechanism that supports this restart-from-interruption behavior.

## Evidence Summary

The cited pages explicitly state that admin cluster upgrades can be resumed after interruption/failure and describe the checkpoint/state-based requirement plus rerun-time operational steps for resuming.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)

## Supporting Pages

### "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- Resume creation of the admin cluster after a failure If the admin cluster creation fails or is canceled, you can run the create command again: gkectl create admin --config ADMIN CLUSTER CONFIG Locate the admin cluster kubeconfig file The gkectl create admin command creates a kubeconfig file named kubeconfig in the current directory.
- The configuration enables some, but not all, of the available features. vc-01-admin-cluster.yaml apiVersion: v1 kind: AdminCluster name: "gke-admin-01" bundlePath: "/var/lib/gke/bundles/gke-onprem-vsphere-1.28.0-gke.1-full.tgz" vCenter: address: "vc01.example" datacenter: "vc-01" cluster: "vc01-workloads-1" resourcePool: "vc-01-pool-1" datastore: "vc01-datastore-1" caCertPath: "/usr/local/google/home/me/certs/vc01-cert.pem"" credentials: fileRef: path: "credential.yaml" entry: "vCenter" network: hostConfig: dnsServers: - "203.0.113.1" - "198.51.100.1" ntpServers: - "216.239.35.4" serviceCIDR: "10.96.232.0/24" podCIDR: "192.168.0.0/16" vCenter: networkName: "vc01-net-1" controlPlaneIPBlock: netmask: "255.255.248.0" gateway: "21.0.143.254" ips: - ip: "21.0.140.226" hostname: "admin-cp-vm-1" - ip: "21.0.141.48" hostname: "admin-cp-vm-2" - ip: "21.0.141.65" hostname: "admin-cp-vm-3" loadBalancer: vips: controlPlaneVIP: "172.16.20.59" kind: "MetalLB" antiAffinityGroups: enabled: true adminMaster: cpus: 4 memoryMB: 16384 replicas: 3 componentAccessServiceAccountKeyPath: "sa-key.json" gkeConnect: projectID: "my-project-123" registerServiceAccountKeyPath: "connect-register-sa-2203040617.json" stackdriver: projectID: "my-project-123" clusterLocation: "us-central1" enableVPC: false serviceAccountKeyPath: "log-mon-sa-2203040617.json" disableVsphereResourceMetrics: false clusterBackup: datastore: "vc-01-datastore-bu" autoRepair: enabled: true osImageType: "ubuntu containerd" Validate your configuration file After you've filled in your admin cluster configuration file, run gkectl check-config to verify that the file is valid: gkectl check-config --config ADMIN CLUSTER CONFIG Replace ADMIN CLUSTER CONFIG with the path of your admin cluster configuration file.
- If you have enabled VM encryption in your instance of vCenter Server, then you must have the Cryptographic operations.Direct Access privilege before you create or upgrade your admin cluster.
- The checkpoint.yaml file is automatically updated when you run the gkectl upgrade admin command, or when you run a gkectl update command that affects the admin cluster.

### "Upgrade a cluster \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- Source ID: `site-docs-root`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- To view cluster details in the file, run the following command: kubectl config view --kubeconfig USER CLUSTER KUBECONFIG Resume an upgrade If a user cluster upgrade is interrupted, you can resume the user cluster upgrade by running the same upgrade command with the --skip-validation-all flag: gkectl upgrade cluster \ --kubeconfig ADMIN CLUSTER KUBECONFIG \ --config USER CLUSTER CONFIG \ --skip-validation-all Console Upgrading a user cluster requires some changes to the admin cluster.
- Run the following command to delete the full bundle: rm /var/lib/gke/bundles/gke-onprem-vsphere- TARGET VERSION -full.tgz Resuming an admin cluster upgrade If an admin cluster upgrade is interrupted or fails, the upgrade can be resumed if the admin cluster checkpoint contains the state required to restore the state prior to the interruption.
- After you complete the platform version update, update the admin cluster version: gcloud container vmware admin-clusters update ADMIN CLUSTER NAME \ --location = REGION \ --version = VERSION \ --async This step completes the upgrade of the admin cluster to the target version.
- Before you rerun the upgrade command to resume the upgrade, delete the kind cluster: docker stop gkectl-control-plane && docker rm gkectl-control-plane After deleting the kind cluster, rerun the upgrade command again.

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- After the proxy configuration for the admin cluster has been set, it cannot be modified or deleted, unless the cluster is rebuilt. proxy.noProxy Optional Immutable String A comma-separated list of IP addresses, IP address ranges, host names, and domain names that should not go through the proxy server.
- Although we still support Seesaw for non-HA admin clusters that have been upgraded, we recommend that you migrate to MetalLB . antiAffinityGroups.enabled Optional Mutable Boolean Prepopulated: true Set this to true to enable DRS rule creation.
- Example: componentAccessServiceAccountKeyPath: "my-key-folder/access-key.json" gkeConnect Required Mutable When you fill in the gkeConnect section, the admin cluster is automatically registered to a fleet after it is created.
- After you add this section and create or update the admin cluster, if subsequently you remove the section and update the cluster, the update will fail. gkeOnPremAPI.enabled Required if the gkeOnPremAPI section is included.

