---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.143Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "OS Policy Orchestrator"
feature_slug: "os-policy-orchestrator"
latest_feature_date: "2025-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members"
  - "https://docs.cloud.google.com/compute/docs/access/managed-constraints"
  - "https://docs.cloud.google.com/compute/docs/tutorials/migrate-workload-to-stateful-mig"
keywords:
  - "os"
  - "policy"
  - "orchestrator"
  - "lets"
  - "organizations"
  - "manage"
  - "assignments"
  - "across"
---

# OS Policy Orchestrator

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

OS Policy Orchestrator lets organizations manage OS policy assignments across projects and zones at scale in VM Manager; OS Policy Orchestrator in VM Manager manages OS policy assignments across projects and zones at organizational scale.

## Extended Definition

OS Policy Orchestrator lets organizations manage OS policy assignments across projects and zones at scale in VM Manager; OS Policy Orchestrator in VM Manager manages OS policy assignments across projects and zones at organizational scale.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members](https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members)
- [https://docs.cloud.google.com/compute/docs/access/managed-constraints](https://docs.cloud.google.com/compute/docs/access/managed-constraints)
- [https://docs.cloud.google.com/compute/docs/tutorials/migrate-workload-to-stateful-mig](https://docs.cloud.google.com/compute/docs/tutorials/migrate-workload-to-stateful-mig)

## Supporting Pages

### "Manage access to projects, folders, and organizations \_|\_ Identity and\

- URL: [https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members](https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members)
- Source ID: `site-iam-reference`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage access to a project, folder, or organization: To manage access to projects: resourcemanager.projects.getIamPolicy resourcemanager.projects.setIamPolicy To manage access to folders: resourcemanager.folders.getIamPolicy resourcemanager.folders.setIamPolicy To manage access to organizations: resourcemanager.organizations.getIamPolicy resourcemanager.organizations.setIamPolicy You might also be able to get these permissions with custom roles or other predefined roles .
- Required roles To get the permissions that you need to manage access to a project, folder, or organization, ask your administrator to grant you the following IAM roles on the resource that you want to manage access for (project, folder, or organization): To manage access to a project: Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) To manage access to a folder: Folder Admin ( roles/resourcemanager.folderAdmin ) To manage access to projects, folders, and organizations: Organization Admin ( roles/resourcemanager.organizationAdmin ) To manage access to almost all Google Cloud resources: Security Admin ( roles/iam.securityAdmin ) These predefined roles contain the permissions required to manage access to a project, folder, or organization.
- String projectId = "your-project-id" ; getProjectPolicy ( projectId ); } // Gets a project's policy. public static Policy getProjectPolicy ( String projectId ) throws IOException { // Initialize client that will be used to send requests. // This client only needs to be created once, and can be reused for multiple requests. try ( ProjectsClient projectsClient = ProjectsClient . create ()) { GetIamPolicyRequest request = GetIamPolicyRequest . newBuilder () . setResource ( ProjectName . of ( projectId ). toString ()) . build (); return projectsClient . getIamPolicy ( request ); } } } Python To authenticate to Resource Manager, set up Application Default Credentials.
- String projectId = "your-project-id" ; getProjectPolicy ( projectId ); } // Gets a project's policy. public static Policy getProjectPolicy ( String projectId ) throws IOException { // Initialize client that will be used to send requests. // This client only needs to be created once, and can be reused for multiple requests. try ( ProjectsClient projectsClient = ProjectsClient . create ()) { GetIamPolicyRequest request = GetIamPolicyRequest . newBuilder () . setResource ( ProjectName . of ( projectId ). toString ()) . build (); return projectsClient . getIamPolicy ( request ); } } } Python To authenticate to Resource Manager, set up Application Default Credentials.

### Managed constraints \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/access/managed-constraints](https://docs.cloud.google.com/compute/docs/access/managed-constraints)
- Source ID: `site-docs-reference-required-6`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Required roles To get the permissions that you need to manage organization policies with managed constraints, ask your administrator to grant you the following IAM roles: Organization policy administrator ( roles/orgpolicy.policyAdmin ) on the organization resource To test the constraints: Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage organization policies with managed constraints: orgpolicy.constraints.list orgpolicy.policies.create orgpolicy.policies.delete orgpolicy.policies.list orgpolicy.policies.update orgpolicy.policy.get orgpolicy.policy.set To test the constraints: compute.instances.create on the project To use a custom image to create the VM: compute.images.useReadOnly on the image To use a snapshot to create the VM: compute.snapshots.useReadOnly on the snapshot To use an instance template to create the VM: compute.instanceTemplates.useReadOnly on the instance template To assign a legacy network to the VM: compute.networks.use on the project To specify a static IP address for the VM: compute.addresses.use on the project To assign an external IP address to the VM when using a legacy network: compute.networks.useExternalIp on the project To specify a subnet for the VM: compute.subnetworks.use on the project or on the chosen subnet To assign an external IP address to the VM when using a VPC network: compute.subnetworks.useExternalIp on the project or on the chosen subnet To set VM instance metadata for the VM: compute.instances.setMetadata on the project To set tags for the VM: compute.instances.setTags on the VM To set labels for the VM: compute.instances.setLabels on the VM To set a service account for the VM to use: compute.instances.setServiceAccount on the VM To create a new disk for the VM: compute.disks.create on the project To attach an existing disk in read-only or read-write mode: compute.disks.use on the disk To attach an existing disk in read-only mode: compute.disks.useReadOnly on the disk You might also be able to get these permissions with custom roles or other predefined roles .
- Metadata-based constraints and levels Constraint Metadata key Metadata hierarchy levels compute.managed.disableSerialPortAccess serial-port-enable Project, Zonal, Instance compute.managed.requireOsLogin enable-oslogin Project, Zonal, Instance compute.managed.disableGuestAttributesAccess enable-guest-attributes Project, Zonal, Instance compute.managed.requireOsConfig enable-osconfig Project, Zonal, Instance compute.managed.disallowGlobalDns VmDnsSetting Project, Instance Safe rollout: The policy lifecycle To prevent service disruptions when you gradually implement new constraints, Google recommends that you implement managed constraints by following these steps: Analyze with Policy Simulator Before enforcing a policy, use Policy Simulator to see which existing resources violate the policy.
- You can apply/exempt this constraint by using tags to mark VM Instances and then enforcing the constraint with conditional rules based on the applied tags. constraints/compute.managed.restrictNonConfidentialComputing Restricts the use of protocol forwarding This constraint lets you restrict the types of protocol forwarding deployments (internal or external) that can be created in your organization.

### "Migrate an existing workload to a stateful managed instance group \_|\_\

- URL: [https://docs.cloud.google.com/compute/docs/tutorials/migrate-workload-to-stateful-mig](https://docs.cloud.google.com/compute/docs/tutorials/migrate-workload-to-stateful-mig)
- Source ID: `site-docs-reference-required-6`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Using a stateful policy instead of per-instance configurations A stateful policy lets you declare disks that have a common device name as stateful across the MIG.
- This lets you use a stateful policy to declare those disks as stateful across your MIG, with less overhead than per-instance configurations.
- For example, to delete the per-instance configuration, use the following command: gcloud compute instance-groups managed instance-configs delete my-mig \ --instances= my-instance-1 \ --update-instance (Optional.) Verify that the stateful items are now stored in the preserved state from policy ( preservedStateFromPolicy ) for each managed instance.
- If the group has a stateful policy, any items you list in the stateful policy are preserved across restart, recreation, autohealing, and update operations for all new and existing instances in the group.

