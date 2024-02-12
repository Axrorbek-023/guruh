var arr = ['Abdullo','Nasibillo','Shoxruxmirzo','Iskandar','Muhammadrizo','Azimjon','Yaminjonov Muhammadaliy','Axrorbek','Ilmidin','Sirojiddin','Suxrob','Abdulboriy','Azizbek','Munavvar','Sultonbek','Jahongir','Safarov Ali','Muhammadkarim','Muhammad Ali']
var arr2 = ['https://static.vecteezy.com/system/resources/thumbnails/025/284/015/small_2x/close-up-growing-beautiful-forest-in-glass-ball-and-flying-butterflies-in-nature-outdoors-spring-season-concept-generative-ai-photo.jpg','https://wallpapers.com/images/featured/720p-nature-background-te0eo4yinuw49nh1.jpg','https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80"']  

var elList = document.querySelector('.list')

for(var i = 0; i<arr.length; i++){

    var newLi = document.createElement('li')

    newLi.innerHTML = `
    <div class="box">
    <img src="${arr2[i % arr2.length]}">
    <h2>${arr[i]}</h2>
    <p>Front-End o'quvchisi</p>
    <button type="button" class="btn btn-primary">send</button>
    </div>
    `

    elList.appendChild(newLi)
}