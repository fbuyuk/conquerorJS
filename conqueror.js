let ifade="2+5+9*3/3-1";
let dizi=[...ifade];
let sonuc=null;

for (let i=0;i<dizi.length;i++){
    if (dizi[i] !="+" && dizi[i] !="-" && dizi[i] !="*" && dizi[i] !="/" && !parseInt(dizi[i])){
        console.log("String ifade");
        return;
    }

    if (dizi[i]=="+" && parseInt(dizi[i-1]) && parseInt(dizi[i+1])){
        if (sonuc!=null){
            sonuc=sonuc+parseInt(dizi[i+1]);
        }else{
            sonuc=parseInt(dizi[i-1])+parseInt(dizi[i+1]);
        }
    }else if (dizi[i]=="-" && parseInt(dizi[i-1]) && parseInt(dizi[i+1])){
        if (sonuc!=null){
            sonuc=sonuc-parseInt(dizi[i+1]);
        }else{
            sonuc=parseInt(dizi[i-1])-parseInt(dizi[i+1]);
        }
    }else if (dizi[i]=="*" && parseInt(dizi[i-1]) && parseInt(dizi[i+1])){
        if (sonuc!=null){
            sonuc=sonuc*parseInt(dizi[i+1]);
        }else{
            sonuc=parseInt(dizi[i-1])*parseInt(dizi[i+1]);
        }
    }else if (dizi[i]=="/" && parseInt(dizi[i-1]) && parseInt(dizi[i+1])){
        if (sonuc!=null){
            sonuc=sonuc/parseInt(dizi[i+1]);
        }else{
            sonuc=parseInt(dizi[i-1])/parseInt(dizi[i+1]);
        }
    }
}

setTimeout(()=>{
    console.log(sonuc)
},1000)
