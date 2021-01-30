#!/usr/bin/env bash

docs="docs"
public="public"
build="build"

gitbook build "$docs" "$public"
ln -s "../$docs/assets" "$public/assets"
cp "$build/index.html" "$public"
cp "$build/favicon.ico" "$public/gitbook/images"
cp "$build/apple-touch-icon-precomposed-152.png" "$public/gitbook/images"
sed -i 's/headers:{"Access-Control-Expose-Headers":"X-Current-Location"},/&complete:alertNotFound,/' public/gitbook/theme.js