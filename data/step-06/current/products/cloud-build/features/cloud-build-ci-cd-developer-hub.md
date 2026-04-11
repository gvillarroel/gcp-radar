---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.776Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build CI/CD developer hub"
feature_slug: "cloud-build-ci-cd-developer-hub"
latest_feature_date: "2019-08-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise"
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github"
  - "https://docs.cloud.google.com/build/docs/access-github-from-build"
keywords:
  - "build"
  - "ci"
  - "cd"
  - "developer"
  - "hub"
  - "made"
  - "the"
  - "available"
---

# Cloud Build CI/CD developer hub

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build made the CI/CD developer hub available.

## Extended Definition

Cloud Build made the CI/CD developer hub available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise)
- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)
- [https://docs.cloud.google.com/build/docs/access-github-from-build](https://docs.cloud.google.com/build/docs/access-github-from-build)

## Supporting Pages

### Building repositories from GitHub Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise)
- Source ID: `site-docs-root-2`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- To create GitHub triggers using gcloud commands, see the gcloud commands for Creating a build trigger . gcloud CLI To create GitHub Enterprise triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer - connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.
- Terraform For sample Terraform code about creating a build trigger and connecting it to your GitHub Enterprise installation using Developer Connect, see the following topics in the Terraform documentation: Create a Developer Connect push trigger Create a Developer Connect pull trigger Data sharing The data sent to GitHub Enterprise from Cloud Build helps you identify triggers by name and see build results on GitHub Enterprise.
- You can adjust status check configurations to look for your trigger name by: Disabling any Cloud Build-specific required checks on the GitHub Enterprise repository Ensuring that data sharing is enabled in Cloud Build Executing a new build in Cloud Build that posts statuses to your repository Re-enabling required status checks, selecting trigger name Note: Enabling data sharing for a project is not reversible.
- In the API, this connection is represented as a GitHubEnterpriseConfig resource, or an association between Cloud Build and your GitHub Enterprise Server. include-build-logs-value is the value of the optional include build logs field.

### Building repositories from GitHub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)
- Source ID: `site-docs-root-2`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- To create GitHub triggers using gcloud commands, see the gcloud commands for Creating a build trigger . gcloud CLI To create GitHub triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer - connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.
- You can adjust status check configurations to look for your trigger name by: Disabling any Cloud Build-specific required checks on the GitHub repository Ensuring that data sharing is enabled in Cloud Build Executing a new build in Cloud Build that posts statuses to your repository Re-enabling required status checks, selecting trigger name Note: Enabling data sharing for a project is not reversible.
- Note: Running builds initiated by a GitHub App pull request trigger are canceled when you close the pull request associated with your build.
- The following table compares GitHub legacy triggers, GitHub triggers, and GitHub Enterprise triggers: Feature GitHub legacy triggers GitHub triggers GitHub Enterprise triggers Execute builds on pushes to the source code Yes Yes Yes Execute builds on pull requests No Yes Yes Create trigger using Google Cloud console Yes Yes Yes Create trigger using the Cloud Build API No Yes Yes Create trigger using the Cloud Build GitHub app No Yes Yes View build status on Google Cloud console Yes Yes Yes View build status on GitHub No Yes Yes Data sharing The data sent to GitHub from Cloud Build helps you identify triggers by name and see build results on GitHub.

### "Accessing GitHub from a build via SSH keys \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/access-github-from-build](https://docs.cloud.google.com/build/docs/access-github-from-build)
- Source ID: `site-docs-root-2`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Access the id github file from Secret Manager , and setup SSH steps : - name : 'gcr.io/cloud-builders/git' secretEnv : [ 'SSH KEY' ] entrypoint : 'bash' args : - - c - echo "$$SSH KEY" >> / root / . ssh / id rsa chmod 400 / root / . ssh / id rsa cp known hosts . github / root / . ssh / known hosts volumes : - name : 'ssh' path : / root / . ssh Clone the repository - name : 'gcr.io/cloud-builders/git' args : - clone - --recurse-submodules - git @github . com : GIT USERNAME / GIT REPOSITORY volumes : - name : 'ssh' path : / root / . ssh availableSecrets : secretManager : - versionName : projects / PROJECT ID / secrets / SECRET NAME / versions / latest env : 'SSH KEY' Replace the placeholder values in the above commands with the following: GIT USERNAME : The GitHub username of the repository owner.
- In your workingdir directory, create a file named known hosts.github and add the public SSH key to this file: ssh-keyscan -t rsa github.com > known hosts.github In the next section when you configure the build, you'll add instructions in the Cloud Build config file to copy the contents of known hosts.github to the known hosts file in Cloud Build's build environment.
- Configure the build To configure the build: Create a build config file named cloudbuild.yaml with two steps: the first gcloud step accesses the SSH key in Secret Manager and saves it as id rsa in a volume named ssh , along with a copy of the known hosts.github .
- Costs In this document, you use the following billable components of Google Cloud: Secret Manager Cloud Build To generate a cost estimate based on your projected usage, use the pricing calculator .

