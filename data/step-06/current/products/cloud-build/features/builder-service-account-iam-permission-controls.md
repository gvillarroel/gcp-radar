---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.803Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Builder service account IAM permission controls"
feature_slug: "builder-service-account-iam-permission-controls"
latest_feature_date: "2017-06-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/iam-roles-permissions"
  - "https://docs.cloud.google.com/build/docs/release-notes"
  - "https://docs.cloud.google.com/build/docs/access-github-from-build"
keywords:
  - "builder"
  - "account"
  - "iam"
  - "permission"
  - "controls"
  - "permissions"
  - "were"
  - "expanded"
---

# Builder service account IAM permission controls

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Builder service account permissions were expanded to support end-user and IAM-based control when invoking permissioned APIs during builds.

## Extended Definition

Builder service account permissions were expanded to support end-user and IAM-based control when invoking permissioned APIs during builds.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/iam-roles-permissions](https://docs.cloud.google.com/build/docs/iam-roles-permissions)
- [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- [https://docs.cloud.google.com/build/docs/access-github-from-build](https://docs.cloud.google.com/build/docs/access-github-from-build)

## Supporting Pages

### IAM roles and permissions \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/iam-roles-permissions](https://docs.cloud.google.com/build/docs/iam-roles-permissions)
- Source ID: `site-iam-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists the Cloud Build IAM roles and the permissions that they include: Role Description Permissions Name : roles/cloudbuild.builds.viewer Title : Cloud Build Viewer Can view Cloud Build resources cloudbuild.builds.get cloudbuild.builds.list cloudbuild.locations.get cloudbuild.locations.list cloudbuild.operations.get cloudbuild.operations.list remotebuildexecution.blobs.get resourcemanager.projects.get resourcemanager.projects.list Name : roles/cloudbuild.builds.editor Title : Cloud Build Editor Full control of Cloud Build resources cloudbuild.builds.create cloudbuild.builds.get cloudbuild.builds.list cloudbuild.builds.update remotebuildexecution.blobs.get resourcemanager.projects.get resourcemanager.projects.list Name : roles/cloudbuild.builds.approver Title : Cloud Build Approver Provide access to approve or reject pending builds cloudbuild.builds.approve cloudbuild.builds.get cloudbuild.builds.list remotebuildexecution.blobs.get resourcemanager.projects.get resourcemanager.projects.list Name : roles/cloudbuild.builds.builder Title : Cloud Build Legacy Service Account When you enable the Cloud Build API for a project, the Cloud Build legacy service account is automatically created in the project and is granted this role for the resources in the project.
- Depending on the IAM permissions granted to the user and the permissions of the Cloud Build legacy service account, this could enable the user escalated build-time privileges.
- Name : roles/cloudbuild.integrationsViewer Title : Cloud Build Integrations Viewer Can view Cloud Build host connections cloudbuild.integrations.get cloudbuild.integrations.list resourcemanager.projects.get resourcemanager.projects.list Name : roles/cloudbuild.integrationsEditor Title : Cloud Build Integrations Editor Edit control of Cloud Build host connections cloudbuild.integrations.get cloudbuild.integrations.list cloudbuild.integrations.update resourcemanager.projects.get resourcemanager.projects.list Name : roles/cloudbuild.integrationsOwner Title : Cloud Build Integrations Owner Full control of Cloud Build host connections cloudbuild.integrations.create cloudbuild.integrations.delete cloudbuild.integrations.get cloudbuild.integrations.list cloudbuild.integrations.update compute.firewalls.create compute.firewalls.get compute.firewalls.list compute.networks.get compute.networks.updatePolicy compute.regions.get compute.subnetworks.get compute.subnetworks.list resourcemanager.projects.get resourcemanager.projects.list Name : roles/cloudbuild.connectionViewer Title : Cloud Build Connection Viewer Can view and list connections and repositories resourcemanager.projects.get resourcemanager.projects.list cloudbuild.connections.get cloudbuild.connections.fetchLinkableRepositories cloudbuild.connections.list cloudbuild.connections.getIamPolicy cloudbuild.repositories.get cloudbuild.repositories.list Name : roles/cloudbuild.connectionAdmin Title : Cloud Build Connection Admin Can manage connections and repositories resourcemanager.projects.get resourcemanager.projects.list cloudbuild.connections.get cloudbuild.connections.fetchLinkableRepositories cloudbuild.connections.list cloudbuild.connections.create cloudbuild.connections.update cloudbuild.connections.delete cloudbuild.connections.getIamPolicy cloudbuild.connections.setIamPolicy cloudbuild.repositories.get cloudbuild.repositories.list cloudbuild.repositories.create cloudbuild.repositories.delete Name : roles/cloudbuild.readTokenAccessor Title : Cloud Build Read Only Token Accessor Can view the connection, its repositories, and access their read-only token cloudbuild.connections.get cloudbuild.repositories.get cloudbuild.repositories.accessReadToken Name : roles/cloudbuild.tokenAccessor Title : Cloud Build Token Accessor Can view the connection, its repositories, and access their read-only and read/write token cloudbuild.connections.get cloudbuild.repositories.get cloudbuild.repositories.accessReadToken cloudbuild.repositories.accessReadWriteToken Name : roles/cloudbuild.workerPoolOwner Title : Cloud Build WorkerPool Owner Full control of the private pool cloudbuild.workerpools.create cloudbuild.workerpools.delete cloudbuild.workerpools.get cloudbuild.workerpools.list cloudbuild.workerpools.update resourcemanager.projects.get resourcemanager.projects.list Name : roles/cloudbuild.workerPoolEditor Title : Cloud Build WorkerPool Editor Can update private pools cloudbuild.workerpools.get cloudbuild.workerpools.list cloudbuild.workerpools.update resourcemanager.projects.get resourcemanager.projects.list Name : roles/cloudbuild.workerPoolViewer Title : Cloud Build WorkerPool Viewer Can view private pools cloudbuild.workerpools.get cloudbuild.workerpools.list resourcemanager.projects.get resourcemanager.projects.list Name : roles/cloudbuild.workerPoolUser Title : Cloud Build WorkerPool User Can run builds in the private pool cloudbuild.workerpools.use In addition to the previous Cloud Build predefined roles, the basic Viewer, Editor, and Owner roles also include permissions related to Cloud Build.
- Permissions The following table lists the permissions that the caller must have to call each method: API Method Required Permission Role Title builds.create() triggers.create() triggers.patch() triggers.delete() triggers.run() cloudbuild.builds.create Cloud Build Editor builds.cancel() cloudbuild.builds.update Cloud Build Editor builds.get() triggers.get() cloudbuild.builds.get Cloud Build Editor, Cloud Build Viewer builds.list() triggers.list() cloudbuild.builds.list Cloud Build Editor, Cloud Build Viewer Caution: cloudbuild.builds.create permission enables the user to run builds as the Cloud Build legacy service account .

### Cloud Build release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- June 07, 2017 Feature Expanded builder service account permissions to empower end-user and IAM-based control over builder robot permissions, thereby enabling gcloud app deploy , kubectl , and other permissioned APIs to be called as part of a build.
- In addition, the Cloud Build Permissions page in the Google Cloud Console will only show the legacy Cloud Build service account if your organization's policy allows it.
- This Cloud Build service account previously had the logging.privateLogEntries.list IAM permission, which allowed builds to have access to list private logs by default.
- October 09, 2025 Change The Service Account User role has been removed from the Cloud Build Permissions page in the Google Cloud Console.

### "Accessing GitHub from a build via SSH keys \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/access-github-from-build](https://docs.cloud.google.com/build/docs/access-github-from-build)
- Source ID: `site-docs-root-2`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- In the Google Cloud console, go to the settings Cloud Build Permissions page: Go to Permissions From the drop-down list, select the service account whose roles you want to change.
- Delete the SSH key from your disk: rm id github Grant permissions You must grant permission to access Secret Manager to the service account you are using for the build.
- Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.

