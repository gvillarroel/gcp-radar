---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.932Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Builder service account IAM permission controls"
feature_slug: "builder-service-account-iam-permission-controls"
latest_feature_date: "2017-06-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/iam-roles-permissions"
  - "https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts"
  - "https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run"
keywords:
  - "permission"
  - "expanded"
  - "permissions"
  - "controls"
  - "builder"
  - "were"
  - "account"
---

# Builder service account IAM permission controls

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Builder service account permissions were expanded to support end-user and IAM-based control when invoking permissioned APIs during builds.

## Extended Definition

Builder service account permissions were expanded to support end-user and IAM-based control when invoking permissioned APIs during builds.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/iam-roles-permissions](https://docs.cloud.google.com/build/docs/iam-roles-permissions)
- [https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts](https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts)
- [https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run](https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run)

## Supporting Pages

### IAM roles and permissions \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/iam-roles-permissions](https://docs.cloud.google.com/build/docs/iam-roles-permissions)
- Source ID: `site-iam-reference`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table lists the Cloud Build IAM roles and the permissions that they include: Role Description Permissions Name : roles/cloudbuild.builds.viewer Title : Cloud Build Viewer Can view Cloud Build resources cloudbuild.builds.get cloudbuild.builds.list cloudbuild.locations.get cloudbuild.locations.list cloudbuild.operations.get cloudbuild.operations.list remotebuildexecution.blobs.get resourcemanager.projects.get resourcemanager.projects.list Name : roles/cloudbuild.builds.editor Title : Cloud Build Editor Full control of Cloud Build resources cloudbuild.builds.create cloudbuild.builds.get cloudbuild.builds.list cloudbuild.builds.update remotebuildexecution.blobs.get resourcemanager.projects.get resourcemanager.projects.list Name : roles/cloudbuild.builds.approver Title : Cloud Build Approver Provide access to approve or reject pending builds cloudbuild.builds.approve cloudbuild.builds.get cloudbuild.builds.list remotebuildexecution.blobs.get resourcemanager.projects.get resourcemanager.projects.list Name : roles/cloudbuild.builds.builder Title : Cloud Build Legacy Service Account When you enable the Cloud Build API for a project, the Cloud Build legacy service account is automatically created in the project and is granted this role for the resources in the project.
- Permissions The following table lists the permissions that the caller must have to call each method: API Method Required Permission Role Title builds.create() triggers.create() triggers.patch() triggers.delete() triggers.run() cloudbuild.builds.create Cloud Build Editor builds.cancel() cloudbuild.builds.update Cloud Build Editor builds.get() triggers.get() cloudbuild.builds.get Cloud Build Editor, Cloud Build Viewer builds.list() triggers.list() cloudbuild.builds.list Cloud Build Editor, Cloud Build Viewer Caution: cloudbuild.builds.create permission enables the user to run builds as the Cloud Build legacy service account .
- Depending on the IAM permissions granted to the user and the permissions of the Cloud Build legacy service account, this could enable the user escalated build-time privileges.
- Permissions are granted by setting policies that grant roles to a principal (user, group, or service account).

### Deploying to Cloud Run using Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts](https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required Identity and Access Management permissions In the Google Cloud console, go to the settings Cloud Build Permissions page: Go to Permissions For your specified Cloud Build service account or default Cloud Build service account , set the status of the following roles to Enabled : Cloud Run Admin ( roles/run.admin ) Lets Cloud Build deploy new services to Cloud Run.
- In the Assign Service Account User Role panel, choose a service account to impersonate and then click Grant Permission .
- To automate your deployment: In your repository root, add a config file named cloudbuild.yaml with steps to build the image, push the image to Artifact Registry, and then invoke the gcloud run deploy command: steps : Build the image - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE / SERVICE NAME :$COMMIT SHA' , '.' ] Push the image to Artifact Registry - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE / SERVICE NAME :$COMMIT SHA' ] Deploy image to Cloud Run - name : 'gcr.io/google.com/cloudsdktool/cloud-sdk' entrypoint : gcloud args : - 'run' - 'deploy' - ' SERVICE NAME ' - '--image' - ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE / SERVICE NAME :$COMMIT SHA' - '--region' - ' SERVICE REGION ' images : - ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE / SERVICE NAME :$COMMIT SHA' Where: REPOSITORY is the name of the Artifact Registry repository from where you deploy your image.
- In the build config file, add docker build steps to build the image and push it to Artifact Registry, and then add a gcloud build step to invoke the gcloud run deploy command to deploy the image on Cloud Run: steps : Build the image - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE ' , '.' ] Push the image to Artifact Registry - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE ' ] Deploy image to Cloud Run - name : 'gcr.io/google.com/cloudsdktool/cloud-sdk' entrypoint : gcloud args : [ 'run' , 'deploy' , ' SERVICE NAME ' , '--image' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE ' , '--region' , ' SERVICE REGION ' ] images : - ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE ' Where: REPOSITORY is the name of the Artifact Registry repository from where you deploy your image.

### Deploying to Cloud Run using Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run](https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required Identity and Access Management permissions In the Google Cloud console, go to the settings Cloud Build Permissions page: Go to Permissions For your specified Cloud Build service account or default Cloud Build service account , set the status of the following roles to Enabled : Cloud Run Admin ( roles/run.admin ) Lets Cloud Build deploy new services to Cloud Run.
- In the Assign Service Account User Role panel, choose a service account to impersonate and then click Grant Permission .
- To automate your deployment: In your repository root, add a config file named cloudbuild.yaml with steps to build the image, push the image to Artifact Registry, and then invoke the gcloud run deploy command: steps : Build the image - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE / SERVICE NAME :$COMMIT SHA' , '.' ] Push the image to Artifact Registry - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE / SERVICE NAME :$COMMIT SHA' ] Deploy image to Cloud Run - name : 'gcr.io/google.com/cloudsdktool/cloud-sdk' entrypoint : gcloud args : - 'run' - 'deploy' - ' SERVICE NAME ' - '--image' - ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE / SERVICE NAME :$COMMIT SHA' - '--region' - ' SERVICE REGION ' images : - ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE / SERVICE NAME :$COMMIT SHA' Where: REPOSITORY is the name of the Artifact Registry repository from where you deploy your image.
- In the build config file, add docker build steps to build the image and push it to Artifact Registry, and then add a gcloud build step to invoke the gcloud run deploy command to deploy the image on Cloud Run: steps : Build the image - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE ' , '.' ] Push the image to Artifact Registry - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE ' ] Deploy image to Cloud Run - name : 'gcr.io/google.com/cloudsdktool/cloud-sdk' entrypoint : gcloud args : [ 'run' , 'deploy' , ' SERVICE NAME ' , '--image' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE ' , '--region' , ' SERVICE REGION ' ] images : - ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE ' Where: REPOSITORY is the name of the Artifact Registry repository from where you deploy your image.

