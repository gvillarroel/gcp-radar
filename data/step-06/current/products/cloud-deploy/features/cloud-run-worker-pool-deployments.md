---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:42.660Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Cloud Run worker pool deployments"
feature_slug: "cloud-run-worker-pool-deployments"
latest_feature_date: "2026-02-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-run"
  - "https://docs.cloud.google.com/deploy/docs/execution-environment"
  - "https://docs.cloud.google.com/deploy/docs/gke-targets"
keywords:
  - "run"
  - "worker"
  - "pool"
  - "deployments"
  - "deploy"
  - "can"
  - "containerized"
  - "workloads"
---

# Cloud Run worker pool deployments

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Cloud Deploy can deploy containerized workloads to Cloud Run worker pools.

## Extended Definition

Cloud Deploy can deploy containerized workloads to Cloud Run worker pools.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/deploy-app-run](https://docs.cloud.google.com/deploy/docs/deploy-app-run)
- [https://docs.cloud.google.com/deploy/docs/execution-environment](https://docs.cloud.google.com/deploy/docs/execution-environment)
- [https://docs.cloud.google.com/deploy/docs/gke-targets](https://docs.cloud.google.com/deploy/docs/gke-targets)

## Supporting Pages

### "Quickstart: Deploy an app to Cloud Run using Cloud Deploy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-run](https://docs.cloud.google.com/deploy/docs/deploy-app-run)
- Source ID: `site-docs-reference-2`
- Final score: 85
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the following command from the deploy-run-quickstart directory to create a release resource that represents the container image to deploy: Services gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-run-demo-app-1 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a Jobs gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-run-demo-app-1 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/job@sha256:8eb3f5e72586de6375abe95aa67511c57c61d35fb37d5670e4d68624a68ef916 Worker pools (Preview) gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-run-demo-app-1 \ --skaffold-version=2.17.0 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a Notice the --images= flag , which you use to replace the placeholder ( my-app-image ) in the service, job, or worker pool definition with the specific, SHA-qualified image.
- Delete the deploy-qs-dev Cloud Run service, job, or worker pool: Services gcloud run services delete deploy - run - service - dev -- region = us - central1 -- project = PROJECT ID Jobs gcloud run jobs delete deploy - run - job - dev -- region = us - central1 -- project = PROJECT ID Worker pools (Preview) gcloud beta run worker-pools delete deploy-run-worker-pool-dev --region=us-central1 --project= PROJECT ID Delete the deploy-qs-prod service, job, or worker pool: Services gcloud run services delete deploy - run - service - prod -- region = us - central1 -- project = PROJECT ID Jobs gcloud run jobs delete deploy - run - job - prod -- region = us - central1 -- project = PROJECT ID Worker pools (Preview) gcloud beta run worker - pools delete deploy - run - worker - pool - prod -- region = us - central1 -- project = PROJECT ID Delete the delivery pipeline, targets, release and rollouts: gcloud deploy delete -- file = clouddeploy . yaml -- force -- region = us - central1 -- project = PROJECT ID Delete the Cloud Storage buckets that Cloud Deploy created.
- Create a new directory, named deploy-run-quickstart and navigate into it. mkdir deploy-run-quickstart cd deploy-run-quickstart Create a file named skaffold.yaml with the following contents: Services apiVersion: skaffold/v4beta7 kind: Config metadata: name: deploy-run-quickstart profiles: - name: dev manifests: rawYaml: - run-service-dev.yaml - name: prod manifests: rawYaml: - run-service-prod.yaml deploy: cloudrun: {} Jobs apiVersion: skaffold/v4beta7 kind: Config metadata: name: deploy-run-quickstart profiles: - name: dev manifests: rawYaml: - run-job-dev.yaml - name: prod manifests: rawYaml: - run-job-prod.yaml deploy: cloudrun: {} Worker pools (Preview) apiVersion: skaffold/v4beta7 kind: Config metadata: name: deploy-run-quickstart profiles: - name: dev manifests: rawYaml: - run-worker-pool-dev.yaml - name: prod manifests: rawYaml: - run-worker-pool-prod.yaml deploy: cloudrun: {} This file is a minimal Skaffold config, identifying your Cloud Run services, jobs, or worker pools.
- Worker pools (Preview) Create a file named run-worker-pool-dev.yaml with the following contents: apiVersion: run.googleapis.com/v1 kind: WorkerPool metadata: name: deploy-run-worker-pool-dev annotations: run.googleapis.com/launch-stage: BETA spec: template: spec: containers: - image: my-app-image This file defines a Cloud Run worker pool.

### Deploy to a Google Kubernetes Engine cluster \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/gke-targets](https://docs.cloud.google.com/deploy/docs/gke-targets)
- Source ID: `site-docs-reference-2`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here's an example that uses RENDER and DEPLOY : executionConfigs : - usages : - RENDER - DEPLOY workerPool : "projects/p123/locations/us-central1/workerPools/wp123" See Access private GKE clusters from Cloud Build private pools using Identity Service for GKE and Access private GKE clusters with Cloud Build private pools for more information.
- When Cloud Deploy and the worker pool are in separate projects To communicate with a private pool that has access to a VPC and that's in a different project from your target, the Cloud Deploy service agent needs sufficient permissions to talk to that project.
- Project and permissions considerations You can configure a target to use a private worker pool that can deploy to a private cluster.
- In Cloud Build, create a private worker pool that you can use to deploy to this private cluster.

### Using Cloud Deploy execution environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/execution-environment](https://docs.cloud.google.com/deploy/docs/execution-environment)
- Source ID: `site-docs-reference-2`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The execution environment consists of the following components: The Cloud Build worker pool (default or private) in which Cloud Deploy executes render, predeploy, deploy, verify, and postdeploy operations The service account (default or alternate) that calls Cloud Deploy to perform these actions The storage location (default or alternate) for rendered manifests in Cloud Storage The Cloud Build timeout for operations (default or custom) This document describes the default execution environment, service accounts, and storage for Cloud Deploy, as well as why and how you can change these defaults.
- The following is a sample target configuration that specifies a private worker pool for DEPLOY , and the default worker pool for RENDER , PREDEPLOY , POSTDEPLOY and VERIFY : executionConfigs : - usages : - DEPLOY privatePool : workerPool : "projects/p123/locations/us-central1/workerPools/wp123" - usages : - RENDER - PREDEPLOY - VERIFY - POSTDEPLOY Note: if Cloud Deploy is running in a different project from the worker pool's project, make sure the service agent has permission on the worker pool in that project.
- Changing the storage location To change the storage bucket from the Cloud Deploy default, add the following line to the target definition in the workerPool stanza: artifactStorage: "gs://[bucket name]/[dir]" This configuration changes where the rendered manifests are stored, but does not affect where the rendering source is stored .
- To do so, add the following line to the target configuration, after the workerPool element: serviceAccount: "[name]@[project name].iam.gserviceaccount.com" The specified service account must include the clouddeploy.jobRunner role, as described in the Cloud Deploy service accounts document.

