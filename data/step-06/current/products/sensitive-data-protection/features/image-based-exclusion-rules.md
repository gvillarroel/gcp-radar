---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.190Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Image-based exclusion rules"
feature_slug: "image-based-exclusion-rules"
latest_feature_date: "2026-02-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectConfig"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers"
keywords:
  - "relationships"
  - "excludes"
  - "spatial"
  - "exclusion"
  - "rules"
  - "image"
  - "findings"
  - "based"
---

# Image-based exclusion rules

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Excludes image findings based on their spatial relationships to other findings.

## Extended Definition

Excludes image findings based on their spatial relationships to other findings.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectConfig](https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectConfig)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers)

## Supporting Pages

### "Modifying infoType detectors to refine scan results \_|\_ Sensitive Data\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules)
- Source ID: `site-api-reference-required-2`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This example returns only 222-22-2222 , because 111-11-1111 is in the Fake Social Security Number column. { "item" : { "table" : { "headers" : [ { "name" : "Fake Social Security Number" }, { "name" : "Real Social Security Number" } ], "rows" : [ { "values" : [ { "stringValue" : "111-11-1111" }, { "stringValue" : "222-22-2222" } ] } ] } }, "inspectConfig" : { "infoTypes" : [ { "name" : "US SOCIAL SECURITY NUMBER" } ], "includeQuote" : true , "ruleSet" : [ { "infoTypes" : [ { "name" : "US SOCIAL SECURITY NUMBER" } ], "rules" : [ { "exclusionRule" : { "excludeByHotword" : { "hotwordRegex" : { "pattern" : "(Fake Social Security Number)" }, "proximity" : { "windowBefore" : 1 } }, "matchingType" : "MATCHING TYPE FULL MATCH" } } ] } ], "minLikelihood" : "POSSIBLE" } } Omit findings in images based on spatial relationships The following JSON snippets illustrate how to configure Sensitive Data Protection to exclude findings in images based on their spatial relationship with other detected objects.
- Exclude a person finding if it is part of a passport This rule excludes person findings ( OBJECT TYPE/PERSON ) when they are contained within a passport finding ( OBJECT TYPE/PERSON/PASSPORT ). { "inspectConfig" : { "infoTypes" : [ { "name" : "OBJECT TYPE/PERSON" }, { "name" : "OBJECT TYPE/PERSON/PASSPORT" } ], "ruleSet" : [ { "infoTypes" : [ { "name" : "OBJECT TYPE/PERSON" } ], "rules" : [ { "exclusionRule" : { "excludeByImageFindings" : { "infoTypes" : [ { "name" : "OBJECT TYPE/PERSON/PASSPORT" } ], "imageContainmentType" : { "encloses" : {} } }, "matchingType" : "MATCHING TYPE RULE SPECIFIC" } } ] } ] } } Exclude a license plate finding if it contains a VIN This rule excludes a finding of a license plate ( OBJECT TYPE/LICENSE PLATE ) if a VEHICLE IDENTIFICATION NUMBER finding is fully inside it. { "inspectConfig" : { "infoTypes" : [ { "name" : "OBJECT TYPE/LICENSE PLATE" }, { "name" : "VEHICLE IDENTIFICATION NUMBER" } ], "ruleSet" : [ { "infoTypes" : [ { "name" : "OBJECT TYPE/LICENSE PLATE" } ], "rules" : [ { "exclusionRule" : { "excludeByImageFindings" : { "infoTypes" : [ { "name" : "VEHICLE IDENTIFICATION NUMBER" } ], "imageContainmentType" : { "fullyInside" : {} } }, "matchingType" : "MATCHING TYPE RULE SPECIFIC" } } ] } ] } } Hotword rules Hotword rules are useful in situations like the following: You want to change likelihood values assigned to scan matches based on the match's proximity to a hotword.
- You want to change the likelihood value of a target infoType finding based on its spatial relationship with other detected findings in the image.
- You want to exclude findings in images based on their spatial relationship with other detected findings in the image.

### InspectConfig \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectConfig](https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectConfig)
- Source ID: `site-api-reference`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if InspectionRuleSet.info types includes OBJECT TYPE/PERSON and this exclusionRule specifies infoTypes as OBJECT TYPE/PERSON/PASSPORT with imageContainmentType set to encloses , then OBJECT TYPE/PERSON findings will be excluded if they are fully contained within the bounding box of an OBJECT TYPE/PERSON/PASSPORT finding. imageContainmentType object ( ImageContainmentType ) Specifies the required spatial relationship between the bounding boxes of the target finding and the context infoType findings.
- Exclude by image findings: The matching logic is defined within ExcludeByImageFindings based on spatial relationships between bounding boxes.
- ExcludeByImageFindings The rule to exclude image findings based on spatial relationships with other image findings.
- JSON representation Likelihood InfoTypeLikelihood JSON representation FindingLimits JSON representation InfoTypeLimit JSON representation CustomInfoType JSON representation SurrogateType StoredType JSON representation MetadataKeyValueExpression JSON representation DetectionRule JSON representation HotwordRule JSON representation Proximity JSON representation LikelihoodAdjustment JSON representation ExclusionType ContentOption InspectionRuleSet JSON representation InspectionRule JSON representation ExclusionRule JSON representation ExcludeInfoTypes JSON representation ExcludeByHotword JSON representation ExcludeByImageFindings JSON representation ImageContainmentType JSON representation Encloses FullyInside Overlap MatchingType AdjustmentRule JSON representation AdjustByMatchingInfoTypes JSON representation AdjustByImageFindings JSON representation Configuration description of the scanning process.

### "Creating and scheduling Sensitive Data Protection inspection jobs \_|\_\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers)
- Source ID: `site-api-reference-required-2`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- If you selected an image-based exclusion rule, select the required spatial relationship between the target and context infoTypes.
- If you selected an image-based exclusion rule, select the required spatial relationship between the target and context infoTypes.
- Depending on the exclusion rule type that you selected, set the matching type or image containment type: If you selected a text-based exclusion rule, select one of the following matching types: Full match : The finding must completely match the text or context infoType that you provided.
- Depending on the exclusion rule type that you selected, set the matching type or image containment type: If you selected a text-based exclusion rule, select one of the following matching types: Full match : The finding must completely match the text or context infoType that you provided.

