!function(){"use strict";const t=require("x-ray")(),e=[{id:"@id",title:"a.titlelink",link:"a.titlelink@href"}];module.exports=async(i,r,n,o)=>{if(!("string"==typeof i&&i.length>0))throw new TypeError("The user id argument is a required, non-empty string.");"number"==typeof r&&r>=1||(r=1),"number"==typeof n&&n>=1||(n=1);const a=`https://news.ycombinator.com/favorites?id=${i.toLowerCase()}&p=${n}`;return await t(a,"tr.athing",e).paginate("a.morelink@href").limit(r)}}();
