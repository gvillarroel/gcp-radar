---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:51.978Z"
product_name: "Cloud Workstations"
product_slug: "cloud-workstations"
feature_name: "Google Cloud CLI support for Cloud Workstations"
feature_slug: "google-cloud-cli-support-for-cloud-workstations"
latest_feature_date: "2023-06-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsClient"
  - "https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/workstations/latest"
  - "https://docs.cloud.google.com/workstations/docs/custom-constraints"
keywords:
  - "cli"
  - "for"
  - "workstations"
  - "provides"
  - "generally"
  - "available"
  - "commands"
  - "managing"
---

# Google Cloud CLI support for Cloud Workstations

Product: Cloud Workstations
Coverage: MEDIUM

## Step 02 Summary

Cloud Workstations provides generally available Google Cloud CLI commands for managing workstations, configs, and clusters.

## Extended Definition

Cloud Workstations provides generally available Google Cloud CLI commands for managing workstations, configs, and clusters.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsClient](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsClient)
- [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/workstations/latest](https://docs.cloud.google.com/python/docs/reference/workstations/latest)
- [https://docs.cloud.google.com/workstations/docs/custom-constraints](https://docs.cloud.google.com/workstations/docs/custom-constraints)

## Supporting Pages

### "Class WorkstationsClient (0.8.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsClient](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsClient)
- Source ID: `site-python-reference`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CreateWorkstationClusterRequest ( parent="parent value", workstation cluster id="workstation cluster id value", ) Make the request operation = client. create workstation cluster (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.workstations v1.types.CreateWorkstationClusterRequest , dict] The request object.
- CreateWorkstationConfigRequest ( parent="parent value", workstation config id="workstation config id value", ) Make the request operation = client. create workstation config (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.workstations v1.types.CreateWorkstationConfigRequest , dict] The request object.
- CreateWorkstationRequest ( parent="parent value", workstation id="workstation id value", ) Make the request operation = client. create workstation (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.workstations v1.types.CreateWorkstationRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import workstations v1 def sample list usable workstation configs(): Create a client client = workstations v1 .

### "Class WorkstationsAsyncClient (0.8.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CreateWorkstationClusterRequest ( parent="parent value", workstation cluster id="workstation cluster id value", ) Make the request operation = client. create workstation cluster (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.workstations v1.types.CreateWorkstationClusterRequest , dict]] The request object.
- CreateWorkstationConfigRequest ( parent="parent value", workstation config id="workstation config id value", ) Make the request operation = client. create workstation config (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.workstations v1.types.CreateWorkstationConfigRequest , dict]] The request object.
- CreateWorkstationRequest ( parent="parent value", workstation id="workstation id value", ) Make the request operation = client. create workstation (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.workstations v1.types.CreateWorkstationRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import workstations v1 async def sample list usable workstation configs(): Create a client client = workstations v1 .

### "Python Client for Cloud Workstations \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/workstations/latest](https://docs.cloud.google.com/python/docs/reference/workstations/latest)
- Source ID: `site-python-reference`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Mac/Linux python3 -m venv <your-env> source <your-env>/bin/activate pip install google-cloud-workstations Windows py -m venv <your-env> .\<your-env>\Scripts\activate pip install google-cloud-workstations Next Steps Read the Client Library Documentation for Cloud Workstations to see other available methods on the client.
- 0.8.0 (latest) 0.7.0 0.6.0 0.5.13 0.4.1 0.3.0 0.2.1 0.1.1 Cloud Workstations : Client Library Documentation Product Documentation Quick Start In order to use this library, you first need to go through the following steps: Select or create a Cloud Platform project.
- Home Documentation Developer tools Python Client libraries Send feedback Python Client for Cloud Workstations Stay organized with collections Save and categorize content based on your preferences.
- Code-Based Examples Configuring a handler for all Google-based loggers import logging from google.cloud import library v1 base logger = logging.getLogger("google") base logger.addHandler(logging.StreamHandler()) base logger.setLevel(logging.DEBUG) Configuring a handler for a specific Google module (for a client library called library v1 ): import logging from google.cloud import library v1 base logger = logging.getLogger("google.cloud.library v1") base logger.addHandler(logging.StreamHandler()) base logger.setLevel(logging.DEBUG) Logging details Regardless of which of the mechanisms above you use to configure logging for this library, by default logging events are not propagated up to the root logger from the google-level logger.

### Create custom constraints for Cloud Workstations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workstations/docs/custom-constraints](https://docs.cloud.google.com/workstations/docs/custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Test the policy To test the policy on a workstation cluster with public gateway, create a cluster: gcloud workstations clusters create CLUSTER --region = REGION Replace the following: CLUSTER : the cluster ID—for example, public-gateway-cluster REGION : the region ID—for example, us-central1 The output will be similar to the following: Operation denied by custom org policies: ["customConstraints/custom.workstationsPrivateGatewayClusters": "All workstation clusters must enable private gateway endpoint"] To create a cluster successfully, add the --enable-private-endpoint flag to the gcloud workstations clusters create command: gcloud workstations clusters create CLUSTER --region = REGION --enable-private-endpoint Example custom organization policies for common use cases This table provides syntax examples for some common custom constraints.
- Before you begin, you must know the following: Your organization ID A project ID Create the constraint Save the following file as constraint-ws-private-gateway.yaml : name : organizations/ ORGANIZATION ID /customConstraints/custom.workstationsPrivateGatewayClusters resourceTypes : - workstations.googleapis.com/WorkstationCluster methodTypes : - CREATE - UPDATE condition : resource.privateClusterConfig.enablePrivateEndpoint == true actionType : ALLOW displayName : Require workstation cluster to enable private gateway endpoint description : All workstation clusters must enable private gateway endpoint This defines a constraint where for every new workstation cluster, if the public gateway is enabled, the operation is denied.
- After you verify that the organization policy in dry-run mode works as intended, set the live policy by clicking Set policy . gcloud To create an organization policy with boolean rules, create a policy YAML file that references the constraint: name : projects/ PROJECT ID /policies/ CONSTRAINT NAME spec : rules : - enforce : true dryRunSpec : rules : - enforce : true Replace the following: PROJECT ID : the project that you want to enforce your constraint on.
- Apply the policy: gcloud org-policies set-policy /policy-ws-private-gateway.yaml Verify that the policy exists: gcloud org-policies list --project = PROJECT ID The output is similar to the following: CONSTRAINT LIST POLICY BOOLEAN POLICY ETAG custom.workstationsPrivateGatewayClusters - SET COCsm5QGENiXi2E= After you apply the policy, wait for about two minutes for Google Cloud to start enforcing the policy.

