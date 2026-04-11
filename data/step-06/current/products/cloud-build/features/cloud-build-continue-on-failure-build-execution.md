---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.726Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build continue-on-failure build execution"
feature_slug: "cloud-build-continue-on-failure-build-execution"
latest_feature_date: "2022-11-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/build-config"
  - "https://docs.cloud.google.com/build/docs/build-config-file-schema"
  - "https://docs.cloud.google.com/build/docs/building/build-containerize-python"
keywords:
  - "build"
  - "continue"
  - "on"
  - "failure"
  - "execution"
  - "can"
  - "when"
  - "selected"
---

# Cloud Build continue-on-failure build execution

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build can continue a build execution when selected steps fail by using allowFailure and allowExitCodes options.

## Extended Definition

Cloud Build can continue a build execution when selected steps fail by using allowFailure and allowExitCodes options.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/build-config](https://docs.cloud.google.com/build/docs/build-config)
- [https://docs.cloud.google.com/build/docs/build-config-file-schema](https://docs.cloud.google.com/build/docs/build-config-file-schema)
- [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python)

## Supporting Pages

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
- The following snippet invokes the docker build command and installs Maven dependencies: YAML steps : - name : 'gcr.io/cloud-builders/mvn' args : [ 'install' ] - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , 'gcr.io/my-project-id/myimage' , '.' ] JSON { "steps" : [ { "name" : "gcr.io/cloud-builders/mvn" , "args" : [ "install" ] }, { "name" : "gcr.io/cloud-builders/docker" , "args" : [ "build" , "-t" , "gcr.io/my-project-id/myimage" , "." ] } ] } env The env field of a build step takes a list of environment variables to be used when running the step.

### Build configuration file schema \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/build-config-file-schema](https://docs.cloud.google.com/build/docs/build-config-file-schema)
- Source ID: `site-docs-root-2`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following code snippet allows the build to succeed when the first step fails: YAML steps : - name : 'ubuntu' args : [ '-c' , 'exit 1' ] allowFailure : true - name : 'ubuntu' args : [ 'echo' , 'Hello World' ] JSON { "steps" : [ { "name" : "ubuntu" , "args" : [ "-c" , "exit -1" ], "allowFailure" : true , }, { "name" : "ubuntu" , "args" : [ "echo" , "Hello World" ] } ] } allowExitCodes Use the allowExitCodes field to specify that a build step failure can be ignored when that step returns a particular exit code.
- A build config file has the following structure: YAML steps : - name : string args : [ string , string , ... ] env : [ string , string , ... ] allowFailure : boolean allowExitCodes : [ string (int64 format) , string (int64 format) , ... ] dir : string id : string waitFor : [ string , string , ... ] entrypoint : string secretEnv : string volumes : object(Volume) timeout : string (Duration format) script : string automapSubstitutions : boolean - name : string ... - name : string ... timeout : string (Duration format) queueTtl : string (Duration format) logsBucket : string options : env : [ string , string , ... ] secretEnv : string volumes : object(Volume) sourceProvenanceHash : enum(HashType) machineType : enum(MachineType) diskSizeGb : string (int64 format) substitutionOption : enum(SubstitutionOption) dynamicSubstitutions : boolean automapSubstitutions : boolean logStreamingOption : enum(LogStreamingOption) logging : enum(LoggingMode) defaultLogsBucketBehavior : enum(DefaultLogsBucketBehavior) pool : object(PoolOption) pubsubTopic : string requestedVerifyOption : enum(RequestedVerifyOption) substitutions: map (key : string, value : string) tags : [ string , string , ... ] serviceAccount : string secrets : object(Secret) availableSecrets : object(Secrets) artifacts : object(Artifacts) goModules : [ object(GoModules) , ... ] mavenArtifacts : [ object(MavenArtifact) , ... ] pythonPackages : [ object(PythonPackage) , ... ] npmPackages : [ object(npmPackage) , ... ] images : - [ string , string , ... ] JSON { "steps" : [ { "name" : "string" , "args" : [ "string" , "string" , "..." ], "env" : [ "string" , "string" , "..." ], "allowFailure" : "boolean" , "allowExitCodes: [ " s tr i n g (i nt 64 f orma t ) ", " s tr i n g (i nt 64 f orma t ) ", " ... " ], " dir ": " s tr i n g ", " id ": " s tr i n g ", " wai t For ": [ " s tr i n g ", " s tr i n g ", " ... " ], " e ntr ypoi nt ": " s tr i n g ", " secre t E n v ": " s tr i n g ", " volumes ": " objec t (Volume) ", " t imeou t ": " s tr i n g (Dura t io n f orma t ) ", " scrip t " : " s tr i n g ", " au t omapSubs t i tut io ns " : " boolea n " }, { " na me ": " s tr i n g " ... }, { " na me ": " s tr i n g " ... } ], " t imeou t ": " s tr i n g (Dura t io n f orma t ) ", " queueT tl ": " s tr i n g (Dura t io n f orma t ) ", " logsBucke t ": " s tr i n g ", " op t io ns ": { " sourceProve nan ceHash ": " e nu m(HashType) ", " machi ne Type ": " e nu m(Machi ne Type) ", " diskSizeGb ": " s tr i n g (i nt 64 f orma t ) ", " subs t i tut io n Op t io n ": " e nu m(Subs t i tut io n Op t io n ) ", " dy na micSubs t i tut io ns ": " boolea n ", " au t omapSubs t i tut io ns ": " boolea n ", " logS trea mi n gOp t io n ": " e nu m(LogS trea mi n gOp t io n ) ", " loggi n g ": " e nu m(Loggi n gMode) " " de fault LogsBucke t Behavior ": " e nu m(De fault LogsBucke t Behavior) " " e n v ": [ " s tr i n g ", " s tr i n g ", " ... " ], " secre t E n v ": " s tr i n g ", " volumes ": " objec t (Volume) ", " pool ": " objec t (PoolOp t io n ) " " reques te dVeri f yOp t io n ": " e nu m(Reques te dVeri f yOp t io n ) " }, " subs t i tut io ns ": " map (key : s tr i n g , value : s tr i n g) ", " ta gs ": [ " s tr i n g ", " s tr i n g ", " ... " ], " serviceAccou nt ": " s tr i n g ", " secre ts ": " objec t (Secre t ) ", " availableSecre ts ": " objec t (Secre ts ) ", " ar t i fa c ts ": " objec t (Ar t i fa c ts ) ", " goModules ": [object(GoModules), ...], " mave n Ar t i fa c ts ": [" objec t (Mave n Ar t i fa c t ) ", ...], " py t ho n Packages ": [" objec t (Py t ho n Package) ", ...], " n pmPackages ": [" objec t ( n pmPackage) ", ...], " images ": [ " s tr i n g ", " s tr i n g ", " ..." ] } Each of the sections of the build config file defines a part of the task you want Cloud Build to execute: Build steps A build step specifies an action that you want Cloud Build to perform.
- In the following build config the env field of the build step sets the Compute Engine zone and the GKE cluster prior to executing kubectl : YAML steps : - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , 'gcr.io/myproject/myimage' , '.' ] - name : 'gcr.io/cloud-builders/kubectl' args : [ 'set' , 'image' , 'deployment/myimage' , 'frontend=gcr.io/myproject/myimage' ] env : - 'CLOUDSDK COMPUTE ZONE=us-east1-b' - 'CLOUDSDK CONTAINER CLUSTER=node-example-cluster' JSON { "steps" : [ { "name" : "gcr.io/cloud-builders/docker" , "args" : [ "build" , "-t" , "gcr.io/myproject/myimage" , "." ] }, { "name" : "gcr.io/cloud-builders/kubectl" , "args" : [ "set" , "image" , "deployment/myimage" , "frontend=gcr.io/myproject/myimage" ], "env" : [ "CLOUDSDK COMPUTE ZONE=us-east1-b" , "CLOUDSDK CONTAINER CLUSTER=node-example-cluster" ] } ] } allowFailure In a build step, if you set the value of the allowFailure field to true , and the build step fails, then the build succeeds as long as all other build steps in that build succeed.
- The following snippet invokes the docker build command and installs Maven dependencies: YAML steps : - name : 'gcr.io/cloud-builders/mvn' args : [ 'install' ] - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , 'gcr.io/my-project-id/myimage' , '.' ] JSON { "steps" : [ { "name" : "gcr.io/cloud-builders/mvn" , "args" : [ "install" ] }, { "name" : "gcr.io/cloud-builders/docker" , "args" : [ "build" , "-t" , "gcr.io/my-project-id/myimage" , "." ] } ] } env The env field of a build step takes a list of environment variables to be used when running the step.

### Build, test, and containerize Python applications \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python)
- Source ID: `site-docs-root-2`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following build step adds arguments to install requirements from the requirements.txt file: steps : Install dependencies - name : python entrypoint : pip args : [ "install" , "-r" , "requirements.txt" , "--user" ] Add unit tests : If you've defined unit tests in your application using a testing framework such as pytest , you can configure Cloud Build to run the tests by adding the following fields in a build step: name : Set the value of this field to python to use the python image from Docker Hub for your task. entrypoint : Set the value of this field to python to run python commands. args : Add the arguments for running the python pytest command.
- The following build step deploys the previously built image to Cloud Run: Deploy to Cloud Run - name : google/cloud-sdk args : [ 'gcloud' , 'run' , 'deploy' , 'helloworld-${SHORT SHA}' , '--image=us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' , '--region' , 'us-central1' , '--platform' , 'managed' , '--allow-unauthenticated' ] Save test logs to Cloud Storage : You can configure Cloud Build to store any test logs in Cloud Storage by specifying an existing bucket location and path to the test logs.
- Docker Build - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , 'us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' , '.' ] Push the container to Artifact Registry : You can store the built container in Artifact Registry, which is a Google Cloud service that you can use to store, manage, and secure build artifacts.
- Run unit tests - name : python entrypoint : python args : [ "-m" , "pytest" , "--junitxml=${SHORT SHA} test log.xml" ] Containerize the app : After adding the build step to ensure that the tests have passed, you can build the application.

