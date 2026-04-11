---
title: "Attestation token claims \_|\_ Confidential Space \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources
source_metadata:
  url: https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims
  title: "Attestation token claims \_|\_ Confidential Space \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Confidential Space
Reference
Send feedback
Attestation token claims
Stay organized with collections
Save and categorize content based on your preferences.
Top-level claims
The following table describes the top-level claims in the attestation token.
These items are compliant with the
OpenID Connect 1.0 specification .
Read more about attestation tokens
Key
Type
Description
Header
x5c
String
Only present in PKI tokens. The certificate chain to validate PKI tokens
against. You can download the root certificate from the
PKI token validation endpoint .
JSON data payload
attester_tcb
String array
One or more TCB (trusted computing base) components. This claim is to
specify the source of attestation evidence.
For the hwmodel claim "GCP_INTEL_TDX" on Confidential Space,
the value is set to ["INTEL"] , indicating that the
attestation root of trust originates from Intel-specific hardware
technology.
aud
String
The audience. For the default token used with a workload identity
pool, the audience is https://sts.googleapis.com . This
token is fetched every hour by the launcher in the Confidential VM
instance.
For tokens with custom audiences, the audience is echoed from the
audience in the token request. The maximum length is 512 bytes.
dbgstat
String
The debug status for the Confidential Space image. In production images,
the value is disabled-since-boot . In debug images, the
value is enabled .
eat_nonce
String or string array
One or more nonces for the attestation token. The values are echoed from
the token options sent in the custom token request. Each nonce must be
between 8 and 88 bytes inclusive. A maximum of six nonces are allowed.
exp
Int, Unix timestamp
The expiration time on or after which the token must not be accepted for
processing. The value is a JSON number that represents the number of
seconds from
1970-01-01T0:0:0Z as measured
in UTC until the expiry time.
google_service_accounts
String array
The validated service accounts that are running the Confidential Space
workload.
hwmodel
String
The unique identifier for the hardware token. Must be one of the
following values:
GCP_AMD_SEV
GCP_AMD_SEV_ES
GCP_SHIELDED_VM
GCP_INTEL_TDX
https://aws.amazon.com/tags
Object
See AWS principal tag claims .
iat
Int, Unix timestamp
The time when the JWT was issued. The value is a JSON number that
represents the number of seconds from
1970-01-01T0:0:0Z as measured
in UTC until the issue time.
iss
String
The issuer of the token, which is set to
https://confidentialcomputing.googleapis.com .
nbf
Int, Unix timestamp
The time after which the JWT is allowed to be processed. The value is a
JSON number that represents the number of seconds from
1970-01-01T0:0:0Z as measured
in UTC.
oemid
Uint64
The Google
Private Enterprise Number (PEN) , which is 11129 .
secboot
Boolean
Whether Secure Boot is enabled, which makes sure that the firmware and
operating system are authenticated during the VM boot process. This
value is always true .
sub
String
The subject, which is the fully qualified virtual machine ID for the
Confidential VM. For example,
https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instances/ INSTANCE_ID .
This format is known as the
instance's selfLink .
submods
Object
An object containing various claims. See
Submods claims .
tdx
Array
An array of various claims. See
Intel TDX claims .
swname
String
The name of the approved operating system for the VM.
Valid values are CONFIDENTIAL_SPACE or GCE .
The CONFIDENTIAL_SPACE value is for hardened and debug
Confidential Space images that passed all validation.
swversion
String array
The version of the operating system. The value is a string array that
contains only one value.
The version follows the format YYYYMM## , where
## is a counter for the number of images released before
the image being used in the same month.
AWS principal tag claims
The following table describes the AWS_PrincipalTag claims in the
attestation token. These claims are placed in the https://aws.amazon.com/tags
claims, in the principal_tags object in the attestation token.
To learn about the https://aws.amazon.com/tags claim structure,
see AWS principal tag claims .
Key
Type
Description
confidential_space.support_attributes
String array
Derivative claim of support attributes. This is a concatenated string
representation of the original claims.
For example, if the original claims are Latest ,
Stable , and Usable , this attribute contains
LATEST=STABLE=USABLE . If the original claim is only
Usable , this attribute contains USABLE .
container.image_digest
String array
See
Workload container claims .
Container image signatures and digests don't appear together in a
single token. If you're using container.image_digest in
your AWS policies, you must remove any references to
container.signatures.key_ids .
container.signatures.key_id
String array
A concatenated list of container image signature key IDs. This field
represents multiple signature key IDs joined into a single string in
the array.
For example, if you have key IDs aKey1 ,
zKey2 , and bKey3 , this claim contains the
value aKey1=bKey3=zKey2 .
Container image signatures and digests don't appear together in a
single token. If you are using
container.signatures.key_ids in your AWS policies, you
must remove any references to container.image_digest .
For more information about container image signature claims, see
AWS policies with container image signature claims .
gce.project_id
String array
See Compute Engine claims .
gce.zone
String array
See Compute Engine claims .
Intel TDX claims
The following table describes the tdx claims in the attestation token.
Key
Type
Description
gcp_attester_tcb_status
String
A string value that represents the TCB level status of the
Google Cloud platform being evaluated. For more information about
tcbStatus , see Intel's
Provisioning Certification Service API documentation .
This claim indicates that the TDX TCB version was up to date with
Intel's reference values when Google began its firmware rollout.
However, it doesn't guarantee that the Google fleet remains up to date
with Intel's real-time TCB reference values.
gcp_attester_tcb_date
String
The TCB date for the attesting Google Cloud platform. The time value is
UTC in ISO 8601 format (YYYY-MM-DDThh:mm:ssZ) .
Submods claims
The following table describes the submods claims in the attestation token.
Key
Type
Description
confidential_space.support_attributes
String array
The array can contain the values EXPERIMENTAL ,
USABLE , STABLE , and LATEST . For
more information, see
Confidential Space image lifecycle .
confidential_space.monitoring_enabled
Object
Shows what kind of system monitoring is enabled. The value can be
{"memory":false} or {"memory":true} .
container
Object
See Workload container claims .
gce
Object
See Compute Engine claims .
nvidia_gpu.cc_mode ( Preview )
String
The Confidential Computing status of the NVIDIA GPU. This claim attests
to the GPU driver only, not the entire GPU device.
The value can be one of the following:
OFF : none of the NVIDIA Confidential Computing features are active.
ON : the NVIDIA H100 hardware, firmware, and software
have fully activated the confidential computing features.
DEVTOOLS : the GPU is in a partial confidential
computing mode that matches the workflows of ON mode,
but disables security protections.
Compute Engine claims
The following table describes the gce claims in the attestation token.
Key
Type
Description
instance_id
String
The VM instance ID.
instance_name
String
The VM instance name.
project_id
String
The
project ID for the project that the VM is running in.
project_number
String
The project number for the project that the VM is running in.
zone
String
The Compute Engine zone where the Confidential VM instance is
running.
Workload container claims
The following table describes the container claims in the attestation token.
For more information about these claims, see
Attestation assertions .
Key
Type
Description
args
String array
The full argv the container is invoked with. This claim
includes the container's entrypoint path and any additional command-line
arguments.
cmd_override
String array
The
CMD
commands and parameters used in the workload image.
env
Object
The environment variables and their values that have been explicitly
passed to the container.
env_override
Object
The overwritten environment variables in the container.
image_digest
String
The image digest of the workload container.
image_id
String
The image ID of the workload container.
image_reference
String
The location of the workload container running in Confidential Space.
image_signatures
Object array
See Container image
signature claims .
restart_policy
String
The restart policy of the container launcher when the workload stops.
Valid values are Always , OnFailure , and
Never . Default is Never .
Container image signature claims
The following table describes the image_signatures claims in the attestation
token.
Key
Type
Description
key_id
String
The hexadecimal fingerprint of the public key. To get the fingerprint,
you can run the following command:
openssl pkey -pubin -in public_key.pem -outform DER | openssl sha256
Where public_key.pem is your public key in
PEM format.
signature
String
The base64-encoded signature for a payload that's associated with the
signed container and that follows the
Simple Signing format .
signature_algorithm
String
The algorithm used to sign the key. One of the following:
RSASSA_PSS_SHA256 (RSASSA-PSS with a SHA-256
digest)
RSASSA_PKCS1V15_SHA256 (RSASSA-PKCS1 v1_5 with a
SHA-256 digest)
ECDSA_P256_SHA256 (ECDSA on the P-256 Curve with a
SHA-256 digest)
What's next
See the IETF draft for
The Entity Attestation Token (EAT)
for more information on attestation claims.
See the
OpenID Connect Core 1.0
for more information on OpenID token claims.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
