---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.290Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "VMware NSX-T 2.4.2 support"
feature_slug: "vmware-nsx-t-2-4-2-support"
latest_feature_date: "2019-12-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/audit-logging-api"
keywords:
  - "vmware"
  - "nsx"
  - "gke"
  - "prem"
  - "supports"
  - "version"
---

# VMware NSX-T 2.4.2 support

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

GKE on-prem supports VMware NSX-T version 2.4.2.

## Extended Definition

The excerpts provided do not explicitly document a feature named "VMware NSX-T 2.4.2 support" for Google Distributed Cloud (software only) for VMware. They only show general GKE On-Prem for VMware behavior: versioned upgrade operations using versioned bundles/gkeOnPremVersion and VMware-specific API methods including QueryVmwareVersionConfig.

## Evidence Summary

These pages confirm version-upgrade mechanics and VMware-specific GKE On-Prem API/audit coverage, but do not provide direct evidence that NSX-T version 2.4.2 is specifically supported.

## Source Links

- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/audit-logging-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/audit-logging-api)

## Supporting Pages

### "Skip a version when upgrading node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade)
- Source ID: `site-docs-reference-2`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Set the bundlePath field in the admin cluster configuration file to the intermediate 1.30 version of the bundle: bundlePath="/var/lib/gke/bundles/gke-onprem-vsphere- INTERMEDIATE VERSION .tgz" Upgrade the admin cluster to the intermediate 1.30 version: gkectl upgrade admin \ --kubeconfig ADMIN CLUSTER KUBECONFIG \ --config ADMIN CLUSTER CONFIG FILE Set the bundlePath field in the admin cluster configuration file to the target 1.31 version of the bundle: bundlePath="/var/lib/gke/bundles/gke-onprem-vsphere- TARGET VERSION .tgz" Upgrade the admin cluster to the target 1.31 version: gkectl upgrade admin \ --kubeconfig ADMIN CLUSTER KUBECONFIG \ --config ADMIN CLUSTER CONFIG FILE Upgrade the control plane and the node pools to the target version as follows: Make the following changes in the user cluster configuration file: Set the gkeOnPremVersion field to the target version, TARGET VERSION .
- Install the corresponding bundle: gkectl prepare \ --bundle-path /var/lib/gke/bundles/gke-onprem-vsphere- TARGET VERSION .tgz \ --kubeconfig ADMIN CLUSTER KUBECONFIG Upgrade only the user cluster control plane to the intermediate version as follows: Make the following changes in the user cluster configuration file: Set the gkeOnPremVersion field to the intermediate version, INTERMEDIATE VERSION .
- Install the corresponding bundle: gkectl prepare \ --bundle-path /var/lib/gke/bundles/gke-onprem-vsphere- TARGET VERSION .tgz \ --kubeconfig ADMIN CLUSTER KUBECONFIG Upgrade only the control plane to the intermediate version as follows: Make the following changes in the user cluster configuration file: Set the gkeOnPremVersion field to the intermediate version, INTERMEDIATE VERSION .
- Install the corresponding bundle: gkectl prepare \ --bundle-path /var/lib/gke/bundles/gke-onprem-vsphere- INTERMEDIATE VERSION .tgz \ --kubeconfig ADMIN CLUSTER KUBECONFIG Upgrade your admin workstation again, but this time to the target 1.31 version, TARGET VERSION .

### "Skip a version when upgrading node pools \_|\_ Google Distributed Cloud\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade)
- Source ID: `site-docs-reference-3`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Set the bundlePath field in the admin cluster configuration file to the intermediate 1.30 version of the bundle: bundlePath="/var/lib/gke/bundles/gke-onprem-vsphere- INTERMEDIATE VERSION .tgz" Upgrade the admin cluster to the intermediate 1.30 version: gkectl upgrade admin \ --kubeconfig ADMIN CLUSTER KUBECONFIG \ --config ADMIN CLUSTER CONFIG FILE Set the bundlePath field in the admin cluster configuration file to the target 1.31 version of the bundle: bundlePath="/var/lib/gke/bundles/gke-onprem-vsphere- TARGET VERSION .tgz" Upgrade the admin cluster to the target 1.31 version: gkectl upgrade admin \ --kubeconfig ADMIN CLUSTER KUBECONFIG \ --config ADMIN CLUSTER CONFIG FILE Upgrade the control plane and the node pools to the target version as follows: Make the following changes in the user cluster configuration file: Set the gkeOnPremVersion field to the target version, TARGET VERSION .
- Install the corresponding bundle: gkectl prepare \ --bundle-path /var/lib/gke/bundles/gke-onprem-vsphere- TARGET VERSION .tgz \ --kubeconfig ADMIN CLUSTER KUBECONFIG Upgrade only the user cluster control plane to the intermediate version as follows: Make the following changes in the user cluster configuration file: Set the gkeOnPremVersion field to the intermediate version, INTERMEDIATE VERSION .
- Install the corresponding bundle: gkectl prepare \ --bundle-path /var/lib/gke/bundles/gke-onprem-vsphere- TARGET VERSION .tgz \ --kubeconfig ADMIN CLUSTER KUBECONFIG Upgrade only the control plane to the intermediate version as follows: Make the following changes in the user cluster configuration file: Set the gkeOnPremVersion field to the intermediate version, INTERMEDIATE VERSION .
- Install the corresponding bundle: gkectl prepare \ --bundle-path /var/lib/gke/bundles/gke-onprem-vsphere- INTERMEDIATE VERSION .tgz \ --kubeconfig ADMIN CLUSTER KUBECONFIG Upgrade your admin workstation again, but this time to the target 1.31 version, TARGET VERSION .

### "GKE On-Prem API audit logging \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/audit-logging-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/audit-logging-api)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Filter for this method : protoPayload.methodName="google.cloud.gkeonprem.v1.GkeOnPrem.QueryVmwareVersionConfig" UnenrollBareMetalAdminCluster Method : google.cloud.gkeonprem.v1.GkeOnPrem.UnenrollBareMetalAdminCluster Audit log type : Admin activity Permissions : gkeonprem.bareMetalAdminClusters.unenroll - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.gkeonprem.v1.GkeOnPrem.UnenrollBareMetalAdminCluster" UnenrollBareMetalCluster Method : google.cloud.gkeonprem.v1.GkeOnPrem.UnenrollBareMetalCluster Audit log type : Admin activity Permissions : gkeonprem.bareMetalClusters.unenroll - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.gkeonprem.v1.GkeOnPrem.UnenrollBareMetalCluster" UnenrollBareMetalNodePool Method : google.cloud.gkeonprem.v1.GkeOnPrem.UnenrollBareMetalNodePool Audit log type : Admin activity Permissions : gkeonprem.bareMetalNodePools.unenroll - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.gkeonprem.v1.GkeOnPrem.UnenrollBareMetalNodePool" UnenrollVmwareAdminCluster Method : google.cloud.gkeonprem.v1.GkeOnPrem.UnenrollVmwareAdminCluster Audit log type : Admin activity Permissions : gkeonprem.vmwareAdminClusters.unenroll - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.gkeonprem.v1.GkeOnPrem.UnenrollVmwareAdminCluster" UnenrollVmwareCluster Method : google.cloud.gkeonprem.v1.GkeOnPrem.UnenrollVmwareCluster Audit log type : Admin activity Permissions : gkeonprem.vmwareClusters.unenroll - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.gkeonprem.v1.GkeOnPrem.UnenrollVmwareCluster" UnenrollVmwareNodePool Method : google.cloud.gkeonprem.v1.GkeOnPrem.UnenrollVmwareNodePool Audit log type : Admin activity Permissions : gkeonprem.vmwareNodePools.unenroll - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.gkeonprem.v1.GkeOnPrem.UnenrollVmwareNodePool" UpdateBareMetalAdminCluster Method : google.cloud.gkeonprem.v1.GkeOnPrem.UpdateBareMetalAdminCluster Audit log type : Admin activity Permissions : gkeonprem.bareMetalAdminClusters.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.gkeonprem.v1.GkeOnPrem.UpdateBareMetalAdminCluster" UpdateBareMetalCluster Method : google.cloud.gkeonprem.v1.GkeOnPrem.UpdateBareMetalCluster Audit log type : Admin activity Permissions : gkeonprem.bareMetalClusters.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.gkeonprem.v1.GkeOnPrem.UpdateBareMetalCluster" UpdateBareMetalNodePool Method : google.cloud.gkeonprem.v1.GkeOnPrem.UpdateBareMetalNodePool Audit log type : Admin activity Permissions : gkeonprem.bareMetalNodePools.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.gkeonprem.v1.GkeOnPrem.UpdateBareMetalNodePool" UpdateVmwareAdminCluster Method : google.cloud.gkeonprem.v1.GkeOnPrem.UpdateVmwareAdminCluster Audit log type : Admin activity Permissions : gkeonprem.vmwareAdminClusters.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.gkeonprem.v1.GkeOnPrem.UpdateVmwareAdminCluster" UpdateVmwareCluster Method : google.cloud.gkeonprem.v1.GkeOnPrem.UpdateVmwareCluster Audit log type : Admin activity Permissions : gkeonprem.vmwareClusters.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.gkeonprem.v1.GkeOnPrem.UpdateVmwareCluster" UpdateVmwareNodePool Method : google.cloud.gkeonprem.v1.GkeOnPrem.UpdateVmwareNodePool Audit log type : Admin activity Permissions : gkeonprem.vmwareNodePools.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.gkeonprem.v1.GkeOnPrem.UpdateVmwareNodePool" google.longrunning.Operations The following audit logs are associated with methods belonging to google.longrunning.Operations .
- Permission type Methods ADMIN READ google.cloud.gkeonprem.v1.GkeOnPrem.GetBareMetalAdminCluster google.cloud.gkeonprem.v1.GkeOnPrem.GetBareMetalCluster google.cloud.gkeonprem.v1.GkeOnPrem.GetBareMetalNodePool google.cloud.gkeonprem.v1.GkeOnPrem.GetVmwareAdminCluster google.cloud.gkeonprem.v1.GkeOnPrem.GetVmwareCluster google.cloud.gkeonprem.v1.GkeOnPrem.GetVmwareNodePool google.cloud.gkeonprem.v1.GkeOnPrem.ListBareMetalAdminClusters google.cloud.gkeonprem.v1.GkeOnPrem.ListBareMetalClusters google.cloud.gkeonprem.v1.GkeOnPrem.ListBareMetalNodePools google.cloud.gkeonprem.v1.GkeOnPrem.ListVmwareAdminClusters google.cloud.gkeonprem.v1.GkeOnPrem.ListVmwareClusters google.cloud.gkeonprem.v1.GkeOnPrem.ListVmwareNodePools google.cloud.gkeonprem.v1.GkeOnPrem.QueryBareMetalAdminVersionConfig google.cloud.gkeonprem.v1.GkeOnPrem.QueryBareMetalVersionConfig google.cloud.gkeonprem.v1.GkeOnPrem.QueryVmwareVersionConfig ADMIN WRITE google.cloud.gkeonprem.v1.GkeOnPrem.CreateBareMetalAdminCluster (LRO) google.cloud.gkeonprem.v1.GkeOnPrem.CreateBareMetalCluster (LRO) google.cloud.gkeonprem.v1.GkeOnPrem.CreateBareMetalNodePool (LRO) google.cloud.gkeonprem.v1.GkeOnPrem.CreateVmwareCluster (LRO) google.cloud.gkeonprem.v1.GkeOnPrem.CreateVmwareNodePool (LRO) google.cloud.gkeonprem.v1.GkeOnPrem.DeleteBareMetalCluster (LRO) google.cloud.gkeonprem.v1.GkeOnPrem.DeleteBareMetalNodePool (LRO) google.cloud.gkeonprem.v1.GkeOnPrem.DeleteVmwareCluster (LRO) google.cloud.gkeonprem.v1.GkeOnPrem.DeleteVmwareNodePool (LRO) google.cloud.gkeonprem.v1.GkeOnPrem.EnrollBareMetalAdminCluster (LRO) google.cloud.gkeonprem.v1.GkeOnPrem.EnrollBareMetalCluster (LRO) google.cloud.gkeonprem.v1.GkeOnPrem.EnrollBareMetalNodePool (LRO) google.cloud.gkeonprem.v1.GkeOnPrem.EnrollVmwareAdminCluster (LRO) google.cloud.gkeonprem.v1.GkeOnPrem.EnrollVmwareCluster (LRO) google.cloud.gkeonprem.v1.GkeOnPrem.EnrollVmwareNodePool (LRO) google.cloud.gkeonprem.v1.GkeOnPrem.UnenrollBareMetalAdminCluster (LRO) google.cloud.gkeonprem.v1.GkeOnPrem.UnenrollBareMetalCluster (LRO) google.cloud.gkeonprem.v1.GkeOnPrem.UnenrollBareMetalNodePool (LRO) google.cloud.gkeonprem.v1.GkeOnPrem.UnenrollVmwareAdminCluster (LRO) google.cloud.gkeonprem.v1.GkeOnPrem.UnenrollVmwareCluster (LRO) google.cloud.gkeonprem.v1.GkeOnPrem.UnenrollVmwareNodePool (LRO) google.cloud.gkeonprem.v1.GkeOnPrem.UpdateBareMetalAdminCluster (LRO) google.cloud.gkeonprem.v1.GkeOnPrem.UpdateBareMetalCluster (LRO) google.cloud.gkeonprem.v1.GkeOnPrem.UpdateBareMetalNodePool (LRO) google.cloud.gkeonprem.v1.GkeOnPrem.UpdateVmwareAdminCluster (LRO) google.cloud.gkeonprem.v1.GkeOnPrem.UpdateVmwareCluster (LRO) google.cloud.gkeonprem.v1.GkeOnPrem.UpdateVmwareNodePool (LRO) google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for GKE On-Prem API. google.cloud.gkeonprem.v1.GkeOnPrem The following audit logs are associated with methods belonging to google.cloud.gkeonprem.v1.GkeOnPrem .
- Filter for this method : protoPayload.methodName="google.cloud.gkeonprem.v1.GkeOnPrem.ListVmwareNodePools" QueryBareMetalAdminVersionConfig Method : google.cloud.gkeonprem.v1.GkeOnPrem.QueryBareMetalAdminVersionConfig Audit log type : Data access Permissions : gkeonprem.bareMetalAdminClusters.queryVersionConfig - ADMIN READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.gkeonprem.v1.GkeOnPrem.QueryBareMetalVersionConfig" QueryVmwareVersionConfig Method : google.cloud.gkeonprem.v1.GkeOnPrem.QueryVmwareVersionConfig Audit log type : Data access Permissions : gkeonprem.vmwareClusters.queryVersionConfig - ADMIN READ Method is a long-running or streaming operation : No.

