---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:23.473Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Cloud Deploy GKE DNS endpoint connectivity"
feature_slug: "cloud-deploy-gke-dns-endpoint-connectivity"
latest_feature_date: "2025-01-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/config-files"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-gke"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-policy"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-parameters"
keywords:
  - "deploy"
  - "gke"
  - "dns"
  - "endpoint"
  - "connectivity"
  - "now"
  - "supports"
  - "connecting"
---

# Cloud Deploy GKE DNS endpoint connectivity

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Cloud Deploy now supports connecting to GKE clusters via DNS-based endpoints for private clusters.

## Extended Definition

Cloud Deploy now supports connecting to GKE clusters via DNS-based endpoints for private clusters.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-gke](https://docs.cloud.google.com/deploy/docs/deploy-app-gke)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-policy](https://docs.cloud.google.com/deploy/docs/deploy-app-policy)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-parameters](https://docs.cloud.google.com/deploy/docs/deploy-app-parameters)

## Supporting Pages

### Configuration schema reference \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- Source ID: `site-docs-reference`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- Delivery pipeline config apiVersion : deploy.cloud.google.com/v1 kind : DeliveryPipeline metadata : name : annotations : labels : description : suspended : serialPipeline : stages : - targetId : profiles : [] Deployment strategies One of: standard: canary: See the strategy section in this document for details. strategy : standard : predeploy : tasks : [] verify : tasks : [] analysis : postdeploy : tasks : [] deployParameters : - values : matchTargetLabels : - targetId : profiles : [] strategy : deployParameters : --- Target config apiVersion : deploy.cloud.google.com/v1 kind : Target metadata : name : annotations : labels : description : multiTarget : targetIds : [] deployParameters : requireApproval : Runtimes one of the following runtimes: gke : cluster : dnsEndpoint : internalIp : proxyUrl : or: anthosCluster : membership : or: run : location : or: customTarget : customTargetType : (End runtimes.
- See also: Custom target type definitions For GKE targets The following YAML shows how to configure a target that deploys to a GKE cluster : apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : annotations : labels : description : deployParameters : multiTarget : targetIds : [] requireApproval : gke : cluster : projects /[ project name ]/ locations /[ location ]/ clusters /[ cluster name ] dnsEndpoint : internalIp : proxyUrl : associatedEntities : [ KEY ] : gkeClusters : - cluster : projects /[ project name ]/ locations /[ location ]/ clusters /[ cluster name ] dnsEndpoint : [ true false ] internalIp : [ true false ] proxyUrl : executionConfigs : - usages : - [ RENDER PREDEPLOY DEPLOY VERIFY POSTDEPLOY ANALYSIS ] workerPool : serviceAccount : artifactStorage : executionTimeout : verbose : metadata.name The name of this target.
- For GKE attached clusters targets Target configuration for deploying to GKE attached clusters is similar to configuring a target for a GKE target , except that the property is anthosCluster.membership , instead of gke.cluster , the resource path is different, and specific connection methods ( dnsEndpoint or internalIp ) are not applicable. anthosCluster : membership : projects/[project name]/locations/global/memberships/[membership name] project name The Google Cloud project in which the cluster lives. /location/global/ The location where the cluster is registered. global , in all cases. membership name The name of the cluster membership.
- This option cannot be used at the same time as the internalIp option. internalIp When set to true , Cloud Deploy will connect to the GKE cluster using the private IP address instead of the default endpoint, which may be a public IP, private IP, or the DNS endpoint, depending on the cluster configuration.

### Quickstart: Deploy an app to GKE using Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-gke](https://docs.cloud.google.com/deploy/docs/deploy-app-gke)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- In the deploy-gke-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy.cloud.google.com/v1 kind : DeliveryPipeline metadata : name : my-gke-demo-app-1 description : main application pipeline serialPipeline : stages : - targetId : qsdev profiles : [] - targetId : qsprod profiles : [] --- apiVersion : deploy.cloud.google.com/v1 kind : Target metadata : name : qsdev description : development cluster gke : cluster : projects/ PROJECT ID /locations/us-central1/clusters/quickstart-cluster-qsdev --- apiVersion : deploy.cloud.google.com/v1 kind : Target metadata : name : qsprod description : production cluster gke : cluster : projects/ PROJECT ID /locations/us-central1/clusters/quickstart-cluster-qsprod Register your pipeline and targets with the Cloud Deploy service: gcloud deploy apply -- file = clouddeploy . yaml -- region = us - central1 -- project = PROJECT ID You now have a pipeline, with targets, ready to deploy your application to your first target.
- Run the following command from the deploy-gke-quickstart directory to create a release resource that represents the container image to deploy: gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-gke-demo-app-1 \ --images=my-app-image=gcr.io/google-containers/nginx@sha256:f49a843c290594dcf4d193535d1f4ba8af7d56cea2cf79d1e9554f077f1e7aaa Notice the --images= flag , which you use to replace the placeholder ( my-app-image ) in the manifest with the specific, SHA-qualified image.
- GKE clusters are externally accessible by default. gcloud container clusters create-auto quickstart-cluster-qsdev --project = PROJECT ID --region = us-central1 && gcloud container clusters create-auto quickstart-cluster-qsprod --project = PROJECT ID --region = us-central1 Prepare your Skaffold configuration and Kubernetes manifest Cloud Deploy uses Skaffold to provide the details for what to deploy and how to deploy it properly for your separate targets .
- Create a new directory, named deploy-gke-quickstart and navigate into it. mkdir deploy-gke-quickstart cd deploy-gke-quickstart Create a file named skaffold.yaml with the following contents: apiVersion: skaffold/v4beta7 kind: Config manifests: rawYaml: - k8s- deploy: kubectl: {} This file is a minimal Skaffold config, identifying your manifest.

### "Quickstart: Use a deploy policy to restrict rollouts \_|\_ Cloud Deploy\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-policy](https://docs.cloud.google.com/deploy/docs/deploy-app-policy)
- Source ID: `site-docs-root-2`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Create your delivery pipeline and target definition: GKE In the deploy-policy-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy . cloud . google . com / v1 kind : DeliveryPipeline metadata : name : deploy - policy - pipeline serialPipeline : stages : - targetId : prod - target --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : prod - target description : production cluster gke : cluster : projects / PROJECT ID /locations/us-central1/clusters/ quickstart - cluster - qsprod Cloud Run In the deploy-policy-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy . cloud . google . com / v1 kind : DeliveryPipeline metadata : name : deploy - policy - pipeline serialPipeline : stages : - targetId : prod - target --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : prod - target description : production Run service run : location : projects / PROJECT ID /locations/ us - central1 Note: In this file, the target is included with the delivery pipeline, but you can define targets in a separate file or multiple separate files.
- To do so, you create a new rollout against this release, this time including the --override-deploy-policies option: GKE Run the following command from the deploy-policy-quickstart directory to create the release: gcloud deploy releases promote -- release = test - release - 001 \ -- project = PROJECT ID \ -- region = us - central1 \ -- delivery - pipeline = deploy - policy - pipeline \ -- to - target = prod - target \ -- override - deploy - policies = quickstart - deploy - policy Cloud Run Run the following command from the deploy-policy-quickstart directory to create the release: gcloud deploy releases promote -- release = test - release - 001 \ -- project = PROJECT ID \ -- region = us - central1 \ -- delivery - pipeline = deploy - policy - pipeline \ -- to - target = prod - target \ -- override - deploy - policies = quickstart - deploy - policy Because you included --override-deploy-policies=quickstart-deploy-policy , and because you have the roles/clouddeploy.policyAdmin role, Cloud Deploy ignores the deploy policy you created and creates the rollout to the prod-target .
- For GKE: gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:$(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --role="roles/container.developer" For Cloud Run: gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:$(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --role="roles/run.developer" Add the iam.serviceAccountUser role, which includes the actAs permission to deploy to the runtime: gcloud iam service-accounts add-iam-policy-binding $(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --member=serviceAccount:$(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --role="roles/iam.serviceAccountUser" \ --project= PROJECT ID Create your runtime environment If you're deploying to Cloud Run, you can skip this command .
- Delete the GKE cluster or Cloud Run service: GKE gcloud container clusters delete quickstart - cluster - qsprod -- region = us - central1 -- project = PROJECT ID Cloud Run gcloud run services delete my - deploy - policy - run - service -- region = us - central1 -- project = PROJECT ID Delete the deploy policy: gcloud deploy delete -- file = deploypolicy . yaml -- region = us - central1 -- project = PROJECT ID Delete the delivery pipeline, target, release, and rollout: gcloud deploy delete -- file = clouddeploy . yaml -- force -- region = us - central1 -- project = PROJECT ID Delete both of the Cloud Storage buckets that Cloud Deploy created.

### "Quickstart: Use deploy parameters \_|\_ Cloud Deploy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-parameters](https://docs.cloud.google.com/deploy/docs/deploy-app-parameters)
- Source ID: `site-docs-root-2`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Register your pipeline and targets with the Cloud Deploy service: gcloud deploy apply -- file = clouddeploy . yaml -- region = us - central1 -- project = PROJECT ID You now have a pipeline, with one multi-target comprising two GKE or Cloud Run targets, ready to deploy your application.
- View the results in Google Cloud console Now that you've created the release, and the controller rollout and child rollouts are created, those child rollouts are now deployed (or are in the process of being deployed) to their respective GKE clusters or Cloud Run services.
- Create your delivery pipeline and target definition: GKE In the deploy-params-gke-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-params-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: params-prod-multi deployParameters: - values: replicaCount: "2" Apply the deploy parameter replicaCount: "2" to the target with this label matchTargetLabels: label1: label1 - values: replicaCount: "3" Apply the deploy parameter replicaCount: "3" to the target with this label matchTargetLabels: label2: label2 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: params-prod-multi description: production clusters multiTarget: targetIds: [params-prod-a, params-prod-b] --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: params-prod-a labels: label1: label1 description: production cluster 1 deployParameters: application env1: "sampleValue1" gke: cluster: projects/ PROJECT ID /locations/us-central1/clusters/deploy-params-cluster-prod1 --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: params-prod-b labels: label2: label2 description: production cluster 2 deployParameters: application env2: "sampleValue2" gke: cluster: projects/ PROJECT ID /locations/us-west1/clusters/deploy-params-cluster-prod2 Note: In this file, targets are included with the delivery pipeline, but you can define targets in a separate file or multiple separate files.
- For GKE: gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:$(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --role="roles/container.developer" For Cloud Run: gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:$(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --role="roles/run.developer" Add the iam.serviceAccountUser role, which includes the actAs permission to deploy to the runtime: gcloud iam service-accounts add-iam-policy-binding $(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --member=serviceAccount:$(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --role="roles/iam.serviceAccountUser" \ --project= PROJECT ID Create your runtime environments If you're deploying to Cloud Run, you can skip this command .

