---
title: "Using deployment-specific environment variables \_|\_ Cloud Deployment Manager\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/use-environment-variables
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/deployment-manager/docs/fundamentals
source_metadata:
  url: https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/use-environment-variables
  title: "Using deployment-specific environment variables \_|\_ Cloud Deployment Manager\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Deployment Manager will reach end of support on March 31, 2026 . If you currently use Deployment Manager, please migrate to Infrastructure Manager or an alternative deployment technology by March 31, 2026 to ensure your services continue without interruption.
For more information on the deprecation and shutdown, see Deployment Manager deprecation .
Home
Documentation
Infrastructure as code
Cloud Deployment Manager
Guides
Send feedback
Using deployment-specific environment variables
Stay organized with collections
Save and categorize content based on your preferences.
For each of your deployments, Deployment Manager creates pre-defined
environment variables that contain information inferred from your deployment.
Use these environment variables in your Python or Jinja2 templates to get
information about your project or deployment.
Before you begin
If you want to use the command-line examples in this guide, install the `gcloud` command-line tool .
If you want to use the API examples in this guide, set up API access .
Understand how to
create a basic template .
Understand how to create a configuration
Available environment variables
The following environment variables are automatically set by Deployment Manager.
They are replaced everywhere you use them in your templates. For example,
use the project_number variable to add the project number to the name of a
service account.
Environment variable
Value
deployment
The name of the deployment.
name
The name declared in the configuration that is using the
template. This can be useful if you want the name you declare in the
configuration to be the name of the resource in the underlying
templates.
project
The project ID for this deployment.
project_number
The project number for this deployment.
current_time
The UTC timestamp when expansion started for the deployment.
type
The resource type declared in the top-level configuration.
username
The current Deployment Manager user.
Using an environment variable
Use the following syntax to add an environment variable to your templates:
{{ env [ "deployment" ] }} # Jinja
context.env["deployment"] # Python
In your template, use the variables as in these examples:
Jinja
- type: compute.v1.instance
name: vm- {{ env [ "deployment" ] }}
properties:
machineType: zones/us-central1-a/machineTypes/f1-micro
serviceAccounts:
- email: {{ env [ 'project_number' ] }} -compute@ developer.gserviceaccount.com
scopes:
- ...
Python
def GenerateConfig ( context ):
resources = []
resources . append ({
'name' : 'vm-' + context . env [ "deployment" ] ,
'type' : 'compute.v1.instance' ,
'properties' : {
'serviceAccounts' : [{
'email' : context . env [ 'project_number' ] + '-compute@developer.gserviceaccount.com' ,
'scopes' : [ ... ]
}]
}
... }]
return { 'resources' : resources }
What's next
Add a template permanently to your project as a composite type .
Host templates externally to share with others.
Add schemas
to ensure users interact with your templates correctly.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
