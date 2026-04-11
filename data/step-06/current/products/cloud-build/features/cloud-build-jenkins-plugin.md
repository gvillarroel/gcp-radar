---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.794Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build Jenkins plugin"
feature_slug: "cloud-build-jenkins-plugin"
latest_feature_date: "2017-10-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/create-custom-build-steps"
  - "https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildsPage"
keywords:
  - "build"
  - "jenkins"
  - "plugin"
  - "for"
  - "became"
  - "available"
---

# Cloud Build Jenkins plugin

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

A Cloud Build plugin for Jenkins became available.

## Extended Definition

A Cloud Build plugin for Jenkins became available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/create-custom-build-steps](https://docs.cloud.google.com/build/docs/create-custom-build-steps)
- [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildsPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildsPage)

## Supporting Pages

### "Using community-contributed builders and custom builders \_|\_ Cloud Build\

- URL: [https://docs.cloud.google.com/build/docs/create-custom-build-steps](https://docs.cloud.google.com/build/docs/create-custom-build-steps)
- Source ID: `site-docs-root`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Using community-contributed builders Prebuilt images are not available for community-contributed builders; to use these builders in a Cloud Build config file, you must first build the image and push it to Artifact Registry in your project.
- The following code shows an example Dockerfile : FROM alpine RUN apk add curl CMD curl https : //httpbin.org/ip -s > myip.txt; echo " My IP is: $(cat myip.txt)" Build and push the custom builder to the Artifact Registry in your project, replacing values for project-id and image-name : gcloud builds submit -- tag gcr . io / project - id / image - name Use the custom builder image in Cloud Build by specifying the builder in the name field of a build step: YAML steps : - name : 'gcr.io/ project-id / image-name ' id : Determine IP of this build worker JSON { "steps" : [ { "name" : "gcr.io/ project-id / image-name " , "id" : "Determine IP of this build worker" } ] } Use the build config file to start the build manually or build using triggers .
- Clone the cloud-builders-community repository: git clone https : //github.com/GoogleCloudPlatform/cloud-builders-community.git Navigate to the builder image you want to use, where builder-name is the directory that contains the builder: cd cloud - builders - community / builder - name Submit the builder to your project: gcloud builds submit .
- Creating a custom builder If the task you want to perform requires capabilities that are not provided by a public image, a supported builder, or a community-contributed builder , you can build your own image and use it in a build step.

### "Automate builds in response to Pub/Sub events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- Source ID: `site-docs-root-2`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Note: Inline build configuration support is not available for Dockerfile or buildpacks.
- Note: Inline build configuration support is not available for Dockerfile or buildpacks.
- Click Create to create your build trigger. gcloud To create a trigger that listens for a new tag pushed to an existing image in Artifact Registry using the gcloud commands: Open a terminal window.
- Required except for owners and collaborators : When a pull request is created or updated by a repository owner or collaborator, builds will automatically be executed by the trigger.

### "Class CloudBuildClient.ListBuildsPage (3.90.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildsPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildsPage)
- Source ID: `site-java-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- ListBuildsPage > Inheritance java.lang.Object > AbstractPage > CloudBuildClient.ListBuildsPage Inherited Members AbstractPage.createPage(PageContext<RequestT,ResponseT,ResourceT>,ResponseT) AbstractPage.createPageAsync(PageContext<RequestT,ResponseT,ResourceT>,ApiFuture<ResponseT>) AbstractPage.getNextPage() AbstractPage.getNextPage(int) AbstractPage.getNextPageAsync() AbstractPage.getNextPageToken() AbstractPage.getPageElementCount() AbstractPage.getRequest() AbstractPage.getResponse() AbstractPage.getValues() AbstractPage.hasNextPage() AbstractPage.iterateAll() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createPage(PageContext<ListBuildsRequest,ListBuildsResponse,Build> context, ListBuildsResponse response) protected CloudBuildClient .
- ListBuildsPage > createPageAsync ( PageContext<ListBuildsRequest , ListBuildsResponse , Build > context , ApiFuture<ListBuildsResponse> futureResponse ) Parameters Name Description context PageContext < ListBuildsRequest , ListBuildsResponse , Build > futureResponse ApiFuture < ListBuildsResponse > Returns Type Description ApiFuture < ListBuildsPage > Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPageAsync(PageContext<RequestT,ResponseT,ResourceT> context, ApiFuture<ResponseT> futureResponse) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- ListBuildsPage createPage ( PageContext<ListBuildsRequest , ListBuildsResponse , Build > context , ListBuildsResponse response ) Parameters Name Description context PageContext < ListBuildsRequest , ListBuildsResponse , Build > response ListBuildsResponse Returns Type Description CloudBuildClient.ListBuildsPage Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPage(PageContext<RequestT,ResponseT,ResourceT> context, ResponseT response) createPageAsync(PageContext<ListBuildsRequest,ListBuildsResponse,Build> context, ApiFuture<ListBuildsResponse> futureResponse) public ApiFuture<CloudBuildClient .
- 3.90.0 (latest) 3.89.0 3.87.0 3.85.0 3.84.0 3.83.0 3.82.0 3.80.0 3.78.0 3.77.0 3.76.0 3.75.0 3.74.0 3.72.0 3.70.0 3.69.0 3.66.0 3.65.0 3.64.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.6 3.4.1 3.3.12 public static class CloudBuildClient .

