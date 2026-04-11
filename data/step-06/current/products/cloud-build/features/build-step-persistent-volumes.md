---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.797Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Build step persistent volumes"
feature_slug: "build-step-persistent-volumes"
latest_feature_date: "2017-08-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/build-config"
  - "https://docs.cloud.google.com/build/docs/build-config-file-schema"
  - "https://docs.cloud.google.com/build/docs/access-github-from-build"
keywords:
  - "build"
  - "step"
  - "persistent"
  - "volumes"
  - "added"
  - "for"
  - "that"
  - "persist"
---

# Build step persistent volumes

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build added support for volumes that persist specified paths across build steps.

## Extended Definition

Cloud Build added support for volumes that persist specified paths across build steps.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/build-config](https://docs.cloud.google.com/build/docs/build-config)
- [https://docs.cloud.google.com/build/docs/build-config-file-schema](https://docs.cloud.google.com/build/docs/build-config-file-schema)
- [https://docs.cloud.google.com/build/docs/access-github-from-build](https://docs.cloud.google.com/build/docs/access-github-from-build)

## Supporting Pages

### Build configuration file schema \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/build-config](https://docs.cloud.google.com/build/docs/build-config)
- Source ID: `site-docs-root-2`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- YAML steps : - name : 'ubuntu' volumes : - name : 'vol1' path : '/persistent volume' entrypoint : 'bash' args : - '-c' - echo "Hello, world!" > /persistent volume/file - name : 'ubuntu' volumes : - name : 'vol1' path : '/persistent volume' args : [ 'cat' , '/persistent volume/file' ] JSON { "steps" : [ { "name" : "ubuntu" , "volumes" : [ { "name" : "vol1" , "path" : "/persistent volume" } ], "entrypoint" : "bash" , "args" : [ "-c" , "echo \"Hello, world!\" > /persistent volume/file\n" ] }, { "name" : "ubuntu" , "volumes" : [ { "name" : "vol1" , "path" : "/persistent volume" } ], "args" : [ "cat" , "/persistent volume/file" ] } ] } timeout Use the timeout field in a build step to set a time limit for executing the step.
- For information on using this field see Using the encrypted variable in build requests . volumes A Volume is a Docker container volume that is mounted into build steps to persist files across build steps.
- A build config file has the following structure: YAML steps : - name : string args : [ string , string , ... ] env : [ string , string , ... ] allowFailure : boolean allowExitCodes : [ string (int64 format) , string (int64 format) , ... ] dir : string id : string waitFor : [ string , string , ... ] entrypoint : string secretEnv : string volumes : object(Volume) timeout : string (Duration format) script : string automapSubstitutions : boolean - name : string ... - name : string ... timeout : string (Duration format) queueTtl : string (Duration format) logsBucket : string options : env : [ string , string , ... ] secretEnv : string volumes : object(Volume) sourceProvenanceHash : enum(HashType) machineType : enum(MachineType) diskSizeGb : string (int64 format) substitutionOption : enum(SubstitutionOption) dynamicSubstitutions : boolean automapSubstitutions : boolean logStreamingOption : enum(LogStreamingOption) logging : enum(LoggingMode) defaultLogsBucketBehavior : enum(DefaultLogsBucketBehavior) pool : object(PoolOption) pubsubTopic : string requestedVerifyOption : enum(RequestedVerifyOption) substitutions: map (key : string, value : string) tags : [ string , string , ... ] serviceAccount : string secrets : object(Secret) availableSecrets : object(Secrets) artifacts : object(Artifacts) goModules : [ object(GoModules) , ... ] mavenArtifacts : [ object(MavenArtifact) , ... ] pythonPackages : [ object(PythonPackage) , ... ] npmPackages : [ object(npmPackage) , ... ] images : - [ string , string , ... ] JSON { "steps" : [ { "name" : "string" , "args" : [ "string" , "string" , "..." ], "env" : [ "string" , "string" , "..." ], "allowFailure" : "boolean" , "allowExitCodes: [ " s tr i n g (i nt 64 f orma t ) ", " s tr i n g (i nt 64 f orma t ) ", " ... " ], " dir ": " s tr i n g ", " id ": " s tr i n g ", " wai t For ": [ " s tr i n g ", " s tr i n g ", " ... " ], " e ntr ypoi nt ": " s tr i n g ", " secre t E n v ": " s tr i n g ", " volumes ": " objec t (Volume) ", " t imeou t ": " s tr i n g (Dura t io n f orma t ) ", " scrip t " : " s tr i n g ", " au t omapSubs t i tut io ns " : " boolea n " }, { " na me ": " s tr i n g " ... }, { " na me ": " s tr i n g " ... } ], " t imeou t ": " s tr i n g (Dura t io n f orma t ) ", " queueT tl ": " s tr i n g (Dura t io n f orma t ) ", " logsBucke t ": " s tr i n g ", " op t io ns ": { " sourceProve nan ceHash ": " e nu m(HashType) ", " machi ne Type ": " e nu m(Machi ne Type) ", " diskSizeGb ": " s tr i n g (i nt 64 f orma t ) ", " subs t i tut io n Op t io n ": " e nu m(Subs t i tut io n Op t io n ) ", " dy na micSubs t i tut io ns ": " boolea n ", " au t omapSubs t i tut io ns ": " boolea n ", " logS trea mi n gOp t io n ": " e nu m(LogS trea mi n gOp t io n ) ", " loggi n g ": " e nu m(Loggi n gMode) " " de fault LogsBucke t Behavior ": " e nu m(De fault LogsBucke t Behavior) " " e n v ": [ " s tr i n g ", " s tr i n g ", " ... " ], " secre t E n v ": " s tr i n g ", " volumes ": " objec t (Volume) ", " pool ": " objec t (PoolOp t io n ) " " reques te dVeri f yOp t io n ": " e nu m(Reques te dVeri f yOp t io n ) " }, " subs t i tut io ns ": " map (key : s tr i n g , value : s tr i n g) ", " ta gs ": [ " s tr i n g ", " s tr i n g ", " ... " ], " serviceAccou nt ": " s tr i n g ", " secre ts ": " objec t (Secre t ) ", " availableSecre ts ": " objec t (Secre ts ) ", " ar t i fa c ts ": " objec t (Ar t i fa c ts ) ", " goModules ": [object(GoModules), ...], " mave n Ar t i fa c ts ": [" objec t (Mave n Ar t i fa c t ) ", ...], " py t ho n Packages ": [" objec t (Py t ho n Package) ", ...], " n pmPackages ": [" objec t ( n pmPackage) ", ...], " images ": [ " s tr i n g ", " s tr i n g ", " ..." ] } Each of the sections of the build config file defines a part of the task you want Cloud Build to execute: Build steps A build step specifies an action that you want Cloud Build to perform.
- If this value is absolute, it may be outside the build's working directory, in which case the contents of the path may not be persisted across build step executions (unless a volume for that path is specified).

### Build configuration file schema \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/build-config-file-schema](https://docs.cloud.google.com/build/docs/build-config-file-schema)
- Source ID: `site-docs-root-2`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- YAML steps : - name : 'ubuntu' volumes : - name : 'vol1' path : '/persistent volume' entrypoint : 'bash' args : - '-c' - echo "Hello, world!" > /persistent volume/file - name : 'ubuntu' volumes : - name : 'vol1' path : '/persistent volume' args : [ 'cat' , '/persistent volume/file' ] JSON { "steps" : [ { "name" : "ubuntu" , "volumes" : [ { "name" : "vol1" , "path" : "/persistent volume" } ], "entrypoint" : "bash" , "args" : [ "-c" , "echo \"Hello, world!\" > /persistent volume/file\n" ] }, { "name" : "ubuntu" , "volumes" : [ { "name" : "vol1" , "path" : "/persistent volume" } ], "args" : [ "cat" , "/persistent volume/file" ] } ] } timeout Use the timeout field in a build step to set a time limit for executing the step.
- For information on using this field see Using the encrypted variable in build requests . volumes A Volume is a Docker container volume that is mounted into build steps to persist files across build steps.
- A build config file has the following structure: YAML steps : - name : string args : [ string , string , ... ] env : [ string , string , ... ] allowFailure : boolean allowExitCodes : [ string (int64 format) , string (int64 format) , ... ] dir : string id : string waitFor : [ string , string , ... ] entrypoint : string secretEnv : string volumes : object(Volume) timeout : string (Duration format) script : string automapSubstitutions : boolean - name : string ... - name : string ... timeout : string (Duration format) queueTtl : string (Duration format) logsBucket : string options : env : [ string , string , ... ] secretEnv : string volumes : object(Volume) sourceProvenanceHash : enum(HashType) machineType : enum(MachineType) diskSizeGb : string (int64 format) substitutionOption : enum(SubstitutionOption) dynamicSubstitutions : boolean automapSubstitutions : boolean logStreamingOption : enum(LogStreamingOption) logging : enum(LoggingMode) defaultLogsBucketBehavior : enum(DefaultLogsBucketBehavior) pool : object(PoolOption) pubsubTopic : string requestedVerifyOption : enum(RequestedVerifyOption) substitutions: map (key : string, value : string) tags : [ string , string , ... ] serviceAccount : string secrets : object(Secret) availableSecrets : object(Secrets) artifacts : object(Artifacts) goModules : [ object(GoModules) , ... ] mavenArtifacts : [ object(MavenArtifact) , ... ] pythonPackages : [ object(PythonPackage) , ... ] npmPackages : [ object(npmPackage) , ... ] images : - [ string , string , ... ] JSON { "steps" : [ { "name" : "string" , "args" : [ "string" , "string" , "..." ], "env" : [ "string" , "string" , "..." ], "allowFailure" : "boolean" , "allowExitCodes: [ " s tr i n g (i nt 64 f orma t ) ", " s tr i n g (i nt 64 f orma t ) ", " ... " ], " dir ": " s tr i n g ", " id ": " s tr i n g ", " wai t For ": [ " s tr i n g ", " s tr i n g ", " ... " ], " e ntr ypoi nt ": " s tr i n g ", " secre t E n v ": " s tr i n g ", " volumes ": " objec t (Volume) ", " t imeou t ": " s tr i n g (Dura t io n f orma t ) ", " scrip t " : " s tr i n g ", " au t omapSubs t i tut io ns " : " boolea n " }, { " na me ": " s tr i n g " ... }, { " na me ": " s tr i n g " ... } ], " t imeou t ": " s tr i n g (Dura t io n f orma t ) ", " queueT tl ": " s tr i n g (Dura t io n f orma t ) ", " logsBucke t ": " s tr i n g ", " op t io ns ": { " sourceProve nan ceHash ": " e nu m(HashType) ", " machi ne Type ": " e nu m(Machi ne Type) ", " diskSizeGb ": " s tr i n g (i nt 64 f orma t ) ", " subs t i tut io n Op t io n ": " e nu m(Subs t i tut io n Op t io n ) ", " dy na micSubs t i tut io ns ": " boolea n ", " au t omapSubs t i tut io ns ": " boolea n ", " logS trea mi n gOp t io n ": " e nu m(LogS trea mi n gOp t io n ) ", " loggi n g ": " e nu m(Loggi n gMode) " " de fault LogsBucke t Behavior ": " e nu m(De fault LogsBucke t Behavior) " " e n v ": [ " s tr i n g ", " s tr i n g ", " ... " ], " secre t E n v ": " s tr i n g ", " volumes ": " objec t (Volume) ", " pool ": " objec t (PoolOp t io n ) " " reques te dVeri f yOp t io n ": " e nu m(Reques te dVeri f yOp t io n ) " }, " subs t i tut io ns ": " map (key : s tr i n g , value : s tr i n g) ", " ta gs ": [ " s tr i n g ", " s tr i n g ", " ... " ], " serviceAccou nt ": " s tr i n g ", " secre ts ": " objec t (Secre t ) ", " availableSecre ts ": " objec t (Secre ts ) ", " ar t i fa c ts ": " objec t (Ar t i fa c ts ) ", " goModules ": [object(GoModules), ...], " mave n Ar t i fa c ts ": [" objec t (Mave n Ar t i fa c t ) ", ...], " py t ho n Packages ": [" objec t (Py t ho n Package) ", ...], " n pmPackages ": [" objec t ( n pmPackage) ", ...], " images ": [ " s tr i n g ", " s tr i n g ", " ..." ] } Each of the sections of the build config file defines a part of the task you want Cloud Build to execute: Build steps A build step specifies an action that you want Cloud Build to perform.
- If this value is absolute, it may be outside the build's working directory, in which case the contents of the path may not be persisted across build step executions (unless a volume for that path is specified).

### "Accessing GitHub from a build via SSH keys \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/access-github-from-build](https://docs.cloud.google.com/build/docs/access-github-from-build)
- Source ID: `site-docs-root-2`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Finished Step #2 PUSH DONE ----------------------------------------------------------------------------------------------------------------- ID CREATE TIME DURATION SOURCE IMAGES STATUS 871 b68bc - cefc - 4411 - 856 c - 2 a2b7c7d2487 XXXX - XX - XXT17 : 57 : 21 + 00 : 00 13 S gs : // [ PROJECT - ID ] cloudbuild / source / 1504288639.02 ---. tgz - SUCCESS Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.
- Access the id github file from Secret Manager , and setup SSH steps : - name : 'gcr.io/cloud-builders/git' secretEnv : [ 'SSH KEY' ] entrypoint : 'bash' args : - - c - echo "$$SSH KEY" >> / root / . ssh / id rsa chmod 400 / root / . ssh / id rsa cp known hosts . github / root / . ssh / known hosts volumes : - name : 'ssh' path : / root / . ssh Clone the repository - name : 'gcr.io/cloud-builders/git' args : - clone - --recurse-submodules - git @github . com : GIT USERNAME / GIT REPOSITORY volumes : - name : 'ssh' path : / root / . ssh availableSecrets : secretManager : - versionName : projects / PROJECT ID / secrets / SECRET NAME / versions / latest env : 'SSH KEY' Replace the placeholder values in the above commands with the following: GIT USERNAME : The GitHub username of the repository owner.
- Step #2: Warning: Permanently added the RSA host key for IP address 'XXX.XXX.XXX.XXX' to the list of known hosts.
- The volume is used to persist files across the build steps.

