---
title: "SolvingMode \_|\_ Route Optimization API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/SolvingMode
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/route-optimization/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/SolvingMode
  title: "SolvingMode \_|\_ Route Optimization API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Route Optimization API
Reference
Send feedback
SolvingMode
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Defines how the solver processes the request, dictating whether it solves the model, validates it, or detects infeasible shipments.
Offers three modes: DEFAULT_SOLVE for solving, VALIDATE_ONLY for validation, and DETECT_SOME_INFEASIBLE_SHIPMENTS for identifying problematic shipments.
In all modes except VALIDATE_ONLY , invalid requests will return an INVALID_REQUEST error, with potential for controlling the number of error messages.
The DETECT_SOME_INFEASIBLE_SHIPMENTS mode focuses on pre-processing infeasibility detection without fully solving the problem.
Defines how the solver should handle the request. In all modes but VALIDATE_ONLY , if the request is invalid, you will receive an INVALID_REQUEST error. See maxValidationErrors to cap the number of errors returned.
Enums
DEFAULT_SOLVE
Solve the model. Warnings may be issued in [OptimizeToursResponse.validation_errors][google.cloud.optimization.v1.OptimizeToursResponse.validation_errors].
VALIDATE_ONLY
Only validates the model without solving it: populates as many OptimizeToursResponse.validation_errors as possible.
DETECT_SOME_INFEASIBLE_SHIPMENTS
Only populates OptimizeToursResponse.validation_errors or OptimizeToursResponse.skipped_shipments , and doesn't actually solve the rest of the request ( status and routes are unset in the response). If infeasibilities in injectedSolutionConstraint routes are detected they are populated in the OptimizeToursResponse.validation_errors field and OptimizeToursResponse.skipped_shipments is left empty.
IMPORTANT : not all infeasible shipments are returned here, but only the ones that are detected as infeasible during preprocessing.
TRANSFORM_AND_RETURN_REQUEST
This mode only works if ShipmentModel.objectives is not empty. The request is not solved. It is only validated and filled with costs corresponding to the given objectives. Also see the documentation of ShipmentModel.objectives . The resulting request is returned as OptimizeToursResponse.processed_request .
Experimental: See https://developers.google.com/maps/tt/route-optimization/experimental/objectives/make-request for more details.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
