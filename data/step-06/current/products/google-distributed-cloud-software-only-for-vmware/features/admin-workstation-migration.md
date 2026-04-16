---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.254Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Admin workstation migration"
feature_slug: "admin-workstation-migration"
latest_feature_date: "2020-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28"
keywords:
  - "admin"
  - "workstation"
  - "migration"
  - "gkeadm"
  - "automatically"
  - "migrates"
  - "information"
  - "previous"
---

# Admin workstation migration

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Gkeadm automatically migrates information from the previous admin workstation version.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, admin workstation migration is operationally represented by reusing artifacts from a previously created gkeadm admin workstation when creating an admin cluster: gkeadm generates a reusable admin cluster configuration template, copies the CA certificate to the workstation, and administrators are directed to copy prior vCenter values from the old admin workstation config into the new admin cluster file. The admin workstation may also retain proxy configuration behavior from earlier setup unless explicitly changed. The provided docs describe this reuse pattern but do not explicitly state an end-to-end automatic migration process between workstation versions.

## Evidence Summary

The pages document config reuse for admin cluster creation from a gkeadm-created admin workstation, including generated templates, copied CA/vCenter values, and preserved proxy settings.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)

## Supporting Pages

### "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- If you used gkeadm to create your admin workstation, open your admin workstation configuration file so you can copy values from the vCenter section to the corresponding placeholder variables. resource "google gkeonprem vmware admin cluster" "admin-cluster-metallb" { provider = google-beta name = " ADMIN CLUSTER NAME " project = " PROJECT ID " location = " REGION " description = " DESCRIPTION " bootstrap cluster membership = "projects/ PROJECT ID /locations/ REGION /memberships/bootstrap- ADMIN CLUSTER NAME " on prem version = " VERSION " image type = " IMAGE TYPE " vcenter { address = " VCENTER ADDRESS " datacenter = " DATA CENTER " cluster = " VCENTER CLUSTER " resource pool = " RESOURCE POOL " datastore = " DATASTORE " ca cert data = " CA CERT DATA " } network config { service address cidr blocks = [" 10.96.232.0/24 "] pod address cidr blocks = [" 192.168.0.0/16 "] vcenter network = " NETWORK " dhcp ip config { enabled = true } host config { dns servers = [" DNS SERVERS "] ntp servers = [" NTP SERVERS "] } ha control plane config { control plane ip block { gateway = " GATEWAY " netmask = " NETMASK " ips { hostname = " CONTROL PLANE HOST 1 " ip = " CONTROL PLANE NODE IP 1 " } ips { hostname = " CONTROL PLANE HOST 2 " ip = " CONTROL PLANE NODE IP 2 " } ips { hostname = " CONTROL PLANE HOST 3 " ip = " CONTROL PLANE NODE IP 3 " } } } } control plane node { cpus = NUM CPUS memory = MEMORY replicas = 3 } load balancer { vip config { control plane vip = " CONTROL PLANE VIP " } metal lb config { enabled = true } } } Replace the following: ADMIN CLUSTER NAME : the name for the admin cluster.
- The version you select here must match the version of the bundle that you specify in the --bundle-path flag in the gkectl register bootstrap command. vCenter configuration If you used gkeadm to create your admin workstation, open your admin workstation configuration file so you can copy values from the vCenter section to the fields in the console.
- If you used gkeadm to create your admin workstation, you can use the value from the caCertPath field in the admin workstation configuration file, which is the path on your local computer. gkeadm copied the CA certificate file to your admin workstation.
- If you didn't use gkeadm to create your admin workstation, then generate admin-cluster.yaml by running this command on your admin workstation: gkectl create-config admin This configuration file is for creating your admin cluster.

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- Generating a template for your configuration file If you used gkeadm to create your admin workstation, then gkeadm generated a template for your admin cluster configuration file.
- Also, your admin workstation is automatically configured to use this same proxy server unless you set the HTTPS PROXY environment variable on your admin workstation.
- If you did not use gkeadm to create your admin workstation, you can use gkectl to generate a template for your admin cluster configuration file.
- Invalid for HA admin cluster as the path is generated automatically under # the root directory "anthos" in the specified datastore. dataDisk: "" (Required) Network configuration network: (Required when using "static" ipMode.type; or "Seesaw" loadBalancer.kind; or using amdin cluster HA mode) This section overrides ipMode.ipBlockFilePath values when ipMode.type=static.

### "Admin cluster configuration file 1.28 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Generating a template for your configuration file If you used gkeadm to create your admin workstation, then gkeadm generated a template for your admin cluster configuration file.
- Also, your admin workstation is automatically configured to use this same proxy server unless you set the HTTPS PROXY environment variable on your admin workstation.
- If you did not use gkeadm to create your admin workstation, you can use gkectl to generate a template for your admin cluster configuration file.
- Example: network: controlPlaneIPBlock: ips: - ip: "172.16.22.6" hostname: "admin-cp-vm-1" - ip: "172.16.22.7" hostname: "admin-cp-vm-2" - ip: "172.16.22.8" hostname: "admin-cp-vm-3" loadBalancer This section holds information about the load balancer for your admin cluster. loadBalancer.vips.controlPlaneVIP Required Immutable String The IP address that you have chosen to configure on the load balancer for the Kubernetes API server of the admin cluster.

