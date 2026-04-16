---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:59.666Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "Filestore availability in europe-central2"
feature_slug: "filestore-availability-in-europe-central2"
latest_feature_date: "2021-03-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/getting-instance-information"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListInstancesFixedSizeCollection"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListInstancesPage"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListInstancesPagedResponse"
keywords:
  - "filestore"
  - "availability"
  - "in"
  - "europe"
  - "central2"
  - "is"
  - "available"
  - "the"
---

# Filestore availability in europe-central2

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

Filestore is available in the europe-central2 region.

## Extended Definition

Filestore is available in the europe-central2 region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/getting-instance-information](https://docs.cloud.google.com/filestore/docs/getting-instance-information)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListInstancesFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListInstancesFixedSizeCollection)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListInstancesPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListInstancesPage)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListInstancesPagedResponse](https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListInstancesPagedResponse)

## Supporting Pages

### Get instance information \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/getting-instance-information](https://docs.cloud.google.com/filestore/docs/getting-instance-information)
- Source ID: `site-docs-root`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- INSTANCE NAME ZONE TIER CAPACITY GB FILE SHARE NAME IP ADDRESS STATE CREATE TIME nfs-loc europe-west1-b BASIC HDD 1024 nfs1 10.0.5.2 READY 2017-10-09T22:11:28 nfs3 us-central1-c BASIC HDD 1024 acme 10.0.6.2 READY 2017-11-06T09:37:18 Example The following command lists the Filestore instances in project myproject : gcloud filestore instances list --project=myproject REST API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- Go to the Filestore instances page Click the instance ID to open the instance details page. gcloud Get information about a Filestore instance by running the instances describe command: gcloud filestore instances describe instance-id --project= project-id --location= location The response to the instances describe command is similar to the following: createTime: '2021-10-11T17:28:23.340943077Z' customPerformanceSupported: true fileShares: - capacityGb: '1024' name: vol1 kmsKeyName: projects/example-project/locations/us-central1/keyRings/example-ring/cryptoKeys/example-key labels: key:val name: projects/yourproject/locations/us-central1/instances/nfs-server networks: - ipAddresses: - 10.0.0.2 network: default reservedIpRange: 10.0.0.0/26 performanceConfig: iopsPerTb: maxIopsPerTb: '17000' performanceLimits: maxIops: '17000' maxReadIops: '17000' maxReadThroughputBps: '417792000' maxWriteIops: '5100' maxWriteThroughputBps: '139264000' state: READY tier: REGIONAL These fields represent the following values: createTime : The time the instance was created, in RFC 3339 format. fileShares : capacityGb : The size of the Filestore file share in binary gigabytes ( GB ), where 1 GB = 1024 3 bytes. name : The name of the Filestore file share.
- List the mount points for an instance You can list all mount points where a Filestore instance is mounted by running: sudo showmount -a INSTANCE IP Example The following command lists all mount points for a Filestore instance with the IP address 10.77.67.226 : sudo showmount -a 10.77.67.226 The response looks similar to the following: All mount points on 10 .77.67.226: 10 .128.0.1:/fileshare 10 .128.0.2:/fileshare 10 .128.0.3:/fileshare Get the number of mount points for an instance You can get the total number of mount points for a Filestore instance by running: sudo showmount -a INSTANCE IP --no-headers wc -l Example The following command displays the number of mount points for an instance with the IP address 10.77.67.226 : sudo showmount -a 10.77.67.226 --no-headers wc -l What's next Create another instance .
- View all instances in a project Google Cloud console You can get information about your Filestore instances, and view all instances in a project, by going to the Filestore instances page: Go to the Filestore instances page gcloud You can get information about your Filestore instances, and view all instances in a project, by running the instances list command: gcloud filestore instances list --project= project-id --zone= zone where: project-id is the project ID of the Google Cloud project that contains the Filestore instance.

### "Class CloudFilestoreManagerClient.ListInstancesFixedSizeCollection (1.89.0)\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListInstancesFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListInstancesFixedSizeCollection)
- Source ID: `site-java-reference`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListInstancesPage > pages , int collectionSize ) Parameters Name Description pages List < ListInstancesPage > collectionSize int Returns Type Description CloudFilestoreManagerClient.ListInstancesFixedSizeCollection Overrides AbstractFixedSizeCollection<RequestT,ResponseT,ResourceT,PageT,CollectionT>.createCollection(List<PageT> pages, int collectionSize) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- ListInstancesFixedSizeCollection > Inheritance java.lang.Object > AbstractFixedSizeCollection > CloudFilestoreManagerClient.ListInstancesFixedSizeCollection Inherited Members AbstractFixedSizeCollection.createCollection(List<PageT>,int) AbstractFixedSizeCollection.getCollectionSize() AbstractFixedSizeCollection.getNextCollection() AbstractFixedSizeCollection.getNextPageToken() AbstractFixedSizeCollection.getValues() AbstractFixedSizeCollection.hasNextCollection() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createCollection(List<CloudFilestoreManagerClient.ListInstancesPage> pages, int collectionSize) protected CloudFilestoreManagerClient .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
- Home Documentation Developer tools Java Client libraries Send feedback Class CloudFilestoreManagerClient.ListInstancesFixedSizeCollection (1.89.0) Stay organized with collections Save and categorize content based on your preferences.

### "Class CloudFilestoreManagerClient.ListInstancesPage (1.89.0) \_|\_ Java\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListInstancesPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListInstancesPage)
- Source ID: `site-java-reference`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListInstancesPage > Inheritance java.lang.Object > AbstractPage > CloudFilestoreManagerClient.ListInstancesPage Inherited Members AbstractPage.createPage(PageContext<RequestT,ResponseT,ResourceT>,ResponseT) AbstractPage.createPageAsync(PageContext<RequestT,ResponseT,ResourceT>,ApiFuture<ResponseT>) AbstractPage.getNextPage() AbstractPage.getNextPage(int) AbstractPage.getNextPageAsync() AbstractPage.getNextPageToken() AbstractPage.getPageElementCount() AbstractPage.getRequest() AbstractPage.getResponse() AbstractPage.getValues() AbstractPage.hasNextPage() AbstractPage.iterateAll() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createPage(PageContext<ListInstancesRequest,ListInstancesResponse,Instance> context, ListInstancesResponse response) protected CloudFilestoreManagerClient .
- ListInstancesPage > createPageAsync ( PageContext<ListInstancesRequest , ListInstancesResponse , Instance > context , ApiFuture<ListInstancesResponse> futureResponse ) Parameters Name Description context PageContext < ListInstancesRequest , ListInstancesResponse , Instance > futureResponse ApiFuture < ListInstancesResponse > Returns Type Description ApiFuture < ListInstancesPage > Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPageAsync(PageContext<RequestT,ResponseT,ResourceT> context, ApiFuture<ResponseT> futureResponse) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- ListInstancesPage createPage ( PageContext<ListInstancesRequest , ListInstancesResponse , Instance > context , ListInstancesResponse response ) Parameters Name Description context PageContext < ListInstancesRequest , ListInstancesResponse , Instance > response ListInstancesResponse Returns Type Description CloudFilestoreManagerClient.ListInstancesPage Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPage(PageContext<RequestT,ResponseT,ResourceT> context, ResponseT response) createPageAsync(PageContext<ListInstancesRequest,ListInstancesResponse,Instance> context, ApiFuture<ListInstancesResponse> futureResponse) public ApiFuture<CloudFilestoreManagerClient .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]

### "Class CloudFilestoreManagerClient.ListInstancesPagedResponse (1.89.0) \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListInstancesPagedResponse](https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListInstancesPagedResponse)
- Source ID: `site-java-reference`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListInstancesFixedSizeCollection > Inheritance java.lang.Object > AbstractPagedListResponse > CloudFilestoreManagerClient.ListInstancesPagedResponse Inherited Members AbstractPagedListResponse.expandToFixedSizeCollection(int) AbstractPagedListResponse.getNextPageToken() AbstractPagedListResponse.getPage() AbstractPagedListResponse.iterateAll() AbstractPagedListResponse.iterateFixedSizeCollections(int) AbstractPagedListResponse.iteratePages() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods createAsync(PageContext<ListInstancesRequest,ListInstancesResponse,Instance> context, ApiFuture<ListInstancesResponse> futureResponse) public static ApiFuture<CloudFilestoreManagerClient .
- ListInstancesPagedResponse > createAsync ( PageContext<ListInstancesRequest , ListInstancesResponse , Instance > context , ApiFuture<ListInstancesResponse> futureResponse ) Parameters Name Description context PageContext < ListInstancesRequest , ListInstancesResponse , Instance > futureResponse ApiFuture < ListInstancesResponse > Returns Type Description ApiFuture < ListInstancesPagedResponse > Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
- Home Documentation Developer tools Java Client libraries Send feedback Class CloudFilestoreManagerClient.ListInstancesPagedResponse (1.89.0) Stay organized with collections Save and categorize content based on your preferences.

