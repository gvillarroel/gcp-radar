---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:04:57.762Z"
product_name: "Cloud Data Fusion"
product_slug: "cloud-data-fusion"
feature_name: "Cloud Data Fusion instance creation tags"
feature_slug: "cloud-data-fusion-instance-creation-tags"
latest_feature_date: "2025-07-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/data-fusion/docs/release-notes"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListInstancesPagedResponse"
  - "https://docs.cloud.google.com/data-fusion/docs/how-to/create-instance"
keywords:
  - "fusion"
  - "instance"
  - "creation"
  - "tags"
  - "now"
  - "allows"
  - "attaching"
  - "to"
---

# Cloud Data Fusion instance creation tags

Product: Cloud Data Fusion
Coverage: LOW

## Step 02 Summary

Cloud Data Fusion now allows attaching tags to instances during instance creation for immediate metadata, organization, and policy automation.

## Extended Definition

Cloud Data Fusion now allows attaching tags to instances during instance creation for immediate metadata, organization, and policy automation.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/data-fusion/docs/release-notes](https://docs.cloud.google.com/data-fusion/docs/release-notes)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListInstancesPagedResponse](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListInstancesPagedResponse)
- [https://docs.cloud.google.com/data-fusion/docs/how-to/create-instance](https://docs.cloud.google.com/data-fusion/docs/how-to/create-instance)

## Supporting Pages

### Cloud Data Fusion release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/release-notes](https://docs.cloud.google.com/data-fusion/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- July 25, 2025 Feature You can now attach tags to Cloud Data Fusion instances during instance creation.
- Change You can now specify the service account to use for running your Cloud Data Fusion pipeline on Dataproc: You specify the service account when you create an instance .
- October 27, 2020 Change You can now specify which Cloud Data Fusion version to use when you create an instance .
- This version includes several stability and performance improvements, as well as these new features: Azure Data Lake storage support in Wrangler Enabled Field Level Lineage (Beta) Data Loss Prevention plugin to identify, tokenize, or encrypt sensitive data at scale (Beta) December 10, 2019 Feature Cloud Data Fusion version 6.1.0.5 is now available.

### "Class DataFusionClient.ListInstancesPagedResponse (1.88.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListInstancesPagedResponse](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListInstancesPagedResponse)
- Source ID: `site-java-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- ListInstancesFixedSizeCollection > Inheritance java.lang.Object > AbstractPagedListResponse > DataFusionClient.ListInstancesPagedResponse Inherited Members AbstractPagedListResponse.expandToFixedSizeCollection(int) AbstractPagedListResponse.getNextPageToken() AbstractPagedListResponse.getPage() AbstractPagedListResponse.iterateAll() AbstractPagedListResponse.iterateFixedSizeCollections(int) AbstractPagedListResponse.iteratePages() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods createAsync(PageContext<ListInstancesRequest,ListInstancesResponse,Instance> context, ApiFuture<ListInstancesResponse> futureResponse) public static ApiFuture<DataFusionClient .
- Home Documentation Developer tools Java Client libraries Send feedback Class DataFusionClient.ListInstancesPagedResponse (1.88.0) Stay organized with collections Save and categorize content based on your preferences.
- ListInstancesPagedResponse extends AbstractPagedListResponse<ListInstancesRequest , ListInstancesResponse , Instance , DataFusionClient .
- ListInstancesPage , DataFusionClient .

### Create a public instance \_|\_ Cloud Data Fusion \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/how-to/create-instance](https://docs.cloud.google.com/data-fusion/docs/how-to/create-instance)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- API Create an instance: To create a Cloud Data Fusion instance with the Cloud Data Fusion REST API , construct an instances.create API request, filling in the Instance resource with your configuration information.
- In versions earlier than 6.2.0, if this rule to allow ingress on TCP port 22 doesn't exist in the network used by your Cloud Data Fusion instance, you must create this rule .
- The default network is pre-populated with a firewall rule default-allow-ssh , that allows incoming connections on TCP port 22 from any source to any instance in the network.
- While Cloud Data Fusion creates your instance, a progress wheel displays next to the instance name on the Instances page.

