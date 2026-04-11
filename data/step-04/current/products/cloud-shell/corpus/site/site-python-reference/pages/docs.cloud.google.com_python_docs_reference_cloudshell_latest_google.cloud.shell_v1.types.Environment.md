---
title: "Class Environment (1.15.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudshell/latest/google.cloud.shell_v1.types.Environment
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudshell/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudshell/latest/google.cloud.shell_v1.types.Environment
  title: "Class Environment (1.15.0) \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Class Environment (1.15.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.15.0 (latest)
1.14.0
1.13.0
1.12.0
1.11.0
1.10.1
1.9.5
1.8.0
1.7.2
1.6.1
1.5.0
1.4.3
1.3.3
1.2.2
1.1.0
1.0.1
0.2.2
0.1.0
Environment ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
A Cloud Shell environment, which is defined as the
combination of a Docker image specifying what is installed on
the environment and a home directory containing the user's data
that will remain across sessions. Each user has at least an
environment with the ID "default".
Attributes
Name
Description
name
str
Immutable. Full name of this resource, in the format
users/{owner_email}/environments/{environment_id} .
{owner_email} is the email address of the user to whom
this environment belongs, and {environment_id} is the
identifier of this environment. For example,
users/someone@example.com/environments/default .
id
str
Output only. The environment's identifier,
unique among the user's environments.
docker_image
str
Required. Immutable. Full path to the Docker
image used to run this environment, e.g.
"gcr.io/dev-con/cloud-devshell:latest".
state
google.cloud.shell_v1.types.Environment.State
Output only. Current execution state of this
environment.
web_host
str
Output only. Host to which clients can
connect to initiate HTTPS or WSS connections
with the environment.
ssh_username
str
Output only. Username that clients should use
when initiating SSH sessions with the
environment.
ssh_host
str
Output only. Host to which clients can
connect to initiate SSH sessions with the
environment.
ssh_port
int
Output only. Port to which clients can
connect to initiate SSH sessions with the
environment.
public_keys
MutableSequence[str]
Output only. Public keys associated with the
environment. Clients can connect to this
environment via SSH only if they possess a
private key corresponding to at least one of
these public keys. Keys can be added to or
removed from the environment using the
AddPublicKey and RemovePublicKey methods.
Classes
State
State ( value )
Possible execution states for an environment.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
