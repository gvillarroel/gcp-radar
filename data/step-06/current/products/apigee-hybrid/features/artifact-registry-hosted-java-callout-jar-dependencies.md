---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:33:10.248Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "Artifact Registry-hosted Java callout JAR dependencies"
feature_slug: "artifact-registry-hosted-java-callout-jar-dependencies"
latest_feature_date: "2024-04-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/develop/how-create-java-callout"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/release-notes"
keywords:
  - "hybrid java callouts"
  - "Artifact Registry"
  - "JAR dependencies"
  - "callout artifact"
  - "secure hosting"
  - "jar dependency"
  - "Java callout"
  - "callout jar"
---

# Artifact Registry-hosted Java callout JAR dependencies

Product: Apigee hybrid
Coverage: LOW

## Step 02 Summary

The JAR dependencies required for creating Java callouts are now securely hosted in Artifact Registry.

## Extended Definition

The JAR dependencies required for creating Java callouts are now securely hosted in Artifact Registry.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/develop/how-create-java-callout](https://docs.cloud.google.com/apigee/docs/api-platform/develop/how-create-java-callout)
- [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)

## Supporting Pages

### How to create Java Callout \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/develop/how-create-java-callout](https://docs.cloud.google.com/apigee/docs/api-platform/develop/how-create-java-callout)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- Be sure that you have Maven installed: mvn - version Install the required JAR dependencies in your local Maven repo using one of the following methods: Add the following snippet to the pom.xml file to downoad the required JAR dependencies from Artifact Registry : <repositories> <repository> <id>artifact-registry</id> <url>https://us-maven.pkg.dev/apigee-release/apigee-java-callout-dependencies</url> </repository> </repositories> <dependencies> <dependency> <groupId>com.apigee.gateway.libraries</groupId> <artifactId>message-flow</artifactId> <version>1.0.0</version> <scope>compile</scope> <type>jar</type> </dependency> <dependency> <groupId>com.apigee.infra.libraries</groupId> <artifactId>expressions</artifactId> <version>1.0.0</version> <scope>compile</scope> <type>jar</type> </dependency> </dependencies> Use the following curl calls to download the required JAR dependencies from Artifact Registry : curl "https://us-maven.pkg.dev/apigee-release/apigee-java-callout-dependencies/com/apigee/gateway/libraries/message-flow/1.0.0/message-flow-1.0.0.jar" - v - L - o message - flow - 1.0 - 0. jar curl "https://us-maven.pkg.dev/apigee-release/apigee-java-callout-dependencies/com/apigee/infra/libraries/expressions/1.0.0/expressions-1.0.0.jar" - v - L - o expressions - 1.0.0 . jar Execute the script java-hello/buildsetup.sh .
- Home Documentation Application development Apigee Guides Send feedback How to create Java Callout Stay organized with collections Save and categorize content based on your preferences.
- This script downloads the required JAR dependencies from the Apigee GitHub repository . cd to the java-hello/callout directory.

### Apigee hybrid release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- See Storing service account keys in Hashicorp Vault . v1.12.0 Feature A new suite of metrics for monitoring Apigee proxies and target endpoints is now available for Hybrid 1.12. v1.12.0 Feature The JAR file dependencies required to create a Java callout are now hosted securely in Artifact Registry .
- N/A Updates to security, infrastructure, and libraries. (also fixed in Apigee 1-16-0-apigee-4 ) v1.16.0 Fixed Fixed since last minor release Bug ID Description 451841788 Apigee hybrid required the mintTaskScheduler.serviceAccountPath property even when Monetization was not enabled. (Fixed in v1.15.1 & v1.14.3 ) 451375397 The apigee-pull-push.sh script could return a No such image error message. (Fixed in v1.15.1 & v1.14.3 ) 445912919 Unused files and folders have been removed from the Apigee hybrid Helm charts to prevent potential security exposure and streamline the product installation and upgrade process. (Fixed in v1.15.1 ) 442501403 Fixed an issue that caused incorrect target latency metrics in Apigee Analytics when a TargetEndpoint is configured with a <LoadBalancer> . (Fixed in v1.15.1 ) 437999897 Reduced the log level for failed geo IP lookups to address excessive log messages for private IP addresses. (Fixed in v1.15.1 ) 431930277 , 395272878 When the configuration property envs.managementCallsSkipProxy is set to true via helm for environment-level forward proxy, trace and analytics (which use googleapis.com ) will skip forward proxy. (Fixed in v1.15.1 ) 423597917 Post of an AppGroupAppKey scopes should result in insert operation instead of update. (Fixed in v1.15.1 & v1.14.3 ) 420675540 Fixed Cassandra based replication for runtime contracts in synchronizer. (Fixed in v1.15.1 , v1.14.3 & v1.13.4 ) 419578402 Mint-Mart forward proxy compatible. (Fixed in v1.15.1 & v1.14.3 ) 416634326 Presence of istio.io Custom Resource Definitions (CRDs) in an Apigee hybrid cluster could cause failure in apigee-ingressgateway-manager pods. (Fixed in v1.15.1 , v1.14.3 & v1.13.4 ) 414499328 ApigeeTelemetry could become stuck in creating state (Fixed in v1.14.3 & v1.13.4 ) 412740465 Fixed issue where zipkin headers were not generated by Apigee Ingress Gateway. (Fixed in v1.15.1 & v1.14.3 ) 409048431 Fixes a vulnerability which could allow a SAML signature verification to be bypassed. (Fixed in v1.15.1 & v1.14.3 ) 401746333 Fixed a java.lang.ClassCircularityError that could occur in Java Callouts due to an issue with the class loading mechanism. (Fixed in v1.15.1 & v1.14.3 ) 395272878 Separate Forward proxy support for googleapis.com and non-googleapis.com runtime traffic. (Fixed in v1.14.3 ) 393615439 OASValidation behavior for allOf with additionalProperties: true . (Fixed in 1.14.2-hotfix.1 ) 382565315 A memory leak within the Security Policy has been addressed, improving system stability. (Fixed in v1.13.4 ) 378686709 The use of wildcards ( ) in Apigee proxy basepaths would conflict with other explicit basepaths, resulting in a 404 error.
- For information on container image support in Apigee hybrid releases, see Apigee release process . v1.15.2 Fixed Fixed in this release Bug ID Description 469694040 Fixed an issue where custom Java security policies were intermittently not applied during runtime pod restarts or environment contract updates, which could lead to "Permission denied" errors in Java callouts. v1.15.2 Security Bug ID Description 471502899, 471173561 Security fixes for apigee-synchronizer .
- Note: Fixed in Apigee hybrid 1.8.4 and newer. (Fixed in Apigee hybrid v1.8.5) 262699558 The watcher component no longer fails when using Kubernetes Secret to store hybrid service account secret. (Fixed in Apigee hybrid v1.7.6) 263840644 Fixed a conflict with an existing ASM on the cluster. (Fixed in Apigee hybrid v1.8.6) 265374889 Fixed an issue where in some circumstances the Java Callout would to fail due with the following error: Failed to execute JavaCallout.

