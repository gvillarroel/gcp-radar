---
title: "Storing Templates on an External Host \_|\_ Cloud Deployment Manager \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/deployment-manager/docs/fundamentals
source_metadata:
  url: https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally
  title: "Storing Templates on an External Host \_|\_ Cloud Deployment Manager \_\
    |\_ Google Cloud Documentation"
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
Storing Templates on an External Host
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to use external templates in your deployment
that are hosted somewhere on the Internet instead of your local machine.
You can store templates on an external host anywhere on the Internet and
call these templates from within your configuration. Hosting templates
externally has certain advantages over storing your templates locally:
Easily share templates with others
Ensure that configurations are always using the most up-to-date template
Automatically manage relevant imports and schemas
Deployment Manager always fetches the latest version of external templates each
time you redeploy your configuration. If you maintain your templates, then your
deployments will always be up to date as well. Deployment Manager will also
handle importing other dependent templates for you if they are referenced in the
external template.
Example
This configuration imports an external template:
resources :
- name : my - frontend
type : gs : //my-frontend-templates/webserver-frontend.jinja
Before you begin
If you want to use the command-line examples in this guide, install the `gcloud` command-line tool .
If you want to use the API examples in this guide, set up API access .
Read the
Configuration documentation.
Read the Templates documentation.
Hosting external templates
You can host external templates in Google Cloud Storage or in a
publicly-accessible location, such as GitHub. As long as there is a URL to the
file and you have access to the templates, Deployment Manager will be able to
download it. If the file uses a schema to import other templates, you must
also host those templates in the same base URL.
On Google Cloud Storage
To host templates in Google Cloud Storage:
Create a bucket for
the templates, or use an existing bucket.
Upload your templates
and related template files, like schemas, to the bucket.
If you plan to use the templates from a different Google Cloud Platform
project than the project the templates belong to, set access controls
to allow that access.
Hosting templates in Google Cloud Storage lets you control who has access
to the templates because you can set access control options on the respective
Cloud Storage bucket or the specific template.
In contrast, hosting your templates on other publicly-accessible URLs requires
that you make the templates widely available.
On a publicly-accessible URL
Alternatively, you can host external templates outside of Google Cloud Storage,
so long as the templates are publicly-accessible. For example, you can
host templates on GitHub and reference the templates using the GitHub URL.
For GitHub specifically, you need to provide the raw GitHub URL so that
Deployment Manager gets the template instead of the HTML GitHub page. For
example, a raw URL looks like this:
https://raw.githubusercontent.com/GoogleCloudPlatform/deploymentmanager-samples/master/examples/v2/single_vm/jinja/vm_template.jinja
Calling an external template
Call an external template like you would a local template, but provide the
full URL to the template file as the type. For example:
resources :
- name : my - salt - cluster
type : gs : //v2/saltstack/salt_cluster.jinja
For a GitHub URL:
resources :
- name : my - salt - cluster
type : https : //raw.githubusercontent.com/GoogleCloudPlatform/deploymentmanager-samples/master/examples/v2/single_vm/vm_template.jinja
If an external template imports other templates or if there is an accompanying
schema, you can store the related files in the same directory or relative
subdirectory and include these other templates with a relative URL. Deployment
Manager will look for these other templates using the relative path based on the
base URL.
For example, if your configuration looked like this:
resources :
- name : my - salt - cluster
type : gs : //v2/saltstack/salt_cluster.jinja
And there was a schema file named salt_cluster.jinja.schema that imported
these files:
imports:
- path: minion.py
- path: master.py
- path: examples/source/example.py
Deployment Manager will download and import all of the necessary files for the
template automatically.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
