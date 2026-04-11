---
title: "Introduction to encryption for Cloud Speech-to-Text \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/speech-to-text/docs/encryption
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/speech-to-text/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/speech-to-text/docs/encryption
  title: "Introduction to encryption for Cloud Speech-to-Text \_|\_ Google Cloud Documentation"
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
Introduction to encryption for Cloud Speech-to-Text
Stay organized with collections
Save and categorize content based on your preferences.
By default, Cloud Speech-to-Text encrypts customer content at
rest. Cloud STT handles encryption for you without any
additional actions on your part. This option is called Google default encryption .
If you want to control your encryption keys, then you can use customer-managed encryption keys
(CMEKs) in Cloud KMS with CMEK-integrated services including
Cloud STT. Using Cloud KMS keys gives you control over their protection
level, location, rotation schedule, usage and access permissions, and cryptographic boundaries.
Using Cloud KMS also lets
you view audit logs and control key lifecycles.
Instead of Google owning and managing the symmetric
key encryption keys (KEKs) that protect your data, you control and
manage these keys in Cloud KMS.
After you set up your resources with CMEKs, the experience of accessing your
Cloud STT resources is similar to using Google default encryption.
For more information about your encryption
options, see Customer-managed encryption keys (CMEK) .
For information about the specific benefits of using CMEK with Cloud Speech-to-Text
resources, see Understand CMEK for
Cloud STT resources .
Understand CMEK for Cloud STT resources
The following conditions are true when a new key is set by using the
Speech-to-Text API:
Resources previously encrypted with the original key remain encrypted with
that earlier key. If a resource is updated (using an Update* method), it
is re-encrypted with the new key.
Previously non-CMEK encrypted resources remain unencrypted. If a resource is
updated (using an Update* method), it is then re-encrypted with the new
key. For long-running operations (like batch recognition ), if processing is ongoing and not finished, the
stored operation is re-encrypted with the new key.
Newly created resources are encrypted with the newly set key.
When you remove a key by using the Speech-to-Text API, new resources are
created without CMEK encryption. Existing resources remain encrypted with the
keys with which they were previously encrypted. If a resource is updated (using
an Update* method), it is re-encrypted using the default encryption managed by
Google. For long-running operations (like batch recognition ), if processing is ongoing and not finished, the stored
operation will be re-encrypted using the default encryption managed by Google.
The location of the Cloud KMS key used for encrypting
Cloud STT resources must match the Cloud STT
endpoint used. For more information about Cloud STT locations, see
Cloud STT locations . For more information about
Cloud KMS locations, see Cloud KMS
locations .
CMEK-supported resources
The following are current Cloud Speech-to-Text resources covered by CMEK:
Resource
Material encrypted
Documentation links
Recognizer
The language code in the recognition configuration.
Inline and reference adaptation resources.
Recognizers
Adaptation
PhraseSet
Phrases in the phrase set.
Adaptation
CustomClass
Class items in the custom class.
Adaptation
Operation
The original request that spawned the operation.
The response from the method that spawned the operation.
Recognizers
Adaptation
Operations
Batch recognition artifacts
Adaptation resources used during transcription.
The accumulated transcript results.
Audio artifacts required for transcription.
Batch recognition
What's next
Learn how to use encryption with
Cloud STT .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
