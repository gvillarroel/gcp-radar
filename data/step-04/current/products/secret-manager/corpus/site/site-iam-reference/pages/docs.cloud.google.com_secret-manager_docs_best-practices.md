---
title: "Secret Manager best practices \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secret-manager/docs/best-practices
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/secret-manager/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/secret-manager/docs/best-practices
  title: "Secret Manager best practices \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Secret Manager
Guides
Send feedback
Secret Manager best practices
Stay organized with collections
Save and categorize content based on your preferences.
This guide introduces some best practices when using Secret Manager. The guide is not an
exhaustive list of recommendations. We recommend reviewing the
platform overview in order to understand the
overall Google Cloud landscape and the
Secret Manager overview
before you read this guide.
Access control
Access to the Secret Manager API is protected by IAM.
Follow the principle of least privilege when granting permissions to secrets.
Limit organization ownership to a secured super admin
account .
Segment applications and environments (staging or production) into separate
projects as described in Decide
a resource hierarchy for your Google Cloud landing zone . This can help isolate environments
with project level IAM binding and ensures that quotas are enforced independently.
Choose a curated-role
with the minimal necessary permissions, or create a custom role
if necessary.
When secrets for many services are in a single project, use
secret level
IAM bindings , or IAM
Conditions to limit access to the necessary subset of secrets.
IAM Recommender
can further assist in identifying over privileged IAM bindings.
Credentials are required to authenticate to the Secret Manager API. The
client libraries all use a similar strategy to look for credentials referred to
as Application Default Credentials .
When developing locally use
gcloud auth application-default login . This creates a file with credentials that are
automatically picked up by client libraries.
On Compute Engine and other Google Cloud compute platforms like
Cloud Run functions, the client libraries obtain credentials through the
instance metadata server .
On GKE, workload identity
provides credentials through a metadata service, as well.
On other platforms like Amazon Web Services or Microsoft Azure, consider
setting up workload identity federation ,
which uses existing identity mechanisms to authenticate to Google Cloud APIs.
All of these methods are preferred to exporting a service account credential
because they don't require securely storing and accessing an additional secret
outside of the Secret Manager API.
Coding practices
Avoid passing secrets to your application through the file system or through the environment
variables. The following are some reasons for using other methods for handling secrets:
When a secret is accessible on the file system, application vulnerabilities
like directory traversal attacks can become higher severity as the attacker
may gain the ability to read the secret material.
When a secret is consumed through environment variables, misconfigurations
such as enabling debug endpoints or including dependencies that log process
environment details may leak secrets.
When syncing secret material to another datastore (like Kubernetes
Secrets), evaluate the access controls provided by that data store. Consider the following:
Does the datastore expand the access of the secret?
Is it possible to audit access of the secret?
Does the datastore comply with your data-at-rest encryption and
regionalization requirements?
We recommend using the Secret Manager API directly using one of the
provided client libraries , or by following the
REST or
GRPC documentation.
However, for some product integrations such as serverless integrations, you may
pass secrets through the file system or through environment variables. For
information, see Use Secret Manager with other products .
Administration
Choose the automatic replication policy when
creating secrets unless your workload has specific location requirements (enforceable
using the constraints/gcp.resourceLocations constraint).
Reference secrets by their
version number rather than using the latest alias.
Deploy updates to version numbers using your existing release processes. Typically this means
configuring your application with a specific secret version that is read on startup. Although using the
latest alias might be convenient, if there is a problem with the new version of the secret, your
workload may be left unable to use the secret version. By pinning to a version number, the configuration
can be validated and rolled back using your existing release processes.
Disable secret versions before
destroying them or deleting secrets. This helps prevent outages by putting the
secret in a state that appears the same as destroy but is reversible. That is,
you can disable and wait a week so that you can be sure there are no lingering
dependencies before permanently deleting data.
Don't set expiration
on production secrets unless you are certain that they should be irreversibly deleted. The expiration
feature is best suited for automated cleanup of temporary environments. Consider
time-based IAM conditions
as an alternative to expiring secrets.
Periodically rotate
your secrets to do the following:
Limit the impact in the case of a leaked secret.
Ensure that individuals who no longer require access to a secret can't continue
to use a previously accessed secret.
Reduce the likelihood of an outage.
Monitor secrets across your organization using Cloud Asset Inventory
for the following reasons:
Help identify secrets across your organization.
Identify non-conformance to organization requirements such as rotation,
encryption configuration, and location.
Enable data access logs to obtain and
analyze the AccessSecretVersion request information. Enable this at the folder or
organization level to enforce logging without having to configure it on every secret or project.
In addition to IAM controls, you can limit access to the Secret Manager API
with network-based controls by setting up a
VPC Service Controls perimeter
for your organization.
The constraints/iam.allowedPolicyMemberDomains
organization policy can be used to limit the identities that can be added to IAM policies
for secrets.
Estimate your peak secret usage (considering a thundering herd
of requests due to concurrent application deploys or autoscaling of your service) and ensure that
your project has enough quota to handle such an event. If more quota
is needed, request an increase .
Data residency compliance
Choose regional secrets if you have strict data residency and
sovereignty requirements. Regional secrets let you store sensitive data within a specific geographic
location, providing complete at-rest, in-use, and in-transit guarantees, helping you comply with legal,
regulatory, or organizational requirements surrounding data residency.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
