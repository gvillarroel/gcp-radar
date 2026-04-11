---
title: "About IAM authentication \_|\_ Memorystore for Redis Cluster \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/cluster/about-iam-auth
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/cluster/access-control
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/cluster/about-iam-auth
  title: "About IAM authentication \_|\_ Memorystore for Redis Cluster \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Redis Cluster
Guides
Send feedback
About IAM authentication
Stay organized with collections
Save and categorize content based on your preferences.
Memorystore provides the Identity and Access Management (IAM) authentication
feature that leverages IAM to help you better manage
login access for users and service accounts. IAM-based
authentication integrates with Redis AUTH, letting you seamlessly rotate
credentials (IAM tokens) without relying on static passwords.
For instructions on setting up IAM authentication for your
Memorystore cluster, see Manage IAM authentication .
IAM authentication for Redis
When using IAM authentication, permission to access a Memorystore cluster
isn't granted directly to the end user. Instead, permissions are grouped into
roles, and roles are granted to principals. For more information, see the
IAM overview .
Note: Memorystore lets you restrict access to a cluster by
granting the roles/redis.dbConnectionUser role the users you choose. For
information about limiting user access on a per-cluster basis, see Grant access to a group of resources based on resource name prefixes .
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
user requires the redis.clusters.connect permission to authenticate with a
cluster. To get this permission, you can bind the user or service account to the
predefined Redis Cluster DB Connection User
( roles/redis.dbConnectionUser ) role. For more information about
IAM roles, see Roles .
Resources . The resources that principals access are Memorystore
clusters. By default, IAM policy bindings are applied at the
project-level, such that principals receive role permissions for all
Memorystore instances in the project. However, IAM
policy bindings can be restricted to a particular cluster. For instructions, see
Manage permissions for IAM authentication .
Redis AUTH command
The IAM authentication feature uses the Redis AUTH command to
integrate with IAM, allowing clients to provide an
IAM access token that will be verified by the
Memorystore cluster before allowing access to data.
Like every command, the AUTH command is sent unencrypted unless In Transit Encryption is enabled.
For an example of what the AUTH command can look like, see Connecting to a Redis cluster that uses IAM authentication .
IAM access token time frame
By default, the IAM access token that you retrieve as a part of
authentication expires one hour after it's retrieved. Alternatively, when you generate the access token , you can extend
the token's expiration time for up to 12 hours.
When you establish a new Redis connection, you must present a valid access token
by using the AUTH command. If the token expires, then you must get a new token
to establish new connections. However, if you already authenticated an existing
connection, then it continues to work, even if the token expires.
Note: We strongly recommend that you automate access token retrieval in your application. You can't
hardcode an access token because of its short lifetime.
End an authenticated connection
If you want to end the connection, then use the Redis CLIENT KILL
command. To find the connection that you want to end, first run CLIENT LIST ,
which returns client connections in order of age. You can then run CLIENT KILL
to end the connection.
Enable IAM authentication
Enabling IAM authentication doesn't degrade steady state
performance. However, it does affect the rate that you can establish a
connection.
Enabling IAM authentication throttles the rate of client
connections that are established every second. This is because Google Cloud's
IAM authentication must authenticate each new connection. In
steady state, an application enables connection pools so this impact is
negligible. However, when client applications are refreshed through deployments
or bounce processing, there might be an influx of connections established again.
If you update your clients gradually and you implement exponential backoffs,
then you can absorb this reduced rate.
To view a code sample of how to use IAM authentication, see
IAM authentication and in-transit encryption code sample .
Security and privacy
IAM authentication helps you ensure that your Redis cluster is
only accessible by authorized IAM principals. TLS encryption is
not provided unless In Transit Encryption
enabled. For this reason, it is recommended that In Transit Encryption
be turned on when using IAM authentication.
Connect with a Compute Engine VM
If you are using a Compute Engine VM to Connect to an instance that uses IAM authentication you must enable the following access scopes and APIs for your project:
Cloud Platform API scope . For instructions on enabling this scope, see Attach the service account and update the access scope . For a description of best practices for this access scope, see Scopes best practice .
Memorystore for Redis Cluster API . For a link to enable the API, click the following button:
Memorystore for Redis Cluster
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
