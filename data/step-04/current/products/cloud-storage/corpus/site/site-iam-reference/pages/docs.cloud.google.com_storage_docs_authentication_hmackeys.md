---
title: "HMAC keys \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage/docs/authentication/hmackeys
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage/docs/introduction
source_metadata:
  url: https://docs.cloud.google.com/storage/docs/authentication/hmackeys
  title: "HMAC keys \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Cloud Storage
Guides
Send feedback
HMAC keys
Stay organized with collections
Save and categorize content based on your preferences.
Setup
This page discusses hash-based message authentication code (HMAC) keys, which
you can use to authenticate requests to the Cloud Storage XML API . HMAC
keys are useful when you want to move data between other cloud storage providers
and Cloud Storage, because HMAC keys allow you to
reuse your existing code to access Cloud Storage.
Overview
An HMAC key is a type of credential associated with an account, typically a
service account. You use an HMAC key to create signatures using the
HMAC-SHA256 signing algorithm . The signatures you create are then
included in requests to the Cloud Storage XML API. Signatures show that
a given request is authorized by the account associated with the HMAC key.
Note: HMAC keys are separate from the normal service account keys used by
Google Cloud, which are RSA keys. HMAC keys cannot be used to generate
OAuth 2.0 tokens; however, RSA keys can be used to generate both OAuth 2.0
tokens and Cloud Storage XML API signatures.
HMAC keys have two primary pieces, an access ID and a secret .
Access ID : An alphanumeric string linked to a specific account.
When linked to a service account, the string is 61 characters in length.
When linked to a user account, the string is 24 characters in length.
The following shows an example of an access ID:
GOOGTS7C7FUP3AIRVJTE2BCDKINBTES3HC2GY5CBFJDCQ2SYHV6A6XXVTJFSA
Secret : A 40-character Base-64 encoded string that is linked to a specific
access ID. A secret is a pre-shared key that only you and
Cloud Storage know. You use your secret to create signatures as
part of the authentication process. The following shows an example of a secret:
bGoa+V7g/yqDXvKRqq+JTFn4uQZbPiQJo4pf9RzJ
Both the access ID and secret uniquely identify an HMAC key, but the secret is
much more sensitive information, because it's used to create signatures.
You can optionally enable the restrictAuthTypes constraint on a
resource, which restricts access for requests signed by HMAC keys.
Caution: When you delete an account, any HMAC keys associated with the
account are also deleted. To protect against outages, disable an account
and confirm that your traffic is unaffected prior to deleting the account.
Storing secrets
When you create an HMAC key for a service account , you are given
the secret for the key once. You must securely store the secret, along with the
associated access ID . If you lose the secret, it cannot be retrieved by you
or Google Cloud, and you must create a new HMAC key for the service account
to continue authenticating requests.
To create an HMAC key for a user account, you must be logged into the
Google Cloud console with the user account and go to the Interoperability
tab in the Cloud Storage Settings menu of a project for which you
have the resourcemanager.projects.get IAM permission. Once
created, you can view the key's secret from the Interoperability tab of any
project for which you have the resourcemanager.projects.get permission.
Best practices for storing secrets
Do not share your HMAC key secret. You should treat HMAC key secrets as you
would any set of access credentials.
As a security best practice, you should regularly change your keys as part of
a key rotation.
If you think someone else is using your HMAC keys, you should immediately
delete the affected HMAC keys and create new ones.
When changing HMAC keys, you should update your code with the new HMAC keys
before you delete the old keys. When you delete HMAC keys, they become
immediately invalid, and they are not recoverable.
Restrictions
HMAC keys can only be used to make requests to the XML API, not the JSON API.
You can have a maximum of 10 HMAC keys per service account. Deleted
keys do not count towards this limit.
After creation, it can take up to 60 seconds for a service account HMAC key
to become useable. After deleting a service account, the HMAC keys
that belong to it might continue to work for up to 5 minutes. Conversely,
it can take up to 5 minutes for HMAC keys to become usable again after
undeleting the service account that owns them.
If you enable the restrictAuthTypes constraint on a resource, you can no
longer create or activate HMAC keys for the specified account
type in that resource.
Migration from user account HMAC keys
Generally, associating HMAC keys with service accounts are a better option than
doing so with user accounts, particularly for production workloads:
Service accounts allow for better administrative oversight, and they
eliminate the security and privacy implications of accounts held by
individual users.
Service accounts reduce the risk of service outages associated with relying
on user accounts, such as when a user account is disabled because the user
leaves the project or company.
If you currently use HMAC keys with user accounts but want to migrate to
service accounts, keep the following in mind:
Your project must have a service account and have an HMAC key
associated with it.
The service account must be granted the required permissions to perform
actions in Cloud Storage.
Broad permission to work with objects is contained in the
Storage Object Admin role, but you may want to have separate service
accounts for performing different actions. For example, you may want one
service account for reading, which would have the Storage Object Viewer
role and a second service account for writing, which would have the
Storage Object Creator role.
You should test to make certain the service account behaves as expected
before pushing any update out to production.
After your production work transitions to service account HMAC keys, you
should check the following Cloud Monitoring metric to verify that
the HMAC keys associated with the user account are no longer in use:
Metric
Description
storage.googleapis.com/authn/authentication_count
The number of times HMAC keys have been used to authenticate requests.
You can set the following labels to track user account keys that
are still in use during the migration progress:
access_id : identifies which access ID made the request. You can also
use access_id during a key rotation to watch traffic move from one key
to another.
authentication_method : identifies if keys are user account or service
account keys.
Once you've verified the user account HMAC keys are no longer used, you
should delete those HMAC keys. Doing so reduces the risk of inappropriate
data access.
If the user account is no longer used to access Cloud Storage
resources, revoke any access to Cloud Storage that it has.
You can optionally enable the restrictAuthTypes constraint
on user account HMAC keys for an extra layer of security.
What's next
Create HMAC keys for your service accounts .
Use an HMAC key in an authenticated request .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
