---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:42.668Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Automated release promotion"
feature_slug: "automated-release-promotion"
latest_feature_date: "2023-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines.releases.rollouts/create"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-automation"
  - "https://docs.cloud.google.com/deploy/docs/config-files"
keywords:
  - "automated"
  - "release"
  - "promotion"
  - "advances"
  - "releases"
  - "through"
  - "delivery"
  - "pipeline"
---

# Automated release promotion

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Automated release promotion advances releases through the delivery pipeline automatically.

## Extended Definition

Automated release promotion advances releases through the delivery pipeline automatically.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines.releases.rollouts/create](https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines.releases.rollouts/create)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-automation](https://docs.cloud.google.com/deploy/docs/deploy-app-automation)
- [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)

## Supporting Pages

### "Method: projects.locations.deliveryPipelines.releases.rollouts.create \_\

- URL: [https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines.releases.rollouts/create](https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines.releases.rollouts/create)
- Source ID: `site-api-reference-required-1`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application development Cloud Deploy Reference Send feedback Method: projects.locations.deliveryPipelines.releases.rollouts.create Stay organized with collections Save and categorize content based on your preferences.
- HTTP request POST https://clouddeploy.googleapis.com/v1/{parent=projects/ /locations/ /deliveryPipelines/ /releases/ }/rollouts The URL uses gRPC Transcoding syntax.
- The format is projects/{projectId}/locations/{location name}/deliveryPipelines/{pipeline name}/releases/{release name} .

### "Quickstart: Automate pipeline tasks \_|\_ Cloud Deploy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-automation](https://docs.cloud.google.com/deploy/docs/deploy-app-automation)
- Source ID: `site-docs-reference-required-3`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create your delivery pipeline, target definitions, and automation action: GKE In the deploy-automation-gke-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy . cloud . google . com / v1 kind : DeliveryPipeline metadata : name : my - automation - demo - app - 1 description : Automation demonstration pipeline serialPipeline : stages : - targetId : automation - quickstart - dev - targetId : automation - quickstart - staging profiles : [] strategy : canary : runtimeConfig : kubernetes : serviceNetworking : service : "my-service" deployment : "my-deployment" canaryDeployment : percentages : [ 25 ] verify : false --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : automation - quickstart - dev description : Dev cluster to demonstrate deploy automation gke : cluster : projects / PROJECT ID / locations / us - central1 / clusters / automation - quickstart - cluster - dev --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : automation - quickstart - staging description : Staging cluster to demonstrate deploy automation gke : cluster : projects / PROJECT ID / locations / us - central1 / clusters / automation - quickstart - cluster - staging --- apiVersion : deploy . cloud . google . com / v1 kind : Automation metadata : name : my - automation - demo - app - 1 / promote description : promotes a release suspended : false serviceAccount : PROJECT NUMBER - compute @ developer.gserviceaccount.com selector : targets : - id : automation - quickstart - dev rules : - promoteReleaseRule : id : "promote-release" wait : 1 m destinationTargetId : "@next" --- apiVersion : deploy . cloud . google . com / v1 kind : Automation metadata : name : my - automation - demo - app - 1 / advance description : advances a rollout suspended : false serviceAccount : PROJECT NUMBER - compute @ developer.gserviceaccount.com selector : targets : - id : automation - quickstart - staging rules : - advanceRolloutRule : id : "advance-rollout" sourcePhases : [ "canary-25" ] wait : 1 m Note: In this file, the targets and the automations config are included with the delivery pipeline, but you can define targets in a separate file or multiple separate files, and automations in a separate file or files.
- Cloud Run In the deploy-automation-run-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy . cloud . google . com / v1 kind : DeliveryPipeline metadata : name : my - automation - demo - app - 1 description : Automation demonstration pipeline serialPipeline : stages : - targetId : automation - quickstart - dev profiles : [ dev ] - targetId : automation - quickstart - staging profiles : [ staging ] strategy : canary : runtimeConfig : cloudRun : automaticTrafficControl : true canaryDeployment : percentages : [ 25 ] verify : false --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : automation - quickstart - dev description : Dev cluster to demonstrate deploy automation run : location : projects / PROJECT ID / locations / us - central1 --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : automation - quickstart - staging description : Staging cluster to demonstrate deploy automation run : location : projects / PROJECT ID / locations / us - central1 --- apiVersion : deploy . cloud . google . com / v1 kind : Automation metadata : name : my - automation - demo - app - 1 / promote description : Promotes a release to the next target suspended : false serviceAccount : PROJECT NUMBER - compute @ developer.gserviceaccount.com selector : targets : - id : automation - quickstart - dev rules : - promoteReleaseRule : id : "promote-release" wait : 1 m destinationTargetId : "@next" --- apiVersion : deploy . cloud . google . com / v1 kind : Automation metadata : name : my - automation - demo - app - 1 / advance description : advances a rollout suspended : false serviceAccount : PROJECT NUMBER - compute @ developer.gserviceaccount.com selector : targets : - id : automation - quickstart - staging rules : - advanceRolloutRule : id : "advance-rollout" sourcePhases : [ "canary-25" ] wait : 1 m Note: In this file, the targets and the automations config are included with the delivery pipeline, but you can define targets in a separate file or multiple separate files, and automations in a separate file or files.
- Cloud Run Run the following command from the deploy-automation-run-quickstart directory to create a release resource that represents the container image to deploy: gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-automation-demo-app-1 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a Notice the --images= flag , which you use to replace the placeholder ( my-app-image ) in the service definition with the specific, SHA-qualified image.
- GKE Run the following command from the deploy-automation-gke-quickstart directory to create a release resource that represents the container image to deploy: gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-automation-demo-app-1 \ --images=my-app-image=gcr.io/google-containers/nginx@sha256:f49a843c290594dcf4d193535d1f4ba8af7d56cea2cf79d1e9554f077f1e7aaa Notice the --images= flag , which you use to replace the placeholder ( my-app-image ) in the manifest with the specific, SHA-qualified image.

### Configuration schema reference \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- Source ID: `site-docs-reference`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This description is shown in the delivery pipeline details in Google Cloud console. suspended A Boolean, which if true suspends the delivery pipeline such that it can't be used to create, promote, roll back, or redeploy releases.
- This service account must have the following permissions: actAs permission to impersonate the execution service account. permission to perform the operation being automated, for example, clouddeploy.releases.promote to promote a release, or clouddeploy.rollouts.advance to advance a rollout phase. [TARGET ID] Is the ID of the target for which this automation is used.
- Avoid mismatches between your release and your delivery pipeline by learning about pipeline instances .
- Delivery pipeline config apiVersion : deploy.cloud.google.com/v1 kind : DeliveryPipeline metadata : name : annotations : labels : description : suspended : serialPipeline : stages : - targetId : profiles : [] Deployment strategies One of: standard: canary: See the strategy section in this document for details. strategy : standard : predeploy : tasks : [] verify : tasks : [] analysis : postdeploy : tasks : [] deployParameters : - values : matchTargetLabels : - targetId : profiles : [] strategy : deployParameters : --- Target config apiVersion : deploy.cloud.google.com/v1 kind : Target metadata : name : annotations : labels : description : multiTarget : targetIds : [] deployParameters : requireApproval : Runtimes one of the following runtimes: gke : cluster : dnsEndpoint : internalIp : proxyUrl : or: anthosCluster : membership : or: run : location : or: customTarget : customTargetType : (End runtimes.

