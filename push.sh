#!/bin/bash

# git remote add github git@github.com:Ohimma/Owww.git
# git remote add gitee  git@gitee.com:ohimma/owww.git
mes=$1

if [ -z $1 ];then
   echo "请输入commit提交信息...."
   exit
else
   echo "git commit -m \"$mes\""
   git add --all .
   git commit -m "$mes"
   git push github master
   git push gitee  master
fi