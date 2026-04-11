---
title: "Cloud Run IAM roles \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/run/docs/reference/iam/roles
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/run/docs/reference/cloud-run-admin-api-overview
source_metadata:
  url: https://docs.cloud.google.com/run/docs/reference/iam/roles
  title: "Cloud Run IAM roles \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Cloud Run
Reference
Send feedback
Cloud Run IAM roles
Stay organized with collections
Save and categorize content based on your preferences.
This page lists the Identity and Access Management (IAM) predefined roles for
accessing Cloud Run resources.
Predefined roles
The following table describes IAM roles that are associated with
Cloud Run, and lists the permissions that are contained in each role.
Roles can be granted to users on an entire project or on individual services.
Read Managing access using IAM to
learn more.
Roles only apply to Cloud Run services or jobs, they do not apply
to Cloud Run domain mappings. The Project > Editor role
is needed to create or update domain mappings.
Role
Permissions
Cloud Run Admin
( roles/ run.admin )
Full control over all Cloud Run resources.
Lowest-level resources where you can grant this role:
Cloud Run service
Cloud Run job
recommender.locations.*
recommender.locations.get
recommender.locations.list
recommender. runServiceCostInsights.*
recommender. runServiceCostInsights. get
recommender. runServiceCostInsights. list
recommender. runServiceCostInsights. update
recommender. runServiceCostRecommendations.*
recommender. runServiceCostRecommendations. get
recommender. runServiceCostRecommendations. list
recommender. runServiceCostRecommendations. update
recommender. runServiceIdentityInsights.*
recommender. runServiceIdentityInsights. get
recommender. runServiceIdentityInsights. list
recommender. runServiceIdentityInsights. update
recommender. runServiceIdentityRecommendations.*
recommender. runServiceIdentityRecommendations. get
recommender. runServiceIdentityRecommendations. list
recommender. runServiceIdentityRecommendations. update
recommender. runServicePerformanceInsights.*
recommender. runServicePerformanceInsights. get
recommender. runServicePerformanceInsights. list
recommender. runServicePerformanceInsights. update
recommender. runServicePerformanceRecommendations.*
recommender. runServicePerformanceRecommendations. get
recommender. runServicePerformanceRecommendations. list
recommender. runServicePerformanceRecommendations. update
recommender. runServiceSecurityInsights.*
recommender. runServiceSecurityInsights. get
recommender. runServiceSecurityInsights. list
recommender. runServiceSecurityInsights. update
recommender. runServiceSecurityRecommendations.*
recommender. runServiceSecurityRecommendations. get
recommender. runServiceSecurityRecommendations. list
recommender. runServiceSecurityRecommendations. update
resourcemanager.projects.get
resourcemanager.projects.list
run.*
run.configurations.get
run.configurations.list
run.executions.cancel
run.executions.delete
run.executions.get
run.executions.list
run.jobs.create
run.jobs.createTagBinding
run.jobs.delete
run.jobs.deleteTagBinding
run.jobs.get
run.jobs.getIamPolicy
run.jobs.list
run.jobs.listEffectiveTags
run.jobs.listTagBindings
run.jobs.run
run.jobs.runWithOverrides
run.jobs.setIamPolicy
run.jobs.update
run.locations.list
run.operations.delete
run.operations.get
run.operations.list
run.prompts.get
run.revisions.delete
run.revisions.get
run.revisions.list
run.routes.get
run.routes.invoke
run.routes.list
run.services.create
run.services.createTagBinding
run.services.delete
run.services.deleteTagBinding
run.services.get
run.services.getIamPolicy
run.services.list
run.services.listEffectiveTags
run.services.listTagBindings
run.services.setIamPolicy
run.services.update
run.tasks.get
run.tasks.list
run.workerpools.create
run.workerpools.delete
run.workerpools.get
run.workerpools.getIamPolicy
run.workerpools.list
run.workerpools.setIamPolicy
run.workerpools.update
Cloud Run Builder
( roles/ run.builder )
Can build Cloud Run functions and source deployed services.
artifactregistry. repositories. deleteArtifacts
artifactregistry. repositories. downloadArtifacts
artifactregistry. repositories. uploadArtifacts
logging.logEntries.create
source.repos.get
storage.objects.get
Cloud Run Developer
( roles/ run.developer )
Read and write access to all Cloud Run resources.
Lowest-level resources where you can grant this role:
Cloud Run service
Cloud Run job
recommender.locations.*
recommender.locations.get
recommender.locations.list
recommender. runServiceCostInsights.*
recommender. runServiceCostInsights. get
recommender. runServiceCostInsights. list
recommender. runServiceCostInsights. update
recommender. runServiceCostRecommendations.*
recommender. runServiceCostRecommendations. get
recommender. runServiceCostRecommendations. list
recommender. runServiceCostRecommendations. update
recommender. runServiceIdentityInsights.*
recommender. runServiceIdentityInsights. get
recommender. runServiceIdentityInsights. list
recommender. runServiceIdentityInsights. update
recommender. runServiceIdentityRecommendations.*
recommender. runServiceIdentityRecommendations. get
recommender. runServiceIdentityRecommendations. list
recommender. runServiceIdentityRecommendations. update
recommender. runServicePerformanceInsights.*
recommender. runServicePerformanceInsights. get
recommender. runServicePerformanceInsights. list
recommender. runServicePerformanceInsights. update
recommender. runServicePerformanceRecommendations.*
recommender. runServicePerformanceRecommendations. get
recommender. runServicePerformanceRecommendations. list
recommender. runServicePerformanceRecommendations. update
recommender. runServiceSecurityInsights.*
recommender. runServiceSecurityInsights. get
recommender. runServiceSecurityInsights. list
recommender. runServiceSecurityInsights. update
recommender. runServiceSecurityRecommendations.*
recommender. runServiceSecurityRecommendations. get
recommender. runServiceSecurityRecommendations. list
recommender. runServiceSecurityRecommendations. update
resourcemanager.projects.get
resourcemanager.projects.list
run.configurations.*
run.configurations.get
run.configurations.list
run.executions.*
run.executions.cancel
run.executions.delete
run.executions.get
run.executions.list
run.jobs.create
run.jobs.delete
run.jobs.get
run.jobs.getIamPolicy
run.jobs.list
run.jobs.listEffectiveTags
run.jobs.listTagBindings
run.jobs.run
run.jobs.runWithOverrides
run.jobs.update
run.locations.list
run.operations.*
run.operations.delete
run.operations.get
run.operations.list
run.prompts.get
run.revisions.*
run.revisions.delete
run.revisions.get
run.revisions.list
run.routes.*
run.routes.get
run.routes.invoke
run.routes.list
run.services.create
run.services.delete
run.services.get
run.services.getIamPolicy
run.services.list
run.services.listEffectiveTags
run.services.listTagBindings
run.services.update
run.tasks.*
run.tasks.get
run.tasks.list
run.workerpools.create
run.workerpools.delete
run.workerpools.get
run.workerpools.getIamPolicy
run.workerpools.list
run.workerpools.update
Run Editor
( roles/ run.editor )
Editor role for run
recommender.locations.*
recommender.locations.get
recommender.locations.list
recommender. runServiceCostInsights.*
recommender. runServiceCostInsights. get
recommender. runServiceCostInsights. list
recommender. runServiceCostInsights. update
recommender. runServiceCostRecommendations.*
recommender. runServiceCostRecommendations. get
recommender. runServiceCostRecommendations. list
recommender. runServiceCostRecommendations. update
recommender. runServiceIdentityInsights.*
recommender. runServiceIdentityInsights. get
recommender. runServiceIdentityInsights. list
recommender. runServiceIdentityInsights. update
recommender. runServiceIdentityRecommendations.*
recommender. runServiceIdentityRecommendations. get
recommender. runServiceIdentityRecommendations. list
recommender. runServiceIdentityRecommendations. update
recommender. runServicePerformanceInsights.*
recommender. runServicePerformanceInsights. get
recommender. runServicePerformanceInsights. list
recommender. runServicePerformanceInsights. update
recommender. runServicePerformanceRecommendations.*
recommender. runServicePerformanceRecommendations. get
recommender. runServicePerformanceRecommendations. list
recommender. runServicePerformanceRecommendations. update
recommender. runServiceSecurityInsights.*
recommender. runServiceSecurityInsights. get
recommender. runServiceSecurityInsights. list
recommender. runServiceSecurityInsights. update
recommender. runServiceSecurityRecommendations.*
recommender. runServiceSecurityRecommendations. get
recommender. runServiceSecurityRecommendations. list
recommender. runServiceSecurityRecommendations. update
resourcemanager.projects.get
resourcemanager.projects.list
run.configurations.*
run.configurations.get
run.configurations.list
run.executions.*
run.executions.cancel
run.executions.delete
run.executions.get
run.executions.list
run.jobs.create
run.jobs.delete
run.jobs.get
run.jobs.getIamPolicy
run.jobs.list
run.jobs.listEffectiveTags
run.jobs.listTagBindings
run.jobs.run
run.jobs.runWithOverrides
run.jobs.update
run.locations.list
run.operations.*
run.operations.delete
run.operations.get
run.operations.list
run.prompts.get
run.revisions.*
run.revisions.delete
run.revisions.get
run.revisions.list
run.routes.*
run.routes.get
run.routes.invoke
run.routes.list
run.services.create
run.services.delete
run.services.get
run.services.getIamPolicy
run.services.list
run.services.listEffectiveTags
run.services.listTagBindings
run.services.update
run.tasks.*
run.tasks.get
run.tasks.list
run.workerpools.create
run.workerpools.delete
run.workerpools.get
run.workerpools.getIamPolicy
run.workerpools.list
run.workerpools.update
Cloud Run Invoker
( roles/ run.invoker )
Can invoke Cloud Run services and execute Cloud Run jobs.
Lowest-level resources where you can grant this role:
Cloud Run service
Cloud Run job
run.jobs.run
run.routes.invoke
Cloud Run Viewer
( roles/ run.viewer )
Can view the state of all Cloud Run resources, including IAM policies.
Lowest-level resources where you can grant this role:
Cloud Run service
Cloud Run job
recommender.locations.*
recommender.locations.get
recommender.locations.list
recommender. runServiceCostInsights. get
recommender. runServiceCostInsights. list
recommender. runServiceCostRecommendations. get
recommender. runServiceCostRecommendations. list
recommender. runServiceIdentityInsights. get
recommender. runServiceIdentityInsights. list
recommender. runServiceIdentityRecommendations. get
recommender. runServiceIdentityRecommendations. list
recommender. runServicePerformanceInsights. get
recommender. runServicePerformanceInsights. list
recommender. runServicePerformanceRecommendations. get
recommender. runServicePerformanceRecommendations. list
recommender. runServiceSecurityInsights. get
recommender. runServiceSecurityInsights. list
recommender. runServiceSecurityRecommendations. get
recommender. runServiceSecurityRecommendations. list
resourcemanager.projects.get
resourcemanager.projects.list
run.configurations.*
run.configurations.get
run.configurations.list
run.executions.get
run.executions.list
run.jobs.get
run.jobs.getIamPolicy
run.jobs.list
run.jobs.listEffectiveTags
run.jobs.listTagBindings
run.locations.list
run.operations.get
run.operations.list
run.prompts.get
run.revisions.get
run.revisions.list
run.routes.get
run.routes.list
run.services.get
run.services.getIamPolicy
run.services.list
run.services.listEffectiveTags
run.services.listTagBindings
run.tasks.*
run.tasks.get
run.tasks.list
run.workerpools.get
run.workerpools.getIamPolicy
run.workerpools.list
Cloud Run Jobs Executor
( roles/ run.jobsExecutor )
Can execute and cancel Cloud Run jobs.
run.executions.cancel
run.jobs.run
Cloud Run Jobs Executor With Overrides
( roles/ run.jobsExecutorWithOverrides )
Can execute and cancel Cloud Run jobs with overrides.
run.executions.cancel
run.jobs.run
run.jobs.runWithOverrides
Cloud Run Service Invoker
( roles/ run.servicesInvoker )
Can invoke Cloud Run services.
run.routes.invoke
Cloud Run Source Developer
( roles/ run.sourceDeveloper )
Deploy and manage Cloud Run source deployed resources.
artifactregistry. attachments. get
artifactregistry. attachments. list
artifactregistry. dockerimages.*
artifactregistry. dockerimages. get
artifactregistry. dockerimages. list
artifactregistry. files. download
artifactregistry.files.get
artifactregistry.files.list
artifactregistry.locations.*
artifactregistry.locations.get
artifactregistry. locations. list
artifactregistry. mavenartifacts.*
artifactregistry. mavenartifacts. get
artifactregistry. mavenartifacts. list
artifactregistry.npmpackages.*
artifactregistry. npmpackages. get
artifactregistry. npmpackages. list
artifactregistry.packages.get
artifactregistry.packages.list
artifactregistry. projectsettings. get
artifactregistry. pythonpackages.*
artifactregistry. pythonpackages. get
artifactregistry. pythonpackages. list
artifactregistry. repositories. create
artifactregistry. repositories. downloadArtifacts
artifactregistry. repositories. exportArtifacts
artifactregistry. repositories. get
artifactregistry. repositories. list
artifactregistry. repositories. listEffectiveTags
artifactregistry. repositories. listTagBindings
artifactregistry. repositories. readViaVirtualRepository
artifactregistry.rules.get
artifactregistry.rules.list
artifactregistry.tags.get
artifactregistry.tags.list
artifactregistry.versions.get
artifactregistry.versions.list
cloudbuild.builds.create
cloudbuild.builds.get
cloudbuild.builds.list
cloudbuild.builds.update
cloudbuild.locations.*
cloudbuild.locations.get
cloudbuild.locations.list
cloudbuild.operations.*
cloudbuild.operations.get
cloudbuild.operations.list
cloudkms.keyHandles.*
cloudkms.keyHandles.create
cloudkms.keyHandles.get
cloudkms.keyHandles.list
cloudkms.operations.get
cloudkms. projects. showEffectiveAutokeyConfig
eventarc. channelConnections. create
eventarc. channelConnections. delete
eventarc. channelConnections. get
eventarc. channelConnections. getIamPolicy
eventarc. channelConnections. list
eventarc. channelConnections. publish
eventarc.channels.attach
eventarc.channels.create
eventarc.channels.delete
eventarc.channels.get
eventarc.channels.getIamPolicy
eventarc.channels.list
eventarc.channels.publish
eventarc.channels.undelete
eventarc.channels.update
eventarc.enrollments.create
eventarc.enrollments.delete
eventarc.enrollments.get
eventarc. enrollments. getIamPolicy
eventarc.enrollments.list
eventarc.enrollments.update
eventarc. googleApiSources. create
eventarc. googleApiSources. delete
eventarc.googleApiSources.get
eventarc. googleApiSources. getIamPolicy
eventarc.googleApiSources.list
eventarc. googleApiSources. update
eventarc. googleChannelConfigs.*
eventarc. googleChannelConfigs. get
eventarc. googleChannelConfigs. update
eventarc.kafkaSources.create
eventarc.kafkaSources.delete
eventarc.kafkaSources.get
eventarc. kafkaSources. getIamPolicy
eventarc.kafkaSources.list
eventarc.locations.*
eventarc.locations.get
eventarc.locations.list
eventarc.operations.*
eventarc.operations.cancel
eventarc.operations.delete
eventarc.operations.get
eventarc.operations.list
eventarc.pipelines.create
eventarc.pipelines.delete
eventarc.pipelines.get
eventarc. pipelines. getIamPolicy
eventarc.pipelines.list
eventarc.pipelines.update
eventarc.providers.*
eventarc.providers.get
eventarc.providers.list
eventarc.triggers.create
eventarc.triggers.delete
eventarc.triggers.get
eventarc.triggers.getIamPolicy
eventarc.triggers.list
eventarc.triggers.undelete
eventarc.triggers.update
orgpolicy.policy.get
pubsub. messageTransforms. validate
pubsub.schemas.attach
pubsub.schemas.commit
pubsub.schemas.create
pubsub.schemas.delete
pubsub.schemas.get
pubsub.schemas.list
pubsub.schemas.listRevisions
pubsub.schemas.rollback
pubsub.schemas.validate
pubsub.snapshots.create
pubsub. snapshots. createTagBinding
pubsub.snapshots.delete
pubsub. snapshots. deleteTagBinding
pubsub.snapshots.get
pubsub.snapshots.list
pubsub. snapshots. listEffectiveTags
pubsub. snapshots. listTagBindings
pubsub.snapshots.seek
pubsub.snapshots.update
pubsub.subscriptions.consume
pubsub.subscriptions.create
pubsub. subscriptions. createTagBinding
pubsub.subscriptions.delete
pubsub. subscriptions. deleteTagBinding
pubsub.subscriptions.get
pubsub.subscriptions.list
pubsub. subscriptions. listEffectiveTags
pubsub. subscriptions. listTagBindings
pubsub.subscriptions.update
pubsub. topics. attachSubscription
pubsub.topics.create
pubsub.topics.createTagBinding
pubsub.topics.delete
pubsub.topics.deleteTagBinding
pubsub. topics. detachSubscription
pubsub.topics.get
pubsub.topics.list
pubsub. topics. listEffectiveTags
pubsub.topics.listTagBindings
pubsub.topics.publish
pubsub.topics.update
pubsub.topics.updateTag
recommender.locations.*
recommender.locations.get
recommender.locations.list
recommender. runServiceCostInsights.*
recommender. runServiceCostInsights. get
recommender. runServiceCostInsights. list
recommender. runServiceCostInsights. update
recommender. runServiceCostRecommendations.*
recommender. runServiceCostRecommendations. get
recommender. runServiceCostRecommendations. list
recommender. runServiceCostRecommendations. update
recommender. runServiceIdentityInsights.*
recommender. runServiceIdentityInsights. get
recommender. runServiceIdentityInsights. list
recommender. runServiceIdentityInsights. update
recommender. runServiceIdentityRecommendations.*
recommender. runServiceIdentityRecommendations. get
recommender. runServiceIdentityRecommendations. list
recommender. runServiceIdentityRecommendations. update
recommender. runServicePerformanceInsights.*
recommender. runServicePerformanceInsights. get
recommender. runServicePerformanceInsights. list
recommender. runServicePerformanceInsights. update
recommender. runServicePerformanceRecommendations.*
recommender. runServicePerformanceRecommendations. get
recommender. runServicePerformanceRecommendations. list
recommender. runServicePerformanceRecommendations. update
recommender. runServiceSecurityInsights.*
recommender. runServiceSecurityInsights. get
recommender. runServiceSecurityInsights. list
recommender. runServiceSecurityInsights. update
recommender. runServiceSecurityRecommendations.*
recommender. runServiceSecurityRecommendations. get
recommender. runServiceSecurityRecommendations. list
recommender. runServiceSecurityRecommendations. update
remotebuildexecution.blobs.get
resourcemanager.projects.get
resourcemanager.projects.list
run.configurations.*
run.configurations.get
run.configurations.list
run.executions.*
run.executions.cancel
run.executions.delete
run.executions.get
run.executions.list
run.jobs.create
run.jobs.delete
run.jobs.get
run.jobs.getIamPolicy
run.jobs.list
run.jobs.listEffectiveTags
run.jobs.listTagBindings
run.jobs.run
run.jobs.runWithOverrides
run.jobs.update
run.locations.list
run.operations.*
run.operations.delete
run.operations.get
run.operations.list
run.prompts.get
run.revisions.*
run.revisions.delete
run.revisions.get
run.revisions.list
run.routes.*
run.routes.get
run.routes.invoke
run.routes.list
run.services.create
run.services.delete
run.services.get
run.services.getIamPolicy
run.services.list
run.services.listEffectiveTags
run.services.listTagBindings
run.services.update
run.tasks.*
run.tasks.get
run.tasks.list
run.workerpools.create
run.workerpools.delete
run.workerpools.get
run.workerpools.getIamPolicy
run.workerpools.list
run.workerpools.update
serviceusage. consumerpolicy. analyze
serviceusage. consumerpolicy. get
serviceusage. effectivepolicy. get
serviceusage.groups.*
serviceusage.groups.list
serviceusage. groups. listExpandedMembers
serviceusage. groups. listMembers
serviceusage.quotas.get
serviceusage.services.get
serviceusage.services.list
serviceusage.services.use
serviceusage.values.test
storage.buckets.create
storage.buckets.get
storage.buckets.list
storage.folders.create
storage.folders.get
storage.folders.list
storage.managedFolders.create
storage.managedFolders.get
storage.managedFolders.list
storage.multipartUploads.abort
storage. multipartUploads. create
storage. multipartUploads. listParts
storage.objects.create
storage.objects.createContext
storage.objects.get
storage.objects.list
Cloud Run Source Viewer
( roles/ run.sourceViewer )
View Cloud Run source deployed resources.
artifactregistry. repositories. get
artifactregistry. repositories. list
cloudbuild.builds.get
cloudbuild.builds.list
cloudbuild.locations.*
cloudbuild.locations.get
cloudbuild.locations.list
cloudbuild.operations.*
cloudbuild.operations.get
cloudbuild.operations.list
eventarc. channelConnections. get
eventarc. channelConnections. getIamPolicy
eventarc. channelConnections. list
eventarc.channels.get
eventarc.channels.getIamPolicy
eventarc.channels.list
eventarc.enrollments.get
eventarc. enrollments. getIamPolicy
eventarc.enrollments.list
eventarc.googleApiSources.get
eventarc. googleApiSources. getIamPolicy
eventarc.googleApiSources.list
eventarc. googleChannelConfigs. get
eventarc.kafkaSources.get
eventarc. kafkaSources. getIamPolicy
eventarc.kafkaSources.list
eventarc.locations.*
eventarc.locations.get
eventarc.locations.list
eventarc.messageBuses.get
eventarc. messageBuses. getIamPolicy
eventarc.messageBuses.list
eventarc.messageBuses.use
eventarc. multiProjectSources. collectGoogleApiEvents
eventarc.operations.get
eventarc.operations.list
eventarc.pipelines.get
eventarc. pipelines. getIamPolicy
eventarc.pipelines.list
eventarc.providers.*
eventarc.providers.get
eventarc.providers.list
eventarc.triggers.get
eventarc.triggers.getIamPolicy
eventarc.triggers.list
pubsub. messageTransforms. validate
pubsub.schemas.get
pubsub.schemas.list
pubsub.schemas.listRevisions
pubsub.schemas.validate
pubsub.snapshots.get
pubsub.snapshots.list
pubsub. snapshots. listEffectiveTags
pubsub. snapshots. listTagBindings
pubsub.subscriptions.get
pubsub.subscriptions.list
pubsub. subscriptions. listEffectiveTags
pubsub. subscriptions. listTagBindings
pubsub.topics.get
pubsub.topics.list
pubsub. topics. listEffectiveTags
pubsub.topics.listTagBindings
recommender.locations.*
recommender.locations.get
recommender.locations.list
recommender. runServiceCostInsights. get
recommender. runServiceCostInsights. list
recommender. runServiceCostRecommendations. get
recommender. runServiceCostRecommendations. list
recommender. runServiceIdentityInsights. get
recommender. runServiceIdentityInsights. list
recommender. runServiceIdentityRecommendations. get
recommender. runServiceIdentityRecommendations. list
recommender. runServicePerformanceInsights. get
recommender. runServicePerformanceInsights. list
recommender. runServicePerformanceRecommendations. get
recommender. runServicePerformanceRecommendations. list
recommender. runServiceSecurityInsights. get
recommender. runServiceSecurityInsights. list
recommender. runServiceSecurityRecommendations. get
recommender. runServiceSecurityRecommendations. list
remotebuildexecution.blobs.get
resourcemanager.projects.get
resourcemanager.projects.list
run.configurations.*
run.configurations.get
run.configurations.list
run.executions.get
run.executions.list
run.jobs.get
run.jobs.getIamPolicy
run.jobs.list
run.jobs.listEffectiveTags
run.jobs.listTagBindings
run.locations.list
run.operations.get
run.operations.list
run.prompts.get
run.revisions.get
run.revisions.list
run.routes.get
run.routes.list
run.services.get
run.services.getIamPolicy
run.services.list
run.services.listEffectiveTags
run.services.listTagBindings
run.tasks.*
run.tasks.get
run.tasks.list
run.workerpools.get
run.workerpools.getIamPolicy
run.workerpools.list
serviceusage. consumerpolicy. analyze
serviceusage. consumerpolicy. get
serviceusage. effectivepolicy. get
serviceusage.groups.*
serviceusage.groups.list
serviceusage. groups. listExpandedMembers
serviceusage. groups. listMembers
serviceusage.quotas.get
serviceusage.services.get
serviceusage.services.list
serviceusage.values.test
storage.folders.get
storage.folders.list
storage.managedFolders.get
storage.managedFolders.list
storage.objects.get
storage.objects.list
Service agent roles
Service agent roles should only be granted to service agents .
Role
Permissions
Cloud Run Service Agent
( roles/ run.serviceAgent )
Gives Cloud Run service account access to managed resources.
Warning: Do not grant service agent roles to any principals except
service agents .
artifactregistry. attachments. get
artifactregistry. attachments. list
artifactregistry. dockerimages.*
artifactregistry. dockerimages. get
artifactregistry. dockerimages. list
artifactregistry. files. download
artifactregistry.files.get
artifactregistry.files.list
artifactregistry.locations.*
artifactregistry.locations.get
artifactregistry. locations. list
artifactregistry. mavenartifacts.*
artifactregistry. mavenartifacts. get
artifactregistry. mavenartifacts. list
artifactregistry.npmpackages.*
artifactregistry. npmpackages. get
artifactregistry. npmpackages. list
artifactregistry.packages.get
artifactregistry.packages.list
artifactregistry. projectsettings. get
artifactregistry. pythonpackages.*
artifactregistry. pythonpackages. get
artifactregistry. pythonpackages. list
artifactregistry. repositories. downloadArtifacts
artifactregistry. repositories. exportArtifacts
artifactregistry. repositories. get
artifactregistry. repositories. list
artifactregistry. repositories. listEffectiveTags
artifactregistry. repositories. listTagBindings
artifactregistry. repositories. readViaVirtualRepository
artifactregistry. repositories. uploadArtifacts
artifactregistry.rules.get
artifactregistry.rules.list
artifactregistry.tags.get
artifactregistry.tags.list
artifactregistry.versions.get
artifactregistry.versions.list
binaryauthorization. platformPolicies. evaluatePolicy
binaryauthorization. policy. evaluatePolicy
clientauthconfig.clients.list
cloudbuild.builds.create
cloudbuild.builds.get
compute.addresses.create
compute. addresses. createInternal
compute.addresses.delete
compute. addresses. deleteInternal
compute.addresses.get
compute.addresses.list
compute.globalOperations.get
compute.networks.access
compute.networks.get
compute.regionOperations.get
compute.subnetworks.get
compute.subnetworks.use
compute.zoneOperations.get
iam.serviceAccounts.actAs
iam. serviceAccounts. getAccessToken
iam. serviceAccounts. getOpenIdToken
iam.serviceAccounts.signBlob
networkservices.meshes.get
resourcemanager.projects.get
resourcemanager. projects. getIamPolicy
resourcemanager.projects.list
run.routes.invoke
serviceusage.services.get
serviceusage.services.use
storage.buckets.create
storage.buckets.get
storage.buckets.update
storage.folders.get
storage.folders.list
storage.managedFolders.get
storage.managedFolders.list
storage.objects.create
storage.objects.delete
storage.objects.get
storage.objects.list
storage.objects.update
vpcaccess.connectors.get
vpcaccess.connectors.use
For a reference describing the IAM permissions contained in each
IAM role, refer
to Cloud Run IAM Permissions .
Custom roles
For developers that want to define their own roles containing bundles of
permissions that they specify, IAM offers
custom roles .
If the role contains permissions that let a developer deploy services, then you
must perform the additional configuration below.
Deployment permissions
Cloud Run services and jobs run with a service identity .
To create or update Cloud Run resources, the
deployer account
must have access on the following resources:
The Cloud Run service or job
The Artifact Registry repository of the service's or job's container image
The service account used as the service identity
By default, the service identity is the Compute Engine default service
account. However, Google recommends using a user-managed service account with
the most minimal set of permissions. See the service identity configuration
pages for services and
jobs for more details.
Select the appropriate expander arrow to learn about the required deployment
permissions.
Click to view the required roles for deploying services or revisions
To get the permissions that you need to deploy services or revisions,
you or your administrator must grant IAM roles to the
deployer account on the following resources:
Cloud Run Developer
( roles/run.developer ) on the Cloud Run service
Artifact Registry Reader
( roles/artifactregistry.reader ) on the Artifact Registry repository of the container images of the service
Service Account User
( roles/iam.serviceAccountUser ) on the Cloud Run service identity
The following permissions are required to deploy services or revisions:
run.services.create to create services and run.services.update to update services
run.services.get and run.operations.get to read the status of the service
artifactregistry.repositories.downloadArtifacts on the repository container the container images of the service
iam.serviceAccounts.actAs on the service identity
You might also be able to get these permissions with
custom roles or other
predefined roles .
Click to view the required roles for executing jobs
To get the permissions that you need to execute jobs, you or your
administrator must grant IAM roles to the deployer account
on the following resources:
To create or update a job:
Cloud Run Developer
( roles/run.developer ) on the Cloud Run job
To execute jobs or cancel job executions:
Cloud Run Invoker
( roles/run.invoker ) on the Cloud Run job
Artifact Registry Reader
( roles/artifactregistry.reader ) on the Artifact Registry repository
of the container images of the job
Service Account User
( roles/iam.serviceAccountUser ) on the Cloud Run service identity
The following permissions are required to execute jobs:
run.jobs.create to create jobs and run.jobs.update to update jobs
run.jobs.run to execute jobs
run.jobs.get and run.operations.get to read the status of the job
artifactregistry.repositories.downloadArtifacts on the repository container the container images of the job
iam.serviceAccounts.actAs on the service identity
You might also be able to get these permissions with
custom roles or other
predefined roles .
Click to view the roles for deploying from source
To get the permissions that you need to deploy a service or job from
source code, you or your administrator must grant the following roles:
Cloud Run Source Developer
( roles/run.sourceDeveloper ) to the deployer account on your
project.
Service Usage Consumer
( roles/serviceusage.serviceUsageConsumer ) on your project
Cloud Run Builder ( roles/run.builder ) to
the Compute Engine default service account on your project.
If your Cloud Run resource interfaces with Cloud Client Libraries,
you must grant IAM roles to the service identity, as required by
the Cloud Client Libraries.
If you are using a cross-project service account to
deploy a service, grant the Service Account Token Creator
( roles/iam.serviceAccountTokenCreator ) role on the service identity. See
Use service accounts in other projects
for more details.
To grant the Cloud Run deployer account access, see the following
instructions:
Console UI
To grant access on the Cloud Run resource :
Go to the Cloud Run page in the Google Cloud console:
Go to Cloud Run
Select Services or Jobs.
Click the checkbox at the left of the service or job you want to add
principals to.
In the information pane in the top right corner click the
Permissions tab. If the information pane isn't visible, you may need
to click Show Info Panel , then click Permissions .
Click Add principal .
In the New principals field, enter one or more identities that need
access to your job.
From the Role drop-down menu, select a role or roles. The roles you
select appear in the pane with a short description of the permissions
they grant.
Click Save .
To grant access on the Artifact Registry repository :
Go to the Artifact Registry page in the Google Cloud console:
Go to Artifact Registry
Click the checkbox at the left of the repository you want to add
principals to.
In the information pane in the top right corner click the
Permissions tab. If the information pane isn't visible, you may need
to click Show Info Panel , then click Permissions .
Click Add principal .
In the New principals field, enter one or more identities that need
access this repository.
From the Role drop-down menu, select Artifact Registry Reader .
Click Save .
To grant access on the service identity resource :
Go to the Service accounts page of the Google Cloud console:
Go to Service accounts
Select the service account email address you are using as the service
identity, either:
The Compute Engine default service account: PROJECT_NUMBER -compute@developer.gserviceaccount.com
A service account that was manually created: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com
Click the Permissions tab.
Click the person_add Grant access
button.
Enter the principal (e.g. user or group email) that matches the principal
you're granting the Admin or Developer role to.
In the Select a role drop-down, select the Service Accounts >
Service Account User role.
Click Save .
If you are deploying from source, grant access to the deployer account and
the Cloud Build service account on your project :
Go to the IAM page in the Google Cloud console:
Go to IAM
Select the email address of the principal you are using as the deployer
account.
Click the edit icon on the left of the principal.
From the Role drop-down menu, select Cloud Run Source Developer .
From the Role drop-down menu, select Service Usage Consumer .
Click Save .
Select the service account email address you are using as the service
identity, either:
The Compute Engine default service account: PROJECT_NUMBER -compute@developer.gserviceaccount.com
A service account that was manually created: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com
Click the edit icon on the left of the principal.
From the Role drop-down menu, select Cloud Run Builder .
Click Save .
gcloud
To grant access on the Cloud Run resource , use the
gcloud run services add-iam-policy-binding or the
gcloud run jobs add-iam-policy-binding command,
replacing the highlighted variables with the appropriate values:
gcloud run CLOUD_RUN_RESOURCE_TYPE add-iam-policy-binding NAME \
--member = " PRINCIPAL " \
--role = " ROLE "
Replace:
CLOUD_RUN_RESOURCE_TYPE with the Cloud Run
resource type, such as services or jobs .
NAME with the name of the Cloud Run resource.
PRINCIPAL with the deployer account you are adding the
binding for, using the format user|group|serviceAccount:email
or domain:domain . For example:
user:test-user@gmail.com
group:admins@example.com
serviceAccount:test123@example.domain.com
domain:example.domain.com
ROLE with the role name to assign to the deployer
account. For example, roles/run.developer .
To grant access on the Artifact Registry repository , use the
gcloud artifacts repositories add-iam-policy-binding command,
replacing the highlighted variables with the appropriate values:
gcloud artifacts repositories add-iam-policy-binding REPOSITORY \
--location = " LOCATION " \
--member = " PRINCIPAL " \
--role = "roles/artifactregistry.reader"
Replace:
REPOSITORY with the ID of the repository.
LOCATION with the location of the repository.
PRINCIPAL with the deployer account you are adding the
binding for, using the format user|group|serviceAccount:email
or domain:domain .
To grant access on the service identity resource , use the
gcloud iam service-accounts add-iam-policy-binding command,
replacing the highlighted variables with the appropriate values:
gcloud iam service-accounts add-iam-policy-binding \
SERVICE_ACCOUNT_EMAIL \
--member = " PRINCIPAL " \
--role = "roles/iam.serviceAccountUser"
Replace:
SERVICE_ACCOUNT_EMAIL with the service account email address
you are using as the service identity, such as:
The Compute Engine default service account: PROJECT_NUMBER -compute@developer.gserviceaccount.com
A service account that was manually created: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com
PRINCIPAL with the principal you are adding the binding for,
using the format user|group|serviceAccount:email or
domain:domain . For example:
user:test-user@gmail.com
group:admins@example.com
serviceAccount:test123@example.domain.com
domain:example.domain.com
If you are deploying from source, grant access to the deployer account
and the Cloud Build service account on your project with
the gcloud projects add-iam-policy-binding command.
Grant the Cloud Run Builder role to the build service account
on your project:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount: BUILD_SERVICE_ACCOUNT_EMAIL \
--role = roles/run.builder
Replace:
PROJECT_ID with your Google Cloud project ID.
BUILD_SERVICE_ACCOUNT_EMAIL with the service account email
address you are using as the build service account, such as:
The Compute Engine default service account (default): PROJECT_NUMBER -compute@developer.gserviceaccount.com .
A service account that was manually created:
SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com .
Grant the Cloud Run Source Developer role to the deployer
account on your project:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = PRINCIPAL \
--role = roles/run.sourceDeveloper
Replace:
PROJECT_NUMBER with your Google Cloud project
number.
PROJECT_ID with your Google Cloud project ID.
PRINCIPAL with the deployer account you are adding the
binding for.
Grant the Service Usage Consumer role to the deployer
account on your project:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = PRINCIPAL \
--role = roles/serviceusage.serviceUsageConsumer
Replace:
PROJECT_NUMBER with your Google Cloud project
number.
PROJECT_ID with your Google Cloud project ID.
PRINCIPAL with the deployer account you are adding the
binding for.
For detailed instructions on how to find your project ID, and project
number, see
Creating and managing projects .
Caution: Assigning the
IAM Service Account User role
indirectly grants the role associated with the service identity to the user. For
example: a user has the Cloud Run Admin role, and the user is also
assigned the role of IAMService Account User on the service
identity. If the service identity has the Editor role, the user can then "act
as" an Editor. When configuring the service identity, we recommend following the
principle of least privilege
to minimize the impact of these role assignments.
In addition to the deployer account needing these permissions, the
Cloud Run service agent must have
permissions to access the deployed container. By default, Google grants the
Cloud Run Service Agent
role to the Cloud Run service agent automatically.
Avoid IAM allow policy limits in automated deployments
When using Infrastructure-as-Code (IaC) tools like
Config Connector to deploy Cloud Run
services, the deployer account needs permission to read container images from
Artifact Registry. These permissions are enforced by an IAM
allow policy , which is attached to the relevant
resource (Artifact Registry repository), and specifies which principals have been
granted which roles.
If numerous Cloud Run services are deployed, each with a unique service
account, IaC tools create individual role bindings in the Artifact Registry allow
policy. This can quickly exceed the 1,500-member-per-policy
limit , which restricts the number of
principals (service accounts or users) listed in a single resource's allow
policy.
To avoid this limitation, consider using a single service account across
multiple services. This minimizes the number of entries in the Artifact Registry
allow policy.
Caution: Avoid using groups for granting service accounts access to resources.
Optional permissions for Cloud Run users
The following optional permissions can be considered when configuring accounts
with minimal permission set:
monitoring.timeSeries.list on the project level. Typically assigned
through the roles/monitoring.viewer role. It allows user to access
metrics generated by their service. For more information, go to the
Stackdriver documentation for
Access Control .
logging.logEntries.list on the project level. Typically assigned through
the roles/logging.viewer role. It allows user to access logs generated
by their service. For more information, go to the
Access Control guide
in the Stackdriver Logging documentation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
