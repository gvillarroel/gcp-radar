---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.868Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build log viewing in GitHub"
feature_slug: "cloud-build-log-viewing-in-github"
latest_feature_date: "2022-05-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github"
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise"
  - "https://docs.cloud.google.com/build/docs/overview"
keywords:
  - "viewing"
  - "view"
  - "users"
  - "logs"
  - "github"
---

# Cloud Build log viewing in GitHub

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build users can view build logs directly inside GitHub or GitHub Enterprise.

## Extended Definition

Cloud Build users can view build logs directly inside GitHub or GitHub Enterprise.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)
- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise)
- [https://docs.cloud.google.com/build/docs/overview](https://docs.cloud.google.com/build/docs/overview)

## Supporting Pages

### Building repositories from GitHub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)
- Source ID: `site-docs-root-2`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To learn how to view build logs, see Viewing build logs .
- The following table compares GitHub legacy triggers, GitHub triggers, and GitHub Enterprise triggers: Feature GitHub legacy triggers GitHub triggers GitHub Enterprise triggers Execute builds on pushes to the source code Yes Yes Yes Execute builds on pull requests No Yes Yes Create trigger using Google Cloud console Yes Yes Yes Create trigger using the Cloud Build API No Yes Yes Create trigger using the Cloud Build GitHub app No Yes Yes View build status on Google Cloud console Yes Yes Yes View build status on GitHub No Yes Yes Data sharing The data sent to GitHub from Cloud Build helps you identify triggers by name and see build results on GitHub.
- API To create a GitHub trigger with the API, use the following JSON template: { "filename" : "cloudbuild.yaml" , "name" : " TRIGGER NAME " , "description" : " TRIGGER DESCRIPTION " , "serviceAccount" : " SERVICE ACCOUNT " , "github" : { "owner" : " OWNER " , "name" : " REPO NAME " , "push" : { "branch" : ". " }, }, "include build logs" : i n clude - build - logs - value } Where: TRIGGER NAME is a name for the trigger.
- The following data is currently shared between Cloud Build and GitHub: Cloud project ID Trigger name Build logs Note: Build logs are only shared if you configure your trigger to send build logs.

### Building repositories from GitHub Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise)
- Source ID: `site-docs-root-2`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- To learn how to view build logs, see Viewing build logs .
- API To create a GitHub Enterprise trigger with the API, use the following JSON template: { "filename" : "cloudbuild.yaml" , "name" : " TRIGGER NAME " , "description" : " TRIGGER DESCRIPTION " , "serviceAccount" : " SERVICE ACCOUNT " , "github" : { "owner" : " OWNER " , "name" : " REPO NAME " , "push" : { "branch" : ". " }, "enterprise config resource name" : "projects/ PROJECT NUMBER /githubEnterpriseConfigs/ CONNECTION ID " }, "include build logs" : i n clude - build - logs - value } Where: TRIGGER NAME is a name for the trigger.
- In the API, this connection is represented as a GitHubEnterpriseConfig resource, or an association between Cloud Build and your GitHub Enterprise Server. include-build-logs-value is the value of the optional include build logs field.
- The following data is currently shared between Cloud Build and GitHub Enterprise: Cloud project ID Trigger name Build logs Note: Build logs are only shared if you configure your trigger to send build logs.

### Overview of Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/overview](https://docs.cloud.google.com/build/docs/overview)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Viewing build results You can view your build results using the gcloud CLI, the Cloud Build API or use the Build History page in the Cloud Build section in Google Cloud console, which displays details and logs for every build Cloud Build executes.
- Build details : Details of the build such as the builder and the link to view logs.
- For more information, see Viewing build provenance .
- For instructions see Viewing Build Results .

