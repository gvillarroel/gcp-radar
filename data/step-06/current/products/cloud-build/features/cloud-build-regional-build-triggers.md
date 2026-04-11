---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.735Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build regional build triggers"
feature_slug: "cloud-build-regional-build-triggers"
latest_feature_date: "2022-06-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient"
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github"
keywords:
  - "build"
  - "regional"
  - "triggers"
  - "now"
  - "region"
  - "specific"
  - "operation"
  - "in"
---

# Cloud Build regional build triggers

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build build triggers now support region-specific operation; Cloud Build build triggers support regional operation in preview.

## Extended Definition

Cloud Build build triggers now support region-specific operation; Cloud Build build triggers support regional operation in preview.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient)
- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)

## Supporting Pages

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- To create a trigger if your source code is in GitHub : gcloud builds triggers create github \ -- name = TRIGGER NAME \ -- region = REGION \ -- repo - name = REPO NAME \ -- repo - owner = REPO OWNER \ -- branch - pattern = BRANCH PATTERN \ # or -- tag - pattern = TAG PATTERN -- build - config = BUILD CONFIG FILE \ -- service - account = SERVICE ACCOUNT \ -- require - approval -- include - logs - with - status Where: REGION is the region for your trigger.
- Click Create to save your build trigger. gcloud To create a trigger if your source code is in Cloud Source Repositories : gcloud builds triggers create cloud-source-repositories \ --repo= REPO NAME \ --branch-pattern= BRANCH PATTERN \ # or --tag-pattern= TAG PATTERN --build-config= BUILD CONFIG FILE \ --service-account= SERVICE ACCOUNT \ --require-approval Where: REPO NAME is the name of your repository.
- See the gcloud instructions for how to update a build trigger to show or hide build logs for GitHub or GitHub Enterprise triggers. gcloud To update a trigger: Export the trigger you would like to update: gcloud beta builds triggers export TRIGGER NAME -- destination = EXPORT PATH Where: TRIGGER NAME is the name of your trigger.
- Keep in mind the following security implications when using build triggers: A user with no access to your Cloud project, but with write access to the repository associated with build triggers in the project will have permissions to change the code being built.

### "Class CloudBuildClient (3.90.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient)
- Source ID: `site-java-reference`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( CloudBuildClient cloudBuildClient = CloudBuildClient . create ()) { ListWorkerPoolsRequest request = ListWorkerPoolsRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); ApiFuture<WorkerPool> future = cloudBuildClient . listWorkerPoolsPagedCallable (). futureCall ( request ); // Do something. for ( WorkerPool element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListWorkerPoolsRequest , ListWorkerPoolsPagedResponse > receiveTriggerWebhook(ReceiveTriggerWebhookRequest request) public final ReceiveTriggerWebhookResponse receiveTriggerWebhook ( ReceiveTriggerWebhookRequest request ) ReceiveTriggerWebhook [Experimental] is called when the API receives a webhook request targeted at a specific trigger.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( CloudBuildClient cloudBuildClient = CloudBuildClient . create ()) { DeleteWorkerPoolRequest request = DeleteWorkerPoolRequest . newBuilder () . setName ( WorkerPoolName . of ( "[PROJECT]" , "[LOCATION]" , "[WORKER POOL]" ). toString ()) . setEtag ( "etag3123477" ) . setAllowMissing ( true ) . setValidateOnly ( true ) . build (); OperationFuture<Empty , DeleteWorkerPoolOperationMetadata > future = cloudBuildClient . deleteWorkerPoolOperationCallable (). futureCall ( request ); // Do something. future . get (); } Returns Type Description OperationCallable < DeleteWorkerPoolRequest , Empty , DeleteWorkerPoolOperationMetadata > getBuild(BuildName name) public final Build getBuild ( BuildName name ) Returns information about a previously requested build.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( CloudBuildClient cloudBuildClient = CloudBuildClient . create ()) { DeleteBuildTriggerRequest request = DeleteBuildTriggerRequest . newBuilder () . setName ( BuildTriggerName . ofProjectTriggerName ( "[PROJECT]" , "[TRIGGER]" ). toString ()) . setProjectId ( "projectId-894832108" ) . setTriggerId ( "triggerId-648752909" ) . build (); ApiFuture<Empty> future = cloudBuildClient . deleteBuildTriggerCallable (). futureCall ( request ); // Do something. future . get (); } Returns Type Description UnaryCallable < DeleteBuildTriggerRequest , Empty > deleteWorkerPoolAsync(DeleteWorkerPoolRequest request) public final OperationFuture<Empty , DeleteWorkerPoolOperationMetadata > deleteWorkerPoolAsync ( DeleteWorkerPoolRequest request ) Deletes a WorkerPool .
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( CloudBuildClient cloudBuildClient = CloudBuildClient . create ()) { DeleteWorkerPoolRequest request = DeleteWorkerPoolRequest . newBuilder () . setName ( WorkerPoolName . of ( "[PROJECT]" , "[LOCATION]" , "[WORKER POOL]" ). toString ()) . setEtag ( "etag3123477" ) . setAllowMissing ( true ) . setValidateOnly ( true ) . build (); ApiFuture<Operation> future = cloudBuildClient . deleteWorkerPoolCallable (). futureCall ( request ); // Do something. future . get (); } Returns Type Description UnaryCallable < DeleteWorkerPoolRequest , Operation > deleteWorkerPoolOperationCallable() public final OperationCallable<DeleteWorkerPoolRequest , Empty , DeleteWorkerPoolOperationMetadata > deleteWorkerPoolOperationCallable () Deletes a WorkerPool .

### Building repositories from GitHub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)
- Source ID: `site-docs-root-2`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- To create GitHub triggers using gcloud commands, see the gcloud commands for Creating a build trigger . gcloud CLI To create GitHub triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer - connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.
- GitHub legacy triggers : When you create a GitHub legacy trigger, Cloud Build mirrors your GitHub repository in Cloud Source Repositories and uses the mirrored repository for all its operations.
- The following table compares GitHub legacy triggers, GitHub triggers, and GitHub Enterprise triggers: Feature GitHub legacy triggers GitHub triggers GitHub Enterprise triggers Execute builds on pushes to the source code Yes Yes Yes Execute builds on pull requests No Yes Yes Create trigger using Google Cloud console Yes Yes Yes Create trigger using the Cloud Build API No Yes Yes Create trigger using the Cloud Build GitHub app No Yes Yes View build status on Google Cloud console Yes Yes Yes View build status on GitHub No Yes Yes Data sharing The data sent to GitHub from Cloud Build helps you identify triggers by name and see build results on GitHub.
- You can adjust status check configurations to look for your trigger name by: Disabling any Cloud Build-specific required checks on the GitHub repository Ensuring that data sharing is enabled in Cloud Build Executing a new build in Cloud Build that posts statuses to your repository Re-enabling required status checks, selecting trigger name Note: Enabling data sharing for a project is not reversible.

