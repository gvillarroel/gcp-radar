---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:23.487Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Release configuration file comparison in Cloud Console"
feature_slug: "release-configuration-file-comparison-in-cloud-console"
latest_feature_date: "2022-07-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-in-console"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-hooks"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-analysis"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-run"
keywords:
  - "release"
  - "configuration"
  - "file"
  - "comparison"
  - "in"
  - "console"
  - "deploy"
  - "added"
---

# Release configuration file comparison in Cloud Console

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Cloud Deploy added the ability to view and compare Kubernetes and Skaffold configuration files for releases in the Google Cloud Console.

## Extended Definition

Cloud Deploy added the ability to view and compare Kubernetes and Skaffold configuration files for releases in the Google Cloud Console.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/deploy-app-in-console](https://docs.cloud.google.com/deploy/docs/deploy-app-in-console)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-hooks](https://docs.cloud.google.com/deploy/docs/deploy-app-hooks)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-analysis](https://docs.cloud.google.com/deploy/docs/deploy-app-analysis)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-run](https://docs.cloud.google.com/deploy/docs/deploy-app-run)

## Supporting Pages

### "Quickstart: Create a pipeline and release in the Google Cloud console \_\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-in-console](https://docs.cloud.google.com/deploy/docs/deploy-app-in-console)
- Source ID: `site-docs-root-2`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GKE clusters are externally accessible by default. gcloud container clusters create - auto quickstart - cluster - for - console - staging \ -- project = PROJECT ID \ -- region = us - central1 && \ gcloud container clusters create - auto quickstart - cluster - for - console - prod \ -- project = PROJECT ID \ -- region = us - central1 Create a delivery pipeline and two targets You can use Cloud Deploy to create a delivery pipeline and targets based on configuration specified in one or more YAML files.
- Create a pipeline and release in the Google Cloud console This page shows you how to use the Google Cloud console to create a Cloud Deploy delivery pipeline, and then create a release for that pipeline.
- Delete the GKE clusters or Cloud Run services: GKE gcloud container clusters delete quickstart - cluster - for - console - staging -- region = us - central1 -- project = PROJECT ID \ && gcloud container clusters delete quickstart - cluster - for - console - prod -- region = us - central1 -- project = PROJECT ID Cloud Run gcloud run services delete in - console - quickstart - pipeline - target - 1 -- region = us - central1 -- project = PROJECT ID \ && gcloud run services delete in - console - quickstart - pipeline - target - 2 -- region = us - central1 -- project = PROJECT ID From the delivery pipeline page, click Delete to delete the delivery pipeline, the release, and rollouts.
- Delete both targets: gcloud deploy targets delete console - staging -- region = us - central1 && \ gcloud deploy targets delete console - prod -- region = us - central1 Delete the Cloud Storage buckets that Cloud Deploy created.

### "Quickstart: Run hooks before and after deploying \_|\_ Cloud Deploy \_|\_\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-hooks](https://docs.cloud.google.com/deploy/docs/deploy-app-hooks)
- Source ID: `site-docs-root-2`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Delete the GKE cluster or Cloud Run service: GKE gcloud container clusters delete deploy - hooks - cluster -- region = us - central1 -- project = PROJECT ID Cloud Run gcloud run services delete my - hooks - run - service -- region = us - central1 -- project = PROJECT ID Delete the delivery pipeline, target, release, and rollout: gcloud deploy delete -- file = clouddeploy . yaml -- force -- region = us - central1 -- project = PROJECT ID Delete the Cloud Storage buckets that Cloud Deploy created.
- Create a file named skaffold.yaml with the following contents: GKE apiVersion: skaffold/v4beta7 kind: Config manifests: rawYaml: - k8s-pod.yaml deploy: kubectl: {} Cloud Run apiVersion: skaffold/v4beta7 kind: Config manifests: rawYaml: - service.yaml deploy: cloudrun: {} See the skaffold.yaml reference for more information about this configuration file.
- View the results in Google Cloud console After a few minutes, your release is deployed into your target runtime.
- GKE mkdir deploy-hooks-gke-quickstart cd deploy-hooks-gke-quickstart Cloud Run mkdir deploy-hooks-run-quickstart cd deploy-hooks-run-quickstart Create your delivery pipeline and target definition: GKE In the deploy-hooks-gke-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy . cloud . google . com / v1 kind : DeliveryPipeline metadata : name : deploy - hooks - demo - app - gke - 1 description : main application pipeline serialPipeline : stages : - targetId : hooks - staging profiles : [] strategy : standard : predeploy : tasks : - type : container image : ubuntu command : [ "/bin/sh" ] args : [ "-c" , ' echo "this is a predeploy action" ' ] postdeploy : tasks : - type : container image : ubuntu command : [ "/bin/sh" ] args : [ "-c" , ' echo "this is a postdeploy action" ' ] --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : hooks - staging description : hooks staging cluster gke : cluster : projects / PROJECT ID / locations / us - central1 / clusters / deploy - hooks - cluster Cloud Run In the deploy-hooks-run-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy . cloud . google . com / v1 kind : DeliveryPipeline metadata : name : deploy - hooks - demo - app - run - 1 description : main application pipeline serialPipeline : stages : - targetId : hooks - staging profiles : [] strategy : standard : predeploy : tasks : - type : container image : ubuntu command : [ "/bin/sh" ] args : [ "-c" , ' echo "this is a predeploy action" ' ] postdeploy : tasks : - type : container image : ubuntu command : [ "/bin/sh" ] args : [ "-c" , ' echo "this is a postdeploy action" ' ] --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : hooks - staging description : staging Run service run : location : projects / PROJECT ID / locations / us - central1 Note: In this file, the target is included with the delivery pipeline, but you can define targets in a separate file or multiple separate files.

### "Quickstart: Run analysis on your application after deploying it \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-analysis](https://docs.cloud.google.com/deploy/docs/deploy-app-analysis)
- Source ID: `site-docs-root-2`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the deploy-analysis-run-quickstart directory, create a file called policy.yaml , with the following contents: displayName : Cloud Run service uptime check userLabels : policy-for : analysis-run-pipeline combiner : OR conditions : - displayName : Failure of uptime check UPTIME ID conditionThreshold : filter : metric.type="monitoring.googleapis.com/uptime check/check passed" AND metric.label.check id=" UPTIME ID " AND resource.type="cloud run revision" aggregations : - alignmentPeriod : 60s crossSeriesReducer : REDUCE COUNT FALSE groupByFields : - resource.label. perSeriesAligner : ALIGN NEXT OLDER comparison : COMPARISON GT duration : 60s thresholdValue : 1.0 Replace UPTIME ID with the ID of the uptime check you created before .
- Delete the Cloud Run service: gcloud run services delete my-analysis-run-service \ --region = us-central1 \ --project = PROJECT ID To delete the delivery pipeline, target, release, and rollout, run the following command from the directory containing your delivery pipeline definition: gcloud deploy delete --file = clouddeploy.yaml \ --force \ --region = us-central1 \ --project = PROJECT ID Delete the Google Cloud Observability alert policy: gcloud monitoring policies delete ALERT POLICY ID Delete the Cloud Storage buckets that Cloud Deploy created.
- Create a new directory and navigate into it. mkdir deploy-analysis-run-quickstart cd deploy-analysis-run-quickstart Create a file named skaffold.yaml with the following contents: apiVersion : skaffold/v4beta7 kind : Config manifests : rawYaml : - service.yaml deploy : cloudrun : {} See the skaffold.yaml reference for more information about this configuration file.
- Prepare your Skaffold configuration and service definition In this quickstart, you create a skaffold.yaml file, which identifies the manifest to be used to deploy the sample Cloud Run service, and you also define the service.yaml file that defines the Cloud Run itself.

### "Quickstart: Deploy an app to Cloud Run using Cloud Deploy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-run](https://docs.cloud.google.com/deploy/docs/deploy-app-run)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Delete the deploy-qs-dev Cloud Run service, job, or worker pool: Services gcloud run services delete deploy - run - service - dev -- region = us - central1 -- project = PROJECT ID Jobs gcloud run jobs delete deploy - run - job - dev -- region = us - central1 -- project = PROJECT ID Worker pools (Preview) gcloud beta run worker-pools delete deploy-run-worker-pool-dev --region=us-central1 --project= PROJECT ID Delete the deploy-qs-prod service, job, or worker pool: Services gcloud run services delete deploy - run - service - prod -- region = us - central1 -- project = PROJECT ID Jobs gcloud run jobs delete deploy - run - job - prod -- region = us - central1 -- project = PROJECT ID Worker pools (Preview) gcloud beta run worker - pools delete deploy - run - worker - pool - prod -- region = us - central1 -- project = PROJECT ID Delete the delivery pipeline, targets, release and rollouts: gcloud deploy delete -- file = clouddeploy . yaml -- force -- region = us - central1 -- project = PROJECT ID Delete the Cloud Storage buckets that Cloud Deploy created.
- Run the following command from the deploy-run-quickstart directory to create a release resource that represents the container image to deploy: Services gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-run-demo-app-1 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a Jobs gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-run-demo-app-1 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/job@sha256:8eb3f5e72586de6375abe95aa67511c57c61d35fb37d5670e4d68624a68ef916 Worker pools (Preview) gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-run-demo-app-1 \ --skaffold-version=2.17.0 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a Notice the --images= flag , which you use to replace the placeholder ( my-app-image ) in the service, job, or worker pool definition with the specific, SHA-qualified image.
- Create a new directory, named deploy-run-quickstart and navigate into it. mkdir deploy-run-quickstart cd deploy-run-quickstart Create a file named skaffold.yaml with the following contents: Services apiVersion: skaffold/v4beta7 kind: Config metadata: name: deploy-run-quickstart profiles: - name: dev manifests: rawYaml: - run-service-dev.yaml - name: prod manifests: rawYaml: - run-service-prod.yaml deploy: cloudrun: {} Jobs apiVersion: skaffold/v4beta7 kind: Config metadata: name: deploy-run-quickstart profiles: - name: dev manifests: rawYaml: - run-job-dev.yaml - name: prod manifests: rawYaml: - run-job-prod.yaml deploy: cloudrun: {} Worker pools (Preview) apiVersion: skaffold/v4beta7 kind: Config metadata: name: deploy-run-quickstart profiles: - name: dev manifests: rawYaml: - run-worker-pool-dev.yaml - name: prod manifests: rawYaml: - run-worker-pool-prod.yaml deploy: cloudrun: {} This file is a minimal Skaffold config, identifying your Cloud Run services, jobs, or worker pools.
- In the deploy-run-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy.cloud.google.com/v1 kind : DeliveryPipeline metadata : name : my-run-demo-app-1 description : main application pipeline serialPipeline : stages : - targetId : run-qsdev profiles : [ dev ] - targetId : run-qsprod profiles : [ prod ] --- apiVersion : deploy.cloud.google.com/v1 kind : Target metadata : name : run-qsdev description : Cloud Run development service run : location : projects/ PROJECT ID /locations/us-central1 --- apiVersion : deploy.cloud.google.com/v1 kind : Target metadata : name : run-qsprod description : Cloud Run production service run : location : projects/ PROJECT ID /locations/us-central1 Note: In this file, targets are included with the delivery pipeline, but you can define targets in a separate file or multiple separate files.

