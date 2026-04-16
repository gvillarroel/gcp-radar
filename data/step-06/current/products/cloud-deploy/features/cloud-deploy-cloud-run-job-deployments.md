---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:23.481Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Cloud Deploy Cloud Run job deployments"
feature_slug: "cloud-deploy-cloud-run-job-deployments"
latest_feature_date: "2023-10-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-run"
  - "https://docs.cloud.google.com/deploy/docs/analysis"
  - "https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-hooks"
keywords:
  - "deploy"
  - "run"
  - "job"
  - "deployments"
  - "can"
  - "now"
  - "jobs"
  - "in"
---

# Cloud Deploy Cloud Run job deployments

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Cloud Deploy can now deploy Cloud Run jobs in addition to Cloud Run services.

## Extended Definition

Cloud Deploy can now deploy Cloud Run jobs in addition to Cloud Run services.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/deploy-app-run](https://docs.cloud.google.com/deploy/docs/deploy-app-run)
- [https://docs.cloud.google.com/deploy/docs/analysis](https://docs.cloud.google.com/deploy/docs/analysis)
- [https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis](https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-hooks](https://docs.cloud.google.com/deploy/docs/deploy-app-hooks)

## Supporting Pages

### "Quickstart: Deploy an app to Cloud Run using Cloud Deploy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-run](https://docs.cloud.google.com/deploy/docs/deploy-app-run)
- Source ID: `site-docs-root`
- Final score: 283
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the following command from the deploy-run-quickstart directory to create a release resource that represents the container image to deploy: Services gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-run-demo-app-1 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a Jobs gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-run-demo-app-1 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/job@sha256:8eb3f5e72586de6375abe95aa67511c57c61d35fb37d5670e4d68624a68ef916 Worker pools (Preview) gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-run-demo-app-1 \ --skaffold-version=2.17.0 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a Notice the --images= flag , which you use to replace the placeholder ( my-app-image ) in the service, job, or worker pool definition with the specific, SHA-qualified image.
- Delete the deploy-qs-dev Cloud Run service, job, or worker pool: Services gcloud run services delete deploy - run - service - dev -- region = us - central1 -- project = PROJECT ID Jobs gcloud run jobs delete deploy - run - job - dev -- region = us - central1 -- project = PROJECT ID Worker pools (Preview) gcloud beta run worker-pools delete deploy-run-worker-pool-dev --region=us-central1 --project= PROJECT ID Delete the deploy-qs-prod service, job, or worker pool: Services gcloud run services delete deploy - run - service - prod -- region = us - central1 -- project = PROJECT ID Jobs gcloud run jobs delete deploy - run - job - prod -- region = us - central1 -- project = PROJECT ID Worker pools (Preview) gcloud beta run worker - pools delete deploy - run - worker - pool - prod -- region = us - central1 -- project = PROJECT ID Delete the delivery pipeline, targets, release and rollouts: gcloud deploy delete -- file = clouddeploy . yaml -- force -- region = us - central1 -- project = PROJECT ID Delete the Cloud Storage buckets that Cloud Deploy created.
- Create a new directory, named deploy-run-quickstart and navigate into it. mkdir deploy-run-quickstart cd deploy-run-quickstart Create a file named skaffold.yaml with the following contents: Services apiVersion: skaffold/v4beta7 kind: Config metadata: name: deploy-run-quickstart profiles: - name: dev manifests: rawYaml: - run-service-dev.yaml - name: prod manifests: rawYaml: - run-service-prod.yaml deploy: cloudrun: {} Jobs apiVersion: skaffold/v4beta7 kind: Config metadata: name: deploy-run-quickstart profiles: - name: dev manifests: rawYaml: - run-job-dev.yaml - name: prod manifests: rawYaml: - run-job-prod.yaml deploy: cloudrun: {} Worker pools (Preview) apiVersion: skaffold/v4beta7 kind: Config metadata: name: deploy-run-quickstart profiles: - name: dev manifests: rawYaml: - run-worker-pool-dev.yaml - name: prod manifests: rawYaml: - run-worker-pool-prod.yaml deploy: cloudrun: {} This file is a minimal Skaffold config, identifying your Cloud Run services, jobs, or worker pools.
- Deploy an app to Cloud Run using Cloud Deploy This page shows you how to use Cloud Deploy to deliver a sample application image named hello to a sequence of two Cloud Run services, two Cloud Run jobs, or two Cloud Run worker pools. (Cloud Run worker pools are in Preview ).

### Run analysis jobs in Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/analysis](https://docs.cloud.google.com/deploy/docs/analysis)
- Source ID: `site-docs-root-2`
- Final score: 282
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application development Cloud Deploy Guides Send feedback Run analysis jobs in Cloud Deploy Stay organized with collections Save and categorize content based on your preferences.
- Deploy your application The analysis job runs after the deploy job, and after the verify job, if your release includes one, but before any post-deploy jobs , if your release includes any.
- If you use a custom or custom-automated canary deployment, you configure analysis jobs inside the configuration for each phase you want to analyse.
- You can run analysis jobs in any target environment (for example, staging or prod).

### "Define analysis jobs that use Google Cloud Observability \_|\_ Cloud Deploy\

- URL: [https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis](https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis)
- Source ID: `site-docs-root-2`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Learn how to grant roles . gcloud services enable clouddeploy.googleapis.com compute.googleapis.com Required roles To get the permissions that you need to create and use analysis jobs, ask your administrator to grant you the following IAM roles on the account for your project: Cloud Deploy Runner ( roles/clouddeploy.jobRunner ) Monitoring Alert Viewer ( roles/monitoring.alertPolicyViewer ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- The following is the syntax for configuring an analysis job when using a standard deployment strategy: strategy : standard : analysis : duration : DURATION googleCloud : alertPolicyChecks : - id : CHECK ID alertPolicies : - [ ALERT POLICY ID ] labels : [ KEY : VALUE ] Where: DURATION Is how long, in seconds, to run the analysis job.
- As another example, you can create a similar alerting policy on your application deployed to your staging environment, and if no alert fires during the duration of the analysis job, that job can trigger a promoteReleaseRule automation to promote the release to production.
- Home Documentation Application development Cloud Deploy Guides Send feedback Define analysis jobs that use Google Cloud Observability Stay organized with collections Save and categorize content based on your preferences.

### "Quickstart: Run hooks before and after deploying \_|\_ Cloud Deploy \_|\_\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-hooks](https://docs.cloud.google.com/deploy/docs/deploy-app-hooks)
- Source ID: `site-docs-root-2`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Register your pipeline and targets with the Cloud Deploy service: gcloud deploy apply --file=clouddeploy.yaml --region=us-central1 --project= PROJECT ID You now have a delivery pipeline, with one target, ready to deploy your application and run your pre-deploy and post-deploy jobs.
- GKE mkdir deploy-hooks-gke-quickstart cd deploy-hooks-gke-quickstart Cloud Run mkdir deploy-hooks-run-quickstart cd deploy-hooks-run-quickstart Create your delivery pipeline and target definition: GKE In the deploy-hooks-gke-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy . cloud . google . com / v1 kind : DeliveryPipeline metadata : name : deploy - hooks - demo - app - gke - 1 description : main application pipeline serialPipeline : stages : - targetId : hooks - staging profiles : [] strategy : standard : predeploy : tasks : - type : container image : ubuntu command : [ "/bin/sh" ] args : [ "-c" , ' echo "this is a predeploy action" ' ] postdeploy : tasks : - type : container image : ubuntu command : [ "/bin/sh" ] args : [ "-c" , ' echo "this is a postdeploy action" ' ] --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : hooks - staging description : hooks staging cluster gke : cluster : projects / PROJECT ID / locations / us - central1 / clusters / deploy - hooks - cluster Cloud Run In the deploy-hooks-run-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy . cloud . google . com / v1 kind : DeliveryPipeline metadata : name : deploy - hooks - demo - app - run - 1 description : main application pipeline serialPipeline : stages : - targetId : hooks - staging profiles : [] strategy : standard : predeploy : tasks : - type : container image : ubuntu command : [ "/bin/sh" ] args : [ "-c" , ' echo "this is a predeploy action" ' ] postdeploy : tasks : - type : container image : ubuntu command : [ "/bin/sh" ] args : [ "-c" , ' echo "this is a postdeploy action" ' ] --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : hooks - staging description : staging Run service run : location : projects / PROJECT ID / locations / us - central1 Note: In this file, the target is included with the delivery pipeline, but you can define targets in a separate file or multiple separate files.
- For GKE: gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:$(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --role="roles/container.developer" For Cloud Run: gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:$(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --role="roles/run.developer" Add the iam.serviceAccountUser role, which includes the actAs permission to deploy to the runtime: gcloud iam service-accounts add-iam-policy-binding $(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --member=serviceAccount:$(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --role="roles/iam.serviceAccountUser" \ --project= PROJECT ID Create your runtime environment If you're deploying to Cloud Run, you can skip this command .
- First add the clouddeploy.jobRunner role: gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:$(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --role="roles/clouddeploy.jobRunner" Add the developer role for your specific runtime.

