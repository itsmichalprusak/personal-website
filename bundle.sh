#!/bin/bash

for filename in *.mdx; do
    [ -e "$filename" ] || continue
    echo Processing "$filename"
    echo Creating directory $(basename "$filename" .mdx)
    directory = $(basename "$filename" .mdx)
    mkdir -p $directory
    mv $filename ${directory}/index.mdx
done