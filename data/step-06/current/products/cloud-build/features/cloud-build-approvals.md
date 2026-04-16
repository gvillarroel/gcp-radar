---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.879Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build approvals"
feature_slug: "cloud-build-approvals"
latest_feature_date: "2021-08-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
  - "https://docs.cloud.google.com/build/docs/build-config"
  - "https://docs.cloud.google.com/build/docs/build-config-file-schema"
keywords:
  - "executions"
  - "approvals"
  - "explicit"
  - "require"
  - "allow"
  - "trigger"
  - "user"
---

# Cloud Build approvals

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build approvals allow trigger executions to require explicit user approval before a build runs.

## Extended Definition

Cloud Build approvals allow trigger executions to require explicit user approval before a build runs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- [https://docs.cloud.google.com/build/docs/build-config](https://docs.cloud.google.com/build/docs/build-config)
- [https://docs.cloud.google.com/build/docs/build-config-file-schema](https://docs.cloud.google.com/build/docs/build-config-file-schema)

## Supporting Pages

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create a trigger if your source code is in GitHub : gcloud builds triggers create github \ -- name = TRIGGER NAME \ -- region = REGION \ -- repo - name = REPO NAME \ -- repo - owner = REPO OWNER \ -- branch - pattern = BRANCH PATTERN \ # or -- tag - pattern = TAG PATTERN -- build - config = BUILD CONFIG FILE \ -- service - account = SERVICE ACCOUNT \ -- require - approval -- include - logs - with - status Where: REGION is the region for your trigger.
- Click Create to save your build trigger. gcloud To create a trigger if your source code is in Cloud Source Repositories : gcloud builds triggers create cloud-source-repositories \ --repo= REPO NAME \ --branch-pattern= BRANCH PATTERN \ # or --tag-pattern= TAG PATTERN --build-config= BUILD CONFIG FILE \ --service-account= SERVICE ACCOUNT \ --require-approval Where: REPO NAME is the name of your repository.
- Keep in mind the following security implications when using build triggers: A user with no access to your Cloud project, but with write access to the repository associated with build triggers in the project will have permissions to change the code being built.
- To only allow builds from specific sources, set an organization policy for allowed integrations ( constraints/cloudbuild.allowedIntegrations ) to deny interaction with the source defined in your trigger.

### Build configuration file schema \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/build-config](https://docs.cloud.google.com/build/docs/build-config)
- Source ID: `site-docs-root-2`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- The following build config sets the defaultLogsBucketBehavior field to the value REGIONAL USER OWNED BUCKET : YAML steps : - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , 'us-central1-docker.pkg.dev/myproject/myrepo/myimage' , '.' ] options : defaultLogsBucketBehavior : REGIONAL USER OWNED BUCKET JSON { "steps" : [ { "name" : "gcr.io/cloud-builders/docker" , "args" : [ "build" , "-t" , "us-central1-docker.pkg.dev/myproject/myrepo/myimage" , "." ] } ], "options" : { "defaultLogsBucketBehavior" : "REGIONAL USER OWNED BUCKET" } } dynamicSubstitutions : Use this option to explicitly enable or disable bash parameter expansion in substitutions.
- YAML steps : - name : 'ubuntu' args : [ 'echo' , 'hello ${ SUB VALUE}' ] substitutions : SUB VALUE : world options : substitution option : 'ALLOW LOOSE' JSON { "steps" : [ { "name" : "ubuntu" , "args" : [ "echo" , "hello ${ SUB VALUE}" ] } ], "substitutions" : { " SUB VALUE" : "world" }, "options" : { "substitution option" : "ALLOW LOOSE" } } Note: If your build is invoked by a trigger, the ALLOW LOOSE option is set by default.
- You cannot override the ALLOW LOOSE option for builds invoked by triggers.
- A build config file has the following structure: YAML steps : - name : string args : [ string , string , ... ] env : [ string , string , ... ] allowFailure : boolean allowExitCodes : [ string (int64 format) , string (int64 format) , ... ] dir : string id : string waitFor : [ string , string , ... ] entrypoint : string secretEnv : string volumes : object(Volume) timeout : string (Duration format) script : string automapSubstitutions : boolean - name : string ... - name : string ... timeout : string (Duration format) queueTtl : string (Duration format) logsBucket : string options : env : [ string , string , ... ] secretEnv : string volumes : object(Volume) sourceProvenanceHash : enum(HashType) machineType : enum(MachineType) diskSizeGb : string (int64 format) substitutionOption : enum(SubstitutionOption) dynamicSubstitutions : boolean automapSubstitutions : boolean logStreamingOption : enum(LogStreamingOption) logging : enum(LoggingMode) defaultLogsBucketBehavior : enum(DefaultLogsBucketBehavior) pool : object(PoolOption) pubsubTopic : string requestedVerifyOption : enum(RequestedVerifyOption) substitutions: map (key : string, value : string) tags : [ string , string , ... ] serviceAccount : string secrets : object(Secret) availableSecrets : object(Secrets) artifacts : object(Artifacts) goModules : [ object(GoModules) , ... ] mavenArtifacts : [ object(MavenArtifact) , ... ] pythonPackages : [ object(PythonPackage) , ... ] npmPackages : [ object(npmPackage) , ... ] images : - [ string , string , ... ] JSON { "steps" : [ { "name" : "string" , "args" : [ "string" , "string" , "..." ], "env" : [ "string" , "string" , "..." ], "allowFailure" : "boolean" , "allowExitCodes: [ " s tr i n g (i nt 64 f orma t ) ", " s tr i n g (i nt 64 f orma t ) ", " ... " ], " dir ": " s tr i n g ", " id ": " s tr i n g ", " wai t For ": [ " s tr i n g ", " s tr i n g ", " ... " ], " e ntr ypoi nt ": " s tr i n g ", " secre t E n v ": " s tr i n g ", " volumes ": " objec t (Volume) ", " t imeou t ": " s tr i n g (Dura t io n f orma t ) ", " scrip t " : " s tr i n g ", " au t omapSubs t i tut io ns " : " boolea n " }, { " na me ": " s tr i n g " ... }, { " na me ": " s tr i n g " ... } ], " t imeou t ": " s tr i n g (Dura t io n f orma t ) ", " queueT tl ": " s tr i n g (Dura t io n f orma t ) ", " logsBucke t ": " s tr i n g ", " op t io ns ": { " sourceProve nan ceHash ": " e nu m(HashType) ", " machi ne Type ": " e nu m(Machi ne Type) ", " diskSizeGb ": " s tr i n g (i nt 64 f orma t ) ", " subs t i tut io n Op t io n ": " e nu m(Subs t i tut io n Op t io n ) ", " dy na micSubs t i tut io ns ": " boolea n ", " au t omapSubs t i tut io ns ": " boolea n ", " logS trea mi n gOp t io n ": " e nu m(LogS trea mi n gOp t io n ) ", " loggi n g ": " e nu m(Loggi n gMode) " " de fault LogsBucke t Behavior ": " e nu m(De fault LogsBucke t Behavior) " " e n v ": [ " s tr i n g ", " s tr i n g ", " ... " ], " secre t E n v ": " s tr i n g ", " volumes ": " objec t (Volume) ", " pool ": " objec t (PoolOp t io n ) " " reques te dVeri f yOp t io n ": " e nu m(Reques te dVeri f yOp t io n ) " }, " subs t i tut io ns ": " map (key : s tr i n g , value : s tr i n g) ", " ta gs ": [ " s tr i n g ", " s tr i n g ", " ... " ], " serviceAccou nt ": " s tr i n g ", " secre ts ": " objec t (Secre t ) ", " availableSecre ts ": " objec t (Secre ts ) ", " ar t i fa c ts ": " objec t (Ar t i fa c ts ) ", " goModules ": [object(GoModules), ...], " mave n Ar t i fa c ts ": [" objec t (Mave n Ar t i fa c t ) ", ...], " py t ho n Packages ": [" objec t (Py t ho n Package) ", ...], " n pmPackages ": [" objec t ( n pmPackage) ", ...], " images ": [ " s tr i n g ", " s tr i n g ", " ..." ] } Each of the sections of the build config file defines a part of the task you want Cloud Build to execute: Build steps A build step specifies an action that you want Cloud Build to perform.

### Build configuration file schema \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/build-config-file-schema](https://docs.cloud.google.com/build/docs/build-config-file-schema)
- Source ID: `site-docs-root-2`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- The following build config sets the defaultLogsBucketBehavior field to the value REGIONAL USER OWNED BUCKET : YAML steps : - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , 'us-central1-docker.pkg.dev/myproject/myrepo/myimage' , '.' ] options : defaultLogsBucketBehavior : REGIONAL USER OWNED BUCKET JSON { "steps" : [ { "name" : "gcr.io/cloud-builders/docker" , "args" : [ "build" , "-t" , "us-central1-docker.pkg.dev/myproject/myrepo/myimage" , "." ] } ], "options" : { "defaultLogsBucketBehavior" : "REGIONAL USER OWNED BUCKET" } } dynamicSubstitutions : Use this option to explicitly enable or disable bash parameter expansion in substitutions.
- YAML steps : - name : 'ubuntu' args : [ 'echo' , 'hello ${ SUB VALUE}' ] substitutions : SUB VALUE : world options : substitution option : 'ALLOW LOOSE' JSON { "steps" : [ { "name" : "ubuntu" , "args" : [ "echo" , "hello ${ SUB VALUE}" ] } ], "substitutions" : { " SUB VALUE" : "world" }, "options" : { "substitution option" : "ALLOW LOOSE" } } Note: If your build is invoked by a trigger, the ALLOW LOOSE option is set by default.
- You cannot override the ALLOW LOOSE option for builds invoked by triggers.
- A build config file has the following structure: YAML steps : - name : string args : [ string , string , ... ] env : [ string , string , ... ] allowFailure : boolean allowExitCodes : [ string (int64 format) , string (int64 format) , ... ] dir : string id : string waitFor : [ string , string , ... ] entrypoint : string secretEnv : string volumes : object(Volume) timeout : string (Duration format) script : string automapSubstitutions : boolean - name : string ... - name : string ... timeout : string (Duration format) queueTtl : string (Duration format) logsBucket : string options : env : [ string , string , ... ] secretEnv : string volumes : object(Volume) sourceProvenanceHash : enum(HashType) machineType : enum(MachineType) diskSizeGb : string (int64 format) substitutionOption : enum(SubstitutionOption) dynamicSubstitutions : boolean automapSubstitutions : boolean logStreamingOption : enum(LogStreamingOption) logging : enum(LoggingMode) defaultLogsBucketBehavior : enum(DefaultLogsBucketBehavior) pool : object(PoolOption) pubsubTopic : string requestedVerifyOption : enum(RequestedVerifyOption) substitutions: map (key : string, value : string) tags : [ string , string , ... ] serviceAccount : string secrets : object(Secret) availableSecrets : object(Secrets) artifacts : object(Artifacts) goModules : [ object(GoModules) , ... ] mavenArtifacts : [ object(MavenArtifact) , ... ] pythonPackages : [ object(PythonPackage) , ... ] npmPackages : [ object(npmPackage) , ... ] images : - [ string , string , ... ] JSON { "steps" : [ { "name" : "string" , "args" : [ "string" , "string" , "..." ], "env" : [ "string" , "string" , "..." ], "allowFailure" : "boolean" , "allowExitCodes: [ " s tr i n g (i nt 64 f orma t ) ", " s tr i n g (i nt 64 f orma t ) ", " ... " ], " dir ": " s tr i n g ", " id ": " s tr i n g ", " wai t For ": [ " s tr i n g ", " s tr i n g ", " ... " ], " e ntr ypoi nt ": " s tr i n g ", " secre t E n v ": " s tr i n g ", " volumes ": " objec t (Volume) ", " t imeou t ": " s tr i n g (Dura t io n f orma t ) ", " scrip t " : " s tr i n g ", " au t omapSubs t i tut io ns " : " boolea n " }, { " na me ": " s tr i n g " ... }, { " na me ": " s tr i n g " ... } ], " t imeou t ": " s tr i n g (Dura t io n f orma t ) ", " queueT tl ": " s tr i n g (Dura t io n f orma t ) ", " logsBucke t ": " s tr i n g ", " op t io ns ": { " sourceProve nan ceHash ": " e nu m(HashType) ", " machi ne Type ": " e nu m(Machi ne Type) ", " diskSizeGb ": " s tr i n g (i nt 64 f orma t ) ", " subs t i tut io n Op t io n ": " e nu m(Subs t i tut io n Op t io n ) ", " dy na micSubs t i tut io ns ": " boolea n ", " au t omapSubs t i tut io ns ": " boolea n ", " logS trea mi n gOp t io n ": " e nu m(LogS trea mi n gOp t io n ) ", " loggi n g ": " e nu m(Loggi n gMode) " " de fault LogsBucke t Behavior ": " e nu m(De fault LogsBucke t Behavior) " " e n v ": [ " s tr i n g ", " s tr i n g ", " ... " ], " secre t E n v ": " s tr i n g ", " volumes ": " objec t (Volume) ", " pool ": " objec t (PoolOp t io n ) " " reques te dVeri f yOp t io n ": " e nu m(Reques te dVeri f yOp t io n ) " }, " subs t i tut io ns ": " map (key : s tr i n g , value : s tr i n g) ", " ta gs ": [ " s tr i n g ", " s tr i n g ", " ... " ], " serviceAccou nt ": " s tr i n g ", " secre ts ": " objec t (Secre t ) ", " availableSecre ts ": " objec t (Secre ts ) ", " ar t i fa c ts ": " objec t (Ar t i fa c ts ) ", " goModules ": [object(GoModules), ...], " mave n Ar t i fa c ts ": [" objec t (Mave n Ar t i fa c t ) ", ...], " py t ho n Packages ": [" objec t (Py t ho n Package) ", ...], " n pmPackages ": [" objec t ( n pmPackage) ", ...], " images ": [ " s tr i n g ", " s tr i n g ", " ..." ] } Each of the sections of the build config file defines a part of the task you want Cloud Build to execute: Build steps A build step specifies an action that you want Cloud Build to perform.

