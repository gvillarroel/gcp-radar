---
title: "Server-Side Encryption \_|\_ Datastore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastore/docs/concepts/encryption-at-rest
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/datastore/docs/access/iam
source_metadata:
  url: https://docs.cloud.google.com/datastore/docs/concepts/encryption-at-rest
  title: "Server-Side Encryption \_|\_ Datastore \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Datastore
Guides
Send feedback
Server-Side Encryption
Stay organized with collections
Save and categorize content based on your preferences.
Firestore in Datastore mode automatically encrypts all data before it is written to disk.
There is no setup or configuration required and no need to modify the way you
access the service. The data is automatically and transparently decrypted when
read by an authorized user.
Key management
With server-side encryption, you can either let Google manage cryptographic keys on your
behalf or use customer-managed encryption keys (CMEK) to manage the keys
yourself.
By default, Google manages cryptographic keys on your behalf using the same
hardened key management systems that we use for our own encrypted data,
including strict key access controls and auditing. Each Datastore mode
object's data and metadata is encrypted and each encryption key is itself
encrypted with a regularly rotated set of keystore master keys.
For information about managing the keys yourself, see
CMEK for Datastore .
Client-side encryption
Server-side encryption can be used in combination with client-side encryption.
In client-side encryption, you manage your own encryption keys and encrypt data
before writing it to your database. In this case, your data is
encrypted twice, once with your keys and once with the server-side keys.
Warning: Firestore in Datastore mode does not know if your data has already been
encrypted client-side, nor does Datastore mode have any knowledge of
your client-side encryption keys. If you use client-side encryption, you must
securely manage your encryption keys.
To protect your data as it travels over the Internet during read and write
operations, we use Transport Layer Security (TLS). For more information about
the supported TLS versions, see Encryption in transit in Google Cloud .
What's next
For more information about encryption at rest for Firestore in Datastore mode and
other Google Cloud products, see
Encryption at Rest in Google Cloud .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
