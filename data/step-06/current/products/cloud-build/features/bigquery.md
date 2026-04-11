---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.723Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "BigQuery"
feature_slug: "bigquery"
latest_feature_date: "2022-12-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/release-notes"
  - "https://docs.cloud.google.com/build/docs/create-custom-build-steps"
  - "https://docs.cloud.google.com/build/docs/access-github-from-build"
keywords:
  - "build"
  - "notifications"
  - "for"
  - "email"
  - "and"
  - "webhooks"
  - "can"
  - "now"
---

# BigQuery

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build notifications for email, BigQuery, and webhooks can now be customized using notifier templates.

## Extended Definition

Cloud Build notifications for email, BigQuery, and webhooks can now be customized using notifier templates.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- [https://docs.cloud.google.com/build/docs/create-custom-build-steps](https://docs.cloud.google.com/build/docs/create-custom-build-steps)
- [https://docs.cloud.google.com/build/docs/access-github-from-build](https://docs.cloud.google.com/build/docs/access-github-from-build)

## Supporting Pages

### Cloud Build release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Build's substitution variables can now refer to other substitution variables, manipulate them using bash-style string operations, and pull information from a trigger event payload.
- You can now create build triggers that build from repositories connected to Developer Connect using the Google Cloud Console, gcloud , the Cloud Build API, and Terraform.
- June 30, 2020 Feature Open-source notifiers for Slack and SMTP are now generally available .These notifiers can be configured to securely alert users about build status.
- February 08, 2023 Feature You can now create and manage repository connections using Terraform when using Cloud Build repositories (2nd gen).

### "Using community-contributed builders and custom builders \_|\_ Cloud Build\

- URL: [https://docs.cloud.google.com/build/docs/create-custom-build-steps](https://docs.cloud.google.com/build/docs/create-custom-build-steps)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Creating a custom builder If the task you want to perform requires capabilities that are not provided by a public image, a supported builder, or a community-contributed builder , you can build your own image and use it in a build step.
- If the task you want to perform requires capabilities that are not provided by an existing image, you can build your own custom image and use it in a build step.
- The following code shows an example Dockerfile : FROM alpine RUN apk add curl CMD curl https : //httpbin.org/ip -s > myip.txt; echo " My IP is: $(cat myip.txt)" Build and push the custom builder to the Artifact Registry in your project, replacing values for project-id and image-name : gcloud builds submit -- tag gcr . io / project - id / image - name Use the custom builder image in Cloud Build by specifying the builder in the name field of a build step: YAML steps : - name : 'gcr.io/ project-id / image-name ' id : Determine IP of this build worker JSON { "steps" : [ { "name" : "gcr.io/ project-id / image-name " , "id" : "Determine IP of this build worker" } ] } Use the build config file to start the build manually or build using triggers .
- Using community-contributed builders Prebuilt images are not available for community-contributed builders; to use these builders in a Cloud Build config file, you must first build the image and push it to Artifact Registry in your project.

### "Accessing GitHub from a build via SSH keys \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/access-github-from-build](https://docs.cloud.google.com/build/docs/access-github-from-build)
- Source ID: `site-docs-root-2`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In your workingdir directory, create a file named known hosts.github and add the public SSH key to this file: ssh-keyscan -t rsa github.com > known hosts.github In the next section when you configure the build, you'll add instructions in the Cloud Build config file to copy the contents of known hosts.github to the known hosts file in Cloud Build's build environment.
- You can do this by adding the key to a temporary known hosts.github file, and then copying the contents of known hosts.github to the known hosts file in Cloud Build's build environment.
- Access the id github file from Secret Manager , and setup SSH steps : - name : 'gcr.io/cloud-builders/git' secretEnv : [ 'SSH KEY' ] entrypoint : 'bash' args : - - c - echo "$$SSH KEY" >> / root / . ssh / id rsa chmod 400 / root / . ssh / id rsa cp known hosts . github / root / . ssh / known hosts volumes : - name : 'ssh' path : / root / . ssh Clone the repository - name : 'gcr.io/cloud-builders/git' args : - clone - --recurse-submodules - git @github . com : GIT USERNAME / GIT REPOSITORY volumes : - name : 'ssh' path : / root / . ssh availableSecrets : secretManager : - versionName : projects / PROJECT ID / secrets / SECRET NAME / versions / latest env : 'SSH KEY' Replace the placeholder values in the above commands with the following: GIT USERNAME : The GitHub username of the repository owner.
- Finished Step #2 PUSH DONE ----------------------------------------------------------------------------------------------------------------- ID CREATE TIME DURATION SOURCE IMAGES STATUS 871 b68bc - cefc - 4411 - 856 c - 2 a2b7c7d2487 XXXX - XX - XXT17 : 57 : 21 + 00 : 00 13 S gs : // [ PROJECT - ID ] cloudbuild / source / 1504288639.02 ---. tgz - SUCCESS Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.

