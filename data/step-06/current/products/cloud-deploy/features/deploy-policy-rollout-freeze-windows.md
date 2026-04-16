---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:42.664Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Deploy policy rollout freeze windows"
feature_slug: "deploy-policy-rollout-freeze-windows"
latest_feature_date: "2024-10-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/deploy-policy"
  - "https://docs.cloud.google.com/deploy/docs/custom-org-policy"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-policy"
keywords:
  - "deploy"
  - "policy"
  - "rollout"
  - "freeze"
  - "windows"
  - "policies"
  - "can"
  - "block"
---

# Deploy policy rollout freeze windows

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Deploy policies can block rollouts during specified time windows.

## Extended Definition

Deploy policies can block rollouts during specified time windows.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/deploy-policy](https://docs.cloud.google.com/deploy/docs/deploy-policy)
- [https://docs.cloud.google.com/deploy/docs/custom-org-policy](https://docs.cloud.google.com/deploy/docs/custom-org-policy)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-policy](https://docs.cloud.google.com/deploy/docs/deploy-app-policy)

## Supporting Pages

### "Restrict deploy behavior using policies \_|\_ Cloud Deploy \_|\_ Google\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-policy](https://docs.cloud.google.com/deploy/docs/deploy-policy)
- Source ID: `site-docs-reference-2`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Repeating weekend freeze The following YAML shows a repeating time window to enforce a deploy policy that restricts rollouts on weekends, from Friday at 5pm through Monday morning at 9am: timeWindows : timeZone : "America/New York" weeklyWindows : - daysOfWeek : [ FRIDAY ] startTime : "17:00" endTime : "24:00" - daysOfWeek : [ SATURDAY , SUNDAY ] startTime : "00:00" endTime : "24:00" - daysOfWeek : [ MONDAY ] startTime : "00:00" endTime : "09:00" Update a deploy policy Updating a deploy policy consists of the following steps: Edit the policy configuration YAML.
- Dates and times in a rolloutRestriction rule You configure date and time blocks to specify repeating and non-repeating time windows during which the deploy policy is in effect.
- The following YAML shows a one-time (non-repeating) time window to enforce a deploy policy for an annual freeze: timeWindows : timeZone : "America/New York" oneTimeWindows : - start : "2024-12-22 17:00" end : "2025-01-02 09:00" This YAML describes a time window from December 22, 2024 at 5pm, through January 2, 2025, at 9am.
- Annual freeze If there's a time of year during which you want to freeze rollouts, you can configure a oneTimeWindows block to do so.

### Use custom organization policies \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/custom-org-policy](https://docs.cloud.google.com/deploy/docs/custom-org-policy)
- Source ID: `site-docs-reference-2`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource Field clouddeploy.googleapis.com/Automation resource.annotations resource.description resource.rules.advanceRolloutRule.id resource.rules.advanceRolloutRule.sourcePhases resource.rules.advanceRolloutRule.wait resource.rules.promoteReleaseRule.destinationPhase resource.rules.promoteReleaseRule.destinationTargetId resource.rules.promoteReleaseRule.id resource.rules.promoteReleaseRule.wait resource.rules.repairRolloutRule.id resource.rules.repairRolloutRule.jobs resource.rules.repairRolloutRule.phases resource.rules.repairRolloutRule.repairPhases.retry.attempts resource.rules.repairRolloutRule.repairPhases.retry.backoffMode resource.rules.repairRolloutRule.repairPhases.retry.wait resource.rules.repairRolloutRule.repairPhases.rollback.destinationPhase resource.rules.repairRolloutRule.repairPhases.rollback.disableRollbackIfRolloutPending resource.rules.timedPromoteReleaseRule.destinationPhase resource.rules.timedPromoteReleaseRule.destinationTargetId resource.rules.timedPromoteReleaseRule.id resource.rules.timedPromoteReleaseRule.schedule resource.rules.timedPromoteReleaseRule.timeZone resource.selector.targets.id resource.serviceAccount resource.suspended clouddeploy.googleapis.com/CustomTargetType resource.annotations resource.customActions.deployAction resource.customActions.includeSkaffoldModules.configs resource.customActions.includeSkaffoldModules.git.path resource.customActions.includeSkaffoldModules.git.ref resource.customActions.includeSkaffoldModules.git.repo resource.customActions.includeSkaffoldModules.googleCloudBuildRepo.path resource.customActions.includeSkaffoldModules.googleCloudBuildRepo.ref resource.customActions.includeSkaffoldModules.googleCloudBuildRepo.repository resource.customActions.includeSkaffoldModules.googleCloudStorage.path resource.customActions.includeSkaffoldModules.googleCloudStorage.source resource.customActions.renderAction resource.description resource.name clouddeploy.googleapis.com/DeliveryPipeline resource.annotations resource.description resource.name resource.serialPipeline.stages.deployParameters.matchTargetLabels resource.serialPipeline.stages.deployParameters.values resource.serialPipeline.stages.profiles resource.serialPipeline.stages.strategy.canary.canaryDeployment.percentages resource.serialPipeline.stages.strategy.canary.canaryDeployment.postdeploy.actions resource.serialPipeline.stages.strategy.canary.canaryDeployment.predeploy.actions resource.serialPipeline.stages.strategy.canary.canaryDeployment.verify resource.serialPipeline.stages.strategy.canary.customCanaryDeployment.phaseConfigs.percentage resource.serialPipeline.stages.strategy.canary.customCanaryDeployment.phaseConfigs.phaseId resource.serialPipeline.stages.strategy.canary.customCanaryDeployment.phaseConfigs.postdeploy.actions resource.serialPipeline.stages.strategy.canary.customCanaryDeployment.phaseConfigs.predeploy.actions resource.serialPipeline.stages.strategy.canary.customCanaryDeployment.phaseConfigs.profiles resource.serialPipeline.stages.strategy.canary.customCanaryDeployment.phaseConfigs.verify resource.serialPipeline.stages.strategy.canary.runtimeConfig.cloudRun.automaticTrafficControl resource.serialPipeline.stages.strategy.canary.runtimeConfig.cloudRun.canaryRevisionTags resource.serialPipeline.stages.strategy.canary.runtimeConfig.cloudRun.priorRevisionTags resource.serialPipeline.stages.strategy.canary.runtimeConfig.cloudRun.stableRevisionTags resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.deployment resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.httpRoute resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.podSelectorLabel resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.routeDestinations.destinationIds resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.routeDestinations.propagateService resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.routeUpdateWaitTime resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.service resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.stableCutbackDuration resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.serviceNetworking.deployment resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.serviceNetworking.disablePodOverprovisioning resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.serviceNetworking.podSelectorLabel resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.serviceNetworking.service resource.serialPipeline.stages.strategy.standard.postdeploy.actions resource.serialPipeline.stages.strategy.standard.predeploy.actions resource.serialPipeline.stages.strategy.standard.verify resource.serialPipeline.stages.targetId resource.suspended clouddeploy.googleapis.com/DeployPolicy resource.annotations resource.description resource.rules.rolloutRestriction.actions resource.rules.rolloutRestriction.id resource.rules.rolloutRestriction.invokers resource.rules.rolloutRestriction.timeWindows.oneTimeWindows.endDate resource.rules.rolloutRestriction.timeWindows.oneTimeWindows.endTime resource.rules.rolloutRestriction.timeWindows.oneTimeWindows.startDate resource.rules.rolloutRestriction.timeWindows.oneTimeWindows.startTime resource.rules.rolloutRestriction.timeWindows.timeZone resource.rules.rolloutRestriction.timeWindows.weeklyWindows.daysOfWeek resource.rules.rolloutRestriction.timeWindows.weeklyWindows.endTime resource.rules.rolloutRestriction.timeWindows.weeklyWindows.startTime resource.selectors.deliveryPipeline.id resource.selectors.target.id resource.suspended clouddeploy.googleapis.com/Release resource.annotations resource.buildArtifacts.image resource.buildArtifacts.tag resource.deployParameters resource.description resource.name resource.skaffoldConfigPath resource.skaffoldConfigUri resource.skaffoldVersion clouddeploy.googleapis.com/Rollout resource.annotations resource.description resource.name resource.targetId clouddeploy.googleapis.com/Target resource.annotations resource.anthosCluster.membership resource.associatedEntities[ ].anthosClusters.membership resource.associatedEntities[ ].gkeClusters.cluster resource.associatedEntities[ ].gkeClusters.dnsEndpoint resource.associatedEntities[ ].gkeClusters.internalIp resource.associatedEntities[ ].gkeClusters.proxyUrl resource.customTarget.customTargetType resource.deployParameters resource.description resource.executionConfigs.artifactStorage resource.executionConfigs.defaultPool.artifactStorage resource.executionConfigs.defaultPool.serviceAccount resource.executionConfigs.executionTimeout resource.executionConfigs.privatePool.artifactStorage resource.executionConfigs.privatePool.serviceAccount resource.executionConfigs.privatePool.workerPool resource.executionConfigs.serviceAccount resource.executionConfigs.usages resource.executionConfigs.verbose resource.executionConfigs.workerPool resource.gke.cluster resource.gke.dnsEndpoint resource.gke.internalIp resource.gke.proxyUrl resource.multiTarget.targetIds resource.name resource.requireApproval resource.run.location What's next Learn more about Organization Policy Service .
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: clouddeploy.googleapis.com/Automation clouddeploy.googleapis.com/CustomTargetType clouddeploy.googleapis.com/DeliveryPipeline clouddeploy.googleapis.com/DeployPolicy clouddeploy.googleapis.com/Release clouddeploy.googleapis.com/Rollout clouddeploy.googleapis.com/Target To learn more about Organization Policy, see Custom organization policies .
- Deny the creation of automations with any promotion rule name : organizations/ ORGANIZATION ID /customConstraints/custom.denyPromoteReleaseAutomationRules resourceTypes : - clouddeploy.googleapis.com/Automation methodTypes : - CREATE condition : "resource.rules.exists(r, has(r.promoteReleaseRule) has(r.timedPromoteReleaseRule))" actionType : DENY displayName : Deny promote release or timed promote release automation rules. description : All automation rules must be of type advance rollout or repair rollout.
- After you verify that the organization policy in dry-run mode works as intended, set the live policy by clicking Set policy . gcloud To create an organization policy with boolean rules, create a policy YAML file that references the constraint: name : projects/ PROJECT ID /policies/ CONSTRAINT NAME spec : rules : - enforce : true dryRunSpec : rules : - enforce : true Replace the following: PROJECT ID : the project that you want to enforce your constraint on.

### "Quickstart: Use a deploy policy to restrict rollouts \_|\_ Cloud Deploy\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-policy](https://docs.cloud.google.com/deploy/docs/deploy-app-policy)
- Source ID: `site-docs-root-2`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the same directory in which you created the delivery pipeline and targets, create a new file, deploypolicy.yaml , with the following content: apiVersion : deploy.cloud.google.com/v1 description : Restrict all rollouts in the deploy-policy-pipeline resource for the next ten years kind : DeployPolicy metadata : name : quickstart-deploy-policy selectors : - deliveryPipeline : id : 'deploy-policy-pipeline' rules : - rolloutRestriction : id : no-rollouts timeWindows : timeZone : America/New York oneTimeWindows : - start : 2024-01-01 00:00 end : 2034-01-01 24:00 This policy blocks rollouts for 10 years, beginning January 1, 2024.
- To do so, you create a new rollout against this release, this time including the --override-deploy-policies option: GKE Run the following command from the deploy-policy-quickstart directory to create the release: gcloud deploy releases promote -- release = test - release - 001 \ -- project = PROJECT ID \ -- region = us - central1 \ -- delivery - pipeline = deploy - policy - pipeline \ -- to - target = prod - target \ -- override - deploy - policies = quickstart - deploy - policy Cloud Run Run the following command from the deploy-policy-quickstart directory to create the release: gcloud deploy releases promote -- release = test - release - 001 \ -- project = PROJECT ID \ -- region = us - central1 \ -- delivery - pipeline = deploy - policy - pipeline \ -- to - target = prod - target \ -- override - deploy - policies = quickstart - deploy - policy Because you included --override-deploy-policies=quickstart-deploy-policy , and because you have the roles/clouddeploy.policyAdmin role, Cloud Deploy ignores the deploy policy you created and creates the rollout to the prod-target .
- Target: "prod-target", Delivery pipeline: "deploy-policy-pipeline", policy rule: "no-rollouts" Override the policy restriction To deploy the sample application, which is blocked by the deploy policy, you need to override that policy.
- An error message is shown on the command line: ERROR: (gcloud.deploy.releases.create) A create-rollout attempt was blocked by the "quickstart-deploy-policy" policy.

