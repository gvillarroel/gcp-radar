---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.805Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build Console user interface"
feature_slug: "cloud-build-console-user-interface"
latest_feature_date: "2017-03-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/release-notes"
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
  - "https://docs.cloud.google.com/build/docs/access-github-from-build"
keywords:
  - "build"
  - "console"
  - "user"
  - "interface"
  - "the"
  - "became"
  - "generally"
  - "available"
---

# Cloud Build Console user interface

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

The Cloud Build user interface became generally available in Google Cloud Platform Console, including build history.

## Extended Definition

The Cloud Build user interface became generally available in Google Cloud Platform Console, including build history.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- [https://docs.cloud.google.com/build/docs/access-github-from-build](https://docs.cloud.google.com/build/docs/access-github-from-build)

## Supporting Pages

### Cloud Build release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- June 30, 2020 Feature Open-source notifiers for Slack and SMTP are now generally available .These notifiers can be configured to securely alert users about build status.
- November 30, 2022 Feature Users can generate Supply chain Levels for Software Artifacts (SLSA) build provenance information for standalone Java and Python packages when they upload artifacts to Artifact Registry using new fields available in the Cloud Build config file .
- April 04, 2023 Feature Users can generate Supply chain Levels for Software Artifacts (SLSA) build provenance information for standalone Maven and Python packages when they upload artifacts to Artifact Registry using new fields available in the Cloud Build config file .
- June 23, 2023 Feature The Cloud Build Security insights panel that displays security metrics such as Supply-chain Levels for Software Artifacts (SLSA) level for built artifacts, vulnerabilities, and build details is now generally available .

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Keep in mind the following security implications when using build triggers: A user with no access to your Cloud project, but with write access to the repository associated with build triggers in the project will have permissions to change the code being built.
- Resubmit a build for approval If your build has been rejected, you can resubmit your build for approval by following these steps in the Google Cloud console: Open the Cloud Build History page in the Google Cloud console.
- If you're using GitHub pull request triggers, any user with read access to the repository can submit a pull request, which may execute a build that includes changes to the code in the pull request.
- Security implications of build triggers The service account configured for a build trigger can provide elevated build-time permissions to users who employ triggers to invoke a build.

### "Accessing GitHub from a build via SSH keys \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/access-github-from-build](https://docs.cloud.google.com/build/docs/access-github-from-build)
- Source ID: `site-docs-root-2`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Access the id github file from Secret Manager , and setup SSH steps : - name : 'gcr.io/cloud-builders/git' secretEnv : [ 'SSH KEY' ] entrypoint : 'bash' args : - - c - echo "$$SSH KEY" >> / root / . ssh / id rsa chmod 400 / root / . ssh / id rsa cp known hosts . github / root / . ssh / known hosts volumes : - name : 'ssh' path : / root / . ssh Clone the repository - name : 'gcr.io/cloud-builders/git' args : - clone - --recurse-submodules - git @github . com : GIT USERNAME / GIT REPOSITORY volumes : - name : 'ssh' path : / root / . ssh availableSecrets : secretManager : - versionName : projects / PROJECT ID / secrets / SECRET NAME / versions / latest env : 'SSH KEY' Replace the placeholder values in the above commands with the following: GIT USERNAME : The GitHub username of the repository owner.
- Logs are available at [ https://console.cloud.google.com/ cloud - build / builds / 871 b68bc --- ? project = [ PROJECT - ID ]] . ----------------------------- REMOTE BUILD OUTPUT ------------------------------ starting build "871b68bc-cefc-4411-856c-2a2b7c7d2487" FETCHSOURCE Fetching storage object : gs : // [ PROJECT - ID ] cloudbuild / source / 1504288639.02 ---. tgz #1504288640827178 Copying gs : // [ PROJECT - ID ] cloudbuild / source / 1504288639.02 ---. tgz #1504288640827178... / [ 1 files ][ 3.9 KiB / 3.9 KiB ] Operation completed over 1 objects / 3.9 KiB .
- In the Google Cloud console, go to the settings Cloud Build Permissions page: Go to Permissions From the drop-down list, select the service account whose roles you want to change.
- Finished Step #2 PUSH DONE ----------------------------------------------------------------------------------------------------------------- ID CREATE TIME DURATION SOURCE IMAGES STATUS 871 b68bc - cefc - 4411 - 856 c - 2 a2b7c7d2487 XXXX - XX - XXT17 : 57 : 21 + 00 : 00 13 S gs : // [ PROJECT - ID ] cloudbuild / source / 1504288639.02 ---. tgz - SUCCESS Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.

