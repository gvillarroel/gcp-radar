---
title: "Contact Center AI Insights API \_|\_ Customer Experience Insights \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/insights/docs/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/insights/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/contact-center/insights/docs/reference/rest
  title: "Contact Center AI Insights API \_|\_ Customer Experience Insights \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Customer Experience Insights
Reference
Send feedback
Contact Center AI Insights API
Stay organized with collections
Save and categorize content based on your preferences.
REST Resource: v1alpha1.projects.locations
REST Resource: v1alpha1.projects.locations.analysisRules
REST Resource: v1alpha1.projects.locations.assessmentRules
REST Resource: v1alpha1.projects.locations.authorizedViewSets
REST Resource:
v1alpha1.projects.locations.authorizedViewSets.authorizedViews
REST Resource:
v1alpha1.projects.locations.authorizedViewSets.authorizedViews.conversations
REST Resource:
v1alpha1.projects.locations.authorizedViewSets.authorizedViews.conversations.analyses
REST Resource:
v1alpha1.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments
REST Resource:
v1alpha1.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.notes
REST Resource:
v1alpha1.projects.locations.authorizedViewSets.authorizedViews.conversations.feedbackLabels
REST Resource:
v1alpha1.projects.locations.authorizedViewSets.authorizedViews.operations
REST Resource: v1alpha1.projects.locations.conversations
REST Resource: v1alpha1.projects.locations.conversations.analyses
REST Resource: v1alpha1.projects.locations.conversations.assessments
REST Resource: v1alpha1.projects.locations.conversations.assessments.notes
REST Resource: v1alpha1.projects.locations.conversations.feedbackLabels
REST Resource: v1alpha1.projects.locations.datasets
REST Resource: v1alpha1.projects.locations.datasets.conversations
REST Resource: v1alpha1.projects.locations.datasets.conversations.analyses
REST Resource:
v1alpha1.projects.locations.datasets.conversations.feedbackLabels
REST Resource: v1alpha1.projects.locations.datasets.insightsdata
REST Resource: v1alpha1.projects.locations.encryptionSpec
REST Resource: v1alpha1.projects.locations.insightsdata
REST Resource: v1alpha1.projects.locations.issueModels
REST Resource: v1alpha1.projects.locations.issueModels.issues
REST Resource: v1alpha1.projects.locations.operations
REST Resource: v1alpha1.projects.locations.phraseMatchers
REST Resource: v1alpha1.projects.locations.qaQuestionTags
REST Resource: v1alpha1.projects.locations.qaScorecards
REST Resource: v1alpha1.projects.locations.qaScorecards.revisions
REST Resource:
v1alpha1.projects.locations.qaScorecards.revisions.qaQuestions
REST Resource: v1alpha1.projects.locations.views
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.analysisRules
REST Resource: v1.projects.locations.assessmentRules
REST Resource: v1.projects.locations.authorizedViewSets
REST Resource: v1.projects.locations.authorizedViewSets.authorizedViews
REST Resource:
v1.projects.locations.authorizedViewSets.authorizedViews.conversations
REST Resource:
v1.projects.locations.authorizedViewSets.authorizedViews.conversations.analyses
REST Resource:
v1.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments
REST Resource:
v1.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.notes
REST Resource:
v1.projects.locations.authorizedViewSets.authorizedViews.conversations.feedbackLabels
REST Resource:
v1.projects.locations.authorizedViewSets.authorizedViews.operations
REST Resource: v1.projects.locations.conversations
REST Resource: v1.projects.locations.conversations.analyses
REST Resource: v1.projects.locations.conversations.assessments
REST Resource: v1.projects.locations.conversations.assessments.notes
REST Resource: v1.projects.locations.conversations.feedbackLabels
REST Resource: v1.projects.locations.datasets
REST Resource: v1.projects.locations.datasets.conversations
REST Resource: v1.projects.locations.datasets.conversations.analyses
REST Resource: v1.projects.locations.datasets.conversations.feedbackLabels
REST Resource: v1.projects.locations.datasets.insightsdata
REST Resource: v1.projects.locations.encryptionSpec
REST Resource: v1.projects.locations.insightsdata
REST Resource: v1.projects.locations.issueModels
REST Resource: v1.projects.locations.issueModels.issues
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.phraseMatchers
REST Resource: v1.projects.locations.qaQuestionTags
REST Resource: v1.projects.locations.qaScorecards
REST Resource: v1.projects.locations.qaScorecards.revisions
REST Resource: v1.projects.locations.qaScorecards.revisions.qaQuestions
REST Resource: v1.projects.locations.views
Service: contactcenterinsights.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://contactcenterinsights.googleapis.com/$discovery/rest?version=v1
https://contactcenterinsights.googleapis.com/$discovery/rest?version=v1alpha1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoints and all URIs below are relative to these service endpoints:
https://contactcenterinsights.googleapis.com
https://asia-northeast1-contactcenterinsights.googleapis.com
https://asia-northeast3-contactcenterinsights.googleapis.com
https://asia-south1-contactcenterinsights.googleapis.com
https://asia-southeast1-contactcenterinsights.googleapis.com
https://asia-southeast2-contactcenterinsights.googleapis.com
https://australia-southeast1-contactcenterinsights.googleapis.com
https://europe-west1-contactcenterinsights.googleapis.com
https://europe-west2-contactcenterinsights.googleapis.com
https://europe-west3-contactcenterinsights.googleapis.com
https://europe-west4-contactcenterinsights.googleapis.com
https://europe-west6-contactcenterinsights.googleapis.com
https://me-west1-contactcenterinsights.googleapis.com
https://northamerica-northeast1-contactcenterinsights.googleapis.com
https://northamerica-northeast2-contactcenterinsights.googleapis.com
https://us-east1-contactcenterinsights.googleapis.com
https://us-east7-contactcenterinsights.googleapis.com
https://us-west1-contactcenterinsights.googleapis.com
REST Resource: v1alpha1.projects.locations
Methods
bulkDeleteFeedbackLabels
POST /v1alpha1/{parent=projects/*/locations/*}:bulkDeleteFeedbackLabels
Delete feedback labels in bulk using a filter.
bulkDownloadFeedbackLabels
POST /v1alpha1/{parent=projects/*/locations/*}:bulkDownloadFeedbackLabels
Download feedback labels in bulk from an external source.
bulkUploadFeedbackLabels
POST /v1alpha1/{parent=projects/*/locations/*}:bulkUploadFeedbackLabels
Upload feedback labels from an external source in bulk.
getEncryptionSpec
GET /v1alpha1/{name=projects/*/locations/*/encryptionSpec}
Gets location-level encryption key specification.
getSettings
GET /v1alpha1/{name=projects/*/locations/*/settings}
Gets project-level settings.
listAllFeedbackLabels
GET /v1alpha1/{parent=projects/*/locations/*}:listAllFeedbackLabels
List all feedback labels by project number.
queryMetrics
POST /v1alpha1/{location=projects/*/locations/*}:queryMetrics
Query metrics.
queryPerformanceOverview
POST /v1alpha1/{parent=projects/*/locations/*}:queryPerformanceOverview
Generates a summary of predefined performance metrics for a set of conversations.
updateSettings
PATCH /v1alpha1/{settings.name=projects/*/locations/*/settings}
Updates project-level settings.
REST Resource: v1alpha1.projects.locations.analysisRules
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*}/analysisRules
Creates a analysis rule.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/analysisRules/*}
Deletes a analysis rule.
get
GET /v1alpha1/{name=projects/*/locations/*/analysisRules/*}
Get a analysis rule.
list
GET /v1alpha1/{parent=projects/*/locations/*}/analysisRules
Lists analysis rules.
patch
PATCH /v1alpha1/{analysisRule.name=projects/*/locations/*/analysisRules/*}
Updates a analysis rule.
REST Resource: v1alpha1.projects.locations.assessmentRules
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*}/assessmentRules
Creates an assessment rule.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/assessmentRules/*}
Deletes an assessment rule.
get
GET /v1alpha1/{name=projects/*/locations/*/assessmentRules/*}
Get an assessment rule.
list
GET /v1alpha1/{parent=projects/*/locations/*}/assessmentRules
Lists assessment rules.
patch
PATCH /v1alpha1/{assessmentRule.name=projects/*/locations/*/assessmentRules/*}
Updates an assessment rule.
REST Resource: v1alpha1.projects.locations.authorizedViewSets
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*}/authorizedViewSets
Create AuthorizedViewSet
delete
DELETE /v1alpha1/{name=projects/*/locations/*/authorizedViewSets/*}
Deletes an AuthorizedViewSet.
get
GET /v1alpha1/{name=projects/*/locations/*/authorizedViewSets/*}
Get AuthorizedViewSet
list
GET /v1alpha1/{parent=projects/*/locations/*}/authorizedViewSets
List AuthorizedViewSets
patch
PATCH /v1alpha1/{authorizedViewSet.name=projects/*/locations/*/authorizedViewSets/*}
Updates an AuthorizedViewSet.
REST Resource: v1alpha1.projects.locations.authorizedViewSets.authorizedViews
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*/authorizedViewSets/*}/authorizedViews
Create AuthorizedView
delete
DELETE /v1alpha1/{name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*}
Deletes an AuthorizedView.
get
GET /v1alpha1/{name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*}
Get AuthorizedView
list
GET /v1alpha1/{parent=projects/*/locations/*/authorizedViewSets/*}/authorizedViews
List AuthorizedViewSets
patch
PATCH /v1alpha1/{authorizedView.name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*}
Updates an AuthorizedView.
queryMetrics
POST /v1alpha1/{location=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*}:queryMetrics
Query metrics.
queryPerformanceOverview
POST /v1alpha1/{parent=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*}:queryPerformanceOverview
Generates a summary of predefined performance metrics for a set of conversations.
search
GET /v1alpha1/{parent=projects/*/locations/*/authorizedViewSets/*}/authorizedViews:search
SearchAuthorizedViewSets
REST Resource: v1alpha1.projects.locations.authorizedViewSets.authorizedViews.conversations
Methods
bulkAnalyze
POST /v1alpha1/{parent=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*}/conversations:bulkAnalyze
Analyzes multiple conversations in a single request.
calculateStats
GET /v1alpha1/{location=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*}/conversations:calculateStats
Gets conversation statistics.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*}
Deletes a conversation.
get
GET /v1alpha1/{name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*}
Gets a conversation.
list
GET /v1alpha1/{parent=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*}/conversations
Lists conversations.
REST Resource: v1alpha1.projects.locations.authorizedViewSets.authorizedViews.conversations.analyses
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*}/analyses
Creates an analysis.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*/analyses/*}
Deletes an analysis.
get
GET /v1alpha1/{name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*/analyses/*}
Gets an analysis.
list
GET /v1alpha1/{parent=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*}/analyses
Lists analyses.
REST Resource: v1alpha1.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments
Methods
appeal
POST /v1alpha1/{name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*/assessments/*}:appeal
Appeal an Assessment.
create
POST /v1alpha1/{parent=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*}/assessments
Create Assessment.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*/assessments/*}
Delete an Assessment.
finalize
POST /v1alpha1/{name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*/assessments/*}:finalize
Finalize an Assessment.
get
GET /v1alpha1/{name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*/assessments/*}
Get Assessment.
list
GET /v1alpha1/{parent=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*}/assessments
List Assessments.
publish
POST /v1alpha1/{name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*/assessments/*}:publish
Publish an Assessment.
REST Resource: v1alpha1.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.notes
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*/assessments/*}/notes
Create Note.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*/assessments/*/notes/*}
Deletes a Note.
list
GET /v1alpha1/{parent=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*/assessments/*}/notes
List Notes.
patch
PATCH /v1alpha1/{note.name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*/assessments/*/notes/*}
Update Note.
REST Resource: v1alpha1.projects.locations.authorizedViewSets.authorizedViews.conversations.feedbackLabels
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*}/feedbackLabels
Create feedback label.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*/feedbackLabels/*}
Delete feedback label.
get
GET /v1alpha1/{name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*/feedbackLabels/*}
Get feedback label.
list
GET /v1alpha1/{parent=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*}/feedbackLabels
List feedback labels.
patch
PATCH /v1alpha1/{feedbackLabel.name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*/feedbackLabels/*}
Update feedback label.
REST Resource: v1alpha1.projects.locations.authorizedViewSets.authorizedViews.operations
Methods
cancel
POST /v1alpha1/{name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
get
GET /v1alpha1/{name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1alpha1/{name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1alpha1.projects.locations.conversations
Methods
bulkAnalyze
POST /v1alpha1/{parent=projects/*/locations/*}/conversations:bulkAnalyze
Analyzes multiple conversations in a single request.
bulkDelete
POST /v1alpha1/{parent=projects/*/locations/*}/conversations:bulkDelete
Deletes multiple conversations in a single request.
calculateStats
GET /v1alpha1/{location=projects/*/locations/*}/conversations:calculateStats
Gets conversation statistics.
create
POST /v1alpha1/{parent=projects/*/locations/*}/conversations
Creates a conversation.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/conversations/*}
Deletes a conversation.
get
GET /v1alpha1/{name=projects/*/locations/*/conversations/*}
Gets a conversation.
ingest
POST /v1alpha1/{parent=projects/*/locations/*}/conversations:ingest
Imports conversations and processes them according to the user's configuration.
list
GET /v1alpha1/{parent=projects/*/locations/*}/conversations
Lists conversations.
patch
PATCH /v1alpha1/{conversation.name=projects/*/locations/*/conversations/*}
Updates a conversation.
upload
POST /v1alpha1/{parent=projects/*/locations/*}/conversations:upload
Create a long-running conversation upload operation.
REST Resource: v1alpha1.projects.locations.conversations.analyses
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*/conversations/*}/analyses
Creates an analysis.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/conversations/*/analyses/*}
Deletes an analysis.
get
GET /v1alpha1/{name=projects/*/locations/*/conversations/*/analyses/*}
Gets an analysis.
list
GET /v1alpha1/{parent=projects/*/locations/*/conversations/*}/analyses
Lists analyses.
REST Resource: v1alpha1.projects.locations.conversations.assessments
Methods
appeal
POST /v1alpha1/{name=projects/*/locations/*/conversations/*/assessments/*}:appeal
Appeal an Assessment.
create
POST /v1alpha1/{parent=projects/*/locations/*/conversations/*}/assessments
Create Assessment.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/conversations/*/assessments/*}
Delete an Assessment.
finalize
POST /v1alpha1/{name=projects/*/locations/*/conversations/*/assessments/*}:finalize
Finalize an Assessment.
get
GET /v1alpha1/{name=projects/*/locations/*/conversations/*/assessments/*}
Get Assessment.
list
GET /v1alpha1/{parent=projects/*/locations/*/conversations/*}/assessments
List Assessments.
publish
POST /v1alpha1/{name=projects/*/locations/*/conversations/*/assessments/*}:publish
Publish an Assessment.
REST Resource: v1alpha1.projects.locations.conversations.assessments.notes
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*/conversations/*/assessments/*}/notes
Create Note.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/conversations/*/assessments/*/notes/*}
Deletes a Note.
list
GET /v1alpha1/{parent=projects/*/locations/*/conversations/*/assessments/*}/notes
List Notes.
patch
PATCH /v1alpha1/{note.name=projects/*/locations/*/conversations/*/assessments/*/notes/*}
Update Note.
REST Resource: v1alpha1.projects.locations.conversations.feedbackLabels
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*/conversations/*}/feedbackLabels
Create feedback label.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/conversations/*/feedbackLabels/*}
Delete feedback label.
get
GET /v1alpha1/{name=projects/*/locations/*/conversations/*/feedbackLabels/*}
Get feedback label.
list
GET /v1alpha1/{parent=projects/*/locations/*/conversations/*}/feedbackLabels
List feedback labels.
patch
PATCH /v1alpha1/{feedbackLabel.name=projects/*/locations/*/conversations/*/feedbackLabels/*}
Update feedback label.
REST Resource: v1alpha1.projects.locations.datasets
Methods
bulkDeleteFeedbackLabels
POST /v1alpha1/{parent=projects/*/locations/*/datasets/*}:bulkDeleteFeedbackLabels
Delete feedback labels in bulk using a filter.
bulkDownloadFeedbackLabels
POST /v1alpha1/{parent=projects/*/locations/*/datasets/*}:bulkDownloadFeedbackLabels
Download feedback labels in bulk from an external source.
bulkUploadFeedbackLabels
POST /v1alpha1/{parent=projects/*/locations/*/datasets/*}:bulkUploadFeedbackLabels
Upload feedback labels from an external source in bulk.
listAllFeedbackLabels
GET /v1alpha1/{parent=projects/*/locations/*/datasets/*}:listAllFeedbackLabels
List all feedback labels by project number.
REST Resource: v1alpha1.projects.locations.datasets.conversations
Methods
bulkAnalyze
POST /v1alpha1/{parent=projects/*/locations/*/datasets/*}/conversations:bulkAnalyze
Analyzes multiple conversations in a single request.
bulkDelete
POST /v1alpha1/{parent=projects/*/locations/*/datasets/*}/conversations:bulkDelete
Deletes multiple conversations in a single request.
calculateStats
POST /v1alpha1/{location=projects/*/locations/*/datasets/*}/conversations:calculateStats
Gets conversation statistics.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/datasets/*/conversations/*}
Deletes a conversation.
get
GET /v1alpha1/{name=projects/*/locations/*/datasets/*/conversations/*}
Gets a conversation.
ingest
POST /v1alpha1/{parent=projects/*/locations/*/datasets/*}/conversations:ingest
Imports conversations and processes them according to the user's configuration.
list
GET /v1alpha1/{parent=projects/*/locations/*/datasets/*}/conversations
Lists conversations.
REST Resource: v1alpha1.projects.locations.datasets.conversations.analyses
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*/datasets/*/conversations/*}/analyses
Creates an analysis.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/datasets/*/conversations/*/analyses/*}
Deletes an analysis.
get
GET /v1alpha1/{name=projects/*/locations/*/datasets/*/conversations/*/analyses/*}
Gets an analysis.
list
GET /v1alpha1/{parent=projects/*/locations/*/datasets/*/conversations/*}/analyses
Lists analyses.
REST Resource: v1alpha1.projects.locations.datasets.conversations.feedbackLabels
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*/datasets/*/conversations/*}/feedbackLabels
Create feedback label.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/datasets/*/conversations/*/feedbackLabels/*}
Delete feedback label.
get
GET /v1alpha1/{name=projects/*/locations/*/datasets/*/conversations/*/feedbackLabels/*}
Get feedback label.
list
GET /v1alpha1/{parent=projects/*/locations/*/datasets/*/conversations/*}/feedbackLabels
List feedback labels.
patch
PATCH /v1alpha1/{feedbackLabel.name=projects/*/locations/*/datasets/*/conversations/*/feedbackLabels/*}
Update feedback label.
REST Resource: v1alpha1.projects.locations.datasets.insightsdata
Methods
export
POST /v1alpha1/{parent=projects/*/locations/*/datasets/*}/insightsdata:export
Export insights data to a destination defined in the request body.
REST Resource: v1alpha1.projects.locations.encryptionSpec
Methods
initialize
POST /v1alpha1/{encryptionSpec.name=projects/*/locations/*/encryptionSpec}:initialize
Initializes a location-level encryption key specification.
REST Resource: v1alpha1.projects.locations.insightsdata
Methods
export
POST /v1alpha1/{parent=projects/*/locations/*}/insightsdata:export
Export insights data to a destination defined in the request body.
REST Resource: v1alpha1.projects.locations.issueModels
Methods
calculateIssueModelStats
GET /v1alpha1/{issueModel=projects/*/locations/*/issueModels/*}:calculateIssueModelStats
Gets an issue model's statistics.
create
POST /v1alpha1/{parent=projects/*/locations/*}/issueModels
Creates an issue model.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/issueModels/*}
Deletes an issue model.
deploy
POST /v1alpha1/{name=projects/*/locations/*/issueModels/*}:deploy
Deploys an issue model.
export
POST /v1alpha1/{name=projects/*/locations/*/issueModels/*}:export
Exports an issue model to the provided destination.
get
GET /v1alpha1/{name=projects/*/locations/*/issueModels/*}
Gets an issue model.
import
POST /v1alpha1/{parent=projects/*/locations/*}/issueModels:import
Imports an issue model from a Cloud Storage bucket.
list
GET /v1alpha1/{parent=projects/*/locations/*}/issueModels
Lists issue models.
patch
PATCH /v1alpha1/{issueModel.name=projects/*/locations/*/issueModels/*}
Updates an issue model.
undeploy
POST /v1alpha1/{name=projects/*/locations/*/issueModels/*}:undeploy
Undeploys an issue model.
REST Resource: v1alpha1.projects.locations.issueModels.issues
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*/issueModels/*}/issues
Creates an issue.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/issueModels/*/issues/*}
Deletes an issue.
get
GET /v1alpha1/{name=projects/*/locations/*/issueModels/*/issues/*}
Gets an issue.
list
GET /v1alpha1/{parent=projects/*/locations/*/issueModels/*}/issues
Lists issues.
patch
PATCH /v1alpha1/{issue.name=projects/*/locations/*/issueModels/*/issues/*}
Updates an issue.
REST Resource: v1alpha1.projects.locations.operations
Methods
cancel
POST /v1alpha1/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
get
GET /v1alpha1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1alpha1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1alpha1.projects.locations.phraseMatchers
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*}/phraseMatchers
Creates a phrase matcher.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/phraseMatchers/*}
Deletes a phrase matcher.
get
GET /v1alpha1/{name=projects/*/locations/*/phraseMatchers/*}
Gets a phrase matcher.
list
GET /v1alpha1/{parent=projects/*/locations/*}/phraseMatchers
Lists phrase matchers.
patch
PATCH /v1alpha1/{phraseMatcher.name=projects/*/locations/*/phraseMatchers/*}
Updates a phrase matcher.
REST Resource: v1alpha1.projects.locations.qaQuestionTags
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*}/qaQuestionTags
Creates a QaQuestionTag.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/qaQuestionTags/*}
Deletes a QaQuestionTag.
get
GET /v1alpha1/{name=projects/*/locations/*/qaQuestionTags/*}
Gets a QaQuestionTag.
list
GET /v1alpha1/{parent=projects/*/locations/*}/qaQuestionTags
Lists the question tags.
patch
PATCH /v1alpha1/{qaQuestionTag.name=projects/*/locations/*/qaQuestionTags/*}
Updates a QaQuestionTag.
REST Resource: v1alpha1.projects.locations.qaScorecards
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*}/qaScorecards
Create a QaScorecard.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/qaScorecards/*}
Deletes a QaScorecard.
get
GET /v1alpha1/{name=projects/*/locations/*/qaScorecards/*}
Gets a QaScorecard.
list
GET /v1alpha1/{parent=projects/*/locations/*}/qaScorecards
Lists QaScorecards.
patch
PATCH /v1alpha1/{qaScorecard.name=projects/*/locations/*/qaScorecards/*}
Updates a QaScorecard.
REST Resource: v1alpha1.projects.locations.qaScorecards.revisions
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*/qaScorecards/*}/revisions
Creates a QaScorecardRevision.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/qaScorecards/*/revisions/*}
Deletes a QaScorecardRevision.
deploy
POST /v1alpha1/{name=projects/*/locations/*/qaScorecards/*/revisions/*}:deploy
Deploy a QaScorecardRevision.
get
GET /v1alpha1/{name=projects/*/locations/*/qaScorecards/*/revisions/*}
Gets a QaScorecardRevision.
list
GET /v1alpha1/{parent=projects/*/locations/*/qaScorecards/*}/revisions
Lists all revisions under the parent QaScorecard.
tuneQaScorecardRevision
POST /v1alpha1/{parent=projects/*/locations/*/qaScorecards/*/revisions/*}:tuneQaScorecardRevision
Fine tune one or more QaModels.
undeploy
POST /v1alpha1/{name=projects/*/locations/*/qaScorecards/*/revisions/*}:undeploy
Undeploy a QaScorecardRevision.
REST Resource: v1alpha1.projects.locations.qaScorecards.revisions.qaQuestions
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*/qaScorecards/*/revisions/*}/qaQuestions
Create a QaQuestion.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/qaScorecards/*/revisions/*/qaQuestions/*}
Deletes a QaQuestion.
get
GET /v1alpha1/{name=projects/*/locations/*/qaScorecards/*/revisions/*/qaQuestions/*}
Gets a QaQuestion.
list
GET /v1alpha1/{parent=projects/*/locations/*/qaScorecards/*/revisions/*}/qaQuestions
Lists QaQuestions.
patch
PATCH /v1alpha1/{qaQuestion.name=projects/*/locations/*/qaScorecards/*/revisions/*/qaQuestions/*}
Updates a QaQuestion.
REST Resource: v1alpha1.projects.locations.views
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*}/views
Creates a view.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/views/*}
Deletes a view.
get
GET /v1alpha1/{name=projects/*/locations/*/views/*}
Gets a view.
list
GET /v1alpha1/{parent=projects/*/locations/*}/views
Lists views.
patch
PATCH /v1alpha1/{view.name=projects/*/locations/*/views/*}
Updates a view.
REST Resource: v1.projects.locations
Methods
bulkDeleteFeedbackLabels
POST /v1/{parent=projects/*/locations/*}:bulkDeleteFeedbackLabels
Delete feedback labels in bulk using a filter.
bulkDownloadFeedbackLabels
POST /v1/{parent=projects/*/locations/*}:bulkDownloadFeedbackLabels
Download feedback labels in bulk from an external source.
bulkUploadFeedbackLabels
POST /v1/{parent=projects/*/locations/*}:bulkUploadFeedbackLabels
Upload feedback labels from an external source in bulk.
getEncryptionSpec
GET /v1/{name=projects/*/locations/*/encryptionSpec}
Gets location-level encryption key specification.
getSettings
GET /v1/{name=projects/*/locations/*/settings}
Gets project-level settings.
listAllFeedbackLabels
GET /v1/{parent=projects/*/locations/*}:listAllFeedbackLabels
List all feedback labels by project number.
queryMetrics
POST /v1/{location=projects/*/locations/*}:queryMetrics
Query metrics.
queryPerformanceOverview
POST /v1/{parent=projects/*/locations/*}:queryPerformanceOverview
Generates a summary of predefined performance metrics for a set of conversations.
updateSettings
PATCH /v1/{settings.name=projects/*/locations/*/settings}
Updates project-level settings.
REST Resource: v1.projects.locations.analysisRules
Methods
create
POST /v1/{parent=projects/*/locations/*}/analysisRules
Creates a analysis rule.
delete
DELETE /v1/{name=projects/*/locations/*/analysisRules/*}
Deletes a analysis rule.
get
GET /v1/{name=projects/*/locations/*/analysisRules/*}
Get a analysis rule.
list
GET /v1/{parent=projects/*/locations/*}/analysisRules
Lists analysis rules.
patch
PATCH /v1/{analysisRule.name=projects/*/locations/*/analysisRules/*}
Updates a analysis rule.
REST Resource: v1.projects.locations.assessmentRules
Methods
create
POST /v1/{parent=projects/*/locations/*}/assessmentRules
Creates an assessment rule.
delete
DELETE /v1/{name=projects/*/locations/*/assessmentRules/*}
Deletes an assessment rule.
get
GET /v1/{name=projects/*/locations/*/assessmentRules/*}
Get an assessment rule.
list
GET /v1/{parent=projects/*/locations/*}/assessmentRules
Lists assessment rules.
patch
PATCH /v1/{assessmentRule.name=projects/*/locations/*/assessmentRules/*}
Updates an assessment rule.
REST Resource: v1.projects.locations.authorizedViewSets
Methods
create
POST /v1/{parent=projects/*/locations/*}/authorizedViewSets
Create AuthorizedViewSet
delete
DELETE /v1/{name=projects/*/locations/*/authorizedViewSets/*}
Deletes an AuthorizedViewSet.
get
GET /v1/{name=projects/*/locations/*/authorizedViewSets/*}
Get AuthorizedViewSet
list
GET /v1/{parent=projects/*/locations/*}/authorizedViewSets
List AuthorizedViewSets
patch
PATCH /v1/{authorizedViewSet.name=projects/*/locations/*/authorizedViewSets/*}
Updates an AuthorizedViewSet.
REST Resource: v1.projects.locations.authorizedViewSets.authorizedViews
Methods
create
POST /v1/{parent=projects/*/locations/*/authorizedViewSets/*}/authorizedViews
Create AuthorizedView
delete
DELETE /v1/{name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*}
Deletes an AuthorizedView.
get
GET /v1/{name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*}
Get AuthorizedView
list
GET /v1/{parent=projects/*/locations/*/authorizedViewSets/*}/authorizedViews
List AuthorizedViewSets
patch
PATCH /v1/{authorizedView.name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*}
Updates an AuthorizedView.
queryMetrics
POST /v1/{location=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*}:queryMetrics
Query metrics.
queryPerformanceOverview
POST /v1/{parent=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*}:queryPerformanceOverview
Generates a summary of predefined performance metrics for a set of conversations.
search
GET /v1/{parent=projects/*/locations/*/authorizedViewSets/*}/authorizedViews:search
SearchAuthorizedViewSets
REST Resource: v1.projects.locations.authorizedViewSets.authorizedViews.conversations
Methods
bulkAnalyze
POST /v1/{parent=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*}/conversations:bulkAnalyze
Analyzes multiple conversations in a single request.
calculateStats
GET /v1/{location=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*}/conversations:calculateStats
Gets conversation statistics.
delete
DELETE /v1/{name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*}
Deletes a conversation.
get
GET /v1/{name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*}
Gets a conversation.
list
GET /v1/{parent=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*}/conversations
Lists conversations.
REST Resource: v1.projects.locations.authorizedViewSets.authorizedViews.conversations.analyses
Methods
create
POST /v1/{parent=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*}/analyses
Creates an analysis.
delete
DELETE /v1/{name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*/analyses/*}
Deletes an analysis.
get
GET /v1/{name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*/analyses/*}
Gets an analysis.
list
GET /v1/{parent=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*}/analyses
Lists analyses.
REST Resource: v1.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments
Methods
appeal
POST /v1/{name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*/assessments/*}:appeal
Appeal an Assessment.
create
POST /v1/{parent=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*}/assessments
Create Assessment.
delete
DELETE /v1/{name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*/assessments/*}
Delete an Assessment.
finalize
POST /v1/{name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*/assessments/*}:finalize
Finalize an Assessment.
get
GET /v1/{name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*/assessments/*}
Get Assessment.
list
GET /v1/{parent=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*}/assessments
List Assessments.
publish
POST /v1/{name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*/assessments/*}:publish
Publish an Assessment.
REST Resource: v1.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.notes
Methods
create
POST /v1/{parent=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*/assessments/*}/notes
Create Note.
delete
DELETE /v1/{name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*/assessments/*/notes/*}
Deletes a Note.
list
GET /v1/{parent=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*/assessments/*}/notes
List Notes.
patch
PATCH /v1/{note.name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*/assessments/*/notes/*}
Update Note.
REST Resource: v1.projects.locations.authorizedViewSets.authorizedViews.conversations.feedbackLabels
Methods
create
POST /v1/{parent=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*}/feedbackLabels
Create feedback label.
delete
DELETE /v1/{name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*/feedbackLabels/*}
Delete feedback label.
get
GET /v1/{name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*/feedbackLabels/*}
Get feedback label.
list
GET /v1/{parent=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*}/feedbackLabels
List feedback labels.
patch
PATCH /v1/{feedbackLabel.name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/conversations/*/feedbackLabels/*}
Update feedback label.
REST Resource: v1.projects.locations.authorizedViewSets.authorizedViews.operations
Methods
cancel
POST /v1/{name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
get
GET /v1/{name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1/{name=projects/*/locations/*/authorizedViewSets/*/authorizedViews/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1.projects.locations.conversations
Methods
bulkAnalyze
POST /v1/{parent=projects/*/locations/*}/conversations:bulkAnalyze
Analyzes multiple conversations in a single request.
bulkDelete
POST /v1/{parent=projects/*/locations/*}/conversations:bulkDelete
Deletes multiple conversations in a single request.
calculateStats
GET /v1/{location=projects/*/locations/*}/conversations:calculateStats
Gets conversation statistics.
create
POST /v1/{parent=projects/*/locations/*}/conversations
Creates a conversation.
delete
DELETE /v1/{name=projects/*/locations/*/conversations/*}
Deletes a conversation.
get
GET /v1/{name=projects/*/locations/*/conversations/*}
Gets a conversation.
ingest
POST /v1/{parent=projects/*/locations/*}/conversations:ingest
Imports conversations and processes them according to the user's configuration.
list
GET /v1/{parent=projects/*/locations/*}/conversations
Lists conversations.
patch
PATCH /v1/{conversation.name=projects/*/locations/*/conversations/*}
Updates a conversation.
upload
POST /v1/{parent=projects/*/locations/*}/conversations:upload
Create a long-running conversation upload operation.
REST Resource: v1.projects.locations.conversations.analyses
Methods
create
POST /v1/{parent=projects/*/locations/*/conversations/*}/analyses
Creates an analysis.
delete
DELETE /v1/{name=projects/*/locations/*/conversations/*/analyses/*}
Deletes an analysis.
get
GET /v1/{name=projects/*/locations/*/conversations/*/analyses/*}
Gets an analysis.
list
GET /v1/{parent=projects/*/locations/*/conversations/*}/analyses
Lists analyses.
REST Resource: v1.projects.locations.conversations.assessments
Methods
appeal
POST /v1/{name=projects/*/locations/*/conversations/*/assessments/*}:appeal
Appeal an Assessment.
create
POST /v1/{parent=projects/*/locations/*/conversations/*}/assessments
Create Assessment.
delete
DELETE /v1/{name=projects/*/locations/*/conversations/*/assessments/*}
Delete an Assessment.
finalize
POST /v1/{name=projects/*/locations/*/conversations/*/assessments/*}:finalize
Finalize an Assessment.
get
GET /v1/{name=projects/*/locations/*/conversations/*/assessments/*}
Get Assessment.
list
GET /v1/{parent=projects/*/locations/*/conversations/*}/assessments
List Assessments.
publish
POST /v1/{name=projects/*/locations/*/conversations/*/assessments/*}:publish
Publish an Assessment.
REST Resource: v1.projects.locations.conversations.assessments.notes
Methods
create
POST /v1/{parent=projects/*/locations/*/conversations/*/assessments/*}/notes
Create Note.
delete
DELETE /v1/{name=projects/*/locations/*/conversations/*/assessments/*/notes/*}
Deletes a Note.
list
GET /v1/{parent=projects/*/locations/*/conversations/*/assessments/*}/notes
List Notes.
patch
PATCH /v1/{note.name=projects/*/locations/*/conversations/*/assessments/*/notes/*}
Update Note.
REST Resource: v1.projects.locations.conversations.feedbackLabels
Methods
create
POST /v1/{parent=projects/*/locations/*/conversations/*}/feedbackLabels
Create feedback label.
delete
DELETE /v1/{name=projects/*/locations/*/conversations/*/feedbackLabels/*}
Delete feedback label.
get
GET /v1/{name=projects/*/locations/*/conversations/*/feedbackLabels/*}
Get feedback label.
list
GET /v1/{parent=projects/*/locations/*/conversations/*}/feedbackLabels
List feedback labels.
patch
PATCH /v1/{feedbackLabel.name=projects/*/locations/*/conversations/*/feedbackLabels/*}
Update feedback label.
REST Resource: v1.projects.locations.datasets
Methods
bulkDeleteFeedbackLabels
POST /v1/{parent=projects/*/locations/*/datasets/*}:bulkDeleteFeedbackLabels
Delete feedback labels in bulk using a filter.
bulkDownloadFeedbackLabels
POST /v1/{parent=projects/*/locations/*/datasets/*}:bulkDownloadFeedbackLabels
Download feedback labels in bulk from an external source.
bulkUploadFeedbackLabels
POST /v1/{parent=projects/*/locations/*/datasets/*}:bulkUploadFeedbackLabels
Upload feedback labels from an external source in bulk.
listAllFeedbackLabels
GET /v1/{parent=projects/*/locations/*/datasets/*}:listAllFeedbackLabels
List all feedback labels by project number.
REST Resource: v1.projects.locations.datasets.conversations
Methods
bulkAnalyze
POST /v1/{parent=projects/*/locations/*/datasets/*}/conversations:bulkAnalyze
Analyzes multiple conversations in a single request.
bulkDelete
POST /v1/{parent=projects/*/locations/*/datasets/*}/conversations:bulkDelete
Deletes multiple conversations in a single request.
calculateStats
POST /v1/{location=projects/*/locations/*/datasets/*}/conversations:calculateStats
Gets conversation statistics.
delete
DELETE /v1/{name=projects/*/locations/*/datasets/*/conversations/*}
Deletes a conversation.
get
GET /v1/{name=projects/*/locations/*/datasets/*/conversations/*}
Gets a conversation.
ingest
POST /v1/{parent=projects/*/locations/*/datasets/*}/conversations:ingest
Imports conversations and processes them according to the user's configuration.
list
GET /v1/{parent=projects/*/locations/*/datasets/*}/conversations
Lists conversations.
REST Resource: v1.projects.locations.datasets.conversations.analyses
Methods
create
POST /v1/{parent=projects/*/locations/*/datasets/*/conversations/*}/analyses
Creates an analysis.
delete
DELETE /v1/{name=projects/*/locations/*/datasets/*/conversations/*/analyses/*}
Deletes an analysis.
get
GET /v1/{name=projects/*/locations/*/datasets/*/conversations/*/analyses/*}
Gets an analysis.
list
GET /v1/{parent=projects/*/locations/*/datasets/*/conversations/*}/analyses
Lists analyses.
REST Resource: v1.projects.locations.datasets.conversations.feedbackLabels
Methods
create
POST /v1/{parent=projects/*/locations/*/datasets/*/conversations/*}/feedbackLabels
Create feedback label.
delete
DELETE /v1/{name=projects/*/locations/*/datasets/*/conversations/*/feedbackLabels/*}
Delete feedback label.
get
GET /v1/{name=projects/*/locations/*/datasets/*/conversations/*/feedbackLabels/*}
Get feedback label.
list
GET /v1/{parent=projects/*/locations/*/datasets/*/conversations/*}/feedbackLabels
List feedback labels.
patch
PATCH /v1/{feedbackLabel.name=projects/*/locations/*/datasets/*/conversations/*/feedbackLabels/*}
Update feedback label.
REST Resource: v1.projects.locations.datasets.insightsdata
Methods
export
POST /v1/{parent=projects/*/locations/*/datasets/*}/insightsdata:export
Export insights data to a destination defined in the request body.
REST Resource: v1.projects.locations.encryptionSpec
Methods
initialize
POST /v1/{encryptionSpec.name=projects/*/locations/*/encryptionSpec}:initialize
Initializes a location-level encryption key specification.
REST Resource: v1.projects.locations.insightsdata
Methods
export
POST /v1/{parent=projects/*/locations/*}/insightsdata:export
Export insights data to a destination defined in the request body.
REST Resource: v1.projects.locations.issueModels
Methods
calculateIssueModelStats
GET /v1/{issueModel=projects/*/locations/*/issueModels/*}:calculateIssueModelStats
Gets an issue model's statistics.
create
POST /v1/{parent=projects/*/locations/*}/issueModels
Creates an issue model.
delete
DELETE /v1/{name=projects/*/locations/*/issueModels/*}
Deletes an issue model.
deploy
POST /v1/{name=projects/*/locations/*/issueModels/*}:deploy
Deploys an issue model.
export
POST /v1/{name=projects/*/locations/*/issueModels/*}:export
Exports an issue model to the provided destination.
get
GET /v1/{name=projects/*/locations/*/issueModels/*}
Gets an issue model.
import
POST /v1/{parent=projects/*/locations/*}/issueModels:import
Imports an issue model from a Cloud Storage bucket.
list
GET /v1/{parent=projects/*/locations/*}/issueModels
Lists issue models.
patch
PATCH /v1/{issueModel.name=projects/*/locations/*/issueModels/*}
Updates an issue model.
undeploy
POST /v1/{name=projects/*/locations/*/issueModels/*}:undeploy
Undeploys an issue model.
REST Resource: v1.projects.locations.issueModels.issues
Methods
create
POST /v1/{parent=projects/*/locations/*/issueModels/*}/issues
Creates an issue.
delete
DELETE /v1/{name=projects/*/locations/*/issueModels/*/issues/*}
Deletes an issue.
get
GET /v1/{name=projects/*/locations/*/issueModels/*/issues/*}
Gets an issue.
list
GET /v1/{parent=projects/*/locations/*/issueModels/*}/issues
Lists issues.
patch
PATCH /v1/{issue.name=projects/*/locations/*/issueModels/*/issues/*}
Updates an issue.
REST Resource: v1.projects.locations.operations
Methods
cancel
POST /v1/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
get
GET /v1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1.projects.locations.phraseMatchers
Methods
create
POST /v1/{parent=projects/*/locations/*}/phraseMatchers
Creates a phrase matcher.
delete
DELETE /v1/{name=projects/*/locations/*/phraseMatchers/*}
Deletes a phrase matcher.
get
GET /v1/{name=projects/*/locations/*/phraseMatchers/*}
Gets a phrase matcher.
list
GET /v1/{parent=projects/*/locations/*}/phraseMatchers
Lists phrase matchers.
patch
PATCH /v1/{phraseMatcher.name=projects/*/locations/*/phraseMatchers/*}
Updates a phrase matcher.
REST Resource: v1.projects.locations.qaQuestionTags
Methods
create
POST /v1/{parent=projects/*/locations/*}/qaQuestionTags
Creates a QaQuestionTag.
delete
DELETE /v1/{name=projects/*/locations/*/qaQuestionTags/*}
Deletes a QaQuestionTag.
get
GET /v1/{name=projects/*/locations/*/qaQuestionTags/*}
Gets a QaQuestionTag.
list
GET /v1/{parent=projects/*/locations/*}/qaQuestionTags
Lists the question tags.
patch
PATCH /v1/{qaQuestionTag.name=projects/*/locations/*/qaQuestionTags/*}
Updates a QaQuestionTag.
REST Resource: v1.projects.locations.qaScorecards
Methods
create
POST /v1/{parent=projects/*/locations/*}/qaScorecards
Create a QaScorecard.
delete
DELETE /v1/{name=projects/*/locations/*/qaScorecards/*}
Deletes a QaScorecard.
get
GET /v1/{name=projects/*/locations/*/qaScorecards/*}
Gets a QaScorecard.
list
GET /v1/{parent=projects/*/locations/*}/qaScorecards
Lists QaScorecards.
patch
PATCH /v1/{qaScorecard.name=projects/*/locations/*/qaScorecards/*}
Updates a QaScorecard.
REST Resource: v1.projects.locations.qaScorecards.revisions
Methods
create
POST /v1/{parent=projects/*/locations/*/qaScorecards/*}/revisions
Creates a QaScorecardRevision.
delete
DELETE /v1/{name=projects/*/locations/*/qaScorecards/*/revisions/*}
Deletes a QaScorecardRevision.
deploy
POST /v1/{name=projects/*/locations/*/qaScorecards/*/revisions/*}:deploy
Deploy a QaScorecardRevision.
get
GET /v1/{name=projects/*/locations/*/qaScorecards/*/revisions/*}
Gets a QaScorecardRevision.
list
GET /v1/{parent=projects/*/locations/*/qaScorecards/*}/revisions
Lists all revisions under the parent QaScorecard.
tuneQaScorecardRevision
POST /v1/{parent=projects/*/locations/*/qaScorecards/*/revisions/*}:tuneQaScorecardRevision
Fine tune one or more QaModels.
undeploy
POST /v1/{name=projects/*/locations/*/qaScorecards/*/revisions/*}:undeploy
Undeploy a QaScorecardRevision.
REST Resource: v1.projects.locations.qaScorecards.revisions.qaQuestions
Methods
create
POST /v1/{parent=projects/*/locations/*/qaScorecards/*/revisions/*}/qaQuestions
Create a QaQuestion.
delete
DELETE /v1/{name=projects/*/locations/*/qaScorecards/*/revisions/*/qaQuestions/*}
Deletes a QaQuestion.
get
GET /v1/{name=projects/*/locations/*/qaScorecards/*/revisions/*/qaQuestions/*}
Gets a QaQuestion.
list
GET /v1/{parent=projects/*/locations/*/qaScorecards/*/revisions/*}/qaQuestions
Lists QaQuestions.
patch
PATCH /v1/{qaQuestion.name=projects/*/locations/*/qaScorecards/*/revisions/*/qaQuestions/*}
Updates a QaQuestion.
REST Resource: v1.projects.locations.views
Methods
create
POST /v1/{parent=projects/*/locations/*}/views
Creates a view.
delete
DELETE /v1/{name=projects/*/locations/*/views/*}
Deletes a view.
get
GET /v1/{name=projects/*/locations/*/views/*}
Gets a view.
list
GET /v1/{parent=projects/*/locations/*}/views
Lists views.
patch
PATCH /v1/{view.name=projects/*/locations/*/views/*}
Updates a view.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-30 UTC."],[],[]]
