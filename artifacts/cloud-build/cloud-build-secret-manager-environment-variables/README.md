# Cloud Build Secret Manager environment variables

Product: Cloud Build
Feature slug: `cloud-build-secret-manager-environment-variables`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Build can be configured to access secrets stored in Secret Manager through environment variables.

## Lifecycle

- Latest feature date: 2021-02-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events), [https://docs.cloud.google.com/docs/buildpacks/set-environment-variables](https://docs.cloud.google.com/docs/buildpacks/set-environment-variables), [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref))
- allow (evidence: [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events), [https://docs.cloud.google.com/docs/buildpacks/set-environment-variables](https://docs.cloud.google.com/docs/buildpacks/set-environment-variables), [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref))
- iam (evidence: [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events), [https://docs.cloud.google.com/docs/buildpacks/set-environment-variables](https://docs.cloud.google.com/docs/buildpacks/set-environment-variables), [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref))
- key (evidence: [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events), [https://docs.cloud.google.com/docs/buildpacks/set-environment-variables](https://docs.cloud.google.com/docs/buildpacks/set-environment-variables), [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref))
- role (evidence: [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events), [https://docs.cloud.google.com/docs/buildpacks/set-environment-variables](https://docs.cloud.google.com/docs/buildpacks/set-environment-variables), [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref))
- secret (evidence: [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events), [https://docs.cloud.google.com/docs/buildpacks/set-environment-variables](https://docs.cloud.google.com/docs/buildpacks/set-environment-variables), [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events)
- [https://docs.cloud.google.com/docs/buildpacks/set-environment-variables](https://docs.cloud.google.com/docs/buildpacks/set-environment-variables)
