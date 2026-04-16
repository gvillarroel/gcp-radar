---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:22:23.518Z"
product_name: "Workflows"
product_slug: "workflows"
feature_name: "skip_polling connector option"
feature_slug: "skip-polling-connector-option"
latest_feature_date: "2022-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workflows/docs/reference/googleapis"
  - "https://docs.cloud.google.com/workflows/docs/best-practice"
  - "https://docs.cloud.google.com/workflows/docs/connectors"
keywords:
  - "asynchronously"
  - "polling"
  - "execute"
  - "option"
  - "skip"
  - "connectors"
  - "lets"
  - "connector"
---

# skip_polling connector option

Product: Workflows
Coverage: MEDIUM

## Step 02 Summary

The skip_polling option lets connectors execute asynchronously without waiting for the operation to complete.

## Extended Definition

The skip_polling option lets connectors execute asynchronously without waiting for the operation to complete.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/workflows/docs/reference/googleapis](https://docs.cloud.google.com/workflows/docs/reference/googleapis)
- [https://docs.cloud.google.com/workflows/docs/best-practice](https://docs.cloud.google.com/workflows/docs/best-practice)
- [https://docs.cloud.google.com/workflows/docs/connectors](https://docs.cloud.google.com/workflows/docs/connectors)

## Supporting Pages

### Connectors reference \_|\_ Workflows \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/reference/googleapis](https://docs.cloud.google.com/workflows/docs/reference/googleapis)
- Source ID: `site-api-reference`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can specify a timeout value and polling policy using the connector params block: - STEP NAME : call : CONNECTOR args : ARG : ARG VALUE [ ... ] body : KEY : KEY VALUE [...] connector params : timeout : TIMEOUT IN SECONDS polling policy : initial delay : INITIAL DELAY IN SECONDS multiplier : MULTIPLIER VALUE max delay : MAX DELAY IN SECONDS skip polling : SKIP POLLING SWITCH scopes : OAUTH2 SCOPE result : RESPONSE VALUE Replace the following: STEP NAME : the name of the step.
- SKIP POLLING SWITCH : if set to True , the connector invocation call is non-blocking if the initial request to manage or update the resource succeeds (usually HTTP POST , HTTP UPDATE , or HTTP DELETE ).
- List of supported connectors Google Cloud product Connector Long-running operation type AI Platform Training ml Job Application Integration integrations None Batch batch Job Operation BigQuery bigquery Job BigQuery Data Transfer Service bigquerydatatransfer TransferRun Cloud Build cloudbuild Operation Cloud Run functions cloudfunctions Operation Cloud Natural Language API language None Cloud Run run None Cloud Scheduler cloudscheduler None Cloud SQL sqladmin Operation Cloud Storage storage None Cloud Tasks cloudtasks None Cloud Translation translate Operation Compute Engine compute Operation Dataflow dataflow Job Document AI documentai Operation Processor Firestore firestore Operation Google Forms forms None Google Kubernetes Engine container Operation Google Sheets sheets None Kubernetes API (control plane) gke None Pub/Sub pubsub None Resource Manager cloudresourcemanager None Secret Manager secretmanager None Spanner spanner Operation Storage Transfer Service storagetransfer Operation Transcoder API transcoder Job Vertex AI aiplatform (Vertex AI) Artifact Execution Job Operation Pipeline Schedule Study Trial Workflows workflows workflowexecutions Operation Execution Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Application development Workflows Reference Send feedback Connectors reference Stay organized with collections Save and categorize content based on your preferences.

### Best practices for Workflows \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/best-practice](https://docs.cloud.google.com/workflows/docs/best-practice)
- Source ID: `site-api-reference-required-2`
- Final score: 139
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example Run gcloud in a workflow: This example shows how to execute gcloud commands from Workflows using Cloud Build and returns the output main : steps : - execute command : call : gcloud args : args : "workflows list" result : result - return result : return : ${result} gcloud : params : [ args ] steps : - create build : call : googleapis.cloudbuild.v1.projects.builds.create args : projectId : ${sys.get env("GOOGLE CLOUD PROJECT ID")} parent : ${"projects/" + sys.get env("GOOGLE CLOUD PROJECT ID") + "/locations/global"} body : serviceAccount : ${sys.get env("GOOGLE CLOUD SERVICE ACCOUNT NAME")} options : logging : CLOUD LOGGING ONLY steps : - name : gcr.io/google.com/cloudsdktool/cloud-sdk entrypoint : /bin/bash args : ${["-c", "gcloud " + args + " > $$BUILDER OUTPUT/output"]} result : result builds create - return build result : return : ${text.split(text.decode(base64.decode(result builds create.metadata.build.results.buildStepOutputs[0])), "\n")} Run kubectl in a workflow: This example shows how to execute kubectl commands from Workflows using Cloud Build and returns the output main : steps : - execute command : call : kubectl args : args : "--help" result : result - return result : return : ${result} kubectl : params : [ args ] steps : - create build : call : googleapis.cloudbuild.v1.projects.builds.create args : projectId : ${sys.get env("GOOGLE CLOUD PROJECT ID")} parent : ${"projects/" + sys.get env("GOOGLE CLOUD PROJECT ID") + "/locations/global"} body : serviceAccount : ${sys.get env("GOOGLE CLOUD SERVICE ACCOUNT NAME")} options : logging : CLOUD LOGGING ONLY steps : - name : gcr.io/cloud-builders/kubectl entrypoint : /bin/bash args : ${["-c", "kubectl " + args + " > $$BUILDER OUTPUT/output"]} result : result builds create - return build result : return : ${text.split(text.decode(base64.decode(result builds create.metadata.build.results.buildStepOutputs[0])), "\n")} Use Terraform to create your workflow Terraform is an infrastructure-as-code tool that lets you predictably create, change, and improve your cloud infrastructure by using code.
- When using connectors that wait for long-running operations, set a custom polling policy that optimizes latency for cost.
- General tips Avoid hardcoding URLs Use nested steps Wrap expressions Use declarative calls Store only what you need Use subworkflows and external workflows Best practices Use Workflows connectors Run workflow steps in parallel Apply retries and the saga pattern Use callbacks to wait Orchestrate long-running jobs Containerize long-running tasks Run command-line tools from Workflows Use Terraform to create your workflow Deploy a workflow from a Git repository Optimize usage What's next Security best practices Debugging overview Troubleshoot issues Known issues for Workflows Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Connectors also have built-in behavior for handling retries and long-running operations so that you can avoid iterating and waiting for calls to complete; connectors take care of this for you.

### Understand connectors \_|\_ Workflows \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/connectors](https://docs.cloud.google.com/workflows/docs/connectors)
- Source ID: `site-api-reference-required-3`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: API operations that are facilitated by Workflows connectors should not be confused with calling or invoking a Google Cloud service—such as Cloud Run functions or Cloud Run—which is done through an HTTP request .
- Connectors simplify calling services because they handle the formatting of requests for you, providing methods and arguments so that you don't need to know the details of a Google Cloud API.
- Home Documentation Application development Workflows Guides Send feedback Understand connectors Stay organized with collections Save and categorize content based on your preferences.
- For example, you can use connectors to publish Pub/Sub messages, read or write data to a Firestore database, or retrieve authentication keys from Secret Manager.

