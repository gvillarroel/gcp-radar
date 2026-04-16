---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.179Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "Custom constraints for Compute resources"
feature_slug: "custom-constraints-for-compute-resources"
latest_feature_date: "2023-06-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/access/custom-constraints"
  - "https://docs.cloud.google.com/compute/docs/access/managed-constraints"
  - "https://docs.cloud.google.com/compute/docs/access/organization-policies"
keywords:
  - "custom"
  - "constraints"
  - "compute"
  - "resources"
  - "let"
  - "you"
  - "enforce"
  - "granular"
---

# Custom constraints for Compute resources

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Custom constraints let you enforce granular organization policy controls on specific fields of supported Compute resources.

## Extended Definition

Custom constraints let you enforce granular organization policy controls on specific fields of supported Compute resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/compute/docs/access/custom-constraints](https://docs.cloud.google.com/compute/docs/access/custom-constraints)
- [https://docs.cloud.google.com/compute/docs/access/managed-constraints](https://docs.cloud.google.com/compute/docs/access/managed-constraints)
- [https://docs.cloud.google.com/compute/docs/access/organization-policies](https://docs.cloud.google.com/compute/docs/access/organization-policies)

## Supporting Pages

### Custom constraints \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/access/custom-constraints](https://docs.cloud.google.com/compute/docs/access/custom-constraints)
- Source ID: `site-docs-reference-required-6`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Persistent Disk : compute.googleapis.com/Disk Persistent Disk type: resource.type Persistent Disk size: resource.sizeGb Persistent Disk licenses: resource.licenses Persistent Disk license codes: resource.licenseCodes Persistent Disk Confidential Computing: resource.enableConfidentialCompute Persistent Disk source image: resource.sourceImage Image : compute.googleapis.com/Image Raw disk source: resource.rawDisk.source VM instance : compute.googleapis.com/Instance Advanced machine features: resource.advancedMachineFeatures.enableNestedVirtualization resource.advancedMachineFeatures.threadsPerCore resource.advancedMachineFeatures.performanceMonitoringUnit Confidential VM instance configurations: resource.confidentialInstanceConfig.enableConfidentialCompute resource.confidentialInstanceConfig.confidentialInstanceType Deletion protection: resource.deletionProtection Ip Forwarding: resource.canIpForward Private Google Access (IPv6): resource.privateIpv6GoogleAccess Labels: resource.labels Accelerators: resource.guestAccelerators.acceleratorType resource.guestAccelerators.acceleratorCount Machine type: resource.machineType Minimum CPU platform: resource.minCpuPlatform Network interface: resource.networkInterfaces.network resource.networkInterfaces.subnetwork resource.networkInterfaces.networkAttachment resource.networkInterfaces.accessConfigs.name resource.networkInterfaces.accessConfigs.natIP Node affinity: resource.scheduling.nodeAffinities.key resource.scheduling.nodeAffinities.operator resource.scheduling.nodeAffinities.values Reservation Affinity: resource.scheduling.reservationAffinity.key resource.scheduling.reservationAffinity.values Shielded Instance Config: resource.shieldedInstanceConfig.enableSecureBoot resource.shieldedInstanceConfig.enableVtpm resource.shieldedInstanceConfig.enableIntegrityMonitoring Zone: resource.zone Other supported compute resources: For more information about Compute Engine resources used by Cloud Load Balancing, such as backend services, backend buckets, forwarding rules, health checks, SSL policies, target proxies, and URL maps, see the Manage Cloud Load Balancing resources using custom constraints page.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage organization policies for Compute Engine resources: orgpolicy.constraints.list orgpolicy.policies.create orgpolicy.policies.delete orgpolicy.policies.list orgpolicy.policies.update orgpolicy.policy.get orgpolicy.policy.set To test the constraints: compute.instances.create on the project To use a custom image to create the VM: compute.images.useReadOnly on the image To use a snapshot to create the VM: compute.snapshots.useReadOnly on the snapshot To use an instance template to create the VM: compute.instanceTemplates.useReadOnly on the instance template To assign a legacy network to the VM: compute.networks.use on the project To specify a static IP address for the VM: compute.addresses.use on the project To assign an external IP address to the VM when using a legacy network: compute.networks.useExternalIp on the project To specify a subnet for the VM: compute.subnetworks.use on the project or on the chosen subnet To assign an external IP address to the VM when using a VPC network: compute.subnetworks.useExternalIp on the project or on the chosen subnet To set VM instance metadata for the VM: compute.instances.setMetadata on the project To set tags for the VM: compute.instances.setTags on the VM To set labels for the VM: compute.instances.setLabels on the VM To set a service account for the VM to use: compute.instances.setServiceAccount on the VM To create a new disk for the VM: compute.disks.create on the project To attach an existing disk in read-only or read-write mode: compute.disks.use on the disk To attach an existing disk in read-only mode: compute.disks.useReadOnly on the disk You might also be able to get these permissions with custom roles or other predefined roles .
- Replace PROJECT ID with your project ID. name : projects/ PROJECT ID /policies/custom.createOnlyN2DVMs spec : rules : – enforce : true Enforce the policy. gcloud org-policies set-policy onlyN2DVMs-policy.yaml Test the constraint by trying to create a VM that uses a machine type that isn't an N2D machine. gcloud compute instances create my-test-instance \ --project= PROJECT ID \ --zone=us-central1-c \ --machine-type=e2-medium The output is similar to the following: ERROR: (gcloud.compute.instances.create) Could not fetch resource: – Operation denied by custom org policies: [customConstraints/ custom.createOnlyN2DVMs ]: Restrict all VMs created to only use N2D machine types.
- Compute Engine supported resources For Compute Engine, you can set CREATE and UPDATE type custom constraints on the following resources and fields.

### Managed constraints \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/access/managed-constraints](https://docs.cloud.google.com/compute/docs/access/managed-constraints)
- Source ID: `site-docs-reference-required-6`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage organization policies with managed constraints: orgpolicy.constraints.list orgpolicy.policies.create orgpolicy.policies.delete orgpolicy.policies.list orgpolicy.policies.update orgpolicy.policy.get orgpolicy.policy.set To test the constraints: compute.instances.create on the project To use a custom image to create the VM: compute.images.useReadOnly on the image To use a snapshot to create the VM: compute.snapshots.useReadOnly on the snapshot To use an instance template to create the VM: compute.instanceTemplates.useReadOnly on the instance template To assign a legacy network to the VM: compute.networks.use on the project To specify a static IP address for the VM: compute.addresses.use on the project To assign an external IP address to the VM when using a legacy network: compute.networks.useExternalIp on the project To specify a subnet for the VM: compute.subnetworks.use on the project or on the chosen subnet To assign an external IP address to the VM when using a VPC network: compute.subnetworks.useExternalIp on the project or on the chosen subnet To set VM instance metadata for the VM: compute.instances.setMetadata on the project To set tags for the VM: compute.instances.setTags on the VM To set labels for the VM: compute.instances.setLabels on the VM To set a service account for the VM to use: compute.instances.setServiceAccount on the VM To create a new disk for the VM: compute.disks.create on the project To attach an existing disk in read-only or read-write mode: compute.disks.use on the disk To attach an existing disk in read-only mode: compute.disks.useReadOnly on the disk You might also be able to get these permissions with custom roles or other predefined roles .
- Metadata-based constraints and levels Constraint Metadata key Metadata hierarchy levels compute.managed.disableSerialPortAccess serial-port-enable Project, Zonal, Instance compute.managed.requireOsLogin enable-oslogin Project, Zonal, Instance compute.managed.disableGuestAttributesAccess enable-guest-attributes Project, Zonal, Instance compute.managed.requireOsConfig enable-osconfig Project, Zonal, Instance compute.managed.disallowGlobalDns VmDnsSetting Project, Instance Safe rollout: The policy lifecycle To prevent service disruptions when you gradually implement new constraints, Google recommends that you implement managed constraints by following these steps: Analyze with Policy Simulator Before enforcing a policy, use Policy Simulator to see which existing resources violate the policy.
- First apply tags to mark the instances, and then use conditional rules based on tag values to properly scope those instances out of enforcement. constraints/compute.managed.disableGuestAttributesAccess Disable VM Nested Virtualization This boolean constraint disables hardware-accelerated nestedvirtualization for all Compute Engine VMs belonging to the organization, project, or folder where this constraint is set to True .
- Important: Enforcing this constraint does not affect existing VMs where block-project-ssh-keys is already set to false; they will retain access unless their metadata is updated. constraints/compute.managed.blockProjectSshKeys Disable Guest Attributes of Compute Engine metadata Preview: This constraint, when enforced, disables Compute Engine API access to the Guest Attributes of Compute Engine VMs.

### Organization policies for Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/access/organization-policies](https://docs.cloud.google.com/compute/docs/access/organization-policies)
- Source ID: `site-docs-reference-required-6`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- You can use organization policies to enforce constraints on how Compute Engine resources, such as virtual machine (VM) instances, disks, and networks, are configured.
- Legacy constraints Constraint Description compute.allowedDeviceEncryptionKeys Restricts the Cloud Key Management Service keys that can be used to encrypt device resources. compute.disableAllIpv6 Disables creation of or update to subnet stacks of type IPV4 IPV6 but does not affect existing IPV4 IPV6 stack type subnets.
- Managed constraints Managed constraints for Compute Engine simplify governance for common security scenarios and integrate with safe rollout tools, such as dry-run and Policy Simulator, which let you test their impact before enforcement.
- Descendant resources inherit policies, which lets you enforce broad controls at the organization level and apply more specific constraints at the folder or project level.

