---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.699Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Custom Resource Definition certificate authority bundle recommendations"
feature_slug: "custom-resource-definition-certificate-authority-bundle-recommendations"
latest_feature_date: "2025-05-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates"
keywords:
  - "custom"
  - "resource"
  - "definition"
  - "certificate"
  - "authority"
  - "bundle"
  - "recommendations"
  - "gke"
---

# Custom Resource Definition certificate authority bundle recommendations

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE provides insights and recommendations to identify clusters whose Custom Resource Definitions contain an invalid or malformed Certificate Authority bundle.

## Extended Definition

GKE provides insights and recommendations to identify clusters whose Custom Resource Definitions contain an invalid or malformed Certificate Authority bundle.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates)

## Supporting Pages

### "Troubleshoot CRDs with an invalid CA bundle \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle)
- Source ID: `site-iam-reference`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- The result should look something like the following: spec : conversion : webhook : clientConfig : caBundle : < base64-encoded-ca-bundle > Apply the corrected CRD: kubectl apply -f <corrected-crd-file.yaml> Restore your custom resources: kubectl apply -f backup.yaml What's next Optimize your usage of GKE with insights and recommendations Troubleshooting common issues Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Run the following command to export the existing resources: kubectl get <crd-name> -o yaml > backup.yaml Delete the existing CRD: kubectl delete crd <crd-name> Ensure that the caBundle field of the CRD contains a well-formed, base-64-encoded PEM certificate.
- However, if a CRD contains an invalid or malformed Certificate Authority (CA) bundle within its conversion webhook configuration spec.conversion.webhook.clientConfig.caBundle , it can disrupt cluster operations.
- Recreate the CRD To resolve this error, recreate the affected CRD with a valid CA bundle: Back up existing custom resources associated with this problematic CRD, if you have any.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- You can use the following tools to check inbound traffic to your resources running in Google Cloud: VPC Flow Logs for visibility into network throughput and performance Cloud Logging to search and analyze logging data and events from Google Cloud services and applications configured to send logs Firewall Rules Logging to audit, verify, and analyze the effects of your firewall rules Security Command Center for visibility into security findings indicating suspicious network activity Your application logs High GDC (VMware) Description Severity A security issue was discovered that impacts Multi-Cluster Gateway (MCG), a GKE feature that allows customers to load balance traffic across multiple clusters.
- To review your Azure configuration to check whether there are any public IP addresses configured on your GKE on Azure cluster, run the following command: az network public-ip list -g CLUSTER RESOURCE GROUP NAME -o tsv Disallow SSH to the cluster nodes Even though GKE on Azure doesn't allow traffic on port 22 on any node by default, customers can update NetworkSecurityGroup rules to node pools, enabling inbound SSH traffic from the public internet.
- As the firewall is a VPC-level allow list, the following types of resources might have been network reachable during the time period: Customer applications running on GKE worker nodes accessible through public IPs.
- The following versions of GKE or later have been updated to address the providerID issue: 1.33.1-gke.1386000 1.32.4-gke.1533000 1.31.9-gke.1119000 1.30.12-gke.1208000 Optionally, if you cannot upgrade, implement the following validating admission policy on your cluster to mitigate the providerID issue: apiVersion : admissionregistration . k8s . io / v1 kind : ValidatingAdmissionPolicy metadata : name : validate - node - providerid spec : failurePolicy : Fail matchConstraints : resourceRules : - apiGroups : [ "" ] apiVersions : [ "v1" ] operations : [ "CREATE", "UPDATE" ] resources : [ "nodes" ] matchConditions : - name : "has-providerid" expression : "has(object.spec.providerID)" validations : - expression : "object.spec.providerID == '' object.spec.providerID.endsWith('/' + object.metadata.name)" message : "node.spec.providerID must match the node name" --- apiVersion : admissionregistration . k8s . io / v1 kind : ValidatingAdmissionPolicyBinding metadata : name : validate - node - providerid - binding spec : policyName : validate - node - providerid validationActions : [ Deny ] Use node restricted labels when isolating workloads to specific nodes as a security control If you are using labels for node isolation, as described in Kubernetes documentation , use node restricted labels (for example, labels of the form node-restriction.kubernetes.io/example-constraint ) in node affinity and node selector terms used for workload isolation.

### "Access private registries with private CA certificates \_|\_ GKE security\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates)
- Source ID: `site-iam-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Verify that your cluster can access the private registry Run the following command: gcloud container clusters describe CLUSTER NAME \ --location = LOCATION \ --flatten = "nodePoolDefaults.nodeConfigDefaults.containerdConfig" The output is similar to the following: registryHosts containerdConfig: registryHosts: - server: example.io hosts: - host: example.mirror.io capabilities: - "HOST CAPABILITY PULL" - "HOST CAPABILITY RESOLVE" ca: - gcpSecretManagerSecretUri: projects/123456789012/secrets/example-secret-name/versions/1 privateRegistryAccessConfig containerdConfig: privateRegistryAccessConfig: certificateAuthorityDomainConfig: - fqdns: - 203.0.113.105 gcpSecretManagerCertificateConfig: secretUri: projects/123456789012/secrets/example-secret-name/versions/1 enabled: true Deploy a workload that accesses a private image In this section, you deploy a static Pod that references an image from your private registry.
- Or Internal error pulling certificate "projects/ PROJECT NUMBER /secrets/ SECRET NAME /versions/ SECRET VERSION " from GSM: .... privateRegistryAccessConfig Query the logs with following filter. resource.type="gce instance" textPayload:"Installed certificate \\\"projects/ PROJECT NUMBER /secrets/ SECRET NAME /versions/ SECRET VERSION \\\"" If your certificate installation succeeded, the output is similar to the following: "Installed certificate "projects/ PROJECT NUMBER /secrets/ SECRET NAME /versions/ SECRET VERSION "" If your certificate installation failed, the output is similar to the following: "Failed to install certificate "projects/ PROJECT NUMBER /secrets/ SECRET NAME /versions/ SECRET VERSION "" Best practices We recommend that you use the following best practices when you use this feature: Don't use aliases for Secret Manager secret versions.
- Go to the Logs Explorer page in the Google Cloud console: Go to Logs Explorer Search logs with specific queries: registryHosts Query the logs with following filter. resource.type="gce instance" (textPayload:"Successfully fetched secret" OR textPayload:"error pulling certificate") If your certificate installation succeeded, you could find following log entry: Successfully fetched secret "projects/ PROJECT NUMBER /secrets/ SECRET NAME /versions/ SECRET VERSION " Successfully wrote secret payload for "projects/ PROJECT NUMBER /secrets/ SECRET NAME /versions/ SECRET VERSION " If your certificate installation failed, you could find following log entry: User error pulling certificate "projects/ PROJECT NUMBER /secrets/ SECRET NAME /versions/ SECRET VERSION " from GSM: ...
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to pull secrets from Secret Manager: resourcemanager.projects.get resourcemanager.projects.list secretmanager.secrets.get secretmanager.secrets.list secretmanager.versions.get secretmanager.versions.list secretmanager.versions.access Your administrator might also be able to give the cluster's IAM service account these permissions with custom roles or other predefined roles .

