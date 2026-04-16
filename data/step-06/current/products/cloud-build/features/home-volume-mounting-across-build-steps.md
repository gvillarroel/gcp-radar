---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.929Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Home volume mounting across build steps"
feature_slug: "home-volume-mounting-across-build-steps"
latest_feature_date: "2017-07-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/build-config"
  - "https://docs.cloud.google.com/build/docs/build-config-file-schema"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
keywords:
  - "mounting"
  - "mounted"
  - "volume"
  - "shared"
  - "home"
  - "across"
  - "steps"
---

# Home volume mounting across build steps

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

A shared home volume is mounted as the $HOME directory across Cloud Build steps.

## Extended Definition

A shared home volume is mounted as the $HOME directory across Cloud Build steps.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/build-config](https://docs.cloud.google.com/build/docs/build-config)
- [https://docs.cloud.google.com/build/docs/build-config-file-schema](https://docs.cloud.google.com/build/docs/build-config-file-schema)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)

## Supporting Pages

### Build configuration file schema \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/build-config](https://docs.cloud.google.com/build/docs/build-config)
- Source ID: `site-docs-root-2`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- For information on using this field see Using the encrypted variable in build requests . volumes A Volume is a Docker container volume that is mounted into build steps to persist files across build steps.
- You can specify additional volumes to be mounted into your build steps' containers using the volumes field for your steps.
- A build config file has the following structure: YAML steps : - name : string args : [ string , string , ... ] env : [ string , string , ... ] allowFailure : boolean allowExitCodes : [ string (int64 format) , string (int64 format) , ... ] dir : string id : string waitFor : [ string , string , ... ] entrypoint : string secretEnv : string volumes : object(Volume) timeout : string (Duration format) script : string automapSubstitutions : boolean - name : string ... - name : string ... timeout : string (Duration format) queueTtl : string (Duration format) logsBucket : string options : env : [ string , string , ... ] secretEnv : string volumes : object(Volume) sourceProvenanceHash : enum(HashType) machineType : enum(MachineType) diskSizeGb : string (int64 format) substitutionOption : enum(SubstitutionOption) dynamicSubstitutions : boolean automapSubstitutions : boolean logStreamingOption : enum(LogStreamingOption) logging : enum(LoggingMode) defaultLogsBucketBehavior : enum(DefaultLogsBucketBehavior) pool : object(PoolOption) pubsubTopic : string requestedVerifyOption : enum(RequestedVerifyOption) substitutions: map (key : string, value : string) tags : [ string , string , ... ] serviceAccount : string secrets : object(Secret) availableSecrets : object(Secrets) artifacts : object(Artifacts) goModules : [ object(GoModules) , ... ] mavenArtifacts : [ object(MavenArtifact) , ... ] pythonPackages : [ object(PythonPackage) , ... ] npmPackages : [ object(npmPackage) , ... ] images : - [ string , string , ... ] JSON { "steps" : [ { "name" : "string" , "args" : [ "string" , "string" , "..." ], "env" : [ "string" , "string" , "..." ], "allowFailure" : "boolean" , "allowExitCodes: [ " s tr i n g (i nt 64 f orma t ) ", " s tr i n g (i nt 64 f orma t ) ", " ... " ], " dir ": " s tr i n g ", " id ": " s tr i n g ", " wai t For ": [ " s tr i n g ", " s tr i n g ", " ... " ], " e ntr ypoi nt ": " s tr i n g ", " secre t E n v ": " s tr i n g ", " volumes ": " objec t (Volume) ", " t imeou t ": " s tr i n g (Dura t io n f orma t ) ", " scrip t " : " s tr i n g ", " au t omapSubs t i tut io ns " : " boolea n " }, { " na me ": " s tr i n g " ... }, { " na me ": " s tr i n g " ... } ], " t imeou t ": " s tr i n g (Dura t io n f orma t ) ", " queueT tl ": " s tr i n g (Dura t io n f orma t ) ", " logsBucke t ": " s tr i n g ", " op t io ns ": { " sourceProve nan ceHash ": " e nu m(HashType) ", " machi ne Type ": " e nu m(Machi ne Type) ", " diskSizeGb ": " s tr i n g (i nt 64 f orma t ) ", " subs t i tut io n Op t io n ": " e nu m(Subs t i tut io n Op t io n ) ", " dy na micSubs t i tut io ns ": " boolea n ", " au t omapSubs t i tut io ns ": " boolea n ", " logS trea mi n gOp t io n ": " e nu m(LogS trea mi n gOp t io n ) ", " loggi n g ": " e nu m(Loggi n gMode) " " de fault LogsBucke t Behavior ": " e nu m(De fault LogsBucke t Behavior) " " e n v ": [ " s tr i n g ", " s tr i n g ", " ... " ], " secre t E n v ": " s tr i n g ", " volumes ": " objec t (Volume) ", " pool ": " objec t (PoolOp t io n ) " " reques te dVeri f yOp t io n ": " e nu m(Reques te dVeri f yOp t io n ) " }, " subs t i tut io ns ": " map (key : s tr i n g , value : s tr i n g) ", " ta gs ": [ " s tr i n g ", " s tr i n g ", " ... " ], " serviceAccou nt ": " s tr i n g ", " secre ts ": " objec t (Secre t ) ", " availableSecre ts ": " objec t (Secre ts ) ", " ar t i fa c ts ": " objec t (Ar t i fa c ts ) ", " goModules ": [object(GoModules), ...], " mave n Ar t i fa c ts ": [" objec t (Mave n Ar t i fa c t ) ", ...], " py t ho n Packages ": [" objec t (Py t ho n Package) ", ...], " n pmPackages ": [" objec t ( n pmPackage) ", ...], " images ": [ " s tr i n g ", " s tr i n g ", " ..." ] } Each of the sections of the build config file defines a part of the task you want Cloud Build to execute: Build steps A build step specifies an action that you want Cloud Build to perform.
- YAML steps : - name : 'ubuntu' volumes : - name : 'vol1' path : '/persistent volume' entrypoint : 'bash' args : - '-c' - echo "Hello, world!" > /persistent volume/file - name : 'ubuntu' volumes : - name : 'vol1' path : '/persistent volume' args : [ 'cat' , '/persistent volume/file' ] JSON { "steps" : [ { "name" : "ubuntu" , "volumes" : [ { "name" : "vol1" , "path" : "/persistent volume" } ], "entrypoint" : "bash" , "args" : [ "-c" , "echo \"Hello, world!\" > /persistent volume/file\n" ] }, { "name" : "ubuntu" , "volumes" : [ { "name" : "vol1" , "path" : "/persistent volume" } ], "args" : [ "cat" , "/persistent volume/file" ] } ] } timeout Use the timeout field in a build step to set a time limit for executing the step.

### Build configuration file schema \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/build-config-file-schema](https://docs.cloud.google.com/build/docs/build-config-file-schema)
- Source ID: `site-docs-root-2`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- For information on using this field see Using the encrypted variable in build requests . volumes A Volume is a Docker container volume that is mounted into build steps to persist files across build steps.
- You can specify additional volumes to be mounted into your build steps' containers using the volumes field for your steps.
- A build config file has the following structure: YAML steps : - name : string args : [ string , string , ... ] env : [ string , string , ... ] allowFailure : boolean allowExitCodes : [ string (int64 format) , string (int64 format) , ... ] dir : string id : string waitFor : [ string , string , ... ] entrypoint : string secretEnv : string volumes : object(Volume) timeout : string (Duration format) script : string automapSubstitutions : boolean - name : string ... - name : string ... timeout : string (Duration format) queueTtl : string (Duration format) logsBucket : string options : env : [ string , string , ... ] secretEnv : string volumes : object(Volume) sourceProvenanceHash : enum(HashType) machineType : enum(MachineType) diskSizeGb : string (int64 format) substitutionOption : enum(SubstitutionOption) dynamicSubstitutions : boolean automapSubstitutions : boolean logStreamingOption : enum(LogStreamingOption) logging : enum(LoggingMode) defaultLogsBucketBehavior : enum(DefaultLogsBucketBehavior) pool : object(PoolOption) pubsubTopic : string requestedVerifyOption : enum(RequestedVerifyOption) substitutions: map (key : string, value : string) tags : [ string , string , ... ] serviceAccount : string secrets : object(Secret) availableSecrets : object(Secrets) artifacts : object(Artifacts) goModules : [ object(GoModules) , ... ] mavenArtifacts : [ object(MavenArtifact) , ... ] pythonPackages : [ object(PythonPackage) , ... ] npmPackages : [ object(npmPackage) , ... ] images : - [ string , string , ... ] JSON { "steps" : [ { "name" : "string" , "args" : [ "string" , "string" , "..." ], "env" : [ "string" , "string" , "..." ], "allowFailure" : "boolean" , "allowExitCodes: [ " s tr i n g (i nt 64 f orma t ) ", " s tr i n g (i nt 64 f orma t ) ", " ... " ], " dir ": " s tr i n g ", " id ": " s tr i n g ", " wai t For ": [ " s tr i n g ", " s tr i n g ", " ... " ], " e ntr ypoi nt ": " s tr i n g ", " secre t E n v ": " s tr i n g ", " volumes ": " objec t (Volume) ", " t imeou t ": " s tr i n g (Dura t io n f orma t ) ", " scrip t " : " s tr i n g ", " au t omapSubs t i tut io ns " : " boolea n " }, { " na me ": " s tr i n g " ... }, { " na me ": " s tr i n g " ... } ], " t imeou t ": " s tr i n g (Dura t io n f orma t ) ", " queueT tl ": " s tr i n g (Dura t io n f orma t ) ", " logsBucke t ": " s tr i n g ", " op t io ns ": { " sourceProve nan ceHash ": " e nu m(HashType) ", " machi ne Type ": " e nu m(Machi ne Type) ", " diskSizeGb ": " s tr i n g (i nt 64 f orma t ) ", " subs t i tut io n Op t io n ": " e nu m(Subs t i tut io n Op t io n ) ", " dy na micSubs t i tut io ns ": " boolea n ", " au t omapSubs t i tut io ns ": " boolea n ", " logS trea mi n gOp t io n ": " e nu m(LogS trea mi n gOp t io n ) ", " loggi n g ": " e nu m(Loggi n gMode) " " de fault LogsBucke t Behavior ": " e nu m(De fault LogsBucke t Behavior) " " e n v ": [ " s tr i n g ", " s tr i n g ", " ... " ], " secre t E n v ": " s tr i n g ", " volumes ": " objec t (Volume) ", " pool ": " objec t (PoolOp t io n ) " " reques te dVeri f yOp t io n ": " e nu m(Reques te dVeri f yOp t io n ) " }, " subs t i tut io ns ": " map (key : s tr i n g , value : s tr i n g) ", " ta gs ": [ " s tr i n g ", " s tr i n g ", " ... " ], " serviceAccou nt ": " s tr i n g ", " secre ts ": " objec t (Secre t ) ", " availableSecre ts ": " objec t (Secre ts ) ", " ar t i fa c ts ": " objec t (Ar t i fa c ts ) ", " goModules ": [object(GoModules), ...], " mave n Ar t i fa c ts ": [" objec t (Mave n Ar t i fa c t ) ", ...], " py t ho n Packages ": [" objec t (Py t ho n Package) ", ...], " n pmPackages ": [" objec t ( n pmPackage) ", ...], " images ": [ " s tr i n g ", " s tr i n g ", " ..." ] } Each of the sections of the build config file defines a part of the task you want Cloud Build to execute: Build steps A build step specifies an action that you want Cloud Build to perform.
- YAML steps : - name : 'ubuntu' volumes : - name : 'vol1' path : '/persistent volume' entrypoint : 'bash' args : - '-c' - echo "Hello, world!" > /persistent volume/file - name : 'ubuntu' volumes : - name : 'vol1' path : '/persistent volume' args : [ 'cat' , '/persistent volume/file' ] JSON { "steps" : [ { "name" : "ubuntu" , "volumes" : [ { "name" : "vol1" , "path" : "/persistent volume" } ], "entrypoint" : "bash" , "args" : [ "-c" , "echo \"Hello, world!\" > /persistent volume/file\n" ] }, { "name" : "ubuntu" , "volumes" : [ { "name" : "vol1" , "path" : "/persistent volume" } ], "args" : [ "cat" , "/persistent volume/file" ] } ] } timeout Use the timeout field in a build step to set a time limit for executing the step.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference-2`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- To perform these steps, you must have one of the following roles on the host project: Owner role ( roles/owner ) Compute Security Admin role ( roles/compute.securityAdmin ) Custom Identity and Access Management (IAM) role with the compute.firewalls.create permission enabled For a basic configuration, apply the rules to allow serverless resources in any service project connected to the Shared VPC network to send requests to any resource in the network.
- Terraform You can use a Terraform resource to enable the vpcaccess.googleapis.com API. resource "google project service" "vpcaccess-api" { project = var.project id # Replace this with your project ID in quotes service = "vpcaccess.googleapis.com" } You can use Terraform modules to create a VPC network and subnet and then create the connector. module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-serverless-network" mtu = 1460 subnets = [ { subnet name = "serverless-subnet" subnet ip = "10.10.10.0/28" subnet region = "us-central1" } ] } module "serverless-connector" { source = "terraform-google-modules/network/google//modules/vpc-serverless-connector-beta" version = " > 16.0" project id = var.project id vpc connectors = [{ name = "central-serverless" region = "us-central1" subnet name = module.test-vpc-module.subnets["us-central1/serverless-subnet"].name host project id = var.host project id # Specify a host project id for shared VPC machine type = "e2-standard-4" min instances = 2 max instances = 7 } Uncomment to specify an ip cidr range , { name = "central-serverless2" region = "us-central1" network = module.test-vpc-module.network name ip cidr range = "10.10.11.0/28" subnet name = null machine type = "e2-standard-4" min instances = 2 max instances = 7 } ] depends on = [ google project service.vpcaccess-api ] } Configure your service to use a connector After you have created a Serverless VPC Access connector, you must configure each service in your App Engine app that you want to connect to your VPC network.
- However, if you create a connector in a service project and the connector targets a Shared VPC network in the host project, you must add firewall rules to allow necessary traffic for the connector's operation from the following ranges: Serverless infrastructure IP range : 35.199.224.0/19 Health check probe IP ranges : 35.191.0.0/16 , 35.191.192.0/18 , and 130.211.0.0/22 These ranges are used by the Google infrastructure underlying Cloud Run, Cloud Run functions, and App Engine standard environment.
- Access to VPC resources Required firewall rules for connectors in service projects If you create a connector in a standalone VPC network or in the host project of a Shared VPC network, Google Cloud creates all necessary firewall rules for the connector's operation.

