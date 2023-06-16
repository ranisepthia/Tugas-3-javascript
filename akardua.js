let i = -3
if(i<0){
    console.log("Tidak bisa bilangan kurang dari nol")
}else if(i%2==1){
    console.log("Tidak bisa bilangan bilangan ganjil")
}else{
    let result = Math.sqrt(i)
    console.log(`Akar pangkat 2 dari ${i} adalah ${result}`);
}