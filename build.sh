#!/usr/bin/env bash

gitbook build docs public
ln -s ../docs/assets public/assets
