# actions-training
![Action 6](https://github.com/hubertklonowski/actions-training/actions/workflows/action-6.yml/badge.svg)

GENERAL REQUIREMENTS:
- secrets are stored in GitHub Action Secrets for the repository

1. Action that comments "Good day" when opening the pull request and comments "Goodbye" when closing it. The opening message is sent using GitHub CLI and the closing message is sent using GitHub Script.
The goodbye message that is meant to be displayed is stored in a file in the repository, it needs to be loaded first.

2. Action that builds frontend application checks lint and runs tests, uploads test report artifact, it detects if PR contains changes in the frontend folder, if it is any other folder it doesn't trigger. 
After a successful build, it sends an email with "We got it!!!!" to hubert.klonowski@predicagroup.com and uploads the artifact to GitHub Packages.
Email attachments have links to the uploaded GitHub package and links to the report file.
Report file artifacts should have 10 days of the retention period.
All jobs are dependent on each other (needs)!

3. Action that downloads artifact from GitHub packages and deploys it to Azure. 
Deployment is done as if no resources existed before, so we create each resource from scratch at the end we display the status message and we log out from Azure.

4. Action that is triggered by HTTP and upon trigger it displays basic information about the repository. Each piece of information should be described. The more the better!
The action takes in parameters of contexts that we want to use to display info about, e.g. repository/certain user/issues. Parameters are optional, if there is no parameters then we display all the info we have.

5. Action that closes the issue if its name is inside the pull request that is closing. 
Before closing the issue it comments on it that the issue has been solved and it passes the link to the pull request.

6. JavaScript action that calls the weather API for New York when someone adds a "weather" tag to their pull request's tags and displays it in form of a comment

7. Action that controls deployment to Azure. dev will deploy to the development environment upon closing the PR, pre-prod will deploy to pre-prod and prod will deploy to prod upon manual confirmation (in form of a comment on PR - "LGTM" by the author)

8. Container action that logs issues created by user to file called issues.txt and uploads this artifact.
It logs the content, author, and time of logging for user passed as input (workflow caller, workflow_dispatch)

9. Action deploys code to dev and pre-prod environments on Azure in parallel.
It uses the matrix to define the environment and custom action for deployment that is used for each matrix element.
The action runs only on the self-hosted runner.

10. Composite action that uses few different shells to greet and say goodbye to the user served as input.
