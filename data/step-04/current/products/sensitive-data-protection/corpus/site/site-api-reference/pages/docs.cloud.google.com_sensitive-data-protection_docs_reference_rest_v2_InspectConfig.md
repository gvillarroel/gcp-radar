---
title: "InspectConfig \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectConfig
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectConfig
  title: "InspectConfig \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Data Loss Prevention (Cloud DLP) is now a part of Sensitive Data Protection. The API name remains the same: Cloud Data Loss Prevention API (DLP API). For information about the services that make up Sensitive Data Protection, see Sensitive Data Protection overview .
Home
Documentation
Security
Sensitive Data Protection
Reference
Send feedback
InspectConfig
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Likelihood
InfoTypeLikelihood
JSON representation
FindingLimits
JSON representation
InfoTypeLimit
JSON representation
CustomInfoType
JSON representation
SurrogateType
StoredType
JSON representation
MetadataKeyValueExpression
JSON representation
DetectionRule
JSON representation
HotwordRule
JSON representation
Proximity
JSON representation
LikelihoodAdjustment
JSON representation
ExclusionType
ContentOption
InspectionRuleSet
JSON representation
InspectionRule
JSON representation
ExclusionRule
JSON representation
ExcludeInfoTypes
JSON representation
ExcludeByHotword
JSON representation
ExcludeByImageFindings
JSON representation
ImageContainmentType
JSON representation
Encloses
FullyInside
Overlap
MatchingType
AdjustmentRule
JSON representation
AdjustByMatchingInfoTypes
JSON representation
AdjustByImageFindings
JSON representation
Configuration description of the scanning process. When used with redactContent only infoTypes and minLikelihood are currently used.
JSON representation
{
"infoTypes" : [
{
object ( InfoType )
}
] ,
"minLikelihood" : enum ( Likelihood ) ,
"minLikelihoodPerInfoType" : [
{
object ( InfoTypeLikelihood )
}
] ,
"limits" : {
object ( FindingLimits )
} ,
"includeQuote" : boolean ,
"excludeInfoTypes" : boolean ,
"customInfoTypes" : [
{
object ( CustomInfoType )
}
] ,
"contentOptions" : [
enum ( ContentOption )
] ,
"ruleSet" : [
{
object ( InspectionRuleSet )
}
]
}
Fields
infoTypes[]
object ( InfoType )
Restricts what infoTypes to look for. The values must correspond to InfoType values returned by infoTypes.list or listed at https://cloud.google.com/sensitive-data-protection/docs/infotypes-reference .
When no InfoTypes or CustomInfoTypes are specified in a request, the system may automatically choose a default list of detectors to run, which may change over time.
If you need precise control and predictability as to what detectors are run you should specify specific InfoTypes listed in the reference, otherwise a default list will be used, which may change over time.
minLikelihood
enum ( Likelihood )
Only returns findings equal to or above this threshold. The default is POSSIBLE.
In general, the highest likelihood setting yields the fewest findings in results and the lowest chance of a false positive. For more information, see Match likelihood .
minLikelihoodPerInfoType[]
object ( InfoTypeLikelihood )
Minimum likelihood per infotype. For each infotype, a user can specify a minimum likelihood. The system only returns a finding if its likelihood is above this threshold. If this field is not set, the system uses the InspectConfig minLikelihood.
limits
object ( FindingLimits )
Configuration to control the number of findings returned. This is not used for data profiling.
When redacting sensitive data from images, finding limits don't apply. They can cause unexpected or inconsistent results, where only some data is redacted. Don't include finding limits in image.redact requests. Otherwise, Cloud DLP returns an error.
When set within an InspectJobConfig , the specified maximum values aren't hard limits. If an inspection job reaches these limits, the job ends gradually, not abruptly. Therefore, the actual number of findings that Cloud DLP returns can be multiple times higher than these maximum values.
includeQuote
boolean
When true, a contextual quote from the data that triggered a finding is included in the response; see Finding.quote . This is not used for data profiling.
excludeInfoTypes
boolean
When true, excludes type information of the findings. This is not used for data profiling.
customInfoTypes[]
object ( CustomInfoType )
CustomInfoTypes provided by the user. See https://cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes to learn more.
contentOptions[]
enum ( ContentOption )
Deprecated and unused.
ruleSet[]
object ( InspectionRuleSet )
Set of rules to apply to the findings for this InspectConfig. Exclusion rules, contained in the set are executed in the end, other rules are executed in the order they are specified for each info type. Not supported for the metadataKeyValueExpression CustomInfoType.
Likelihood
Coarse-grained confidence level of how well a particular finding satisfies the criteria to match a particular infoType.
Likelihood is calculated based on the number of signals a finding has that implies that the finding matches the infoType. For example, a string that has an '@' and a '.com' is more likely to be a match for an email address than a string that only has an '@'.
In general, the highest likelihood level has the strongest signals that indicate a match. That is, a finding with a high likelihood has a low chance of being a false positive.
For more information about each likelihood level and how likelihood works, see Match likelihood .
Enums
LIKELIHOOD_UNSPECIFIED
Default value; same as POSSIBLE.
VERY_UNLIKELY
Highest chance of a false positive.
UNLIKELY
High chance of a false positive.
POSSIBLE
Some matching signals. The default value.
LIKELY
Low chance of a false positive.
VERY_LIKELY
Confidence level is high. Lowest chance of a false positive.
InfoTypeLikelihood
Configuration for setting a minimum likelihood per infotype. Used to customize the minimum likelihood level for specific infotypes in the request. For example, use this if you want to lower the precision for PERSON_NAME without lowering the precision for the other infotypes in the request.
JSON representation
{
"infoType" : {
object ( InfoType )
} ,
"minLikelihood" : enum ( Likelihood )
}
Fields
infoType
object ( InfoType )
Type of information the likelihood threshold applies to. Only one likelihood per infoType should be provided. If InfoTypeLikelihood does not have an infoType, the configuration fails.
minLikelihood
enum ( Likelihood )
Only returns findings equal to or above this threshold. This field is required or else the configuration fails.
FindingLimits
Configuration to control the number of findings returned for inspection. This is not used for de-identification or data profiling.
When redacting sensitive data from images, finding limits don't apply. They can cause unexpected or inconsistent results, where only some data is redacted. Don't include finding limits in image.redact requests. Otherwise, Cloud DLP returns an error.
JSON representation
{
"maxFindingsPerItem" : integer ,
"maxFindingsPerRequest" : integer ,
"maxFindingsPerInfoType" : [
{
object ( InfoTypeLimit )
}
]
}
Fields
maxFindingsPerItem
integer
Max number of findings that are returned for each item scanned.
When set within an InspectContentRequest , this field is ignored.
This value isn't a hard limit. If the number of findings for an item reaches this limit, the inspection of that item ends gradually, not abruptly. Therefore, the actual number of findings that Cloud DLP returns for the item can be multiple times higher than this value.
maxFindingsPerRequest
integer
Max number of findings that are returned per request or job.
If you set this field in an InspectContentRequest , the resulting maximum value is the value that you set or 3,000, whichever is lower.
This value isn't a hard limit. If an inspection reaches this limit, the inspection ends gradually, not abruptly. Therefore, the actual number of findings that Cloud DLP returns can be multiple times higher than this value.
maxFindingsPerInfoType[]
object ( InfoTypeLimit )
Configuration of findings limit given for specified infoTypes.
InfoTypeLimit
Max findings configuration per infoType, per content item or long running DlpJob.
JSON representation
{
"infoType" : {
object ( InfoType )
} ,
"maxFindings" : integer
}
Fields
infoType
object ( InfoType )
Type of information the findings limit applies to. Only one limit per infoType should be provided. If InfoTypeLimit does not have an infoType, the DLP API applies the limit against all infoTypes that are found but not specified in another InfoTypeLimit.
maxFindings
integer
Max findings limit for the given infoType.
CustomInfoType
Custom information type provided by the user. Used to find domain-specific sensitive information configurable to the data in question.
JSON representation
{
"infoType" : {
object ( InfoType )
} ,
"likelihood" : enum ( Likelihood ) ,
"detectionRules" : [
{
object ( DetectionRule )
}
] ,
"exclusionType" : enum ( ExclusionType ) ,
"sensitivityScore" : {
object ( SensitivityScore )
} ,
// Union field type can be only one of the following:
"dictionary" : {
object ( Dictionary )
} ,
"regex" : {
object ( Regex )
} ,
"surrogateType" : {
object ( SurrogateType )
} ,
"storedType" : {
object ( StoredType )
} ,
"metadataKeyValueExpression" : {
object ( MetadataKeyValueExpression )
}
// End of list of possible types for union field type .
}
Fields
infoType
object ( InfoType )
CustomInfoType can either be a new infoType, or an extension of built-in infoType, when the name matches one of existing infoTypes and that infoType is specified in content.inspect.info_types field. Specifying the latter adds findings to the one detected by the system. If built-in info type is not specified in content.inspect.info_types list then the name is treated as a custom info type.
likelihood
enum ( Likelihood )
Likelihood to return for this CustomInfoType. This base value can be altered by a detection rule if the finding meets the criteria specified by the rule. Defaults to VERY_LIKELY if not specified.
detectionRules[]
object ( DetectionRule )
Set of detection rules to apply to all findings of this CustomInfoType. Rules are applied in the order that they are specified. Only supported for the dictionary , regex , and storedType CustomInfoTypes.
exclusionType
enum ( ExclusionType )
If set to EXCLUSION_TYPE_EXCLUDE this infoType will not cause a finding to be returned. It still can be used for rules matching. Only supported for the dictionary , regex , and storedType CustomInfoTypes.
sensitivityScore
object ( SensitivityScore )
Sensitivity for this CustomInfoType. If this CustomInfoType extends an existing InfoType, the sensitivity here will take precedence over that of the original InfoType. If unset for a CustomInfoType, it will default to HIGH. This only applies to data profiling.
Union field type . Type of custom detector. type can be only one of the following:
dictionary
object ( Dictionary )
A list of phrases to detect as a CustomInfoType.
regex
object ( Regex )
Regular expression based CustomInfoType.
surrogateType
object ( SurrogateType )
Message for detecting output from deidentification transformations that support reversing.
storedType
object ( StoredType )
Loads an existing StoredInfoType resource.
metadataKeyValueExpression
object ( MetadataKeyValueExpression )
Key-value pair to detect in the metadata.
SurrogateType
This type has no fields.
Message for detecting output from deidentification transformations such as CryptoReplaceFfxFpeConfig . These types of transformations are those that perform pseudonymization, thereby producing a "surrogate" as output. This should be used in conjunction with a field on the transformation such as surrogateInfoType . This CustomInfoType does not support the use of detectionRules .
StoredType
A reference to a StoredInfoType to use with scanning.
JSON representation
{
"name" : string ,
"createTime" : string
}
Fields
name
string
Resource name of the requested StoredInfoType , for example organizations/433245324/storedInfoTypes/432452342 or projects/project-id/storedInfoTypes/432452342 .
createTime
string ( Timestamp format)
Timestamp indicating when the version of the StoredInfoType used for inspection was created. Output-only field, populated by the system.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
MetadataKeyValueExpression
Configuration for a custom infoType that detects key-value pairs in the metadata matching the specified regular expressions.
JSON representation
{
"keyRegex" : string ,
"valueRegex" : string
}
Fields
keyRegex
string
The regular expression for the key. Key should be non-empty.
valueRegex
string
The regular expression for the value. Value should be non-empty.
DetectionRule
Deprecated; use InspectionRuleSet instead. Rule for modifying a CustomInfoType to alter behavior under certain circumstances, depending on the specific details of the rule. Not supported for the surrogateType custom infoType.
JSON representation
{
// Union field type can be only one of the following:
"hotwordRule" : {
object ( HotwordRule )
}
// End of list of possible types for union field type .
}
Fields
Union field type . Type of hotword rule. type can be only one of the following:
hotwordRule
object ( HotwordRule )
Hotword-based detection rule.
HotwordRule
The rule that adjusts the likelihood of findings within a certain proximity of hotwords.
JSON representation
{
"hotwordRegex" : {
object ( Regex )
} ,
"proximity" : {
object ( Proximity )
} ,
"likelihoodAdjustment" : {
object ( LikelihoodAdjustment )
}
}
Fields
hotwordRegex
object ( Regex )
Regular expression pattern defining what qualifies as a hotword.
proximity
object ( Proximity )
Range of characters within which the entire hotword must reside. The total length of the window cannot exceed 1000 characters. The finding itself will be included in the window, so that hotwords can be used to match substrings of the finding itself. Suppose you want Cloud DLP to promote the likelihood of the phone number regex "(\d{3}) \d{3}-\d{4}" if the area code is known to be the area code of a company's office. In this case, use the hotword regex "(xxx)", where "xxx" is the area code in question.
For tabular data, if you want to modify the likelihood of an entire column of findngs, see Hotword example: Set the match likelihood of a table column .
likelihoodAdjustment
object ( LikelihoodAdjustment )
Likelihood adjustment to apply to all matching findings.
Proximity
Message for specifying a window around a finding to apply a detection rule.
JSON representation
{
"windowBefore" : integer ,
"windowAfter" : integer
}
Fields
windowBefore
integer
Number of characters before the finding to consider. For tabular data, if you want to modify the likelihood of an entire column of findngs, set this to 1. For more information, see Hotword example: Set the match likelihood of a table column .
windowAfter
integer
Number of characters after the finding to consider.
LikelihoodAdjustment
Message for specifying an adjustment to the likelihood of a finding as part of a detection rule.
JSON representation
{
// Union field adjustment can be only one of the following:
"fixedLikelihood" : enum ( Likelihood ) ,
"relativeLikelihood" : integer
// End of list of possible types for union field adjustment .
}
Fields
Union field adjustment . How the likelihood will be modified. adjustment can be only one of the following:
fixedLikelihood
enum ( Likelihood )
Set the likelihood of a finding to a fixed value.
relativeLikelihood
integer
Increase or decrease the likelihood by the specified number of levels. For example, if a finding would be POSSIBLE without the detection rule and relativeLikelihood is 1, then it is upgraded to LIKELY , while a value of -1 would downgrade it to UNLIKELY . Likelihood may never drop below VERY_UNLIKELY or exceed VERY_LIKELY , so applying an adjustment of 1 followed by an adjustment of -1 when base likelihood is VERY_LIKELY will result in a final likelihood of LIKELY .
ExclusionType
Type of exclusion rule.
Enums
EXCLUSION_TYPE_UNSPECIFIED
A finding of this custom info type will not be excluded from results.
EXCLUSION_TYPE_EXCLUDE
A finding of this custom info type will be excluded from final results, but can still affect rule execution.
ContentOption
Deprecated and unused.
Enums
CONTENT_UNSPECIFIED
Includes entire content of a file or a data stream.
CONTENT_TEXT
Text content within the data, excluding any metadata.
CONTENT_IMAGE
Images found in the data.
InspectionRuleSet
Rule set for modifying a set of infoTypes to alter behavior under certain circumstances, depending on the specific details of the rules within the set.
JSON representation
{
"infoTypes" : [
{
object ( InfoType )
}
] ,
"rules" : [
{
object ( InspectionRule )
}
]
}
Fields
infoTypes[]
object ( InfoType )
List of infoTypes this rule set is applied to.
rules[]
object ( InspectionRule )
Set of rules to be applied to infoTypes. The rules are applied in order.
InspectionRule
A single inspection rule to be applied to infoTypes, specified in InspectionRuleSet .
JSON representation
{
// Union field type can be only one of the following:
"hotwordRule" : {
object ( HotwordRule )
} ,
"exclusionRule" : {
object ( ExclusionRule )
} ,
"adjustmentRule" : {
object ( AdjustmentRule )
}
// End of list of possible types for union field type .
}
Fields
Union field type . Inspection rule types. type can be only one of the following:
hotwordRule
object ( HotwordRule )
Hotword-based detection rule.
exclusionRule
object ( ExclusionRule )
Exclusion rule.
adjustmentRule
object ( AdjustmentRule )
Adjustment rule.
ExclusionRule
The rule that specifies conditions when findings of infoTypes specified in InspectionRuleSet are removed from results.
JSON representation
{
"matchingType" : enum ( MatchingType ) ,
// Union field type can be only one of the following:
"dictionary" : {
object ( Dictionary )
} ,
"regex" : {
object ( Regex )
} ,
"excludeInfoTypes" : {
object ( ExcludeInfoTypes )
} ,
"excludeByHotword" : {
object ( ExcludeByHotword )
} ,
"excludeByImageFindings" : {
object ( ExcludeByImageFindings )
}
// End of list of possible types for union field type .
}
Fields
matchingType
enum ( MatchingType )
How the rule is applied, see MatchingType documentation for details.
Union field type . Exclusion rule types. type can be only one of the following:
dictionary
object ( Dictionary )
Dictionary which defines the rule.
regex
object ( Regex )
Regular expression which defines the rule.
excludeInfoTypes
object ( ExcludeInfoTypes )
Set of infoTypes for which findings would affect this rule.
excludeByHotword
object ( ExcludeByHotword )
Drop if the hotword rule is contained in the proximate context. For tabular data, the context includes the column name.
excludeByImageFindings
object ( ExcludeByImageFindings )
Exclude findings based on image containment rules. For example, exclude an image finding if it overlaps with another image finding.
ExcludeInfoTypes
List of excluded infoTypes.
JSON representation
{
"infoTypes" : [
{
object ( InfoType )
}
]
}
Fields
infoTypes[]
object ( InfoType )
InfoType list in ExclusionRule rule drops a finding when it overlaps or contained within with a finding of an infoType from this list. For example, for InspectionRuleSet.info_types containing "PHONE_NUMBER" and
exclusionRule containing excludeInfoTypes.info_types` with "EMAIL_ADDRESS" the phone number findings are dropped if they overlap with EMAIL_ADDRESS finding. That leads to "555-222-2222@example.org" to generate only a single finding, namely email address.
ExcludeByHotword
The rule to exclude findings based on a hotword. For record inspection of tables, column names are considered hotwords. An example of this is to exclude a finding if it belongs to a BigQuery column that matches a specific pattern.
JSON representation
{
"hotwordRegex" : {
object ( Regex )
} ,
"proximity" : {
object ( Proximity )
}
}
Fields
hotwordRegex
object ( Regex )
Regular expression pattern defining what qualifies as a hotword.
proximity
object ( Proximity )
Range of characters within which the entire hotword must reside. The total length of the window cannot exceed 1000 characters. The windowBefore property in proximity should be set to 1 if the hotword needs to be included in a column header.
ExcludeByImageFindings
The rule to exclude image findings based on spatial relationships with other image findings. For example, exclude an image finding if it overlaps with another image finding. This rule is silently ignored if the content being inspected is not an image.
JSON representation
{
"infoTypes" : [
{
object ( InfoType )
}
] ,
"imageContainmentType" : {
object ( ImageContainmentType )
}
}
Fields
infoTypes[]
object ( InfoType )
A list of image-supported infoTypes—excluding document infoTypes —to be used as context for the exclusion rule. A finding is excluded if its bounding box has the specified spatial relationship (defined by imageContainmentType ) with a finding of an infoType in this list.
For example, if InspectionRuleSet.info_types includes OBJECT_TYPE/PERSON and this exclusionRule specifies infoTypes as OBJECT_TYPE/PERSON/PASSPORT with imageContainmentType set to encloses , then OBJECT_TYPE/PERSON findings will be excluded if they are fully contained within the bounding box of an OBJECT_TYPE/PERSON/PASSPORT finding.
imageContainmentType
object ( ImageContainmentType )
Specifies the required spatial relationship between the bounding boxes of the target finding and the context infoType findings.
ImageContainmentType
Specifies the relationship between bounding boxes for image findings.
JSON representation
{
// Union field type can be only one of the following:
"encloses" : {
object ( Encloses )
} ,
"fullyInside" : {
object ( FullyInside )
} ,
"overlaps" : {
object ( Overlap )
}
// End of list of possible types for union field type .
}
Fields
Union field type . The type of relationship to check between the target finding and the context finding. type can be only one of the following:
encloses
object ( Encloses )
The context finding's bounding box must fully contain the target finding's bounding box.
fullyInside
object ( FullyInside )
The context finding's bounding box must be fully inside the target finding's bounding box.
overlaps
object ( Overlap )
The context finding's bounding box and the target finding's bounding box must have a non-zero intersection.
Encloses
This type has no fields.
Defines a condition where one bounding box encloses another.
FullyInside
This type has no fields.
Defines a condition where one bounding box is fully inside another.
Overlap
This type has no fields.
Defines a condition for overlapping bounding boxes.
MatchingType
Type of the match which can be applied to different ways of matching, like Dictionary, regular expression and intersecting with findings of another infoType.
Enums
MATCHING_TYPE_UNSPECIFIED
Invalid.
MATCHING_TYPE_FULL_MATCH
Full match.
Dictionary: join of Dictionary results matched the complete finding quote
Regex: all regex matches fill a finding quote from start to end
Exclude infoType: completely inside affecting infoTypes findings
MATCHING_TYPE_PARTIAL_MATCH
Partial match.
Dictionary: at least one of the tokens in the finding matches
Regex: substring of the finding matches
Exclude infoType: intersects with affecting infoTypes findings
MATCHING_TYPE_INVERSE_MATCH
Inverse match.
Dictionary: no tokens in the finding match the dictionary
Regex: finding doesn't match the regex
Exclude infoType: no intersection with affecting infoTypes findings
MATCHING_TYPE_RULE_SPECIFIC
Rule-specific match.
The matching logic is based on the specific rule being used. This is required for rules where the matching behavior is not a simple string comparison (e.g., image containment). This matching type can only be used with the ExcludeByImageFindings rule.
Exclude by image findings: The matching logic is defined within ExcludeByImageFindings based on spatial relationships between bounding boxes.
AdjustmentRule
Rule that specifies conditions when a certain infoType's finding details should be adjusted.
JSON representation
{
"likelihoodAdjustment" : {
object ( LikelihoodAdjustment )
} ,
// Union field conditions can be only one of the following:
"adjustByMatchingInfoTypes" : {
object ( AdjustByMatchingInfoTypes )
} ,
"adjustByImageFindings" : {
object ( AdjustByImageFindings )
}
// End of list of possible types for union field conditions .
}
Fields
likelihoodAdjustment
object ( LikelihoodAdjustment )
Likelihood adjustment to apply to the infoType.
Union field conditions . Condition under which the adjustment rule is applied. conditions can be only one of the following:
adjustByMatchingInfoTypes
object ( AdjustByMatchingInfoTypes )
Set of infoTypes for which findings would affect this rule.
adjustByImageFindings
object ( AdjustByImageFindings )
AdjustmentRule condition for image findings.
AdjustByMatchingInfoTypes
AdjustmentRule condition for matching infoTypes.
JSON representation
{
"infoTypes" : [
{
object ( InfoType )
}
] ,
"minLikelihood" : enum ( Likelihood ) ,
"matchingType" : enum ( MatchingType )
}
Fields
infoTypes[]
object ( InfoType )
Sensitive Data Protection adjusts the likelihood of a finding if that finding also matches one of these infoTypes.
For example, you can create a rule to adjust the likelihood of a PHONE_NUMBER finding if the string is found within a document that is classified as DOCUMENT_TYPE/HR/RESUME . To configure this, set PHONE_NUMBER in InspectionRuleSet.info_types . Add an adjustmentRule with an adjustByMatchingInfoTypes.info_types that contains DOCUMENT_TYPE/HR/RESUME . In this case, the likelihood of the PHONE_NUMBER finding is adjusted, but the likelihood of the DOCUMENT_TYPE/HR/RESUME finding is not.
minLikelihood
enum ( Likelihood )
Required. Minimum likelihood of the adjustByMatchingInfoTypes.info_types finding. If the likelihood is lower than this value, Sensitive Data Protection doesn't adjust the likelihood of the InspectionRuleSet.info_types finding.
matchingType
enum ( MatchingType )
How the adjustment rule is applied.
Only MATCHING_TYPE_PARTIAL_MATCH is supported:
Partial match: adjusts the findings of infoTypes specified in the inspection rule when they have a nonempty intersection with a finding of an infoType specified in this adjustment rule.
AdjustByImageFindings
AdjustmentRule condition for image findings. This rule is silently ignored if the content being inspected is not an image.
JSON representation
{
"infoTypes" : [
{
object ( InfoType )
}
] ,
"minLikelihood" : enum ( Likelihood ) ,
"imageContainmentType" : {
object ( ImageContainmentType )
}
}
Fields
infoTypes[]
object ( InfoType )
A list of image-supported infoTypes—excluding document infoTypes —to be used as context for the adjustment rule. Sensitive Data Protection adjusts the likelihood of an image finding if its bounding box has the specified spatial relationship (defined by imageContainmentType ) with a finding of an infoType in this list.
For example, you can create a rule to adjust the likelihood of a US_PASSPORT finding if it is enclosed by a finding of OBJECT_TYPE/PERSON/PASSPORT . To configure this, set US_PASSPORT in InspectionRuleSet.info_types . Add an adjustmentRule with an adjustByImageFindings.info_types that contains OBJECT_TYPE/PERSON/PASSPORT and imageContainmentType set to encloses . In this case, the likelihood of the US_PASSPORT finding is adjusted, but the likelihood of the OBJECT_TYPE/PERSON/PASSPORT finding is not.
minLikelihood
enum ( Likelihood )
Required. Minimum likelihood of the adjustByImageFindings.info_types finding. If the likelihood is lower than this value, Sensitive Data Protection doesn't adjust the likelihood of the InspectionRuleSet.info_types finding.
imageContainmentType
object ( ImageContainmentType )
Specifies the required spatial relationship between the bounding boxes of the target finding and the context infoType findings.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-04 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-04 UTC."],[],[]]
