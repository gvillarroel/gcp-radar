---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.497Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "On-Demand Scanning for Java packages"
feature_slug: "on-demand-scanning-for-java-packages"
latest_feature_date: "2021-07-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient.ListNpmPackagesPage"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1"
  - "https://docs.cloud.google.com/artifact-registry/docs/java"
keywords:
  - "enables"
  - "packages"
  - "java"
  - "demand"
  - "generally"
  - "scanning"
---

# On-Demand Scanning for Java packages

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Artifact Registry enables generally available On-Demand Scanning for Java packages to identify vulnerabilities in container images.

## Extended Definition

Artifact Registry enables generally available On-Demand Scanning for Java packages to identify vulnerabilities in container images.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient.ListNpmPackagesPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient.ListNpmPackagesPage)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1)
- [https://docs.cloud.google.com/artifact-registry/docs/java](https://docs.cloud.google.com/artifact-registry/docs/java)

## Supporting Pages

### "Class ArtifactRegistryClient.ListNpmPackagesPage (1.87.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient.ListNpmPackagesPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient.ListNpmPackagesPage)
- Source ID: `site-java-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- ListNpmPackagesPage > Inheritance java.lang.Object > AbstractPage > ArtifactRegistryClient.ListNpmPackagesPage Inherited Members AbstractPage.createPage(PageContext<RequestT,ResponseT,ResourceT>,ResponseT) AbstractPage.createPageAsync(PageContext<RequestT,ResponseT,ResourceT>,ApiFuture<ResponseT>) AbstractPage.getNextPage() AbstractPage.getNextPage(int) AbstractPage.getNextPageAsync() AbstractPage.getNextPageToken() AbstractPage.getPageElementCount() AbstractPage.getRequest() AbstractPage.getResponse() AbstractPage.getValues() AbstractPage.hasNextPage() AbstractPage.iterateAll() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createPage(PageContext<ListNpmPackagesRequest,ListNpmPackagesResponse,NpmPackage> context, ListNpmPackagesResponse response) protected ArtifactRegistryClient .
- Home Documentation Developer tools Java Client libraries Send feedback Class ArtifactRegistryClient.ListNpmPackagesPage (1.87.0) Stay organized with collections Save and categorize content based on your preferences.
- ListNpmPackagesPage > createPageAsync ( PageContext<ListNpmPackagesRequest , ListNpmPackagesResponse , NpmPackage > context , ApiFuture<ListNpmPackagesResponse> futureResponse ) Parameters Name Description context PageContext < ListNpmPackagesRequest , ListNpmPackagesResponse , NpmPackage > futureResponse ApiFuture < ListNpmPackagesResponse > Returns Type Description ApiFuture < ListNpmPackagesPage > Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPageAsync(PageContext<RequestT,ResponseT,ResourceT> context, ApiFuture<ResponseT> futureResponse) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- ListNpmPackagesPage createPage ( PageContext<ListNpmPackagesRequest , ListNpmPackagesResponse , NpmPackage > context , ListNpmPackagesResponse response ) Parameters Name Description context PageContext < ListNpmPackagesRequest , ListNpmPackagesResponse , NpmPackage > response ListNpmPackagesResponse Returns Type Description ArtifactRegistryClient.ListNpmPackagesPage Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPage(PageContext<RequestT,ResponseT,ResourceT> context, ResponseT response) createPageAsync(PageContext<ListNpmPackagesRequest,ListNpmPackagesResponse,NpmPackage> context, ApiFuture<ListNpmPackagesResponse> futureResponse) public ApiFuture<ArtifactRegistryClient .

### "Package com.google.devtools.artifactregistry.v1 (1.87.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1)
- Source ID: `site-java-reference`
- Final score: 110
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Developer tools Java Client libraries Send feedback Package com.google.devtools.artifactregistry.v1 (1.87.0) Stay organized with collections Save and categorize content based on your preferences.
- Vulnerability Scanning Config Config on whether to perform vulnerability scanning for resources in this repository, as well as output fields describing current state. com. google. devtools. artifactregistry. v1.
- Builder Config on whether to perform vulnerability scanning for resources in this repository, as well as output fields describing current state. com. google. devtools. artifactregistry. v1.
- Enablement State Describes the state of vulnerability scanning in this repository, including both repository enablement and API enablement. com. google. devtools. artifactregistry. v1.

### Manage Java packages \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/java](https://docs.cloud.google.com/artifact-registry/docs/java)
- Source ID: `site-docs-root`
- Final score: 105
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application development Artifact Registry Guides Send feedback Manage Java packages Stay organized with collections Save and categorize content based on your preferences.
- When you are ready to learn more, read the following information: Create a Java package repository for your packages.
- Overview To get familiar with Java packages in Artifact Registry, you can try the quickstart .
- Artifact Registry supports Java packages that you build with Maven and Gradle.

