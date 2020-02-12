#!/usr/bin/env bash

docs="docs"
public="public"
build="build"

gitbook build "$docs" "$public"
ln -s "../$docs/assets" "$public/assets"
cp "$build/index.html" "$public"

