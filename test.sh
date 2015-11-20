#!/usr/bin/env bash

export PACKAGE_DIRS='packages'

if [ "$PORT" ]; then
  meteor test-packages packages/app --port $PORT
else
   meteor test-packages packages/app
fi
