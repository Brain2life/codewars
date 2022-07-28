#!/bin/sh

dad_years_old=$1
son_years_old=$2

years_ago=$((2 * $2 - $1))

if ((years_ago < 0)); then
	    years_ago=$((-years_ago))
fi

echo $years_ago

exit
