---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.912Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "gke-deploy builder"
feature_slug: "gke-deploy-builder"
latest_feature_date: "2019-06-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/deploying-builds/deploy-gke"
  - "https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run"
  - "https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts"
keywords:
  - "deploy"
  - "builder"
  - "introduced"
---

# gke-deploy builder

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build introduced the gke-deploy builder.

## Extended Definition

Cloud Build introduced the gke-deploy builder.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/deploying-builds/deploy-gke](https://docs.cloud.google.com/build/docs/deploying-builds/deploy-gke)
- [https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run](https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run)
- [https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts](https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts)

## Supporting Pages

### Deploying to GKE \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/deploying-builds/deploy-gke](https://docs.cloud.google.com/build/docs/deploying-builds/deploy-gke)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Building and deploying a new container image To build a new container image and deploy the new container image: Update your Kubernetes resource file with the new container image using the --image attribute: YAML steps : build the container image - name : "gcr.io/cloud-builders/docker" args : [ "build" , "-t" , " LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE NAME : TAG " , "." ] push container image - name : "gcr.io/cloud-builders/docker" args : [ "push" , " LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE NAME : TAG " ] deploy container image to GKE - name : "gcr.io/cloud-builders/gke-deploy" args : - run - --filename= KUBERNETES RESOURCE FILE - --image= LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE NAME : TAG - --location= CLUSTER LOCATION - --cluster= CLUSTER JSON { "steps" : [ { "name" : "gcr.io/cloud-builders/docker" , "args" : [ "build" , "-t" , " LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE NAME : TAG " , "." ] }, { "name" : "gcr.io/cloud-builders/docker" , "args" : [ "push" , " LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE NAME : TAG " ] }, { "name" : "gcr.io/cloud-builders/gke-deploy" , "args" : [ "run" , "--filename= KUBERNETES RESOURCE FILE " , "--image= LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE NAME : TAG " , "--location= CLUSTER LOCATION " , "--cluster= CLUSTER " ] } ] } Where: LOCATION is one of the supported build locations .
- If you want to deploy to a different cluster, you can use the same build configuration and only need to change the values of the substitution variables: YAML steps : ... deploy container image to GKE - name : "gcr.io/cloud-builders/gke-deploy" args : - run - --filename= KUBERNETES RESOURCE FILE - --image= LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE NAME : TAG - --location=${ CLOUDSDK COMPUTE ZONE} - --cluster=${ CLOUDSDK CONTAINER CLUSTER} JSON { "steps" : [ { "name" : "gcr.io/cloud-builders/gke-deploy" , "args" : [ "run" , "--filename= KUBERNETES RESOURCE FILE " , "--image= LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE NAME : TAG " , "--location=${ CLOUDSDK COMPUTE ZONE}" , "--cluster=${ CLOUDSDK CONTAINER CLUSTER}" ] } ] } Where: KUBERNETES RESOURCE FILE is the path of your Kubernetes configuration file or the directory path containing your Kubernetes resource files.
- Add the gke-deploy step in your build configuration file : YAML steps : ... deploy container image to GKE - name : "gcr.io/cloud-builders/gke-deploy" args : - run - --filename= KUBERNETES RESOURCE FILE - --location= CLUSTER LOCATION - --cluster= CLUSTER JSON { "steps" : [ { "name" : "gcr.io/cloud-builders/gke-deploy" , "args" : [ "run" , "--filename= KUBERNETES RESOURCE FILE " , "--location= CLUSTER LOCATION " , "--cluster= CLUSTER " ] } ] } Where: KUBERNETES RESOURCE FILE is the path of your Kubernetes resource file or the directory path containing your Kubernetes resource files.
- Note: If you already have another form of templated Kubernetes resource file such as a Helm chart or a resource in Kustomize format, see the helm builder or kustomize builder for examples of build configurations you can use for deployment.

### Deploying to Cloud Run using Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run](https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To automate your deployment: In your repository root, add a config file named cloudbuild.yaml with steps to build the image, push the image to Artifact Registry, and then invoke the gcloud run deploy command: steps : Build the image - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE / SERVICE NAME :$COMMIT SHA' , '.' ] Push the image to Artifact Registry - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE / SERVICE NAME :$COMMIT SHA' ] Deploy image to Cloud Run - name : 'gcr.io/google.com/cloudsdktool/cloud-sdk' entrypoint : gcloud args : - 'run' - 'deploy' - ' SERVICE NAME ' - '--image' - ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE / SERVICE NAME :$COMMIT SHA' - '--region' - ' SERVICE REGION ' images : - ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE / SERVICE NAME :$COMMIT SHA' Where: REPOSITORY is the name of the Artifact Registry repository from where you deploy your image.
- In the build config file, add docker build steps to build the image and push it to Artifact Registry, and then add a gcloud build step to invoke the gcloud run deploy command to deploy the image on Cloud Run: steps : Build the image - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE ' , '.' ] Push the image to Artifact Registry - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE ' ] Deploy image to Cloud Run - name : 'gcr.io/google.com/cloudsdktool/cloud-sdk' entrypoint : gcloud args : [ 'run' , 'deploy' , ' SERVICE NAME ' , '--image' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE ' , '--region' , ' SERVICE REGION ' ] images : - ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE ' Where: REPOSITORY is the name of the Artifact Registry repository from where you deploy your image.
- Required Identity and Access Management permissions In the Google Cloud console, go to the settings Cloud Build Permissions page: Go to Permissions For your specified Cloud Build service account or default Cloud Build service account , set the status of the following roles to Enabled : Cloud Run Admin ( roles/run.admin ) Lets Cloud Build deploy new services to Cloud Run.
- Code examples Here are some sample repositories, each of which contains a sample application and a build config file to deploy application to Cloud Run: deploy-prebuilt : A code example that shows how to deploy a prebuilt image to Cloud Run. run-example-builddeploy : A code example that shows how to build and deploy an image to Cloud Run.

### Deploying to Cloud Run using Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts](https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts)
- Source ID: `site-docs-root`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To automate your deployment: In your repository root, add a config file named cloudbuild.yaml with steps to build the image, push the image to Artifact Registry, and then invoke the gcloud run deploy command: steps : Build the image - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE / SERVICE NAME :$COMMIT SHA' , '.' ] Push the image to Artifact Registry - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE / SERVICE NAME :$COMMIT SHA' ] Deploy image to Cloud Run - name : 'gcr.io/google.com/cloudsdktool/cloud-sdk' entrypoint : gcloud args : - 'run' - 'deploy' - ' SERVICE NAME ' - '--image' - ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE / SERVICE NAME :$COMMIT SHA' - '--region' - ' SERVICE REGION ' images : - ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE / SERVICE NAME :$COMMIT SHA' Where: REPOSITORY is the name of the Artifact Registry repository from where you deploy your image.
- In the build config file, add docker build steps to build the image and push it to Artifact Registry, and then add a gcloud build step to invoke the gcloud run deploy command to deploy the image on Cloud Run: steps : Build the image - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE ' , '.' ] Push the image to Artifact Registry - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE ' ] Deploy image to Cloud Run - name : 'gcr.io/google.com/cloudsdktool/cloud-sdk' entrypoint : gcloud args : [ 'run' , 'deploy' , ' SERVICE NAME ' , '--image' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE ' , '--region' , ' SERVICE REGION ' ] images : - ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE ' Where: REPOSITORY is the name of the Artifact Registry repository from where you deploy your image.
- Required Identity and Access Management permissions In the Google Cloud console, go to the settings Cloud Build Permissions page: Go to Permissions For your specified Cloud Build service account or default Cloud Build service account , set the status of the following roles to Enabled : Cloud Run Admin ( roles/run.admin ) Lets Cloud Build deploy new services to Cloud Run.
- Code examples Here are some sample repositories, each of which contains a sample application and a build config file to deploy application to Cloud Run: deploy-prebuilt : A code example that shows how to deploy a prebuilt image to Cloud Run. run-example-builddeploy : A code example that shows how to build and deploy an image to Cloud Run.

