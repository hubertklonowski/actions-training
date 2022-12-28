#!/bin/bash
git clone -q $INPUT_REPO_GIT && cd $INPUT_REPO_NAME
issues=$(gh issue list -A $INPUT_ISSUE_AUTHOR)
echo $issues
exit 0