---
title: "Speech-to-Text roles and permissions \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/roles-permissions/speech
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/roles-permissions/speech
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/roles-permissions/speech
  title: "Speech-to-Text roles and permissions \_|\_ Identity and Access Management\
    \ (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
IAM
Reference
Send feedback
Speech-to-Text roles and permissions
Stay organized with collections
Save and categorize content based on your preferences.
This page lists the IAM roles and permissions for Speech-to-Text. To
search through all roles and permissions, see the role and
permission index .
Speech-to-Text roles
Role
Permissions
Cloud Speech Administrator
( roles/ speech.admin )
Grants full access to all resources in Speech-to-text
speech.*
speech.adaptations.execute
speech.config.get
speech.config.update
speech.customClasses.create
speech.customClasses.delete
speech.customClasses.get
speech.customClasses.list
speech.customClasses.undelete
speech.customClasses.update
speech.locations.get
speech.locations.list
speech.operations.cancel
speech.operations.delete
speech.operations.get
speech.operations.list
speech.operations.wait
speech.phraseSets.create
speech.phraseSets.delete
speech.phraseSets.get
speech.phraseSets.list
speech.phraseSets.undelete
speech.phraseSets.update
speech.recognizers.create
speech.recognizers.delete
speech.recognizers.get
speech.recognizers.list
speech.recognizers.recognize
speech.recognizers.undelete
speech.recognizers.update
Cloud Speech Editor
( roles/ speech.editor )
Grants access to edit resources in Speech-to-text
speech.adaptations.execute
speech.customClasses.*
speech.customClasses.create
speech.customClasses.delete
speech.customClasses.get
speech.customClasses.list
speech.customClasses.undelete
speech.customClasses.update
speech.locations.*
speech.locations.get
speech.locations.list
speech.operations.*
speech.operations.cancel
speech.operations.delete
speech.operations.get
speech.operations.list
speech.operations.wait
speech.phraseSets.*
speech.phraseSets.create
speech.phraseSets.delete
speech.phraseSets.get
speech.phraseSets.list
speech.phraseSets.undelete
speech.phraseSets.update
speech.recognizers.*
speech.recognizers.create
speech.recognizers.delete
speech.recognizers.get
speech.recognizers.list
speech.recognizers.recognize
speech.recognizers.undelete
speech.recognizers.update
Cloud Speech Client
( roles/ speech.client )
Grants access to the recognition APIs.
speech.adaptations.execute
speech.customClasses.get
speech.customClasses.list
speech.locations.*
speech.locations.get
speech.locations.list
speech.operations.get
speech.operations.list
speech.operations.wait
speech.phraseSets.get
speech.phraseSets.list
speech.recognizers.get
speech.recognizers.list
speech.recognizers.recognize
Service agent roles
Service agent roles should only be granted to service agents .
Role
Permissions
Cloud Speech-to-Text Service Agent
( roles/ speech.serviceAgent )
Gives Speech-to-Text service account access to Cloud Storage resources.
Warning: Do not grant service agent roles to any principals except
service agents .
storage.buckets.get
storage.buckets.list
storage.objects.create
storage.objects.get
storage.objects.list
storage.objects.update
Speech-to-Text permissions
Permission
Included in roles
speech.adaptations.execute
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Cloud Speech Administrator ( roles/ speech.admin )
Cloud Speech Editor ( roles/ speech.editor )
Support User ( roles/ iam.supportUser )
Cloud Speech Client ( roles/ speech.client )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Dialogflow Service Agent ( roles/ dialogflow.serviceAgent )
speech.config.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Cloud Speech Administrator ( roles/ speech.admin )
Support User ( roles/ iam.supportUser )
speech.config.update
Owner ( roles/ owner )
Cloud Speech Administrator ( roles/ speech.admin )
speech.customClasses.create
Owner ( roles/ owner )
Editor ( roles/ editor )
Cloud Speech Administrator ( roles/ speech.admin )
Cloud Speech Editor ( roles/ speech.editor )
speech.customClasses.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Cloud Speech Administrator ( roles/ speech.admin )
Cloud Speech Editor ( roles/ speech.editor )
speech.customClasses.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Cloud Speech Administrator ( roles/ speech.admin )
Cloud Speech Editor ( roles/ speech.editor )
Support User ( roles/ iam.supportUser )
Cloud Speech Client ( roles/ speech.client )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Contact Center AI Insights Service Agent ( roles/ contactcenterinsights.serviceAgent )
Dialogflow Service Agent ( roles/ dialogflow.serviceAgent )
speech.customClasses.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Cloud Speech Administrator ( roles/ speech.admin )
Cloud Speech Editor ( roles/ speech.editor )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Cloud Speech Client ( roles/ speech.client )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Dialogflow Service Agent ( roles/ dialogflow.serviceAgent )
speech.customClasses.undelete
Owner ( roles/ owner )
Editor ( roles/ editor )
Cloud Speech Administrator ( roles/ speech.admin )
Cloud Speech Editor ( roles/ speech.editor )
speech.customClasses.update
Owner ( roles/ owner )
Editor ( roles/ editor )
Cloud Speech Administrator ( roles/ speech.admin )
Cloud Speech Editor ( roles/ speech.editor )
speech.locations.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Cloud Speech Administrator ( roles/ speech.admin )
Cloud Speech Editor ( roles/ speech.editor )
Support User ( roles/ iam.supportUser )
Cloud Speech Client ( roles/ speech.client )
speech.locations.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Cloud Speech Administrator ( roles/ speech.admin )
Cloud Speech Editor ( roles/ speech.editor )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Cloud Speech Client ( roles/ speech.client )
speech.operations.cancel
Owner ( roles/ owner )
Editor ( roles/ editor )
Cloud Speech Administrator ( roles/ speech.admin )
Cloud Speech Editor ( roles/ speech.editor )
speech.operations.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Cloud Speech Administrator ( roles/ speech.admin )
Cloud Speech Editor ( roles/ speech.editor )
speech.operations.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Cloud Speech Administrator ( roles/ speech.admin )
Cloud Speech Editor ( roles/ speech.editor )
Support User ( roles/ iam.supportUser )
Cloud Speech Client ( roles/ speech.client )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Contact Center AI Insights Service Agent ( roles/ contactcenterinsights.serviceAgent )
speech.operations.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Cloud Speech Administrator ( roles/ speech.admin )
Cloud Speech Editor ( roles/ speech.editor )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Cloud Speech Client ( roles/ speech.client )
speech.operations.wait
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Cloud Speech Administrator ( roles/ speech.admin )
Cloud Speech Editor ( roles/ speech.editor )
Support User ( roles/ iam.supportUser )
Cloud Speech Client ( roles/ speech.client )
speech.phraseSets.create
Owner ( roles/ owner )
Editor ( roles/ editor )
Cloud Speech Administrator ( roles/ speech.admin )
Cloud Speech Editor ( roles/ speech.editor )
speech.phraseSets.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Cloud Speech Administrator ( roles/ speech.admin )
Cloud Speech Editor ( roles/ speech.editor )
speech.phraseSets.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Cloud Speech Administrator ( roles/ speech.admin )
Cloud Speech Editor ( roles/ speech.editor )
Support User ( roles/ iam.supportUser )
Cloud Speech Client ( roles/ speech.client )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Contact Center AI Insights Service Agent ( roles/ contactcenterinsights.serviceAgent )
Dialogflow Service Agent ( roles/ dialogflow.serviceAgent )
speech.phraseSets.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Cloud Speech Administrator ( roles/ speech.admin )
Cloud Speech Editor ( roles/ speech.editor )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Cloud Speech Client ( roles/ speech.client )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Dialogflow Service Agent ( roles/ dialogflow.serviceAgent )
speech.phraseSets.undelete
Owner ( roles/ owner )
Editor ( roles/ editor )
Cloud Speech Administrator ( roles/ speech.admin )
Cloud Speech Editor ( roles/ speech.editor )
speech.phraseSets.update
Owner ( roles/ owner )
Editor ( roles/ editor )
Cloud Speech Administrator ( roles/ speech.admin )
Cloud Speech Editor ( roles/ speech.editor )
speech.recognizers.create
Owner ( roles/ owner )
Editor ( roles/ editor )
Cloud Speech Administrator ( roles/ speech.admin )
Cloud Speech Editor ( roles/ speech.editor )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Contact Center AI Insights Service Agent ( roles/ contactcenterinsights.serviceAgent )
speech.recognizers.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Cloud Speech Administrator ( roles/ speech.admin )
Cloud Speech Editor ( roles/ speech.editor )
speech.recognizers.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Cloud Speech Administrator ( roles/ speech.admin )
Cloud Speech Editor ( roles/ speech.editor )
Support User ( roles/ iam.supportUser )
Cloud Speech Client ( roles/ speech.client )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Contact Center AI Insights Service Agent ( roles/ contactcenterinsights.serviceAgent )
Dialogflow Service Agent ( roles/ dialogflow.serviceAgent )
speech.recognizers.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Cloud Speech Administrator ( roles/ speech.admin )
Cloud Speech Editor ( roles/ speech.editor )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Cloud Speech Client ( roles/ speech.client )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Dialogflow Service Agent ( roles/ dialogflow.serviceAgent )
speech.recognizers.recognize
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Cloud Speech Administrator ( roles/ speech.admin )
Cloud Speech Editor ( roles/ speech.editor )
Support User ( roles/ iam.supportUser )
Cloud Speech Client ( roles/ speech.client )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Contact Center AI Insights Service Agent ( roles/ contactcenterinsights.serviceAgent )
speech.recognizers.undelete
Owner ( roles/ owner )
Editor ( roles/ editor )
Cloud Speech Administrator ( roles/ speech.admin )
Cloud Speech Editor ( roles/ speech.editor )
speech.recognizers.update
Owner ( roles/ owner )
Editor ( roles/ editor )
Cloud Speech Administrator ( roles/ speech.admin )
Cloud Speech Editor ( roles/ speech.editor )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Contact Center AI Insights Service Agent ( roles/ contactcenterinsights.serviceAgent )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
