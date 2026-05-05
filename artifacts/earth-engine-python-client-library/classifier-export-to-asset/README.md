# Classifier export to asset

Product: Earth Engine Python Client Library
Feature slug: `classifier-export-to-asset`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Adds Export.classifier.toAsset for exporting saved classifiers as Earth Engine assets.

## Lifecycle

- Latest feature date: 2023-12-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access (evidence: [https://developers.google.com/earth-engine/apidocs](https://developers.google.com/earth-engine/apidocs), [https://developers.google.com/earth-engine/apidocs/ee-dictionary-evaluate](https://developers.google.com/earth-engine/apidocs/ee-dictionary-evaluate), [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control))
- audit (evidence: [https://developers.google.com/earth-engine/apidocs](https://developers.google.com/earth-engine/apidocs), [https://developers.google.com/earth-engine/apidocs/ee-dictionary-evaluate](https://developers.google.com/earth-engine/apidocs/ee-dictionary-evaluate), [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control))
- auth (evidence: [https://developers.google.com/earth-engine/apidocs](https://developers.google.com/earth-engine/apidocs), [https://developers.google.com/earth-engine/apidocs/ee-dictionary-evaluate](https://developers.google.com/earth-engine/apidocs/ee-dictionary-evaluate), [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control))
- iam (evidence: [https://developers.google.com/earth-engine/apidocs](https://developers.google.com/earth-engine/apidocs), [https://developers.google.com/earth-engine/apidocs/ee-dictionary-evaluate](https://developers.google.com/earth-engine/apidocs/ee-dictionary-evaluate), [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control))
- identity (evidence: [https://developers.google.com/earth-engine/apidocs](https://developers.google.com/earth-engine/apidocs), [https://developers.google.com/earth-engine/apidocs/ee-dictionary-evaluate](https://developers.google.com/earth-engine/apidocs/ee-dictionary-evaluate), [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control))
- key (evidence: [https://developers.google.com/earth-engine/apidocs](https://developers.google.com/earth-engine/apidocs), [https://developers.google.com/earth-engine/apidocs/ee-dictionary-evaluate](https://developers.google.com/earth-engine/apidocs/ee-dictionary-evaluate), [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control))
- permission (evidence: [https://developers.google.com/earth-engine/apidocs](https://developers.google.com/earth-engine/apidocs), [https://developers.google.com/earth-engine/apidocs/ee-dictionary-evaluate](https://developers.google.com/earth-engine/apidocs/ee-dictionary-evaluate), [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control))
- policy (evidence: [https://developers.google.com/earth-engine/apidocs](https://developers.google.com/earth-engine/apidocs), [https://developers.google.com/earth-engine/apidocs/ee-dictionary-evaluate](https://developers.google.com/earth-engine/apidocs/ee-dictionary-evaluate), [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control))
- private (evidence: [https://developers.google.com/earth-engine/apidocs](https://developers.google.com/earth-engine/apidocs), [https://developers.google.com/earth-engine/apidocs/ee-dictionary-evaluate](https://developers.google.com/earth-engine/apidocs/ee-dictionary-evaluate), [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control))
- role (evidence: [https://developers.google.com/earth-engine/apidocs](https://developers.google.com/earth-engine/apidocs), [https://developers.google.com/earth-engine/apidocs/ee-dictionary-evaluate](https://developers.google.com/earth-engine/apidocs/ee-dictionary-evaluate), [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control))
- secret (evidence: [https://developers.google.com/earth-engine/apidocs](https://developers.google.com/earth-engine/apidocs), [https://developers.google.com/earth-engine/apidocs/ee-dictionary-evaluate](https://developers.google.com/earth-engine/apidocs/ee-dictionary-evaluate), [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control))
- token (evidence: [https://developers.google.com/earth-engine/apidocs](https://developers.google.com/earth-engine/apidocs), [https://developers.google.com/earth-engine/apidocs/ee-dictionary-evaluate](https://developers.google.com/earth-engine/apidocs/ee-dictionary-evaluate), [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control))

## Official Evidence

- [https://developers.google.com/earth-engine/apidocs](https://developers.google.com/earth-engine/apidocs)
- [https://developers.google.com/earth-engine/apidocs/ee-dictionary-evaluate](https://developers.google.com/earth-engine/apidocs/ee-dictionary-evaluate)
- [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control)
