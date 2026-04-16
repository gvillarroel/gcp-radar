---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.849Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build repositories 2nd gen repository connection management interfaces"
feature_slug: "cloud-build-repositories-2nd-gen-repository-connection-management-interfaces"
latest_feature_date: "2023-01-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-data-center"
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-server"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v2.RepositoryManagerClient.FetchLinkableRepositoriesFixedSizeCollection"
keywords:
  - "interfaces"
  - "connection"
  - "management"
  - "repository"
  - "repositories"
---

# Cloud Build repositories 2nd gen repository connection management interfaces

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build repositories (2nd gen) now support creating and managing repository connections via Cloud Console, gcloud, and the Cloud Build API.

## Extended Definition

Cloud Build repositories (2nd gen) now support creating and managing repository connections via Cloud Console, gcloud, and the Cloud Build API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-data-center)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-server](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-server)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v2.RepositoryManagerClient.FetchLinkableRepositoriesFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v2.RepositoryManagerClient.FetchLinkableRepositoriesFixedSizeCollection)

## Supporting Pages

### "Connect to a Bitbucket Data Center repository \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-data-center)
- Source ID: `site-docs-root-2`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enter the following command to retrieve the webhook ID: gcloud alpha builds enterprise-config bitbucketserver describe CONFIG NAME --region = REGION Where: CONFIG NAME is the name of the Bitbucket Data Center config REGION is the region of the Bitbucket Data Center host connection What's next Learn how to build repositories from Bitbucket Data Center .
- Connect to a Bitbucket Data Center repository Console To connect a Bitbucket Data Center repository to Cloud Build using the Google Cloud console: Open the Repositories page in the Google Cloud console.
- If the Bitbucket Data Center repository is connected successfully, you can see the connected repository in the response.bitbucketServerConnectedRepositories field.
- Complete the following steps to connect your Bitbucket Data Center repository: Region : Select the region your connection is in.

### "Connect to a Bitbucket Server repository \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-server](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-server)
- Source ID: `site-docs-root-2`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Connecting to a Bitbucket Server repository Console To connect a Bitbucket Server repository to Cloud Build using the Google Cloud console: Open the Repositories page in the Google Cloud console.
- If the Bitbucket Server repository is connected successfully, you can see the connected repository in the response.bitbucketServerConnectedRepositories field.
- Complete the following steps to connect your Bitbucket Server repository: Region : Select a region your connection is in.
- Under Select Repository , select the Bitbucket Server repositories you wish to connect to Cloud Build.

### "Class RepositoryManagerClient.FetchLinkableRepositoriesFixedSizeCollection\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v2.RepositoryManagerClient.FetchLinkableRepositoriesFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v2.RepositoryManagerClient.FetchLinkableRepositoriesFixedSizeCollection)
- Source ID: `site-java-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- FetchLinkableRepositoriesFixedSizeCollection > Inheritance java.lang.Object > AbstractFixedSizeCollection > RepositoryManagerClient.FetchLinkableRepositoriesFixedSizeCollection Inherited Members AbstractFixedSizeCollection.createCollection(List<PageT>,int) AbstractFixedSizeCollection.getCollectionSize() AbstractFixedSizeCollection.getNextCollection() AbstractFixedSizeCollection.getNextPageToken() AbstractFixedSizeCollection.getValues() AbstractFixedSizeCollection.hasNextCollection() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createCollection(List<RepositoryManagerClient.FetchLinkableRepositoriesPage> pages, int collectionSize) protected RepositoryManagerClient .
- FetchLinkableRepositoriesPage > pages , int collectionSize ) Parameters Name Description pages List < FetchLinkableRepositoriesPage > collectionSize int Returns Type Description RepositoryManagerClient.FetchLinkableRepositoriesFixedSizeCollection Overrides AbstractFixedSizeCollection<RequestT,ResponseT,ResourceT,PageT,CollectionT>.createCollection(List<PageT> pages, int collectionSize) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Developer tools Java Client libraries Send feedback Class RepositoryManagerClient.FetchLinkableRepositoriesFixedSizeCollection (3.90.0) Stay organized with collections Save and categorize content based on your preferences.
- FetchLinkableRepositoriesFixedSizeCollection extends AbstractFixedSizeCollection<FetchLinkableRepositoriesRequest , FetchLinkableRepositoriesResponse , Repository , RepositoryManagerClient .

