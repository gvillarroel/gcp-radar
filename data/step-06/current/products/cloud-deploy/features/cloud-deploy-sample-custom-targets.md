---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:17:26.758Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Cloud Deploy sample custom targets"
feature_slug: "cloud-deploy-sample-custom-targets"
latest_feature_date: "2023-12-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/custom-targets"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-custom-target"
  - "https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.customTargetTypes"
keywords:
  - "deploy"
  - "sample"
  - "custom"
  - "targets"
  - "adds"
  - "access"
  - "to"
  - "target"
---

# Cloud Deploy sample custom targets

Product: Cloud Deploy
Coverage: LOW

## Step 02 Summary

Cloud Deploy adds access to sample custom target integrations, including Terraform, Infrastructure Manager, GitOps, Vertex AI, and Helm.

## Extended Definition

Cloud Deploy adds access to sample custom target integrations, including Terraform, Infrastructure Manager, GitOps, Vertex AI, and Helm.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/custom-targets](https://docs.cloud.google.com/deploy/docs/custom-targets)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-custom-target](https://docs.cloud.google.com/deploy/docs/deploy-app-custom-target)
- [https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.customTargetTypes](https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.customTargetTypes)

## Supporting Pages

### About custom targets \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/custom-targets](https://docs.cloud.google.com/deploy/docs/custom-targets)
- Source ID: `site-docs-root-2`
- Final score: 246
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example deploy results file The following is a sample results.json file output from a custom deploy: { "resultStatus" : "SUCCEEDED" , "artifactFiles" : [ "gs://bucket/my-pipeline/release-001/rollout-a/01234/custom-output/file1.yaml" , "gs://bucket/my-pipeline/release-001/rollout-a/01234/custom-output/file2.yaml" ], "failureMessage" : "" , "skipMessage" : "" , "metadata" : { "key1" : "val" , "key2" : "val" } } Further information about custom targets Here are some things to keep in mind when setting up and using custom target types.
- Example render results file The following is a sample results.json file output from a custom render: { "resultStatus" : "SUCCEEDED" , "manifestFile" : "gs://bucket/my-pipeline/release-001/rollout-a/01234/custom-output/manifest.yaml" , "failureMessage" : "" , "metadata" : { "key1" : "val" , "key2" : "val" } } Inputs to custom deploys For custom deploys, Cloud Deploy provides the following inputs, as environment variables: CLOUD DEPLOY PROJECT The Google Cloud project number for the project in which the custom target is created.
- A custom target type definition The CustomTargetType is a Cloud Deploy resource that identifies the tasks that targets of this type use for release render and rollout deploy activities.
- Home Documentation Application development Cloud Deploy Guides Send feedback About custom targets Stay organized with collections Save and categorize content based on your preferences.

### "Quickstart: Define and use custom target type \_|\_ Cloud Deploy \_|\_ Google\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-custom-target](https://docs.cloud.google.com/deploy/docs/deploy-app-custom-target)
- Source ID: `site-docs-root-2`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a new directory and navigate into it. mkdir custom-target-quickstart cd custom-target-quickstart In the custom-target-quickstart directory, create a new file, clouddeploy.yaml , with the following content: apiVersion : deploy.cloud.google.com/v1 kind : DeliveryPipeline metadata : name : custom-targets-pipeline serialPipeline : stages : - targetId : sample-env --- apiVersion : deploy.cloud.google.com/v1 kind : Target metadata : name : sample-env customTarget : customTargetType : basic-custom-target --- apiVersion : deploy.cloud.google.com/v1 kind : CustomTargetType metadata : name : basic-custom-target tasks : render : type : 'container' image : gcr.io/google.com/cloudsdktool/google-cloud-cli@sha256:484e8266c1cfc84b283bc6d4eec1f6b61223115178cce76fb59f77b223f26e8e command : [ '/bin/bash' ] args : - '-c' - - echo "Sample manifest rendered content" > manifest.txt gcloud storage cp manifest.txt $CLOUD DEPLOY OUTPUT GCS PATH/manifest.txt echo {\"resultStatus\": \"SUCCEEDED\", \"manifestFile\": \"$CLOUD DEPLOY OUTPUT GCS PATH/manifest.txt\"} > results.json gcloud storage cp results.json $CLOUD DEPLOY OUTPUT GCS PATH/results.json deploy : type : 'container' image : gcr.io/google.com/cloudsdktool/google-cloud-cli@sha256:484e8266c1cfc84b283bc6d4eec1f6b61223115178cce76fb59f77b223f26e8e command : [ '/bin/bash' ] args : - '-c' - - echo {\"resultStatus\": \"SUCCEEDED\"} > results.json gcloud storage cp results.json $CLOUD DEPLOY OUTPUT GCS PATH/results.json The custom target type definition includes the tasks stanza , defining a render task and a deploy task.
- Run the following command from the custom-target-quickstart directory to create a release resource that represents the custom action to deploy: gcloud deploy releases create test - release - 001 \ -- project = PROJECT ID \ -- region = us - central1 \ -- delivery - pipeline = custom - targets - pipeline As with all releases (unless they include --disable-initial-rollout ), Cloud Deploy automatically creates a rollout resource too.
- However, you can view the file and the strings in that file: In the Google Cloud console, navigate to the Cloud Deploy Delivery pipelines page to view your delivery pipeline ( custom-targets-pipeline ).
- Add the iam.serviceAccountUser role, which includes the actAs permission to deploy to the runtime: gcloud iam service-accounts add-iam-policy-binding $(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --member=serviceAccount:$(gcloud projects describe PROJECT ID \ --format="value(projectNumber)")-compute@developer.gserviceaccount.com \ --role="roles/iam.serviceAccountUser" \ --project= PROJECT ID Create your delivery pipeline, custom target type, and target You can define your delivery pipeline, custom target type, and target in one file or in separate files.

### "REST Resource: projects.locations.customTargetTypes \_|\_ Cloud Deploy \_\

- URL: [https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.customTargetTypes](https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.customTargetTypes)
- Source ID: `site-docs-reference`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource: CustomTargetType JSON representation CustomTargetSkaffoldActions JSON representation SkaffoldModules JSON representation SkaffoldGitSource JSON representation SkaffoldGCSSource JSON representation SkaffoldGCBRepoSource JSON representation Methods Resource: CustomTargetType A CustomTargetType resource in the Cloud Deploy API.
- Defines the CustomTargetType renderer and deployer. definition can be only one of the following: customActions object ( CustomTargetSkaffoldActions ) Optional.
- JSON representation { "name" : string , "customTargetTypeId" : string , "uid" : string , "description" : string , "annotations" : { string : string , ... } , "labels" : { string : string , ... } , "createTime" : string , "updateTime" : string , "etag" : string , // Union field definition can be only one of the following: "customActions" : { object ( CustomTargetSkaffoldActions ) } // End of list of possible types for union field definition . } Fields name string Identifier.
- Methods create Creates a new CustomTargetType in a given project and location. delete Deletes a single CustomTargetType. get Gets details of a single CustomTargetType. getIamPolicy Gets the access control policy for a resource. list Lists CustomTargetTypes in a given project and location. patch Updates a single CustomTargetType. setIamPolicy Sets the access control policy on the specified resource.

