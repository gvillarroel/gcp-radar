---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:23.491Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Target rollback from delivery pipeline visualization"
feature_slug: "target-rollback-from-delivery-pipeline-visualization"
latest_feature_date: "2022-01-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines"
  - "https://docs.cloud.google.com/deploy/docs/create-pipeline-targets"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient"
keywords:
  - "target"
  - "rollback"
  - "from"
  - "delivery"
  - "pipeline"
  - "visualization"
  - "deploy"
  - "added"
---

# Target rollback from delivery pipeline visualization

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Cloud Deploy added the ability to roll back targets directly from the delivery pipeline visualization in Google Cloud Console.

## Extended Definition

Cloud Deploy added the ability to roll back targets directly from the delivery pipeline visualization in Google Cloud Console.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines](https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines)
- [https://docs.cloud.google.com/deploy/docs/create-pipeline-targets](https://docs.cloud.google.com/deploy/docs/create-pipeline-targets)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient)

## Supporting Pages

### "REST Resource: projects.locations.deliveryPipelines \_|\_ Cloud Deploy \_\

- URL: [https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines](https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines)
- Source ID: `site-docs-reference`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource: DeliveryPipeline JSON representation SerialPipeline JSON representation Stage JSON representation Strategy JSON representation Standard JSON representation Predeploy JSON representation Postdeploy JSON representation Canary JSON representation RuntimeConfig JSON representation KubernetesConfig JSON representation GatewayServiceMesh JSON representation RouteDestinations JSON representation ServiceNetworking JSON representation CloudRunConfig JSON representation CanaryDeployment JSON representation CustomCanaryDeployment JSON representation PhaseConfig JSON representation DeployParameters JSON representation PipelineCondition JSON representation PipelineReadyCondition JSON representation TargetsTypeCondition JSON representation Methods Resource: DeliveryPipeline A DeliveryPipeline resource in the Cloud Deploy API.
- Methods create Creates a new DeliveryPipeline in a given project and location. delete Deletes a single DeliveryPipeline. get Gets details of a single DeliveryPipeline. getIamPolicy Gets the access control policy for a resource. list Lists DeliveryPipelines in a given project and location. patch Updates the parameters of a single DeliveryPipeline. rollbackTarget Creates a Rollout to roll back the specified target. setIamPolicy Sets the access control policy on the specified resource. testIamPermissions Returns permissions that a caller has on the specified resource.
- Home Documentation Application development Cloud Deploy Reference Send feedback REST Resource: projects.locations.deliveryPipelines Stay organized with collections Save and categorize content based on your preferences.
- The location of the Target is inferred to be the same as the location of the DeliveryPipeline that contains this Stage . profiles[] string Optional.

### "Create your delivery pipeline and targets \_|\_ Cloud Deploy \_|\_ Google\

- URL: [https://docs.cloud.google.com/deploy/docs/create-pipeline-targets](https://docs.cloud.google.com/deploy/docs/create-pipeline-targets)
- Source ID: `site-docs-root-2`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you omit this property from the delivery-pipeline config, or provide no value for it, deploying to this target doesn't require approval. (But the caller trying to promote to the target still needs the clouddeploy.rollouts.create IAM permission.) You can even require manual approval on the first target.
- A single-file example The command in this example registers a delivery pipeline and targets that are all defined in the same file: gcloud deploy apply -- file = clouddeploy . yaml -- region = us - central1 An example using separate files For this example, there are three targets defined in three separate files, so you run four commands: gcloud deploy apply -- file = delivery - pipeline . yaml -- region = us - central1 && \ gcloud deploy apply -- file = target dev . yaml -- region = us - central1 && \ gcloud deploy apply -- file = target staging . yaml -- region = us - central1 && \ gcloud deploy apply -- file = target prod . yaml -- region = us - central1 The --region flag is required unless you've set a default (using gcloud config set deploy/region [REGION] ).
- The following command registers a delivery pipeline with its targets defined in the same file. gcloud deploy apply -- file = PIPELINE CONFIG \ -- region = LOCATION \ -- project = PROJECT You now have a delivery pipeline that can manage deployment of your releases, and target resources that can be used by any delivery pipeline in the same project and region.
- This is useful for trying out Cloud Deploy, but is not suitable for production workloads. (You can also use the Google Cloud console to create a release .) To create the delivery pipeline: From the Delivery pipelines page, click Create .

### "Class CloudDeployAsyncClient (2.10.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- Source ID: `site-python-reference`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.cloud.deploy v1.types.RollbackTargetResponse The response object from RollbackTarget. rollout path rollout path ( project : str , location : str , delivery pipeline : str , release : str , rollout : str ) - > str Returns a fully-qualified rollout string. service path service path ( project : str , location : str , service : str ) - > str Returns a fully-qualified service string. set iam policy set iam policy ( request : typing .
- Returns Type Description google.cloud.deploy v1.types.ApproveRolloutResponse The response object from ApproveRollout. automation path automation path ( project : str , location : str , delivery pipeline : str , automation : str ) - > str Returns a fully-qualified automation string. automation run path automation run path ( project : str , location : str , delivery pipeline : str , automation run : str ) - > str Returns a fully-qualified automation run string. build path build path ( project : str , location : str , build : str ) - > str Returns a fully-qualified build string. cancel automation run cancel automation run ( request : typing .
- For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } delivery pipeline path delivery pipeline path ( project : str , location : str , delivery pipeline : str ) - > str Returns a fully-qualified delivery pipeline string. deploy policy path deploy policy path ( project : str , location : str , deploy policy : str ) - > str Returns a fully-qualified deploy policy string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- Returns Type Description google.cloud.deploy v1.types.IgnoreJobResponse The response object from IgnoreJob. job path job path ( project : str , location : str , job : str ) - > str Returns a fully-qualified job string. job run path job run path ( project : str , location : str , delivery pipeline : str , release : str , rollout : str , job run : str , ) - > str Returns a fully-qualified job run string. list automation runs list automation runs ( request : typing .

### "Class CloudDeployClient (2.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient)
- Source ID: `site-python-reference`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.cloud.deploy v1.types.RollbackTargetResponse The response object from RollbackTarget. rollout path rollout path ( project : str , location : str , delivery pipeline : str , release : str , rollout : str ) - > str Returns a fully-qualified rollout string. service path service path ( project : str , location : str , service : str ) - > str Returns a fully-qualified service string. set iam policy set iam policy ( request : typing .
- Returns Type Description google.cloud.deploy v1.types.ApproveRolloutResponse The response object from ApproveRollout. automation path automation path ( project : str , location : str , delivery pipeline : str , automation : str ) - > str Returns a fully-qualified automation string. automation run path automation run path ( project : str , location : str , delivery pipeline : str , automation run : str ) - > str Returns a fully-qualified automation run string. build path build path ( project : str , location : str , build : str ) - > str Returns a fully-qualified build string. cancel automation run cancel automation run ( request : typing .
- For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } delivery pipeline path delivery pipeline path ( project : str , location : str , delivery pipeline : str ) - > str Returns a fully-qualified delivery pipeline string. deploy policy path deploy policy path ( project : str , location : str , deploy policy : str ) - > str Returns a fully-qualified deploy policy string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- Returns Type Description google.cloud.deploy v1.types.IgnoreJobResponse The response object from IgnoreJob. job path job path ( project : str , location : str , job : str ) - > str Returns a fully-qualified job string. job run path job run path ( project : str , location : str , delivery pipeline : str , release : str , rollout : str , job run : str , ) - > str Returns a fully-qualified job run string. list automation runs list automation runs ( request : typing .

