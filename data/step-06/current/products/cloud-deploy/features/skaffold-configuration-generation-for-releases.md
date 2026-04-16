---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:23.487Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Skaffold configuration generation for releases"
feature_slug: "skaffold-configuration-generation-for-releases"
latest_feature_date: "2022-07-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-hooks"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-verification"
keywords:
  - "skaffold"
  - "configuration"
  - "generation"
  - "for"
  - "releases"
  - "deploy"
  - "added"
  - "automatic"
---

# Skaffold configuration generation for releases

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Cloud Deploy added automatic generation of a skaffold.yaml file when creating a release from a Kubernetes manifest.

## Extended Definition

Cloud Deploy added automatic generation of a skaffold.yaml file when creating a release from a Kubernetes manifest.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/deploy-app-hooks](https://docs.cloud.google.com/deploy/docs/deploy-app-hooks)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-verification](https://docs.cloud.google.com/deploy/docs/deploy-app-verification)

## Supporting Pages

### "Quickstart: Run hooks before and after deploying \_|\_ Cloud Deploy \_|\_\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-hooks](https://docs.cloud.google.com/deploy/docs/deploy-app-hooks)
- Source ID: `site-docs-root-2`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a file named skaffold.yaml with the following contents: GKE apiVersion: skaffold/v4beta7 kind: Config manifests: rawYaml: - k8s-pod.yaml deploy: kubectl: {} Cloud Run apiVersion: skaffold/v4beta7 kind: Config manifests: rawYaml: - service.yaml deploy: cloudrun: {} See the skaffold.yaml reference for more information about this configuration file.
- Create your Skaffold configuration file and application manifest Cloud Deploy uses Skaffold to identify the manifests used to deploy the sample app to your target .
- As with all releases (unless they include --disable-initial-rollout ), Cloud Deploy automatically creates a rollout resource too.
- The Skaffold configuration file is where you identify the manifests you wish to deploy with Cloud Deploy.

### "Class CloudDeployAsyncClient (2.10.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- Source ID: `site-python-reference`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import deploy v1 async def sample list releases(): Create a client client = deploy v1 .
- ListReleasesRequest ( parent="parent value", ) Make the request page result = client. list releases (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.deploy v1.types.ListReleasesRequest , dict]] The request object.
- A Target defines a location to which a Skaffold configuration can be deployed. custom target type path custom target type path ( project : str , location : str , custom target type : str ) - > str Returns a fully-qualified custom target type string. delete automation delete automation ( request : typing .
- A Target defines a location to which a Skaffold configuration can be deployed. worker pool path worker pool path ( project : str , location : str , worker pool : str ) - > str Returns a fully-qualified worker pool string.

### "Class CloudDeployClient (2.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployClient)
- Source ID: `site-python-reference`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import deploy v1 def sample list releases(): Create a client client = deploy v1 .
- A Target defines a location to which a Skaffold configuration can be deployed. custom target type path custom target type path ( project : str , location : str , custom target type : str ) - > str Returns a fully-qualified custom target type string. delete automation delete automation ( request : typing .
- ListReleasesRequest ( parent="parent value", ) Make the request page result = client. list releases (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.deploy v1.types.ListReleasesRequest , dict] The request object.
- A Target defines a location to which a Skaffold configuration can be deployed. worker pool path worker pool path ( project : str , location : str , worker pool : str ) - > str Returns a fully-qualified worker pool string.

### "Quickstart: Verify your application after deploying it \_|\_ Cloud Deploy\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-verification](https://docs.cloud.google.com/deploy/docs/deploy-app-verification)
- Source ID: `site-docs-root-2`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a file named skaffold.yaml with the following contents: GKE apiVersion: skaffold/v4beta7 kind: Config manifests: rawYaml: - k8s-pod.yaml deploy: kubectl: {} Cloud Run apiVersion: skaffold/v4beta7 kind: Config manifests: rawYaml: - service.yaml deploy: cloudrun: {} See the skaffold.yaml reference for more information about this configuration file.
- Create your Skaffold configuration file and application manifest Cloud Deploy uses Skaffold to identify the manifest to be used to deploy the sample app to your target .
- As with all releases (unless they include --disable-initial-rollout ), Cloud Deploy automatically creates a rollout resource too.
- The application is automatically deployed into the one target configured for this delivery pipeline.

