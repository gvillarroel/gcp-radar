---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:42.665Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Verbose execution logging"
feature_slug: "verbose-execution-logging"
latest_feature_date: "2024-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/execution-environment"
  - "https://docs.cloud.google.com/deploy/docs/custom-org-policy"
  - "https://docs.cloud.google.com/deploy/docs/config-files"
keywords:
  - "verbose"
  - "execution"
  - "logging"
  - "lets"
  - "targets"
  - "run"
  - "skaffold"
  - "gcloud"
---

# Verbose execution logging

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Verbose execution logging lets targets run Skaffold, gcloud, and kubectl with debug-level or equivalent logging.

## Extended Definition

Verbose execution logging lets targets run Skaffold, gcloud, and kubectl with debug-level or equivalent logging.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/execution-environment](https://docs.cloud.google.com/deploy/docs/execution-environment)
- [https://docs.cloud.google.com/deploy/docs/custom-org-policy](https://docs.cloud.google.com/deploy/docs/custom-org-policy)
- [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)

## Supporting Pages

### Using Cloud Deploy execution environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/execution-environment](https://docs.cloud.google.com/deploy/docs/execution-environment)
- Source ID: `site-docs-reference-2`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Changing the log level for Skaffold, gcloud CLI, and kubectl To change the log level for Skaffold, gcloud CLI, and kubectl, from their respective defaults to debug (or the equivalent), set verbose to true in the execution configs.
- Here's an example: executionConfigs : - usages : - [ RENDER PREDEPLOY DEPLOY VERIFY POSTDEPLOY ] workerPool : serviceAccount : artifactStorage : executionTimeout : verbose : true Using Cloud Deploy in a VPC Service Controls perimeter Cloud Deploy supports VPC Service Controls .
- Default verbosity for Skaffold, gcloud CLI, and kubectl By default, log levels for these tools are set to their respective defaults, typically warn or the equivalent.
- Cloud Deploy lets you configure targets with private pools in other regions.

### Configuration schema reference \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- See also: Custom target type definitions For GKE targets The following YAML shows how to configure a target that deploys to a GKE cluster : apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : annotations : labels : description : deployParameters : multiTarget : targetIds : [] requireApproval : gke : cluster : projects /[ project name ]/ locations /[ location ]/ clusters /[ cluster name ] dnsEndpoint : internalIp : proxyUrl : associatedEntities : [ KEY ] : gkeClusters : - cluster : projects /[ project name ]/ locations /[ location ]/ clusters /[ cluster name ] dnsEndpoint : [ true false ] internalIp : [ true false ] proxyUrl : executionConfigs : - usages : - [ RENDER PREDEPLOY DEPLOY VERIFY POSTDEPLOY ANALYSIS ] workerPool : serviceAccount : artifactStorage : executionTimeout : verbose : metadata.name The name of this target.
- See documentation in this article for more details.) executionConfigs : - usages : - [ RENDER PREDEPLOY DEPLOY VERIFY POSTDEPLOY ANALYSIS ] workerPool : serviceAccount : artifactStorage : executionTimeout : verbose : --- Custom target type config apiVersion : deploy.cloud.google.com/v1 kind : CustomTargetType metadata : name : annotations : labels : description : tasks : render : deploy : --- Automation config apiVersion : deploy.cloud.google.com/v1 kind : Automation metadata : name : labels : annotations : description : suspended : serviceAccount : selector : targets : - id : [ TARGET ID ] labels : [ LABEL KEY ] :[LABEL VALUE] rules : - [ RULE TYPE ]: id : [ RULE-SPECIFIC CONFIG ] This YAML has three main components: The main delivery pipeline and progression The configuration file can include any number of pipeline definitions.
- For Cloud Run targets The following YAML shows how to configure a target that deploys to a Cloud Run service : apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : annotations : labels : description : multiTarget : targetIds : [] requireApproval : run : location : projects /[ project name ]/ locations /[ location ] executionConfigs : - usages : - [ RENDER PREDEPLOY DEPLOY VERIFY POSTDEPLOY ANALYSIS ] workerPool : serviceAccount : artifactStorage : executionTimeout : verbose : metadata.name The name of this target.
- See Analysis definitions for configuration details. deployParameters Lets you specify key value pairs to pass values to manifests for label-matched targets, when using deploy parameters .

### Use custom organization policies \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/custom-org-policy](https://docs.cloud.google.com/deploy/docs/custom-org-policy)
- Source ID: `site-docs-reference-2`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource Field clouddeploy.googleapis.com/Automation resource.annotations resource.description resource.rules.advanceRolloutRule.id resource.rules.advanceRolloutRule.sourcePhases resource.rules.advanceRolloutRule.wait resource.rules.promoteReleaseRule.destinationPhase resource.rules.promoteReleaseRule.destinationTargetId resource.rules.promoteReleaseRule.id resource.rules.promoteReleaseRule.wait resource.rules.repairRolloutRule.id resource.rules.repairRolloutRule.jobs resource.rules.repairRolloutRule.phases resource.rules.repairRolloutRule.repairPhases.retry.attempts resource.rules.repairRolloutRule.repairPhases.retry.backoffMode resource.rules.repairRolloutRule.repairPhases.retry.wait resource.rules.repairRolloutRule.repairPhases.rollback.destinationPhase resource.rules.repairRolloutRule.repairPhases.rollback.disableRollbackIfRolloutPending resource.rules.timedPromoteReleaseRule.destinationPhase resource.rules.timedPromoteReleaseRule.destinationTargetId resource.rules.timedPromoteReleaseRule.id resource.rules.timedPromoteReleaseRule.schedule resource.rules.timedPromoteReleaseRule.timeZone resource.selector.targets.id resource.serviceAccount resource.suspended clouddeploy.googleapis.com/CustomTargetType resource.annotations resource.customActions.deployAction resource.customActions.includeSkaffoldModules.configs resource.customActions.includeSkaffoldModules.git.path resource.customActions.includeSkaffoldModules.git.ref resource.customActions.includeSkaffoldModules.git.repo resource.customActions.includeSkaffoldModules.googleCloudBuildRepo.path resource.customActions.includeSkaffoldModules.googleCloudBuildRepo.ref resource.customActions.includeSkaffoldModules.googleCloudBuildRepo.repository resource.customActions.includeSkaffoldModules.googleCloudStorage.path resource.customActions.includeSkaffoldModules.googleCloudStorage.source resource.customActions.renderAction resource.description resource.name clouddeploy.googleapis.com/DeliveryPipeline resource.annotations resource.description resource.name resource.serialPipeline.stages.deployParameters.matchTargetLabels resource.serialPipeline.stages.deployParameters.values resource.serialPipeline.stages.profiles resource.serialPipeline.stages.strategy.canary.canaryDeployment.percentages resource.serialPipeline.stages.strategy.canary.canaryDeployment.postdeploy.actions resource.serialPipeline.stages.strategy.canary.canaryDeployment.predeploy.actions resource.serialPipeline.stages.strategy.canary.canaryDeployment.verify resource.serialPipeline.stages.strategy.canary.customCanaryDeployment.phaseConfigs.percentage resource.serialPipeline.stages.strategy.canary.customCanaryDeployment.phaseConfigs.phaseId resource.serialPipeline.stages.strategy.canary.customCanaryDeployment.phaseConfigs.postdeploy.actions resource.serialPipeline.stages.strategy.canary.customCanaryDeployment.phaseConfigs.predeploy.actions resource.serialPipeline.stages.strategy.canary.customCanaryDeployment.phaseConfigs.profiles resource.serialPipeline.stages.strategy.canary.customCanaryDeployment.phaseConfigs.verify resource.serialPipeline.stages.strategy.canary.runtimeConfig.cloudRun.automaticTrafficControl resource.serialPipeline.stages.strategy.canary.runtimeConfig.cloudRun.canaryRevisionTags resource.serialPipeline.stages.strategy.canary.runtimeConfig.cloudRun.priorRevisionTags resource.serialPipeline.stages.strategy.canary.runtimeConfig.cloudRun.stableRevisionTags resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.deployment resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.httpRoute resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.podSelectorLabel resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.routeDestinations.destinationIds resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.routeDestinations.propagateService resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.routeUpdateWaitTime resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.service resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.stableCutbackDuration resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.serviceNetworking.deployment resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.serviceNetworking.disablePodOverprovisioning resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.serviceNetworking.podSelectorLabel resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.serviceNetworking.service resource.serialPipeline.stages.strategy.standard.postdeploy.actions resource.serialPipeline.stages.strategy.standard.predeploy.actions resource.serialPipeline.stages.strategy.standard.verify resource.serialPipeline.stages.targetId resource.suspended clouddeploy.googleapis.com/DeployPolicy resource.annotations resource.description resource.rules.rolloutRestriction.actions resource.rules.rolloutRestriction.id resource.rules.rolloutRestriction.invokers resource.rules.rolloutRestriction.timeWindows.oneTimeWindows.endDate resource.rules.rolloutRestriction.timeWindows.oneTimeWindows.endTime resource.rules.rolloutRestriction.timeWindows.oneTimeWindows.startDate resource.rules.rolloutRestriction.timeWindows.oneTimeWindows.startTime resource.rules.rolloutRestriction.timeWindows.timeZone resource.rules.rolloutRestriction.timeWindows.weeklyWindows.daysOfWeek resource.rules.rolloutRestriction.timeWindows.weeklyWindows.endTime resource.rules.rolloutRestriction.timeWindows.weeklyWindows.startTime resource.selectors.deliveryPipeline.id resource.selectors.target.id resource.suspended clouddeploy.googleapis.com/Release resource.annotations resource.buildArtifacts.image resource.buildArtifacts.tag resource.deployParameters resource.description resource.name resource.skaffoldConfigPath resource.skaffoldConfigUri resource.skaffoldVersion clouddeploy.googleapis.com/Rollout resource.annotations resource.description resource.name resource.targetId clouddeploy.googleapis.com/Target resource.annotations resource.anthosCluster.membership resource.associatedEntities[ ].anthosClusters.membership resource.associatedEntities[ ].gkeClusters.cluster resource.associatedEntities[ ].gkeClusters.dnsEndpoint resource.associatedEntities[ ].gkeClusters.internalIp resource.associatedEntities[ ].gkeClusters.proxyUrl resource.customTarget.customTargetType resource.deployParameters resource.description resource.executionConfigs.artifactStorage resource.executionConfigs.defaultPool.artifactStorage resource.executionConfigs.defaultPool.serviceAccount resource.executionConfigs.executionTimeout resource.executionConfigs.privatePool.artifactStorage resource.executionConfigs.privatePool.serviceAccount resource.executionConfigs.privatePool.workerPool resource.executionConfigs.serviceAccount resource.executionConfigs.usages resource.executionConfigs.verbose resource.executionConfigs.workerPool resource.gke.cluster resource.gke.dnsEndpoint resource.gke.internalIp resource.gke.proxyUrl resource.multiTarget.targetIds resource.name resource.requireApproval resource.run.location What's next Learn more about Organization Policy Service .
- Apply the constraint: gcloud org-policies set-custom-constraint /constraint-enable-gke-targets.yaml Verify that the constraint exists: gcloud org-policies list-custom-constraints --organization = ORGANIZATION ID The output is similar to the following: CUSTOM CONSTRAINT ACTION TYPE METHOD TYPES RESOURCE TYPES DISPLAY NAME custom.enableGkeTargets ALLOW CREATE,UPDATE clouddeploy.googleapis.com/Target Enable the creation of GKE targets ...
- Apply the Cloud Deploy configuration to create the target: gcloud deploy apply --file = clouddeploy.yaml \ --project = PROJECT ID \ --region = REGION The output is the following: Operation denied by custom org policies: ["customConstraints/custom.enableGkeTargets": "All new targets must be GKE clusters."] Example custom organization policies for common use cases This table provides syntax examples for some common custom constraints.
- Apply the policy: gcloud org-policies set-policy /policy-enable-gke-targets.yaml Verify that the policy exists: gcloud org-policies list --project = PROJECT ID The output is similar to the following: CONSTRAINT LIST POLICY BOOLEAN POLICY ETAG custom.enableGkeTargets - SET COCsm5QGENiXi2E= After you apply the policy, wait about two minutes for Google Cloud to start enforcing the policy.

