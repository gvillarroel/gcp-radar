---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:19:23.982Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Encryption and SSH key configuration during provisioning and reimaging"
feature_slug: "encryption-and-ssh-key-configuration-during-provisioning-and-reimaging"
latest_feature_date: "2023-12-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-ssh-keys"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-encryption-keys"
keywords:
  - "encryption"
  - "reimaging"
  - "ssh"
  - "key"
  - "configuration"
  - "provisioning"
  - "during"
  - "and"
---

# Encryption and SSH key configuration during provisioning and reimaging

Product: Bare Metal Solution
Coverage: LOW

## Step 02 Summary

You can now configure encryption keys and SSH keys when provisioning or reimaging a Bare Metal Solution server.

## Extended Definition

You can now configure encryption keys and SSH keys when provisioning or reimaging a Bare Metal Solution server.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-ssh-keys](https://docs.cloud.google.com/bare-metal/docs/bms-ssh-keys)
- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/bare-metal/docs/bms-encryption-keys](https://docs.cloud.google.com/bare-metal/docs/bms-encryption-keys)

## Supporting Pages

### "Set up SSH keys for a server \_|\_ Bare Metal Solution \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-ssh-keys](https://docs.cloud.google.com/bare-metal/docs/bms-ssh-keys)
- Source ID: `site-docs-root-2`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- On the Server details page, view the SSH keys in SSH keys field. gcloud Use the gcloud alpha bms instances auth-info command: gcloud alpha bms instances auth-info SERVER NAME --project= PROJECT ID --region= REGION Replace the following: SERVER NAME : The name of the Bare Metal Solution server.
- Set up SSH keys while provisioning a server You can set up SSH keys for a new Bare Metal Solution server while provisioning it through the Google Cloud console intake form .
- To set up SSH keys while provisioning a server, see Use the Google Cloud console intake form to enter your selections .
- Set up SSH keys while reimaging a server To set up SSH keys while reimaging a server, see Change the OS for a server .

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- For the OS image code, see Operating systems . gcloud bms instances update SERVER NAME --region REGION --os-image= OS IMAGE To set up SSH keys, encryption keys, or both, use the gcloud alpha bms instances update command.
- Edit the file remove stale lun.yml to update the vars section with the values of data center and lun wwid to match the WWID values identified in Step 1.d of this procedure. vars: ansible ssh common args: "-o StrictHostKeyChecking=no" ansible user: root ansible ssh private key file: /etc/pki/ovirt-engine/keys/engine id rsa engine fqdn: manager.olvm.test engine user: admin@internal data center: default lun wwid: 3600a0980383146354a2b522d53374244 3600a0980383146354a2b522d53374245 From the Oracle Linux Virtualization Manager engine, run the Ansible playbook. ansible-playbook /usr/share/ansible/collections/ansible collections/ovirt/ovirt/roles/remove stale lun/examples/remove stale lun.yml PLAY [oVirt remove stale LUN] ... [output skipped] TASK [ovirt.ovirt.remove stale lun : Logout from oVirt] skipping: [localhost] PLAY RECAP localhost : ok=7 changed=3 unreachable=0 failed=0 skipped=1 rescued=0 ignored=0 Once the Ansible playbook is complete, the paths associated with the LUN are safely removed from the KVM hosts.
- Copy the command, paste it into the Cloud Shell prompt, and press the Enter or Return key. curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /nfsShares" -d \ '{ "name": "projects/ PROJECT ID /locations/ REGION /nfsShares/ NFS VOLUME NAME ", "labels": { "nfsKey1": "some value", "key2": "another value", }, "requestedSizeGib": " SIZE GIB ", "storageType": " STORAGE TYPE ", "allowedClients": [ { "network": "projects/ PROJECT ID /locations/ REGION /networks/ NETWORK NAME ", "allowedClientsCidr": " IP ADDRESS RANGE ", "mountPermissions": " MOUNT PERMISSIONS ", "allowDev": ALLOW DEV , "allowSuid": ALLOW SUID , "noRootSquash": ENABLE ROOT SQUASH , } ], }' Because creating an NFS volume takes a while to complete, you can check the status by following the steps in View the status of a long-running operation .
- Copy the command, paste it into the Cloud Shell prompt, and press the Enter or Return key. curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /nfsShares/ NFS VOLUME NAME ?updateMask=allowed clients%2Clabels" -d \ '{ "name": "projects/ PROJECT ID /locations/ REGION /nfsShares/ NFS VOLUME NAME ", "labels": { "newKey": "newVal", }, "allowedClients": [ { "network": "projects/ PROJECT ID /locations/ REGION /networks/ NFS VOLUME NAME ", "allowedClientsCidr": " IP ADDRESS RANGE ", "mountPermissions": " MOUNT PERMISSIONS ", "allowDev": ALLOW DEV , "allowSuid": ALLOW SUID , "noRootSquash": ENABLE ROOT SQUASH , } ], }' Because updating an NFS volume takes a while to complete, you can check the status by following the steps in View the status of a long-running operation .

### "Set up encryption keys for a server \_|\_ Bare Metal Solution \_|\_ Google\

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-encryption-keys](https://docs.cloud.google.com/bare-metal/docs/bms-encryption-keys)
- Source ID: `site-docs-root-2`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Set up encryption keys while provisioning a server You can set up an encryption key for a new Bare Metal Solution server while provisioning it through the Google Cloud console intake form .
- View encryption keys and passwords of a server To view encryption keys and passwords of a server, follow these steps: Console Go to the Servers page.
- Set up encryption keys while reimaging a server To set up encryption keys while reimaging a server, see Change the OS for a server .
- To set up an encryption key while provisioning a server, see Use the Google Cloud console intake form to enter your selections .

