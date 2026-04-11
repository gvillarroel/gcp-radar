---
title: "Overview of access control \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage/docs/access-control
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage/docs/introduction
source_metadata:
  url: https://docs.cloud.google.com/storage/docs/access-control
  title: "Overview of access control \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
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
Overview of access control
Stay organized with collections
Save and categorize content based on your preferences.
You control who has access to your Cloud Storage buckets and objects
and what level of access they have.
Choose between uniform and fine-grained access
When you create a bucket, you should decide whether you want to apply
permissions using uniform or fine-grained access.
Uniform (recommended) : Uniform bucket-level access allows you to use
Identity and Access Management (IAM) alone to manage permissions. IAM
applies permissions to all the objects contained inside the bucket or groups of
objects with common name prefixes. IAM also allows you to use
features that are not available when working with ACLs, such as
managed folders , IAM Conditions ,
domain restricted sharing , and workforce identity federation .
Fine-grained : The fine-grained option enables you to use
IAM and Access Control Lists (ACLs) together to manage
permissions. ACLs are a legacy access control system for Cloud Storage
designed for interoperability with Amazon S3. ACLs also allow you to specify
access on a per-object basis.
Because fine-grained access requires you to coordinate between two different
access control systems, there is an increased chance of unintentional data
exposure, and auditing who has access to resources is more complicated.
Particularly if you have objects that contain sensitive data, such as
personally identifiable information, we recommend storing that data in a
bucket with uniform bucket-level access enabled.
Note: Once you enable uniform bucket-level access, you have 90 days to switch
back to fine-grained access before uniform bucket-level access becomes
permanent.
Using IAM permissions with ACLs
Cloud Storage offers two systems for granting users access your buckets
and objects: IAM and Access Control Lists (ACLs). These systems
act in parallel - in order for a user to access a Cloud Storage
resource, only one of the systems needs to grant that user permission. For
example, if your bucket's IAM policy only allows a few users to
read object data in the bucket, but one of the objects in the bucket has an ACL
that makes it publicly readable, then that specific object is exposed to the
public.
Caution: In general, IAM cannot detect permissions granted by
ACLs, and ACLs cannot detect permissions granted by IAM.
In most cases, IAM is the recommended method for controlling
access to your resources. IAM controls permissioning throughout
Google Cloud and allows you to grant permissions at the bucket and project
levels. You should use IAM for any permissions that apply to
multiple objects in a bucket to reduce the risks of unintended exposure. To use
IAM exclusively, enable uniform bucket-level access to disallow ACLs for
all Cloud Storage resources.
ACLs control permissioning only for Cloud Storage resources and have limited
permission options, but allow you to grant permissions per individual objects.
You most likely want to use ACLs for the following use cases:
Customize access to individual objects within a bucket.
Migrate data from Amazon S3.
Additional access control options
In addition to IAM and ACLs, the following tools are available to help you
control access to your resources:
Signed URLs (query string authentication)
Use signed URLs to give time-limited read or write access to an object
through a URL you generate. Anyone with whom you share the URL can access the
object for the duration of time you specify, regardless of whether or not they
have a user account.
You can use signed URLs in addition to IAM and ACLs. For example,
you can use IAM to grant access to a bucket for only a few
people, then create a signed URL that allows others to access a specific
resource within the bucket.
Learn how to create signed URLs:
Create signed URLs with the Google Cloud CLI or client libraries .
Create signed URLs with your own program .
Signed policy documents
Use signed policy documents to specify what can be uploaded to a bucket. Policy
documents allow greater control over size, content type, and other upload
characteristics than signed URLs, and can be used by website owners to allow
visitors to upload files to Cloud Storage.
You can use signed policy documents in addition to IAM and ACLs.
For example, you can use IAM to allow people in your organization
to upload any object, then create a signed policy document that allows website
visitors to upload only objects that meet specific criteria.
Firebase Security Rules
Use Firebase Security Rules to provide granular, attribute-based access control
to mobile and web apps using the Firebase SDKs for Cloud Storage . For example,
you can specify who can upload or download objects, how large an object can be,
or when an object can be downloaded.
Public access prevention
Use public access prevention to restrict public access to your buckets and
objects. When you enable public access prevention, users who gain access
through allUsers and allAuthenticatedUsers are disallowed access to
data.
Credential Access Boundaries
Use Credential Access Boundaries to downscope the permissions that are
available to an OAuth 2.0 access token. First, you define a Credential Access
Boundary that specifies which buckets the token can access, as well as an upper
bound on the permissions that are available on that bucket. You can then
create an OAuth 2.0 access token and exchange it for a new access token
that respects the Credential Access Boundary.
Bucket IP filtering
Use Bucket IP filtering to restrict access on your bucket based on the
source IP address of the request. Bucket IP filtering adds a layer of security
by preventing unauthorized networks from accessing your bucket and its data.
You can configure a list of permitted IP address ranges, including public IP addresses,
ranges of public IP addresses and IP addresses within your Virtual Private Cloud.
Any requests originating from an IP address that's not on your list are blocked.
As a result, only authorized users can access your bucket.
Best practices for IAM and ACLs
IAM policies and ACLs require active management to be effective.
Before you make a bucket, object, or managed folder accessible to other users,
be sure you know who you want to share the resource with and what roles you want
each of those people to have. Over time, changes in project management, usage
patterns, and organizational ownership might require you to modify IAM
or ACL settings on buckets and projects, especially if you manage
Cloud Storage in a large organization or for a large group of users. As
you evaluate and plan your access control settings, keep the following best
practices in mind:
Use the principle of least privilege when granting access to your buckets,
objects, or managed folders.
The principle of least privilege is a security
guideline for granting access to your resources. When you grant access based
on the principle of least privilege, you grant the minimum permission
that's necessary for a user to accomplish their assigned task. For example,
if you want to share files with someone, you should grant them the
Storage Object Viewer IAM role or the READER ACLs
permission, and not the Storage Admin IAM role or the
OWNER ACLs permission.
Avoid granting IAM roles with setIamPolicy permission or
granting the ACL OWNER permission to people you don't know.
Granting the setIamPolicy IAM permission or the
OWNER ACLs permission allows a user to change permissions and take control
of data. You should use roles with these permissions only when you want to
delegate administrative control over objects, buckets, and managed folders.
Be careful how you grant permissions for anonymous users.
The allUsers and allAuthenticatedUsers principal types should only be
used when it is acceptable for anyone on the internet to read and analyze
your data. Although these scopes are useful for some applications and
scenarios, it usually isn't a good idea to grant all users certain
permissions, such as the IAM permissions setIamPolicy ,
update , create , or delete , or the ACLs OWNER permission.
Be sure you delegate administrative control of your buckets.
You should be sure that your resources can still be managed by
other team members in case an individual with administrative access leaves the
group.
To prevent resources from becoming inaccessible, you can do any of the
following:
Grant the Storage Admin IAM role for your project to a
group instead of an individual.
Grant the Storage Admin IAM role for your project to
at least two individuals.
Grant the OWNER ACLs permission for your bucket to at least two
individuals.
Be aware of Cloud Storage's interoperable behavior.
When using the XML API for interoperable access with other storage services,
such as Amazon S3, the signature identifier determines the ACL syntax. For
example, if the tool or library you are using makes a request to
Cloud Storage to retrieve ACLs and the request uses another storage
provider's signature identifier, then Cloud Storage returns an XML
document that uses the corresponding storage provider's ACL syntax. If the
tool or library you are using makes a request to Cloud Storage to
apply ACLs and the request uses another storage provider's signature
identifier, then Cloud Storage expects to receive an XML document
that uses the corresponding storage provider's ACL syntax.
For more information about using the XML API for interoperability with
Amazon S3, see
Simple migration from Amazon S3 to Cloud Storage .
What's next
Learn how to use IAM permissions .
Refer to IAM permissions and roles specific to Cloud Storage .
View examples of sharing and collaboration scenarios that involve setting bucket and object ACLs.
Learn how to make your data accessible to everyone on the public internet .
Learn more about when to use a signed URL .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
