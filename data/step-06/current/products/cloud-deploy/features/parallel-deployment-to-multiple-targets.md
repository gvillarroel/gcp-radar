---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:23.485Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Parallel deployment to multiple targets"
feature_slug: "parallel-deployment-to-multiple-targets"
latest_feature_date: "2023-03-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-parallel"
  - "https://docs.cloud.google.com/deploy/docs/automation"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-parameters"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-run"
keywords:
  - "parallel"
  - "deployment"
  - "to"
  - "multiple"
  - "targets"
  - "deploy"
  - "added"
  - "the"
---

# Parallel deployment to multiple targets

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Cloud Deploy added the ability to deploy to multiple targets simultaneously.

## Extended Definition

Cloud Deploy added the ability to deploy to multiple targets simultaneously.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/deploy-app-parallel](https://docs.cloud.google.com/deploy/docs/deploy-app-parallel)
- [https://docs.cloud.google.com/deploy/docs/automation](https://docs.cloud.google.com/deploy/docs/automation)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-parameters](https://docs.cloud.google.com/deploy/docs/deploy-app-parameters)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-run](https://docs.cloud.google.com/deploy/docs/deploy-app-run)

## Supporting Pages

### "Quickstart: Deploy an app to multiple targets at the same time \_|\_ Google\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-parallel](https://docs.cloud.google.com/deploy/docs/deploy-app-parallel)
- Source ID: `site-docs-root-2`
- Final score: 303
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deploy an app to multiple targets at the same time This page shows you how to use Cloud Deploy to deliver a sample application to two targets at the same time—a parallel deployment.
- Create your delivery pipeline and target definition: GKE In the deploy-gke-parallel-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-parallel-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: qsprod-multi profiles: [] deployParameters: - values: replicaCount: "1" matchTargetLabels: label1: label1 - values: replicaCount: "2" matchTargetLabels: label2: label2 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-multi description: production clusters multiTarget: targetIds: [qsprod-a, qsprod-b] --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-a labels: label1: label1 description: production cluster 2 gke: cluster: projects/ PROJECT ID /locations/us-central1/clusters/quickstart-cluster-qsprod1 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-b labels: label2: label2 description: production cluster 3 gke: cluster: projects/ PROJECT ID /locations/us-west1/clusters/quickstart-cluster-qsprod2 Note: In this file, targets are included with the delivery pipeline, but you can define targets in a separate file or multiple separate files.
- Cloud Run In the deploy-run-parallel-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-parallel-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: qsprod-multi profiles: [] deployParameters: - values: minInstances: "2" matchTargetLabels: label1: label1 - values: minInstances: "3" matchTargetLabels: label2: label2 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-multi description: production multiTarget: targetIds: [qsprod-a, qsprod-b] --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-a labels: label1: label1 description: production us-central1 run: location: projects/ PROJECT ID /locations/us-central1 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-b labels: label2: label2 description: production us-west1 run: location: projects/ PROJECT ID /locations/us-west1 Note: In this file, targets are included with the delivery pipeline, but you can define targets in a separate file or multiple separate files.
- Delete the GKE clusters or Cloud Run services: GKE gcloud container clusters delete quickstart - cluster - qsprod1 -- region = us - central1 -- project = PROJECT ID \ && gcloud container clusters delete quickstart - cluster - qsprod2 -- region = us - west1 -- project = PROJECT ID Cloud Run gcloud run services delete my - parallel - run - service -- region = us - central1 -- project = PROJECT ID \ && gcloud run services delete my - parallel - run - service -- region = us - west1 -- project = PROJECT ID Delete the delivery pipeline, multi-target, child targets, release, and rollouts: gcloud deploy delete -- file = clouddeploy . yaml -- force -- region = us - central1 -- project = PROJECT ID Delete the Cloud Storage buckets that Cloud Deploy created.

### Automate your deployment \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/automation](https://docs.cloud.google.com/deploy/docs/automation)
- Source ID: `site-docs-root-2`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if you have three targets, dev , staging , and prod , you can configure an automation such that the release is promoted to prod , without further human interaction, upon a successful deployment into staging .
- Automation resources There are two Cloud Deploy resources that are specifically for automation: Automation An Automation is a child resource of a delivery pipeline, and it includes the following information: A pointer to the target or targets for which the automation is used The rule or rules that govern what the automation does and how it does it Configuration for the Automation resource is described in the document About the automation resource .
- If the rollout succeeds, and the automation is advanceRolloutRule and the target uses a canary deployment strategy: Execution waits for the identified source phase , if there is one.
- When you're automating a canary deployment, you use this wait time to specify the duration of each canary phase.

### "Quickstart: Use deploy parameters \_|\_ Cloud Deploy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-parameters](https://docs.cloud.google.com/deploy/docs/deploy-app-parameters)
- Source ID: `site-docs-root-2`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use deploy parameters This page shows you how to use Cloud Deploy to deliver a sample application to two targets at the same time (a parallel deployment ), while passing a different parameter value to each rendered manifest or service definition, using three different methods.
- Create your delivery pipeline and target definition: GKE In the deploy-params-gke-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-params-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: params-prod-multi deployParameters: - values: replicaCount: "2" Apply the deploy parameter replicaCount: "2" to the target with this label matchTargetLabels: label1: label1 - values: replicaCount: "3" Apply the deploy parameter replicaCount: "3" to the target with this label matchTargetLabels: label2: label2 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: params-prod-multi description: production clusters multiTarget: targetIds: [params-prod-a, params-prod-b] --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: params-prod-a labels: label1: label1 description: production cluster 1 deployParameters: application env1: "sampleValue1" gke: cluster: projects/ PROJECT ID /locations/us-central1/clusters/deploy-params-cluster-prod1 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: params-prod-b labels: label2: label2 description: production cluster 2 deployParameters: application env2: "sampleValue2" gke: cluster: projects/ PROJECT ID /locations/us-west1/clusters/deploy-params-cluster-prod2 Note: In this file, targets are included with the delivery pipeline, but you can define targets in a separate file or multiple separate files.
- Cloud Run In the deploy-params-run-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-params-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: params-prod-multi deployParameters: - values: minInstances: "2" Apply the deploy parameter minInstances: "2" to the target with this label matchTargetLabels: label1: label1 - values: minInstances: "3" Apply the deploy parameter minInstances: "3" to the target with this label matchTargetLabels: label2: label2 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: params-prod-multi description: production clusters multiTarget: targetIds: [params-prod-a, params-prod-b] --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: params-prod-a labels: label1: label1 description: production cluster 1 deployParameters: application env1: "sampleValue1" run: location: projects/ PROJECT ID /locations/us-central1 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: params-prod-b labels: label2: label2 description: production cluster 2 deployParameters: application env2: "sampleValue2" run: location: projects/ PROJECT ID /locations/us-west1 Note: In this file, targets are included with the delivery pipeline, but you can define targets in a separate file or multiple separate files.
- Delete the GKE clusters or Cloud Run services: GKE gcloud container clusters delete deploy - params - cluster - prod1 -- region = us - central1 -- project = PROJECT ID \ && gcloud container clusters delete deploy - params - cluster - prod2 -- region = us - west1 -- project = PROJECT ID Cloud Run gcloud run services delete my - parallel - run - service -- region = us - central1 -- project = PROJECT ID \ && gcloud run services delete my - parallel - run - service -- region = us - west1 -- project = PROJECT ID Delete the delivery pipeline, multi-target, child targets, release, and rollouts: gcloud deploy delete -- file = clouddeploy . yaml -- force -- region = us - central1 -- project = PROJECT ID Delete the Cloud Storage buckets that Cloud Deploy created.

### "Quickstart: Deploy an app to Cloud Run using Cloud Deploy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-run](https://docs.cloud.google.com/deploy/docs/deploy-app-run)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the deploy-run-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy.cloud.google.com/v1 kind : DeliveryPipeline metadata : name : my-run-demo-app-1 description : main application pipeline serialPipeline : stages : - targetId : run-qsdev profiles : [ dev ] - targetId : run-qsprod profiles : [ prod ] --- apiVersion : deploy.cloud.google.com/v1 kind : Target metadata : name : run-qsdev description : Cloud Run development service run : location : projects/ PROJECT ID /locations/us-central1 --- apiVersion : deploy.cloud.google.com/v1 kind : Target metadata : name : run-qsprod description : Cloud Run production service run : location : projects/ PROJECT ID /locations/us-central1 Note: In this file, targets are included with the delivery pipeline, but you can define targets in a separate file or multiple separate files.
- Define your Cloud Deploy delivery pipeline and deployment targets , which point to the two services, the two jobs, or the two worker pools.
- Delete the deploy-qs-dev Cloud Run service, job, or worker pool: Services gcloud run services delete deploy - run - service - dev -- region = us - central1 -- project = PROJECT ID Jobs gcloud run jobs delete deploy - run - job - dev -- region = us - central1 -- project = PROJECT ID Worker pools (Preview) gcloud beta run worker-pools delete deploy-run-worker-pool-dev --region=us-central1 --project= PROJECT ID Delete the deploy-qs-prod service, job, or worker pool: Services gcloud run services delete deploy - run - service - prod -- region = us - central1 -- project = PROJECT ID Jobs gcloud run jobs delete deploy - run - job - prod -- region = us - central1 -- project = PROJECT ID Worker pools (Preview) gcloud beta run worker - pools delete deploy - run - worker - pool - prod -- region = us - central1 -- project = PROJECT ID Delete the delivery pipeline, targets, release and rollouts: gcloud deploy delete -- file = clouddeploy . yaml -- force -- region = us - central1 -- project = PROJECT ID Delete the Cloud Storage buckets that Cloud Deploy created.
- When deployment is complete, the delivery pipeline visualization shows it as deployed: View the results in Google Cloud console In the Google Cloud console, navigate to the Cloud Deploy Delivery pipelines page to view your my-run-demo-app-1 delivery pipeline.

