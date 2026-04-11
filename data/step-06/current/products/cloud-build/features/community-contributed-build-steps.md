---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.792Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Community-contributed build steps"
feature_slug: "community-contributed-build-steps"
latest_feature_date: "2017-11-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/create-custom-build-steps"
  - "https://docs.cloud.google.com/build/docs/access-github-from-build"
  - "https://docs.cloud.google.com/build/docs/release-notes"
keywords:
  - "community"
  - "contributed"
  - "build"
  - "steps"
  - "added"
  - "for"
---

# Community-contributed build steps

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build added support for community-contributed build steps.

## Extended Definition

Cloud Build added support for community-contributed build steps.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/create-custom-build-steps](https://docs.cloud.google.com/build/docs/create-custom-build-steps)
- [https://docs.cloud.google.com/build/docs/access-github-from-build](https://docs.cloud.google.com/build/docs/access-github-from-build)
- [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)

## Supporting Pages

### "Using community-contributed builders and custom builders \_|\_ Cloud Build\

- URL: [https://docs.cloud.google.com/build/docs/create-custom-build-steps](https://docs.cloud.google.com/build/docs/create-custom-build-steps)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Using community-contributed builders Prebuilt images are not available for community-contributed builders; to use these builders in a Cloud Build config file, you must first build the image and push it to Artifact Registry in your project.
- Creating a custom builder If the task you want to perform requires capabilities that are not provided by a public image, a supported builder, or a community-contributed builder , you can build your own image and use it in a build step.
- For examples on using community-contributed builders, see Deploy to Firebase and Build VM images using Packer .
- The following code shows an example Dockerfile : FROM alpine RUN apk add curl CMD curl https : //httpbin.org/ip -s > myip.txt; echo " My IP is: $(cat myip.txt)" Build and push the custom builder to the Artifact Registry in your project, replacing values for project-id and image-name : gcloud builds submit -- tag gcr . io / project - id / image - name Use the custom builder image in Cloud Build by specifying the builder in the name field of a build step: YAML steps : - name : 'gcr.io/ project-id / image-name ' id : Determine IP of this build worker JSON { "steps" : [ { "name" : "gcr.io/ project-id / image-name " , "id" : "Determine IP of this build worker" } ] } Use the build config file to start the build manually or build using triggers .

### "Accessing GitHub from a build via SSH keys \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/access-github-from-build](https://docs.cloud.google.com/build/docs/access-github-from-build)
- Source ID: `site-docs-root-2`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Access the id github file from Secret Manager , and setup SSH steps : - name : 'gcr.io/cloud-builders/git' secretEnv : [ 'SSH KEY' ] entrypoint : 'bash' args : - - c - echo "$$SSH KEY" >> / root / . ssh / id rsa chmod 400 / root / . ssh / id rsa cp known hosts . github / root / . ssh / known hosts volumes : - name : 'ssh' path : / root / . ssh Clone the repository - name : 'gcr.io/cloud-builders/git' args : - clone - --recurse-submodules - git @github . com : GIT USERNAME / GIT REPOSITORY volumes : - name : 'ssh' path : / root / . ssh availableSecrets : secretManager : - versionName : projects / PROJECT ID / secrets / SECRET NAME / versions / latest env : 'SSH KEY' Replace the placeholder values in the above commands with the following: GIT USERNAME : The GitHub username of the repository owner.
- Finished Step #2 PUSH DONE ----------------------------------------------------------------------------------------------------------------- ID CREATE TIME DURATION SOURCE IMAGES STATUS 871 b68bc - cefc - 4411 - 856 c - 2 a2b7c7d2487 XXXX - XX - XXT17 : 57 : 21 + 00 : 00 13 S gs : // [ PROJECT - ID ] cloudbuild / source / 1504288639.02 ---. tgz - SUCCESS Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.
- Configure the build To configure the build: Create a build config file named cloudbuild.yaml with two steps: the first gcloud step accesses the SSH key in Secret Manager and saves it as id rsa in a volume named ssh , along with a copy of the known hosts.github .
- Delete the SSH key from your disk: rm id github Grant permissions You must grant permission to access Secret Manager to the service account you are using for the build.

### Cloud Build release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- November 02, 2017 Feature Community-contributed build steps released.
- Added support for providing filepath filters to trigger a build only on changes to the specified files or subdirectories.
- Feature Added a new Cloud Build Settings page in the Google Cloud console for managing service account permissions.
- June 27, 2019 Feature Environment variables can now be defined globally for all build steps in a build.

