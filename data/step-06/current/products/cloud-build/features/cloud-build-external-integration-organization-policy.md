---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.741Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build external integration organization policy"
feature_slug: "cloud-build-external-integration-organization-policy"
latest_feature_date: "2022-02-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
  - "https://docs.cloud.google.com/build/docs/release-notes"
  - "https://docs.cloud.google.com/build/docs/create-custom-build-steps"
keywords:
  - "build"
  - "external"
  - "integration"
  - "organization"
  - "policy"
  - "now"
  - "supports"
  - "an"
---

# Cloud Build external integration organization policy

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build now supports an organization policy to control builds triggered from external integrations such as GitHub.

## Extended Definition

Cloud Build now supports an organization policy to control builds triggered from external integrations such as GitHub.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- [https://docs.cloud.google.com/build/docs/create-custom-build-steps](https://docs.cloud.google.com/build/docs/create-custom-build-steps)

## Supporting Pages

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- To only allow builds from specific sources, set an organization policy for allowed integrations ( constraints/cloudbuild.allowedIntegrations ) to deny interaction with the source defined in your trigger.
- The organization policy overrides the trigger and your build is not executed.
- To learn more, see Gate builds on organization policy for your project.
- If you are connecting an external repository, such as one hosted on GitHub or Bitbucket, you will need admin-level permissions on the repository to initially connect your repository to Cloud Build.

### Cloud Build release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- May 09, 2023 Feature You can now restrict the creation of Cloud Build builds, triggers, and repositories to a particular location using an Organization Policy Service constraint.
- April 20, 2023 Feature The organization policy for allowed regions when creating new Cloud Build resources is now generally available .
- March 07, 2024 Feature Cloud Build repositories (2nd gen) now supports integration with Bitbucket Cloud and Bitbucket Data Center .
- February 18, 2022 Feature The organization policy for integrations with services such as GitHub is now generally available .

### "Using community-contributed builders and custom builders \_|\_ Cloud Build\

- URL: [https://docs.cloud.google.com/build/docs/create-custom-build-steps](https://docs.cloud.google.com/build/docs/create-custom-build-steps)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Some examples of when you might want to use a custom builder image are: Downloading source code or packages from external locations.
- The following code shows an example Dockerfile : FROM alpine RUN apk add curl CMD curl https : //httpbin.org/ip -s > myip.txt; echo " My IP is: $(cat myip.txt)" Build and push the custom builder to the Artifact Registry in your project, replacing values for project-id and image-name : gcloud builds submit -- tag gcr . io / project - id / image - name Use the custom builder image in Cloud Build by specifying the builder in the name field of a build step: YAML steps : - name : 'gcr.io/ project-id / image-name ' id : Determine IP of this build worker JSON { "steps" : [ { "name" : "gcr.io/ project-id / image-name " , "id" : "Determine IP of this build worker" } ] } Use the build config file to start the build manually or build using triggers .
- Clone the cloud-builders-community repository: git clone https : //github.com/GoogleCloudPlatform/cloud-builders-community.git Navigate to the builder image you want to use, where builder-name is the directory that contains the builder: cd cloud - builders - community / builder - name Submit the builder to your project: gcloud builds submit .
- Using community-contributed builders Prebuilt images are not available for community-contributed builders; to use these builders in a Cloud Build config file, you must first build the image and push it to Artifact Registry in your project.

