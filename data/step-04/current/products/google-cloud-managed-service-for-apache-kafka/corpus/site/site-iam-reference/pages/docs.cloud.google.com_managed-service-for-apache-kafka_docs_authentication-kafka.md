---
title: "Configure SASL authentication \_|\_ Google Cloud Managed Service for Apache\
  \ Kafka \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authentication-kafka
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authentication-kafka
  title: "Configure SASL authentication \_|\_ Google Cloud Managed Service for Apache\
    \ Kafka \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Google Cloud Managed Service for Apache Kafka
Guides
Send feedback
Configure SASL authentication
Stay organized with collections
Save and categorize content based on your preferences.
Clients can connect to Managed Service for Apache Kafka clusters by using the open
source Apache Kafka API. All connections must be encrypted using TLS; plaintext
communication is not supported. Authentication is handled through one of two
supported mechanisms, each with a different credential type: SASL or mTLS.
This document describes how to authenticate using the SASL method. Clients
authenticate using the credentials of an authorized Identity and Access Management principal, such
as a service account. Managed Service for Apache Kafka manages the server-side broker
certificates for all connections.
Before you begin
Learn more about the following:
Service accounts overview
Authenticate to the Managed Kafka API
Principal identifiers
Grant the Managed Kafka client role to the service account
You must grant the roles/managedkafka.client
IAM role on the project containing the cluster to the service
account that you are going to use to connect to the cluster.
The Managed Kafka client role includes the permission
managedkafka.clusters.connect required for all connections.
To grant the Managed Kafka client role to the service account,
follow these steps:
Console
In the Google Cloud console, go to the IAM page. Go to IAM
Check that the project is set to the consumer project that the
Managed Service for Apache Kafka client would be accessing.
Click Grant access .
In the new page, for Add Principals , enter the email
address of the service account that you are using.
For Assign roles , select the Managed Kafka
client role.
Click Save .
gcloud CLI
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
Run the gcloud
projects add-iam-policy-binding command:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member serviceAccount: SERVICE_ACCOUNT_EMAIL \
--role roles/managedkafka.client
Replace the following:
PROJECT_ID is the project ID.
SERVICE_ACCOUNT_EMAIL is the email address of the
service account.
Configure the Kafka client for authenticating to Google Cloud
You can authenticate Kafka clients to Google Cloud by using one of the
following mechanisms:
OAUTHBEARER (Recommended) : This mechanism requires using
Application Default Credentials (ADC). ADC is a strategy used by the
authentication libraries to automatically find credentials based on the
application environment. For more information about where ADC looks for
credentials and in what order, see
How Application Default Credentials works .
SASL/PLAIN : This mechanism requires using a username and password
that can be derived from a service account key JSON file, or an access token.
In general, OAUTHBEARER is the recommended option. However, SASL/PLAIN might
be a more convenient mechanism for testing.
OAuthBearer authentication
For information about how to authenticate to the open source Kafka API,
see the documentation on GitHub .
SASL/PLAIN authentication
Managed Service for Apache Kafka supports SASL/PLAIN authentication with either a service
account key JSON file, or an access token.
Service account key JSON file
Caution:
Service account keys are a security risk if not managed correctly. You are responsible for the
security of the private key and for other operations described by
Best practices for managing service account keys .
If you are prevented from creating a service account key, service account key creation might
be disabled for your organization. For more information, see
Managing secure-by-default organization resources .
If you acquired the service account key from an external source, you must validate it before use.
For more information, see
Security requirements for externally sourced credentials .
This method is applicable to all Kafka clients.
Download a service account key JSON file
for the service account that you intend to use for your client.
Encode the service account file by using base64-encode to use as your
authentication string. Assume the filename as
my_service_account_key.json .
On Linux or macOS systems, use the base64 command
(often installed by default) as follows:
base64 -w 0 < my_service_account_key.json > password.txt
This command performs the following actions:
base64 < my_service_account_key.json :
Reads the contents of the file named
my_service_account_key.json .
Encodes the file's contents using base64 encoding. Base64 encoding is a
way to represent binary data (such as JSON data in your service account
file) as ASCII text. This is often used for transmitting data over
channels that are designed for text.
> password.txt : Redirects the output of the base64 command
(the base64 encoded version of your service account file) into a new
file named password.txt .
You can use the contents of the password file for authentication with the
following parameters.
security.protocol = SASL_SSL
sasl.mechanism = PLAIN
sasl.jaas.config = org.apache.kafka.common.security.plain.PlainLoginModule required \
username = " SERVICE_ACCOUNT_EMAIL_ADDRESS " \
password = " CONTENTS_OF_BASE64_ENCODED_PASSWORD_FILE " ;
Replace the following:
SERVICE_ACCOUNT_EMAIL_ADDRESS : The email address of the
service account that you want to use for authentication.
CONTENTS_OF_BASE64_ENCODED_PASSWORD_FILE : The contents
of the base64-encoded password file that you obtained in the previous
step. This must be a single line.
When authenticating incoming connections to the cluster,
Managed Service for Apache Kafka checks the following:
The provided username matches the service account whose key is used in the
password.
The provided service account principal has the permission
managedkafka.clusters.connect (included in the roles/managedkafka.client
IAM role) on the cluster.
Access token
Caution: Special care is required when using access tokens with
SASL/PLAIN, as access tokens are short-lived and can expire. You need to
ensure that your client library presents a valid access token at the time of
establishing each new Kafka wire protocol connection.
For more information and reference implementations, see the
documentation on GitHub .
Get an access token for the principal that you want to use for authentication.
For example, get an access token for the current gcloud CLI
principal:
gcloud auth print-access-token
You can use the access token for authentication with the following parameters.
security.protocol = SASL_SSL
sasl.mechanism = PLAIN
sasl.jaas.config = org.apache.kafka.common.security.plain.PlainLoginModule required \
username = " PRINCIPAL_EMAIL_ADDRESS " \
password = " ACCESS_TOKEN_VALUE " ;
Replace the following:
PRINCIPAL_EMAIL_ADDRESS : The email address of the
principal that you used to obtain the access token.
ACCESS_TOKEN_VALUE : The access token value that you
obtained in the previous step.
When authenticating incoming connections to the cluster,
Managed Service for Apache Kafka checks the following:
The access token is valid and has not expired.
The provided username matches the principal email that the access token is
associated with.
The access token's principal has the permission
managedkafka.clusters.connect (included in the roles/managedkafka.client
IAM role) on the cluster.
Workload Identity Federation for GKE
This section only applies when using Workload Identity Federation for GKE .
If you are
linking your Kubernetes service account to an IAM service account
using the iam.gke.io/gcp-service-account annotation, then this
section does not apply.
Managed Service for Apache Kafka supports authentication to the open source Apache Kafka
API using Workload Identity Federation for GKE .
Authentication is supported for both SASL/PLAIN and SASL/OAUTHBEARER.
To use Workload Identity Federation for GKE with Managed Service for Apache Kafka you must
comply with the following requirements:
Use GKE version 1.31.1-gke.1241000 or higher.
Annotate your Kubernetes service account with iam.gke.io/return-principal-id-as-email: "true" .
For example:
apiVersion : v1
kind : ServiceAccount
metadata :
name : kafka-service-account
annotations :
iam.gke.io/return-principal-id-as-email : "true"
If you use the local auth server ,
check that you also use version 2.40.3 or higher of the google-auth package .
Verify the GKE principal has the permission
managedkafka.clusters.connect (included in the roles/managedkafka.client
IAM role).
Managed Service for Apache Kafka does not support authentication to the open source Apache Kafka
API using Fleet workload identity .
As an alternative, you can link your Kubernetes service account to an IAM service account .
Troubleshoot authentication errors
If a Managed Service for Apache Kafka client cannot authenticate to
Managed Service for Apache Kafka, you see an error message similar to the following:
Exception in thread "main" java.util.concurrent.ExecutionException:
org.apache.kafka.common.errors.SaslAuthenticationException:
Authentication failed: Invalid username or password
To resolve the issue, check for the following causes:
The password is malformed, and doesn't represent a valid service account
key JSON blob when base64 decoded, or a valid access token.
The authenticating principal doesn't have the managedkafka.clusters.connect
permission on the cluster.
The provided username doesn't match the credential's principal.
If a client experiences frequent disconnections every 30 minutes, this can be
due to the client not supporting periodic re-authentication.
Managed Service for Apache Kafka brokers require clients to re-authenticate every
30 minutes, enforced by the connections.max.reauth.ms broker property.
Verify that your Kafka client library version is 2.2.0 or later, and supports
re-authentication.
What's next
Access control with Kafka ACLs .
Authenticate to Managed Kafka API .
Apache Kafka® is a registered
trademark of The Apache Software Foundation or its affiliates in the United
States and/or other countries.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
