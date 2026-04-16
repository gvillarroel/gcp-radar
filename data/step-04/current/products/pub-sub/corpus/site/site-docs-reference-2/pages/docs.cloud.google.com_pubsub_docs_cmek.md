---
title: "Configure message encryption \_|\_ Pub/Sub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/docs/cmek
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/pubsub/docs/cmek
  title: "Configure message encryption \_|\_ Pub/Sub \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Pub/Sub
Guides
Send feedback
Configure message encryption
Stay organized with collections
Save and categorize content based on your preferences.
By default, Pub/Sub encrypts customer content at
rest. Pub/Sub handles encryption for you without any
additional actions on your part. This option is called Google default encryption .
If you want to control your encryption keys, then you can use customer-managed encryption keys
(CMEKs) in Cloud KMS with CMEK-integrated services including
Pub/Sub. Using Cloud KMS keys gives you control over their protection
level, location, rotation schedule, usage and access permissions, and cryptographic boundaries.
Using Cloud KMS also lets
you track key usage , view audit logs, and
control key lifecycles.
Instead of Google owning and managing the symmetric
key encryption keys (KEKs) that protect your data, you control and
manage these keys in Cloud KMS.
After you set up your resources with CMEKs, the experience of accessing your
Pub/Sub resources is similar to using Google default encryption.
For more information about your encryption
options, see Customer-managed encryption keys (CMEK) .
CMEK with Cloud KMS Autokey
You can either create CMEKs manually to protect your Pub/Sub
resources or use Cloud KMS Autokey. With Autokey, key rings and keys are generated on demand to
support resource creation in Pub/Sub.
Service agents that use the keys for encrypt and decrypt operations are created if they don't
already exist and are granted the required Identity and Access Management (IAM) roles. For more
information, see Autokey overview .
How CMEK works with Pub/Sub
When you configure Pub/Sub with CMEK, the service
automatically encrypts all data using the specified key. Cloud KMS
usage for CMEK might incur additional costs depending on your usage patterns.
Every message is encrypted at the following states and layers:
At rest
Hardware layer
Infrastructure layer
Application layer
In transit
At the application layer, Pub/Sub individually encrypts incoming
messages as soon as the message is received. This implementation adds the
following features:
Keeps messages encrypted on data-center internal links
Enables customer-managed encryption keys (CMEK)
Note: Pub/Sub does not encrypt
message attributes
at the application layer. Message attributes are still encrypted at the hardware
and infrastructure layers.
Envelope encryption pattern
Pub/Sub uses the
envelope encryption pattern with CMEK.
In this approach, the messages are not encrypted by Cloud KMS. Instead,
Cloud KMS is used to encrypt Data Encryption Keys (DEKs) created by
Pub/Sub for each topic. These DEKs are stored only in encrypted,
or wrapped, form by Pub/Sub. Before storing a DEK, the service
sends the DEK to Cloud KMS to be encrypted with the key encryption
key (KEK) specified on the topic. A new DEK is generated for
each topic approximately every six hours.
Before Pub/Sub publishes messages to a subscription, it
encrypts them using the newest DEK that was generated for the topic.
Pub/Sub decrypts the messages shortly before they are delivered
to subscribers.
Configure CMEK with Pub/Sub
You can configure CMEK manually or by using Autokey.
Before you begin
You can configure CMEK for Pub/Sub using
the Google Cloud console or the Google Cloud CLI.
Complete the following tasks:
Enable the Cloud KMS API.
Create a key ring and a key in Cloud KMS. Keys and key
rings cannot be deleted.
For instructions on how to accomplish these tasks, Create a key
ring and Create a key .
Because Pub/Sub resources are global, we strongly recommend
that you use global Cloud KMS keys to configure CMEK-enabled
topics. Depending on the locations of a topic's publishers and subscribers, the
use of a regional Cloud KMS key could introduce unnecessary
dependencies on cross-region network links.
Required roles and permissions
Pub/Sub uses a Google Cloud
service agent to
access Cloud KMS. The service agent is maintained internally by
Pub/Sub for each project, and is not visible on
the Service Accounts page in the Google Cloud console by default.
The Pub/Sub service agent has the form
service-${PROJECT_NUMBER}@gcp-sa-pubsub.iam.gserviceaccount.com .
Pub/Sub requires specific permissions to encrypt and
decrypt data using CMEK.
Complete the following steps to set up the required access:
Grant the Pub/Sub service agent the
Cloud KMS Crypto Key Encrypter/Decrypter
( roles/cloudkms.cryptoKeyEncrypterDecrypter ) role.
gcloud kms keys add-iam-policy-binding CLOUD_KMS_KEY_NAME \
--member = serviceAccount:service- PROJECT_NUMBER @gcp-sa-pubsub.iam.gserviceaccount.com \
--role = roles/cloudkms.cryptoKeyEncrypterDecrypter
Replace the following:
CLOUD_KMS_KEY_NAME : The name of the Cloud KMS key.
The key is of the format projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys/ CRYPTO_KEY .
An example is projects/test-project/locations/us-central1/keyRings/test-keyring/cryptoKeys/test-key .
PROJECT_NUMBER : The project number of the
Pub/Sub project.
For more information about granting Identity and Access Management roles, see
Granting roles on a resource .
Configure a topic manually with CMEK
You can manually configure CMEK for a topic using the Google Cloud console or
gcloud CLI.
Console
To create a topic with CMEK, follow these steps:
In the Google Cloud console, go to the Pub/Sub Topics page.
Go to Topics
Click Create topic .
In the Topic ID field, enter an ID for your topic.
For more information about naming topics, see the naming guidelines .
For Encryption , click Cloud KMS key .
Select the key type. If you don't see the Select a customer-managed
key dropdown, ensure that you have enabled the Cloud KMS API for
the project.
Click Create topic .
gcloud
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
To create a topic with CMEK, run the
gcloud pubsub
topics create command:
gcloud pubsub topics create TOPIC_ID --topic-encryption-key = ENCRYPTION_KEY
Replace the following:
TOPIC_ID : The ID or name of the topic.
For more information about how to name a topic, see
Guidelines to name a topic, subscription, schema, or snapshot .
ENCRYPTION_KEY : ID of the CMEK to use for the topic.
The format is projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys/ CRYPTO_KEY .
Update a CMEK topic manually
You have the flexibility to add, change, or remove the CMEK linked to a
Pub/Sub topic. You can use gcloud CLI to update the
CMEK. However, this change doesn't apply retroactively.
Messages published to the topic before the key changes remain encrypted with
the original key, regardless of whether it was a CMEK or
Google-owned and Google-managed encryption key. Changing a topic's CMEK does not re-encrypt
previously published messages — these messages remain protected with the
key that they were originally encrypted with, so message data within a topic
might still depend on the previous key for up to 31 days, depending on the
message retention duration specified on the topic or any of its subscriptions.
Pub/Sub has a caching mechanism for keys that lasts approximately
30 minutes. It might take up to this duration for Pub/Sub to
recognize and start using a new key that was manually changed in the topic
configuration.
Cloud KMS key rotation in Pub/Sub
Key configuration changes such as key rotation within Cloud KMS don't
directly trigger the creation of data encryption keys in Pub/Sub.
It might take up to 12 hours for Pub/Sub to start using new key
versions for encrypting message data.
As with manual configuration changes made to encryption settings in
Pub/Sub, these changes don't apply retroactively to messages that
were published in the past. Existing messages continue to be protected with
previous versions of the cryptographic key. These messages remain protected with
the key that they were originally encrypted with, so message data within a topic
might still depend on the previous key version for up to 31 days, depending on
the message retention duration specified on the topic or any of its
subscriptions.
Configure a topic with Cloud KMS Autokey
For more information on using Cloud KMS Autokey with
Pub/Sub, see Cloud KMS with
Autokey .
Audit logs
Cloud KMS produces audit logs when keys
are enabled, disabled, or used by Pub/Sub to encrypt and decrypt
messages. This is useful in debugging issues with publish or delivery
availability.
Cloud KMS keys are attached to audit logs for
Pub/Sub topic resources. Pub/Sub does not
include any other Cloud KMS-related information.
Pricing and cost
For the following Pub/Sub requests, the use of CMEK incurs
charges for access to the Cloud KMS service based on
Pub/Sub pricing :
For each topic using CMEK, a new DEK is encrypted and stored every six hours.
The key is used to decrypt DEKs every six minutes. The decryption happens
three times, once for every zone in the region where the
Pub/Sub service runs.
For example, consider a topic with:
At least one subscription
Publisher and subscriber clients in the same region
The number of Cloud KMS cryptographic operations can be estimated as:
1 key access for ENCRYPT * (30 days / month * 24 hours / day) / 6 hours
+ 3 key accesses for DECRYPT
* (30 days / month * 24 hours / day * 60 minutes / hour ) / 6 minutes
= 21,720 Cloud KMS key access events
Given a pricing structure in which cryptographic operations
cost $0.03 per 10,000 operations, the above usage would cost approximately $0.07.
Refer to Cloud KMS pricing for the most current
pricing information.
In practice, keys might be fetched more or less frequently depending on access
patterns. Use these numbers as estimates only.
Monitoring and troubleshooting
Issues with key access can have these effects:
Delays in message delivery
Publish errors
Monitor publish and pull request errors using the following
metrics , grouped by response_class
and response_code :
topic/send_request_count
subscription/pull_request_count
subscription/streaming_pull_response_count
StreamingPull response has a 100%
error rate. This is an indication that the stream has ended, not that requests
are failing. To monitor StreamingPull, look for the FAILED_PRECONDITION
response code.
Publishing and message delivery can fail with FAILED_PRECONDITION errors for
multiple reasons.
The Cloud KMS key could be disabled. For details, see
Disabling and re-enabling keys on this
page.
If you are using externally managed keys through Cloud EKM, see
the Cloud EKM error reference .
For push subscriptions, there is no way to directly detect CMEK-specific
delivery issues. Instead:
Monitor the size and age of the backlog of a push subscription using
subscription/num_unacked_messages .
Monitor subscription/oldest_unacked_message_age for unusual spikes.
Use publish errors and CMEK audit logs to spot issues.
Disabling and re-enabling keys
There are two ways to prevent Pub/Sub from decrypting your
message data:
Recommended: Disable the Cloud KMS key
you've associated with the topic using Pub/Sub. This approach
affects only the Pub/Sub topics and subscriptions that are
associated with that specific key.
Revoke the Pub/Sub CryptoKey Encrypter/Decrypter role
from the Pub/Sub service account
( service-$PROJECT_NUMBER@gcp-sa-pubsub.iam.gserviceaccount.com ) using
IAM. This approach affects all of the project's
Pub/Sub topics and the subscriptions that contain messages
encrypted using CMEK.
Although neither operation confirms instantaneous access revocation,
IAM changes generally propagate faster. To learn
more, see Cloud KMS resource consistency and
Access change propagation .
When Pub/Sub cannot access a Cloud KMS key, message
publishing and delivery with StreamingPull or pull fails with
FAILED_PRECONDITION errors. Message delivery to push endpoints will stop. To
resume delivery and publishing,
restore access to the
Cloud KMS key.
Once the Cloud KMS key is accessible to Pub/Sub,
publishing is available within 12 hours and message delivery resumes within 2
hours.
Although intermittent outages of less than a minute
for Cloud KMS are unlikely to
significantly interrupt publishing and delivery, extended Cloud KMS
unavailability has the same effect as key revocation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
