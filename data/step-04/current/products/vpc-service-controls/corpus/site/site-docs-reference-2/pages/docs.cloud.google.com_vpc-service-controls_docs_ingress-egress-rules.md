---
title: "Ingress and egress rules \_|\_ VPC Service Controls \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/vpc-service-controls/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules
  title: "Ingress and egress rules \_|\_ VPC Service Controls \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
VPC Service Controls
Guides
Send feedback
Ingress and egress rules
Stay organized with collections
Save and categorize content based on your preferences.
This page explains ingress and egress rules for VPC Service Controls.
VPC Service Controls uses ingress and egress rules to allow access to and from the
resources and clients protected by service perimeters.
The ingress
and egress
rule blocks specify the direction of allowed access to and from different
identities and resources. Ingress and egress rules can replace and simplify use
cases that previously required one or more perimeter bridges .
To learn how to apply ingress and egress policies to your service perimeter, see
Configuring ingress and egress policies .
You can configure identity groups and third-party
identities and
IAM roles
( Preview ) in ingress and egress rules.
For a list of secure data exchange use cases and samples, see Secure data exchange with ingress and egress rules .
For a list of context-aware access use cases and samples, see Context-aware access with ingress rules .
Benefits of ingress and egress rules
Ingress and egress rules allow you to privately and efficiently exchange data
within and across organizations using Google Cloud service APIs.
Ingress and egress rules allow you to grant access to Google Cloud
resources in a perimeter based on the context of the API request:
Constrain identity types or identities that can be used given a source
network, IP address, or device.
Constrain Google Cloud APIs and methods that can be accessed given
the source network, IP address, device, and identity type.
Minimize exfiltration risk by constraining the exact service, methods,
Google Cloud projects, VPC networks, and identities used to execute the data exchange.
Grant read-only access to external datasets and images that are not
managed by you.
Ensure that clients in less privileged segments do not have access to
Google Cloud resources in more privileged segments; while allowing
access in the other direction.
Simplify configurations which have previously required one or more perimeter bridges .
Definition of ingress and egress
The definitions of ingress and egress are independent of the operation being
invoked on the resource. Thus, the definitions refer to the direction of the
request and not to the direction of data movement.
Ingress : Refers to any access by an API client from outside the service
perimeter to resources within a service perimeter. Example:
A Cloud Storage client outside a service perimeter calling
Cloud Storage read, write, or copy operations on a Cloud Storage
resource within the perimeter.
Egress : Refers to any access that involves an API client or resources
within the service perimeter and resources outside a service perimeter.
Examples:
A Compute Engine client within a service perimeter calling a
Compute Engine create operation where the image resource is outside the
perimeter.
A Cloud Storage client – within or outside the perimeter – that calls a
copy command where one bucket is within the perimeter and the other bucket
is outside it.
Note: VPC Service Controls allows access to a few Google-managed resources regardless
of any restrictions enforced by ingress or egress policies. For example, Container Registry
can access the read-only Google-managed gcr.io/cloud-dataflow repository irrespective
of any restrictions enforced by the service perimeter.
Policy model
An ingress or egress rule consists of from and to blocks where:
from references the attributes of the API client.
to references the attributes of Google Cloud services and resources.
Multiple ingress and egress rules can be associated with a service perimeter. A
Google Cloud service call is allowed or denied based on the following
semantics:
A request from a client outside the perimeter to a Google Cloud resource
within the perimeter is allowed if the conditions of the necessary ingress
rule are satisfied.
A request from a client within the perimeter to a Google Cloud resource
outside the perimeter is allowed if the conditions of the necessary egress
rule are satisfied.
An API call that involves a Google Cloud resource within the perimeter
and a Google Cloud resource outside the perimeter is allowed if there is
an ingress rule that the client satisfies (if the client is not within the
perimeter), and an egress rule that the external resource satisfies.
Examples of API requests allowed by ingress rules
A Cloud Storage client outside the perimeter downloading objects from a
Cloud Storage bucket inside the perimeter to the local machine (for example
using the gcloud storage cp command).
A BigQuery client outside the perimeter using a BigQuery job
in a project inside the perimeter to query a BigQuery dataset inside
the perimeter (for example using the bq query command).
A Compute Engine VM in a VPC network that is outside the perimeter writes to
a Cloud Storage bucket inside the perimeter.
Examples of API requests allowed by egress rules
A Cloud Storage client inside the perimeter copying objects between a
Cloud Storage bucket outside the perimeter and a bucket inside the
perimeter (for example using the gcloud storage cp command).
Note: In this example, the same egress rule allows copying Cloud Storage
objects in both directions. Ingress and egress rules are agnostic of the API
request semantics and the data movement direction.
A BigQuery client inside the perimeter using a BigQuery job
in a project outside the perimeter to query a BigQuery dataset inside
the perimeter (for example using the bq query command).
Examples of API requests allowed by combination of ingress and egress rules
A Cloud Storage client outside the perimeter copying objects between a
Cloud Storage bucket outside the perimeter and a bucket inside the
perimeter (for example using the gcloud storage cp command).
A BigQuery client outside the perimeter using a BigQuery job
in a project outside the perimeter to query a BigQuery dataset inside
the perimeter (for example using the bq query command).
A Compute Engine client outside the perimeter creating a Compute Engine
disk outside the perimeter using a Cloud KMS key inside the
perimeter.
Note: In this example, the egress rule must be created in the perimeter that
contains the project containing the Cloud KMS key. The egress rule must
allow access to the compute.googleapis.com service and the
compute.v1.ImagesService.Insert method.
In the BigQuery and Compute Engine examples, an ingress rule is not
sufficient, because the BigQuery job or the Compute Engine disk is
outside the perimeter. An egress rule is required to allow an API request that
involves a Google Cloud resource inside the perimeter (the
BigQuery dataset or the Cloud KMS key) and a resource outside
the perimeter (the BigQuery job or the Compute Engine
disk).
API requests involving multiple service perimeters
When the accessed resources and/or the API client belong to different service
perimeters, the policies of all the involved perimeters must allow the API
request. For example, consider a Cloud Storage client and bucket a within a
service perimeter A and a bucket b within a service perimeter B . In this example, for the
Cloud Storage client to copy objects from the bucket a to bucket b and
from the bucket b to bucket a , the following ingress and egress rules are required:
an egress rule in perimeter A to allow access to the Cloud Storage
bucket b ,
an egress rule in perimeter B to allow access to the Cloud Storage
bucket a ,
an ingress rule in perimeter B to allow access for the
Cloud Storage client that is outside the perimeter B .
Ingress rules reference
Ingress rules can be configured using the Google Cloud console ,
a JSON file, or a YAML file. The following sample uses the .yaml format:
- ingressFrom:
identityType: ANY_IDENTITY | ANY_USER_ACCOUNT | ANY_SERVICE_ACCOUNT
*OR*
identities:
- PRINCIPAL_IDENTIFIER
sources:
- resource: RESOURCE
*OR*
- accessLevel: ACCESS_LEVEL
ingressTo:
operations:
- serviceName: SERVICE
methodSelectors:
- method: METHOD
*OR*
- permission: PERMISSION
*OR*
roles:
- ROLE_NAME
resources:
- projects/ PROJECT
title: TITLE
- ingressFrom: - (Required) Starts the from block which lists allowed
sources and identities outside the perimeter.
identityType: - (This attribute or the identities attribute must be used.) This
attribute defines the types of identities that can be used from the specified
sources (network origin). Acceptable values: ANY_IDENTITY ,
ANY_USER_ACCOUNT , ANY_SERVICE_ACCOUNT . ANY_IDENTITY allows requests from all
identities, including unauthenticated requests. ANY_USER_ACCOUNT allows all human
users, and ANY_SERVICE_ACCOUNT allows all service accounts, but both ANY_USER_ACCOUNT
and ANY_SERVICE_ACCOUNT don't allow unauthenticated requests.
This attribute doesn't restrict the identities based on organization. For
example, ANY_SERVICE_ACCOUNT allows a service account from any organization.
identities: - (This attribute or the identityType attribute must be used.) This attribute
starts a list of service accounts, user accounts, Google groups, third-party
identities, and agent identities ( Preview )
that can access resources in the perimeter.
PRINCIPAL_IDENTIFIER - Specify a user account, a service account,
a Google group, a third-party identity ,
or an agent identity ( Preview )
to which you want to provide access to resources in the perimeter.
For information about supported identities and their identifier formats, see Supported identities
for ingress and egress rules .
sources: - (Required) This attribute refers to a list of network origins.
Each value in the list is either an access level or a Google Cloud project.
If you set the accessLevel attribute to "*" , the ingress policy allows
access from any network origin. If you set this attribute to a Google Cloud project, the
ingress policy allows access from a VPC network that belongs to the project.
This value might be removed when the associated project is permanently deleted.
However, the removal of this value doesn't cause an error. Always check if this value exists
while troubleshooting any issues.
- resource: - (Use this attribute or the accessLevel attribute.)
Specifies a project or VPC network from outside the perimeter to which you want to provide access.
To specify a project, use the following format: projects/ PROJECT_NUMBER .
To specify a VPC network, use the following format: //compute.googleapis.com/projects/ PROJECT_ID /global/networks/ NETWORK_NAME .
- accessLevel: - (This attribute or the resource attribute must be used.) Specifies
the access level from outside the perimeter to which access is given. If you set
the accessLevel attribute to "*" , the ingress policy allows access from any network origin.
ingressTo: - (Required) Starts the to block which lists allowed service
operations on specified Google Cloud resources within the perimeter.
operations: - (This attribute or the roles attribute must be used.) Marks the beginning of the list of accessible
services and actions/methods that a client satisfying the from block
conditions is allowed to access.
- serviceName: - (Required) This field can be a valid service name or be set
to "*" to allow access to all services. For example,
bigquery.googleapis.com is a valid serviceName . For a list of available
services, see Supported products .
methodSelectors: - (Required if serviceName is not "*" .) The beginning
of a list of methods that a client satisfying the from block conditions is
allowed to access. For a list of restrictable methods and permissions for
services, see Supported service method restrictions .
For a list of service methods that VPC Service Controls can't control, see
Service method exceptions .
- method: - (This attribute or the permission attribute must be used.) This field can
be a valid service method, or can be set to "*" to allow access to all
methods of the specified service.
- permission: - (This attribute or the method attribute must be used.) This field
must be a valid service permission. The access to the resources inside the
perimeter are allowed for the operations that require the permission.
When a request to a resource requires multiple permissions, you must specify
all the required permissions under the same operation for the ingress rule to
work. For example, if a request to a BigQuery resource requires
the bigquery.jobs.create and bigquery.tables.create permissions, you must
specify both these permissions under the same operation. Also, if you specify
the permissions multiple times for the same resource by using the
Google Cloud console, the permissions are not created under the same operation. To
avoid this issue, specify all the permissions at once for the resource.
roles: - (This attribute or the operations attribute must be used.) This
attribute refers to a list of IAM roles that defines the scope
of access for services specified in the rule.
ROLE_NAME - Specify a single role or a combination of
roles that include all the permissions required to access the services. To
specify a role, use the role name formats mentioned in Role components ,
except the following format: projects/ PROJECT_ID /roles/ IDENTIFIER .
For information about the supported services and roles, see Supported products .
resources: - (Required) This attribute specifies the list of
Google Cloud resources in the Service Perimeter that the client outside
the perimeter can access. This field can be set to "*" to allow ingress
access to any Google Cloud resource inside the perimeter.
title: - (Optional) This attribute specifies the title of the ingress rule. The
title must be unique within the perimeter and can't exceed 100 characters. Within
the access policy, the combined length of all rule titles must not exceed 240,000
characters.
To make a functional ingress rule, you must specify the following attributes:
sources attribute. You must specify an accessLevel or a resource (Google Cloud project or VPC network),
or set accessLevel attribute to "*" .
Note: To allow ingress to resources, VPC Service Controls evaluates sources
and identityType attributes as an AND condition and evaluates accessLevel
and resource attributes of the sources attribute as an OR condition. When an
accessLevel or a resource for a source is set to a specific value instead of
"*" , VPC Service Controls evaluates both sources and identityType
attributes.
identityType or identities attribute
resources attribute
serviceName attribute
Once you have finished configuring your ingress policy file, see Updating ingress and egress policies
for instructions on applying your ingress policy file to your service perimeter.
If you configure multiple ingress rules in a service perimeter, VPC Service Controls
allows a request if it satisfies the conditions of any one of the ingress rules.
Egress rules reference
Egress rules can be configured using the Google Cloud console ,
a JSON file, or a YAML file. The following sample uses the .yaml format:
- egressTo:
operations:
- serviceName: SERVICE_NAME
methodSelectors:
- method: METHOD
*OR*
- permission: PERMISSION
*OR*
roles:
- ROLE_NAME
resources:
- projects/ PROJECT
*OR*
externalResources:
- EXTERNAL_RESOURCE_PATH
egressFrom:
identityType: ANY_IDENTITY | ANY_USER_ACCOUNT | ANY_SERVICE_ACCOUNT
*OR*
identities:
- PRINCIPAL_IDENTIFIER
sources:
- resource: RESOURCE
*OR*
- accessLevel: ACCESS_LEVEL
sourceRestriction: RESTRICTION_STATUS
title: TITLE
- egressTo: - (Required) Starts the to block which lists allowed service
operations on Google Cloud resources in specified projects outside the
perimeter.
operations: - (This attribute or the roles attribute must be used.) Marks the beginning of the list of accessible
services and actions/methods that a client satisfying the from block
conditions is allowed to access.
- serviceName: - (Required) This field can be a valid service name or be set
to "*" to allow access to all services. For a list of available services,
see Supported products .
methodSelectors: - (Required if serviceName is not "*" .) The beginning
of a list of methods that a client satisfying the from block conditions is
allowed to access. For a list of restrictable methods and permissions for
services, see Supported service method restrictions .
For a list of service methods that VPC Service Controls can't control, see
Service method exceptions .
- method: - (This attribute or the permission attribute must be used.) This field
can be a valid service method, or can be set to "*" to allow access to
all methods of the specified service.
- permission: - (This attribute or the method attribute must be used.) This field
must be a valid service permission. The access to the specified resources
outside the perimeter are allowed for the operations that require the permission.
When a request to a resource requires multiple permissions, you must specify
all the required permissions under the same operation for the egress rule to
work. For example, if a request to a BigQuery resource requires
the bigquery.jobs.create and bigquery.tables.create permissions, you must
specify both these permissions under the same operation. Also, if you specify
the permissions multiple times for the same resource by using the
Google Cloud console, the permissions are not created under the same operation. To
avoid this issue, specify all the permissions at once for the resource.
roles: - (This attribute or the operations attribute must be used.) This
attribute refers to a list of IAM roles that defines the scope
of access for services specified in the rule.
ROLE_NAME - Specify a single role or a combination of
roles that include all the permissions required to access the services. To
specify a role, use the role name formats mentioned in Role components ,
except the following format: projects/ PROJECT_ID /roles/ IDENTIFIER .
For information about the supported services and roles, see Supported products .
resources: - This attribute is a list of Google Cloud
resources specified by their projects that clients inside a perimeter can
access. You can set this field to "*" to allow egress access to any
Google Cloud resource.
externalResources: - This attribute is used only to specify BigQuery Omni resources.
This attribute is a list of external resources supported by BigQuery Omni
that clients inside a perimeter can access. You can specify only Amazon S3 or
Azure Blob Storage resources. For Amazon S3, the supported format is s3:// BUCKET_NAME .
For Azure Storage, the supported format is azure://myaccount.blob.core.windows.net/ CONTAINER_NAME .
egressFrom: - (Required) Starts the from block that lists allowed
sources and identities within the perimeter.
identityType: - (This attribute or the identities attribute must be used.) This
attribute defines the types of identities that can be used to access the
specified resources outside the perimeter. Acceptable values: ANY_IDENTITY ,
ANY_USER_ACCOUNT , ANY_SERVICE_ACCOUNT . ANY_IDENTITY allows requests from all
identities, including unauthenticated requests. ANY_USER_ACCOUNT allows all human
users, and ANY_SERVICE_ACCOUNT allows all service accounts, but both ANY_USER_ACCOUNT
and ANY_SERVICE_ACCOUNT don't allow unauthenticated requests.
This attribute doesn't restrict the identities based on organization. For
example, ANY_SERVICE_ACCOUNT allows a service account from any organization.
identities: - (This attribute or the identityType attribute must be used.) This
attribute starts a list of service accounts, user accounts, Google groups, third-party
identities, and agent identities ( Preview )
that can access the specified resources outside the perimeter.
PRINCIPAL_IDENTIFIER - Specify a user account, a service account,
a Google group, a third-party identity ,
or an agent identity ( Preview )
that can access the specified resources outside the perimeter.
For information about supported identities and their identifier formats, see Supported identities
for ingress and egress rules .
sources: - This attribute specifies a list of network origins. The attribute
value can be a list of projects or access levels. To enforce access restrictions based on the specified
sources , set the sourceRestriction attribute to SOURCE_RESTRICTION_ENABLED .
VPC Service Controls evaluates accessLevel and resource attributes of the sources
attribute as an OR condition.
- resource: - (Use this attribute or the accessLevel attribute.) Specify one or more
Google Cloud resources from the service perimeter that you want to allow to
access data outside the perimeter. This attribute supports only projects.
To specify a project, use the following format: projects/ PROJECT_NUMBER .
You can't use "*" in this attribute to allow all Google Cloud resources.
- accessLevel: - (Use this attribute or the resource attribute.) Specify one or more access levels that permit resources
inside the perimeter to access resources outside the perimeter. Ensure that these access
levels are from the same access policy as the perimeter. If you set the accessLevel
attribute to "*" , the egress policy allows access from any network origin.
sourceRestriction: - (Required if you use the sources attribute.) This attribute
lets you enforce access restrictions based on the specified sources . To enforce
these access restrictions, set the sourceRestriction attribute to SOURCE_RESTRICTION_ENABLED .
To disable these access restrictions, set the sourceRestriction attribute to
SOURCE_RESTRICTION_DISABLED .
If you don't set any value for the sourceRestriction attribute, VPC Service Controls
ignores the sources attribute and enforces no access restrictions.
title: - (Optional) This attribute specifies the title of the egress rule. The
title must be unique within the perimeter and can't exceed 100 characters. Within
the access policy, the combined length of all rule titles must not exceed 240,000
characters.
Once you have finished configuring your egress policy file, see Updating ingress and egress policies
for instructions on applying your egress policy file to your service perimeter.
If you configure multiple egress rules in a service perimeter, VPC Service Controls
allows a request if it satisfies the conditions of any one of the egress rules.
Using dry-run mode to test ingress/egress policies
When you don't want to grant access to all methods of a service, it can
sometimes be difficult to determine the precise list of methods to allow. This
can occur because a given method for a service can cause a different method to
be invoked on a separate Google Cloud service. For example, BigQuery loading a
table from a Cloud Storage bucket to run a query.
To determine the correct set of methods to allow, you can use the
VPC Service Controls Dry-run mode .
Do this by first enabling a perimeter in dry-run mode with no ingress or egress
policies, and collect the list of methods invoked from the audit log. Then,
progressively add these methods to ingress/egress policies in the dry-run mode
until all violations have ceased. At that point, the configuration can be moved
from dry-run mode to enforced mode.
Unsupported features
The following features are currently unsupported for ingress and egress rules:
Identifying Google Cloud resources by labels instead of projects.
Not all services support per-method ingress/egress rules. See Supported service method restrictions .
ANY_SERVICE_ACCOUNT and ANY_USER_ACCOUNT identity types cannot be used
to allow the following operations:
All Container Registry operations.
All notebooks.googleapis.com service operations.
Cloud Storage operations using
Signed URLs .
With Cloud Run functions , deployment of a Cloud Function from
the local machine .
Export logs from a Cloud Logging sink to a Cloud Storage resource.
All Apache Airflow web interface operations in Cloud Composer.
Understand the limitations
of using identity groups in ingress and egress rules.
Limitations
For information about ingress and egress limits, see Quotas and limits .
What's next
Complete this codelab
to learn how to fix ingress and egress violations.
Learn how to set up and view the violation dashboard .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
