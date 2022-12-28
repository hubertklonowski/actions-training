FROM alpine:latest
RUN apk add --update --no-cache github-cli
RUN apk add --update --no-cache bash
ENTRYPOINT ["bash", "-c", "#!/bin/bash git clone -q $2 && cd $3 log=$(gh issue list -A $1) echo 'logs=$log' >> $GITHUB_OUTPUT exit 0"]
