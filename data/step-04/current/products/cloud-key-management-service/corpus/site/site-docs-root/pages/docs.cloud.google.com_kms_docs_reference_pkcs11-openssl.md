---
title: "Using a Cloud HSM key with OpenSSL \_|\_ Cloud Key Management Service \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl
  title: "Using a Cloud HSM key with OpenSSL \_|\_ Cloud Key Management Service \_\
    |\_ Google Cloud Documentation"
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
Using a Cloud HSM key with OpenSSL
Stay organized with collections
Save and categorize content based on your preferences.
This guide provides instructions for setting up OpenSSL to use a Cloud HSM
key on Debian 11 (Bullseye). These instructions are generally applicable even if
you're using another OS or environment, but be aware that there may be slight
differences.
Requirements
Download a release of the library
to get started. For additional details about the PKCS #11 library, see the user guide .
Before starting, install the libengine-pkcs11-openssl package.
sudo apt-get update
sudo apt-get install libengine-pkcs11-openssl
Configuration
Setting the PKCS11_MODULE_PATH environment variable.
In order for openssl to use our PKCS #11 library, set the PKCS11_MODULE_PATH
environment variable:
export PKCS11_MODULE_PATH = "/path/to/libkmsp11.so"
To permanently set the environment variable, add
export PKCS11_MODULE_PATH="/path/to/libkmsp11.so" to /etc/profile
by running the following command:
echo 'export PKCS11_MODULE_PATH="/path/to/libkmsp11.so"' | sudo tee -a /etc/profile
PKCS #11 library configuration
The PKCS #11 library requires a YAML configuration file to locate Cloud KMS
resources. The YAML must at a minimum configure a single PKCS #11 token.
If you are using OpenSSL with another process that may end up forking (for
example, Apache or Nginx), you must also ensure that the
refresh_interval_secs field remains unset, or is set to 0.
Sample configuration file:
---
tokens :
- key_ring : "projects/my-project/locations/us-central1/keyRings/my-keyring"
With this configuration, all asymmetric signing and decryption keys in
my-keyring will be available in the library.
You must set the permissions on the configuration file so that it is writable
only by the file owner. Point KMS_PKCS11_CONFIG to your config file:
export KMS_PKCS11_CONFIG = "/path/to/pkcs11-config.yaml"
Again, you can make this setting permanent by adding it to /etc/profile .
echo 'export KMS_PKCS11_CONFIG="/path/to/pkcs11-config.yaml"' | sudo tee -a /etc/profile
Running OpenSSL commands
With the engine and library properly configured, you may now use the engine in
OpenSSL commands.
When creating asymmetric signatures, keep in mind that Cloud KMS
keys are constrained to use a single digest. As an example, a CryptoKeyVersion
with the algorithm EC_SIGN_P256_SHA256 must always be used in conjunction with
a SHA-256 digest. That corresponds to the -sha256 flag in OpenSSL. Keys
that require SHA-384 or SHA-512 digests should be used with the -sha384 or
-sha512 flags.
Note: When creating asymmetric signatures using Cloud KMS keys with
an algorithm starting with RSA_PSS , additional options are typically required
by OpenSSL:
-sigopt rsa_padding_mode:pss -sigopt rsa_pss_saltlen:digest .
Create a new signature
Assuming there's a key named foo in your configured key ring, use the
following command to create a signature over bar.txt :
openssl dgst -sha256 -engine pkcs11 -keyform engine -sign pkcs11:object = foo bar.txt
The output of this command is unformatted binary.
That command assumes you are using a key that takes a SHA-256 digest, so the
-sha256 argument was used. The -sha384 or -sha512 options would be
appropriate for Cloud HSM keys that use those digest types.
For an RSA-PSS key, remember to use the -sigopt options discussed previously.
Create a new certificate signing request
You may also generate a certificate signing request (CSR) for a Cloud HSM
signing key. This is useful if your certificate authority requires a CSR in
order to generate a new certificate for code signing, or to protect TLS web
sessions.
openssl req -new -subj '/CN=test/' -sha256 -engine pkcs11 \
-keyform engine -key pkcs11:object=foo > my-request.csr
Note: Only create CSRs for Cloud KMS CryptoKeys with the
ASYMMETRIC_SIGN purpose. In addition, take care to use the correct digest
algorithm and -sigopt options for the key type.
Generate a new self-signed certificate
For local development and testing, you can use a self-signed certificate for a
Cloud HSM signing key. Self-signed certificates are also useful for SAML
token signing.
openssl req -new -x509 -days 3650 -subj '/CN=test/' -sha256 -engine pkcs11 \
-keyform engine -key pkcs11:object=foo > my-request.crt
Note: Self-signed certificates for Cloud KMS CryptoKeys are only
used for the ASYMMETRIC_SIGN purpose. In addition, take care to use the
correct digest algorithm and -sigopt options for the key type.
Troubleshooting with PKCS #11 Spy
PKCS #11 Spy is an open source tool that logs the contents of interactions over
the a PKCS #11 interface. It does this by sitting between the application and
the PKCS #11 library, and logging all the calls that are made. This can be
helpful for troubleshooting.
Caution: Don't use PKCS #11 Spy with sensitive workloads. When configured,
PKCS #11 Spy can observe all interactions with the HSM.
To use PKCS #11 Spy, you must have the opensc package installed. The
opensc package contains PKCS #11 Spy. To ensure that opensc is installed,
run the following command:
sudo apt-get install opensc
Then, set the PKCS11_MODULE_PATH environment variable to point OpenSSL at the
PKCS #11 Spy library by running the following command:
export PKCS11_MODULE_PATH = /usr/lib/x86_64-linux-gnu/pkcs11-spy.so
Finally, point PKCS #11 Spy to the Cloud HSM PKCS #11 library by setting the
PKCS11SPY and PKCS11SPY_OUTPUT environment variables. To set these environment
variables, run the following commands:
export PKCS11SPY = "/path/to/libkmsp11.so"
# Optional, stderr will be used for logging if not set
export PKCS11SPY_OUTPUT = "/path/to/pkcs11-spy.log"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
