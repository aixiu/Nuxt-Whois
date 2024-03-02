// br.com,cn.com,de.com,eu.com,gb.com,gb.net,gr.com,hu.com,in.net,no.com,qc.com,ru.com,sa.com,se.com,se.net,uk.com,uk.net,us.com,uy.com,za.com,jpn.com,web.com,com,za.net,net,eu.org,za.org,org,llyw.cymru,gov.scot,gov.wales,edu,gov,int,e164.arpa,arpa,aero,asia,biz,cat,coop,info,jobs,mobi,museum,name,post,pro,tel,travel,xxx,ac,ae,af,ag,ai,am,ar,as,priv.at,at,au,aw,ax,be,bf,bg,bh,bi,bj,bm,bn,bo,br,by,bw,bz,co.ca,ca,cc,cd,ch,ci,cl,cm,edu.cn,cn,uk.co,co,cr,cx,cz,de,dk,dm,do,dz,ec,ee,eu,fi,fj,fm,fo,fr,gd,ge,gf,gg,gh,gi,gl,gp,gq,gs,gy,hk,hm,hn,hr,ht,hu,id,ie,il,im,in,io,iq,ir,is,it,je,jp,ke,kg,ki,kn,kr,kw,ky,kz,la,lb,lc,li,lk,ls,lt,lu,lv,ly,ma,md,me,mg,mk,ml,mm,mn,mq,mr,ms,mt,mu,mw,mx,my,mz,na,nc,nf,ng,nl,no,nu,nz,om,pe,pf,pk,co.pl,pl,pm,pr,ps,pt,pw,qa,re,ro,rs,ac.ru,edu.ru,com.ru,msk.ru,net.ru,nov.ru,org.ru,pp.ru,spb.ru,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sk,sl,sm,sn,so,ss,st,msk.su,nov.su,spb.su,su,sx,sy,tc,td,tf,tg,th,tk,tl,tm,tn,to,tr,tv,tw,tz,biz.ua,co.ua,pp.ua,ua,ug,ac.uk,gov.uk,uk,fed.us,us,uy,uz,vc,ve,vg,vu,wf,ws,yt,ac.za,co.za,gov.za,net.za,org.za,web.za,zm,xn--2scrj9c,xn--3e0b707e,xn--3hcrj9c,xn--45br5cyl,xn--45brj9c,xn--4dbrk0ce,xn--80ao21a,xn--90a3ac,xn--90ae,xn--90ais,xn--clchc0ea0b2g2a9gcd,xn--d1alf,xn--e1a4c,xn--fiqs8s,xn--fiqz9s,xn--fpcrj9c3d,xn--fzc2c9e2c,xn--gecrj9c,xn--h2breg3eve,xn--h2brj9c8c,xn--h2brj9c,xn--j1amh,xn--j6w193g,xn--kprw13d,xn--kpry57d,xn--lgbbat1ad8j,xn--mgb9awbf,xn--mgba3a4f16a,xn--mgbaam7a8h,xn--mgbah1a3hjkrd,xn--mgbbh1a71e,xn--mgbbh1a,xn--mgberp4a5d4ar,xn--mgbgu82a,xn--mgbtx2b,xn--mgbx4cd0ab,xn--node,xn--o3cw4h,xn--ogbpf8fl,xn--p1ai,xn--pgbs0dh,xn--q7ce6a,xn--qxa6a,xn--rvc1e0am3e,xn--s9brj9c,xn--wgbh1c,xn--wgbl6a,xn--xkc2al3hye2a,xn--xkc2dl3a5ee0h,xn--y9a3aq,xn--yfro4i67o,xn--ygbi2ammx

export const SupportedTLDs = new Set(["br.com", "cn.com", "de.com", "eu.com", "gb.com", "gb.net", "gr.com", "hu.com", "in.net", "no.com", "qc.com", "ru.com", "sa.com", "se.com", "se.net", "uk.com", "uk.net", "us.com", "uy.com", "za.com", "jpn.com", "web.com", "com", "za.net", "net", "eu.org", "za.org", "org", "llyw.cymru", "gov.scot", "gov.wales", "edu", "gov", "int", "e164.arpa", "arpa", "aero", "asia", "biz", "cat", "coop", "info", "jobs", "mobi", "museum", "name", "post", "pro", "tel", "travel", "xxx", "ac", "ae", "af", "ag", "ai", "am", "ar", "as", "priv.at", "at", "au", "aw", "ax", "be", "bf", "bg", "bh", "bi", "bj", "bm", "bn", "bo", "br", "by", "bw", "bz", "co.ca", "ca", "cc", "cd", "ch", "ci", "cl", "cm", "edu.cn", "cn", "uk.co", "co", "cr", "cx", "cz", "de", "dk", "dm", "do", "dz", "ec", "ee", "eu", "fi", "fj", "fm", "fo", "fr", "gd", "ge", "gf", "gg", "gh", "gi", "gl", "gp", "gq", "gs", "gy", "hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "im", "in", "io", "iq", "ir", "is", "it", "je", "jp", "ke", "kg", "ki", "kn", "kr", "kw", "ky", "kz", "la", "lb", "lc", "li", "lk", "ls", "lt", "lu", "lv", "ly", "ma", "md", "me", "mg", "mk", "ml", "mm", "mn", "mq", "mr", "ms", "mt", "mu", "mw", "mx", "my", "mz", "na", "nc", "nf", "ng", "nl", "no", "nu", "nz", "om", "pe", "pf", "pk", "co.pl", "pl", "pm", "pr", "ps", "pt", "pw", "qa", "re", "ro", "rs", "ac.ru", "edu.ru", "com.ru", "msk.ru", "net.ru", "nov.ru", "org.ru", "pp.ru", "spb.ru", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sg", "sh", "si", "sk", "sl", "sm", "sn", "so", "ss", "st", "msk.su", "nov.su", "spb.su", "su", "sx", "sy", "tc", "td", "tf", "tg", "th", "tk", "tl", "tm", "tn", "to", "tr", "tv", "tw", "tz", "biz.ua", "co.ua", "pp.ua", "ua", "ug", "ac.uk", "gov.uk", "uk", "fed.us", "us", "uy", "uz", "vc", "ve", "vg", "vu", "wf", "ws", "yt", "ac.za", "co.za", "gov.za", "net.za", "org.za", "web.za", "zm", "xn--2scrj9c", "xn--3e0b707e", "xn--3hcrj9c", "xn--45br5cyl", "xn--45brj9c", "xn--4dbrk0ce", "xn--80ao21a", "xn--90a3ac", "xn--90ae", "xn--90ais", "xn--clchc0ea0b2g2a9gcd", "xn--d1alf", "xn--e1a4c", "xn--fiqs8s", "xn--fiqz9s", "xn--fpcrj9c3d", "xn--fzc2c9e2c", "xn--gecrj9c", "xn--h2breg3eve", "xn--h2brj9c8c", "xn--h2brj9c", "xn--j1amh", "xn--j6w193g", "xn--kprw13d", "xn--kpry57d", "xn--lgbbat1ad8j", "xn--mgb9awbf", "xn--mgba3a4f16a", "xn--mgbaam7a8h", "xn--mgbah1a3hjkrd", "xn--mgbbh1a71e", "xn--mgbbh1a", "xn--mgberp4a5d4ar", "xn--mgbgu82a", "xn--mgbtx2b", "xn--mgbx4cd0ab", "xn--node", "xn--o3cw4h", "xn--ogbpf8fl", "xn--p1ai", "xn--pgbs0dh", "xn--q7ce6a", "xn--qxa6a", "xn--rvc1e0am3e", "xn--s9brj9c", "xn--wgbh1c", "xn--wgbl6a", "xn--xkc2al3hye2a", "xn--xkc2dl3a5ee0h", "xn--y9a3aq", "xn--yfro4i67o", "xn--ygbi2ammx"]);



