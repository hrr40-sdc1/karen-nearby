#!/bin/bash

echo Curl down images
  # curl https://picsum.photos/id/[1-1411]/300/300 -o '#1.jpg'

for i in {1..10}
do
  curl -o $i.png  https://lorempixel.com/g/150/150/nature/$i/
  echo "$i"
done
