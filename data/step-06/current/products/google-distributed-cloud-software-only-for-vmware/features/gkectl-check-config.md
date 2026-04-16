---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.304Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "gkectl check-config"
feature_slug: "gkectl-check-config"
latest_feature_date: "2019-06-17"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29"
keywords:
  - "gkectl"
  - "check"
  - "config"
  - "validates"
  - "gke"
  - "prem"
  - "configuration"
  - "file"
---

# gkectl check-config

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

Gkectl check-config validates a GKE On-Prem configuration file.

## Extended Definition

`gkectl check-config` is a preflight validation command for Google Distributed Cloud (software only) for VMware that validates a GKE On-Prem configuration file before you create clusters. It is invoked as `gkectl check-config --config [CONFIG]`, where `[CONFIG]` is the path to the configuration file, and it performs multiple checks including validating configuration fields and values for expected formats. The command also supports a fast mode that skips specific checks requiring temporary test VMs, such as load-balancing VIP and node IP validations.

## Evidence Summary

The cited pages confirm that `gkectl check-config` is the documented preflight command for validating a GKE On-Prem config file, and that it supports a faster mode that omits temporary-test-VM-based validations.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29)

## Supporting Pages

### "Running preflight checks \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks)
- Source ID: `site-docs-root`
- Final score: 275
- Re-rank relevance: STRONG
- Re-rank rationale: It explicitly documents how to run `gkectl check-config`, what it validates, expected failures/warnings, and operational modes.

Evidence snippets:
- Coming soon The following preflight checks will be added in a future release: NTP server Running preflight checks You run preflight checks by running the following command: gkectl check-config --config [CONFIG] where [CONFIG] is the path to your configuration file Running in fast mode If you prefer, you can run preflight checks in "fast mode," which skips the validations that create temporary test VMs, such as the load balancing VIP and node IP validations.
- Here are the current checks: Category Description Configuration file Generally validates that each field and specification has the expected format and values.
- Running gkectl check-config If you plan to create clusters using gkectl , you run gkectl create-config to generate a configuration file.
- Before you create clusters using gkectl , run gkectl check-config to validate the configuration file with several preflight checks.

### "Admin cluster configuration file 1.28 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- Source ID: `site-docs-reference`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- To generate a template for your admin cluster configuration file: gkectl create-config admin --config= OUTPUT FILENAME --gke-on-prem-version= VERSION Replace OUTPUT FILENAME with a path of your choice for the generated template.
- Defaults to false. enabled: false (Optional) Specify the proxy configuration proxy: The URL of the proxy url: "" The domains and IP addresses excluded from proxying noProxy: "" # (Optional) Use a private registry to host GKE images privateRegistry: # Do not include the scheme with your registry address address: "" credentials: # reference to external credentials file fileRef: # read credentials from this file path: "" # entry in the credential file entry: "" # The absolute or relative path to the CA certificate for this registry caCertPath: "" (Required): The absolute or relative path to the GCP service account key for pulling GKE images componentAccessServiceAccountKeyPath: "" (Required) Specify which GCP project to register your GKE OnPrem cluster to gkeConnect: projectID: "" # (Optional) The location of the GKE Hub and Connect service where the cluster is # registered to.
- It is a good idea to choose a region that is near your on-premises data center For new clusters, if you include the gkeOnPremAPI and stackdriver sections in the configuration file, the region that you set here must be the same region that you set in gkeConnect.location , gkeOnPremAPI.location , and stackdriver.clusterLocation .
- For new clusters, if you include the gkeOnPremAPI and cloudAuditLogging sections in the configuration file, the region that you set here must be the same region that you set in cloudAuditLogging.clusterLocation , gkeConnect.location , and gkeOnPremAPI.location .

### "Admin cluster configuration file 1.29 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29)
- Source ID: `site-docs-reference`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- To generate a template for your admin cluster configuration file: gkectl create-config admin --config= OUTPUT FILENAME --gke-on-prem-version= VERSION Replace OUTPUT FILENAME with a path of your choice for the generated template.
- Defaults to false. enabled: false (Optional) Specify the proxy configuration proxy: The URL of the proxy url: "" The domains and IP addresses excluded from proxying noProxy: "" # (Optional) Use a private registry to host GKE images privateRegistry: # Do not include the scheme with your registry address address: "" credentials: # reference to external credentials file fileRef: # read credentials from this file path: "" # entry in the credential file entry: "" # The absolute or relative path to the CA certificate for this registry caCertPath: "" (Required): The absolute or relative path to the GCP service account key for pulling GKE images componentAccessServiceAccountKeyPath: "" (Required) Specify which GCP project to register your GKE OnPrem cluster to gkeConnect: projectID: "" # (Optional) The location of the GKE Hub and Connect service where the cluster is # registered to.
- It is a good idea to choose a region that is near your on-premises data center For new clusters, if you include the gkeOnPremAPI and stackdriver sections in the configuration file, the region that you set here must be the same region that you set in gkeConnect.location , gkeOnPremAPI.location , and stackdriver.clusterLocation .
- For new clusters, if you include the gkeOnPremAPI and cloudAuditLogging sections in the configuration file, the region that you set here must be the same region that you set in cloudAuditLogging.clusterLocation , gkeConnect.location , and gkeOnPremAPI.location .

