---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:17:26.744Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Cloud Deploy custom organization policy constraints"
feature_slug: "cloud-deploy-custom-organization-policy-constraints"
latest_feature_date: "2025-09-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/custom-org-policy"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient"
keywords:
  - "deploy"
  - "custom"
  - "organization"
  - "policy"
  - "constraints"
  - "now"
  - "supports"
  - "using"
---

# Cloud Deploy custom organization policy constraints

Product: Cloud Deploy
Coverage: LOW

## Step 02 Summary

Cloud Deploy now supports using custom Organization Policy constraints for additional control of selected Cloud Deploy resources.

## Extended Definition

Cloud Deploy now supports using custom Organization Policy constraints for additional control of selected Cloud Deploy resources.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/custom-org-policy](https://docs.cloud.google.com/deploy/docs/custom-org-policy)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient)

## Supporting Pages

### Use custom organization policies \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/custom-org-policy](https://docs.cloud.google.com/deploy/docs/custom-org-policy)
- Source ID: `site-docs-root-2`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: clouddeploy.googleapis.com/Automation clouddeploy.googleapis.com/CustomTargetType clouddeploy.googleapis.com/DeliveryPipeline clouddeploy.googleapis.com/DeployPolicy clouddeploy.googleapis.com/Release clouddeploy.googleapis.com/Rollout clouddeploy.googleapis.com/Target To learn more about Organization Policy, see Custom organization policies .
- Before you begin, you must know the following: Your organization ID A project ID Create the constraint Save the following file as constraint-enable-gke-targets.yaml : name : organizations/ ORGANIZATION ID /customConstraints/custom.enableGkeTargets resourceTypes : - clouddeploy.googleapis.com/Target methodTypes : - CREATE - UPDATE condition : "has(resource.gke)" actionType : ALLOW displayName : Enable the creation and update of GKE targets description : All new targets must be GKE clusters.
- Resource Field clouddeploy.googleapis.com/Automation resource.annotations resource.description resource.rules.advanceRolloutRule.id resource.rules.advanceRolloutRule.sourcePhases resource.rules.advanceRolloutRule.wait resource.rules.promoteReleaseRule.destinationPhase resource.rules.promoteReleaseRule.destinationTargetId resource.rules.promoteReleaseRule.id resource.rules.promoteReleaseRule.wait resource.rules.repairRolloutRule.id resource.rules.repairRolloutRule.jobs resource.rules.repairRolloutRule.phases resource.rules.repairRolloutRule.repairPhases.retry.attempts resource.rules.repairRolloutRule.repairPhases.retry.backoffMode resource.rules.repairRolloutRule.repairPhases.retry.wait resource.rules.repairRolloutRule.repairPhases.rollback.destinationPhase resource.rules.repairRolloutRule.repairPhases.rollback.disableRollbackIfRolloutPending resource.rules.timedPromoteReleaseRule.destinationPhase resource.rules.timedPromoteReleaseRule.destinationTargetId resource.rules.timedPromoteReleaseRule.id resource.rules.timedPromoteReleaseRule.schedule resource.rules.timedPromoteReleaseRule.timeZone resource.selector.targets.id resource.serviceAccount resource.suspended clouddeploy.googleapis.com/CustomTargetType resource.annotations resource.customActions.deployAction resource.customActions.includeSkaffoldModules.configs resource.customActions.includeSkaffoldModules.git.path resource.customActions.includeSkaffoldModules.git.ref resource.customActions.includeSkaffoldModules.git.repo resource.customActions.includeSkaffoldModules.googleCloudBuildRepo.path resource.customActions.includeSkaffoldModules.googleCloudBuildRepo.ref resource.customActions.includeSkaffoldModules.googleCloudBuildRepo.repository resource.customActions.includeSkaffoldModules.googleCloudStorage.path resource.customActions.includeSkaffoldModules.googleCloudStorage.source resource.customActions.renderAction resource.description resource.name clouddeploy.googleapis.com/DeliveryPipeline resource.annotations resource.description resource.name resource.serialPipeline.stages.deployParameters.matchTargetLabels resource.serialPipeline.stages.deployParameters.values resource.serialPipeline.stages.profiles resource.serialPipeline.stages.strategy.canary.canaryDeployment.percentages resource.serialPipeline.stages.strategy.canary.canaryDeployment.postdeploy.actions resource.serialPipeline.stages.strategy.canary.canaryDeployment.predeploy.actions resource.serialPipeline.stages.strategy.canary.canaryDeployment.verify resource.serialPipeline.stages.strategy.canary.customCanaryDeployment.phaseConfigs.percentage resource.serialPipeline.stages.strategy.canary.customCanaryDeployment.phaseConfigs.phaseId resource.serialPipeline.stages.strategy.canary.customCanaryDeployment.phaseConfigs.postdeploy.actions resource.serialPipeline.stages.strategy.canary.customCanaryDeployment.phaseConfigs.predeploy.actions resource.serialPipeline.stages.strategy.canary.customCanaryDeployment.phaseConfigs.profiles resource.serialPipeline.stages.strategy.canary.customCanaryDeployment.phaseConfigs.verify resource.serialPipeline.stages.strategy.canary.runtimeConfig.cloudRun.automaticTrafficControl resource.serialPipeline.stages.strategy.canary.runtimeConfig.cloudRun.canaryRevisionTags resource.serialPipeline.stages.strategy.canary.runtimeConfig.cloudRun.priorRevisionTags resource.serialPipeline.stages.strategy.canary.runtimeConfig.cloudRun.stableRevisionTags resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.deployment resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.httpRoute resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.podSelectorLabel resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.routeDestinations.destinationIds resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.routeDestinations.propagateService resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.routeUpdateWaitTime resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.service resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.stableCutbackDuration resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.serviceNetworking.deployment resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.serviceNetworking.disablePodOverprovisioning resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.serviceNetworking.podSelectorLabel resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.serviceNetworking.service resource.serialPipeline.stages.strategy.standard.postdeploy.actions resource.serialPipeline.stages.strategy.standard.predeploy.actions resource.serialPipeline.stages.strategy.standard.verify resource.serialPipeline.stages.targetId resource.suspended clouddeploy.googleapis.com/DeployPolicy resource.annotations resource.description resource.rules.rolloutRestriction.actions resource.rules.rolloutRestriction.id resource.rules.rolloutRestriction.invokers resource.rules.rolloutRestriction.timeWindows.oneTimeWindows.endDate resource.rules.rolloutRestriction.timeWindows.oneTimeWindows.endTime resource.rules.rolloutRestriction.timeWindows.oneTimeWindows.startDate resource.rules.rolloutRestriction.timeWindows.oneTimeWindows.startTime resource.rules.rolloutRestriction.timeWindows.timeZone resource.rules.rolloutRestriction.timeWindows.weeklyWindows.daysOfWeek resource.rules.rolloutRestriction.timeWindows.weeklyWindows.endTime resource.rules.rolloutRestriction.timeWindows.weeklyWindows.startTime resource.selectors.deliveryPipeline.id resource.selectors.target.id resource.suspended clouddeploy.googleapis.com/Release resource.annotations resource.buildArtifacts.image resource.buildArtifacts.tag resource.deployParameters resource.description resource.name resource.skaffoldConfigPath resource.skaffoldConfigUri resource.skaffoldVersion clouddeploy.googleapis.com/Rollout resource.annotations resource.description resource.name resource.targetId clouddeploy.googleapis.com/Target resource.annotations resource.anthosCluster.membership resource.associatedEntities[ ].anthosClusters.membership resource.associatedEntities[ ].gkeClusters.cluster resource.associatedEntities[ ].gkeClusters.dnsEndpoint resource.associatedEntities[ ].gkeClusters.internalIp resource.associatedEntities[ ].gkeClusters.proxyUrl resource.customTarget.customTargetType resource.deployParameters resource.description resource.executionConfigs.artifactStorage resource.executionConfigs.defaultPool.artifactStorage resource.executionConfigs.defaultPool.serviceAccount resource.executionConfigs.executionTimeout resource.executionConfigs.privatePool.artifactStorage resource.executionConfigs.privatePool.serviceAccount resource.executionConfigs.privatePool.workerPool resource.executionConfigs.serviceAccount resource.executionConfigs.usages resource.executionConfigs.verbose resource.executionConfigs.workerPool resource.gke.cluster resource.gke.dnsEndpoint resource.gke.internalIp resource.gke.proxyUrl resource.multiTarget.targetIds resource.name resource.requireApproval resource.run.location What's next Learn more about Organization Policy Service .
- When you have entered a value into each field, the equivalent YAML configuration for this custom constraint appears on the right. gcloud To create a custom constraint, create a YAML file using the following format: name : organizations/ ORGANIZATION ID /customConstraints/ CONSTRAINT NAME resourceTypes : RESOURCE NAME methodTypes : - CREATE - UPDATE condition : " CONDITION " actionType : ACTION displayName : DISPLAY NAME description : DESCRIPTION Replace the following: ORGANIZATION ID : your organization ID, such as 123456789 .

### "Class CloudDeployAsyncClient (2.10.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- Source ID: `site-python-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } delivery pipeline path delivery pipeline path ( project : str , location : str , delivery pipeline : str ) - > str Returns a fully-qualified delivery pipeline string. deploy policy path deploy policy path ( project : str , location : str , deploy policy : str ) - > str Returns a fully-qualified deploy policy string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- Returns Type Description google.cloud.deploy v1.types.CancelRolloutResponse The response object from CancelRollout. cluster path cluster path ( project : str , location : str , cluster : str ) - > str Returns a fully-qualified cluster string. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. config path config path ( project : str , location : str ) - > str Returns a fully-qualified config string. create automation create automation ( request : typing .
- CreateCustomTargetTypeRequest ( parent="parent value", custom target type id="custom target type id value", custom target type=custom target type, ) Make the request operation = client. create custom target type (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.deploy v1.types.CreateCustomTargetTypeRequest , dict]] The request object.
- Returns Type Description google.cloud.deploy v1.types.RollbackTargetResponse The response object from RollbackTarget. rollout path rollout path ( project : str , location : str , delivery pipeline : str , release : str , rollout : str ) - > str Returns a fully-qualified rollout string. service path service path ( project : str , location : str , service : str ) - > str Returns a fully-qualified service string. set iam policy set iam policy ( request : typing .

### "Class CloudDeployClient (2.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient)
- Source ID: `site-python-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } delivery pipeline path delivery pipeline path ( project : str , location : str , delivery pipeline : str ) - > str Returns a fully-qualified delivery pipeline string. deploy policy path deploy policy path ( project : str , location : str , deploy policy : str ) - > str Returns a fully-qualified deploy policy string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- Returns Type Description google.cloud.deploy v1.types.CancelRolloutResponse The response object from CancelRollout. cluster path cluster path ( project : str , location : str , cluster : str ) - > str Returns a fully-qualified cluster string. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. config path config path ( project : str , location : str ) - > str Returns a fully-qualified config string. create automation create automation ( request : typing .
- CreateCustomTargetTypeRequest ( parent="parent value", custom target type id="custom target type id value", custom target type=custom target type, ) Make the request operation = client. create custom target type (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.deploy v1.types.CreateCustomTargetTypeRequest , dict] The request object.
- Returns Type Description google.cloud.deploy v1.types.RollbackTargetResponse The response object from RollbackTarget. rollout path rollout path ( project : str , location : str , delivery pipeline : str , release : str , rollout : str ) - > str Returns a fully-qualified rollout string. service path service path ( project : str , location : str , service : str ) - > str Returns a fully-qualified service string. set iam policy set iam policy ( request : typing .

