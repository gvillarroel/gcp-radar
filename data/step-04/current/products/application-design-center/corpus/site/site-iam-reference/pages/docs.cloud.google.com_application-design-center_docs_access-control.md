---
title: "Access control with IAM \_|\_ Application Design Center \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/application-design-center/docs/access-control
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/application-design-center/docs/grant-roles-service-account
source_metadata:
  url: https://docs.cloud.google.com/application-design-center/docs/access-control
  title: "Access control with IAM \_|\_ Application Design Center \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Application Design Center
Guides
Send feedback
Access control with IAM
Stay organized with collections
Save and categorize content based on your preferences.
This page describes Application Design Center roles and permissions. To control
access to App Design Center, use Identity and Access Management (IAM)
to assign roles to users, groups, and service accounts.
Predefined Application Design Center roles
To grant access to specific Google Cloud resources and prevent
unauthorized access to other resources, assign App Design Center's
predefined roles on the
app-enabled folder or management project:.
Use the following IAM roles to manage spaces and author
templates:
Application Design Center Admin ( roles/designcenter.admin )
Application Design Center User ( roles/designcenter.user )
Application Design Center Viewer ( roles/designcenter.viewer )
Use the following IAM roles to create application configurations
and manage deployment lifecycles:
Application Admin ( roles/designcenter.applicationAdmin )
Application Editor ( roles/designcenter.applicationEditor )
Application Viewer ( roles/designcenter.applicationViewer )
The Application Design Center Admin role includes all permissions in the other
Application Design Center roles.
Application Design Center role descriptions
The following table describes App Design Center roles and their typical
responsibilities.
Role
Description
Purpose
Application Design Center Admin
Ability to create and manage all App Design Center artifacts, and delegate application control to other users.
To manage the full lifecycle of an application.
Typically Platform Admins, who generally have administrative permissions and full visibility of the end-to-end architecture.
Application Design Center User
Ability to create and update application templates.
To scale the capability to create, update, or delete application templates to ease the effort of Platform Admins.
Typically a Platform Engineer who needs to create and manage application templates.
Application Design Center Viewer
Ability to view spaces, catalogs, templates, applications, and their attributes.
To enable basic visibility across spaces, catalogs and applications, and their dependencies.
Typically most personnel in the organization. To get the most value, grant all App Design Center users this role.
Application Admin
Ability to create, manage and deploy applications, and delegate application control to other application developers.
To manage application drafts and deployments, as well as the ability to attach service projects required to store individual resources.
Typically administrators and developers who are responsible for application creation.
Application Editor
Ability to create, manage, and deploy applications.
To scale the capability to manage drafts and deployments to ease the effort of application administrators.
Typically an application operator who has a good understanding of deployments.
Application Viewer
Ability to view applications.
To enable basic visibility across templates and applications, and their dependencies.
Typically most personnel in the organization. To get the most value, grant all Application Design Center users this role.
Application Design Center permissions
The following table lists App Design Center IAM
roles and their permissions.
Application Design Center Admin
Application Design Center User
Application Design Center Viewer
Application Admin
Application Editor
Application Viewer
Clear all
Application Design Center Admin
( roles/ designcenter.admin )
Full access to Application Design Center resources.
apphub.applications.create
apphub.applications.delete
apphub.applications.get
apphub.applications.list
apphub.applications.update
apphub.boundaries.attach
apphub.boundaries.update
apphub.locations.*
apphub.locations.get
apphub.locations.list
apphub. serviceProjectAttachments. list
cloudbuild.builds.get
cloudbuild.builds.list
config.automigrationconfig.get
config. deploymentgrouprevisions.*
config. deploymentgrouprevisions. get
config. deploymentgrouprevisions. list
config.deploymentgroups.get
config.deploymentgroups.list
config.deployments.get
config. deployments. getIamPolicy
config.deployments.list
config.locations.*
config.locations.get
config.locations.list
config.operations.get
config.operations.list
config.previews.export
config.previews.get
config.previews.list
config.resources.*
config.resources.get
config.resources.list
config.revisions.get
config.revisions.list
config.terraformversions.*
config.terraformversions.get
config.terraformversions.list
container.clusters.list
designcenter.*
designcenter. applicationTemplateRevisions. delete
designcenter. applicationTemplateRevisions. get
designcenter. applicationTemplateRevisions. list
designcenter. applicationTemplates. create
designcenter. applicationTemplates. delete
designcenter. applicationTemplates. get
designcenter. applicationTemplates. list
designcenter. applicationTemplates. update
designcenter. applications. create
designcenter. applications. delete
designcenter.applications.get
designcenter.applications.list
designcenter. applications. update
designcenter. catalogTemplateRevisions. create
designcenter. catalogTemplateRevisions. delete
designcenter. catalogTemplateRevisions. get
designcenter. catalogTemplateRevisions. list
designcenter. catalogTemplates. create
designcenter. catalogTemplates. delete
designcenter. catalogTemplates. get
designcenter. catalogTemplates. list
designcenter. catalogTemplates. update
designcenter.catalogs.create
designcenter.catalogs.delete
designcenter.catalogs.get
designcenter.catalogs.list
designcenter.catalogs.update
designcenter.components.create
designcenter.components.delete
designcenter.components.get
designcenter.components.list
designcenter.components.update
designcenter. connections. create
designcenter. connections. delete
designcenter.connections.get
designcenter.connections.list
designcenter. connections. update
designcenter.locations.get
designcenter.locations.list
designcenter.operations.cancel
designcenter.operations.delete
designcenter.operations.get
designcenter.operations.list
designcenter. sharedTemplateRevisions. get
designcenter. sharedTemplateRevisions. list
designcenter. sharedTemplates. get
designcenter. sharedTemplates. list
designcenter.shares.create
designcenter.shares.delete
designcenter.shares.get
designcenter.shares.list
designcenter.spaces.create
designcenter.spaces.delete
designcenter.spaces.get
designcenter. spaces. getIamPolicy
designcenter.spaces.list
designcenter. spaces. setIamPolicy
designcenter.spaces.update
developerconnect. connections. constructGitHubAppManifest
developerconnect. connections. create
developerconnect. connections. delete
developerconnect. connections. fetchGitHubInstallations
developerconnect. connections. fetchLinkableGitRepositories
developerconnect. connections. generateGitHubStateToken
developerconnect. connections. get
developerconnect. connections. list
developerconnect. connections. processGitHubAppCreationCallback
developerconnect. connections. processGitHubOAuthCallback
developerconnect. connections. update
developerconnect. gitRepositoryLinks. create
developerconnect. gitRepositoryLinks. delete
developerconnect. gitRepositoryLinks. fetchGitRefs
developerconnect. gitRepositoryLinks. get
developerconnect. gitRepositoryLinks. gitProxyRead
developerconnect. gitRepositoryLinks. gitProxyWrite
developerconnect. gitRepositoryLinks. list
developerconnect.locations.*
developerconnect.locations.get
developerconnect. locations. list
developerconnect.operations.*
developerconnect. operations. cancel
developerconnect. operations. delete
developerconnect. operations. get
developerconnect. operations. list
monitoring.timeSeries.create
orgpolicy.policy.get
resourcemanager.projects.get
resourcemanager.projects.list
storage.folders.*
storage.folders.create
storage.folders.delete
storage.folders.get
storage.folders.list
storage.folders.rename
storage.managedFolders.create
storage.managedFolders.delete
storage.managedFolders.get
storage.managedFolders.list
storage.multipartUploads.*
storage.multipartUploads.abort
storage. multipartUploads. create
storage.multipartUploads.list
storage. multipartUploads. listParts
storage.objects.create
storage.objects.createContext
storage.objects.delete
storage.objects.deleteContext
storage.objects.get
storage.objects.list
storage.objects.move
storage.objects.restore
storage.objects.update
storage.objects.updateContext
Application Design Center User
( roles/ designcenter.user )
Readonly access to Application Design Center resources.
apphub. serviceProjectAttachments. list
container.clusters.list
designcenter. applicationTemplateRevisions.*
designcenter. applicationTemplateRevisions. delete
designcenter. applicationTemplateRevisions. get
designcenter. applicationTemplateRevisions. list
designcenter. applicationTemplates.*
designcenter. applicationTemplates. create
designcenter. applicationTemplates. delete
designcenter. applicationTemplates. get
designcenter. applicationTemplates. list
designcenter. applicationTemplates. update
designcenter.applications.get
designcenter.applications.list
designcenter. catalogTemplateRevisions. get
designcenter. catalogTemplateRevisions. list
designcenter. catalogTemplates. get
designcenter. catalogTemplates. list
designcenter.catalogs.get
designcenter.catalogs.list
designcenter.components.*
designcenter.components.create
designcenter.components.delete
designcenter.components.get
designcenter.components.list
designcenter.components.update
designcenter.connections.*
designcenter. connections. create
designcenter. connections. delete
designcenter.connections.get
designcenter.connections.list
designcenter. connections. update
designcenter.locations.*
designcenter.locations.get
designcenter.locations.list
designcenter.operations.get
designcenter.operations.list
designcenter. sharedTemplateRevisions.*
designcenter. sharedTemplateRevisions. get
designcenter. sharedTemplateRevisions. list
designcenter.sharedTemplates.*
designcenter. sharedTemplates. get
designcenter. sharedTemplates. list
designcenter.shares.get
designcenter.shares.list
designcenter.spaces.get
designcenter. spaces. getIamPolicy
designcenter.spaces.list
monitoring.timeSeries.create
orgpolicy.policy.get
resourcemanager.projects.get
resourcemanager.projects.list
storage.folders.*
storage.folders.create
storage.folders.delete
storage.folders.get
storage.folders.list
storage.folders.rename
storage.managedFolders.create
storage.managedFolders.delete
storage.managedFolders.get
storage.managedFolders.list
storage.multipartUploads.*
storage.multipartUploads.abort
storage. multipartUploads. create
storage.multipartUploads.list
storage. multipartUploads. listParts
storage.objects.create
storage.objects.createContext
storage.objects.delete
storage.objects.deleteContext
storage.objects.get
storage.objects.list
storage.objects.move
storage.objects.restore
storage.objects.update
storage.objects.updateContext
Application Design Center Viewer
( roles/ designcenter.viewer )
Readonly access to Application Design Center resources.
container.clusters.list
designcenter. applicationTemplateRevisions. get
designcenter. applicationTemplateRevisions. list
designcenter. applicationTemplates. get
designcenter. applicationTemplates. list
designcenter.applications.get
designcenter.applications.list
designcenter. catalogTemplateRevisions. get
designcenter. catalogTemplateRevisions. list
designcenter. catalogTemplates. get
designcenter. catalogTemplates. list
designcenter.catalogs.get
designcenter.catalogs.list
designcenter.components.get
designcenter.components.list
designcenter.connections.get
designcenter.connections.list
designcenter.locations.*
designcenter.locations.get
designcenter.locations.list
designcenter.operations.get
designcenter.operations.list
designcenter. sharedTemplateRevisions.*
designcenter. sharedTemplateRevisions. get
designcenter. sharedTemplateRevisions. list
designcenter.sharedTemplates.*
designcenter. sharedTemplates. get
designcenter. sharedTemplates. list
designcenter.shares.get
designcenter.shares.list
designcenter.spaces.get
designcenter. spaces. getIamPolicy
designcenter.spaces.list
resourcemanager.projects.get
resourcemanager.projects.list
storage.folders.get
storage.folders.list
storage.managedFolders.get
storage.managedFolders.list
storage.objects.get
storage.objects.list
Application Admin
( roles/ designcenter.applicationAdmin )
Admin access to Application.
apphub.applications.create
apphub.applications.delete
apphub.applications.get
apphub.applications.list
apphub.applications.update
apphub.locations.*
apphub.locations.get
apphub.locations.list
apphub. serviceProjectAttachments. list
cloudbuild.builds.get
cloudbuild.builds.list
config.automigrationconfig.get
config. deploymentgrouprevisions.*
config. deploymentgrouprevisions. get
config. deploymentgrouprevisions. list
config.deploymentgroups.get
config.deploymentgroups.list
config.deployments.get
config. deployments. getIamPolicy
config.deployments.list
config.locations.*
config.locations.get
config.locations.list
config.operations.get
config.operations.list
config.previews.export
config.previews.get
config.previews.list
config.resources.*
config.resources.get
config.resources.list
config.revisions.get
config.revisions.list
config.terraformversions.*
config.terraformversions.get
config.terraformversions.list
container.clusters.list
designcenter. applicationTemplateRevisions. get
designcenter. applicationTemplateRevisions. list
designcenter. applicationTemplates. get
designcenter. applicationTemplates. list
designcenter.applications.*
designcenter. applications. create
designcenter. applications. delete
designcenter.applications.get
designcenter.applications.list
designcenter. applications. update
designcenter. sharedTemplateRevisions.*
designcenter. sharedTemplateRevisions. get
designcenter. sharedTemplateRevisions. list
designcenter.sharedTemplates.*
designcenter. sharedTemplates. get
designcenter. sharedTemplates. list
designcenter.shares.get
designcenter.shares.list
designcenter.spaces.get
designcenter.spaces.list
developerconnect. connections. constructGitHubAppManifest
developerconnect. connections. create
developerconnect. connections. delete
developerconnect. connections. fetchGitHubInstallations
developerconnect. connections. fetchLinkableGitRepositories
developerconnect. connections. generateGitHubStateToken
developerconnect. connections. get
developerconnect. connections. list
developerconnect. connections. processGitHubAppCreationCallback
developerconnect. connections. processGitHubOAuthCallback
developerconnect. connections. update
developerconnect. gitRepositoryLinks. create
developerconnect. gitRepositoryLinks. delete
developerconnect. gitRepositoryLinks. fetchGitRefs
developerconnect. gitRepositoryLinks. get
developerconnect. gitRepositoryLinks. gitProxyRead
developerconnect. gitRepositoryLinks. gitProxyWrite
developerconnect. gitRepositoryLinks. list
developerconnect.locations.*
developerconnect.locations.get
developerconnect. locations. list
developerconnect.operations.*
developerconnect. operations. cancel
developerconnect. operations. delete
developerconnect. operations. get
developerconnect. operations. list
resourcemanager.projects.get
resourcemanager.projects.list
Application Editor
( roles/ designcenter.applicationEditor )
Read and Write access to Application.
apphub.applications.create
apphub.applications.delete
apphub.applications.get
apphub.applications.list
apphub.applications.update
apphub.locations.*
apphub.locations.get
apphub.locations.list
apphub. serviceProjectAttachments. list
cloudbuild.builds.get
cloudbuild.builds.list
config.automigrationconfig.get
config. deploymentgrouprevisions.*
config. deploymentgrouprevisions. get
config. deploymentgrouprevisions. list
config.deploymentgroups.get
config.deploymentgroups.list
config.deployments.get
config. deployments. getIamPolicy
config.deployments.list
config.locations.*
config.locations.get
config.locations.list
config.operations.get
config.operations.list
config.previews.export
config.previews.get
config.previews.list
config.resources.*
config.resources.get
config.resources.list
config.revisions.get
config.revisions.list
config.terraformversions.*
config.terraformversions.get
config.terraformversions.list
container.clusters.list
designcenter. applicationTemplateRevisions. get
designcenter. applicationTemplateRevisions. list
designcenter. applicationTemplates. get
designcenter. applicationTemplates. list
designcenter.applications.*
designcenter. applications. create
designcenter. applications. delete
designcenter.applications.get
designcenter.applications.list
designcenter. applications. update
designcenter. sharedTemplateRevisions.*
designcenter. sharedTemplateRevisions. get
designcenter. sharedTemplateRevisions. list
designcenter.sharedTemplates.*
designcenter. sharedTemplates. get
designcenter. sharedTemplates. list
designcenter.shares.get
designcenter.shares.list
designcenter.spaces.get
designcenter.spaces.list
resourcemanager.projects.get
resourcemanager.projects.list
Application Viewer
( roles/ designcenter.applicationViewer )
Readonly access to Application.
apphub.applications.get
apphub.applications.list
apphub.locations.*
apphub.locations.get
apphub.locations.list
config.automigrationconfig.get
config. deploymentgrouprevisions.*
config. deploymentgrouprevisions. get
config. deploymentgrouprevisions. list
config.deploymentgroups.get
config.deploymentgroups.list
config.deployments.get
config. deployments. getIamPolicy
config.deployments.list
config.locations.*
config.locations.get
config.locations.list
config.operations.get
config.operations.list
config.previews.get
config.previews.list
config.resources.*
config.resources.get
config.resources.list
config.revisions.get
config.revisions.list
config.terraformversions.*
config.terraformversions.get
config.terraformversions.list
container.clusters.list
designcenter. applicationTemplateRevisions. get
designcenter. applicationTemplateRevisions. list
designcenter. applicationTemplates. get
designcenter. applicationTemplates. list
designcenter.applications.get
designcenter.applications.list
designcenter. sharedTemplateRevisions.*
designcenter. sharedTemplateRevisions. get
designcenter. sharedTemplateRevisions. list
designcenter.sharedTemplates.*
designcenter. sharedTemplates. get
designcenter. sharedTemplates. list
designcenter.shares.get
designcenter.shares.list
designcenter.spaces.get
designcenter.spaces.list
resourcemanager.projects.get
resourcemanager.projects.list
What's next
Grant roles to your service account .
Manage and assign spaces .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
