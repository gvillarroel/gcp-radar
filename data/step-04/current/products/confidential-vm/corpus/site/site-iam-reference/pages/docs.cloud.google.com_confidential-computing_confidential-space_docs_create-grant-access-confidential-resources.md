---
title: "Create and grant access to confidential resources \_|\_ Confidential Space\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources
source_metadata:
  url: https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources
  title: "Create and grant access to confidential resources \_|\_ Confidential Space\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Confidential Space
Guides
Send feedback
Create and grant access to confidential resources
Stay organized with collections
Save and categorize content based on your preferences.
Data collaborators
Data collaborators must set up the following resources for their confidential
data to be accessible by a workload:
Encrypted data , stored in Google Cloud.
A workload identity pool (WIP) to authorize the workload. After a
workload has been authorized by a WIP, it can access data collaborators'
confidential data and operate on it.
Additionally, data collaborators need to choose where the results of the
Confidential Space workload are stored, and whether those results are unique to
each collaborator, or shared. You could, for example, choose to output the same
result to multiple Cloud Storage buckets belonging to each data
collaborator.
Note: If data collaborator resources aren't managed by Google Cloud
IAM, access to those resources can be managed by requesting
attestation tokens with custom audiences and optional nonces. Work with your
workload author to implement this. For more information, see
Access resources not managed by Google Cloud IAM .
Store your encrypted data
You can use any Google Cloud service that stores data to host your confidential
data. For example, you might use one of the following services:
BigQuery
Cloud SQL
Filestore
Persistent Disk
Cloud Storage
You should make sure this data is encrypted at rest, whether using inbuilt
features or with something like Cloud Key Management Service (Cloud KMS).
Caution: When testing a workload on data, don't use private information. Set up
fake data in the same format and test on that until you're ready to lock down
the workload.
Authorize the workload with a WIP
A WIP is the mechanism that
Confidential Space uses to allow an external workload to access and work with your
confidential data as a federated identity . A federated identity is an external
entity that's treated as if it's a principal
within your own project, allowing you to grant IAM roles to it to
give access to specific resources, or to impersonate service accounts to do the
same.
As a data collaborator, you set up a
provider inside a WIP that
sets the rules for entities authenticating as a federated identity. For
Confidential Space, you must define the following in a provider:
An attestation service : This service verifies that the workload is a
Confidential VM instance, and ultimately returns an
OpenID Connect
(OIDC) attestation token to the WIP provider. The workload operator sets the
attestation service that is used, and it must match the attestation service
added to the WIP provider for access to be granted.
Attribute mappings : Attributes in Security Token Service access tokens that are
mapped to
assertions made by
the authenticating entity—in this case, the VM instance that's running
the workload. Assertions are made by the VM instance itself, the
Confidential Space image, and the workload container, and passed to the WIP
provider by the workload. These attributes are used for things like audit
trails in Cloud Logging, and to grant roles through IAM on
the basis of authenticating entity assertions, such as workload image
container digests. Read more about
attribute mappings .
An attestation policy : A series of
conditions ,
that authenticating entities need to pass to gain access, based on the
assertions they make.
When a workload starts, the Confidential Space Launcher sends its attestation
report to an attestation service defined by the workload operator, which
verifies the Confidential VM instance and then returns an OIDC attestation token.
This token lasts one hour, and is automatically refreshed.
The attestation token is then passed to the WIP provider by the workload, and
the provider uses it to check that the assertions pass the attestation policy
defined in the provider. If they do, the workload is allowed access to the
confidential resources.
Note: Instead of using Google's servers for token validation, you can
validate attestation tokens yourself with long-term certificates .
External workload access
Before you set up a WIP and provider, you need to choose how the workload is
going to access your resources: direct resource access, or service account
impersonation.
Direct resource access
We recommend the direct resource access method for workloads.
This method involves setting up a federated identity in a WIP provider tied to
an authenticating entity's assertions. This way a workload can be authorized to
access resources directly through IAM bindings, based on
attributes like the workload's container image digest.
Direct resource access has the following advantages:
Setting up a Confidential Space environment takes less steps, as data
collaborators don't need to set up service accounts for a workload service
account to impersonate.
The workload is only allowed to access specific resources as determined by
IAM. This is more secure than the service account impersonation
method, where over-permissioned service accounts or impersonation rights might
provide a bad actor with more access than intended.
Each resource access is logged with a workload VM instance's federated
identity, instead of an impersonated service account's identity that might be
shared by multiple workloads. A workload VM instance's identity can include
details like a container's image digest, the project number the workload is
operating from, and the ID of the VM instance running the workload, providing
a more detailed audit trail.
You don't need to map the VM instance
selfLink
property to the google.subject attribute in a WIP provider. Very long
selfLink values can exceed the 127-byte limit of this attribute, causing WIP
provider authentication to fail.
Service account impersonation
The service account impersonation method involves each data collaborator setting
up a service account to decrypt their private data, and then attaching that
service account to their own WIP. They also specify the workload service account
in their WIP provider, which allows the workload service account to impersonate
the data collaborator service accounts so it can retrieve and operate on their
confidential data.
Service account impersonation should only be used in the following scenarios:
When you need to use
image signatures
as an authentication credential, as the syntax used by signatures doesn't work
with
attribute mappings .
When you access
APIs that don't support federated identities .
The service account impersonation method might fail to authenticate to a WIP
provider if a VM instance has a very long
selfLink
property. This is because the sub claim in the attestation token—which
is set to the selfLink value—is mapped in the WIP provider to the
google.subject attribute, which has a 127-byte limit.
For VM instance selfLink values that exceed 127 bytes, you must rename your VM
instances to shorten the selfLink , or use the direct resource access method
instead.
Set up a WIP and provider
The steps for setting up a provider change depending on whether you use direct
resource access, or service account impersonation.
Direct resource access
The direct resource access method involves setting up a WIP and provider,
and then setting up IAM roles based on a specific workload
container image digest.
Set up a WIP and provider
To set up a WIP and provider, complete the following instructions:
Create the WIP:
gcloud iam workload-identity-pools create DATA_COLLABORATOR_POOL_NAME \
--location = global
Create an OIDC provider in the WIP:
gcloud iam workload-identity-pools providers create-oidc attestation-verifier \
--location = global \
--workload-identity-pool = DATA_COLLABORATOR_POOL_NAME \
--issuer-uri = "https://confidentialcomputing.googleapis.com/" \
--allowed-audiences = "https://sts.googleapis.com" \
--attribute-mapping = "google.subject=\"gcpcs::\"+assertion.submods.container.image_digest+\"::\"+assertion.submods.gce.project_number+\"::\"+assertion.submods.gce.instance_id,attribute.image_digest=assertion.submods.container.image_digest" \
--attribute-condition = "assertion.swname == 'CONFIDENTIAL_SPACE' \
&& 'STABLE' in assertion.submods.confidential_space.support_attributes"
This example uses the following values:
An issuer-uri of https://confidentialcomputing.googleapis.com/ ,
which means
Google Cloud Attestation
is used as the attestation service.
An allowed-audiences of https://sts.googleapis.com . This is
Google's Security Token Service , which exchanges
credentials for access tokens.
An attribute-mapping of google.subject , with the following
value:
\"gcpcs::\"+assertion.submods.container.image_digest+\"::\"+assertion.submods.gce.project_number+\"::\"+assertion.submods.gce.instance_id,attribute.image_digest=assertion.submods.container.image_digest
This value is constructed using
Common Expression Language
(CEL). The following values are assigned to the gcpcs attribute,
and show up in Cloud Logging whenever the workload accesses
resources:
assertion.submods.container.image_digest : The workload container
image digest.
assertion.submods.gce.project_number : The project number of the VM
instance.
assertion.submods.gce.instance_id : The ID of the VM instance.
Additionally, attribute.image_digest is set to
assertion.submods.container.image_digest , the workload container
image digest. This attribute is mapped so you can
grant the federated identity IAM roles
based on a specific image digest.
You can map any of the available workload
assertions ,
so long as the total length of the google.subject value is less than
127 bytes.
The following attribute-conditions , which form an attestation
policy. If these conditions match the assertions of the workload, then
the workload is allowed to access the confidential resources as a
federated identity:
assertion.swname == 'CONFIDENTIAL_SPACE' : Verifies that
Confidential Space is the software running on the VM, with
all of its
built-in security guarantees .
'STABLE' in assertion.submods.confidential_space.support_attributes :
Verifies that the production Confidential Space image is being used,
and has the STABLE
support attribute .
For more attribute conditions you can use, see
Create an attestation policy .
Grant the federated identity IAM roles
After you've created a WIP provider, you can grant the federated identity an
IAM role based on whether the identity's workload image
container digest matches an expected value.
The following example demonstrates granting a federated identity the ability
to decrypt a specific Cloud Key Management Service key:
gcloud kms keys add-iam-policy-binding \
projects/ DATA_COLLABORATOR_PROJECT_ID /locations/global/keyRings/ DATA_COLLABORATOR_KEYRING_NAME /cryptoKeys/ DATA_COLLABORATOR_KEY_NAME \
--member = "principalSet://iam.googleapis.com/projects/ DATA_COLLABORATOR_PROJECT_NUMBER /locations/global/workloadIdentityPools/ DATA_COLLABORATOR_POOL_NAME /attribute.image_digest/ WORKLOAD_CONTAINER_IMAGE_DIGEST " \
--role = roles/cloudkms.cryptoKeyDecrypter
Service account impersonation
The service account impersonation method involves the following:
Creating service accounts in each of the data collaborator projects,
and granting granting them permission to decrypt the confidential data.
Creating WIPs in each of the data collaborator projects, and then
attaching each project's service account that was just created to its
WIP.
Creating WIP providers in each WIP, that specify the workload service
account as the account that is allowed to impersonate the data
collaborator service accounts.
Set up service accounts to decrypt confidential data
Create the service accounts in the data collaborator projects:
gcloud iam service-accounts create DATA_COLLABORATOR_SERVICE_ACCOUNT_NAME
Grant the service accounts the permissions required to decrypt the
confidential data. For example, you might encrypt confidential files in
Cloud Storage with Cloud KMS, so you need to grant the
service account permission to decrypt that data:
gcloud kms keys add-iam-policy-binding \
projects/ DATA_COLLABORATOR_PROJECT_ID /locations/global/keyRings/ DATA_COLLABORATOR_KEYRING_NAME /cryptoKeys/ DATA_COLLABORATOR_KEY_NAME \
--member = serviceAccount: DATA_COLLABORATOR_SERVICE_ACCOUNT_NAME @ DATA_COLLABORATOR_PROJECT_ID .iam.gserviceaccount.com \
--role = roles/cloudkms.cryptoKeyDecrypter
Set up a WIP and provider
To set up a WIP and provider, complete the following instructions in each
data collaborator project:
Create the WIP:
gcloud iam workload-identity-pools create DATA_COLLABORATOR_POOL_NAME \
--location = global
Attach the service account that is going to be impersonated to the WIP,
with the
roles/iam.workloadIdentityUser
role:
gcloud iam service-accounts add-iam-policy-binding \
DATA_COLLABORATOR_SERVICE_ACCOUNT_NAME @ DATA_COLLABORATOR_PROJECT_ID .iam.gserviceaccount.com \
--member = "principalSet://iam.googleapis.com/projects/ DATA_COLLABORATOR_PROJECT_NUMBER /locations/global/workloadIdentityPools/ DATA_COLLABORATOR_POOL_NAME /*" \
--role = roles/iam.workloadIdentityUser
Create an OIDC provider in the WIP, and define the workload service
account in it so it can impersonate the data collaborator service
account:
gcloud iam workload-identity-pools providers create-oidc attestation-verifier \
--location = global \
--workload-identity-pool = DATA_COLLABORATOR_POOL_NAME \
--issuer-uri = "https://confidentialcomputing.googleapis.com/" \
--allowed-audiences = "https://sts.googleapis.com" \
--attribute-mapping = "google.subject=assertion.sub" \
--attribute-condition = "assertion.submods.container.image_digest == ' WORKLOAD_CONTAINER_IMAGE_DIGEST ' \
&& ' WORKLOAD_SERVICE_ACCOUNT_NAME @ WORKLOAD_OPERATOR_PROJECT_ID .iam.gserviceaccount.com' in assertion.google_service_accounts \
&& assertion.swname == 'CONFIDENTIAL_SPACE' \
&& 'STABLE' in assertion.submods.confidential_space.support_attributes"
This example uses the following values:
An issuer-uri of https://confidentialcomputing.googleapis.com/ ,
which means
Google Cloud Attestation
is used as the attestation service.
An allowed-audiences of https://sts.googleapis.com . This is
Google's Security Token Service , which exchanges
credentials for access tokens.
An attribute-mapping of google.subject , with the value
assertion.sub . This is the VM instance's
selfLink ,
as defined in the sub claim in the attestation token .
The VM instance selfLink shows up in Cloud Logging whenever the
workload accesses resources.
The following attribute-conditions , which form an attestation
policy. If these conditions match the assertions of the workload, then
the workload is allowed to access resources as a federated identity:
assertion.submods.container.image_digest == ' WORKLOAD_CONTAINER_IMAGE_DIGEST ' :
Verifies that the workload container image digest matches the
expected value.
' WORKLOAD_SERVICE_ACCOUNT_NAME @ WORKLOAD_PROJECT_ID .iam.gserviceaccount.com' in assertion.google_service_accounts :
Verifies that the service account attached to the workload matches
the expected service account, and then uses it to impersonate
the data collaborator service account.
assertion.swname == 'CONFIDENTIAL_SPACE' : Verifies that
Confidential Space is the software running on the VM, with
all of its
built-in security guarantees .
'STABLE' in assertion.submods.confidential_space.support_attributes :
Verifies that the production Confidential Space image is being used,
and has the STABLE
support attribute .
For more attribute conditions you can use, see
Create an attestation policy .
Create an attestation policy
As part of creating a WIP, you need to create an attestation policy. An
authenticating entity's assertions must match your policy to be able to access
your data.
Policies are written in
Common Expression Language
(CEL), and are made up of a series of statements that can be chained together
with the && operator.
The statements use assertions from the Confidential Space image, workload container
image, or VM instance as variables, and your specified value as the expression.
For example, here's a policy that enforces that the workload is using
Confidential Space, must use a
STABLE Confidential Space image ,
and that the zone the workload VM instance is running in must be
us-central1-a :
assertion.swname == 'CONFIDENTIAL_SPACE' \
&& 'STABLE' in assertion.submods.confidential_space.support_attributes" \
&& assertion.submods.gce.zone == "us-central1-a"
See attestation assertions for more.
Attestation assertions
The available assertions to construct an attestation policy are detailed in the
following table. Policies can validate assertions made by the Confidential Space
image, the workload container, and the VM instance.
Image assertions
Assertion
Type
Description
assertion.dbgstat
Interacts with:
Workload operator : The
--image-family
value.
Enumeration
Verifies that the Confidential Space image is the debug or
production version.
The valid values are the following:
enable : Check that the debug image is being used.
disabled-since-boot : Check that the production
image is being used.
Examples
The following code verifies that the debug version of the
Confidential Space image is being used:
assertion.dbgstat == "enable"
The following code verifies that the production version of the
Confidential Space image is being used:
assertion.dbgstat == "disabled-since-boot"
assertion.submods.confidential_space.support_attributes
String array
Verifies the security version of the production Confidential Space
image that's running on the Confidential VM instance, using its
support attributes. Debug Confidential Space images have no support
attribute set.
The following are valid support attributes:
LATEST : This is the latest version of the image,
and is supported. The LATEST image is also
STABLE and USABLE .
STABLE : This version of the image is supported
and monitored for vulnerabilities. A STABLE image
is also USABLE .
USABLE : An image with only this attribute is out
of support and no longer monitored for vulnerabilities. Use at
your own risk.
EXPERIMENTAL : An image with only this attribute
makes use of preview features. It is for testing purposes
only, and should never be used in production. An
EXPERIMENTAL image never has the attributes
LATEST , STABLE , or
USABLE .
Caution : Because the Confidential Space default token is
refreshed hourly, specifying LATEST isn't
recommended for long-running workloads. The Confidential Space
image might be updated while your workload is running, meaning
the workload is no longer on the latest version and fails
attestation as a result.
Example
The following code verifies that a stable version of the
Confidential Space image is being used:
"STABLE" in assertion.submods.confidential_space.support_attributes
assertion.swname
Enumeration
Verifies the software running on the attesting entity. The
value is always CONFIDENTIAL_SPACE .
Example
assertion.swname == "CONFIDENTIAL_SPACE"
assertion.swversion
String array
Verifies the software version of the Confidential Space image. We
recommend using
assertion.submods.confidential_space.support_attributes
instead to target the latest version of an image.
Example
int(assertion.swversion[0]) == 230103
Container assertions
Assertion
Type
Description
assertion.submods.container.cmd_override
Interacts with:
Workload author : The
allow_cmd_override launch policy.
Workload operator : The
tee-cmd metadata variable.
String array
Verifies the
CMD commands and parameters used in the workload image.
Examples
The following code verifies the CMD of the workload image hasn't
been overwritten:
size(assertion.submods.container.cmd_override) == 0
The following code verifies that program is the
only content in the CMD overrides:
assertion.submods.container.cmd_override == ['program']
assertion.submods.container.env
Interacts with:
Workload author : The
allow_env_override launch policy.
Workload operator : The
tee-env- ENVIRONMENT_VARIABLE_NAME
metadata variable.
JSON object
Verifies that environment variables and their values have been
explicitly passed to the container.
Example
The following code verifies that the environment variable
example-env-1 is set to value-1 , and
example-env-2 is set to value-2 .
assertion.submods.container.env == {"example-env-1": "value-1", "example-env-2": "value-2"}
assertion.submods.container.env_override
Interacts with:
Workload author : The
allow_env_override launch policy.
Workload operator : The
tee-env- ENVIRONMENT_VARIABLE_NAME
metadata variable.
String
Verifies if the workload operator has overwritten environment
variables in the container.
Examples
The following code verifies that the workload operator has not
overridden the example environment variable:
!has(assertion.submods.container.env_override.example)
The following code verifies that the workload operator hasn't
overwritten any environment variables:
size(assertion.submods.container.env_override) == 0
assertion.submods.container.image_digest
String
Verifies the image digest of the workload container.
Example
assertion.submods.container.image_digest == "sha256:837ccb607e312b170fac7383d7ccfd61fa5072793f19a25e75fbacb56539b86b"
assertion.submods.container.image_id
String
Verifies the image ID of the workload container.
Example
assertion.submods.container.image_id == "sha256:652a44b0e911271ba07cf2915cd700fdfa50abd62a98f87a57fdebc59843d93f"
assertion.submods.container.image_reference
Interacts with:
Workload operator : The
tee-image-reference metadata variable.
String
Verifies the location of the workload container running on top
of the Confidential Space image.
Example
assertion.submods.container.image_reference == "us-docker.pkg.dev/PROJECT_ID/WORKLOAD_CONTAINER:latest"
assertion.submods.container.image_signatures
Interacts with:
Workload operator : The
tee-signed-image-repos metadata variable.
JSON object
Verifies that the image has a certain signature or is signed by
a public key and signing algorithm. Specifying this condition
lets multiple parties agree on an authorized workload that is
allowed to access their data.
The assertion can include the following elements:
key_id : The hexadecimal fingerprint of the
public key. To get the fingerprint, you can run the
following command:
openssl pkey -pubin -in public_key.pem -outform DER | openssl sha256
Where public_key.pem is your public key in PEM
format.
signature : The signature over a payload that's
associated with the signed container and that follows the
Simple Signing format .
signature_algorithm : The algorithm used to sign
the key. One of the following:
RSASSA_PSS_SHA256 (RSASSA-PSS with a SHA-256
digest)
RSASSA_PKCS1V15_SHA256 (RSASSA-PKCS1 v1_5
with a SHA-256 digest)
ECDSA_P256_SHA256 (ECDSA on the P-256 Curve
with a SHA-256 digest)
Example
assertion.swname == 'CONFIDENTIAL_SPACE' && ['ECDSA_P256_SHA256: PUBLIC_KEY_FINGERPRINT '].exists(fingerprint, fingerprint in assertion.submods.container.image_signatures.map(sig, sig.signature_algorithm+':'+sig.key_id)) && 'serviceaccount.iam.gserviceaccount.com' in assertion.google_service_accounts"
assertion.submods.container.restart_policy
Interacts with:
Workload operator : The
tee-restart-policy metadata variable.
Enumeration
Verifies the restart policy of the container launcher for when
the workload stops.
The valid values are the following:
Never (default)
Always
OnFailure
Example
assertion.submods.container.restart_policy == "Never"
VM assertions
Assertion
Type
Description
assertion.google_service_accounts
Interacts with:
Workload operator : The
tee-impersonate-service-accounts metadata
variable, and the
--service-account
value.
String array
Verifies that a specified service account is connected to the VM
running the workload, or has been listed using
tee-impersonate-service-accounts
in the VM metadata.
Example
workload-service-account@my-project.iam.gserviceaccount.com in assertion.google_service_accounts
assertion.hwmodel
String
Verifies the underlying Confidential Computing technology. The
supported platforms are as follows:
GCP_AMD_SEV
INTEL_TDX
Example
assertion.hwmodel == "GCP_AMD_SEV"
assertion.submods.confidential_space.monitoring_enabled
Interacts with:
Workload author : The
monitoring_memory_allow launch policy.
Workload operator : The
tee-monitoring-memory-enable metadata
variable.
Boolean
Verifies the monitoring state on the attesting entity.
Example
assertion.submods.confidential_space.monitoring_enabled.memory == true
assertion.submods.gce.instance_id
String
Verifies the VM instance ID.
Example
assertion.submods.gce.instance_id == "0000000000000000000"
assertion.submods.gce.instance_name
String
Verifies the name of the VM instance.
Example
assertion.submods.gce.instance_name == "workload-vm"
assertion.submods.gce.project_id
String
Verifies that the VM is running a Google Cloud project with the
specified project ID.
Example
assertion.submods.gce.project_id == "project-id"
assertion.submods.gce.project_number
String
Verifies that the VM is running in a Google Cloud project with
the specified project number.
Example
assertion.submods.gce.project_number == "00000000000"
assertion.submods.gce.zone
Interacts with:
Workload operator : The
--zone value.
String
Verifies that the VM is running in the specified zone.
Example
assertion.submods.gce.zone == "us-central1-a"
assertion.submods.nvidia_gpu.cc_mode
Interacts with:
Workload operator : The
tee-install-gpu-driver metadata variable.
Enumeration
Verifies the status of NVIDIA's Confidential Computing driver.
The valid values are the following:
OFF : none of the NVIDIA Confidential Computing features are
active.
ON : the NVIDIA H100 hardware, firmware, and
software have fully activated the confidential computing
features.
DEVTOOLS : the GPU is in a partial confidential
computing mode that matches the workflows of ON
mode, but disables security protections.
Example
assertion.submods.nvidia_gpu.cc_mode == "ON"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
