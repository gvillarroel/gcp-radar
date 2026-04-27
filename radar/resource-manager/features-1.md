# Resource Manager features 1

This page prioritizes Resource Manager features whose current Google documentation gives the clearest hierarchy and IAM guidance.

IAM note: the table below favors roles that Google names explicitly in the linked documentation. When a feature spans multiple products, the mapping stays limited to the Resource Manager and governance roles that the official pages call out directly.

## Role legend

- `OPA`: `roles/orgpolicy.policyAdmin`
- `OPV`: `roles/orgpolicy.policyViewer`
- `OPS`: `roles/policysimulator.orgPolicyAdmin`
- `TA`: `roles/resourcemanager.tagAdmin`
- `TU`: `roles/resourcemanager.tagUser`
- `TV`: `roles/resourcemanager.tagViewer`
- `OV`: `roles/resourcemanager.organizationViewer`
- `FA`: `roles/resourcemanager.folderAdmin`
- `FC`: `roles/resourcemanager.folderCreator`
- `FE`: `roles/resourcemanager.folderEditor`
- `FV`: `roles/resourcemanager.folderViewer`
- `PC`: `roles/resourcemanager.projectCreator`
- `PM`: `roles/resourcemanager.projectMover`
- `PIA`: `roles/resourcemanager.projectIamAdmin`
- `CAV`: `roles/cloudasset.viewer`

## Features

| Feature | Latest date | Feature status | Recommended IAM roles | Why these roles | Evidence |
| --- | --- | --- | --- | --- | --- |
| Organization policy conditions for tag keys | 2025-08-18 | Step 07 `PASS` | `OPA`, `TA`, `TV` | Tag-key conditions combine organization policy authoring with tag-definition visibility; Google documents organization policy administration separately from tag-definition management. | [Create and manage tags](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing), [Access control for organization resources with IAM](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [Setting an organization policy with tags](https://docs.cloud.google.com/resource-manager/docs/organization-policy/tags-organization-policy) |
| Policy Simulator for Organization Policy | 2025-07-01 | Step 07 `PASS` | `OPS`, `OPA`, `OPV` | Running simulations is covered by the OrgPolicy Simulator Admin role; policy administrators can also run previews, while viewer-level read access is useful for reviewing policy state. | [Policy Simulator roles and permissions](https://docs.cloud.google.com/iam/docs/roles-permissions/policysimulator), [Organization Policy Service roles and permissions](https://docs.cloud.google.com/iam/docs/roles-permissions/orgpolicy) |
| Mandatory tags enforcement with custom organization policies | 2025-03-17 | Step 07 `PASS` | `OPA`, `TA`, `TU`, `TV` | Mandatory-tag enforcement requires authorship of the custom organization policy plus the tag-definition and tag-binding roles needed to create the keys, values, and attachments that the policy evaluates. | [Create and manage tags](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing), [Custom organization policies for required tags](https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies), [Setting an organization policy with tags](https://docs.cloud.google.com/resource-manager/docs/organization-policy/tags-organization-policy) |
| Organization Policy custom constraints dry run | 2023-06-16 | Step 07 `PASS` | `OPA`, `OPS`, `OPV` | Google documents dry-run custom constraints as an Organization Policy workflow; `policyAdmin` manages the constraint and policy, while simulator access is the narrowest role for simulation-focused review. | [Custom constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints), [Create an organization policy in dry-run mode](https://docs.cloud.google.com/resource-manager/docs/organization-policy/dry-run-policy), [Organization Policy Service roles and permissions](https://docs.cloud.google.com/iam/docs/roles-permissions/orgpolicy) |
| Attached and inherited tag listing | 2022-11-01 | Step 07 `PASS` | `TV`, `OV` | This feature is read-oriented: Google explicitly documents Tag Viewer for resources with attached tags and Organization Viewer for organization-level visibility. | [Create and manage tags](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing), [Tags overview](https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview) |
| Tag holds | 2022-06-17 | Step 07 `PASS` | `TA`, `TV` | Tag holds protect tag values from deletion, so the narrowest documented fit is the tag-definition administrator role plus read access to inspect where the protected value is used. | [Create and manage tags](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing), [Tags overview](https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview) |
| Cloud Asset Inventory Analyze Move API | 2021-05-26 | Step 07 `PASS` | `CAV` | Google documents `cloudasset.assets.analyzeMove` through Cloud Asset Viewer or Viewer; additional service-specific read permissions may still be needed when the analysis surfaces blockers from those services. | [Analyze project move](https://docs.cloud.google.com/resource-manager/docs/analyze-move), [Create a migration plan](https://docs.cloud.google.com/resource-manager/docs/create-migration-plan) |
| Project migration between organizations | 2021-05-26 | Step 07 `PASS` | `PIA`, `PM`, `PC`, `OPA` | Cross-organization migration requires project IAM administration on the source project, project-move rights on the parent and import or export folders, project-creation rights at the destination when applicable, and organization policy administration to set the required import and export constraints. | [Assign Identity and Access Management roles and permissions](https://docs.cloud.google.com/resource-manager/docs/assign-iam-roles), [Project migration checklist](https://docs.cloud.google.com/resource-manager/docs/project-migration-checklist), [Create a migration plan](https://docs.cloud.google.com/resource-manager/docs/create-migration-plan) |
| Tags | 2021-03-16 | Step 07 `PASS` | `TA`, `TU`, `TV`, `OV` | Google names separate predefined roles for tag definition, tag attachment, tag inspection, and organization-level visibility. | [Create and manage tags](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing), [Tags overview](https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview), [Tags supported services](https://docs.cloud.google.com/resource-manager/docs/tags/tags-supported-services) |
| Folders | 2017-07-24 | Step 07 `PASS` | `FA`, `FC`, `FE`, `FV` | Folder administration is split cleanly between folder creation, broad folder administration, edit operations, and read access across the official folder-management guides. | [Create and manage folders](https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders), [View, update, and delete folders](https://docs.cloud.google.com/resource-manager/docs/manage-folders), [Access control for folders with IAM](https://docs.cloud.google.com/resource-manager/docs/access-control-folders) |

## Source basis for the IAM mappings

- Google explicitly documents Resource Manager hierarchy roles for organizations, folders, projects, and tags in the product guides and IAM reference.
- Organization Policy documentation names `roles/orgpolicy.policyAdmin` as the administrator role for policy and custom-constraint workflows.
- Policy Simulator documentation names `roles/policysimulator.orgPolicyAdmin` as the simulator-specific role for Organization Policy previews.
- Project-migration documentation names `roles/resourcemanager.projectIamAdmin`, `roles/resourcemanager.projectMover`, and `roles/resourcemanager.projectCreator` as the core cross-organization migration roles.
