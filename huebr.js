(function(doc) {
    changeImages();
    window.onload = function (){
        changeImages();
    }
})(document);

function changeImages(){
    alert('here' + new Date);
    var images = document.querySelectorAll('img');
    images.forEach(function(img) {
        img.src='http://img.ibxk.com.br/2013/8/materias/1649968641515049.jpg?w=700&h=393&mode=crop';
    });
}