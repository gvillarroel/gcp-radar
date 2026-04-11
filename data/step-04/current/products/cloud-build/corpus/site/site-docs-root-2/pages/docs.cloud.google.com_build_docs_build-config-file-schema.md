---
title: "Build configuration file schema \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/build/docs/build-config-file-schema
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/build/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/build/docs/build-config-file-schema
  title: "Build configuration file schema \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Build
Guides
Send feedback
Build configuration file schema
Stay organized with collections
Save and categorize content based on your preferences.
A build config file contains instructions for Cloud Build to perform
tasks based on your specifications. For example, your build config file can
contain instructions to build, package, and push Docker images.
This page explains the schema of the Cloud Build
configuration file. For instructions on creating and using a build config file,
see Creating a basic build config file .
Structure of a build config file
Build config files are modeled using the Cloud Build API's
Build
resource.
You can write the build config file using the YAML or the JSON syntax. If you
submit build requests using third-party http tools such as curl, use the JSON
syntax.
Note: If you're using VS Code or IntelliJ IDEs, you can use
Cloud Code to author your YAML config files. Cloud Code
is built in to the Cloud Shell Editor and
doesn't require any setup. For more information, see
Cloud Code for VS Code and
Cloud Code for IntelliJ .
A build config file has the following structure:
YAML
steps :
- name : string
args : [ string , string , ... ]
env : [ string , string , ... ]
allowFailure : boolean
allowExitCodes : [ string (int64 format) , string (int64 format) , ... ]
dir : string
id : string
waitFor : [ string , string , ... ]
entrypoint : string
secretEnv : string
volumes : object(Volume)
timeout : string (Duration format)
script : string
automapSubstitutions : boolean
- name : string
...
- name : string
...
timeout : string (Duration format)
queueTtl : string (Duration format)
logsBucket : string
options :
env : [ string , string , ... ]
secretEnv : string
volumes : object(Volume)
sourceProvenanceHash : enum(HashType)
machineType : enum(MachineType)
diskSizeGb : string (int64 format)
substitutionOption : enum(SubstitutionOption)
dynamicSubstitutions : boolean
automapSubstitutions : boolean
logStreamingOption : enum(LogStreamingOption)
logging : enum(LoggingMode)
defaultLogsBucketBehavior : enum(DefaultLogsBucketBehavior)
pool : object(PoolOption)
pubsubTopic : string
requestedVerifyOption : enum(RequestedVerifyOption)
substitutions: map (key : string, value : string)
tags : [ string , string , ... ]
serviceAccount : string
secrets : object(Secret)
availableSecrets : object(Secrets)
artifacts : object(Artifacts)
goModules : [ object(GoModules) , ... ]
mavenArtifacts : [ object(MavenArtifact) , ... ]
pythonPackages : [ object(PythonPackage) , ... ]
npmPackages : [ object(npmPackage) , ... ]
images :
- [ string , string , ... ]
JSON
{
"steps" : [
{
"name" : "string" ,
"args" : [
"string" ,
"string" ,
"..."
],
"env" : [
"string" ,
"string" ,
"..."
],
"allowFailure" : "boolean" ,
"allowExitCodes: [
" s tr i n g (i nt 64 f orma t ) ",
" s tr i n g (i nt 64 f orma t ) ",
" ... "
],
" dir ": " s tr i n g ",
" id ": " s tr i n g ",
" wai t For ": [
" s tr i n g ",
" s tr i n g ",
" ... "
],
" e ntr ypoi nt ": " s tr i n g ",
" secre t E n v ": " s tr i n g ",
" volumes ": " objec t (Volume) ",
" t imeou t ": " s tr i n g (Dura t io n f orma t ) ",
" scrip t " : " s tr i n g ",
" au t omapSubs t i tut io ns " : " boolea n "
},
{
" na me ": " s tr i n g "
...
},
{
" na me ": " s tr i n g "
...
}
],
" t imeou t ": " s tr i n g (Dura t io n f orma t ) ",
" queueT tl ": " s tr i n g (Dura t io n f orma t ) ",
" logsBucke t ": " s tr i n g ",
" op t io ns ": {
" sourceProve nan ceHash ": " e nu m(HashType) ",
" machi ne Type ": " e nu m(Machi ne Type) ",
" diskSizeGb ": " s tr i n g (i nt 64 f orma t ) ",
" subs t i tut io n Op t io n ": " e nu m(Subs t i tut io n Op t io n ) ",
" dy na micSubs t i tut io ns ": " boolea n ",
" au t omapSubs t i tut io ns ": " boolea n ",
" logS trea mi n gOp t io n ": " e nu m(LogS trea mi n gOp t io n ) ",
" loggi n g ": " e nu m(Loggi n gMode) "
" de fault LogsBucke t Behavior ": " e nu m(De fault LogsBucke t Behavior) "
" e n v ": [
" s tr i n g ",
" s tr i n g ",
" ... "
],
" secre t E n v ": " s tr i n g ",
" volumes ": " objec t (Volume) ",
" pool ": " objec t (PoolOp t io n ) "
" reques te dVeri f yOp t io n ": " e nu m(Reques te dVeri f yOp t io n ) "
},
" subs t i tut io ns ": " map (key : s tr i n g , value : s tr i n g) ",
" ta gs ": [
" s tr i n g ",
" s tr i n g ",
" ... "
],
" serviceAccou nt ": " s tr i n g ",
" secre ts ": " objec t (Secre t ) ",
" availableSecre ts ": " objec t (Secre ts ) ",
" ar t i fa c ts ": " objec t (Ar t i fa c ts ) ",
" goModules ": [object(GoModules), ...],
" mave n Ar t i fa c ts ": [" objec t (Mave n Ar t i fa c t ) ", ...],
" py t ho n Packages ": [" objec t (Py t ho n Package) ", ...],
" n pmPackages ": [" objec t ( n pmPackage) ", ...],
" images ": [
" s tr i n g ",
" s tr i n g ",
" ..."
]
}
Each of the sections of the build config file defines a part of the task you
want Cloud Build to execute:
Build steps
A build step specifies an action that you want Cloud Build to
perform. For each build step, Cloud Build executes a docker container
as an instance of docker run . Build steps are analogous to commands in a
script and provide you with the flexibility of executing arbitrary instructions
in your build. If you can package a build tool into a container,
Cloud Build can execute it as part of your build. By default,
Cloud Build executes all steps of a build serially on the same machine.
If you have steps that can run concurrently, use the waitFor option.
You can include up to 300 build steps in your config file.
Use the steps field in the build config file to specify a build step. Here's a
snippet of the kind of configuration you might set in the steps field:
YAML
steps :
- name : 'gcr.io/cloud-builders/kubectl'
args : [ 'set' , 'image' , 'deployment/mydepl' , 'my-image=gcr.io/my-project/myimage' ]
env :
- 'CLOUDSDK_COMPUTE_ZONE=us-east4-b'
- 'CLOUDSDK_CONTAINER_CLUSTER=my-cluster'
- name : 'gcr.io/cloud-builders/docker'
args : [ 'build' , '-t' , 'gcr.io/my-project-id/myimage' , '.' ]
JSON
{
"steps" : [
{
"name" : "gcr.io/cloud-builders/kubectl" ,
"args" : [
"set" ,
"image"
"deployment/mydepl"
"my-image=gcr.io/my-project/myimage"
],
"env" : [
"CLOUDSDK_COMPUTE_ZONE=us-east4-b" ,
"CLOUDSDK_CONTAINER_CLUSTER=my-cluster"
]
},
{
"name" : "gcr.io/cloud-builders/docker" ,
"args" : [
"build" ,
"-t" ,
"gcr.io/my-project-id/myimage" ,
"."
]
}
]
}
name
Use the name field of a build step to specify a cloud
builder , which is a container image
running common tools. You use a builder in a build step to execute your tasks.
The following snippet shows build steps calling the
bazel ,
gcloud , and
docker builders:
YAML
steps :
- name : 'gcr.io/cloud-builders/bazel'
...
- name : 'gcr.io/cloud-builders/gcloud'
...
- name : 'gcr.io/cloud-builders/docker'
...
JSON
{
"steps" : [
{
"name" : "gcr.io/cloud-builders/bazel"
...
},
{
"name" : "gcr.io/cloud-builders/gcloud"
...
},
{
"name" : "gcr.io/cloud-builders/docker"
...
}
]
}
args
The args field of a build step takes a list of arguments and passes them to
the builder referenced by the name field. Arguments passed to the builder are
passed to the tool that's running in the builder, which lets you invoke any
command supported by the tool. If the builder used in the build step has an
entrypoint, args will be used as arguments to that entrypoint. If the builder
does not define an entrypoint, the first element in args will be used as the
entrypoint, and the remainder will be used as arguments.
You can create up to 100 arguments per step. The maximum argument length is
10,000 characters.
The following snippet invokes the docker build command and installs Maven
dependencies:
YAML
steps :
- name : 'gcr.io/cloud-builders/mvn'
args : [ 'install' ]
- name : 'gcr.io/cloud-builders/docker'
args : [ 'build' , '-t' , 'gcr.io/my-project-id/myimage' , '.' ]
JSON
{
"steps" : [
{
"name" : "gcr.io/cloud-builders/mvn" ,
"args" : [
"install"
]
},
{
"name" : "gcr.io/cloud-builders/docker" ,
"args" : [
"build" ,
"-t" ,
"gcr.io/my-project-id/myimage" ,
"."
]
}
]
}
env
The env field of a build step takes a list of environment variables to be used
when running the step. The variables are of the form KEY=VALUE .
In the following build config the env field of the build step sets the
Compute Engine zone and the GKE cluster prior to executing
kubectl :
YAML
steps :
- name : 'gcr.io/cloud-builders/docker'
args : [ 'build' , '-t' , 'gcr.io/myproject/myimage' , '.' ]
- name : 'gcr.io/cloud-builders/kubectl'
args : [ 'set' , 'image' , 'deployment/myimage' , 'frontend=gcr.io/myproject/myimage' ]
env :
- 'CLOUDSDK_COMPUTE_ZONE=us-east1-b'
- 'CLOUDSDK_CONTAINER_CLUSTER=node-example-cluster'
JSON
{
"steps" : [
{
"name" : "gcr.io/cloud-builders/docker" ,
"args" : [
"build" ,
"-t" ,
"gcr.io/myproject/myimage" ,
"."
]
},
{
"name" : "gcr.io/cloud-builders/kubectl" ,
"args" : [
"set" ,
"image" ,
"deployment/myimage" ,
"frontend=gcr.io/myproject/myimage"
],
"env" : [
"CLOUDSDK_COMPUTE_ZONE=us-east1-b" ,
"CLOUDSDK_CONTAINER_CLUSTER=node-example-cluster"
]
}
]
}
allowFailure
In a build step, if you set the value of the allowFailure field to true , and the build step fails, then the build succeeds as long as all other build steps in that build succeed.
If all of the build steps in a build have allowFailure set to true and all of the build steps fail, then the status of the build is still Successful .
allowExitCodes takes precedence over this field.
The following code snippet allows the build to succeed when the first step fails:
YAML
steps :
- name : 'ubuntu'
args : [ '-c' , 'exit 1' ]
allowFailure : true
- name : 'ubuntu'
args : [ 'echo' , 'Hello World' ]
JSON
{
"steps" : [
{
"name" : "ubuntu" ,
"args" : [
"-c" ,
"exit -1"
],
"allowFailure" : true ,
},
{
"name" : "ubuntu" ,
"args" : [
"echo" ,
"Hello World"
]
}
]
}
allowExitCodes
Use the allowExitCodes field to specify that a build step failure can be ignored when that step returns a particular exit code.
If a build step fails with an exit code matching the value that you have provided in allowExitCodes , Cloud Build will allow this build step to fail without failing your entire build.
If 100% of your build steps fail, but every step exits with a code that you have specified in the allowExitCodes field, then the build is still successful.
However, if the build step fails, and it produces another exit code -- one that does not match the value you have specified is in allowExitCodes -- then the overall build will fail.
The exit code(s) relevant to your build depend on your software. For example, "1" is a common exit code in Linux. You can also define your own exit codes in your scripts. The allowExitCodes field accepts numbers up to a maximum of 255.
This field takes precedence over allowFailure .
The following code snippet allows the build to succeed when the first step fails with one of the provided exit codes:
YAML
steps :
- name : 'ubuntu'
args : [ '-c' , 'exit 1' ]
allowExitCodes : [ 1 ]
- name : 'ubuntu'
args : [ 'echo' , 'Hello World' ]
JSON
{
"steps" : [
{
"name" : "ubuntu" ,
"args" : [
"-c" ,
"exit 1"
],
"allowExitCodes" : [ 1 ],
},
{
"name" : "ubuntu" ,
"args" : [
"echo" ,
"Hello World"
]
}
]
}
dir
Use the dir field in a build step to set a working directory to use when
running the step's container. If you set the dir field in the build step,
the working directory is set to /workspace/<dir> . If this value is a relative
path, it is relative to the build's working directory. If this value is
absolute, it may be outside the build's working directory, in which case the
contents of the path may not be persisted across build step executions (unless a
volume for that path is specified).
The following code snippet sets the working directory for the build step as
/workspace/examples/hello_world :
YAML
steps :
- name : 'gcr.io/cloud-builders/go'
args : [ 'install' , '.' ]
env : [ 'PROJECT_ROOT=hello' ]
dir : 'examples/hello_world'
JSON
{
"steps" : [
{
"name" : "gcr.io/cloud-builders/go" ,
"args" : [
"install" ,
"."
],
"env" : [
"PROJECT_ROOT=hello"
],
"dir" : "examples/hello_world"
}
]
}
ID
Use the id field to set a unique identifier for a build step. id is used
with the waitFor field to configure the order in which build steps should be
run. For instructions on using waitFor and id , see Configuring build step
order .
waitFor
Use the waitFor field in a build step to specify which steps must run before
the build step is run. If no values are provided for waitFor , the build step
waits for all prior build steps in the build request to complete successfully
before running. For instructions on using waitFor and id , see Configuring
build step
order .
entrypoint
Use the entrypoint in a build step to specify an entrypoint if you don't want
to use the default entrypoint of the builder. If you don't set this field,
Cloud Build will use the builder's entrypoint. The following snippet
sets the entrypoints for the npm build step:
YAML
steps :
- name : 'gcr.io/cloud-builders/npm'
entrypoint : 'node'
args : [ '--version' ]
JSON
{
"steps" : [
{
"name" : "gcr.io/cloud-builders/npm" ,
"entrypoint" : "node" ,
"args" : [
"--version"
]
}
]
}
secretEnv
A list of environment variables which are encrypted using a Cloud KMS
crypto key. These values must be specified in the build's secrets. For
information on using this field see Using the encrypted variable in build
requests .
volumes
A Volume
is a Docker container volume that is mounted into build steps to persist files
across build steps. When Cloud Build runs a build step, it automatically
mounts a workspace volume into /workspace . You can specify additional
volumes to be mounted into your build steps' containers using the volumes
field for your steps.
For example, the following build config file writes a file into a volume in the
first step and reads it in the second step. If these steps did not specify
/persistent_volume path as a persistent volume, the first step would write the
file at that path, then that file would be discarded before the second step
executes. By specifying the volume with the same name in both steps, the
contents of /persistent_volume in the first step are persisted to the second
step.
YAML
steps :
- name : 'ubuntu'
volumes :
- name : 'vol1'
path : '/persistent_volume'
entrypoint : 'bash'
args :
- '-c'
- |
echo "Hello, world!" > /persistent_volume/file
- name : 'ubuntu'
volumes :
- name : 'vol1'
path : '/persistent_volume'
args : [ 'cat' , '/persistent_volume/file' ]
JSON
{
"steps" : [
{
"name" : "ubuntu" ,
"volumes" : [
{
"name" : "vol1" ,
"path" : "/persistent_volume"
}
],
"entrypoint" : "bash" ,
"args" : [
"-c" ,
"echo \"Hello, world!\" > /persistent_volume/file\n"
]
},
{
"name" : "ubuntu" ,
"volumes" : [
{
"name" : "vol1" ,
"path" : "/persistent_volume"
}
],
"args" : [
"cat" ,
"/persistent_volume/file"
]
}
]
}
timeout
Use the timeout field in a build step to set a time limit for executing the
step. If you don't set this field, the step runs either until it completes or
until the build itself times out. The timeout field for a build step must not
exceed the timeout value specified for the build.
timeout is specified in seconds (using
Duration
format) with up to nine fractional digits, ending in s (for example: 3.5s ).
In the following build config, the ubuntu step is timed out after 500 seconds:
YAML
steps :
- name : 'ubuntu'
args : [ 'sleep' , '600' ]
timeout : 500s
- name : 'ubuntu'
args : [ 'echo' , 'hello world, after 600s' ]
JSON
{
"steps" : [
{
"name" : "ubuntu" ,
"args" : [
"sleep" ,
"600"
],
"timeout" : "500s"
},
{
"name" : "ubuntu" ,
"args" : [
"echo" ,
"hello world, after 600s"
]
}
]
}
Note: The timeout field exists for both the build step and the build. The
timeout field of a build step specifies the amount of time the step is allowed
to run, and the timeout field of a build specifies the amount of
time the build is allowed to run.
script
Use the script field in a build step to specify a shell script to execute in
the step. If you specify script in a build step, you cannot specify args
or entrypoint in the same step. For instructions on using the script field, see
Running bash scripts .
automapSubstitutions
If set to true , automatically map all substitutions and make them available
as environment variables in a single step. If set to false , ignore
substitutions for that step. For examples, see Substitute variable values .
timeout
Use the timeout field outside a build step to set the overall
time limit for executing the build.
If this time elapses, work on the build stops and the
build status is
TIMEOUT .
If timeout isn't set, the build uses a default timeout of 60 minutes. The
maximum value for timeout is 24 hours. timeout is specified in seconds,
using
Duration
format, with up to nine fractional digits, ending with s (for example:
3.5s ).
In the following snippet, timeout is set to 660 seconds to avoid the build
from timing out because of the sleep:
YAML
steps :
- name : 'ubuntu'
args : [ 'sleep' , '600' ]
timeout : 660s
JSON
{
"steps" : [
{
"name" : "ubuntu" ,
"args" : [
"sleep" ,
"600"
]
}
],
"timeout" : "660s"
}
Note: The timeout field exists for both the build step and the build. The
timeout field of a build step specifies the amount of time the
build step is allowed to run, and the timeout field of a build specifies the
amount of time the entire build is allowed to run.
queueTtl
Use the queueTtl field to specify the amount of time a build can be queued. If
a build is in the queue for longer than the value set in queueTtl , the build
expires and the build
status is set to
EXPIRED . If no value is provided, Cloud Build uses the default value of
3600s (1 hour). queueTtl starts ticking from createTime . queueTtl must
be specified in seconds with up to nine fractional digits, terminated by 's',
for example, 3.5s .
In the following snippet timeout is set to 20s and queueTtl is set to 10s .
queueTtl starts ticking at createTime , which is the time the build
is requested, and timeout starts ticking at startTime , which is the time the
build starts. Therefore, queueTtl will expire at createTime + 10s unless
the build starts by then.
YAML
steps :
- name : 'ubuntu'
args : [ 'sleep' , '5' ]
timeout : 20s
queueTtl : 10s
JSON
{
"steps" : [
{
"name" : "ubuntu" ,
"args" : [
"sleep" ,
"5"
]
}
],
"timeout" : "20s" ,
"queueTtl" : "10s"
}
logsBucket
Set the logsBucket field for a build to specify a Cloud Storage bucket
where logs must be written. If you don't set this field, Cloud Build
will use a default bucket to store your build logs.
The following snippet sets a logs bucket to store the build logs:
YAML
steps :
- name : 'gcr.io/cloud-builders/go'
args : [ 'install' , '.' ]
logsBucket : 'gs://mybucket'
JSON
{
"steps" : [
{
"name" : "gcr.io/cloud-builders/go" ,
"args" : [
"install" ,
"."
]
}
],
"logsBucket" : "gs://mybucket"
}
options
Use the options
field to specify the following optional arguments for your build:
enableStructuredLogging :
Enables the mapping of specified build log fields
to LogEntry fields
when the build log is sent to Logging.
For example, if your build log contains a message , then the message appears
in either textPayload or jsonPayload.message in the resulting
log entry. Build log fields that aren't mappable appear in the log entry
jsonPayload . For more information, see
Map build log fields to log entry fields .
env :
A list of global environment variable definitions that will exist for all build
steps in this build. If a variable is defined in both globally and in a build
step, the variable will use the build step value. The elements are of the form
KEY=VALUE for the environment variable KEY being given the value VALUE .
secretEnv :
A list of global environment variables, encrypted using a Cloud Key Management Service
crypto key, that will be available to all build steps in this build.
These values must be specified in the build's Secret .
volumes :
A list of volumes to mount globally for ALL build steps. Each volume is created
as an empty volume prior to starting the build process. Upon completion of the
build, volumes and their contents are discarded. Global volume names and paths
cannot conflict with the volumes defined a build step. Using a global volume in
a build with only one step is not valid as it signifies a build request with an
incorrect configuration.
pubsubTopic :
Option to
provide a Pub/Sub topic name
for receiving build status
notifications. If you don't provide a name, then Cloud Build uses
the default topic name of cloud-builds . The following snippet specifies
that the Pub/Sub topic name is my-topic :
YAML
steps :
- name : 'gcr.io/cloud-builders/docker'
args : [ 'build' , '-t' , 'gcr.io/myproject/myimage' , '.' ]
options :
pubsubTopic : 'projects/my-project/topics/my-topic'
JSON
{
"steps" : [
{
"name" : "gcr.io/cloud-builders/docker" ,
"args" : [
"build" ,
"-t" ,
"gcr.io/myproject/myimage" ,
"."
]
}
],
"options" : {
"pubsubTopic" : "projects/my-project/topics/my-topic"
}
}
sourceProvenanceHash :
Set the sourceProvenanceHash option to specify the hash algorithm for source
provenance. The following snippet specifies that the hash algorithm is
SHA256 :
YAML
steps :
- name : 'gcr.io/cloud-builders/docker'
args : [ 'build' , '-t' , 'gcr.io/myproject/myimage' , '.' ]
options :
sourceProvenanceHash : [ 'SHA256' ]
JSON
{
"steps" : [
{
"name" : "gcr.io/cloud-builders/docker" ,
"args" : [
"build" ,
"-t" ,
"gcr.io/myproject/myimage" ,
"."
]
}
],
"options" : {
"sourceProvenanceHash" : [ "SHA256" ]
}
}
machineType :
Cloud Build provides four high-CPU virtual machine types to run your builds: two machine types with 8 CPUs and two machine types with 32 CPUs. Cloud Build also
provides two additional virtual machine types with 1 CPU and 2 CPUs to run your builds. The default machine type is e2-standard-2 with 2 CPUs.
Requesting a high-CPU virtual machine may increase the startup time of your build. Add the machineType option to request a virtual machine with a higher CPU:
YAML
steps :
- name : 'gcr.io/cloud-builders/docker'
args : [ 'build' , '-t' , 'gcr.io/myproject/myimage' , '.' ]
options :
machineType : 'E2_HIGHCPU_8'
JSON
{
"steps" : [
{
"name" : "gcr.io/cloud-builders/docker" ,
"args" : [
"build" ,
"-t" ,
"gcr.io/myproject/myimage" ,
"."
]
},
],
"options" : {
"machineType" : "E2_HIGHCPU_8"
}
}
For more information on using the machineType option see Speeding up
builds .
diskSizeGb :
Use the diskSizeGb option to request a custom disk size for your build. The
maximum size you can request is 4000 GB.
The following snippet requests a disk size of 200 GB:
YAML
steps :
- name : 'gcr.io/cloud-builders/docker'
args : [ 'build' , '-t' , 'gcr.io/myproject/myimage' , '.' ]
options :
diskSizeGb : '200'
JSON
{
"steps" : [
{
"name" : "gcr.io/cloud-builders/docker" ,
"args" : [
"build" ,
"-t" ,
"gcr.io/myproject/myimage" ,
"."
]
}
],
"options" : {
"diskSizeGb" : ' 200 '
}
}
logStreamingOption :
Use this option to specify if you want to stream build logs to
Cloud Storage. By default, Cloud Build collects build logs on
build completion; this option specifies if you want to stream build logs in real
time through the build process. The following snippet specifies that build logs
are streamed to Cloud Storage:
YAML
steps :
- name : 'gcr.io/cloud-builders/go'
args : [ 'install' , '.' ]
options :
logStreamingOption : STREAM_ON
JSON
{
"steps" : [
{
"name" : "gcr.io/cloud-builders/go" ,
"args" : [
"install" ,
"."
]
}
],
"options" : {
"logStreamingOption" : "STREAM_ON"
}
}
logging :
Use this option to specify if you want to store logs in Cloud Logging
or Cloud Storage. If you don't set this option, Cloud Build
stores the logs in both Cloud Logging and Cloud Storage. You can
set the logging option to GCS_ONLY to store the logs only in
Cloud Storage. The following snippet specifies that the logs are stored in
Cloud Storage:
YAML
steps :
- name : 'gcr.io/cloud-builders/docker'
args : [ 'build' , '-t' , 'gcr.io/myproject/myimage' , '.' ]
options :
logging : GCS_ONLY
JSON
{
"steps" : [
{
"name" : "gcr.io/cloud-builders/docker" ,
"args" : [
"build" ,
"-t" ,
"gcr.io/myproject/myimage" ,
"."
]
}
],
"options" : {
"logging" : "GCS_ONLY"
}
}
defaultLogsBucketBehavior :
The defaultLogsBucketBehavior option lets you configure Cloud Build to create a default logs bucket within your own project in the same region as your build. For more information, see Store build logs in a user-owned and regionalized bucket .
The following build config sets the defaultLogsBucketBehavior field to the value REGIONAL_USER_OWNED_BUCKET :
YAML
steps :
- name : 'gcr.io/cloud-builders/docker'
args : [ 'build' , '-t' , 'us-central1-docker.pkg.dev/myproject/myrepo/myimage' , '.' ]
options :
defaultLogsBucketBehavior : REGIONAL_USER_OWNED_BUCKET
JSON
{
"steps" : [
{
"name" : "gcr.io/cloud-builders/docker" ,
"args" : [
"build" ,
"-t" ,
"us-central1-docker.pkg.dev/myproject/myrepo/myimage" ,
"."
]
}
],
"options" : {
"defaultLogsBucketBehavior" : "REGIONAL_USER_OWNED_BUCKET"
}
}
dynamicSubstitutions :
Use this option to explicitly enable or disable
bash parameter expansion
in substitutions. If your build is invoked by a trigger, the
dynamicSubstitutions field is always set to true and does not need to be
specified in your build config file. If your build is invoked manually, you must
set the dynamicSubstitutions field to true for bash parameter expansions to
be interpreted when running your build.
automapSubstitutions :
Automatically map all substitutions to environment variables which will be
available throughout the entire build. For examples, see
Substitute variable values .
substitutionOption :
You'll set this option along with the substitutions field below to specify the
behavior when there is an error in the substitution
checks .
pool :
Set the value of this field to the resource name of the private pool to run
the build. For instructions on running a build on a private pool, see
Running builds in a private pool .
requestedVerifyOption :
Set the value of requestedVerifyOption to VERIFIED to enable and verify the
generation of
attestations and
provenance metadata for
your build. Once set, your builds will only be marked SUCCESS
if attestations and provenance are generated.
substitutions
Use substitutions in your build config file to substitute specific variables at
build time. Substitutions are helpful for variables whose value isn't known
until build time, or to re-use an existing build request with different variable
values. By default, the build returns an error if there's a missing substitution
variable or a missing substitution. However, you can use the ALLOW_LOOSE option
to skip this check.
The following snippet uses substitutions to print "hello world." The
ALLOW_LOOSE substitution option is set, which means the build will not return
an error if there's a missing substitution variable or a missing substitution.
YAML
steps :
- name : 'ubuntu'
args : [ 'echo' , 'hello ${_SUB_VALUE}' ]
substitutions :
_SUB_VALUE : world
options :
substitution_option : 'ALLOW_LOOSE'
JSON
{
"steps" : [
{
"name" : "ubuntu" ,
"args" : [
"echo" ,
"hello ${_SUB_VALUE}"
]
}
],
"substitutions" : {
"_SUB_VALUE" : "world"
},
"options" : {
"substitution_option" : "ALLOW_LOOSE"
}
}
Note: If your build is invoked by a trigger, the ALLOW_LOOSE option is set by
default. In this case, your build won't return an error if there is a
missing substitution variable or a missing substitution. You cannot override
the ALLOW_LOOSE option for builds invoked by triggers.
For additional instructions on using substitutions , see Substituting variable
values .
tags
Use the tags field to organize your builds into groups and to filter your
builds . The
following config sets two tags named mytag1 and mytag2 :
YAML
steps :
- name : 'gcr.io/cloud-builders/docker'
...
- name : 'ubuntu'
...
tags : [ 'mytag1' , 'mytag2' ]
JSON
{
"steps" : [
{
"name" : "gcr.io/cloud-builders/docker"
},
{
"name" : "ubuntu"
}
],
"tags" : [
"mytag1" ,
"mytag2"
]
}
Note: The tags field is different from the --tag flag on the
gcloud builds submit command, which causes Cloud Build
to build using a Dockerfile instead of a build config file. For more
information, see --tag .
availableSecrets
Use this field to use a secret from Secret Manager with Cloud Build.
For more information, see Using secrets .
secrets
Secret pairs a set of secret environment variables containing encrypted
values with the Cloud KMS key to use to decrypt the value.
Note: Use availableSecrets instead of using secrets . For more information, see
Using secrets and
Using encrypted credentials .
serviceAccount
Use this field to specify the IAM service account to use at
build time. For more information, see
Configuring user-specified service accounts .
You can't specify the
legacy Cloud Build service account
in this field.
images
The images field in the build config file specifies one or more Linux Docker
images to be pushed by Cloud Build to Artifact Registry. You may have a
build that performs tasks without producing any Linux Docker images, but if you
build images and don't push them to the registry, the images are discarded on
build completion. If a specified image is not produced during the build, the
build will fail. For more information on storing images, see
Store artifacts in Artifact Registry .
The following build config sets the images field to store the built image:
YAML
steps :
- name : 'gcr.io/cloud-builders/docker'
args : [ 'build' , '-t' , 'gcr.io/myproject/myimage' , '.' ]
images : [ 'gcr.io/myproject/myimage' ]
JSON
{
"steps" : [
{
"name" : "gcr.io/cloud-builders/docker" ,
"args" : [
"build" ,
"-t" ,
"gcr.io/myproject/myimage" ,
"."
]
}
],
"images" : [
"gcr.io/myproject/myimage"
]
}
artifacts
The artifacts field specifies one or more
artifacts to be stored in Cloud Storage or
Artifact Registry upon successful completion of all build steps.
objects
Within the artifacts field, the object field specifies one or more artifacts
to be stored in Cloud Storage.
For more information, see Store build artifacts in Cloud Storage .
The following build config sets the artifacts field to store the built Go
package in gs://mybucket/ :
YAML
steps :
- name : 'gcr.io/cloud-builders/go'
args : [ 'build' , 'my-package' ]
artifacts :
objects :
location : 'gs://mybucket/'
paths : [ 'my-package' ]
JSON
{
"steps" : [
{
"name" : "gcr.io/cloud-builders/go" ,
"args" : [
"build" ,
"my-package"
]
}
],
"artifacts" : {
"objects" : {
"location" : "gs://mybucket/" ,
"paths" : [
"my-package"
]
}
}
}
goModules
The goModules field lets you upload non-container Go modules to Go
repositories in Artifact Registry. For more information, see
Build and test Go applications .
The repository_location field specifies the Artifact Registry repository
to store your packages. The module_path field specifies the local directory
that contains the Go module to upload. This directory must contain a
go.mod file.
We recommend using an absolute path for the value of module_path . You can use
. to refer to the current working directory, but the field cannot be omitted
or left empty. For more instructions on using module_path , see
Build and test Go applications .
The following build config sets the goModules field to upload the
module in example.com/myapp to the Artifact Registry repository
quickstart-go-repo :
YAML
artifacts :
goModules :
- repositoryName : 'quickstart-go-repo'
repositoryLocation : 'us-central1'
repositoryProjectId : 'argo-local-myname'
sourcePath : '/workspace/myapp'
modulePath : 'example.com/myapp'
moduleVersion : 'v1.0.0'
JSON
{
"artifacts" : {
"goModules" : [
{
"repositoryName" : "quickstart-go-repo" ,
"repositoryLocation" : "us-central1" ,
"repositoryProjectId" : "argo-local-myname" ,
"sourcePath" : "/workspace/myapp" ,
"modulePath" : "example.com/myapp" ,
"moduleVersion" : "v1.0.0"
}
]
}
}
mavenArtifacts
The mavenArtifacts field lets you upload non-container Java artifacts to Maven
repositories in Artifact Registry. For more information, see
Build and test Java applications .
Example: Upload all Maven files in a folder to an Artifact Registry repository
The following build config sets the mavenArtifacts field to upload all files in the folder /workspace/target/com/mycompany/app/my-app-1/1.0.0/ to the Artifact Registry repository https://us-central1-maven.pkg.dev/my-project-id/my-java-repo :
YAML
artifacts :
mavenArtifacts :
- repository : 'https://us-central1-maven.pkg.dev/my-project-id/my-java-repo'
deployFolder : '/workspace/target'
artifactId : 'my-app-1'
groupId : 'com.mycompany.app'
version : '1.0.0'
JSON
{
"artifacts" : {
"mavenArtifacts" : [
{
"repository" : "https://us-central1-maven.pkg.dev/my-project-id/my-java-repo" ,
"deployFolder" : "/workspace/target" ,
"artifactId" : "my-app-1" ,
"groupId" : "com.mycompany.app" ,
"version" : "1.0.0"
}
]
}
}
To deploy your Maven files to /workspace/target/com/mycompany/app/my-app-1/1.0.0/ , add the -DaltDeploymentRepository=local::default::file:./workspace/target option to your Maven deploy command.
Example: Upload a packaged Maven file to an Artifact Registry repository
The following build config sets the mavenArtifacts field to upload the packaged file my-app-1.0-SNAPSHOT.jar to the Artifact Registry repository https://us-central1-maven.pkg.dev/my-project-id/my-java-repo :
YAML
artifacts :
mavenArtifacts :
- repository : 'https://us-central1-maven.pkg.dev/my-project-id/my-java-repo'
path : '/workspace/my-app/target/my-app-1.0-SNAPSHOT.jar'
artifactId : 'my-app-1'
groupId : 'com.mycompany.app'
version : '1.0.0'
JSON
{
"artifacts" : {
"mavenArtifacts" : [
{
"repository" : "https://us-central1-maven.pkg.dev/my-project-id/my-java-repo" ,
"path" : "/workspace/my-app/target/my-app-1.0-SNAPSHOT.jar" ,
"artifactId" : "my-app-1" ,
"groupId" : "com.mycompany.app" ,
"version" : "1.0.0"
}
]
}
}
pythonPackages
The pythonPackages field lets you upload Python packages to Artifact Registry.
For more information, see
Build and test Python applications .
The following build config sets the pythonPackages field to upload the Python package dist/my-pkg.whl to the Artifact Registry repository https://us-east1-python.pkg.dev/my-project/my-repo :
YAML
artifacts :
pythonPackages :
- repository : 'https://us-east1-python.pkg.dev/my-project/my-repo'
paths : [ 'dist/my-pkg.whl' ]
JSON
{
"artifacts" : {
"pythonPackages" : [
{
"repository" : "https://us-east1-python.pkg.dev/my-project/my-repo" ,
"paths" : [ "dist/my-pkg.whl" ]
}
]
}
}
npmPackages
Use the npmPackages field to configure Cloud Build to upload your
built npm packages to supported repositories in Artifact Registry. You must
provide values for repository and packagePath .
The repository field specifies the Artifact Registry repository to store your
packages. The packagePath field specifies the local directory that contains
the npm package to upload. This directory must contain a package.json file.
We recommend using an absolute path for the value of packagePath . You can use
. to refer to the current working directory, but the field cannot be omitted
or left empty. For more instructions on using npmPackages , see Build and test Node.js applications .
The following build config sets the npmPackages field to upload the npm
package in the /workspace/my-pkg directory to the Artifact Registry repository
https://us-east1-npm.pkg.dev/my-project/my-repo .
YAML
artifacts :
npmPackages :
- repository : 'https://us-east1-npm.pkg.dev/my-project/my-repo'
packagePath : '/workspace/my-pkg'
JSON
{
"artifacts" : {
"npmPackages" : [
{
"repository" : "https://us-east1-npm.pkg.dev/my-project/my-repo" ,
"packagePath" : "/workspace/my-pkg"
}
]
}
}
oci
Use the oci field to configure Cloud Build to upload your
OCI images to supported
repositories in Artifact Registry. You must provide values for file and
registryPath .
The registryPath field specifies the Artifact Registry repository to store your
images. The file field specifies the local directory that contains
the OCI image to upload. This directory must contain an OCI image file.
We recommend using an absolute path for the value of file . You can use
. to refer to the current working directory, but the field cannot be omitted
or left empty.
The following build config sets the oci field to upload the OCI image in the
/.pack/layout-repo/my-app directory to the Artifact Registry repository
https://us-east1-docker.pkg.dev/my-project/my-repo .
YAML
artifacts :
oci :
- file : '/.pack/layout-repo/my-app'
registryPath : 'https://us-east1-docker.pkg.dev/my-project/my-repo'
tags : [ "primary_image" ]
JSON
{
"artifacts" : {
"oci" : [
{
"file" : "/.pack/layout-repo/my-app" ,
"registryPath" : "https://us-east1-docker.pkg.dev/my-project/my-repo" ,
"tags" : [ "primary_image" ]
}
]
}
}
Note: You can also use the oci field to upload multi-architecture images. For
more information, see Multi-platform builds
in the Docker documentation.
genericArtifacts
Use the genericArtifacts field to upload files with unspecified types
as a new package within a
generic repository in
Artifact Registry.
This configuration is helpful if you want to upload generic files such as text
files or binaries, or if you want to upload a package that isn't a supported
Artifact Registry repository type.
The folder field specifies the folder that contains the files to
upload to your generic repository. The registryPath field is the address of
the Artifact Registry generic repository that receives the files from your
folder.
The following build config sets the genericArtifacts field to upload the
/workspace/binaryOut folder to the Artifact Registry
generic repository projects/my-project/locations/us-east1/repositories/my-repo/packages/my-pkg/versions/my-version .
YAML
artifacts :
genericArtifacts :
- folder : '/workspace/binaryOut'
registryPath : 'projects/my-project/locations/us-east1/repositories/my-repo/packages/my-pkg/versions/my-version'
JSON
{
"artifacts" : {
"genericArtifacts" : [
{
"folder" : "/workspace/binaryOut" ,
"registryPath" : "projects/my-project/locations/us-east1/repositories/my-repo/packages/my-pkg/versions/my-version"
}
]
}
}
You can configure a generic artifact as a build dependency so that
Cloud Build downloads the dependency before the build begins.
For more information, see
Specify a generic artifact as a dependency .
Using Dockerfiles
If you're executing Docker builds in Cloud Build using the
gcloud CLI or
build triggers , then you
can use a Dockerfile
without a separate build config file. If you want to make more adjustments to
your Docker builds, then you can provide a build config file in addition to the
Dockerfile . For instructions on how to build a Docker image using a
Dockerfile , see Quickstart: Build .
Cloud Build network
When Cloud Build runs each build step, it attaches the step's
container to a local Docker network named cloudbuild . The cloudbuild
network hosts Application Default Credentials
(ADC) that Google Cloud services can use to automatically find your
credentials. If you're running nested Docker containers and want to expose
ADC to an underlying container or using gcloud in a docker step,
use the --network flag in your docker build step:
YAML
steps :
- name : 'gcr.io/cloud-builders/docker'
args : [ 'build' , '--network=cloudbuild' , '.' ]
JSON
{
"steps" : [
{
"name" : "gcr.io/cloud-builders/docker" ,
"args" : [
"build" ,
"--network=cloudbuild" ,
"."
]
}
]
}
What's next
Learn how to create a basic build config
file to
configure builds for Cloud Build.
Read Starting a Build
Manually for
instructions on how to run builds in Cloud Build.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
