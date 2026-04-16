---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:42.678Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Provenance labels on deployed resources"
feature_slug: "provenance-labels-on-deployed-resources"
latest_feature_date: "2022-01-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/labels-annotations"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-parameters"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-parallel"
keywords:
  - "provenance"
  - "labels"
  - "deployed"
  - "resources"
  - "deploy"
  - "automatically"
  - "applies"
---

# Provenance labels on deployed resources

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Cloud Deploy automatically applies provenance labels to deployed resources.

## Extended Definition

Cloud Deploy automatically applies provenance labels to deployed resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/labels-annotations](https://docs.cloud.google.com/deploy/docs/labels-annotations)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-parameters](https://docs.cloud.google.com/deploy/docs/deploy-app-parameters)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-parallel](https://docs.cloud.google.com/deploy/docs/deploy-app-parallel)

## Supporting Pages

### Using annotations and labels with Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/labels-annotations](https://docs.cloud.google.com/deploy/docs/labels-annotations)
- Source ID: `site-docs-reference-2`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Example usage One example of using these automatically applied labels would be to create a graph within Google Cloud Observability that aggregates a container metric by Cloud Deploy properties: fetch k8s container metric 'kubernetes.io/container/cpu/core usage time' filter metadata.user.c'app.kubernetes.io/managed-by' = "google-cloud-deploy" group by [ pipeline: metadata.user.c'deploy.cloud.google.com/delivery-pipeline-id', target: metadata.user.c'deploy.cloud.google.com/target-id', release: metadata.user.c'deploy.cloud.google.com/release-id',], sum(val()) rate 1m You can also use this with custom metrics.
- Adding annotations and labels to Cloud Deploy resources You can add annotations and labels to the following Cloud Deploy resources: Delivery pipelines For delivery pipelines, you add annotations and labels to the YAML configuration file . apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: annotations: key: "value" labels: key: "value" description: serialPipeline: stages: - targetId: profiles: [] - targetId: profiles: [] Targets Add annotations and labels to targets in the target configuration YAML .
- To prevent Cloud Deploy from automatically adding labels to rendered manifests, set Organization Policy Service constraint clouddeploy.disableServiceLabelGeneration to be enforced.
- Note: labels and annotations added to Cloud Deploy resources are applied to those resources only.

### "Quickstart: Use deploy parameters \_|\_ Cloud Deploy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-parameters](https://docs.cloud.google.com/deploy/docs/deploy-app-parameters)
- Source ID: `site-docs-root-2`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create your delivery pipeline and target definition: GKE In the deploy-params-gke-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-params-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: params-prod-multi deployParameters: - values: replicaCount: "2" Apply the deploy parameter replicaCount: "2" to the target with this label matchTargetLabels: label1: label1 - values: replicaCount: "3" Apply the deploy parameter replicaCount: "3" to the target with this label matchTargetLabels: label2: label2 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: params-prod-multi description: production clusters multiTarget: targetIds: [params-prod-a, params-prod-b] --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: params-prod-a labels: label1: label1 description: production cluster 1 deployParameters: application env1: "sampleValue1" gke: cluster: projects/ PROJECT ID /locations/us-central1/clusters/deploy-params-cluster-prod1 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: params-prod-b labels: label2: label2 description: production cluster 2 deployParameters: application env2: "sampleValue2" gke: cluster: projects/ PROJECT ID /locations/us-west1/clusters/deploy-params-cluster-prod2 Note: In this file, targets are included with the delivery pipeline, but you can define targets in a separate file or multiple separate files.
- Cloud Run In the deploy-params-run-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-params-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: params-prod-multi deployParameters: - values: minInstances: "2" Apply the deploy parameter minInstances: "2" to the target with this label matchTargetLabels: label1: label1 - values: minInstances: "3" Apply the deploy parameter minInstances: "3" to the target with this label matchTargetLabels: label2: label2 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: params-prod-multi description: production clusters multiTarget: targetIds: [params-prod-a, params-prod-b] --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: params-prod-a labels: label1: label1 description: production cluster 1 deployParameters: application env1: "sampleValue1" run: location: projects/ PROJECT ID /locations/us-central1 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: params-prod-b labels: label2: label2 description: production cluster 2 deployParameters: application env2: "sampleValue2" run: location: projects/ PROJECT ID /locations/us-west1 Note: In this file, targets are included with the delivery pipeline, but you can define targets in a separate file or multiple separate files.
- Cloud Run Create a file named service.yaml , with the following contents: apiVersion : serving . knative . dev / v1 kind : Service metadata : name : my - parallel - run - service spec : autoscaling . knative . dev / minScale : 1 # from-param: ${minInstances} selector : matchLabels : app : my - app template : metadata : annotations : commit : defaultShaValue # from-param: ${git-sha} spec : containers : - image : my - app - image env : - name : envvar1 value : defaultValue1 # from-param: ${application env1} - name : envvar2 value : defaultValue2 # from-param: ${application env2} This file is a basic Cloud Run service definition, which is used to deploy the application.
- GKE Create a file named kubernetes.yaml , with the following contents: apiVersion : apps / v1 kind : Deployment metadata : name : my - deployment spec : replicas : 1 # from-param: ${replicaCount} selector : matchLabels : app : my - app template : metadata : labels : app : my - app annotations : commit : defaultShaValue # from-param: ${git-sha} spec : containers : - name : nginx image : my - app - image env : - name : envvar1 value : default1 # from-param: ${application env1} - name : envvar2 value : default2 # from-param: ${application env2} This file is a Kubernetes manifest , which is applied to the cluster to deploy the application.

### "Quickstart: Deploy an app to multiple targets at the same time \_|\_ Google\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-parallel](https://docs.cloud.google.com/deploy/docs/deploy-app-parallel)
- Source ID: `site-docs-reference-2`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create your delivery pipeline and target definition: GKE In the deploy-gke-parallel-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-parallel-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: qsprod-multi profiles: [] deployParameters: - values: replicaCount: "1" matchTargetLabels: label1: label1 - values: replicaCount: "2" matchTargetLabels: label2: label2 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-multi description: production clusters multiTarget: targetIds: [qsprod-a, qsprod-b] --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-a labels: label1: label1 description: production cluster 2 gke: cluster: projects/ PROJECT ID /locations/us-central1/clusters/quickstart-cluster-qsprod1 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-b labels: label2: label2 description: production cluster 3 gke: cluster: projects/ PROJECT ID /locations/us-west1/clusters/quickstart-cluster-qsprod2 Note: In this file, targets are included with the delivery pipeline, but you can define targets in a separate file or multiple separate files.
- Cloud Run In the deploy-run-parallel-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-parallel-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: qsprod-multi profiles: [] deployParameters: - values: minInstances: "2" matchTargetLabels: label1: label1 - values: minInstances: "3" matchTargetLabels: label2: label2 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-multi description: production multiTarget: targetIds: [qsprod-a, qsprod-b] --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-a labels: label1: label1 description: production us-central1 run: location: projects/ PROJECT ID /locations/us-central1 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-b labels: label2: label2 description: production us-west1 run: location: projects/ PROJECT ID /locations/us-west1 Note: In this file, targets are included with the delivery pipeline, but you can define targets in a separate file or multiple separate files.
- GKE Create a file named k8s-deployment.yaml , with the following contents: apiVersion: apps/v1 kind: Deployment metadata: name: my-deployment labels: app: my-app namespace: default spec: replicas: 1 # from-param: ${ replicaCount } selector: matchLabels: app: my-app template: metadata: labels: app: my-app spec: containers: - name: nginx image: my-app-image This file is a simple Kubernetes manifest , which is applied to the cluster to deploy the application.
- View the results in Google Cloud console Now that you've created the release, and the controller rollout and child rollouts are created, those child rollouts are now deployed (or are in the process of being deployed) to their respective GKE clusters or Cloud Run services.

