---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:42.673Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Automatic skaffold.yaml generation"
feature_slug: "automatic-skaffold-yaml-generation"
latest_feature_date: "2022-07-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/deploying-application"
  - "https://docs.cloud.google.com/deploy/docs/config-files"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-analysis"
keywords:
  - "automatic"
  - "skaffold"
  - "yaml"
  - "generation"
  - "deploy"
  - "can"
  - "generate"
  - "file"
---

# Automatic skaffold.yaml generation

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Cloud Deploy can generate a skaffold.yaml file from a single Kubernetes manifest when creating a release.

## Extended Definition

Cloud Deploy can generate a skaffold.yaml file from a single Kubernetes manifest when creating a release.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/deploying-application](https://docs.cloud.google.com/deploy/docs/deploying-application)
- [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-analysis](https://docs.cloud.google.com/deploy/docs/deploy-app-analysis)

## Supporting Pages

### Deploy your application \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/deploying-application](https://docs.cloud.google.com/deploy/docs/deploying-application)
- Source ID: `site-docs-reference-2`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can also include one of the following flags to have Cloud Deploy generate a skaffold.yaml file for you: --from-k8s-manifest= K8S MANIFEST The generated Skaffold config is based on the Kubernetes manifest you pass this flag.
- Note that the skaffold.yaml file must reference the apiVersion that is supported by Skaffold in the first line, as in this example: apiVersion : skaffold/v4beta7 Have it generated for you.
- Cloud Deploy uses the generated manifest or Cloud Run service definition, and the generated skaffold.yaml , to create the release.
- If you don't already have a skaffold.yaml file, you can have Cloud Deploy create one for you .

### Configuration schema reference \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- Source ID: `site-docs-reference`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If no deployment strategy is specified, the standard deployment strategy is used, with verification set to false . profiles Takes a list of zero or more Skaffold profile names, from skaffold.yaml .
- Using actions (and Skaffold) serialPipeline : stages : - targetId : strategy : standard : predeploy : actions : [ ACTION NAME ] postdeploy : actions : [ ACTION NAME ] Where ACTION NAME is the name configured in skaffold.yaml for customActions.name .
- This value is the customAction.name defined in skaffold.yaml . [DEPLOY ACTION NAME] Is the name of the custom deploy action.
- If you do this, you must also configure a verify stanza in your skaffold.yaml , as described in Configure Skaffold for verification .

### "Quickstart: Run analysis on your application after deploying it \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-analysis](https://docs.cloud.google.com/deploy/docs/deploy-app-analysis)
- Source ID: `site-docs-reference-required-3`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a new directory and navigate into it. mkdir deploy-analysis-run-quickstart cd deploy-analysis-run-quickstart Create a file named skaffold.yaml with the following contents: apiVersion : skaffold/v4beta7 kind : Config manifests : rawYaml : - service.yaml deploy : cloudrun : {} See the skaffold.yaml reference for more information about this configuration file.
- Prepare your Skaffold configuration and service definition In this quickstart, you create a skaffold.yaml file, which identifies the manifest to be used to deploy the sample Cloud Run service, and you also define the service.yaml file that defines the Cloud Run itself.
- In the deploy-analysis-run-quickstart directory, create a new file, clouddeploy.yaml , with the following contents: apiVersion : deploy.cloud.google.com/v1 kind : DeliveryPipeline metadata : name : deploy-analysis-demo-app-run description : main application pipeline serialPipeline : stages : - targetId : analysis-staging profiles : [] strategy : standard : analysis : duration : 300s googleCloud : alertPolicyChecks : - id : check-1 alertPolicies : - ALERT POLICY ID --- apiVersion : deploy.cloud.google.com/v1 kind : Target metadata : name : analysis-staging description : staging Run service run : location : projects/ PROJECT ID /locations/us-central1 In this YAML, replace ALERT POLICY ID with the output from the gcloud monitoring policies list command you ran previously , and replace PROJECT ID with the ID of the project you're using.
- In the deploy-analysis-run-quickstart directory, create a file called policy.yaml , with the following contents: displayName : Cloud Run service uptime check userLabels : policy-for : analysis-run-pipeline combiner : OR conditions : - displayName : Failure of uptime check UPTIME ID conditionThreshold : filter : metric.type="monitoring.googleapis.com/uptime check/check passed" AND metric.label.check id=" UPTIME ID " AND resource.type="cloud run revision" aggregations : - alignmentPeriod : 60s crossSeriesReducer : REDUCE COUNT FALSE groupByFields : - resource.label. perSeriesAligner : ALIGN NEXT OLDER comparison : COMPARISON GT duration : 60s thresholdValue : 1.0 Replace UPTIME ID with the ID of the uptime check you created before .

