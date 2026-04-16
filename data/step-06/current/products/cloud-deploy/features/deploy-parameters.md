---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:42.671Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Deploy parameters"
feature_slug: "deploy-parameters"
latest_feature_date: "2023-07-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/parameters"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-parameters"
  - "https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines"
keywords:
  - "deploy"
  - "parameters"
  - "pass"
  - "values"
  - "into"
  - "manifests"
  - "delivery"
  - "pipeline"
---

# Deploy parameters

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Deploy parameters pass values into manifests at the delivery pipeline, target, and release levels.

## Extended Definition

Deploy parameters pass values into manifests at the delivery pipeline, target, and release levels.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/parameters](https://docs.cloud.google.com/deploy/docs/parameters)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-parameters](https://docs.cloud.google.com/deploy/docs/deploy-app-parameters)
- [https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines](https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines)

## Supporting Pages

### "Pass parameters to your deployment \_|\_ Cloud Deploy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/parameters](https://docs.cloud.google.com/deploy/docs/parameters)
- Source ID: `site-docs-reference-2`
- Final score: 255
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The command will look similar to this: gcloud deploy releases create test - release - 001 \ --project=my-example-project \ --region=us-central1 \ --delivery-pipeline=my-params-demo-app-1 \ --images=my-app-image=gcr.io/google-containers/nginx@sha256:f49a843c290594dcf4d193535d1f4ba8af7d56cea2cf79d1e9554f077f1e7aaa \ --deploy-parameters="git-sha=f787cac" When the release is created, but after manifest rendering, Cloud Deploy provides the values to the rendered manifests if they include the associated keys.
- This includes the values substituted at render time, and the values for any deploy parameters Different ways to pass values You can provide parameters, and values for those parameters in three ways: In the delivery pipeline definition You provide the parameter and its value in the definition for a stage in the delivery pipeline progression.
- The following YAML is the configuration for a pipeline stage whose target is a multi-target, which in this case has two child targets: serialPipeline : stages : - targetId : dev profiles : [] - targetId : prod # multi-target profiles : [] deployParameters : - values : deploy replicas : 1 log level : "NOTICE" matchTargetLabels : # optional, applies to all resources if unspecified; AND'd my-app : "post-render-config-1" - values : deploy replicas : 2 log level : "WARNING" matchTargetLabels : # optional, applies to all resources if unspecified; AND'd my-app : "post-render-config-2" In this delivery pipeline configuration, the deployParameters stanza includes two values , each of which has the following: The variable name, which is the same name as the variable you set in the manifest A value for that variable One or more labels (optional) to match against target-specific labels If you don't specify a label, in a matchTargetLabels stanza, that value is used for all targets in the stage.
- Each target also includes a label, to be matched with deploy parameters configured on a pipeline stage . apiVersion : deploy.cloud.google.com/v1beta1 kind : Target metadata : name : prod1 labels : my-app : "post-render-config-1" description : development cluster deployParameters : application env1 : "newValue1" --- apiVersion : deploy.cloud.google.com/v1beta1 kind : target metadata : name : prod2 labels : my-app : "post-render-config-2" description : development cluster deployParameters : application env1 : "newValue2" When the release is created, but after the manifests are rendered, Cloud Deploy adds these values to the rendered manifests if they include the associated keys.

### "Quickstart: Use deploy parameters \_|\_ Cloud Deploy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-parameters](https://docs.cloud.google.com/deploy/docs/deploy-app-parameters)
- Source ID: `site-docs-root-2`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create your delivery pipeline and target definition: GKE In the deploy-params-gke-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-params-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: params-prod-multi deployParameters: - values: replicaCount: "2" Apply the deploy parameter replicaCount: "2" to the target with this label matchTargetLabels: label1: label1 - values: replicaCount: "3" Apply the deploy parameter replicaCount: "3" to the target with this label matchTargetLabels: label2: label2 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: params-prod-multi description: production clusters multiTarget: targetIds: [params-prod-a, params-prod-b] --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: params-prod-a labels: label1: label1 description: production cluster 1 deployParameters: application env1: "sampleValue1" gke: cluster: projects/ PROJECT ID /locations/us-central1/clusters/deploy-params-cluster-prod1 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: params-prod-b labels: label2: label2 description: production cluster 2 deployParameters: application env2: "sampleValue2" gke: cluster: projects/ PROJECT ID /locations/us-west1/clusters/deploy-params-cluster-prod2 Note: In this file, targets are included with the delivery pipeline, but you can define targets in a separate file or multiple separate files.
- Cloud Run In the deploy-params-run-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-params-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: params-prod-multi deployParameters: - values: minInstances: "2" Apply the deploy parameter minInstances: "2" to the target with this label matchTargetLabels: label1: label1 - values: minInstances: "3" Apply the deploy parameter minInstances: "3" to the target with this label matchTargetLabels: label2: label2 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: params-prod-multi description: production clusters multiTarget: targetIds: [params-prod-a, params-prod-b] --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: params-prod-a labels: label1: label1 description: production cluster 1 deployParameters: application env1: "sampleValue1" run: location: projects/ PROJECT ID /locations/us-central1 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: params-prod-b labels: label2: label2 description: production cluster 2 deployParameters: application env2: "sampleValue2" run: location: projects/ PROJECT ID /locations/us-west1 Note: In this file, targets are included with the delivery pipeline, but you can define targets in a separate file or multiple separate files.
- Cloud Run Run the following command from the deploy-run-parallel-quickstart directory to create a release resource that represents the container image to deploy: gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-params-demo-app-1 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a \ --deploy-parameters="git-sha=f787cac" Notice the --images= flag , which you use to replace the placeholder ( my-app-image ) in the service definition with the specific, SHA-qualified image.
- GKE Run the following command from the deploy-gke-parallel-quickstart directory to create a release resource that represents the container image to deploy: gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-params-demo-app-1 \ --images=my-app-image=gcr.io/google-containers/nginx@sha256:f49a843c290594dcf4d193535d1f4ba8af7d56cea2cf79d1e9554f077f1e7aaa \ --deploy-parameters="git-sha=f787cac" Notice the --images= flag , which you use to replace the placeholder ( my-app-image ) in the manifest with the specific, SHA-qualified image.

### "REST Resource: projects.locations.deliveryPipelines \_|\_ Cloud Deploy \_\

- URL: [https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines](https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines)
- Source ID: `site-api-reference-required-1`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource: DeliveryPipeline JSON representation SerialPipeline JSON representation Stage JSON representation Strategy JSON representation Standard JSON representation Predeploy JSON representation Postdeploy JSON representation Canary JSON representation RuntimeConfig JSON representation KubernetesConfig JSON representation GatewayServiceMesh JSON representation RouteDestinations JSON representation ServiceNetworking JSON representation CloudRunConfig JSON representation CanaryDeployment JSON representation CustomCanaryDeployment JSON representation PhaseConfig JSON representation DeployParameters JSON representation PipelineCondition JSON representation PipelineReadyCondition JSON representation TargetsTypeCondition JSON representation Methods Resource: DeliveryPipeline A DeliveryPipeline resource in the Cloud Deploy API.
- Methods create Creates a new DeliveryPipeline in a given project and location. delete Deletes a single DeliveryPipeline. get Gets details of a single DeliveryPipeline. getIamPolicy Gets the access control policy for a resource. list Lists DeliveryPipelines in a given project and location. patch Updates the parameters of a single DeliveryPipeline. rollbackTarget Creates a Rollout to roll back the specified target. setIamPolicy Sets the access control policy on the specified resource. testIamPermissions Returns permissions that a caller has on the specified resource.
- Home Documentation Application development Cloud Deploy Reference Send feedback REST Resource: projects.locations.deliveryPipelines Stay organized with collections Save and categorize content based on your preferences.
- Values are deploy parameters in key-value pairs.

