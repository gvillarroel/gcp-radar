---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:42.670Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Deploy hooks"
feature_slug: "deploy-hooks"
latest_feature_date: "2023-08-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/hooks"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-hooks"
  - "https://docs.cloud.google.com/deploy/docs/config-files"
keywords:
  - "deploy"
  - "hooks"
  - "let"
  - "you"
  - "run"
  - "custom"
  - "actions"
  - "before"
---

# Deploy hooks

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Deploy hooks let you run custom actions before and after deployments in Cloud Deploy.

## Extended Definition

Deploy hooks let you run custom actions before and after deployments in Cloud Deploy.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/hooks](https://docs.cloud.google.com/deploy/docs/hooks)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-hooks](https://docs.cloud.google.com/deploy/docs/deploy-app-hooks)
- [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)

## Supporting Pages

### "Run hooks before and after deploying \_|\_ Cloud Deploy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/hooks](https://docs.cloud.google.com/deploy/docs/hooks)
- Source ID: `site-docs-reference-2`
- Final score: 195
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To run hooks on the application cluster, you must configure them as customActions in your skaffold.yaml , and reference them using actions in the predeploy or postdeploy stanza in your delivery pipeline stage configuration: serialPipeline : stages : - targetId : hooks-staging profiles : [] strategy : standard : predeploy : actions : [ "my-predeploy-action" ] postdeploy : actions : [ "my-postdeploy-action" ] Note: If you configure hooks using tasks , those hooks run only in the Cloud Deploy execution environment.
- The following is an example customActions stanza that includes executionMode to invoke the hook container on the application cluster: customActions : - name : predeploy-action containers : - name : predeploy-echo image : ubuntu command : [ "/bin/sh" ] args : [ "-c" , 'echo "this is a predeploy action"' ] executionMode : kubernetesCluster : {} The executionMode stanza is optional, and if you omit it, Skaffold runs the custom action container in the Cloud Deploy execution environment.
- Using deploy hooks with a canary deployment When you configure deploy hooks for a canary deployment, there are several things to know: In the delivery pipeline stage, configuration of the hook ( predeploy and postdeploy ) is under strategy.canary.canaryDeployment or strategy.canary.customCanaryDeployment.phaseConfigs , rather than under strategy.standard .
- Home Documentation Application development Cloud Deploy Guides Send feedback Run hooks before and after deploying Stay organized with collections Save and categorize content based on your preferences.

### "Quickstart: Run hooks before and after deploying \_|\_ Cloud Deploy \_|\_\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-hooks](https://docs.cloud.google.com/deploy/docs/deploy-app-hooks)
- Source ID: `site-docs-root-2`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run hooks before and after deploying This quickstart shows you how to run a deploy hook—an arbitrary program to run before or after you deploy using Cloud Deploy.
- One of the hooks is run before the application is deployed, and the other is run after.
- GKE mkdir deploy-hooks-gke-quickstart cd deploy-hooks-gke-quickstart Cloud Run mkdir deploy-hooks-run-quickstart cd deploy-hooks-run-quickstart Create your delivery pipeline and target definition: GKE In the deploy-hooks-gke-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy . cloud . google . com / v1 kind : DeliveryPipeline metadata : name : deploy - hooks - demo - app - gke - 1 description : main application pipeline serialPipeline : stages : - targetId : hooks - staging profiles : [] strategy : standard : predeploy : tasks : - type : container image : ubuntu command : [ "/bin/sh" ] args : [ "-c" , ' echo "this is a predeploy action" ' ] postdeploy : tasks : - type : container image : ubuntu command : [ "/bin/sh" ] args : [ "-c" , ' echo "this is a postdeploy action" ' ] --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : hooks - staging description : hooks staging cluster gke : cluster : projects / PROJECT ID / locations / us - central1 / clusters / deploy - hooks - cluster Cloud Run In the deploy-hooks-run-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy . cloud . google . com / v1 kind : DeliveryPipeline metadata : name : deploy - hooks - demo - app - run - 1 description : main application pipeline serialPipeline : stages : - targetId : hooks - staging profiles : [] strategy : standard : predeploy : tasks : - type : container image : ubuntu command : [ "/bin/sh" ] args : [ "-c" , ' echo "this is a predeploy action" ' ] postdeploy : tasks : - type : container image : ubuntu command : [ "/bin/sh" ] args : [ "-c" , ' echo "this is a postdeploy action" ' ] --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : hooks - staging description : staging Run service run : location : projects / PROJECT ID / locations / us - central1 Note: In this file, the target is included with the delivery pipeline, but you can define targets in a separate file or multiple separate files.
- Cloud Run Run the following command from the deploy-hooks-run-quickstart directory to create a release resource that represents the container image to deploy: gcloud deploy releases create test - release - 001 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=deploy-hooks-demo-app-run-1 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a Notice the --images= flag , which you use to replace the placeholder ( my-app-image ) in the service definition with the specific, SHA-qualified image.

### Configuration schema reference \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- You can define predeploy and postdeploy hooks in either of two ways: Configure tasks Reference reference custom actions .
- The following YAML shows how to configure a custom target type: apiVersion : deploy.cloud.google.com/v1 kind : CustomTargetType metadata : name : [ CUSTOM TARGET TYPE NAME ] annotations : labels : description : customActions : renderAction : [ RENDER ACTION NAME ] deployAction : [ DEPLOY ACTION NAME ] includeSkaffoldModules : - configs : either: googleCloudStorage : source : path : or: git : repo : path : ref : Where: [CUSTOM TARGET TYPE NAME] Is an arbitrary name you give to this custom target type definition.
- Using actions (and Skaffold) serialPipeline : stages : - targetId : strategy : standard : predeploy : actions : [ ACTION NAME ] postdeploy : actions : [ ACTION NAME ] Where ACTION NAME is the name configured in skaffold.yaml for customActions.name .
- The value is applied to the manifest for any target that has a matching label. predeploy and postdeploy jobs Predeploy and postdeploy hooks are jobs to run before or after the deploy job in a rollout.

