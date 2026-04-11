---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:03:36.821Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "App Hub support for GKE single-cluster Gateway resources"
feature_slug: "app-hub-support-for-gke-single-cluster-gateway-resources"
latest_feature_date: "2025-03-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/set-up-app-hub"
  - "https://docs.cloud.google.com/app-hub/docs/best-practices"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsFixedSizeCollection"
keywords:
  - "cluster"
  - "gateway"
  - "gke"
  - "single"
  - "resources"
  - "for"
  - "app"
  - "hub"
---

# App Hub support for GKE single-cluster Gateway resources

Product: App Hub
Coverage: LOW

## Step 02 Summary

App Hub now includes GKE single-cluster Gateway as a supported resource type in Preview.

## Extended Definition

App Hub now includes GKE single-cluster Gateway as a supported resource type in Preview.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/set-up-app-hub](https://docs.cloud.google.com/app-hub/docs/set-up-app-hub)
- [https://docs.cloud.google.com/app-hub/docs/best-practices](https://docs.cloud.google.com/app-hub/docs/best-practices)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsFixedSizeCollection)

## Supporting Pages

### Choose your application setup model \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/set-up-app-hub](https://docs.cloud.google.com/app-hub/docs/set-up-app-hub)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Boundary extent A single Google Cloud project All descendant projects within a Google Cloud folder A manually-managed set of service projects that define a multiple-project boundary Management App Hub discovers supported resources within the project automatically.
- Setup guide Set up a single project Set up a folder Set up a host project (Legacy) Plan your resource hierarchy for application management Effective application management in App Hub builds directly upon your existing resource hierarchy in Google Cloud .
- Boundary type App Hub project type Application-centric Google Cloud support Single project ( Preview ) Host project App Hub Application Monitoring Management project App Hub Application Design Center Application Monitoring Folder level Management project App Hub Application Design Center Application Monitoring Cloud Hub Cost Explorer Gemini Cloud Assist Other Application-centric Google Cloud products Multiple projects Host project App Hub Application Monitoring What's next Set up a single project Set up a folder Set up a host project (Legacy) App Hub IAM roles and permissions App Hub overview Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Compare setup models The following table provides a comparison between projects and folders for your application management boundary: Feature Single-project boundary ( Preview ) Folder-level boundary Host project (Legacy) Recommendation New users or small organizations where all application components reside in a single project.

### "Best practices for application management \_|\_ App Hub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/app-hub/docs/best-practices](https://docs.cloud.google.com/app-hub/docs/best-practices)
- Source ID: `site-iam-reference`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, consider the following model for existing resources running in Google Cloud: Application: Create or define a single application in App Hub named, for example, my-ecommerce-site .
- Follow the application lifecycle Integrate App Hub with Application Design Center for a seamless application lifecycle experience: You have pre-existing resources to register in an application: Use App Hub to register your existing Google Cloud resources as services or workloads in applications.
- Decompose multi-region systems: If you have resources in multiple regions that don't form a single cohesive global function, consider defining separate regional applications for components within each respective region.
- By grouping all three tiers into a single application, you gain the following benefits: Unified observability: You can monitor the health and performance of the entire application from a single dashboard in Application Monitoring , rather than having to piece together data from three separate applications.

### "Class AppHubClient.ListApplicationsFixedSizeCollection (0.52.0) \_|\_ Java\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsFixedSizeCollection)
- Source ID: `site-java-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- ListApplicationsFixedSizeCollection > Inheritance java.lang.Object > AbstractFixedSizeCollection > AppHubClient.ListApplicationsFixedSizeCollection Inherited Members AbstractFixedSizeCollection.createCollection(List<PageT>,int) AbstractFixedSizeCollection.getCollectionSize() AbstractFixedSizeCollection.getNextCollection() AbstractFixedSizeCollection.getNextPageToken() AbstractFixedSizeCollection.getValues() AbstractFixedSizeCollection.hasNextCollection() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createCollection(List<AppHubClient.ListApplicationsPage> pages, int collectionSize) protected AppHubClient .
- ListApplicationsPage > pages , int collectionSize ) Parameters Name Description pages List < ListApplicationsPage > collectionSize int Returns Type Description AppHubClient.ListApplicationsFixedSizeCollection Overrides AbstractFixedSizeCollection<RequestT,ResponseT,ResourceT,PageT,CollectionT>.createCollection(List<PageT> pages, int collectionSize) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- 0.52.0 (latest) 0.51.0 0.49.0 0.47.0 0.46.0 0.45.0 0.44.0 0.42.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.34.0 0.32.0 0.31.0 0.28.0 0.27.0 0.26.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.1.0 public static class AppHubClient .
- Home Documentation Developer tools Java Client libraries Send feedback Class AppHubClient.ListApplicationsFixedSizeCollection (0.52.0) Stay organized with collections Save and categorize content based on your preferences.

