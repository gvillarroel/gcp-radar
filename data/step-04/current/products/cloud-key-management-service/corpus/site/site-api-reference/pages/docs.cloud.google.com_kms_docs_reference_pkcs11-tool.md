---
title: "Use a Cloud HSM key with pkcs11-tool \_|\_ Cloud Key Management Service \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/pkcs11-tool
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/pkcs11-tool
  title: "Use a Cloud HSM key with pkcs11-tool \_|\_ Cloud Key Management Service\
    \ \_|\_ Google Cloud Documentation"
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
Use a Cloud HSM key with pkcs11-tool
Stay organized with collections
Save and categorize content based on your preferences.
This guide provides sample pkcs11-tool commands to use a Cloud HSM key on
Debian 11 (Bullseye) using the PKCS #11 library. The commands included in
these instructions might require changes based on your OS or Linux distribution.
Before you begin
Before continuing, complete the steps in
Using a Cloud HSM key with OpenSSL .
Use symmetric encryption and decryption
The following sections show you how to encrypt and decrypt using a symmetric
encryption key, OpenSSL, and pkcs11-tool.
Prerequisites
Create a Cloud HSM raw symmetric encryption
key . To create a Cloud HSM key, set
the Protection level to HSM while creating a new key.
Make note of the raw symmetric encryption algorithm that you choose for
the key. Each algorithm has its own requirements for
padding, initialization vectors, and additional authenticated data.
Create an input file that contains the data that you want to encrypt.
Encrypt
To encrypt a text file, run the following command:
pkcs11-tool --module PATH_TO_LIBKMSP11_SO --encrypt \
--mechanism MECHANISM \
--slot 0 \
--label HSM_KEY_NAME \
--iv INITIALIZATION_VECTOR \
--input-file INPUT_TEXT_FILE_PATH \
--output-file ENCRYPTED_TEXT_FILE_PATH
Replace the following:
PATH_TO_LIBKMSP11_SO : the path to the PKCS#11
module—for example, /usr/local/lib/libkmsp11.so .
MECHANISM : the mechanism to be used, based on the key
algorithm—for example, AES-CBC-PAD .
HSM_KEY_NAME : the name of the Cloud HSM key
to use for encryption.
INITIALIZATION_VECTOR : the value of the initialization
vector to be used as part of the encryption.
INPUT_TEXT_FILE_PATH : the path to the input file you want
to encrypt.
ENCRYPTED_TEXT_FILE_PATH : the path where you want to save
the encrypted text file.
Decrypt
To decrypt a text file, run the following command:
pkcs11-tool --module PATH_TO_LIBKMSP11_SO --decrypt \
--mechanism MECHANISM \
--slot 0 \
--label HSM_KEY_NAME \
--iv INITIALIZATION_VECTOR \
--input-file ENCRYPTED_TEXT_FILE_PATH \
--output-file DECRYPTED_TEXT_FILE_PATH
Replace the following:
PATH_TO_LIBKMSP11_SO : the path to the PKCS#11
module—for example, /usr/local/lib/libkmsp11.so .
MECHANISM : the mechanism to be used, based on the key
algorithm—for example, ECDSA .
HSM_KEY_NAME : the name of the Cloud HSM key
that was used to encrypt the file that you want to decrypt.
INITIALIZATION_VECTOR : the value of the initialization
vector to be used as part of the encryption.
ENCRYPTED_TEXT_FILE_PATH : the path to the file you want
to decrypt.
DECRYPTED_TEXT_FILE_PATH : the path where you want to save
the decrypted text file.
Use asymmetric encryption and decryption
The following sections show you how to encrypt and decrypt using an asymmetric
encryption key, OpenSSL, and pkcs11-tool.
Prerequisites
Create a Cloud HSM Asymmetric Decryption
key and download its public
key.
Note: To create a Cloud HSM key in the Google Cloud console, change
the Protection level to HSM while creating a new key.
Create an input file with some text.
echo Hello World! >> input.txt
Encrypt
To encrypt a text file, run the following command:
openssl pkeyutl -in INPUT_TEXT_FILE_PATH -encrypt -pubin \
-inkey PUBLIC_KEY \
-pkeyopt rsa_padding_mode:oaep \
-pkeyopt rsa_oaep_md:sha256 \
-pkeyopt rsa_mgf1_md:sha256 > ENCRYPTED_TEXT_FILE_PATH
Replace the following:
INPUT_TEXT_FILE_PATH : the path to the input file you want
to encrypt.
PUBLIC_KEY : the path to the public key.
ENCRYPTED_TEXT_FILE_PATH : the path where you want to save
the encrypted text file.
Decrypt
To decrypt a text file, run the following command:
pkcs11 - tool -- module PATH_TO_LIBKMSP11_SO \
-- decrypt -- mechanism RSA - PKCS - OAEP -- slot 0 -- hash - algorithm = sha256 \
-- mgf MGF1 - SHA256 -- label HSM_KEY_NAME -- type privkey \
- i ENCRYPTED_TEXT_FILE_PATH \
- o OUTPUT_TEXT_FILE_PATH
Replace the following:
PATH_TO_LIBKMSP11_SO : the path to the PKCS#11 module
(path/to/libkmsp11.so).
HSM_KEY_NAME : the name of the Cloud HSM key
which corresponds to the public key used to encrypt the text file.
ENCRYPTED_TEXT_FILE_PATH : the path to the file you want
to decrypt.
OUTPUT_TEXT_FILE_PATH : the path where you want to save
the decrypted output.
Sign and Verify
The following sections show you how to sign and verify using an asymmetric
signing key and pkcs11-tool.
Prerequisites
Create a Cloud HSM Asymmetric Sign key .
Note: To create a Cloud HSM key in the Google Cloud console, change the
Protection level to HSM while creating a new key.
Create a file with the hashed input data you want to sign.
Sign
To sign a text file, run the following command:
pkcs11 - tool -- module PATH_TO_LIBKMSP11_SO -- sign \
-- mechanism MECHANISM \
-- slot 0 \
-- label HSM_KEY_NAME \
- i INPUT_TEXT_FILE_PATH \
- o OUTPUT_SIGNATURE_FILE_PATH
Replace the following:
PATH_TO_LIBKMSP11_SO : the path to the PKCS#11 module,
for example path/to/libkmsp11.so .
HSM_KEY_NAME : the name of the Cloud HSM key
that you want to use for signing.
MECHANISM : the mechanism to be used, based on the key
algorithm. For example, ECDSA .
INPUT_TEXT_FILE_PATH : the path to the input file you want
to sign.
OUTPUT_SIGNATURE_FILE_PATH : the path where you want to
save the signature file.
Verify
To verify a signature file, run the following command:
pkcs11 - tool -- module PATH_TO_LIBKMSP11_SO -- verify \
-- mechanism MECHANISM \
-- slot 0 \
-- label HSM_KEY_NAME \
- i INPUT_TEXT_FILE_PATH \
-- signature - file SIGNATURE_FILE_PATH
Replace the following:
PATH_TO_LIBKMSP11_SO : the path to the PKCS#11 module,
for example path/to/libkmsp11.so .
HSM_KEY_NAME : the name of the Cloud HSM key
that was used to generate the signature that you want to verify.
MECHANISM : the mechanism to be used, based on the key
algorithm. For example, ECDSA .
INPUT_TEXT_FILE_PATH : the path to the file that was
previously signed.
SIGNATURE_FILE_PATH : the path to the signature file.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
