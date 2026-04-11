---
title: "Class SchemaServiceClient.ListSchemaRevisionsPage (1.149.0) \_|\_ Java client\
  \ libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.SchemaServiceClient.ListSchemaRevisionsPage
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.SchemaServiceClient.ListSchemaRevisionsPage
  title: "Class SchemaServiceClient.ListSchemaRevisionsPage (1.149.0) \_|\_ Java client\
    \ libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Class SchemaServiceClient.ListSchemaRevisionsPage (1.149.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.149.0 (latest)
1.148.0
1.147.0
1.145.0
1.143.1
1.142.0
1.141.5
1.140.2
1.139.4
1.138.0
1.137.1
1.136.1
1.135.0
1.134.2
1.133.1
1.132.2
1.131.0
1.130.0
1.129.6
1.127.3
1.126.6
1.125.13
1.123.18
1.122.2
1.121.1
1.120.24
1.119.1
1.118.0
1.117.0
1.116.4
1.115.5
public static class SchemaServiceClient . ListSchemaRevisionsPage extends AbstractPage<ListSchemaRevisionsRequest , ListSchemaRevisionsResponse , Schema , SchemaServiceClient . ListSchemaRevisionsPage >
Inheritance
java.lang.Object >
AbstractPage >
SchemaServiceClient.ListSchemaRevisionsPage
Inherited Members
AbstractPage.createPage(PageContext<RequestT,ResponseT,ResourceT>,ResponseT)
AbstractPage.createPageAsync(PageContext<RequestT,ResponseT,ResourceT>,ApiFuture<ResponseT>)
AbstractPage.getNextPage()
AbstractPage.getNextPage(int)
AbstractPage.getNextPageAsync()
AbstractPage.getNextPageToken()
AbstractPage.getPageElementCount()
AbstractPage.getRequest()
AbstractPage.getResponse()
AbstractPage.getValues()
AbstractPage.hasNextPage()
AbstractPage.iterateAll()
Object.clone()
Object.equals(Object)
Object.finalize()
Object.getClass()
Object.hashCode()
Object.notify()
Object.notifyAll()
Object.toString()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Methods
createPage(PageContext<ListSchemaRevisionsRequest,ListSchemaRevisionsResponse,Schema> context, ListSchemaRevisionsResponse response)
protected SchemaServiceClient . ListSchemaRevisionsPage createPage ( PageContext<ListSchemaRevisionsRequest , ListSchemaRevisionsResponse , Schema > context , ListSchemaRevisionsResponse response )
Parameters
Name
Description
context
PageContext < ListSchemaRevisionsRequest , ListSchemaRevisionsResponse , Schema >
response
ListSchemaRevisionsResponse
Returns
Type
Description
SchemaServiceClient.ListSchemaRevisionsPage
Overrides
AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPage(PageContext<RequestT,ResponseT,ResourceT> context, ResponseT response)
createPageAsync(PageContext<ListSchemaRevisionsRequest,ListSchemaRevisionsResponse,Schema> context, ApiFuture<ListSchemaRevisionsResponse> futureResponse)
public ApiFuture<SchemaServiceClient . ListSchemaRevisionsPage > createPageAsync ( PageContext<ListSchemaRevisionsRequest , ListSchemaRevisionsResponse , Schema > context , ApiFuture<ListSchemaRevisionsResponse> futureResponse )
Parameters
Name
Description
context
PageContext < ListSchemaRevisionsRequest , ListSchemaRevisionsResponse , Schema >
futureResponse
ApiFuture < ListSchemaRevisionsResponse >
Returns
Type
Description
ApiFuture < ListSchemaRevisionsPage >
Overrides
AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPageAsync(PageContext<RequestT,ResponseT,ResourceT> context, ApiFuture<ResponseT> futureResponse)
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
