---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.848Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build default logs bucket in customer project"
feature_slug: "cloud-build-default-logs-bucket-in-customer-project"
latest_feature_date: "2023-03-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/building/build-containerize-python"
  - "https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts"
  - "https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run"
keywords:
  - "bucket"
  - "customer"
  - "default"
  - "buckets"
  - "project"
  - "logs"
  - "supports"
---

# Cloud Build default logs bucket in customer project

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build supports using default build logs buckets in a user project’s same-region location through the defaultLogsBucketBehavior setting.

## Extended Definition

Cloud Build supports using default build logs buckets in a user project’s same-region location through the defaultLogsBucketBehavior setting.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python)
- [https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts](https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts)
- [https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run](https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run)

## Supporting Pages

### Build, test, and containerize Python applications \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python)
- Source ID: `site-docs-root-2`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following build step stores the test logs that you saved in the JUNIT XML file to a Cloud Storage bucket: Save test logs to Google Cloud Storage artifacts : objects : location : gs://${ BUCKET NAME}/ paths : - ${SHORT SHA} test log.xml The following snippet shows the complete build config file for the all the steps described above: steps : Install dependencies - name : python entrypoint : pip args : [ "install" , "-r" , "requirements.txt" , "--user" ] Run unit tests - name : python entrypoint : python args : [ "-m" , "pytest" , "--junitxml=${SHORT SHA} test log.xml" ] Docker Build - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , 'us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' , '.' ] Docker push to Google Artifact Registry - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , 'us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' ] Deploy to Cloud Run - name : google/cloud-sdk args : [ 'gcloud' , 'run' , 'deploy' , 'helloworld-${SHORT SHA}' , '--image=us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' , '--region' , 'us-central1' , '--platform' , 'managed' , '--allow-unauthenticated' ] Save test logs to Google Cloud Storage artifacts : objects : location : gs://${ BUCKET NAME}/ paths : - ${SHORT SHA} test log.xml Store images in Google Artifact Registry images : - us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA} Start your build : manually or using build triggers .
- The following build step deploys the previously built image to Cloud Run: Deploy to Cloud Run - name : google/cloud-sdk args : [ 'gcloud' , 'run' , 'deploy' , 'helloworld-${SHORT SHA}' , '--image=us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' , '--region' , 'us-central1' , '--platform' , 'managed' , '--allow-unauthenticated' ] Save test logs to Cloud Storage : You can configure Cloud Build to store any test logs in Cloud Storage by specifying an existing bucket location and path to the test logs.
- Required IAM permissions To store test logs in Logging, grant the Storage Object Creator ( roles/storage.objectCreator ) role for the Cloud Storage bucket to your build service account.
- The build step uses the default substitutions for project ID, repository name, and short SHA values therefore these values are automatically substituted at build time.

### Deploying to Cloud Run using Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts](https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To automate your deployment: In your repository root, add a config file named cloudbuild.yaml with steps to build the image, push the image to Artifact Registry, and then invoke the gcloud run deploy command: steps : Build the image - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE / SERVICE NAME :$COMMIT SHA' , '.' ] Push the image to Artifact Registry - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE / SERVICE NAME :$COMMIT SHA' ] Deploy image to Cloud Run - name : 'gcr.io/google.com/cloudsdktool/cloud-sdk' entrypoint : gcloud args : - 'run' - 'deploy' - ' SERVICE NAME ' - '--image' - ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE / SERVICE NAME :$COMMIT SHA' - '--region' - ' SERVICE REGION ' images : - ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE / SERVICE NAME :$COMMIT SHA' Where: REPOSITORY is the name of the Artifact Registry repository from where you deploy your image.
- In the build config file, add docker build steps to build the image and push it to Artifact Registry, and then add a gcloud build step to invoke the gcloud run deploy command to deploy the image on Cloud Run: steps : Build the image - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE ' , '.' ] Push the image to Artifact Registry - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE ' ] Deploy image to Cloud Run - name : 'gcr.io/google.com/cloudsdktool/cloud-sdk' entrypoint : gcloud args : [ 'run' , 'deploy' , ' SERVICE NAME ' , '--image' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE ' , '--region' , ' SERVICE REGION ' ] images : - ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE ' Where: REPOSITORY is the name of the Artifact Registry repository from where you deploy your image.
- Required Identity and Access Management permissions In the Google Cloud console, go to the settings Cloud Build Permissions page: Go to Permissions For your specified Cloud Build service account or default Cloud Build service account , set the status of the following roles to Enabled : Cloud Run Admin ( roles/run.admin ) Lets Cloud Build deploy new services to Cloud Run.
- Navigate to your project root directory and run the following command, where LOCATION is one of the supported build regions to run the build: gcloud builds submit -- region = LOCATION After successful completion, a success message is displayed along with the URL of the deployed service.

### Deploying to Cloud Run using Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run](https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To automate your deployment: In your repository root, add a config file named cloudbuild.yaml with steps to build the image, push the image to Artifact Registry, and then invoke the gcloud run deploy command: steps : Build the image - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE / SERVICE NAME :$COMMIT SHA' , '.' ] Push the image to Artifact Registry - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE / SERVICE NAME :$COMMIT SHA' ] Deploy image to Cloud Run - name : 'gcr.io/google.com/cloudsdktool/cloud-sdk' entrypoint : gcloud args : - 'run' - 'deploy' - ' SERVICE NAME ' - '--image' - ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE / SERVICE NAME :$COMMIT SHA' - '--region' - ' SERVICE REGION ' images : - ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE / SERVICE NAME :$COMMIT SHA' Where: REPOSITORY is the name of the Artifact Registry repository from where you deploy your image.
- In the build config file, add docker build steps to build the image and push it to Artifact Registry, and then add a gcloud build step to invoke the gcloud run deploy command to deploy the image on Cloud Run: steps : Build the image - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE ' , '.' ] Push the image to Artifact Registry - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE ' ] Deploy image to Cloud Run - name : 'gcr.io/google.com/cloudsdktool/cloud-sdk' entrypoint : gcloud args : [ 'run' , 'deploy' , ' SERVICE NAME ' , '--image' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE ' , '--region' , ' SERVICE REGION ' ] images : - ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE ' Where: REPOSITORY is the name of the Artifact Registry repository from where you deploy your image.
- Required Identity and Access Management permissions In the Google Cloud console, go to the settings Cloud Build Permissions page: Go to Permissions For your specified Cloud Build service account or default Cloud Build service account , set the status of the following roles to Enabled : Cloud Run Admin ( roles/run.admin ) Lets Cloud Build deploy new services to Cloud Run.
- Navigate to your project root directory and run the following command, where LOCATION is one of the supported build regions to run the build: gcloud builds submit -- region = LOCATION After successful completion, a success message is displayed along with the URL of the deployed service.

