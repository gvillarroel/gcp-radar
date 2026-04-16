---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.189Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Always-on secrets encryption"
feature_slug: "always-on-secrets-encryption"
latest_feature_date: "2021-09-29"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/always-on-secrets-encryption"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
keywords:
  - "always"
  - "secrets"
  - "encryption"
  - "you"
  - "can"
  - "enable"
  - "internally"
  - "generated"
---

# Always-on secrets encryption

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

You can enable secrets encryption with internally generated keys instead of an HSM.

## Extended Definition

Always-on secrets encryption in Google Distributed Cloud (software only) for VMware is an admin cluster capability that automatically generates a key and uses it to encrypt secrets before they are stored in the cluster's etcd database. In configuration, it is controlled by the admin cluster `secretsEncryption` settings, where the supported mode is `GeneratedKey` and `generatedKey.keyVersion` is required, with an optional `generatedKey.disabled` flag to turn encryption off. The feature is documented as not supported on advanced clusters (including a noted limitation for version 1.31).

## Evidence Summary

The cited pages define what always-on secrets encryption is, show the required cluster configuration fields and values (`GeneratedKey`, `keyVersion`, disable flag), and state its unsupported status on advanced clusters.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/always-on-secrets-encryption](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/always-on-secrets-encryption)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)

## Supporting Pages

### "Using always-on secrets encryption \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/always-on-secrets-encryption](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/always-on-secrets-encryption)
- Source ID: `site-docs-reference`
- Final score: 285
- Re-rank relevance: STRONG
- Re-rank rationale: The page is specifically the documentation for enabling and operating always-on secrets encryption, including behavior, key model, supported versions, and key storage details.

Evidence snippets:
- Enable always-on secrets encryption Always-on secrets encryption works by automatically generating an encryption key that is used to encrypt secrets before they are stored on the etcd database for that cluster.
- All subsequent new secrets are stored in plain text. secretsEncryption: mode: GeneratedKey generatedKey: keyVersion: KEY VERSION disabled: true Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Technology areas Google Distributed Cloud Documentation GDC for VMware Guides Send feedback Using always-on secrets encryption Stay organized with collections Save and categorize content based on your preferences.
- Note the following limitation with advanced clusters: Version 1.31: always-on secrets encryption isn't supported on advanced clusters .

### "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Backing up the admin cluster to a vSphere datastore isn't supported. autoRepair If you want to enable automatic node repair for your admin cluster, set autoRepair.enabled to true . secretsEncryption If you want to enable always-on Secrets encryption , fill in the secretsEncryption section.
- Always-on Secrets encryption isn't supported. osImageType Decide what type of OS image you want to use for the admin cluster nodes, and fill in the osImageType section accordingly.
- If you enable advanced cluster, set secretsEncryption.enabled to false .
- If you have enabled VM encryption in your instance of vCenter Server, then you must have the Cryptographic operations.Direct Access privilege before you create or upgrade your admin cluster.

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- This feature isn't supported with advanced clusters. secretsEncryption.mode Required for Secrets encryption Immutable String Possible value: "GeneratedKey" Prepopulated: "GeneratedKey" The Secret encryption mode. secretsEncryption: mode: "GeneratedKey" secretsEncryption.generatedKey.keyVersion Required for Secrets encryption Mutable Integer Prepopulated: 1 An integer of your choice to use for the key version number.
- Possible values are: GeneratedKey mode: GeneratedKey # GeneratedKey Secrets Encryption config generatedKey: # # key version # keyVersion: 1 # # disable secrets encryption # disabled: false (Optional) Specify the type of OS image; available options can be set to "ubuntu containerd" "cos" "ubuntu cgv2" or "cos cgv2".
- Example: secretsEncryption: generatedKey: disabled: false osImageType Optional Mutable String Possible values: "ubuntu containerd", "cos", "ubuntu cgv2", "cos cgv2" Prepopulated: "ubuntu cgv2" Default: "ubuntu containerd" The type of OS image to run on your admin cluster nodes.
- Example: secretsEncryption: generatedKey: keyVersion: 1 secretsEncryption.generatedKey.disabled Optional for Secrets encryption Mutable Boolean Prepopulated: false Set this to true to disable Secrets encryption.

