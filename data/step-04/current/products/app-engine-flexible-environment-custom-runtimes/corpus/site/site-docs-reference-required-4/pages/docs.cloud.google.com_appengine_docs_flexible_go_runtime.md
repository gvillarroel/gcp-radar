---
title: "The Go runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/flexible/go/runtime
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/flexible/go/runtime
  title: "The Go runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Flexible environment
Guides
Send feedback
The Go runtime
Stay organized with collections
Save and categorize content based on your preferences.
Note: Some Go runtimes have reached end of support . You cannot re-deploy
versions that use runtimes after their end of support date. We recommend that
you upgrade your app
to use the latest version of Go.
The Go runtime is the software stack responsible for
installing your application code and dependencies, and then running that
application in the flexible environment.
Go versions
Go 1.26 uses
buildpacks . For the full list of supported
Go versions, and their corresponding Ubuntu
version, see the Runtime support schedule .
To use a supported
Go version, you must:
Install gcloud CLI version 420.0.0 or later . You can update
your CLI tooling by running the gcloud components update
command. To view your installed version, you can run the gcloud version
command.
Go recommends that you use a go.mod file for managing dependencies.
To install dependencies during deployment, include a go.mod file in the same
folder as the app.yaml file.
For example, the folder structure of your app with go.mod must represent:
<application-root>/
--> app.yaml
--> go.mod
--> Other source files used in your application.
Include the runtime_config and operating_system settings in your
app.yaml file
to specify an operating system.
Optionally, you can specify a runtime version by including the runtime_version
setting in your app.yaml . By default, the latest Go version is used if
the runtime_version setting is not specified.
Examples
To specify Go 1.26 on Ubuntu 24:
runtime : go
env : flex
runtime_config :
operating_system : "ubuntu24"
runtime_version : "1.26"
To specify the latest supported Go version on Ubuntu 24:
runtime : go
env : flex
runtime_config :
operating_system : "ubuntu24"
Your app uses the latest stable release of the version that is specified in your
app.yaml file. App Engine automatically updates to new patch revisions, but
it won't automatically update the major version.
For example, your application might be deployed at Go 1.18.10, and later it might be
automatically updated to Go 1.18.11, but it won't be automatically updated to
the major version Go 1.19.
Choosing Go 1.26 in your app.yaml file results in
the latest patch version of Go 1.26 available.
runtime : go
env : flex
runtime_config :
operating_system : "ubuntu24"
runtime_version : "1.26"
See the app.yaml reference for more information.
Previous runtime versions
Warning: Go version 1.15 and earlier have reached end of support.
App Engine blocks you from deploying your applications using runtimes that have
reached end of support. We recommend that you migrate your app to use a supported version
of Go or use a custom runtime .
To use Go version 1.15 and earlier , specify a version in
runtime setting using the go1.x format in your
app.yaml file. For example:
runtime : go1 .14
env : flex
If no version is specified, the default version of go1.11 will be automatically
selected.
Your app uses the latest stable release of the version that is specified in your
app.yaml file. App Engine automatically updates to new patch revisions, but
it won't automatically update the major version.
For example, your application might be deployed at Go 1.14.10, and later it might be
automatically updated to Go 1.14.11, but it won't be automatically updated to
the major version Go 1.15.
Choosing the go runtime version go1.15 in your app.yaml file results in
the latest version of 1.15 available, for example, 1.15.15.
runtime : go1 .15
env : flex
Support for other Go runtimes
If you need to use a Go version that isn't supported , you can create a
custom runtime and select a
valid base image with the Go version you need.
For Google-supplied base images or
Docker Go base images ,
see Building custom runtimes .
Import packages
Your code compiles when you deploy your app to App Engine. When you
run the deployment command, your app's dependencies are first collected from
your local GOPATH and then they are all sent to the build server. Any missing
dependencies, for example third-party libraries, results in build failures.
To avoid build failures and ensure that all your app's dependencies get deployed
with your code, you should test your app locally before deploying
it .
Extending the runtime
For instructions on how to extend and customize the Go runtime, read the
Go runtime builder on GitHub .
Metadata server
Each instance of your application can use the
Compute Engine metadata server to query information
about the instance, including its host name, external IP address, instance ID,
custom metadata, and service account information. App Engine does not allow you
to set custom metadata for each instance, but you can set
project-wide custom metadata and read it
from your App Engine and Compute Engine instances.
Use the
cloud.google.com/go/compute/metadata
package to access the metadata server.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
