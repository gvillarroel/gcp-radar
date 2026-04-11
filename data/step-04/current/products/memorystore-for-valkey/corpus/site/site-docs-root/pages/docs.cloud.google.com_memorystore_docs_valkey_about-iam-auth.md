---
title: "About IAM authentication \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/valkey/about-iam-auth
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/valkey
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/valkey/about-iam-auth
  title: "About IAM authentication \_|\_ Memorystore for Valkey \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Valkey
Guides
Send feedback
About IAM authentication
Stay organized with collections
Save and categorize content based on your preferences.
Memorystore provides the Identity and Access Management (IAM) authentication feature that
leverages IAM to help you better manage
login access for users and service accounts. IAM-based
authentication integrates with Valkey AUTH, letting you seamlessly rotate
credentials (IAM tokens) without relying on static passwords.
For instructions on setting up IAM authentication for your
Memorystore instance, see Manage IAM authentication .
IAM authentication for Valkey
When using IAM authentication, permission to access a Memorystore instance
isn't granted directly to the end user. Instead, permissions are grouped into
roles, and roles are granted to principals. For more information, see the
IAM overview .
Note: Memorystore lets you restrict access to an instance by
granting the roles/memorystore.dbConnectionUser role the users you choose. For
information about limiting user access on a per-instance basis, see Grant access to a group of resources based on resource name prefixes .
For more information about granting permissions for IAM
authentication, see Grant permissions for IAM authentication .
Administrators who authenticate with IAM can use
Memorystore IAM authentication to centrally manage
access control to their instances using IAM policies.
IAM policies involve the following entities:
Principals . In Memorystore, you can use two types of principals:
A user account, and a service account (for applications). Other principal types,
such as Google groups, Google Workspace domains, or Cloud Identity domains are
not yet supported for IAM authentication. For more information,
see Concepts related to identity .
Roles . For Memorystore IAM authentication, a
user requires the memorystore.instances.connect permission to authenticate with an instance. To get this permission, you can bind the user or service account to the
predefined Memorystore DB Connection User
( roles/memorystore.dbConnectionUser ) role. For more information about
IAM roles, see Roles .
Resources . The resources that principals access are Memorystore
instances. By default, IAM policy bindings are applied at the
project-level, such that principals receive role permissions for all
Memorystore instances in the project. However, IAM
policy bindings can be restricted to a particular instance. For instructions, see
Manage permissions for IAM authentication .
Valkey AUTH command
The IAM authentication feature uses the Valkey AUTH command to
integrate with IAM, allowing clients to provide an
IAM access token that will be verified by the
Valkey instance before allowing access to data.
Like every command, the AUTH command is sent unencrypted unless In Transit Encryption is enabled.
For an example of what the AUTH command can look like, see Connect to an instance that uses IAM authentication .
IAM access token time frame
By default, the IAM access token that you retrieve as a part of
authentication expires one hour after it's retrieved. Alternatively, when you generate the access token , you can extend
the token's expiration time for up to 12 hours.
When you establish a new Valkey connection, you must present a valid access
token by using the AUTH command. If the token expires, then you must get a new
token to establish new connections. However, if you already authenticated an
existing connection, then it continues to work, even if the token expires.
Note: We strongly recommend that you automate access token retrieval in your application. You can't
hardcode an access token because of its short lifetime.
End an authenticated connection
To end a connection, use the Valkey CLIENT KILL command. First, run CLIENT LIST to
identify the connection, and then run CLIENT KILL to end it.
Enable IAM authentication
Enabling IAM authentication doesn't degrade steady state
performance. However, it does affect the rate that you can establish a
connection.
Enabling IAM authentication throttles the rate of client
connections that are established every second. This is because Google Cloud's
IAM authentication must authenticate each new connection. In
steady state, an application enables connection pools so this impact is
negligible. However, when client applications are restarted or deployed, there
might be a surge of new connections. If you update your clients gradually and
you implement exponential backoff, then you can absorb this reduced rate.
To view a code sample of how to use IAM authentication, see
Code sample for both IAM authentication and in-transit encryption .
Security and privacy
IAM authentication helps you ensure that your Valkey instance is
only accessible by authorized IAM principals. TLS encryption is
not provided unless In Transit Encryption
enabled. For this reason, it is recommended that In Transit Encryption
be turned on when using IAM authentication.
Connect with a Compute Engine VM
If you are using a Compute Engine VM to Connect to an instance that uses IAM authentication you must enable the following access scopes and APIs for your project:
Cloud Platform API scope . For instructions on enabling this scope, see Attach the service account and update the access scope . For a description of best practices for this access scope, see Scopes best practice .
Memorystore for Valkey API . For a link to enable the API, click the following button:
Memorystore for Valkey
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
