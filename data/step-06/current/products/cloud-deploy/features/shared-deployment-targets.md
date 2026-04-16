---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:23.494Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Shared deployment targets"
feature_slug: "shared-deployment-targets"
latest_feature_date: "2021-08-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/automation"
  - "https://docs.cloud.google.com/deploy/docs/custom-targets"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-parallel"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-run"
keywords:
  - "shared"
  - "deployment"
  - "targets"
  - "deploy"
  - "allows"
  - "to"
  - "be"
  - "across"
---

# Shared deployment targets

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Cloud Deploy allows deployment targets to be shared across multiple delivery pipelines.

## Extended Definition

Cloud Deploy allows deployment targets to be shared across multiple delivery pipelines.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/automation](https://docs.cloud.google.com/deploy/docs/automation)
- [https://docs.cloud.google.com/deploy/docs/custom-targets](https://docs.cloud.google.com/deploy/docs/custom-targets)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-parallel](https://docs.cloud.google.com/deploy/docs/deploy-app-parallel)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-run](https://docs.cloud.google.com/deploy/docs/deploy-app-run)

## Supporting Pages

### Automate your deployment \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/automation](https://docs.cloud.google.com/deploy/docs/automation)
- Source ID: `site-docs-root-2`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Automation resources There are two Cloud Deploy resources that are specifically for automation: Automation An Automation is a child resource of a delivery pipeline, and it includes the following information: A pointer to the target or targets for which the automation is used The rule or rules that govern what the automation does and how it does it Configuration for the Automation resource is described in the document About the automation resource .
- For example, if you have three targets, dev , staging , and prod , you can configure an automation such that the release is promoted to prod , without further human interaction, upon a successful deployment into staging .
- Identity and Access Management roles and permissions required In addition to the permissions you need to run any Cloud Deploy delivery pipeline, and to perform the tasks to be automated (like advancing a rollout), there are several permissions that are needed in order to perform certain operations on the Automation and AutomationRun resources: clouddeploy.automations.create clouddeploy.automations.delete clouddeploy.automations.get clouddeploy.automations.list clouddeploy.automations.update clouddeploy.automationRuns.cancel clouddeploy.automationRuns.get clouddeploy.automationRuns.list In addition to these permissions, each automation rule might require further permissions to perform the automated operation.
- When you run gcloud deploy apply against a file that includes an automation configuration ( kind: Automation ), Cloud Deploy creates an automation resource , which associates a delivery pipeline and a target or targets with one or more automation rules .

### About custom targets \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/custom-targets](https://docs.cloud.google.com/deploy/docs/custom-targets)
- Source ID: `site-docs-root-2`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CLOUD DEPLOY OUTPUT GCS PATH The Cloud Storage path where the custom render container is expected to upload artifacts to be used for deployment.
- Custom targets and deployment strategies Custom targets are fully supported for standard deployments.
- With custom targets, you can deploy to other systems besides the supported runtimes.
- This document describes how custom targets work in Cloud Deploy.

### "Quickstart: Deploy an app to multiple targets at the same time \_|\_ Google\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-parallel](https://docs.cloud.google.com/deploy/docs/deploy-app-parallel)
- Source ID: `site-docs-root-2`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create your delivery pipeline and target definition: GKE In the deploy-gke-parallel-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-parallel-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: qsprod-multi profiles: [] deployParameters: - values: replicaCount: "1" matchTargetLabels: label1: label1 - values: replicaCount: "2" matchTargetLabels: label2: label2 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-multi description: production clusters multiTarget: targetIds: [qsprod-a, qsprod-b] --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-a labels: label1: label1 description: production cluster 2 gke: cluster: projects/ PROJECT ID /locations/us-central1/clusters/quickstart-cluster-qsprod1 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-b labels: label2: label2 description: production cluster 3 gke: cluster: projects/ PROJECT ID /locations/us-west1/clusters/quickstart-cluster-qsprod2 Note: In this file, targets are included with the delivery pipeline, but you can define targets in a separate file or multiple separate files.
- Cloud Run In the deploy-run-parallel-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-parallel-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: qsprod-multi profiles: [] deployParameters: - values: minInstances: "2" matchTargetLabels: label1: label1 - values: minInstances: "3" matchTargetLabels: label2: label2 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-multi description: production multiTarget: targetIds: [qsprod-a, qsprod-b] --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-a labels: label1: label1 description: production us-central1 run: location: projects/ PROJECT ID /locations/us-central1 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsprod-b labels: label2: label2 description: production us-west1 run: location: projects/ PROJECT ID /locations/us-west1 Note: In this file, targets are included with the delivery pipeline, but you can define targets in a separate file or multiple separate files.
- GKE Create a file named k8s-deployment.yaml , with the following contents: apiVersion: apps/v1 kind: Deployment metadata: name: my-deployment labels: app: my-app namespace: default spec: replicas: 1 # from-param: ${ replicaCount } selector: matchLabels: app: my-app template: metadata: labels: app: my-app spec: containers: - name: nginx image: my-app-image This file is a simple Kubernetes manifest , which is applied to the cluster to deploy the application.
- Deploy an app to multiple targets at the same time This page shows you how to use Cloud Deploy to deliver a sample application to two targets at the same time—a parallel deployment.

### "Quickstart: Deploy an app to Cloud Run using Cloud Deploy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-run](https://docs.cloud.google.com/deploy/docs/deploy-app-run)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Delete the deploy-qs-dev Cloud Run service, job, or worker pool: Services gcloud run services delete deploy - run - service - dev -- region = us - central1 -- project = PROJECT ID Jobs gcloud run jobs delete deploy - run - job - dev -- region = us - central1 -- project = PROJECT ID Worker pools (Preview) gcloud beta run worker-pools delete deploy-run-worker-pool-dev --region=us-central1 --project= PROJECT ID Delete the deploy-qs-prod service, job, or worker pool: Services gcloud run services delete deploy - run - service - prod -- region = us - central1 -- project = PROJECT ID Jobs gcloud run jobs delete deploy - run - job - prod -- region = us - central1 -- project = PROJECT ID Worker pools (Preview) gcloud beta run worker - pools delete deploy - run - worker - pool - prod -- region = us - central1 -- project = PROJECT ID Delete the delivery pipeline, targets, release and rollouts: gcloud deploy delete -- file = clouddeploy . yaml -- force -- region = us - central1 -- project = PROJECT ID Delete the Cloud Storage buckets that Cloud Deploy created.
- Define your Cloud Deploy delivery pipeline and deployment targets , which point to the two services, the two jobs, or the two worker pools.
- Run the following command from the deploy-run-quickstart directory to create a release resource that represents the container image to deploy: Services gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-run-demo-app-1 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a Jobs gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-run-demo-app-1 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/job@sha256:8eb3f5e72586de6375abe95aa67511c57c61d35fb37d5670e4d68624a68ef916 Worker pools (Preview) gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-run-demo-app-1 \ --skaffold-version=2.17.0 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a Notice the --images= flag , which you use to replace the placeholder ( my-app-image ) in the service, job, or worker pool definition with the specific, SHA-qualified image.
- Create a new directory, named deploy-run-quickstart and navigate into it. mkdir deploy-run-quickstart cd deploy-run-quickstart Create a file named skaffold.yaml with the following contents: Services apiVersion: skaffold/v4beta7 kind: Config metadata: name: deploy-run-quickstart profiles: - name: dev manifests: rawYaml: - run-service-dev.yaml - name: prod manifests: rawYaml: - run-service-prod.yaml deploy: cloudrun: {} Jobs apiVersion: skaffold/v4beta7 kind: Config metadata: name: deploy-run-quickstart profiles: - name: dev manifests: rawYaml: - run-job-dev.yaml - name: prod manifests: rawYaml: - run-job-prod.yaml deploy: cloudrun: {} Worker pools (Preview) apiVersion: skaffold/v4beta7 kind: Config metadata: name: deploy-run-quickstart profiles: - name: dev manifests: rawYaml: - run-worker-pool-dev.yaml - name: prod manifests: rawYaml: - run-worker-pool-prod.yaml deploy: cloudrun: {} This file is a minimal Skaffold config, identifying your Cloud Run services, jobs, or worker pools.

