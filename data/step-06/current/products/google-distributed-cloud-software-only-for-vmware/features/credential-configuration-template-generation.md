---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.241Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Credential configuration template generation"
feature_slug: "credential-configuration-template-generation"
latest_feature_date: "2020-10-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-workstation-configuration-file"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28"
keywords:
  - "credential"
  - "configuration"
  - "template"
  - "generation"
  - "gkectl"
  - "create"
  - "config"
  - "command"
---

# Credential configuration template generation

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

The gkectl create-config credential command generates credential configuration templates.

## Extended Definition

Google Distributed Cloud (software only) for VMware documents command-driven template generation for cluster and workstation configuration, including creation of a credentials configuration template file named `credential.yaml`. The `gkectl create-config` workflow is shown for generating admin cluster configuration templates with user-specified output paths and version, which is part of the same documented template-generation capability set. While the provided snippets explicitly confirm a credential template filename, they provide only indirect command context for credential-template generation, so details are supported but somewhat limited.

## Evidence Summary

The cited Google Cloud docs collectively confirm template generation commands for GDC VMware admin configuration files and explicitly note that a credentials configuration template file named `credential.yaml` is created.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-workstation-configuration-file](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-workstation-configuration-file)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)

## Supporting Pages

### "Admin workstation configuration file \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-workstation-configuration-file](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-workstation-configuration-file)
- Source ID: `site-docs-reference`
- Final score: 229
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly documents generating an admin workstation configuration template via `gkeadm create config`, including the generated file structure.

Evidence snippets:
- It also creates a template for a credentials configuration file named credential.yaml .
- When you run gkeadm create config , it creates a template for an admin workstation configuration file named admin-ws-config.yaml .
- Generating a template for your configuration file Download the gkeadm command-line tool.
- Example of a completed configuration file Here is an example of a completed admin workstation configuration file: gcp: componentAccessServiceAccountKeyPath: "my-key-folder/component-access-key.json" vCenter: credentials: address: "203.0.113.1" username: "administrator.vsphere.local" password: "#STyZ2T#Ko2o" datacenter: "MY-DATACENTER" datastore: "MY-DATASTORE" cluster: "MY-CLUSTER" network: "MY-VM-NETWORK" resourcePool: "MY-POOL" caCertPath: "/usr/local/google/home/me/certs/the-root.cert" proxyUrl: "" adminWorkstation: name: "my-admin-workstation" cpus: 4 memoryMB: 8192 diskGB: 50 dataDiskName: "gke-on-prem-admin-workstation-data-disk/gke-admin-ws-200617-113711-data-disk.vmdk" dataDiskMB: 512 network: ipAllocationMode: "static" hostConfig: ip: "172.16.5.1" gateway: "172.16.6.254" netmask: "255.255.248.0" dns: - "172.16.255.1" - "172.16.255.2 proxyUrl: "" ntpServer: "216.239.35.0" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 223
- Re-rank relevance: N/A

Evidence snippets:
- To generate a template for your admin cluster configuration file: gkectl create-config admin --config= OUTPUT FILENAME --gke-on-prem-version= VERSION Replace the following: OUTPUT FILENAME : a path of your choice for the generated template.
- If you did not use gkeadm to create your admin workstation, you can use gkectl to generate a template for your admin cluster configuration file.
- Generating a template for your configuration file If you used gkeadm to create your admin workstation, then gkeadm generated a template for your admin cluster configuration file.
- Defaults to false. enabled: false (Optional) Specify the proxy configuration proxy: The URL of the proxy url: "" The domains and IP addresses excluded from proxying noProxy: "" # (Optional) Use a private registry to host GKE images privateRegistry: # Do not include the scheme with your registry address address: "" credentials: # reference to external credentials file fileRef: # read credentials from this file path: "" # entry in the credential file entry: "" # The absolute or relative path to the CA certificate for this registry caCertPath: "" (Required): The absolute or relative path to the GCP service account key for pulling GKE images componentAccessServiceAccountKeyPath: "" (Required) Specify which GCP project to register your GKE OnPrem cluster to gkeConnect: projectID: "" # (Optional) The location of the GKE Hub and Connect service where the cluster is # registered to.

### "Admin cluster configuration file 1.28 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- Source ID: `site-docs-reference`
- Final score: 219
- Re-rank relevance: N/A

Evidence snippets:
- To generate a template for your admin cluster configuration file: gkectl create-config admin --config= OUTPUT FILENAME --gke-on-prem-version= VERSION Replace OUTPUT FILENAME with a path of your choice for the generated template.
- If you did not use gkeadm to create your admin workstation, you can use gkectl to generate a template for your admin cluster configuration file.
- Generating a template for your configuration file If you used gkeadm to create your admin workstation, then gkeadm generated a template for your admin cluster configuration file.
- Defaults to false. enabled: false (Optional) Specify the proxy configuration proxy: The URL of the proxy url: "" The domains and IP addresses excluded from proxying noProxy: "" # (Optional) Use a private registry to host GKE images privateRegistry: # Do not include the scheme with your registry address address: "" credentials: # reference to external credentials file fileRef: # read credentials from this file path: "" # entry in the credential file entry: "" # The absolute or relative path to the CA certificate for this registry caCertPath: "" (Required): The absolute or relative path to the GCP service account key for pulling GKE images componentAccessServiceAccountKeyPath: "" (Required) Specify which GCP project to register your GKE OnPrem cluster to gkeConnect: projectID: "" # (Optional) The location of the GKE Hub and Connect service where the cluster is # registered to.

