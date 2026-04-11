---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.711Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build build continuation on step failure"
feature_slug: "cloud-build-build-continuation-on-step-failure"
latest_feature_date: "2023-04-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/building/build-containerize-python"
  - "https://docs.cloud.google.com/build/docs/configuring-builds/create-basic-configuration"
  - "https://docs.cloud.google.com/build/docs/build-config"
keywords:
  - "build"
  - "continuation"
  - "on"
  - "step"
  - "failure"
  - "can"
  - "continue"
  - "execution"
---

# Cloud Build build continuation on step failure

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build can continue a build execution when specified steps fail by using allowFailure and allowExitCodes settings.

## Extended Definition

Cloud Build can continue a build execution when specified steps fail by using allowFailure and allowExitCodes settings.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python)
- [https://docs.cloud.google.com/build/docs/configuring-builds/create-basic-configuration](https://docs.cloud.google.com/build/docs/configuring-builds/create-basic-configuration)
- [https://docs.cloud.google.com/build/docs/build-config](https://docs.cloud.google.com/build/docs/build-config)

## Supporting Pages

### Build, test, and containerize Python applications \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python)
- Source ID: `site-docs-root-2`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following build step adds arguments to install requirements from the requirements.txt file: steps : Install dependencies - name : python entrypoint : pip args : [ "install" , "-r" , "requirements.txt" , "--user" ] Add unit tests : If you've defined unit tests in your application using a testing framework such as pytest , you can configure Cloud Build to run the tests by adding the following fields in a build step: name : Set the value of this field to python to use the python image from Docker Hub for your task. entrypoint : Set the value of this field to python to run python commands. args : Add the arguments for running the python pytest command.
- The following build step deploys the previously built image to Cloud Run: Deploy to Cloud Run - name : google/cloud-sdk args : [ 'gcloud' , 'run' , 'deploy' , 'helloworld-${SHORT SHA}' , '--image=us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' , '--region' , 'us-central1' , '--platform' , 'managed' , '--allow-unauthenticated' ] Save test logs to Cloud Storage : You can configure Cloud Build to store any test logs in Cloud Storage by specifying an existing bucket location and path to the test logs.
- Run unit tests - name : python entrypoint : python args : [ "-m" , "pytest" , "--junitxml=${SHORT SHA} test log.xml" ] Containerize the app : After adding the build step to ensure that the tests have passed, you can build the application.
- The following build step stores the test logs that you saved in the JUNIT XML file to a Cloud Storage bucket: Save test logs to Google Cloud Storage artifacts : objects : location : gs://${ BUCKET NAME}/ paths : - ${SHORT SHA} test log.xml The following snippet shows the complete build config file for the all the steps described above: steps : Install dependencies - name : python entrypoint : pip args : [ "install" , "-r" , "requirements.txt" , "--user" ] Run unit tests - name : python entrypoint : python args : [ "-m" , "pytest" , "--junitxml=${SHORT SHA} test log.xml" ] Docker Build - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , 'us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' , '.' ] Docker push to Google Artifact Registry - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , 'us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' ] Deploy to Cloud Run - name : google/cloud-sdk args : [ 'gcloud' , 'run' , 'deploy' , 'helloworld-${SHORT SHA}' , '--image=us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' , '--region' , 'us-central1' , '--platform' , 'managed' , '--allow-unauthenticated' ] Save test logs to Google Cloud Storage artifacts : objects : location : gs://${ BUCKET NAME}/ paths : - ${SHORT SHA} test log.xml Store images in Google Artifact Registry images : - us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA} Start your build : manually or using build triggers .

### Create a build configuration file \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/configuring-builds/create-basic-configuration](https://docs.cloud.google.com/build/docs/configuring-builds/create-basic-configuration)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can add any number of build steps to your build config file by including additional name fields and pointing them to cloud builders .
- You can add any number of build steps to your build config file by including additional name fields and pointing them to cloud builders .
- For information on different types of container images you can use in a build step, see Cloud Builders .
- For information on different types of container images you can use in a build step, see Cloud Builders .

### Build configuration file schema \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/build-config](https://docs.cloud.google.com/build/docs/build-config)
- Source ID: `site-docs-root-2`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following code snippet allows the build to succeed when the first step fails: YAML steps : - name : 'ubuntu' args : [ '-c' , 'exit 1' ] allowFailure : true - name : 'ubuntu' args : [ 'echo' , 'Hello World' ] JSON { "steps" : [ { "name" : "ubuntu" , "args" : [ "-c" , "exit -1" ], "allowFailure" : true , }, { "name" : "ubuntu" , "args" : [ "echo" , "Hello World" ] } ] } allowExitCodes Use the allowExitCodes field to specify that a build step failure can be ignored when that step returns a particular exit code.
- A build config file has the following structure: YAML steps : - name : string args : [ string , string , ... ] env : [ string , string , ... ] allowFailure : boolean allowExitCodes : [ string (int64 format) , string (int64 format) , ... ] dir : string id : string waitFor : [ string , string , ... ] entrypoint : string secretEnv : string volumes : object(Volume) timeout : string (Duration format) script : string automapSubstitutions : boolean - name : string ... - name : string ... timeout : string (Duration format) queueTtl : string (Duration format) logsBucket : string options : env : [ string , string , ... ] secretEnv : string volumes : object(Volume) sourceProvenanceHash : enum(HashType) machineType : enum(MachineType) diskSizeGb : string (int64 format) substitutionOption : enum(SubstitutionOption) dynamicSubstitutions : boolean automapSubstitutions : boolean logStreamingOption : enum(LogStreamingOption) logging : enum(LoggingMode) defaultLogsBucketBehavior : enum(DefaultLogsBucketBehavior) pool : object(PoolOption) pubsubTopic : string requestedVerifyOption : enum(RequestedVerifyOption) substitutions: map (key : string, value : string) tags : [ string , string , ... ] serviceAccount : string secrets : object(Secret) availableSecrets : object(Secrets) artifacts : object(Artifacts) goModules : [ object(GoModules) , ... ] mavenArtifacts : [ object(MavenArtifact) , ... ] pythonPackages : [ object(PythonPackage) , ... ] npmPackages : [ object(npmPackage) , ... ] images : - [ string , string , ... ] JSON { "steps" : [ { "name" : "string" , "args" : [ "string" , "string" , "..." ], "env" : [ "string" , "string" , "..." ], "allowFailure" : "boolean" , "allowExitCodes: [ " s tr i n g (i nt 64 f orma t ) ", " s tr i n g (i nt 64 f orma t ) ", " ... " ], " dir ": " s tr i n g ", " id ": " s tr i n g ", " wai t For ": [ " s tr i n g ", " s tr i n g ", " ... " ], " e ntr ypoi nt ": " s tr i n g ", " secre t E n v ": " s tr i n g ", " volumes ": " objec t (Volume) ", " t imeou t ": " s tr i n g (Dura t io n f orma t ) ", " scrip t " : " s tr i n g ", " au t omapSubs t i tut io ns " : " boolea n " }, { " na me ": " s tr i n g " ... }, { " na me ": " s tr i n g " ... } ], " t imeou t ": " s tr i n g (Dura t io n f orma t ) ", " queueT tl ": " s tr i n g (Dura t io n f orma t ) ", " logsBucke t ": " s tr i n g ", " op t io ns ": { " sourceProve nan ceHash ": " e nu m(HashType) ", " machi ne Type ": " e nu m(Machi ne Type) ", " diskSizeGb ": " s tr i n g (i nt 64 f orma t ) ", " subs t i tut io n Op t io n ": " e nu m(Subs t i tut io n Op t io n ) ", " dy na micSubs t i tut io ns ": " boolea n ", " au t omapSubs t i tut io ns ": " boolea n ", " logS trea mi n gOp t io n ": " e nu m(LogS trea mi n gOp t io n ) ", " loggi n g ": " e nu m(Loggi n gMode) " " de fault LogsBucke t Behavior ": " e nu m(De fault LogsBucke t Behavior) " " e n v ": [ " s tr i n g ", " s tr i n g ", " ... " ], " secre t E n v ": " s tr i n g ", " volumes ": " objec t (Volume) ", " pool ": " objec t (PoolOp t io n ) " " reques te dVeri f yOp t io n ": " e nu m(Reques te dVeri f yOp t io n ) " }, " subs t i tut io ns ": " map (key : s tr i n g , value : s tr i n g) ", " ta gs ": [ " s tr i n g ", " s tr i n g ", " ... " ], " serviceAccou nt ": " s tr i n g ", " secre ts ": " objec t (Secre t ) ", " availableSecre ts ": " objec t (Secre ts ) ", " ar t i fa c ts ": " objec t (Ar t i fa c ts ) ", " goModules ": [object(GoModules), ...], " mave n Ar t i fa c ts ": [" objec t (Mave n Ar t i fa c t ) ", ...], " py t ho n Packages ": [" objec t (Py t ho n Package) ", ...], " n pmPackages ": [" objec t ( n pmPackage) ", ...], " images ": [ " s tr i n g ", " s tr i n g ", " ..." ] } Each of the sections of the build config file defines a part of the task you want Cloud Build to execute: Build steps A build step specifies an action that you want Cloud Build to perform.
- In the following build config the env field of the build step sets the Compute Engine zone and the GKE cluster prior to executing kubectl : YAML steps : - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , 'gcr.io/myproject/myimage' , '.' ] - name : 'gcr.io/cloud-builders/kubectl' args : [ 'set' , 'image' , 'deployment/myimage' , 'frontend=gcr.io/myproject/myimage' ] env : - 'CLOUDSDK COMPUTE ZONE=us-east1-b' - 'CLOUDSDK CONTAINER CLUSTER=node-example-cluster' JSON { "steps" : [ { "name" : "gcr.io/cloud-builders/docker" , "args" : [ "build" , "-t" , "gcr.io/myproject/myimage" , "." ] }, { "name" : "gcr.io/cloud-builders/kubectl" , "args" : [ "set" , "image" , "deployment/myimage" , "frontend=gcr.io/myproject/myimage" ], "env" : [ "CLOUDSDK COMPUTE ZONE=us-east1-b" , "CLOUDSDK CONTAINER CLUSTER=node-example-cluster" ] } ] } allowFailure In a build step, if you set the value of the allowFailure field to true , and the build step fails, then the build succeeds as long as all other build steps in that build succeed.
- If this value is absolute, it may be outside the build's working directory, in which case the contents of the path may not be persisted across build step executions (unless a volume for that path is specified).

