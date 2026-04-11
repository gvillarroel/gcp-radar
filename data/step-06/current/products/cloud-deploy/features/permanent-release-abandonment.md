---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:17:26.786Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Permanent release abandonment"
feature_slug: "permanent-release-abandonment"
latest_feature_date: "2022-07-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/release-notes"
  - "https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-canary"
keywords:
  - "permanent"
  - "release"
  - "abandonment"
  - "deploy"
  - "added"
  - "the"
  - "ability"
  - "to"
---

# Permanent release abandonment

Product: Cloud Deploy
Coverage: LOW

## Step 02 Summary

Cloud Deploy added the ability to permanently abandon a release.

## Extended Definition

Cloud Deploy added the ability to permanently abandon a release.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/release-notes](https://docs.cloud.google.com/deploy/docs/release-notes)
- [https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis](https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-canary](https://docs.cloud.google.com/deploy/docs/deploy-app-canary)

## Supporting Pages

### Cloud Deploy release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/release-notes](https://docs.cloud.google.com/deploy/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- July 17, 2023 Feature Cloud Deploy now provides the ability to pass deploy parameters to your manifests, per delivery pipeline, per target, and per release (in preview ).
- Feature You can now access sample custom targets , including the following: Terraform Infrastructure Manager GitOps Vertex AI Helm December 05, 2023 Change Google Cloud Deploy is now available in the following regions: europe-southwest1 (Madrid) europe-west8 (Milan) europe-west9 (Paris) me-west1 (Israel) us-east5 (Columbus) us-south1 (Dallas) November 16, 2023 Feature You can now configure alerts for Cloud Deploy release render failures.
- March 06, 2023 Feature Google Cloud Deploy now provides the ability to deploy to multiple targets at the same time , supported in preview .
- Virginia) us-west2 (Los Angeles) June 28, 2022 Announcement The ability to deploy to Anthos user clusters is now generally available .

### "Define analysis jobs that use Google Cloud Observability \_|\_ Cloud Deploy\

- URL: [https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis](https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis)
- Source ID: `site-docs-root-2`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- As another example, you can create a similar alerting policy on your application deployed to your staging environment, and if no alert fires during the duration of the analysis job, that job can trigger a promoteReleaseRule automation to promote the release to production.
- Learn how to grant roles . gcloud services enable clouddeploy.googleapis.com compute.googleapis.com Required roles To get the permissions that you need to create and use analysis jobs, ask your administrator to grant you the following IAM roles on the account for your project: Cloud Deploy Runner ( roles/clouddeploy.jobRunner ) Monitoring Alert Viewer ( roles/monitoring.alertPolicyViewer ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Apply your delivery pipeline configuration file To create a delivery pipeline with your analysis job, apply the configuration file using the following command: gcloud deploy apply FILE \ --region = REGION \ --project = PROJECT ID Replace the following: FILE With the name of your delivery pipeline configuration file , clouddeploy.yaml or whatever name you gave it.
- The following is the syntax for configuring an analysis job when using a standard deployment strategy: strategy : standard : analysis : duration : DURATION googleCloud : alertPolicyChecks : - id : CHECK ID alertPolicies : - [ ALERT POLICY ID ] labels : [ KEY : VALUE ] Where: DURATION Is how long, in seconds, to run the analysis job.

### "Quickstart: Canary-deploy an application to a target \_|\_ Cloud Deploy\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-canary](https://docs.cloud.google.com/deploy/docs/deploy-app-canary)
- Source ID: `site-docs-root-2`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- For GKE, and GKE with Gateway API: gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:$(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --role="roles/container.developer" For Cloud Run: gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:$(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --role="roles/run.developer" Add the iam.serviceAccountUser role, which includes the actAs permission to deploy to the runtime: gcloud iam service-accounts add-iam-policy-binding $(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --member=serviceAccount:$(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --role="roles/iam.serviceAccountUser" \ --project= PROJECT ID Create your runtime environment GKE Create one GKE Autopilot cluster: gcloud container clusters create - auto canary - quickstart - cluster \ -- project = PROJECT ID \ -- region = us - central1 GKE + Gateway API Create one GKE cluster, with recommended settings to support using with Istio: gcloud container clusters create canary-quickstart-cluster \ --machine-type = n1-standard-1 \ --num-nodes 4 \ --region = us-central1 \ --project = PROJECT ID Get the cluster credentials: gcloud container clusters get-credentials canary-quickstart-cluster \ --project = PROJECT ID \ --region = us-central1 Install the Kubernetes Gateway API CRDs if not already present on the cluster. kubectl apply -f https://github.com/kubernetes-sigs/gateway-api/releases/download/v0.6.2/standard-install.yaml Enable Istio's Gateway controller implementation by installing Istio. curl -L https://istio.io/downloadIstio ISTIO VERSION = 1 .17.2 sh - \ && ./istio-1.17.2/bin/istioctl install --set profile = minimal -y Cloud Run If you're using Cloud Run, you can skip this command, you don't need to do anything here.
- To create a new release , run the following command from the deploy-canary-quickstart-gke , deploy-canary-quickstart-gke-gatewayapi or deploy-canary-quickstart-run directory: GKE gcloud deploy releases create test - release - 002 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-canary-demo-app-1 \ --images=my-app-image=gcr.io/google-containers/nginx@sha256:f49a843c290594dcf4d193535d1f4ba8af7d56cea2cf79d1e9554f077f1e7aaa GKE + Gateway API gcloud deploy releases create test - release - 002 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-canary-demo-app-1 \ --images=my-app-image=gcr.io/google-containers/nginx@sha256:f49a843c290594dcf4d193535d1f4ba8af7d56cea2cf79d1e9554f077f1e7aaa Cloud Run gcloud deploy releases create test - release - 002 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-canary-demo-app-1 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a After a few minutes, a rollout is created, and this time the canary stage is executed: When the first rollout phase finishes, the rollout is now in the canary phase: This means that the application is now deployed to 50%.
- To create a release resource that represents the container image to deploy, run the following command from the deploy-canary-quickstart-gke , deploy-canary-quickstart-gke-gatewayapi , or deploy-canary-quickstart-run directory: GKE gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-canary-demo-app-1 \ --images=my-app-image=gcr.io/google-containers/nginx@sha256:f49a843c290594dcf4d193535d1f4ba8af7d56cea2cf79d1e9554f077f1e7aaa GKE + Gateway API gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-canary-demo-app-1 \ --images=my-app-image=gcr.io/google-containers/nginx@sha256:f49a843c290594dcf4d193535d1f4ba8af7d56cea2cf79d1e9554f077f1e7aaa Cloud Run gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-canary-demo-app-1 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a Notice the --images= flag , which you use to replace the placeholder ( my-app-image ) in the manifest or service definition with the specific, SHA-qualified image.
- Delete the canary-quickstart-cluster cluster (GKE only): gcloud container clusters delete canary - quickstart - cluster -- region = us - central1 -- project = PROJECT ID Delete the my-canary-run-service service (Cloud Run only): gcloud run services delete my - canary - run - service -- region = us - central1 -- project = PROJECT ID Delete the delivery pipeline, target, and all release and rollout resources: gcloud deploy delete -- file = clouddeploy . yaml -- force -- region = us - central1 -- project = PROJECT ID Delete the Cloud Storage buckets that Cloud Deploy created.

