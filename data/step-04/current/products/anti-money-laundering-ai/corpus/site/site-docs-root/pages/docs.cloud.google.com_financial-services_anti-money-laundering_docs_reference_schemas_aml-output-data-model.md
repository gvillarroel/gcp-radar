---
title: "AML output data model \_|\_ Anti Money Laundering AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/schemas/aml-output-data-model
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/schemas/aml-output-data-model
  title: "AML output data model \_|\_ Anti Money Laundering AI \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Industry solutions
Anti Money Laundering AI
Reference
Send feedback
AML output data model
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the AML output data model. AML outputs are sent to
BigQuery.
v003.000
v004.000 - v004.008
v004.009 or later
This page is valid for the engine versions within the following major engine
version groupings. To view the page for other engine versions, use the selector
at the top of this page.
aml-retail.default.v004.009 or later
aml-commercial.default.v004.009 or later
Summary of changes to this page versus v004.008:
Added ObservedRecallValuesPerTypology metric to the AML output data model.
Added partiesCount and identifiedPartiesCount to the ObservedRecallValues metric value.
Added partiesCount and identifiedPartiesCount to the ExpectedRecallPreTuning and ExpectedRecallPostTuning metrics values.
Prediction outputs
Prediction outputs include risk scores and explainability and are generated
when you create a
PredictionResult
resource. For more information, see
Understand prediction outputs .
Risk scores
Risk scores are written to the BigQuery table specified in the
outputs.predictionDestination
field.
Column
Type
Description
party_id
STRING
Unique party ID string
risk_period_end_time
TIMESTAMP
The end of the target period, in the timezone of the dataset
risk_score
FLOAT64
Prediction value. Between 0 and 1. Higher score means higher risk.
Explainability
Explainability is written to the BigQuery table specified in the
outputs.explainabilityDestination
field.
Column
Type
Description
party_id
STRING
Unique party ID string
risk_period_end_time
TIMESTAMP
The end of the target period, in the timezone of the dataset
attributions
STRUCT
(repeated) Record of feature families and their attribution value
attributions.feature
STRING
Name of feature family
attributions.attribution
FLOAT64
Feature family's attribution score
Exported registered parties
The following registered parties information is exported from an
instance
to the BigQuery table specified in the
dataset
field.
Column Type Description
party_id STRING Unique identifier of the party in the instance's datasets
party_size STRING
Specifies the tier for commercial customers (large versus small). This field does not apply
to retail customers.
NULL for all retail customers
SMALL for small commercial parties with less than 500 average monthly transactions
LARGE for large commercial parties with greater than or equal to 500 average monthly transactions
All values are case sensitive.
earliest_remove_time STRING The earliest time at which the party can be removed
party_with_prediction_intent STRING The indicator that suggests if a party has been predicted on since the registration
registration_or_uptier_time STRING The time at which the party was registered or uptiered
Exported metadata
Exported metadata varies based on the AML AI resource.
Engine config
The following metadata is output from an
engine config .
Column Type Description
resource_type STRING Type of AML AI resource, such as an engine config or prediction results
resource_id STRING Name of the resource
name STRING Name of the metadata entry, such as a metric (see the following table)
value JSON Value of the metadata entry
Metric name
Metric description
Example metric value
ExpectedRecallPreTuning
Recall metric measured on a test set when using
default hyperparameters of the engine version.
This recall measurement assumes the number of investigations per month
specified in partyInvestigationsPerPeriodHint .
{
"recallValues": [
{
"partyInvestigationsPerPeriod": 5000,
"recallValue": 0.72,
"partiesCount": 100,
"identifiedPartiesCount": 72,
"scoreThreshold": 0.42,
},
],
}
ExpectedRecallPostTuning
Recall metric measured on a test set when using
tuned hyperparameters .
This recall measurement assumes the number of investigations per month
specified in partyInvestigationsPerPeriodHint .
{
"recallValues": [
{
"partyInvestigationsPerPeriod": 5000,
"recallValue": 0.80,
"partiesCount": 100,
"identifiedPartiesCount": 80,
"scoreThreshold": 0.43,
},
],
}
Missingness
Share of missing values across all features in each feature family.
Ideally, all AML AI feature families should have a
Missingness near to 0. Exceptions may occur where the data underlying
those feature families is unavailable for integration.
A significant change in this value for any feature family between tuning,
training, evaluation, and prediction can indicate inconsistency in the
datasets used.
{
"featureFamilies": [
{
"featureFamily": "unusual_wire_credit_activity",
"missingnessValue": 0.00,
},
...
...
{
"featureFamily": "party_supplementary_data_id_3",
"missingnessValue": 0.45,
},
],
}
Model
The following metadata is output from a
model .
Column Type Description
resource_type STRING Type of AML AI resource, such as an engine config or prediction results
resource_id STRING Name of the resource
name STRING Name of the metadata entry, such as a metric (see the following table)
value JSON Value of the metadata entry
Metric name
Metric description
Example metric value
Missingness
Share of missing values across all features in each feature family.
Ideally, all AML AI feature families should have a
Missingness near to 0. Exceptions may occur where the data underlying
those feature families is unavailable for integration.
A significant change in this value for any feature family between tuning,
training, evaluation, and prediction can indicate inconsistency in the
datasets used.
{
"featureFamilies": [
{
"featureFamily": "unusual_wire_credit_activity",
"missingnessValue": 0.00,
},
...
...
{
"featureFamily": "party_supplementary_data_id_3",
"missingnessValue": 0.45,
},
],
}
Importance
A metric that shows the importance of a feature family to the model. Higher values indicate more significant use of the feature family in the model. A feature family that is not used in the model has zero importance.
Importance values can be used when prioritizing acting on family skew results. For example, the same skew value for a family with higher importance to the model is more urgent to resolve.
{
"featureFamilies": [
{
"featureFamily": "unusual_wire_credit_activity",
"importanceValue": 459761000000,
},
...
...
{
"featureFamily": "party_supplementary_data_id_3",
"importanceValue": 27492,
},
],
}
Backtest results
The following metadata is output from
backtest results .
Column Type Description
resource_type STRING Type of AML AI resource, such as an engine config or prediction results
resource_id STRING Name of the resource
name STRING Name of the metadata entry, such as a metric (see the following table)
value JSON Value of the metadata entry
Metric name
Metric description
Example metric value
ObservedRecallValues
Recall metric measured on the dataset specified for backtesting. The API
includes 20 of these measurements, at different operating points, evenly
distributed from 0 (not included) until 2 *
partyInvestigationsPerPeriodHint . The API adds a final recall
measurement at partyInvestigationsPerPeriodHint .
Alongside the recall value, we also provide the numerator and denominator as
partiesCount and identifiedPartiesCount
respectively.
{
"recallValues": [
{
"partyInvestigationsPerPeriod": 5000,
"recallValue": 0.80,
"partiesCount": 60,
"identifiedPartiesCount": 48,
"scoreThreshold": 0.42,
},
...
...
{
"partyInvestigationsPerPeriod": 8000,
"recallValue": 0.85,
"partiesCount": 60,
"identifiedPartiesCount": 51,
"scoreThreshold": 0.30,
},
],
}
ObservedRecallValuesPerTypology
Recall metric on a risk typology level measured on the dataset specified
for backtesting. The measurements follow the same approach as
ObservedRecallValues .
{
"recallValuesPerTypology": [
{
"partyInvestigationsPerPeriod": 5000,
"riskTypology": "risk_typology_id_1",
"recallValue": 0.80,
"partiesCount": 60,
"identifiedPartiesCount": 48,
"scoreThreshold": 0.42,
},
{
"partyInvestigationsPerPeriod": 8000,
"riskTypology": "risk_typology_id_1",
"recallValue": 0.90,
"partiesCount": 60,
"identifiedPartiesCount": 54,
"scoreThreshold": 0.30,
},
...
...
{
"partyInvestigationsPerPeriod": 8000,
"riskTypology": "risk_typology_id_2",
"recallValue": 0.75,
"partiesCount": 4
"identifiedPartiesCount": 3,
"scoreThreshold": 0.30,
},
],
}
Missingness
Share of missing values across all features in each feature family.
Ideally, all AML AI feature families should have a
Missingness near to 0. Exceptions may occur where the data underlying
those feature families is unavailable for integration.
A significant change in this value for any feature family between tuning,
training, evaluation, and prediction can indicate inconsistency in the
datasets used.
{
"featureFamilies": [
{
"featureFamily": "unusual_wire_credit_activity",
"missingnessValue": 0.00,
},
...
...
{
"featureFamily": "party_supplementary_data_id_3",
"missingnessValue": 0.45,
},
],
}
Skew
Metrics showing skew between training and prediction or backtest datasets. Family skew indicates changes in the distribution of feature values within a feature family, weighted by importance of the feature within that family. Max skew indicates the maximum skew of any feature within that family.
Skew values range from 0, representing no significant change in the distribution of values of features in the family, to 1 for the most significant change. A large value for either family skew or max skew indicates a significant change in the structure of your data in a way that may impact model performance. Family skew takes the value -1 when no features in the family are used by the model.
For large skew values, you should do one of the following:
Investigate changes in the data used by that feature family (see model governance support materials) and fix any input data issues
Retrain a model on more recent data
You should set thresholds for acting on family and max skew values based on observing the natural variation in skew metrics over several months.
{
"featureFamilies": [
{
"featureFamily": "unusual_wire_credit_activity",
"familySkewValue": 0.10,
"maxSkewValue": 0.14,
},
...
...
{
"featureFamily": "party_supplementary_data_id_3",
"familySkewValue": 0.11,
"maxSkewValue": 0.11,
},
],
}
Prediction results
The following metadata is output from
prediction results .
Column Type Description
resource_type STRING Type of AML AI resource, such as an engine config or prediction results
resource_id STRING Name of the resource
name STRING Name of the metadata entry, such as a metric (see the following table)
value JSON Value of the metadata entry
Metric name
Metric description
Example metric value
Missingness
Share of missing values across all features in each feature family.
Ideally, all AML AI feature families should have a
Missingness near to 0. Exceptions may occur where the data underlying
those feature families is unavailable for integration.
A significant change in this value for any feature family between tuning,
training, evaluation, and prediction can indicate inconsistency in the
datasets used.
{
"featureFamilies": [
{
"featureFamily": "unusual_wire_credit_activity",
"missingnessValue": 0.00,
},
...
...
{
"featureFamily": "party_supplementary_data_id_3",
"missingnessValue": 0.45,
},
],
}
Skew
Metrics showing skew between training and prediction or backtest datasets. Family skew indicates changes in the distribution of feature values within a feature family, weighted by importance of the feature within that family. Max skew indicates the maximum skew of any feature within that family.
Skew values range from 0, representing no significant change in the distribution of values of features in the family, to 1 for the most significant change. A large value for either family skew or max skew indicates a significant change in the structure of your data in a way that may impact model performance. Family skew takes the value -1 when no features in the family are used by the model.
For large skew values, you should do one of the following:
Investigate changes in the data used by that feature family (see model governance support materials) and fix any input data issues
Retrain a model on more recent data
You should set thresholds for acting on family and max skew values based on observing the natural variation in skew metrics over several months.
{
"featureFamilies": [
{
"featureFamily": "unusual_wire_credit_activity",
"familySkewValue": 0.10,
"maxSkewValue": 0.14,
},
...
...
{
"featureFamily": "party_supplementary_data_id_3",
"familySkewValue": 0.11,
"maxSkewValue": 0.11,
},
],
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
