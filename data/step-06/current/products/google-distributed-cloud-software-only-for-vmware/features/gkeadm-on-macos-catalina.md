---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.248Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "gkeadm on macOS Catalina"
feature_slug: "gkeadm-on-macos-catalina"
latest_feature_date: "2020-09-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading"
keywords:
  - "gkeadm"
  - "macos"
  - "catalina"
  - "can"
  - "run"
---

# gkeadm on macOS Catalina

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Gkeadm can run on macOS Catalina.

## Extended Definition

The feature is the documented support for running gkeadm/gkectl workflow commands from a macOS environment to create and configure an admin workstation, then use that workstation context when creating an admin cluster and upgrading or rolling back the admin workstation in Google Distributed Cloud (software only) for VMware. The snippets show macOS-specific command guidance (along with Linux and Windows variants) for IAM setup and admin-workstation lifecycle commands, but they do not explicitly reference macOS Catalina by name.

## Evidence Summary

The pages collectively show gkeadm/admin-workstation command usage on macOS for create/configure/upgrade tasks, but only as generic macOS support, not Catalina-specific verification.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)

## Supporting Pages

### "Create an admin workstation \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- To grant the required role to your SDK account: Linux and macOS gcloud projects add-iam-policy-binding PROJECT ID \ --member="user: ACCOUNT " \ --role="roles/serviceusage.serviceUsageAdmin" Windows gcloud projects add-iam-policy-binding PROJECT ID ^ --member="user: ACCOUNT " ^ --role="roles/serviceusage.serviceUsageAdmin" Replace the following: PROJECT ID : the ID of the parent Google Cloud project of your component access service account ACCOUNT : your SDK account To grant additional roles in case you want gkeadm to automatically create service accounts: Linux and macOS gcloud projects add-iam-policy-binding PROJECT ID \ --member="user: ACCOUNT " \ --role="roles/resourcemanager.projectIamAdmin" gcloud projects add-iam-policy-binding PROJECT ID \ --member="user: ACCOUNT " \ --role="roles/iam.serviceAccountCreator" gcloud projects add-iam-policy-binding PROJECT ID \ --member="user: ACCOUNT " \ --role="roles/iam.serviceAccountKeyAdmin" Windows gcloud projects add-iam-policy-binding PROJECT ID ^ --member="user: ACCOUNT " ^ --role="roles/resourcemanager.projectIamAdmin" gcloud projects add-iam-policy-binding PROJECT ID ^ --member="user: ACCOUNT " ^ --role="roles/iam.serviceAccountCreator" gcloud projects add-iam-policy-binding PROJECT ID ^ --member="user: ACCOUNT " ^ --role="roles/iam.serviceAccountKeyAdmin" Replace the following: PROJECT ID : the ID of the parent project of your component access service account ACCOUNT : your SDK account Creating your admin workstation Enter this command to create your admin workstation.
- Otherwise you must manually copy the keys to the home directory of your admin workstation: Connect-register service account Logging-monitoring service account If you created any of the following service accounts, you must manually copy the keys for those service accounts to the home directory of your admin workstation: Audit logging service account Binary Authorization service account Restoring the admin workstation from a backup file When you upgrade an admin workstation, the gkeadm upgrade command saves a backup file.
- For example: admin-cluster.yaml user-cluster.yaml vcenter-ca-cert.pem component-access-key.json Verify that gkeadm activated your component access service account on your admin workstation: gcloud config get-value account Copying JSON key files to your admin workstation Before you create a cluster, the JSON key files for your service accounts must be on your admin workstation in the home directory.
- This is so that gkeadm can enable services on the Google Cloud project. serviceUsage.serviceUsageAdmin If you choose to have gkeadm automatically create service accounts for you, then your SDK account must also have the following roles on the parent project of your component access service account.

### "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- If you used gkeadm to create your admin workstation, open your admin workstation configuration file so you can copy values from the vCenter section to the corresponding placeholder variables. resource "google gkeonprem vmware admin cluster" "admin-cluster-metallb" { provider = google-beta name = " ADMIN CLUSTER NAME " project = " PROJECT ID " location = " REGION " description = " DESCRIPTION " bootstrap cluster membership = "projects/ PROJECT ID /locations/ REGION /memberships/bootstrap- ADMIN CLUSTER NAME " on prem version = " VERSION " image type = " IMAGE TYPE " vcenter { address = " VCENTER ADDRESS " datacenter = " DATA CENTER " cluster = " VCENTER CLUSTER " resource pool = " RESOURCE POOL " datastore = " DATASTORE " ca cert data = " CA CERT DATA " } network config { service address cidr blocks = [" 10.96.232.0/24 "] pod address cidr blocks = [" 192.168.0.0/16 "] vcenter network = " NETWORK " dhcp ip config { enabled = true } host config { dns servers = [" DNS SERVERS "] ntp servers = [" NTP SERVERS "] } ha control plane config { control plane ip block { gateway = " GATEWAY " netmask = " NETMASK " ips { hostname = " CONTROL PLANE HOST 1 " ip = " CONTROL PLANE NODE IP 1 " } ips { hostname = " CONTROL PLANE HOST 2 " ip = " CONTROL PLANE NODE IP 2 " } ips { hostname = " CONTROL PLANE HOST 3 " ip = " CONTROL PLANE NODE IP 3 " } } } } control plane node { cpus = NUM CPUS memory = MEMORY replicas = 3 } load balancer { vip config { control plane vip = " CONTROL PLANE VIP " } metal lb config { enabled = true } } } Replace the following: ADMIN CLUSTER NAME : the name for the admin cluster.
- The version you select here must match the version of the bundle that you specify in the --bundle-path flag in the gkectl register bootstrap command. vCenter configuration If you used gkeadm to create your admin workstation, open your admin workstation configuration file so you can copy values from the vCenter section to the fields in the console.
- If you used gkeadm to create your admin workstation, you can use the value from the caCertPath field in the admin workstation configuration file, which is the path on your local computer. gkeadm copied the CA certificate file to your admin workstation.
- If you didn't use gkeadm to create your admin workstation, then generate admin-cluster.yaml by running this command on your admin workstation: gkectl create-config admin This configuration file is for creating your admin cluster.

### "Upgrade a cluster \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- Source ID: `site-docs-root`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- The output information file has this format: Admin workstation version: GKEADM VERSION Created using gkeadm version: GKEADM VERSION VM name: ADMIN WS NAME IP: ADMIN WS IP SSH key used: FULL PATH TO ADMIN WS SSH KEY To access your admin workstation: ssh -i FULL-PATH-TO-ADMIN-WS-SSH-KEY ubuntu@ ADMIN-WS-IP Here is a sample output information file: Admin workstation version: v1.10.3-gke.49 Created using gkeadm version: v1.10.3-gke.49 VM name: admin-ws-janedoe IP: 172.16.91.21 SSH key used: /usr/local/google/home/janedoe/.ssh/gke-admin-workstation Upgraded from (rollback version): v1.10.0-gke.194 To access your admin workstation: ssh -i /usr/local/google/home/janedoe/.ssh/gke-admin-workstation ubuntu@172.16.91.21 Create the file in an editor, substituting the appropriate parameters.
- Upgrade your admin workstation The way you upgrade your admin workstation depends on how you created it: gkeadm or user-managed . gkeadm Locate required files Before you created your admin workstation, you filled in an admin workstation configuration file that was generated by gkeadm create config .
- To roll back your admin workstation to the previous version: gkeadm rollback admin-workstation --config= AW CONFIG FILE You can omit --config= AW CONFIG FILE if your admin workstation configuration file is the default admin-ws-config.yaml .
- Upgrade your admin workstation: gkeadm upgrade admin-workstation --config AW CONFIG FILE \ --info-file INFO FILE Replace the following: AW CONFIG FILE : the path of your admin workstation configuration file.

