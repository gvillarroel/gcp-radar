---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:23.492Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Cloud Deploy contextual documentation links"
feature_slug: "cloud-deploy-contextual-documentation-links"
latest_feature_date: "2022-01-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-gke"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeployPoliciesAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeployPoliciesPager"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-canary"
keywords:
  - "deploy"
  - "contextual"
  - "documentation"
  - "links"
  - "the"
  - "page"
  - "now"
  - "shows"
---

# Cloud Deploy contextual documentation links

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud Deploy page now shows a list of relevant documentation, including tutorials, via the Learn button for the current screen.

## Extended Definition

The Google Cloud Deploy page now shows a list of relevant documentation, including tutorials, via the Learn button for the current screen.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/deploy-app-gke](https://docs.cloud.google.com/deploy/docs/deploy-app-gke)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeployPoliciesAsyncPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeployPoliciesAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeployPoliciesPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeployPoliciesPager)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-canary](https://docs.cloud.google.com/deploy/docs/deploy-app-canary)

## Supporting Pages

### Quickstart: Deploy an app to GKE using Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-gke](https://docs.cloud.google.com/deploy/docs/deploy-app-gke)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When deployment is complete, the delivery pipeline visualization shows it as deployed: View the results in Google Cloud console In the Google Cloud console, navigate to the Cloud Deploy Delivery pipelines page to view your my-gke-demo-app-1 delivery pipeline.
- In the deploy-gke-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy.cloud.google.com/v1 kind : DeliveryPipeline metadata : name : my-gke-demo-app-1 description : main application pipeline serialPipeline : stages : - targetId : qsdev profiles : [] - targetId : qsprod profiles : [] --- apiVersion : deploy.cloud.google.com/v1 kind : Target metadata : name : qsdev description : development cluster gke : cluster : projects/ PROJECT ID /locations/us-central1/clusters/quickstart-cluster-qsdev --- apiVersion : deploy.cloud.google.com/v1 kind : Target metadata : name : qsprod description : production cluster gke : cluster : projects/ PROJECT ID /locations/us-central1/clusters/quickstart-cluster-qsprod Register your pipeline and targets with the Cloud Deploy service: gcloud deploy apply -- file = clouddeploy . yaml -- region = us - central1 -- project = PROJECT ID You now have a pipeline, with targets, ready to deploy your application to your first target.
- Deploy an app to GKE using Cloud Deploy This page shows you how to use Cloud Deploy to deliver a sample application image named nginx to a sequence of two Google Kubernetes Engine clusters.
- Confirm your pipeline and targets: In the Google Cloud console, navigate to the Cloud Deploy Delivery pipelines page to view of list of your available delivery pipelines.

### "Class ListDeployPoliciesAsyncPager (2.10.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeployPoliciesAsyncPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeployPoliciesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.deploy v1.types.ListDeployPoliciesRequest The initial request object. response google.cloud.deploy v1.types.ListDeployPoliciesResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Home Documentation Developer tools Python Client libraries Send feedback Class ListDeployPoliciesAsyncPager (2.10.0) Stay organized with collections Save and categorize content based on your preferences.
- If there are more pages, the aiter method will make additional ListDeployPolicies requests and continue to iterate through the deploy policies field on the corresponding responses.
- All the usual ListDeployPoliciesResponse attributes are available on the pager.

### "Class ListDeployPoliciesPager (2.10.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeployPoliciesPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListDeployPoliciesPager)
- Source ID: `site-python-reference`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.deploy v1.types.ListDeployPoliciesRequest The initial request object. response google.cloud.deploy v1.types.ListDeployPoliciesResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Home Documentation Developer tools Python Client libraries Send feedback Class ListDeployPoliciesPager (2.10.0) Stay organized with collections Save and categorize content based on your preferences.
- If there are more pages, the iter method will make additional ListDeployPolicies requests and continue to iterate through the deploy policies field on the corresponding responses.
- All the usual ListDeployPoliciesResponse attributes are available on the pager.

### "Quickstart: Canary-deploy an application to a target \_|\_ Cloud Deploy\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-canary](https://docs.cloud.google.com/deploy/docs/deploy-app-canary)
- Source ID: `site-docs-root-2`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- In this quickstart, we create one file for our pipeline and our single target: GKE Create a file named clouddeploy.yaml , in the deploy-canary-quickstart-gke directory, with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-canary-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: prod profiles: [] strategy: canary: runtimeConfig: kubernetes: serviceNetworking: service: "my-service" deployment: "my-deployment" canaryDeployment: percentages: [50] verify: false --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: prod description: prod GKE cluster gke: cluster: projects/ PROJECT ID /locations/us-central1/clusters/canary-quickstart-cluster GKE + Gateway API Create a file named clouddeploy.yaml , in the deploy-canary-quickstart-gke-gatewayapi directory, with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-canary-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: prod profiles: [] strategy: canary: runtimeConfig: kubernetes: gatewayServiceMesh: httpRoute: "my-httproute" service: "my-service" deployment: "my-deployment" canaryDeployment: percentages: [50] verify: false --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: prod description: prod GKE cluster gke: cluster: projects/ PROJECT ID /locations/us-central1/clusters/canary-quickstart-cluster Cloud Run Create a file named clouddeploy.yaml , in the deploy-canary-quickstart-run directory, with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-canary-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: prod profiles: [] strategy: canary: runtimeConfig: cloudRun: automaticTrafficControl: true canaryDeployment: percentages: [50] verify: false --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: prod description: prod Run Service run: location: projects/ PROJECT ID /locations/us-central1 Register your pipeline and targets with the Cloud Deploy service: gcloud deploy apply -- file = clouddeploy . yaml -- region = us - central1 -- project = PROJECT ID You now have a pipeline, with one target configured for a canary deployment strategy.
- To create a new release , run the following command from the deploy-canary-quickstart-gke , deploy-canary-quickstart-gke-gatewayapi or deploy-canary-quickstart-run directory: GKE gcloud deploy releases create test - release - 002 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-canary-demo-app-1 \ --images=my-app-image=gcr.io/google-containers/nginx@sha256:f49a843c290594dcf4d193535d1f4ba8af7d56cea2cf79d1e9554f077f1e7aaa GKE + Gateway API gcloud deploy releases create test - release - 002 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-canary-demo-app-1 \ --images=my-app-image=gcr.io/google-containers/nginx@sha256:f49a843c290594dcf4d193535d1f4ba8af7d56cea2cf79d1e9554f077f1e7aaa Cloud Run gcloud deploy releases create test - release - 002 \ --project= PROJECT ID \ --region=us-central1 \ --delivery-pipeline=my-canary-demo-app-1 \ --images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a After a few minutes, a rollout is created, and this time the canary stage is executed: When the first rollout phase finishes, the rollout is now in the canary phase: This means that the application is now deployed to 50%.
- Canary-deploy an application to a target This quickstart shows you how to use Cloud Deploy to deliver a sample application image in a canary deployment to either Google Kubernetes Engine or to Cloud Run. (You can also run a canary deployment to GKE attached clusters , but only GKE and Cloud Run are shown in this quickstart.) A canary deployment splits traffic between an already-deployed version of the application and the new version.
- Confirm your pipeline and targets: In the Google Cloud console, navigate to the Cloud Deploy Delivery pipelines page to view of list of your available delivery pipelines.

