---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:23.492Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Cloud Deploy console deployment metrics"
feature_slug: "cloud-deploy-console-deployment-metrics"
latest_feature_date: "2022-01-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-canary"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-analysis"
  - "https://docs.cloud.google.com/deploy/docs/custom-org-policy"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-verification"
keywords:
  - "deploy"
  - "console"
  - "deployment"
  - "metrics"
  - "now"
  - "provides"
  - "on"
  - "the"
---

# Cloud Deploy console deployment metrics

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Cloud Deploy now provides deployment metrics on the Google Cloud Deploy page in Google Cloud Console.

## Extended Definition

Cloud Deploy now provides deployment metrics on the Google Cloud Deploy page in Google Cloud Console.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/deploy-app-canary](https://docs.cloud.google.com/deploy/docs/deploy-app-canary)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-analysis](https://docs.cloud.google.com/deploy/docs/deploy-app-analysis)
- [https://docs.cloud.google.com/deploy/docs/custom-org-policy](https://docs.cloud.google.com/deploy/docs/custom-org-policy)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-verification](https://docs.cloud.google.com/deploy/docs/deploy-app-verification)

## Supporting Pages

### "Quickstart: Canary-deploy an application to a target \_|\_ Cloud Deploy\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-canary](https://docs.cloud.google.com/deploy/docs/deploy-app-canary)
- Source ID: `site-docs-root-2`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In this quickstart, we create one file for our pipeline and our single target: GKE Create a file named clouddeploy.yaml , in the deploy-canary-quickstart-gke directory, with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-canary-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: prod profiles: [] strategy: canary: runtimeConfig: kubernetes: serviceNetworking: service: "my-service" deployment: "my-deployment" canaryDeployment: percentages: [50] verify: false --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: prod description: prod GKE cluster gke: cluster: projects/ PROJECT ID /locations/us-central1/clusters/canary-quickstart-cluster GKE + Gateway API Create a file named clouddeploy.yaml , in the deploy-canary-quickstart-gke-gatewayapi directory, with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-canary-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: prod profiles: [] strategy: canary: runtimeConfig: kubernetes: gatewayServiceMesh: httpRoute: "my-httproute" service: "my-service" deployment: "my-deployment" canaryDeployment: percentages: [50] verify: false --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: prod description: prod GKE cluster gke: cluster: projects/ PROJECT ID /locations/us-central1/clusters/canary-quickstart-cluster Cloud Run Create a file named clouddeploy.yaml , in the deploy-canary-quickstart-run directory, with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-canary-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: prod profiles: [] strategy: canary: runtimeConfig: cloudRun: automaticTrafficControl: true canaryDeployment: percentages: [50] verify: false --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: prod description: prod Run Service run: location: projects/ PROJECT ID /locations/us-central1 Register your pipeline and targets with the Cloud Deploy service: gcloud deploy apply -- file = clouddeploy . yaml -- region = us - central1 -- project = PROJECT ID You now have a pipeline, with one target configured for a canary deployment strategy.
- GKE + Gateway API Create a file named kubernetes.yaml , in the deploy-canary-quickstart-gke-gatewayapi directory, with the following contents: kind : Gateway apiVersion : gateway . networking . k8s . io / v1beta1 metadata : name : my - gateway annotations : networking . istio . io / service - type : "ClusterIP" spec : gatewayClassName : istio listeners : - name : default hostname : " .example.com" port : 80 protocol : HTTP allowedRoutes : namespaces : from : All --- kind : HTTPRoute apiVersion : gateway . networking . k8s . io / v1beta1 metadata : name : my - httproute spec : parentRefs : - kind : Gateway name : my - gateway hostnames : - "test.example.com" rules : - backendRefs : - name : my - service port : 80 --- apiVersion : v1 kind : Service metadata : name : my - service spec : selector : app : my - app ports : - name : tcp - port protocol : TCP port : 80 targetPort : 8080 --- apiVersion : apps / v1 kind : Deployment metadata : name : my - deployment labels : app : my - app spec : replicas : 1 selector : matchLabels : app : my - app template : metadata : labels : app : my - app spec : containers : - name : nginx image : my - app - image This file is a Kubernetes manifest , which is applied to the cluster to deploy the application.
- To create a new release , run the following command from the deploy-canary-quickstart-gke , deploy-canary-quickstart-gke-gatewayapi or deploy-canary-quickstart-run directory: GKE gcloud deploy releases create test - release - 002 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-canary-demo-app-1 \ --images=my-app-image=gcr.io/google-containers/nginx@sha256:f49a843c290594dcf4d193535d1f4ba8af7d56cea2cf79d1e9554f077f1e7aaa GKE + Gateway API gcloud deploy releases create test - release - 002 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-canary-demo-app-1 \ --images=my-app-image=gcr.io/google-containers/nginx@sha256:f49a843c290594dcf4d193535d1f4ba8af7d56cea2cf79d1e9554f077f1e7aaa Cloud Run gcloud deploy releases create test - release - 002 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-canary-demo-app-1 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a After a few minutes, a rollout is created, and this time the canary stage is executed: When the first rollout phase finishes, the rollout is now in the canary phase: This means that the application is now deployed to 50%.
- GKE Create a file named kubernetes.yaml , in the deploy-canary-quickstart-gke directory, with the following contents: apiVersion: apps/v1 kind: Deployment metadata: name: my-deployment labels: app: my-app namespace: default spec: replicas: 1 selector: matchLabels: app: my-app template: metadata: labels: app: my-app spec: containers: - name: nginx image: my-app-image --- apiVersion: v1 kind: Service metadata: name: my-service namespace: default spec: selector: app: my-app ports: - protocol: TCP port: 80 This file is a Kubernetes manifest , which is applied to the cluster to deploy the application.

### "Quickstart: Run analysis on your application after deploying it \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-analysis](https://docs.cloud.google.com/deploy/docs/deploy-app-analysis)
- Source ID: `site-docs-root-2`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Register your pipeline and target with the Cloud Deploy service: gcloud deploy apply --file = clouddeploy.yaml --region = us-central1 --project = PROJECT ID You now have a delivery pipeline, with one target, ready to deploy your application.
- Analyze your application using metrics This quickstart shows you how to use Cloud Deploy to analyze your deployed Cloud Run service, based on metrics from Google Cloud Observability, to ensure the application is performing as expected.
- Confirm your pipeline and target: In the Google Cloud console, navigate to the Cloud Deploy Delivery pipelines page to view of list of your available delivery pipelines.
- In the Google Cloud console, navigate to the Cloud Deploy Delivery pipelines page to view your delivery pipeline ("deploy-analysis-demo-app-run").

### Use custom organization policies \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/custom-org-policy](https://docs.cloud.google.com/deploy/docs/custom-org-policy)
- Source ID: `site-docs-root-2`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin, you must know the following: Your organization ID A project ID Create the constraint Save the following file as constraint-enable-gke-targets.yaml : name : organizations/ ORGANIZATION ID /customConstraints/custom.enableGkeTargets resourceTypes : - clouddeploy.googleapis.com/Target methodTypes : - CREATE - UPDATE condition : "has(resource.gke)" actionType : ALLOW displayName : Enable the creation and update of GKE targets description : All new targets must be GKE clusters.
- Apply the Cloud Deploy configuration to create the target: gcloud deploy apply --file = clouddeploy.yaml \ --project = PROJECT ID \ --region = REGION The output is the following: Operation denied by custom org policies: ["customConstraints/custom.enableGkeTargets": "All new targets must be GKE clusters."] Example custom organization policies for common use cases This table provides syntax examples for some common custom constraints.
- Resource Field clouddeploy.googleapis.com/Automation resource.annotations resource.description resource.rules.advanceRolloutRule.id resource.rules.advanceRolloutRule.sourcePhases resource.rules.advanceRolloutRule.wait resource.rules.promoteReleaseRule.destinationPhase resource.rules.promoteReleaseRule.destinationTargetId resource.rules.promoteReleaseRule.id resource.rules.promoteReleaseRule.wait resource.rules.repairRolloutRule.id resource.rules.repairRolloutRule.jobs resource.rules.repairRolloutRule.phases resource.rules.repairRolloutRule.repairPhases.retry.attempts resource.rules.repairRolloutRule.repairPhases.retry.backoffMode resource.rules.repairRolloutRule.repairPhases.retry.wait resource.rules.repairRolloutRule.repairPhases.rollback.destinationPhase resource.rules.repairRolloutRule.repairPhases.rollback.disableRollbackIfRolloutPending resource.rules.timedPromoteReleaseRule.destinationPhase resource.rules.timedPromoteReleaseRule.destinationTargetId resource.rules.timedPromoteReleaseRule.id resource.rules.timedPromoteReleaseRule.schedule resource.rules.timedPromoteReleaseRule.timeZone resource.selector.targets.id resource.serviceAccount resource.suspended clouddeploy.googleapis.com/CustomTargetType resource.annotations resource.customActions.deployAction resource.customActions.includeSkaffoldModules.configs resource.customActions.includeSkaffoldModules.git.path resource.customActions.includeSkaffoldModules.git.ref resource.customActions.includeSkaffoldModules.git.repo resource.customActions.includeSkaffoldModules.googleCloudBuildRepo.path resource.customActions.includeSkaffoldModules.googleCloudBuildRepo.ref resource.customActions.includeSkaffoldModules.googleCloudBuildRepo.repository resource.customActions.includeSkaffoldModules.googleCloudStorage.path resource.customActions.includeSkaffoldModules.googleCloudStorage.source resource.customActions.renderAction resource.description resource.name clouddeploy.googleapis.com/DeliveryPipeline resource.annotations resource.description resource.name resource.serialPipeline.stages.deployParameters.matchTargetLabels resource.serialPipeline.stages.deployParameters.values resource.serialPipeline.stages.profiles resource.serialPipeline.stages.strategy.canary.canaryDeployment.percentages resource.serialPipeline.stages.strategy.canary.canaryDeployment.postdeploy.actions resource.serialPipeline.stages.strategy.canary.canaryDeployment.predeploy.actions resource.serialPipeline.stages.strategy.canary.canaryDeployment.verify resource.serialPipeline.stages.strategy.canary.customCanaryDeployment.phaseConfigs.percentage resource.serialPipeline.stages.strategy.canary.customCanaryDeployment.phaseConfigs.phaseId resource.serialPipeline.stages.strategy.canary.customCanaryDeployment.phaseConfigs.postdeploy.actions resource.serialPipeline.stages.strategy.canary.customCanaryDeployment.phaseConfigs.predeploy.actions resource.serialPipeline.stages.strategy.canary.customCanaryDeployment.phaseConfigs.profiles resource.serialPipeline.stages.strategy.canary.customCanaryDeployment.phaseConfigs.verify resource.serialPipeline.stages.strategy.canary.runtimeConfig.cloudRun.automaticTrafficControl resource.serialPipeline.stages.strategy.canary.runtimeConfig.cloudRun.canaryRevisionTags resource.serialPipeline.stages.strategy.canary.runtimeConfig.cloudRun.priorRevisionTags resource.serialPipeline.stages.strategy.canary.runtimeConfig.cloudRun.stableRevisionTags resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.deployment resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.httpRoute resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.podSelectorLabel resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.routeDestinations.destinationIds resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.routeDestinations.propagateService resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.routeUpdateWaitTime resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.service resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.stableCutbackDuration resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.serviceNetworking.deployment resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.serviceNetworking.disablePodOverprovisioning resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.serviceNetworking.podSelectorLabel resource.serialPipeline.stages.strategy.canary.runtimeConfig.kubernetes.serviceNetworking.service resource.serialPipeline.stages.strategy.standard.postdeploy.actions resource.serialPipeline.stages.strategy.standard.predeploy.actions resource.serialPipeline.stages.strategy.standard.verify resource.serialPipeline.stages.targetId resource.suspended clouddeploy.googleapis.com/DeployPolicy resource.annotations resource.description resource.rules.rolloutRestriction.actions resource.rules.rolloutRestriction.id resource.rules.rolloutRestriction.invokers resource.rules.rolloutRestriction.timeWindows.oneTimeWindows.endDate resource.rules.rolloutRestriction.timeWindows.oneTimeWindows.endTime resource.rules.rolloutRestriction.timeWindows.oneTimeWindows.startDate resource.rules.rolloutRestriction.timeWindows.oneTimeWindows.startTime resource.rules.rolloutRestriction.timeWindows.timeZone resource.rules.rolloutRestriction.timeWindows.weeklyWindows.daysOfWeek resource.rules.rolloutRestriction.timeWindows.weeklyWindows.endTime resource.rules.rolloutRestriction.timeWindows.weeklyWindows.startTime resource.selectors.deliveryPipeline.id resource.selectors.target.id resource.suspended clouddeploy.googleapis.com/Release resource.annotations resource.buildArtifacts.image resource.buildArtifacts.tag resource.deployParameters resource.description resource.name resource.skaffoldConfigPath resource.skaffoldConfigUri resource.skaffoldVersion clouddeploy.googleapis.com/Rollout resource.annotations resource.description resource.name resource.targetId clouddeploy.googleapis.com/Target resource.annotations resource.anthosCluster.membership resource.associatedEntities[ ].anthosClusters.membership resource.associatedEntities[ ].gkeClusters.cluster resource.associatedEntities[ ].gkeClusters.dnsEndpoint resource.associatedEntities[ ].gkeClusters.internalIp resource.associatedEntities[ ].gkeClusters.proxyUrl resource.customTarget.customTargetType resource.deployParameters resource.description resource.executionConfigs.artifactStorage resource.executionConfigs.defaultPool.artifactStorage resource.executionConfigs.defaultPool.serviceAccount resource.executionConfigs.executionTimeout resource.executionConfigs.privatePool.artifactStorage resource.executionConfigs.privatePool.serviceAccount resource.executionConfigs.privatePool.workerPool resource.executionConfigs.serviceAccount resource.executionConfigs.usages resource.executionConfigs.verbose resource.executionConfigs.workerPool resource.gke.cluster resource.gke.dnsEndpoint resource.gke.internalIp resource.gke.proxyUrl resource.multiTarget.targetIds resource.name resource.requireApproval resource.run.location What's next Learn more about Organization Policy Service .
- Deny the creation of automations with any promotion rule name : organizations/ ORGANIZATION ID /customConstraints/custom.denyPromoteReleaseAutomationRules resourceTypes : - clouddeploy.googleapis.com/Automation methodTypes : - CREATE condition : "resource.rules.exists(r, has(r.promoteReleaseRule) has(r.timedPromoteReleaseRule))" actionType : DENY displayName : Deny promote release or timed promote release automation rules. description : All automation rules must be of type advance rollout or repair rollout.

### "Quickstart: Verify your application after deploying it \_|\_ Cloud Deploy\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-verification](https://docs.cloud.google.com/deploy/docs/deploy-app-verification)
- Source ID: `site-docs-root-2`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Register your pipeline and targets with the Cloud Deploy service: gcloud deploy apply --file=clouddeploy.yaml --region=us-central1 --project= PROJECT ID You now have a delivery pipeline, with one target, ready to deploy your application and verify that deployment.
- In the Google Cloud console, navigate to the Cloud Deploy Delivery pipelines page to view your delivery pipeline ("deploy-verification-demo-app-gke-1" or "deploy-verification-demo-app-run-1").
- Confirm your pipeline and targets: In the Google Cloud console, navigate to the Cloud Deploy Delivery pipelines page to view of list of your available delivery pipelines.
- View the results of the verification in the Cloud Build logs, using the Cloud Deploy Rollout details page in Google Cloud console.

