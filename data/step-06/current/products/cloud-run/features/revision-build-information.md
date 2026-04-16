---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.607Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Revision build information"
feature_slug: "revision-build-information"
latest_feature_date: "2020-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/c-sharp"
  - "https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-c-plus-plus-service"
  - "https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-dotnet-service"
keywords:
  - "information"
  - "details"
  - "panel"
  - "display"
  - "revision"
  - "build"
---

# Revision build information

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

The Cloud Run revision details panel can display build information for containers built with Cloud Build when Container Analysis API is enabled.

## Extended Definition

The Cloud Run revision details panel can display build information for containers built with Cloud Build when Container Analysis API is enabled.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/c-sharp](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/c-sharp)
- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-c-plus-plus-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-c-plus-plus-service)
- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-dotnet-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-dotnet-service)

## Supporting Pages

### "Quickstart: Build and deploy a .NET web app to Google Cloud with Cloud Run\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-dotnet-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-dotnet-service)
- Source ID: `site-docs-reference-2`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Delete a Google Cloud project: gcloud projects delete PROJECT ID What's next For more information on building a container from code source and pushing to a repository, see: Developing Cloud Run services Building Containers Test a Cloud Run service locally Deploying from source code Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Required roles To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles: Cloud Run Admin ( roles/run.admin ) on the project Cloud Run Source Developer ( roles/run.sourceDeveloper ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the service identity Logs Viewer ( roles/logging.viewer ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- For Cloud Build to build your sources, grant the Cloud Build service account the Cloud Run Builder ( roles/run.builder ) role on your project: gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: SERVICE ACCOUNT EMAIL ADDRESS \ --role = roles/run.builder Replace PROJECT ID with your Google Cloud project ID and SERVICE ACCOUNT EMAIL ADDRESS with the email address of the Cloud Build service account.

### "Quickstart: Build and deploy a .NET web app to Google Cloud with Cloud Run\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/c-sharp](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/c-sharp)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Delete a Google Cloud project: gcloud projects delete PROJECT ID What's next For more information on building a container from code source and pushing to a repository, see: Developing Cloud Run services Building Containers Test a Cloud Run service locally Deploying from source code Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Required roles To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles: Cloud Run Admin ( roles/run.admin ) on the project Cloud Run Source Developer ( roles/run.sourceDeveloper ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the service identity Logs Viewer ( roles/logging.viewer ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- For Cloud Build to build your sources, grant the Cloud Build service account the Cloud Run Builder ( roles/run.builder ) role on your project: gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: SERVICE ACCOUNT EMAIL ADDRESS \ --role = roles/run.builder Replace PROJECT ID with your Google Cloud project ID and SERVICE ACCOUNT EMAIL ADDRESS with the email address of the Cloud Build service account.

### "Quickstart: Build and deploy a C++ web app to Google Cloud with Cloud Run\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-c-plus-plus-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-c-plus-plus-service)
- Source ID: `site-docs-reference-2`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Delete a Google Cloud project: gcloud projects delete PROJECT ID What's next For more information on building a container from code source and pushing to a repository, see: Developing Cloud Run services Building Containers Test a Cloud Run service locally Deploying from source code Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Required roles To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles: Cloud Run Admin ( roles/run.admin ) on the project Cloud Run Source Developer ( roles/run.sourceDeveloper ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the service identity Logs Viewer ( roles/logging.viewer ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- RUN apk update && \ apk add \ build - base \ cmake \ curl \ git \ gcc \ g ++ \ libc - dev \ linux - headers \ ninja \ pkgconfig \ tar \ unzip \ zip Use vcpkg, a package manager for C++, to install WORKDIR / usr / local / vcpkg ENV VCPKG FORCE SYSTEM BINARIES = 1 RUN curl - sSL "https://github.com/Microsoft/vcpkg/archive/2024.04.26.tar.gz" \ tar -- strip - components = 1 - zxf - \ && . / bootstrap - vcpkg . sh - disableMetrics Copy the source code to /v/source and compile it.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

