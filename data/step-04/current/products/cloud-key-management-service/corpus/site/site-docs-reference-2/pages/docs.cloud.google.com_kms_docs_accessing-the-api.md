---
title: "Accessing the API \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/accessing-the-api
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/accessing-the-api
  title: "Accessing the API \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud KMS
Guides
Send feedback
Accessing the API
Stay organized with collections
Save and categorize content based on your preferences.
We recommend that you access Cloud Key Management Service via our high performance
Google API Client Libraries . These libraries,
which connect to the Cloud KMS gRPC API, are provided in several
popular programming languages.
You may also access Cloud KMS via our REST
API . Thus, any language that supports sending HTTP
requests can access the API. However, most users will prefer a more idiomatic
client library.
There is also a web-based interface for
Cloud KMS on the Google Cloud console , which allows for
key management operations. Encrypt and decrypt operations cannot be performed
from the web interface.
We want to make accessing Cloud KMS a joy from every language and
platform, and work on that will be ongoing. If we're falling short in any way,
let us know .
Platforms
How clients access the API may vary a bit depending on the platform on which the
code is running, particularly with respect to authentication.
Google Application Default Credentials abstract away many of
the differences, but there are still some things to keep in mind. For more
information about authentication, see the
authentication overview .
Compute Engine and Google Kubernetes Engine
Software running on Compute Engine , including Google Kubernetes Engine nodes,
typically authenticates using credentials automatically provisioned into the
environment using the attached service account . The
same is true for Cloud KMS. Ensure that when you create an
instance, you give it access to the https://www.googleapis.com/auth/cloudkms
(preferred because it supports the principle of least privilege) or
https://www.googleapis.com/auth/cloud-platform OAuth scope.
For example:
gcloud compute instances create "instance-1" \
--zone "us-east1-b" \
--scopes "https://www.googleapis.com/auth/cloudkms"
For more information, refer to the
Compute Engine documentation or the
GKE documentation .
App Engine
To use Cloud KMS with App Engine:
Give your App Engine service account
( PROJECT_ID @appspot.gserviceaccount.com )
Identity and Access Management permissions to manage and/or use your keys.
Use the Application Default Credentials , and specify the
scope https://www.googleapis.com/auth/cloudkms . You can also specify the
scope https://www.googleapis.com/auth/cloud-platform , but it includes
broader scopes than just Cloud KMS.
For more information, refer to
Accessing the API and
Controlling access
in the App Engine documentation.
Client authentication
If your application needs to authenticate your users directly, you can obtain
and use credentials on their behalf. To learn more, see
User accounts .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
