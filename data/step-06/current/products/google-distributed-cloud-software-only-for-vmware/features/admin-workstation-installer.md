---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.271Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Admin workstation installer"
feature_slug: "admin-workstation-installer"
latest_feature_date: "2020-03-23"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster-topology-domains"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster"
keywords:
  - "admin"
  - "workstation"
  - "installer"
  - "helps"
  - "create"
  - "prepare"
---

# Admin workstation installer

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

A new installer helps create and prepare the admin workstation.

## Extended Definition

In Google Distributed Cloud (software-only) for VMware, the admin workstation installer is the initial setup process for preparing an admin workstation that is used to manage GDC VMware resources, including generating the workstation configuration and ensuring required credentials and service accounts are in place. The documented workflow uses gkeadm/gkectl commands to create and configure the workstation (including networking settings, CA path, and vCenter details), and then relies on that prepared workstation to run admin cluster operations.

## Evidence Summary

The cited pages document the command-based creation and preparation of the admin workstation, including IAM prerequisites, required keys and config artifacts, and its role as the starting environment for creating admin clusters.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster-topology-domains](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster-topology-domains)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)

## Supporting Pages

### "Create an admin workstation \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: The page describes gkeadm creating a preconfigured VM versus manually setting up a workstation, but does not explicitly document a standalone installer feature.

Evidence snippets:
- To grant the required role to your SDK account: Linux and macOS gcloud projects add-iam-policy-binding PROJECT ID \ --member="user: ACCOUNT " \ --role="roles/serviceusage.serviceUsageAdmin" Windows gcloud projects add-iam-policy-binding PROJECT ID ^ --member="user: ACCOUNT " ^ --role="roles/serviceusage.serviceUsageAdmin" Replace the following: PROJECT ID : the ID of the parent Google Cloud project of your component access service account ACCOUNT : your SDK account To grant additional roles in case you want gkeadm to automatically create service accounts: Linux and macOS gcloud projects add-iam-policy-binding PROJECT ID \ --member="user: ACCOUNT " \ --role="roles/resourcemanager.projectIamAdmin" gcloud projects add-iam-policy-binding PROJECT ID \ --member="user: ACCOUNT " \ --role="roles/iam.serviceAccountCreator" gcloud projects add-iam-policy-binding PROJECT ID \ --member="user: ACCOUNT " \ --role="roles/iam.serviceAccountKeyAdmin" Windows gcloud projects add-iam-policy-binding PROJECT ID ^ --member="user: ACCOUNT " ^ --role="roles/resourcemanager.projectIamAdmin" gcloud projects add-iam-policy-binding PROJECT ID ^ --member="user: ACCOUNT " ^ --role="roles/iam.serviceAccountCreator" gcloud projects add-iam-policy-binding PROJECT ID ^ --member="user: ACCOUNT " ^ --role="roles/iam.serviceAccountKeyAdmin" Replace the following: PROJECT ID : the ID of the parent project of your component access service account ACCOUNT : your SDK account Creating your admin workstation Enter this command to create your admin workstation.
- For information on how to fill in the fields, Admin workstation configuration file . gcp: componentAccessServiceAccountKeyPath: " Fill in " vCenter: credentials: address: " Fill in " datacenter: " Fill in " datastore: " Fill in " cluster: " Fill in " network: " Fill in " resourcePool: " Fill in " caCertPath: " Fill in " If you want to create your admin workstation inside a vSphere VM folder, fill in the vCenter.folder field: vCenter: folder: " Fill in " If your admin workstation will be behind a proxy server, fill in the proxyURL field: adminWorkstation: proxyURL: " Fill in " If you want your admin workstation to get its IP address from a DHCP server, set ipAllocationMode to "dhcp" , and remove the hostconfig section: adminWorkstation: network: ipAllocationMode: "dhcp" If you want to specify a static IP address for your admin workstation, set ipAllocationMode to "static" , and fill in the hostconfig section: adminWorkstation: network: ipAllocationMode: "static" hostconfig: ip: " Fill in " gateway: " Fill in " netmask: " Fill in " dns: - " Fill in " Note: Check the vCenter network to make sure the static IP address that you enter is not already in use.
- Make sure the version matches the one you used to download gkectl : gcloud storage cp gs://gke-on-prem-release/gke-onprem-bundle/ VERSION /gke-onprem-vsphere- VERSION .tgz ./ Service accounts and keys Make sure you have created the following required service accounts and JSON key files: component access connect-register logging-monitoring Also Make sure you have created any optional service service accounts and JSON key files that you need: audit logging Binary Authorization Place all of your JSON key files in the home directory of your admin workstation.
- Otherwise you must manually copy the keys to the home directory of your admin workstation: Connect-register service account Logging-monitoring service account If you created any of the following service accounts, you must manually copy the keys for those service accounts to the home directory of your admin workstation: Audit logging service account Binary Authorization service account Restoring the admin workstation from a backup file When you upgrade an admin workstation, the gkeadm upgrade command saves a backup file.

### "Create an admin cluster for use in topology domains \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster-topology-domains](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster-topology-domains)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- See the following for how to obtain the needed information: vCenter user account privileges Determine your vCenter server address Getting your vCenter CA root certificate Fill in your admin cluster configuration file If you used gkeadm to create your admin workstation, it generated a configuration file named admin-cluster.yaml .
- If you didn't use gkeadm to create your admin workstation, then generate admin-cluster.yaml by running this command on your admin workstation: gkectl create-config admin This configuration file is for creating your admin cluster.
- Before you begin Make sure you have set up and can sign in to your admin workstation as described in Create an admin workstation .
- The admin workstation has the tools you need to create your admin cluster.

### "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- If you used gkeadm to create your admin workstation, open your admin workstation configuration file so you can copy values from the vCenter section to the corresponding placeholder variables. resource "google gkeonprem vmware admin cluster" "admin-cluster-metallb" { provider = google-beta name = " ADMIN CLUSTER NAME " project = " PROJECT ID " location = " REGION " description = " DESCRIPTION " bootstrap cluster membership = "projects/ PROJECT ID /locations/ REGION /memberships/bootstrap- ADMIN CLUSTER NAME " on prem version = " VERSION " image type = " IMAGE TYPE " vcenter { address = " VCENTER ADDRESS " datacenter = " DATA CENTER " cluster = " VCENTER CLUSTER " resource pool = " RESOURCE POOL " datastore = " DATASTORE " ca cert data = " CA CERT DATA " } network config { service address cidr blocks = [" 10.96.232.0/24 "] pod address cidr blocks = [" 192.168.0.0/16 "] vcenter network = " NETWORK " dhcp ip config { enabled = true } host config { dns servers = [" DNS SERVERS "] ntp servers = [" NTP SERVERS "] } ha control plane config { control plane ip block { gateway = " GATEWAY " netmask = " NETMASK " ips { hostname = " CONTROL PLANE HOST 1 " ip = " CONTROL PLANE NODE IP 1 " } ips { hostname = " CONTROL PLANE HOST 2 " ip = " CONTROL PLANE NODE IP 2 " } ips { hostname = " CONTROL PLANE HOST 3 " ip = " CONTROL PLANE NODE IP 3 " } } } } control plane node { cpus = NUM CPUS memory = MEMORY replicas = 3 } load balancer { vip config { control plane vip = " CONTROL PLANE VIP " } metal lb config { enabled = true } } } Replace the following: ADMIN CLUSTER NAME : the name for the admin cluster.
- The version you select here must match the version of the bundle that you specify in the --bundle-path flag in the gkectl register bootstrap command. vCenter configuration If you used gkeadm to create your admin workstation, open your admin workstation configuration file so you can copy values from the vCenter section to the fields in the console.
- This field is already filled in for you. vCenter The fields in this section are already filled in with values that you entered when you created your admin workstation. enableAdvancedCluster In version 1.31, if you want to enable the advanced cluster feature, set enableAdvancedCluster to true .
- If you used gkeadm to create your admin workstation, you can use the value from the caCertPath field in the admin workstation configuration file, which is the path on your local computer. gkeadm copied the CA certificate file to your admin workstation.

