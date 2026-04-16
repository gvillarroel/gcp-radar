---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.311Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "K8sRequireCosNodeImage constraint template"
feature_slug: "k8srequirecosnodeimage-constraint-template"
latest_feature_date: "2022-07-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories"
keywords:
  - "k8srequirecosnodeimage"
  - "constraint"
  - "template"
  - "requires"
  - "kubernetes"
  - "nodes"
  - "use"
  - "container"
---

# K8sRequireCosNodeImage constraint template

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

This constraint template requires Kubernetes nodes to use Container-Optimized OS node images.

## Extended Definition

This constraint template requires Kubernetes nodes to use Container-Optimized OS node images.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)

## Supporting Pages

### Deploy fleet packages \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create or update the fleet package: Create a fleet package gcloud container fleet packages create FLEET PACKAGE NAME \ --source = fleetpackage-spec.yaml Update a fleet package gcloud container fleet packages update FLEET PACKAGE NAME \ --source = fleetpackage-spec.yaml Delete a fleet package Deleting a fleet package also deletes the following resources: The Kubernetes resources deployed on your clusters The fleet package rollout history To delete a fleet package, run the following command: gcloud container fleet packages delete FLEET PACKAGE NAME --force Troubleshoot To find methods for diagnosing and resolving errors related to Cloud Build, see Troubleshooting build errors .
- When the build trigger successfully completes, the output of gcloud container fleet packages list is similar to the following: NAME STATE CREATE TIME ACTIVE ROLLOUT LAST COMPLETED ROLLOUT MESSAGES my-fleet-package ACTIVE 2024 -07-09T15:15:56 rollout-20240709-153621 The fleet package starts rolling out the Kubernetes resources across your fleet.
- Create or update your FleetPackage spec with the label selector: resourceBundleSelector : cloudBuildRepository : name : projects/ PROJECT ID /locations/us-central1/connections/ CONNECTION NAME /repositories/ REPOSITORY NAME tag : TAG serviceAccount : projects/ PROJECT ID /serviceAccounts/ SERVICE ACCOUNT NAME @ PROJECT ID . iam.gserviceaccount.com path : CONFIG FILE PATH target : fleet : project : projects/ PROJECT ID selector : matchLabels : KEY : " VALUE " rolloutStrategy : rolling : maxConcurrent : MAX CLUSTERS Create or update the fleet package: Create a fleet package gcloud container fleet packages create FLEET PACKAGE NAME \ --source = fleetpackage-spec.yaml Update a fleet package gcloud container fleet packages update FLEET PACKAGE NAME \ --source = fleetpackage-spec.yaml Deploy variant resources to clusters You can deploy unique configurations to different clusters (for example, dev versus prod ) by adding variant definitions to your fleet package.
- To deploy a fleet package with variants, complete the following steps: Create or update your FleetPackage spec to include the variantsPattern and variantNameTemplate fields: resourceBundleSelector : cloudBuildRepository : name : projects/ PROJECT ID /locations/us-central1/connections/ CONNECTION NAME /repositories/ REPOSITORY NAME tag : TAG serviceAccount : projects/ PROJECT ID /serviceAccounts/ SERVICE ACCOUNT NAME @ PROJECT ID . iam.gserviceaccount.com path : CONFIG FILE PATH variantsPattern : VARIANT PATTERN target : fleet : project : projects/ PROJECT ID rolloutStrategy : rolling : maxConcurrent : MAX CLUSTERS target : fleet : project : projects/ PROJECT ID variantSelector : variantNameTemplate : VARIANT NAME TEMPLATE Replace the following: VARIANT PATTERN : a glob pattern to generate variants from your repository, such as (matches all files and directories) or .yaml (matches only files).

### "Quickstart: Deploy Kubernetes resources across a fleet \_|\_ Config Sync\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Name your file deployment.yaml and paste the following contents into it: apiVersion : apps/v1 kind : Deployment metadata : name : nginx-deployment spec : replicas : 3 selector : matchLabels : app : nginx template : metadata : labels : app : nginx spec : containers : - image : nginx:1.14.2 name : nginx ports : - containerPort : 80 Click Commit changes...
- In your Cloud Shell, create a file named fleet-package.yaml with the following content: resourceBundleSelector : cloudBuildRepository : name : projects/ PROJECT ID /locations/us-central1/connections/fleet-package-quickstart-connection/repositories/ REPOSITORY NAME tag : v1.0.0 serviceAccount : projects/ PROJECT ID /serviceAccounts/quickstart-service-account@ PROJECT ID . iam.gserviceaccount.com path : Match all files (including deployment.yaml) to generate variants variantsPattern : " .yaml" target : fleet : project : projects/ PROJECT ID rolloutStrategy : rolling : maxConcurrent : 1 variantSelector : Explicitly match the variant generated from "deployment.yaml" variantNameTemplate : "deployment" Replace REPOSITORY NAME with the repository name from Cloud Build.
- Create the fleet package to start the rollout: gcloud container fleet packages create fp-nginx \ --source = fleet-package.yaml \ --project = PROJECT ID Verify that the fleet package was created: gcloud container fleet packages list You can click the link provided to view the streaming logs for the Cloud Build job.
- Create a second GKE cluster: gcloud container clusters create-auto cluster2 \ --project = PROJECT ID \ --region = REGION \ --fleet-project = PROJECT ID \ --release-channel = rapid Install Config Sync as a fleet default To use the fleet package service, Config Sync must be installed on both clusters.

### "Configure syncing from more than one source of truth \_|\_ Config Sync \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- Source ID: `site-docs-root`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Specify TAG or DIGEST in the PACKAGE NAME : To pull by TAG : LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY NAME / PACKAGE NAME :TAG To pull by DIGEST : LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY NAME / PACKAGE NAME @sha256:DIGEST Caution: Config Sync requires that the OCI layer is compressed in the tar or tar+gzip .
- Specify TAG or DIGEST in the PACKAGE NAME : To pull by TAG : LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY NAME / PACKAGE NAME :TAG To pull by DIGEST : LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY NAME / PACKAGE NAME @sha256:DIGEST Caution: Config Sync requires that the OCI layer is compressed in the tar or tar+gzip .
- Specify TAG or DIGEST in the PACKAGE NAME : To pull by TAG : LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY NAME / PACKAGE NAME :TAG To pull by DIGEST : LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY NAME / PACKAGE NAME @sha256:DIGEST Caution: Config Sync requires that the OCI layer is compressed in the tar or tar+gzip .
- Specify TAG or DIGEST in the PACKAGE NAME : To pull by TAG : LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY NAME / PACKAGE NAME :TAG To pull by DIGEST : LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY NAME / PACKAGE NAME @sha256:DIGEST Caution: Config Sync requires that the OCI layer is compressed in the tar or tar+gzip .

