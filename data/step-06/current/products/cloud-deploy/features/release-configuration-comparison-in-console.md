---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:42.674Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Release configuration comparison in console"
feature_slug: "release-configuration-comparison-in-console"
latest_feature_date: "2022-07-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-in-console"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-canary"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-hooks"
keywords:
  - "release"
  - "configuration"
  - "comparison"
  - "console"
  - "can"
  - "view"
  - "compare"
  - "kubernetes"
---

# Release configuration comparison in console

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud console can view and compare Kubernetes and Skaffold configuration files for releases.

## Extended Definition

The Google Cloud console can view and compare Kubernetes and Skaffold configuration files for releases.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/deploy-app-in-console](https://docs.cloud.google.com/deploy/docs/deploy-app-in-console)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-canary](https://docs.cloud.google.com/deploy/docs/deploy-app-canary)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-hooks](https://docs.cloud.google.com/deploy/docs/deploy-app-hooks)

## Supporting Pages

### "Quickstart: Create a pipeline and release in the Google Cloud console \_\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-in-console](https://docs.cloud.google.com/deploy/docs/deploy-app-in-console)
- Source ID: `site-docs-reference-2`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Delete the GKE clusters or Cloud Run services: GKE gcloud container clusters delete quickstart - cluster - for - console - staging -- region = us - central1 -- project = PROJECT ID \ && gcloud container clusters delete quickstart - cluster - for - console - prod -- region = us - central1 -- project = PROJECT ID Cloud Run gcloud run services delete in - console - quickstart - pipeline - target - 1 -- region = us - central1 -- project = PROJECT ID \ && gcloud run services delete in - console - quickstart - pipeline - target - 2 -- region = us - central1 -- project = PROJECT ID From the delivery pipeline page, click Delete to delete the delivery pipeline, the release, and rollouts.
- GKE clusters are externally accessible by default. gcloud container clusters create - auto quickstart - cluster - for - console - staging \ -- project = PROJECT ID \ -- region = us - central1 && \ gcloud container clusters create - auto quickstart - cluster - for - console - prod \ -- project = PROJECT ID \ -- region = us - central1 Create a delivery pipeline and two targets You can use Cloud Deploy to create a delivery pipeline and targets based on configuration specified in one or more YAML files.
- Create a pipeline and release in the Google Cloud console This page shows you how to use the Google Cloud console to create a Cloud Deploy delivery pipeline, and then create a release for that pipeline.
- From the Kubernetes Engine cluster drop-down, select quickstart-cluster-for-console-staging .

### "Quickstart: Run hooks before and after deploying \_|\_ Cloud Deploy \_|\_\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-hooks](https://docs.cloud.google.com/deploy/docs/deploy-app-hooks)
- Source ID: `site-docs-root-2`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View the results in Google Cloud console After a few minutes, your release is deployed into your target runtime.
- In the Google Cloud console, navigate to the Cloud Deploy Delivery pipelines page to view your delivery pipeline ("deploy-hooks-demo-app-gke-1" or "deploy-hooks-demo-app-run-1").
- Confirm your pipeline and targets: In the Google Cloud console, navigate to the Cloud Deploy Delivery pipelines page to view of list of your available delivery pipelines.
- View the results of the pre- and post-deploy hooks in the Cloud Build logs, using the Cloud Deploy Rollout details page in Google Cloud console.

### "Quickstart: Canary-deploy an application to a target \_|\_ Cloud Deploy\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-canary](https://docs.cloud.google.com/deploy/docs/deploy-app-canary)
- Source ID: `site-docs-reference-required-3`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View the release in Google Cloud console Now that you've created the first release, the rollout is created, and you can view the release and the rollout in Google Cloud console.
- View the delivery pipeline and release in the Google Cloud console.
- For GKE, and GKE with Gateway API: gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:$(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --role="roles/container.developer" For Cloud Run: gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:$(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --role="roles/run.developer" Add the iam.serviceAccountUser role, which includes the actAs permission to deploy to the runtime: gcloud iam service-accounts add-iam-policy-binding $(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --member=serviceAccount:$(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --role="roles/iam.serviceAccountUser" \ --project= PROJECT ID Create your runtime environment GKE Create one GKE Autopilot cluster: gcloud container clusters create - auto canary - quickstart - cluster \ -- project = PROJECT ID \ -- region = us - central1 GKE + Gateway API Create one GKE cluster, with recommended settings to support using with Istio: gcloud container clusters create canary-quickstart-cluster \ --machine-type = n1-standard-1 \ --num-nodes 4 \ --region = us-central1 \ --project = PROJECT ID Get the cluster credentials: gcloud container clusters get-credentials canary-quickstart-cluster \ --project = PROJECT ID \ --region = us-central1 Install the Kubernetes Gateway API CRDs if not already present on the cluster. kubectl apply -f https://github.com/kubernetes-sigs/gateway-api/releases/download/v0.6.2/standard-install.yaml Enable Istio's Gateway controller implementation by installing Istio. curl -L https://istio.io/downloadIstio ISTIO VERSION = 1 .17.2 sh - \ && ./istio-1.17.2/bin/istioctl install --set profile = minimal -y Cloud Run If you're using Cloud Run, you can skip this command, you don't need to do anything here.
- Confirm your pipeline and targets: In the Google Cloud console, navigate to the Cloud Deploy Delivery pipelines page to view of list of your available delivery pipelines.

