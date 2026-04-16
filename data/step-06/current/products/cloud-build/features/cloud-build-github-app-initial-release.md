---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.917Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build GitHub App (initial release)"
feature_slug: "cloud-build-github-app-initial-release"
latest_feature_date: "2018-07-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/connect-repo-github"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildClient"
  - "https://docs.cloud.google.com/build/docs/access-github-from-build"
keywords:
  - "initial"
  - "release"
  - "introduced"
  - "github"
---

# Cloud Build GitHub App (initial release)

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build introduced a new GitHub App.

## Extended Definition

Cloud Build introduced a new GitHub App.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/github/connect-repo-github](https://docs.cloud.google.com/build/docs/automating-builds/github/connect-repo-github)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildClient](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildClient)
- [https://docs.cloud.google.com/build/docs/access-github-from-build](https://docs.cloud.google.com/build/docs/access-github-from-build)

## Supporting Pages

### Connect to a GitHub repository \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/connect-repo-github](https://docs.cloud.google.com/build/docs/automating-builds/github/connect-repo-github)
- Source ID: `site-docs-root-2`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Select one of the following options based on your business need: All repositories - enable current and future GitHub repositories for access using the Cloud Build app Only select repositories - use the Select repositories drop-down to enable only specific repositories for access using the Cloud Build app.
- Click Done . (Optional) Updating the authenticated GitHub account If you need to update the GitHub account associated with your Google Account, you can navigate to the Authenticate with GitHub page .
- You might need to do this if you notice that the Cloud Build Connect repository page indicates that the GitHub app is not installed on any repositories after installing the Cloud Build app on GitHub.
- Home Documentation Application development Cloud Build Guides Send feedback Connect to a GitHub repository Stay organized with collections Save and categorize content based on your preferences.

### "Class CloudBuildClient (3.35.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildClient](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildClient)
- Source ID: `site-python-reference`
- Final score: 84
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For an overview of private pools, see Private pools overview. git repository link path git repository link path ( project : str , location : str , connection : str , git repository link : str ) - > str Returns a fully-qualified git repository link string. github enterprise config path github enterprise config path ( project : str , config : str ) - > str Returns a fully-qualified github enterprise config string. list build triggers list build triggers ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.devtools import cloudbuild v1 def sample get default service account(): Create a client client = cloudbuild v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.devtools import cloudbuild v1 def sample receive trigger webhook(): Create a client client = cloudbuild v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.devtools import cloudbuild v1 def sample create build trigger(): Create a client client = cloudbuild v1.

### "Accessing GitHub from a build via SSH keys \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/access-github-from-build](https://docs.cloud.google.com/build/docs/access-github-from-build)
- Source ID: `site-docs-root-2`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- Access the id github file from Secret Manager , and setup SSH steps : - name : 'gcr.io/cloud-builders/git' secretEnv : [ 'SSH KEY' ] entrypoint : 'bash' args : - - c - echo "$$SSH KEY" >> / root / . ssh / id rsa chmod 400 / root / . ssh / id rsa cp known hosts . github / root / . ssh / known hosts volumes : - name : 'ssh' path : / root / . ssh Clone the repository - name : 'gcr.io/cloud-builders/git' args : - clone - --recurse-submodules - git @github . com : GIT USERNAME / GIT REPOSITORY volumes : - name : 'ssh' path : / root / . ssh availableSecrets : secretManager : - versionName : projects / PROJECT ID / secrets / SECRET NAME / versions / latest env : 'SSH KEY' Replace the placeholder values in the above commands with the following: GIT USERNAME : The GitHub username of the repository owner.
- BUILD Step #0: Already have image (with digest): gcr.io/cloud-builders/gcloud Starting Step #0 Finished Step #0 Step #1: Already have image (with digest): gcr.io/cloud-builders/git Starting Step #1 Step #1: # github.com SSH-2.0-libssh 0.7.0 Finished Step #1 Step #2: Already have image (with digest): gcr.io/cloud-builders/git Starting Step #2 Step #2: Cloning into '[REPOSITORY-NAME]'...
- In your workingdir directory, create a file named known hosts.github and add the public SSH key to this file: ssh-keyscan -t rsa github.com > known hosts.github In the next section when you configure the build, you'll add instructions in the Cloud Build config file to copy the contents of known hosts.github to the known hosts file in Cloud Build's build environment.
- Create a new directory named workingdir and navigate into it: mkdir workingdir cd workingdir Create a new GitHub SSH key, where github-email is your GitHub email address: ssh-keygen -t rsa -b 4096 -N '' -f id github -C github-email This command creates a new SSH key workingdir/id github without a passphrase for your SSH key.

