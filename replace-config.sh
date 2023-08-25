#!/bin/bash

placeholder="$1"
value="$2"

if [ "$(uname)" == "Darwin" ]; then
    sed -i '' "s/${placeholder}/${value}/" _config.yml
else
    sed -i "s/${placeholder}/${value}/" _config.yml
fi
