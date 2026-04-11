---
title: "Authenticate for invocation \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/functions/docs/securing/authenticating
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/functions/docs/concepts/iam
source_metadata:
  url: https://docs.cloud.google.com/functions/docs/securing/authenticating
  title: "Authenticate for invocation \_|\_ Cloud Run functions \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

If you are creating a new function, see the Console Quickstart on Cloud Run.
Home
Documentation
Application hosting
Cloud Run
Cloud Run functions
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Authenticate for invocation
This document provides supplemental information on how to invoke functions
created using the
Cloud Functions v2 API —for example, using
gcloud functions , the REST API, or Terraform. For detailed information and
examples, see the Cloud Run
Authenticate requests guides. The topics
covered in the Cloud Run guides also apply to functions created using the
Cloud Functions v2 API , since v2 functions also
use the
Cloud Run Invoker role
( roles/run.invoker ).
To invoke an authenticated function, the underlying
principal must meet the following requirements:
Have permission to invoke the function.
Provide an ID token when it invokes the function.
Cloud Run functions supports two different kinds of identities, which are also
called principals :
Service accounts: These are special accounts that serve as the identity of a
non-person, like a function or an application or a VM. They give you a way
to authenticate these non-persons.
User accounts: These accounts represent people, either as individual
Google Account holders or as part of a Google-controlled entity like a Google
Group.
See the IAM overview to learn more about
basic IAM concepts.
To invoke an authenticated function, the principal must have the invoker
IAM permission :
run.routes.invoke . This is usually through the
Cloud Run Invoker role . This
permission must be assigned on the Cloud Run service resource.
To grant these permissions, follow the steps in the
Cloud Run
Authenticating service-to-service guide.
For permission to create, update, or perform other administrative actions on a
function, the principal must have an appropriate role . Roles include permissions that define the actions that the principal is allowed to do. See
Using IAM to Authorize Access
for more information.
Event-driven functions can only be invoked by the event source that they're
subscribed to. HTTP functions, however, can be invoked by different identity
types originating from different places, such as by a developer testing the
function or by another service using the function. Identities must provide an ID
token for authentication. The account in use must also have the appropriate
permissions.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
