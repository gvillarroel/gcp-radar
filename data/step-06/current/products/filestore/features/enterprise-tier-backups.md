---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:59.658Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "Enterprise tier backups"
feature_slug: "enterprise-tier-backups"
latest_feature_date: "2023-10-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/backups"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListBackupsFixedSizeCollection"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListBackupsPage"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListBackupsPagedResponse"
keywords:
  - "enterprise"
  - "tier"
  - "backups"
  - "backup"
  - "for"
  - "the"
  - "filestore"
  - "is"
---

# Enterprise tier backups

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

Backup support for the Filestore Enterprise tier is generally available.

## Extended Definition

Backup support for the Filestore Enterprise tier is generally available.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/backups](https://docs.cloud.google.com/filestore/docs/backups)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListBackupsFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListBackupsFixedSizeCollection)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListBackupsPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListBackupsPage)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListBackupsPagedResponse](https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListBackupsPagedResponse)

## Supporting Pages

### About backups \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/backups](https://docs.cloud.google.com/filestore/docs/backups)
- Source ID: `site-docs-root-2`
- Final score: 291
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table shows the differences between standard and enhanced backups: Feature Standard backups Enhanced backups Backup management Filestore Backup and DR Service Tier availability Basic , Zonal, Regional, Enterprise Zonal, Regional, Enterprise Backup scheduling No Yes Backup secured against unauthorized deletion or changes - Immutable and indelible backups through backup vault Automated backup frequency - Hourly, daily, weekly, monthly, yearly On-demand backup retention Retained indefinitely until manually deleted Retained until expired (by a backup rule) or manually deleted Backups protected against source project deletion - ✔ Centralized backup management across resources and projects - ✔ Long-term (>1 year) backup retention - ✔ Backups protected against source instance deletion ✔ ✔ Customer-managed encryption (CMEK) ✔ Planned Multi-regional backups ✔ Planned Cross-region backups ✔ Planned Back up a file share Backed up data include all the file system data and metadata.
- Supported tiers The following table shows the Filestore service tiers that support backups, encryption, and related restore operations: Tier Backups support restore to new instance restore to existing instance restore to source instance CMEK support Basic HDD Yes Yes Yes Yes No Basic SSD Yes Yes Yes Yes No Zonal Yes Yes No No Yes Regional Yes Yes No No Yes Enterprise Yes Yes No No Yes Backup options Filestore offers the following backup options: Standard backups: Filestore creates, manages, and stores standard backups in the same project as your Filestore instances..
- You can use a backup to restore a file share to a new Filestore instance or, for basic tier instances, to the source of an existing file share.
- Quota A quota limit exists regarding the number of backups per region for basic SSD and basic HDD service tiers.

### "Class CloudFilestoreManagerClient.ListBackupsFixedSizeCollection (1.89.0)\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListBackupsFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListBackupsFixedSizeCollection)
- Source ID: `site-java-reference`
- Final score: 281
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListBackupsPage > pages , int collectionSize ) Parameters Name Description pages List < ListBackupsPage > collectionSize int Returns Type Description CloudFilestoreManagerClient.ListBackupsFixedSizeCollection Overrides AbstractFixedSizeCollection<RequestT,ResponseT,ResourceT,PageT,CollectionT>.createCollection(List<PageT> pages, int collectionSize) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- ListBackupsFixedSizeCollection > Inheritance java.lang.Object > AbstractFixedSizeCollection > CloudFilestoreManagerClient.ListBackupsFixedSizeCollection Inherited Members AbstractFixedSizeCollection.createCollection(List<PageT>,int) AbstractFixedSizeCollection.getCollectionSize() AbstractFixedSizeCollection.getNextCollection() AbstractFixedSizeCollection.getNextPageToken() AbstractFixedSizeCollection.getValues() AbstractFixedSizeCollection.hasNextCollection() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createCollection(List<CloudFilestoreManagerClient.ListBackupsPage> pages, int collectionSize) protected CloudFilestoreManagerClient .
- Home Documentation Developer tools Java Client libraries Send feedback Class CloudFilestoreManagerClient.ListBackupsFixedSizeCollection (1.89.0) Stay organized with collections Save and categorize content based on your preferences.
- ListBackupsFixedSizeCollection extends AbstractFixedSizeCollection<ListBackupsRequest , ListBackupsResponse , Backup , CloudFilestoreManagerClient .

### "Class CloudFilestoreManagerClient.ListBackupsPage (1.89.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListBackupsPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListBackupsPage)
- Source ID: `site-java-reference`
- Final score: 281
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListBackupsPage > Inheritance java.lang.Object > AbstractPage > CloudFilestoreManagerClient.ListBackupsPage Inherited Members AbstractPage.createPage(PageContext<RequestT,ResponseT,ResourceT>,ResponseT) AbstractPage.createPageAsync(PageContext<RequestT,ResponseT,ResourceT>,ApiFuture<ResponseT>) AbstractPage.getNextPage() AbstractPage.getNextPage(int) AbstractPage.getNextPageAsync() AbstractPage.getNextPageToken() AbstractPage.getPageElementCount() AbstractPage.getRequest() AbstractPage.getResponse() AbstractPage.getValues() AbstractPage.hasNextPage() AbstractPage.iterateAll() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createPage(PageContext<ListBackupsRequest,ListBackupsResponse,Backup> context, ListBackupsResponse response) protected CloudFilestoreManagerClient .
- ListBackupsPage > createPageAsync ( PageContext<ListBackupsRequest , ListBackupsResponse , Backup > context , ApiFuture<ListBackupsResponse> futureResponse ) Parameters Name Description context PageContext < ListBackupsRequest , ListBackupsResponse , Backup > futureResponse ApiFuture < ListBackupsResponse > Returns Type Description ApiFuture < ListBackupsPage > Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPageAsync(PageContext<RequestT,ResponseT,ResourceT> context, ApiFuture<ResponseT> futureResponse) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- ListBackupsPage createPage ( PageContext<ListBackupsRequest , ListBackupsResponse , Backup > context , ListBackupsResponse response ) Parameters Name Description context PageContext < ListBackupsRequest , ListBackupsResponse , Backup > response ListBackupsResponse Returns Type Description CloudFilestoreManagerClient.ListBackupsPage Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPage(PageContext<RequestT,ResponseT,ResourceT> context, ResponseT response) createPageAsync(PageContext<ListBackupsRequest,ListBackupsResponse,Backup> context, ApiFuture<ListBackupsResponse> futureResponse) public ApiFuture<CloudFilestoreManagerClient .
- Home Documentation Developer tools Java Client libraries Send feedback Class CloudFilestoreManagerClient.ListBackupsPage (1.89.0) Stay organized with collections Save and categorize content based on your preferences.

### "Class CloudFilestoreManagerClient.ListBackupsPagedResponse (1.89.0) \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListBackupsPagedResponse](https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListBackupsPagedResponse)
- Source ID: `site-java-reference`
- Final score: 281
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListBackupsFixedSizeCollection > Inheritance java.lang.Object > AbstractPagedListResponse > CloudFilestoreManagerClient.ListBackupsPagedResponse Inherited Members AbstractPagedListResponse.expandToFixedSizeCollection(int) AbstractPagedListResponse.getNextPageToken() AbstractPagedListResponse.getPage() AbstractPagedListResponse.iterateAll() AbstractPagedListResponse.iterateFixedSizeCollections(int) AbstractPagedListResponse.iteratePages() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods createAsync(PageContext<ListBackupsRequest,ListBackupsResponse,Backup> context, ApiFuture<ListBackupsResponse> futureResponse) public static ApiFuture<CloudFilestoreManagerClient .
- ListBackupsPagedResponse > createAsync ( PageContext<ListBackupsRequest , ListBackupsResponse , Backup > context , ApiFuture<ListBackupsResponse> futureResponse ) Parameters Name Description context PageContext < ListBackupsRequest , ListBackupsResponse , Backup > futureResponse ApiFuture < ListBackupsResponse > Returns Type Description ApiFuture < ListBackupsPagedResponse > Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Developer tools Java Client libraries Send feedback Class CloudFilestoreManagerClient.ListBackupsPagedResponse (1.89.0) Stay organized with collections Save and categorize content based on your preferences.
- ListBackupsPagedResponse extends AbstractPagedListResponse<ListBackupsRequest , ListBackupsResponse , Backup , CloudFilestoreManagerClient .

