---
title: "REST Resource: projects.dlpJobs \_|\_ Sensitive Data Protection \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/projects.dlpJobs
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/data-security
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/projects.dlpJobs
  title: "REST Resource: projects.dlpJobs \_|\_ Sensitive Data Protection \_|\_ Google\
    \ Cloud Documentation"
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
REST Resource: projects.dlpJobs
Stay organized with collections
Save and categorize content based on your preferences.
Resource: DlpJob
JSON representation
DlpJobType
JobState
AnalyzeDataSourceRiskDetails
JSON representation
PrivacyMetric
JSON representation
NumericalStatsConfig
JSON representation
CategoricalStatsConfig
JSON representation
KAnonymityConfig
JSON representation
EntityId
JSON representation
LDiversityConfig
JSON representation
KMapEstimationConfig
JSON representation
TaggedField
JSON representation
AuxiliaryTable
JSON representation
QuasiIdField
JSON representation
DeltaPresenceEstimationConfig
JSON representation
QuasiId
JSON representation
StatisticalTable
JSON representation
QuasiIdentifierField
JSON representation
NumericalStatsResult
JSON representation
CategoricalStatsResult
JSON representation
CategoricalStatsHistogramBucket
JSON representation
ValueFrequency
JSON representation
KAnonymityResult
JSON representation
KAnonymityHistogramBucket
JSON representation
KAnonymityEquivalenceClass
JSON representation
LDiversityResult
JSON representation
LDiversityHistogramBucket
JSON representation
LDiversityEquivalenceClass
JSON representation
KMapEstimationResult
JSON representation
KMapEstimationHistogramBucket
JSON representation
KMapEstimationQuasiIdValues
JSON representation
DeltaPresenceEstimationResult
JSON representation
DeltaPresenceEstimationHistogramBucket
JSON representation
DeltaPresenceEstimationQuasiIdValues
JSON representation
RequestedRiskAnalysisOptions
JSON representation
RiskAnalysisJobConfig
JSON representation
InspectDataSourceDetails
JSON representation
RequestedOptions
JSON representation
Result
JSON representation
InfoTypeStats
JSON representation
HybridInspectStatistics
JSON representation
ActionDetails
JSON representation
DeidentifyDataSourceDetails
JSON representation
RequestedDeidentifyOptions
JSON representation
DeidentifyDataSourceStats
JSON representation
Methods
Resource: DlpJob
Combines all of the information about a DLP job.
JSON representation
{
"name" : string ,
"type" : enum ( DlpJobType ) ,
"state" : enum ( JobState ) ,
"createTime" : string ,
"startTime" : string ,
"endTime" : string ,
"lastModified" : string ,
"jobTriggerName" : string ,
"errors" : [
{
object ( Error )
}
] ,
"actionDetails" : [
{
object ( ActionDetails )
}
] ,
// Union field details can be only one of the following:
"riskDetails" : {
object ( AnalyzeDataSourceRiskDetails )
} ,
"inspectDetails" : {
object ( InspectDataSourceDetails )
}
// End of list of possible types for union field details .
}
Fields
name
string
The server-assigned name.
type
enum ( DlpJobType )
The type of job.
state
enum ( JobState )
State of a job.
createTime
string ( Timestamp format)
Time when the job was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
startTime
string ( Timestamp format)
Time when the job started.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
endTime
string ( Timestamp format)
Time when the job finished.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
lastModified
string ( Timestamp format)
Time when the job was last modified by the system.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
jobTriggerName
string
If created by a job trigger, the resource name of the trigger that instantiated the job.
errors[]
object ( Error )
A stream of errors encountered running the job.
actionDetails[]
object ( ActionDetails )
Events that should occur after the job has completed.
Union field details . Job details. details can be only one of the following:
riskDetails
object ( AnalyzeDataSourceRiskDetails )
Results from analyzing risk of a data source.
inspectDetails
object ( InspectDataSourceDetails )
Results from inspecting a data source.
DlpJobType
An enum to represent the various types of DLP jobs.
Enums
DLP_JOB_TYPE_UNSPECIFIED
Defaults to INSPECT_JOB.
INSPECT_JOB
The job inspected Google Cloud for sensitive data.
RISK_ANALYSIS_JOB
The job executed a Risk Analysis computation.
JobState
Possible states of a job. New items may be added.
Enums
JOB_STATE_UNSPECIFIED
Unused.
PENDING
The job has not yet started.
RUNNING
The job is currently running. Once a job has finished it will transition to FAILED or DONE.
DONE
The job is no longer running.
CANCELED
The job was canceled before it could be completed.
FAILED
The job had an error and did not complete.
ACTIVE
The job is currently accepting findings via hybridInspect. A hybrid job in ACTIVE state may continue to have findings added to it through the calling of hybridInspect. After the job has finished no more calls to hybridInspect may be made. ACTIVE jobs can transition to DONE.
AnalyzeDataSourceRiskDetails
Result of a risk analysis operation request.
JSON representation
{
"requestedPrivacyMetric" : {
object ( PrivacyMetric )
} ,
"requestedSourceTable" : {
object ( BigQueryTable )
} ,
"requestedOptions" : {
object ( RequestedRiskAnalysisOptions )
} ,
// Union field result can be only one of the following:
"numericalStatsResult" : {
object ( NumericalStatsResult )
} ,
"categoricalStatsResult" : {
object ( CategoricalStatsResult )
} ,
"kAnonymityResult" : {
object ( KAnonymityResult )
} ,
"lDiversityResult" : {
object ( LDiversityResult )
} ,
"kMapEstimationResult" : {
object ( KMapEstimationResult )
} ,
"deltaPresenceEstimationResult" : {
object ( DeltaPresenceEstimationResult )
}
// End of list of possible types for union field result .
}
Fields
requestedPrivacyMetric
object ( PrivacyMetric )
Privacy metric to compute.
requestedSourceTable
object ( BigQueryTable )
Input dataset to compute metrics over.
requestedOptions
object ( RequestedRiskAnalysisOptions )
The configuration used for this job.
Union field result . Values associated with this metric. result can be only one of the following:
numericalStatsResult
object ( NumericalStatsResult )
Numerical stats result
categoricalStatsResult
object ( CategoricalStatsResult )
Categorical stats result
kAnonymityResult
object ( KAnonymityResult )
K-anonymity result
lDiversityResult
object ( LDiversityResult )
L-divesity result
kMapEstimationResult
object ( KMapEstimationResult )
K-map result
deltaPresenceEstimationResult
object ( DeltaPresenceEstimationResult )
Delta-presence result
PrivacyMetric
Privacy metric to compute for reidentification risk analysis.
JSON representation
{
// Union field type can be only one of the following:
"numericalStatsConfig" : {
object ( NumericalStatsConfig )
} ,
"categoricalStatsConfig" : {
object ( CategoricalStatsConfig )
} ,
"kAnonymityConfig" : {
object ( KAnonymityConfig )
} ,
"lDiversityConfig" : {
object ( LDiversityConfig )
} ,
"kMapEstimationConfig" : {
object ( KMapEstimationConfig )
} ,
"deltaPresenceEstimationConfig" : {
object ( DeltaPresenceEstimationConfig )
}
// End of list of possible types for union field type .
}
Fields
Union field type . Types of analysis. type can be only one of the following:
numericalStatsConfig
object ( NumericalStatsConfig )
Numerical stats
categoricalStatsConfig
object ( CategoricalStatsConfig )
Categorical stats
kAnonymityConfig
object ( KAnonymityConfig )
K-anonymity
lDiversityConfig
object ( LDiversityConfig )
l-diversity
kMapEstimationConfig
object ( KMapEstimationConfig )
k-map
deltaPresenceEstimationConfig
object ( DeltaPresenceEstimationConfig )
delta-presence
NumericalStatsConfig
Compute numerical stats over an individual column, including min, max, and quantiles.
JSON representation
{
"field" : {
object ( FieldId )
}
}
Fields
field
object ( FieldId )
Field to compute numerical stats on. Supported types are integer, float, date, datetime, timestamp, time.
CategoricalStatsConfig
Compute numerical stats over an individual column, including number of distinct values and value count distribution.
JSON representation
{
"field" : {
object ( FieldId )
}
}
Fields
field
object ( FieldId )
Field to compute categorical stats on. All column types are supported except for arrays and structs. However, it may be more informative to use NumericalStats when the field type is supported, depending on the data.
KAnonymityConfig
k-anonymity metric, used for analysis of reidentification risk.
JSON representation
{
"quasiIds" : [
{
object ( FieldId )
}
] ,
"entityId" : {
object ( EntityId )
}
}
Fields
quasiIds[]
object ( FieldId )
Set of fields to compute k-anonymity over. When multiple fields are specified, they are considered a single composite key. Structs and repeated data types are not supported; however, nested fields are supported so long as they are not structs themselves or nested within a repeated field.
entityId
object ( EntityId )
Message indicating that multiple rows might be associated to a single individual. If the same entityId is associated to multiple quasi-identifier tuples over distinct rows, we consider the entire collection of tuples as the composite quasi-identifier. This collection is a multiset: the order in which the different tuples appear in the dataset is ignored, but their frequency is taken into account.
Important note: a maximum of 1000 rows can be associated to a single entity ID. If more rows are associated with the same entity ID, some might be ignored.
EntityId
An entity in a dataset is a field or set of fields that correspond to a single person. For example, in medical records the EntityId might be a patient identifier, or for financial records it might be an account identifier. This message is used when generalizations or analysis must take into account that multiple rows correspond to the same entity.
JSON representation
{
"field" : {
object ( FieldId )
}
}
Fields
field
object ( FieldId )
Composite key indicating which field contains the entity identifier.
LDiversityConfig
l-diversity metric, used for analysis of reidentification risk.
JSON representation
{
"quasiIds" : [
{
object ( FieldId )
}
] ,
"sensitiveAttribute" : {
object ( FieldId )
}
}
Fields
quasiIds[]
object ( FieldId )
Set of quasi-identifiers indicating how equivalence classes are defined for the l-diversity computation. When multiple fields are specified, they are considered a single composite key.
sensitiveAttribute
object ( FieldId )
Sensitive field for computing the l-value.
KMapEstimationConfig
Reidentifiability metric. This corresponds to a risk model similar to what is called "journalist risk" in the literature, except the attack dataset is statistically modeled instead of being perfectly known. This can be done using publicly available data (like the US Census), or using a custom statistical model (indicated as one or several BigQuery tables), or by extrapolating from the distribution of values in the input dataset.
JSON representation
{
"quasiIds" : [
{
object ( TaggedField )
}
] ,
"regionCode" : string ,
"auxiliaryTables" : [
{
object ( AuxiliaryTable )
}
]
}
Fields
quasiIds[]
object ( TaggedField )
Required. Fields considered to be quasi-identifiers. No two columns can have the same tag.
regionCode
string
ISO 3166-1 alpha-2 region code to use in the statistical modeling. Set if no column is tagged with a region-specific InfoType (like US_ZIP_5) or a region code.
auxiliaryTables[]
object ( AuxiliaryTable )
Several auxiliary tables can be used in the analysis. Each customTag used to tag a quasi-identifiers column must appear in exactly one column of one auxiliary table.
TaggedField
A column with a semantic tag attached.
JSON representation
{
"field" : {
object ( FieldId )
} ,
// Union field tag can be only one of the following:
"infoType" : {
object ( InfoType )
} ,
"customTag" : string ,
"inferred" : {
object
}
// End of list of possible types for union field tag .
}
Fields
field
object ( FieldId )
Required. Identifies the column.
Union field tag . Semantic tag that identifies what a column contains, to determine which statistical model to use to estimate the reidentifiability of each value. [required] tag can be only one of the following:
infoType
object ( InfoType )
A column can be tagged with a InfoType to use the relevant public dataset as a statistical model of population, if available. We currently support US ZIP codes, region codes, ages and genders. To programmatically obtain the list of supported InfoTypes, use infoTypes.list with the supportedBy=RISK_ANALYSIS filter.
customTag
string
A column can be tagged with a custom tag. In this case, the user must indicate an auxiliary table that contains statistical information on the possible values of this column.
inferred
object
If no semantic tag is indicated, we infer the statistical model from the distribution of values in the input data
AuxiliaryTable
An auxiliary table contains statistical information on the relative frequency of different quasi-identifiers values. It has one or several quasi-identifiers columns, and one column that indicates the relative frequency of each quasi-identifier tuple. If a tuple is present in the data but not in the auxiliary table, the corresponding relative frequency is assumed to be zero (and thus, the tuple is highly reidentifiable).
JSON representation
{
"table" : {
object ( BigQueryTable )
} ,
"quasiIds" : [
{
object ( QuasiIdField )
}
] ,
"relativeFrequency" : {
object ( FieldId )
}
}
Fields
table
object ( BigQueryTable )
Required. Auxiliary table location.
quasiIds[]
object ( QuasiIdField )
Required. Quasi-identifier columns.
relativeFrequency
object ( FieldId )
Required. The relative frequency column must contain a floating-point number between 0 and 1 (inclusive). Null values are assumed to be zero.
QuasiIdField
A quasi-identifier column has a customTag, used to know which column in the data corresponds to which column in the statistical model.
JSON representation
{
"field" : {
object ( FieldId )
} ,
"customTag" : string
}
Fields
field
object ( FieldId )
Identifies the column.
customTag
string
A auxiliary field.
DeltaPresenceEstimationConfig
δ-presence metric, used to estimate how likely it is for an attacker to figure out that one given individual appears in a de-identified dataset. Similarly to the k-map metric, we cannot compute δ-presence exactly without knowing the attack dataset, so we use a statistical model instead.
JSON representation
{
"quasiIds" : [
{
object ( QuasiId )
}
] ,
"regionCode" : string ,
"auxiliaryTables" : [
{
object ( StatisticalTable )
}
]
}
Fields
quasiIds[]
object ( QuasiId )
Required. Fields considered to be quasi-identifiers. No two fields can have the same tag.
regionCode
string
ISO 3166-1 alpha-2 region code to use in the statistical modeling. Set if no column is tagged with a region-specific InfoType (like US_ZIP_5) or a region code.
auxiliaryTables[]
object ( StatisticalTable )
Several auxiliary tables can be used in the analysis. Each customTag used to tag a quasi-identifiers field must appear in exactly one field of one auxiliary table.
QuasiId
A column with a semantic tag attached.
JSON representation
{
"field" : {
object ( FieldId )
} ,
// Union field tag can be only one of the following:
"infoType" : {
object ( InfoType )
} ,
"customTag" : string ,
"inferred" : {
object
}
// End of list of possible types for union field tag .
}
Fields
field
object ( FieldId )
Required. Identifies the column.
Union field tag . Semantic tag that identifies what a column contains, to determine which statistical model to use to estimate the reidentifiability of each value. [required] tag can be only one of the following:
infoType
object ( InfoType )
A column can be tagged with a InfoType to use the relevant public dataset as a statistical model of population, if available. We currently support US ZIP codes, region codes, ages and genders. To programmatically obtain the list of supported InfoTypes, use infoTypes.list with the supportedBy=RISK_ANALYSIS filter.
customTag
string
A column can be tagged with a custom tag. In this case, the user must indicate an auxiliary table that contains statistical information on the possible values of this column.
inferred
object
If no semantic tag is indicated, we infer the statistical model from the distribution of values in the input data
StatisticalTable
An auxiliary table containing statistical information on the relative frequency of different quasi-identifiers values. It has one or several quasi-identifiers columns, and one column that indicates the relative frequency of each quasi-identifier tuple. If a tuple is present in the data but not in the auxiliary table, the corresponding relative frequency is assumed to be zero (and thus, the tuple is highly reidentifiable).
JSON representation
{
"table" : {
object ( BigQueryTable )
} ,
"quasiIds" : [
{
object ( QuasiIdentifierField )
}
] ,
"relativeFrequency" : {
object ( FieldId )
}
}
Fields
table
object ( BigQueryTable )
Required. Auxiliary table location.
quasiIds[]
object ( QuasiIdentifierField )
Required. Quasi-identifier columns.
relativeFrequency
object ( FieldId )
Required. The relative frequency column must contain a floating-point number between 0 and 1 (inclusive). Null values are assumed to be zero.
QuasiIdentifierField
A quasi-identifier column has a customTag, used to know which column in the data corresponds to which column in the statistical model.
JSON representation
{
"field" : {
object ( FieldId )
} ,
"customTag" : string
}
Fields
field
object ( FieldId )
Identifies the column.
customTag
string
A column can be tagged with a custom tag. In this case, the user must indicate an auxiliary table that contains statistical information on the possible values of this column.
NumericalStatsResult
Result of the numerical stats computation.
JSON representation
{
"minValue" : {
object ( Value )
} ,
"maxValue" : {
object ( Value )
} ,
"quantileValues" : [
{
object ( Value )
}
]
}
Fields
minValue
object ( Value )
Minimum value appearing in the column.
maxValue
object ( Value )
Maximum value appearing in the column.
quantileValues[]
object ( Value )
List of 99 values that partition the set of field values into 100 equal sized buckets.
CategoricalStatsResult
Result of the categorical stats computation.
JSON representation
{
"valueFrequencyHistogramBuckets" : [
{
object ( CategoricalStatsHistogramBucket )
}
]
}
Fields
valueFrequencyHistogramBuckets[]
object ( CategoricalStatsHistogramBucket )
Histogram of value frequencies in the column.
CategoricalStatsHistogramBucket
Histogram of value frequencies in the column.
JSON representation
{
"valueFrequencyLowerBound" : string ,
"valueFrequencyUpperBound" : string ,
"bucketSize" : string ,
"bucketValues" : [
{
object ( ValueFrequency )
}
] ,
"bucketValueCount" : string
}
Fields
valueFrequencyLowerBound
string ( int64 format)
Lower bound on the value frequency of the values in this bucket.
valueFrequencyUpperBound
string ( int64 format)
Upper bound on the value frequency of the values in this bucket.
bucketSize
string ( int64 format)
Total number of values in this bucket.
bucketValues[]
object ( ValueFrequency )
Sample of value frequencies in this bucket. The total number of values returned per bucket is capped at 20.
bucketValueCount
string ( int64 format)
Total number of distinct values in this bucket.
ValueFrequency
A value of a field, including its frequency.
JSON representation
{
"value" : {
object ( Value )
} ,
"count" : string
}
Fields
value
object ( Value )
A value contained in the field in question.
count
string ( int64 format)
How many times the value is contained in the field.
KAnonymityResult
Result of the k-anonymity computation.
JSON representation
{
"equivalenceClassHistogramBuckets" : [
{
object ( KAnonymityHistogramBucket )
}
]
}
Fields
equivalenceClassHistogramBuckets[]
object ( KAnonymityHistogramBucket )
Histogram of k-anonymity equivalence classes.
KAnonymityHistogramBucket
Histogram of k-anonymity equivalence classes.
JSON representation
{
"equivalenceClassSizeLowerBound" : string ,
"equivalenceClassSizeUpperBound" : string ,
"bucketSize" : string ,
"bucketValues" : [
{
object ( KAnonymityEquivalenceClass )
}
] ,
"bucketValueCount" : string
}
Fields
equivalenceClassSizeLowerBound
string ( int64 format)
Lower bound on the size of the equivalence classes in this bucket.
equivalenceClassSizeUpperBound
string ( int64 format)
Upper bound on the size of the equivalence classes in this bucket.
bucketSize
string ( int64 format)
Total number of equivalence classes in this bucket.
bucketValues[]
object ( KAnonymityEquivalenceClass )
Sample of equivalence classes in this bucket. The total number of classes returned per bucket is capped at 20.
bucketValueCount
string ( int64 format)
Total number of distinct equivalence classes in this bucket.
KAnonymityEquivalenceClass
The set of columns' values that share the same ldiversity value
JSON representation
{
"quasiIdsValues" : [
{
object ( Value )
}
] ,
"equivalenceClassSize" : string
}
Fields
quasiIdsValues[]
object ( Value )
Set of values defining the equivalence class. One value per quasi-identifier column in the original KAnonymity metric message. The order is always the same as the original request.
equivalenceClassSize
string ( int64 format)
Size of the equivalence class, for example number of rows with the above set of values.
LDiversityResult
Result of the l-diversity computation.
JSON representation
{
"sensitiveValueFrequencyHistogramBuckets" : [
{
object ( LDiversityHistogramBucket )
}
]
}
Fields
sensitiveValueFrequencyHistogramBuckets[]
object ( LDiversityHistogramBucket )
Histogram of l-diversity equivalence class sensitive value frequencies.
LDiversityHistogramBucket
Histogram of l-diversity equivalence class sensitive value frequencies.
JSON representation
{
"sensitiveValueFrequencyLowerBound" : string ,
"sensitiveValueFrequencyUpperBound" : string ,
"bucketSize" : string ,
"bucketValues" : [
{
object ( LDiversityEquivalenceClass )
}
] ,
"bucketValueCount" : string
}
Fields
sensitiveValueFrequencyLowerBound
string ( int64 format)
Lower bound on the sensitive value frequencies of the equivalence classes in this bucket.
sensitiveValueFrequencyUpperBound
string ( int64 format)
Upper bound on the sensitive value frequencies of the equivalence classes in this bucket.
bucketSize
string ( int64 format)
Total number of equivalence classes in this bucket.
bucketValues[]
object ( LDiversityEquivalenceClass )
Sample of equivalence classes in this bucket. The total number of classes returned per bucket is capped at 20.
bucketValueCount
string ( int64 format)
Total number of distinct equivalence classes in this bucket.
LDiversityEquivalenceClass
The set of columns' values that share the same ldiversity value.
JSON representation
{
"quasiIdsValues" : [
{
object ( Value )
}
] ,
"equivalenceClassSize" : string ,
"numDistinctSensitiveValues" : string ,
"topSensitiveValues" : [
{
object ( ValueFrequency )
}
]
}
Fields
quasiIdsValues[]
object ( Value )
Quasi-identifier values defining the k-anonymity equivalence class. The order is always the same as the original request.
equivalenceClassSize
string ( int64 format)
Size of the k-anonymity equivalence class.
numDistinctSensitiveValues
string ( int64 format)
Number of distinct sensitive values in this equivalence class.
topSensitiveValues[]
object ( ValueFrequency )
Estimated frequencies of top sensitive values.
KMapEstimationResult
Result of the reidentifiability analysis. Note that these results are an estimation, not exact values.
JSON representation
{
"kMapEstimationHistogram" : [
{
object ( KMapEstimationHistogramBucket )
}
]
}
Fields
kMapEstimationHistogram[]
object ( KMapEstimationHistogramBucket )
The intervals [minAnonymity, maxAnonymity] do not overlap. If a value doesn't correspond to any such interval, the associated frequency is zero. For example, the following records: {minAnonymity: 1, maxAnonymity: 1, frequency: 17} {minAnonymity: 2, maxAnonymity: 3, frequency: 42} {minAnonymity: 5, maxAnonymity: 10, frequency: 99} mean that there are no record with an estimated anonymity of 4, 5, or larger than 10.
KMapEstimationHistogramBucket
A KMapEstimationHistogramBucket message with the following values: minAnonymity: 3 maxAnonymity: 5 frequency: 42 means that there are 42 records whose quasi-identifier values correspond to 3, 4 or 5 people in the overlying population. An important particular case is when minAnonymity = maxAnonymity = 1: the frequency field then corresponds to the number of uniquely identifiable records.
JSON representation
{
"minAnonymity" : string ,
"maxAnonymity" : string ,
"bucketSize" : string ,
"bucketValues" : [
{
object ( KMapEstimationQuasiIdValues )
}
] ,
"bucketValueCount" : string
}
Fields
minAnonymity
string ( int64 format)
Always positive.
maxAnonymity
string ( int64 format)
Always greater than or equal to minAnonymity.
bucketSize
string ( int64 format)
Number of records within these anonymity bounds.
bucketValues[]
object ( KMapEstimationQuasiIdValues )
Sample of quasi-identifier tuple values in this bucket. The total number of classes returned per bucket is capped at 20.
bucketValueCount
string ( int64 format)
Total number of distinct quasi-identifier tuple values in this bucket.
KMapEstimationQuasiIdValues
A tuple of values for the quasi-identifier columns.
JSON representation
{
"quasiIdsValues" : [
{
object ( Value )
}
] ,
"estimatedAnonymity" : string
}
Fields
quasiIdsValues[]
object ( Value )
The quasi-identifier values.
estimatedAnonymity
string ( int64 format)
The estimated anonymity for these quasi-identifier values.
DeltaPresenceEstimationResult
Result of the δ-presence computation. Note that these results are an estimation, not exact values.
JSON representation
{
"deltaPresenceEstimationHistogram" : [
{
object ( DeltaPresenceEstimationHistogramBucket )
}
]
}
Fields
deltaPresenceEstimationHistogram[]
object ( DeltaPresenceEstimationHistogramBucket )
The intervals [minProbability, maxProbability) do not overlap. If a value doesn't correspond to any such interval, the associated frequency is zero. For example, the following records: {minProbability: 0, maxProbability: 0.1, frequency: 17} {minProbability: 0.2, maxProbability: 0.3, frequency: 42} {minProbability: 0.3, maxProbability: 0.4, frequency: 99} mean that there are no record with an estimated probability in [0.1, 0.2) nor larger or equal to 0.4.
DeltaPresenceEstimationHistogramBucket
A DeltaPresenceEstimationHistogramBucket message with the following values: minProbability: 0.1 maxProbability: 0.2 frequency: 42 means that there are 42 records for which δ is in [0.1, 0.2). An important particular case is when minProbability = maxProbability = 1: then, every individual who shares this quasi-identifier combination is in the dataset.
JSON representation
{
"minProbability" : number ,
"maxProbability" : number ,
"bucketSize" : string ,
"bucketValues" : [
{
object ( DeltaPresenceEstimationQuasiIdValues )
}
] ,
"bucketValueCount" : string
}
Fields
minProbability
number
Between 0 and 1.
maxProbability
number
Always greater than or equal to minProbability.
bucketSize
string ( int64 format)
Number of records within these probability bounds.
bucketValues[]
object ( DeltaPresenceEstimationQuasiIdValues )
Sample of quasi-identifier tuple values in this bucket. The total number of classes returned per bucket is capped at 20.
bucketValueCount
string ( int64 format)
Total number of distinct quasi-identifier tuple values in this bucket.
DeltaPresenceEstimationQuasiIdValues
A tuple of values for the quasi-identifier columns.
JSON representation
{
"quasiIdsValues" : [
{
object ( Value )
}
] ,
"estimatedProbability" : number
}
Fields
quasiIdsValues[]
object ( Value )
The quasi-identifier values.
estimatedProbability
number
The estimated probability that a given individual sharing these quasi-identifier values is in the dataset. This value, typically called δ, is the ratio between the number of records in the dataset with these quasi-identifier values, and the total number of individuals (inside and outside the dataset) with these quasi-identifier values. For example, if there are 15 individuals in the dataset who share the same quasi-identifier values, and an estimated 100 people in the entire population with these values, then δ is 0.15.
RequestedRiskAnalysisOptions
Risk analysis options.
JSON representation
{
"jobConfig" : {
object ( RiskAnalysisJobConfig )
}
}
Fields
jobConfig
object ( RiskAnalysisJobConfig )
The job config for the risk job.
RiskAnalysisJobConfig
Configuration for a risk analysis job. See https://cloud.google.com/sensitive-data-protection/docs/concepts-risk-analysis to learn more.
JSON representation
{
"privacyMetric" : {
object ( PrivacyMetric )
} ,
"sourceTable" : {
object ( BigQueryTable )
} ,
"actions" : [
{
object ( Action )
}
]
}
Fields
privacyMetric
object ( PrivacyMetric )
Privacy metric to compute.
sourceTable
object ( BigQueryTable )
Input dataset to compute metrics over.
actions[]
object ( Action )
Actions to execute at the completion of the job. Are executed in the order provided.
InspectDataSourceDetails
The results of an inspect DataSource job.
JSON representation
{
"requestedOptions" : {
object ( RequestedOptions )
} ,
"result" : {
object ( Result )
}
}
Fields
requestedOptions
object ( RequestedOptions )
The configuration used for this job.
result
object ( Result )
A summary of the outcome of this inspection job.
RequestedOptions
Snapshot of the inspection configuration.
JSON representation
{
"snapshotInspectTemplate" : {
object ( InspectTemplate )
} ,
"jobConfig" : {
object ( InspectJobConfig )
}
}
Fields
snapshotInspectTemplate
object ( InspectTemplate )
If run with an InspectTemplate, a snapshot of its state at the time of this run.
jobConfig
object ( InspectJobConfig )
Inspect config.
Result
All Result fields are updated while the job is processing.
JSON representation
{
"processedBytes" : string ,
"totalEstimatedBytes" : string ,
"infoTypeStats" : [
{
object ( InfoTypeStats )
}
] ,
"numRowsProcessed" : string ,
"hybridStats" : {
object ( HybridInspectStatistics )
}
}
Fields
processedBytes
string ( int64 format)
Total size in bytes that were processed.
totalEstimatedBytes
string ( int64 format)
Estimate of the number of bytes to process.
infoTypeStats[]
object ( InfoTypeStats )
Statistics of how many instances of each info type were found during inspect job.
numRowsProcessed
string ( int64 format)
Number of rows scanned after sampling and time filtering (applicable for row based stores such as BigQuery).
hybridStats
object ( HybridInspectStatistics )
Statistics related to the processing of hybrid inspect.
InfoTypeStats
Statistics regarding a specific InfoType.
JSON representation
{
"infoType" : {
object ( InfoType )
} ,
"count" : string
}
Fields
infoType
object ( InfoType )
The type of finding this stat is for.
count
string ( int64 format)
Number of findings for this infoType.
HybridInspectStatistics
Statistics related to processing hybrid inspect requests.
JSON representation
{
"processedCount" : string ,
"abortedCount" : string ,
"pendingCount" : string
}
Fields
processedCount
string ( int64 format)
The number of hybrid inspection requests processed within this job.
abortedCount
string ( int64 format)
The number of hybrid inspection requests aborted because the job ran out of quota or was ended before they could be processed.
pendingCount
string ( int64 format)
The number of hybrid requests currently being processed. Only populated when called via method getDlpJob . A burst of traffic may cause hybrid inspect requests to be enqueued. Processing will take place as quickly as possible, but resource limitations may impact how long a request is enqueued for.
ActionDetails
The results of an Action .
JSON representation
{
// Union field details can be only one of the following:
"deidentifyDetails" : {
object ( DeidentifyDataSourceDetails )
}
// End of list of possible types for union field details .
}
Fields
Union field details . Summary of what occurred in the actions. details can be only one of the following:
deidentifyDetails
object ( DeidentifyDataSourceDetails )
Outcome of a de-identification action.
DeidentifyDataSourceDetails
The results of a Deidentify action from an inspect job.
JSON representation
{
"requestedOptions" : {
object ( RequestedDeidentifyOptions )
} ,
"deidentifyStats" : {
object ( DeidentifyDataSourceStats )
}
}
Fields
requestedOptions
object ( RequestedDeidentifyOptions )
De-identification config used for the request.
deidentifyStats
object ( DeidentifyDataSourceStats )
Stats about the de-identification operation.
RequestedDeidentifyOptions
De-identification options.
JSON representation
{
"snapshotDeidentifyTemplate" : {
object ( DeidentifyTemplate )
} ,
"snapshotStructuredDeidentifyTemplate" : {
object ( DeidentifyTemplate )
} ,
"snapshotImageRedactTemplate" : {
object ( DeidentifyTemplate )
}
}
Fields
snapshotDeidentifyTemplate
object ( DeidentifyTemplate )
Snapshot of the state of the DeidentifyTemplate from the Deidentify action at the time this job was run.
snapshotStructuredDeidentifyTemplate
object ( DeidentifyTemplate )
Snapshot of the state of the structured DeidentifyTemplate from the Deidentify action at the time this job was run.
snapshotImageRedactTemplate
object ( DeidentifyTemplate )
Snapshot of the state of the image transformation DeidentifyTemplate from the Deidentify action at the time this job was run.
DeidentifyDataSourceStats
Summary of what was modified during a transformation.
JSON representation
{
"transformedBytes" : string ,
"transformationCount" : string ,
"transformationErrorCount" : string
}
Fields
transformedBytes
string ( int64 format)
Total size in bytes that were transformed in some way.
transformationCount
string ( int64 format)
Number of successfully applied transformations.
transformationErrorCount
string ( int64 format)
Number of errors encountered while trying to apply transformations.
Methods
cancel
Starts asynchronous cancellation on a long-running DlpJob.
create
Creates a new job to inspect storage or calculate risk metrics.
delete
Deletes a long-running DlpJob.
get
Gets the latest state of a long-running DlpJob.
list
Lists DlpJobs that match the specified filter in the request.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-09 UTC."],[],[]]
