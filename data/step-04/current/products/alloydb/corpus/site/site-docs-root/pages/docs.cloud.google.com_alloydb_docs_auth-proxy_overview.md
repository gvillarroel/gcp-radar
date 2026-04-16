---
title: "About the AlloyDB Auth Proxy \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview
  title: "About the AlloyDB Auth Proxy \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Guides
Send feedback
About the AlloyDB Auth Proxy
Stay organized with collections
Save and categorize content based on your preferences.
This page provides an overview of the AlloyDB Auth Proxy, a connector that lets you
make authorized, encrypted connections to AlloyDB
databases.
For a step-by-step guide to using the Auth Proxy, see Connect using the AlloyDB Auth Proxy .
Benefits of using the AlloyDB Auth Proxy
The Auth Proxy provides these advantages over connecting clients directly to
AlloyDB databases:
IAM-based connection authorization (AuthZ): The Auth Proxy uses
the credentials and permissions of an Identity and Access Management (IAM) principal to authorize connections to
AlloyDB instances.
Automated IAM authentication (AuthN): The Auth Proxy can
automatically authenticate database users based on the IAM principal
running the proxy.
Secure, encrypted communication: The Auth Proxy automatically
creates, uses, and maintains a mutual TLS (mTLS) 1.3 connection
using a 256-bit AES cipher
between your client and an AlloyDB instance to verify client
and server identities and encrypt data traffic.
For more information about to connecting to AlloyDB instances,
see Connection overview .
How the AlloyDB Auth Proxy works
The AlloyDB Auth Proxy works by having a local client running
in the local environment. Your application communicates with the AlloyDB Auth Proxy
with the standard database protocol used by your database.
The AlloyDB Auth Proxy uses a secure tunnel (mTLS 1.3,
256-bit AES cipher) to
communicate with its companion process
running on the server. Each connection established through the AlloyDB Auth Proxy creates
one connection to the AlloyDB instance.
When an application connects to the AlloyDB Auth Proxy, it checks whether an existing
connection between it and the target AlloyDB instance is available.
If a connection does not exist, it calls AlloyDB Admin APIs to obtain
an ephemeral SSL certificate and uses it to connect to AlloyDB.
Ephemeral SSL certificates expire in 24 hours. The AlloyDB Auth Proxy refreshes
these certificates before they expire.
The AlloyDB Auth Proxy calls APIs through the domain name alloydb.googleapis.com
using HTTPS. As a result, all egress TCP connections on port 443 (HTTPS) from
the client machine must be allowed by your firewall.
While the AlloyDB Auth Proxy can listen on any port, it creates outgoing or egress
connections to your AlloyDB instance only on port 5433. If your client
host has an outbound firewall, it must allow connections to port 5433 on your
AlloyDB instance's IP address. The client host must also allow
connections to port 443, which is the standard HTTPS port, to all IP addresses.
How the AlloyDB Auth Proxy authorizes IAM principals
To authorize a client's connection to an AlloyDB instance, the
Auth Proxy client authenticates to Google Cloud using IAM principal
credentials on the client, and then validates that the IAM principal has the
Cloud AlloyDB Client ( roles/alloydb.client ) and Service Usage Consumer
( roles/serviceusage.serviceUsageConsumer ) IAM roles.
To locate the IAM credentials on the client, the Auth Proxy client checks
for each of the following items, using the first one it
finds to attempt authentication to Google Cloud:
Credentials supplied by the --credentials-file flag
Use a service account to
create and download the associated JSON key file, and set the
--credentials-file flag to the path of the file when you start
the Auth Proxy client.
The service account must have the Cloud AlloyDB Client
( roles/alloydb.client ) and Service Usage Consumer
( roles/serviceusage.serviceUsageConsumer )
IAM roles for the AlloyDB instance.
To use this option on the command-line, invoke the alloydb-auth-proxy command with
the --credentials-file flag set to the path and filename of a JSON credential
file. The path can be absolute, or relative to the current working directory.
Credentials supplied by the --token flag
Create an
access token and invoke the alloydb-auth-proxy command with the
--token flag set to an OAuth 2.0 access token.
Credentials supplied by an environment variable
This option is similar to using the --credentials-file flag, except you specify
the JSON credential file you set in the GOOGLE_APPLICATION_CREDENTIALS environment
variable instead of using the --credentials-file flag.
Credentials from an authenticated Google Cloud CLI client
If you installed the gcloud CLI
and have authenticated with your personal account, the Auth Proxy client
can use the same account credentials if you enable the
--gcloud-auth flag. This method is especially helpful for
getting a development environment up and running.
To enable the Auth Proxy client to use your gcloud CLI credentials,
use the gcloud auth login command to authenticate the gcloud CLI.
To determine your current gcloud CLI credentials, use the
gcloud auth list command.
If no account was selected for gcloud auth login , the
Auth Proxy client checks for an account that was selected for gcloud
auth application-default login . This is the default behavior when you
don't enable the --gcloud-auth flag.
Credentials associated with the Compute Engine instance
If you are connecting to AlloyDB from a Compute Engine instance, the
Auth Proxy client can use the service account associated with the Compute Engine instance.
If the service account has the Cloud AlloyDB Client
( roles/alloydb.client ) and Service Usage Consumer
( roles/serviceusage.serviceUsageConsumer )
Identity and Access Management (IAM) roles for the AlloyDB instance, the Auth Proxy client
authenticates successfully.
If the Compute Engine instance is in the same project as the AlloyDB
instance, the default service account for the Compute Engine instance has the
necessary permissions for authenticating the AlloyDB.
If the two instances are in different projects, you must add the Compute Engine
instance's service account to the project containing the AlloyDB
instance.
Environment's default service account
If the Auth Proxy client cannot find credentials in any of the places covered earlier, it
follows the logic documented in
Authenticating as a service account .
Some environment (such as Compute Engine, App Engine, and others) provide a
default service account that your application can use to authenticate by default. If
you use a default service account, it must have the Cloud AlloyDB Client
( roles/alloydb.client ) and Service Usage Consumer
( roles/serviceusage.serviceUsageConsumer ) IAM roles.
For more information about Google Cloud's approach to authentication, see
Authentication overview .
What's next
Connect using the AlloyDB Auth Proxy .
Explore the Google Cloud GitHub repository for the AlloyDB Auth Proxy .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
