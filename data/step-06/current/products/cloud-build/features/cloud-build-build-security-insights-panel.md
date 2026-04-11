---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.728Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build build security insights panel"
feature_slug: "cloud-build-build-security-insights-panel"
latest_feature_date: "2022-10-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/release-notes"
  - "https://docs.cloud.google.com/build/docs/access-github-from-build"
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
keywords:
  - "build"
  - "security"
  - "insights"
  - "panel"
  - "now"
  - "shows"
  - "information"
  - "for"
---

# Cloud Build build security insights panel

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build now shows build security information for Artifact Registry artifacts in the console’s Build History Security insights panel.

## Extended Definition

Cloud Build now shows build security information for Artifact Registry artifacts in the console’s Build History Security insights panel.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- [https://docs.cloud.google.com/build/docs/access-github-from-build](https://docs.cloud.google.com/build/docs/access-github-from-build)
- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)

## Supporting Pages

### Cloud Build release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- June 23, 2023 Feature The Cloud Build Security insights panel that displays security metrics such as Supply-chain Levels for Software Artifacts (SLSA) level for built artifacts, vulnerabilities, and build details is now generally available .
- October 11, 2022 Feature Cloud Build now displays build security information for artifacts stored in Artifact Registry in the Google Cloud console.
- August 17, 2022 Change Cloud Build is now available in the following regions: asia-south2 australia-southeast2 northamerica-northeast2 southamerica-west1 For more information, see Cloud Build locations .
- November 30, 2023 Change Cloud Build is now available in the following regions: europe-southwest1 europe-west8 europe-west9 me-west1 us-east5 us-south1 For more information, see Cloud Build locations .

### "Accessing GitHub from a build via SSH keys \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/access-github-from-build](https://docs.cloud.google.com/build/docs/access-github-from-build)
- Source ID: `site-docs-root-2`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- For Cloud Build to connect to GitHub, you must add the public SSH key to the known hosts file in Cloud Build's build environment.
- Note: For security, verify the host fingerprints in the known hosts file against GitHub's published SSH host key fingerprints .
- For information on creating triggers, see Creating and managing build triggers .
- Access the id github file from Secret Manager , and setup SSH steps : - name : 'gcr.io/cloud-builders/git' secretEnv : [ 'SSH KEY' ] entrypoint : 'bash' args : - - c - echo "$$SSH KEY" >> / root / . ssh / id rsa chmod 400 / root / . ssh / id rsa cp known hosts . github / root / . ssh / known hosts volumes : - name : 'ssh' path : / root / . ssh Clone the repository - name : 'gcr.io/cloud-builders/git' args : - clone - --recurse-submodules - git @github . com : GIT USERNAME / GIT REPOSITORY volumes : - name : 'ssh' path : / root / . ssh availableSecrets : secretManager : - versionName : projects / PROJECT ID / secrets / SECRET NAME / versions / latest env : 'SSH KEY' Replace the placeholder values in the above commands with the following: GIT USERNAME : The GitHub username of the repository owner.

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Security implications of build triggers The service account configured for a build trigger can provide elevated build-time permissions to users who employ triggers to invoke a build.
- For information on specifying substitution values in build config files, see Substituting variable values .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- To create a trigger if your source code is in GitHub : gcloud builds triggers create github \ -- name = TRIGGER NAME \ -- region = REGION \ -- repo - name = REPO NAME \ -- repo - owner = REPO OWNER \ -- branch - pattern = BRANCH PATTERN \ # or -- tag - pattern = TAG PATTERN -- build - config = BUILD CONFIG FILE \ -- service - account = SERVICE ACCOUNT \ -- require - approval -- include - logs - with - status Where: REGION is the region for your trigger.

