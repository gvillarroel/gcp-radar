---
title: "Access security metadata and verify packages \_|\_ Security Command Center\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/aoss-access-security-metadata
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/aoss-access-security-metadata
  title: "Access security metadata and verify packages \_|\_ Security Command Center\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Security Command Center
Guides
Send feedback
Access security metadata and verify packages
Stay organized with collections
Save and categorize content based on your preferences.
Enterprise service tier
This document describes how to access security metadata from the
assuredoss-metadata Cloud Storage bucket. For a description of the security
metadata, see
Security metadata fields .
This document applies to the Assured OSS premium tier only. For
the free tier, see Verify signatures in the Assured OSS free
tier .
Before you begin
Integrate Assured OSS with
Security Command Center .
Validate connectivity
to Assured OSS for the requested service accounts.
Note:
To access the security metadata repository after setting up Assured OSS premium using
gcloud, send an email to
customer-support-aoss@google.com
with the service accounts that you enabled for Assured OSS.
Extract the metadata
You can use either gcloud or curl commands to download the metadata.
Construct the URL for both using the following information:
Language: java , python , golang , or javascript . The value must be
lowercase.
Package_ID: one of the following:
Java: groupId : artifactId
Python: packageName
JavaScript: one of
@ org-name / package-name , @ username / package-name , or package-name
Go: packageName
The value must be lower case.
Version: the version of the package.
The URL must have the following format:
gcloud
gs://assuredoss-metadata/ language / package_id / version /metadata.json
The URL must be in lowercase.
Sample URLs include the following:
Sample Python URL: gs://assuredoss-metadata/python/blessed/1.20.0/metadata.json
Sample Java URL: gs://assuredoss-metadata/java/org.apache.logging.log4j:log4j-core/2.17.1/metadata.json
Sample JavaScript URL: gs://assuredoss-metadata/javascript/@stoplight/spectral-core/0.0.0/metadata.json
Sample Go URL: gs://assuredoss-metadata/golang/github.com/rs/zerolog/1.9.1/metadata.json
curl
https://storage.googleapis.com/assuredoss-metadata/ language / package_id / version /metadata.json
The URL must be lowercase.
Sample URLs include the following:
Sample Python URL: https://storage.googleapis.com/assuredoss-metadata/python/blessed/1.20.0/metadata.json
Sample Java URL: https://storage.googleapis.com/assuredoss-metadata/java/org.apache.logging.log4j:log4j-core/2.17.1/metadata.json
Sample JavaScript URL: https://storage.googleapis.com/assuredoss-metadata/javascript/@stoplight/spectral-core/0.0.0/metadata.json
Sample Go URL: https://storage.googleapis.com/assuredoss-metadata/golang/github.com/rs/zerolog/1.9.1/metadata.json
Download the metadata:
gcloud
gcloud storage cp "gs://assuredoss-metadata/ language / package_id / version /metadata.json" outputFolderLocation
curl
curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -L https://storage.googleapis.com/assuredoss-metadata/ language / package_id / version /metadata.json -o metadata.json
You can now verify the signatures. There are two options:
Verify the signatures using the aoss-verifier tool
Verify the signatures of downloaded packages manually
Verify the signatures of downloaded packages using the aoss-verifier tool
Use the aoss-verifier tool to verify package metadata.
Before using this tool, install Go .
Install the
aoss-verifier tool.
Export $(go env GOPATH)/bin .
Run the aoss-verifier verify-metadata command.
aoss-verifier verify-metadata \
--metadata_type TYPE \
--language LANGUAGE \
--package_id PACKAGE_ID \
--version VERSION \
[ --disable_certificate_verification ] \
[ --temp_downloads_path TEMP_DOWNLOADS_DIR_PATH ] \
[ --disable_deletes ]
Replace the following:
TYPE : The possible values are premiuminfo .
LANGUAGE : The package language.
The value must be in lowercase.
PACKAGE_ID : For Java, the format is
groupId:artifactId . For Python and Go, the format is
packageName . The value must be in lower case.
VERSION : The version of the package.
--disable_certificate_verification is an optional flag which skips matching
the leaf certificate to the root certificate through the certificate chain, if
used.
--temp_downloads_path is an optional flag to set the path where you want to
download the files (replace TEMP_DOWNLOADS_DIR_PATH ).
If the flag isn't set, the files are downloaded to the tmp_downloads folder in the
current directory.
--disable_deletes is an optional flag which keeps the downloaded files. By
default, the tool cleans all the downloaded files.
For more information, see the README .
Verify the signatures of downloaded packages manually
You can verify the artifact signature only for the binaries that are securely
built by Assured OSS, not the ones that are provided by
Assured OSS through proxies.
To verify signatures manually, you can use various tools. The following steps
use gcloud CLI, OpenSSL (version 3.0.1 or higher), and
jq
(1.7.1 or higher) to verify the signatures on Linux.
Download the metadata file .
As described in
Security metadata fields ,
the metadata file contains an SBOM field inside the buildInfo field. The SBOM
contains the artifact (for example, a JAR or EGG file) that was built along
with an annotation that represents the signature. This artifact lets you
determine the SPDX ID.
For example, if the artifact name is artifact_name , the spdx_id is
SPDXRef-Package-artifact_name . To validate a package that is named
gradio-3.30.0-py3-none-any.whl , the spdx_id is
SPDXRef-Package-gradio-3.30.0-py3-none-any.whl .
Extract the SHA-256 digest from the metadata file:
cat METADATA_FILENAME | jq -rj '.buildInfo' | jq -rj '.sbom' | jq -rj '.packages' | jq '.[] | select(.SPDXID==" SPDX_ID ")' | jq -rj '.annotations[0].comment' | jq -rj '.digest[0].digest' | cut -d ' ' -f1 > expectedDigest.txt
Replace the following:
METADATA_FILENAME : The name of
your security metadata file.
SPDX_ID : The SPDX identifier.
Compute the artifact digest:
sha256sum ARTIFACT_FILE | cut -d ' ' -f1 > actualDigest.txt
Replace ARTIFACT_FILE with the name of the artifact
file.
Note: On macOS, you can use shasum -a 256 to calculate the digest.
Check for any differences between the two:
diff actualDigest.txt expectedDigest.txt
If there is no difference, there is no output.
Extract the digest of the field to a .bin file:
cat METADATA_FILENAME | jq -rj '.buildInfo' | jq -rj '.sbom' | jq -rj '.packages' | jq '.[] | select(.SPDXID==" SPDX_ID ")' | jq -rj '.annotations[0].comment' | jq -rj '.digest[0].digest' | cut -d ':' -f2 | xxd -r -p > digest.bin
Extract the signature of the digest to a .sig file:
cat METADATA_FILENAME | jq -rj '.buildInfo' | jq -rj '.sbom' | jq -rj '.packages' | jq '.[] | select(.SPDXID==" SPDX_ID ")' | jq -rj '.annotations[0].comment' | jq -rj '.signature[0].signature' | xxd -r -p > sig.sig
Extract the public key from the public certificate to a .pem file:
cat METADATA_FILENAME | jq -rj '.buildInfo' | jq -rj '.sbom' | jq -rj '.packages' | jq '.[] | select(.SPDXID==" SPDX_ID ")' | jq -rj '.annotations[0].comment' | jq -rj '.certInfo.cert' | openssl x509 -pubkey -noout > pubKey.pem
Verify the signature of the digest using the extracted public key:
openssl pkeyutl -in digest.bin -inkey pubKey.pem -pubin -verify -sigfile sig.sig
If successful, this command returns Signature Verified Successfully .
You can now verify the certificate.
Extract the public certificate to a .pem file:
cat METADATA_FILENAME | jq -rj '.buildInfo' | jq -rj '.sbom' | jq -rj '.packages' | jq '.[] | select(.SPDXID==" SPDX_ID ")' | jq -rj '.annotations[0].comment' | jq -rj '.certInfo.cert' > cert.pem
Download the root certificate ( ca.crt in the following command):
curl -o ca.crt https://privateca-content-6333d504-0000-2df7-afd6-30fd38154590.storage.googleapis.com/a2c725a592f1d586f1f8/ca.crt
Verify the certificate using the extracted certificate and the root
certificate:
openssl verify -verbose -CAfile ca.crt cert.pem
If successful, this command returns cert.pem: OK .
Verify the signatures for security metadata fields
You can verify the signature of the following fields in the security metadata
file independently:
buildInfo
vexInfo
healthInfo (if present)
The data inside the fields are hashed using SHA-256, and then the hash is signed
using the ECDSAP256_DER algorithm. The certificate and certificate chain are
provided inside the metadata so that you can verify the signature. Use the
following root certificate to verify the certificate chain:
https://privateca-content-6333d504-0000-2df7-afd6-30fd38154590.storage.googleapis.com/a2c725a592f1d586f1f8/ca.crt
You can verify signatures manually or you can verify signatures using the
Assured OSS Verifier Tool .
The following steps describe how to manually verify the signature of the
buildInfo field in the metadata.json file. You can use similar steps to
verify the signature of the vexInfo field or the healthInfo field.
You can verify signatures using various tools. The following example uses
gcloud CLI, OpenSSL (version 3.0.1 or later) and
jq
(1.7.1 or later) to verify the signatures on a Linux system.
Generate the SHA-256 digest of the field:
cat metadata.json | jq -rj '.buildInfo' | sha256sum | cut -d ' ' -f1 > actualDigest.txt
Note: On macOS, you can use shasum -a 256 to calculate the digest.
Extract the digest of the field that is provided in the metadata.json
file:
cat metadata.json | jq -rj '.buildInfoSignature.digest[0].digest' | cut -d ':' -f2 > expectedDigest.txt
Check for any differences between the two digests:
diff actualDigest.txt expectedDigest.txt
If there is no difference then there will be no output, which is the
ideal case. You can now verify the signature.
Extract the digest of the field to a .bin file:
cat metadata.json | jq -rj '.buildInfoSignature.digest[0].digest' | cut -d ':' -f2 | xxd -r -p > digest.bin
Extract the signature of the digest to a .sig file:
cat metadata.json | jq -rj '.buildInfoSignature.signature[0].signature' | xxd -r -p > sig.sig
Extract the public key from the public certificate to a .pem file:
cat metadata.json | jq -rj '.buildInfoSignature.certInfo.cert' | openssl x509 -pubkey -noout > pubKey.pem
Verify the signature of the digest using the extracted public key:
openssl pkeyutl -in digest.bin -inkey pubKey.pem -pubin -verify -sigfile sig.sig
If the verification is successful, this command returns Signature
Verified Successfully . You can now verify the certificate.
Extract the public certificate to a .pem file:
cat metadata.json | jq -rj '.buildInfoSignature.certInfo.cert' > cert.pem
Download the root certificate, named ca.crt in the following command:
curl -o ca.crt https://privateca-content-6333d504-0000-2df7-afd6-30fd38154590.storage.googleapis.com/a2c725a592f1d586f1f8/ca.crt
Verify the certificate using the extracted certificate and the root
certificate:
openssl verify -verbose -CAfile ca.crt cert.pem
If successful, the command returns cert.pem: OK .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
