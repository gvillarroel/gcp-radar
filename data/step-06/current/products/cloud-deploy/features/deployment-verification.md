---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:42.673Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Deployment verification"
feature_slug: "deployment-verification"
latest_feature_date: "2022-09-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/deployment-strategies/manage-rollout"
  - "https://docs.cloud.google.com/deploy/docs/parameters"
  - "https://docs.cloud.google.com/deploy/docs/architecture"
keywords:
  - "deployment"
  - "verification"
  - "validates"
  - "deployed"
  - "applications"
  - "part"
  - "process"
---

# Deployment verification

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Deployment verification validates deployed applications as part of the deployment process.

## Extended Definition

Deployment verification validates deployed applications as part of the deployment process.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/deployment-strategies/manage-rollout](https://docs.cloud.google.com/deploy/docs/deployment-strategies/manage-rollout)
- [https://docs.cloud.google.com/deploy/docs/parameters](https://docs.cloud.google.com/deploy/docs/parameters)
- [https://docs.cloud.google.com/deploy/docs/architecture](https://docs.cloud.google.com/deploy/docs/architecture)

## Supporting Pages

### Manage rollouts \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/deployment-strategies/manage-rollout](https://docs.cloud.google.com/deploy/docs/deployment-strategies/manage-rollout)
- Source ID: `site-docs-reference-required-3`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For a rollout in a standard deployment strategy, with no deployment verification enabled, there is one phase ( stable ).
- After that, the application is deployed, and future canary deployments will include the canary phases.
- SUCCEEDED When a job run finishes successfully, without failing or being terminated by a user, it's put into a SUCCEEDED state, which Manage your rollout Using the Google Cloud console or the Google Cloud SDK, you can do the following with a Cloud Deploy rollout: Advance the rollout Cancel the rollout Terminate a job run Ignore a job Retry a failed job If you're using parallel deployment with a canary deployment strategy, see how to manage parallel canary rollouts .
- However if you ignore the failure, both the phase and the rollout can be progressed and can ultimately have SUCCEEDED states. gcloud gcloud deploy rollouts ignore - job ROLLOUT NAME \ -- release = RELEASE NAME \ -- delivery - pipeline = PIPELINE NAME \ -- job - id = JOB ID \ -- phase - id = PHASE ID \ -- region = REGION Where: ROLLOUT NAME is the name of the rollout this job run is part of.

### "Pass parameters to your deployment \_|\_ Cloud Deploy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/parameters](https://docs.cloud.google.com/deploy/docs/parameters)
- Source ID: `site-docs-reference-2`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deploy parameters with deployment verification You can use any deploy parameter as an environment variable in deployment verification .
- For example, if we have a deploy parameter of webserver.port configured, we could utilise it like so: apiVersion : apps/v1 kind : Deployment metadata : name : webserver spec : replicas : 3 selector : matchLabels : app : webserver template : metadata : labels : app : webserver spec : containers : - name : webserver image : gcr.io/example/webserver:latest ports : - containerPort : {{ .Values.webserver.port }} # replaced by deploy parameter webserver.port. name : web env : - name : WEBSERVER PORT value : {{ .Values.webserver.port }} # replaced by deploy parameter webserver.port.
- Here's an example: apiVersion : apps/v1 kind : Deployment metadata : name : nginx-deployment labels : app : nginx spec : selector : matchLabels : app : nginx template : metadata : labels : app : nginx spec : containers : - name : nginx image : nginx:1.14.2 env : - name : envvar1 value : example1 # from-param: ${application env1} - name : envvar2 value : example2 # from-param: ${application env2} In this manifest, the parameter envvar1 is set to a default of example1 , and envvar2 is set to a default of example2 .
- Here's an example: apiVersion : apps/v1 kind : Deployment metadata : name : nginx-deployment labels : app : nginx spec : replicas : 1 # from-param: ${deploy replicas} selector : matchLabels : app : nginx template : metadata : labels : app : nginx spec : containers : - name : nginx image : nginx:1.14.2 ports : - containerPort : 80 Configure your delivery pipeline to include deployParameters for the applicable pipeline stage.

### Cloud Deploy service architecture \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/architecture](https://docs.cloud.google.com/deploy/docs/architecture)
- Source ID: `site-docs-reference-required-3`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- An artifact is any output from your CI process (for example, a container image ) that is deployed to a target runtime as part of a rollout.
- This process is true not only for promotions, but also for rollbacks and for redeployments.
- Cloud Deploy resources The following diagram shows the resources that Cloud Deploy uses to deliver your applications, and the relationships among those resources: As shown in this diagram, the relationships among the resources are as follows: The delivery pipeline can yield zero or more releases and can reference one or more targets , including multi-targets and their associated child-targets .
- As shown in this diagram, Cloud Deploy interacts with the following systems: Your CI system Cloud Deploy supports most CI tools, as long as one output from your CI process can be a call to the Cloud Deploy API or CLI to create a release .

