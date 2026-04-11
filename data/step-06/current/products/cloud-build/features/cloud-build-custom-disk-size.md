---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.796Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build custom disk size"
feature_slug: "cloud-build-custom-disk-size"
latest_feature_date: "2017-10-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v2.RepositoryManagerClient"
  - "https://docs.cloud.google.com/build/docs/create-custom-build-steps"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v2.RepositoryManagerClient.FetchLinkableRepositoriesFixedSizeCollection"
keywords:
  - "build"
  - "custom"
  - "disk"
  - "size"
  - "added"
  - "an"
  - "option"
  - "to"
---

# Cloud Build custom disk size

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build added an option to set a custom disk size.

## Extended Definition

Cloud Build added an option to set a custom disk size.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v2.RepositoryManagerClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v2.RepositoryManagerClient)
- [https://docs.cloud.google.com/build/docs/create-custom-build-steps](https://docs.cloud.google.com/build/docs/create-custom-build-steps)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v2.RepositoryManagerClient.FetchLinkableRepositoriesFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v2.RepositoryManagerClient.FetchLinkableRepositoriesFixedSizeCollection)

## Supporting Pages

### "Class RepositoryManagerClient (3.90.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v2.RepositoryManagerClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v2.RepositoryManagerClient)
- Source ID: `site-java-reference`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: To customize credentials: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library RepositoryManagerSettings repositoryManagerSettings = RepositoryManagerSettings . newBuilder () . setCredentialsProvider ( FixedCredentialsProvider . create ( myCredentials )) . build (); RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ( repositoryManagerSettings ); To customize the endpoint: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library RepositoryManagerSettings repositoryManagerSettings = RepositoryManagerSettings . newBuilder (). setEndpoint ( myEndpoint ). build (); RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ( repositoryManagerSettings ); To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library RepositoryManagerSettings repositoryManagerSettings = RepositoryManagerSettings . newHttpJsonBuilder (). build (); RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ( repositoryManagerSettings ); Please refer to the GitHub repository's samples for more quickstart code snippets.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) { FetchLinkableRepositoriesRequest request = FetchLinkableRepositoriesRequest . newBuilder () . setConnection ( ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); ApiFuture<Repository> future = repositoryManagerClient . fetchLinkableRepositoriesPagedCallable (). futureCall ( request ); // Do something. for ( Repository element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < FetchLinkableRepositoriesRequest , FetchLinkableRepositoriesPagedResponse > fetchReadToken(FetchReadTokenRequest request) public final FetchReadTokenResponse fetchReadToken ( FetchReadTokenRequest request ) Fetches read token of a given repository.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) { ListRepositoriesRequest request = ListRepositoriesRequest . newBuilder () . setParent ( ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setFilter ( "filter-1274492040" ) . build (); ApiFuture<Repository> future = repositoryManagerClient . listRepositoriesPagedCallable (). futureCall ( request ); // Do something. for ( Repository element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListRepositoriesRequest , ListRepositoriesPagedResponse > setIamPolicy(SetIamPolicyRequest request) public final Policy setIamPolicy ( SetIamPolicyRequest request ) Sets the access control policy on the specified resource.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) { ListConnectionsRequest request = ListConnectionsRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); ApiFuture<Connection> future = repositoryManagerClient . listConnectionsPagedCallable (). futureCall ( request ); // Do something. for ( Connection element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListConnectionsRequest , ListConnectionsPagedResponse > listRepositories(ConnectionName parent) public final RepositoryManagerClient .

### "Using community-contributed builders and custom builders \_|\_ Cloud Build\

- URL: [https://docs.cloud.google.com/build/docs/create-custom-build-steps](https://docs.cloud.google.com/build/docs/create-custom-build-steps)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following code shows an example Dockerfile : FROM alpine RUN apk add curl CMD curl https : //httpbin.org/ip -s > myip.txt; echo " My IP is: $(cat myip.txt)" Build and push the custom builder to the Artifact Registry in your project, replacing values for project-id and image-name : gcloud builds submit -- tag gcr . io / project - id / image - name Use the custom builder image in Cloud Build by specifying the builder in the name field of a build step: YAML steps : - name : 'gcr.io/ project-id / image-name ' id : Determine IP of this build worker JSON { "steps" : [ { "name" : "gcr.io/ project-id / image-name " , "id" : "Determine IP of this build worker" } ] } Use the build config file to start the build manually or build using triggers .
- Creating a custom builder If the task you want to perform requires capabilities that are not provided by a public image, a supported builder, or a community-contributed builder , you can build your own image and use it in a build step.
- Home Documentation Application development Cloud Build Guides Send feedback Using community-contributed builders and custom builders Stay organized with collections Save and categorize content based on your preferences.
- The following steps show how to create and use a custom builder with an example Dockerfile : Create a custom builder image: Create the Dockerfile for the custom builder.

### "Class RepositoryManagerClient.FetchLinkableRepositoriesFixedSizeCollection\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v2.RepositoryManagerClient.FetchLinkableRepositoriesFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v2.RepositoryManagerClient.FetchLinkableRepositoriesFixedSizeCollection)
- Source ID: `site-java-reference`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- FetchLinkableRepositoriesFixedSizeCollection > Inheritance java.lang.Object > AbstractFixedSizeCollection > RepositoryManagerClient.FetchLinkableRepositoriesFixedSizeCollection Inherited Members AbstractFixedSizeCollection.createCollection(List<PageT>,int) AbstractFixedSizeCollection.getCollectionSize() AbstractFixedSizeCollection.getNextCollection() AbstractFixedSizeCollection.getNextPageToken() AbstractFixedSizeCollection.getValues() AbstractFixedSizeCollection.hasNextCollection() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createCollection(List<RepositoryManagerClient.FetchLinkableRepositoriesPage> pages, int collectionSize) protected RepositoryManagerClient .
- FetchLinkableRepositoriesPage > pages , int collectionSize ) Parameters Name Description pages List < FetchLinkableRepositoriesPage > collectionSize int Returns Type Description RepositoryManagerClient.FetchLinkableRepositoriesFixedSizeCollection Overrides AbstractFixedSizeCollection<RequestT,ResponseT,ResourceT,PageT,CollectionT>.createCollection(List<PageT> pages, int collectionSize) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Developer tools Java Client libraries Send feedback Class RepositoryManagerClient.FetchLinkableRepositoriesFixedSizeCollection (3.90.0) Stay organized with collections Save and categorize content based on your preferences.
- FetchLinkableRepositoriesFixedSizeCollection extends AbstractFixedSizeCollection<FetchLinkableRepositoriesRequest , FetchLinkableRepositoriesResponse , Repository , RepositoryManagerClient .

