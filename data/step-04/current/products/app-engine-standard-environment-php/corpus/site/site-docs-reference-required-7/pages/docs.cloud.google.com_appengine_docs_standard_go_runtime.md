---
title: "Go runtime environment \_|\_ App Engine standard environment \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/go/runtime
knowledge_key: corpus
source_id: site-docs-reference-required-7
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/php/services/access
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/go/runtime
  title: "Go runtime environment \_|\_ App Engine standard environment \_|\_ Google\
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
Standard environment
Guides
Send feedback
Go runtime environment
Stay organized with collections
Save and categorize content based on your preferences.
The Go runtime is the software stack responsible for installing
your web service's code and its dependencies and running your service.
The Go runtime for App Engine in the standard environment is
declared in the app.yaml
file:
runtime : go VERSION
Where VERSION is the Go MAJOR and MINOR version numbers. For
example, to use the latest Go version, Go 1.26, specify
126 .
For other supported Go versions, and the corresponding Ubuntu version for your
Go version, see the Runtime support schedule .
Go version
The latest supported Go version is 1.26. The Go runtime uses the latest stable release of the version that
is specified in your app.yaml file. App Engine automatically updates to
new patch revisions, but won't automatically update the major version.
For example, your application might be deployed at the minor version Go 1.13.1
and be automatically updated to version 1.13.2 at a later deployment, but it
won't be automatically updated to the major version Go 1.14.
Dependencies
For more information on declaring and managing dependencies, see Specifying dependencies .
Environment variables
The following environment variables are set by the runtime:
Environment variable
Description
GAE_APPLICATION
The ID of your App Engine application.
This ID is prefixed with ' region code ~'
such as 'e~' for applications deployed in Europe.
GAE_DEPLOYMENT_ID
The ID of the current deployment.
GAE_ENV
The App Engine environment. Set to standard .
GAE_INSTANCE
The ID of the instance on which your service is currently running.
GAE_MEMORY_MB
The amount of memory available to the application process, in MB.
GAE_RUNTIME
The runtime specified in your app.yaml file.
GAE_SERVICE
The service name specified in your app.yaml file. If no service name is specified, it is set to default .
GAE_VERSION
The current version label of your service.
GOOGLE_CLOUD_PROJECT
The Google Cloud project ID associated with your application.
PORT
The port that receives HTTP requests.
NODE_ENV (Only available in the Node.js runtime)
Set to production when your service is deployed.
You can
define additional environment variables in your app.yaml file ,
but the above values cannot be overridden, except for NODE_ENV .
HTTPS and forwarding proxies
App Engine terminates HTTPS connections at the load balancer and
forwards requests to your application. Some applications need to determine
the original request IP and protocol. The user's IP address is available in
the standard X-Forwarded-For header. Applications that require this
information should configure their web framework to trust the proxy.
Filesystem
The runtime includes a writable /tmp directory, with all other directories
having read-only access. Writing to /tmp takes up system memory. For more
information, see the TempDir
and TempFile
documentation.
Metadata server
Each instance of your application can use the App Engine metadata server
to query information about the instance and your project.
Note: Custom metadata is not supported in the standard environment.
You can access the metadata server through the following endpoints:
http://metadata
http://metadata.google.internal
Requests sent to the metadata server must include the request header
Metadata-Flavor: Google . This header indicates that the request was sent with
the intention of retrieving metadata values.
The following table lists the endpoints where you can make HTTP requests for
specific metadata:
Metadata endpoint
Description
/computeMetadata/v1/project/numeric-project-id
The project number assigned to your project.
/computeMetadata/v1/project/project-id
The project ID assigned to your project.
/computeMetadata/v1/instance/region
The region the instance is running in.
/computeMetadata/v1/instance/service-accounts/default/aliases
/computeMetadata/v1/instance/service-accounts/default/email
The default service account email assigned to your project.
/computeMetadata/v1/instance/service-accounts/default/
Lists all the default service accounts for your project.
/computeMetadata/v1/instance/service-accounts/default/scopes
Lists all the supported scopes for the default service accounts.
/computeMetadata/v1/instance/service-accounts/default/token
Returns the auth token that can be used to authenticate your application to other Google Cloud APIs.
For example, to retrieve your project ID, send a request to
http://metadata.google.internal/computeMetadata/v1/project/project-id .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
