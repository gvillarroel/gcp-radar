---
title: "Add projects to service perimeters using Terraform \_|\_ VPC Service Controls\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc-service-controls/docs/add-projects-perimeter-terraform
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vpc-service-controls/docs
source_metadata:
  url: https://docs.cloud.google.com/vpc-service-controls/docs/add-projects-perimeter-terraform
  title: "Add projects to service perimeters using Terraform \_|\_ VPC Service Controls\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
VPC Service Controls
Guides
Send feedback
Add projects to service perimeters using Terraform
Stay organized with collections
Save and categorize content based on your preferences.
VPC Service Controls lets you isolate resources of a supported multi-tenant
Google Cloud service to mitigate data exfiltration risks. You can use Terraform
to add a project in a folder to a service perimeter.
To automatically add a folder to a service perimeter, you can use
Cloud Run functions. When the function detects a new project being added to the
folder, it executes the Terraform script to add the new project to the
perimeter. Similarly, the function automatically removes projects from the
perimeter if they are moved out of the folder.
For more information, see Automatically secured folder .
What's next
Overview of a service perimeter
Create a service perimeter
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
