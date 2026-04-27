# Resource Manager

- Product slug: `resource-manager`
- Product status: `PASS` in Step 07
- Release-note features discovered: `118`
- Corpus-backed feature definitions: `118`
- Step 07 warnings: `0`
- Step 07 failures: `0`

## Product summary

Resource Manager is the Google Cloud control-plane layer for organizations, folders, and projects. It also anchors hierarchy-wide governance features such as Organization Policy Service, tags, project moves and migrations, and project-protection mechanisms such as liens.

## Evidence-backed capability summary

- Hierarchy administration: create, move, update, list, and delete organizations, folders, and projects across the resource hierarchy.
- Governance guardrails: define managed and custom organization policies, apply them hierarchically, and scope enforcement with tags.
- Tagging model: create tag keys and values, attach them to resources, inspect inherited tags, and use tags in IAM conditions and organization policies.
- Migration workflow: analyze project moves, plan cross-organization migrations, and execute controlled project reparenting.
- Safety controls: protect projects from destructive operations with liens and preserve governance boundaries during structural changes.

## IAM model

Unlike some other products in this repository, Resource Manager documentation names several feature-level IAM roles directly. The first feature page therefore stays close to explicit Google guidance instead of relying mostly on service-level inference.

Core roles repeatedly referenced by the official docs:

- `roles/orgpolicy.policyAdmin`: create and manage organization policies and custom constraints.
- `roles/orgpolicy.policyViewer`: read organization policy state without editing it.
- `roles/policysimulator.orgPolicyAdmin`: run and review organization policy simulations.
- `roles/resourcemanager.tagAdmin`: create, update, and delete tag definitions.
- `roles/resourcemanager.tagUser`: attach and remove tag values from resources.
- `roles/resourcemanager.tagViewer`: inspect tags attached to resources.
- `roles/resourcemanager.organizationViewer`: view organization-level hierarchy metadata.
- `roles/resourcemanager.folderAdmin`: create, move, delete, and manage folder IAM.
- `roles/resourcemanager.folderCreator`: create folders under an allowed parent.
- `roles/resourcemanager.folderEditor`: update and delete folders.
- `roles/resourcemanager.folderViewer`: list folders and inspect folder metadata.
- `roles/resourcemanager.projectCreator`: create projects and serve as a destination role in some migration flows.
- `roles/resourcemanager.projectMover`: move projects within or between approved hierarchy locations.
- `roles/resourcemanager.projectIamAdmin`: manage project IAM during cross-organization migration.

## Report scope

This product card focuses on the Resource Manager features where the current Google documentation is most explicit about IAM prerequisites: tags, tag-conditioned organization policy, custom-constraint governance, policy simulation, folder hierarchy control, and project-move workflows.

## Primary sources

- [Resource Manager overview](https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview)
- [Create and manage tags](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)
- [Creating and managing organization policies](https://docs.cloud.google.com/resource-manager/docs/organization-policy/creating-managing-policies)
- [Assign Identity and Access Management roles and permissions](https://docs.cloud.google.com/resource-manager/docs/assign-iam-roles)
- [Resource Manager roles and permissions](https://docs.cloud.google.com/iam/docs/roles-permissions/resourcemanager)
