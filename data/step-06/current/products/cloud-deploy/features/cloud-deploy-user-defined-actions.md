---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:23.471Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Cloud Deploy user-defined actions"
feature_slug: "cloud-deploy-user-defined-actions"
latest_feature_date: "2026-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient"
  - "https://docs.cloud.google.com/deploy/docs/config-files"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-run"
keywords:
  - "deploy"
  - "user"
  - "defined"
  - "actions"
  - "now"
  - "supports"
  - "implemented"
  - "using"
---

# Cloud Deploy user-defined actions

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Cloud Deploy now supports user-defined actions implemented using tasks.

## Extended Definition

Cloud Deploy now supports user-defined actions implemented using tasks.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient)
- [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-run](https://docs.cloud.google.com/deploy/docs/deploy-app-run)

## Supporting Pages

### "Class CloudDeployAsyncClient (2.10.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- Source ID: `site-python-reference`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } delivery pipeline path delivery pipeline path ( project : str , location : str , delivery pipeline : str ) - > str Returns a fully-qualified delivery pipeline string. deploy policy path deploy policy path ( project : str , location : str , deploy policy : str ) - > str Returns a fully-qualified deploy policy string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- Returns Type Description CloudDeployAsyncClient The constructed client. from service account json from service account json ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- Returns Type Description CloudDeployAsyncClient The constructed client. from service account info from service account info ( info : dict , args , kwargs ) Creates an instance of this client using the provided credentials info.
- An Automation enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement.

### "Class CloudDeployClient (2.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient)
- Source ID: `site-python-reference`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } delivery pipeline path delivery pipeline path ( project : str , location : str , delivery pipeline : str ) - > str Returns a fully-qualified delivery pipeline string. deploy policy path deploy policy path ( project : str , location : str , deploy policy : str ) - > str Returns a fully-qualified deploy policy string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- Returns Type Description CloudDeployClient The constructed client. from service account json from service account json ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- Returns Type Description CloudDeployClient The constructed client. from service account info from service account info ( info : dict , args , kwargs ) Creates an instance of this client using the provided credentials info.
- An Automation enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement.

### Configuration schema reference \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- Source ID: `site-docs-reference`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- Using actions (and Skaffold) serialPipeline : stages : - targetId : strategy : standard : predeploy : actions : [ ACTION NAME ] postdeploy : actions : [ ACTION NAME ] Where ACTION NAME is the name configured in skaffold.yaml for customActions.name .
- For GKE and GKE attached clusters targets The following YAML shows how to configure a deployment strategy for a target that deploys to GKE or GKE attached clusters, using service-based networking : canary : runtimeConfig : kubernetes : serviceNetworking : service : " SERVICE NAME " deployment : " DEPLOYMENT NAME " disablePodOverprovisioning : true false canaryDeployment : percentages : [ PERCENTAGES ] verify : tasks : [] The following YAML shows how to configure a deployment strategy for a target that deploys to GKE or GKE attached clusters, using Gateway API : canary : runtimeConfig : kubernetes : gatewayServiceMesh : httpRoute : " HTTP ROUTE NAME " service : " SERVICE NAME " deployment : " DEPLOYMENT NAME " routeUpdateWaitTime : " WAIT TIME " routeDestinations : destinationIds : [ "KEY" ] propagateService : [ true false ] canaryDeployment : percentages : [ " PERCENTAGES " ] verify : tasks : [] Notice in this example routeUpdateWaitTime .
- Note that the specifics of an automation rule are different per rule. (Configuration for the available automation rule types is in the document Using automation rules .) apiVersion : deploy.cloud.google.com/v1 kind : Automation metadata : name : [ PIPELINE NAME ] /[PURPOSE] labels : annotations : description : [ DESCRIPTION ] suspended : true false serviceAccount : [ SERVICE ACCOUNT ID ] selector : targets : - id : [ TARGET ID ] labels : [ LABEL KEY ] :[LABEL VALUE] rules : - [ RULE TYPE ]: id:[RULE NAME] [ RULE-SPECIFIC CONFIG ] Where: [PIPELINE NAME] Is the same as the metadata.name value in the delivery pipeline that uses this automation.
- The following YAML shows how to configure a custom target type: apiVersion : deploy.cloud.google.com/v1 kind : CustomTargetType metadata : name : [ CUSTOM TARGET TYPE NAME ] annotations : labels : description : customActions : renderAction : [ RENDER ACTION NAME ] deployAction : [ DEPLOY ACTION NAME ] includeSkaffoldModules : - configs : either: googleCloudStorage : source : path : or: git : repo : path : ref : Where: [CUSTOM TARGET TYPE NAME] Is an arbitrary name you give to this custom target type definition.

### "Quickstart: Deploy an app to Cloud Run using Cloud Deploy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-run](https://docs.cloud.google.com/deploy/docs/deploy-app-run)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Required roles To ensure that the Cloud Deploy service account has the necessary permissions to run Cloud Deploy operations and deploy to Cloud Run, ask your administrator to grant the following IAM roles to the Cloud Deploy service account on your project: Important: You must grant these roles to the Cloud Deploy service account, not to your user account.
- Deploy an app to Cloud Run using Cloud Deploy This page shows you how to use Cloud Deploy to deliver a sample application image named hello to a sequence of two Cloud Run services, two Cloud Run jobs, or two Cloud Run worker pools. (Cloud Run worker pools are in Preview ).
- Cloud Run Developer ( roles/run.developer ) IAM Service Account User ( roles/iam.serviceAccountUser ) Cloud Deploy Job Runner ( roles/clouddeploy.jobRunner ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Register your pipeline and targets with the Cloud Deploy service: gcloud deploy apply -- file = clouddeploy . yaml -- region = us - central1 -- project = PROJECT ID You now have a pipeline, with targets, ready to deploy your application to your first target.

