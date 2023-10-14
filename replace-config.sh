#!/bin/bash

# set -x

placeholder="$1"
value="$2"
directory="$3"

if [ $value == "source" ]; then
    echo "$placeholder was empty"
    exit 1
else
    echo "$placeholder was not empty $value"
fi

if [ "$(uname)" == "Darwin" ]; then
    sed -i '' "s/${placeholder}/${value}/" _config.yml
else
    sed -i "s/${placeholder}/${value}/" _config.yml
fi

find "$directory" -type f -print0 | while IFS= read -r -d $'\0' file; do
    echo $file
    if [ "$(uname)" == "Darwin" ]; then
        sed -i '' "s;${placeholder};${value};" $file
    else
        sed -i "s;${placeholder};${value};" "$file"
    fi
    echo "Replaced ${placeholder} with ${value} in ${directory}"
done
