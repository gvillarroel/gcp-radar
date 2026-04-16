---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.161Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Existing admin cluster registration with gkectl update admin"
feature_slug: "existing-admin-cluster-registration-with-gkectl-update-admin"
latest_feature_date: "2022-04-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster"
keywords:
  - "existing"
  - "admin"
  - "cluster"
  - "registration"
  - "gkectl"
  - "update"
  - "can"
  - "register"
---

# Existing admin cluster registration with gkectl update admin

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Gkectl update admin can register an existing admin cluster.

## Extended Definition

`gkectl update` is used in Google Distributed Cloud (software only) for VMware to modify fields on an existing admin cluster. This indicates it supports operational updates to an already-created admin cluster, which can be used in workflows that manage previously created clusters rather than only creating new ones.

## Evidence Summary

The cited pages document admin cluster setup and registration (`gkectl register bootstrap`) and state that `gkectl update` can update fields in an existing cluster, but they do not explicitly describe a dedicated `gkectl update admin` command flow for existing-cluster registration.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)

## Supporting Pages

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- You can use gkectl update to update this field in an existing cluster.
- You can use gkectl update to update this field in an existing cluster.
- You can use gkectl update to update this field in an existing cluster.
- You can use gkectl update to update this field in an existing cluster.

### "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- The configuration enables some, but not all, of the available features. vc-01-admin-cluster.yaml apiVersion: v1 kind: AdminCluster name: "gke-admin-01" bundlePath: "/var/lib/gke/bundles/gke-onprem-vsphere-1.28.0-gke.1-full.tgz" vCenter: address: "vc01.example" datacenter: "vc-01" cluster: "vc01-workloads-1" resourcePool: "vc-01-pool-1" datastore: "vc01-datastore-1" caCertPath: "/usr/local/google/home/me/certs/vc01-cert.pem"" credentials: fileRef: path: "credential.yaml" entry: "vCenter" network: hostConfig: dnsServers: - "203.0.113.1" - "198.51.100.1" ntpServers: - "216.239.35.4" serviceCIDR: "10.96.232.0/24" podCIDR: "192.168.0.0/16" vCenter: networkName: "vc01-net-1" controlPlaneIPBlock: netmask: "255.255.248.0" gateway: "21.0.143.254" ips: - ip: "21.0.140.226" hostname: "admin-cp-vm-1" - ip: "21.0.141.48" hostname: "admin-cp-vm-2" - ip: "21.0.141.65" hostname: "admin-cp-vm-3" loadBalancer: vips: controlPlaneVIP: "172.16.20.59" kind: "MetalLB" antiAffinityGroups: enabled: true adminMaster: cpus: 4 memoryMB: 16384 replicas: 3 componentAccessServiceAccountKeyPath: "sa-key.json" gkeConnect: projectID: "my-project-123" registerServiceAccountKeyPath: "connect-register-sa-2203040617.json" stackdriver: projectID: "my-project-123" clusterLocation: "us-central1" enableVPC: false serviceAccountKeyPath: "log-mon-sa-2203040617.json" disableVsphereResourceMetrics: false clusterBackup: datastore: "vc-01-datastore-bu" autoRepair: enabled: true osImageType: "ubuntu containerd" Validate your configuration file After you've filled in your admin cluster configuration file, run gkectl check-config to verify that the file is valid: gkectl check-config --config ADMIN CLUSTER CONFIG Replace ADMIN CLUSTER CONFIG with the path of your admin cluster configuration file.
- If the preflight checks pass, you see something like the following: [2023-03-22 23:12:47+0000] Waiting for cluster kubeconfig to become ready OK [2023-03-22 23:15:47+0000] Writing kubeconfig file [2023-03-22 23:15:47+0000] kubeconfig of cluster being created is present at gkectl-workspace/abm-cluster-1/abm-cluster-1-kubeconfig [2023-03-22 23:15:47+0000] Please restrict access to this file as it contains authentication credentials of your cluster. [2023-03-22 23:15:47+0000] Waiting for cluster to become ready OK [2023-03-22 23:20:17+0000] Please run [2023-03-22 23:20:17+0000] kubectl --kubeconfig gkectl-workspace/abm-cluster-1/abm-cluster-1-kubeconfig get nodes [2023-03-22 23:20:17+0000] to get cluster nodes status. [2023-03-22 23:20:17+0000] Waiting for node pools to become ready OK [2023-03-22 23:20:37+0000] Waiting for metrics to become ready in GCP OK [2023-03-22 23:25:38+0000] Waiting for cluster API provider to install in the created admin cluster OK [2023-03-22 23:25:48+0000] Moving admin cluster resources to the created admin cluster [2023-03-22 23:25:51+0000] Waiting for node update jobs to finish OK [2023-03-22 23:27:41+0000] Flushing logs...
- Note, however, the command takes additional values that you must specify in the provided placeholder variables. gkectl register bootstrap \ --target-cluster-name= ADMIN CLUSTER NAME \ --project-id= PROJECT ID \ --location= REGION \ --vcenter-address= VCENTER ADDRESS \ --vcenter-datacenter= DATA CENTER \ --vcenter-cluster= VCENTER CLUSTER \ --vcenter-resource-pool= RESOURCE POOL \ --vcenter-datastore= DATASTORE \ --vcenter-network= NETWORK \ --vcenter-ca-cert-path= CA CERT PATH \ --bundle-path= BUNDLE PATH \ --component-access-service-account-key-path= COMPONENT ACCESS SA PATH \ --register-service-account-key-path= CONNECT REGISTER SA PATH \ --stackdriver-service-account-key-path= LOG MON SA PATH \ --cloud-audit-logging-service-account-key-path= CLOUD AUDIT SA PATH \ --admin-kubeconfig-out= KUBECONFIG NAME Replace the following with admin workstation paths: CA CERT PATH : the path to the root CA certificate for your vCenter Server.
- This setting specifies the region where the following APIs and services run: GKE On-Prem API ( gkeonprem.googleapis.com ) Fleet service ( gkehub.googleapis.com ) Connect service ( gkeconnect.googleapis.com ) This setting also controls the region in which the following are stored: The cluster metadata that the GKE On-Prem API needs to manage the cluster lifecycle The Cloud Logging and Cloud Monitoring data of system components The Admin Audit log created by Cloud Audit Logs The Google Cloud API Location field corresponds to the --location flag in the gkectl register bootstrap command.

