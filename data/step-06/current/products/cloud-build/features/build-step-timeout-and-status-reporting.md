---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.920Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Build step timeout and status reporting"
feature_slug: "build-step-timeout-and-status-reporting"
latest_feature_date: "2018-02-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/build-config"
  - "https://docs.cloud.google.com/build/docs/build-config-file-schema"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build"
keywords:
  - "reporting"
  - "timeout"
  - "status"
  - "step"
  - "steps"
  - "added"
---

# Build step timeout and status reporting

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build added timeout and status reporting for build steps.

## Extended Definition

Cloud Build added timeout and status reporting for build steps.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/build-config](https://docs.cloud.google.com/build/docs/build-config)
- [https://docs.cloud.google.com/build/docs/build-config-file-schema](https://docs.cloud.google.com/build/docs/build-config-file-schema)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build)

## Supporting Pages

### Build configuration file schema \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/build-config](https://docs.cloud.google.com/build/docs/build-config)
- Source ID: `site-docs-root-2`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A build config file has the following structure: YAML steps : - name : string args : [ string , string , ... ] env : [ string , string , ... ] allowFailure : boolean allowExitCodes : [ string (int64 format) , string (int64 format) , ... ] dir : string id : string waitFor : [ string , string , ... ] entrypoint : string secretEnv : string volumes : object(Volume) timeout : string (Duration format) script : string automapSubstitutions : boolean - name : string ... - name : string ... timeout : string (Duration format) queueTtl : string (Duration format) logsBucket : string options : env : [ string , string , ... ] secretEnv : string volumes : object(Volume) sourceProvenanceHash : enum(HashType) machineType : enum(MachineType) diskSizeGb : string (int64 format) substitutionOption : enum(SubstitutionOption) dynamicSubstitutions : boolean automapSubstitutions : boolean logStreamingOption : enum(LogStreamingOption) logging : enum(LoggingMode) defaultLogsBucketBehavior : enum(DefaultLogsBucketBehavior) pool : object(PoolOption) pubsubTopic : string requestedVerifyOption : enum(RequestedVerifyOption) substitutions: map (key : string, value : string) tags : [ string , string , ... ] serviceAccount : string secrets : object(Secret) availableSecrets : object(Secrets) artifacts : object(Artifacts) goModules : [ object(GoModules) , ... ] mavenArtifacts : [ object(MavenArtifact) , ... ] pythonPackages : [ object(PythonPackage) , ... ] npmPackages : [ object(npmPackage) , ... ] images : - [ string , string , ... ] JSON { "steps" : [ { "name" : "string" , "args" : [ "string" , "string" , "..." ], "env" : [ "string" , "string" , "..." ], "allowFailure" : "boolean" , "allowExitCodes: [ " s tr i n g (i nt 64 f orma t ) ", " s tr i n g (i nt 64 f orma t ) ", " ... " ], " dir ": " s tr i n g ", " id ": " s tr i n g ", " wai t For ": [ " s tr i n g ", " s tr i n g ", " ... " ], " e ntr ypoi nt ": " s tr i n g ", " secre t E n v ": " s tr i n g ", " volumes ": " objec t (Volume) ", " t imeou t ": " s tr i n g (Dura t io n f orma t ) ", " scrip t " : " s tr i n g ", " au t omapSubs t i tut io ns " : " boolea n " }, { " na me ": " s tr i n g " ... }, { " na me ": " s tr i n g " ... } ], " t imeou t ": " s tr i n g (Dura t io n f orma t ) ", " queueT tl ": " s tr i n g (Dura t io n f orma t ) ", " logsBucke t ": " s tr i n g ", " op t io ns ": { " sourceProve nan ceHash ": " e nu m(HashType) ", " machi ne Type ": " e nu m(Machi ne Type) ", " diskSizeGb ": " s tr i n g (i nt 64 f orma t ) ", " subs t i tut io n Op t io n ": " e nu m(Subs t i tut io n Op t io n ) ", " dy na micSubs t i tut io ns ": " boolea n ", " au t omapSubs t i tut io ns ": " boolea n ", " logS trea mi n gOp t io n ": " e nu m(LogS trea mi n gOp t io n ) ", " loggi n g ": " e nu m(Loggi n gMode) " " de fault LogsBucke t Behavior ": " e nu m(De fault LogsBucke t Behavior) " " e n v ": [ " s tr i n g ", " s tr i n g ", " ... " ], " secre t E n v ": " s tr i n g ", " volumes ": " objec t (Volume) ", " pool ": " objec t (PoolOp t io n ) " " reques te dVeri f yOp t io n ": " e nu m(Reques te dVeri f yOp t io n ) " }, " subs t i tut io ns ": " map (key : s tr i n g , value : s tr i n g) ", " ta gs ": [ " s tr i n g ", " s tr i n g ", " ... " ], " serviceAccou nt ": " s tr i n g ", " secre ts ": " objec t (Secre t ) ", " availableSecre ts ": " objec t (Secre ts ) ", " ar t i fa c ts ": " objec t (Ar t i fa c ts ) ", " goModules ": [object(GoModules), ...], " mave n Ar t i fa c ts ": [" objec t (Mave n Ar t i fa c t ) ", ...], " py t ho n Packages ": [" objec t (Py t ho n Package) ", ...], " n pmPackages ": [" objec t ( n pmPackage) ", ...], " images ": [ " s tr i n g ", " s tr i n g ", " ..." ] } Each of the sections of the build config file defines a part of the task you want Cloud Build to execute: Build steps A build step specifies an action that you want Cloud Build to perform.
- YAML steps : - name : 'ubuntu' volumes : - name : 'vol1' path : '/persistent volume' entrypoint : 'bash' args : - '-c' - echo "Hello, world!" > /persistent volume/file - name : 'ubuntu' volumes : - name : 'vol1' path : '/persistent volume' args : [ 'cat' , '/persistent volume/file' ] JSON { "steps" : [ { "name" : "ubuntu" , "volumes" : [ { "name" : "vol1" , "path" : "/persistent volume" } ], "entrypoint" : "bash" , "args" : [ "-c" , "echo \"Hello, world!\" > /persistent volume/file\n" ] }, { "name" : "ubuntu" , "volumes" : [ { "name" : "vol1" , "path" : "/persistent volume" } ], "args" : [ "cat" , "/persistent volume/file" ] } ] } timeout Use the timeout field in a build step to set a time limit for executing the step.
- In the following build config, the ubuntu step is timed out after 500 seconds: YAML steps : - name : 'ubuntu' args : [ 'sleep' , '600' ] timeout : 500s - name : 'ubuntu' args : [ 'echo' , 'hello world, after 600s' ] JSON { "steps" : [ { "name" : "ubuntu" , "args" : [ "sleep" , "600" ], "timeout" : "500s" }, { "name" : "ubuntu" , "args" : [ "echo" , "hello world, after 600s" ] } ] } Note: The timeout field exists for both the build step and the build.
- In the following snippet, timeout is set to 660 seconds to avoid the build from timing out because of the sleep: YAML steps : - name : 'ubuntu' args : [ 'sleep' , '600' ] timeout : 660s JSON { "steps" : [ { "name" : "ubuntu" , "args" : [ "sleep" , "600" ] } ], "timeout" : "660s" } Note: The timeout field exists for both the build step and the build.

### Build configuration file schema \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/build-config-file-schema](https://docs.cloud.google.com/build/docs/build-config-file-schema)
- Source ID: `site-docs-root-2`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A build config file has the following structure: YAML steps : - name : string args : [ string , string , ... ] env : [ string , string , ... ] allowFailure : boolean allowExitCodes : [ string (int64 format) , string (int64 format) , ... ] dir : string id : string waitFor : [ string , string , ... ] entrypoint : string secretEnv : string volumes : object(Volume) timeout : string (Duration format) script : string automapSubstitutions : boolean - name : string ... - name : string ... timeout : string (Duration format) queueTtl : string (Duration format) logsBucket : string options : env : [ string , string , ... ] secretEnv : string volumes : object(Volume) sourceProvenanceHash : enum(HashType) machineType : enum(MachineType) diskSizeGb : string (int64 format) substitutionOption : enum(SubstitutionOption) dynamicSubstitutions : boolean automapSubstitutions : boolean logStreamingOption : enum(LogStreamingOption) logging : enum(LoggingMode) defaultLogsBucketBehavior : enum(DefaultLogsBucketBehavior) pool : object(PoolOption) pubsubTopic : string requestedVerifyOption : enum(RequestedVerifyOption) substitutions: map (key : string, value : string) tags : [ string , string , ... ] serviceAccount : string secrets : object(Secret) availableSecrets : object(Secrets) artifacts : object(Artifacts) goModules : [ object(GoModules) , ... ] mavenArtifacts : [ object(MavenArtifact) , ... ] pythonPackages : [ object(PythonPackage) , ... ] npmPackages : [ object(npmPackage) , ... ] images : - [ string , string , ... ] JSON { "steps" : [ { "name" : "string" , "args" : [ "string" , "string" , "..." ], "env" : [ "string" , "string" , "..." ], "allowFailure" : "boolean" , "allowExitCodes: [ " s tr i n g (i nt 64 f orma t ) ", " s tr i n g (i nt 64 f orma t ) ", " ... " ], " dir ": " s tr i n g ", " id ": " s tr i n g ", " wai t For ": [ " s tr i n g ", " s tr i n g ", " ... " ], " e ntr ypoi nt ": " s tr i n g ", " secre t E n v ": " s tr i n g ", " volumes ": " objec t (Volume) ", " t imeou t ": " s tr i n g (Dura t io n f orma t ) ", " scrip t " : " s tr i n g ", " au t omapSubs t i tut io ns " : " boolea n " }, { " na me ": " s tr i n g " ... }, { " na me ": " s tr i n g " ... } ], " t imeou t ": " s tr i n g (Dura t io n f orma t ) ", " queueT tl ": " s tr i n g (Dura t io n f orma t ) ", " logsBucke t ": " s tr i n g ", " op t io ns ": { " sourceProve nan ceHash ": " e nu m(HashType) ", " machi ne Type ": " e nu m(Machi ne Type) ", " diskSizeGb ": " s tr i n g (i nt 64 f orma t ) ", " subs t i tut io n Op t io n ": " e nu m(Subs t i tut io n Op t io n ) ", " dy na micSubs t i tut io ns ": " boolea n ", " au t omapSubs t i tut io ns ": " boolea n ", " logS trea mi n gOp t io n ": " e nu m(LogS trea mi n gOp t io n ) ", " loggi n g ": " e nu m(Loggi n gMode) " " de fault LogsBucke t Behavior ": " e nu m(De fault LogsBucke t Behavior) " " e n v ": [ " s tr i n g ", " s tr i n g ", " ... " ], " secre t E n v ": " s tr i n g ", " volumes ": " objec t (Volume) ", " pool ": " objec t (PoolOp t io n ) " " reques te dVeri f yOp t io n ": " e nu m(Reques te dVeri f yOp t io n ) " }, " subs t i tut io ns ": " map (key : s tr i n g , value : s tr i n g) ", " ta gs ": [ " s tr i n g ", " s tr i n g ", " ... " ], " serviceAccou nt ": " s tr i n g ", " secre ts ": " objec t (Secre t ) ", " availableSecre ts ": " objec t (Secre ts ) ", " ar t i fa c ts ": " objec t (Ar t i fa c ts ) ", " goModules ": [object(GoModules), ...], " mave n Ar t i fa c ts ": [" objec t (Mave n Ar t i fa c t ) ", ...], " py t ho n Packages ": [" objec t (Py t ho n Package) ", ...], " n pmPackages ": [" objec t ( n pmPackage) ", ...], " images ": [ " s tr i n g ", " s tr i n g ", " ..." ] } Each of the sections of the build config file defines a part of the task you want Cloud Build to execute: Build steps A build step specifies an action that you want Cloud Build to perform.
- YAML steps : - name : 'ubuntu' volumes : - name : 'vol1' path : '/persistent volume' entrypoint : 'bash' args : - '-c' - echo "Hello, world!" > /persistent volume/file - name : 'ubuntu' volumes : - name : 'vol1' path : '/persistent volume' args : [ 'cat' , '/persistent volume/file' ] JSON { "steps" : [ { "name" : "ubuntu" , "volumes" : [ { "name" : "vol1" , "path" : "/persistent volume" } ], "entrypoint" : "bash" , "args" : [ "-c" , "echo \"Hello, world!\" > /persistent volume/file\n" ] }, { "name" : "ubuntu" , "volumes" : [ { "name" : "vol1" , "path" : "/persistent volume" } ], "args" : [ "cat" , "/persistent volume/file" ] } ] } timeout Use the timeout field in a build step to set a time limit for executing the step.
- In the following build config, the ubuntu step is timed out after 500 seconds: YAML steps : - name : 'ubuntu' args : [ 'sleep' , '600' ] timeout : 500s - name : 'ubuntu' args : [ 'echo' , 'hello world, after 600s' ] JSON { "steps" : [ { "name" : "ubuntu" , "args" : [ "sleep" , "600" ], "timeout" : "500s" }, { "name" : "ubuntu" , "args" : [ "echo" , "hello world, after 600s" ] } ] } Note: The timeout field exists for both the build step and the build.
- In the following snippet, timeout is set to 660 seconds to avoid the build from timing out because of the sleep: YAML steps : - name : 'ubuntu' args : [ 'sleep' , '600' ] timeout : 660s JSON { "steps" : [ { "name" : "ubuntu" , "args" : [ "sleep" , "600" ] } ], "timeout" : "660s" } Note: The timeout field exists for both the build step and the build.

### Class Build (3.35.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build)
- Source ID: `site-python-reference`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The TTL starts ticking from create time. artifacts google.cloud.devtools.cloudbuild v1.types.Artifacts Artifacts produced by the build that should be uploaded upon successful completion of all build steps. logs bucket str Cloud Storage bucket where logs should be written (see `Bucket Name Requirements source provenance google.cloud.devtools.cloudbuild v1.types.SourceProvenance Output only.
- Valid keys are: - BUILD: time to execute all build steps. - PUSH: time to push all artifacts including docker images and non docker artifacts. - FETCHSOURCE: time to fetch source. - SETUPBUILD: time to set up build.
- If this amount of time elapses, work on the build will cease and the build status will be TIMEOUT . timeout starts ticking from startTime .
- Default time is 60 minutes. images MutableSequence[str] A list of images to be pushed upon the successful completion of all build steps.

