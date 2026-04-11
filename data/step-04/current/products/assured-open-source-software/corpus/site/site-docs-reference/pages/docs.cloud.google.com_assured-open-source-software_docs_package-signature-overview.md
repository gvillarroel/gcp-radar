---
title: "Overview of Assured OSS artifact signature \_|\_ Assured Open Source Software\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-open-source-software/docs/package-signature-overview
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/assured-open-source-software/docs/download-go-packages
source_metadata:
  url: https://docs.cloud.google.com/assured-open-source-software/docs/package-signature-overview
  title: "Overview of Assured OSS artifact signature \_|\_ Assured Open Source Software\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Assured Open Source Software
Guides
Send feedback
Overview of Assured OSS artifact signature
Stay organized with collections
Save and categorize content based on your preferences.
Assured Open Source Software provides you with packages, package metadata, and
utility scripts. Each Assured OSS package is signed using a
separate Google-issued certificate which uses ECDSA P256 algorithm for key
generation. Each package metadata and utility script is also signed using a
single Google-issued certificate which uses ECDSA P256 algorithm for key
generation. These certificates are issued using Certificate Authority Service and the
corresponding public root certificate can be found in a Cloud Storage bucket .
This document applies to the free tier. For information about signatures in the
premium tier, see Access security metadata and verify
packages .
Overview of signatures
Signatures are stored in a signature.zip file. The signature.zip file
contains the following files:
digest.txt : This file stores the hashing algorithm along with the package
digest in a hex-encoded format. See the following example:
SHA-256:c5feab6f4de0878e94cf2a3074039b4f16a0c93a03501f047ee6eea29a8e33e0`.
signature.txt : This file stores the signature algorithm along with the
hex-encoded signature. See the following example:
ECDSAP256_DER:30450220585d2a01f20de98dfe6cfab2c01a8f11787dbafbc6541304d23cc582e61be016022100f05a19f5ce473144579dfefc47905fd650584a1c7a31bd9d5bf93ecce739a7cb`
cert.pem : This file stores the public certificate.
certChain.pem : This file stores the certificate chain for the public
certificate.
Verification of signatures
You can verify signatures using either of the following:
aoss-verifier tool
manually
verification script
Verify signatures using aoss-verifier tool
To verify the authenticity and integrity of open source software packages,
install the aoss-verifier
tool.
To verify a package, pass the LANGUAGE ,
PACKAGE_ID , and VERSION values and the
PATH_TO_DATA_FILE that you want to verify using the
--language , --package_id , --version , and --artifact_path flags.
aoss-verifier verify-package \
--language LANGUAGE \
--package_id PACKAGE_ID \
--version VERSION \
--artifact_path ARTIFACT_PATH
Replace the following:
LANGUAGE : The package language. The value must
be in lowercase.
PACKAGE_ID : For Java, the format is
groupId:artifactId . For Python, the format is
packageName . The value must be in lowercase.
VERSION : The version of the package.
ARTIFACT_PATH : The path to the data file in your
local directory that you want to verify. Use the following filename
extensions:
jar file extension for a Java package
whl file extension for a Python package
Verify signatures manually
To verify the signatures manually, do the following:
Install Google Cloud CLI and the OpenSSL software, version 3.0.1 or higher.
Verify the digest.
Identify the hashing algorithm. The digest.txt file contains the hashing
algorithm used to calculate the digest. Identify the hashing algorithm using
the following command:
cut -d ':' -f1 digest.txt
Make sure that the output is SHA256 .
Calculate digest of the data file. You can calculate digest of the data file
by using various command line tools depending on the hash algorithm used. For
Assured OSS data files and scripts, use the SHA-256 hash
algorithm to generate the digest.
On Linux, use the following command to calculate the hash:
sha256sum PATH_TO_DATA_FILE | cut -d ' ' -f1 > datadigest.txt
For package verification, replace PATH_TO_DATA_FILE with
the path to the package in your local directory for package verification.
For metadata verification, replace PATH_TO_DATA_FILE with
the metadata filename. For example, buildInfo.json , vexInfo.json or
healthInfo.json .
On macOS, use the following command:
shasum -a 256 PATH_TO_DATA_FILE | cut -d ' ' -f1 > datadigest.txt
Extract hash from the digest.txt file using the following command:
cut -d ':' -f2 digest.txt > signaturedigest.txt
Compare the two digests using the following command:
diff datadigest.txt signaturedigest.txt
If there is no difference, then there will be no output.
Verify the signature
Obtain a public key from cert.pem using the following command:
openssl x509 -pubkey -noout -in cert.pem > pubkey.pem
Extract the signature in binary format using the following command
(install xxd command if it isn't present):
cut -d ':' -f2 signature.txt | xxd -r -p > sig.sig
Extract the digest in binary format using the following command:
cut -d ':' -f2 digest.txt | xxd -r -p > digest.bin
Verify the signature using one of the following commands:
Option 1
openssl pkeyutl -in digest.bin -inkey pubkey.pem -pubin -verify -sigfile sig.sig
The command returns the following output:
Signature Verified Successfully
Option 2
openssl dgst -sha256 -verify pubkey.pem -signature sig.sig PATH_TO_DATA_FILE
Replace PATH_TO_DATA_FILE with the path to the data file
in your local directory.
The command returns the following output:
Verified OK
Verify the certificate
To verify the certificate, run the following command:
openssl verify -verbose -CAfile ca.crt -untrusted certChain.pem cert.pem
The ca.cert is the root certificate that can be download using this command:
curl -o PATH_TO_LOCAL_STORE https://privateca-content-6333d504-0000-2df7-afd6-30fd38154590.storage.googleapis.com/a2c725a592f1d586f1f8/ca.crt
The following output is returned upon success:
cert.pem: OK
Verify signatures using a script
To use a verification script to verify signatures, follow these steps:
Download the verification script.
Set up authentication using Application Default Credentials (ADC).
Download the signatureverification.sh , README.md and the signature.zip
for the verification script using the following command:
gcloud storage cp "gs://cloud-aoss/utils/signature-verification/v1.0" PATH_TO_LOCAL_STORE --recursive
Replace PATH_TO_LOCAL_STORE with the local path where you
want to download the file.
You can also perform utility script verification using the verification script.
Execute the script using the following steps:
Install Google Cloud CLI and the OpenSSL software, version 3.0.1 or higher.
Authenticate with the service account that has permission to access
Assured OSS.
Grant the required permissions to execute the script using the following
command:
chmod +x signatureverification.sh
Execute the script using the following command if you haven't downloaded the
signature.zip file:
./signatureverification.sh --data_file_path PATH_TO_DATA_FILE \
--signature_url SIGNATURE_ZIP_URL \
--root_cert_url ROOT_CERT_URL
Replace the following:
PATH_TO_DATA_FILE : the path to the data file in your
local directory that you want to verify
SIGNATURE_ZIP_URL : the URL of the signature zip file
ROOT_CERT_URL : the public root certificate URL
Sample output
The following output indicates that the verification script has run successfully.
Signature verification successful
Certificate verification successful
What's next
Verify signatures
Verify the build provenance
Learn about protecting your software supply chain
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
