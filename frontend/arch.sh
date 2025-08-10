#!/bin/bash

tar -czf am_lang.tar.gz \
  --exclude='.git' \
  --exclude='node_modules' \
  --exclude='*/node_modules' \
  --exclude='dist' \
  --exclude='build' \
  --exclude='tmp' \
  --exclude='*.log' \
  --exclude='am_lang.tar.gz' \
  --exclude='assets' \
  .
