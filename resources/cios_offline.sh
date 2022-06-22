#!/usr/bin/env bash
#i don't know what that's for but it's going there anyways
#On Windows, you can use ModMii to get cIOS wads
Sharpii_DL="https://sketchmaster2001.github.io/RC24_Patcher/Sharpii"
#System/Architecture Detector
case $(uname -m),$(uname) in
 	x86_64,Darwin|arm64,Darwin)
 		printf "*Cannot gurantee this will work on Mac"
 		sys="macOS-x64";;
	x86_64,*)
		sys="linux-x64";;
        aarch64,*)
		sys="linux-arm64";;
        *,*)
		sys="linux-arm";;
  	x86_32,*)
        	printf "The x86_32 architecture is not supported by Sharpii."
    		exit;;
esac

download_ios () {
	./Sharpii nusd -ios ${1} -v ${2} -wad -o ios/IOS${1}-64-v${2}.wad
}
# || [ -f "sharpii($sys)" ] doesnt work so i have to repeat this
mv "sharpii($sys)" "Sharpii" 2> /dev/null

if ! [ -f "Sharpii" ] #|| [ -f "sharpii($sys)" ]
then #Can we download it?
	if ! command -v curl &> /dev/null # that #! thing at the top helped this work
	then # nope
		echo >&2 $'Cannot find Sharpii nor curl to try download it.\n\nEither install curl with your package manager, or manually download it from '"$Sharpii_DL/sharpii($sys)"' .'
		exit
	else #cool
		curl -f -s -o "Sharpii" "$Sharpii_DL/sharpii($sys)"
	fi
	mv "sharpii($sys)" "Sharpii" 2> /dev/null
fi
chmod +x Sharpii 2> /dev/null
mkdir ios 2> /dev/null
echo "This script is to be able to continue https://wii.guide/cios without a working internet connection on your Wii."
download_ios 57 5918
download_ios 56 5661
download_ios 38 4123
echo "There *should* be an \"ios\" folder in the folder this script this in. Move the 3 WAD files in it to where you have put the d2x-cIOS-installer."

