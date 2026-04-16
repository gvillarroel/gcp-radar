---
title: "Attestation assertions \_|\_ Confidential Space \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/attestation-assertions
knowledge_key: corpus
source_id: site-api-reference-required-1
source_type: site
entrypoint: https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/attestation-assertions
source_metadata:
  url: https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/attestation-assertions
  title: "Attestation assertions \_|\_ Confidential Space \_|\_ Google Cloud Documentation"
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
Attestation assertions
Stay organized with collections
Save and categorize content based on your preferences.
Data collaborators
To learn more about using attestation assertions, see
Create an attestation policy .
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
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
