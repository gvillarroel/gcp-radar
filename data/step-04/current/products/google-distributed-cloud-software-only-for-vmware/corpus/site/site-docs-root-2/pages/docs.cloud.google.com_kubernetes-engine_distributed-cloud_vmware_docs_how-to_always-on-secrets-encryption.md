---
title: "Using always-on secrets encryption \_|\_ Google Distributed Cloud (software\
  \ only) for VMware \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/always-on-secrets-encryption
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/always-on-secrets-encryption
  title: "Using always-on secrets encryption \_|\_ Google Distributed Cloud (software\
    \ only) for VMware \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Distributed Cloud
Documentation
GDC for VMware
Guides
Send feedback
Using always-on secrets encryption
Stay organized with collections
Save and categorize content based on your preferences.
Google Distributed Cloud version 1.10 supports encrypting secrets without the need for
an external KMS (Key Management Service), or any other dependencies.
Note the following limitation with advanced clusters:
Version 1.31: always-on secrets encryption isn't supported on
advanced clusters .
Version 1.32 and higher: always-on encryption is supported on advanced
clusters.
Enable always-on secrets encryption
Always-on secrets encryption works by automatically generating an encryption key that is used to encrypt secrets before they are stored on the etcd database for that cluster. The secrets are encrypted using a Data Encryption Key (DEK) generated for every Secret write. This DEK is used in AES-GCM mode to encrypt the Secret object. The DEK is in turn encrypted with a Key Encrypting Key (KEK). The encryption algorithm is A256GCM (AES GCM using 256-bit key).
The key version is a version number to indicate the key currently in use.
You can enable secrets encryption after a cluster has already been created.
For the admin cluster:
Edit the admin cluster configuration file to add the secretsEncryption section.
Run the gkectl update command.
gkectl update admin --config ADMIN_CLUSTER_CONFIG_FILE --kubeconfig ADMIN_CLUSTER_KUBECONFIG
For a user cluster:
Edit the user cluster configuration file to add the secretsEncryption section.
Run the gkectl update command.
gkectl update cluster --config USER_CONFIG_FILE --kubeconfig ADMIN_CLUSTER_KUBECONFIG
Replace the following:
ADMIN_KUBECONFIG with the path of your admin cluster kubeconfig file.
ADMIN_CLUSTER_CONFIG with the path of your admin cluster configuration file.
USER_CLUSTER_CONFIG with the path of your user cluster configuration file.
The gkectl update commands provided in this section can also be used for any other updates to the corresponding cluster.
Key storage
The encryption keys for the admin cluster are stored on the admin cluster data disk. This disk is mounted on the admin master machine at /opt/data, and the encryption keys can be found at /opt/data/gke-k8s-kms-plugin/generatedkeys/. These keys must be backed up to retain access to the encrypted secrets used by that key. You should enable VM/storage encryption in the hypervisor or similar measures to ensure that the control plane VM disks are protected.
Key rotation
To rotate an existing encryption key for a cluster, increment the keyVersion in the corresponding admin cluster configuration file or user cluster configuration file , and run the appropriate gkectl update command. This creates a new key matching the new version number, re-encrypts each secret, and securely erases the old one. All subsequent new secrets are encrypted using the new encryption key.
Disable always-on secrets encryption
To disable secrets encryption on an existing cluster, add a disabled: true field. Next, run the corresponding gkectl update command. This update decrypts each existing secret and stores each secret in plain text. All subsequent new secrets are stored in plain text.
secretsEncryption:
mode: GeneratedKey
generatedKey:
keyVersion: KEY_VERSION
disabled: true
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
