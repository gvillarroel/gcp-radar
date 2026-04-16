---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.874Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build Bitbucket Server and Bitbucket Data Center integration"
feature_slug: "cloud-build-bitbucket-server-and-bitbucket-data-center-integration"
latest_feature_date: "2022-02-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-data-center"
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network"
  - "https://docs.cloud.google.com/appengine/docs/standard/apis"
keywords:
  - "building"
  - "server"
  - "integration"
  - "bitbucket"
  - "repositories"
  - "center"
  - "supports"
---

# Cloud Build Bitbucket Server and Bitbucket Data Center integration

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build supports building repositories hosted on Bitbucket Server and Bitbucket Data Center, including on-premises deployments.

## Extended Definition

Cloud Build supports building repositories hosted on Bitbucket Server and Bitbucket Data Center, including on-premises deployments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-data-center)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network)
- [https://docs.cloud.google.com/appengine/docs/standard/apis](https://docs.cloud.google.com/appengine/docs/standard/apis)

## Supporting Pages

### "Connect to a Bitbucket Data Center repository \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-data-center)
- Source ID: `site-docs-root-2`
- Final score: 49
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the following curl command in your terminal from the same directory as the JSON file: curl -X POST -H "Authorization: Bearer " $( gcloud auth print-access-token ) -H "Content-Type: application/json; charset=utf-8" -H "x-goog-user-project: PROJECT NUMBER " https://cloudbuild.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /bitbucketServerConfigs/ BITBUCKET DATA CENTER CONFIG NAME /connectedRepositories:batchCreate -d @requests.json Where: PROJECT NUMBER is your Google Cloud project number.
- Enter the following command to retrieve the webhook ID: gcloud alpha builds enterprise-config bitbucketserver describe CONFIG NAME --region = REGION Where: CONFIG NAME is the name of the Bitbucket Data Center config REGION is the region of the Bitbucket Data Center host connection What's next Learn how to build repositories from Bitbucket Data Center .
- If the Bitbucket Data Center repository is connected successfully, you can see the connected repository in the response.bitbucketServerConnectedRepositories field.
- API To connect your Bitbucket Data Center repository to Cloud Build using the API, complete the following steps: Create a JSON file with the following contents: { "parent": "projects/ PROJECT NUMBER /locations/ REGION /bitbucketServerConfigs/ BITBUCKET DATA CENTER CONFIG NAME ", "requests": { "parent": "projects/ PROJECT NUMBER /locations/ REGION /bitbucketServerConfigs/ BITBUCKET DATA CENTER CONFIG NAME ", "bitbucketServerConnectedRepository": { "parent": "projects/ PROJECT NUMBER /locations/ REGION /bitbucketServerConfigs/ BITBUCKET DATA CENTER CONFIG NAME ", "repo": { "projectKey":" PROJECT KEY ", "repoSlug": " REPO SLUG ", } } } } Where: PROJECT NUMBER is the project number of your Cloud project.

### "Build repositories from Bitbucket Data Center in a private network \_|\_\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network)
- Source ID: `site-docs-root-2`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Build repositories from Bitbucket Data Center in a private network If your Bitbucket Data Center instance is hosted in a private network and not reachable over a public internet connection, you must create a private connection between your VPC network and the service producer network .
- 1st gen 2nd gen Cloud Build enables you to create triggers to build from repositories hosted on Bitbucket Data Center , allowing you to execute builds in response to events such as commit pushes or pull requests associated with your Bitbucket Data Center repository.
- Home Documentation Application development Cloud Build Guides Send feedback Build repositories from Bitbucket Data Center in a private network Stay organized with collections Save and categorize content based on your preferences.
- Create a Bitbucket Data Center trigger to build repositories hosted on a Bitbucket Data Center instance.

### "APIs & Reference \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/apis](https://docs.cloud.google.com/appengine/docs/standard/apis)
- Source ID: `site-docs-reference-2`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

