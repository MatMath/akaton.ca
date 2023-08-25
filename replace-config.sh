#!/bin/bash

placeholder="$1"
value="$2"
directory="$3"

if [ -z "$directory" ]; then
    if [ "$(uname)" == "Darwin" ]; then
        sed -i '' "s/${placeholder}/${value}/" _config.yml
    else
        sed -i "s/${placeholder}/${value}/" _config.yml
    fi
    exit 0
else 
    find "$directory" -type f -print0 | while IFS= read -r -d $'\0' file; do
        echo $file
        if [ "$(uname)" == "Darwin" ]; then
            sed -i '' "s/${placeholder}/${value}/" $file
        else
            sed -i "s/${placeholder}/${value}/" $file
        fi
        echo "Replaced ${placeholder} with ${value} in ${directory}"
    done
fi
