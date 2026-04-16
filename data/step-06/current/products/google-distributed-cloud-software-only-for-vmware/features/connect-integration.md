---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.311Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Connect integration"
feature_slug: "connect-integration"
latest_feature_date: "2019-04-11"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/connect-to-cluster-console"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation"
keywords:
  - "connect"
  - "integration"
  - "gke"
  - "prem"
  - "clusters"
  - "automatically"
  - "back"
---

# Connect integration

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

GKE On-Prem clusters automatically connect back to Google using Connect.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, Connect integration refers to the configuration and enrollment path that links GKE On-Prem clusters to Google management services, including the GKE On-Prem API and GKE Connect service. User clusters created via supported tools are automatically enrolled in GKE On-Prem API, enabling console-based lifecycle management and access through the Connect gateway, while admin cluster setup includes a `gkeConnect` section with project and registration service-account key inputs for cluster registration.

## Evidence Summary

These official Google docs confirm automatic cluster enrollment, Connect-related registration/configuration elements, and console/Connect-gateway management flow for GKE On-Prem clusters.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/connect-to-cluster-console](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/connect-to-cluster-console)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation)

## Supporting Pages

### "Manage clusters from the Google Cloud console \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/connect-to-cluster-console](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/connect-to-cluster-console)
- Source ID: `site-docs-reference`
- Final score: 151
- Re-rank relevance: STRONG
- Re-rank rationale: It repeatedly references `gkeConnect`-based registration and re-registration with a connect-register service account, which is core to Connect-based fleet management.

Evidence snippets:
- MEMBER is the user's email address in the format user:emailID , for example: user:alice@example.com Enable cluster lifecycle management in the console User clusters created by using standard tools (the console, the gcloud CLI, or Terraform) are automatically enrolled in the GKE On-Prem API, and let you perform cluster lifecycle management tasks in the console.
- More information Fleet management overview Work with clusters from the Google Cloud console Connect overview Connect Agent overview Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Be sure to include your Google Account in the command because the command overwrites the grant list with the users that you specify in the command. gcloud container vmware clusters update USER CLUSTER NAME \ --admin-users YOUR GOOGLE ACCOUNT \ --admin-users ADMIN GOOGLE ACCOUNT 1 \ In addition to granting the Kubernetes clusterrole/cluster-admin role, the command grants the RBAC policies the users need to access the cluster through the Connect gateway .
- Home Technology areas Google Distributed Cloud Documentation GDC for VMware Guides Send feedback Manage clusters from the Google Cloud console Stay organized with collections Save and categorize content based on your preferences.

### "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- The configuration enables some, but not all, of the available features. vc-01-admin-cluster.yaml apiVersion: v1 kind: AdminCluster name: "gke-admin-01" bundlePath: "/var/lib/gke/bundles/gke-onprem-vsphere-1.28.0-gke.1-full.tgz" vCenter: address: "vc01.example" datacenter: "vc-01" cluster: "vc01-workloads-1" resourcePool: "vc-01-pool-1" datastore: "vc01-datastore-1" caCertPath: "/usr/local/google/home/me/certs/vc01-cert.pem"" credentials: fileRef: path: "credential.yaml" entry: "vCenter" network: hostConfig: dnsServers: - "203.0.113.1" - "198.51.100.1" ntpServers: - "216.239.35.4" serviceCIDR: "10.96.232.0/24" podCIDR: "192.168.0.0/16" vCenter: networkName: "vc01-net-1" controlPlaneIPBlock: netmask: "255.255.248.0" gateway: "21.0.143.254" ips: - ip: "21.0.140.226" hostname: "admin-cp-vm-1" - ip: "21.0.141.48" hostname: "admin-cp-vm-2" - ip: "21.0.141.65" hostname: "admin-cp-vm-3" loadBalancer: vips: controlPlaneVIP: "172.16.20.59" kind: "MetalLB" antiAffinityGroups: enabled: true adminMaster: cpus: 4 memoryMB: 16384 replicas: 3 componentAccessServiceAccountKeyPath: "sa-key.json" gkeConnect: projectID: "my-project-123" registerServiceAccountKeyPath: "connect-register-sa-2203040617.json" stackdriver: projectID: "my-project-123" clusterLocation: "us-central1" enableVPC: false serviceAccountKeyPath: "log-mon-sa-2203040617.json" disableVsphereResourceMetrics: false clusterBackup: datastore: "vc-01-datastore-bu" autoRepair: enabled: true osImageType: "ubuntu containerd" Validate your configuration file After you've filled in your admin cluster configuration file, run gkectl check-config to verify that the file is valid: gkectl check-config --config ADMIN CLUSTER CONFIG Replace ADMIN CLUSTER CONFIG with the path of your admin cluster configuration file.
- If the regions aren't the same, cluster creation fails. gkeOnPremAPI If the GKE On-Prem API is enabled in your Google Cloud project, all clusters in the project are enrolled in the GKE On-Prem API automatically in the region configured in stackdriver.clusterLocation .
- This setting specifies the region where the following APIs and services run: GKE On-Prem API ( gkeonprem.googleapis.com ) Fleet service ( gkehub.googleapis.com ) Connect service ( gkeconnect.googleapis.com ) This setting also controls the region in which the following are stored: The cluster metadata that the GKE On-Prem API needs to manage the cluster lifecycle The Cloud Logging and Cloud Monitoring data of system components The Admin Audit log created by Cloud Audit Logs The Google Cloud API Location field corresponds to the --location flag in the gkectl register bootstrap command.
- If you include gkeConnect.location , the region that you specify must be the same as the region configured in cloudAuditLogging.clusterLocation , stackdriver.clusterLocation , and gkeOnPremAPI.location .

### "Create an admin workstation \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Make sure the version matches the one you used to download gkectl : gcloud storage cp gs://gke-on-prem-release/gke-onprem-bundle/ VERSION /gke-onprem-vsphere- VERSION .tgz ./ Service accounts and keys Make sure you have created the following required service accounts and JSON key files: component access connect-register logging-monitoring Also Make sure you have created any optional service service accounts and JSON key files that you need: audit logging Binary Authorization Place all of your JSON key files in the home directory of your admin workstation.
- See the fields that are already filled in. vCenter: credentials: fileRef: path: credential.yaml entry: vCenter adminWorkstation: name: gke-admin-ws-... cpus: 4 memoryMB: 8192 diskGB: 100 dataDiskName: gke-on-prem-admin-workstation-data-disk,,,.vmdk dataDiskMB: 512 network: ntpServer: ntp.ubuntu.com Warning: If you will be using static IPs for your admin and user clusters, make sure that admin workstation name specified in admin-ws-config.yaml isn't included as a hostname in the IP block files admin-ip-block.yaml and user-ip-block.yaml .
- Otherwise you must manually copy the keys to the home directory of your admin workstation: Connect-register service account Logging-monitoring service account If you created any of the following service accounts, you must manually copy the keys for those service accounts to the home directory of your admin workstation: Audit logging service account Binary Authorization service account Restoring the admin workstation from a backup file When you upgrade an admin workstation, the gkeadm upgrade command saves a backup file.
- If you want to use a GKE On-Prem API client to manage your user clusters, then you must enable audit logging in your admin cluster.

