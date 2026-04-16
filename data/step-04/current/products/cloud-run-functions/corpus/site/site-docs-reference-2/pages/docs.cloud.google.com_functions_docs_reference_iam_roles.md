---
title: "Cloud Functions IAM Roles \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/functions/docs/reference/iam/roles
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/functions/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/functions/docs/reference/iam/roles
  title: "Cloud Functions IAM Roles \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

If you are creating a new function, see the Console Quickstart on Cloud Run.
Home
Documentation
Application hosting
Cloud Run
Cloud Run functions
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Functions IAM Roles
Note: Cloud Functions (2nd gen) is now Cloud Run functions. The information
on this page applies to using the Cloud Functions API, which is still
supported for performing operations on functions.
Predefined roles
The following table describes Identity and Access Management (IAM) roles
that are associated with Cloud Run functions (formerly known as
Cloud Functions), and lists the permissions that
are contained in each role.
Roles can be granted to users on an entire project or on individual functions.
Read Managing Access via IAM to
learn more.
Cloud Functions roles
Role
Permissions
Cloud Functions Admin
( roles/ cloudfunctions.admin )
Full access to functions, operations and locations.
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
artifactregistry.rules.get
artifactregistry.rules.list
artifactregistry.tags.get
artifactregistry.tags.list
artifactregistry.versions.get
artifactregistry.versions.list
cloudasset. assets. searchAllResources
cloudbuild.builds.get
cloudbuild.builds.list
cloudbuild.locations.*
cloudbuild.locations.get
cloudbuild.locations.list
cloudbuild.operations.*
cloudbuild.operations.get
cloudbuild.operations.list
cloudfunctions.*
cloudfunctions.functions.call
cloudfunctions. functions. create
cloudfunctions. functions. delete
cloudfunctions. functions. generationUpgrade
cloudfunctions.functions.get
cloudfunctions. functions. getIamPolicy
cloudfunctions. functions. invoke
cloudfunctions.functions.list
cloudfunctions. functions. setIamPolicy
cloudfunctions. functions. sourceCodeGet
cloudfunctions. functions. sourceCodeSet
cloudfunctions. functions. update
cloudfunctions.locations.list
cloudfunctions.operations.get
cloudfunctions.operations.list
eventarc.*
eventarc. channelConnections. create
eventarc. channelConnections. delete
eventarc. channelConnections. get
eventarc. channelConnections. getIamPolicy
eventarc. channelConnections. list
eventarc. channelConnections. publish
eventarc. channelConnections. setIamPolicy
eventarc.channels.attach
eventarc.channels.create
eventarc.channels.delete
eventarc.channels.get
eventarc.channels.getIamPolicy
eventarc.channels.list
eventarc.channels.publish
eventarc.channels.setIamPolicy
eventarc.channels.undelete
eventarc.channels.update
eventarc.enrollments.create
eventarc.enrollments.delete
eventarc.enrollments.get
eventarc. enrollments. getIamPolicy
eventarc.enrollments.list
eventarc. enrollments. setIamPolicy
eventarc.enrollments.update
eventarc. events. receiveAuditLogWritten
eventarc.events.receiveEvent
eventarc. googleApiSources. create
eventarc. googleApiSources. delete
eventarc.googleApiSources.get
eventarc. googleApiSources. getIamPolicy
eventarc.googleApiSources.list
eventarc. googleApiSources. setIamPolicy
eventarc. googleApiSources. update
eventarc. googleChannelConfigs. get
eventarc. googleChannelConfigs. update
eventarc.kafkaSources.create
eventarc.kafkaSources.delete
eventarc.kafkaSources.get
eventarc. kafkaSources. getIamPolicy
eventarc.kafkaSources.list
eventarc. kafkaSources. setIamPolicy
eventarc.locations.get
eventarc.locations.list
eventarc.messageBuses.create
eventarc.messageBuses.delete
eventarc.messageBuses.get
eventarc. messageBuses. getIamPolicy
eventarc.messageBuses.list
eventarc.messageBuses.publish
eventarc. messageBuses. setIamPolicy
eventarc.messageBuses.update
eventarc.messageBuses.use
eventarc. multiProjectSources. collectGoogleApiEvents
eventarc.operations.cancel
eventarc.operations.delete
eventarc.operations.get
eventarc.operations.list
eventarc.pipelines.create
eventarc.pipelines.delete
eventarc.pipelines.get
eventarc. pipelines. getIamPolicy
eventarc.pipelines.list
eventarc. pipelines. setIamPolicy
eventarc.pipelines.update
eventarc.providers.get
eventarc.providers.list
eventarc.triggers.create
eventarc.triggers.delete
eventarc.triggers.get
eventarc.triggers.getIamPolicy
eventarc.triggers.list
eventarc.triggers.setIamPolicy
eventarc.triggers.undelete
eventarc.triggers.update
recommender. cloudFunctionsPerformanceInsights.*
recommender. cloudFunctionsPerformanceInsights. get
recommender. cloudFunctionsPerformanceInsights. list
recommender. cloudFunctionsPerformanceInsights. update
recommender. cloudFunctionsPerformanceRecommendations.*
recommender. cloudFunctionsPerformanceRecommendations. get
recommender. cloudFunctionsPerformanceRecommendations. list
recommender. cloudFunctionsPerformanceRecommendations. update
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
resourcemanager. projects. getIamPolicy
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
Cloudfunctions Editor
( roles/ cloudfunctions.editor )
Editor role for cloudfunctions
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
artifactregistry.rules.get
artifactregistry.rules.list
artifactregistry.tags.get
artifactregistry.tags.list
artifactregistry.versions.get
artifactregistry.versions.list
cloudasset. assets. searchAllResources
cloudbuild.builds.get
cloudbuild.builds.list
cloudbuild.locations.*
cloudbuild.locations.get
cloudbuild.locations.list
cloudbuild.operations.*
cloudbuild.operations.get
cloudbuild.operations.list
cloudfunctions.functions.call
cloudfunctions. functions. create
cloudfunctions. functions. delete
cloudfunctions. functions. generationUpgrade
cloudfunctions.functions.get
cloudfunctions. functions. getIamPolicy
cloudfunctions. functions. invoke
cloudfunctions.functions.list
cloudfunctions. functions. sourceCodeGet
cloudfunctions. functions. sourceCodeSet
cloudfunctions. functions. update
cloudfunctions.locations.list
cloudfunctions.operations.*
cloudfunctions.operations.get
cloudfunctions.operations.list
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
eventarc.messageBuses.get
eventarc. messageBuses. getIamPolicy
eventarc.messageBuses.list
eventarc.messageBuses.use
eventarc. multiProjectSources. collectGoogleApiEvents
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
recommender. cloudFunctionsPerformanceInsights.*
recommender. cloudFunctionsPerformanceInsights. get
recommender. cloudFunctionsPerformanceInsights. list
recommender. cloudFunctionsPerformanceInsights. update
recommender. cloudFunctionsPerformanceRecommendations.*
recommender. cloudFunctionsPerformanceRecommendations. get
recommender. cloudFunctionsPerformanceRecommendations. list
recommender. cloudFunctionsPerformanceRecommendations. update
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
serviceusage.values.test
Cloud Functions Viewer
( roles/ cloudfunctions.viewer )
Read-only access to functions and locations.
cloudasset. assets. searchAllResources
cloudbuild.builds.get
cloudbuild.builds.list
cloudbuild.locations.*
cloudbuild.locations.get
cloudbuild.locations.list
cloudbuild.operations.*
cloudbuild.operations.get
cloudbuild.operations.list
cloudfunctions.functions.get
cloudfunctions. functions. getIamPolicy
cloudfunctions.functions.list
cloudfunctions.locations.list
cloudfunctions.operations.*
cloudfunctions.operations.get
cloudfunctions.operations.list
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
recommender. cloudFunctionsPerformanceInsights. get
recommender. cloudFunctionsPerformanceInsights. list
recommender. cloudFunctionsPerformanceRecommendations. get
recommender. cloudFunctionsPerformanceRecommendations. list
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
Cloud Functions Developer
( roles/ cloudfunctions.developer )
Read and write access to all functions-related resources.
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
artifactregistry.rules.get
artifactregistry.rules.list
artifactregistry.tags.get
artifactregistry.tags.list
artifactregistry.versions.get
artifactregistry.versions.list
cloudasset. assets. searchAllResources
cloudbuild.builds.get
cloudbuild.builds.list
cloudbuild.locations.*
cloudbuild.locations.get
cloudbuild.locations.list
cloudbuild.operations.*
cloudbuild.operations.get
cloudbuild.operations.list
cloudfunctions.functions.call
cloudfunctions. functions. create
cloudfunctions. functions. delete
cloudfunctions. functions. generationUpgrade
cloudfunctions.functions.get
cloudfunctions. functions. invoke
cloudfunctions.functions.list
cloudfunctions. functions. sourceCodeGet
cloudfunctions. functions. sourceCodeSet
cloudfunctions. functions. update
cloudfunctions.locations.list
cloudfunctions.operations.*
cloudfunctions.operations.get
cloudfunctions.operations.list
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
recommender. cloudFunctionsPerformanceInsights.*
recommender. cloudFunctionsPerformanceInsights. get
recommender. cloudFunctionsPerformanceInsights. list
recommender. cloudFunctionsPerformanceInsights. update
recommender. cloudFunctionsPerformanceRecommendations.*
recommender. cloudFunctionsPerformanceRecommendations. get
recommender. cloudFunctionsPerformanceRecommendations. list
recommender. cloudFunctionsPerformanceRecommendations. update
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
serviceusage.values.test
Cloud Functions Invoker
( roles/ cloudfunctions.invoker )
Ability to invoke 1st gen HTTP functions with restricted access. 2nd gen functions need the Cloud Run Invoker role instead.
cloudfunctions. functions. invoke
Service agent roles
Service agent roles should only be granted to service agents .
Role
Permissions
Cloud Functions Service Agent
( roles/ cloudfunctions.serviceAgent )
Gives Cloud Functions service account access to managed resources.
Warning: Do not grant service agent roles to any principals except
service agents .
artifactregistry. aptartifacts. create
artifactregistry.attachments.*
artifactregistry. attachments. create
artifactregistry. attachments. delete
artifactregistry. attachments. get
artifactregistry. attachments. list
artifactregistry. dockerimages.*
artifactregistry. dockerimages. get
artifactregistry. dockerimages. list
artifactregistry.files.*
artifactregistry.files.delete
artifactregistry. files. download
artifactregistry.files.get
artifactregistry.files.list
artifactregistry.files.update
artifactregistry.files.upload
artifactregistry. kfpartifacts. create
artifactregistry.locations.*
artifactregistry.locations.get
artifactregistry. locations. list
artifactregistry. mavenartifacts.*
artifactregistry. mavenartifacts. get
artifactregistry. mavenartifacts. list
artifactregistry.npmpackages.*
artifactregistry. npmpackages. get
artifactregistry. npmpackages. list
artifactregistry.packages.*
artifactregistry. packages. delete
artifactregistry.packages.get
artifactregistry.packages.list
artifactregistry. packages. update
artifactregistry. projectsettings.*
artifactregistry. projectsettings. get
artifactregistry. projectsettings. update
artifactregistry. pythonpackages.*
artifactregistry. pythonpackages. get
artifactregistry. pythonpackages. list
artifactregistry. repositories. create
artifactregistry. repositories. createTagBinding
artifactregistry. repositories. delete
artifactregistry. repositories. deleteArtifacts
artifactregistry. repositories. deleteTagBinding
artifactregistry. repositories. downloadArtifacts
artifactregistry. repositories. exportArtifacts
artifactregistry. repositories. get
artifactregistry. repositories. getIamPolicy
artifactregistry. repositories. list
artifactregistry. repositories. listEffectiveTags
artifactregistry. repositories. listTagBindings
artifactregistry. repositories. readViaVirtualRepository
artifactregistry. repositories. setIamPolicy
artifactregistry. repositories. update
artifactregistry. repositories. uploadArtifacts
artifactregistry.rules.*
artifactregistry.rules.create
artifactregistry.rules.delete
artifactregistry.rules.get
artifactregistry.rules.list
artifactregistry.rules.update
artifactregistry.tags.*
artifactregistry.tags.create
artifactregistry.tags.delete
artifactregistry.tags.get
artifactregistry.tags.list
artifactregistry.tags.update
artifactregistry.versions.*
artifactregistry. versions. delete
artifactregistry.versions.get
artifactregistry.versions.list
artifactregistry. versions. update
artifactregistry. yumartifacts. create
clientauthconfig.clients.list
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
cloudbuild.workerpools.use
cloudfunctions.functions.get
cloudfunctions. functions. invoke
cloudfunctions.functions.list
cloudfunctions.operations.*
cloudfunctions.operations.get
cloudfunctions.operations.list
compute.globalOperations.get
compute.networks.access
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
firebasedatabase.instances.get
firebasedatabase. instances. update
iam.serviceAccounts.actAs
iam. serviceAccounts. getAccessToken
iam. serviceAccounts. getOpenIdToken
iam.serviceAccounts.signBlob
pubsub.subscriptions.consume
pubsub.subscriptions.create
pubsub.subscriptions.delete
pubsub.subscriptions.get
pubsub. subscriptions. getIamPolicy
pubsub.subscriptions.list
pubsub. subscriptions. listEffectiveTags
pubsub. subscriptions. listTagBindings
pubsub. subscriptions. setIamPolicy
pubsub.subscriptions.update
pubsub. topics. attachSubscription
pubsub.topics.create
pubsub.topics.get
pubsub.topics.list
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
resourcemanager. projects. getIamPolicy
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
serviceusage.consumerpolicy.*
serviceusage. consumerpolicy. analyze
serviceusage. consumerpolicy. get
serviceusage. consumerpolicy. update
serviceusage. effectivepolicy. get
serviceusage.groups.*
serviceusage.groups.list
serviceusage. groups. listExpandedMembers
serviceusage. groups. listMembers
serviceusage.quotas.get
serviceusage.services.disable
serviceusage.services.enable
serviceusage.services.get
serviceusage.services.use
serviceusage.values.test
source.repos.get
source.repos.list
storage.buckets.create
storage.buckets.delete
storage.buckets.get
storage.buckets.update
storage.objects.create
storage.objects.delete
storage.objects.get
storage.objects.list
vpcaccess.connectors.get
vpcaccess.connectors.use
Custom roles
For developers that want to define their own roles containing bundles of
permissions that they specify, IAM offers
custom roles .
If the role contains permissions that let a developer deploy functions, then you
must perform the additional configuration in the
next section.
Additional configuration for deployment
You use Identity and Access Management to authorize identities to perform
administrative actions on functions created using the
Cloud Functions v2 API —for example, using
gcloud functions , the REST API, or Terraform. Administration actions include
creating, updating, and deleting functions. For more information, see
Authorize access with IAM .
To deploy Cloud Run functions that were created with the
Cloud Functions v1 API or v2 API, ask your administrator to grant you the
following IAM roles:
Cloud Functions
Admin role
( roles/cloudfunctions.admin ), Cloud Functions
Developer role
( roles/cloudfunctions.developer ), or a custom role
that has the required permissions
for deploying functions on the project.
Service Account User role
( roles/iam.serviceAccountUser ) on the
runtime service account
and the Cloud Build service account .
Note: If the user has the Service Account User permission on the project itself,
that automatically grants the Service Account User permission to the runtime
service account also. Caution: Assigning the
Service Account User IAM role
indirectly grants the role associated with the runtime service account to the
user. For example: a user has the Cloud Functions Developer role, and the user
is also assigned the IAM role of Service Account User on a runtime service
account. If the runtime service account has the Editor role, the user can then
"act as" an Editor. We recommend
configuring the runtime service account for least privilege
to minimize the impact of these role assignments.
Console
Go to the Google Cloud console:
Go to Google Cloud console
Select a project to display the runtime service accounts associated with it.
Select a runtime service account from the Email column in the
table:
For Cloud Run functions (1st gen), the default runtime service account is
PROJECT_ID@appspot.gserviceaccount.com .
For Cloud Run functions, the default runtime service account is
PROJECT_NUMBER-compute@developer.gserviceaccount.com .
Display the Principals with access tab.
Click Grant Access .
Enter the member (for example, user or group email) that you're granting
the Admin or Developer role to.
Under Assign Roles > Role , choose Service Accounts > Service
Account User .
Click Save .
gcloud
Cloud Run functions (1st gen):
gcloud iam service-accounts add-iam-policy-binding \
PROJECT_ID @appspot.gserviceaccount.com \
--member MEMBER \
--role roles/iam.serviceAccountUser
Cloud Run functions:
gcloud iam service-accounts add-iam-policy-binding \
PROJECT_NUMBER -compute@developer.gserviceaccount.com \
--member MEMBER \
--role roles/iam.serviceAccountUser
Ask your administrator to also grant the Cloud Build service account the
Cloud Build Service Account
( roles/cloudbuild.builds.builder )
role on the project.
Note: The default Cloud Build service account may have changed starting in
May 2024. Review Cloud Build service account change
to confirm the default service account for your project before proceeding.
Optional permissions
The following optional permissions can be considered when configuring accounts
with a minimal permission set:
monitoring.timeSeries.list on the project level. Typically assigned
through the roles/monitoring.viewer role. It allows user to access
metrics generated by their function. For more information, go to the
Stackdriver documentation for
Access Control .
logging.logEntries.list on the project level. Typically assigned through
the roles/logging.viewer role. It allows user to access logs generated
by their function. For more information, go to the
Access Control guide
in the Stackdriver Logging documentation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
