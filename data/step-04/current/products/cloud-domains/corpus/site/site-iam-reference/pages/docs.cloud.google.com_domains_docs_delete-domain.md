---
title: "Delete a registered domain \_|\_ Cloud Domains \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/domains/docs/delete-domain
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/domains/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/domains/docs/delete-domain
  title: "Delete a registered domain \_|\_ Cloud Domains \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud Domains
Guides
Send feedback
Delete a registered domain
Stay organized with collections
Save and categorize content based on your preferences.
Note: On September 7, 2023 Squarespace acquired all domain registrations and related
customer accounts from Google Domains. For more information about how this change affects
Cloud Domains, see
Cloud Domains feature deprecations ,
Renew an expired domain registration , and Squarespace purchase of Google Domains FAQ .
This page describes how to delete a registered domain in
Cloud Domains.
Before you delete a project with active domain registrations, transfer your
registered domains from Cloud Domains to another registrar to
avoid losing access.
Caution: You can't delete a domain registration resource in Cloud Domains until it has expired or transferred out. However, you can turn off automatic renewal for a domain name or transfer a registered domain to another registrar and then delete the domain registration resource in Cloud Domains.
To delete a registered domain, complete the following steps.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following IAM roles.
Permissions
domains.registrations.delete
Roles
roles/domains.admin
Console
In the Google Cloud console, go to the Cloud Domains page.
Go to Cloud Domains
On the Registrations page, select the domain name that you
want to delete.
Next to the domain name that you want to delete, click
more_vert More .
To remove the domain, click
delete Delete .
gcloud
Use the
gcloud domains registrations delete command :
gcloud domains registrations delete DOMAIN_NAME
Replace DOMAIN_NAME with the name of the registered
domain that you want to delete—for example, example.app .
API
Use the
registrations.delete method
with an empty request body:
DELETE https://domains.googleapis.com/v1/projects/ PROJECT_ID /locations/global/registrations/ DOMAIN_NAME
Replace the following:
PROJECT_ID : the name of your project
DOMAIN_NAME : the name of the domain that you want to
delete
What's next
To view a list of your registered domains, see
List registered domains .
To edit registration settings for a domain in Cloud Domains,
see Edit registration settings .
To access API information, see the
Cloud Domains API .
To find solutions for common issues that you might encounter when using
Cloud Domains, see Troubleshooting .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
