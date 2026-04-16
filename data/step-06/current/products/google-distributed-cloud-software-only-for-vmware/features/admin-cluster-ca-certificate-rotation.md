---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.158Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Admin cluster CA certificate rotation"
feature_slug: "admin-cluster-ca-certificate-rotation"
latest_feature_date: "2022-04-27"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-ca-rotation"
keywords:
  - "admin"
  - "cluster"
  - "ca"
  - "certificate"
  - "rotation"
  - "gkectl"
  - "can"
  - "rotate"
---

# Admin cluster CA certificate rotation

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

Gkectl can rotate system root CA certificates for admin clusters.

## Extended Definition

Admin cluster CA certificate rotation in Google Distributed Cloud (software only) for VMware is a gkectl-managed operation that starts certificate rotation for an admin cluster using `gkectl update credentials certificate-authorities rotate --admin-cluster` with the admin cluster config and admin kubeconfig. If advanced cluster mode is not enabled, rotation is two-step: the rotate command performs the first phase, then `gkectl update credentials certificate-authorities update-kubeconfig --admin-cluster` is used to finish it and remove the old CA certificate from kubeconfig (the old client certificate is removed earlier and the old CA is removed in the completion step). If advanced cluster mode is enabled, the rotate command is synchronous and reports progress/completion directly.

## Evidence Summary

The cited admin CA rotation guide defines the exact gkectl commands and phase behavior (including advanced-cluster sync/async flow) used to rotate admin-cluster certificate authorities and update kubeconfig state.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-ca-rotation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-ca-rotation)

## Supporting Pages

### "Rotating admin cluster CA certificates \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-ca-rotation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-ca-rotation)
- Source ID: `site-docs-reference`
- Final score: 254
- Re-rank relevance: STRONG
- Re-rank rationale: This page is dedicated to rotating admin cluster CA certificates with gkectl and details the affected CAs, rotation flow, and distribution behavior.

Evidence snippets:
- Start the rotation To start the certificate rotation, run the following command: gkectl update credentials certificate-authorities rotate \ --admin-cluster \ --config ADMIN CLUSTER CONFIG \ --kubeconfig ADMIN CLUSTER KUBECONFIG Replace the following: ADMIN CLUSTER CONFIG : the path of the admin cluster configuration file ADMIN CLUSTER KUBECONFIG : the path of the admin cluster kubeconfig file The behavior of the command differs depending on whether advanced cluster is enabled: Not enabled The gkectl update credentials certificate-authorities rotate command starts and performs the first half of the rotation.
- The command doesn't proceed until gkectl verifies that the updated kubeconfig file is in the current directory. gkectl update credentials certificate-authorities rotate \ --admin-cluster \ --complete \ --config ADMIN CLUSTER CONFIG \ --kubeconfig ADMIN CLUSTER KUBECONFIG When the rotation is complete, it reports the current CA version.
- The old client certificate is removed from the kubeconfig file, and the old CA certificate remains in the kubeconfig file. gkectl update credentials certificate-authorities update-kubeconfig \ --admin-cluster \ --config ADMIN CLUSTER CONFIG \ --kubeconfig ADMIN CLUSTER KUBECONFIG Continue the rotation Run the following command to perform the second half of the procedure.
- This removes the old CA certificate from the kubeconfig file. gkectl update credentials certificate-authorities update-kubeconfig \ --admin-cluster \ --config ADMIN CLUSTER CONFIG \ --kubeconfig ADMIN CLUSTER KUBECONFIG Enabled If advanced cluster is enabled, the gkectl update credentials certificate-authorities rotate command is synchronous.

### "Rotating user cluster certificate authorities \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/ca-rotation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/ca-rotation)
- Source ID: `site-docs-reference`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: It explains that the admin cluster performs CA creation/distribution for user clusters but does not describe rotating the admin cluster’s own CA certificates.

Evidence snippets:
- Perform a CA rotation Start the rotation: gkectl update credentials certificate-authorities rotate \ --config USER CLUSTER CONFIG \ --kubeconfig ADMIN CLUSTER KUBECONFIG Replace the following: USER CLUSTER CONFIG : the path of the user cluster configuration file ADMIN CLUSTER KUBECONFIG : the path of the admin cluster kubeconfig file The behavior of the command differs depending on whether advanced cluster is enabled: Not enabled If advanced cluster isn't enabled on the cluster, the command is asynchronous and starts the CA rotation and then exits.
- If the CA rotation starts successfully, you see a message similar to following: successfully started the CA rotation with CAVersion 2, use gkectl update credentials certificate-authorities status command to view the current state of CA rotation If a CA rotation is already in progress, you see an error message similar to the following: Exit with error: admission webhook "vonpremusercluster.onprem.cluster.gke.io" denied the request: requests must not modify CAVersion when cluster is not ready: ready condition is not true: ClusterCreateOrUpdate: Creating or updating user cluster control plane workloads To view the status of the rotation: gkectl update credentials certificate-authorities status \ --config USER CLUSTER CONFIG \ --kubeconfig ADMIN CLUSTER KUBECONFIG The preceding command reports the CAVersion , which is an integer the system automatically increments to differentiate the CAs used before and after a rotation.
- To view the last version a user cluster has been upgraded to when control-plane certificates were rotated: gkectl update credentials certificate-authorities status \ --config USER CLUSTER CONFIG \ --kubeconfig ADMIN CLUSTER KUBECONFIG The information appears at the end of the message field within ten hours of an upgrade.
- Get a new kubeconfig file: kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG get secret admin \ -n USER CLUSTER NAME -o jsonpath='{.data.admin\.conf}' \ base64 --decode > USER CLUSTER NAME -kubeconfig Enabled If advanced cluster is enabled, the gkectl update credentials certificate-authorities rotate command is synchronous.

### "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- Note, however, the command takes additional values that you must specify in the provided placeholder variables. gkectl register bootstrap \ --target-cluster-name= ADMIN CLUSTER NAME \ --project-id= PROJECT ID \ --location= REGION \ --vcenter-address= VCENTER ADDRESS \ --vcenter-datacenter= DATA CENTER \ --vcenter-cluster= VCENTER CLUSTER \ --vcenter-resource-pool= RESOURCE POOL \ --vcenter-datastore= DATASTORE \ --vcenter-network= NETWORK \ --vcenter-ca-cert-path= CA CERT PATH \ --bundle-path= BUNDLE PATH \ --component-access-service-account-key-path= COMPONENT ACCESS SA PATH \ --register-service-account-key-path= CONNECT REGISTER SA PATH \ --stackdriver-service-account-key-path= LOG MON SA PATH \ --cloud-audit-logging-service-account-key-path= CLOUD AUDIT SA PATH \ --admin-kubeconfig-out= KUBECONFIG NAME Replace the following with admin workstation paths: CA CERT PATH : the path to the root CA certificate for your vCenter Server.
- The configuration enables some, but not all, of the available features. vc-01-admin-cluster.yaml apiVersion: v1 kind: AdminCluster name: "gke-admin-01" bundlePath: "/var/lib/gke/bundles/gke-onprem-vsphere-1.28.0-gke.1-full.tgz" vCenter: address: "vc01.example" datacenter: "vc-01" cluster: "vc01-workloads-1" resourcePool: "vc-01-pool-1" datastore: "vc01-datastore-1" caCertPath: "/usr/local/google/home/me/certs/vc01-cert.pem"" credentials: fileRef: path: "credential.yaml" entry: "vCenter" network: hostConfig: dnsServers: - "203.0.113.1" - "198.51.100.1" ntpServers: - "216.239.35.4" serviceCIDR: "10.96.232.0/24" podCIDR: "192.168.0.0/16" vCenter: networkName: "vc01-net-1" controlPlaneIPBlock: netmask: "255.255.248.0" gateway: "21.0.143.254" ips: - ip: "21.0.140.226" hostname: "admin-cp-vm-1" - ip: "21.0.141.48" hostname: "admin-cp-vm-2" - ip: "21.0.141.65" hostname: "admin-cp-vm-3" loadBalancer: vips: controlPlaneVIP: "172.16.20.59" kind: "MetalLB" antiAffinityGroups: enabled: true adminMaster: cpus: 4 memoryMB: 16384 replicas: 3 componentAccessServiceAccountKeyPath: "sa-key.json" gkeConnect: projectID: "my-project-123" registerServiceAccountKeyPath: "connect-register-sa-2203040617.json" stackdriver: projectID: "my-project-123" clusterLocation: "us-central1" enableVPC: false serviceAccountKeyPath: "log-mon-sa-2203040617.json" disableVsphereResourceMetrics: false clusterBackup: datastore: "vc-01-datastore-bu" autoRepair: enabled: true osImageType: "ubuntu containerd" Validate your configuration file After you've filled in your admin cluster configuration file, run gkectl check-config to verify that the file is valid: gkectl check-config --config ADMIN CLUSTER CONFIG Replace ADMIN CLUSTER CONFIG with the path of your admin cluster configuration file.
- If the preflight checks pass, you see something like the following: [2023-03-22 23:12:47+0000] Waiting for cluster kubeconfig to become ready OK [2023-03-22 23:15:47+0000] Writing kubeconfig file [2023-03-22 23:15:47+0000] kubeconfig of cluster being created is present at gkectl-workspace/abm-cluster-1/abm-cluster-1-kubeconfig [2023-03-22 23:15:47+0000] Please restrict access to this file as it contains authentication credentials of your cluster. [2023-03-22 23:15:47+0000] Waiting for cluster to become ready OK [2023-03-22 23:20:17+0000] Please run [2023-03-22 23:20:17+0000] kubectl --kubeconfig gkectl-workspace/abm-cluster-1/abm-cluster-1-kubeconfig get nodes [2023-03-22 23:20:17+0000] to get cluster nodes status. [2023-03-22 23:20:17+0000] Waiting for node pools to become ready OK [2023-03-22 23:20:37+0000] Waiting for metrics to become ready in GCP OK [2023-03-22 23:25:38+0000] Waiting for cluster API provider to install in the created admin cluster OK [2023-03-22 23:25:48+0000] Moving admin cluster resources to the created admin cluster [2023-03-22 23:25:51+0000] Waiting for node update jobs to finish OK [2023-03-22 23:27:41+0000] Flushing logs...
- This setting specifies the region where the following APIs and services run: GKE On-Prem API ( gkeonprem.googleapis.com ) Fleet service ( gkehub.googleapis.com ) Connect service ( gkeconnect.googleapis.com ) This setting also controls the region in which the following are stored: The cluster metadata that the GKE On-Prem API needs to manage the cluster lifecycle The Cloud Logging and Cloud Monitoring data of system components The Admin Audit log created by Cloud Audit Logs The Google Cloud API Location field corresponds to the --location flag in the gkectl register bootstrap command.

