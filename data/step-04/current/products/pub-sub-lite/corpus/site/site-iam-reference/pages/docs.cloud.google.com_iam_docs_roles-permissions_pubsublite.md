---
title: "Pub/Sub Lite roles and permissions \_|\_ Identity and Access Management (IAM)\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/roles-permissions/pubsublite
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/roles-permissions/pubsublite
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/roles-permissions/pubsublite
  title: "Pub/Sub Lite roles and permissions \_|\_ Identity and Access Management\
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
Pub/Sub Lite roles and permissions
Stay organized with collections
Save and categorize content based on your preferences.
This page lists the IAM roles and permissions for Pub/Sub Lite. To
search through all roles and permissions, see the role and
permission index .
Pub/Sub Lite roles
Role
Permissions
Pub/Sub Lite Admin
( roles/ pubsublite.admin )
Full access to topics, subscriptions and reservations.
pubsublite.*
pubsublite. locations. openKafkaStream
pubsublite.operations.get
pubsublite.operations.list
pubsublite. reservations. attachTopic
pubsublite.reservations.create
pubsublite.reservations.delete
pubsublite.reservations.get
pubsublite.reservations.list
pubsublite. reservations. listTopics
pubsublite.reservations.update
pubsublite. subscriptions. create
pubsublite. subscriptions. delete
pubsublite.subscriptions.get
pubsublite. subscriptions. getCursor
pubsublite.subscriptions.list
pubsublite.subscriptions.seek
pubsublite. subscriptions. setCursor
pubsublite. subscriptions. subscribe
pubsublite. subscriptions. update
pubsublite. topics. computeHeadCursor
pubsublite. topics. computeMessageStats
pubsublite. topics. computeTimeCursor
pubsublite.topics.create
pubsublite.topics.delete
pubsublite.topics.get
pubsublite. topics. getPartitions
pubsublite.topics.list
pubsublite. topics. listSubscriptions
pubsublite.topics.publish
pubsublite.topics.subscribe
pubsublite.topics.update
Pub/Sub Lite Editor
( roles/ pubsublite.editor )
Modify topics, subscriptions and reservations, publish and consume messages.
pubsublite.*
pubsublite. locations. openKafkaStream
pubsublite.operations.get
pubsublite.operations.list
pubsublite. reservations. attachTopic
pubsublite.reservations.create
pubsublite.reservations.delete
pubsublite.reservations.get
pubsublite.reservations.list
pubsublite. reservations. listTopics
pubsublite.reservations.update
pubsublite. subscriptions. create
pubsublite. subscriptions. delete
pubsublite.subscriptions.get
pubsublite. subscriptions. getCursor
pubsublite.subscriptions.list
pubsublite.subscriptions.seek
pubsublite. subscriptions. setCursor
pubsublite. subscriptions. subscribe
pubsublite. subscriptions. update
pubsublite. topics. computeHeadCursor
pubsublite. topics. computeMessageStats
pubsublite. topics. computeTimeCursor
pubsublite.topics.create
pubsublite.topics.delete
pubsublite.topics.get
pubsublite. topics. getPartitions
pubsublite.topics.list
pubsublite. topics. listSubscriptions
pubsublite.topics.publish
pubsublite.topics.subscribe
pubsublite.topics.update
Pub/Sub Lite Viewer
( roles/ pubsublite.viewer )
View topics, subscriptions and reservations.
pubsublite.operations.*
pubsublite.operations.get
pubsublite.operations.list
pubsublite.reservations.get
pubsublite.reservations.list
pubsublite. reservations. listTopics
pubsublite.subscriptions.get
pubsublite. subscriptions. getCursor
pubsublite.subscriptions.list
pubsublite.topics.get
pubsublite. topics. getPartitions
pubsublite.topics.list
pubsublite. topics. listSubscriptions
Pub/Sub Lite Publisher
( roles/ pubsublite.publisher )
Publish messages to a topic.
pubsublite. locations. openKafkaStream
pubsublite. topics. getPartitions
pubsublite.topics.publish
Pub/Sub Lite Subscriber
( roles/ pubsublite.subscriber )
Subscribe to and read messages from a topic.
pubsublite. locations. openKafkaStream
pubsublite.operations.get
pubsublite. subscriptions. getCursor
pubsublite.subscriptions.seek
pubsublite. subscriptions. setCursor
pubsublite. subscriptions. subscribe
pubsublite. topics. computeHeadCursor
pubsublite. topics. computeMessageStats
pubsublite. topics. computeTimeCursor
pubsublite. topics. getPartitions
pubsublite.topics.subscribe
Service agent roles
Service agent roles should only be granted to service agents .
Role
Permissions
Pub/Sub Lite Service Agent
( roles/ pubsublite.serviceAgent )
Grants Pub/Sub Lite Service Agent access to project resources.
Warning: Do not grant service agent roles to any principals except
service agents .
pubsub.topics.publish
pubsublite.subscriptions.get
pubsublite. subscriptions. getCursor
pubsublite. subscriptions. setCursor
pubsublite. subscriptions. subscribe
pubsublite. topics. computeHeadCursor
pubsublite. topics. getPartitions
pubsublite.topics.publish
pubsublite.topics.subscribe
Pub/Sub Lite permissions
Permission
Included in roles
pubsublite. locations. openKafkaStream
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Pub/Sub Lite Admin ( roles/ pubsublite.admin )
Pub/Sub Lite Editor ( roles/ pubsublite.editor )
Support User ( roles/ iam.supportUser )
Pub/Sub Lite Publisher ( roles/ pubsublite.publisher )
Pub/Sub Lite Subscriber ( roles/ pubsublite.subscriber )
pubsublite.operations.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Pub/Sub Lite Admin ( roles/ pubsublite.admin )
Pub/Sub Lite Editor ( roles/ pubsublite.editor )
Pub/Sub Lite Viewer ( roles/ pubsublite.viewer )
Support User ( roles/ iam.supportUser )
Pub/Sub Lite Subscriber ( roles/ pubsublite.subscriber )
pubsublite.operations.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Pub/Sub Lite Admin ( roles/ pubsublite.admin )
Pub/Sub Lite Editor ( roles/ pubsublite.editor )
Pub/Sub Lite Viewer ( roles/ pubsublite.viewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
pubsublite. reservations. attachTopic
Owner ( roles/ owner )
Editor ( roles/ editor )
Pub/Sub Lite Admin ( roles/ pubsublite.admin )
Pub/Sub Lite Editor ( roles/ pubsublite.editor )
pubsublite.reservations.create
Owner ( roles/ owner )
Editor ( roles/ editor )
Pub/Sub Lite Admin ( roles/ pubsublite.admin )
Pub/Sub Lite Editor ( roles/ pubsublite.editor )
pubsublite.reservations.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Pub/Sub Lite Admin ( roles/ pubsublite.admin )
Pub/Sub Lite Editor ( roles/ pubsublite.editor )
pubsublite.reservations.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Pub/Sub Lite Admin ( roles/ pubsublite.admin )
Pub/Sub Lite Editor ( roles/ pubsublite.editor )
Pub/Sub Lite Viewer ( roles/ pubsublite.viewer )
Support User ( roles/ iam.supportUser )
pubsublite.reservations.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Pub/Sub Lite Admin ( roles/ pubsublite.admin )
Pub/Sub Lite Editor ( roles/ pubsublite.editor )
Pub/Sub Lite Viewer ( roles/ pubsublite.viewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
pubsublite. reservations. listTopics
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Pub/Sub Lite Admin ( roles/ pubsublite.admin )
Pub/Sub Lite Editor ( roles/ pubsublite.editor )
Pub/Sub Lite Viewer ( roles/ pubsublite.viewer )
Support User ( roles/ iam.supportUser )
pubsublite.reservations.update
Owner ( roles/ owner )
Editor ( roles/ editor )
Pub/Sub Lite Admin ( roles/ pubsublite.admin )
Pub/Sub Lite Editor ( roles/ pubsublite.editor )
pubsublite. subscriptions. create
Owner ( roles/ owner )
Editor ( roles/ editor )
Pub/Sub Lite Admin ( roles/ pubsublite.admin )
Pub/Sub Lite Editor ( roles/ pubsublite.editor )
pubsublite. subscriptions. delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Pub/Sub Lite Admin ( roles/ pubsublite.admin )
Pub/Sub Lite Editor ( roles/ pubsublite.editor )
pubsublite.subscriptions.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Pub/Sub Lite Admin ( roles/ pubsublite.admin )
Pub/Sub Lite Editor ( roles/ pubsublite.editor )
Pub/Sub Lite Viewer ( roles/ pubsublite.viewer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Pub/Sub Lite Service Agent ( roles/ pubsublite.serviceAgent )
pubsublite. subscriptions. getCursor
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Pub/Sub Lite Admin ( roles/ pubsublite.admin )
Pub/Sub Lite Editor ( roles/ pubsublite.editor )
Pub/Sub Lite Viewer ( roles/ pubsublite.viewer )
Support User ( roles/ iam.supportUser )
Pub/Sub Lite Subscriber ( roles/ pubsublite.subscriber )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Pub/Sub Lite Service Agent ( roles/ pubsublite.serviceAgent )
pubsublite.subscriptions.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Pub/Sub Lite Admin ( roles/ pubsublite.admin )
Pub/Sub Lite Editor ( roles/ pubsublite.editor )
Pub/Sub Lite Viewer ( roles/ pubsublite.viewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
pubsublite.subscriptions.seek
Owner ( roles/ owner )
Editor ( roles/ editor )
Pub/Sub Lite Admin ( roles/ pubsublite.admin )
Pub/Sub Lite Editor ( roles/ pubsublite.editor )
Pub/Sub Lite Subscriber ( roles/ pubsublite.subscriber )
pubsublite. subscriptions. setCursor
Owner ( roles/ owner )
Editor ( roles/ editor )
Pub/Sub Lite Admin ( roles/ pubsublite.admin )
Pub/Sub Lite Editor ( roles/ pubsublite.editor )
Pub/Sub Lite Subscriber ( roles/ pubsublite.subscriber )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Pub/Sub Lite Service Agent ( roles/ pubsublite.serviceAgent )
pubsublite. subscriptions. subscribe
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Pub/Sub Lite Admin ( roles/ pubsublite.admin )
Pub/Sub Lite Editor ( roles/ pubsublite.editor )
Support User ( roles/ iam.supportUser )
Pub/Sub Lite Subscriber ( roles/ pubsublite.subscriber )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Pub/Sub Lite Service Agent ( roles/ pubsublite.serviceAgent )
pubsublite. subscriptions. update
Owner ( roles/ owner )
Editor ( roles/ editor )
Pub/Sub Lite Admin ( roles/ pubsublite.admin )
Pub/Sub Lite Editor ( roles/ pubsublite.editor )
pubsublite. topics. computeHeadCursor
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Pub/Sub Lite Admin ( roles/ pubsublite.admin )
Pub/Sub Lite Editor ( roles/ pubsublite.editor )
Support User ( roles/ iam.supportUser )
Pub/Sub Lite Subscriber ( roles/ pubsublite.subscriber )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Pub/Sub Lite Service Agent ( roles/ pubsublite.serviceAgent )
pubsublite. topics. computeMessageStats
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Pub/Sub Lite Admin ( roles/ pubsublite.admin )
Pub/Sub Lite Editor ( roles/ pubsublite.editor )
Support User ( roles/ iam.supportUser )
Pub/Sub Lite Subscriber ( roles/ pubsublite.subscriber )
pubsublite. topics. computeTimeCursor
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Pub/Sub Lite Admin ( roles/ pubsublite.admin )
Pub/Sub Lite Editor ( roles/ pubsublite.editor )
Support User ( roles/ iam.supportUser )
Pub/Sub Lite Subscriber ( roles/ pubsublite.subscriber )
pubsublite.topics.create
Owner ( roles/ owner )
Editor ( roles/ editor )
Pub/Sub Lite Admin ( roles/ pubsublite.admin )
Pub/Sub Lite Editor ( roles/ pubsublite.editor )
pubsublite.topics.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Pub/Sub Lite Admin ( roles/ pubsublite.admin )
Pub/Sub Lite Editor ( roles/ pubsublite.editor )
pubsublite.topics.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Pub/Sub Lite Admin ( roles/ pubsublite.admin )
Pub/Sub Lite Editor ( roles/ pubsublite.editor )
Pub/Sub Lite Viewer ( roles/ pubsublite.viewer )
Support User ( roles/ iam.supportUser )
pubsublite. topics. getPartitions
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Pub/Sub Lite Admin ( roles/ pubsublite.admin )
Pub/Sub Lite Editor ( roles/ pubsublite.editor )
Pub/Sub Lite Viewer ( roles/ pubsublite.viewer )
Support User ( roles/ iam.supportUser )
Pub/Sub Lite Publisher ( roles/ pubsublite.publisher )
Pub/Sub Lite Subscriber ( roles/ pubsublite.subscriber )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Pub/Sub Lite Service Agent ( roles/ pubsublite.serviceAgent )
pubsublite.topics.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Pub/Sub Lite Admin ( roles/ pubsublite.admin )
Pub/Sub Lite Editor ( roles/ pubsublite.editor )
Pub/Sub Lite Viewer ( roles/ pubsublite.viewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
pubsublite. topics. listSubscriptions
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Pub/Sub Lite Admin ( roles/ pubsublite.admin )
Pub/Sub Lite Editor ( roles/ pubsublite.editor )
Pub/Sub Lite Viewer ( roles/ pubsublite.viewer )
Support User ( roles/ iam.supportUser )
pubsublite.topics.publish
Owner ( roles/ owner )
Editor ( roles/ editor )
Pub/Sub Lite Admin ( roles/ pubsublite.admin )
Pub/Sub Lite Editor ( roles/ pubsublite.editor )
Pub/Sub Lite Publisher ( roles/ pubsublite.publisher )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Content Warehouse Service Agent ( roles/ contentwarehouse.serviceAgent )
Pub/Sub Lite Service Agent ( roles/ pubsublite.serviceAgent )
pubsublite.topics.subscribe
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Pub/Sub Lite Admin ( roles/ pubsublite.admin )
Pub/Sub Lite Editor ( roles/ pubsublite.editor )
Support User ( roles/ iam.supportUser )
Pub/Sub Lite Subscriber ( roles/ pubsublite.subscriber )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Pub/Sub Lite Service Agent ( roles/ pubsublite.serviceAgent )
pubsublite.topics.update
Owner ( roles/ owner )
Editor ( roles/ editor )
Pub/Sub Lite Admin ( roles/ pubsublite.admin )
Pub/Sub Lite Editor ( roles/ pubsublite.editor )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
