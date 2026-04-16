---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:22:23.505Z"
product_name: "Workflows"
product_slug: "workflows"
feature_name: "Execution backlogging"
feature_slug: "execution-backlogging"
latest_feature_date: "2024-09-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workflows/docs/tutorials/buffer-workflows-executions"
  - "https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsClient"
keywords:
  - "automatically"
  - "backlogging"
  - "queued"
  - "runs"
  - "concurrency"
  - "executions"
  - "when"
  - "execution"
---

# Execution backlogging

Product: Workflows
Coverage: MEDIUM

## Step 02 Summary

Execution backlogging automatically runs queued executions when concurrency quota becomes available.

## Extended Definition

Execution backlogging automatically runs queued executions when concurrency quota becomes available.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/workflows/docs/tutorials/buffer-workflows-executions](https://docs.cloud.google.com/workflows/docs/tutorials/buffer-workflows-executions)
- [https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsAsyncClient](https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsClient](https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsClient)

## Supporting Pages

### "Class ExecutionsAsyncClient (1.21.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsAsyncClient](https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 191
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.workflows import executions v1 async def sample cancel execution(): Create a client client = executions v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.workflows import executions v1 async def sample create execution(): Create a client client = executions v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.workflows import executions v1 async def sample list executions(): Create a client client = executions v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.workflows import executions v1 async def sample get execution(): Create a client client = executions v1.

### "Class ExecutionsClient (1.21.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsClient](https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsClient)
- Source ID: `site-python-reference`
- Final score: 191
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.workflows import executions v1 def sample cancel execution(): Create a client client = executions v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.workflows import executions v1 def sample create execution(): Create a client client = executions v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.workflows import executions v1 def sample list executions(): Create a client client = executions v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.workflows import executions v1 def sample get execution(): Create a client client = executions v1.

### "Use a Cloud Tasks queue to buffer your workflow executions \_|\_ Workflows\

- URL: [https://docs.cloud.google.com/workflows/docs/tutorials/buffer-workflows-executions](https://docs.cloud.google.com/workflows/docs/tutorials/buffer-workflows-executions)
- Source ID: `site-docs-root-2`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You should see executions of the child workflow, running around the same time, similar to the following: gcloud Execute the workflow: gcloud workflows run workflow-parent \ --location = us-central1 To verify that a workflow execution was triggered, list the last four executions: gcloud workflows executions list workflow-child --limit = 4 Since the number of executions (100 ) is below the Workflows concurrency limit, the results should be similar to the following.
- Once this quota is exhausted, and if execution backlogging is disabled, or if the quota for backlogged executions is reached, any new executions fail with an HTTP 429 Too many requests status code.
- You should see executions of the child workflow, running at one request per second, similar to the following: gcloud Update the Cloud Tasks queue to apply a rate limit of one dispatch per second: gcloud tasks queues update $QUEUE \ --max-dispatches-per-second = 1 \ --location = us-central1 Execute the workflow: gcloud workflows run workflow-parent \ --location = us-central1 To verify that a workflow execution was triggered, list the last four executions: gcloud workflows executions list workflow-child --limit = 4 The results should be similar to the following, with one workflow executed per second: NAME: projects/620278351741/locations/us-central1/workflows/workflow-child/executions/becf4957-9fb2-40d9-835d-0ff2dd0c1249 STATE: ACTIVE START TIME: 2023 -07-27T01:07:24.446361457Z END TIME: NAME: projects/620278351741/locations/us-central1/workflows/workflow-child/executions/6c1e7c4b-7ac6-4121-b351-1e2d56d10903 STATE: ACTIVE START TIME: 2023 -07-27T01:07:23.448213989Z END TIME: NAME: projects/620278351741/locations/us-central1/workflows/workflow-child/executions/f2ba5027-af40-4cd3-8cd0-b8033bcc6211 STATE: ACTIVE START TIME: 2023 -07-27T01:07:22.431485914Z END TIME: NAME: projects/620278351741/locations/us-central1/workflows/workflow-child/executions/ecc61ee5-fe87-49eb-8803-89dba929f6c8 STATE: ACTIVE START TIME: 2023 -07-27T01:07:21.443466369Z END TIME: You have successfully deployed a workflow that invokes 100 iterations of the child workflow with a dispatch rate of one execution per second.
- Copy the source code that defines the parent workflow: main : steps : - init : assign : - project id : ${sys.get env("GOOGLE CLOUD PROJECT ID")} - project number : ${sys.get env("GOOGLE CLOUD PROJECT NUMBER")} - location : ${sys.get env("GOOGLE CLOUD LOCATION")} - workflow child name : "workflow-child" - queue name : "queue-workflow-child" - enqueue tasks to execute child workflow : for : value : iteration range : [ 1 , 100 ] steps : - iterate : assign : - data : iteration : ${iteration} - exec : Encode object to JSON string in expression for workflow argument argument : ${json.encode to string(data)} - create task to execute child workflow : call : googleapis.cloudtasks.v2.projects.locations.queues.tasks.create args : parent : ${"projects/" + project id + "/locations/" + location + "/queues/" + queue name} body : task : httpRequest : body : ${base64.encode(json.encode(exec))} url : ${"https://workflowexecutions.googleapis.com/v1/projects/" + project id + "/locations/" + location + "/workflows/" + workflow child name + "/executions"} oauthToken : serviceAccountEmail : ${project number + "-compute@developer.gserviceaccount.com"} The workflow consists of the following parts: A map that is used to assign constants referring to the child workflow and the Cloud Tasks queue name.

