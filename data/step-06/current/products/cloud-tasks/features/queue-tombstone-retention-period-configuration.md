---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:46.613Z"
product_name: "Cloud Tasks"
product_slug: "cloud-tasks"
feature_name: "Queue tombstone retention period configuration"
feature_slug: "queue-tombstone-retention-period-configuration"
latest_feature_date: "2021-01-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/tasks/docs/deleting-appengine-queues-and-tasks"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesFixedSizeCollection"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesPage"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesPagedResponse"
keywords:
  - "queue"
  - "tombstone"
  - "retention"
  - "period"
  - "configuration"
  - "tasks"
  - "lets"
  - "queues"
---

# Queue tombstone retention period configuration

Product: Cloud Tasks
Coverage: MEDIUM

## Step 02 Summary

Cloud Tasks lets queues configure how long task tombstones are retained for de-duplication with the tombstoneTtl field.

## Extended Definition

Cloud Tasks lets queues configure how long task tombstones are retained for de-duplication with the tombstoneTtl field.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/tasks/docs/deleting-appengine-queues-and-tasks](https://docs.cloud.google.com/tasks/docs/deleting-appengine-queues-and-tasks)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesFixedSizeCollection)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesPage)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesPagedResponse](https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesPagedResponse)

## Supporting Pages

### Manage queues and tasks \_|\_ Cloud Tasks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tasks/docs/deleting-appengine-queues-and-tasks](https://docs.cloud.google.com/tasks/docs/deleting-appengine-queues-and-tasks)
- Source ID: `site-docs-root`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To resume the queue, click play arrow Resume queue . gcloud Pause a queue using the gcloud tasks queues pause command: gcloud tasks queues pause QUEUE ID \ --location = LOCATION Replace the following: QUEUE ID : the name of the queue that you want to pause LOCATION : the region in which the queue is deployed—for example, us-central1 Resume a queue using the gcloud tasks queues resume command: gcloud tasks queues resume QUEUE ID \ --location = LOCATION REST To pause a queue, use the projects.locations.queues.pause method.
- At the prompt, click Delete . gcloud Delete a task using the gcloud tasks delete command: gcloud tasks delete TASK NAME \ --queue = QUEUE ID \ --location = LOCATION Replace the following: TASK NAME : the name of the task that you want to delete QUEUE ID : the name of the queue that the task belongs to LOCATION : the region in which the queue is deployed—for example, us-central1 REST To delete a task, use the projects.locations.queues.tasks.delete method.
- Execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d "" \ "https://cloudtasks.googleapis.com/v2/projects/ PROJECT ID /locations/ LOCATION /queues/ QUEUE ID :resume" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d "" \ "https://cloudtasks.googleapis.com/v2/projects/ PROJECT ID /locations/ LOCATION /queues/ QUEUE ID :purge" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

### "Class CloudTasksClient.ListQueuesFixedSizeCollection (2.88.0) \_|\_ Java\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesFixedSizeCollection)
- Source ID: `site-java-reference`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListQueuesFixedSizeCollection > Inheritance java.lang.Object > AbstractFixedSizeCollection > CloudTasksClient.ListQueuesFixedSizeCollection Inherited Members AbstractFixedSizeCollection.createCollection(List<PageT>,int) AbstractFixedSizeCollection.getCollectionSize() AbstractFixedSizeCollection.getNextCollection() AbstractFixedSizeCollection.getNextPageToken() AbstractFixedSizeCollection.getValues() AbstractFixedSizeCollection.hasNextCollection() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createCollection(List<CloudTasksClient.ListQueuesPage> pages, int collectionSize) protected CloudTasksClient .
- ListQueuesPage > pages , int collectionSize ) Parameters Name Description pages List < ListQueuesPage > collectionSize int Returns Type Description CloudTasksClient.ListQueuesFixedSizeCollection Overrides AbstractFixedSizeCollection<RequestT,ResponseT,ResourceT,PageT,CollectionT>.createCollection(List<PageT> pages, int collectionSize) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Developer tools Java Client libraries Send feedback Class CloudTasksClient.ListQueuesFixedSizeCollection (2.88.0) Stay organized with collections Save and categorize content based on your preferences.
- ListQueuesFixedSizeCollection extends AbstractFixedSizeCollection<ListQueuesRequest , ListQueuesResponse , Queue , CloudTasksClient .

### "Class CloudTasksClient.ListQueuesPage (2.88.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesPage)
- Source ID: `site-java-reference`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListQueuesPage > Inheritance java.lang.Object > AbstractPage > CloudTasksClient.ListQueuesPage Inherited Members AbstractPage.createPage(PageContext<RequestT,ResponseT,ResourceT>,ResponseT) AbstractPage.createPageAsync(PageContext<RequestT,ResponseT,ResourceT>,ApiFuture<ResponseT>) AbstractPage.getNextPage() AbstractPage.getNextPage(int) AbstractPage.getNextPageAsync() AbstractPage.getNextPageToken() AbstractPage.getPageElementCount() AbstractPage.getRequest() AbstractPage.getResponse() AbstractPage.getValues() AbstractPage.hasNextPage() AbstractPage.iterateAll() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createPage(PageContext<ListQueuesRequest,ListQueuesResponse,Queue> context, ListQueuesResponse response) protected CloudTasksClient .
- ListQueuesPage createPage ( PageContext<ListQueuesRequest , ListQueuesResponse , Queue > context , ListQueuesResponse response ) Parameters Name Description context PageContext < ListQueuesRequest , ListQueuesResponse , Queue > response ListQueuesResponse Returns Type Description CloudTasksClient.ListQueuesPage Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPage(PageContext<RequestT,ResponseT,ResourceT> context, ResponseT response) createPageAsync(PageContext<ListQueuesRequest,ListQueuesResponse,Queue> context, ApiFuture<ListQueuesResponse> futureResponse) public ApiFuture<CloudTasksClient .
- Home Documentation Developer tools Java Client libraries Send feedback Class CloudTasksClient.ListQueuesPage (2.88.0) Stay organized with collections Save and categorize content based on your preferences.
- ListQueuesPage extends AbstractPage<ListQueuesRequest , ListQueuesResponse , Queue , CloudTasksClient .

### "Class CloudTasksClient.ListQueuesPagedResponse (2.88.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesPagedResponse](https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesPagedResponse)
- Source ID: `site-java-reference`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListQueuesFixedSizeCollection > Inheritance java.lang.Object > AbstractPagedListResponse > CloudTasksClient.ListQueuesPagedResponse Inherited Members AbstractPagedListResponse.expandToFixedSizeCollection(int) AbstractPagedListResponse.getNextPageToken() AbstractPagedListResponse.getPage() AbstractPagedListResponse.iterateAll() AbstractPagedListResponse.iterateFixedSizeCollections(int) AbstractPagedListResponse.iteratePages() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods createAsync(PageContext<ListQueuesRequest,ListQueuesResponse,Queue> context, ApiFuture<ListQueuesResponse> futureResponse) public static ApiFuture<CloudTasksClient .
- Home Documentation Developer tools Java Client libraries Send feedback Class CloudTasksClient.ListQueuesPagedResponse (2.88.0) Stay organized with collections Save and categorize content based on your preferences.
- ListQueuesPagedResponse extends AbstractPagedListResponse<ListQueuesRequest , ListQueuesResponse , Queue , CloudTasksClient .
- ListQueuesPage , CloudTasksClient .

