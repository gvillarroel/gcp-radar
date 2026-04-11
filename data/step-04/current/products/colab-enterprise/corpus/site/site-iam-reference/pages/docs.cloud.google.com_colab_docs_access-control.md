---
title: "Access control with IAM \_|\_ Colab Enterprise \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/colab/docs/access-control
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/colab/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/colab/docs/access-control
  title: "Access control with IAM \_|\_ Colab Enterprise \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Colab Enterprise
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Access control with IAM
This page describes how to use Identity and Access Management (IAM)
to manage access to Colab Enterprise resources. To manage access for
other Vertex AI resources, see Vertex AI
access control with IAM .
Control access to notebooks with IAM
You can manage access to Colab Enterprise notebooks (IPYNB files) at the
project level or per notebook.
To grant access to notebooks at the project level, assign one or more
roles to a principal (user, group, or
service account ).
To grant access to a specific notebook, assign one or more roles to a
principal on the notebook. To learn more, see
Manage access to a notebook .
Running code that interacts with other Google Cloud services
Granting access to a notebook is limited to the specific permissions
related to interacting with the notebook. For example, you can grant the
ability to create a notebook, write code in it, or delete the notebook.
To run code that interacts with other Google Cloud services, you must
use one of the following methods:
Run code in a runtime with end-user credentials enabled. This means
your notebook has the same access to Google Cloud services
as your notebook user.
Run code that authenticates and authorizes your notebook to interact with
Google Cloud services.
To learn more, see Run code that interacts with
Google Cloud .
Types of IAM roles
There are different types of IAM roles that can be used in
Colab Enterprise:
Predefined roles let you grant a set of related
permissions to your Colab Enterprise resources at the project level.
Basic roles (Owner,
Editor, and Viewer) provide access control to your Colab Enterprise
resources at the project level, and are common to all Google Cloud
services.
Custom roles enable you to choose a
specific set of permissions, create your own role with those permissions,
and grant the role to users in your organization.
To add, update, or remove these roles in your Colab Enterprise project,
see the documentation on managing access to projects, folders, and
organizations .
Predefined roles for Colab Enterprise
Colab Enterprise is a part of Vertex AI, and
Colab Enterprise resources are managed through the Vertex AI API.
Therefore, you can grant principals access to Colab Enterprise resources
through Vertex AI roles.
The following table includes all Vertex AI predefined roles.
To use predefined roles for common Colab Enterprise operations, see
Colab Enterprise Admin
( roles/aiplatform.colabEnterpriseAdmin ) and
Colab Enterprise User
( roles/aiplatform.colabEnterpriseUser ).
For roles related to runtime management, see
Notebook Runtime Admin
( roles/aiplatform.notebookRuntimeAdmin ) and
Notebook Runtime User
( roles/aiplatform.notebookRuntimeUser ).
Vertex AI Administrator ( roles/aiplatform.admin ),
Vertex AI User ( roles/aiplatform.user ), and
Vertex AI Viewer ( roles/aiplatform.viewer ) also
include Colab Enterprise permissions.
Role
Permissions
Vertex AI Administrator
( roles/ aiplatform.admin )
Grants full access to all resources in Vertex AI
aiplatform.*
aiplatform. agentExamples. create
aiplatform. agentExamples. delete
aiplatform.agentExamples.get
aiplatform.agentExamples.list
aiplatform. agentExamples. update
aiplatform.agents.create
aiplatform.agents.delete
aiplatform.agents.get
aiplatform.agents.list
aiplatform.agents.update
aiplatform. annotationSpecs. create
aiplatform. annotationSpecs. delete
aiplatform.annotationSpecs.get
aiplatform. annotationSpecs. list
aiplatform. annotationSpecs. update
aiplatform.annotations.create
aiplatform.annotations.delete
aiplatform.annotations.get
aiplatform.annotations.list
aiplatform.annotations.update
aiplatform.apps.create
aiplatform.apps.delete
aiplatform.apps.get
aiplatform.apps.list
aiplatform.apps.update
aiplatform.artifacts.create
aiplatform.artifacts.delete
aiplatform.artifacts.get
aiplatform.artifacts.list
aiplatform.artifacts.update
aiplatform. batchPredictionJobs. cancel
aiplatform. batchPredictionJobs. create
aiplatform. batchPredictionJobs. delete
aiplatform. batchPredictionJobs. get
aiplatform. batchPredictionJobs. list
aiplatform.cacheConfigs.get
aiplatform.cacheConfigs.update
aiplatform. cachedContents. create
aiplatform. cachedContents. delete
aiplatform.cachedContents.get
aiplatform.cachedContents.list
aiplatform. cachedContents. update
aiplatform.consents.get
aiplatform.consents.update
aiplatform. contexts. addContextArtifactsAndExecutions
aiplatform. contexts. addContextChildren
aiplatform.contexts.create
aiplatform.contexts.delete
aiplatform.contexts.get
aiplatform.contexts.list
aiplatform. contexts. queryContextLineageSubgraph
aiplatform.contexts.update
aiplatform.customJobs.cancel
aiplatform.customJobs.create
aiplatform.customJobs.delete
aiplatform.customJobs.get
aiplatform.customJobs.list
aiplatform.dataItems.create
aiplatform.dataItems.delete
aiplatform.dataItems.get
aiplatform.dataItems.list
aiplatform.dataItems.update
aiplatform. dataLabelingJobs. cancel
aiplatform. dataLabelingJobs. create
aiplatform. dataLabelingJobs. delete
aiplatform. dataLabelingJobs. get
aiplatform. dataLabelingJobs. list
aiplatform. datasetVersions. create
aiplatform. datasetVersions. delete
aiplatform.datasetVersions.get
aiplatform. datasetVersions. list
aiplatform. datasetVersions. restore
aiplatform.datasets.create
aiplatform.datasets.delete
aiplatform.datasets.export
aiplatform.datasets.get
aiplatform.datasets.import
aiplatform.datasets.list
aiplatform.datasets.update
aiplatform. deploymentResourcePools. create
aiplatform. deploymentResourcePools. delete
aiplatform. deploymentResourcePools. get
aiplatform. deploymentResourcePools. list
aiplatform. deploymentResourcePools. queryDeployedModels
aiplatform. deploymentResourcePools. update
aiplatform. edgeDeploymentJobs. create
aiplatform. edgeDeploymentJobs. delete
aiplatform. edgeDeploymentJobs. get
aiplatform. edgeDeploymentJobs. list
aiplatform. edgeDeviceDebugInfo. get
aiplatform.edgeDevices.create
aiplatform.edgeDevices.delete
aiplatform.edgeDevices.get
aiplatform.edgeDevices.list
aiplatform.edgeDevices.update
aiplatform.endpoints.create
aiplatform.endpoints.delete
aiplatform.endpoints.deploy
aiplatform.endpoints.explain
aiplatform.endpoints.get
aiplatform. endpoints. getIamPolicy
aiplatform.endpoints.list
aiplatform.endpoints.predict
aiplatform. endpoints. setIamPolicy
aiplatform.endpoints.undeploy
aiplatform.endpoints.update
aiplatform.entityTypes.create
aiplatform.entityTypes.delete
aiplatform. entityTypes. deleteFeatureValues
aiplatform. entityTypes. exportFeatureValues
aiplatform.entityTypes.get
aiplatform. entityTypes. getIamPolicy
aiplatform. entityTypes. importFeatureValues
aiplatform.entityTypes.list
aiplatform. entityTypes. readFeatureValues
aiplatform. entityTypes. setIamPolicy
aiplatform. entityTypes. streamingReadFeatureValues
aiplatform.entityTypes.update
aiplatform. entityTypes. writeFeatureValues
aiplatform. evaluationExperiments. create
aiplatform. evaluationExperiments. delete
aiplatform. evaluationExperiments. get
aiplatform. evaluationExperiments. list
aiplatform. evaluationExperiments. update
aiplatform. evaluationItems. create
aiplatform. evaluationItems. delete
aiplatform.evaluationItems.get
aiplatform. evaluationItems. list
aiplatform. evaluationItems. update
aiplatform. evaluationRuns. cancel
aiplatform. evaluationRuns. create
aiplatform. evaluationRuns. delete
aiplatform. evaluationRuns. execute
aiplatform.evaluationRuns.get
aiplatform.evaluationRuns.list
aiplatform. evaluationRuns. update
aiplatform. evaluationSets. create
aiplatform. evaluationSets. delete
aiplatform.evaluationSets.get
aiplatform.evaluationSets.list
aiplatform. evaluationSets. update
aiplatform. exampleStores. create
aiplatform. exampleStores. delete
aiplatform.exampleStores.get
aiplatform.exampleStores.list
aiplatform. exampleStores. readExample
aiplatform. exampleStores. update
aiplatform. exampleStores. writeExample
aiplatform. executions. addExecutionEvents
aiplatform.executions.create
aiplatform.executions.delete
aiplatform.executions.get
aiplatform.executions.list
aiplatform. executions. queryExecutionInputsAndOutputs
aiplatform.executions.update
aiplatform.extensions.delete
aiplatform.extensions.execute
aiplatform.extensions.get
aiplatform.extensions.import
aiplatform.extensions.list
aiplatform.extensions.update
aiplatform. featureGroups. create
aiplatform. featureGroups. delete
aiplatform.featureGroups.get
aiplatform. featureGroups. getIamPolicy
aiplatform.featureGroups.list
aiplatform. featureGroups. setIamPolicy
aiplatform. featureGroups. update
aiplatform. featureMonitorJobs. create
aiplatform. featureMonitorJobs. get
aiplatform. featureMonitorJobs. list
aiplatform. featureMonitors. create
aiplatform. featureMonitors. delete
aiplatform.featureMonitors.get
aiplatform. featureMonitors. list
aiplatform. featureMonitors. update
aiplatform. featureOnlineStores. create
aiplatform. featureOnlineStores. delete
aiplatform. featureOnlineStores. get
aiplatform. featureOnlineStores. getIamPolicy
aiplatform. featureOnlineStores. list
aiplatform. featureOnlineStores. setIamPolicy
aiplatform. featureOnlineStores. update
aiplatform. featureViewSyncs. get
aiplatform. featureViewSyncs. list
aiplatform.featureViews.create
aiplatform.featureViews.delete
aiplatform. featureViews. directWrite
aiplatform. featureViews. fetchFeatureValues
aiplatform.featureViews.get
aiplatform. featureViews. getIamPolicy
aiplatform.featureViews.list
aiplatform. featureViews. searchNearestEntities
aiplatform. featureViews. setIamPolicy
aiplatform.featureViews.sync
aiplatform.featureViews.update
aiplatform.features.create
aiplatform.features.delete
aiplatform.features.get
aiplatform.features.list
aiplatform.features.update
aiplatform. featurestores. batchReadFeatureValues
aiplatform. featurestores. create
aiplatform. featurestores. delete
aiplatform. featurestores. exportFeatures
aiplatform.featurestores.get
aiplatform. featurestores. getIamPolicy
aiplatform. featurestores. importFeatures
aiplatform.featurestores.list
aiplatform. featurestores. readFeatures
aiplatform. featurestores. setIamPolicy
aiplatform. featurestores. update
aiplatform. featurestores. writeFeatures
aiplatform. humanInTheLoops. cancel
aiplatform. humanInTheLoops. create
aiplatform. humanInTheLoops. delete
aiplatform.humanInTheLoops.get
aiplatform. humanInTheLoops. list
aiplatform. humanInTheLoops. queryAnnotationStats
aiplatform. humanInTheLoops. send
aiplatform. humanInTheLoops. update
aiplatform. hyperparameterTuningJobs. cancel
aiplatform. hyperparameterTuningJobs. create
aiplatform. hyperparameterTuningJobs. delete
aiplatform. hyperparameterTuningJobs. get
aiplatform. hyperparameterTuningJobs. list
aiplatform. indexEndpoints. create
aiplatform. indexEndpoints. delete
aiplatform. indexEndpoints. deploy
aiplatform.indexEndpoints.get
aiplatform.indexEndpoints.list
aiplatform. indexEndpoints. queryVectors
aiplatform. indexEndpoints. undeploy
aiplatform. indexEndpoints. update
aiplatform.indexes.create
aiplatform.indexes.delete
aiplatform.indexes.get
aiplatform.indexes.list
aiplatform.indexes.update
aiplatform. locations. evaluateInstances
aiplatform.locations.get
aiplatform.locations.list
aiplatform.memories.create
aiplatform.memories.delete
aiplatform.memories.generate
aiplatform.memories.get
aiplatform.memories.list
aiplatform.memories.retrieve
aiplatform.memories.update
aiplatform.memoryRevisions.get
aiplatform. memoryRevisions. list
aiplatform. memoryRevisions. rollback
aiplatform. metadataSchemas. create
aiplatform. metadataSchemas. delete
aiplatform.metadataSchemas.get
aiplatform. metadataSchemas. list
aiplatform. metadataStores. create
aiplatform. metadataStores. delete
aiplatform.metadataStores.get
aiplatform.metadataStores.list
aiplatform. migratableResources. migrate
aiplatform. migratableResources. search
aiplatform. modelDeploymentMonitoringJobs. create
aiplatform. modelDeploymentMonitoringJobs. delete
aiplatform. modelDeploymentMonitoringJobs. get
aiplatform. modelDeploymentMonitoringJobs. list
aiplatform. modelDeploymentMonitoringJobs. pause
aiplatform. modelDeploymentMonitoringJobs. resume
aiplatform. modelDeploymentMonitoringJobs. searchStatsAnomalies
aiplatform. modelDeploymentMonitoringJobs. update
aiplatform. modelEvaluationSlices. get
aiplatform. modelEvaluationSlices. import
aiplatform. modelEvaluationSlices. list
aiplatform. modelEvaluations. exportEvaluatedDataItems
aiplatform. modelEvaluations. get
aiplatform. modelEvaluations. import
aiplatform. modelEvaluations. list
aiplatform. modelMonitoringJobs. create
aiplatform. modelMonitoringJobs. delete
aiplatform. modelMonitoringJobs. get
aiplatform. modelMonitoringJobs. list
aiplatform. modelMonitors. create
aiplatform. modelMonitors. delete
aiplatform.modelMonitors.get
aiplatform.modelMonitors.list
aiplatform. modelMonitors. searchModelMonitoringAlerts
aiplatform. modelMonitors. searchModelMonitoringStats
aiplatform. modelMonitors. update
aiplatform.models.delete
aiplatform.models.export
aiplatform.models.get
aiplatform.models.list
aiplatform.models.update
aiplatform.models.upload
aiplatform.nasJobs.cancel
aiplatform.nasJobs.create
aiplatform.nasJobs.delete
aiplatform.nasJobs.get
aiplatform.nasJobs.list
aiplatform.nasTrialDetails.get
aiplatform. nasTrialDetails. list
aiplatform. notebookExecutionJobs. create
aiplatform. notebookExecutionJobs. delete
aiplatform. notebookExecutionJobs. get
aiplatform. notebookExecutionJobs. list
aiplatform. notebookRuntimeTemplates. apply
aiplatform. notebookRuntimeTemplates. create
aiplatform. notebookRuntimeTemplates. delete
aiplatform. notebookRuntimeTemplates. get
aiplatform. notebookRuntimeTemplates. getIamPolicy
aiplatform. notebookRuntimeTemplates. list
aiplatform. notebookRuntimeTemplates. setIamPolicy
aiplatform. notebookRuntimeTemplates. update
aiplatform. notebookRuntimes. assign
aiplatform. notebookRuntimes. delete
aiplatform. notebookRuntimes. get
aiplatform. notebookRuntimes. list
aiplatform. notebookRuntimes. start
aiplatform. notebookRuntimes. update
aiplatform. notebookRuntimes. upgrade
aiplatform.operations.list
aiplatform. persistentResources. create
aiplatform. persistentResources. delete
aiplatform. persistentResources. get
aiplatform. persistentResources. list
aiplatform.pipelineJobs.cancel
aiplatform.pipelineJobs.create
aiplatform.pipelineJobs.delete
aiplatform.pipelineJobs.get
aiplatform.pipelineJobs.list
aiplatform. provisionedThroughputRevisions. get
aiplatform. provisionedThroughputRevisions. list
aiplatform. provisionedThroughputs. cancel
aiplatform. provisionedThroughputs. create
aiplatform. provisionedThroughputs. get
aiplatform. provisionedThroughputs. list
aiplatform. provisionedThroughputs. split
aiplatform. provisionedThroughputs. update
aiplatform.ragCorpora.create
aiplatform.ragCorpora.delete
aiplatform.ragCorpora.get
aiplatform.ragCorpora.list
aiplatform.ragCorpora.query
aiplatform.ragCorpora.update
aiplatform. ragEngineConfigs. get
aiplatform. ragEngineConfigs. update
aiplatform.ragFiles.delete
aiplatform.ragFiles.get
aiplatform.ragFiles.import
aiplatform.ragFiles.list
aiplatform.ragFiles.upload
aiplatform. reasoningEngines. create
aiplatform. reasoningEngines. delete
aiplatform. reasoningEngines. get
aiplatform. reasoningEngines. list
aiplatform. reasoningEngines. query
aiplatform. reasoningEngines. update
aiplatform. sandboxEnvironments. create
aiplatform. sandboxEnvironments. delete
aiplatform. sandboxEnvironments. execute
aiplatform. sandboxEnvironments. get
aiplatform. sandboxEnvironments. list
aiplatform.schedules.create
aiplatform.schedules.delete
aiplatform.schedules.get
aiplatform.schedules.list
aiplatform.schedules.update
aiplatform. semanticGovernancePolicies. create
aiplatform. semanticGovernancePolicies. delete
aiplatform. semanticGovernancePolicies. get
aiplatform. semanticGovernancePolicies. list
aiplatform. semanticGovernancePolicies. update
aiplatform. semanticGovernancePolicyEngine. get
aiplatform. semanticGovernancePolicyEngine. update
aiplatform. sessionEvents. append
aiplatform.sessionEvents.list
aiplatform.sessions.create
aiplatform.sessions.delete
aiplatform.sessions.get
aiplatform.sessions.list
aiplatform.sessions.run
aiplatform.sessions.update
aiplatform. specialistPools. create
aiplatform. specialistPools. delete
aiplatform.specialistPools.get
aiplatform. specialistPools. list
aiplatform. specialistPools. update
aiplatform.studies.create
aiplatform.studies.delete
aiplatform.studies.get
aiplatform.studies.list
aiplatform.studies.update
aiplatform. tensorboardExperiments. create
aiplatform. tensorboardExperiments. delete
aiplatform. tensorboardExperiments. get
aiplatform. tensorboardExperiments. list
aiplatform. tensorboardExperiments. update
aiplatform. tensorboardExperiments. write
aiplatform. tensorboardRuns. batchCreate
aiplatform. tensorboardRuns. create
aiplatform. tensorboardRuns. delete
aiplatform.tensorboardRuns.get
aiplatform. tensorboardRuns. list
aiplatform. tensorboardRuns. update
aiplatform. tensorboardRuns. write
aiplatform. tensorboardTimeSeries. batchCreate
aiplatform. tensorboardTimeSeries. batchRead
aiplatform. tensorboardTimeSeries. create
aiplatform. tensorboardTimeSeries. delete
aiplatform. tensorboardTimeSeries. get
aiplatform. tensorboardTimeSeries. list
aiplatform. tensorboardTimeSeries. read
aiplatform. tensorboardTimeSeries. update
aiplatform.tensorboards.create
aiplatform.tensorboards.delete
aiplatform.tensorboards.get
aiplatform.tensorboards.list
aiplatform. tensorboards. recordAccess
aiplatform.tensorboards.update
aiplatform. trainingPipelines. cancel
aiplatform. trainingPipelines. create
aiplatform. trainingPipelines. delete
aiplatform. trainingPipelines. get
aiplatform. trainingPipelines. list
aiplatform.trials.create
aiplatform.trials.delete
aiplatform.trials.get
aiplatform.trials.list
aiplatform.trials.update
aiplatform.tuningJobs.cancel
aiplatform.tuningJobs.create
aiplatform.tuningJobs.delete
aiplatform.tuningJobs.get
aiplatform.tuningJobs.list
aiplatform. tuningJobs. optimizePrompt
aiplatform. tuningJobs. validateReinforcementTuningReward
aiplatform. tuningJobs. vertexTune
resourcemanager.projects.get
resourcemanager.projects.list
Vertex AI Viewer
( roles/ aiplatform.viewer )
Grants access to view all resource in Vertex AI
aiplatform.agentExamples.get
aiplatform.agentExamples.list
aiplatform.agents.get
aiplatform.agents.list
aiplatform.annotationSpecs.get
aiplatform. annotationSpecs. list
aiplatform.annotations.get
aiplatform.annotations.list
aiplatform.apps.get
aiplatform.apps.list
aiplatform.artifacts.get
aiplatform.artifacts.list
aiplatform. batchPredictionJobs. get
aiplatform. batchPredictionJobs. list
aiplatform.cacheConfigs.get
aiplatform.cachedContents.get
aiplatform.cachedContents.list
aiplatform.consents.get
aiplatform.contexts.get
aiplatform.contexts.list
aiplatform. contexts. queryContextLineageSubgraph
aiplatform.customJobs.get
aiplatform.customJobs.list
aiplatform.dataItems.get
aiplatform.dataItems.list
aiplatform. dataLabelingJobs. get
aiplatform. dataLabelingJobs. list
aiplatform.datasetVersions.get
aiplatform. datasetVersions. list
aiplatform.datasets.get
aiplatform.datasets.list
aiplatform. deploymentResourcePools. get
aiplatform. deploymentResourcePools. list
aiplatform. deploymentResourcePools. queryDeployedModels
aiplatform. edgeDeploymentJobs. get
aiplatform. edgeDeploymentJobs. list
aiplatform. edgeDeviceDebugInfo. get
aiplatform.edgeDevices.get
aiplatform.edgeDevices.list
aiplatform.endpoints.get
aiplatform.endpoints.list
aiplatform.entityTypes.get
aiplatform.entityTypes.list
aiplatform. evaluationExperiments. get
aiplatform. evaluationExperiments. list
aiplatform.evaluationItems.get
aiplatform. evaluationItems. list
aiplatform.evaluationRuns.get
aiplatform.evaluationRuns.list
aiplatform.evaluationSets.get
aiplatform.evaluationSets.list
aiplatform.exampleStores.get
aiplatform.exampleStores.list
aiplatform. exampleStores. readExample
aiplatform.executions.get
aiplatform.executions.list
aiplatform. executions. queryExecutionInputsAndOutputs
aiplatform.extensions.get
aiplatform.extensions.list
aiplatform.featureGroups.get
aiplatform.featureGroups.list
aiplatform. featureMonitorJobs. get
aiplatform. featureMonitorJobs. list
aiplatform.featureMonitors.get
aiplatform. featureMonitors. list
aiplatform. featureOnlineStores. get
aiplatform. featureOnlineStores. list
aiplatform.featureViewSyncs.*
aiplatform. featureViewSyncs. get
aiplatform. featureViewSyncs. list
aiplatform. featureViews. fetchFeatureValues
aiplatform.featureViews.get
aiplatform.featureViews.list
aiplatform. featureViews. searchNearestEntities
aiplatform.features.get
aiplatform.features.list
aiplatform.featurestores.get
aiplatform.featurestores.list
aiplatform.humanInTheLoops.get
aiplatform. humanInTheLoops. list
aiplatform. hyperparameterTuningJobs. get
aiplatform. hyperparameterTuningJobs. list
aiplatform.indexEndpoints.get
aiplatform.indexEndpoints.list
aiplatform. indexEndpoints. queryVectors
aiplatform.indexes.get
aiplatform.indexes.list
aiplatform.locations.get
aiplatform.locations.list
aiplatform.memories.get
aiplatform.memories.list
aiplatform.memoryRevisions.get
aiplatform. memoryRevisions. list
aiplatform.metadataSchemas.get
aiplatform. metadataSchemas. list
aiplatform.metadataStores.get
aiplatform.metadataStores.list
aiplatform. modelDeploymentMonitoringJobs. get
aiplatform. modelDeploymentMonitoringJobs. list
aiplatform. modelDeploymentMonitoringJobs. searchStatsAnomalies
aiplatform. modelEvaluationSlices. get
aiplatform. modelEvaluationSlices. list
aiplatform. modelEvaluations. get
aiplatform. modelEvaluations. list
aiplatform. modelMonitoringJobs. get
aiplatform. modelMonitoringJobs. list
aiplatform.modelMonitors.get
aiplatform.modelMonitors.list
aiplatform. modelMonitors. searchModelMonitoringAlerts
aiplatform. modelMonitors. searchModelMonitoringStats
aiplatform.models.get
aiplatform.models.list
aiplatform.nasJobs.get
aiplatform.nasJobs.list
aiplatform.nasTrialDetails.*
aiplatform.nasTrialDetails.get
aiplatform. nasTrialDetails. list
aiplatform. notebookExecutionJobs. get
aiplatform. notebookExecutionJobs. list
aiplatform. notebookRuntimeTemplates. get
aiplatform. notebookRuntimeTemplates. list
aiplatform. notebookRuntimes. get
aiplatform. notebookRuntimes. list
aiplatform.operations.list
aiplatform. persistentResources. get
aiplatform. persistentResources. list
aiplatform.pipelineJobs.get
aiplatform.pipelineJobs.list
aiplatform. provisionedThroughputRevisions.*
aiplatform. provisionedThroughputRevisions. get
aiplatform. provisionedThroughputRevisions. list
aiplatform. provisionedThroughputs. get
aiplatform. provisionedThroughputs. list
aiplatform.ragCorpora.get
aiplatform.ragCorpora.list
aiplatform.ragCorpora.query
aiplatform. ragEngineConfigs. get
aiplatform.ragFiles.get
aiplatform.ragFiles.list
aiplatform. reasoningEngines. get
aiplatform. reasoningEngines. list
aiplatform. reasoningEngines. query
aiplatform. sandboxEnvironments. get
aiplatform. sandboxEnvironments. list
aiplatform.schedules.get
aiplatform.schedules.list
aiplatform. semanticGovernancePolicies. get
aiplatform. semanticGovernancePolicies. list
aiplatform. semanticGovernancePolicyEngine. get
aiplatform.sessionEvents.list
aiplatform.sessions.get
aiplatform.sessions.list
aiplatform.specialistPools.get
aiplatform. specialistPools. list
aiplatform. specialistPools. update
aiplatform.studies.get
aiplatform.studies.list
aiplatform. tensorboardExperiments. get
aiplatform. tensorboardExperiments. list
aiplatform.tensorboardRuns.get
aiplatform. tensorboardRuns. list
aiplatform. tensorboardTimeSeries. batchRead
aiplatform. tensorboardTimeSeries. get
aiplatform. tensorboardTimeSeries. list
aiplatform. tensorboardTimeSeries. read
aiplatform.tensorboards.get
aiplatform.tensorboards.list
aiplatform. trainingPipelines. get
aiplatform. trainingPipelines. list
aiplatform.trials.get
aiplatform.trials.list
aiplatform.tuningJobs.get
aiplatform.tuningJobs.list
resourcemanager.projects.get
resourcemanager.projects.list
Colab Enterprise Admin
( roles/ aiplatform.colabEnterpriseAdmin )
Admin role of using colab enterprise.
aiplatform.locations.get
aiplatform. notebookExecutionJobs.*
aiplatform. notebookExecutionJobs. create
aiplatform. notebookExecutionJobs. delete
aiplatform. notebookExecutionJobs. get
aiplatform. notebookExecutionJobs. list
aiplatform. notebookRuntimeTemplates.*
aiplatform. notebookRuntimeTemplates. apply
aiplatform. notebookRuntimeTemplates. create
aiplatform. notebookRuntimeTemplates. delete
aiplatform. notebookRuntimeTemplates. get
aiplatform. notebookRuntimeTemplates. getIamPolicy
aiplatform. notebookRuntimeTemplates. list
aiplatform. notebookRuntimeTemplates. setIamPolicy
aiplatform. notebookRuntimeTemplates. update
aiplatform.notebookRuntimes.*
aiplatform. notebookRuntimes. assign
aiplatform. notebookRuntimes. delete
aiplatform. notebookRuntimes. get
aiplatform. notebookRuntimes. list
aiplatform. notebookRuntimes. start
aiplatform. notebookRuntimes. update
aiplatform. notebookRuntimes. upgrade
aiplatform.operations.list
aiplatform.pipelineJobs.create
aiplatform.schedules.*
aiplatform.schedules.create
aiplatform.schedules.delete
aiplatform.schedules.get
aiplatform.schedules.list
aiplatform.schedules.update
compute.reservations.get
compute.reservations.list
dataform.*
dataform.commentThreads.create
dataform.commentThreads.delete
dataform.commentThreads.get
dataform.commentThreads.list
dataform.commentThreads.update
dataform.comments.create
dataform.comments.delete
dataform.comments.get
dataform.comments.list
dataform.comments.update
dataform. compilationResults. create
dataform. compilationResults. get
dataform. compilationResults. list
dataform. compilationResults. query
dataform.config.get
dataform.config.update
dataform.folders.addContents
dataform.folders.create
dataform.folders.delete
dataform.folders.deleteTree
dataform.folders.get
dataform.folders.getIamPolicy
dataform.folders.move
dataform.folders.queryContents
dataform.folders.setIamPolicy
dataform.folders.update
dataform.locations.get
dataform.locations.list
dataform.operations.cancel
dataform.operations.delete
dataform.operations.get
dataform.operations.list
dataform.releaseConfigs.create
dataform.releaseConfigs.delete
dataform.releaseConfigs.get
dataform.releaseConfigs.list
dataform.releaseConfigs.update
dataform.repositories.commit
dataform. repositories. computeAccessTokenStatus
dataform.repositories.create
dataform.repositories.delete
dataform. repositories. fetchHistory
dataform. repositories. fetchRemoteBranches
dataform.repositories.get
dataform. repositories. getIamPolicy
dataform.repositories.list
dataform.repositories.move
dataform. repositories. queryDirectoryContents
dataform.repositories.readFile
dataform. repositories. scheduleRelease
dataform. repositories. scheduleWorkflow
dataform. repositories. setIamPolicy
dataform.repositories.update
dataform.teamFolders.create
dataform.teamFolders.delete
dataform. teamFolders. deleteTree
dataform.teamFolders.get
dataform. teamFolders. getIamPolicy
dataform. teamFolders. setIamPolicy
dataform.teamFolders.update
dataform. workflowConfigs. create
dataform. workflowConfigs. delete
dataform.workflowConfigs.get
dataform.workflowConfigs.list
dataform. workflowConfigs. update
dataform. workflowInvocations. cancel
dataform. workflowInvocations. create
dataform. workflowInvocations. delete
dataform. workflowInvocations. get
dataform. workflowInvocations. list
dataform. workflowInvocations. query
dataform.workspaces.commit
dataform.workspaces.create
dataform.workspaces.delete
dataform. workspaces. fetchFileDiff
dataform. workspaces. fetchFileGitStatuses
dataform. workspaces. fetchGitAheadBehind
dataform.workspaces.get
dataform. workspaces. getIamPolicy
dataform. workspaces. installNpmPackages
dataform.workspaces.list
dataform. workspaces. makeDirectory
dataform. workspaces. moveDirectory
dataform.workspaces.moveFile
dataform.workspaces.pull
dataform.workspaces.push
dataform. workspaces. queryDirectoryContents
dataform.workspaces.readFile
dataform. workspaces. removeDirectory
dataform.workspaces.removeFile
dataform.workspaces.reset
dataform. workspaces. searchFiles
dataform. workspaces. setIamPolicy
dataform.workspaces.writeFile
resourcemanager.projects.get
resourcemanager.projects.list
Colab Enterprise User
( roles/ aiplatform.colabEnterpriseUser )
User role of using colab enterprise.
aiplatform.locations.get
aiplatform. notebookExecutionJobs.*
aiplatform. notebookExecutionJobs. create
aiplatform. notebookExecutionJobs. delete
aiplatform. notebookExecutionJobs. get
aiplatform. notebookExecutionJobs. list
aiplatform. notebookRuntimeTemplates. apply
aiplatform. notebookRuntimeTemplates. get
aiplatform. notebookRuntimeTemplates. getIamPolicy
aiplatform. notebookRuntimeTemplates. list
aiplatform. notebookRuntimes. assign
aiplatform. notebookRuntimes. get
aiplatform. notebookRuntimes. list
aiplatform.operations.list
aiplatform.pipelineJobs.create
aiplatform.schedules.*
aiplatform.schedules.create
aiplatform.schedules.delete
aiplatform.schedules.get
aiplatform.schedules.list
aiplatform.schedules.update
dataform.commentThreads.get
dataform.commentThreads.list
dataform.comments.get
dataform.comments.list
dataform.folders.create
dataform.locations.*
dataform.locations.get
dataform.locations.list
dataform.repositories.create
dataform.repositories.list
resourcemanager.projects.get
resourcemanager.projects.list
Vertex AI Feature Store EntityType owner
( roles/ aiplatform.entityTypeOwner )
Provides full access to all permissions for a particular entity type resource.
Lowest-level resources where you can grant this role:
Entity type
aiplatform.entityTypes.delete
aiplatform. entityTypes. deleteFeatureValues
aiplatform. entityTypes. exportFeatureValues
aiplatform.entityTypes.get
aiplatform. entityTypes. getIamPolicy
aiplatform. entityTypes. importFeatureValues
aiplatform. entityTypes. readFeatureValues
aiplatform. entityTypes. setIamPolicy
aiplatform. entityTypes. streamingReadFeatureValues
aiplatform.entityTypes.update
aiplatform. entityTypes. writeFeatureValues
aiplatform.featureGroups.get
aiplatform.featureGroups.list
aiplatform. featureMonitorJobs. get
aiplatform. featureMonitorJobs. list
aiplatform.featureMonitors.get
aiplatform. featureMonitors. list
aiplatform. featureOnlineStores. get
aiplatform. featureOnlineStores. list
aiplatform.featureViewSyncs.*
aiplatform. featureViewSyncs. get
aiplatform. featureViewSyncs. list
aiplatform. featureViews. fetchFeatureValues
aiplatform.featureViews.get
aiplatform.featureViews.list
aiplatform. featureViews. searchNearestEntities
aiplatform.features.*
aiplatform.features.create
aiplatform.features.delete
aiplatform.features.get
aiplatform.features.list
aiplatform.features.update
aiplatform. featurestores. batchReadFeatureValues
resourcemanager.projects.get
resourcemanager.projects.list
Vertex AI Platform Express Admin
Beta
( roles/ aiplatform.expressAdmin )
Grants admin access to Vertex AI Express
aiplatform. batchPredictionJobs.*
aiplatform. batchPredictionJobs. cancel
aiplatform. batchPredictionJobs. create
aiplatform. batchPredictionJobs. delete
aiplatform. batchPredictionJobs. get
aiplatform. batchPredictionJobs. list
aiplatform.datasetVersions.*
aiplatform. datasetVersions. create
aiplatform. datasetVersions. delete
aiplatform.datasetVersions.get
aiplatform. datasetVersions. list
aiplatform. datasetVersions. restore
aiplatform.datasets.create
aiplatform.datasets.delete
aiplatform.datasets.get
aiplatform.datasets.list
aiplatform.datasets.update
aiplatform.endpoints.predict
aiplatform. locations. evaluateInstances
aiplatform.memories.*
aiplatform.memories.create
aiplatform.memories.delete
aiplatform.memories.generate
aiplatform.memories.get
aiplatform.memories.list
aiplatform.memories.retrieve
aiplatform.memories.update
aiplatform.operations.list
aiplatform.reasoningEngines.*
aiplatform. reasoningEngines. create
aiplatform. reasoningEngines. delete
aiplatform. reasoningEngines. get
aiplatform. reasoningEngines. list
aiplatform. reasoningEngines. query
aiplatform. reasoningEngines. update
aiplatform. sandboxEnvironments.*
aiplatform. sandboxEnvironments. create
aiplatform. sandboxEnvironments. delete
aiplatform. sandboxEnvironments. execute
aiplatform. sandboxEnvironments. get
aiplatform. sandboxEnvironments. list
aiplatform.sessionEvents.*
aiplatform. sessionEvents. append
aiplatform.sessionEvents.list
aiplatform.sessions.create
aiplatform.sessions.delete
aiplatform.sessions.get
aiplatform.sessions.list
aiplatform.sessions.update
Vertex AI Platform Express User
Beta
( roles/ aiplatform.expressUser )
Grants user access to Vertex AI Express
aiplatform.datasetVersions.*
aiplatform. datasetVersions. create
aiplatform. datasetVersions. delete
aiplatform.datasetVersions.get
aiplatform. datasetVersions. list
aiplatform. datasetVersions. restore
aiplatform.datasets.create
aiplatform.datasets.delete
aiplatform.datasets.get
aiplatform.datasets.list
aiplatform.datasets.update
aiplatform.endpoints.predict
aiplatform. locations. evaluateInstances
aiplatform.memories.*
aiplatform.memories.create
aiplatform.memories.delete
aiplatform.memories.generate
aiplatform.memories.get
aiplatform.memories.list
aiplatform.memories.retrieve
aiplatform.memories.update
aiplatform.operations.list
aiplatform.reasoningEngines.*
aiplatform. reasoningEngines. create
aiplatform. reasoningEngines. delete
aiplatform. reasoningEngines. get
aiplatform. reasoningEngines. list
aiplatform. reasoningEngines. query
aiplatform. reasoningEngines. update
aiplatform. sandboxEnvironments.*
aiplatform. sandboxEnvironments. create
aiplatform. sandboxEnvironments. delete
aiplatform. sandboxEnvironments. execute
aiplatform. sandboxEnvironments. get
aiplatform. sandboxEnvironments. list
aiplatform.sessionEvents.*
aiplatform. sessionEvents. append
aiplatform.sessionEvents.list
aiplatform.sessions.create
aiplatform.sessions.delete
aiplatform.sessions.get
aiplatform.sessions.list
aiplatform.sessions.update
Vertex AI Feature Store Admin
( roles/ aiplatform.featurestoreAdmin )
Grants full access to all resources in Vertex AI Feature Store
Lowest-level resources where you can grant this role:
Entity type
aiplatform.entityTypes.*
aiplatform.entityTypes.create
aiplatform.entityTypes.delete
aiplatform. entityTypes. deleteFeatureValues
aiplatform. entityTypes. exportFeatureValues
aiplatform.entityTypes.get
aiplatform. entityTypes. getIamPolicy
aiplatform. entityTypes. importFeatureValues
aiplatform.entityTypes.list
aiplatform. entityTypes. readFeatureValues
aiplatform. entityTypes. setIamPolicy
aiplatform. entityTypes. streamingReadFeatureValues
aiplatform.entityTypes.update
aiplatform. entityTypes. writeFeatureValues
aiplatform.featureGroups.*
aiplatform. featureGroups. create
aiplatform. featureGroups. delete
aiplatform.featureGroups.get
aiplatform. featureGroups. getIamPolicy
aiplatform.featureGroups.list
aiplatform. featureGroups. setIamPolicy
aiplatform. featureGroups. update
aiplatform. featureMonitorJobs.*
aiplatform. featureMonitorJobs. create
aiplatform. featureMonitorJobs. get
aiplatform. featureMonitorJobs. list
aiplatform.featureMonitors.*
aiplatform. featureMonitors. create
aiplatform. featureMonitors. delete
aiplatform.featureMonitors.get
aiplatform. featureMonitors. list
aiplatform. featureMonitors. update
aiplatform. featureOnlineStores.*
aiplatform. featureOnlineStores. create
aiplatform. featureOnlineStores. delete
aiplatform. featureOnlineStores. get
aiplatform. featureOnlineStores. getIamPolicy
aiplatform. featureOnlineStores. list
aiplatform. featureOnlineStores. setIamPolicy
aiplatform. featureOnlineStores. update
aiplatform.featureViewSyncs.*
aiplatform. featureViewSyncs. get
aiplatform. featureViewSyncs. list
aiplatform.featureViews.*
aiplatform.featureViews.create
aiplatform.featureViews.delete
aiplatform. featureViews. directWrite
aiplatform. featureViews. fetchFeatureValues
aiplatform.featureViews.get
aiplatform. featureViews. getIamPolicy
aiplatform.featureViews.list
aiplatform. featureViews. searchNearestEntities
aiplatform. featureViews. setIamPolicy
aiplatform.featureViews.sync
aiplatform.featureViews.update
aiplatform.features.*
aiplatform.features.create
aiplatform.features.delete
aiplatform.features.get
aiplatform.features.list
aiplatform.features.update
aiplatform.featurestores.*
aiplatform. featurestores. batchReadFeatureValues
aiplatform. featurestores. create
aiplatform. featurestores. delete
aiplatform. featurestores. exportFeatures
aiplatform.featurestores.get
aiplatform. featurestores. getIamPolicy
aiplatform. featurestores. importFeatures
aiplatform.featurestores.list
aiplatform. featurestores. readFeatures
aiplatform. featurestores. setIamPolicy
aiplatform. featurestores. update
aiplatform. featurestores. writeFeatures
aiplatform.operations.list
resourcemanager.projects.get
resourcemanager.projects.list
Vertex AI Feature Store Data Viewer
( roles/ aiplatform.featurestoreDataViewer )
This role provides permissions to read Feature data.
Lowest-level resources where you can grant this role:
Entity type
aiplatform. entityTypes. exportFeatureValues
aiplatform.entityTypes.get
aiplatform. entityTypes. readFeatureValues
aiplatform. entityTypes. streamingReadFeatureValues
aiplatform.featureGroups.get
aiplatform.featureGroups.list
aiplatform. featureMonitorJobs. get
aiplatform. featureMonitorJobs. list
aiplatform.featureMonitors.get
aiplatform. featureMonitors. list
aiplatform. featureOnlineStores. get
aiplatform. featureOnlineStores. list
aiplatform.featureViewSyncs.*
aiplatform. featureViewSyncs. get
aiplatform. featureViewSyncs. list
aiplatform. featureViews. fetchFeatureValues
aiplatform.featureViews.get
aiplatform.featureViews.list
aiplatform. featureViews. searchNearestEntities
aiplatform.features.get
aiplatform.features.list
aiplatform. featurestores. batchReadFeatureValues
resourcemanager.projects.get
resourcemanager.projects.list
Vertex AI Feature Store Data Writer
( roles/ aiplatform.featurestoreDataWriter )
This role provides permissions to read and write Feature data.
Lowest-level resources where you can grant this role:
Entity type
aiplatform. entityTypes. deleteFeatureValues
aiplatform. entityTypes. exportFeatureValues
aiplatform.entityTypes.get
aiplatform. entityTypes. importFeatureValues
aiplatform. entityTypes. readFeatureValues
aiplatform. entityTypes. streamingReadFeatureValues
aiplatform. entityTypes. writeFeatureValues
aiplatform.featureGroups.get
aiplatform.featureGroups.list
aiplatform. featureMonitorJobs. get
aiplatform. featureMonitorJobs. list
aiplatform.featureMonitors.get
aiplatform. featureMonitors. list
aiplatform. featureOnlineStores. get
aiplatform. featureOnlineStores. list
aiplatform.featureViewSyncs.*
aiplatform. featureViewSyncs. get
aiplatform. featureViewSyncs. list
aiplatform. featureViews. fetchFeatureValues
aiplatform.featureViews.get
aiplatform.featureViews.list
aiplatform. featureViews. searchNearestEntities
aiplatform.features.get
aiplatform.features.list
aiplatform. featurestores. batchReadFeatureValues
resourcemanager.projects.get
resourcemanager.projects.list
Vertex AI Feature Store Instance Creator
( roles/ aiplatform.featurestoreInstanceCreator )
Administrator of Featurestore resources, but not the child resources under Featurestores.
Lowest-level resources where you can grant this role:
Featurestore
aiplatform. featurestores. create
aiplatform. featurestores. delete
aiplatform.featurestores.get
aiplatform.featurestores.list
aiplatform. featurestores. update
Vertex AI Feature Store Resource Viewer
( roles/ aiplatform.featurestoreResourceViewer )
Viewer of all resources in Vertex AI Feature Store but cannot make changes.
Lowest-level resources where you can grant this role:
Entity type
aiplatform.entityTypes.get
aiplatform.entityTypes.list
aiplatform.featureGroups.get
aiplatform.featureGroups.list
aiplatform. featureMonitorJobs. get
aiplatform. featureMonitorJobs. list
aiplatform.featureMonitors.get
aiplatform. featureMonitors. list
aiplatform. featureOnlineStores. get
aiplatform. featureOnlineStores. list
aiplatform.featureViewSyncs.*
aiplatform. featureViewSyncs. get
aiplatform. featureViewSyncs. list
aiplatform.featureViews.get
aiplatform.featureViews.list
aiplatform.features.get
aiplatform.features.list
aiplatform.featurestores.get
aiplatform.featurestores.list
aiplatform.operations.list
resourcemanager.projects.get
resourcemanager.projects.list
Vertex AI Feature Store User
Beta
( roles/ aiplatform.featurestoreUser )
Deprecated. Use featurestoreAdmin instead.
aiplatform.entityTypes.*
aiplatform.entityTypes.create
aiplatform.entityTypes.delete
aiplatform. entityTypes. deleteFeatureValues
aiplatform. entityTypes. exportFeatureValues
aiplatform.entityTypes.get
aiplatform. entityTypes. getIamPolicy
aiplatform. entityTypes. importFeatureValues
aiplatform.entityTypes.list
aiplatform. entityTypes. readFeatureValues
aiplatform. entityTypes. setIamPolicy
aiplatform. entityTypes. streamingReadFeatureValues
aiplatform.entityTypes.update
aiplatform. entityTypes. writeFeatureValues
aiplatform.features.*
aiplatform.features.create
aiplatform.features.delete
aiplatform.features.get
aiplatform.features.list
aiplatform.features.update
aiplatform.featurestores.*
aiplatform. featurestores. batchReadFeatureValues
aiplatform. featurestores. create
aiplatform. featurestores. delete
aiplatform. featurestores. exportFeatures
aiplatform.featurestores.get
aiplatform. featurestores. getIamPolicy
aiplatform. featurestores. importFeatures
aiplatform.featurestores.list
aiplatform. featurestores. readFeatures
aiplatform. featurestores. setIamPolicy
aiplatform. featurestores. update
aiplatform. featurestores. writeFeatures
aiplatform.operations.list
resourcemanager.projects.get
resourcemanager.projects.list
Vertex AI Agent Engine Memory Editor Role
( roles/ aiplatform.memoryEditor )
Grants edit access to Memory for Agent Engine.
aiplatform.memories.create
aiplatform.memories.delete
aiplatform.memories.generate
aiplatform.memories.update
aiplatform. memoryRevisions. rollback
Vertex AI Agent Engine Memory User Role
( roles/ aiplatform.memoryUser )
Grants full user access to Memory for Agent Engine.
aiplatform.memories.*
aiplatform.memories.create
aiplatform.memories.delete
aiplatform.memories.generate
aiplatform.memories.get
aiplatform.memories.list
aiplatform.memories.retrieve
aiplatform.memories.update
aiplatform.memoryRevisions.*
aiplatform.memoryRevisions.get
aiplatform. memoryRevisions. list
aiplatform. memoryRevisions. rollback
Vertex AI Agent Engine Memory Viewer Role
( roles/ aiplatform.memoryViewer )
Grants viewer access to Memory for Agent Engine.
aiplatform.memories.get
aiplatform.memories.list
aiplatform.memories.retrieve
aiplatform.memoryRevisions.get
aiplatform. memoryRevisions. list
Vertex AI Migration Service User
( roles/ aiplatform.migrator )
Grants access to use migration service in Vertex AI
aiplatform. migratableResources.*
aiplatform. migratableResources. migrate
aiplatform. migratableResources. search
Notebook Executor User
Beta
( roles/ aiplatform.notebookExecutorUser )
Grants users full access to schedules and notebook execution jobs.
aiplatform. notebookExecutionJobs.*
aiplatform. notebookExecutionJobs. create
aiplatform. notebookExecutionJobs. delete
aiplatform. notebookExecutionJobs. get
aiplatform. notebookExecutionJobs. list
aiplatform.operations.list
aiplatform.pipelineJobs.create
aiplatform.schedules.*
aiplatform.schedules.create
aiplatform.schedules.delete
aiplatform.schedules.get
aiplatform.schedules.list
aiplatform.schedules.update
Notebook Runtime Admin
( roles/ aiplatform.notebookRuntimeAdmin )
Grants full access to all runtime templates and runtimes in Notebook Service.
aiplatform.locations.get
aiplatform. notebookRuntimeTemplates.*
aiplatform. notebookRuntimeTemplates. apply
aiplatform. notebookRuntimeTemplates. create
aiplatform. notebookRuntimeTemplates. delete
aiplatform. notebookRuntimeTemplates. get
aiplatform. notebookRuntimeTemplates. getIamPolicy
aiplatform. notebookRuntimeTemplates. list
aiplatform. notebookRuntimeTemplates. setIamPolicy
aiplatform. notebookRuntimeTemplates. update
aiplatform.notebookRuntimes.*
aiplatform. notebookRuntimes. assign
aiplatform. notebookRuntimes. delete
aiplatform. notebookRuntimes. get
aiplatform. notebookRuntimes. list
aiplatform. notebookRuntimes. start
aiplatform. notebookRuntimes. update
aiplatform. notebookRuntimes. upgrade
aiplatform.operations.list
compute.reservations.get
compute.reservations.list
Notebook Runtime User
( roles/ aiplatform.notebookRuntimeUser )
Grants users permissions to create runtime resources using a runtime template and manage the runtime resources they created.
aiplatform.locations.get
aiplatform. notebookRuntimeTemplates. apply
aiplatform. notebookRuntimeTemplates. get
aiplatform. notebookRuntimeTemplates. getIamPolicy
aiplatform. notebookRuntimeTemplates. list
aiplatform. notebookRuntimes. assign
aiplatform. notebookRuntimes. get
aiplatform. notebookRuntimes. list
aiplatform.operations.list
Vertex AI Platform Provisioned Throughput Admin
Beta
( roles/ aiplatform.provisionedThroughputAdmin )
Grants access to use all resources related to Vertex AI Provisioned Throughput
aiplatform. provisionedThroughputRevisions.*
aiplatform. provisionedThroughputRevisions. get
aiplatform. provisionedThroughputRevisions. list
aiplatform. provisionedThroughputs.*
aiplatform. provisionedThroughputs. cancel
aiplatform. provisionedThroughputs. create
aiplatform. provisionedThroughputs. get
aiplatform. provisionedThroughputs. list
aiplatform. provisionedThroughputs. split
aiplatform. provisionedThroughputs. update
Vertex AI Platform Publisher Provisioned Throughput Admin
Beta
( roles/ aiplatform.publisherProvisionedThroughputAdmin )
Grants Publisher access to use all resources related to Vertex AI Provisioned Throughput Orders
Vertex AI Platform Publisher Provisioned Throughput Viewer
Beta
( roles/ aiplatform.publisherProvisionedThroughputViewer )
Grants Publisher access to view all resources related to Vertex AI Provisioned Throughput Orders
Vertex AI Agent Engine Session Editor Role
( roles/ aiplatform.sessionEditor )
Grants edit access to Session for Agent Engine.
aiplatform. sessionEvents. append
aiplatform.sessions.create
aiplatform.sessions.delete
aiplatform.sessions.update
Vertex AI Agent Engine Session User Role
( roles/ aiplatform.sessionUser )
Grants full user access to Session for Agent Engine.
aiplatform.sessionEvents.*
aiplatform. sessionEvents. append
aiplatform.sessionEvents.list
aiplatform.sessions.create
aiplatform.sessions.delete
aiplatform.sessions.get
aiplatform.sessions.list
aiplatform.sessions.update
Vertex AI Agent Engine Session Viewer Role
( roles/ aiplatform.sessionViewer )
Grants viewer access to Session for Agent Engine.
aiplatform.sessionEvents.list
aiplatform.sessions.get
aiplatform.sessions.list
Vertex AI Tensorboard Web App User
Beta
( roles/ aiplatform.tensorboardWebAppUser )
Grants access to the Vertex AI TensorBoard web app.
aiplatform. tensorboards. recordAccess
Vertex AI User
( roles/ aiplatform.user )
Grants access to use all resource in Vertex AI
aiplatform.agentExamples.*
aiplatform. agentExamples. create
aiplatform. agentExamples. delete
aiplatform.agentExamples.get
aiplatform.agentExamples.list
aiplatform. agentExamples. update
aiplatform.agents.*
aiplatform.agents.create
aiplatform.agents.delete
aiplatform.agents.get
aiplatform.agents.list
aiplatform.agents.update
aiplatform.annotationSpecs.*
aiplatform. annotationSpecs. create
aiplatform. annotationSpecs. delete
aiplatform.annotationSpecs.get
aiplatform. annotationSpecs. list
aiplatform. annotationSpecs. update
aiplatform.annotations.*
aiplatform.annotations.create
aiplatform.annotations.delete
aiplatform.annotations.get
aiplatform.annotations.list
aiplatform.annotations.update
aiplatform.apps.*
aiplatform.apps.create
aiplatform.apps.delete
aiplatform.apps.get
aiplatform.apps.list
aiplatform.apps.update
aiplatform.artifacts.*
aiplatform.artifacts.create
aiplatform.artifacts.delete
aiplatform.artifacts.get
aiplatform.artifacts.list
aiplatform.artifacts.update
aiplatform. batchPredictionJobs.*
aiplatform. batchPredictionJobs. cancel
aiplatform. batchPredictionJobs. create
aiplatform. batchPredictionJobs. delete
aiplatform. batchPredictionJobs. get
aiplatform. batchPredictionJobs. list
aiplatform.cacheConfigs.get
aiplatform.cachedContents.*
aiplatform. cachedContents. create
aiplatform. cachedContents. delete
aiplatform.cachedContents.get
aiplatform.cachedContents.list
aiplatform. cachedContents. update
aiplatform.consents.get
aiplatform.contexts.*
aiplatform. contexts. addContextArtifactsAndExecutions
aiplatform. contexts. addContextChildren
aiplatform.contexts.create
aiplatform.contexts.delete
aiplatform.contexts.get
aiplatform.contexts.list
aiplatform. contexts. queryContextLineageSubgraph
aiplatform.contexts.update
aiplatform.customJobs.*
aiplatform.customJobs.cancel
aiplatform.customJobs.create
aiplatform.customJobs.delete
aiplatform.customJobs.get
aiplatform.customJobs.list
aiplatform.dataItems.*
aiplatform.dataItems.create
aiplatform.dataItems.delete
aiplatform.dataItems.get
aiplatform.dataItems.list
aiplatform.dataItems.update
aiplatform.dataLabelingJobs.*
aiplatform. dataLabelingJobs. cancel
aiplatform. dataLabelingJobs. create
aiplatform. dataLabelingJobs. delete
aiplatform. dataLabelingJobs. get
aiplatform. dataLabelingJobs. list
aiplatform.datasetVersions.*
aiplatform. datasetVersions. create
aiplatform. datasetVersions. delete
aiplatform.datasetVersions.get
aiplatform. datasetVersions. list
aiplatform. datasetVersions. restore
aiplatform.datasets.*
aiplatform.datasets.create
aiplatform.datasets.delete
aiplatform.datasets.export
aiplatform.datasets.get
aiplatform.datasets.import
aiplatform.datasets.list
aiplatform.datasets.update
aiplatform. deploymentResourcePools.*
aiplatform. deploymentResourcePools. create
aiplatform. deploymentResourcePools. delete
aiplatform. deploymentResourcePools. get
aiplatform. deploymentResourcePools. list
aiplatform. deploymentResourcePools. queryDeployedModels
aiplatform. deploymentResourcePools. update
aiplatform. edgeDeploymentJobs.*
aiplatform. edgeDeploymentJobs. create
aiplatform. edgeDeploymentJobs. delete
aiplatform. edgeDeploymentJobs. get
aiplatform. edgeDeploymentJobs. list
aiplatform. edgeDeviceDebugInfo. get
aiplatform.edgeDevices.*
aiplatform.edgeDevices.create
aiplatform.edgeDevices.delete
aiplatform.edgeDevices.get
aiplatform.edgeDevices.list
aiplatform.edgeDevices.update
aiplatform.endpoints.create
aiplatform.endpoints.delete
aiplatform.endpoints.deploy
aiplatform.endpoints.explain
aiplatform.endpoints.get
aiplatform.endpoints.list
aiplatform.endpoints.predict
aiplatform.endpoints.undeploy
aiplatform.endpoints.update
aiplatform.entityTypes.create
aiplatform.entityTypes.delete
aiplatform. entityTypes. deleteFeatureValues
aiplatform. entityTypes. exportFeatureValues
aiplatform.entityTypes.get
aiplatform. entityTypes. importFeatureValues
aiplatform.entityTypes.list
aiplatform. entityTypes. readFeatureValues
aiplatform. entityTypes. streamingReadFeatureValues
aiplatform.entityTypes.update
aiplatform. entityTypes. writeFeatureValues
aiplatform. evaluationExperiments.*
aiplatform. evaluationExperiments. create
aiplatform. evaluationExperiments. delete
aiplatform. evaluationExperiments. get
aiplatform. evaluationExperiments. list
aiplatform. evaluationExperiments. update
aiplatform.evaluationItems.*
aiplatform. evaluationItems. create
aiplatform. evaluationItems. delete
aiplatform.evaluationItems.get
aiplatform. evaluationItems. list
aiplatform. evaluationItems. update
aiplatform.evaluationRuns.*
aiplatform. evaluationRuns. cancel
aiplatform. evaluationRuns. create
aiplatform. evaluationRuns. delete
aiplatform. evaluationRuns. execute
aiplatform.evaluationRuns.get
aiplatform.evaluationRuns.list
aiplatform. evaluationRuns. update
aiplatform.evaluationSets.*
aiplatform. evaluationSets. create
aiplatform. evaluationSets. delete
aiplatform.evaluationSets.get
aiplatform.evaluationSets.list
aiplatform. evaluationSets. update
aiplatform.exampleStores.*
aiplatform. exampleStores. create
aiplatform. exampleStores. delete
aiplatform.exampleStores.get
aiplatform.exampleStores.list
aiplatform. exampleStores. readExample
aiplatform. exampleStores. update
aiplatform. exampleStores. writeExample
aiplatform.executions.*
aiplatform. executions. addExecutionEvents
aiplatform.executions.create
aiplatform.executions.delete
aiplatform.executions.get
aiplatform.executions.list
aiplatform. executions. queryExecutionInputsAndOutputs
aiplatform.executions.update
aiplatform.extensions.*
aiplatform.extensions.delete
aiplatform.extensions.execute
aiplatform.extensions.get
aiplatform.extensions.import
aiplatform.extensions.list
aiplatform.extensions.update
aiplatform. featureGroups. create
aiplatform. featureGroups. delete
aiplatform.featureGroups.get
aiplatform.featureGroups.list
aiplatform. featureGroups. update
aiplatform. featureMonitorJobs.*
aiplatform. featureMonitorJobs. create
aiplatform. featureMonitorJobs. get
aiplatform. featureMonitorJobs. list
aiplatform.featureMonitors.*
aiplatform. featureMonitors. create
aiplatform. featureMonitors. delete
aiplatform.featureMonitors.get
aiplatform. featureMonitors. list
aiplatform. featureMonitors. update
aiplatform. featureOnlineStores. create
aiplatform. featureOnlineStores. delete
aiplatform. featureOnlineStores. get
aiplatform. featureOnlineStores. list
aiplatform. featureOnlineStores. update
aiplatform.featureViewSyncs.*
aiplatform. featureViewSyncs. get
aiplatform. featureViewSyncs. list
aiplatform.featureViews.create
aiplatform.featureViews.delete
aiplatform. featureViews. directWrite
aiplatform. featureViews. fetchFeatureValues
aiplatform.featureViews.get
aiplatform.featureViews.list
aiplatform. featureViews. searchNearestEntities
aiplatform.featureViews.sync
aiplatform.featureViews.update
aiplatform.features.*
aiplatform.features.create
aiplatform.features.delete
aiplatform.features.get
aiplatform.features.list
aiplatform.features.update
aiplatform. featurestores. batchReadFeatureValues
aiplatform. featurestores. create
aiplatform. featurestores. delete
aiplatform. featurestores. exportFeatures
aiplatform.featurestores.get
aiplatform. featurestores. importFeatures
aiplatform.featurestores.list
aiplatform. featurestores. readFeatures
aiplatform. featurestores. update
aiplatform. featurestores. writeFeatures
aiplatform.humanInTheLoops.*
aiplatform. humanInTheLoops. cancel
aiplatform. humanInTheLoops. create
aiplatform. humanInTheLoops. delete
aiplatform.humanInTheLoops.get
aiplatform. humanInTheLoops. list
aiplatform. humanInTheLoops. queryAnnotationStats
aiplatform. humanInTheLoops. send
aiplatform. humanInTheLoops. update
aiplatform. hyperparameterTuningJobs.*
aiplatform. hyperparameterTuningJobs. cancel
aiplatform. hyperparameterTuningJobs. create
aiplatform. hyperparameterTuningJobs. delete
aiplatform. hyperparameterTuningJobs. get
aiplatform. hyperparameterTuningJobs. list
aiplatform.indexEndpoints.*
aiplatform. indexEndpoints. create
aiplatform. indexEndpoints. delete
aiplatform. indexEndpoints. deploy
aiplatform.indexEndpoints.get
aiplatform.indexEndpoints.list
aiplatform. indexEndpoints. queryVectors
aiplatform. indexEndpoints. undeploy
aiplatform. indexEndpoints. update
aiplatform.indexes.*
aiplatform.indexes.create
aiplatform.indexes.delete
aiplatform.indexes.get
aiplatform.indexes.list
aiplatform.indexes.update
aiplatform.locations.*
aiplatform. locations. evaluateInstances
aiplatform.locations.get
aiplatform.locations.list
aiplatform.memories.*
aiplatform.memories.create
aiplatform.memories.delete
aiplatform.memories.generate
aiplatform.memories.get
aiplatform.memories.list
aiplatform.memories.retrieve
aiplatform.memories.update
aiplatform.memoryRevisions.*
aiplatform.memoryRevisions.get
aiplatform. memoryRevisions. list
aiplatform. memoryRevisions. rollback
aiplatform.metadataSchemas.*
aiplatform. metadataSchemas. create
aiplatform. metadataSchemas. delete
aiplatform.metadataSchemas.get
aiplatform. metadataSchemas. list
aiplatform.metadataStores.*
aiplatform. metadataStores. create
aiplatform. metadataStores. delete
aiplatform.metadataStores.get
aiplatform.metadataStores.list
aiplatform. modelDeploymentMonitoringJobs.*
aiplatform. modelDeploymentMonitoringJobs. create
aiplatform. modelDeploymentMonitoringJobs. delete
aiplatform. modelDeploymentMonitoringJobs. get
aiplatform. modelDeploymentMonitoringJobs. list
aiplatform. modelDeploymentMonitoringJobs. pause
aiplatform. modelDeploymentMonitoringJobs. resume
aiplatform. modelDeploymentMonitoringJobs. searchStatsAnomalies
aiplatform. modelDeploymentMonitoringJobs. update
aiplatform. modelEvaluationSlices.*
aiplatform. modelEvaluationSlices. get
aiplatform. modelEvaluationSlices. import
aiplatform. modelEvaluationSlices. list
aiplatform.modelEvaluations.*
aiplatform. modelEvaluations. exportEvaluatedDataItems
aiplatform. modelEvaluations. get
aiplatform. modelEvaluations. import
aiplatform. modelEvaluations. list
aiplatform. modelMonitoringJobs.*
aiplatform. modelMonitoringJobs. create
aiplatform. modelMonitoringJobs. delete
aiplatform. modelMonitoringJobs. get
aiplatform. modelMonitoringJobs. list
aiplatform.modelMonitors.*
aiplatform. modelMonitors. create
aiplatform. modelMonitors. delete
aiplatform.modelMonitors.get
aiplatform.modelMonitors.list
aiplatform. modelMonitors. searchModelMonitoringAlerts
aiplatform. modelMonitors. searchModelMonitoringStats
aiplatform. modelMonitors. update
aiplatform.models.*
aiplatform.models.delete
aiplatform.models.export
aiplatform.models.get
aiplatform.models.list
aiplatform.models.update
aiplatform.models.upload
aiplatform.nasJobs.*
aiplatform.nasJobs.cancel
aiplatform.nasJobs.create
aiplatform.nasJobs.delete
aiplatform.nasJobs.get
aiplatform.nasJobs.list
aiplatform.nasTrialDetails.*
aiplatform.nasTrialDetails.get
aiplatform. nasTrialDetails. list
aiplatform. notebookExecutionJobs.*
aiplatform. notebookExecutionJobs. create
aiplatform. notebookExecutionJobs. delete
aiplatform. notebookExecutionJobs. get
aiplatform. notebookExecutionJobs. list
aiplatform. notebookRuntimeTemplates. apply
aiplatform. notebookRuntimeTemplates. create
aiplatform. notebookRuntimeTemplates. delete
aiplatform. notebookRuntimeTemplates. get
aiplatform. notebookRuntimeTemplates. list
aiplatform. notebookRuntimeTemplates. update
aiplatform.notebookRuntimes.*
aiplatform. notebookRuntimes. assign
aiplatform. notebookRuntimes. delete
aiplatform. notebookRuntimes. get
aiplatform. notebookRuntimes. list
aiplatform. notebookRuntimes. start
aiplatform. notebookRuntimes. update
aiplatform. notebookRuntimes. upgrade
aiplatform.operations.list
aiplatform. persistentResources. get
aiplatform. persistentResources. list
aiplatform.pipelineJobs.*
aiplatform.pipelineJobs.cancel
aiplatform.pipelineJobs.create
aiplatform.pipelineJobs.delete
aiplatform.pipelineJobs.get
aiplatform.pipelineJobs.list
aiplatform. provisionedThroughputRevisions.*
aiplatform. provisionedThroughputRevisions. get
aiplatform. provisionedThroughputRevisions. list
aiplatform. provisionedThroughputs. get
aiplatform. provisionedThroughputs. list
aiplatform.ragCorpora.*
aiplatform.ragCorpora.create
aiplatform.ragCorpora.delete
aiplatform.ragCorpora.get
aiplatform.ragCorpora.list
aiplatform.ragCorpora.query
aiplatform.ragCorpora.update
aiplatform. ragEngineConfigs. get
aiplatform.ragFiles.*
aiplatform.ragFiles.delete
aiplatform.ragFiles.get
aiplatform.ragFiles.import
aiplatform.ragFiles.list
aiplatform.ragFiles.upload
aiplatform.reasoningEngines.*
aiplatform. reasoningEngines. create
aiplatform. reasoningEngines. delete
aiplatform. reasoningEngines. get
aiplatform. reasoningEngines. list
aiplatform. reasoningEngines. query
aiplatform. reasoningEngines. update
aiplatform. sandboxEnvironments.*
aiplatform. sandboxEnvironments. create
aiplatform. sandboxEnvironments. delete
aiplatform. sandboxEnvironments. execute
aiplatform. sandboxEnvironments. get
aiplatform. sandboxEnvironments. list
aiplatform.schedules.*
aiplatform.schedules.create
aiplatform.schedules.delete
aiplatform.schedules.get
aiplatform.schedules.list
aiplatform.schedules.update
aiplatform. semanticGovernancePolicies.*
aiplatform. semanticGovernancePolicies. create
aiplatform. semanticGovernancePolicies. delete
aiplatform. semanticGovernancePolicies. get
aiplatform. semanticGovernancePolicies. list
aiplatform. semanticGovernancePolicies. update
aiplatform. semanticGovernancePolicyEngine.*
aiplatform. semanticGovernancePolicyEngine. get
aiplatform. semanticGovernancePolicyEngine. update
aiplatform.sessionEvents.*
aiplatform. sessionEvents. append
aiplatform.sessionEvents.list
aiplatform.sessions.*
aiplatform.sessions.create
aiplatform.sessions.delete
aiplatform.sessions.get
aiplatform.sessions.list
aiplatform.sessions.run
aiplatform.sessions.update
aiplatform.specialistPools.*
aiplatform. specialistPools. create
aiplatform. specialistPools. delete
aiplatform.specialistPools.get
aiplatform. specialistPools. list
aiplatform. specialistPools. update
aiplatform.studies.*
aiplatform.studies.create
aiplatform.studies.delete
aiplatform.studies.get
aiplatform.studies.list
aiplatform.studies.update
aiplatform. tensorboardExperiments.*
aiplatform. tensorboardExperiments. create
aiplatform. tensorboardExperiments. delete
aiplatform. tensorboardExperiments. get
aiplatform. tensorboardExperiments. list
aiplatform. tensorboardExperiments. update
aiplatform. tensorboardExperiments. write
aiplatform.tensorboardRuns.*
aiplatform. tensorboardRuns. batchCreate
aiplatform. tensorboardRuns. create
aiplatform. tensorboardRuns. delete
aiplatform.tensorboardRuns.get
aiplatform. tensorboardRuns. list
aiplatform. tensorboardRuns. update
aiplatform. tensorboardRuns. write
aiplatform. tensorboardTimeSeries.*
aiplatform. tensorboardTimeSeries. batchCreate
aiplatform. tensorboardTimeSeries. batchRead
aiplatform. tensorboardTimeSeries. create
aiplatform. tensorboardTimeSeries. delete
aiplatform. tensorboardTimeSeries. get
aiplatform. tensorboardTimeSeries. list
aiplatform. tensorboardTimeSeries. read
aiplatform. tensorboardTimeSeries. update
aiplatform.tensorboards.create
aiplatform.tensorboards.delete
aiplatform.tensorboards.get
aiplatform.tensorboards.list
aiplatform.tensorboards.update
aiplatform.trainingPipelines.*
aiplatform. trainingPipelines. cancel
aiplatform. trainingPipelines. create
aiplatform. trainingPipelines. delete
aiplatform. trainingPipelines. get
aiplatform. trainingPipelines. list
aiplatform.trials.*
aiplatform.trials.create
aiplatform.trials.delete
aiplatform.trials.get
aiplatform.trials.list
aiplatform.trials.update
aiplatform.tuningJobs.*
aiplatform.tuningJobs.cancel
aiplatform.tuningJobs.create
aiplatform.tuningJobs.delete
aiplatform.tuningJobs.get
aiplatform.tuningJobs.list
aiplatform. tuningJobs. optimizePrompt
aiplatform. tuningJobs. validateReinforcementTuningReward
aiplatform. tuningJobs. vertexTune
resourcemanager.projects.get
resourcemanager.projects.list
Service agent roles
Service agent roles should only be granted to service agents .
Role
Permissions
Vertex AI Agent Sandbox Service Agent
( roles/ aiplatform.agentSandboxServiceAgent )
Vertex AI Service Agent used to access Agent Sandbox managed resources in consumer project with restricted permissions.
Warning: Do not grant service agent roles to any principals except
service agents .
artifactregistry. repositories. downloadArtifacts
logging.logEntries.create
logging.logEntries.route
serviceusage.services.use
storage.objects.create
storage.objects.delete
storage.objects.get
storage.objects.list
Vertex AI Batch Prediction Service Agent
( roles/ aiplatform.batchPredictionServiceAgent )
Vertex AI Batch Prediction Service Agent for serving batch prediction requests.
Warning: Do not grant service agent roles to any principals except
service agents .
bigquery.datasets.create
bigquery.datasets.get
bigquery.jobs.create
bigquery.jobs.get
bigquery.models.create
bigquery.models.export
bigquery.models.getData
bigquery.readsessions.create
bigquery.readsessions.getData
bigquery.tables.create
bigquery.tables.createSnapshot
bigquery.tables.deleteSnapshot
bigquery.tables.export
bigquery.tables.get
bigquery.tables.getData
bigquery. tables. restoreSnapshot
bigquery.tables.update
bigquery.tables.updateData
storage.buckets.create
storage.buckets.delete
storage.buckets.get
storage.buckets.list
storage.buckets.update
storage.objects.create
storage.objects.delete
storage.objects.get
storage.objects.list
storage.objects.update
Vertex AI Colab Service Agent
( roles/ aiplatform.colabServiceAgent )
Gives Vertex AI Colab the proper permissions to function.
Warning: Do not grant service agent roles to any principals except
service agents .
aiplatform. notebookExecutionJobs. create
compute.addresses.get
compute.addresses.list
compute.addresses.use
compute.addresses.useInternal
compute.disks.create
compute.disks.createSnapshot
compute.disks.createTagBinding
compute.disks.delete
compute.disks.get
compute.disks.setLabels
compute.disks.use
compute.disks.useReadOnly
compute.globalOperations.get
compute.instances.attachDisk
compute.instances.create
compute. instances. createTagBinding
compute.instances.delete
compute.instances.detachDisk
compute.instances.get
compute. instances. getGuestAttributes
compute.instances.reset
compute.instances.setLabels
compute.instances.setMetadata
compute. instances. setServiceAccount
compute.instances.setTags
compute.instances.start
compute.instances.stop
compute.instances.useReadOnly
compute.networks.get
compute.networks.use
compute.networks.useExternalIp
compute.snapshots.create
compute.snapshots.delete
compute.snapshots.useReadOnly
compute.subnetworks.get
compute.subnetworks.list
compute.subnetworks.use
compute. subnetworks. useExternalIp
compute.zoneOperations.get
compute.zoneOperations.list
iam.serviceAccounts.actAs
notebooks.instances.create
notebooks.instances.delete
notebooks.instances.get
Vertex AI Custom Code Service Agent
( roles/ aiplatform.customCodeServiceAgent )
Gives Vertex AI Custom Code the proper permissions.
Warning: Do not grant service agent roles to any principals except
service agents .
aiplatform.agentExamples.*
aiplatform. agentExamples. create
aiplatform. agentExamples. delete
aiplatform.agentExamples.get
aiplatform.agentExamples.list
aiplatform. agentExamples. update
aiplatform.agents.*
aiplatform.agents.create
aiplatform.agents.delete
aiplatform.agents.get
aiplatform.agents.list
aiplatform.agents.update
aiplatform.annotationSpecs.*
aiplatform. annotationSpecs. create
aiplatform. annotationSpecs. delete
aiplatform.annotationSpecs.get
aiplatform. annotationSpecs. list
aiplatform. annotationSpecs. update
aiplatform.annotations.*
aiplatform.annotations.create
aiplatform.annotations.delete
aiplatform.annotations.get
aiplatform.annotations.list
aiplatform.annotations.update
aiplatform.apps.*
aiplatform.apps.create
aiplatform.apps.delete
aiplatform.apps.get
aiplatform.apps.list
aiplatform.apps.update
aiplatform.artifacts.*
aiplatform.artifacts.create
aiplatform.artifacts.delete
aiplatform.artifacts.get
aiplatform.artifacts.list
aiplatform.artifacts.update
aiplatform. batchPredictionJobs.*
aiplatform. batchPredictionJobs. cancel
aiplatform. batchPredictionJobs. create
aiplatform. batchPredictionJobs. delete
aiplatform. batchPredictionJobs. get
aiplatform. batchPredictionJobs. list
aiplatform.cacheConfigs.get
aiplatform.cachedContents.*
aiplatform. cachedContents. create
aiplatform. cachedContents. delete
aiplatform.cachedContents.get
aiplatform.cachedContents.list
aiplatform. cachedContents. update
aiplatform.consents.get
aiplatform.contexts.*
aiplatform. contexts. addContextArtifactsAndExecutions
aiplatform. contexts. addContextChildren
aiplatform.contexts.create
aiplatform.contexts.delete
aiplatform.contexts.get
aiplatform.contexts.list
aiplatform. contexts. queryContextLineageSubgraph
aiplatform.contexts.update
aiplatform.customJobs.*
aiplatform.customJobs.cancel
aiplatform.customJobs.create
aiplatform.customJobs.delete
aiplatform.customJobs.get
aiplatform.customJobs.list
aiplatform.dataItems.*
aiplatform.dataItems.create
aiplatform.dataItems.delete
aiplatform.dataItems.get
aiplatform.dataItems.list
aiplatform.dataItems.update
aiplatform.dataLabelingJobs.*
aiplatform. dataLabelingJobs. cancel
aiplatform. dataLabelingJobs. create
aiplatform. dataLabelingJobs. delete
aiplatform. dataLabelingJobs. get
aiplatform. dataLabelingJobs. list
aiplatform.datasetVersions.*
aiplatform. datasetVersions. create
aiplatform. datasetVersions. delete
aiplatform.datasetVersions.get
aiplatform. datasetVersions. list
aiplatform. datasetVersions. restore
aiplatform.datasets.*
aiplatform.datasets.create
aiplatform.datasets.delete
aiplatform.datasets.export
aiplatform.datasets.get
aiplatform.datasets.import
aiplatform.datasets.list
aiplatform.datasets.update
aiplatform. deploymentResourcePools.*
aiplatform. deploymentResourcePools. create
aiplatform. deploymentResourcePools. delete
aiplatform. deploymentResourcePools. get
aiplatform. deploymentResourcePools. list
aiplatform. deploymentResourcePools. queryDeployedModels
aiplatform. deploymentResourcePools. update
aiplatform. edgeDeploymentJobs.*
aiplatform. edgeDeploymentJobs. create
aiplatform. edgeDeploymentJobs. delete
aiplatform. edgeDeploymentJobs. get
aiplatform. edgeDeploymentJobs. list
aiplatform. edgeDeviceDebugInfo. get
aiplatform.edgeDevices.*
aiplatform.edgeDevices.create
aiplatform.edgeDevices.delete
aiplatform.edgeDevices.get
aiplatform.edgeDevices.list
aiplatform.edgeDevices.update
aiplatform.endpoints.create
aiplatform.endpoints.delete
aiplatform.endpoints.deploy
aiplatform.endpoints.explain
aiplatform.endpoints.get
aiplatform.endpoints.list
aiplatform.endpoints.predict
aiplatform.endpoints.undeploy
aiplatform.endpoints.update
aiplatform.entityTypes.create
aiplatform.entityTypes.delete
aiplatform. entityTypes. deleteFeatureValues
aiplatform. entityTypes. exportFeatureValues
aiplatform.entityTypes.get
aiplatform. entityTypes. importFeatureValues
aiplatform.entityTypes.list
aiplatform. entityTypes. readFeatureValues
aiplatform. entityTypes. streamingReadFeatureValues
aiplatform.entityTypes.update
aiplatform. entityTypes. writeFeatureValues
aiplatform. evaluationExperiments.*
aiplatform. evaluationExperiments. create
aiplatform. evaluationExperiments. delete
aiplatform. evaluationExperiments. get
aiplatform. evaluationExperiments. list
aiplatform. evaluationExperiments. update
aiplatform.evaluationItems.*
aiplatform. evaluationItems. create
aiplatform. evaluationItems. delete
aiplatform.evaluationItems.get
aiplatform. evaluationItems. list
aiplatform. evaluationItems. update
aiplatform.evaluationRuns.*
aiplatform. evaluationRuns. cancel
aiplatform. evaluationRuns. create
aiplatform. evaluationRuns. delete
aiplatform. evaluationRuns. execute
aiplatform.evaluationRuns.get
aiplatform.evaluationRuns.list
aiplatform. evaluationRuns. update
aiplatform.evaluationSets.*
aiplatform. evaluationSets. create
aiplatform. evaluationSets. delete
aiplatform.evaluationSets.get
aiplatform.evaluationSets.list
aiplatform. evaluationSets. update
aiplatform.exampleStores.*
aiplatform. exampleStores. create
aiplatform. exampleStores. delete
aiplatform.exampleStores.get
aiplatform.exampleStores.list
aiplatform. exampleStores. readExample
aiplatform. exampleStores. update
aiplatform. exampleStores. writeExample
aiplatform.executions.*
aiplatform. executions. addExecutionEvents
aiplatform.executions.create
aiplatform.executions.delete
aiplatform.executions.get
aiplatform.executions.list
aiplatform. executions. queryExecutionInputsAndOutputs
aiplatform.executions.update
aiplatform.extensions.*
aiplatform.extensions.delete
aiplatform.extensions.execute
aiplatform.extensions.get
aiplatform.extensions.import
aiplatform.extensions.list
aiplatform.extensions.update
aiplatform. featureGroups. create
aiplatform. featureGroups. delete
aiplatform.featureGroups.get
aiplatform.featureGroups.list
aiplatform. featureGroups. update
aiplatform. featureMonitorJobs.*
aiplatform. featureMonitorJobs. create
aiplatform. featureMonitorJobs. get
aiplatform. featureMonitorJobs. list
aiplatform.featureMonitors.*
aiplatform. featureMonitors. create
aiplatform. featureMonitors. delete
aiplatform.featureMonitors.get
aiplatform. featureMonitors. list
aiplatform. featureMonitors. update
aiplatform. featureOnlineStores. create
aiplatform. featureOnlineStores. delete
aiplatform. featureOnlineStores. get
aiplatform. featureOnlineStores. list
aiplatform. featureOnlineStores. update
aiplatform.featureViewSyncs.*
aiplatform. featureViewSyncs. get
aiplatform. featureViewSyncs. list
aiplatform.featureViews.create
aiplatform.featureViews.delete
aiplatform. featureViews. directWrite
aiplatform. featureViews. fetchFeatureValues
aiplatform.featureViews.get
aiplatform.featureViews.list
aiplatform. featureViews. searchNearestEntities
aiplatform.featureViews.sync
aiplatform.featureViews.update
aiplatform.features.*
aiplatform.features.create
aiplatform.features.delete
aiplatform.features.get
aiplatform.features.list
aiplatform.features.update
aiplatform. featurestores. batchReadFeatureValues
aiplatform. featurestores. create
aiplatform. featurestores. delete
aiplatform. featurestores. exportFeatures
aiplatform.featurestores.get
aiplatform. featurestores. importFeatures
aiplatform.featurestores.list
aiplatform. featurestores. readFeatures
aiplatform. featurestores. update
aiplatform. featurestores. writeFeatures
aiplatform.humanInTheLoops.*
aiplatform. humanInTheLoops. cancel
aiplatform. humanInTheLoops. create
aiplatform. humanInTheLoops. delete
aiplatform.humanInTheLoops.get
aiplatform. humanInTheLoops. list
aiplatform. humanInTheLoops. queryAnnotationStats
aiplatform. humanInTheLoops. send
aiplatform. humanInTheLoops. update
aiplatform. hyperparameterTuningJobs.*
aiplatform. hyperparameterTuningJobs. cancel
aiplatform. hyperparameterTuningJobs. create
aiplatform. hyperparameterTuningJobs. delete
aiplatform. hyperparameterTuningJobs. get
aiplatform. hyperparameterTuningJobs. list
aiplatform.indexEndpoints.*
aiplatform. indexEndpoints. create
aiplatform. indexEndpoints. delete
aiplatform. indexEndpoints. deploy
aiplatform.indexEndpoints.get
aiplatform.indexEndpoints.list
aiplatform. indexEndpoints. queryVectors
aiplatform. indexEndpoints. undeploy
aiplatform. indexEndpoints. update
aiplatform.indexes.*
aiplatform.indexes.create
aiplatform.indexes.delete
aiplatform.indexes.get
aiplatform.indexes.list
aiplatform.indexes.update
aiplatform.locations.*
aiplatform. locations. evaluateInstances
aiplatform.locations.get
aiplatform.locations.list
aiplatform.memories.*
aiplatform.memories.create
aiplatform.memories.delete
aiplatform.memories.generate
aiplatform.memories.get
aiplatform.memories.list
aiplatform.memories.retrieve
aiplatform.memories.update
aiplatform.memoryRevisions.*
aiplatform.memoryRevisions.get
aiplatform. memoryRevisions. list
aiplatform. memoryRevisions. rollback
aiplatform.metadataSchemas.*
aiplatform. metadataSchemas. create
aiplatform. metadataSchemas. delete
aiplatform.metadataSchemas.get
aiplatform. metadataSchemas. list
aiplatform.metadataStores.*
aiplatform. metadataStores. create
aiplatform. metadataStores. delete
aiplatform.metadataStores.get
aiplatform.metadataStores.list
aiplatform. modelDeploymentMonitoringJobs.*
aiplatform. modelDeploymentMonitoringJobs. create
aiplatform. modelDeploymentMonitoringJobs. delete
aiplatform. modelDeploymentMonitoringJobs. get
aiplatform. modelDeploymentMonitoringJobs. list
aiplatform. modelDeploymentMonitoringJobs. pause
aiplatform. modelDeploymentMonitoringJobs. resume
aiplatform. modelDeploymentMonitoringJobs. searchStatsAnomalies
aiplatform. modelDeploymentMonitoringJobs. update
aiplatform. modelEvaluationSlices.*
aiplatform. modelEvaluationSlices. get
aiplatform. modelEvaluationSlices. import
aiplatform. modelEvaluationSlices. list
aiplatform.modelEvaluations.*
aiplatform. modelEvaluations. exportEvaluatedDataItems
aiplatform. modelEvaluations. get
aiplatform. modelEvaluations. import
aiplatform. modelEvaluations. list
aiplatform. modelMonitoringJobs.*
aiplatform. modelMonitoringJobs. create
aiplatform. modelMonitoringJobs. delete
aiplatform. modelMonitoringJobs. get
aiplatform. modelMonitoringJobs. list
aiplatform.modelMonitors.*
aiplatform. modelMonitors. create
aiplatform. modelMonitors. delete
aiplatform.modelMonitors.get
aiplatform.modelMonitors.list
aiplatform. modelMonitors. searchModelMonitoringAlerts
aiplatform. modelMonitors. searchModelMonitoringStats
aiplatform. modelMonitors. update
aiplatform.models.*
aiplatform.models.delete
aiplatform.models.export
aiplatform.models.get
aiplatform.models.list
aiplatform.models.update
aiplatform.models.upload
aiplatform.nasJobs.*
aiplatform.nasJobs.cancel
aiplatform.nasJobs.create
aiplatform.nasJobs.delete
aiplatform.nasJobs.get
aiplatform.nasJobs.list
aiplatform.nasTrialDetails.*
aiplatform.nasTrialDetails.get
aiplatform. nasTrialDetails. list
aiplatform. notebookExecutionJobs.*
aiplatform. notebookExecutionJobs. create
aiplatform. notebookExecutionJobs. delete
aiplatform. notebookExecutionJobs. get
aiplatform. notebookExecutionJobs. list
aiplatform. notebookRuntimeTemplates. apply
aiplatform. notebookRuntimeTemplates. create
aiplatform. notebookRuntimeTemplates. delete
aiplatform. notebookRuntimeTemplates. get
aiplatform. notebookRuntimeTemplates. list
aiplatform. notebookRuntimeTemplates. update
aiplatform.notebookRuntimes.*
aiplatform. notebookRuntimes. assign
aiplatform. notebookRuntimes. delete
aiplatform. notebookRuntimes. get
aiplatform. notebookRuntimes. list
aiplatform. notebookRuntimes. start
aiplatform. notebookRuntimes. update
aiplatform. notebookRuntimes. upgrade
aiplatform.operations.list
aiplatform. persistentResources. get
aiplatform. persistentResources. list
aiplatform.pipelineJobs.*
aiplatform.pipelineJobs.cancel
aiplatform.pipelineJobs.create
aiplatform.pipelineJobs.delete
aiplatform.pipelineJobs.get
aiplatform.pipelineJobs.list
aiplatform. provisionedThroughputRevisions.*
aiplatform. provisionedThroughputRevisions. get
aiplatform. provisionedThroughputRevisions. list
aiplatform. provisionedThroughputs. get
aiplatform. provisionedThroughputs. list
aiplatform.ragCorpora.*
aiplatform.ragCorpora.create
aiplatform.ragCorpora.delete
aiplatform.ragCorpora.get
aiplatform.ragCorpora.list
aiplatform.ragCorpora.query
aiplatform.ragCorpora.update
aiplatform. ragEngineConfigs. get
aiplatform.ragFiles.*
aiplatform.ragFiles.delete
aiplatform.ragFiles.get
aiplatform.ragFiles.import
aiplatform.ragFiles.list
aiplatform.ragFiles.upload
aiplatform.reasoningEngines.*
aiplatform. reasoningEngines. create
aiplatform. reasoningEngines. delete
aiplatform. reasoningEngines. get
aiplatform. reasoningEngines. list
aiplatform. reasoningEngines. query
aiplatform. reasoningEngines. update
aiplatform. sandboxEnvironments.*
aiplatform. sandboxEnvironments. create
aiplatform. sandboxEnvironments. delete
aiplatform. sandboxEnvironments. execute
aiplatform. sandboxEnvironments. get
aiplatform. sandboxEnvironments. list
aiplatform.schedules.*
aiplatform.schedules.create
aiplatform.schedules.delete
aiplatform.schedules.get
aiplatform.schedules.list
aiplatform.schedules.update
aiplatform. semanticGovernancePolicies.*
aiplatform. semanticGovernancePolicies. create
aiplatform. semanticGovernancePolicies. delete
aiplatform. semanticGovernancePolicies. get
aiplatform. semanticGovernancePolicies. list
aiplatform. semanticGovernancePolicies. update
aiplatform. semanticGovernancePolicyEngine.*
aiplatform. semanticGovernancePolicyEngine. get
aiplatform. semanticGovernancePolicyEngine. update
aiplatform.sessionEvents.*
aiplatform. sessionEvents. append
aiplatform.sessionEvents.list
aiplatform.sessions.*
aiplatform.sessions.create
aiplatform.sessions.delete
aiplatform.sessions.get
aiplatform.sessions.list
aiplatform.sessions.run
aiplatform.sessions.update
aiplatform.specialistPools.*
aiplatform. specialistPools. create
aiplatform. specialistPools. delete
aiplatform.specialistPools.get
aiplatform. specialistPools. list
aiplatform. specialistPools. update
aiplatform.studies.*
aiplatform.studies.create
aiplatform.studies.delete
aiplatform.studies.get
aiplatform.studies.list
aiplatform.studies.update
aiplatform. tensorboardExperiments.*
aiplatform. tensorboardExperiments. create
aiplatform. tensorboardExperiments. delete
aiplatform. tensorboardExperiments. get
aiplatform. tensorboardExperiments. list
aiplatform. tensorboardExperiments. update
aiplatform. tensorboardExperiments. write
aiplatform.tensorboardRuns.*
aiplatform. tensorboardRuns. batchCreate
aiplatform. tensorboardRuns. create
aiplatform. tensorboardRuns. delete
aiplatform.tensorboardRuns.get
aiplatform. tensorboardRuns. list
aiplatform. tensorboardRuns. update
aiplatform. tensorboardRuns. write
aiplatform. tensorboardTimeSeries.*
aiplatform. tensorboardTimeSeries. batchCreate
aiplatform. tensorboardTimeSeries. batchRead
aiplatform. tensorboardTimeSeries. create
aiplatform. tensorboardTimeSeries. delete
aiplatform. tensorboardTimeSeries. get
aiplatform. tensorboardTimeSeries. list
aiplatform. tensorboardTimeSeries. read
aiplatform. tensorboardTimeSeries. update
aiplatform.tensorboards.create
aiplatform.tensorboards.delete
aiplatform.tensorboards.get
aiplatform.tensorboards.list
aiplatform.tensorboards.update
aiplatform.trainingPipelines.*
aiplatform. trainingPipelines. cancel
aiplatform. trainingPipelines. create
aiplatform. trainingPipelines. delete
aiplatform. trainingPipelines. get
aiplatform. trainingPipelines. list
aiplatform.trials.*
aiplatform.trials.create
aiplatform.trials.delete
aiplatform.trials.get
aiplatform.trials.list
aiplatform.trials.update
aiplatform.tuningJobs.*
aiplatform.tuningJobs.cancel
aiplatform.tuningJobs.create
aiplatform.tuningJobs.delete
aiplatform.tuningJobs.get
aiplatform.tuningJobs.list
aiplatform. tuningJobs. optimizePrompt
aiplatform. tuningJobs. validateReinforcementTuningReward
aiplatform. tuningJobs. vertexTune
artifactregistry. repositories. downloadArtifacts
artifactregistry. repositories. get
artifactregistry. repositories. list
artifactregistry.tags.get
artifactregistry.versions.get
bigquery.datasets.create
bigquery.datasets.get
bigquery.jobs.create
bigquery.jobs.get
bigquery.readsessions.create
bigquery.readsessions.getData
bigquery.tables.create
bigquery.tables.export
bigquery.tables.get
bigquery.tables.getData
bigquery.tables.update
bigquery.tables.updateData
cloudtrace.traces.list
iam.serviceAccounts.get
iam. serviceAccounts. getAccessToken
iam. serviceAccounts. getOpenIdToken
iam. serviceAccounts. implicitDelegation
iam.serviceAccounts.list
iam.serviceAccounts.signBlob
iam.serviceAccounts.signJwt
logging.logEntries.create
logging.logEntries.route
logging.views.access
logging.views.get
monitoring. metricDescriptors. create
monitoring. metricDescriptors. get
monitoring. metricDescriptors. list
monitoring. monitoredResourceDescriptors.*
monitoring. monitoredResourceDescriptors. get
monitoring. monitoredResourceDescriptors. list
monitoring.timeSeries.create
observability.views.access
resourcemanager.projects.get
resourcemanager.projects.list
servicemanagement. services. report
serviceusage.services.use
storage.buckets.create
storage.buckets.delete
storage.buckets.get
storage.buckets.list
storage.objects.create
storage.objects.delete
storage.objects.get
storage.objects.list
storage.objects.update
Vertex AI Extension Custom Code Service Agent
( roles/ aiplatform.extensionCustomCodeServiceAgent )
Gives Vertex AI Extension that executes custom code the permissions it needs to function.
Warning: Do not grant service agent roles to any principals except
service agents .
logging.logEntries.create
logging.logEntries.route
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
storage.objects.*
storage.objects.create
storage.objects.createContext
storage.objects.delete
storage.objects.deleteContext
storage.objects.get
storage.objects.getIamPolicy
storage.objects.list
storage.objects.move
storage. objects. overrideUnlockedRetention
storage.objects.restore
storage.objects.setIamPolicy
storage.objects.setRetention
storage.objects.update
storage.objects.updateContext
Vertex AI Extension Service Agent
( roles/ aiplatform.extensionServiceAgent )
Gives Vertex AI Extension the permissions it needs to function.
Warning: Do not grant service agent roles to any principals except
service agents .
aiplatform.endpoints.predict
aiplatform.locations.get
aiplatform.ragCorpora.query
discoveryengine. servingConfigs. search
iam. serviceAccounts. getAccessToken
iam. serviceAccounts. getOpenIdToken
logging.logEntries.create
logging.logEntries.route
serviceusage.services.use
storage.objects.get
Vertex AI Model Monitoring Service Agent
( roles/ aiplatform.modelMonitoringServiceAgent )
Gives Vertex AI Model Monitoring the permissions it needs to function.
Warning: Do not grant service agent roles to any principals except
service agents .
aiplatform. batchPredictionJobs. create
aiplatform. batchPredictionJobs. get
aiplatform. batchPredictionJobs. list
aiplatform. locations. evaluateInstances
bigquery.datasets.create
bigquery.datasets.get
bigquery.jobs.create
bigquery.jobs.get
bigquery.tables.create
bigquery.tables.export
bigquery.tables.get
bigquery.tables.getData
bigquery.tables.update
bigquery.tables.updateData
monitoring. notificationChannels. get
serviceusage.services.use
storage.buckets.create
storage.buckets.delete
storage.buckets.get
storage.buckets.list
storage.buckets.update
storage.objects.create
storage.objects.delete
storage.objects.get
storage.objects.list
storage.objects.update
Vertex AI Notebook Service Agent
( roles/ aiplatform.notebookServiceAgent )
Vertex AI Service Agent used to run Notebook managed resources in user project with restricted permissions.
Warning: Do not grant service agent roles to any principals except
service agents .
logging.logEntries.create
logging.logEntries.route
monitoring. metricDescriptors. create
monitoring. metricDescriptors. get
monitoring. metricDescriptors. list
monitoring. monitoredResourceDescriptors.*
monitoring. monitoredResourceDescriptors. get
monitoring. monitoredResourceDescriptors. list
monitoring.timeSeries.create
Vertex AI Online Prediction Service Agent
( roles/ aiplatform.onlinePredictionServiceAgent )
Gives Vertex AI Online Prediction the permissions it needs to function.
Warning: Do not grant service agent roles to any principals except
service agents .
gkehub.features.get
gkehub.features.getIamPolicy
gkehub.features.list
gkehub.fleet.get
gkehub.gateway.delete
gkehub. gateway. generateCredentials
gkehub.gateway.get
gkehub.gateway.patch
gkehub.gateway.post
gkehub.gateway.put
gkehub.locations.*
gkehub.locations.get
gkehub.locations.list
gkehub.memberships.get
gkehub. memberships. getIamPolicy
gkehub.memberships.list
serviceusage.services.get
Vertex AI RAG Data Service Agent
( roles/ aiplatform.ragServiceAgent )
Vertex AI Service Agent used by Vertex RAG to access user imported data, Vertex AI, Document AI processors, and Vector Search in the project
Warning: Do not grant service agent roles to any principals except
service agents .
aiplatform.endpoints.get
aiplatform.endpoints.predict
aiplatform.featureViews.get
aiplatform.featureViews.list
aiplatform.featureViews.sync
aiplatform.featureViews.update
aiplatform.indexEndpoints.*
aiplatform. indexEndpoints. create
aiplatform. indexEndpoints. delete
aiplatform. indexEndpoints. deploy
aiplatform.indexEndpoints.get
aiplatform.indexEndpoints.list
aiplatform. indexEndpoints. queryVectors
aiplatform. indexEndpoints. undeploy
aiplatform. indexEndpoints. update
aiplatform.indexes.*
aiplatform.indexes.create
aiplatform.indexes.delete
aiplatform.indexes.get
aiplatform.indexes.list
aiplatform.indexes.update
aiplatform.models.get
bigquery.datasets.create
bigquery.datasets.get
bigquery.jobs.create
bigquery.jobs.get
bigquery.readsessions.create
bigquery.readsessions.getData
bigquery.tables.create
bigquery.tables.createSnapshot
bigquery.tables.deleteSnapshot
bigquery.tables.export
bigquery.tables.get
bigquery.tables.getData
bigquery. tables. restoreSnapshot
bigquery.tables.update
bigquery.tables.updateData
documentai. processorVersions. processOnline
documentai.processors.get
documentai. processors. processOnline
logging.logEntries.create
logging.logEntries.route
storage.buckets.get
storage.buckets.list
storage.objects.get
storage.objects.list
vectorsearch.collections.*
vectorsearch. collections. create
vectorsearch. collections. delete
vectorsearch.collections.get
vectorsearch.collections.list
vectorsearch. collections. update
vectorsearch.dataObjects.*
vectorsearch. dataObjects. create
vectorsearch. dataObjects. delete
vectorsearch.dataObjects.get
vectorsearch. dataObjects. import
vectorsearch.dataObjects.query
vectorsearch. dataObjects. search
vectorsearch. dataObjects. update
vectorsearch.indexes.*
vectorsearch.indexes.create
vectorsearch.indexes.delete
vectorsearch.indexes.get
vectorsearch.indexes.list
vectorsearch.operations.get
vectorsearch.operations.list
Vertex AI Rapid Eval Service Agent
( roles/ aiplatform.rapidevalServiceAgent )
Vertex AI Service Agent used by GenAI Rapid Evaluation Service to access publisher model endpoints in the user project
Warning: Do not grant service agent roles to any principals except
service agents .
aiplatform.endpoints.predict
Vertex AI Reasoning Engine Service Agent
( roles/ aiplatform.reasoningEngineServiceAgent )
Gives Vertex AI Reasoning Engine the proper permissions to function. The aiplatform.reasoningEngines.create IAM permission implies read access to the GCS objects of the consumer project through this service agent.
Warning: Do not grant service agent roles to any principals except
service agents .
aiplatform.endpoints.create
aiplatform.endpoints.delete
aiplatform.endpoints.deploy
aiplatform.endpoints.explain
aiplatform.endpoints.get
aiplatform.endpoints.list
aiplatform.endpoints.predict
aiplatform.endpoints.undeploy
aiplatform.endpoints.update
aiplatform.memories.*
aiplatform.memories.create
aiplatform.memories.delete
aiplatform.memories.generate
aiplatform.memories.get
aiplatform.memories.list
aiplatform.memories.retrieve
aiplatform.memories.update
aiplatform.sessionEvents.*
aiplatform. sessionEvents. append
aiplatform.sessionEvents.list
aiplatform.sessions.create
aiplatform.sessions.delete
aiplatform.sessions.get
aiplatform.sessions.list
aiplatform.sessions.update
cloudapiregistry.*
cloudapiregistry.locations.get
cloudapiregistry. locations. list
cloudapiregistry. mcpServers. get
cloudapiregistry. mcpServers. list
cloudapiregistry.mcpTools.get
cloudapiregistry.mcpTools.list
cloudtrace.traces.patch
developerconnect. connections. get
developerconnect. gitRepositoryLinks. fetchReadToken
developerconnect. gitRepositoryLinks. get
logging.logEntries.create
logging.logEntries.route
monitoring. metricDescriptors. create
monitoring. metricDescriptors. get
monitoring. metricDescriptors. list
monitoring. monitoredResourceDescriptors.*
monitoring. monitoredResourceDescriptors. get
monitoring. monitoredResourceDescriptors. list
monitoring.timeSeries.create
resourcemanager.projects.get
serviceusage.services.use
storage.buckets.get
storage.buckets.list
storage.objects.get
storage.objects.list
telemetry.traces.write
Vertex AI Service Agent
( roles/ aiplatform.serviceAgent )
Gives Vertex AI the permissions it needs to function.
Warning: Do not grant service agent roles to any principals except
service agents .
aiplatform.agentExamples.*
aiplatform. agentExamples. create
aiplatform. agentExamples. delete
aiplatform.agentExamples.get
aiplatform.agentExamples.list
aiplatform. agentExamples. update
aiplatform.agents.*
aiplatform.agents.create
aiplatform.agents.delete
aiplatform.agents.get
aiplatform.agents.list
aiplatform.agents.update
aiplatform.annotationSpecs.*
aiplatform. annotationSpecs. create
aiplatform. annotationSpecs. delete
aiplatform.annotationSpecs.get
aiplatform. annotationSpecs. list
aiplatform. annotationSpecs. update
aiplatform.annotations.*
aiplatform.annotations.create
aiplatform.annotations.delete
aiplatform.annotations.get
aiplatform.annotations.list
aiplatform.annotations.update
aiplatform.apps.*
aiplatform.apps.create
aiplatform.apps.delete
aiplatform.apps.get
aiplatform.apps.list
aiplatform.apps.update
aiplatform.artifacts.*
aiplatform.artifacts.create
aiplatform.artifacts.delete
aiplatform.artifacts.get
aiplatform.artifacts.list
aiplatform.artifacts.update
aiplatform. batchPredictionJobs.*
aiplatform. batchPredictionJobs. cancel
aiplatform. batchPredictionJobs. create
aiplatform. batchPredictionJobs. delete
aiplatform. batchPredictionJobs. get
aiplatform. batchPredictionJobs. list
aiplatform.cacheConfigs.get
aiplatform.cachedContents.*
aiplatform. cachedContents. create
aiplatform. cachedContents. delete
aiplatform.cachedContents.get
aiplatform.cachedContents.list
aiplatform. cachedContents. update
aiplatform.consents.get
aiplatform.contexts.*
aiplatform. contexts. addContextArtifactsAndExecutions
aiplatform. contexts. addContextChildren
aiplatform.contexts.create
aiplatform.contexts.delete
aiplatform.contexts.get
aiplatform.contexts.list
aiplatform. contexts. queryContextLineageSubgraph
aiplatform.contexts.update
aiplatform.customJobs.*
aiplatform.customJobs.cancel
aiplatform.customJobs.create
aiplatform.customJobs.delete
aiplatform.customJobs.get
aiplatform.customJobs.list
aiplatform.dataItems.*
aiplatform.dataItems.create
aiplatform.dataItems.delete
aiplatform.dataItems.get
aiplatform.dataItems.list
aiplatform.dataItems.update
aiplatform.dataLabelingJobs.*
aiplatform. dataLabelingJobs. cancel
aiplatform. dataLabelingJobs. create
aiplatform. dataLabelingJobs. delete
aiplatform. dataLabelingJobs. get
aiplatform. dataLabelingJobs. list
aiplatform.datasetVersions.*
aiplatform. datasetVersions. create
aiplatform. datasetVersions. delete
aiplatform.datasetVersions.get
aiplatform. datasetVersions. list
aiplatform. datasetVersions. restore
aiplatform.datasets.*
aiplatform.datasets.create
aiplatform.datasets.delete
aiplatform.datasets.export
aiplatform.datasets.get
aiplatform.datasets.import
aiplatform.datasets.list
aiplatform.datasets.update
aiplatform. deploymentResourcePools.*
aiplatform. deploymentResourcePools. create
aiplatform. deploymentResourcePools. delete
aiplatform. deploymentResourcePools. get
aiplatform. deploymentResourcePools. list
aiplatform. deploymentResourcePools. queryDeployedModels
aiplatform. deploymentResourcePools. update
aiplatform. edgeDeploymentJobs.*
aiplatform. edgeDeploymentJobs. create
aiplatform. edgeDeploymentJobs. delete
aiplatform. edgeDeploymentJobs. get
aiplatform. edgeDeploymentJobs. list
aiplatform. edgeDeviceDebugInfo. get
aiplatform.edgeDevices.*
aiplatform.edgeDevices.create
aiplatform.edgeDevices.delete
aiplatform.edgeDevices.get
aiplatform.edgeDevices.list
aiplatform.edgeDevices.update
aiplatform.endpoints.create
aiplatform.endpoints.delete
aiplatform.endpoints.deploy
aiplatform.endpoints.explain
aiplatform.endpoints.get
aiplatform.endpoints.list
aiplatform.endpoints.predict
aiplatform.endpoints.undeploy
aiplatform.endpoints.update
aiplatform.entityTypes.create
aiplatform.entityTypes.delete
aiplatform. entityTypes. deleteFeatureValues
aiplatform. entityTypes. exportFeatureValues
aiplatform.entityTypes.get
aiplatform. entityTypes. importFeatureValues
aiplatform.entityTypes.list
aiplatform. entityTypes. readFeatureValues
aiplatform. entityTypes. streamingReadFeatureValues
aiplatform.entityTypes.update
aiplatform. entityTypes. writeFeatureValues
aiplatform. evaluationExperiments.*
aiplatform. evaluationExperiments. create
aiplatform. evaluationExperiments. delete
aiplatform. evaluationExperiments. get
aiplatform. evaluationExperiments. list
aiplatform. evaluationExperiments. update
aiplatform.evaluationItems.*
aiplatform. evaluationItems. create
aiplatform. evaluationItems. delete
aiplatform.evaluationItems.get
aiplatform. evaluationItems. list
aiplatform. evaluationItems. update
aiplatform.evaluationRuns.*
aiplatform. evaluationRuns. cancel
aiplatform. evaluationRuns. create
aiplatform. evaluationRuns. delete
aiplatform. evaluationRuns. execute
aiplatform.evaluationRuns.get
aiplatform.evaluationRuns.list
aiplatform. evaluationRuns. update
aiplatform.evaluationSets.*
aiplatform. evaluationSets. create
aiplatform. evaluationSets. delete
aiplatform.evaluationSets.get
aiplatform.evaluationSets.list
aiplatform. evaluationSets. update
aiplatform.exampleStores.*
aiplatform. exampleStores. create
aiplatform. exampleStores. delete
aiplatform.exampleStores.get
aiplatform.exampleStores.list
aiplatform. exampleStores. readExample
aiplatform. exampleStores. update
aiplatform. exampleStores. writeExample
aiplatform.executions.*
aiplatform. executions. addExecutionEvents
aiplatform.executions.create
aiplatform.executions.delete
aiplatform.executions.get
aiplatform.executions.list
aiplatform. executions. queryExecutionInputsAndOutputs
aiplatform.executions.update
aiplatform.extensions.*
aiplatform.extensions.delete
aiplatform.extensions.execute
aiplatform.extensions.get
aiplatform.extensions.import
aiplatform.extensions.list
aiplatform.extensions.update
aiplatform. featureGroups. create
aiplatform. featureGroups. delete
aiplatform.featureGroups.get
aiplatform.featureGroups.list
aiplatform. featureGroups. update
aiplatform. featureMonitorJobs.*
aiplatform. featureMonitorJobs. create
aiplatform. featureMonitorJobs. get
aiplatform. featureMonitorJobs. list
aiplatform.featureMonitors.*
aiplatform. featureMonitors. create
aiplatform. featureMonitors. delete
aiplatform.featureMonitors.get
aiplatform. featureMonitors. list
aiplatform. featureMonitors. update
aiplatform. featureOnlineStores. create
aiplatform. featureOnlineStores. delete
aiplatform. featureOnlineStores. get
aiplatform. featureOnlineStores. list
aiplatform. featureOnlineStores. update
aiplatform.featureViewSyncs.*
aiplatform. featureViewSyncs. get
aiplatform. featureViewSyncs. list
aiplatform.featureViews.create
aiplatform.featureViews.delete
aiplatform. featureViews. directWrite
aiplatform. featureViews. fetchFeatureValues
aiplatform.featureViews.get
aiplatform.featureViews.list
aiplatform. featureViews. searchNearestEntities
aiplatform.featureViews.sync
aiplatform.featureViews.update
aiplatform.features.*
aiplatform.features.create
aiplatform.features.delete
aiplatform.features.get
aiplatform.features.list
aiplatform.features.update
aiplatform. featurestores. batchReadFeatureValues
aiplatform. featurestores. create
aiplatform. featurestores. delete
aiplatform. featurestores. exportFeatures
aiplatform.featurestores.get
aiplatform. featurestores. importFeatures
aiplatform.featurestores.list
aiplatform. featurestores. readFeatures
aiplatform. featurestores. update
aiplatform. featurestores. writeFeatures
aiplatform.humanInTheLoops.*
aiplatform. humanInTheLoops. cancel
aiplatform. humanInTheLoops. create
aiplatform. humanInTheLoops. delete
aiplatform.humanInTheLoops.get
aiplatform. humanInTheLoops. list
aiplatform. humanInTheLoops. queryAnnotationStats
aiplatform. humanInTheLoops. send
aiplatform. humanInTheLoops. update
aiplatform. hyperparameterTuningJobs.*
aiplatform. hyperparameterTuningJobs. cancel
aiplatform. hyperparameterTuningJobs. create
aiplatform. hyperparameterTuningJobs. delete
aiplatform. hyperparameterTuningJobs. get
aiplatform. hyperparameterTuningJobs. list
aiplatform.indexEndpoints.*
aiplatform. indexEndpoints. create
aiplatform. indexEndpoints. delete
aiplatform. indexEndpoints. deploy
aiplatform.indexEndpoints.get
aiplatform.indexEndpoints.list
aiplatform. indexEndpoints. queryVectors
aiplatform. indexEndpoints. undeploy
aiplatform. indexEndpoints. update
aiplatform.indexes.*
aiplatform.indexes.create
aiplatform.indexes.delete
aiplatform.indexes.get
aiplatform.indexes.list
aiplatform.indexes.update
aiplatform.locations.*
aiplatform. locations. evaluateInstances
aiplatform.locations.get
aiplatform.locations.list
aiplatform.memories.*
aiplatform.memories.create
aiplatform.memories.delete
aiplatform.memories.generate
aiplatform.memories.get
aiplatform.memories.list
aiplatform.memories.retrieve
aiplatform.memories.update
aiplatform.memoryRevisions.*
aiplatform.memoryRevisions.get
aiplatform. memoryRevisions. list
aiplatform. memoryRevisions. rollback
aiplatform.metadataSchemas.*
aiplatform. metadataSchemas. create
aiplatform. metadataSchemas. delete
aiplatform.metadataSchemas.get
aiplatform. metadataSchemas. list
aiplatform.metadataStores.*
aiplatform. metadataStores. create
aiplatform. metadataStores. delete
aiplatform.metadataStores.get
aiplatform.metadataStores.list
aiplatform. modelDeploymentMonitoringJobs.*
aiplatform. modelDeploymentMonitoringJobs. create
aiplatform. modelDeploymentMonitoringJobs. delete
aiplatform. modelDeploymentMonitoringJobs. get
aiplatform. modelDeploymentMonitoringJobs. list
aiplatform. modelDeploymentMonitoringJobs. pause
aiplatform. modelDeploymentMonitoringJobs. resume
aiplatform. modelDeploymentMonitoringJobs. searchStatsAnomalies
aiplatform. modelDeploymentMonitoringJobs. update
aiplatform. modelEvaluationSlices.*
aiplatform. modelEvaluationSlices. get
aiplatform. modelEvaluationSlices. import
aiplatform. modelEvaluationSlices. list
aiplatform.modelEvaluations.*
aiplatform. modelEvaluations. exportEvaluatedDataItems
aiplatform. modelEvaluations. get
aiplatform. modelEvaluations. import
aiplatform. modelEvaluations. list
aiplatform. modelMonitoringJobs.*
aiplatform. modelMonitoringJobs. create
aiplatform. modelMonitoringJobs. delete
aiplatform. modelMonitoringJobs. get
aiplatform. modelMonitoringJobs. list
aiplatform.modelMonitors.*
aiplatform. modelMonitors. create
aiplatform. modelMonitors. delete
aiplatform.modelMonitors.get
aiplatform.modelMonitors.list
aiplatform. modelMonitors. searchModelMonitoringAlerts
aiplatform. modelMonitors. searchModelMonitoringStats
aiplatform. modelMonitors. update
aiplatform.models.*
aiplatform.models.delete
aiplatform.models.export
aiplatform.models.get
aiplatform.models.list
aiplatform.models.update
aiplatform.models.upload
aiplatform.nasJobs.*
aiplatform.nasJobs.cancel
aiplatform.nasJobs.create
aiplatform.nasJobs.delete
aiplatform.nasJobs.get
aiplatform.nasJobs.list
aiplatform.nasTrialDetails.*
aiplatform.nasTrialDetails.get
aiplatform. nasTrialDetails. list
aiplatform. notebookExecutionJobs.*
aiplatform. notebookExecutionJobs. create
aiplatform. notebookExecutionJobs. delete
aiplatform. notebookExecutionJobs. get
aiplatform. notebookExecutionJobs. list
aiplatform. notebookRuntimeTemplates. apply
aiplatform. notebookRuntimeTemplates. create
aiplatform. notebookRuntimeTemplates. delete
aiplatform. notebookRuntimeTemplates. get
aiplatform. notebookRuntimeTemplates. list
aiplatform. notebookRuntimeTemplates. update
aiplatform.notebookRuntimes.*
aiplatform. notebookRuntimes. assign
aiplatform. notebookRuntimes. delete
aiplatform. notebookRuntimes. get
aiplatform. notebookRuntimes. list
aiplatform. notebookRuntimes. start
aiplatform. notebookRuntimes. update
aiplatform. notebookRuntimes. upgrade
aiplatform.operations.list
aiplatform. persistentResources. get
aiplatform. persistentResources. list
aiplatform.pipelineJobs.*
aiplatform.pipelineJobs.cancel
aiplatform.pipelineJobs.create
aiplatform.pipelineJobs.delete
aiplatform.pipelineJobs.get
aiplatform.pipelineJobs.list
aiplatform. provisionedThroughputRevisions.*
aiplatform. provisionedThroughputRevisions. get
aiplatform. provisionedThroughputRevisions. list
aiplatform. provisionedThroughputs. get
aiplatform. provisionedThroughputs. list
aiplatform.ragCorpora.*
aiplatform.ragCorpora.create
aiplatform.ragCorpora.delete
aiplatform.ragCorpora.get
aiplatform.ragCorpora.list
aiplatform.ragCorpora.query
aiplatform.ragCorpora.update
aiplatform. ragEngineConfigs. get
aiplatform.ragFiles.*
aiplatform.ragFiles.delete
aiplatform.ragFiles.get
aiplatform.ragFiles.import
aiplatform.ragFiles.list
aiplatform.ragFiles.upload
aiplatform.reasoningEngines.*
aiplatform. reasoningEngines. create
aiplatform. reasoningEngines. delete
aiplatform. reasoningEngines. get
aiplatform. reasoningEngines. list
aiplatform. reasoningEngines. query
aiplatform. reasoningEngines. update
aiplatform. sandboxEnvironments.*
aiplatform. sandboxEnvironments. create
aiplatform. sandboxEnvironments. delete
aiplatform. sandboxEnvironments. execute
aiplatform. sandboxEnvironments. get
aiplatform. sandboxEnvironments. list
aiplatform.schedules.*
aiplatform.schedules.create
aiplatform.schedules.delete
aiplatform.schedules.get
aiplatform.schedules.list
aiplatform.schedules.update
aiplatform. semanticGovernancePolicies.*
aiplatform. semanticGovernancePolicies. create
aiplatform. semanticGovernancePolicies. delete
aiplatform. semanticGovernancePolicies. get
aiplatform. semanticGovernancePolicies. list
aiplatform. semanticGovernancePolicies. update
aiplatform. semanticGovernancePolicyEngine.*
aiplatform. semanticGovernancePolicyEngine. get
aiplatform. semanticGovernancePolicyEngine. update
aiplatform.sessionEvents.*
aiplatform. sessionEvents. append
aiplatform.sessionEvents.list
aiplatform.sessions.*
aiplatform.sessions.create
aiplatform.sessions.delete
aiplatform.sessions.get
aiplatform.sessions.list
aiplatform.sessions.run
aiplatform.sessions.update
aiplatform.specialistPools.*
aiplatform. specialistPools. create
aiplatform. specialistPools. delete
aiplatform.specialistPools.get
aiplatform. specialistPools. list
aiplatform. specialistPools. update
aiplatform.studies.*
aiplatform.studies.create
aiplatform.studies.delete
aiplatform.studies.get
aiplatform.studies.list
aiplatform.studies.update
aiplatform. tensorboardExperiments.*
aiplatform. tensorboardExperiments. create
aiplatform. tensorboardExperiments. delete
aiplatform. tensorboardExperiments. get
aiplatform. tensorboardExperiments. list
aiplatform. tensorboardExperiments. update
aiplatform. tensorboardExperiments. write
aiplatform.tensorboardRuns.*
aiplatform. tensorboardRuns. batchCreate
aiplatform. tensorboardRuns. create
aiplatform. tensorboardRuns. delete
aiplatform.tensorboardRuns.get
aiplatform. tensorboardRuns. list
aiplatform. tensorboardRuns. update
aiplatform. tensorboardRuns. write
aiplatform. tensorboardTimeSeries.*
aiplatform. tensorboardTimeSeries. batchCreate
aiplatform. tensorboardTimeSeries. batchRead
aiplatform. tensorboardTimeSeries. create
aiplatform. tensorboardTimeSeries. delete
aiplatform. tensorboardTimeSeries. get
aiplatform. tensorboardTimeSeries. list
aiplatform. tensorboardTimeSeries. read
aiplatform. tensorboardTimeSeries. update
aiplatform.tensorboards.create
aiplatform.tensorboards.delete
aiplatform.tensorboards.get
aiplatform.tensorboards.list
aiplatform.tensorboards.update
aiplatform.trainingPipelines.*
aiplatform. trainingPipelines. cancel
aiplatform. trainingPipelines. create
aiplatform. trainingPipelines. delete
aiplatform. trainingPipelines. get
aiplatform. trainingPipelines. list
aiplatform.trials.*
aiplatform.trials.create
aiplatform.trials.delete
aiplatform.trials.get
aiplatform.trials.list
aiplatform.trials.update
aiplatform.tuningJobs.*
aiplatform.tuningJobs.cancel
aiplatform.tuningJobs.create
aiplatform.tuningJobs.delete
aiplatform.tuningJobs.get
aiplatform.tuningJobs.list
aiplatform. tuningJobs. optimizePrompt
aiplatform. tuningJobs. validateReinforcementTuningReward
aiplatform. tuningJobs. vertexTune
artifactregistry. repositories. create
artifactregistry. repositories. downloadArtifacts
artifactregistry. repositories. get
artifactregistry. repositories. list
artifactregistry. repositories. uploadArtifacts
artifactregistry.tags.get
artifactregistry.versions.get
automl.datasets.export
automl.datasets.get
automl.datasets.list
automl.modelEvaluations.list
automl.models.get
automl.models.list
automl.operations.get
automl.tableSpecs.get
bigquery.datasets.create
bigquery.datasets.get
bigquery.jobs.create
bigquery.jobs.get
bigquery.models.create
bigquery.models.export
bigquery.models.getData
bigquery.objectRefs.read
bigquery.readsessions.create
bigquery.readsessions.getData
bigquery.tables.create
bigquery.tables.export
bigquery.tables.get
bigquery.tables.getData
bigquery.tables.update
bigquery.tables.updateData
bigtable.tables.get
bigtable.tables.list
bigtable.tables.readRows
binaryauthorization. policy. evaluatePolicy
cloudtrace.traces.get
cloudtrace.traces.list
compute.addresses.get
compute.addresses.list
compute.addresses.use
compute.addresses.useInternal
compute.disks.create
compute.disks.createSnapshot
compute.disks.createTagBinding
compute.disks.delete
compute.disks.get
compute.disks.setLabels
compute.disks.use
compute.disks.useReadOnly
compute.globalOperations.get
compute.instances.attachDisk
compute.instances.create
compute. instances. createTagBinding
compute.instances.delete
compute.instances.detachDisk
compute.instances.get
compute. instances. getGuestAttributes
compute.instances.list
compute.instances.setLabels
compute.instances.setMetadata
compute. instances. setServiceAccount
compute.instances.setTags
compute.instances.start
compute.instances.stop
compute.instances.update
compute.instances.useReadOnly
compute.machineTypes.get
compute.networks.get
compute.networks.use
compute.networks.useExternalIp
compute.snapshots.create
compute.snapshots.delete
compute.snapshots.useReadOnly
compute.subnetworks.get
compute.subnetworks.list
compute.subnetworks.use
compute. subnetworks. useExternalIp
compute.zoneOperations.get
dataflow.jobs.*
dataflow.jobs.cancel
dataflow.jobs.create
dataflow.jobs.get
dataflow.jobs.list
dataflow.jobs.snapshot
dataflow.jobs.updateContents
dataflow.messages.list
dataflow.metrics.get
dataflow.snapshots.*
dataflow.snapshots.delete
dataflow.snapshots.get
dataflow.snapshots.list
datalabeling. annotateddatasets. get
datalabeling.datasets.export
datalabeling.datasets.get
datalabeling.datasets.list
datalabeling.operations.get
hypercomputecluster.clusters.*
hypercomputecluster. clusters. create
hypercomputecluster. clusters. delete
hypercomputecluster. clusters. get
hypercomputecluster. clusters. list
hypercomputecluster. clusters. update
hypercomputecluster. locations.*
hypercomputecluster. locations. get
hypercomputecluster. locations. list
hypercomputecluster. operations.*
hypercomputecluster. operations. cancel
hypercomputecluster. operations. delete
hypercomputecluster. operations. get
hypercomputecluster. operations. list
iam.serviceAccounts.actAs
iam. serviceAccounts. getAccessToken
iam. serviceAccounts. getOpenIdToken
logging.logEntries.create
logging.logEntries.route
logging.views.access
logging.views.get
ml.models.list
ml.operations.get
ml.versions.get
ml.versions.list
monitoring. metricDescriptors. create
monitoring. metricDescriptors. get
monitoring. metricDescriptors. list
monitoring. monitoredResourceDescriptors.*
monitoring. monitoredResourceDescriptors. get
monitoring. monitoredResourceDescriptors. list
monitoring. notificationChannels. get
monitoring.timeSeries.create
notebooks.instances.create
notebooks.instances.delete
notebooks.instances.get
resourcemanager.projects.get
resourcemanager.projects.list
run.executions.delete
run.executions.get
run.jobs.create
run.jobs.delete
run.jobs.get
run.jobs.run
run.jobs.update
run.operations.delete
run.operations.get
run.routes.invoke
run.services.create
run.services.delete
run.services.get
servicemanagement. services. report
serviceusage.services.list
serviceusage.services.use
storage.buckets.create
storage.buckets.delete
storage.buckets.get
storage.buckets.list
storage.objects.create
storage.objects.delete
storage.objects.get
storage.objects.list
storage.objects.update
Vertex AI Telemetry Service Agent
( roles/ aiplatform.telemetryServiceAgent )
Allows Vertex AI Telemetry Service Agent to access telemetry data.
Warning: Do not grant service agent roles to any principals except
service agents .
logging.logEntries.create
logging.logEntries.list
logging.logEntries.route
monitoring. metricDescriptors. create
monitoring. metricDescriptors. get
monitoring. metricDescriptors. list
monitoring. monitoredResourceDescriptors.*
monitoring. monitoredResourceDescriptors. get
monitoring. monitoredResourceDescriptors. list
monitoring.timeSeries.*
monitoring.timeSeries.create
monitoring.timeSeries.list
servicemanagement. services. report
Vertex AI Tuning Service Agent
( roles/ aiplatform.tuningServiceAgent )
Vertex AI Service Agent used for tuning in user project.
Warning: Do not grant service agent roles to any principals except
service agents .
aiplatform.artifacts.*
aiplatform.artifacts.create
aiplatform.artifacts.delete
aiplatform.artifacts.get
aiplatform.artifacts.list
aiplatform.artifacts.update
aiplatform. batchPredictionJobs. cancel
aiplatform. batchPredictionJobs. create
aiplatform. batchPredictionJobs. get
aiplatform.contexts.*
aiplatform. contexts. addContextArtifactsAndExecutions
aiplatform. contexts. addContextChildren
aiplatform.contexts.create
aiplatform.contexts.delete
aiplatform.contexts.get
aiplatform.contexts.list
aiplatform. contexts. queryContextLineageSubgraph
aiplatform.contexts.update
aiplatform.endpoints.create
aiplatform.endpoints.deploy
aiplatform.endpoints.get
aiplatform.endpoints.predict
aiplatform. evaluationRuns. create
aiplatform.evaluationRuns.get
aiplatform. locations. evaluateInstances
aiplatform.locations.get
aiplatform.metadataSchemas.*
aiplatform. metadataSchemas. create
aiplatform. metadataSchemas. delete
aiplatform.metadataSchemas.get
aiplatform. metadataSchemas. list
aiplatform.metadataStores.*
aiplatform. metadataStores. create
aiplatform. metadataStores. delete
aiplatform.metadataStores.get
aiplatform.metadataStores.list
aiplatform.models.get
aiplatform.models.update
aiplatform.models.upload
aiplatform.operations.list
aiplatform.pipelineJobs.get
aiplatform.pipelineJobs.list
aiplatform. tensorboardExperiments.*
aiplatform. tensorboardExperiments. create
aiplatform. tensorboardExperiments. delete
aiplatform. tensorboardExperiments. get
aiplatform. tensorboardExperiments. list
aiplatform. tensorboardExperiments. update
aiplatform. tensorboardExperiments. write
aiplatform.tensorboardRuns.*
aiplatform. tensorboardRuns. batchCreate
aiplatform. tensorboardRuns. create
aiplatform. tensorboardRuns. delete
aiplatform.tensorboardRuns.get
aiplatform. tensorboardRuns. list
aiplatform. tensorboardRuns. update
aiplatform. tensorboardRuns. write
aiplatform. tensorboardTimeSeries.*
aiplatform. tensorboardTimeSeries. batchCreate
aiplatform. tensorboardTimeSeries. batchRead
aiplatform. tensorboardTimeSeries. create
aiplatform. tensorboardTimeSeries. delete
aiplatform. tensorboardTimeSeries. get
aiplatform. tensorboardTimeSeries. list
aiplatform. tensorboardTimeSeries. read
aiplatform. tensorboardTimeSeries. update
aiplatform.tensorboards.create
aiplatform.tensorboards.delete
aiplatform.tensorboards.get
aiplatform.tensorboards.list
aiplatform.tensorboards.update
aiplatform.tuningJobs.cancel
aiplatform.tuningJobs.create
aiplatform.tuningJobs.delete
aiplatform.tuningJobs.get
aiplatform.tuningJobs.list
aiplatform. tuningJobs. vertexTune
bigquery.datasets.create
bigquery.datasets.get
bigquery.jobs.create
bigquery.jobs.get
bigquery.tables.create
bigquery.tables.delete
bigquery.tables.get
bigquery.tables.getData
bigquery.tables.list
bigquery.tables.update
bigquery.tables.updateData
resourcemanager.projects.get
serviceusage.services.use
storage.buckets.create
storage.buckets.get
storage.buckets.getIamPolicy
storage.buckets.list
storage.buckets.update
storage.objects.create
storage.objects.delete
storage.objects.get
storage.objects.getIamPolicy
storage.objects.list
storage.objects.update
Basic roles
The older Google Cloud
basic roles
are common to all Google Cloud services. These roles are Owner, Editor,
and Viewer.
The basic roles provide permissions across Google Cloud, not just for
Colab Enterprise. For this reason, you should
use Colab Enterprise roles whenever possible.
Custom roles
If the predefined IAM roles for Colab Enterprise
don't meet your needs, you can define custom roles. Custom roles enable you
to choose a specific set of permissions, create your own role with
those permissions, and grant the role to users in your organization.
For more information, see Understanding
IAM custom roles .
Service agents for Colab Enterprise
Colab Enterprise automatically creates and uses
service agents to access resources on
your behalf. When a service agent is created, the service agent is
granted a predefined role for your project.
Note: Don't remove default roles and permissions of default service accounts
unless you are sure that they are unnecessary.
The following table lists Colab Enterprise service agents,
their email addresses, and their respective roles:
Name
Used for
Email address
Role
Vertex AI Service Agent
Vertex AI capabilities
service- PROJECT_NUMBER @gcp-sa-aiplatform.iam.gserviceaccount.com
roles/aiplatform.serviceAgent
Vertex AI Colab Service Agent
Gives Colab Enterprise the proper permissions to function
service- PROJECT_NUMBER @gcp-sa-vertex-nb.iam.gserviceaccount.com
roles/aiplatform.colabServiceAgent
Vertex AI Notebook Service Agent
Run notebook-managed resources in the user project with restricted permissions
service- PROJECT_NUMBER @gcp-sa-aiplatform-vm.iam.gserviceaccount.com
roles/aiplatform.notebookServiceAgent
If you remove the default roles of the Colab Enterprise service agents,
Colab Enterprise can automatically reassign those roles to ensure
uninterrupted service functionality. To turn off the
Colab Enterprise service, you must turn off the relevant APIs
instead of removing roles.
What's next
Grant a principal access to
a Colab Enterprise notebook.
Learn more about IAM .
Learn how to create and manage custom IAM
roles .
Learn more about Service agents
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
