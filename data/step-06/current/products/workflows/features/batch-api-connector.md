---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:22:23.506Z"
product_name: "Workflows"
product_slug: "workflows"
feature_name: "Batch API connector"
feature_slug: "batch-api-connector"
latest_feature_date: "2024-05-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workflows/docs/tutorials/translation-connector"
  - "https://docs.cloud.google.com/workflows/docs/reference/googleapis/aiplatform/Overview"
  - "https://docs.cloud.google.com/workflows/docs/access-kubernetes-api"
keywords:
  - "batch"
  - "integrates"
  - "connector"
---

# Batch API connector

Product: Workflows
Coverage: MEDIUM

## Step 02 Summary

This connector integrates Workflows with the Batch API.

## Extended Definition

This connector integrates Workflows with the Batch API.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/workflows/docs/tutorials/translation-connector](https://docs.cloud.google.com/workflows/docs/tutorials/translation-connector)
- [https://docs.cloud.google.com/workflows/docs/reference/googleapis/aiplatform/Overview](https://docs.cloud.google.com/workflows/docs/reference/googleapis/aiplatform/Overview)
- [https://docs.cloud.google.com/workflows/docs/access-kubernetes-api](https://docs.cloud.google.com/workflows/docs/access-kubernetes-api)

## Supporting Pages

### "Run a batch translation using the Cloud Translation connector \_|\_ Workflows\

- URL: [https://docs.cloud.google.com/workflows/docs/tutorials/translation-connector](https://docs.cloud.google.com/workflows/docs/tutorials/translation-connector)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application development Workflows Guides Send feedback Run a batch translation using the Cloud Translation connector Stay organized with collections Save and categorize content based on your preferences.
- This tutorial shows you how to create a workflow that uses the Cloud Translation API connector to translate files to other languages in asynchronous batch mode.
- Create a text file with the filename workflow.yaml and with the following content: main : steps : - init : assign : - projectId : ${sys.get env("GOOGLE CLOUD PROJECT ID")} - location : ${sys.get env("GOOGLE CLOUD LOCATION")} - inputBucketName : ${projectId + "-input-files"} - outputBucketName : ${projectId + "-output-files-" + string(int(sys.now()))} - createOutputBucket : call : googleapis.storage.v1.buckets.insert args : project : ${projectId} body : name : ${outputBucketName} - batchTranslateText : call : googleapis.translate.v3beta1.projects.locations.batchTranslateText args : parent : ${"projects/" + projectId + "/locations/" + location} body : inputConfigs : gcsSource : inputUri : ${"gs://" + inputBucketName + "/ "} outputConfig : gcsDestination : outputUriPrefix : ${"gs://" + outputBucketName + "/"} sourceLanguageCode : "en" targetLanguageCodes : [ "es" , "fr" ] result : batchTranslateTextResult The workflow assigns variables, creates an output bucket, and initiates the translation of the files, saving the results to the output bucket.
- Create a Cloud Storage bucket to hold the files to translate: BUCKET INPUT = ${ GOOGLE CLOUD PROJECT } -input-files gcloud storage buckets create gs:// ${ BUCKET INPUT } Create two files in English and upload them to the input bucket: echo "Hello World!" > file1.txt gcloud storage cp file1.txt gs:// ${ BUCKET INPUT } echo "Workflows connectors simplify calling services." > file2.txt gcloud storage cp file2.txt gs:// ${ BUCKET INPUT } Deploy and execute the workflow A workflow is made up of a series of steps described using the Workflows syntax, which can be written in either YAML or JSON format.

### Vertex AI API Connector Overview \_|\_ Workflows \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/reference/googleapis/aiplatform/Overview](https://docs.cloud.google.com/workflows/docs/reference/googleapis/aiplatform/Overview)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Expected successful output: "SUCCESS" main : steps : - init : assign : - location : ${sys.get env("GOOGLE CLOUD LOCATION")} - project : ${sys.get env("GOOGLE CLOUD PROJECT ID")} Follow https://cloud.google.com/vertex-ai/docs/training/create-custom-container to build a custom container image for training. - container image uri : "IMAGE URI" - create custom job : call : googleapis.aiplatform.v1.projects.locations.customJobs.create args : parent : ${"projects/" + project + "/locations/" + location} region : ${location} body : displayName : "example-custom-job" jobSpec : workerPoolSpecs : - machineSpec : machineType : "n1-standard-4" acceleratorType : "NVIDIA TESLA V100" acceleratorCount : 1 replicaCount : 1 containerSpec : imageUri : ${container image uri} command : [] args : [] result : customJobsResponse - delete custom job : call : googleapis.aiplatform.v1.projects.locations.customJobs.delete args : name : ${customJobsResponse.name} region : ${location} result : deleteCustomJobResponse - return : return : "SUCCESS" JSON { "main" : { "steps" : [ { "init" : { "assign" : [ { "location" : "${sys.get env(\"GOOGLE CLOUD LOCATION\")}" }, { "project" : "${sys.get env(\"GOOGLE CLOUD PROJECT ID\")}" }, { "container image uri" : "IMAGE URI" } ] } }, { "create custom job" : { "call" : "googleapis.aiplatform.v1.projects.locations.customJobs.create" , "args" : { "parent" : "${\"projects/\" + project + \"/locations/\" + location}" , "region" : "${location}" , "body" : { "displayName" : "example-custom-job" , "jobSpec" : { "workerPoolSpecs" : [ { "machineSpec" : { "machineType" : "n1-standard-4" , "acceleratorType" : "NVIDIA TESLA V100" , "acceleratorCount" : 1 }, "replicaCount" : 1 , "containerSpec" : { "imageUri" : "${container image uri}" , "command" : [], "args" : [] } } ] } } }, "result" : "customJobsResponse" } }, { "delete custom job" : { "call" : "googleapis.aiplatform.v1.projects.locations.customJobs.delete" , "args" : { "name" : "${customJobsResponse.name}" , "region" : "${location}" }, "result" : "deleteCustomJobResponse" } }, { "return" : { "return" : "SUCCESS" } } ] } } Module: googleapis.aiplatform.v1.projects.locations.batchPredictionJobs Functions cancel Cancels a BatchPredictionJob.
- Module: googleapis.aiplatform.v1beta1.projects.locations.tensorboards.experiments Functions batchCreate Batch create TensorboardTimeSeries that belong to a TensorboardExperiment. create Creates a TensorboardExperiment. delete Deletes a TensorboardExperiment. get Gets a TensorboardExperiment. list Lists TensorboardExperiments in a Location. patch Updates a TensorboardExperiment. write Write time series data points of multiple TensorboardTimeSeries in multiple TensorboardRun's.
- Module: googleapis.aiplatform.v1.projects.locations.tensorboards.experiments Functions batchCreate Batch create TensorboardTimeSeries that belong to a TensorboardExperiment. create Creates a TensorboardExperiment. delete Deletes a TensorboardExperiment. get Gets a TensorboardExperiment. list Lists TensorboardExperiments in a Location. patch Updates a TensorboardExperiment. write Write time series data points of multiple TensorboardTimeSeries in multiple TensorboardRun's.
- Module: googleapis.aiplatform.v1beta1.projects.locations.tensorboards.experiments.runs Functions batchCreate Batch create TensorboardRuns. create Creates a TensorboardRun. delete Deletes a TensorboardRun. get Gets a TensorboardRun. list Lists TensorboardRuns in a Location. patch Updates a TensorboardRun. write Write time series data points into multiple TensorboardTimeSeries under a TensorboardRun.

### "Access Kubernetes API objects using a connector \_|\_ Workflows \_|\_ Google\

- URL: [https://docs.cloud.google.com/workflows/docs/access-kubernetes-api](https://docs.cloud.google.com/workflows/docs/access-kubernetes-api)
- Source ID: `site-api-reference-required-3`
- Final score: 81
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In a text editor, copy the following workflow to your source code file: YAML main : steps : - init : assign : - project : " PROJECT ID " - location : " LOCATION " - cluster id : " CLUSTER NAME " - job name : " JOB NAME " - namespace : "default" - create job : call : gke.create job args : cluster id : '${cluster id}' location : '${location}' project : '${project}' namespace : '${namespace}' job : apiVersion : batch/v1 kind : Job metadata : name : "${job name}" spec : template : spec : containers : - name : counter image : centos:7 command : - "bin/bash" - "-c" - "for i in 9 8 7 6 5 4 3 2 1 ; do echo $i ; done" restartPolicy : Never result : job - wait for job : # if job fails, raise error with "FailedJobError" tag and "job" field call : gke.await job args : cluster id : '${cluster id}' job name : '${job name}' location : '${location}' project : '${project}' timeout : 90 # 90 seconds result : completed job - cleanup job : call : gke.delete job args : cluster id : '${cluster id}' job name : '${job name}' location : '${location}' project : '${project}' query : propagationPolicy : "Foreground" # delete child Pods - return job : return : '${completed job}' JSON { "main" : { "steps" : [ { "init" : { "assign" : [ { "project" : " PROJECT ID " }, { "location" : " LOCATION " }, { "cluster id" : " CLUSTER NAME " }, { "job name" : " JOB NAME " }, { "namespace" : "default" } ] } }, { "create job" : { "call" : "gke.create job" , "args" : { "cluster id" : "${cluster id}" , "location" : "${location}" , "project" : "${project}" , "namespace" : "${namespace}" , "job" : { "apiVersion" : "batch/v1" , "kind" : "Job" , "metadata" : { "name" : "${job name}" }, "spec" : { "template" : { "spec" : { "containers" : [ { "name" : "counter" , "image" : "centos:7" , "command" : [ "bin/bash" , "-c" , "for i in 9 8 7 6 5 4 3 2 1 ; do echo $i ; done" ] } ], "restartPolicy" : "Never" } } } } }, "result" : "job" } }, { "wait for job" : { "call" : "gke.await job" , "args" : { "cluster id" : "${cluster id}" , "job name" : "${job name}" , "location" : "${location}" , "project" : "${project}" , "timeout" : 90 }, "result" : "completed job" } }, { "cleanup job" : { "call" : "gke.delete job" , "args" : { "cluster id" : "${cluster id}" , "job name" : "${job name}" , "location" : "${location}" , "project" : "${project}" , "query" : { "propagationPolicy" : "Foreground" } } } }, { "return job" : { "return" : "${completed job}" } } ] } } Replace the following: LOCATION : the region for your cluster, such as us-central1 CLUSTER NAME : the name of your GKE cluster, such as hello-cluster JOB NAME : the name of the Kubernetes Job, such as hello-job Deploy the workflow: gcloud workflows deploy kubernetes-api-job \ --source = kubernetes-api-job.
- In the workflow editor, enter the following definition for your workflow: YAML main : steps : - init : assign : - project : " PROJECT ID " - location : " LOCATION " - cluster id : " CLUSTER NAME " - job name : " JOB NAME " - namespace : "default" - create job : call : gke.create job args : cluster id : '${cluster id}' location : '${location}' project : '${project}' namespace : '${namespace}' job : apiVersion : batch/v1 kind : Job metadata : name : "${job name}" spec : template : spec : containers : - name : counter image : centos:7 command : - "bin/bash" - "-c" - "for i in 9 8 7 6 5 4 3 2 1 ; do echo $i ; done" restartPolicy : Never result : job - wait for job : # if job fails, raise error with "FailedJobError" tag and "job" field call : gke.await job args : cluster id : '${cluster id}' job name : '${job name}' location : '${location}' project : '${project}' timeout : 90 # 90 seconds result : completed job - cleanup job : call : gke.delete job args : cluster id : '${cluster id}' job name : '${job name}' location : '${location}' project : '${project}' query : propagationPolicy : "Foreground" # delete child Pods - return job : return : '${completed job}' JSON { "main" : { "steps" : [ { "init" : { "assign" : [ { "project" : " PROJECT ID " }, { "location" : " LOCATION " }, { "cluster id" : " CLUSTER NAME " }, { "job name" : " JOB NAME " }, { "namespace" : "default" } ] } }, { "create job" : { "call" : "gke.create job" , "args" : { "cluster id" : "${cluster id}" , "location" : "${location}" , "project" : "${project}" , "namespace" : "${namespace}" , "job" : { "apiVersion" : "batch/v1" , "kind" : "Job" , "metadata" : { "name" : "${job name}" }, "spec" : { "template" : { "spec" : { "containers" : [ { "name" : "counter" , "image" : "centos:7" , "command" : [ "bin/bash" , "-c" , "for i in 9 8 7 6 5 4 3 2 1 ; do echo $i ; done" ] } ], "restartPolicy" : "Never" } } } } }, "result" : "job" } }, { "wait for job" : { "call" : "gke.await job" , "args" : { "cluster id" : "${cluster id}" , "job name" : "${job name}" , "location" : "${location}" , "project" : "${project}" , "timeout" : 90 }, "result" : "completed job" } }, { "cleanup job" : { "call" : "gke.delete job" , "args" : { "cluster id" : "${cluster id}" , "job name" : "${job name}" , "location" : "${location}" , "project" : "${project}" , "query" : { "propagationPolicy" : "Foreground" } } } }, { "return job" : { "return" : "${completed job}" } } ] } } Replace the following: LOCATION : the region for your cluster, such as us-central1 CLUSTER NAME : the name of your GKE cluster, such as hello-cluster JOB NAME : the name of the Kubernetes Job, such as hello-job Click Deploy . gcloud Create a source code file for your workflow: touch kubernetes-api-job.
- The results should be similar to the following: { ... }, "status" : { "completionTime" : "2023-10-31T17:04:32Z" , "conditions" : [ { "lastProbeTime" : "2023-10-31T17:04:33Z" , "lastTransitionTime" : "2023-10-31T17:04:33Z" , "status" : "True" , "type" : "Complete" } ], "ready" : 0 , "startTime" : "2023-10-31T17:04:28Z" , "succeeded" : 1 , "uncountedTerminatedPods" : {} } } What's next Understand connectors Invoke a Google Cloud service using a connector Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Enable APIs Before you can access Kubernetes API objects using the Kubernetes API connector, you must enable the following APIs: Kubernetes Engine API : to build and manage container-based applications using GKE Workflows APIs : to manage workflow definitions and executions; enabling the Workflows API automatically enables the Workflow Executions API Console Enable the APIs: Enable the APIs gcloud In the Google Cloud console, activate Cloud Shell.

