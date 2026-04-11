---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:33:10.253Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "Environment-level scaling for Apigee hybrid components"
feature_slug: "environment-level-scaling-for-apigee-hybrid-components"
latest_feature_date: "2023-06-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/hybrid/release-notes"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref"
keywords:
  - "Synchronizer replicas"
  - "Runtime replica count"
  - "component replicas"
  - "overrides.yaml"
  - "environment-level scaling"
  - "UDCA replicas"
  - "env scaling"
  - "per-environment overrides"
---

# Environment-level scaling for Apigee hybrid components

Product: Apigee hybrid
Coverage: LOW

## Step 02 Summary

Apigee hybrid added environment-specific scaling controls in overrides.yaml, including replica count settings for Runtime, Synchronizer, and UDCA per environment.

## Extended Definition

Apigee hybrid added environment-specific scaling controls in overrides.yaml, including replica count settings for Runtime, Synchronizer, and UDCA per environment.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)
- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)

## Supporting Pages

### Apigee hybrid release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- See the AppGroups preview launch announcement for details. v1.10.0 Feature Support for environment-level scaling Starting in version 1.9.3, Apigee hybrid added the following environment configuration properties that enable you to specify environment-specific scaling in the overrides.yaml file: envs[].runtime.replicaCountMax envs[].runtime.replicaCountMin envs[].synchronizer.replicaCountMax envs[].synchronizer.replicaCountMin envs[].udca.replicaCountMax envs[].udca.replicaCountMin Documentation: Environment-based scaling v1.10.0 Feature Automated Issue Surfacing (AIS) Starting with Apigee hybrid 1.10, Apigee hybrid offers a new tool that examines the hybrid runtime and surfaces issues by running a kubectl command.
- In your overrides file, update the image.url and image.tag properties of ao and mart to version 1.16.0-hotfix.1 : ao: image: url: "gcr.io/apigee-release/hybrid/apigee-operators" tag: "1.16.0-hotfix.1" mart: image: url: "gcr.io/apigee-release/hybrid/apigee-mart-server" tag: "1.16.0-hotfix.1" Install the hotfix release for Apigee operators, beginning with a dry run: helm upgrade operator apigee-operator/ \ --install \ --namespace APIGEE NAMESPACE \ --atomic \ -f overrides.yaml \ --dry-run=server If the dry run is successful, install the hotfix release for Apigee operators: helm upgrade operator apigee-operator/ \ --install \ --namespace APIGEE NAMESPACE \ --atomic \ -f overrides.yaml Install the hotfix release for your organization, beginning with a dry run: helm upgrade $ORG NAME apigee-org/ \ --install \ --namespace APIGEE NAMESPACE \ --atomic \ -f overrides.yaml \ --dry-run=server If the dry run is successful, install the hotfix release for your organization: helm upgrade $ORG NAME apigee-org/ \ --install \ --namespace APIGEE NAMESPACE \ --atomic \ -f overrides.yaml Verify the organization chart by checking the state: kubectl -n APIGEE NAMESPACE get apigeeorg Install the hotfix release for your environment, beginning with a dry run: helm upgrade ENV RELEASE NAME apigee-env/ \ --install \ --namespace APIGEE NAMESPACE \ --atomic \ --set env=$ENV NAME \ -f overrides.yaml \ --dry-run=server If the dry run is successful, install the hotfix release for your environment: helm upgrade ENV RELEASE NAME apigee-env/ \ --install \ --namespace APIGEE NAMESPACE \ --atomic \ --set env=$ENV NAME \ -f overrides.yaml Verify the environment chart by checking the state: kubectl -n APIGEE NAMESPACE get apigeeenv v1.16.0-hotfix.1 Fixed Fixed in this release Bug ID Description 479872706 An issue that prevented loading API products, apps, and developers after migrating data to Apigee hybrid 1.16.0 in certain configurations has been resolved.
- Apply this hotfix with the following steps: In your hybrid Helm charts directory, download the Apigee hybrid 1.16.0-hotfix.1 Helm charts into your hybrid Helm charts directory with the following commands: export CHART REPO =oci://us-docker.pkg.dev/apigee-release/apigee-hybrid-helm-charts export CHART VERSION=1.16.0-hotfix.1 helm pull $CHART REPO /apigee-operator --version $CHART VERSION --untar helm pull $CHART REPO /apigee-datastore --version $CHART VERSION --untar helm pull $CHART REPO /apigee-env --version $CHART VERSION --untar helm pull $CHART REPO /apigee-ingress-manager --version $CHART VERSION --untar helm pull $CHART REPO /apigee-org --version $CHART VERSION --untar helm pull $CHART REPO /apigee-redis --version $CHART VERSION --untar helm pull $CHART REPO /apigee-telemetry --version $CHART VERSION --untar helm pull $CHART REPO /apigee-virtualhost --version $CHART VERSION --untar Install the hotfix release for Apigee operators, beginning with a dry run: helm upgrade operator apigee-operator/ \ --install \ --namespace APIGEE NAMESPACE \ --atomic \ -f overrides.yaml \ --dry-run=server After the dry run is successful, install the hotfix release for Apigee operators: helm upgrade operator apigee-operator/ \ --install \ --namespace APIGEE NAMESPACE \ --atomic \ -f overrides.yaml Install the hotfix release for your organization, beginning with a dry run: helm upgrade $ORG NAME apigee-org/ \ --install \ --namespace APIGEE NAMESPACE \ --atomic \ -f overrides.yaml \ --dry-run=server After the dry run is successful, install the hotfix release for your organization: helm upgrade $ORG NAME apigee-org/ \ --install \ --namespace APIGEE NAMESPACE \ --atomic \ -f overrides.yaml Verify the organization chart by checking the state: kubectl -n APIGEE NAMESPACE get apigeeorg Install the hotfix release for your environments.
- See logger.livenessProbe.timeoutSeconds in the Configuration property reference. (Fixed in Apigee hybrid v1.8.7 and v1.9.2) 279053612 x-forwarded-client-cert (XFCC) HTTP headers handled with the istiod.forwardClientCertDetails configuration property. (Fixed in Apigee hybrid v1.8.7 and v1.9.2) See the Configuration properties reference for details: v1.8: istiod.forwardClientCertDetails v1.9: istiod.forwardClientCertDetails 279193831 Envoy has been updated to v1.25.6.. (Fixed in Apigee hybrid v1.8.8) 279712107 Added the ability to annotate apigee-ingressgateway-manager pods through overrides.yaml file . (Fixed in Apigee hybrid v1.8.8) 280544499 Request headers were not seen in debug sessions. (Fixed in Apigee hybrid v1.8.8) 284488296 Removed an unneeded Workload Identity on the Cassandra Schema Validation cron job. (Fixed in Apigee hybrid v1.8.8 and v1.9.3) v1.10.0 Breaking Bug ID Description 270371160 In Apigee hybrid v1.9.0, we removed certain insecure TLS ciphers.

### Configuration property reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- For example, to change the replica count minimum and maximum for the MART service, you could add this stanza to overrides.yaml : mart: replicaCountMin: 3 replicaCountMax: 6 You can also find these config properties and their default settings in HYBRID ROOT INSTALL /1.0.0/values.yaml For more information, see Manage runtime plane components .
- When configured in overrides.yaml , all internet communication for the Apigee Connect, Logger, MART, Metrics, Synchronizer, and UDCA components pass through the proxy server.
- About configuration properties You can override many configuration properties, if needed, by adding them to HYBRID ROOT DIR /overrides.yaml .
- Important: For production environments, reset the value of runtime.resources.requests.memory to at least 1Gi in your overrides.yaml .

