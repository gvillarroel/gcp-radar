---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.204Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Connect agent service account key requirement"
feature_slug: "connect-agent-service-account-key-requirement"
latest_feature_date: "2021-06-28"
deprecation_date: "2021-06-28"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28"
keywords:
  - "connect"
  - "agent"
  - "account"
  - "key"
  - "requirement"
  - "no"
  - "longer"
  - "requires"
---

# Connect agent service account key requirement

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

The connect agent no longer requires an exported service account key during installation because it uses workload identity; deprecated on 2021-06-28.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, the admin cluster setup process deploys a GKE Connect agent that uses GKE Hub/Connect registration settings, including `registerServiceAccountKeyPath` to point to a service account key used for registration. In the 1.28 admin cluster configuration reference, this `registerServiceAccountKeyPath` setting is explicitly marked as optional, indicating the install flow can proceed without requiring that key file. The provided excerpts do not explicitly confirm the exact deprecation rationale or date, nor do they directly describe workload identity migration mechanics.

## Evidence Summary

These pages show Connect agent deployment and admin-cluster registration fields, including an optional `registerServiceAccountKeyPath` in v1.28 config, but do not directly document the deprecation date or an explicit workload-identity replacement statement.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)

## Supporting Pages

### "Upgrade a cluster \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- After the upgrade is complete, if you removed any non-system NetworkPolicy specifications, then reapply them with this command: kubectl --kubeconfig USER CLUSTER KUBECONFIG apply -f NETWORK POLICY NAME .yaml Google API and IAM requirements To upgrade a cluster to version 1.28 and later, you must enable kubernetesmetadata.googleapis.com and grant the kubernetesmetadata.publisher IAM role to the logging-monitoring service account .
- To view cluster details in the file, run the following command: kubectl config view --kubeconfig USER CLUSTER KUBECONFIG Resume an upgrade If a user cluster upgrade is interrupted, you can resume the user cluster upgrade by running the same upgrade command with the --skip-validation-all flag: gkectl upgrade cluster \ --kubeconfig ADMIN CLUSTER KUBECONFIG \ --config USER CLUSTER CONFIG \ --skip-validation-all Console Upgrading a user cluster requires some changes to the admin cluster.
- Grant the kubernetesmetadata.publisher role to the logging-monitoring service account: gcloud projects add-iam-policy-binding PROJECT ID \ --member "serviceAccount: SERVICE ACCOUNT EMAIL " \ --role "roles/kubernetesmetadata.publisher" Replace SERVICE ACCOUNT EMAIL with the email address of your logging-monitoring service account.
- Requirements This section provides information about version-related requirements and requirements for using the GKE On-Prem API clients (the Google Cloud console, the Google Cloud CLI, and Terraform) for upgrades.

### "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- To ensure this, the following role-based access control (RBAC) policies are configured on the service account: An impersonation policy that authorizes the Connect agent to send requests to the Kubernetes API server on behalf of the service account.
- To enable fleet management functionality, Google Cloud deploys the Connect agent and creates a Google service account that represents the project that the cluster is registered to.
- The Connect agent establishes a connection with the service account to handle requests to the cluster's Kubernetes API server.
- The configuration enables some, but not all, of the available features. vc-01-admin-cluster.yaml apiVersion: v1 kind: AdminCluster name: "gke-admin-01" bundlePath: "/var/lib/gke/bundles/gke-onprem-vsphere-1.28.0-gke.1-full.tgz" vCenter: address: "vc01.example" datacenter: "vc-01" cluster: "vc01-workloads-1" resourcePool: "vc-01-pool-1" datastore: "vc01-datastore-1" caCertPath: "/usr/local/google/home/me/certs/vc01-cert.pem"" credentials: fileRef: path: "credential.yaml" entry: "vCenter" network: hostConfig: dnsServers: - "203.0.113.1" - "198.51.100.1" ntpServers: - "216.239.35.4" serviceCIDR: "10.96.232.0/24" podCIDR: "192.168.0.0/16" vCenter: networkName: "vc01-net-1" controlPlaneIPBlock: netmask: "255.255.248.0" gateway: "21.0.143.254" ips: - ip: "21.0.140.226" hostname: "admin-cp-vm-1" - ip: "21.0.141.48" hostname: "admin-cp-vm-2" - ip: "21.0.141.65" hostname: "admin-cp-vm-3" loadBalancer: vips: controlPlaneVIP: "172.16.20.59" kind: "MetalLB" antiAffinityGroups: enabled: true adminMaster: cpus: 4 memoryMB: 16384 replicas: 3 componentAccessServiceAccountKeyPath: "sa-key.json" gkeConnect: projectID: "my-project-123" registerServiceAccountKeyPath: "connect-register-sa-2203040617.json" stackdriver: projectID: "my-project-123" clusterLocation: "us-central1" enableVPC: false serviceAccountKeyPath: "log-mon-sa-2203040617.json" disableVsphereResourceMetrics: false clusterBackup: datastore: "vc-01-datastore-bu" autoRepair: enabled: true osImageType: "ubuntu containerd" Validate your configuration file After you've filled in your admin cluster configuration file, run gkectl check-config to verify that the file is valid: gkectl check-config --config ADMIN CLUSTER CONFIG Replace ADMIN CLUSTER CONFIG with the path of your admin cluster configuration file.

### "Admin cluster configuration file 1.28 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- Source ID: `site-docs-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Defaults to false. enabled: false (Optional) Specify the proxy configuration proxy: The URL of the proxy url: "" The domains and IP addresses excluded from proxying noProxy: "" # (Optional) Use a private registry to host GKE images privateRegistry: # Do not include the scheme with your registry address address: "" credentials: # reference to external credentials file fileRef: # read credentials from this file path: "" # entry in the credential file entry: "" # The absolute or relative path to the CA certificate for this registry caCertPath: "" (Required): The absolute or relative path to the GCP service account key for pulling GKE images componentAccessServiceAccountKeyPath: "" (Required) Specify which GCP project to register your GKE OnPrem cluster to gkeConnect: projectID: "" # (Optional) The location of the GKE Hub and Connect service where the cluster is # registered to.
- Default to "global" when unspecified. location: us-central1 The absolute or relative path to the key file for a GCP service account used to register the cluster registerServiceAccountKeyPath: "" # (Optional) Specify if you wish to explicitly enable/disable the cloud hosted gkeonprem # API to enable/disable cluster lifecycle management from gcloud UI and Terraform. gkeOnPremAPI: enabled: false (Required) Specify which GCP project to connect your logs and metrics to stackdriver: The project ID for logs and metrics.
- It should be the same with gkeconnect.projectID. projectID: "" A GCP region where you would like to store logs and metrics for this cluster. clusterLocation: us-central1 enableVPC: false The absolute or relative path to the key file for a GCP service account used to send logs and metrics from the cluster serviceAccountKeyPath: "" (Optional) Disable vsphere resource metrics collection from vcenter.
- It should be the same with gkeconnect.projectID. projectID: "" A GCP region where you would like to store audit logs for this cluster. clusterLocation: us-central1 The absolute or relative path to the key file for a GCP service account used to send audit logs from the cluster serviceAccountKeyPath: "" # (Optional/Preview) Configure backups for admin cluster.

