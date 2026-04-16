---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.303Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Declarative installation from a single configuration file"
feature_slug: "declarative-installation-from-a-single-configuration-file"
latest_feature_date: "2019-06-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-workstation-configuration-file"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29"
keywords:
  - "declarative"
  - "installation"
  - "single"
  - "configuration"
  - "file"
  - "gke"
  - "prem"
  - "can"
---

# Declarative installation from a single configuration file

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

GKE On-Prem installation can be performed declaratively from a single configuration file.

## Extended Definition

Google Distributed Cloud (software only) for VMware uses declarative configuration files to define installation settings for GKE On-Prem resources, including admin workstation and admin cluster setup values (such as credentials, networking, compute, registry, and GCP project registration fields). The documentation shows users work from generated templates and populate these fields in a single file, and references `gkectl` commands to produce such configuration-file templates for installation-related setup.

## Evidence Summary

The cited Google Cloud docs provide configuration-file templates, field-by-field parameters, and template generation commands for admin workstation/admin cluster setup, indicating installation-related configuration is performed declaratively via file-driven definitions.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-workstation-configuration-file](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-workstation-configuration-file)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29)

## Supporting Pages

### "Admin workstation configuration file \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-workstation-configuration-file](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-workstation-configuration-file)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: It details one configuration file schema for admin workstation setup, but does not directly describe a full declarative end-to-end installation flow.

Evidence snippets:
- Example of a completed configuration file Here is an example of a completed admin workstation configuration file: gcp: componentAccessServiceAccountKeyPath: "my-key-folder/component-access-key.json" vCenter: credentials: address: "203.0.113.1" username: "administrator.vsphere.local" password: "#STyZ2T#Ko2o" datacenter: "MY-DATACENTER" datastore: "MY-DATASTORE" cluster: "MY-CLUSTER" network: "MY-VM-NETWORK" resourcePool: "MY-POOL" caCertPath: "/usr/local/google/home/me/certs/the-root.cert" proxyUrl: "" adminWorkstation: name: "my-admin-workstation" cpus: 4 memoryMB: 8192 diskGB: 50 dataDiskName: "gke-on-prem-admin-workstation-data-disk/gke-admin-ws-200617-113711-data-disk.vmdk" dataDiskMB: 512 network: ipAllocationMode: "static" hostConfig: ip: "172.16.5.1" gateway: "172.16.6.254" netmask: "255.255.248.0" dns: - "172.16.255.1" - "172.16.255.2 proxyUrl: "" ntpServer: "216.239.35.0" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Template Click to see the generated template. gcp : Path of the component access service account's JSON key file componentAccessServiceAccountKeyPath : "" Specify which vCenter resources to use vCenter : The credentials and address GKE On-Prem should use to connect to vCenter credentials : address : "" reference to vCenter credentials file fileRef : read credentials from this file path : credential.yaml entry in the credential file entry : vCenter datacenter : "" datastore : "" cluster : "" network : "" vSphere vm folder to deploy vms into. defaults to datacenter top level folder folder : "" resourcePool : "" Provide the path to vCenter CA certificate pub key for SSL verification caCertPath : "" The URL of the proxy for the jump host proxyUrl : "" adminWorkstation : name : gke-admin-ws-230809-173521 cpus : 4 memoryMB : 8192 The boot disk size of the admin workstation in GB.
- 255.255.255.0) netmask: "" # The list of DNS nameservers to be used by the admin workstation dns: - "" The URL of the proxy for the admin workstation proxyUrl : "" ntpServer : ntp.ubuntu.com Filling in your configuration file In your configuration file, enter field values as described in the following sections. gcp This section holds information about your component access service account. gcp.componentAccessServiceAccountKeyPath String.
- CN = my-host.my-domain.example The output might also include one or more DNS names under Subject Alternative Name : X509v3 Subject Alternative Name: DNS:vcenter.my-domain.example Choose the Subject Common Name or one of the DNS names under Subject Alternative Name to use as the value of vcenter.credentials.address in your configuration file.

### "Admin cluster configuration file 1.28 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Defaults to false. enabled: false (Optional) Specify the proxy configuration proxy: The URL of the proxy url: "" The domains and IP addresses excluded from proxying noProxy: "" # (Optional) Use a private registry to host GKE images privateRegistry: # Do not include the scheme with your registry address address: "" credentials: # reference to external credentials file fileRef: # read credentials from this file path: "" # entry in the credential file entry: "" # The absolute or relative path to the CA certificate for this registry caCertPath: "" (Required): The absolute or relative path to the GCP service account key for pulling GKE images componentAccessServiceAccountKeyPath: "" (Required) Specify which GCP project to register your GKE OnPrem cluster to gkeConnect: projectID: "" # (Optional) The location of the GKE Hub and Connect service where the cluster is # registered to.
- It is a good idea to choose a region that is near your on-premises data center For new clusters, if you include the gkeOnPremAPI and stackdriver sections in the configuration file, the region that you set here must be the same region that you set in gkeConnect.location , gkeOnPremAPI.location , and stackdriver.clusterLocation .
- For new clusters, if you include the gkeOnPremAPI and cloudAuditLogging sections in the configuration file, the region that you set here must be the same region that you set in cloudAuditLogging.clusterLocation , gkeConnect.location , and gkeOnPremAPI.location .
- To generate a template for your admin cluster configuration file: gkectl create-config admin --config= OUTPUT FILENAME --gke-on-prem-version= VERSION Replace OUTPUT FILENAME with a path of your choice for the generated template.

### "Admin cluster configuration file 1.29 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Defaults to false. enabled: false (Optional) Specify the proxy configuration proxy: The URL of the proxy url: "" The domains and IP addresses excluded from proxying noProxy: "" # (Optional) Use a private registry to host GKE images privateRegistry: # Do not include the scheme with your registry address address: "" credentials: # reference to external credentials file fileRef: # read credentials from this file path: "" # entry in the credential file entry: "" # The absolute or relative path to the CA certificate for this registry caCertPath: "" (Required): The absolute or relative path to the GCP service account key for pulling GKE images componentAccessServiceAccountKeyPath: "" (Required) Specify which GCP project to register your GKE OnPrem cluster to gkeConnect: projectID: "" # (Optional) The location of the GKE Hub and Connect service where the cluster is # registered to.
- It is a good idea to choose a region that is near your on-premises data center For new clusters, if you include the gkeOnPremAPI and stackdriver sections in the configuration file, the region that you set here must be the same region that you set in gkeConnect.location , gkeOnPremAPI.location , and stackdriver.clusterLocation .
- For new clusters, if you include the gkeOnPremAPI and cloudAuditLogging sections in the configuration file, the region that you set here must be the same region that you set in cloudAuditLogging.clusterLocation , gkeConnect.location , and gkeOnPremAPI.location .
- To generate a template for your admin cluster configuration file: gkectl create-config admin --config= OUTPUT FILENAME --gke-on-prem-version= VERSION Replace OUTPUT FILENAME with a path of your choice for the generated template.

