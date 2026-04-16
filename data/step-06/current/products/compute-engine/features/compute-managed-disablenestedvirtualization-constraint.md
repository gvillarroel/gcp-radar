---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.120Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "compute.managed.disableNestedVirtualization constraint"
feature_slug: "compute-managed-disablenestedvirtualization-constraint"
latest_feature_date: "2025-09-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/access/managed-constraints"
  - "https://docs.cloud.google.com/resource-manager/docs/organization-policy/org-policy-constraints"
  - "https://docs.cloud.google.com/compute/docs/access/organization-policies"
keywords:
  - "compute"
  - "managed"
  - "disablenestedvirtualization"
  - "constraint"
  - "organization"
  - "policy"
  - "enforces"
  - "security"
---

# compute.managed.disableNestedVirtualization constraint

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

This managed organization policy constraint enforces a security control that disables nested virtualization for Compute Engine VMs.

## Extended Definition

This managed organization policy constraint enforces a security control that disables nested virtualization for Compute Engine VMs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/compute/docs/access/managed-constraints](https://docs.cloud.google.com/compute/docs/access/managed-constraints)
- [https://docs.cloud.google.com/resource-manager/docs/organization-policy/org-policy-constraints](https://docs.cloud.google.com/resource-manager/docs/organization-policy/org-policy-constraints)
- [https://docs.cloud.google.com/compute/docs/access/organization-policies](https://docs.cloud.google.com/compute/docs/access/organization-policies)

## Supporting Pages

### Managed constraints \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/access/managed-constraints](https://docs.cloud.google.com/compute/docs/access/managed-constraints)
- Source ID: `site-docs-reference-required-6`
- Final score: 343
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Metadata-based constraints and levels Constraint Metadata key Metadata hierarchy levels compute.managed.disableSerialPortAccess serial-port-enable Project, Zonal, Instance compute.managed.requireOsLogin enable-oslogin Project, Zonal, Instance compute.managed.disableGuestAttributesAccess enable-guest-attributes Project, Zonal, Instance compute.managed.requireOsConfig enable-osconfig Project, Zonal, Instance compute.managed.disallowGlobalDns VmDnsSetting Project, Instance Safe rollout: The policy lifecycle To prevent service disruptions when you gradually implement new constraints, Google recommends that you implement managed constraints by following these steps: Analyze with Policy Simulator Before enforcing a policy, use Policy Simulator to see which existing resources violate the policy.
- To exempt a project from the compute.managed.requireOsLogin constraint, bind the osLoginOptional=true tag to the project using the gcloud resource-manager tags bindings create command : gcloud resource-manager tags bindings create \ --tag-value = ORGANIZATION ID /osLoginOptional/true \ --parent = //cloudresourcemanager.googleapis.com/projects/ PROJECT ID \ --location = global Replace ORGANIZATION ID with your organization ID, and PROJECT ID with the ID of the project that you want to exempt.
- First apply tags to mark the instances, and then use conditional rules based on tag values to properly scope those instances out of enforcement. constraints/compute.managed.disableGuestAttributesAccess Disable VM Nested Virtualization This boolean constraint disables hardware-accelerated nestedvirtualization for all Compute Engine VMs belonging to the organization, project, or folder where this constraint is set to True .
- You can apply/exempt this constraint by using tags to mark VM Instances and then enforcing the constraint with conditional rules based on the applied tags. constraints/compute.managed.restrictNonConfidentialComputing Restricts the use of protocol forwarding This constraint lets you restrict the types of protocol forwarding deployments (internal or external) that can be created in your organization.

### Batasan kebijakan organisasi | Resource Manager | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/organization-policy/org-policy-constraints](https://docs.cloud.google.com/resource-manager/docs/organization-policy/org-policy-constraints)
- Source ID: `feature-recovery-http`
- Final score: 341
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Secara default, virtualisasi bertingkat dengan akselerasi hardware diizinkan untuk semua VM Compute Engine yang berjalan di platform CPU Intel Haswell atau yang lebih baru. constraints/compute.managed.disableNestedVirtualization Compute Engine Membatasi pengaktifan metadata akses port serial VM Pratinjau: Batasan ini mencegah kunci metadata serial-port-enable disetel ke benar (true) untuk VM Compute Engine dalam organisasi, project, atau folder tempat batasan ini diberlakukan.
- Batasan kebijakan organisasi berikut memiliki perilaku default yang dikelola Google yang membatasi operasi: Batasan kebijakan organisasi Jenis batasan constraints/appengine.runtimeDeploymentExemption Dikelola (lama) constraints/cloudbuild.disableCreateDefaultServiceAccount Dikelola (lama) constraints/cloudbuild.useBuildServiceAccount Dikelola (lama) constraints/cloudbuild.useComputeServiceAccount Dikelola (lama) constraints/commerceorggovernance.marketplaceServices Dikelola (lama) constraints/compute.managed.blockPreviewFeatures Dikelola constraints/compute.sharedReservationsOwnerProjects Dikelola (lama) constraints/iam.allowServiceAccountCredentialLifetimeExtension Dikelola (lama) constraints/iam.disableCrossProjectServiceAccountUsage Dikelola (lama) constraints/iam.managed.disableServiceAccountApiKeyCreation Dikelola constraints/iam.serviceAccountKeyExposureResponse Dikelola (lama) constraints/resourcemanager.allowedExportDestinations Dikelola (lama) constraints/resourcemanager.allowedImportSources Dikelola (lama) constraints/resourcemanager.allowEnabledServicesForExport Dikelola (lama) constraints/vertexai.allowedPartnerModelFeatures Dikelola (lama) Batasan yang tersedia Anda dapat membuat kebijakan organisasi menggunakan batasan berikut.
- Penting: Menerapkan batasan ini tidak memengaruhi VM yang ada yang serial-port-enable-nya sudah disetel ke benar (true); VM tersebut akan mempertahankan akses kecuali jika metadatanya diperbarui. constraints/compute.managed.disableSerialPortAccess Compute Engine Nonaktifkan logging port serial VM ke Stackdriver [Pratinjau Publik] Jika diberlakukan, batasan ini akan menonaktifkan logging port serial ke Stackdriver dari VM Compute Engine.
- Pertama, terapkan tag untuk menandai instance, lalu gunakan aturan bersyarat berdasarkan nilai tag untuk mengecualikan instance tersebut dari penegakan. constraints/compute.managed.disableSerialPortLogging Compute Engine Membatasi penggunaan DNS Internal Global (gDNS) untuk project yang memiliki setelan DNS ZonalOnly. [Pratinjau Publik] Batasan ini, jika diterapkan, akan membatasi penggunaan gDNS.

### Organization policies for Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/access/organization-policies](https://docs.cloud.google.com/compute/docs/access/organization-policies)
- Source ID: `site-docs-reference-required-6`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Constraint types When you use the Organization Policy, you can apply the following types of constraints: Managed constraints : Google-provided, predefined constraints that are built on a modern platform, identifiable by the compute.managed. prefix.
- Managed constraints Managed constraints for Compute Engine simplify governance for common security scenarios and integrate with safe rollout tools, such as dry-run and Policy Simulator, which let you test their impact before enforcement.
- Compute Engine constraints The following sections list the Compute Engine constraints that Organization Policy supports.
- However, if there are IPV4 IPV6 stack type subnetworks in the project when this constraint is activated, you must delete them before you can create an IPV4 ONLY stack type subnetwork in the same region, even if you are using a different VPC network. compute.disableGuestAttributes Disables Compute Engine guest attributes, which can be used to publish hostnames, IP addresses, and other instance-related information from within a virtual machine instance. compute.disableInstanceDataAccessApis Disables access to Compute Engine instance metadata APIs needed to access sensitive instance metadata, such as sshKeys, serialPortLogging, and startup-/shutdown-scripts. compute.disableInternetNetworkEndpointGroup Disables creation of Internet Network Endpoint Groups. compute.disableNestedVirtualization When set to true , disables hardware-accelerated nested virtualization for all Compute Engine VMs in the project. compute.disableSerialPortAccess Disables serial port access to Compute Engine VMs. compute.disableSerialPortLogging Disables serial port logging to Google Cloud Observability from Compute Engine VMs. compute.disableVpcExternalIpv6 If this constraint is active, you cannot create VPC networks with ULA internal IPv6 ranges, or assign external IPv6 addresses to VMs in VPC networks.

