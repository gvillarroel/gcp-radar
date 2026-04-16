---
title: "Specify dependencies \_|\_ App Engine flexible environment \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/appengine/docs/flexible/go/specifying-dependencies
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/configuring-your-app-with-app-yaml
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/flexible/go/specifying-dependencies
  title: "Specify dependencies \_|\_ App Engine flexible environment \_|\_ Google\
    \ Cloud Documentation"
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
Specify dependencies
Stay organized with collections
Save and categorize content based on your preferences.
You can use any linux/amd64-compatible package with instances running in the
App Engine flexible environment. These instructions assume you are using the go get command to
get the packages directly from supported repositories, such as GitHub,
Bitbucket, LaunchPad, and others.
Starting in Go version 1.22 and later:
You can't use go get outside of a module in the legacy GOPATH
mode ( GO111MODULE = off ). For more information, see Tools .
Go recommends that you use a go.mod file for managing dependencies. To install
dependencies during deployment, include a go.mod file in the same folder as
the app.yaml file. For more information about Go versions, and managing
dependencies for vendor directories, see GOPATH and Modules .
Declare and manage dependencies
Go applications are organized into packages that mirror the directory structure
of your source files. When you use an import statement, the relative paths in
the import are interpreted. Valid import paths are fully-qualified
paths that are relative to the src subdirectory of all the directories that
are specified in your GOPATH .
For example, consider an example app where you define the following:
GOPATH module:
export GOPATH = / home / fred / go .
src1-1.go file:
import "foo/bar"
The gcloud CLI looks for the foo/bar package in the
/home/fred/go/src/foo/bar location when you run or deploy the app.
If you include your package sources in GOPATH , you must be careful not to
place your source code within your app's directory where the app.yaml
file is located. If that happens, subtle problems can occur because a package
might get loaded twice, once for the path relative to a service's directory, and
once again for the fully-qualified path. To avoid problems, the gcloud CLI
will scan both your app's directory and GOPATH , and then report an error
if a conflict is detected.
For best results, we recommend the following:
Create a separate directory in your app's directory for each service.
Each service's directory should contain the service's app.yaml file and one
or more .go files.
Don't include any subdirectories in a service's directory.
Your GOPATH should specify a directory that is outside your app's
directory and contain all the dependencies that your app imports.
Download required packages
You can use the go get command to download packages. For example, to download
packagename from the GitHub my_repo :
go get github . com / my_repo / packagename
Deploy to App Engine
To deploy your application to App Engine, you must deploy
the libraries that are required by your app along with your application code.
For complete details, see
Testing and deploying your application .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
