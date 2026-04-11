---
title: "Access control with IAM \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/speech-to-text/docs/iam
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/speech-to-text/docs
source_metadata:
  url: https://docs.cloud.google.com/speech-to-text/docs/iam
  title: "Access control with IAM \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Speech-to-Text
Send feedback
Access control with IAM
Stay organized with collections
Save and categorize content based on your preferences.
Google Cloud offers Identity and Access Management (IAM) , which lets you
give more granular access to specific Google Cloud resources, and prevent
unwanted access to other resources. For information about IAM,
see Identity and Access Management documentation .
This page shows how you can control Cloud Speech-to-Text access and permissions by
using Identity and Access Management (IAM) roles and permissions.
Overview
Cloud Speech-to-Text (STT) provides a set of predefined roles that help
you control access to your Cloud STT resources. You can also create
your own custom roles , if the predefined roles don't provide the
sets of permissions you need.
The basic roles of Editor , Viewer , and Owner are also available,
though they don't provide fine-grained control like the Cloud STT
roles. In particular, the basic roles provide access to resources across
Google Cloud. The roles specific to Cloud STT provide only
Cloud STT permissions. For more information, see the
IAM roles and permissions index .
Predefined roles
Predefined roles provide finer-grained permissions to principals (individuals,
groups, or service accounts). The role you grant to a principal controls what
actions the principal can take. You can grant multiple roles to the same
principal, and you can change the roles granted to a principal at any time,
provided you have the permissions to do so.
Broader roles encompass the more narrowly defined roles. For example, the
Cloud STT Editor role includes all Cloud STT Editor
role permissions and the Cloud STT Viewer role permissions.
Likewise, the Cloud STT Admin role includes all
Cloud STT Admin role permissions and the Cloud STT
Editor role permissions.
Name
Cloud STT permissions ( speech. )
Description
Project > Owner
All speech permissions
Full access and control for all Google Cloud resources
including user access and billing for a project
Project > Editor
All speech permissions except:
config.update
Read/write access to all Google Cloud and Cloud STT
resources except config.update and the ability to modify
permissions and billing
Project > Viewer
*.get
*.list
recognizers.recognize
Read-only access to all Google Cloud resources, including
Cloud Speech-to-Text resources, and permission to make recognition requests
Cloud Speech Administrator
All speech permissions
Full control for all Cloud Speech-to-Text resources
Cloud Speech Editor
customClasses.*
locations.*
operations.*
phraseSets.*
recognizers.*
Read/write access to all Cloud STT resources except config
Cloud Speech Client
customClasses.get
customClasses.list
locations.get
locations.list
operations.get
operations.list
phraseSets.get
phraseSets.list
recognizers.get
recognizers.list
recognizers.recognize
Read access to all Cloud STT resources
Manage Cloud STT IAM
You can get and set IAM policies and roles by using the
Google Cloud console . For more information, see
Manage access to projects, folders, and organizations .
What's next
Learn how to grant and revoke access .
Learn more about IAM .
Learn more about basic roles .
Learn more about custom roles .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
