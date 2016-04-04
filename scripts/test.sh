#!/usr/bin/env bash

set -e
set -o pipefail

pwd
ls

source ~/.nvm/nvm.sh
nvm use ${NODE_VERSION}


if [[ ${TRAVIS_OS_NAME} == "linux" ]]; then
  sudo xvfb-run --auto-servernum --server-num=1 -s "-ac -screen 0 1280x1024x24" `which node` test/simple-shader.js
else
  npm test
fi
