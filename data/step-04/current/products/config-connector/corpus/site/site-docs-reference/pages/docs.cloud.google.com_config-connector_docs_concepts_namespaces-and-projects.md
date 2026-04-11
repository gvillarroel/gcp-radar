---
title: "Namespaces and Google Cloud projects \_|\_ Config Connector \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/concepts/resources
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects
  title: "Namespaces and Google Cloud projects \_|\_ Config Connector \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Config Connector
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Namespaces and Google Cloud projects
Config Connector creates Google Cloud resources
using Kubernetes configuration. These resources are organized in
Kubernetes Namespaces .
How Config Connector uses Namespaces
Config Connector can use the annotations on the resource's Namespace to
determine what project, folder, or organization to create the resources in. The
Namespace 's annotation will only be applied if the resource configuration does
not already specify where to create the resource. For more information, see
Organizing resources with projects and folders
For example, if you want to create a Cloud SQL Instance with a name of
mySQL in your project with a project ID of myProject , then run this command to annotate your namespace:
kubectl annotate namespace \
NAMESPACE_NAME cnrm.cloud.google.com/project-id="myProject"
Replace NAMESPACE_NAME with your Namespace name.
Then, create a Config Connector SQLInstance with a name of mySQL in
your namespace. Config Connector creates a corresponding Cloud SQL instance in your
specified Google Cloud project, based on the configured namespace annotation.
Using Namespaces with projects, folders, and organizations
Google Cloud supports organizing resources at the
Project, Folder, and Organization
levels. You can add Annotations to your Config Connector Namespaces to map
resources to a Project , a Folder or
Organization .
To learn more, see
Organizing resources with projects, folders, or organizations .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
