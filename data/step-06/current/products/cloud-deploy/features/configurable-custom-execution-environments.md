---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:23.494Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Configurable custom execution environments"
feature_slug: "configurable-custom-execution-environments"
latest_feature_date: "2021-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/custom-targets"
  - "https://docs.cloud.google.com/deploy/docs/config-files"
  - "https://docs.cloud.google.com/deploy/docs/custom-org-policy"
  - "https://docs.cloud.google.com/deploy/docs/create-custom-target"
keywords:
  - "configurable"
  - "custom"
  - "execution"
  - "environments"
  - "deploy"
  - "now"
  - "supports"
  - "configuring"
---

# Configurable custom execution environments

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Cloud Deploy now supports configuring custom execution environments for render and deploy activity, including custom pools, service accounts, and Cloud Storage buckets.

## Extended Definition

Cloud Deploy now supports configuring custom execution environments for render and deploy activity, including custom pools, service accounts, and Cloud Storage buckets.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/custom-targets](https://docs.cloud.google.com/deploy/docs/custom-targets)
- [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- [https://docs.cloud.google.com/deploy/docs/custom-org-policy](https://docs.cloud.google.com/deploy/docs/custom-org-policy)
- [https://docs.cloud.google.com/deploy/docs/create-custom-target](https://docs.cloud.google.com/deploy/docs/create-custom-target)

## Supporting Pages

### About custom targets \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/custom-targets](https://docs.cloud.google.com/deploy/docs/custom-targets)
- Source ID: `site-docs-root-2`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- A custom target is a target that represents an arbitrary output environment other than a runtime that Cloud Deploy supports.
- Cloud Deploy supports canary deployments as long as the custom renderer and deployer support the canary feature.
- Executing the tasks Your custom render and deploy tasks run in the Cloud Deploy execution environment .
- Learn about Cloud Deploy execution environments .

### Configuration schema reference \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- You can't specify usages.VERIFY , usages.PREDEPLOY , usages.POSTDEPLOY , or usages.ANALYSIS unless RENDER and DEPLOY are specified in the same or separate custom execution environments. workerPool Configuration for the worker pool to use.
- See also: Custom target type definitions For GKE targets The following YAML shows how to configure a target that deploys to a GKE cluster : apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : annotations : labels : description : deployParameters : multiTarget : targetIds : [] requireApproval : gke : cluster : projects /[ project name ]/ locations /[ location ]/ clusters /[ cluster name ] dnsEndpoint : internalIp : proxyUrl : associatedEntities : [ KEY ] : gkeClusters : - cluster : projects /[ project name ]/ locations /[ location ]/ clusters /[ cluster name ] dnsEndpoint : [ true false ] internalIp : [ true false ] proxyUrl : executionConfigs : - usages : - [ RENDER PREDEPLOY DEPLOY VERIFY POSTDEPLOY ANALYSIS ] workerPool : serviceAccount : artifactStorage : executionTimeout : verbose : metadata.name The name of this target.
- See documentation in this article for more details.) executionConfigs : - usages : - [ RENDER PREDEPLOY DEPLOY VERIFY POSTDEPLOY ANALYSIS ] workerPool : serviceAccount : artifactStorage : executionTimeout : verbose : --- Custom target type config apiVersion : deploy.cloud.google.com/v1 kind : CustomTargetType metadata : name : annotations : labels : description : tasks : render : deploy : --- Automation config apiVersion : deploy.cloud.google.com/v1 kind : Automation metadata : name : labels : annotations : description : suspended : serviceAccount : selector : targets : - id : [ TARGET ID ] labels : [ LABEL KEY ] :[LABEL VALUE] rules : - [ RULE TYPE ]: id : [ RULE-SPECIFIC CONFIG ] This YAML has three main components: The main delivery pipeline and progression The configuration file can include any number of pipeline definitions.
- To indicate that a custom execution environment is to be used for predeploy hook, render, deploy, postdeploy hook, and verification, you would configure it as follows: usages : - RENDER - PREDEPLOY - DEPLOY - VERIFY - POSTDEPLOY - ANALYSIS If verification is enabled on the pipeline stage , and you don't specify VERIFY in a usages stanza, Cloud Deploy uses the default execution environment for verification.

### Use custom organization policies \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/custom-org-policy](https://docs.cloud.google.com/deploy/docs/custom-org-policy)
- Source ID: `site-docs-root-2`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Resource Field clouddeploy.googleapis.com/Automation resource.annotations resource.description resource.rules.advanceRolloutRule.id resource.rules.advanceRolloutRule.sourcePhases resource.rules.advanceRolloutRule.wait resource.rules.promoteReleaseRule.destinationPhase resource.rules.promoteReleaseRule.destinationTargetId resource.rules.promoteReleaseRule.id resource.rules.promoteReleaseRule.wait resource.rules.repairRolloutRule.id resource.rules.repairRolloutRule.jobs resource.rules.repairRolloutRule.phases resource.rules.repairRolloutRule.repairPhases.retry.attempts resource.rules.repairRolloutRule.repairPhases.retry.backoffMode resource.rules.repairRolloutRule.repairPhases.retry.wait resource.rules.repairRolloutRule.repairPhases.rollback.destinationPhase resource.rules.repairRolloutRule.repairPhases.rollback.disableRollbackIfRolloutPending resource.rules.timedPromoteReleaseRule.destinationPhase resource.rules.timedPromoteReleaseRule.destinationTargetId resource.rules.timedPromoteReleaseRule.id resource.rules.timedPromoteReleaseRule.schedule resource.rules.timedPromoteReleaseRule.timeZone resource.selector.targets.id resource.serviceAccount resource.suspended clouddeploy.googleapis.com/CustomTargetType resource.annotations resource.customActions.deployAction resource.customActions.includeSkaffoldModules.configs resource.customActions.includeSkaffoldModules.git.path resource.customActions.includeSkaffoldModules.git.ref resource.customActions.includeSkaffoldModules.git.repo resource.customActions.includeSkaffoldModules.googleCloudBuildRepo.path resource.customActions.includeSkaffoldModules.googleCloudBuildRepo.ref resource.customActions.includeSkaffoldModules.googleCloudBuildRepo.repository resource.customActions.includeSkaffoldModules.googleCloudStorage.path resource.customActions.includeSkaffoldModules.googleCloudStorage.source resource.customActions.renderAction resource.description resource.name clouddeploy.googleapis.com/DeliveryPipeline resource.annotations resource.description resource.name resource.serialPipeline.stages.deployParameters.matchTargetLabels resource.serialPipeline.stages.deployParameters.values resource.serialPipeline.stages.profiles resource.serialPipeline.stages.strategy.canary.canaryDeployment.percentages resource.serialPipeline.stages.strategy.canary.canaryDeployment.postdeploy.actions resource.serialPipeline.stages.strategy.canary.canaryDeployment.predeploy.actions resource.serialPipeline.stages.strategy.canary.canaryDeployment.verify resource.serialPipeline.stages.strategy.canary.customCanaryDeployment.phaseConfigs.percentage resource.serialPipeline.stages.strategy.canary.customCanaryDeployment.phaseConfigs.phaseId resource.serialPipeline.stages.strategy.canary.customCanaryDeployment.phaseConfigs.postdeploy.actions resource.serialPipeline.stages.strategy.canary.customCanaryDeployment.phaseConfigs.predeploy.actions resource.serialPipeline.stages.strategy.canary.customCanaryDeployment.phaseConfigs.profiles resource.serialPipeline.stages.strategy.canary.customCanaryDeployment.phaseConfigs.verify resource.serialPipeline.stages.strategy.canary.runtimeConfig.cloudRun.automaticTrafficControl resource.serialPipeline.stages.strategy.canary.runtimeConfig.cloudRun.canaryRevisionTags resource.serialPipeline.stages.strategy.canary.runtimeConfig.cloudRun.priorRevisionTags resource.serialPipeline.stages.strategy.canary.runtimeConfig.cloudRun.stableRevisionTags resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.deployment resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.httpRoute resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.podSelectorLabel resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.routeDestinations.destinationIds resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.routeDestinations.propagateService resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.routeUpdateWaitTime resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.service resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.stableCutbackDuration resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.serviceNetworking.deployment resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.serviceNetworking.disablePodOverprovisioning resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.serviceNetworking.podSelectorLabel resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.serviceNetworking.service resource.serialPipeline.stages.strategy.standard.postdeploy.actions resource.serialPipeline.stages.strategy.standard.predeploy.actions resource.serialPipeline.stages.strategy.standard.verify resource.serialPipeline.stages.targetId resource.suspended clouddeploy.googleapis.com/DeployPolicy resource.annotations resource.description resource.rules.rolloutRestriction.actions resource.rules.rolloutRestriction.id resource.rules.rolloutRestriction.invokers resource.rules.rolloutRestriction.timeWindows.oneTimeWindows.endDate resource.rules.rolloutRestriction.timeWindows.oneTimeWindows.endTime resource.rules.rolloutRestriction.timeWindows.oneTimeWindows.startDate resource.rules.rolloutRestriction.timeWindows.oneTimeWindows.startTime resource.rules.rolloutRestriction.timeWindows.timeZone resource.rules.rolloutRestriction.timeWindows.weeklyWindows.daysOfWeek resource.rules.rolloutRestriction.timeWindows.weeklyWindows.endTime resource.rules.rolloutRestriction.timeWindows.weeklyWindows.startTime resource.selectors.deliveryPipeline.id resource.selectors.target.id resource.suspended clouddeploy.googleapis.com/Release resource.annotations resource.buildArtifacts.image resource.buildArtifacts.tag resource.deployParameters resource.description resource.name resource.skaffoldConfigPath resource.skaffoldConfigUri resource.skaffoldVersion clouddeploy.googleapis.com/Rollout resource.annotations resource.description resource.name resource.targetId clouddeploy.googleapis.com/Target resource.annotations resource.anthosCluster.membership resource.associatedEntities[ ].anthosClusters.membership resource.associatedEntities[ ].gkeClusters.cluster resource.associatedEntities[ ].gkeClusters.dnsEndpoint resource.associatedEntities[ ].gkeClusters.internalIp resource.associatedEntities[ ].gkeClusters.proxyUrl resource.customTarget.customTargetType resource.deployParameters resource.description resource.executionConfigs.artifactStorage resource.executionConfigs.defaultPool.artifactStorage resource.executionConfigs.defaultPool.serviceAccount resource.executionConfigs.executionTimeout resource.executionConfigs.privatePool.artifactStorage resource.executionConfigs.privatePool.serviceAccount resource.executionConfigs.privatePool.workerPool resource.executionConfigs.serviceAccount resource.executionConfigs.usages resource.executionConfigs.verbose resource.executionConfigs.workerPool resource.gke.cluster resource.gke.dnsEndpoint resource.gke.internalIp resource.gke.proxyUrl resource.multiTarget.targetIds resource.name resource.requireApproval resource.run.location What's next Learn more about Organization Policy Service .
- Before you begin, you must know the following: Your organization ID A project ID Create the constraint Save the following file as constraint-enable-gke-targets.yaml : name : organizations/ ORGANIZATION ID /customConstraints/custom.enableGkeTargets resourceTypes : - clouddeploy.googleapis.com/Target methodTypes : - CREATE - UPDATE condition : "has(resource.gke)" actionType : ALLOW displayName : Enable the creation and update of GKE targets description : All new targets must be GKE clusters.
- Deny the creation of automations with any promotion rule name : organizations/ ORGANIZATION ID /customConstraints/custom.denyPromoteReleaseAutomationRules resourceTypes : - clouddeploy.googleapis.com/Automation methodTypes : - CREATE condition : "resource.rules.exists(r, has(r.promoteReleaseRule) has(r.timedPromoteReleaseRule))" actionType : DENY displayName : Deny promote release or timed promote release automation rules. description : All automation rules must be of type advance rollout or repair rollout.
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: clouddeploy.googleapis.com/Automation clouddeploy.googleapis.com/CustomTargetType clouddeploy.googleapis.com/DeliveryPipeline clouddeploy.googleapis.com/DeployPolicy clouddeploy.googleapis.com/Release clouddeploy.googleapis.com/Rollout clouddeploy.googleapis.com/Target To learn more about Organization Policy, see Custom organization policies .

### Create a custom target \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/create-custom-target](https://docs.cloud.google.com/deploy/docs/create-custom-target)
- Source ID: `site-docs-root-2`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a release With your custom target type fully defined, and a target created to use that type, you can now create a release, in the normal way: gcloud deploy releases create [ RELEASE NAME ] \ --project =[ PROJECT NAME ] \ --region =[ REGION ] \ --delivery-pipeline =[ PIPELINE NAME ] Upon release creation your custom render is executed for each target in your delivery pipeline, including processing deploy parameters configured on the release, targets, or the delivery pipeline.
- With the CustomTargetType now created as a Cloud Deploy resource, you can now use it in a Target definition to create your custom target.
- The CustomTargetType definition is as follows: apiVersion : deploy.cloud.google.com/v1 kind : CustomTargetType metadata : name : [ CUSTOM TARGET TYPE NAME ] annotations : labels : description : tasks : render : [ RENDER TASK ] deploy : [ DEPLOY TASK ] Where CUSTOM TARGET TYPE NAME Is an arbitrary name you give to this custom target type definition.
- Register your custom target type After you've configured the CustomTargetType , run the gcloud deploy apply command to register the CustomTargetType resource in a Google Cloud project: gcloud deploy apply --file =[ FILE ] --project =[ PROJECT ] --region =[ REGION ] Where: FILE is the name of the file in which you've defined this custom target type.

