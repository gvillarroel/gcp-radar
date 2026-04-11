---
title: "Create event-driven architectures with Eventarc \_|\_ Firestore with MongoDB\
  \ compatibility \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/eventarc
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/eventarc
  title: "Create event-driven architectures with Eventarc \_|\_ Firestore with MongoDB\
    \ compatibility \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Firestore with MongoDB compatibility
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create event-driven architectures with Eventarc
You can use Eventarc and
Firestore with MongoDB compatibility to build
event-driven architectures .
Firestore with MongoDB compatibility triggers for
Eventarc generate events from changes
to a particular documents in your database. The trigger can route events to a
supported destination :
Cloud Run functions (2nd gen) which supports the Cloud Client Libraries and the Firebase SDK
Cloud Run
Google Kubernetes Engine
Workflows
Eventarc offers a standardized solution to manage the flow of
state changes, called events , between decoupled microservices. When triggered,
Eventarc routes these events to
various destinations while managing delivery, security, authorization,
observability, and error-handling for you.
Note: Eventarc events use the CloudEvents specification.
Limitations
Note the following limitations for Firestore with MongoDB compatibility triggers for
Eventarc:
Ordering is not guaranteed. Rapid changes can trigger events in an unexpected order.
Events are delivered at least once.
Make sure your event handler is idempotent and avoid producing unexpected results
or side effects when an event is delivered more than once. Refer to
Building idempotent functions to learn more.
A trigger is associated with a single database. You cannot create a trigger that matches multiple databases.
Deleting a database does not automatically delete any triggers for that database. The
trigger stops delivering events but continues to exist until you delete the trigger . If the database is recreated, any associated triggers will also need to be deleted and recreated to restore event delivery.
Firestore with MongoDB compatibility supports Cloud Run functions (2nd gen) and doesn't support
Cloud Run functions (1st gen).
Firestore Enterprise edition databases do not support Datastore entity event types.
What's next
Learn about event-driven architectures .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
