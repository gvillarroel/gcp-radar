---
title: "Use CNG Provider and SignTool to sign Windows artifacts \_|\_ Cloud Key Management\
  \ Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/cng-signtool
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/cng-signtool
  title: "Use CNG Provider and SignTool to sign Windows artifacts \_|\_ Cloud Key\
    \ Management Service \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud KMS
Reference
Send feedback
Use CNG Provider and SignTool to sign Windows artifacts
Stay organized with collections
Save and categorize content based on your preferences.
This guide provides instructions for creating a Cloud HSM key for Microsoft
Authenticode signing through our CNG provider and SignTool .
You can find a Terraform-based blueprint version of this tutorial in the
kms-solutions GitHub repository .
Use cases
The workflow outlined in this document helps address the following enterprise
security needs:
Sign firmware with a private key protected by a FIPS140-2 Level 3 HSM.
Sign Windows artifacts using the Windows standard SignTool tool.
Before you begin
To complete this tutorial, you need the following:
A Windows machine with the artifacts you want to sign.
The latest Cloud KMS CNG provider release , which
can be installed on your Windows machine using the included .msi installer.
Cloud Shell or your own Linux machine,
to generate a certificate signing request or a certificate. On this machine,
complete the configuration documented in OpenSSL Setup , to
download and configure our PKCS#11 library.
Note: if you use Cloud Shell, your machine will be ephemeral and no
system-wide change (like apt-get ) will persist beyond session end.
Remember to run gcloud auth application-default login if you haven't yet.
If you haven't already, download the latest Windows SDK on your
Windows machine, which includes SignTool.
Configuration
Create a Cloud KMS-hosted signing key
Using Cloud Shell or your own machine, create a Cloud KMS
key ring in your Google Cloud project using the following command:
gcloud kms keyrings create " KEY_RING " --location " LOCATION "
Then, create a Cloud KMS EC-P256-SHA256 hardware signing key in your
Google Cloud project, in the key ring that you have just created:
gcloud kms keys create " KEY_NAME " --keyring " KEY_RING " \
--project " PROJECT_ID " --location " LOCATION " \
--purpose "asymmetric-signing" --default-algorithm "ec-sign-p256-sha256" \
--protection-level "hsm"
Note: Make sure that your Compute Engine service account has the
roles/cloudkms.signer Identity and Access Management (IAM) permission
on the key ring to be able to use it.
Download the HSM attestation
An HSM attestation is proof that your key resides in an HSM. This proof may be
required by your Certificate Authority (CA) to issue an Extended Validation (EV)
certificate.
To download the HSM attestation associated with your Cloud KMS key,
complete the following steps:
In the Google Cloud console, go to the Key Management page.
Go to Key Management
Select the key ring that contains the key you want to attest, and then
select the key.
Click More more_vert
for the key version you want to attest, and then click Verify attestation .
In the Verify attestation dialog, click Download attestation bundle .
This downloads a zip file containing the attestation and certificate
chains.
See Parsing the attestation for full instructions on how to
verify the downloaded attestation.
Create a self-signed certificate with OpenSSL
This step is optional, but helps you familiarize yourself with subsequent
steps before you go through the process and expense of purchasing a certificate
signed by a Certificate Authority.
Note: Use this self-signed certificate for testing only. A certificate created
this way is not appropriate for production use.
Using Cloud Shell or your own machine, generate a self-signed certificate
with the Cloud KMS-hosted signing key. You can use OpenSSL to use a
PKCS #11 URI instead of a file path and identify the key by its label. In the
Cloud KMS PKCS #11 library, the key label is equivalent to the
CryptoKey name.
openssl req -new -x509 -days 3650 -subj '/CN=test/' -sha256 -engine pkcs11 \
-keyform engine -key pkcs11:object= KEY_NAME > ca.cert
If this command fails, PKCS11_MODULE_PATH may have been set incorrectly, or
you might not have the right permissions to use the Cloud KMS
signing key.
You should now have a certificate that looks like this:
-----BEGIN CERTIFICATE-----
...
...
...
-----END CERTIFICATE-----
Copy the certificate to your Windows machine so that you can use it with
SignTool to sign your artifacts.
Create a new certificate signing request
You can generate a certificate signing request (CSR) for a Cloud HSM
signing key. Complete these steps if your certificate authority requires a CSR
in order to generate a new certificate for code signing.
Using Cloud Shell or your own machine, run the following command:
openssl req -new -subj '/CN= CERTIFICATE_NAME /' DIGEST_FLAG \
-engine pkcs11 -keyform engine \
-key pkcs11:id= KEY_ID > REQUEST_NAME .csr
Replace the following:
CERTIFICATE_NAME : a name for the certificate that you
want to generate.
DIGEST_FLAG : a flag indicating the type of digest. Use
-sha256 , -sha384 , or -sha512 depending on the algorithm of the key.
KEY_ID : the fully qualified resource ID of an asymmetric
signing key version—for example,
projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys/ KEY_NAME /cryptoKeyVersions/1 .
REQUEST_NAME : a name for the certificate signing request.
Make sure you use the correct -sigopt options for the type of key that you're
using.
You can't use an object ID longer than 100 characters with OpenSSL. Use short
KeyRing and CryptoKey names, or use pkcs11:object= KEY_NAME instead.
For more information on the OpenSSL object ID limit, see the
related issue on GitHub .
Now that you have your CSR, you can provide it to your Certificate
Authority (CA) to obtain the signing certificate. Use the certificate provided
by your CA in the next section.
Sign an artifact with SignTool
Now that you have successfully created a certificate (either self-signed or
obtained from the Certificate Authority) and copied it to your Windows machine,
you can use it to sign a Windows artifact.
Use SignTool to sign the artifacts, using your Cloud KMS key and your
certificate.
" PATH_TO_SIGNTOOL.EXE " sign ^
/v /debug /fd sha256 /t http://timestamp.digicert.com ^
/f PATH_TO_CA.CERT ^
/csp "Google Cloud KMS Provider" ^
/kc projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys/ KEY_NAME /cryptoKeyVersions/1 ^
PATH_TO_ARTIFACT_TO_SIGN
Replace the following:
PATH_TO_SIGNTOOL.EXE : the path to signtool.exe (eg.
C:\\Program Files (x86)\\Windows Kits\\10\\bin\\10.0.19041.0\\x64\\signtool.exe ).
PATH_TO_CA.CERT : the path to your certificate ca.cert .
PATH_TO_ARTIFACT_TO_SIGN : the path to the artifact that
you want to sign.
For a detailed explanation of each command option and supported artifact file
formats, see the official SignTool documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
